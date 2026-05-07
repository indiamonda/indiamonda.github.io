#!/usr/bin/env bash
# Rebuild medvedi.swf from medvedi.original.swf + our patched AS3 sources in
# ./assets. Downloads JPEXS Free Flash Decompiler the first time it runs
# into ./.ffdec/ (gitignored).
#
# Usage:
#   ./rebuild.sh           # re-import patches into medvedi.swf
#   ./rebuild.sh decompile # re-decompile medvedi.original.swf into ./assets
#                          # (use this when you want to start a new patch
#                          #  against a fresh upstream SWF)

set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FFDEC_VERSION="26.0.0"
FFDEC_DIR="${HERE}/.ffdec"
FFDEC_SH="${FFDEC_DIR}/ffdec.sh"
ORIGINAL_SWF="${HERE}/medvedi.original.swf"
PATCHED_SWF="${HERE}/medvedi.swf"
SCRIPTS_DIR="${HERE}/assets"

# --- Java ---------------------------------------------------------------
if ! command -v java >/dev/null 2>&1; then
  if [[ "$(uname)" == "Darwin" ]]; then
    if JH="$(/usr/libexec/java_home -v 1.8 2>/dev/null)"; then
      export JAVA_HOME="${JH}"
      export PATH="${JAVA_HOME}/bin:${PATH}"
    fi
  fi
fi
if ! command -v java >/dev/null 2>&1; then
  echo "rebuild.sh: java not found in PATH (need JDK 8 or newer)." >&2
  exit 1
fi

# --- ffdec download cache ----------------------------------------------
if [[ ! -x "${FFDEC_SH}" ]]; then
  echo ">> downloading JPEXS Free Flash Decompiler v${FFDEC_VERSION} into .ffdec/..."
  TMP="$(mktemp -d)"
  trap 'rm -rf "${TMP}"' EXIT
  curl -fsSL -o "${TMP}/ffdec.zip" \
    "https://github.com/jindrapetrik/jpexs-decompiler/releases/download/version${FFDEC_VERSION}/ffdec_${FFDEC_VERSION}.zip"
  rm -rf "${FFDEC_DIR}"
  mkdir -p "${FFDEC_DIR}"
  unzip -q -o "${TMP}/ffdec.zip" -d "${FFDEC_DIR}"
  chmod +x "${FFDEC_SH}"
fi

# --- subcommands -------------------------------------------------------
case "${1:-import}" in
  decompile)
    echo ">> re-decompiling medvedi.original.swf into assets/..."
    rm -rf "${SCRIPTS_DIR}"
    mkdir -p "${SCRIPTS_DIR}"
    "${FFDEC_SH}" -export script "${SCRIPTS_DIR}" "${ORIGINAL_SWF}"
    echo ">> done. ${SCRIPTS_DIR}/scripts now mirrors the upstream SWF."
    ;;
  import|"")
    if [[ ! -f "${ORIGINAL_SWF}" ]]; then
      echo "rebuild.sh: missing ${ORIGINAL_SWF} (pristine upstream SWF)." >&2
      exit 1
    fi
    if [[ ! -d "${SCRIPTS_DIR}/scripts" ]]; then
      echo "rebuild.sh: ${SCRIPTS_DIR}/scripts not found. Run \`./rebuild.sh decompile\` first." >&2
      exit 1
    fi
    echo ">> importing patched AS3 from assets/scripts into medvedi.swf..."
    "${FFDEC_SH}" -importScript "${ORIGINAL_SWF}" "${PATCHED_SWF}" "${SCRIPTS_DIR}"
    echo ">> done. ${PATCHED_SWF} updated."
    ;;
  *)
    echo "rebuild.sh: unknown subcommand '$1' (expected 'import' or 'decompile')." >&2
    exit 1
    ;;
esac
