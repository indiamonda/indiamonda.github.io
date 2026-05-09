#!/usr/bin/env python3
"""
Download Haunted Dorm Laya assets from haunted-dorm.apps.minigame.vip into q/g/haunted-dorn/.
Run from repo root: python3 scripts/mirror_haunted_dorm.py
"""
from __future__ import annotations

import json
import os
import re
import ssl
import sys
import urllib.request

BASE = "https://haunted-dorm.apps.minigame.vip/"
UA = "Mozilla/5.0 (compatible; JQRG-mirror/1.0; +https://github.com/jimmyqrg/jimmyqrg.github.io)"
ROOT = os.path.join(os.path.dirname(__file__), "..", "q", "g", "haunted-dorn")
BUNDLE = os.path.join(ROOT, "js", "bundle.js")

CTX = ssl.create_default_context()


def fetch_bytes(url: str) -> tuple[int, bytes]:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=CTX, timeout=120) as r:
        return r.status, r.read()


def save(rel: str, data: bytes) -> None:
    path = os.path.join(ROOT, rel.replace("/", os.sep))
    parent = os.path.dirname(path)
    if parent:
        os.makedirs(parent, exist_ok=True)
    with open(path, "wb") as f:
        f.write(data)


def try_fetch(rel: str) -> bool:
    url = BASE + rel.replace(os.sep, "/")
    try:
        code, data = fetch_bytes(url)
        if code == 200 and data:
            save(rel, data)
            return True
    except Exception as e:
        print("FAIL", rel, e, file=sys.stderr)
    return False


def atlas_companion_paths(atlas_rel: str, atlas_json: dict) -> list[str]:
    out = []
    meta = atlas_json.get("meta") or {}
    img = meta.get("image")
    if img:
        d = os.path.dirname(atlas_rel)
        out.append(f"{d}/{img}".replace("//", "/") if d else img)
    return out


def main() -> int:
    ok, fail = 0, 0

    # fileconfig.json
    _, raw = fetch_bytes(BASE + "fileconfig.json")
    cfg = json.loads(raw.decode("utf-8"))
    save("fileconfig.json", raw)
    ok += 1

    for atlas_key in cfg:
        if not atlas_key.endswith(".atlas"):
            continue
        if try_fetch(atlas_key):
            ok += 1
        else:
            fail += 1
            continue
        ap = os.path.join(ROOT, atlas_key.replace("/", os.sep))
        try:
            with open(ap, "r", encoding="utf-8") as f:
                aj = json.load(f)
            for extra in atlas_companion_paths(atlas_key, aj):
                if try_fetch(extra):
                    ok += 1
                else:
                    print("MISS atlas img", extra, file=sys.stderr)
                    fail += 1
        except Exception as e:
            print("BAD atlas", atlas_key, e, file=sys.stderr)
            fail += 1

    # Non-atlas fileconfig entries (skeleton json, etc.)
    for key in cfg:
        if key.endswith(".atlas"):
            continue
        if try_fetch(key):
            ok += 1
        else:
            print("MISS fileconfig", key, file=sys.stderr)
            fail += 1

    extras = [
        "version.json",
        "libs/min/laya.core.min.js",
        "libs/min/laya.ani.min.js",
        "libs/min/laya.ui.min.js",
        "gameAssets/asset/Main.json",
        "gameAssets/asset/config/gameConfig.json",
        "gameAssets/asset/data/mapsData.json",
    ]

    oggs = [
        "BtnDown.ogg",
        "BtnUp.ogg",
        "TCOpen.ogg",
        "at_attack.ogg",
        "bgm.ogg",
        "btn_gameStart.ogg",
        "build_PP.ogg",
        "build_build.ogg",
        "build_die.ogg",
        "build_up.ogg",
        "cc.ogg",
        "ermt_0.ogg",
        "game_fail.ogg",
        "gs.ogg",
        "maopao.ogg",
        "timer.ogg",
        "troll_Wall.ogg",
        "troll_attack.ogg",
        "troll_rage.ogg",
        "troll_up.ogg",
        "weixiu.ogg",
    ]
    for o in oggs:
        extras.append(f"res/sound/{o}")

    ui_names = []
    if os.path.isfile(BUNDLE):
        with open(BUNDLE, "r", encoding="utf-8", errors="ignore") as bf:
            bs = bf.read()
        ui_names = sorted(
            set(re.findall(r"gameAssets/asset/UIJson/Dialogs/[A-Za-z0-9_]+", bs))
        )

    for u in ui_names:
        extras.append(u + ".json")

    prefabs = [
        "AngleSkill",
        "CritUIPrefab",
        "EquipmentItem",
        "ParalysisSkill",
        "RageSkill",
        "equipmentList",
        "halo",
        "headAngel",
        "textBox",
    ]
    for pf in prefabs:
        extras.append(f"gameAssets/asset/Prefabs/{pf}.json")

    for rel in extras:
        if try_fetch(rel):
            ok += 1
        else:
            print("MISS extra", rel, file=sys.stderr)
            fail += 1

    # equipmentData: CDN hosts under /data/; game loads gameAssets/asset/data/equipmentData_<Lang>.json
    for langs in "English Chinese Thai Spanish German French Indonesian Portuguese Vietnamese".split():
        src = f"data/equipmentData_{langs}.json"
        url = BASE + src
        try:
            _, data = fetch_bytes(url)
            dst = f"gameAssets/asset/data/equipmentData_{langs}.json"
            save(dst, data)
            ok += 1
        except Exception as e:
            print("MISS equipment copy", langs, e, file=sys.stderr)
            fail += 1

    # Main.scene is requested by runtime; host only ships Main.json
    main_json = os.path.join(ROOT, "gameAssets", "asset", "Main.json")
    main_scene = os.path.join(ROOT, "gameAssets", "asset", "Main.scene")
    if os.path.isfile(main_json):
        with open(main_json, "rb") as f:
            mj = f.read()
        with open(main_scene, "wb") as f:
            f.write(mj)
        ok += 1

    # Prefabs: engine loads .prefab; CDN stores .json
    for pf in prefabs:
        js_path = os.path.join(ROOT, "gameAssets", "asset", "Prefabs", f"{pf}.json")
        pf_path = os.path.join(ROOT, "gameAssets", "asset", "Prefabs", f"{pf}.prefab")
        if os.path.isfile(js_path):
            with open(js_path, "rb") as f:
                blob = f.read()
            os.makedirs(os.path.dirname(pf_path), exist_ok=True)
            with open(pf_path, "wb") as f:
                f.write(blob)

    # mg_N.sk and player_N.sk under gameAssets/asset/res/Skeleton/
    for i in range(7):
        try_fetch(f"gameAssets/asset/res/Skeleton/mg/mg_{i}.sk")
    for folder, nmax in [("puppet", 6), ("player", 1)]:
        for i in range(nmax):
            try_fetch(f"gameAssets/asset/res/Skeleton/{folder}/player_{i}.sk")

    print(f"mirror_haunted_dorm: wrote under {ROOT} (approx ok={ok}, reported_miss={fail})")
    return 0 if fail == 0 else 0


if __name__ == "__main__":
    raise SystemExit(main())
