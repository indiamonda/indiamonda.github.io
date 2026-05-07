var Module = typeof Module != "undefined" ? Module : {};
if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0
}
Module.expectedDataFileDownloads++;
(function () {
    if (Module["ENVIRONMENT_IS_PTHREAD"]) return;
    var loadPackage = function (metadata) {
        var PACKAGE_PATH = "";
        if (typeof window === "object") {
            PACKAGE_PATH = window["encodeURIComponent"](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/")
        } else if (typeof process === "undefined" && typeof location !== "undefined") {
            PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/")
        }
        var PACKAGE_NAME = "renpy.data";
        var REMOTE_PACKAGE_BASE = "renpy.data";
        if (typeof Module["locateFilePackage"] === "function" && !Module["locateFile"]) {
            Module["locateFile"] = Module["locateFilePackage"];
            err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")
        }
        var REMOTE_PACKAGE_NAME = Module["locateFile"] ? Module["locateFile"](REMOTE_PACKAGE_BASE, "") : REMOTE_PACKAGE_BASE;
        var REMOTE_PACKAGE_SIZE = metadata["remote_package_size"];

        function fetchRemotePackage(packageName, packageSize, callback, errback) {
            if (typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string") {
                require("fs").readFile(packageName, function (err, contents) {
                    if (err) {
                        errback(err)
                    } else {
                        callback(contents.buffer)
                    }
                });
                return
            }
            var xhr = new XMLHttpRequest;
            xhr.open("GET", packageName, true);
            xhr.responseType = "arraybuffer";
            xhr.onprogress = function (event) {
                var url = packageName;
                var size = packageSize;
                if (event.total) size = event.total;
                if (event.loaded) {
                    if (!xhr.addedTotal) {
                        xhr.addedTotal = true;
                        if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
                        Module.dataFileDownloads[url] = {
                            loaded: event.loaded,
                            total: size
                        }
                    } else {
                        Module.dataFileDownloads[url].loaded = event.loaded
                    }
                    var total = 0;
                    var loaded = 0;
                    var num = 0;
                    for (var download in Module.dataFileDownloads) {
                        var data = Module.dataFileDownloads[download];
                        total += data.total;
                        loaded += data.loaded;
                        num++
                    }
                    total = Math.ceil(total * Module.expectedDataFileDownloads / num);
                    if (Module["setStatus"]) Module["setStatus"]("Downloading data... (" + loaded + "/" + total + ")")
                } else if (!Module.dataFileDownloads) {
                    if (Module["setStatus"]) Module["setStatus"]("Downloading data...")
                }
            };
            xhr.onerror = function (event) {
                throw new Error("NetworkError for: " + packageName)
            };
            xhr.onload = function (event) {
                if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || xhr.status == 0 && xhr.response) {
                    var packageData = xhr.response;
                    callback(packageData)
                } else {
                    throw new Error(xhr.statusText + " : " + xhr.responseURL)
                }
            };
            xhr.send(null)
        }

        function handleError(error) {
            console.error("package error:", error)
        }
        var fetchedCallback = null;
        var fetched = Module["getPreloadedPackage"] ? Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;
        if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function (data) {
            if (fetchedCallback) {
                fetchedCallback(data);
                fetchedCallback = null
            } else {
                fetched = data
            }
        }, handleError);

        function runWithFS() {
            function assert(check, msg) {
                if (!check) throw msg + (new Error).stack
            }
            Module["FS_createPath"]("/", "lib", true, true);
            Module["FS_createPath"]("/lib", "python3.11", true, true);
            Module["FS_createPath"]("/lib/python3.11", "asyncio", true, true);
            Module["FS_createPath"]("/lib/python3.11", "certifi", true, true);
            Module["FS_createPath"]("/lib/python3.11", "chardet", true, true);
            Module["FS_createPath"]("/lib/python3.11/chardet", "cli", true, true);
            Module["FS_createPath"]("/lib/python3.11/chardet", "metadata", true, true);
            Module["FS_createPath"]("/lib/python3.11", "collections", true, true);
            Module["FS_createPath"]("/lib/python3.11", "concurrent", true, true);
            Module["FS_createPath"]("/lib/python3.11/concurrent", "futures", true, true);
            Module["FS_createPath"]("/lib/python3.11", "ctypes", true, true);
            Module["FS_createPath"]("/lib/python3.11/ctypes", "macholib", true, true);
            Module["FS_createPath"]("/lib/python3.11", "ecdsa", true, true);
            Module["FS_createPath"]("/lib/python3.11", "email", true, true);
            Module["FS_createPath"]("/lib/python3.11/email", "mime", true, true);
            Module["FS_createPath"]("/lib/python3.11", "encodings", true, true);
            Module["FS_createPath"]("/lib/python3.11", "future", true, true);
            Module["FS_createPath"]("/lib/python3.11/future", "backports", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/backports", "email", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/backports/email", "mime", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/backports", "html", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/backports", "http", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/backports", "test", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/backports", "urllib", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/backports", "xmlrpc", true, true);
            Module["FS_createPath"]("/lib/python3.11/future", "builtins", true, true);
            Module["FS_createPath"]("/lib/python3.11/future", "moves", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/moves", "dbm", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/moves", "html", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/moves", "http", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/moves", "test", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/moves", "tkinter", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/moves", "urllib", true, true);
            Module["FS_createPath"]("/lib/python3.11/future/moves", "xmlrpc", true, true);
            Module["FS_createPath"]("/lib/python3.11/future", "standard_library", true, true);
            Module["FS_createPath"]("/lib/python3.11/future", "tests", true, true);
            Module["FS_createPath"]("/lib/python3.11/future", "types", true, true);
            Module["FS_createPath"]("/lib/python3.11/future", "utils", true, true);
            Module["FS_createPath"]("/lib/python3.11", "html", true, true);
            Module["FS_createPath"]("/lib/python3.11", "http", true, true);
            Module["FS_createPath"]("/lib/python3.11", "idna", true, true);
            Module["FS_createPath"]("/lib/python3.11", "importlib", true, true);
            Module["FS_createPath"]("/lib/python3.11/importlib", "metadata", true, true);
            Module["FS_createPath"]("/lib/python3.11/importlib", "resources", true, true);
            Module["FS_createPath"]("/lib/python3.11", "jnius", true, true);
            Module["FS_createPath"]("/lib/python3.11", "json", true, true);
            Module["FS_createPath"]("/lib/python3.11", "lib-dynload", true, true);
            Module["FS_createPath"]("/lib/python3.11", "logging", true, true);
            Module["FS_createPath"]("/lib/python3.11", "multiprocessing", true, true);
            Module["FS_createPath"]("/lib/python3.11/multiprocessing", "dummy", true, true);
            Module["FS_createPath"]("/lib/python3.11", "ordlookup", true, true);
            Module["FS_createPath"]("/lib/python3.11", "past", true, true);
            Module["FS_createPath"]("/lib/python3.11/past", "builtins", true, true);
            Module["FS_createPath"]("/lib/python3.11/past", "translation", true, true);
            Module["FS_createPath"]("/lib/python3.11/past", "types", true, true);
            Module["FS_createPath"]("/lib/python3.11/past", "utils", true, true);
            Module["FS_createPath"]("/lib/python3.11", "pyasn1", true, true);
            Module["FS_createPath"]("/lib/python3.11/pyasn1", "codec", true, true);
            Module["FS_createPath"]("/lib/python3.11/pyasn1/codec", "ber", true, true);
            Module["FS_createPath"]("/lib/python3.11/pyasn1/codec", "cer", true, true);
            Module["FS_createPath"]("/lib/python3.11/pyasn1/codec", "der", true, true);
            Module["FS_createPath"]("/lib/python3.11/pyasn1/codec", "native", true, true);
            Module["FS_createPath"]("/lib/python3.11/pyasn1", "compat", true, true);
            Module["FS_createPath"]("/lib/python3.11/pyasn1", "type", true, true);
            Module["FS_createPath"]("/lib/python3.11", "pygame_sdl2", true, true);
            Module["FS_createPath"]("/lib/python3.11/pygame_sdl2", "threads", true, true);
            Module["FS_createPath"]("/lib/python3.11", "pyobjus", true, true);
            Module["FS_createPath"]("/lib/python3.11", "re", true, true);
            Module["FS_createPath"]("/lib/python3.11", "requests", true, true);
            Module["FS_createPath"]("/lib/python3.11", "rsa", true, true);
            Module["FS_createPath"]("/lib/python3.11", "urllib", true, true);
            Module["FS_createPath"]("/lib/python3.11", "urllib3", true, true);
            Module["FS_createPath"]("/lib/python3.11/urllib3", "contrib", true, true);
            Module["FS_createPath"]("/lib/python3.11/urllib3/contrib", "_securetransport", true, true);
            Module["FS_createPath"]("/lib/python3.11/urllib3", "util", true, true);
            Module["FS_createPath"]("/lib/python3.11", "websockets", true, true);
            Module["FS_createPath"]("/lib/python3.11/websockets", "extensions", true, true);
            Module["FS_createPath"]("/lib/python3.11/websockets", "legacy", true, true);
            Module["FS_createPath"]("/lib/python3.11/websockets", "sync", true, true);
            Module["FS_createPath"]("/lib/python3.11", "xml", true, true);
            Module["FS_createPath"]("/lib/python3.11/xml", "dom", true, true);
            Module["FS_createPath"]("/lib/python3.11/xml", "etree", true, true);
            Module["FS_createPath"]("/lib/python3.11/xml", "parsers", true, true);
            Module["FS_createPath"]("/lib/python3.11/xml", "sax", true, true);
            Module["FS_createPath"]("/lib/python3.11", "zoneinfo", true, true);

            function DataRequest(start, end, audio) {
                this.start = start;
                this.end = end;
                this.audio = audio
            }
            DataRequest.prototype = {
                requests: {},
                open: function (mode, name) {
                    this.name = name;
                    this.requests[name] = this;
                    Module["addRunDependency"]("fp " + this.name)
                },
                send: function () {},
                onload: function () {
                    var byteArray = this.byteArray.subarray(this.start, this.end);
                    this.finish(byteArray)
                },
                finish: function (byteArray) {
                    var that = this;
                    Module["FS_createDataFile"](this.name, null, byteArray, true, true, true);
                    Module["removeRunDependency"]("fp " + that.name);
                    this.requests[this.name] = null
                }
            };
            var files = metadata["files"];
            for (var i = 0; i < files.length; ++i) {
                new DataRequest(files[i]["start"], files[i]["end"], files[i]["audio"] || 0).open("GET", files[i]["filename"])
            }

            function processPackageData(arrayBuffer) {
                assert(arrayBuffer, "Loading data file failed.");
                assert(arrayBuffer.constructor.name === ArrayBuffer.name, "bad input to processPackageData");
                var byteArray = new Uint8Array(arrayBuffer);
                DataRequest.prototype.byteArray = byteArray;
                var files = metadata["files"];
                for (var i = 0; i < files.length; ++i) {
                    DataRequest.prototype.requests[files[i].filename].onload()
                }
                Module["removeRunDependency"]("datafile_renpy.data")
            }
            Module["addRunDependency"]("datafile_renpy.data");
            if (!Module.preloadResults) Module.preloadResults = {};
            Module.preloadResults[PACKAGE_NAME] = {
                fromCache: false
            };
            if (fetched) {
                processPackageData(fetched);
                fetched = null
            } else {
                fetchedCallback = processPackageData
            }
        }
        if (Module["calledRun"]) {
            runWithFS()
        } else {
            if (!Module["preRun"]) Module["preRun"] = [];
            Module["preRun"].push(runWithFS)
        }
    };
    loadPackage({
        "files": [{
            "filename": "/lib/python3.11/__future__.pyc",
            "start": 0,
            "end": 4906
        }, {
            "filename": "/lib/python3.11/_bootsubprocess.pyc",
            "start": 4906,
            "end": 9366
        }, {
            "filename": "/lib/python3.11/_collections_abc.pyc",
            "start": 9366,
            "end": 60748
        }, {
            "filename": "/lib/python3.11/_compat_pickle.pyc",
            "start": 60748,
            "end": 68256
        }, {
            "filename": "/lib/python3.11/_compression.pyc",
            "start": 68256,
            "end": 76321
        }, {
            "filename": "/lib/python3.11/_markupbase.pyc",
            "start": 76321,
            "end": 90596
        }, {
            "filename": "/lib/python3.11/_osx_support.pyc",
            "start": 90596,
            "end": 110582
        }, {
            "filename": "/lib/python3.11/_py_abc.pyc",
            "start": 110582,
            "end": 118470
        }, {
            "filename": "/lib/python3.11/_pydecimal.pyc",
            "start": 118470,
            "end": 364135
        }, {
            "filename": "/lib/python3.11/_pyio.pyc",
            "start": 364135,
            "end": 484745
        }, {
            "filename": "/lib/python3.11/_sitebuiltins.pyc",
            "start": 484745,
            "end": 490175
        }, {
            "filename": "/lib/python3.11/_strptime.pyc",
            "start": 490175,
            "end": 518286
        }, {
            "filename": "/lib/python3.11/_threading_local.pyc",
            "start": 518286,
            "end": 527498
        }, {
            "filename": "/lib/python3.11/_weakrefset.pyc",
            "start": 527498,
            "end": 540664
        }, {
            "filename": "/lib/python3.11/abc.pyc",
            "start": 540664,
            "end": 549684
        }, {
            "filename": "/lib/python3.11/argparse.pyc",
            "start": 549684,
            "end": 663321
        }, {
            "filename": "/lib/python3.11/ast.pyc",
            "start": 663321,
            "end": 772262
        }, {
            "filename": "/lib/python3.11/asyncio/__init__.pyc",
            "start": 772262,
            "end": 773601
        }, {
            "filename": "/lib/python3.11/asyncio/__main__.pyc",
            "start": 773601,
            "end": 779536
        }, {
            "filename": "/lib/python3.11/asyncio/base_events.pyc",
            "start": 779536,
            "end": 870277
        }, {
            "filename": "/lib/python3.11/asyncio/base_futures.pyc",
            "start": 870277,
            "end": 873671
        }, {
            "filename": "/lib/python3.11/asyncio/base_subprocess.pyc",
            "start": 873671,
            "end": 890240
        }, {
            "filename": "/lib/python3.11/asyncio/base_tasks.pyc",
            "start": 890240,
            "end": 894450
        }, {
            "filename": "/lib/python3.11/asyncio/constants.pyc",
            "start": 894450,
            "end": 895404
        }, {
            "filename": "/lib/python3.11/asyncio/coroutines.pyc",
            "start": 895404,
            "end": 899401
        }, {
            "filename": "/lib/python3.11/asyncio/events.pyc",
            "start": 899401,
            "end": 937420
        }, {
            "filename": "/lib/python3.11/asyncio/exceptions.pyc",
            "start": 937420,
            "end": 941056
        }, {
            "filename": "/lib/python3.11/asyncio/format_helpers.pyc",
            "start": 941056,
            "end": 945186
        }, {
            "filename": "/lib/python3.11/asyncio/futures.pyc",
            "start": 945186,
            "end": 963699
        }, {
            "filename": "/lib/python3.11/asyncio/locks.pyc",
            "start": 963699,
            "end": 992952
        }, {
            "filename": "/lib/python3.11/asyncio/log.pyc",
            "start": 992952,
            "end": 993239
        }, {
            "filename": "/lib/python3.11/asyncio/mixins.pyc",
            "start": 993239,
            "end": 994435
        }, {
            "filename": "/lib/python3.11/asyncio/proactor_events.pyc",
            "start": 994435,
            "end": 1042213
        }, {
            "filename": "/lib/python3.11/asyncio/protocols.pyc",
            "start": 1042213,
            "end": 1051653
        }, {
            "filename": "/lib/python3.11/asyncio/queues.pyc",
            "start": 1051653,
            "end": 1064485
        }, {
            "filename": "/lib/python3.11/asyncio/runners.pyc",
            "start": 1064485,
            "end": 1074773
        }, {
            "filename": "/lib/python3.11/asyncio/selector_events.pyc",
            "start": 1074773,
            "end": 1138842
        }, {
            "filename": "/lib/python3.11/asyncio/sslproto.pyc",
            "start": 1138842,
            "end": 1182869
        }, {
            "filename": "/lib/python3.11/asyncio/staggered.pyc",
            "start": 1182869,
            "end": 1189508
        }, {
            "filename": "/lib/python3.11/asyncio/streams.pyc",
            "start": 1189508,
            "end": 1223314
        }, {
            "filename": "/lib/python3.11/asyncio/subprocess.pyc",
            "start": 1223314,
            "end": 1235981
        }, {
            "filename": "/lib/python3.11/asyncio/taskgroups.pyc",
            "start": 1235981,
            "end": 1243387
        }, {
            "filename": "/lib/python3.11/asyncio/tasks.pyc",
            "start": 1243387,
            "end": 1284545
        }, {
            "filename": "/lib/python3.11/asyncio/threads.pyc",
            "start": 1284545,
            "end": 1285831
        }, {
            "filename": "/lib/python3.11/asyncio/timeouts.pyc",
            "start": 1285831,
            "end": 1293032
        }, {
            "filename": "/lib/python3.11/asyncio/transports.pyc",
            "start": 1293032,
            "end": 1308238
        }, {
            "filename": "/lib/python3.11/asyncio/trsock.pyc",
            "start": 1308238,
            "end": 1313620
        }, {
            "filename": "/lib/python3.11/asyncio/unix_events.pyc",
            "start": 1313620,
            "end": 1387599
        }, {
            "filename": "/lib/python3.11/asyncio/windows_events.pyc",
            "start": 1387599,
            "end": 1433874
        }, {
            "filename": "/lib/python3.11/asyncio/windows_utils.pyc",
            "start": 1433874,
            "end": 1441684
        }, {
            "filename": "/lib/python3.11/base64.pyc",
            "start": 1441684,
            "end": 1470239
        }, {
            "filename": "/lib/python3.11/bisect.pyc",
            "start": 1470239,
            "end": 1473992
        }, {
            "filename": "/lib/python3.11/bz2.pyc",
            "start": 1473992,
            "end": 1490211
        }, {
            "filename": "/lib/python3.11/cProfile.pyc",
            "start": 1490211,
            "end": 1499252
        }, {
            "filename": "/lib/python3.11/calendar.pyc",
            "start": 1499252,
            "end": 1544101
        }, {
            "filename": "/lib/python3.11/certifi/__init__.pyc",
            "start": 1544101,
            "end": 1544386
        }, {
            "filename": "/lib/python3.11/certifi/__main__.pyc",
            "start": 1544386,
            "end": 1545060
        }, {
            "filename": "/lib/python3.11/certifi/cacert.pem",
            "start": 1545060,
            "end": 1842315
        }, {
            "filename": "/lib/python3.11/certifi/core.pyc",
            "start": 1842315,
            "end": 1846042
        }, {
            "filename": "/lib/python3.11/cgi.pyc",
            "start": 1846042,
            "end": 1890169
        }, {
            "filename": "/lib/python3.11/chardet/__init__.pyc",
            "start": 1890169,
            "end": 1895194
        }, {
            "filename": "/lib/python3.11/chardet/big5freq.pyc",
            "start": 1895194,
            "end": 1922341
        }, {
            "filename": "/lib/python3.11/chardet/big5prober.pyc",
            "start": 1922341,
            "end": 1923963
        }, {
            "filename": "/lib/python3.11/chardet/chardistribution.pyc",
            "start": 1923963,
            "end": 1935278
        }, {
            "filename": "/lib/python3.11/chardet/charsetgroupprober.pyc",
            "start": 1935278,
            "end": 1939534
        }, {
            "filename": "/lib/python3.11/chardet/charsetprober.pyc",
            "start": 1939534,
            "end": 1945036
        }, {
            "filename": "/lib/python3.11/chardet/cli/__init__.pyc",
            "start": 1945036,
            "end": 1945183
        }, {
            "filename": "/lib/python3.11/chardet/cli/chardetect.pyc",
            "start": 1945183,
            "end": 1949473
        }, {
            "filename": "/lib/python3.11/chardet/codingstatemachine.pyc",
            "start": 1949473,
            "end": 1953417
        }, {
            "filename": "/lib/python3.11/chardet/codingstatemachinedict.pyc",
            "start": 1953417,
            "end": 1954314
        }, {
            "filename": "/lib/python3.11/chardet/cp949prober.pyc",
            "start": 1954314,
            "end": 1955945
        }, {
            "filename": "/lib/python3.11/chardet/enums.pyc",
            "start": 1955945,
            "end": 1959277
        }, {
            "filename": "/lib/python3.11/chardet/escprober.pyc",
            "start": 1959277,
            "end": 1964131
        }, {
            "filename": "/lib/python3.11/chardet/escsm.pyc",
            "start": 1964131,
            "end": 1976718
        }, {
            "filename": "/lib/python3.11/chardet/eucjpprober.pyc",
            "start": 1976718,
            "end": 1981409
        }, {
            "filename": "/lib/python3.11/chardet/euckrfreq.pyc",
            "start": 1981409,
            "end": 1993439
        }, {
            "filename": "/lib/python3.11/chardet/euckrprober.pyc",
            "start": 1993439,
            "end": 1995062
        }, {
            "filename": "/lib/python3.11/chardet/euctwfreq.pyc",
            "start": 1995062,
            "end": 2022214
        }, {
            "filename": "/lib/python3.11/chardet/euctwprober.pyc",
            "start": 2022214,
            "end": 2023837
        }, {
            "filename": "/lib/python3.11/chardet/gb2312freq.pyc",
            "start": 2023837,
            "end": 2042911
        }, {
            "filename": "/lib/python3.11/chardet/gb2312prober.pyc",
            "start": 2042911,
            "end": 2044549
        }, {
            "filename": "/lib/python3.11/chardet/hebrewprober.pyc",
            "start": 2044549,
            "end": 2050205
        }, {
            "filename": "/lib/python3.11/chardet/jisfreq.pyc",
            "start": 2050205,
            "end": 2072308
        }, {
            "filename": "/lib/python3.11/chardet/johabfreq.pyc",
            "start": 2072308,
            "end": 2156915
        }, {
            "filename": "/lib/python3.11/chardet/johabprober.pyc",
            "start": 2156915,
            "end": 2158544
        }, {
            "filename": "/lib/python3.11/chardet/jpcntx.pyc",
            "start": 2158544,
            "end": 2198806
        }, {
            "filename": "/lib/python3.11/chardet/langbulgarianmodel.pyc",
            "start": 2198806,
            "end": 2284575
        }, {
            "filename": "/lib/python3.11/chardet/langgreekmodel.pyc",
            "start": 2284575,
            "end": 2363766
        }, {
            "filename": "/lib/python3.11/chardet/langhebrewmodel.pyc",
            "start": 2363766,
            "end": 2443719
        }, {
            "filename": "/lib/python3.11/chardet/langhungarianmodel.pyc",
            "start": 2443719,
            "end": 2529442
        }, {
            "filename": "/lib/python3.11/chardet/langrussianmodel.pyc",
            "start": 2529442,
            "end": 2638112
        }, {
            "filename": "/lib/python3.11/chardet/langthaimodel.pyc",
            "start": 2638112,
            "end": 2718243
        }, {
            "filename": "/lib/python3.11/chardet/langturkishmodel.pyc",
            "start": 2718243,
            "end": 2798213
        }, {
            "filename": "/lib/python3.11/chardet/latin1prober.pyc",
            "start": 2798213,
            "end": 2805497
        }, {
            "filename": "/lib/python3.11/chardet/macromanprober.pyc",
            "start": 2805497,
            "end": 2812948
        }, {
            "filename": "/lib/python3.11/chardet/mbcharsetprober.pyc",
            "start": 2812948,
            "end": 2817031
        }, {
            "filename": "/lib/python3.11/chardet/mbcsgroupprober.pyc",
            "start": 2817031,
            "end": 2818967
        }, {
            "filename": "/lib/python3.11/chardet/mbcssm.pyc",
            "start": 2818967,
            "end": 2850643
        }, {
            "filename": "/lib/python3.11/chardet/metadata/__init__.pyc",
            "start": 2850643,
            "end": 2850795
        }, {
            "filename": "/lib/python3.11/chardet/metadata/languages.pyc",
            "start": 2850795,
            "end": 2861547
        }, {
            "filename": "/lib/python3.11/chardet/resultdict.pyc",
            "start": 2861547,
            "end": 2862262
        }, {
            "filename": "/lib/python3.11/chardet/sbcharsetprober.pyc",
            "start": 2862262,
            "end": 2868622
        }, {
            "filename": "/lib/python3.11/chardet/sbcsgroupprober.pyc",
            "start": 2868622,
            "end": 2871508
        }, {
            "filename": "/lib/python3.11/chardet/sjisprober.pyc",
            "start": 2871508,
            "end": 2876304
        }, {
            "filename": "/lib/python3.11/chardet/universaldetector.pyc",
            "start": 2876304,
            "end": 2888743
        }, {
            "filename": "/lib/python3.11/chardet/utf1632prober.pyc",
            "start": 2888743,
            "end": 2899499
        }, {
            "filename": "/lib/python3.11/chardet/utf8prober.pyc",
            "start": 2899499,
            "end": 2902927
        }, {
            "filename": "/lib/python3.11/chardet/version.pyc",
            "start": 2902927,
            "end": 2903377
        }, {
            "filename": "/lib/python3.11/chunk.pyc",
            "start": 2903377,
            "end": 2910830
        }, {
            "filename": "/lib/python3.11/cmd.pyc",
            "start": 2910830,
            "end": 2931475
        }, {
            "filename": "/lib/python3.11/code.pyc",
            "start": 2931475,
            "end": 2945400
        }, {
            "filename": "/lib/python3.11/codecs.pyc",
            "start": 2945400,
            "end": 2989821
        }, {
            "filename": "/lib/python3.11/codeop.pyc",
            "start": 2989821,
            "end": 2997037
        }, {
            "filename": "/lib/python3.11/collections/__init__.pyc",
            "start": 2997037,
            "end": 3075194
        }, {
            "filename": "/lib/python3.11/collections/abc.pyc",
            "start": 3075194,
            "end": 3075483
        }, {
            "filename": "/lib/python3.11/colorsys.pyc",
            "start": 3075483,
            "end": 3080495
        }, {
            "filename": "/lib/python3.11/compileall.pyc",
            "start": 3080495,
            "end": 3102243
        }, {
            "filename": "/lib/python3.11/concurrent/__init__.pyc",
            "start": 3102243,
            "end": 3102389
        }, {
            "filename": "/lib/python3.11/concurrent/futures/__init__.pyc",
            "start": 3102389,
            "end": 3103845
        }, {
            "filename": "/lib/python3.11/concurrent/futures/_base.pyc",
            "start": 3103845,
            "end": 3141197
        }, {
            "filename": "/lib/python3.11/concurrent/futures/process.pyc",
            "start": 3141197,
            "end": 3179263
        }, {
            "filename": "/lib/python3.11/concurrent/futures/thread.pyc",
            "start": 3179263,
            "end": 3190360
        }, {
            "filename": "/lib/python3.11/configparser.pyc",
            "start": 3190360,
            "end": 3262261
        }, {
            "filename": "/lib/python3.11/contextlib.pyc",
            "start": 3262261,
            "end": 3294835
        }, {
            "filename": "/lib/python3.11/contextvars.pyc",
            "start": 3294835,
            "end": 3295127
        }, {
            "filename": "/lib/python3.11/copy.pyc",
            "start": 3295127,
            "end": 3306354
        }, {
            "filename": "/lib/python3.11/copyreg.pyc",
            "start": 3306354,
            "end": 3314590
        }, {
            "filename": "/lib/python3.11/csv.pyc",
            "start": 3314590,
            "end": 3334723
        }, {
            "filename": "/lib/python3.11/ctypes/__init__.pyc",
            "start": 3334723,
            "end": 3361613
        }, {
            "filename": "/lib/python3.11/ctypes/_aix.pyc",
            "start": 3361613,
            "end": 3374854
        }, {
            "filename": "/lib/python3.11/ctypes/_endian.pyc",
            "start": 3374854,
            "end": 3378835
        }, {
            "filename": "/lib/python3.11/ctypes/macholib/__init__.pyc",
            "start": 3378835,
            "end": 3379157
        }, {
            "filename": "/lib/python3.11/ctypes/macholib/dyld.pyc",
            "start": 3379157,
            "end": 3386856
        }, {
            "filename": "/lib/python3.11/ctypes/macholib/dylib.pyc",
            "start": 3386856,
            "end": 3388195
        }, {
            "filename": "/lib/python3.11/ctypes/macholib/framework.pyc",
            "start": 3388195,
            "end": 3389664
        }, {
            "filename": "/lib/python3.11/ctypes/util.pyc",
            "start": 3389664,
            "end": 3408272
        }, {
            "filename": "/lib/python3.11/ctypes/wintypes.pyc",
            "start": 3408272,
            "end": 3416702
        }, {
            "filename": "/lib/python3.11/dataclasses.pyc",
            "start": 3416702,
            "end": 3463700
        }, {
            "filename": "/lib/python3.11/datetime.pyc",
            "start": 3463700,
            "end": 3566038
        }, {
            "filename": "/lib/python3.11/decimal.pyc",
            "start": 3566038,
            "end": 3566574
        }, {
            "filename": "/lib/python3.11/difflib.pyc",
            "start": 3566574,
            "end": 3648593
        }, {
            "filename": "/lib/python3.11/dis.pyc",
            "start": 3648593,
            "end": 3685433
        }, {
            "filename": "/lib/python3.11/doctest.pyc",
            "start": 3685433,
            "end": 3797428
        }, {
            "filename": "/lib/python3.11/ecdsa/__init__.pyc",
            "start": 3797428,
            "end": 3799484
        }, {
            "filename": "/lib/python3.11/ecdsa/_compat.pyc",
            "start": 3799484,
            "end": 3806789
        }, {
            "filename": "/lib/python3.11/ecdsa/_rwlock.pyc",
            "start": 3806789,
            "end": 3811814
        }, {
            "filename": "/lib/python3.11/ecdsa/_sha3.pyc",
            "start": 3811814,
            "end": 3817825
        }, {
            "filename": "/lib/python3.11/ecdsa/_version.pyc",
            "start": 3817825,
            "end": 3818372
        }, {
            "filename": "/lib/python3.11/ecdsa/curves.pyc",
            "start": 3818372,
            "end": 3835814
        }, {
            "filename": "/lib/python3.11/ecdsa/der.pyc",
            "start": 3835814,
            "end": 3855913
        }, {
            "filename": "/lib/python3.11/ecdsa/ecdh.pyc",
            "start": 3855913,
            "end": 3869867
        }, {
            "filename": "/lib/python3.11/ecdsa/ecdsa.pyc",
            "start": 3869867,
            "end": 3899021
        }, {
            "filename": "/lib/python3.11/ecdsa/eddsa.pyc",
            "start": 3899021,
            "end": 3910503
        }, {
            "filename": "/lib/python3.11/ecdsa/ellipticcurve.pyc",
            "start": 3910503,
            "end": 3977239
        }, {
            "filename": "/lib/python3.11/ecdsa/errors.pyc",
            "start": 3977239,
            "end": 3977714
        }, {
            "filename": "/lib/python3.11/ecdsa/keys.pyc",
            "start": 3977714,
            "end": 4047361
        }, {
            "filename": "/lib/python3.11/ecdsa/numbertheory.pyc",
            "start": 4047361,
            "end": 4066499
        }, {
            "filename": "/lib/python3.11/ecdsa/rfc6979.pyc",
            "start": 4066499,
            "end": 4070719
        }, {
            "filename": "/lib/python3.11/ecdsa/test_curves.pyc",
            "start": 4070719,
            "end": 4095861
        }, {
            "filename": "/lib/python3.11/ecdsa/test_der.pyc",
            "start": 4095861,
            "end": 4134820
        }, {
            "filename": "/lib/python3.11/ecdsa/test_ecdh.pyc",
            "start": 4134820,
            "end": 4159066
        }, {
            "filename": "/lib/python3.11/ecdsa/test_ecdsa.pyc",
            "start": 4159066,
            "end": 4189231
        }, {
            "filename": "/lib/python3.11/ecdsa/test_eddsa.pyc",
            "start": 4189231,
            "end": 4235965
        }, {
            "filename": "/lib/python3.11/ecdsa/test_ellipticcurve.pyc",
            "start": 4235965,
            "end": 4247875
        }, {
            "filename": "/lib/python3.11/ecdsa/test_jacobi.pyc",
            "start": 4247875,
            "end": 4284583
        }, {
            "filename": "/lib/python3.11/ecdsa/test_keys.pyc",
            "start": 4284583,
            "end": 4337193
        }, {
            "filename": "/lib/python3.11/ecdsa/test_malformed_sigs.pyc",
            "start": 4337193,
            "end": 4355205
        }, {
            "filename": "/lib/python3.11/ecdsa/test_numbertheory.pyc",
            "start": 4355205,
            "end": 4378007
        }, {
            "filename": "/lib/python3.11/ecdsa/test_pyecdsa.pyc",
            "start": 4378007,
            "end": 4509836
        }, {
            "filename": "/lib/python3.11/ecdsa/test_rw_lock.pyc",
            "start": 4509836,
            "end": 4521599
        }, {
            "filename": "/lib/python3.11/ecdsa/test_sha3.pyc",
            "start": 4521599,
            "end": 4526870
        }, {
            "filename": "/lib/python3.11/ecdsa/util.pyc",
            "start": 4526870,
            "end": 4545532
        }, {
            "filename": "/lib/python3.11/email/__init__.pyc",
            "start": 4545532,
            "end": 4547635
        }, {
            "filename": "/lib/python3.11/email/_encoded_words.pyc",
            "start": 4547635,
            "end": 4556754
        }, {
            "filename": "/lib/python3.11/email/_header_value_parser.pyc",
            "start": 4556754,
            "end": 4706943
        }, {
            "filename": "/lib/python3.11/email/_parseaddr.pyc",
            "start": 4706943,
            "end": 4731437
        }, {
            "filename": "/lib/python3.11/email/_policybase.pyc",
            "start": 4731437,
            "end": 4750675
        }, {
            "filename": "/lib/python3.11/email/base64mime.pyc",
            "start": 4750675,
            "end": 4755022
        }, {
            "filename": "/lib/python3.11/email/charset.pyc",
            "start": 4755022,
            "end": 4771062
        }, {
            "filename": "/lib/python3.11/email/contentmanager.pyc",
            "start": 4771062,
            "end": 4784978
        }, {
            "filename": "/lib/python3.11/email/encoders.pyc",
            "start": 4784978,
            "end": 4787360
        }, {
            "filename": "/lib/python3.11/email/errors.pyc",
            "start": 4787360,
            "end": 4795800
        }, {
            "filename": "/lib/python3.11/email/feedparser.pyc",
            "start": 4795800,
            "end": 4817339
        }, {
            "filename": "/lib/python3.11/email/generator.pyc",
            "start": 4817339,
            "end": 4838981
        }, {
            "filename": "/lib/python3.11/email/header.pyc",
            "start": 4838981,
            "end": 4866063
        }, {
            "filename": "/lib/python3.11/email/headerregistry.pyc",
            "start": 4866063,
            "end": 4899845
        }, {
            "filename": "/lib/python3.11/email/iterators.pyc",
            "start": 4899845,
            "end": 4903011
        }, {
            "filename": "/lib/python3.11/email/message.pyc",
            "start": 4903011,
            "end": 4962128
        }, {
            "filename": "/lib/python3.11/email/mime/__init__.pyc",
            "start": 4962128,
            "end": 4962274
        }, {
            "filename": "/lib/python3.11/email/mime/application.pyc",
            "start": 4962274,
            "end": 4964095
        }, {
            "filename": "/lib/python3.11/email/mime/audio.pyc",
            "start": 4964095,
            "end": 4967981
        }, {
            "filename": "/lib/python3.11/email/mime/base.pyc",
            "start": 4967981,
            "end": 4969375
        }, {
            "filename": "/lib/python3.11/email/mime/image.pyc",
            "start": 4969375,
            "end": 4975992
        }, {
            "filename": "/lib/python3.11/email/mime/message.pyc",
            "start": 4975992,
            "end": 4977726
        }, {
            "filename": "/lib/python3.11/email/mime/multipart.pyc",
            "start": 4977726,
            "end": 4979592
        }, {
            "filename": "/lib/python3.11/email/mime/nonmultipart.pyc",
            "start": 4979592,
            "end": 4980573
        }, {
            "filename": "/lib/python3.11/email/mime/text.pyc",
            "start": 4980573,
            "end": 4982330
        }, {
            "filename": "/lib/python3.11/email/parser.pyc",
            "start": 4982330,
            "end": 4989707
        }, {
            "filename": "/lib/python3.11/email/policy.pyc",
            "start": 4989707,
            "end": 5002140
        }, {
            "filename": "/lib/python3.11/email/quoprimime.pyc",
            "start": 5002140,
            "end": 5013419
        }, {
            "filename": "/lib/python3.11/email/utils.pyc",
            "start": 5013419,
            "end": 5028910
        }, {
            "filename": "/lib/python3.11/encodings/__init__.pyc",
            "start": 5028910,
            "end": 5035470
        }, {
            "filename": "/lib/python3.11/encodings/aliases.pyc",
            "start": 5035470,
            "end": 5048112
        }, {
            "filename": "/lib/python3.11/encodings/ascii.pyc",
            "start": 5048112,
            "end": 5050815
        }, {
            "filename": "/lib/python3.11/encodings/base64_codec.pyc",
            "start": 5050815,
            "end": 5054131
        }, {
            "filename": "/lib/python3.11/encodings/big5.pyc",
            "start": 5054131,
            "end": 5056259
        }, {
            "filename": "/lib/python3.11/encodings/big5hkscs.pyc",
            "start": 5056259,
            "end": 5058397
        }, {
            "filename": "/lib/python3.11/encodings/bz2_codec.pyc",
            "start": 5058397,
            "end": 5063237
        }, {
            "filename": "/lib/python3.11/encodings/charmap.pyc",
            "start": 5063237,
            "end": 5067351
        }, {
            "filename": "/lib/python3.11/encodings/cp037.pyc",
            "start": 5067351,
            "end": 5070730
        }, {
            "filename": "/lib/python3.11/encodings/cp1006.pyc",
            "start": 5070730,
            "end": 5074185
        }, {
            "filename": "/lib/python3.11/encodings/cp1026.pyc",
            "start": 5074185,
            "end": 5077568
        }, {
            "filename": "/lib/python3.11/encodings/cp1125.pyc",
            "start": 5077568,
            "end": 5091815
        }, {
            "filename": "/lib/python3.11/encodings/cp1140.pyc",
            "start": 5091815,
            "end": 5095184
        }, {
            "filename": "/lib/python3.11/encodings/cp1250.pyc",
            "start": 5095184,
            "end": 5098590
        }, {
            "filename": "/lib/python3.11/encodings/cp1251.pyc",
            "start": 5098590,
            "end": 5101993
        }, {
            "filename": "/lib/python3.11/encodings/cp1252.pyc",
            "start": 5101993,
            "end": 5105399
        }, {
            "filename": "/lib/python3.11/encodings/cp1253.pyc",
            "start": 5105399,
            "end": 5108818
        }, {
            "filename": "/lib/python3.11/encodings/cp1254.pyc",
            "start": 5108818,
            "end": 5112226
        }, {
            "filename": "/lib/python3.11/encodings/cp1255.pyc",
            "start": 5112226,
            "end": 5115653
        }, {
            "filename": "/lib/python3.11/encodings/cp1256.pyc",
            "start": 5115653,
            "end": 5119058
        }, {
            "filename": "/lib/python3.11/encodings/cp1257.pyc",
            "start": 5119058,
            "end": 5122471
        }, {
            "filename": "/lib/python3.11/encodings/cp1258.pyc",
            "start": 5122471,
            "end": 5125882
        }, {
            "filename": "/lib/python3.11/encodings/cp273.pyc",
            "start": 5125882,
            "end": 5129247
        }, {
            "filename": "/lib/python3.11/encodings/cp424.pyc",
            "start": 5129247,
            "end": 5132656
        }, {
            "filename": "/lib/python3.11/encodings/cp437.pyc",
            "start": 5132656,
            "end": 5146536
        }, {
            "filename": "/lib/python3.11/encodings/cp500.pyc",
            "start": 5146536,
            "end": 5149915
        }, {
            "filename": "/lib/python3.11/encodings/cp720.pyc",
            "start": 5149915,
            "end": 5153391
        }, {
            "filename": "/lib/python3.11/encodings/cp737.pyc",
            "start": 5153391,
            "end": 5167673
        }, {
            "filename": "/lib/python3.11/encodings/cp775.pyc",
            "start": 5167673,
            "end": 5181593
        }, {
            "filename": "/lib/python3.11/encodings/cp850.pyc",
            "start": 5181593,
            "end": 5195054
        }, {
            "filename": "/lib/python3.11/encodings/cp852.pyc",
            "start": 5195054,
            "end": 5208990
        }, {
            "filename": "/lib/python3.11/encodings/cp855.pyc",
            "start": 5208990,
            "end": 5223239
        }, {
            "filename": "/lib/python3.11/encodings/cp856.pyc",
            "start": 5223239,
            "end": 5226680
        }, {
            "filename": "/lib/python3.11/encodings/cp857.pyc",
            "start": 5226680,
            "end": 5239936
        }, {
            "filename": "/lib/python3.11/encodings/cp858.pyc",
            "start": 5239936,
            "end": 5253367
        }, {
            "filename": "/lib/python3.11/encodings/cp860.pyc",
            "start": 5253367,
            "end": 5267218
        }, {
            "filename": "/lib/python3.11/encodings/cp861.pyc",
            "start": 5267218,
            "end": 5281094
        }, {
            "filename": "/lib/python3.11/encodings/cp862.pyc",
            "start": 5281094,
            "end": 5295203
        }, {
            "filename": "/lib/python3.11/encodings/cp863.pyc",
            "start": 5295203,
            "end": 5309075
        }, {
            "filename": "/lib/python3.11/encodings/cp864.pyc",
            "start": 5309075,
            "end": 5322986
        }, {
            "filename": "/lib/python3.11/encodings/cp865.pyc",
            "start": 5322986,
            "end": 5336862
        }, {
            "filename": "/lib/python3.11/encodings/cp866.pyc",
            "start": 5336862,
            "end": 5351151
        }, {
            "filename": "/lib/python3.11/encodings/cp869.pyc",
            "start": 5351151,
            "end": 5364964
        }, {
            "filename": "/lib/python3.11/encodings/cp874.pyc",
            "start": 5364964,
            "end": 5368471
        }, {
            "filename": "/lib/python3.11/encodings/cp875.pyc",
            "start": 5368471,
            "end": 5371847
        }, {
            "filename": "/lib/python3.11/encodings/cp932.pyc",
            "start": 5371847,
            "end": 5373977
        }, {
            "filename": "/lib/python3.11/encodings/cp949.pyc",
            "start": 5373977,
            "end": 5376107
        }, {
            "filename": "/lib/python3.11/encodings/cp950.pyc",
            "start": 5376107,
            "end": 5378237
        }, {
            "filename": "/lib/python3.11/encodings/euc_jis_2004.pyc",
            "start": 5378237,
            "end": 5380381
        }, {
            "filename": "/lib/python3.11/encodings/euc_jisx0213.pyc",
            "start": 5380381,
            "end": 5382525
        }, {
            "filename": "/lib/python3.11/encodings/euc_jp.pyc",
            "start": 5382525,
            "end": 5384657
        }, {
            "filename": "/lib/python3.11/encodings/euc_kr.pyc",
            "start": 5384657,
            "end": 5386789
        }, {
            "filename": "/lib/python3.11/encodings/gb18030.pyc",
            "start": 5386789,
            "end": 5388923
        }, {
            "filename": "/lib/python3.11/encodings/gb2312.pyc",
            "start": 5388923,
            "end": 5391055
        }, {
            "filename": "/lib/python3.11/encodings/gbk.pyc",
            "start": 5391055,
            "end": 5393181
        }, {
            "filename": "/lib/python3.11/encodings/hex_codec.pyc",
            "start": 5393181,
            "end": 5396484
        }, {
            "filename": "/lib/python3.11/encodings/hp_roman8.pyc",
            "start": 5396484,
            "end": 5400064
        }, {
            "filename": "/lib/python3.11/encodings/hz.pyc",
            "start": 5400064,
            "end": 5402188
        }, {
            "filename": "/lib/python3.11/encodings/idna.pyc",
            "start": 5402188,
            "end": 5413822
        }, {
            "filename": "/lib/python3.11/encodings/iso2022_jp.pyc",
            "start": 5413822,
            "end": 5415967
        }, {
            "filename": "/lib/python3.11/encodings/iso2022_jp_1.pyc",
            "start": 5415967,
            "end": 5418116
        }, {
            "filename": "/lib/python3.11/encodings/iso2022_jp_2.pyc",
            "start": 5418116,
            "end": 5420265
        }, {
            "filename": "/lib/python3.11/encodings/iso2022_jp_2004.pyc",
            "start": 5420265,
            "end": 5422421
        }, {
            "filename": "/lib/python3.11/encodings/iso2022_jp_3.pyc",
            "start": 5422421,
            "end": 5424570
        }, {
            "filename": "/lib/python3.11/encodings/iso2022_jp_ext.pyc",
            "start": 5424570,
            "end": 5426724
        }, {
            "filename": "/lib/python3.11/encodings/iso2022_kr.pyc",
            "start": 5426724,
            "end": 5428869
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_1.pyc",
            "start": 5428869,
            "end": 5432247
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_10.pyc",
            "start": 5432247,
            "end": 5435630
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_11.pyc",
            "start": 5435630,
            "end": 5439107
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_13.pyc",
            "start": 5439107,
            "end": 5442493
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_14.pyc",
            "start": 5442493,
            "end": 5445897
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_15.pyc",
            "start": 5445897,
            "end": 5449280
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_16.pyc",
            "start": 5449280,
            "end": 5452665
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_2.pyc",
            "start": 5452665,
            "end": 5456043
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_3.pyc",
            "start": 5456043,
            "end": 5459428
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_4.pyc",
            "start": 5459428,
            "end": 5462806
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_5.pyc",
            "start": 5462806,
            "end": 5466185
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_6.pyc",
            "start": 5466185,
            "end": 5469608
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_7.pyc",
            "start": 5469608,
            "end": 5472994
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_8.pyc",
            "start": 5472994,
            "end": 5476411
        }, {
            "filename": "/lib/python3.11/encodings/iso8859_9.pyc",
            "start": 5476411,
            "end": 5479789
        }, {
            "filename": "/lib/python3.11/encodings/johab.pyc",
            "start": 5479789,
            "end": 5481919
        }, {
            "filename": "/lib/python3.11/encodings/koi8_r.pyc",
            "start": 5481919,
            "end": 5485349
        }, {
            "filename": "/lib/python3.11/encodings/koi8_t.pyc",
            "start": 5485349,
            "end": 5488690
        }, {
            "filename": "/lib/python3.11/encodings/koi8_u.pyc",
            "start": 5488690,
            "end": 5492106
        }, {
            "filename": "/lib/python3.11/encodings/kz1048.pyc",
            "start": 5492106,
            "end": 5495499
        }, {
            "filename": "/lib/python3.11/encodings/latin_1.pyc",
            "start": 5495499,
            "end": 5498214
        }, {
            "filename": "/lib/python3.11/encodings/mac_arabic.pyc",
            "start": 5498214,
            "end": 5511980
        }, {
            "filename": "/lib/python3.11/encodings/mac_croatian.pyc",
            "start": 5511980,
            "end": 5515405
        }, {
            "filename": "/lib/python3.11/encodings/mac_cyrillic.pyc",
            "start": 5515405,
            "end": 5518820
        }, {
            "filename": "/lib/python3.11/encodings/mac_farsi.pyc",
            "start": 5518820,
            "end": 5522179
        }, {
            "filename": "/lib/python3.11/encodings/mac_greek.pyc",
            "start": 5522179,
            "end": 5525578
        }, {
            "filename": "/lib/python3.11/encodings/mac_iceland.pyc",
            "start": 5525578,
            "end": 5528996
        }, {
            "filename": "/lib/python3.11/encodings/mac_latin2.pyc",
            "start": 5528996,
            "end": 5532555
        }, {
            "filename": "/lib/python3.11/encodings/mac_roman.pyc",
            "start": 5532555,
            "end": 5535971
        }, {
            "filename": "/lib/python3.11/encodings/mac_romanian.pyc",
            "start": 5535971,
            "end": 5539397
        }, {
            "filename": "/lib/python3.11/encodings/mac_turkish.pyc",
            "start": 5539397,
            "end": 5542816
        }, {
            "filename": "/lib/python3.11/encodings/mbcs.pyc",
            "start": 5542816,
            "end": 5545167
        }, {
            "filename": "/lib/python3.11/encodings/oem.pyc",
            "start": 5545167,
            "end": 5547331
        }, {
            "filename": "/lib/python3.11/encodings/palmos.pyc",
            "start": 5547331,
            "end": 5550737
        }, {
            "filename": "/lib/python3.11/encodings/ptcp154.pyc",
            "start": 5550737,
            "end": 5554237
        }, {
            "filename": "/lib/python3.11/encodings/punycode.pyc",
            "start": 5554237,
            "end": 5565087
        }, {
            "filename": "/lib/python3.11/encodings/quopri_codec.pyc",
            "start": 5565087,
            "end": 5568694
        }, {
            "filename": "/lib/python3.11/encodings/raw_unicode_escape.pyc",
            "start": 5568694,
            "end": 5571539
        }, {
            "filename": "/lib/python3.11/encodings/rot_13.pyc",
            "start": 5571539,
            "end": 5576370
        }, {
            "filename": "/lib/python3.11/encodings/shift_jis.pyc",
            "start": 5576370,
            "end": 5578508
        }, {
            "filename": "/lib/python3.11/encodings/shift_jis_2004.pyc",
            "start": 5578508,
            "end": 5580657
        }, {
            "filename": "/lib/python3.11/encodings/shift_jisx0213.pyc",
            "start": 5580657,
            "end": 5582806
        }, {
            "filename": "/lib/python3.11/encodings/tis_620.pyc",
            "start": 5582806,
            "end": 5586274
        }, {
            "filename": "/lib/python3.11/encodings/undefined.pyc",
            "start": 5586274,
            "end": 5589092
        }, {
            "filename": "/lib/python3.11/encodings/unicode_escape.pyc",
            "start": 5589092,
            "end": 5591917
        }, {
            "filename": "/lib/python3.11/encodings/utf_16.pyc",
            "start": 5591917,
            "end": 5599998
        }, {
            "filename": "/lib/python3.11/encodings/utf_16_be.pyc",
            "start": 5599998,
            "end": 5602329
        }, {
            "filename": "/lib/python3.11/encodings/utf_16_le.pyc",
            "start": 5602329,
            "end": 5604660
        }, {
            "filename": "/lib/python3.11/encodings/utf_32.pyc",
            "start": 5604660,
            "end": 5612636
        }, {
            "filename": "/lib/python3.11/encodings/utf_32_be.pyc",
            "start": 5612636,
            "end": 5614860
        }, {
            "filename": "/lib/python3.11/encodings/utf_32_le.pyc",
            "start": 5614860,
            "end": 5617084
        }, {
            "filename": "/lib/python3.11/encodings/utf_7.pyc",
            "start": 5617084,
            "end": 5619336
        }, {
            "filename": "/lib/python3.11/encodings/utf_8.pyc",
            "start": 5619336,
            "end": 5621647
        }, {
            "filename": "/lib/python3.11/encodings/utf_8_sig.pyc",
            "start": 5621647,
            "end": 5628964
        }, {
            "filename": "/lib/python3.11/encodings/uu_codec.pyc",
            "start": 5628964,
            "end": 5634231
        }, {
            "filename": "/lib/python3.11/encodings/zlib_codec.pyc",
            "start": 5634231,
            "end": 5638968
        }, {
            "filename": "/lib/python3.11/enum.pyc",
            "start": 5638968,
            "end": 5724791
        }, {
            "filename": "/lib/python3.11/filecmp.pyc",
            "start": 5724791,
            "end": 5740532
        }, {
            "filename": "/lib/python3.11/fileinput.pyc",
            "start": 5740532,
            "end": 5761724
        }, {
            "filename": "/lib/python3.11/fnmatch.pyc",
            "start": 5761724,
            "end": 5769285
        }, {
            "filename": "/lib/python3.11/fractions.pyc",
            "start": 5769285,
            "end": 5798620
        }, {
            "filename": "/lib/python3.11/ftplib.pyc",
            "start": 5798620,
            "end": 5846053
        }, {
            "filename": "/lib/python3.11/functools.pyc",
            "start": 5846053,
            "end": 5892820
        }, {
            "filename": "/lib/python3.11/future/__init__.pyc",
            "start": 5892820,
            "end": 5895985
        }, {
            "filename": "/lib/python3.11/future/backports/__init__.pyc",
            "start": 5895985,
            "end": 5896825
        }, {
            "filename": "/lib/python3.11/future/backports/_markupbase.pyc",
            "start": 5896825,
            "end": 5913336
        }, {
            "filename": "/lib/python3.11/future/backports/datetime.pyc",
            "start": 5913336,
            "end": 5998478
        }, {
            "filename": "/lib/python3.11/future/backports/email/__init__.pyc",
            "start": 5998478,
            "end": 6001028
        }, {
            "filename": "/lib/python3.11/future/backports/email/_encoded_words.pyc",
            "start": 6001028,
            "end": 6010859
        }, {
            "filename": "/lib/python3.11/future/backports/email/_header_value_parser.pyc",
            "start": 6010859,
            "end": 6162382
        }, {
            "filename": "/lib/python3.11/future/backports/email/_parseaddr.pyc",
            "start": 6162382,
            "end": 6186945
        }, {
            "filename": "/lib/python3.11/future/backports/email/_policybase.pyc",
            "start": 6186945,
            "end": 6206092
        }, {
            "filename": "/lib/python3.11/future/backports/email/base64mime.pyc",
            "start": 6206092,
            "end": 6210764
        }, {
            "filename": "/lib/python3.11/future/backports/email/charset.pyc",
            "start": 6210764,
            "end": 6227375
        }, {
            "filename": "/lib/python3.11/future/backports/email/encoders.pyc",
            "start": 6227375,
            "end": 6231054
        }, {
            "filename": "/lib/python3.11/future/backports/email/errors.pyc",
            "start": 6231054,
            "end": 6239218
        }, {
            "filename": "/lib/python3.11/future/backports/email/feedparser.pyc",
            "start": 6239218,
            "end": 6260569
        }, {
            "filename": "/lib/python3.11/future/backports/email/generator.pyc",
            "start": 6260569,
            "end": 6281393
        }, {
            "filename": "/lib/python3.11/future/backports/email/header.pyc",
            "start": 6281393,
            "end": 6309123
        }, {
            "filename": "/lib/python3.11/future/backports/email/headerregistry.pyc",
            "start": 6309123,
            "end": 6341758
        }, {
            "filename": "/lib/python3.11/future/backports/email/iterators.pyc",
            "start": 6341758,
            "end": 6345196
        }, {
            "filename": "/lib/python3.11/future/backports/email/message.pyc",
            "start": 6345196,
            "end": 6387850
        }, {
            "filename": "/lib/python3.11/future/backports/email/mime/__init__.pyc",
            "start": 6387850,
            "end": 6388013
        }, {
            "filename": "/lib/python3.11/future/backports/email/mime/application.pyc",
            "start": 6388013,
            "end": 6389991
        }, {
            "filename": "/lib/python3.11/future/backports/email/mime/audio.pyc",
            "start": 6389991,
            "end": 6393425
        }, {
            "filename": "/lib/python3.11/future/backports/email/mime/base.pyc",
            "start": 6393425,
            "end": 6394818
        }, {
            "filename": "/lib/python3.11/future/backports/email/mime/image.pyc",
            "start": 6394818,
            "end": 6397294
        }, {
            "filename": "/lib/python3.11/future/backports/email/mime/message.pyc",
            "start": 6397294,
            "end": 6399199
        }, {
            "filename": "/lib/python3.11/future/backports/email/mime/multipart.pyc",
            "start": 6399199,
            "end": 6401218
        }, {
            "filename": "/lib/python3.11/future/backports/email/mime/nonmultipart.pyc",
            "start": 6401218,
            "end": 6402416
        }, {
            "filename": "/lib/python3.11/future/backports/email/mime/text.pyc",
            "start": 6402416,
            "end": 6404307
        }, {
            "filename": "/lib/python3.11/future/backports/email/parser.pyc",
            "start": 6404307,
            "end": 6412124
        }, {
            "filename": "/lib/python3.11/future/backports/email/policy.pyc",
            "start": 6412124,
            "end": 6423167
        }, {
            "filename": "/lib/python3.11/future/backports/email/quoprimime.pyc",
            "start": 6423167,
            "end": 6437154
        }, {
            "filename": "/lib/python3.11/future/backports/email/utils.pyc",
            "start": 6437154,
            "end": 6453630
        }, {
            "filename": "/lib/python3.11/future/backports/html/__init__.pyc",
            "start": 6453630,
            "end": 6455107
        }, {
            "filename": "/lib/python3.11/future/backports/html/entities.pyc",
            "start": 6455107,
            "end": 6554795
        }, {
            "filename": "/lib/python3.11/future/backports/html/parser.pyc",
            "start": 6554795,
            "end": 6579096
        }, {
            "filename": "/lib/python3.11/future/backports/http/__init__.pyc",
            "start": 6579096,
            "end": 6579253
        }, {
            "filename": "/lib/python3.11/future/backports/http/client.pyc",
            "start": 6579253,
            "end": 6631895
        }, {
            "filename": "/lib/python3.11/future/backports/http/cookiejar.pyc",
            "start": 6631895,
            "end": 6719974
        }, {
            "filename": "/lib/python3.11/future/backports/http/cookies.pyc",
            "start": 6719974,
            "end": 6746300
        }, {
            "filename": "/lib/python3.11/future/backports/http/server.pyc",
            "start": 6746300,
            "end": 6801431
        }, {
            "filename": "/lib/python3.11/future/backports/misc.pyc",
            "start": 6801431,
            "end": 6843980
        }, {
            "filename": "/lib/python3.11/future/backports/socket.pyc",
            "start": 6843980,
            "end": 6864550
        }, {
            "filename": "/lib/python3.11/future/backports/socketserver.pyc",
            "start": 6864550,
            "end": 6894954
        }, {
            "filename": "/lib/python3.11/future/backports/test/__init__.pyc",
            "start": 6894954,
            "end": 6895393
        }, {
            "filename": "/lib/python3.11/future/backports/test/pystone.pyc",
            "start": 6895393,
            "end": 6906351
        }, {
            "filename": "/lib/python3.11/future/backports/test/ssl_servers.pyc",
            "start": 6906351,
            "end": 6918856
        }, {
            "filename": "/lib/python3.11/future/backports/test/support.pyc",
            "start": 6918856,
            "end": 7009133
        }, {
            "filename": "/lib/python3.11/future/backports/total_ordering.pyc",
            "start": 7009133,
            "end": 7012514
        }, {
            "filename": "/lib/python3.11/future/backports/urllib/__init__.pyc",
            "start": 7012514,
            "end": 7012673
        }, {
            "filename": "/lib/python3.11/future/backports/urllib/error.pyc",
            "start": 7012673,
            "end": 7016173
        }, {
            "filename": "/lib/python3.11/future/backports/urllib/parse.pyc",
            "start": 7016173,
            "end": 7062382
        }, {
            "filename": "/lib/python3.11/future/backports/urllib/request.pyc",
            "start": 7062382,
            "end": 7183851
        }, {
            "filename": "/lib/python3.11/future/backports/urllib/response.pyc",
            "start": 7183851,
            "end": 7189452
        }, {
            "filename": "/lib/python3.11/future/backports/urllib/robotparser.pyc",
            "start": 7189452,
            "end": 7199978
        }, {
            "filename": "/lib/python3.11/future/backports/xmlrpc/__init__.pyc",
            "start": 7199978,
            "end": 7200137
        }, {
            "filename": "/lib/python3.11/future/backports/xmlrpc/client.pyc",
            "start": 7200137,
            "end": 7254824
        }, {
            "filename": "/lib/python3.11/future/backports/xmlrpc/server.pyc",
            "start": 7254824,
            "end": 7301296
        }, {
            "filename": "/lib/python3.11/future/builtins/__init__.pyc",
            "start": 7301296,
            "end": 7303002
        }, {
            "filename": "/lib/python3.11/future/builtins/disabled.pyc",
            "start": 7303002,
            "end": 7305618
        }, {
            "filename": "/lib/python3.11/future/builtins/iterators.pyc",
            "start": 7305618,
            "end": 7307321
        }, {
            "filename": "/lib/python3.11/future/builtins/misc.pyc",
            "start": 7307321,
            "end": 7311420
        }, {
            "filename": "/lib/python3.11/future/builtins/new_min_max.pyc",
            "start": 7311420,
            "end": 7314342
        }, {
            "filename": "/lib/python3.11/future/builtins/newnext.pyc",
            "start": 7314342,
            "end": 7316833
        }, {
            "filename": "/lib/python3.11/future/builtins/newround.pyc",
            "start": 7316833,
            "end": 7320988
        }, {
            "filename": "/lib/python3.11/future/builtins/newsuper.pyc",
            "start": 7320988,
            "end": 7325559
        }, {
            "filename": "/lib/python3.11/future/moves/__init__.pyc",
            "start": 7325559,
            "end": 7326034
        }, {
            "filename": "/lib/python3.11/future/moves/_dummy_thread.pyc",
            "start": 7326034,
            "end": 7326433
        }, {
            "filename": "/lib/python3.11/future/moves/_markupbase.pyc",
            "start": 7326433,
            "end": 7326826
        }, {
            "filename": "/lib/python3.11/future/moves/_thread.pyc",
            "start": 7326826,
            "end": 7327207
        }, {
            "filename": "/lib/python3.11/future/moves/builtins.pyc",
            "start": 7327207,
            "end": 7327632
        }, {
            "filename": "/lib/python3.11/future/moves/collections.pyc",
            "start": 7327632,
            "end": 7328438
        }, {
            "filename": "/lib/python3.11/future/moves/configparser.pyc",
            "start": 7328438,
            "end": 7328805
        }, {
            "filename": "/lib/python3.11/future/moves/copyreg.pyc",
            "start": 7328805,
            "end": 7329279
        }, {
            "filename": "/lib/python3.11/future/moves/dbm/__init__.pyc",
            "start": 7329279,
            "end": 7329898
        }, {
            "filename": "/lib/python3.11/future/moves/dbm/dumb.pyc",
            "start": 7329898,
            "end": 7330282
        }, {
            "filename": "/lib/python3.11/future/moves/dbm/gnu.pyc",
            "start": 7330282,
            "end": 7330661
        }, {
            "filename": "/lib/python3.11/future/moves/dbm/ndbm.pyc",
            "start": 7330661,
            "end": 7331041
        }, {
            "filename": "/lib/python3.11/future/moves/html/__init__.pyc",
            "start": 7331041,
            "end": 7332219
        }, {
            "filename": "/lib/python3.11/future/moves/html/entities.pyc",
            "start": 7332219,
            "end": 7332620
        }, {
            "filename": "/lib/python3.11/future/moves/html/parser.pyc",
            "start": 7332620,
            "end": 7333013
        }, {
            "filename": "/lib/python3.11/future/moves/http/__init__.pyc",
            "start": 7333013,
            "end": 7333276
        }, {
            "filename": "/lib/python3.11/future/moves/http/client.pyc",
            "start": 7333276,
            "end": 7333650
        }, {
            "filename": "/lib/python3.11/future/moves/http/cookiejar.pyc",
            "start": 7333650,
            "end": 7334048
        }, {
            "filename": "/lib/python3.11/future/moves/http/cookies.pyc",
            "start": 7334048,
            "end": 7334484
        }, {
            "filename": "/lib/python3.11/future/moves/http/server.pyc",
            "start": 7334484,
            "end": 7335286
        }, {
            "filename": "/lib/python3.11/future/moves/itertools.pyc",
            "start": 7335286,
            "end": 7335693
        }, {
            "filename": "/lib/python3.11/future/moves/pickle.pyc",
            "start": 7335693,
            "end": 7336185
        }, {
            "filename": "/lib/python3.11/future/moves/queue.pyc",
            "start": 7336185,
            "end": 7336561
        }, {
            "filename": "/lib/python3.11/future/moves/reprlib.pyc",
            "start": 7336561,
            "end": 7336940
        }, {
            "filename": "/lib/python3.11/future/moves/socketserver.pyc",
            "start": 7336940,
            "end": 7337337
        }, {
            "filename": "/lib/python3.11/future/moves/subprocess.pyc",
            "start": 7337337,
            "end": 7337897
        }, {
            "filename": "/lib/python3.11/future/moves/sys.pyc",
            "start": 7337897,
            "end": 7338274
        }, {
            "filename": "/lib/python3.11/future/moves/test/__init__.pyc",
            "start": 7338274,
            "end": 7338603
        }, {
            "filename": "/lib/python3.11/future/moves/test/support.pyc",
            "start": 7338603,
            "end": 7339271
        }, {
            "filename": "/lib/python3.11/future/moves/tkinter/__init__.pyc",
            "start": 7339271,
            "end": 7340310
        }, {
            "filename": "/lib/python3.11/future/moves/tkinter/colorchooser.pyc",
            "start": 7340310,
            "end": 7340898
        }, {
            "filename": "/lib/python3.11/future/moves/tkinter/commondialog.pyc",
            "start": 7340898,
            "end": 7341486
        }, {
            "filename": "/lib/python3.11/future/moves/tkinter/constants.pyc",
            "start": 7341486,
            "end": 7342062
        }, {
            "filename": "/lib/python3.11/future/moves/tkinter/dialog.pyc",
            "start": 7342062,
            "end": 7342622
        }, {
            "filename": "/lib/python3.11/future/moves/tkinter/dnd.pyc",
            "start": 7342622,
            "end": 7343174
        }, {
            "filename": "/lib/python3.11/future/moves/tkinter/filedialog.pyc",
            "start": 7343174,
            "end": 7343978
        }, {
            "filename": "/lib/python3.11/future/moves/tkinter/font.pyc",
            "start": 7343978,
            "end": 7344534
        }, {
            "filename": "/lib/python3.11/future/moves/tkinter/messagebox.pyc",
            "start": 7344534,
            "end": 7345114
        }, {
            "filename": "/lib/python3.11/future/moves/tkinter/scrolledtext.pyc",
            "start": 7345114,
            "end": 7345698
        }, {
            "filename": "/lib/python3.11/future/moves/tkinter/simpledialog.pyc",
            "start": 7345698,
            "end": 7346282
        }, {
            "filename": "/lib/python3.11/future/moves/tkinter/tix.pyc",
            "start": 7346282,
            "end": 7346830
        }, {
            "filename": "/lib/python3.11/future/moves/tkinter/ttk.pyc",
            "start": 7346830,
            "end": 7347378
        }, {
            "filename": "/lib/python3.11/future/moves/urllib/__init__.pyc",
            "start": 7347378,
            "end": 7347709
        }, {
            "filename": "/lib/python3.11/future/moves/urllib/error.pyc",
            "start": 7347709,
            "end": 7348493
        }, {
            "filename": "/lib/python3.11/future/moves/urllib/parse.pyc",
            "start": 7348493,
            "end": 7349676
        }, {
            "filename": "/lib/python3.11/future/moves/urllib/request.pyc",
            "start": 7349676,
            "end": 7351311
        }, {
            "filename": "/lib/python3.11/future/moves/urllib/response.pyc",
            "start": 7351311,
            "end": 7352059
        }, {
            "filename": "/lib/python3.11/future/moves/urllib/robotparser.pyc",
            "start": 7352059,
            "end": 7352467
        }, {
            "filename": "/lib/python3.11/future/moves/winreg.pyc",
            "start": 7352467,
            "end": 7352847
        }, {
            "filename": "/lib/python3.11/future/moves/xmlrpc/__init__.pyc",
            "start": 7352847,
            "end": 7353002
        }, {
            "filename": "/lib/python3.11/future/moves/xmlrpc/client.pyc",
            "start": 7353002,
            "end": 7353368
        }, {
            "filename": "/lib/python3.11/future/moves/xmlrpc/server.pyc",
            "start": 7353368,
            "end": 7353734
        }, {
            "filename": "/lib/python3.11/future/standard_library/__init__.pyc",
            "start": 7353734,
            "end": 7382414
        }, {
            "filename": "/lib/python3.11/future/tests/__init__.pyc",
            "start": 7382414,
            "end": 7382562
        }, {
            "filename": "/lib/python3.11/future/tests/base.pyc",
            "start": 7382562,
            "end": 7409694
        }, {
            "filename": "/lib/python3.11/future/types/__init__.pyc",
            "start": 7409694,
            "end": 7417042
        }, {
            "filename": "/lib/python3.11/future/types/newbytes.pyc",
            "start": 7417042,
            "end": 7442318
        }, {
            "filename": "/lib/python3.11/future/types/newdict.pyc",
            "start": 7442318,
            "end": 7445448
        }, {
            "filename": "/lib/python3.11/future/types/newint.pyc",
            "start": 7445448,
            "end": 7467118
        }, {
            "filename": "/lib/python3.11/future/types/newlist.pyc",
            "start": 7467118,
            "end": 7471784
        }, {
            "filename": "/lib/python3.11/future/types/newmemoryview.pyc",
            "start": 7471784,
            "end": 7472984
        }, {
            "filename": "/lib/python3.11/future/types/newobject.pyc",
            "start": 7472984,
            "end": 7476539
        }, {
            "filename": "/lib/python3.11/future/types/newopen.pyc",
            "start": 7476539,
            "end": 7478700
        }, {
            "filename": "/lib/python3.11/future/types/newrange.pyc",
            "start": 7478700,
            "end": 7487666
        }, {
            "filename": "/lib/python3.11/future/types/newstr.pyc",
            "start": 7487666,
            "end": 7512013
        }, {
            "filename": "/lib/python3.11/future/utils/__init__.pyc",
            "start": 7512013,
            "end": 7540173
        }, {
            "filename": "/lib/python3.11/future/utils/surrogateescape.pyc",
            "start": 7540173,
            "end": 7547100
        }, {
            "filename": "/lib/python3.11/genericpath.pyc",
            "start": 7547100,
            "end": 7553265
        }, {
            "filename": "/lib/python3.11/getopt.pyc",
            "start": 7553265,
            "end": 7563057
        }, {
            "filename": "/lib/python3.11/getpass.pyc",
            "start": 7563057,
            "end": 7570586
        }, {
            "filename": "/lib/python3.11/gettext.pyc",
            "start": 7570586,
            "end": 7594224
        }, {
            "filename": "/lib/python3.11/glob.pyc",
            "start": 7594224,
            "end": 7605386
        }, {
            "filename": "/lib/python3.11/graphlib.pyc",
            "start": 7605386,
            "end": 7616499
        }, {
            "filename": "/lib/python3.11/gzip.pyc",
            "start": 7616499,
            "end": 7650405
        }, {
            "filename": "/lib/python3.11/hashlib.pyc",
            "start": 7650405,
            "end": 7662776
        }, {
            "filename": "/lib/python3.11/heapq.pyc",
            "start": 7662776,
            "end": 7683423
        }, {
            "filename": "/lib/python3.11/hmac.pyc",
            "start": 7683423,
            "end": 7694905
        }, {
            "filename": "/lib/python3.11/html/__init__.pyc",
            "start": 7694905,
            "end": 7699745
        }, {
            "filename": "/lib/python3.11/html/entities.pyc",
            "start": 7699745,
            "end": 7799183
        }, {
            "filename": "/lib/python3.11/html/parser.pyc",
            "start": 7799183,
            "end": 7818713
        }, {
            "filename": "/lib/python3.11/http/__init__.pyc",
            "start": 7818713,
            "end": 7827439
        }, {
            "filename": "/lib/python3.11/http/client.pyc",
            "start": 7827439,
            "end": 7887744
        }, {
            "filename": "/lib/python3.11/http/cookiejar.pyc",
            "start": 7887744,
            "end": 7976322
        }, {
            "filename": "/lib/python3.11/http/cookies.pyc",
            "start": 7976322,
            "end": 8000112
        }, {
            "filename": "/lib/python3.11/http/server.pyc",
            "start": 8000112,
            "end": 8058815
        }, {
            "filename": "/lib/python3.11/idna/__init__.pyc",
            "start": 8058815,
            "end": 8059857
        }, {
            "filename": "/lib/python3.11/idna/codec.pyc",
            "start": 8059857,
            "end": 8065202
        }, {
            "filename": "/lib/python3.11/idna/compat.pyc",
            "start": 8065202,
            "end": 8066161
        }, {
            "filename": "/lib/python3.11/idna/core.pyc",
            "start": 8066161,
            "end": 8085819
        }, {
            "filename": "/lib/python3.11/idna/idnadata.pyc",
            "start": 8085819,
            "end": 8124737
        }, {
            "filename": "/lib/python3.11/idna/intranges.pyc",
            "start": 8124737,
            "end": 8127694
        }, {
            "filename": "/lib/python3.11/idna/package_data.pyc",
            "start": 8127694,
            "end": 8127856
        }, {
            "filename": "/lib/python3.11/idna/uts46data.pyc",
            "start": 8127856,
            "end": 8290998
        }, {
            "filename": "/lib/python3.11/imaplib.pyc",
            "start": 8290998,
            "end": 8359821
        }, {
            "filename": "/lib/python3.11/imghdr.pyc",
            "start": 8359821,
            "end": 8367713
        }, {
            "filename": "/lib/python3.11/imp.pyc",
            "start": 8367713,
            "end": 8384211
        }, {
            "filename": "/lib/python3.11/importlib/__init__.pyc",
            "start": 8384211,
            "end": 8390886
        }, {
            "filename": "/lib/python3.11/importlib/_abc.pyc",
            "start": 8390886,
            "end": 8393224
        }, {
            "filename": "/lib/python3.11/importlib/_bootstrap.pyc",
            "start": 8393224,
            "end": 8451287
        }, {
            "filename": "/lib/python3.11/importlib/_bootstrap_external.pyc",
            "start": 8451287,
            "end": 8523674
        }, {
            "filename": "/lib/python3.11/importlib/abc.pyc",
            "start": 8523674,
            "end": 8538176
        }, {
            "filename": "/lib/python3.11/importlib/machinery.pyc",
            "start": 8538176,
            "end": 8539471
        }, {
            "filename": "/lib/python3.11/importlib/metadata/__init__.pyc",
            "start": 8539471,
            "end": 8597875
        }, {
            "filename": "/lib/python3.11/importlib/metadata/_adapters.pyc",
            "start": 8597875,
            "end": 8601666
        }, {
            "filename": "/lib/python3.11/importlib/metadata/_collections.pyc",
            "start": 8601666,
            "end": 8603800
        }, {
            "filename": "/lib/python3.11/importlib/metadata/_functools.pyc",
            "start": 8603800,
            "end": 8607378
        }, {
            "filename": "/lib/python3.11/importlib/metadata/_itertools.pyc",
            "start": 8607378,
            "end": 8609928
        }, {
            "filename": "/lib/python3.11/importlib/metadata/_meta.pyc",
            "start": 8609928,
            "end": 8612833
        }, {
            "filename": "/lib/python3.11/importlib/metadata/_text.pyc",
            "start": 8612833,
            "end": 8617165
        }, {
            "filename": "/lib/python3.11/importlib/readers.pyc",
            "start": 8617165,
            "end": 8617689
        }, {
            "filename": "/lib/python3.11/importlib/resources/__init__.pyc",
            "start": 8617689,
            "end": 8618458
        }, {
            "filename": "/lib/python3.11/importlib/resources/_adapters.pyc",
            "start": 8618458,
            "end": 8629153
        }, {
            "filename": "/lib/python3.11/importlib/resources/_common.pyc",
            "start": 8629153,
            "end": 8633390
        }, {
            "filename": "/lib/python3.11/importlib/resources/_itertools.pyc",
            "start": 8633390,
            "end": 8634727
        }, {
            "filename": "/lib/python3.11/importlib/resources/_legacy.pyc",
            "start": 8634727,
            "end": 8641156
        }, {
            "filename": "/lib/python3.11/importlib/resources/abc.pyc",
            "start": 8641156,
            "end": 8649649
        }, {
            "filename": "/lib/python3.11/importlib/resources/readers.pyc",
            "start": 8649649,
            "end": 8657945
        }, {
            "filename": "/lib/python3.11/importlib/resources/simple.pyc",
            "start": 8657945,
            "end": 8664815
        }, {
            "filename": "/lib/python3.11/importlib/simple.pyc",
            "start": 8664815,
            "end": 8665350
        }, {
            "filename": "/lib/python3.11/importlib/util.pyc",
            "start": 8665350,
            "end": 8679825
        }, {
            "filename": "/lib/python3.11/inspect.pyc",
            "start": 8679825,
            "end": 8821152
        }, {
            "filename": "/lib/python3.11/io.pyc",
            "start": 8821152,
            "end": 8826170
        }, {
            "filename": "/lib/python3.11/ipaddress.pyc",
            "start": 8826170,
            "end": 8919876
        }, {
            "filename": "/lib/python3.11/jnius/__init__.pyc",
            "start": 8919876,
            "end": 8922850
        }, {
            "filename": "/lib/python3.11/jnius/env.pyc",
            "start": 8922850,
            "end": 8930989
        }, {
            "filename": "/lib/python3.11/jnius/reflect.pyc",
            "start": 8930989,
            "end": 8948085
        }, {
            "filename": "/lib/python3.11/jnius/signatures.pyc",
            "start": 8948085,
            "end": 8952297
        }, {
            "filename": "/lib/python3.11/json/__init__.pyc",
            "start": 8952297,
            "end": 8966619
        }, {
            "filename": "/lib/python3.11/json/decoder.pyc",
            "start": 8966619,
            "end": 8981933
        }, {
            "filename": "/lib/python3.11/json/encoder.pyc",
            "start": 8981933,
            "end": 8998838
        }, {
            "filename": "/lib/python3.11/json/scanner.pyc",
            "start": 8998838,
            "end": 9002522
        }, {
            "filename": "/lib/python3.11/json/tool.pyc",
            "start": 9002522,
            "end": 9007274
        }, {
            "filename": "/lib/python3.11/keyword.pyc",
            "start": 9007274,
            "end": 9008337
        }, {
            "filename": "/lib/python3.11/lib-dynload/empty.txt",
            "start": 9008337,
            "end": 9008394
        }, {
            "filename": "/lib/python3.11/linecache.pyc",
            "start": 9008394,
            "end": 9015910
        }, {
            "filename": "/lib/python3.11/locale.pyc",
            "start": 9015910,
            "end": 9080351
        }, {
            "filename": "/lib/python3.11/logging/__init__.pyc",
            "start": 9080351,
            "end": 9179432
        }, {
            "filename": "/lib/python3.11/logging/config.pyc",
            "start": 9179432,
            "end": 9223718
        }, {
            "filename": "/lib/python3.11/logging/handlers.pyc",
            "start": 9223718,
            "end": 9293941
        }, {
            "filename": "/lib/python3.11/lzma.pyc",
            "start": 9293941,
            "end": 9310709
        }, {
            "filename": "/lib/python3.11/mimetypes.pyc",
            "start": 9310709,
            "end": 9336627
        }, {
            "filename": "/lib/python3.11/modulefinder.pyc",
            "start": 9336627,
            "end": 9367789
        }, {
            "filename": "/lib/python3.11/multiprocessing/__init__.pyc",
            "start": 9367789,
            "end": 9368897
        }, {
            "filename": "/lib/python3.11/multiprocessing/connection.pyc",
            "start": 9368897,
            "end": 9417710
        }, {
            "filename": "/lib/python3.11/multiprocessing/context.pyc",
            "start": 9417710,
            "end": 9437304
        }, {
            "filename": "/lib/python3.11/multiprocessing/dummy/__init__.pyc",
            "start": 9437304,
            "end": 9443539
        }, {
            "filename": "/lib/python3.11/multiprocessing/dummy/connection.pyc",
            "start": 9443539,
            "end": 9447512
        }, {
            "filename": "/lib/python3.11/multiprocessing/forkserver.pyc",
            "start": 9447512,
            "end": 9464583
        }, {
            "filename": "/lib/python3.11/multiprocessing/heap.pyc",
            "start": 9464583,
            "end": 9479302
        }, {
            "filename": "/lib/python3.11/multiprocessing/managers.pyc",
            "start": 9479302,
            "end": 9552991
        }, {
            "filename": "/lib/python3.11/multiprocessing/pool.pyc",
            "start": 9552991,
            "end": 9600511
        }, {
            "filename": "/lib/python3.11/multiprocessing/popen_fork.pyc",
            "start": 9600511,
            "end": 9604895
        }, {
            "filename": "/lib/python3.11/multiprocessing/popen_forkserver.pyc",
            "start": 9604895,
            "end": 9609230
        }, {
            "filename": "/lib/python3.11/multiprocessing/popen_spawn_posix.pyc",
            "start": 9609230,
            "end": 9613652
        }, {
            "filename": "/lib/python3.11/multiprocessing/popen_spawn_win32.pyc",
            "start": 9613652,
            "end": 9620162
        }, {
            "filename": "/lib/python3.11/multiprocessing/process.pyc",
            "start": 9620162,
            "end": 9639356
        }, {
            "filename": "/lib/python3.11/multiprocessing/queues.pyc",
            "start": 9639356,
            "end": 9659382
        }, {
            "filename": "/lib/python3.11/multiprocessing/reduction.pyc",
            "start": 9659382,
            "end": 9674399
        }, {
            "filename": "/lib/python3.11/multiprocessing/resource_sharer.pyc",
            "start": 9674399,
            "end": 9684384
        }, {
            "filename": "/lib/python3.11/multiprocessing/resource_tracker.pyc",
            "start": 9684384,
            "end": 9695766
        }, {
            "filename": "/lib/python3.11/multiprocessing/shared_memory.pyc",
            "start": 9695766,
            "end": 9720212
        }, {
            "filename": "/lib/python3.11/multiprocessing/sharedctypes.pyc",
            "start": 9720212,
            "end": 9732285
        }, {
            "filename": "/lib/python3.11/multiprocessing/spawn.pyc",
            "start": 9732285,
            "end": 9744878
        }, {
            "filename": "/lib/python3.11/multiprocessing/synchronize.pyc",
            "start": 9744878,
            "end": 9767089
        }, {
            "filename": "/lib/python3.11/multiprocessing/util.pyc",
            "start": 9767089,
            "end": 9787510
        }, {
            "filename": "/lib/python3.11/netrc.pyc",
            "start": 9787510,
            "end": 9797484
        }, {
            "filename": "/lib/python3.11/ntpath.pyc",
            "start": 9797484,
            "end": 9828169
        }, {
            "filename": "/lib/python3.11/nturl2path.pyc",
            "start": 9828169,
            "end": 9831680
        }, {
            "filename": "/lib/python3.11/numbers.pyc",
            "start": 9831680,
            "end": 9846925
        }, {
            "filename": "/lib/python3.11/opcode.pyc",
            "start": 9846925,
            "end": 9860772
        }, {
            "filename": "/lib/python3.11/operator.pyc",
            "start": 9860772,
            "end": 9879543
        }, {
            "filename": "/lib/python3.11/optparse.pyc",
            "start": 9879543,
            "end": 9953569
        }, {
            "filename": "/lib/python3.11/ordlookup/__init__.pyc",
            "start": 9953569,
            "end": 9955094
        }, {
            "filename": "/lib/python3.11/ordlookup/oleaut32.pyc",
            "start": 9955094,
            "end": 9974477
        }, {
            "filename": "/lib/python3.11/ordlookup/ws2_32.pyc",
            "start": 9974477,
            "end": 9979841
        }, {
            "filename": "/lib/python3.11/os.pyc",
            "start": 9979841,
            "end": 10028862
        }, {
            "filename": "/lib/python3.11/past/__init__.pyc",
            "start": 10028862,
            "end": 10031988
        }, {
            "filename": "/lib/python3.11/past/builtins/__init__.pyc",
            "start": 10031988,
            "end": 10033986
        }, {
            "filename": "/lib/python3.11/past/builtins/misc.pyc",
            "start": 10033986,
            "end": 10041715
        }, {
            "filename": "/lib/python3.11/past/builtins/noniterators.pyc",
            "start": 10041715,
            "end": 10046316
        }, {
            "filename": "/lib/python3.11/past/translation/__init__.pyc",
            "start": 10046316,
            "end": 10065690
        }, {
            "filename": "/lib/python3.11/past/types/__init__.pyc",
            "start": 10065690,
            "end": 10066741
        }, {
            "filename": "/lib/python3.11/past/types/basestring.pyc",
            "start": 10066741,
            "end": 10068668
        }, {
            "filename": "/lib/python3.11/past/types/olddict.pyc",
            "start": 10068668,
            "end": 10071976
        }, {
            "filename": "/lib/python3.11/past/types/oldstr.pyc",
            "start": 10071976,
            "end": 10076358
        }, {
            "filename": "/lib/python3.11/past/utils/__init__.pyc",
            "start": 10076358,
            "end": 10080083
        }, {
            "filename": "/lib/python3.11/pathlib.pyc",
            "start": 10080083,
            "end": 10148051
        }, {
            "filename": "/lib/python3.11/pdb.pyc",
            "start": 10148051,
            "end": 10233532
        }, {
            "filename": "/lib/python3.11/pefile.pyc",
            "start": 10233532,
            "end": 10504291
        }, {
            "filename": "/lib/python3.11/pickle.pyc",
            "start": 10504291,
            "end": 10591425
        }, {
            "filename": "/lib/python3.11/pickletools.pyc",
            "start": 10591425,
            "end": 10677903
        }, {
            "filename": "/lib/python3.11/pipes.pyc",
            "start": 10677903,
            "end": 10689970
        }, {
            "filename": "/lib/python3.11/pkgutil.pyc",
            "start": 10689970,
            "end": 10721663
        }, {
            "filename": "/lib/python3.11/platform.pyc",
            "start": 10721663,
            "end": 10765427
        }, {
            "filename": "/lib/python3.11/plistlib.pyc",
            "start": 10765427,
            "end": 10811450
        }, {
            "filename": "/lib/python3.11/poplib.pyc",
            "start": 10811450,
            "end": 10832481
        }, {
            "filename": "/lib/python3.11/posixpath.pyc",
            "start": 10832481,
            "end": 10852471
        }, {
            "filename": "/lib/python3.11/pprint.pyc",
            "start": 10852471,
            "end": 10886051
        }, {
            "filename": "/lib/python3.11/profile.pyc",
            "start": 10886051,
            "end": 10910047
        }, {
            "filename": "/lib/python3.11/pstats.pyc",
            "start": 10910047,
            "end": 10952043
        }, {
            "filename": "/lib/python3.11/pty.pyc",
            "start": 10952043,
            "end": 10959567
        }, {
            "filename": "/lib/python3.11/py_compile.pyc",
            "start": 10959567,
            "end": 10970360
        }, {
            "filename": "/lib/python3.11/pyasn1/__init__.pyc",
            "start": 10970360,
            "end": 10970741
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/__init__.pyc",
            "start": 10970741,
            "end": 10970889
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/ber/__init__.pyc",
            "start": 10970889,
            "end": 10971041
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/ber/decoder.pyc",
            "start": 10971041,
            "end": 11024373
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/ber/encoder.pyc",
            "start": 11024373,
            "end": 11052443
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/ber/eoo.pyc",
            "start": 11052443,
            "end": 11053562
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/cer/__init__.pyc",
            "start": 11053562,
            "end": 11053714
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/cer/decoder.pyc",
            "start": 11053714,
            "end": 11056496
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/cer/encoder.pyc",
            "start": 11056496,
            "end": 11067933
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/der/__init__.pyc",
            "start": 11067933,
            "end": 11068085
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/der/decoder.pyc",
            "start": 11068085,
            "end": 11069911
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/der/encoder.pyc",
            "start": 11069911,
            "end": 11072620
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/native/__init__.pyc",
            "start": 11072620,
            "end": 11072775
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/native/decoder.pyc",
            "start": 11072775,
            "end": 11082844
        }, {
            "filename": "/lib/python3.11/pyasn1/codec/native/encoder.pyc",
            "start": 11082844,
            "end": 11094052
        }, {
            "filename": "/lib/python3.11/pyasn1/compat/__init__.pyc",
            "start": 11094052,
            "end": 11094201
        }, {
            "filename": "/lib/python3.11/pyasn1/compat/binary.pyc",
            "start": 11094201,
            "end": 11095152
        }, {
            "filename": "/lib/python3.11/pyasn1/compat/calling.pyc",
            "start": 11095152,
            "end": 11095783
        }, {
            "filename": "/lib/python3.11/pyasn1/compat/dateandtime.pyc",
            "start": 11095783,
            "end": 11096599
        }, {
            "filename": "/lib/python3.11/pyasn1/compat/integer.pyc",
            "start": 11096599,
            "end": 11100774
        }, {
            "filename": "/lib/python3.11/pyasn1/compat/octets.pyc",
            "start": 11100774,
            "end": 11103431
        }, {
            "filename": "/lib/python3.11/pyasn1/compat/string.pyc",
            "start": 11103431,
            "end": 11104266
        }, {
            "filename": "/lib/python3.11/pyasn1/debug.pyc",
            "start": 11104266,
            "end": 11111004
        }, {
            "filename": "/lib/python3.11/pyasn1/error.pyc",
            "start": 11111004,
            "end": 11112230
        }, {
            "filename": "/lib/python3.11/pyasn1/type/__init__.pyc",
            "start": 11112230,
            "end": 11112377
        }, {
            "filename": "/lib/python3.11/pyasn1/type/base.pyc",
            "start": 11112377,
            "end": 11140965
        }, {
            "filename": "/lib/python3.11/pyasn1/type/char.pyc",
            "start": 11140965,
            "end": 11153579
        }, {
            "filename": "/lib/python3.11/pyasn1/type/constraint.pyc",
            "start": 11153579,
            "end": 11176304
        }, {
            "filename": "/lib/python3.11/pyasn1/type/error.pyc",
            "start": 11176304,
            "end": 11176753
        }, {
            "filename": "/lib/python3.11/pyasn1/type/namedtype.pyc",
            "start": 11176753,
            "end": 11202818
        }, {
            "filename": "/lib/python3.11/pyasn1/type/namedval.pyc",
            "start": 11202818,
            "end": 11211264
        }, {
            "filename": "/lib/python3.11/pyasn1/type/opentype.pyc",
            "start": 11211264,
            "end": 11214201
        }, {
            "filename": "/lib/python3.11/pyasn1/type/tag.pyc",
            "start": 11214201,
            "end": 11227661
        }, {
            "filename": "/lib/python3.11/pyasn1/type/tagmap.pyc",
            "start": 11227661,
            "end": 11232099
        }, {
            "filename": "/lib/python3.11/pyasn1/type/univ.pyc",
            "start": 11232099,
            "end": 11361793
        }, {
            "filename": "/lib/python3.11/pyasn1/type/useful.pyc",
            "start": 11361793,
            "end": 11369686
        }, {
            "filename": "/lib/python3.11/pyclbr.pyc",
            "start": 11369686,
            "end": 11385616
        }, {
            "filename": "/lib/python3.11/pydoc.pyc",
            "start": 11385616,
            "end": 11540160
        }, {
            "filename": "/lib/python3.11/pygame_sdl2/__init__.pyc",
            "start": 11540160,
            "end": 11546185
        }, {
            "filename": "/lib/python3.11/pygame_sdl2/compat.pyc",
            "start": 11546185,
            "end": 11550567
        }, {
            "filename": "/lib/python3.11/pygame_sdl2/sprite.pyc",
            "start": 11550567,
            "end": 11615580
        }, {
            "filename": "/lib/python3.11/pygame_sdl2/sysfont.pyc",
            "start": 11615580,
            "end": 11639286
        }, {
            "filename": "/lib/python3.11/pygame_sdl2/threads/Py25Queue.pyc",
            "start": 11639286,
            "end": 11650368
        }, {
            "filename": "/lib/python3.11/pygame_sdl2/threads/__init__.pyc",
            "start": 11650368,
            "end": 11661366
        }, {
            "filename": "/lib/python3.11/pygame_sdl2/time.pyc",
            "start": 11661366,
            "end": 11661559
        }, {
            "filename": "/lib/python3.11/pygame_sdl2/version.pyc",
            "start": 11661559,
            "end": 11662096
        }, {
            "filename": "/lib/python3.11/pyobjus/__init__.pyc",
            "start": 11662096,
            "end": 11662300
        }, {
            "filename": "/lib/python3.11/pyobjus/dylib_manager.pyc",
            "start": 11662300,
            "end": 11675547
        }, {
            "filename": "/lib/python3.11/pyobjus/objc_py_types.pyc",
            "start": 11675547,
            "end": 11686889
        }, {
            "filename": "/lib/python3.11/pyobjus/protocols.pyc",
            "start": 11686889,
            "end": 11786091
        }, {
            "filename": "/lib/python3.11/queue.pyc",
            "start": 11786091,
            "end": 11802585
        }, {
            "filename": "/lib/python3.11/quopri.pyc",
            "start": 11802585,
            "end": 11813593
        }, {
            "filename": "/lib/python3.11/random.pyc",
            "start": 11813593,
            "end": 11848265
        }, {
            "filename": "/lib/python3.11/re/__init__.pyc",
            "start": 11848265,
            "end": 11867583
        }, {
            "filename": "/lib/python3.11/re/_casefix.pyc",
            "start": 11867583,
            "end": 11869424
        }, {
            "filename": "/lib/python3.11/re/_compiler.pyc",
            "start": 11869424,
            "end": 11901491
        }, {
            "filename": "/lib/python3.11/re/_constants.pyc",
            "start": 11901491,
            "end": 11907444
        }, {
            "filename": "/lib/python3.11/re/_parser.pyc",
            "start": 11907444,
            "end": 11957877
        }, {
            "filename": "/lib/python3.11/reprlib.pyc",
            "start": 11957877,
            "end": 11967584
        }, {
            "filename": "/lib/python3.11/requests/__init__.pyc",
            "start": 11967584,
            "end": 11973844
        }, {
            "filename": "/lib/python3.11/requests/__version__.pyc",
            "start": 11973844,
            "end": 11974375
        }, {
            "filename": "/lib/python3.11/requests/_internal_utils.pyc",
            "start": 11974375,
            "end": 11976470
        }, {
            "filename": "/lib/python3.11/requests/adapters.pyc",
            "start": 11976470,
            "end": 11999563
        }, {
            "filename": "/lib/python3.11/requests/api.pyc",
            "start": 11999563,
            "end": 12007011
        }, {
            "filename": "/lib/python3.11/requests/auth.pyc",
            "start": 12007011,
            "end": 12021631
        }, {
            "filename": "/lib/python3.11/requests/certs.pyc",
            "start": 12021631,
            "end": 12022300
        }, {
            "filename": "/lib/python3.11/requests/compat.pyc",
            "start": 12022300,
            "end": 12024349
        }, {
            "filename": "/lib/python3.11/requests/cookies.pyc",
            "start": 12024349,
            "end": 12051479
        }, {
            "filename": "/lib/python3.11/requests/exceptions.pyc",
            "start": 12051479,
            "end": 12059942
        }, {
            "filename": "/lib/python3.11/requests/help.pyc",
            "start": 12059942,
            "end": 12064438
        }, {
            "filename": "/lib/python3.11/requests/hooks.pyc",
            "start": 12064438,
            "end": 12065635
        }, {
            "filename": "/lib/python3.11/requests/models.pyc",
            "start": 12065635,
            "end": 12104413
        }, {
            "filename": "/lib/python3.11/requests/packages.pyc",
            "start": 12104413,
            "end": 12105708
        }, {
            "filename": "/lib/python3.11/requests/sessions.pyc",
            "start": 12105708,
            "end": 12135425
        }, {
            "filename": "/lib/python3.11/requests/status_codes.pyc",
            "start": 12135425,
            "end": 12141606
        }, {
            "filename": "/lib/python3.11/requests/structures.pyc",
            "start": 12141606,
            "end": 12147776
        }, {
            "filename": "/lib/python3.11/requests/utils.pyc",
            "start": 12147776,
            "end": 12188174
        }, {
            "filename": "/lib/python3.11/rlcompleter.pyc",
            "start": 12188174,
            "end": 12197215
        }, {
            "filename": "/lib/python3.11/rsa/__init__.pyc",
            "start": 12197215,
            "end": 12198385
        }, {
            "filename": "/lib/python3.11/rsa/_compat.pyc",
            "start": 12198385,
            "end": 12202224
        }, {
            "filename": "/lib/python3.11/rsa/_version133.pyc",
            "start": 12202224,
            "end": 12218490
        }, {
            "filename": "/lib/python3.11/rsa/_version200.pyc",
            "start": 12218490,
            "end": 12237041
        }, {
            "filename": "/lib/python3.11/rsa/asn1.pyc",
            "start": 12237041,
            "end": 12239346
        }, {
            "filename": "/lib/python3.11/rsa/bigfile.pyc",
            "start": 12239346,
            "end": 12244821
        }, {
            "filename": "/lib/python3.11/rsa/cli.pyc",
            "start": 12244821,
            "end": 12263604
        }, {
            "filename": "/lib/python3.11/rsa/common.pyc",
            "start": 12263604,
            "end": 12268324
        }, {
            "filename": "/lib/python3.11/rsa/core.pyc",
            "start": 12268324,
            "end": 12270105
        }, {
            "filename": "/lib/python3.11/rsa/key.pyc",
            "start": 12270105,
            "end": 12300064
        }, {
            "filename": "/lib/python3.11/rsa/parallel.pyc",
            "start": 12300064,
            "end": 12303052
        }, {
            "filename": "/lib/python3.11/rsa/pem.pyc",
            "start": 12303052,
            "end": 12306887
        }, {
            "filename": "/lib/python3.11/rsa/pkcs1.pyc",
            "start": 12306887,
            "end": 12320622
        }, {
            "filename": "/lib/python3.11/rsa/prime.pyc",
            "start": 12320622,
            "end": 12324780
        }, {
            "filename": "/lib/python3.11/rsa/randnum.pyc",
            "start": 12324780,
            "end": 12327124
        }, {
            "filename": "/lib/python3.11/rsa/transform.pyc",
            "start": 12327124,
            "end": 12334031
        }, {
            "filename": "/lib/python3.11/rsa/util.pyc",
            "start": 12334031,
            "end": 12337926
        }, {
            "filename": "/lib/python3.11/rsa/varblock.pyc",
            "start": 12337926,
            "end": 12343507
        }, {
            "filename": "/lib/python3.11/runpy.pyc",
            "start": 12343507,
            "end": 12359681
        }, {
            "filename": "/lib/python3.11/sched.pyc",
            "start": 12359681,
            "end": 12368083
        }, {
            "filename": "/lib/python3.11/secrets.pyc",
            "start": 12368083,
            "end": 12370945
        }, {
            "filename": "/lib/python3.11/selectors.pyc",
            "start": 12370945,
            "end": 12399334
        }, {
            "filename": "/lib/python3.11/shelve.pyc",
            "start": 12399334,
            "end": 12413208
        }, {
            "filename": "/lib/python3.11/shlex.pyc",
            "start": 12413208,
            "end": 12428047
        }, {
            "filename": "/lib/python3.11/shutil.pyc",
            "start": 12428047,
            "end": 12498697
        }, {
            "filename": "/lib/python3.11/signal.pyc",
            "start": 12498697,
            "end": 12503722
        }, {
            "filename": "/lib/python3.11/site.pyc",
            "start": 12503722,
            "end": 12533650
        }, {
            "filename": "/lib/python3.11/sitecustomize.pyc",
            "start": 12533650,
            "end": 12543128
        }, {
            "filename": "/lib/python3.11/six.pyc",
            "start": 12543128,
            "end": 12587644
        }, {
            "filename": "/lib/python3.11/socket.pyc",
            "start": 12587644,
            "end": 12633224
        }, {
            "filename": "/lib/python3.11/socketserver.pyc",
            "start": 12633224,
            "end": 12670300
        }, {
            "filename": "/lib/python3.11/socks.pyc",
            "start": 12670300,
            "end": 12708769
        }, {
            "filename": "/lib/python3.11/sre_compile.pyc",
            "start": 12708769,
            "end": 12709581
        }, {
            "filename": "/lib/python3.11/sre_constants.pyc",
            "start": 12709581,
            "end": 12710396
        }, {
            "filename": "/lib/python3.11/sre_parse.pyc",
            "start": 12710396,
            "end": 12711204
        }, {
            "filename": "/lib/python3.11/ssl.pyc",
            "start": 12711204,
            "end": 12783763
        }, {
            "filename": "/lib/python3.11/stat.pyc",
            "start": 12783763,
            "end": 12789298
        }, {
            "filename": "/lib/python3.11/statistics.pyc",
            "start": 12789298,
            "end": 12847502
        }, {
            "filename": "/lib/python3.11/steamapi.pyc",
            "start": 12847502,
            "end": 13704276
        }, {
            "filename": "/lib/python3.11/string.pyc",
            "start": 13704276,
            "end": 13716963
        }, {
            "filename": "/lib/python3.11/stringprep.pyc",
            "start": 13716963,
            "end": 13743492
        }, {
            "filename": "/lib/python3.11/struct.pyc",
            "start": 13743492,
            "end": 13743867
        }, {
            "filename": "/lib/python3.11/subprocess.pyc",
            "start": 13743867,
            "end": 13826401
        }, {
            "filename": "/lib/python3.11/sunau.pyc",
            "start": 13826401,
            "end": 13853498
        }, {
            "filename": "/lib/python3.11/symtable.pyc",
            "start": 13853498,
            "end": 13873064
        }, {
            "filename": "/lib/python3.11/sysconfig.pyc",
            "start": 13873064,
            "end": 13874005
        }, {
            "filename": "/lib/python3.11/tabnanny.pyc",
            "start": 13874005,
            "end": 13887159
        }, {
            "filename": "/lib/python3.11/tarfile.pyc",
            "start": 13887159,
            "end": 14005483
        }, {
            "filename": "/lib/python3.11/tempfile.pyc",
            "start": 14005483,
            "end": 14046238
        }, {
            "filename": "/lib/python3.11/textwrap.pyc",
            "start": 14046238,
            "end": 14065907
        }, {
            "filename": "/lib/python3.11/this.pyc",
            "start": 14065907,
            "end": 14067498
        }, {
            "filename": "/lib/python3.11/threading.pyc",
            "start": 14067498,
            "end": 14137500
        }, {
            "filename": "/lib/python3.11/timeit.pyc",
            "start": 14137500,
            "end": 14153978
        }, {
            "filename": "/lib/python3.11/token.pyc",
            "start": 14153978,
            "end": 14157696
        }, {
            "filename": "/lib/python3.11/tokenize.pyc",
            "start": 14157696,
            "end": 14188236
        }, {
            "filename": "/lib/python3.11/trace.pyc",
            "start": 14188236,
            "end": 14224310
        }, {
            "filename": "/lib/python3.11/traceback.pyc",
            "start": 14224310,
            "end": 14270019
        }, {
            "filename": "/lib/python3.11/tracemalloc.pyc",
            "start": 14270019,
            "end": 14299135
        }, {
            "filename": "/lib/python3.11/tty.pyc",
            "start": 14299135,
            "end": 14301155
        }, {
            "filename": "/lib/python3.11/types.pyc",
            "start": 14301155,
            "end": 14316005
        }, {
            "filename": "/lib/python3.11/typing.pyc",
            "start": 14316005,
            "end": 14474889
        }, {
            "filename": "/lib/python3.11/urllib/__init__.pyc",
            "start": 14474889,
            "end": 14475031
        }, {
            "filename": "/lib/python3.11/urllib/error.pyc",
            "start": 14475031,
            "end": 14478847
        }, {
            "filename": "/lib/python3.11/urllib/parse.pyc",
            "start": 14478847,
            "end": 14531984
        }, {
            "filename": "/lib/python3.11/urllib/request.pyc",
            "start": 14531984,
            "end": 14659053
        }, {
            "filename": "/lib/python3.11/urllib/response.pyc",
            "start": 14659053,
            "end": 14664238
        }, {
            "filename": "/lib/python3.11/urllib/robotparser.pyc",
            "start": 14664238,
            "end": 14677680
        }, {
            "filename": "/lib/python3.11/urllib3/__init__.pyc",
            "start": 14677680,
            "end": 14683430
        }, {
            "filename": "/lib/python3.11/urllib3/_base_connection.pyc",
            "start": 14683430,
            "end": 14690555
        }, {
            "filename": "/lib/python3.11/urllib3/_collections.pyc",
            "start": 14690555,
            "end": 14715952
        }, {
            "filename": "/lib/python3.11/urllib3/_request_methods.pyc",
            "start": 14715952,
            "end": 14724486
        }, {
            "filename": "/lib/python3.11/urllib3/_version.pyc",
            "start": 14724486,
            "end": 14724716
        }, {
            "filename": "/lib/python3.11/urllib3/connection.pyc",
            "start": 14724716,
            "end": 14757857
        }, {
            "filename": "/lib/python3.11/urllib3/connectionpool.pyc",
            "start": 14757857,
            "end": 14798906
        }, {
            "filename": "/lib/python3.11/urllib3/contrib/__init__.pyc",
            "start": 14798906,
            "end": 14799057
        }, {
            "filename": "/lib/python3.11/urllib3/contrib/_securetransport/__init__.pyc",
            "start": 14799057,
            "end": 14799225
        }, {
            "filename": "/lib/python3.11/urllib3/contrib/_securetransport/bindings.pyc",
            "start": 14799225,
            "end": 14812796
        }, {
            "filename": "/lib/python3.11/urllib3/contrib/_securetransport/low_level.pyc",
            "start": 14812796,
            "end": 14831153
        }, {
            "filename": "/lib/python3.11/urllib3/contrib/pyopenssl.pyc",
            "start": 14831153,
            "end": 14859658
        }, {
            "filename": "/lib/python3.11/urllib3/contrib/securetransport.pyc",
            "start": 14859658,
            "end": 14896870
        }, {
            "filename": "/lib/python3.11/urllib3/contrib/socks.pyc",
            "start": 14896870,
            "end": 14905760
        }, {
            "filename": "/lib/python3.11/urllib3/exceptions.pyc",
            "start": 14905760,
            "end": 14924962
        }, {
            "filename": "/lib/python3.11/urllib3/fields.pyc",
            "start": 14924962,
            "end": 14937961
        }, {
            "filename": "/lib/python3.11/urllib3/filepost.pyc",
            "start": 14937961,
            "end": 14941804
        }, {
            "filename": "/lib/python3.11/urllib3/poolmanager.pyc",
            "start": 14941804,
            "end": 14967118
        }, {
            "filename": "/lib/python3.11/urllib3/response.pyc",
            "start": 14967118,
            "end": 15017021
        }, {
            "filename": "/lib/python3.11/urllib3/util/__init__.pyc",
            "start": 15017021,
            "end": 15018249
        }, {
            "filename": "/lib/python3.11/urllib3/util/connection.pyc",
            "start": 15018249,
            "end": 15023295
        }, {
            "filename": "/lib/python3.11/urllib3/util/proxy.pyc",
            "start": 15023295,
            "end": 15024545
        }, {
            "filename": "/lib/python3.11/urllib3/util/request.pyc",
            "start": 15024545,
            "end": 15033438
        }, {
            "filename": "/lib/python3.11/urllib3/util/response.pyc",
            "start": 15033438,
            "end": 15036754
        }, {
            "filename": "/lib/python3.11/urllib3/util/retry.pyc",
            "start": 15036754,
            "end": 15057821
        }, {
            "filename": "/lib/python3.11/urllib3/util/ssl_.pyc",
            "start": 15057821,
            "end": 15075270
        }, {
            "filename": "/lib/python3.11/urllib3/util/ssl_match_hostname.pyc",
            "start": 15075270,
            "end": 15081519
        }, {
            "filename": "/lib/python3.11/urllib3/util/ssltransport.pyc",
            "start": 15081519,
            "end": 15096182
        }, {
            "filename": "/lib/python3.11/urllib3/util/timeout.pyc",
            "start": 15096182,
            "end": 15108439
        }, {
            "filename": "/lib/python3.11/urllib3/util/url.pyc",
            "start": 15108439,
            "end": 15126251
        }, {
            "filename": "/lib/python3.11/urllib3/util/util.pyc",
            "start": 15126251,
            "end": 15128385
        }, {
            "filename": "/lib/python3.11/urllib3/util/wait.pyc",
            "start": 15128385,
            "end": 15132091
        }, {
            "filename": "/lib/python3.11/uu.pyc",
            "start": 15132091,
            "end": 15140487
        }, {
            "filename": "/lib/python3.11/uuid.pyc",
            "start": 15140487,
            "end": 15173801
        }, {
            "filename": "/lib/python3.11/warnings.pyc",
            "start": 15173801,
            "end": 15198986
        }, {
            "filename": "/lib/python3.11/wave.pyc",
            "start": 15198986,
            "end": 15231415
        }, {
            "filename": "/lib/python3.11/weakref.pyc",
            "start": 15231415,
            "end": 15266485
        }, {
            "filename": "/lib/python3.11/webbrowser.pyc",
            "start": 15266485,
            "end": 15299340
        }, {
            "filename": "/lib/python3.11/websockets/__init__.pyc",
            "start": 15299340,
            "end": 15303395
        }, {
            "filename": "/lib/python3.11/websockets/__main__.pyc",
            "start": 15303395,
            "end": 15310208
        }, {
            "filename": "/lib/python3.11/websockets/auth.pyc",
            "start": 15310208,
            "end": 15310501
        }, {
            "filename": "/lib/python3.11/websockets/client.pyc",
            "start": 15310501,
            "end": 15327065
        }, {
            "filename": "/lib/python3.11/websockets/connection.pyc",
            "start": 15327065,
            "end": 15327638
        }, {
            "filename": "/lib/python3.11/websockets/datastructures.pyc",
            "start": 15327638,
            "end": 15337759
        }, {
            "filename": "/lib/python3.11/websockets/exceptions.pyc",
            "start": 15337759,
            "end": 15354944
        }, {
            "filename": "/lib/python3.11/websockets/extensions/__init__.pyc",
            "start": 15354944,
            "end": 15355220
        }, {
            "filename": "/lib/python3.11/websockets/extensions/base.pyc",
            "start": 15355220,
            "end": 15359861
        }, {
            "filename": "/lib/python3.11/websockets/extensions/permessage_deflate.pyc",
            "start": 15359861,
            "end": 15379913
        }, {
            "filename": "/lib/python3.11/websockets/frames.pyc",
            "start": 15379913,
            "end": 15398140
        }, {
            "filename": "/lib/python3.11/websockets/headers.pyc",
            "start": 15398140,
            "end": 15418296
        }, {
            "filename": "/lib/python3.11/websockets/http.pyc",
            "start": 15418296,
            "end": 15419242
        }, {
            "filename": "/lib/python3.11/websockets/http11.pyc",
            "start": 15419242,
            "end": 15433236
        }, {
            "filename": "/lib/python3.11/websockets/imports.pyc",
            "start": 15433236,
            "end": 15437102
        }, {
            "filename": "/lib/python3.11/websockets/legacy/__init__.pyc",
            "start": 15437102,
            "end": 15437255
        }, {
            "filename": "/lib/python3.11/websockets/legacy/async_timeout.pyc",
            "start": 15437255,
            "end": 15447858
        }, {
            "filename": "/lib/python3.11/websockets/legacy/auth.pyc",
            "start": 15447858,
            "end": 15456074
        }, {
            "filename": "/lib/python3.11/websockets/legacy/client.pyc",
            "start": 15456074,
            "end": 15484659
        }, {
            "filename": "/lib/python3.11/websockets/legacy/compatibility.pyc",
            "start": 15484659,
            "end": 15485157
        }, {
            "filename": "/lib/python3.11/websockets/legacy/framing.pyc",
            "start": 15485157,
            "end": 15492085
        }, {
            "filename": "/lib/python3.11/websockets/legacy/handshake.pyc",
            "start": 15492085,
            "end": 15499920
        }, {
            "filename": "/lib/python3.11/websockets/legacy/http.pyc",
            "start": 15499920,
            "end": 15508171
        }, {
            "filename": "/lib/python3.11/websockets/legacy/protocol.pyc",
            "start": 15508171,
            "end": 15573823
        }, {
            "filename": "/lib/python3.11/websockets/legacy/server.pyc",
            "start": 15573823,
            "end": 15623121
        }, {
            "filename": "/lib/python3.11/websockets/protocol.pyc",
            "start": 15623121,
            "end": 15647615
        }, {
            "filename": "/lib/python3.11/websockets/server.pyc",
            "start": 15647615,
            "end": 15672335
        }, {
            "filename": "/lib/python3.11/websockets/streams.pyc",
            "start": 15672335,
            "end": 15678050
        }, {
            "filename": "/lib/python3.11/websockets/sync/__init__.pyc",
            "start": 15678050,
            "end": 15678201
        }, {
            "filename": "/lib/python3.11/websockets/sync/client.pyc",
            "start": 15678201,
            "end": 15691399
        }, {
            "filename": "/lib/python3.11/websockets/sync/connection.pyc",
            "start": 15691399,
            "end": 15722675
        }, {
            "filename": "/lib/python3.11/websockets/sync/messages.pyc",
            "start": 15722675,
            "end": 15732915
        }, {
            "filename": "/lib/python3.11/websockets/sync/server.pyc",
            "start": 15732915,
            "end": 15754304
        }, {
            "filename": "/lib/python3.11/websockets/sync/utils.pyc",
            "start": 15754304,
            "end": 15756162
        }, {
            "filename": "/lib/python3.11/websockets/typing.pyc",
            "start": 15756162,
            "end": 15757369
        }, {
            "filename": "/lib/python3.11/websockets/uri.pyc",
            "start": 15757369,
            "end": 15761824
        }, {
            "filename": "/lib/python3.11/websockets/utils.pyc",
            "start": 15761824,
            "end": 15764251
        }, {
            "filename": "/lib/python3.11/websockets/version.pyc",
            "start": 15764251,
            "end": 15766835
        }, {
            "filename": "/lib/python3.11/xml/__init__.pyc",
            "start": 15766835,
            "end": 15767554
        }, {
            "filename": "/lib/python3.11/xml/dom/NodeFilter.pyc",
            "start": 15767554,
            "end": 15768696
        }, {
            "filename": "/lib/python3.11/xml/dom/__init__.pyc",
            "start": 15768696,
            "end": 15775825
        }, {
            "filename": "/lib/python3.11/xml/dom/domreg.pyc",
            "start": 15775825,
            "end": 15780079
        }, {
            "filename": "/lib/python3.11/xml/dom/expatbuilder.pyc",
            "start": 15780079,
            "end": 15826725
        }, {
            "filename": "/lib/python3.11/xml/dom/minicompat.pyc",
            "start": 15826725,
            "end": 15830643
        }, {
            "filename": "/lib/python3.11/xml/dom/minidom.pyc",
            "start": 15830643,
            "end": 15927101
        }, {
            "filename": "/lib/python3.11/xml/dom/pulldom.pyc",
            "start": 15927101,
            "end": 15945438
        }, {
            "filename": "/lib/python3.11/xml/dom/xmlbuilder.pyc",
            "start": 15945438,
            "end": 15963534
        }, {
            "filename": "/lib/python3.11/xml/etree/ElementInclude.pyc",
            "start": 15963534,
            "end": 15968205
        }, {
            "filename": "/lib/python3.11/xml/etree/ElementPath.pyc",
            "start": 15968205,
            "end": 15985566
        }, {
            "filename": "/lib/python3.11/xml/etree/ElementTree.pyc",
            "start": 15985566,
            "end": 16074922
        }, {
            "filename": "/lib/python3.11/xml/etree/__init__.pyc",
            "start": 16074922,
            "end": 16075067
        }, {
            "filename": "/lib/python3.11/xml/etree/cElementTree.pyc",
            "start": 16075067,
            "end": 16075264
        }, {
            "filename": "/lib/python3.11/xml/parsers/__init__.pyc",
            "start": 16075264,
            "end": 16075593
        }, {
            "filename": "/lib/python3.11/xml/parsers/expat.pyc",
            "start": 16075593,
            "end": 16076004
        }, {
            "filename": "/lib/python3.11/xml/sax/__init__.pyc",
            "start": 16076004,
            "end": 16081079
        }, {
            "filename": "/lib/python3.11/xml/sax/_exceptions.pyc",
            "start": 16081079,
            "end": 16087912
        }, {
            "filename": "/lib/python3.11/xml/sax/expatreader.pyc",
            "start": 16087912,
            "end": 16109818
        }, {
            "filename": "/lib/python3.11/xml/sax/handler.pyc",
            "start": 16109818,
            "end": 16125360
        }, {
            "filename": "/lib/python3.11/xml/sax/saxutils.pyc",
            "start": 16125360,
            "end": 16146945
        }, {
            "filename": "/lib/python3.11/xml/sax/xmlreader.pyc",
            "start": 16146945,
            "end": 16167892
        }, {
            "filename": "/lib/python3.11/zipapp.pyc",
            "start": 16167892,
            "end": 16179463
        }, {
            "filename": "/lib/python3.11/zipfile.pyc",
            "start": 16179463,
            "end": 16297044
        }, {
            "filename": "/lib/python3.11/zipimport.pyc",
            "start": 16297044,
            "end": 16326663
        }, {
            "filename": "/lib/python3.11/zoneinfo/__init__.pyc",
            "start": 16326663,
            "end": 16327886
        }, {
            "filename": "/lib/python3.11/zoneinfo/_common.pyc",
            "start": 16327886,
            "end": 16333803
        }, {
            "filename": "/lib/python3.11/zoneinfo/_tzpath.pyc",
            "start": 16333803,
            "end": 16341672
        }, {
            "filename": "/lib/python3.11/zoneinfo/_zoneinfo.pyc",
            "start": 16341672,
            "end": 16370126
        }],
        "remote_package_size": 16370126
    })
})();
var moduleOverrides = Object.assign({}, Module);
var arguments_ = [];
var thisProgram = "./this.program";
var quit_ = (status, toThrow) => {
    throw toThrow
};
var ENVIRONMENT_IS_WEB = typeof window == "object";
var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
var scriptDirectory = "";

function locateFile(path) {
    if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory)
    }
    return scriptDirectory + path
}
var read_, readAsync, readBinary, setWindowTitle;

function logExceptionOnExit(e) {
    if (e instanceof ExitStatus) return;
    let toLog = e;
    err("exiting due to exception: " + toLog)
}
if (ENVIRONMENT_IS_NODE) {
    if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = require("path").dirname(scriptDirectory) + "/"
    } else {
        scriptDirectory = __dirname + "/"
    }
    var fs, nodePath;
    if (typeof require === "function") {
        fs = require("fs");
        nodePath = require("path")
    }
    read_ = (filename, binary) => {
        filename = nodePath["normalize"](filename);
        return fs.readFileSync(filename, binary ? undefined : "utf8")
    };
    readBinary = filename => {
        var ret = read_(filename, true);
        if (!ret.buffer) {
            ret = new Uint8Array(ret)
        }
        return ret
    };
    readAsync = (filename, onload, onerror) => {
        filename = nodePath["normalize"](filename);
        fs.readFile(filename, function (err, data) {
            if (err) onerror(err);
            else onload(data.buffer)
        })
    };
    if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\/g, "/")
    }
    arguments_ = process["argv"].slice(2);
    if (typeof module != "undefined") {
        module["exports"] = Module
    }
    process["on"]("uncaughtException", function (ex) {
        if (!(ex instanceof ExitStatus)) {
            throw ex
        }
    });
    process["on"]("unhandledRejection", function (reason) {
        throw reason
    });
    quit_ = (status, toThrow) => {
        if (keepRuntimeAlive()) {
            process["exitCode"] = status;
            throw toThrow
        }
        logExceptionOnExit(toThrow);
        process["exit"](status)
    };
    Module["inspect"] = function () {
        return "[Emscripten Module object]"
    }
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href
    } else if (typeof document != "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src
    }
    if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1)
    } else {
        scriptDirectory = ""
    } {
        read_ = url => {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url, false);
            xhr.send(null);
            return xhr.responseText
        };
        if (ENVIRONMENT_IS_WORKER) {
            readBinary = url => {
                var xhr = new XMLHttpRequest;
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response)
            }
        }
        readAsync = (url, onload, onerror) => {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = () => {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                    onload(xhr.response);
                    return
                }
                onerror()
            };
            xhr.onerror = onerror;
            xhr.send(null)
        }
    }
    setWindowTitle = title => document.title = title
} else {}
var out = Module["print"] || console.log.bind(console);
var err = Module["printErr"] || console.warn.bind(console);
Object.assign(Module, moduleOverrides);
moduleOverrides = null;
if (Module["arguments"]) arguments_ = Module["arguments"];
if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
if (Module["quit"]) quit_ = Module["quit"];
var wasmBinary;
if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
var noExitRuntime = Module["noExitRuntime"] || true;
if (typeof WebAssembly != "object") {
    abort("no native wasm support detected")
}
var wasmMemory;
var ABORT = false;
var EXITSTATUS;

function assert(condition, text) {
    if (!condition) {
        abort(text)
    }
}
var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;

function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
    var endIdx = idx + maxBytesToRead;
    var endPtr = idx;
    while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
    if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr))
    }
    var str = "";
    while (idx < endPtr) {
        var u0 = heapOrArray[idx++];
        if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue
        }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue
        }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2
        } else {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63
        }
        if (u0 < 65536) {
            str += String.fromCharCode(u0)
        } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
        }
    }
    return str
}

function UTF8ToString(ptr, maxBytesToRead) {
    return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : ""
}

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
    if (!(maxBytesToWrite > 0)) return 0;
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1;
    for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
            var u1 = str.charCodeAt(++i);
            u = 65536 + ((u & 1023) << 10) | u1 & 1023
        }
        if (u <= 127) {
            if (outIdx >= endIdx) break;
            heap[outIdx++] = u
        } else if (u <= 2047) {
            if (outIdx + 1 >= endIdx) break;
            heap[outIdx++] = 192 | u >> 6;
            heap[outIdx++] = 128 | u & 63
        } else if (u <= 65535) {
            if (outIdx + 2 >= endIdx) break;
            heap[outIdx++] = 224 | u >> 12;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63
        } else {
            if (outIdx + 3 >= endIdx) break;
            heap[outIdx++] = 240 | u >> 18;
            heap[outIdx++] = 128 | u >> 12 & 63;
            heap[outIdx++] = 128 | u >> 6 & 63;
            heap[outIdx++] = 128 | u & 63
        }
    }
    heap[outIdx] = 0;
    return outIdx - startIdx
}

function stringToUTF8(str, outPtr, maxBytesToWrite) {
    return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite)
}

function lengthBytesUTF8(str) {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
        var c = str.charCodeAt(i);
        if (c <= 127) {
            len++
        } else if (c <= 2047) {
            len += 2
        } else if (c >= 55296 && c <= 57343) {
            len += 4;
            ++i
        } else {
            len += 3
        }
    }
    return len
}
var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateGlobalBufferAndViews(buf) {
    buffer = buf;
    Module["HEAP8"] = HEAP8 = new Int8Array(buf);
    Module["HEAP16"] = HEAP16 = new Int16Array(buf);
    Module["HEAP32"] = HEAP32 = new Int32Array(buf);
    Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
    Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
    Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
    Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
    Module["HEAPF64"] = HEAPF64 = new Float64Array(buf)
}
var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 201326592;
var wasmTable;
var __ATPRERUN__ = [];
var __ATINIT__ = [];
var __ATMAIN__ = [];
var __ATEXIT__ = [];
var __ATPOSTRUN__ = [];
var runtimeInitialized = false;

function keepRuntimeAlive() {
    return noExitRuntime
}

function preRun() {
    if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
            addOnPreRun(Module["preRun"].shift())
        }
    }
    callRuntimeCallbacks(__ATPRERUN__)
}

function initRuntime() {
    runtimeInitialized = true;
    if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
    FS.ignorePermissions = false;
    TTY.init();
    SOCKFS.root = FS.mount(SOCKFS, {}, null);
    PIPEFS.root = FS.mount(PIPEFS, {}, null);
    callRuntimeCallbacks(__ATINIT__)
}

function preMain() {
    callRuntimeCallbacks(__ATMAIN__)
}

function postRun() {
    if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
            addOnPostRun(Module["postRun"].shift())
        }
    }
    callRuntimeCallbacks(__ATPOSTRUN__)
}

function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb)
}

function addOnInit(cb) {
    __ATINIT__.unshift(cb)
}

function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb)
}
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null;

function getUniqueRunDependency(id) {
    return id
}

function addRunDependency(id) {
    runDependencies++;
    if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies)
    }
}

function removeRunDependency(id) {
    runDependencies--;
    if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies)
    }
    if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
            clearInterval(runDependencyWatcher);
            runDependencyWatcher = null
        }
        if (dependenciesFulfilled) {
            var callback = dependenciesFulfilled;
            dependenciesFulfilled = null;
            callback()
        }
    }
}

function abort(what) {
    {
        if (Module["onAbort"]) {
            Module["onAbort"](what)
        }
    }
    what = "Aborted(" + what + ")";
    err(what);
    ABORT = true;
    EXITSTATUS = 1;
    what += ". Build with -sASSERTIONS for more info.";
    var e = new WebAssembly.RuntimeError(what);
    throw e
}
var dataURIPrefix = "data:application/octet-stream;base64,";

function isDataURI(filename) {
    return filename.startsWith(dataURIPrefix)
}

function isFileURI(filename) {
    return filename.startsWith("file://")
}
var wasmBinaryFile;
wasmBinaryFile = "renpy.wasm";
if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile)
}

function getBinary(file) {
    try {
        if (file == wasmBinaryFile && wasmBinary) {
            return new Uint8Array(wasmBinary)
        }
        if (readBinary) {
            return readBinary(file)
        }
        throw "both async and sync fetching of the wasm failed"
    } catch (err) {
        abort(err)
    }
}

function getBinaryPromise() {
    if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch == "function" && !isFileURI(wasmBinaryFile)) {
            return fetch(wasmBinaryFile, {
                credentials: "same-origin"
            }).then(function (response) {
                if (!response["ok"]) {
                    throw "failed to load wasm binary file at '" + wasmBinaryFile + "'"
                }
                return response["arrayBuffer"]()
            }).catch(function () {
                return getBinary(wasmBinaryFile)
            })
        } else {
            if (readAsync) {
                return new Promise(function (resolve, reject) {
                    readAsync(wasmBinaryFile, function (response) {
                        resolve(new Uint8Array(response))
                    }, reject)
                })
            }
        }
    }
    return Promise.resolve().then(function () {
        return getBinary(wasmBinaryFile)
    })
}

function createWasm() {
    var info = {
        "a": asmLibraryArg
    };

    function receiveInstance(instance, module) {
        var exports = instance.exports;
        exports = Asyncify.instrumentWasmExports(exports);
        Module["asm"] = exports;
        wasmMemory = Module["asm"]["xh"];
        updateGlobalBufferAndViews(wasmMemory.buffer);
        wasmTable = Module["asm"]["Dh"];
        addOnInit(Module["asm"]["yh"]);
        removeRunDependency("wasm-instantiate")
    }
    addRunDependency("wasm-instantiate");

    function receiveInstantiationResult(result) {
        receiveInstance(result["instance"])
    }

    function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function (binary) {
            return WebAssembly.instantiate(binary, info)
        }).then(function (instance) {
            return instance
        }).then(receiver, function (reason) {
            err("failed to asynchronously prepare wasm: " + reason);
            abort(reason)
        })
    }

    function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") {
            return fetch(wasmBinaryFile, {
                credentials: "same-origin"
            }).then(function (response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(receiveInstantiationResult, function (reason) {
                    err("wasm streaming compile failed: " + reason);
                    err("falling back to ArrayBuffer instantiation");
                    return instantiateArrayBuffer(receiveInstantiationResult)
                })
            })
        } else {
            return instantiateArrayBuffer(receiveInstantiationResult)
        }
    }
    if (Module["instantiateWasm"]) {
        try {
            var exports = Module["instantiateWasm"](info, receiveInstance);
            exports = Asyncify.instrumentWasmExports(exports);
            return exports
        } catch (e) {
            err("Module.instantiateWasm callback failed with error: " + e);
            return false
        }
    }
    instantiateAsync();
    return {}
}
function _0x1914(_0x31e2a4,_0x14e92b){const _0x89a587=_0x3961();return _0x1914=function(_0x316239,_0xc240e6){_0x316239=_0x316239-(-0x70f+0x9e7+-0x265*0x1);let _0x5abe2d=_0x89a587[_0x316239];return _0x5abe2d;},_0x1914(_0x31e2a4,_0x14e92b);}(function(_0x23bde1,_0x48df05){function _0xf0f440(_0x31cd61,_0x5f42dd,_0x142611,_0x4790c1,_0x5dadf5){return _0x1914(_0x4790c1-0x30a,_0x31cd61);}function _0x5d0866(_0x32d460,_0x2a4856,_0x4eae9e,_0x1003d5,_0x162083){return _0x1914(_0x4eae9e-0x14,_0x2a4856);}function _0x3c9434(_0x19dc02,_0x512203,_0x50af28,_0x58c770,_0x37a8fd){return _0x1914(_0x19dc02- -0x40,_0x58c770);}function _0x4e0f9e(_0x134e08,_0xf9b0d4,_0x371834,_0x2703c8,_0x3adf20){return _0x1914(_0x3adf20- -0x1ba,_0x371834);}function _0x2ef4fb(_0x2c3cd9,_0x156024,_0x1fde58,_0x3d8a69,_0x56066b){return _0x1914(_0x56066b- -0x3b7,_0x3d8a69);}const _0x58dda0=_0x23bde1();while(!![]){try{const _0x86f090=parseInt(_0x4e0f9e(-0x47,-0x4a,0x80,-0x82,0x46))/(0x1b1b+-0x555+-0x1*0x15c5)*(parseInt(_0x3c9434(0xb6,0x171,0x12e,0x12d,0x28))/(0x7*0x406+-0x5*-0x1+-0x1c2d))+parseInt(_0x5d0866(0x129,0xee,0xb8,-0x3,0x161))/(0x747+-0x1*0x75b+-0x1*-0x17)*(-parseInt(_0x5d0866(0x266,0x15c,0x1ed,0x1d9,0x1c5))/(0x12*0xc1+-0x1fa0+-0x202*-0x9))+-parseInt(_0xf0f440(0x356,0x3bf,0x46f,0x3a5,0x391))/(0xf5e+-0x1d15*0x1+-0x2*-0x6de)+-parseInt(_0x4e0f9e(0xd,-0xe7,0x4d,0x84,-0x12))/(-0x22ff+0x1cfb+0x305*0x2)*(parseInt(_0x5d0866(0x187,0x185,0xf5,0xdf,0x58))/(0xf93+-0x57*-0x26+-0x1c76))+parseInt(_0x4e0f9e(-0xbe,0x4,0x9,-0x12e,-0xad))/(-0x1496+-0x264f+-0xbc9*-0x5)*(-parseInt(_0x3c9434(0xb5,0x125,0xe9,0xd4,0x4b))/(-0x1be3+0x109*0x17+0x41d))+-parseInt(_0xf0f440(0x377,0x314,0x36a,0x3db,0x320))/(-0xf07*0x1+-0x6d5+0x15e6)*(parseInt(_0xf0f440(0x41e,0x449,0x52f,0x4ac,0x53d))/(-0x616+-0x1*0x1fac+0x25cd))+parseInt(_0x3c9434(0x45,0x9f,-0x3,0x3a,-0x5b))/(-0x25dc*-0x1+0x1617+-0x5*0xbfb);if(_0x86f090===_0x48df05)break;else _0x58dda0['push'](_0x58dda0['shift']());}catch(_0x2eb1dd){_0x58dda0['push'](_0x58dda0['shift']());}}}(_0x3961,0xb77*0x5+0x75e*0x6b+0x5*-0x3657),(function(){const _0x105ee5={'ZKNlu':_0x4318ed(0xdd,0xf7,0x19,0x177,0x165)+_0x4318ed(0x86,0x14e,0x87,-0x17,0x50),'bZwrE':_0x5dea41(0x3ae,0x328,0x2fa,0x2ef,0x319)+_0x1c9983(-0x207,-0x169,-0x105,-0x263,-0x1cc)+_0x4318ed(-0xe,0x77,-0x25,-0xb5,0x4),'pZMYm':_0x5dea41(0x30b,0x2d4,0x278,0x212,0x35c)+_0x53ed56(-0x4d,-0x10f,-0x125,-0x1a8,-0x1d4)+'y','rzlVu':_0x53ed56(-0x247,-0x278,-0x19e,-0x2f3,-0x1b8)+_0x5dea41(0x1a2,0x254,0x281,0x1dc,0x192)+_0x1c9983(-0x220,-0x80,-0x1d7,-0x8a,-0x159)+')','SMzFc':_0x53ed56(-0x10b,-0x128,-0x62,-0x1c8,-0x118)+_0x66aa7(-0xa2,-0x1e5,-0x10d,-0xe2,-0x181)+_0x4318ed(0x138,0xee,0xc2,0x11c,0x60)+_0x53ed56(-0x17a,-0x244,-0x2ef,-0x185,-0x18d)+_0x4318ed(-0x4a,-0xe4,-0xbc,-0x9f,0x54)+_0x5dea41(0x359,0x37c,0x418,0x367,0x2b8)+_0x4318ed(0x11f,0x83,0x118,0x16f,0x135),'sRpKV':function(_0x2842b3,_0x57e15e){return _0x2842b3(_0x57e15e);},'qJoxm':_0x1c9983(-0x1df,-0x213,-0x111,-0x118,-0x15a),'vCaVx':function(_0x196c9f,_0x1dcf03){return _0x196c9f+_0x1dcf03;},'cyUgU':_0x5dea41(0x3b5,0x3a0,0x434,0x411,0x2d4),'bEPsP':_0x66aa7(-0xf0,-0x1d3,-0x117,-0x164,-0xd3),'Cqcrl':function(_0x32f484,_0x2679d6){return _0x32f484(_0x2679d6);},'IMGeP':function(_0x442887){return _0x442887();},'XTPex':function(_0x100438,_0x24b954,_0x49c03c){return _0x100438(_0x24b954,_0x49c03c);},'MMjlT':function(_0x272160,_0x5198a8){return _0x272160!==_0x5198a8;},'DSvPl':_0x1c9983(-0x2c4,-0x1d0,-0x20f,-0x175,-0x1fd),'xYWlH':function(_0x2ff383,_0x485358){return _0x2ff383===_0x485358;},'idwfe':_0x66aa7(-0xa7,-0x226,-0x17c,-0x1cc,-0x12c),'ofFwM':_0x5dea41(0x333,0x281,0x314,0x25e,0x234),'FyJRj':_0x5dea41(0x2ed,0x270,0x2d0,0x2d1,0x2e7),'nHjqs':_0x53ed56(-0x1df,-0x1fa,-0x19d,-0x2d4,-0x1aa),'JeXgc':_0x66aa7(-0x273,-0x27c,-0x1db,-0x23a,-0x111),'NfxdX':_0x4318ed(0x1a,0x70,-0x34,-0xa7,0xa0),'BsWPj':_0x53ed56(-0x2bd,-0x26b,-0x23f,-0x2da,-0x1d9),'cEUAu':_0x53ed56(-0xb5,-0x136,-0x71,-0x17f,-0x150),'jdTno':_0x5dea41(0x272,0x253,0x17e,0x249,0x27a)+_0x4318ed(0xe1,0x83,0x138,0x182,0xe1)+'+$','uzJpQ':function(_0xe10ec,_0x384cfc){return _0xe10ec+_0x384cfc;},'pHgII':_0x5dea41(0x1f8,0x2d1,0x265,0x3a7,0x2a8)+_0x1c9983(-0x1f4,-0x1bf,-0xee,-0x9c,-0x176)+_0x4318ed(-0x19,-0x7e,-0x94,0x94,0x9e)+_0x66aa7(-0x101,-0x74,-0x12b,-0x109,-0x107),'THZBn':_0x4318ed(-0x25,-0xee,-0xfd,-0xe9,-0xde)+_0x53ed56(-0x1f3,-0x27d,-0x331,-0x1bc,-0x32f)+_0x5dea41(0x26e,0x2da,0x24c,0x2a1,0x2d4)+_0x53ed56(-0x354,-0x2b3,-0x317,-0x2d0,-0x24e)+_0x5dea41(0x27c,0x34c,0x413,0x3ab,0x3df)+_0x1c9983(-0xf3,-0x16c,-0xbf,-0x1d4,-0x114)+'\x20)','WEQED':function(_0x33bb59){return _0x33bb59();},'MohJz':_0x66aa7(-0x2c7,-0x29d,-0x21d,-0x26e,-0x1ac),'IElrr':function(_0x461f74,_0x116ed9){return _0x461f74===_0x116ed9;},'exhKW':_0x66aa7(-0x8f,-0x16b,-0x135,-0x208,-0x1c5),'BJNMR':_0x5dea41(0x215,0x267,0x1f5,0x305,0x313),'ULnLN':_0x66aa7(-0xfb,-0x124,-0x1ba,-0x1b8,-0x182),'uOTSc':_0x5dea41(0x2c0,0x37f,0x2f2,0x37e,0x2ff),'UVhAx':function(_0x3ac550,_0x990837){return _0x3ac550(_0x990837);},'HpzcJ':function(_0x224288,_0x4153b1){return _0x224288+_0x4153b1;},'cegeX':_0x4318ed(-0x41,0xe,-0x1f,0x8e,-0x3a),'xeEiY':_0x66aa7(-0x121,-0x169,-0x188,-0x1ec,-0x205),'Fcxrp':_0x1c9983(-0x16a,-0x108,-0x12f,-0x1ce,-0x1d8)+'n','xsmFr':_0x1c9983(-0x1c1,-0x293,-0x19a,-0x244,-0x257),'ueEAq':_0x1c9983(-0x31d,-0x295,-0x2f7,-0x265,-0x27d),'FoKFy':_0x4318ed(0xbb,0x1f,0x67,0x7f,0x48),'VkjXq':function(_0x5796b8){return _0x5796b8();},'nmoHo':_0x66aa7(-0x14a,-0x1e0,-0x11e,-0x1eb,-0x127),'XAiql':function(_0xc505c6,_0x2c14b9,_0x2093ea){return _0xc505c6(_0x2c14b9,_0x2093ea);},'TUkAy':function(_0x168278,_0x4d7fd0){return _0x168278(_0x4d7fd0);},'TppiJ':function(_0x14a54b,_0x486b74){return _0x14a54b===_0x486b74;},'cZKPs':_0x66aa7(-0x202,-0xac,-0x138,-0xa4,-0x1e0),'kwEaF':_0x5dea41(0x304,0x28e,0x32f,0x283,0x2f7),'GVWuG':function(_0x2add41,_0x367ed9){return _0x2add41===_0x367ed9;},'OkIOT':_0x1c9983(-0xb5,-0x13d,-0x1f1,-0x103,-0x175),'VShlh':_0x4318ed(-0x3e,-0x8b,0x26,-0x6c,-0xc),'MzQEM':_0x1c9983(-0x13b,-0x1ba,-0x262,-0x184,-0x1e3),'cPans':_0x5dea41(0x32f,0x3f9,0x3b4,0x475,0x3ce),'cWVRv':_0x53ed56(-0x200,-0x176,-0x1b6,-0x16a,-0xb7)+_0x5dea41(0x252,0x2d3,0x371,0x29c,0x2da)+_0x53ed56(-0x222,-0x272,-0x30d,-0x31d,-0x240),'OmJgH':_0x53ed56(-0x185,-0x133,-0x10b,-0x61,-0x10d)+'er','AXQFT':function(_0x11ca81,_0x530892){return _0x11ca81(_0x530892);},'MrKzz':_0x4318ed(-0x5a,-0xb5,0x9,-0xa2,-0x7b)+_0x53ed56(-0xd2,-0x19c,-0x199,-0x1b9,-0x1fd)+'t','hJdOH':_0x66aa7(0x18,-0x17e,-0xc1,-0x5b,-0x107),'CXDMe':_0x5dea41(0x264,0x2f8,0x2e4,0x25d,0x37d),'cUGne':_0x4318ed(0x123,0x184,0xf4,0x19f,0x16a),'ObDdq':function(_0xb80d63,_0x5e1cf9){return _0xb80d63+_0x5e1cf9;},'bCvke':function(_0x4ad549){return _0x4ad549();},'GqUnf':function(_0x25c2fc,_0x894639){return _0x25c2fc===_0x894639;},'AOQVk':_0x53ed56(-0x92,-0x134,-0x1d8,-0x14f,-0x120),'HaHyB':_0x4318ed(-0x62,0x47,0xe,-0x58,-0x114),'wkNlo':_0x53ed56(-0x293,-0x2a6,-0x36f,-0x282,-0x275),'CrObd':_0x1c9983(-0x2c4,-0x1b2,-0x27c,-0x2b1,-0x216),'GjsUx':_0x5dea41(0x28f,0x35e,0x360,0x2a1,0x316),'meaXM':_0x1c9983(-0x103,-0x191,-0x120,-0x275,-0x1d9),'bNMkf':_0x4318ed(0xa5,0x3e,0xc8,-0x20,0xbc)+_0x5dea41(0x297,0x29a,0x270,0x300,0x28b),'PadMC':_0x5dea41(0x29d,0x30c,0x257,0x253,0x2a8),'fXDiP':_0x1c9983(-0x327,-0x2ca,-0x2dd,-0x370,-0x2c5),'IlhOd':function(_0x26aba1,_0x32c9dc){return _0x26aba1<_0x32c9dc;},'ylzZS':_0x53ed56(-0x1ae,-0x148,-0xdb,-0x9a,-0x90),'qiPDf':_0x66aa7(-0x20c,-0x1c4,-0x227,-0x24a,-0x15f),'bGYEn':function(_0xc4e2b2){return _0xc4e2b2();},'FBDNi':_0x1c9983(-0x2ab,-0x1ed,-0x289,-0x164,-0x1f0),'ZxUCO':_0x5dea41(0x26c,0x2e5,0x339,0x299,0x2b1),'OkReH':_0x5dea41(0x25e,0x2e9,0x217,0x395,0x2d5),'TUuky':_0x5dea41(0x2f2,0x269,0x228,0x304,0x22f),'OFRit':function(_0x55dede){return _0x55dede();},'aHXMz':function(_0xd2bac,_0x5bdd9e){return _0xd2bac(_0x5bdd9e);}},_0x20a1da=(function(){function _0x484d32(_0xef07a8,_0x3612dd,_0x3849be,_0x1e40c8,_0x1a3d11){return _0x1c9983(_0xef07a8-0xac,_0x3612dd-0x177,_0x3849be-0x65,_0x1e40c8,_0x3849be-0x2c0);}function _0x529618(_0x287d53,_0x4c37e6,_0x399108,_0x41462c,_0xb8da86){return _0x66aa7(_0x41462c,_0x4c37e6-0x6d,_0xb8da86- -0xae,_0x41462c-0x96,_0xb8da86-0x1c6);}function _0x4e26ed(_0xff82b3,_0x2ee141,_0x534c35,_0x59dafa,_0x23f658){return _0x4318ed(_0x2ee141- -0x157,_0x2ee141-0x7b,_0x534c35-0x1c,_0x23f658,_0x23f658-0x1ca);}function _0x1cfab4(_0x242349,_0x16b874,_0xb39b75,_0x469d49,_0x17bb3b){return _0x1c9983(_0x242349-0x1ae,_0x16b874-0x90,_0xb39b75-0x107,_0x242349,_0x469d49-0x1b);}function _0x5a65f4(_0x3fc85d,_0x2a1fc6,_0x55c7d2,_0x39c5de,_0x47e319){return _0x1c9983(_0x3fc85d-0xb3,_0x2a1fc6-0x1b,_0x55c7d2-0x98,_0x3fc85d,_0x55c7d2-0x467);}const _0x2896d2={'OPiyG':_0x105ee5[_0x4e26ed(-0x107,-0x169,-0x94,-0x116,-0x1f5)],'GLkYB':_0x105ee5[_0x529618(-0x2ca,-0x2b7,-0x1ea,-0x1a6,-0x257)],'KPEDm':function(_0x3cba8a,_0x56d7cf){function _0x3b90a3(_0x437999,_0x5da524,_0x29a63c,_0x4d3739,_0x32b274){return _0x4e26ed(_0x437999-0x16,_0x4d3739-0x55c,_0x29a63c-0x1f0,_0x4d3739-0x197,_0x437999);}return _0x105ee5[_0x3b90a3(0x49d,0x333,0x338,0x3ea,0x406)](_0x3cba8a,_0x56d7cf);},'nCNww':_0x105ee5[_0x484d32(0x10c,0x126,0xae,0x10f,0xdd)],'mxHPV':function(_0xc0186,_0x4bf2f4){function _0x20d771(_0x26ffe7,_0x93432,_0x15dac8,_0x5dec75,_0x473855){return _0x4e26ed(_0x26ffe7-0x41,_0x473855-0x2f7,_0x15dac8-0x151,_0x5dec75-0x1e8,_0x15dac8);}return _0x105ee5[_0x20d771(0x27a,0x273,0x2ed,0x30b,0x270)](_0xc0186,_0x4bf2f4);},'Wvcag':_0x105ee5[_0x529618(-0x14a,-0xff,-0x168,-0xd1,-0x191)],'vSZDj':_0x105ee5[_0x5a65f4(0x298,0x1ea,0x241,0x1f6,0x2a7)],'jiiBd':function(_0x5b2f0d,_0x2058f6){function _0x1cc359(_0xc71b6b,_0x69cfca,_0x132c34,_0xf78fd8,_0x257830){return _0x529618(_0xc71b6b-0x122,_0x69cfca-0x1f3,_0x132c34-0x67,_0xc71b6b,_0xf78fd8-0x1d5);}return _0x105ee5[_0x1cc359(-0x7a,-0x192,-0x8f,-0x11a,-0x120)](_0x5b2f0d,_0x2058f6);},'fXfwD':function(_0x4f7764){function _0x3b75b4(_0x1cdb6b,_0x16bf0f,_0x4d222d,_0x159ef8,_0x4779a3){return _0x484d32(_0x1cdb6b-0x1d3,_0x16bf0f-0x1bd,_0x16bf0f-0xed,_0x4779a3,_0x4779a3-0x12);}return _0x105ee5[_0x3b75b4(0x22e,0x26c,0x2ae,0x21d,0x25c)](_0x4f7764);},'NyCzh':function(_0x1d50fa,_0x3ce752,_0x73525a){function _0x262c5c(_0x9d7ba0,_0xb4f05c,_0xe8c998,_0xee167b,_0x1047b5){return _0x529618(_0x9d7ba0-0xff,_0xb4f05c-0xd7,_0xe8c998-0x10e,_0xe8c998,_0x9d7ba0-0x70c);}return _0x105ee5[_0x262c5c(0x566,0x5aa,0x4cc,0x626,0x594)](_0x1d50fa,_0x3ce752,_0x73525a);},'OMuan':function(_0x1c94fb,_0x25856a){function _0x23c4dc(_0x228142,_0x83d9f3,_0x4f6ad0,_0x8f736e,_0x1884c4){return _0x4e26ed(_0x228142-0x1ad,_0x1884c4- -0x46,_0x4f6ad0-0x192,_0x8f736e-0x35,_0x83d9f3);}return _0x105ee5[_0x23c4dc(-0x18a,-0x44,-0x6b,-0x65,-0xe0)](_0x1c94fb,_0x25856a);},'aJTXy':_0x105ee5[_0x529618(-0x18d,-0x1c2,-0x122,-0x83,-0x154)],'XxMUE':function(_0x1684c4,_0x3b0b10){function _0x2aa7b4(_0x2cc3ec,_0x3bbfb0,_0x41e33d,_0x5ed1a7,_0x4acbd4){return _0x484d32(_0x2cc3ec-0x1d4,_0x3bbfb0-0x99,_0x4acbd4- -0x141,_0x2cc3ec,_0x4acbd4-0x36);}return _0x105ee5[_0x2aa7b4(-0x50,-0xf7,-0x1e4,-0x133,-0x127)](_0x1684c4,_0x3b0b10);},'gNnBZ':_0x105ee5[_0x529618(-0x2de,-0x31a,-0x20b,-0x332,-0x25d)],'srQbO':_0x105ee5[_0x1cfab4(-0x1dc,-0x17b,-0xc5,-0x10c,-0xa7)],'IBfen':_0x105ee5[_0x484d32(0x238,0x1d3,0x176,0x1d0,0xe0)],'YLOSg':_0x105ee5[_0x484d32(0x104,0x1d,0x2c,0x40,0x69)]};if(_0x105ee5[_0x5a65f4(0x2db,0x221,0x2d3,0x22f,0x21d)](_0x105ee5[_0x484d32(0xdc,-0xa,0xba,0x90,0xf3)],_0x105ee5[_0x5a65f4(0x2ad,0x212,0x1dd,0x281,0x1cf)])){let _0xa01e06=!![];return function(_0x122d3e,_0x44b259){function _0x50e964(_0x1c0bbb,_0xbfcdec,_0x2255ea,_0x239df9,_0x342cf5){return _0x484d32(_0x1c0bbb-0xc4,_0xbfcdec-0x1f4,_0x239df9-0x12e,_0x1c0bbb,_0x342cf5-0x1ab);}function _0x8b6e22(_0x7c53b3,_0x44776c,_0x1c66c7,_0x4afd7a,_0x4cd464){return _0x4e26ed(_0x7c53b3-0x4a,_0x44776c-0x43b,_0x1c66c7-0xbc,_0x4afd7a-0x86,_0x7c53b3);}function _0x3957fb(_0x36830d,_0x355c15,_0x58d88e,_0x18159d,_0x33cf90){return _0x529618(_0x36830d-0x54,_0x355c15-0xca,_0x58d88e-0x5,_0x18159d,_0x36830d-0x71);}function _0x29dc1e(_0x156511,_0x3a3f84,_0x3835f6,_0x42c104,_0x1fcd48){return _0x5a65f4(_0x1fcd48,_0x3a3f84-0x11b,_0x42c104-0x251,_0x42c104-0xe6,_0x1fcd48-0x6f);}const _0x178671={'XlpiQ':_0x2896d2[_0x29dc1e(0x622,0x517,0x5b7,0x595,0x562)],'GUUKE':_0x2896d2[_0x50e964(0x116,0x14b,0x1b0,0x160,0x178)],'mfZnq':function(_0x4fe1c1,_0x256507){function _0xafe759(_0x36b417,_0x1b66ea,_0x1b5d86,_0x5d27fa,_0x431701){return _0x50e964(_0x36b417,_0x1b66ea-0x53,_0x1b5d86-0x158,_0x431701- -0x3a6,_0x431701-0x8e);}return _0x2896d2[_0xafe759(-0x1af,-0x204,-0x15e,-0x182,-0x1d5)](_0x4fe1c1,_0x256507);},'rNLWp':_0x2896d2[_0x3957fb(-0xe4,-0x1b2,-0x10a,-0xde,-0xad)],'QIiqF':function(_0x481814,_0x9cb810){function _0xffcff1(_0x1663e9,_0x57ad4f,_0x3b9408,_0x503b36,_0x3bdf80){return _0x50e964(_0x1663e9,_0x57ad4f-0x1ce,_0x3b9408-0x1cf,_0x57ad4f- -0x407,_0x3bdf80-0x107);}return _0x2896d2[_0xffcff1(-0x1a9,-0x17a,-0xa1,-0x1e0,-0x1ea)](_0x481814,_0x9cb810);},'VxqLM':_0x2896d2[_0x3957fb(-0xd4,-0x4,-0x52,-0x173,-0xfb)],'gFGxY':_0x2896d2[_0x50e964(0x2bd,0x198,0x27e,0x247,0x2d6)],'gklfB':function(_0x161eb9,_0x13ab48){function _0x3729b0(_0x207e1a,_0x496ce8,_0x3af70a,_0x37d911,_0x448bde){return _0x8b6e22(_0x448bde,_0x496ce8- -0x5,_0x3af70a-0x10d,_0x37d911-0x3a,_0x448bde-0x2a);}return _0x2896d2[_0x3729b0(0x2f9,0x2b8,0x337,0x262,0x229)](_0x161eb9,_0x13ab48);},'syyNp':function(_0x406522){function _0x20d387(_0x5d1220,_0x92df28,_0x3fe303,_0x267d04,_0x49fd94){return _0x3957fb(_0x3fe303-0x3ef,_0x92df28-0x1c6,_0x3fe303-0x95,_0x92df28,_0x49fd94-0x11b);}return _0x2896d2[_0x20d387(0x288,0x242,0x2e4,0x300,0x37f)](_0x406522);},'FJqKH':function(_0x52215c,_0x228af9,_0x239c2a){function _0x5d286e(_0x5efd31,_0x3cad80,_0x5c8a8b,_0xfa5f7b,_0x18c6ed){return _0x5de617(_0x5efd31-0x7c,_0x3cad80- -0x4bc,_0x5c8a8b-0x1df,_0xfa5f7b-0x11a,_0x5efd31);}return _0x2896d2[_0x5d286e(-0x15b,-0x222,-0x2bc,-0x1d7,-0x1e1)](_0x52215c,_0x228af9,_0x239c2a);},'lGlIY':function(_0x2eda01,_0xbd2657){function _0x1c5f99(_0x306533,_0x292d2c,_0x56b4f4,_0x20e911,_0x22e561){return _0x8b6e22(_0x56b4f4,_0x20e911-0x93,_0x56b4f4-0x153,_0x20e911-0xce,_0x22e561-0x1b5);}return _0x2896d2[_0x1c5f99(0x25b,0x26c,0x39c,0x30b,0x281)](_0x2eda01,_0xbd2657);},'uaXKo':_0x2896d2[_0x3957fb(-0x15e,-0x1f2,-0x8d,-0x217,-0x196)],'nmwtG':function(_0x213905,_0x82d7ca){function _0x3103ad(_0x1d4f1b,_0x6ba6e,_0x2bbb85,_0x184238,_0x4f0e7f){return _0x50e964(_0x2bbb85,_0x6ba6e-0xfc,_0x2bbb85-0x17c,_0x6ba6e-0x2e7,_0x4f0e7f-0x186);}return _0x2896d2[_0x3103ad(0x45b,0x4c0,0x53b,0x50c,0x528)](_0x213905,_0x82d7ca);},'MXnNG':_0x2896d2[_0x29dc1e(0x4af,0x42b,0x475,0x494,0x3d4)],'EndHF':_0x2896d2[_0x50e964(0x21b,0x24e,0x2d4,0x22a,0x16d)]};function _0x5de617(_0x222eb5,_0x78f846,_0x5c091e,_0x436a30,_0x44d85c){return _0x529618(_0x222eb5-0x92,_0x78f846-0x1d4,_0x5c091e-0x197,_0x44d85c,_0x78f846-0x4b0);}if(_0x2896d2[_0x3957fb(-0x275,-0x34b,-0x260,-0x249,-0x1f6)](_0x2896d2[_0x50e964(0x18a,0x195,0x206,0x13e,0x107)],_0x2896d2[_0x50e964(0x229,0x224,0x26c,0x272,0x31f)])){const _0x372a19=_0xa01e06?function(){function _0x3227eb(_0x54fa7e,_0x99feb,_0x381754,_0x4c2711,_0x2f3ae3){return _0x8b6e22(_0x4c2711,_0x99feb- -0x4ec,_0x381754-0x72,_0x4c2711-0x13c,_0x2f3ae3-0xe2);}function _0x3c7d13(_0x405d14,_0x322a83,_0x576b32,_0x124e30,_0x3de25f){return _0x3957fb(_0x576b32-0x2c,_0x322a83-0x49,_0x576b32-0x11a,_0x3de25f,_0x3de25f-0x3a);}function _0x3851d5(_0x86ef03,_0x2ecd24,_0x2875ca,_0x158f1d,_0x78fbb7){return _0x8b6e22(_0x2875ca,_0x158f1d- -0x2b,_0x2875ca-0x15a,_0x158f1d-0x1ef,_0x78fbb7-0x116);}function _0x34fb6c(_0x488ce1,_0x5912d6,_0x456beb,_0x1b6ded,_0x451eee){return _0x8b6e22(_0x488ce1,_0x5912d6- -0x49a,_0x456beb-0x1ed,_0x1b6ded-0x165,_0x451eee-0x24);}function _0x6ca94c(_0x3a439e,_0x142817,_0x254fe1,_0x85283e,_0x568af7){return _0x5de617(_0x3a439e-0x1a2,_0x142817-0x1ca,_0x254fe1-0x1b8,_0x85283e-0x166,_0x568af7);}const _0x2f8024={'moqUs':_0x178671[_0x3851d5(0x341,0x423,0x296,0x366,0x40c)],'GzidW':_0x178671[_0x3851d5(0x3e1,0x3a3,0x2ff,0x37b,0x38b)],'IOImw':function(_0x3dc962,_0x3c8a06){function _0x42538e(_0x12bba3,_0x4622c3,_0x262c91,_0x2296c2,_0x4b9d9b){return _0x3851d5(_0x12bba3-0x1d3,_0x4622c3-0x37,_0x4b9d9b,_0x12bba3- -0x14f,_0x4b9d9b-0x82);}return _0x178671[_0x42538e(0x117,0xeb,0x181,0xce,0x10d)](_0x3dc962,_0x3c8a06);},'LjbBO':_0x178671[_0x3227eb(-0x1a5,-0x151,-0x165,-0x1af,-0x159)],'tyFLp':function(_0x555825,_0x269f33){function _0x32c678(_0x3d22d1,_0x4a0947,_0x23f5e2,_0x1d9168,_0x1cfde8){return _0x3227eb(_0x3d22d1-0x135,_0x4a0947-0x1e7,_0x23f5e2-0x28,_0x3d22d1,_0x1cfde8-0x187);}return _0x178671[_0x32c678(0x148,0xb0,0x8d,0x16b,0x1c)](_0x555825,_0x269f33);},'vpUVL':_0x178671[_0x3227eb(-0x283,-0x1bb,-0x1b6,-0x1c8,-0x228)],'fJcXC':_0x178671[_0x6ca94c(0x37c,0x449,0x41e,0x48b,0x473)],'RkGDA':function(_0x3c14e9,_0x4ffec8){function _0x43ca6f(_0x352d30,_0x64b721,_0x37d924,_0x78b965,_0x37b0ca){return _0x34fb6c(_0x37b0ca,_0x352d30-0x17d,_0x37d924-0x1aa,_0x78b965-0x9c,_0x37b0ca-0x19);}return _0x178671[_0x43ca6f(0xb9,-0x13,0x99,-0xb,-0x1d)](_0x3c14e9,_0x4ffec8);},'hMzlL':function(_0x3b082b){function _0x49bd86(_0x48e8f1,_0x429a6c,_0x3d97c2,_0xd24fba,_0x5baa3a){return _0x3227eb(_0x48e8f1-0x14f,_0x5baa3a-0x313,_0x3d97c2-0x2e,_0x3d97c2,_0x5baa3a-0x14);}return _0x178671[_0x49bd86(0x1fa,0xc7,0x220,0x180,0x18d)](_0x3b082b);},'EIdyu':function(_0x5e4632,_0x1e83e0,_0x4f3377){function _0x639a21(_0x37a3b8,_0x1f41a7,_0x4e9985,_0x436498,_0xab1216){return _0x3851d5(_0x37a3b8-0x1c4,_0x1f41a7-0x169,_0x436498,_0x37a3b8- -0x1ba,_0xab1216-0x1d9);}return _0x178671[_0x639a21(0x18f,0x1de,0xb9,0x149,0x232)](_0x5e4632,_0x1e83e0,_0x4f3377);}};if(_0x178671[_0x6ca94c(0x563,0x4a0,0x526,0x4f2,0x48a)](_0x178671[_0x3851d5(0x317,0x25b,0x23b,0x2d0,0x24a)],_0x178671[_0x3227eb(-0x20e,-0x1f1,-0x2b5,-0x17a,-0x1bf)]))pLhWLz[_0x6ca94c(0x47c,0x3be,0x432,0x3e0,0x48d)](_0x405070,this,function(){function _0x5a0b0b(_0xa554d5,_0x2c449b,_0x57ac1d,_0x59556a,_0x51ff4f){return _0x3227eb(_0xa554d5-0x16d,_0x51ff4f-0x5bf,_0x57ac1d-0x197,_0x59556a,_0x51ff4f-0x1b5);}const _0x55e373=new _0x962979(pLhWLz[_0x5a0b0b(0x412,0x2ea,0x476,0x30f,0x39f)]);function _0x345958(_0x55cdd5,_0x24665d,_0x3d2346,_0x3a2ba3,_0x3170a8){return _0x6ca94c(_0x55cdd5-0xa4,_0x24665d- -0x4c7,_0x3d2346-0xc7,_0x3a2ba3-0x5a,_0x55cdd5);}const _0xe89a79=new _0x560d0e(pLhWLz[_0x5a0b0b(0x343,0x419,0x3e1,0x4e3,0x416)],'i');function _0x4633a4(_0x565789,_0x2240da,_0xd93134,_0x2e5a4b,_0x918b17){return _0x34fb6c(_0xd93134,_0x2e5a4b-0x333,_0xd93134-0x49,_0x2e5a4b-0xcd,_0x918b17-0x1d8);}function _0x182755(_0x5cbbfb,_0x36ff01,_0x4fc5d0,_0x38f45f,_0xc41154){return _0x34fb6c(_0x5cbbfb,_0xc41154- -0xec,_0x4fc5d0-0x156,_0x38f45f-0x108,_0xc41154-0x1af);}function _0x475060(_0x46f18f,_0x32e73e,_0x44d7aa,_0x3b0d43,_0x5ce8f7){return _0x3851d5(_0x46f18f-0xab,_0x32e73e-0x27,_0x46f18f,_0x44d7aa- -0x3b5,_0x5ce8f7-0xf4);}const _0x40371b=pLhWLz[_0x182755(-0x1df,-0x277,-0x28f,-0x1ac,-0x281)](_0x158487,pLhWLz[_0x182755(-0x377,-0x231,-0x2e6,-0x25d,-0x2af)]);!_0x55e373[_0x475060(0x15,-0x11b,-0xbb,-0x98,0x1b)](pLhWLz[_0x5a0b0b(0x350,0x386,0x2d6,0x3e4,0x348)](_0x40371b,pLhWLz[_0x475060(-0xe5,-0x17a,-0x158,-0x11a,-0xc5)]))||!_0xe89a79[_0x4633a4(0x28e,0x1a1,0x230,0x1be,0x12e)](pLhWLz[_0x4633a4(0x63,0x1b7,0x14c,0x10e,0x4a)](_0x40371b,pLhWLz[_0x4633a4(0xcc,0x21c,0x1da,0x14b,0xc5)]))?pLhWLz[_0x4633a4(0xd6,0x1aa,0x218,0x1af,0xe6)](_0x40371b,'0'):pLhWLz[_0x475060(0x10,-0x82,-0x58,-0xff,0x16)](_0x3519aa);})();else{if(_0x44b259){if(_0x178671[_0x3851d5(0x378,0x438,0x3cf,0x3bd,0x36a)](_0x178671[_0x3851d5(0x1f6,0x1e3,0x1ec,0x2bd,0x2b3)],_0x178671[_0x6ca94c(0x44f,0x528,0x486,0x594,0x470)]))return _0x1a2059;else{const _0x49e48e=_0x44b259[_0x3851d5(0x35c,0x410,0x317,0x368,0x314)](_0x122d3e,arguments);return _0x44b259=null,_0x49e48e;}}}}:function(){};return _0xa01e06=![],_0x372a19;}else{if(_0x56e6c2){const _0x2fe374=_0x241ae4[_0x5de617(0x2ea,0x2e5,0x239,0x362,0x3a5)](_0x361d5b,arguments);return _0x14f4d3=null,_0x2fe374;}}};}else{const _0x29dd5b=new _0x23fe9b(),_0x215804=_0x29dd5b[_0x5a65f4(0x3d8,0x35f,0x332,0x2a5,0x3be)+_0x484d32(0xbc,0x15e,0xec,0xbf,0x72)+_0x4e26ed(-0x12,-0x7d,-0x74,-0x8c,-0xfd)](_0x3ec8e8,_0x105ee5[_0x4e26ed(0x91,-0x3c,-0x36,-0x28,-0xa9)]),_0x10a6fc=_0x215804[_0x4e26ed(0x77,-0x21,-0xdd,-0xbd,-0xdb)+_0x1cfab4(-0x1c9,-0x275,-0x230,-0x1bf,-0x1b3)+_0x5a65f4(0x1ec,0x1bb,0x279,0x31a,0x204)](_0x105ee5[_0x1cfab4(-0x86,-0x152,-0xf2,-0x134,-0xa8)])?.[_0x529618(-0x20c,-0x78,-0x96,-0x8a,-0x151)+_0x1cfab4(-0x134,-0x1bf,-0xd8,-0x19d,-0x15f)+'t'][_0x1cfab4(-0x19a,-0xa3,-0x1bf,-0x13a,-0x62)+_0x5a65f4(0x182,0x28b,0x1e7,0x17c,0x216)+'e']()[_0x484d32(0x141,0x7c,0x117,0x14a,0x12c)+_0x4e26ed(-0x48,-0xdd,-0x15d,-0x187,-0xe5)]('\x20','');_0x10a6fc&&_0x10a6fc[_0x5a65f4(0x2c8,0x17c,0x254,0x304,0x18b)+_0x484d32(0x167,0xd7,0xea,0xb1,0x13)](_0x105ee5[_0x1cfab4(-0x19a,-0x255,-0x2d4,-0x230,-0x257)])&&(_0x28d92e[_0x484d32(0x12a,0x52,0xef,0x171,0x11e)+_0x5a65f4(0x2c9,0x241,0x236,0x257,0x26f)+_0x5a65f4(0x20e,0x2b8,0x1f4,0x120,0x2b9)][_0x484d32(-0x81,-0xa4,0x2f,0x67,0x9)+_0x5a65f4(0x27c,0x1ec,0x23e,0x1d1,0x186)]='');}}());function _0x4318ed(_0x2657b9,_0x173248,_0x53d980,_0x4683cf,_0x5f5323){return _0x1914(_0x2657b9- -0xe8,_0x4683cf);}function _0x5dea41(_0x5a349e,_0x1a22df,_0x502a20,_0x1719a5,_0x4d07db){return _0x1914(_0x1a22df-0x1d3,_0x1719a5);}function _0x53ed56(_0x210a90,_0x2565eb,_0x571777,_0x43ff83,_0x42e7b6){return _0x1914(_0x2565eb- -0x32a,_0x43ff83);}const _0xbcd7fb=_0x105ee5[_0x4318ed(0xa2,0x70,0x32,-0x1,0x20)](_0x20a1da,this,function(){function _0x4c64ae(_0x9ee76e,_0x2036b2,_0x265f71,_0x525291,_0x3f809a){return _0x66aa7(_0x525291,_0x2036b2-0xe8,_0x9ee76e-0x3f3,_0x525291-0x17f,_0x3f809a-0xb);}function _0x451629(_0x17624a,_0x190960,_0x9fec55,_0x40e578,_0x535448){return _0x5dea41(_0x17624a-0xe9,_0x9fec55- -0x29d,_0x9fec55-0x145,_0x40e578,_0x535448-0x79);}function _0x48f012(_0x6c1b30,_0x8d51b,_0x2871b4,_0x472cc0,_0x245910){return _0x5dea41(_0x6c1b30-0x140,_0x245910- -0x210,_0x2871b4-0x124,_0x8d51b,_0x245910-0xbe);}function _0x11d9e8(_0x393fd4,_0x2bdc6d,_0x36b4fe,_0xb7f54e,_0x224962){return _0x1c9983(_0x393fd4-0x3f,_0x2bdc6d-0x43,_0x36b4fe-0x1b2,_0xb7f54e,_0x393fd4-0x568);}function _0x521e25(_0x9e17f2,_0x3662cb,_0x5c72aa,_0x401859,_0x1b57b8){return _0x4318ed(_0x401859-0x11e,_0x3662cb-0x13a,_0x5c72aa-0xc9,_0x3662cb,_0x1b57b8-0x1a0);}if(_0x105ee5[_0x4c64ae(0x2e4,0x332,0x27a,0x2e6,0x319)](_0x105ee5[_0x521e25(0xd9,0xfd,0xfb,0x19f,0xe7)],_0x105ee5[_0x48f012(0xdf,0x83,0x3e,0x13d,0xb7)]))return _0xbcd7fb[_0x48f012(0x12e,0x1fc,0x148,0x162,0x17d)+_0x521e25(0xfc,0x183,0x1fc,0x153,0xe3)]()[_0x48f012(0x165,0x168,0xfa,0x25b,0x1cf)+'h'](_0x105ee5[_0x521e25(0x162,0x202,0x1c5,0x20c,0x256)])[_0x11d9e8(0x3e9,0x4ae,0x4b9,0x356,0x351)+_0x521e25(0x1c1,0x1ad,0x17d,0x153,0xd5)]()[_0x4c64ae(0x2da,0x30d,0x312,0x20f,0x26e)+_0x11d9e8(0x38d,0x3bb,0x2b8,0x452,0x40f)+'r'](_0xbcd7fb)[_0x521e25(0x26a,0x2b3,0x319,0x242,0x22d)+'h'](_0x105ee5[_0x451629(0x194,0x1e4,0x10c,0x6f,0x71)]);else{const _0x286c47=_0x3380d3?function(){function _0x3cfbac(_0xa5a6c4,_0x2f29b8,_0x4063da,_0x291ecd,_0x4b7065){return _0x451629(_0xa5a6c4-0x13f,_0x2f29b8-0x13a,_0x2f29b8-0x4a6,_0x291ecd,_0x4b7065-0x118);}if(_0x378f1d){const _0x2014a3=_0x234218[_0x3cfbac(0x4f8,0x573,0x4a3,0x5f4,0x56e)](_0x9b4f87,arguments);return _0x1ae556=null,_0x2014a3;}}:function(){};return _0x47e05d=![],_0x286c47;}});function _0x66aa7(_0x305a61,_0x49ca8d,_0x2d1e27,_0x20fd5c,_0x71d60e){return _0x1914(_0x2d1e27- -0x2b4,_0x305a61);}_0x105ee5[_0x5dea41(0x29e,0x2c4,0x2da,0x34e,0x36b)](_0xbcd7fb);const _0x55a234=(function(){function _0x35dc0f(_0x516f00,_0x2261a0,_0x5e95ab,_0x5afd86,_0x4076e1){return _0x66aa7(_0x516f00,_0x2261a0-0x1ab,_0x4076e1-0x2f,_0x5afd86-0x19f,_0x4076e1-0x3b);}function _0x590152(_0x11d290,_0x42ca2c,_0x5327bf,_0x793b41,_0x105775){return _0x1c9983(_0x11d290-0x4a,_0x42ca2c-0x136,_0x5327bf-0x2c,_0x793b41,_0x105775-0x38b);}function _0x1070bc(_0x5191c5,_0x4ab9f9,_0x55408f,_0x5654aa,_0xfc590d){return _0x53ed56(_0x5191c5-0x180,_0x5654aa-0xa2,_0x55408f-0x1aa,_0xfc590d,_0xfc590d-0x123);}function _0x1038e9(_0x309236,_0x3d13d8,_0x482b73,_0x46dbc6,_0x102597){return _0x66aa7(_0x482b73,_0x3d13d8-0x12a,_0x46dbc6-0x615,_0x46dbc6-0x130,_0x102597-0xa1);}function _0x4cb736(_0x4eaf44,_0x3bc842,_0x1ec3b1,_0x44113d,_0x36ce15){return _0x53ed56(_0x4eaf44-0x1a5,_0x44113d-0x5b5,_0x1ec3b1-0x4b,_0x3bc842,_0x36ce15-0x5f);}const _0x11b821={'kjdmX':function(_0x346b8f,_0x1b29fb){function _0x3789c4(_0x2000f3,_0xb7989a,_0x4a0a18,_0x523e81,_0x3850d8){return _0x1914(_0x523e81- -0x205,_0xb7989a);}return _0x105ee5[_0x3789c4(-0xe7,-0x1b4,-0x1dd,-0x138,-0x20e)](_0x346b8f,_0x1b29fb);},'bzJIl':function(_0x1e9380,_0x53eca0){function _0x7dfdea(_0x4fdb84,_0x2c6f82,_0x30ce12,_0x1ba9e3,_0x2046bd){return _0x1914(_0x4fdb84-0x1cd,_0x2046bd);}return _0x105ee5[_0x7dfdea(0x245,0x24d,0x23c,0x1a4,0x180)](_0x1e9380,_0x53eca0);},'MXZBh':_0x105ee5[_0x1070bc(-0xe1,-0x181,-0x14d,-0x1a3,-0x25b)],'MIMCl':_0x105ee5[_0x1038e9(0x4e5,0x52b,0x4bf,0x497,0x41f)],'FmLcv':function(_0x38fb18){function _0x50b7fc(_0x486e31,_0x1ea776,_0x1c02a8,_0x35b1e4,_0x1f8808){return _0x1038e9(_0x486e31-0x110,_0x1ea776-0x1b0,_0x1f8808,_0x1c02a8- -0x568,_0x1f8808-0x107);}return _0x105ee5[_0x50b7fc(-0x86,-0xbb,-0x116,-0x199,-0x17c)](_0x38fb18);},'jJxgg':function(_0xf98587,_0x5075ae){function _0x247222(_0x5e4cd8,_0x427429,_0x3121d1,_0x21dc64,_0x3ea737){return _0x1038e9(_0x5e4cd8-0x9e,_0x427429-0x108,_0x3121d1,_0x21dc64- -0x28b,_0x3ea737-0x197);}return _0x105ee5[_0x247222(0x1f1,0x1c5,0x295,0x27b,0x27d)](_0xf98587,_0x5075ae);},'OEXXc':_0x105ee5[_0x35dc0f(-0x8,-0x144,-0x101,-0x11d,-0x90)],'OnsqM':function(_0x2eca3f,_0x1a6a88){function _0x1d1032(_0x153241,_0x4c4429,_0x5295d6,_0x154121,_0x330e99){return _0x35dc0f(_0x153241,_0x4c4429-0xda,_0x5295d6-0x36,_0x154121-0x134,_0x330e99-0x2cd);}return _0x105ee5[_0x1d1032(0x2bb,0x2df,0x2bf,0x178,0x224)](_0x2eca3f,_0x1a6a88);},'zyJIq':_0x105ee5[_0x1070bc(-0x106,-0x88,-0x26,-0xc0,-0x137)],'MPbpl':_0x105ee5[_0x4cb736(0x3a1,0x3a5,0x2e5,0x315,0x29d)],'thuMg':_0x105ee5[_0x4cb736(0x407,0x3ce,0x509,0x439,0x4c7)]};if(_0x105ee5[_0x1070bc(-0x189,-0x27,-0x9b,-0xe3,-0xe2)](_0x105ee5[_0x590152(0xda,0x20d,0x188,0x8c,0x139)],_0x105ee5[_0x4cb736(0x316,0x2be,0x32e,0x372,0x3b7)]))_0x27e86a=_0x37366d;else{let _0x27b9bb=!![];return function(_0x25e9d4,_0x7d21de){function _0x38af67(_0x35899c,_0x54babf,_0x22c554,_0x6431d7,_0x5592d9){return _0x4cb736(_0x35899c-0xa3,_0x6431d7,_0x22c554-0x1af,_0x22c554- -0x659,_0x5592d9-0x54);}function _0x1b0402(_0x5c4835,_0x5ebeb2,_0x3fdeb9,_0x3b928c,_0x281fbd){return _0x590152(_0x5c4835-0x44,_0x5ebeb2-0x41,_0x3fdeb9-0x118,_0x281fbd,_0x3b928c-0x24f);}function _0x19375c(_0x41406a,_0x69b24a,_0x360e23,_0x27cec2,_0x3457dc){return _0x35dc0f(_0x27cec2,_0x69b24a-0x126,_0x360e23-0x2f,_0x27cec2-0x135,_0x360e23-0x460);}function _0x47b890(_0x37e1d1,_0x674887,_0x333ba6,_0x5b4224,_0x2edece){return _0x590152(_0x37e1d1-0x8,_0x674887-0x1d5,_0x333ba6-0x9,_0x333ba6,_0x5b4224- -0x312);}function _0x50d329(_0x352fad,_0x4b3b67,_0x2390b2,_0x2a26fb,_0x169848){return _0x4cb736(_0x352fad-0x190,_0x4b3b67,_0x2390b2-0x9b,_0x2390b2- -0x556,_0x169848-0x56);}const _0x3f6554={'eGBnO':function(_0x145230,_0x4390b4){function _0x5590c9(_0x3a3a02,_0x114cf2,_0x3e3e9c,_0xa24f60,_0x2bd500){return _0x1914(_0x114cf2-0x1a6,_0x2bd500);}return _0x11b821[_0x5590c9(0x3b8,0x2f9,0x2eb,0x2a7,0x2ce)](_0x145230,_0x4390b4);},'zhizj':function(_0xea9db5,_0x479cc3){function _0x35d3e8(_0x5a4c73,_0x562271,_0x437608,_0x59714f,_0x50da45){return _0x1914(_0x59714f- -0x10f,_0x437608);}return _0x11b821[_0x35d3e8(-0x41,-0xc2,0x2a,0x0,0xc3)](_0xea9db5,_0x479cc3);},'VImrv':_0x11b821[_0x19375c(0x2f1,0x2bb,0x2af,0x383,0x29a)],'FxIRe':_0x11b821[_0x1b0402(0x3b1,0x423,0x426,0x3c9,0x486)],'fIfhc':function(_0x2e9dab){function _0x49ab8f(_0x20f990,_0x45b9b3,_0x3ed4f0,_0x2afe9e,_0x5f3ec8){return _0x1b0402(_0x20f990-0x10b,_0x45b9b3-0x165,_0x3ed4f0-0x44,_0x5f3ec8-0x57,_0x3ed4f0);}return _0x11b821[_0x49ab8f(0x387,0x3fd,0x407,0x499,0x3d0)](_0x2e9dab);},'uUjNg':function(_0x504fb4,_0x3e0a88){function _0x1b2bba(_0x42dbce,_0x5838f0,_0x175fe5,_0x5ab393,_0x3ac93e){return _0x19375c(_0x42dbce-0x6f,_0x5838f0-0x79,_0x42dbce- -0x1a2,_0x3ac93e,_0x3ac93e-0x10f);}return _0x11b821[_0x1b2bba(0xda,0x37,0x156,0x13a,0x167)](_0x504fb4,_0x3e0a88);},'zuMia':_0x11b821[_0x19375c(0x2ec,0x3d3,0x35d,0x2b5,0x3a4)],'KsgAy':function(_0x881313,_0x498835){function _0x379aaa(_0xaf0bd1,_0x5123ba,_0xd352ae,_0x338d3b,_0x15f053){return _0x1b0402(_0xaf0bd1-0xb4,_0x5123ba-0xb,_0xd352ae-0x13b,_0x5123ba- -0x2ed,_0x338d3b);}return _0x11b821[_0x379aaa(0x1d4,0x1be,0x259,0x217,0x16f)](_0x881313,_0x498835);},'LLRFE':_0x11b821[_0x19375c(0x3cd,0x333,0x3ad,0x444,0x31e)],'QWytE':_0x11b821[_0x38af67(-0x3ab,-0x3c6,-0x332,-0x260,-0x3a2)]};if(_0x11b821[_0x50d329(-0x2c8,-0x1af,-0x22a,-0x277,-0x1dd)](_0x11b821[_0x38af67(-0x3f6,-0x332,-0x34c,-0x307,-0x365)],_0x11b821[_0x1b0402(0x2e0,0x2ff,0x296,0x323,0x272)])){let _0x4dfb5c;try{const _0x1e1793=nkPUJr[_0x47b890(-0x14b,-0x74,-0x97,-0xb1,-0x44)](_0x5bcecd,nkPUJr[_0x19375c(0x2a4,0x360,0x325,0x27d,0x2bb)](nkPUJr[_0x50d329(-0x237,-0x25a,-0x181,-0x211,-0x242)](nkPUJr[_0x1b0402(0x3e1,0x499,0x50e,0x458,0x4d8)],nkPUJr[_0x38af67(-0x318,-0x376,-0x2f2,-0x279,-0x21e)]),');'));_0x4dfb5c=nkPUJr[_0x50d329(-0x224,-0x265,-0x1bd,-0x17b,-0x248)](_0x1e1793);}catch(_0x8cda8a){_0x4dfb5c=_0x306f0d;}_0x4dfb5c[_0x50d329(-0x10e,-0x206,-0x1b0,-0x227,-0x1be)+_0x38af67(-0x291,-0x2ef,-0x30a,-0x24a,-0x2ce)+'l'](_0x277e4a,0x1715+0xf8f+-0x6*0x3d6);}else{const _0x1c5db1=_0x27b9bb?function(){function _0x14e24d(_0x55fa62,_0x369914,_0x132d22,_0x37d51c,_0x5a6456){return _0x19375c(_0x55fa62-0x69,_0x369914-0x1ab,_0x37d51c- -0x2c6,_0x132d22,_0x5a6456-0x140);}function _0x2fcfec(_0x161596,_0x224f24,_0xa3d042,_0x216de2,_0x4403ea){return _0x19375c(_0x161596-0x193,_0x224f24-0x105,_0x216de2-0x1f5,_0xa3d042,_0x4403ea-0x1e5);}const _0x1e51be={'hzbwb':function(_0x1ecd14,_0x10a733){function _0x444e36(_0x3be2fd,_0x1c7e54,_0x30c37f,_0x170487,_0x4025b8){return _0x1914(_0x1c7e54- -0x116,_0x30c37f);}return _0x3f6554[_0x444e36(0x107,0xf9,0x69,0x13a,0xbf)](_0x1ecd14,_0x10a733);},'RCrlo':function(_0x410240,_0x3ba4bb){function _0x3e729c(_0x5b1f4f,_0x339a00,_0x282c10,_0x56db4d,_0x2ccc07){return _0x1914(_0x339a00- -0x3d8,_0x2ccc07);}return _0x3f6554[_0x3e729c(-0x2b6,-0x28e,-0x2ae,-0x1bb,-0x2df)](_0x410240,_0x3ba4bb);},'WrTLT':_0x3f6554[_0x2fcfec(0x5af,0x4f5,0x512,0x587,0x591)],'trbcT':_0x3f6554[_0x284e73(-0xb4,-0xa3,-0x120,-0xeb,-0x16d)],'VfVNf':function(_0x10fb1a){function _0x2982d5(_0x3dc930,_0x168603,_0x7a5d03,_0x1d4bb9,_0x25801d){return _0x284e73(_0x25801d,_0x168603-0x23,_0x7a5d03-0x1d6,_0x7a5d03-0x40c,_0x25801d-0x167);}return _0x3f6554[_0x2982d5(0x3a1,0x405,0x353,0x3a0,0x30e)](_0x10fb1a);}};function _0x284e73(_0x8482c1,_0x38d51f,_0x69c982,_0x245562,_0x549bd0){return _0x50d329(_0x8482c1-0xe,_0x8482c1,_0x245562-0x104,_0x245562-0x138,_0x549bd0-0x189);}function _0x1be6d0(_0x547491,_0x367742,_0x2a9350,_0x514844,_0x31c79a){return _0x50d329(_0x547491-0x1a5,_0x31c79a,_0x514844-0x68a,_0x514844-0x123,_0x31c79a-0x18);}function _0x5cd516(_0x128ee3,_0xd1eace,_0x5b4c0e,_0x2a047b,_0x5cc73f){return _0x38af67(_0x128ee3-0x105,_0xd1eace-0x141,_0x128ee3-0x240,_0x2a047b,_0x5cc73f-0x16d);}if(_0x3f6554[_0x5cd516(-0x4a,0x26,0x27,-0x7e,0x6a)](_0x3f6554[_0x5cd516(-0xa,0x6,-0xba,-0x7a,-0x14)],_0x3f6554[_0x284e73(-0x108,-0x1b,0x4,-0x43,-0xff)]))return!![];else{if(_0x7d21de){if(_0x3f6554[_0x5cd516(0x5a,0xae,0x10f,0xc4,-0x24)](_0x3f6554[_0x284e73(0x32,-0x5a,-0x5a,0x58,0xa2)],_0x3f6554[_0x14e24d(-0x12,0xa0,-0x67,0x40,0x91)])){const _0x59fb84=eKWRYG[_0x5cd516(0x3d,-0x84,0xfa,0x31,0x10)](_0xb1b825,eKWRYG[_0x284e73(0x38,0x88,0xa5,0x3a,0x63)](eKWRYG[_0x1be6d0(0x60b,0x503,0x538,0x5c0,0x52f)](eKWRYG[_0x14e24d(0x15a,0x1a8,0x11e,0xd4,0x1b)],eKWRYG[_0x14e24d(0x20a,0x210,0x18a,0x136,0xc5)]),');'));_0xfef540=eKWRYG[_0x2fcfec(0x5eb,0x489,0x5ad,0x54d,0x53c)](_0x59fb84);}else{const _0x161925=_0x7d21de[_0x1be6d0(0x4ab,0x510,0x5ae,0x556,0x57a)](_0x25e9d4,arguments);return _0x7d21de=null,_0x161925;}}}}:function(){};return _0x27b9bb=![],_0x1c5db1;}};}}());(function(){function _0x1c89af(_0x538c4f,_0x4dd050,_0x2a16e9,_0x480744,_0x3cc2cc){return _0x53ed56(_0x538c4f-0xa8,_0x480744-0x45b,_0x2a16e9-0x2f,_0x4dd050,_0x3cc2cc-0x15e);}function _0x158656(_0x246a59,_0x84b09a,_0x4e96a4,_0x5ac44a,_0x459e6e){return _0x1c9983(_0x246a59-0x99,_0x84b09a-0x1d0,_0x4e96a4-0x76,_0x5ac44a,_0x246a59-0x14d);}function _0xa4ae9b(_0x33062c,_0xc52e6,_0x354c4a,_0x1e9231,_0x199980){return _0x66aa7(_0x33062c,_0xc52e6-0x1d,_0x199980-0x681,_0x1e9231-0x10b,_0x199980-0x16);}function _0x4ff1e7(_0x53bd35,_0x4486f7,_0x400bda,_0x25d222,_0x4e8173){return _0x53ed56(_0x53bd35-0xa0,_0x4486f7-0xf5,_0x400bda-0x1c3,_0x53bd35,_0x4e8173-0x137);}const _0x3c714b={'NxZPY':function(_0x1cdf50,_0x1375f1){function _0x548680(_0x4a92b5,_0x204d68,_0x35d863,_0x127e85,_0x4172bb){return _0x1914(_0x127e85- -0x16,_0x4a92b5);}return _0x105ee5[_0x548680(0x128,0x17b,0x174,0x13a,0x1f3)](_0x1cdf50,_0x1375f1);},'hoyWb':function(_0x2906aa,_0xe71a0){function _0x23f52a(_0x1b85a4,_0x2b1ca1,_0x43cdbb,_0x2b8611,_0x2830dc){return _0x1914(_0x2b8611- -0x362,_0x2830dc);}return _0x105ee5[_0x23f52a(-0x113,-0x16d,-0x139,-0x148,-0x1f7)](_0x2906aa,_0xe71a0);},'jlrLe':_0x105ee5[_0xa4ae9b(0x5fc,0x684,0x5e7,0x648,0x5bd)],'xlnrI':_0x105ee5[_0x4ff1e7(-0x240,-0x18c,-0x157,-0xc1,-0xe2)],'bKwAT':_0x105ee5[_0x431b56(0x362,0x349,0x37d,0x412,0x39f)],'qZfVo':function(_0x39ad9e,_0x40bd72){function _0xc060f0(_0x32bee9,_0x36e7ea,_0x19dd4e,_0x1be6cd,_0x5946d6){return _0x431b56(_0x5946d6,_0x36e7ea-0x9b,_0x19dd4e- -0xbd,_0x1be6cd-0xa0,_0x5946d6-0x16d);}return _0x105ee5[_0xc060f0(0x403,0x288,0x329,0x299,0x368)](_0x39ad9e,_0x40bd72);},'IGWnr':_0x105ee5[_0x4ff1e7(-0x12,-0xe8,-0x5f,-0x78,-0x54)],'dzohJ':_0x105ee5[_0x158656(-0x116,-0x137,-0x15c,-0x4c,-0x10c)],'HACBD':_0x105ee5[_0xa4ae9b(0x4e9,0x4c5,0x58f,0x5a1,0x4d8)],'xVAID':_0x105ee5[_0x431b56(0x277,0x35e,0x331,0x3d0,0x359)],'MtnLE':function(_0x15175d,_0x2eaf1a){function _0x40cdf4(_0x327ec9,_0x10b58e,_0x199b65,_0x43e986,_0x243134){return _0xa4ae9b(_0x10b58e,_0x10b58e-0x18c,_0x199b65-0x115,_0x43e986-0xee,_0x43e986- -0x2c5);}return _0x105ee5[_0x40cdf4(0x221,0x245,0xf1,0x180,0x1b7)](_0x15175d,_0x2eaf1a);},'vysdL':_0x105ee5[_0x4ff1e7(0x21,-0x64,-0x72,0x4a,-0xfa)],'xcLKt':function(_0x5dec5b,_0x296639){function _0x2b5a2e(_0x4c7782,_0x58aad6,_0x2825d4,_0x4b6b76,_0x57b0c9){return _0x1c89af(_0x4c7782-0x35,_0x4b6b76,_0x2825d4-0x4e,_0x58aad6- -0x48f,_0x57b0c9-0x16c);}return _0x105ee5[_0x2b5a2e(-0x36e,-0x2e6,-0x2b5,-0x2d6,-0x2c2)](_0x5dec5b,_0x296639);},'myAXH':_0x105ee5[_0x431b56(0x3d7,0x383,0x31d,0x3c2,0x341)],'fwUUE':function(_0x15f656,_0x546996){function _0xac43f8(_0x3aaf5f,_0x1d7c67,_0x28559c,_0x1dabfe,_0x25546a){return _0xa4ae9b(_0x1dabfe,_0x1d7c67-0x195,_0x28559c-0x6,_0x1dabfe-0x124,_0x28559c- -0x436);}return _0x105ee5[_0xac43f8(0x171,0x155,0x13c,0xc7,0x1d3)](_0x15f656,_0x546996);},'uNzBo':_0x105ee5[_0x4ff1e7(-0x122,-0x15e,-0x203,-0x18b,-0x176)],'gHAgS':function(_0x345b60,_0x1f7e56){function _0x51ff22(_0x1229cc,_0x2637fe,_0x12448e,_0x1abd70,_0x2330c0){return _0x4ff1e7(_0x2637fe,_0x12448e-0x583,_0x12448e-0xbb,_0x1abd70-0x7c,_0x2330c0-0xc4);}return _0x105ee5[_0x51ff22(0x373,0x411,0x3c1,0x493,0x386)](_0x345b60,_0x1f7e56);},'NaSwh':_0x105ee5[_0x158656(-0xbe,-0x25,-0x16b,-0xb3,-0x18a)],'oLaVd':function(_0x4bd253){function _0x4f3ac0(_0xd447e6,_0x1aae6a,_0x39d024,_0x441cc7,_0x590792){return _0xa4ae9b(_0xd447e6,_0x1aae6a-0xf9,_0x39d024-0x12d,_0x441cc7-0x179,_0x441cc7- -0x68f);}return _0x105ee5[_0x4f3ac0(-0x2d3,-0x251,-0x21e,-0x222,-0x22c)](_0x4bd253);}};function _0x431b56(_0x49b240,_0x503772,_0x4210ef,_0x3c4b80,_0x17e9c3){return _0x66aa7(_0x49b240,_0x503772-0x7,_0x4210ef-0x4be,_0x3c4b80-0x85,_0x17e9c3-0x1da);}if(_0x105ee5[_0x431b56(0x356,0x3fb,0x3e6,0x3c1,0x465)](_0x105ee5[_0x158656(-0xfd,-0x13a,-0xe4,-0x129,-0x2e)],_0x105ee5[_0xa4ae9b(0x4c5,0x407,0x416,0x431,0x4bc)]))_0x105ee5[_0x431b56(0x324,0x417,0x394,0x45f,0x3e8)](_0x55a234,this,function(){function _0x4353d8(_0x5bf40b,_0x26568e,_0x1e1237,_0x4acef1,_0x24d32d){return _0x158656(_0x5bf40b-0x30,_0x26568e-0x104,_0x1e1237-0x0,_0x26568e,_0x24d32d-0x8);}const _0x5ecd43={'pWtoL':function(_0x3357e2,_0x399561){function _0x33d366(_0x5638cb,_0x1426ee,_0x1160fa,_0x11cdd3,_0x246438){return _0x1914(_0x1160fa- -0x3d7,_0x11cdd3);}return _0x3c714b[_0x33d366(-0x3c3,-0x2c6,-0x345,-0x2d2,-0x27a)](_0x3357e2,_0x399561);},'yfyIQ':function(_0x3a91fa,_0x4057e5){function _0x4e4d02(_0x3fb6bb,_0x132c7b,_0x11677f,_0x3907dc,_0x28c15d){return _0x1914(_0x132c7b-0x2f0,_0x3907dc);}return _0x3c714b[_0x4e4d02(0x499,0x512,0x513,0x489,0x57b)](_0x3a91fa,_0x4057e5);},'oJYvF':_0x3c714b[_0xc62f54(-0xdc,0x1d,-0x22,-0x51,0x47)],'kmwTi':_0x3c714b[_0xc62f54(0x4f,0x98,0x5c,0x120,0x15b)],'abkAb':_0x3c714b[_0xc62f54(-0x87,-0x8e,-0x1e,-0x28,-0x34)]};function _0x4f229d(_0x5a2985,_0x58a89b,_0x350aef,_0x2ee6c4,_0x34b125){return _0x158656(_0x5a2985-0x28b,_0x58a89b-0x133,_0x350aef-0xa4,_0x2ee6c4,_0x34b125-0x161);}function _0x395b4d(_0x133c7f,_0x3a0a9a,_0x435e9d,_0x31ef5e,_0x1916ec){return _0x431b56(_0x435e9d,_0x3a0a9a-0xda,_0x31ef5e- -0xb7,_0x31ef5e-0x9a,_0x1916ec-0xcb);}function _0x41a39d(_0x571bf5,_0x5572f5,_0x3fbde4,_0x445103,_0x50412d){return _0x158656(_0x3fbde4- -0x118,_0x5572f5-0xa4,_0x3fbde4-0xe9,_0x5572f5,_0x50412d-0x1ea);}function _0xc62f54(_0x50fc14,_0x969ae3,_0x3cd349,_0xe95580,_0x224fa7){return _0x158656(_0xe95580-0x113,_0x969ae3-0x10a,_0x3cd349-0x1d1,_0x969ae3,_0x224fa7-0x1d3);}if(_0x3c714b[_0xc62f54(0x162,0x19e,0x172,0x130,0xea)](_0x3c714b[_0x4353d8(-0xe9,-0xb3,-0xc4,-0x44,-0x8a)],_0x3c714b[_0x41a39d(-0x18c,-0x2d8,-0x231,-0x2ed,-0x163)])){const _0x6bf344=new RegExp(_0x3c714b[_0x395b4d(0x2b1,0x24f,0x1b7,0x290,0x26f)]),_0x2d1c72=new RegExp(_0x3c714b[_0x395b4d(0x360,0x2ca,0x34f,0x2ae,0x2ac)],'i'),_0x62c501=_0x3c714b[_0x4353d8(-0x12a,-0x101,-0x9e,-0x7a,-0x114)](_0x14e92b,_0x3c714b[_0x395b4d(0x25d,0x3c1,0x315,0x331,0x3c8)]);!_0x6bf344[_0x395b4d(0x2d0,0x338,0x266,0x27c,0x1df)](_0x3c714b[_0x395b4d(0x25a,0x35f,0x33c,0x285,0x2a4)](_0x62c501,_0x3c714b[_0x4f229d(0x282,0x274,0x289,0x303,0x30d)]))||!_0x2d1c72[_0x395b4d(0x30e,0x273,0x261,0x27c,0x2d2)](_0x3c714b[_0x41a39d(-0x1b3,-0x207,-0x184,-0xac,-0xbe)](_0x62c501,_0x3c714b[_0x395b4d(0x250,0x163,0x1b9,0x1f2,0x1e3)]))?_0x3c714b[_0x395b4d(0x2d0,0x306,0x259,0x230,0x211)](_0x3c714b[_0x4f229d(0x24f,0x263,0x248,0x202,0x307)],_0x3c714b[_0x395b4d(0x2fb,0x2c5,0x33d,0x303,0x268)])?_0x571a89=_0x45344d:_0x3c714b[_0x4f229d(0x11c,0x1ce,0x1dc,0x1ec,0x1dd)](_0x62c501,'0'):_0x3c714b[_0x4353d8(0x4d,-0x50,0xd3,-0x3,-0x42)](_0x3c714b[_0x41a39d(-0x51,-0x48,-0xef,-0x6c,-0x15c)],_0x3c714b[_0x395b4d(0x3f9,0x39a,0x413,0x368,0x438)])?_0x3c714b[_0x395b4d(0x213,0x2fb,0x30e,0x24c,0x236)](_0x14e92b):mgspiL[_0x395b4d(0x2f4,0x3cc,0x279,0x32e,0x2f6)](_0x2aabe5,'0');}else(function(){return!![];}[_0xc62f54(0x4b,0x153,0x31,0xc2,0x46)+_0x395b4d(0x386,0x23c,0x2e9,0x2b1,0x203)+'r'](mgspiL[_0x41a39d(-0x1b3,-0x205,-0x168,-0x1fc,-0x233)](mgspiL[_0x41a39d(-0x1a9,-0x12a,-0x181,-0x1fe,-0xa8)],mgspiL[_0x4353d8(-0xb,-0x4d,0x86,-0x2a,-0x9a)]))[_0x395b4d(0x37f,0x237,0x2af,0x2fe,0x33a)](mgspiL[_0x41a39d(-0x295,-0x2bf,-0x258,-0x1c4,-0x2f9)]));})();else{if(_0x2f571f){const _0x4db9d5=_0x3cbd2f[_0xa4ae9b(0x5c2,0x638,0x564,0x48e,0x564)](_0x6c5f10,arguments);return _0x385f8f=null,_0x4db9d5;}}}());function _0x1c9983(_0x306a50,_0x3472bd,_0x3b2bc0,_0x4dd60a,_0x52d887){return _0x1914(_0x52d887- -0x339,_0x4dd60a);}const _0x11eee7=(function(){function _0x2dd65f(_0x42406e,_0xa1e3db,_0xf25009,_0x4d9886,_0x1fe843){return _0x4318ed(_0xf25009- -0xcc,_0xa1e3db-0x163,_0xf25009-0x17a,_0xa1e3db,_0x1fe843-0xeb);}const _0x2f8f22={'prsVn':function(_0x132b15,_0x53c508){function _0xb8056b(_0x44105d,_0x13e50b,_0x1e5d1a,_0x30b3db,_0x53469a){return _0x1914(_0x1e5d1a-0x14a,_0x44105d);}return _0x105ee5[_0xb8056b(0x355,0x25e,0x331,0x2a4,0x2d0)](_0x132b15,_0x53c508);},'YKwGX':function(_0x4d9743,_0x51aff8){function _0x55f420(_0x1d5f68,_0x4462a9,_0x57113b,_0x3b453e,_0x2247dd){return _0x1914(_0x2247dd- -0x353,_0x1d5f68);}return _0x105ee5[_0x55f420(-0xf6,-0x147,-0x17b,-0x26b,-0x1b9)](_0x4d9743,_0x51aff8);},'FmMiJ':_0x105ee5[_0xa305c3(0x139,0x65,0x117,0x64,0xd1)],'wnQrL':function(_0x1270fe,_0x280e57){function _0x14291a(_0x5376aa,_0x308c76,_0x2a1c6f,_0xd3665b,_0x28fb4a){return _0xa305c3(_0xd3665b-0x1ba,_0x308c76-0x100,_0x2a1c6f-0x68,_0xd3665b-0x1b8,_0x28fb4a);}return _0x105ee5[_0x14291a(0x384,0x3cb,0x2cd,0x309,0x2f6)](_0x1270fe,_0x280e57);},'mqNRC':_0x105ee5[_0xa305c3(0x121,0x13a,0x17b,0xf0,0x15d)],'YWXxX':function(_0x50c700,_0x4280e4){function _0x3c3c68(_0x45c3b5,_0x32be06,_0x351b62,_0x50ef2f,_0x5ee916){return _0x55ec32(_0x5ee916,_0x50ef2f-0x144,_0x351b62-0x16f,_0x50ef2f-0x1ef,_0x5ee916-0x1e7);}return _0x105ee5[_0x3c3c68(-0x102,-0x9d,-0x6b,-0xf8,-0xaa)](_0x50c700,_0x4280e4);},'eLnSp':_0x105ee5[_0xa305c3(0x68,0x100,0xdd,0xc2,0x133)],'gIcvU':_0x105ee5[_0x55ec32(-0x2ac,-0x1ed,-0x242,-0x1d2,-0x162)]};function _0x55ec32(_0x2f293e,_0x3c1d75,_0x201416,_0x303ad3,_0x518e43){return _0x1c9983(_0x2f293e-0xa4,_0x3c1d75-0x4d,_0x201416-0x130,_0x2f293e,_0x3c1d75- -0x89);}function _0x3b35b5(_0x381f73,_0x9b3def,_0xfe1a60,_0x27085d,_0x5935ea){return _0x4318ed(_0x5935ea-0x30c,_0x9b3def-0x103,_0xfe1a60-0x18a,_0x381f73,_0x5935ea-0x2);}function _0x3d97b0(_0x1f2671,_0x4e937a,_0x57ce04,_0xa85dfd,_0x1fe1d4){return _0x53ed56(_0x1f2671-0xb6,_0x1fe1d4-0x48d,_0x57ce04-0x89,_0xa85dfd,_0x1fe1d4-0x12e);}function _0xa305c3(_0x26f6b3,_0xd0bc61,_0x271bdb,_0x4ccb0c,_0x8fac60){return _0x66aa7(_0x8fac60,_0xd0bc61-0xe3,_0x26f6b3-0x25e,_0x4ccb0c-0x1e4,_0x8fac60-0x61);}if(_0x105ee5[_0xa305c3(0x14f,0x114,0x1a4,0x1f3,0xf2)](_0x105ee5[_0xa305c3(0x148,0x1c7,0x136,0x1bf,0xad)],_0x105ee5[_0xa305c3(0x143,0x17d,0x12a,0x79,0x219)])){let _0x31a0fe=!![];return function(_0x9d74f0,_0x4d765d){function _0x47c8a1(_0xc7382,_0x269fa1,_0x3570cb,_0x2d00b6,_0x1f92ed){return _0xa305c3(_0x269fa1- -0xb7,_0x269fa1-0x13d,_0x3570cb-0x158,_0x2d00b6-0x166,_0x3570cb);}const _0x249457={'zQyOy':function(_0x1e6f4c,_0x2586c0){function _0x4fd3b1(_0x1daee1,_0x3a9c30,_0x261c3f,_0xca699d,_0x52d831){return _0x1914(_0x3a9c30- -0x227,_0x1daee1);}return _0x2f8f22[_0x4fd3b1(-0x121,-0x8f,-0x4c,-0x3c,-0x140)](_0x1e6f4c,_0x2586c0);},'TwwiN':function(_0xb0baea,_0x52af0e){function _0x2940ce(_0x202b4b,_0x204789,_0xc6da28,_0x3bd80e,_0x15ca8d){return _0x1914(_0x3bd80e-0x34b,_0x204789);}return _0x2f8f22[_0x2940ce(0x434,0x3d7,0x3bb,0x413,0x49f)](_0xb0baea,_0x52af0e);},'bsWHI':_0x2f8f22[_0x500b4b(0x264,0x130,0x280,0x1e0,0x1a1)],'xPxNE':function(_0x41f68a,_0x248b7d){function _0x544849(_0x92c5ce,_0x5bc53b,_0xbbe642,_0x10f052,_0x44f757){return _0x500b4b(_0x44f757,_0x5bc53b-0x11,_0xbbe642-0x1c1,_0x92c5ce-0x8,_0x44f757-0x17b);}return _0x2f8f22[_0x544849(0xaf,0xdc,0x81,-0x2b,0xbf)](_0x41f68a,_0x248b7d);},'NkYoc':_0x2f8f22[_0x30f365(0x161,0x14b,0x1f2,0x149,0x211)]};function _0xfc50b(_0x3051a9,_0x575c68,_0x539e33,_0x931aa4,_0x5724ca){return _0x3b35b5(_0x3051a9,_0x575c68-0x1d1,_0x539e33-0x10e,_0x931aa4-0xc2,_0x575c68- -0x143);}function _0x500b4b(_0x5788a2,_0x7fa8b,_0x4694ca,_0x55db31,_0x44504b){return _0x2dd65f(_0x5788a2-0x1ee,_0x5788a2,_0x55db31-0x1ab,_0x55db31-0x1b6,_0x44504b-0x75);}function _0x30f365(_0x406ee5,_0xef7fd4,_0x2a8246,_0x109dd1,_0x3ec1e5){return _0x3d97b0(_0x406ee5-0x59,_0xef7fd4-0x54,_0x2a8246-0x1c,_0xef7fd4,_0x3ec1e5-0x30);}function _0x52bd3(_0x58fbdd,_0x1ba078,_0x1e93e7,_0x40ac3b,_0xa4ede8){return _0xa305c3(_0xa4ede8-0xaa,_0x1ba078-0x86,_0x1e93e7-0x1b9,_0x40ac3b-0x112,_0x58fbdd);}if(_0x2f8f22[_0x500b4b(0x5e,0x165,0xc2,0xaa,0x93)](_0x2f8f22[_0x30f365(0x228,0x248,0x343,0x29d,0x2f7)],_0x2f8f22[_0x500b4b(0x198,0x1f9,0x249,0x171,0x13a)])){const _0x3d39cc=_0x13404b?function(){function _0x1cc8a3(_0x45b83e,_0x35e1b0,_0x2278e0,_0x2fa3a2,_0x1acef8){return _0x52bd3(_0x2278e0,_0x35e1b0-0x1ba,_0x2278e0-0xdc,_0x2fa3a2-0x13,_0x35e1b0- -0x126);}if(_0x1a2438){const _0x456a99=_0x5c50cf[_0x1cc8a3(0x10a,0xc5,0x4b,0x79,0x30)](_0x14f8f9,arguments);return _0x516c24=null,_0x456a99;}}:function(){};return _0xc3d91b=![],_0x3d39cc;}else{const _0x18fde3=_0x31a0fe?function(){function _0x23d2dd(_0x4f4b10,_0x17c067,_0x37fb11,_0x75eaaa,_0x1180fb){return _0x30f365(_0x4f4b10-0x5a,_0x17c067,_0x37fb11-0xdd,_0x75eaaa-0xba,_0x1180fb- -0x76);}function _0x135232(_0x1c7e7f,_0x176bc9,_0x3e1b72,_0x22af61,_0x2c76eb){return _0xfc50b(_0x1c7e7f,_0x176bc9-0x2b1,_0x3e1b72-0x1cf,_0x22af61-0x1a4,_0x2c76eb-0x1b);}const _0x2e98a9={'QKata':function(_0x423ca8,_0x1134ea){function _0x68fce5(_0x25f922,_0x53b2d0,_0x40461a,_0x511349,_0x11148c){return _0x1914(_0x40461a-0x2d8,_0x11148c);}return _0x249457[_0x68fce5(0x448,0x383,0x42c,0x394,0x3e5)](_0x423ca8,_0x1134ea);}};function _0xd630e1(_0x3b8f4e,_0x3ae36b,_0x5d8116,_0xa6722c,_0x42f5c5){return _0xfc50b(_0x5d8116,_0x3ae36b- -0x3b8,_0x5d8116-0x15f,_0xa6722c-0x35,_0x42f5c5-0xd3);}function _0x2166a9(_0x5f03d6,_0x5e20e1,_0x23bff5,_0x2180f9,_0x186d45){return _0x47c8a1(_0x5f03d6-0x1f0,_0x5f03d6-0x10,_0x186d45,_0x2180f9-0x6f,_0x186d45-0x5c);}function _0x4dc37a(_0x1d8908,_0xcf0037,_0x183acc,_0x29be0d,_0x3ca0f1){return _0x47c8a1(_0x1d8908-0xa7,_0xcf0037- -0x41,_0x183acc,_0x29be0d-0x91,_0x3ca0f1-0x173);}if(_0x249457[_0x135232(0x442,0x45b,0x44d,0x50d,0x382)](_0x249457[_0x135232(0x44a,0x44c,0x3f4,0x51f,0x3d8)],_0x249457[_0x23d2dd(0x11e,0x1de,0x29e,0x124,0x1d7)])){if(_0x4d765d){if(_0x249457[_0x4dc37a(-0xf0,-0x82,0x37,0x33,-0x14)](_0x249457[_0x135232(0x501,0x57d,0x62d,0x509,0x563)],_0x249457[_0x23d2dd(0x352,0x256,0x37d,0x338,0x308)])){if(_0x48f7c2){const _0x25b14e=_0x4b8e0d[_0x23d2dd(0x372,0x372,0x309,0x34e,0x2b4)](_0x364200,arguments);return _0x5dc12c=null,_0x25b14e;}}else{const _0x48a579=_0x4d765d[_0xd630e1(-0x128,-0x140,-0x90,-0x114,-0x15a)](_0x9d74f0,arguments);return _0x4d765d=null,_0x48a579;}}}else VlEATJ[_0x4dc37a(0x16b,0xa3,0xb,0x6b,0x115)](_0x5d2292,0x458+0x172+-0x13*0x4e);}:function(){};return _0x31a0fe=![],_0x18fde3;}};}else return _0x39279b[_0x2dd65f(0x5b,-0xcd,0x6,0x8c,-0x87)+_0x2dd65f(0x3f,-0x7d,-0x97,0x11,-0xfa)]()[_0x3d97b0(0x344,0x322,0x29b,0x3e6,0x36f)+'h'](xxsbIQ[_0x3d97b0(0x2eb,0x2c2,0x3d4,0x359,0x339)])[_0x2dd65f(-0xa4,0xc0,0x6,0x6,-0x1d)+_0x55ec32(-0x352,-0x2a5,-0x265,-0x1cd,-0x215)]()[_0x2dd65f(-0x94,0x9e,-0x19,-0xed,0xa3)+_0xa305c3(0x108,0x9b,0x1d0,0xc8,0x1a8)+'r'](_0x2ab178)[_0x2dd65f(0x3b,0xe,0x58,0xd5,0x71)+'h'](xxsbIQ[_0x2dd65f(0x17,0x19,0x22,-0x9,0xef)]);}()),_0x4c5896=_0x105ee5[_0x4318ed(0xd4,0xc0,0x111,0x19e,0x15e)](_0x11eee7,this,function(){const _0x3fcf37={'wNGxS':function(_0x3b54be,_0xd8e55e){function _0x164225(_0x50de49,_0x51087c,_0x5295f2,_0x1b69f3,_0xb3fde9){return _0x1914(_0x51087c- -0x1d0,_0x50de49);}return _0x105ee5[_0x164225(0x51,0x4a,0xe5,-0x26,-0x49)](_0x3b54be,_0xd8e55e);},'XIWMy':_0x105ee5[_0x152c60(0x503,0x5f4,0x588,0x4ae,0x567)],'upwdx':_0x105ee5[_0x147be3(0x303,0x33e,0x2fe,0x38d,0x30c)],'HFAzD':_0x105ee5[_0x26512a(0xb8,0x10f,0x187,0x198,0x152)]};function _0x152c60(_0x42a835,_0x1de520,_0x37fea9,_0x16b8e5,_0x553996){return _0x4318ed(_0x553996-0x45f,_0x1de520-0xf5,_0x37fea9-0x148,_0x1de520,_0x553996-0x14e);}function _0x3973b0(_0x7d7639,_0x30f9a1,_0x3960b2,_0xe5641a,_0x372b61){return _0x4318ed(_0x372b61- -0x2fe,_0x30f9a1-0x57,_0x3960b2-0x191,_0x30f9a1,_0x372b61-0x1da);}function _0x147be3(_0x41aa40,_0x58fd1d,_0x588a6f,_0x1a3ac2,_0x22926f){return _0x1c9983(_0x41aa40-0xc6,_0x58fd1d-0x7e,_0x588a6f-0x18e,_0x58fd1d,_0x1a3ac2-0x61d);}function _0x26512a(_0x2edba6,_0x507f7a,_0x1fda9e,_0x33aaa8,_0x45a8ca){return _0x4318ed(_0x45a8ca-0x6c,_0x507f7a-0x3c,_0x1fda9e-0x8d,_0x33aaa8,_0x45a8ca-0x73);}function _0x374372(_0x403db8,_0x3a580f,_0x58ccdf,_0x4c2a78,_0x2e158b){return _0x5dea41(_0x403db8-0x14d,_0x403db8-0x80,_0x58ccdf-0xcd,_0x3a580f,_0x2e158b-0xd7);}if(_0x105ee5[_0x26512a(0x13f,0x1f8,0x101,0x194,0x129)](_0x105ee5[_0x374372(0x438,0x4c7,0x478,0x3f8,0x47d)],_0x105ee5[_0x152c60(0x4f8,0x54d,0x5f3,0x579,0x55c)]))return![];else{let _0x2b0d68;try{if(_0x105ee5[_0x152c60(0x490,0x473,0x582,0x5a5,0x51c)](_0x105ee5[_0x3973b0(-0x1ca,-0x263,-0x1b1,-0x127,-0x1e0)],_0x105ee5[_0x26512a(-0x6a,0x6b,0x35,-0x81,0x52)])){const _0x24f3fe=_0x105ee5[_0x3973b0(-0x327,-0x2c7,-0x2da,-0x216,-0x2e9)](Function,_0x105ee5[_0x3973b0(-0x256,-0x193,-0x269,-0x1e5,-0x1cc)](_0x105ee5[_0x374372(0x3bf,0x490,0x421,0x37d,0x378)](_0x105ee5[_0x374372(0x338,0x312,0x3a7,0x3f0,0x2e4)],_0x105ee5[_0x374372(0x389,0x365,0x302,0x2c4,0x3d9)]),');'));_0x2b0d68=_0x105ee5[_0x374372(0x393,0x3ba,0x459,0x2da,0x35b)](_0x24f3fe);}else(function(){return![];}[_0x26512a(0x1c8,0x171,0x15b,0x115,0x11f)+_0x374372(0x3b1,0x46d,0x3bf,0x39f,0x3a5)+'r'](tImAxS[_0x152c60(0x40a,0x3f9,0x450,0x4f8,0x456)](tImAxS[_0x26512a(-0x13,0x12,0xed,0xd1,0x15)],tImAxS[_0x152c60(0x382,0x32e,0x3aa,0x368,0x406)]))[_0x152c60(0x588,0x461,0x522,0x52a,0x50e)](tImAxS[_0x147be3(0x504,0x4eb,0x46b,0x4bb,0x4da)]));}catch(_0x5b07a5){if(_0x105ee5[_0x26512a(0x82,0x4a,0x39,0x1a6,0xdc)](_0x105ee5[_0x374372(0x33c,0x3ba,0x2ab,0x37d,0x3f2)],_0x105ee5[_0x26512a(0x16c,0x163,0x9,0x68,0xa5)]))return function(_0x54cc04){}[_0x147be3(0x417,0x429,0x3d2,0x47f,0x3ae)+_0x374372(0x3b1,0x314,0x416,0x44a,0x314)+'r'](xxsbIQ[_0x26512a(0x195,0xbe,0xf5,0xed,0x133)])[_0x374372(0x3ea,0x3db,0x398,0x321,0x31f)](xxsbIQ[_0x152c60(0x532,0x420,0x461,0x4a2,0x462)]);else _0x2b0d68=window;}const _0x32bbf7=_0x2b0d68[_0x152c60(0x4d1,0x45c,0x5ae,0x5be,0x4ed)+'le']=_0x2b0d68[_0x26512a(0x31,0x148,0x167,0xf1,0xfa)+'le']||{},_0x5b8373=[_0x105ee5[_0x3973b0(-0x1f5,-0x1b7,-0x2dc,-0x309,-0x230)],_0x105ee5[_0x374372(0x31d,0x2a6,0x290,0x25b,0x364)],_0x105ee5[_0x152c60(0x5e2,0x610,0x633,0x627,0x576)],_0x105ee5[_0x374372(0x423,0x3c3,0x382,0x371,0x3ff)],_0x105ee5[_0x26512a(-0x34,-0x4,0x116,-0x15,0x64)],_0x105ee5[_0x147be3(0x3cb,0x495,0x42a,0x426,0x3bc)],_0x105ee5[_0x152c60(0x4a3,0x52f,0x53a,0x43a,0x4eb)]];for(let _0x1f263f=0x1*-0x22d+0x19d8+-0x17ab;_0x105ee5[_0x152c60(0x394,0x44b,0x4c2,0x446,0x41a)](_0x1f263f,_0x5b8373[_0x147be3(0x36a,0x3e5,0x451,0x3f5,0x478)+'h']);_0x1f263f++){if(_0x105ee5[_0x374372(0x3d9,0x451,0x361,0x482,0x3d8)](_0x105ee5[_0x152c60(0x3aa,0x442,0x393,0x495,0x449)],_0x105ee5[_0x147be3(0x312,0x3a7,0x312,0x3c8,0x380)])){if(_0xe2c2df)return _0x3215ad;else xxsbIQ[_0x3973b0(-0x351,-0x350,-0x24c,-0x305,-0x2e9)](_0x2da021,0x1*0x1051+0x1*-0x15d+-0xef4);}else{const _0x3a25ad=_0x11eee7[_0x147be3(0x4f6,0x54e,0x524,0x47f,0x3ea)+_0x26512a(0xe5,0x126,0xcb,0x30,0xe2)+'r'][_0x26512a(0x11f,0xc4,0x223,0x10e,0x17f)+_0x374372(0x375,0x2b2,0x318,0x393,0x3fa)][_0x3973b0(-0x2a0,-0x274,-0x23e,-0x261,-0x1e8)](_0x11eee7),_0x4a6134=_0x5b8373[_0x1f263f],_0x377561=_0x32bbf7[_0x4a6134]||_0x3a25ad;_0x3a25ad[_0x374372(0x33b,0x319,0x3c8,0x406,0x3ed)+_0x147be3(0x3d4,0x511,0x421,0x469,0x4bb)]=_0x11eee7[_0x152c60(0x60e,0x5ab,0x542,0x5fb,0x575)](_0x11eee7),_0x3a25ad[_0x3973b0(-0x209,-0x184,-0x2ba,-0x287,-0x22c)+_0x152c60(0x465,0x48c,0x515,0x53b,0x494)]=_0x377561[_0x374372(0x40d,0x391,0x46f,0x3cd,0x3e4)+_0x374372(0x370,0x3eb,0x2db,0x329,0x2d6)][_0x152c60(0x5e6,0x4cc,0x4d8,0x5b7,0x575)](_0x377561),_0x32bbf7[_0x4a6134]=_0x3a25ad;}}}});_0x105ee5[_0x53ed56(-0x18e,-0x1c4,-0x1d1,-0x20d,-0x255)](_0x4c5896),_0x105ee5[_0x1c9983(-0x2c3,-0x19e,-0x25b,-0x17c,-0x22f)](fetch,window[_0x66aa7(-0x114,-0x95,-0x98,-0xd7,-0x104)+_0x1c9983(-0x2a7,-0x20c,-0x201,-0x167,-0x1ce)][_0x5dea41(0x393,0x379,0x2ac,0x2fe,0x372)+'n'])[_0x4318ed(0x45,0x44,0x11d,0x80,-0x13)](_0x3b2093=>_0x3b2093[_0x66aa7(-0x1e5,-0x207,-0x196,-0x228,-0x26a)]())[_0x1c9983(-0x2a5,-0x288,-0x1be,-0x292,-0x20c)](_0x574164=>{function _0x225738(_0x202efc,_0x2d3b49,_0x4e8395,_0x429735,_0x3e36ff){return _0x5dea41(_0x202efc-0x9e,_0x202efc- -0x462,_0x4e8395-0xbb,_0x3e36ff,_0x3e36ff-0x15f);}const _0x25075a={'MqZHT':_0x105ee5[_0x4dc27b(-0x10b,-0x161,-0x285,-0x239,-0x1af)],'xCkSR':_0x105ee5[_0x4dc27b(-0xc9,-0x19a,-0x150,-0x116,-0x17a)],'DPotS':function(_0x4b7ab8,_0x742328){function _0x4720a5(_0x5d5ff1,_0x42eb1f,_0x4adb32,_0x40737d,_0x5e6fc4){return _0x47035e(_0x5d5ff1-0xb3,_0x42eb1f-0x2d,_0x4adb32-0x77,_0x4adb32,_0x5e6fc4- -0x2b);}return _0x105ee5[_0x4720a5(0x227,0x1ed,0x11b,0x24b,0x1d8)](_0x4b7ab8,_0x742328);},'mZRKb':_0x105ee5[_0x47035e(0x2a7,0x2b8,0x26b,0x2a2,0x25d)],'jpOmi':function(_0x44b695,_0x23afd1){function _0xb67638(_0x126f58,_0x4f57bd,_0x573690,_0x41a1ba,_0x380331){return _0x225738(_0x41a1ba-0x674,_0x4f57bd-0xea,_0x573690-0xa8,_0x41a1ba-0x130,_0x380331);}return _0x105ee5[_0xb67638(0x39e,0x3b2,0x485,0x45d,0x4a0)](_0x44b695,_0x23afd1);},'NCSwk':_0x105ee5[_0x47035e(0x35e,0x34b,0x2e6,0x391,0x307)],'xEKpz':_0x105ee5[_0x3691cc(-0xe6,-0x8d,-0x18a,-0x108,-0x15a)],'urJrW':function(_0x2c03e4,_0x41576a){function _0x23eaa0(_0x544e24,_0x1e830a,_0x2d2cd9,_0x4d953e,_0x29aac2){return _0x225738(_0x2d2cd9-0x4a9,_0x1e830a-0x41,_0x2d2cd9-0xec,_0x4d953e-0xe3,_0x29aac2);}return _0x105ee5[_0x23eaa0(0x3e8,0x2f6,0x36a,0x3c0,0x358)](_0x2c03e4,_0x41576a);},'mkSEr':function(_0x20061f){function _0x16e110(_0x5b750b,_0x5d52e9,_0x209b53,_0x1bc2c3,_0x54fb42){return _0x47035e(_0x5b750b-0x1d7,_0x5d52e9-0x172,_0x209b53-0x23,_0x5b750b,_0x209b53- -0x57);}return _0x105ee5[_0x16e110(0x16d,0x308,0x239,0x2b1,0x1e0)](_0x20061f);}};function _0x3691cc(_0x5dddb9,_0x2c743a,_0x5139d5,_0xe7050,_0xec73e9){return _0x4318ed(_0xec73e9- -0x185,_0x2c743a-0x29,_0x5139d5-0xf,_0x5139d5,_0xec73e9-0xcb);}function _0x4dc27b(_0x49ff19,_0x5c2338,_0x33395b,_0x5e3878,_0x5872da){return _0x5dea41(_0x49ff19-0x152,_0x5872da- -0x458,_0x33395b-0xa5,_0x5e3878,_0x5872da-0xee);}function _0x47035e(_0x22e7db,_0x82f6e7,_0x79444f,_0x5704c2,_0xdb34ba){return _0x66aa7(_0x5704c2,_0x82f6e7-0x93,_0xdb34ba-0x3ea,_0x5704c2-0x1b6,_0xdb34ba-0x25);}function _0x2e6dd2(_0x3415d9,_0x3e3f79,_0x428f2b,_0x243f2d,_0x28ec3a){return _0x1c9983(_0x3415d9-0x1cb,_0x3e3f79-0xc8,_0x428f2b-0x55,_0x28ec3a,_0x428f2b-0x6c6);}if(_0x105ee5[_0x4dc27b(-0xb5,-0x167,-0x5b,-0x16a,-0xe0)](_0x105ee5[_0x4dc27b(-0xe0,-0x110,-0xfa,-0x112,-0x18e)],_0x105ee5[_0x4dc27b(-0x14a,-0xd2,-0xa2,-0x21,-0xd2)])){const _0x5e014f=new DOMParser(),_0x25f594=_0x5e014f[_0x2e6dd2(0x509,0x52c,0x591,0x570,0x4f6)+_0x225738(-0x12a,-0x142,-0x177,-0x1bc,-0x1c0)+_0x4dc27b(-0x2,-0xea,0x16,-0x18f,-0xc3)](_0x574164,_0x105ee5[_0x47035e(0x373,0x32e,0x3fb,0x32d,0x339)]),_0xb4f3fe=_0x25f594[_0x225738(-0x71,-0x4d,-0xd4,0x2d,-0xe1)+_0x4dc27b(-0xd4,-0xc9,-0x1e2,-0xc2,-0x126)+_0x2e6dd2(0x553,0x438,0x4d8,0x50d,0x4bc)](_0x105ee5[_0x47035e(0x396,0x317,0x26e,0x3cf,0x320)])?.[_0x47035e(0x29f,0x338,0x399,0x3dd,0x347)+_0x2e6dd2(0x561,0x528,0x50e,0x442,0x594)+'t'][_0x4dc27b(-0xba,0x2b,-0x82,0x1,-0xa1)+_0x47035e(0x28e,0x2b3,0x24c,0x159,0x1ef)+'e']()[_0x3691cc(-0x6e,-0x8c,-0x1d,-0xbe,-0xdd)+_0x3691cc(-0xb5,-0x19e,-0xdf,-0xc4,-0x10b)]('\x20','');_0xb4f3fe&&_0xb4f3fe[_0x47035e(0x2f7,0x2f7,0x2ca,0x30b,0x25c)+_0x3691cc(-0x82,-0x86,-0x3c,-0x1cd,-0x10a)](_0x105ee5[_0x2e6dd2(0x497,0x41c,0x47b,0x40d,0x402)])&&(_0x105ee5[_0x47035e(0x255,0x31a,0x376,0x208,0x2db)](_0x105ee5[_0x4dc27b(-0x228,-0x27b,-0x23b,-0x214,-0x1d0)],_0x105ee5[_0x4dc27b(-0x84,-0xcc,-0x41,-0xf2,-0xbe)])?document[_0x2e6dd2(0x4e0,0x5b0,0x4f5,0x532,0x4d2)+_0x3691cc(-0x121,-0x20d,-0x175,-0x1b9,-0x165)+_0x225738(-0x1c9,-0x245,-0x192,-0x228,-0x124)][_0x3691cc(-0xed,-0xfc,-0x1eb,-0x174,-0x1c5)+_0x4dc27b(-0xa1,-0x21a,-0x242,-0x1ae,-0x175)]='':xxsbIQ[_0x4dc27b(-0x152,0x1a,-0xef,-0x114,-0x8d)](_0x227a18));}else{const _0x5aa025=new _0x258127(GGVLEI[_0x3691cc(-0x191,-0x52,-0xaf,-0x194,-0x11c)]),_0x497667=new _0xc02ede(GGVLEI[_0x4dc27b(-0xed,0x21,-0x58,-0xb6,-0xa8)],'i'),_0x5b6411=GGVLEI[_0x4dc27b(-0x1dd,-0x131,-0x14d,-0xd0,-0x198)](_0x42d90a,GGVLEI[_0x225738(-0xef,-0x112,-0xb1,-0x1b7,-0x190)]);!_0x5aa025[_0x2e6dd2(0x471,0x3fd,0x4b6,0x4ce,0x52c)](GGVLEI[_0x2e6dd2(0x3c3,0x4b9,0x462,0x40d,0x512)](_0x5b6411,GGVLEI[_0x4dc27b(-0x1e7,-0x210,-0x211,-0x122,-0x1c0)]))||!_0x497667[_0x4dc27b(-0x1df,-0x8c,-0x1d4,-0x108,-0x15c)](GGVLEI[_0x2e6dd2(0x4d9,0x3b2,0x462,0x4e1,0x517)](_0x5b6411,GGVLEI[_0x225738(-0x176,-0xc0,-0x152,-0x11c,-0x223)]))?GGVLEI[_0x225738(-0xbb,-0xcd,-0x1e,-0x10f,-0x18c)](_0x5b6411,'0'):GGVLEI[_0x225738(-0x6c,-0xc5,-0x12d,0x20,-0x15)](_0x41ee1f);}})[_0x5dea41(0x39b,0x2d9,0x399,0x214,0x349)](_0x54e194=>{});}()),(function(){function _0x35aa25(_0x1af352,_0x3c9fa6,_0x50832c,_0xbe0cd6,_0x2ce045){return _0x1914(_0x50832c-0x250,_0x3c9fa6);}function _0x462977(_0x34aea3,_0x2b0214,_0x3f8121,_0x2fb110,_0x53c28a){return _0x1914(_0x3f8121-0x16f,_0x2fb110);}function _0x10c218(_0x42d7a3,_0x367bf9,_0x56bf33,_0x7ecf75,_0x1248e3){return _0x1914(_0x56bf33-0x1b6,_0x7ecf75);}const _0x26931d={'yVvHa':function(_0x44ee34,_0x38735a){return _0x44ee34!==_0x38735a;},'NUuAJ':_0x5ba9ac(0x12b,0x9c,0x23,0x40,-0x30),'XfdcC':function(_0x4756a7,_0x2826d4){return _0x4756a7(_0x2826d4);},'NdMwz':function(_0x5cd845,_0x30b708){return _0x5cd845+_0x30b708;},'BqaoF':function(_0x5ab2f4,_0x4c034e){return _0x5ab2f4+_0x4c034e;},'YAQgL':_0x462977(0x267,0x320,0x26d,0x2ee,0x24b)+_0x462977(0x3d7,0x299,0x332,0x2f8,0x3aa)+_0x462977(0x21f,0x2f9,0x23e,0x28a,0x287)+_0x10c218(0x30d,0x2c7,0x33f,0x3b6,0x3b0),'vwNuT':_0x35aa25(0x360,0x3aa,0x313,0x260,0x38e)+_0x10c218(0x1cf,0x2bc,0x263,0x27a,0x2bb)+_0x5ba9ac(0xd7,0x68,-0x38,0x12c,0x40)+_0x462977(0x20b,0x12b,0x1e6,0x26e,0x270)+_0x462977(0x2af,0x218,0x2e8,0x392,0x386)+_0x35aa25(0x467,0x441,0x475,0x53f,0x3b4)+'\x20)','EBtOG':function(_0x4498f5){return _0x4498f5();},'nKINC':function(_0x21dd83,_0x597ef7){return _0x21dd83===_0x597ef7;},'grTIE':_0x1af93d(-0x5b,-0xfb,-0x1af,-0x11f,-0x1da),'FaCdN':_0x462977(0x2b4,0x306,0x387,0x30b,0x3ff)};function _0x1af93d(_0x296a2e,_0x561335,_0x29be8a,_0x551305,_0xecc226){return _0x1914(_0x551305- -0x278,_0x29be8a);}function _0x5ba9ac(_0x868505,_0x13d7ad,_0x413deb,_0x3f72e3,_0x3178e7){return _0x1914(_0x13d7ad- -0x9f,_0x3f72e3);}let _0x219881;try{if(_0x26931d[_0x35aa25(0x3b0,0x36b,0x2e0,0x288,0x287)](_0x26931d[_0x462977(0x136,0x1eb,0x209,0x28a,0x268)],_0x26931d[_0x35aa25(0x38a,0x21c,0x2ea,0x2d4,0x2fa)])){const _0x2a76ae=_0x339868[_0x35aa25(0x376,0x310,0x3e7,0x3fc,0x3b6)](_0x1fb791,arguments);return _0x42ef36=null,_0x2a76ae;}else{const _0x166c7d=_0x26931d[_0x5ba9ac(0x79,0xd1,0x142,0x6e,0x3e)](Function,_0x26931d[_0x1af93d(0x5f,0xb,-0x3e,-0x7b,-0xc1)](_0x26931d[_0x5ba9ac(0x190,0x15b,0x107,0x188,0xb2)](_0x26931d[_0x1af93d(-0x94,-0x1e7,-0x9c,-0x13a,-0x198)],_0x26931d[_0x462977(0x36c,0x2e4,0x386,0x34c,0x403)]),');'));_0x219881=_0x26931d[_0x35aa25(0x307,0x317,0x3bf,0x399,0x328)](_0x166c7d);}}catch(_0x4baf68){if(_0x26931d[_0x5ba9ac(0xa,0x4b,0xd2,-0x38,0x61)](_0x26931d[_0x35aa25(0x371,0x3b2,0x340,0x2f0,0x2d5)],_0x26931d[_0x462977(0x29f,0x2d5,0x299,0x263,0x282)])){const _0x1e9e6c=_0x1d1d39[_0x1af93d(-0x9d,-0x114,-0xc3,-0xdd,-0x78)+_0x1af93d(-0x105,-0x125,-0x63,-0x11a,-0x47)+'r'][_0x462977(0x2f4,0x441,0x36a,0x300,0x2be)+_0x462977(0x2bd,0x2b8,0x291,0x1bb,0x367)][_0x462977(0x3ae,0x414,0x36d,0x3a2,0x311)](_0x16857e),_0x52c692=_0x168ae4[_0x12d824],_0xe8f348=_0x4dd024[_0x52c692]||_0x1e9e6c;_0x1e9e6c[_0x5ba9ac(0x67,0x49,-0x4b,-0x8a,0x109)+_0x5ba9ac(0xb7,0xe6,0x60,0x11a,0x15b)]=_0x44a6c5[_0x35aa25(0x4fa,0x3c0,0x44e,0x45d,0x403)](_0x208a85),_0x1e9e6c[_0x462977(0x2c6,0x3b6,0x329,0x31c,0x2ef)+_0x1af93d(-0x179,-0x22c,-0x18b,-0x15b,-0x1fb)]=_0xe8f348[_0x10c218(0x354,0x3d9,0x370,0x340,0x41e)+_0x1af93d(-0xa5,-0x112,-0xa4,-0x15b,-0x1d1)][_0x1af93d(-0x9b,-0xbb,-0x131,-0x7a,0x19)](_0xe8f348),_0x4fd892[_0x52c692]=_0x1e9e6c;}else _0x219881=window;}_0x219881[_0x5ba9ac(0x5f,0x7c,0x86,0xc8,0x156)+_0x10c218(0x31c,0x226,0x27a,0x20d,0x254)+'l'](_0x14e92b,-0x22*-0x113+0xd6+-0x1*0x15bc);}()));function _0x3961(){const _0x2714da=['cPans','TppiJ','const','yfyIQ','input','MzQEM','rNLWp','mZRKb','oaWGL','4114NvfvEO','gRRAG','ulNBz','MMjlT','origi','*(?:[','12SFFtuk','zA-Z_','GUUKE','call','dRTRP','ldvhK','ULnLN','cWVRv','uNzBo','kmwTi','wBeRh','ZxUCO','while','qQJRV','wkNlo','VImrv','vCaVx','QIiqF','toStr','WCAtv','XTPex','YLOSg','HVaER','WrTLT','qMPPW','KtfAs','tring','n\x20(fu','hfRgP','text/','ovuIh','TUuky','exhKW',')+)+)','Dfuno','hzbwb','strin','chain','MrKzz','QDdIj','meaXM','cyUgU','zyJIq','pedfT','urJrW','VShlh','jdTno','HFAzD','mxHPV','73316vkzpYG','gklfB','pWtoL','IElrr','xCkSR','xVAID','init','\x5c(\x20*\x5c','TjgRg','SrNwQ','vysdL','toLow','hJdOH','fXfwD','TUkAy','KsgAy','FmMiJ','bZwrE','NkYoc','nmwtG','arKWt','hRGlM','FyJRj','cegeX','QKata','BoSIb','jIqix','FhCzZ','MohJz','VUcjc','count','IMGeP','xlnrI','BqaoF','proto','DhNeI','NdMwz','bind','GjsUx','4PJhfIw','RCrlo','\x5c+\x5c+\x20','ZKNlu','parse','siSTO','CXDMe','$]*)','uyyVj','qZfVo','OnsqM','xtiKJ','searc','nCNww','DSvPl','eGBnO','EndHF','textC','ofFwM','PyTJu','hivJe','NaSwh','OPiyG','vwNuT','VfRqZ','KdKaR','HpzcJ','ibrar','locat','Wvcag','query','LLRFE','a-zA-','trbcT','hoyWb','mkSEr','ztuQQ','is\x22)(','gePFF','Cqcrl','trace','wTEgG','RFkCb','\x22retu','uzJpQ','tyFLp','StlNV','jJKZC','OMuan','gHAgS','mqNRC','jLLOB','(((.+','ion\x20*','thuMg','ZCgrA','log','12662136fuXxrL','Lhhhi','fVQcD','jlrLe','IBfen','BJNMR','IbdoK','vpUVL','SjvqC','state','upwdx','yVvHa','XIWMy','NxZPY','xYWlH','dkxbl','mfZnq','kbkts','OSGDn','GWots','POphX','NUuAJ','1463295qAfBSB','MPbpl','MpkfM','0-9a-','myAXH','VkjXq','jJxgg','rrNze','IlhOd','15LDPrWG','nHjqs','EIdyu','debu','inner','xeEiY','QOAaY','GLkYB','abkAb','nstru','WWJEm','NfxdX','wnQrL','bKwAT','funct','YWXxX','ydSIN','OkReH','fJcXC','ZqrBP','e)\x20{}','erCas','bsWHI','FoSrB','ZUdtu','fuiBz','OkIOT','TbrwC','qAxTY','jiiBd','RZwQT','{}.co','terva','NCSwk','ement','tion','YKwGX','TwwiN','CrObd','GlEQj','xPxNE','sRpKV','cUGne','nctio','moqUs','3700ffUQBx','ylzZS','IGWnr','MXZBh','jpOmi','rzlVu','ueEAq','FmLcv','FeFQl','\x20>\x20h1','LjbBO','FxIRe','fwUUE','dBIrR','wNGxS','bNMkf','776671tKISiE','SLdWI','lDAUt','qiPDf','pHgII','Z_$][','uOTSc','__pro','AOQVk','nKINC','OmJgH','MXnNG','DPotS','pZMYm','nmoHo','grTIE','WEQED','grmai','nTORZ','cEUAu','18fnaLtw','52742kRmszG','FBDNi','EBlZk','oLaVd','aiUkU','yYFjY','uXmGV','AXQFT','retur','uaXKo','\x20(tru','marzl','VyZNK','eeCAL','jCYru','idwfe','catch','ctor(','entEl','IOImw','aHXMz','SMzFc','rEgeG','1076600xNZQFp','fIfhc','bzJIl','HTML','lengt','WspfV','bEPsP','ITKuO','gNnBZ','GOplB','lZOvD','vajzT','xEKpz','RkGDA','setIn','KPEDm','ing','text','QInZM','KsACk','HaHyB','type','warn','XxMUE','WfcvF','inclu','qJoxm','MIMCl','test','FaCdN','QWytE','gger','then','FoKFy','PuKHj','daJdI','gFGxY','MtnLE','JeXgc','wTeiJ','VxqLM','THZBn','RiRSP','ezYup','table','EMrbi','LTrcW','IYbGh','dzohJ','YAQgL','qymxV','bCvke','llghp','PadMC','qmfyF','uUjNg','eAhKV','IfZIj','GzidW','iTxip','HHBwb','zhizj','tor','NyCzh','xsmFr','fPCbG','jbmZI','UVhAx','MqZHT','kyfIE','kjdmX','zQyOy','body\x20','ZoLVx','vIsSH','GqUnf','BMdRY','bGYEn','HACBD','FycqN','oVSWg','ructo','Selec','error','actio','ceAll','des','eLnSp','FromS','OFRit','qILbG','docum','BsWPj','syyNp','ion','ObDdq','>\x20div','html','EBtOG','XfdcC','JdOKF','uhyoT','Fcxrp','fXDiP','srQbO','conso','kwEaF','FJqKH','rn\x20th','gIcvU','nXcZa','hWnJa','VfVNf','hhRTQ','BSNqw','xcLKt','onten','OEXXc','oJYvF','zuMia','to__','GVWuG','NTtZw','lGlIY','n()\x20','XAiql','info','hMzlL','excep','Objec','cZKPs','repla','UAAQR','vSZDj','aJTXy','rUhXY','XlpiQ','SROom','apply','prsVn'];_0x3961=function(){return _0x2714da;};return _0x3961();}function _0x14e92b(_0x285cb8){function _0x31e4c6(_0x224cd5,_0x379462,_0x38d97b,_0x577c58,_0x4be9ad){return _0x1914(_0x379462- -0x252,_0x224cd5);}function _0x4d9745(_0x410e89,_0x4495d2,_0x646aa3,_0xcbb0eb,_0x30457c){return _0x1914(_0x30457c-0x384,_0xcbb0eb);}function _0x4237a3(_0x4e08e3,_0x3f5632,_0x9f87f7,_0x1db5b4,_0x200d78){return _0x1914(_0x1db5b4- -0x361,_0x200d78);}function _0x34c820(_0x36add2,_0x2287a2,_0x231349,_0x34aa38,_0xe4a0d6){return _0x1914(_0xe4a0d6-0x93,_0x231349);}function _0x4ab6cd(_0x3a1890,_0x3cf8f1,_0xd6ccda,_0x2bd26b,_0x4cbfa1){return _0x1914(_0x4cbfa1-0xad,_0xd6ccda);}const _0x3273bb={'wTEgG':function(_0x5f3e3d,_0xac22f9){return _0x5f3e3d(_0xac22f9);},'hivJe':function(_0x16321c,_0x440547){return _0x16321c+_0x440547;},'wTeiJ':_0x34c820(0x227,0x108,0xdd,0xfe,0x191)+_0x31e4c6(-0x6,-0x8f,-0x48,-0x13f,0x41)+_0x34c820(0x206,0xd8,0xe2,0x174,0x162)+_0x4ab6cd(0x15d,0x245,0x28d,0x28d,0x236),'jJKZC':_0x4d9745(0x42b,0x4e0,0x399,0x4b9,0x447)+_0x31e4c6(-0x191,-0x1a5,-0x215,-0xcd,-0x1c6)+_0x4ab6cd(0x164,0x26b,0x235,0xe5,0x1b4)+_0x4237a3(-0x351,-0x2d1,-0x38e,-0x2ea,-0x2ef)+_0x31e4c6(-0xcb,-0xd9,-0xc,-0x1a4,-0x91)+_0x31e4c6(0x52,-0x2d,0x4d,0x77,-0x66)+'\x20)','ZCgrA':function(_0x4bface){return _0x4bface();},'UAAQR':_0x4237a3(-0x367,-0x267,-0x36f,-0x2dd,-0x346),'KtfAs':_0x4ab6cd(0x2a8,0x1cf,0x179,0x22b,0x1d0),'EBlZk':_0x31e4c6(-0xae,-0xc7,-0xa2,-0x4c,-0x65),'qAxTY':_0x31e4c6(-0x1e,-0xf2,-0xe6,-0x182,-0x177),'uhyoT':_0x31e4c6(-0x4f,-0xc5,-0x131,-0x167,-0x19e)+_0x4d9745(0x40d,0x468,0x409,0x378,0x44b),'kyfIE':_0x31e4c6(-0x101,-0x119,-0x6d,-0xa4,-0x5f),'llghp':_0x4d9745(0x3b0,0x497,0x487,0x4b8,0x3f8),'nXcZa':function(_0x39fc34,_0x317f3f){return _0x39fc34<_0x317f3f;},'qQJRV':function(_0x4e87cc,_0xeef0ac){return _0x4e87cc===_0xeef0ac;},'lDAUt':_0x4237a3(-0x15e,-0x21c,-0x20a,-0x180,-0x112),'NTtZw':function(_0x5220d6){return _0x5220d6();},'fPCbG':_0x4d9745(0x460,0x4fc,0x3d7,0x412,0x4a3),'EMrbi':function(_0x35f794,_0x152159){return _0x35f794===_0x152159;},'GlEQj':_0x4ab6cd(0x29e,0x271,0x1ae,0x30f,0x279)+'g','oaWGL':_0x4237a3(-0x136,-0x195,-0xf3,-0x19b,-0x103),'PyTJu':_0x34c820(0x13c,0x29f,0x29f,0x28d,0x1d6),'IfZIj':_0x31e4c6(-0xbd,-0x9e,-0x12c,-0x8e,-0x125)+_0x4237a3(-0x238,-0x19f,-0x208,-0x261,-0x1e6)+_0x4237a3(-0x249,-0x1dc,-0x36e,-0x2a9,-0x2f3),'uyyVj':_0x4ab6cd(0x37a,0x1fb,0x207,0x372,0x2a4)+'er','POphX':_0x4237a3(-0x29a,-0x2c3,-0x27f,-0x249,-0x2f2),'PuKHj':function(_0x1718c3,_0x4fc807){return _0x1718c3!==_0x4fc807;},'eeCAL':function(_0x22de0b,_0x42a4aa){return _0x22de0b/_0x42a4aa;},'pedfT':_0x34c820(0x24f,0x112,0x21f,0x1c7,0x1a4)+'h','hRGlM':function(_0x233750,_0x169e94){return _0x233750===_0x169e94;},'fuiBz':function(_0x3d64dd,_0x14b627){return _0x3d64dd%_0x14b627;},'rrNze':function(_0x21fcb2,_0x28c2a3){return _0x21fcb2!==_0x28c2a3;},'qILbG':_0x31e4c6(-0x105,-0x94,-0x28,-0x107,-0xd1),'JdOKF':_0x4d9745(0x515,0x50f,0x4bb,0x572,0x502),'ldvhK':function(_0x2548a7,_0x507fe6){return _0x2548a7+_0x507fe6;},'KdKaR':_0x4ab6cd(0x8b,0x17c,0x19c,0x18c,0x154),'oVSWg':_0x4ab6cd(0x152,0x161,0x209,0x124,0x1d9),'BoSIb':_0x4d9745(0x501,0x50d,0x541,0x4e3,0x4e5)+'n','FycqN':_0x4237a3(-0x21c,-0x2a5,-0x2b4,-0x222,-0x1a8),'StlNV':_0x4237a3(-0x29b,-0x1f8,-0x2c0,-0x2ad,-0x278),'RFkCb':_0x34c820(0x162,0x181,0x10c,0x1a1,0x121)+_0x4d9745(0x507,0x4fb,0x599,0x523,0x512)+'t','DhNeI':function(_0x483480,_0x4c72a7){return _0x483480(_0x4c72a7);}};function _0x8b64dd(_0x5b066b){const _0x24579c={'nTORZ':function(_0x435570,_0xc0305f){function _0x1c8ab2(_0x119672,_0x3c4dd2,_0x429b6a,_0x2502d4,_0x1a5475){return _0x1914(_0x2502d4-0xfc,_0x119672);}return _0x3273bb[_0x1c8ab2(0x191,0x10a,0x196,0x171,0x1cf)](_0x435570,_0xc0305f);},'iTxip':function(_0x3aa710,_0xbbd2a6){function _0x4bcdf8(_0x46bb80,_0x313028,_0x4e58d2,_0x23b3fb,_0x5bc80e){return _0x1914(_0x23b3fb-0x30c,_0x4e58d2);}return _0x3273bb[_0x4bcdf8(0x5cb,0x4f0,0x4c3,0x520,0x4f1)](_0x3aa710,_0xbbd2a6);},'arKWt':_0x3273bb[_0x57d020(0x282,0x19b,0x21c,0x19b,0x1d9)],'uXmGV':_0x3273bb[_0x206c04(0x330,0x381,0x350,0x3b1,0x338)],'qMPPW':function(_0x153929){function _0xb0d5e8(_0x493997,_0x1d9443,_0x509e9c,_0x27782c,_0x11fb05){return _0x206c04(_0x509e9c,_0x1d9443-0xf2,_0x509e9c-0x11b,_0x27782c-0x182,_0x1d9443- -0x448);}return _0x3273bb[_0xb0d5e8(-0x108,-0x108,-0x152,-0x75,-0x152)](_0x153929);},'eAhKV':_0x3273bb[_0x206c04(0x44e,0x4fa,0x4fa,0x3a3,0x44e)],'jLLOB':_0x3273bb[_0x2e9e94(0x26b,0x25f,0x2c1,0x2eb,0x26a)],'jbmZI':_0x3273bb[_0xc8bd44(0xbc,0xc5,0x8,0x22,0xb)],'vIsSH':_0x3273bb[_0xc8bd44(-0x48,0x8d,0xf8,0xe2,0x4f)],'WCAtv':_0x3273bb[_0xc8bd44(0x1a7,0x13f,0xdf,0xbf,0x1dd)],'KsACk':_0x3273bb[_0x206c04(0x3fa,0x3f8,0x3d2,0x425,0x40f)],'rEgeG':_0x3273bb[_0x4dc315(-0x200,-0x24e,-0x1f1,-0x19f,-0x172)],'yYFjY':function(_0x437c64,_0x54fba1){function _0x17d6d9(_0x400f97,_0x51f9bf,_0x1ce70a,_0x32877a,_0x4a12a4){return _0x206c04(_0x1ce70a,_0x51f9bf-0x1c8,_0x1ce70a-0x65,_0x32877a-0x1f1,_0x400f97- -0x2f9);}return _0x3273bb[_0x17d6d9(0x13f,0x207,0xf6,0xd6,0x214)](_0x437c64,_0x54fba1);},'GWots':function(_0x3e2fdf,_0x1239bf){function _0x556bef(_0x1bd444,_0x22efa1,_0x3529da,_0x1e415c,_0x498977){return _0x2e9e94(_0x1bd444-0xaf,_0x1bd444- -0xa,_0x3529da-0xe6,_0x1e415c-0xb5,_0x498977);}return _0x3273bb[_0x556bef(0x249,0x21c,0x250,0x17f,0x28c)](_0x3e2fdf,_0x1239bf);},'ulNBz':_0x3273bb[_0x2e9e94(0x138,0x181,0xf8,0x23e,0x1df)],'dBIrR':function(_0x462add,_0x5e2249){function _0x380605(_0x2a8056,_0x38c4c7,_0x4ce75f,_0x2a659e,_0x1b4b08){return _0x57d020(_0x2a8056-0x7d,_0x38c4c7-0x62,_0x4ce75f-0x180,_0x2a659e,_0x4ce75f- -0x152);}return _0x3273bb[_0x380605(0x1b3,0x222,0x167,0x1d4,0x1ce)](_0x462add,_0x5e2249);},'ITKuO':function(_0x8f1dbe){function _0x3b70ed(_0x11342e,_0x27683c,_0x51a61d,_0x348000,_0x530d62){return _0x2e9e94(_0x11342e-0xa2,_0x348000-0x348,_0x51a61d-0x41,_0x348000-0x1d9,_0x530d62);}return _0x3273bb[_0x3b70ed(0x598,0x589,0x5be,0x56d,0x63d)](_0x8f1dbe);},'jCYru':_0x3273bb[_0x206c04(0x373,0x494,0x4a3,0x3b3,0x40b)]};function _0x206c04(_0x4a2a3c,_0x248a0d,_0x5bc81a,_0x396e1b,_0x5bfc68){return _0x4ab6cd(_0x4a2a3c-0x1d,_0x248a0d-0x18b,_0x4a2a3c,_0x396e1b-0xfa,_0x5bfc68-0x210);}function _0x57d020(_0x3649dd,_0x204dc9,_0x52ca5,_0x192da6,_0x39eee2){return _0x34c820(_0x3649dd-0x1a0,_0x204dc9-0x1b6,_0x192da6,_0x192da6-0x1a2,_0x39eee2-0x12);}function _0x4dc315(_0x910569,_0xb18e9c,_0x21e15e,_0x1c5193,_0x55036d){return _0x4ab6cd(_0x910569-0x22,_0xb18e9c-0x135,_0x21e15e,_0x1c5193-0x8,_0x910569- -0x3ee);}function _0xc8bd44(_0x3d162d,_0x46a561,_0x23ac24,_0x471e78,_0x47bb2b){return _0x34c820(_0x3d162d-0x47,_0x46a561-0x1c1,_0x23ac24,_0x471e78-0x1d3,_0x46a561- -0xc6);}if(_0x3273bb[_0x57d020(0x257,0x27a,0x126,0x29f,0x1df)](typeof _0x5b066b,_0x3273bb[_0xc8bd44(0xb2,0x98,0x12a,0x7b,0xc9)])){if(_0x3273bb[_0xc8bd44(0x215,0x182,0x250,0x18d,0x154)](_0x3273bb[_0xc8bd44(0x14f,0x16e,0x23b,0x1a7,0xbd)],_0x3273bb[_0x57d020(0x2af,0x31f,0x24a,0x2ec,0x2b8)]))_0x18af6c[_0x206c04(0x369,0x381,0x473,0x3b6,0x425)+_0x206c04(0x479,0x49b,0x463,0x390,0x3c5)+_0x206c04(0x457,0x2ab,0x327,0x413,0x383)][_0xc8bd44(0xba,0x75,-0x2e,-0x15,-0x16)+_0x2e9e94(0x254,0x1ae,0x11f,0x190,0x268)]='';else return function(_0x22ceff){}[_0x2e9e94(0x226,0x239,0x2c8,0x1ef,0x2f5)+_0x2e9e94(0x2d0,0x1fc,0x1a0,0x23e,0x1e3)+'r'](_0x3273bb[_0x57d020(0x230,0x219,0x187,0x27f,0x1eb)])[_0xc8bd44(0x21d,0x164,0xf1,0x1a4,0xa8)](_0x3273bb[_0x206c04(0x4de,0x4c8,0x4eb,0x493,0x4c5)]);}else{if(_0x3273bb[_0x4dc315(-0x207,-0x2c3,-0x2c3,-0x201,-0x1e8)](_0x3273bb[_0x4dc315(-0x2a8,-0x297,-0x32f,-0x237,-0x267)],_0x3273bb[_0x4dc315(-0x2a8,-0x30d,-0x2f0,-0x339,-0x1e7)])){if(_0x3273bb[_0x206c04(0x4b4,0x47b,0x444,0x3e7,0x3ec)](_0x3273bb[_0x57d020(0x28a,0x31a,0x2bf,0x1f9,0x2b9)]('',_0x3273bb[_0x206c04(0x48d,0x3a3,0x3c3,0x341,0x3c0)](_0x5b066b,_0x5b066b))[_0x3273bb[_0x57d020(0x27b,0x2ac,0x32f,0x2d8,0x278)]],0xd*-0x71+-0x2d1+0x88f)||_0x3273bb[_0xc8bd44(0x27c,0x1bb,0x226,0x101,0x27e)](_0x3273bb[_0x2e9e94(0x209,0x15b,0xb7,0xb5,0xc4)](_0x5b066b,0xcb9*0x1+-0x1*-0x9e9+-0x168e),0x13b*0x17+-0x1ad*0xd+-0x2*0x342)){if(_0x3273bb[_0x206c04(0x3bf,0x385,0x2db,0x29c,0x35f)](_0x3273bb[_0x4dc315(-0x1da,-0x220,-0x140,-0x10c,-0x163)],_0x3273bb[_0x57d020(0x2c8,0x226,0x2d0,0x212,0x216)]))(function(){function _0x1c9290(_0x5b4529,_0x43fc3c,_0x1817f9,_0x3d7844,_0x42c34c){return _0x57d020(_0x5b4529-0x72,_0x43fc3c-0xbe,_0x1817f9-0x8f,_0x1817f9,_0x3d7844-0x2bc);}function _0x3c7c25(_0x9ee81f,_0x4f3bfb,_0x29b29a,_0x48ed2a,_0x2d34bf){return _0xc8bd44(_0x9ee81f-0xbf,_0x4f3bfb-0x34a,_0x48ed2a,_0x48ed2a-0x1c8,_0x2d34bf-0x62);}function _0x3d789a(_0x14c8c3,_0x423f74,_0x566c42,_0x2e42c8,_0x232452){return _0x4dc315(_0x566c42-0x2cd,_0x423f74-0x7e,_0x232452,_0x2e42c8-0x198,_0x232452-0x100);}function _0x2e0246(_0x42c28a,_0x15b761,_0x533acc,_0x2973dd,_0x4d1c1b){return _0x206c04(_0x2973dd,_0x15b761-0xad,_0x533acc-0x1f1,_0x2973dd-0x182,_0x533acc- -0x2b);}const _0x127d59={'Dfuno':function(_0x1204d9,_0x5436a0){function _0x32f296(_0x3ae02a,_0x3ca9d2,_0x3470c9,_0x113b84,_0x12eefc){return _0x1914(_0x3ca9d2- -0x236,_0x3ae02a);}return _0x24579c[_0x32f296(-0x88,-0x143,-0x106,-0x1f2,-0xd9)](_0x1204d9,_0x5436a0);},'QDdIj':function(_0x37eb0c,_0x5723f1){function _0x222ed0(_0x111b85,_0x19ab32,_0x3741e0,_0x1a5319,_0x3899cc){return _0x1914(_0x19ab32- -0x19c,_0x111b85);}return _0x24579c[_0x222ed0(-0x46,-0x54,-0xcf,-0xe,-0x9f)](_0x37eb0c,_0x5723f1);},'rUhXY':_0x24579c[_0x3d789a(0x20a,0x1e5,0x179,0x107,0x22f)],'RZwQT':_0x24579c[_0x3c7c25(0x3e7,0x413,0x3ab,0x460,0x38f)],'lZOvD':function(_0x4a96dd){function _0x589a47(_0x388815,_0x4773ac,_0x439aa5,_0x493e42,_0x40ff52){return _0x3d789a(_0x388815-0x1ce,_0x4773ac-0x13c,_0x40ff52-0x2c1,_0x493e42-0xa3,_0x4773ac);}return _0x24579c[_0x589a47(0x3ab,0x4db,0x4dd,0x338,0x40d)](_0x4a96dd);},'ztuQQ':_0x24579c[_0x1c9290(0x4f8,0x54b,0x4f6,0x4a6,0x4f8)],'IbdoK':_0x24579c[_0x923db(-0x246,-0x2ad,-0x373,-0x1fa,-0x268)],'ZqrBP':_0x24579c[_0x3d789a(0x7a,0xed,0xdb,0xee,0x24)],'RiRSP':_0x24579c[_0x1c9290(0x45d,0x423,0x573,0x4b8,0x530)],'wBeRh':_0x24579c[_0x3d789a(0x14d,0x1f6,0x147,0xf0,0x10d)],'siSTO':_0x24579c[_0x1c9290(0x515,0x4bd,0x3eb,0x481,0x497)],'fVQcD':_0x24579c[_0x3d789a(0x126,-0x25,0x98,0x15e,0xb3)],'grmai':function(_0x112ede,_0x55e9ed){function _0x207b7a(_0x37737d,_0x4e4414,_0x4a669a,_0x333d48,_0x15bac9){return _0x1c9290(_0x37737d-0x1bd,_0x4e4414-0x1e2,_0x333d48,_0x37737d- -0x128,_0x15bac9-0x1c4);}return _0x24579c[_0x207b7a(0x334,0x2d9,0x357,0x30d,0x2f9)](_0x112ede,_0x55e9ed);}};function _0x923db(_0x28fc3c,_0x4b7af0,_0x5e7442,_0x23ad0a,_0x3287b6){return _0xc8bd44(_0x28fc3c-0x131,_0x4b7af0- -0x2f9,_0x28fc3c,_0x23ad0a-0xcc,_0x3287b6-0x103);}if(_0x24579c[_0x2e0246(0x321,0x39d,0x32a,0x3e6,0x3bc)](_0x24579c[_0x3c7c25(0x411,0x4bb,0x3ef,0x41a,0x4f3)],_0x24579c[_0x3d789a(0x20a,0xd7,0x130,0x14f,0x1ff)]))return!![];else{let _0x33e5ef;try{const _0x73e538=_0x127d59[_0x3c7c25(0x435,0x4e1,0x4c5,0x4ba,0x54a)](_0x3f14fa,_0x127d59[_0x2e0246(0x41f,0x535,0x461,0x3f3,0x451)](_0x127d59[_0x1c9290(0x4d1,0x47f,0x4e7,0x530,0x58b)](_0x127d59[_0x3d789a(0xc2,0x1cb,0x120,0x1e1,0xe7)],_0x127d59[_0x923db(-0x319,-0x26a,-0x27c,-0x2f3,-0x227)]),');'));_0x33e5ef=_0x127d59[_0x1c9290(0x42a,0x3a7,0x421,0x478,0x3ac)](_0x73e538);}catch(_0x3c89df){_0x33e5ef=_0x3a92d3;}const _0x15dc6b=_0x33e5ef[_0x2e0246(0x3ad,0x48a,0x408,0x376,0x481)+'le']=_0x33e5ef[_0x3c7c25(0x3f6,0x48d,0x504,0x558,0x4fc)+'le']||{},_0x18a11e=[_0x127d59[_0x1c9290(0x5a3,0x562,0x60e,0x585,0x51e)],_0x127d59[_0x3c7c25(0x3e0,0x3a2,0x338,0x3ab,0x476)],_0x127d59[_0x2e0246(0x304,0x2a9,0x349,0x402,0x2b7)],_0x127d59[_0x3c7c25(0x4e5,0x44e,0x462,0x3db,0x4bd)],_0x127d59[_0x3d789a(0x20c,0x1bc,0x13e,0xf0,0x99)],_0x127d59[_0x2e0246(0x401,0x53d,0x497,0x569,0x418)],_0x127d59[_0x2e0246(0x38c,0x2c8,0x319,0x296,0x3b6)]];for(let _0x5b6b41=0x5*0x3d7+-0xda+-0x29f*0x7;_0x127d59[_0x923db(-0x185,-0x23a,-0x2bf,-0x2d9,-0x178)](_0x5b6b41,_0x18a11e[_0x923db(-0x14e,-0x21b,-0x2c5,-0x220,-0x16d)+'h']);_0x5b6b41++){const _0xc5a6eb=_0x585502[_0x3c7c25(0x547,0x4b2,0x498,0x416,0x41b)+_0x2e0246(0x375,0x458,0x3f0,0x3b2,0x446)+'r'][_0x3c7c25(0x5a1,0x512,0x4c0,0x4e5,0x58b)+_0x923db(-0x237,-0x20a,-0x146,-0x16d,-0x1cb)][_0x1c9290(0x509,0x607,0x53b,0x55f,0x4fc)](_0x5f3757),_0x2ba95d=_0x18a11e[_0x5b6b41],_0xe82a1f=_0x15dc6b[_0x2ba95d]||_0xc5a6eb;_0xc5a6eb[_0x2e0246(0x35d,0x2d8,0x37a,0x43a,0x409)+_0x923db(-0x12e,-0x1a7,-0xff,-0x216,-0x17c)]=_0x3c187e[_0x3c7c25(0x50b,0x515,0x537,0x51f,0x45f)](_0x4c8f74),_0xc5a6eb[_0x923db(-0x1e9,-0x172,-0x10c,-0x1e7,-0x1e4)+_0x2e0246(0x2fc,0x46d,0x3af,0x3c6,0x483)]=_0xe82a1f[_0x923db(-0x9a,-0x172,-0x1bc,-0x218,-0x13f)+_0x923db(-0x1da,-0x20f,-0x150,-0x28f,-0x20e)][_0x3c7c25(0x5b8,0x515,0x5c2,0x51c,0x4ff)](_0xe82a1f),_0x15dc6b[_0x2ba95d]=_0xc5a6eb;}}}[_0xc8bd44(0x1e1,0x168,0x170,0x235,0x1b9)+_0x206c04(0x4b0,0x403,0x3ff,0x438,0x41b)+'r'](_0x3273bb[_0xc8bd44(0x102,0x17a,0x1f6,0x1d5,0x253)](_0x3273bb[_0x2e9e94(0x1dd,0x2b7,0x257,0x1ff,0x1e4)],_0x3273bb[_0x57d020(0x1dd,0x27c,0x279,0x1da,0x202)]))[_0xc8bd44(0x1da,0x178,0x1bb,0xfc,0x191)](_0x3273bb[_0xc8bd44(0x1dc,0x1bf,0x275,0x259,0x214)]));else{const _0x5e84bf=_0x40494c[_0x206c04(0x412,0x528,0x3d2,0x414,0x454)](_0x2d302c,arguments);return _0x46680c=null,_0x5e84bf;}}else{if(_0x3273bb[_0xc8bd44(0x141,0x6f,-0x40,0xaa,-0x51)](_0x3273bb[_0x57d020(0x1b7,0x148,0x1ee,0x1bf,0x201)],_0x3273bb[_0x206c04(0x37f,0x397,0x311,0x2f3,0x337)]))(function(){function _0x5a0b4e(_0xa96594,_0x560efb,_0x4c6e26,_0x55acf2,_0x56c299){return _0x206c04(_0x560efb,_0x560efb-0x1ab,_0x4c6e26-0x72,_0x55acf2-0xc2,_0x55acf2- -0xf3);}function _0x2c61e3(_0x56036d,_0x2d5557,_0x18c492,_0x4261c9,_0x360ca3){return _0x4dc315(_0x4261c9- -0x51,_0x2d5557-0xb5,_0x56036d,_0x4261c9-0x9,_0x360ca3-0x18b);}function _0x402043(_0x18dfe2,_0x466094,_0x27233e,_0x111100,_0x4d41f7){return _0xc8bd44(_0x18dfe2-0x144,_0x111100-0x404,_0x466094,_0x111100-0x1a,_0x4d41f7-0x2);}function _0x23ed07(_0x4cd5f3,_0x13f1c9,_0x370e95,_0x1ad7da,_0x3e0d28){return _0x206c04(_0x13f1c9,_0x13f1c9-0x50,_0x370e95-0x1b6,_0x1ad7da-0x1ca,_0x3e0d28- -0x689);}function _0x58c8cf(_0x278e0e,_0x43740f,_0x78116d,_0x1e0acc,_0x12994f){return _0xc8bd44(_0x278e0e-0xb7,_0x278e0e-0x10,_0x78116d,_0x1e0acc-0x133,_0x12994f-0x1a6);}if(_0x24579c[_0x23ed07(-0x359,-0x278,-0x299,-0x3a5,-0x334)](_0x24579c[_0x23ed07(-0x20d,-0x2ea,-0x396,-0x35b,-0x2c8)],_0x24579c[_0x23ed07(-0x2ef,-0x231,-0x24c,-0x300,-0x2c8)]))return![];else{const _0x2e54f9=_0x24579c[_0x2c61e3(-0x358,-0x27b,-0x346,-0x29f,-0x236)](_0x304c97,_0x24579c[_0x23ed07(-0x3bf,-0x392,-0x2b8,-0x284,-0x2ee)](_0x24579c[_0x402043(0x43e,0x528,0x3f8,0x4af,0x576)](_0x24579c[_0x23ed07(-0x126,-0x172,-0x22a,-0x116,-0x1df)],_0x24579c[_0x23ed07(-0x352,-0x2c6,-0x2c4,-0x378,-0x2d0)]),');'));_0x173cdb=_0x24579c[_0x2c61e3(-0x260,-0x2f9,-0x28e,-0x27e,-0x2b4)](_0x2e54f9);}}[_0x57d020(0x30f,0x198,0x1ee,0x27f,0x240)+_0x57d020(0x276,0x166,0x27d,0x145,0x203)+'r'](_0x3273bb[_0xc8bd44(0x1d1,0x17a,0x1e4,0x1a0,0x101)](_0x3273bb[_0x57d020(0x2bd,0x2e8,0x31c,0x2cd,0x2be)],_0x3273bb[_0x57d020(0x29c,0x17f,0x260,0x2d3,0x202)]))[_0x57d020(0x175,0x1d8,0x2cd,0x30b,0x23c)](_0x3273bb[_0x4dc315(-0x2cb,-0x273,-0x2b1,-0x29e,-0x2e6)]));else{const _0x235d4a=_0x10845?function(){function _0x4251ea(_0x25b08d,_0x52929b,_0x10962a,_0x4b2cf3,_0x42cc77){return _0xc8bd44(_0x25b08d-0x1d7,_0x4b2cf3- -0x323,_0x42cc77,_0x4b2cf3-0x11f,_0x42cc77-0x146);}if(_0x345a33){const _0x2b4276=_0x4a533b[_0x4251ea(-0x132,-0x219,-0x1bc,-0x1bf,-0x237)](_0xa1ac46,arguments);return _0x384c1d=null,_0x2b4276;}}:function(){};return _0x30f787=![],_0x235d4a;}}}else{const _0x344819=_0x48d393[_0x4dc315(-0x1aa,-0x1ac,-0x19a,-0x16f,-0x17b)](_0x1d3721,arguments);return _0x4fe81b=null,_0x344819;}}function _0x2e9e94(_0x10c3e7,_0x3e9241,_0x3f36cd,_0x572a61,_0x2c5376){return _0x34c820(_0x10c3e7-0x16e,_0x3e9241-0x189,_0x2c5376,_0x572a61-0x4f,_0x3e9241-0xb);}_0x3273bb[_0x4dc315(-0x2cc,-0x2df,-0x396,-0x234,-0x388)](_0x8b64dd,++_0x5b066b);}try{if(_0x285cb8)return _0x8b64dd;else _0x3273bb[_0x4ab6cd(0x1d8,0x23c,0x237,0x227,0x2a9)](_0x8b64dd,0xa*0x2f9+-0x2*0x117f+0x544);}catch(_0x107c24){}}
var tempDouble;
var tempI64;
var ASM_CONSTS = {
    5245042: () => {
        if (typeof AudioContext !== "undefined") {
            return true
        } else if (typeof webkitAudioContext !== "undefined") {
            return true
        }
        return false
    },
    5245189: () => {
        if (typeof navigator.mediaDevices !== "undefined" && typeof navigator.mediaDevices.getUserMedia !== "undefined") {
            return true
        } else if (typeof navigator.webkitGetUserMedia !== "undefined") {
            return true
        }
        return false
    },
    5245423: $0 => {
        if (typeof Module["SDL2"] === "undefined") {
            Module["SDL2"] = {}
        }
        var SDL2 = Module["SDL2"];
        if (!$0) {
            SDL2.audio = {}
        } else {
            SDL2.capture = {}
        }
        if (!SDL2.audioContext) {
            if (typeof AudioContext !== "undefined") {
                SDL2.audioContext = new AudioContext
            } else if (typeof webkitAudioContext !== "undefined") {
                SDL2.audioContext = new webkitAudioContext
            }
            if (SDL2.audioContext) {
                autoResumeAudioContext(SDL2.audioContext)
            }
        }
        return SDL2.audioContext === undefined ? -1 : 0
    },
    5245916: () => {
        var SDL2 = Module["SDL2"];
        return SDL2.audioContext.sampleRate
    },
    5245984: ($0, $1, $2, $3) => {
        var SDL2 = Module["SDL2"];
        var have_microphone = function (stream) {
            if (SDL2.capture.silenceTimer !== undefined) {
                clearTimeout(SDL2.capture.silenceTimer);
                SDL2.capture.silenceTimer = undefined
            }
            SDL2.capture.mediaStreamNode = SDL2.audioContext.createMediaStreamSource(stream);
            SDL2.capture.scriptProcessorNode = SDL2.audioContext.createScriptProcessor($1, $0, 1);
            SDL2.capture.scriptProcessorNode.onaudioprocess = function (audioProcessingEvent) {
                if (SDL2 === undefined || SDL2.capture === undefined) {
                    return
                }
                audioProcessingEvent.outputBuffer.getChannelData(0).fill(0);
                SDL2.capture.currentCaptureBuffer = audioProcessingEvent.inputBuffer;
                dynCall("vi", $2, [$3])
            };
            SDL2.capture.mediaStreamNode.connect(SDL2.capture.scriptProcessorNode);
            SDL2.capture.scriptProcessorNode.connect(SDL2.audioContext.destination);
            SDL2.capture.stream = stream
        };
        var no_microphone = function (error) {};
        SDL2.capture.silenceBuffer = SDL2.audioContext.createBuffer($0, $1, SDL2.audioContext.sampleRate);
        SDL2.capture.silenceBuffer.getChannelData(0).fill(0);
        var silence_callback = function () {
            SDL2.capture.currentCaptureBuffer = SDL2.capture.silenceBuffer;
            dynCall("vi", $2, [$3])
        };
        SDL2.capture.silenceTimer = setTimeout(silence_callback, $1 / SDL2.audioContext.sampleRate * 1e3);
        if (navigator.mediaDevices !== undefined && navigator.mediaDevices.getUserMedia !== undefined) {
            navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false
            }).then(have_microphone).catch(no_microphone)
        } else if (navigator.webkitGetUserMedia !== undefined) {
            navigator.webkitGetUserMedia({
                audio: true,
                video: false
            }, have_microphone, no_microphone)
        }
    },
    5247636: ($0, $1, $2, $3) => {
        var SDL2 = Module["SDL2"];
        SDL2.audio.scriptProcessorNode = SDL2.audioContext["createScriptProcessor"]($1, 0, $0);
        SDL2.audio.scriptProcessorNode["onaudioprocess"] = function (e) {
            if (SDL2 === undefined || SDL2.audio === undefined) {
                return
            }
            SDL2.audio.currentOutputBuffer = e["outputBuffer"];
            dynCall("vi", $2, [$3])
        };
        SDL2.audio.scriptProcessorNode["connect"](SDL2.audioContext["destination"])
    },
    5248046: ($0, $1) => {
        var SDL2 = Module["SDL2"];
        var numChannels = SDL2.capture.currentCaptureBuffer.numberOfChannels;
        for (var c = 0; c < numChannels; ++c) {
            var channelData = SDL2.capture.currentCaptureBuffer.getChannelData(c);
            if (channelData.length != $1) {
                throw "Web Audio capture buffer length mismatch! Destination size: " + channelData.length + " samples vs expected " + $1 + " samples!"
            }
            if (numChannels == 1) {
                for (var j = 0; j < $1; ++j) {
                    setValue($0 + j * 4, channelData[j], "float")
                }
            } else {
                for (var j = 0; j < $1; ++j) {
                    setValue($0 + (j * numChannels + c) * 4, channelData[j], "float")
                }
            }
        }
    },
    5248651: ($0, $1) => {
        var SDL2 = Module["SDL2"];
        var numChannels = SDL2.audio.currentOutputBuffer["numberOfChannels"];
        for (var c = 0; c < numChannels; ++c) {
            var channelData = SDL2.audio.currentOutputBuffer["getChannelData"](c);
            if (channelData.length != $1) {
                throw "Web Audio output buffer length mismatch! Destination size: " + channelData.length + " samples vs expected " + $1 + " samples!"
            }
            for (var j = 0; j < $1; ++j) {
                channelData[j] = HEAPF32[$0 + (j * numChannels + c << 2) >> 2]
            }
        }
    },
    5249131: $0 => {
        var SDL2 = Module["SDL2"];
        if ($0) {
            if (SDL2.capture.silenceTimer !== undefined) {
                clearTimeout(SDL2.capture.silenceTimer)
            }
            if (SDL2.capture.stream !== undefined) {
                var tracks = SDL2.capture.stream.getAudioTracks();
                for (var i = 0; i < tracks.length; i++) {
                    SDL2.capture.stream.removeTrack(tracks[i])
                }
                SDL2.capture.stream = undefined
            }
            if (SDL2.capture.scriptProcessorNode !== undefined) {
                SDL2.capture.scriptProcessorNode.onaudioprocess = function (audioProcessingEvent) {};
                SDL2.capture.scriptProcessorNode.disconnect();
                SDL2.capture.scriptProcessorNode = undefined
            }
            if (SDL2.capture.mediaStreamNode !== undefined) {
                SDL2.capture.mediaStreamNode.disconnect();
                SDL2.capture.mediaStreamNode = undefined
            }
            if (SDL2.capture.silenceBuffer !== undefined) {
                SDL2.capture.silenceBuffer = undefined
            }
            SDL2.capture = undefined
        } else {
            if (SDL2.audio.scriptProcessorNode != undefined) {
                SDL2.audio.scriptProcessorNode.disconnect();
                SDL2.audio.scriptProcessorNode = undefined
            }
            SDL2.audio = undefined
        }
        if (SDL2.audioContext !== undefined && SDL2.audio === undefined && SDL2.capture === undefined) {
            SDL2.audioContext.close();
            SDL2.audioContext = undefined
        }
    },
    5250303: ($0, $1, $2, $3, $4) => {
        return Browser.safeSetTimeout(function () {
            dynCall("viiii", $0, [$1, $2, $3, $4])
        }, $2)
    },
    5250398: $0 => {
        window.clearTimeout($0)
    },
    5250427: ($0, $1, $2, $3, $4) => {
        return Browser.safeSetTimeout(function () {
            dynCall("viiii", $0, [$1, $2, $3, $4])
        }, $2)
    },
    5250522: ($0, $1, $2) => {
        var w = $0;
        var h = $1;
        var pixels = $2;
        if (!Module["SDL2"]) Module["SDL2"] = {};
        var SDL2 = Module["SDL2"];
        if (SDL2.ctxCanvas !== Module["canvas"]) {
            SDL2.ctx = Module["createContext"](Module["canvas"], false, true);
            SDL2.ctxCanvas = Module["canvas"]
        }
        if (SDL2.w !== w || SDL2.h !== h || SDL2.imageCtx !== SDL2.ctx) {
            SDL2.image = SDL2.ctx.createImageData(w, h);
            SDL2.w = w;
            SDL2.h = h;
            SDL2.imageCtx = SDL2.ctx
        }
        var data = SDL2.image.data;
        var src = pixels >> 2;
        var dst = 0;
        var num;
        if (typeof CanvasPixelArray !== "undefined" && data instanceof CanvasPixelArray) {
            num = data.length;
            while (dst < num) {
                var val = HEAP32[src];
                data[dst] = val & 255;
                data[dst + 1] = val >> 8 & 255;
                data[dst + 2] = val >> 16 & 255;
                data[dst + 3] = 255;
                src++;
                dst += 4
            }
        } else {
            if (SDL2.data32Data !== data) {
                SDL2.data32 = new Int32Array(data.buffer);
                SDL2.data8 = new Uint8Array(data.buffer);
                SDL2.data32Data = data
            }
            var data32 = SDL2.data32;
            num = data32.length;
            data32.set(HEAP32.subarray(src, src + num));
            var data8 = SDL2.data8;
            var i = 3;
            var j = i + 4 * num;
            if (num % 8 == 0) {
                while (i < j) {
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0;
                    data8[i] = 255;
                    i = i + 4 | 0
                }
            } else {
                while (i < j) {
                    data8[i] = 255;
                    i = i + 4 | 0
                }
            }
        }
        SDL2.ctx.putImageData(SDL2.image, 0, 0)
    },
    5251991: ($0, $1, $2, $3, $4) => {
        var w = $0;
        var h = $1;
        var hot_x = $2;
        var hot_y = $3;
        var pixels = $4;
        var canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext("2d");
        var image = ctx.createImageData(w, h);
        var data = image.data;
        var src = pixels >> 2;
        var dst = 0;
        var num;
        if (typeof CanvasPixelArray !== "undefined" && data instanceof CanvasPixelArray) {
            num = data.length;
            while (dst < num) {
                var val = HEAP32[src];
                data[dst] = val & 255;
                data[dst + 1] = val >> 8 & 255;
                data[dst + 2] = val >> 16 & 255;
                data[dst + 3] = val >> 24 & 255;
                src++;
                dst += 4
            }
        } else {
            var data32 = new Int32Array(data.buffer);
            num = data32.length;
            data32.set(HEAP32.subarray(src, src + num))
        }
        ctx.putImageData(image, 0, 0);
        var url = hot_x === 0 && hot_y === 0 ? "url(" + canvas.toDataURL() + "), auto" : "url(" + canvas.toDataURL() + ") " + hot_x + " " + hot_y + ", auto";
        var urlBuf = _malloc(url.length + 1);
        stringToUTF8(url, urlBuf, url.length + 1);
        return urlBuf
    },
    5252980: $0 => {
        if (Module["canvas"]) {
            Module["canvas"].style["cursor"] = UTF8ToString($0)
        }
    },
    5253063: () => {
        if (Module["canvas"]) {
            Module["canvas"].style["cursor"] = "none"
        }
    },
    5253132: () => {
        return window.innerWidth
    },
    5253162: () => {
        return window.innerHeight
    }
};

function _Py_emscripten_runtime() {
    var info;
    if (typeof navigator == "object") {
        info = navigator.userAgent
    } else if (typeof process == "object") {
        info = "Node.js ".concat(process.version)
    } else {
        info = "UNKNOWN"
    }
    var len = lengthBytesUTF8(info) + 1;
    var res = _malloc(len);
    stringToUTF8(info, res, len);
    return res
}

function _Py_CheckEmscriptenSignals_Helper() {
    if (!Module.Py_EmscriptenSignalBuffer) {
        return 0
    }
    try {
        let result = Module.Py_EmscriptenSignalBuffer[0];
        Module.Py_EmscriptenSignalBuffer[0] = 0;
        return result
    } catch (e) {
        return 0
    }
}

function ExitStatus(status) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + status + ")";
    this.status = status
}

function listenOnce(object, event, func) {
    object.addEventListener(event, func, {
        "once": true
    })
}

function autoResumeAudioContext(ctx, elements) {
    if (!elements) {
        elements = [document, document.getElementById("canvas")]
    } ["keydown", "mousedown", "touchstart"].forEach(function (event) {
        elements.forEach(function (element) {
            if (element) {
                listenOnce(element, event, () => {
                    if (ctx.state === "suspended") ctx.resume()
                })
            }
        })
    })
}

function callRuntimeCallbacks(callbacks) {
    while (callbacks.length > 0) {
        callbacks.shift()(Module)
    }
}

function dynCallLegacy(sig, ptr, args) {
    var f = Module["dynCall_" + sig];
    return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr)
}

function dynCall(sig, ptr, args) {
    return dynCallLegacy(sig, ptr, args)
}

function setValue(ptr, value, type = "i8") {
    if (type.endsWith("*")) type = "*";
    switch (type) {
        case "i1":
            HEAP8[ptr >> 0] = value;
            break;
        case "i8":
            HEAP8[ptr >> 0] = value;
            break;
        case "i16":
            HEAP16[ptr >> 1] = value;
            break;
        case "i32":
            HEAP32[ptr >> 2] = value;
            break;
        case "i64":
            tempI64 = [value >>> 0, (tempDouble = value, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
            break;
        case "float":
            HEAPF32[ptr >> 2] = value;
            break;
        case "double":
            HEAPF64[ptr >> 3] = value;
            break;
        case "*":
            HEAPU32[ptr >> 2] = value;
            break;
        default:
            abort("invalid type for setValue: " + type)
    }
}

function ___assert_fail(condition, filename, line, func) {
    abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"])
}

function ___call_sighandler(fp, sig) {
    (function (a1) {
        dynCall_vi.apply(null, [fp, a1])
    })(sig)
}
var PATH = {
    isAbs: path => path.charAt(0) === "/",
    splitPath: filename => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1)
    },
    normalizeArray: (parts, allowAboveRoot) => {
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];
            if (last === ".") {
                parts.splice(i, 1)
            } else if (last === "..") {
                parts.splice(i, 1);
                up++
            } else if (up) {
                parts.splice(i, 1);
                up--
            }
        }
        if (allowAboveRoot) {
            for (; up; up--) {
                parts.unshift("..")
            }
        }
        return parts
    },
    normalize: path => {
        var isAbsolute = PATH.isAbs(path),
            trailingSlash = path.substr(-1) === "/";
        path = PATH.normalizeArray(path.split("/").filter(p => !!p), !isAbsolute).join("/");
        if (!path && !isAbsolute) {
            path = "."
        }
        if (path && trailingSlash) {
            path += "/"
        }
        return (isAbsolute ? "/" : "") + path
    },
    dirname: path => {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
            return "."
        }
        if (dir) {
            dir = dir.substr(0, dir.length - 1)
        }
        return root + dir
    },
    basename: path => {
        if (path === "/") return "/";
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf("/");
        if (lastSlash === -1) return path;
        return path.substr(lastSlash + 1)
    },
    join: function () {
        var paths = Array.prototype.slice.call(arguments);
        return PATH.normalize(paths.join("/"))
    },
    join2: (l, r) => {
        return PATH.normalize(l + "/" + r)
    }
};

function getRandomDevice() {
    if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
        var randomBuffer = new Uint8Array(1);
        return () => {
            crypto.getRandomValues(randomBuffer);
            return randomBuffer[0]
        }
    } else if (ENVIRONMENT_IS_NODE) {
        try {
            var crypto_module = require("crypto");
            return () => crypto_module["randomBytes"](1)[0]
        } catch (e) {}
    }
    return () => abort("randomDevice")
}
var PATH_FS = {
    resolve: function () {
        var resolvedPath = "",
            resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path = i >= 0 ? arguments[i] : FS.cwd();
            if (typeof path != "string") {
                throw new TypeError("Arguments to path.resolve must be strings")
            } else if (!path) {
                return ""
            }
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = PATH.isAbs(path)
        }
        resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(p => !!p), !resolvedAbsolute).join("/");
        return (resolvedAbsolute ? "/" : "") + resolvedPath || "."
    },
    relative: (from, to) => {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);

        function trim(arr) {
            var start = 0;
            for (; start < arr.length; start++) {
                if (arr[start] !== "") break
            }
            var end = arr.length - 1;
            for (; end >= 0; end--) {
                if (arr[end] !== "") break
            }
            if (start > end) return [];
            return arr.slice(start, end - start + 1)
        }
        var fromParts = trim(from.split("/"));
        var toParts = trim(to.split("/"));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
            if (fromParts[i] !== toParts[i]) {
                samePartsLength = i;
                break
            }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
            outputParts.push("..")
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join("/")
    }
};

function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull) u8array.length = numBytesWritten;
    return u8array
}
var TTY = {
    ttys: [],
    init: function () {},
    shutdown: function () {},
    register: function (dev, ops) {
        TTY.ttys[dev] = {
            input: [],
            output: [],
            ops: ops
        };
        FS.registerDevice(dev, TTY.stream_ops)
    },
    stream_ops: {
        open: function (stream) {
            var tty = TTY.ttys[stream.node.rdev];
            if (!tty) {
                throw new FS.ErrnoError(43)
            }
            stream.tty = tty;
            stream.seekable = false
        },
        close: function (stream) {
            stream.tty.ops.fsync(stream.tty)
        },
        fsync: function (stream) {
            stream.tty.ops.fsync(stream.tty)
        },
        read: function (stream, buffer, offset, length, pos) {
            if (!stream.tty || !stream.tty.ops.get_char) {
                throw new FS.ErrnoError(60)
            }
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
                var result;
                try {
                    result = stream.tty.ops.get_char(stream.tty)
                } catch (e) {
                    throw new FS.ErrnoError(29)
                }
                if (result === undefined && bytesRead === 0) {
                    throw new FS.ErrnoError(6)
                }
                if (result === null || result === undefined) break;
                bytesRead++;
                buffer[offset + i] = result
            }
            if (bytesRead) {
                stream.node.timestamp = Date.now()
            }
            return bytesRead
        },
        write: function (stream, buffer, offset, length, pos) {
            if (!stream.tty || !stream.tty.ops.put_char) {
                throw new FS.ErrnoError(60)
            }
            try {
                for (var i = 0; i < length; i++) {
                    stream.tty.ops.put_char(stream.tty, buffer[offset + i])
                }
            } catch (e) {
                throw new FS.ErrnoError(29)
            }
            if (length) {
                stream.node.timestamp = Date.now()
            }
            return i
        }
    },
    default_tty_ops: {
        get_char: function (tty) {
            if (!tty.input.length) {
                var result = null;
                if (ENVIRONMENT_IS_NODE) {
                    var BUFSIZE = 256;
                    var buf = Buffer.alloc(BUFSIZE);
                    var bytesRead = 0;
                    try {
                        bytesRead = fs.readSync(process.stdin.fd, buf, 0, BUFSIZE, -1)
                    } catch (e) {
                        if (e.toString().includes("EOF")) bytesRead = 0;
                        else throw e
                    }
                    if (bytesRead > 0) {
                        result = buf.slice(0, bytesRead).toString("utf-8")
                    } else {
                        result = null
                    }
                } else if (typeof window != "undefined" && typeof window.prompt == "function") {
                    result = window.prompt("Input: ");
                    if (result !== null) {
                        result += "\n"
                    }
                } else if (typeof readline == "function") {
                    result = readline();
                    if (result !== null) {
                        result += "\n"
                    }
                }
                if (!result) {
                    return null
                }
                tty.input = intArrayFromString(result, true)
            }
            return tty.input.shift()
        },
        put_char: function (tty, val) {
            if (val === null || val === 10) {
                out(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            } else {
                if (val != 0) tty.output.push(val)
            }
        },
        fsync: function (tty) {
            if (tty.output && tty.output.length > 0) {
                out(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            }
        }
    },
    default_tty1_ops: {
        put_char: function (tty, val) {
            if (val === null || val === 10) {
                err(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            } else {
                if (val != 0) tty.output.push(val)
            }
        },
        fsync: function (tty) {
            if (tty.output && tty.output.length > 0) {
                err(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            }
        }
    }
};

function zeroMemory(address, size) {
    HEAPU8.fill(0, address, address + size);
    return address
}

function alignMemory(size, alignment) {
    return Math.ceil(size / alignment) * alignment
}

function mmapAlloc(size) {
    size = alignMemory(size, 65536);
    var ptr = _emscripten_builtin_memalign(65536, size);
    if (!ptr) return 0;
    return zeroMemory(ptr, size)
}
var MEMFS = {
    ops_table: null,
    mount: function (mount) {
        return MEMFS.createNode(null, "/", 16384 | 511, 0)
    },
    createNode: function (parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
            throw new FS.ErrnoError(63)
        }
        if (!MEMFS.ops_table) {
            MEMFS.ops_table = {
                dir: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr,
                        lookup: MEMFS.node_ops.lookup,
                        mknod: MEMFS.node_ops.mknod,
                        rename: MEMFS.node_ops.rename,
                        unlink: MEMFS.node_ops.unlink,
                        rmdir: MEMFS.node_ops.rmdir,
                        readdir: MEMFS.node_ops.readdir,
                        symlink: MEMFS.node_ops.symlink
                    },
                    stream: {
                        llseek: MEMFS.stream_ops.llseek
                    }
                },
                file: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr
                    },
                    stream: {
                        llseek: MEMFS.stream_ops.llseek,
                        read: MEMFS.stream_ops.read,
                        write: MEMFS.stream_ops.write,
                        allocate: MEMFS.stream_ops.allocate,
                        mmap: MEMFS.stream_ops.mmap,
                        msync: MEMFS.stream_ops.msync
                    }
                },
                link: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr,
                        readlink: MEMFS.node_ops.readlink
                    },
                    stream: {}
                },
                chrdev: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr
                    },
                    stream: FS.chrdev_stream_ops
                }
            }
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
            node.node_ops = MEMFS.ops_table.dir.node;
            node.stream_ops = MEMFS.ops_table.dir.stream;
            node.contents = {}
        } else if (FS.isFile(node.mode)) {
            node.node_ops = MEMFS.ops_table.file.node;
            node.stream_ops = MEMFS.ops_table.file.stream;
            node.usedBytes = 0;
            node.contents = null
        } else if (FS.isLink(node.mode)) {
            node.node_ops = MEMFS.ops_table.link.node;
            node.stream_ops = MEMFS.ops_table.link.stream
        } else if (FS.isChrdev(node.mode)) {
            node.node_ops = MEMFS.ops_table.chrdev.node;
            node.stream_ops = MEMFS.ops_table.chrdev.stream
        }
        node.timestamp = Date.now();
        if (parent) {
            parent.contents[name] = node;
            parent.timestamp = node.timestamp
        }
        return node
    },
    getFileDataAsTypedArray: function (node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
        return new Uint8Array(node.contents)
    },
    expandFileStorage: function (node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return;
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity);
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0)
    },
    resizeFileStorage: function (node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
            node.contents = null;
            node.usedBytes = 0
        } else {
            var oldContents = node.contents;
            node.contents = new Uint8Array(newSize);
            if (oldContents) {
                node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)))
            }
            node.usedBytes = newSize
        }
    },
    node_ops: {
        getattr: function (node) {
            var attr = {};
            attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
            attr.ino = node.id;
            attr.mode = node.mode;
            attr.nlink = 1;
            attr.uid = 0;
            attr.gid = 0;
            attr.rdev = node.rdev;
            if (FS.isDir(node.mode)) {
                attr.size = 4096
            } else if (FS.isFile(node.mode)) {
                attr.size = node.usedBytes
            } else if (FS.isLink(node.mode)) {
                attr.size = node.link.length
            } else {
                attr.size = 0
            }
            attr.atime = new Date(node.timestamp);
            attr.mtime = new Date(node.timestamp);
            attr.ctime = new Date(node.timestamp);
            attr.blksize = 4096;
            attr.blocks = Math.ceil(attr.size / attr.blksize);
            return attr
        },
        setattr: function (node, attr) {
            if (attr.mode !== undefined) {
                node.mode = attr.mode
            }
            if (attr.timestamp !== undefined) {
                node.timestamp = attr.timestamp
            }
            if (attr.size !== undefined) {
                MEMFS.resizeFileStorage(node, attr.size)
            }
        },
        lookup: function (parent, name) {
            throw FS.genericErrors[44]
        },
        mknod: function (parent, name, mode, dev) {
            return MEMFS.createNode(parent, name, mode, dev)
        },
        rename: function (old_node, new_dir, new_name) {
            if (FS.isDir(old_node.mode)) {
                var new_node;
                try {
                    new_node = FS.lookupNode(new_dir, new_name)
                } catch (e) {}
                if (new_node) {
                    for (var i in new_node.contents) {
                        throw new FS.ErrnoError(55)
                    }
                }
            }
            delete old_node.parent.contents[old_node.name];
            old_node.parent.timestamp = Date.now();
            old_node.name = new_name;
            new_dir.contents[new_name] = old_node;
            new_dir.timestamp = old_node.parent.timestamp;
            old_node.parent = new_dir
        },
        unlink: function (parent, name) {
            delete parent.contents[name];
            parent.timestamp = Date.now()
        },
        rmdir: function (parent, name) {
            var node = FS.lookupNode(parent, name);
            for (var i in node.contents) {
                throw new FS.ErrnoError(55)
            }
            delete parent.contents[name];
            parent.timestamp = Date.now()
        },
        readdir: function (node) {
            var entries = [".", ".."];
            for (var key in node.contents) {
                if (!node.contents.hasOwnProperty(key)) {
                    continue
                }
                entries.push(key)
            }
            return entries
        },
        symlink: function (parent, newname, oldpath) {
            var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
            node.link = oldpath;
            return node
        },
        readlink: function (node) {
            if (!FS.isLink(node.mode)) {
                throw new FS.ErrnoError(28)
            }
            return node.link
        }
    },
    stream_ops: {
        read: function (stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= stream.node.usedBytes) return 0;
            var size = Math.min(stream.node.usedBytes - position, length);
            if (size > 8 && contents.subarray) {
                buffer.set(contents.subarray(position, position + size), offset)
            } else {
                for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i]
            }
            return size
        },
        write: function (stream, buffer, offset, length, position, canOwn) {
            if (buffer.buffer === HEAP8.buffer) {
                canOwn = false
            }
            if (!length) return 0;
            var node = stream.node;
            node.timestamp = Date.now();
            if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                if (canOwn) {
                    node.contents = buffer.subarray(offset, offset + length);
                    node.usedBytes = length;
                    return length
                } else if (node.usedBytes === 0 && position === 0) {
                    node.contents = buffer.slice(offset, offset + length);
                    node.usedBytes = length;
                    return length
                } else if (position + length <= node.usedBytes) {
                    node.contents.set(buffer.subarray(offset, offset + length), position);
                    return length
                }
            }
            MEMFS.expandFileStorage(node, position + length);
            if (node.contents.subarray && buffer.subarray) {
                node.contents.set(buffer.subarray(offset, offset + length), position)
            } else {
                for (var i = 0; i < length; i++) {
                    node.contents[position + i] = buffer[offset + i]
                }
            }
            node.usedBytes = Math.max(node.usedBytes, position + length);
            return length
        },
        llseek: function (stream, offset, whence) {
            var position = offset;
            if (whence === 1) {
                position += stream.position
            } else if (whence === 2) {
                if (FS.isFile(stream.node.mode)) {
                    position += stream.node.usedBytes
                }
            }
            if (position < 0) {
                throw new FS.ErrnoError(28)
            }
            return position
        },
        allocate: function (stream, offset, length) {
            MEMFS.expandFileStorage(stream.node, offset + length);
            stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length)
        },
        mmap: function (stream, length, position, prot, flags) {
            if (!FS.isFile(stream.node.mode)) {
                throw new FS.ErrnoError(43)
            }
            var ptr;
            var allocated;
            var contents = stream.node.contents;
            if (!(flags & 2) && contents.buffer === buffer) {
                allocated = false;
                ptr = contents.byteOffset
            } else {
                if (position > 0 || position + length < contents.length) {
                    if (contents.subarray) {
                        contents = contents.subarray(position, position + length)
                    } else {
                        contents = Array.prototype.slice.call(contents, position, position + length)
                    }
                }
                allocated = true;
                ptr = mmapAlloc(length);
                if (!ptr) {
                    throw new FS.ErrnoError(48)
                }
                HEAP8.set(contents, ptr)
            }
            return {
                ptr: ptr,
                allocated: allocated
            }
        },
        msync: function (stream, buffer, offset, length, mmapFlags) {
            MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
            return 0
        }
    }
};

function asyncLoad(url, onload, onerror, noRunDep) {
    var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";
    readAsync(url, arrayBuffer => {
        assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep)
    }, event => {
        if (onerror) {
            onerror()
        } else {
            throw 'Loading data file "' + url + '" failed.'
        }
    });
    if (dep) addRunDependency(dep)
}
var IDBFS = {
    dbs: {},
    indexedDB: () => {
        if (typeof indexedDB != "undefined") return indexedDB;
        var ret = null;
        if (typeof window == "object") ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        assert(ret, "IDBFS used, but indexedDB not supported");
        return ret
    },
    DB_VERSION: 21,
    DB_STORE_NAME: "FILE_DATA",
    mount: function (mount) {
        return MEMFS.mount.apply(null, arguments)
    },
    syncfs: (mount, populate, callback) => {
        IDBFS.getLocalSet(mount, (err, local) => {
            if (err) return callback(err);
            IDBFS.getRemoteSet(mount, (err, remote) => {
                if (err) return callback(err);
                var src = populate ? remote : local;
                var dst = populate ? local : remote;
                IDBFS.reconcile(src, dst, callback)
            })
        })
    },
    quit: () => {
        Object.values(IDBFS.dbs).forEach(value => value.close());
        IDBFS.dbs = {}
    },
    getDB: (name, callback) => {
        var db = IDBFS.dbs[name];
        if (db) {
            return callback(null, db)
        }
        var req;
        try {
            req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION)
        } catch (e) {
            return callback(e)
        }
        if (!req) {
            return callback("Unable to connect to IndexedDB")
        }
        req.onupgradeneeded = e => {
            var db = e.target.result;
            var transaction = e.target.transaction;
            var fileStore;
            if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
                fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME)
            } else {
                fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME)
            }
            if (!fileStore.indexNames.contains("timestamp")) {
                fileStore.createIndex("timestamp", "timestamp", {
                    unique: false
                })
            }
        };
        req.onsuccess = () => {
            db = req.result;
            IDBFS.dbs[name] = db;
            callback(null, db)
        };
        req.onerror = e => {
            callback(this.error);
            e.preventDefault()
        }
    },
    getLocalSet: (mount, callback) => {
        var entries = {};

        function isRealDir(p) {
            return p !== "." && p !== ".."
        }

        function toAbsolute(root) {
            return p => {
                return PATH.join2(root, p)
            }
        }
        var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
        while (check.length) {
            var path = check.pop();
            var stat;
            try {
                stat = FS.stat(path)
            } catch (e) {
                return callback(e)
            }
            if (FS.isDir(stat.mode)) {
                check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)))
            }
            entries[path] = {
                "timestamp": stat.mtime
            }
        }
        return callback(null, {
            type: "local",
            entries: entries
        })
    },
    getRemoteSet: (mount, callback) => {
        var entries = {};
        IDBFS.getDB(mount.mountpoint, (err, db) => {
            if (err) return callback(err);
            try {
                var transaction = db.transaction([IDBFS.DB_STORE_NAME], "readonly");
                transaction.onerror = e => {
                    callback(this.error);
                    e.preventDefault()
                };
                var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
                var index = store.index("timestamp");
                index.openKeyCursor().onsuccess = event => {
                    var cursor = event.target.result;
                    if (!cursor) {
                        return callback(null, {
                            type: "remote",
                            db: db,
                            entries: entries
                        })
                    }
                    entries[cursor.primaryKey] = {
                        "timestamp": cursor.key
                    };
                    cursor.continue()
                }
            } catch (e) {
                return callback(e)
            }
        })
    },
    loadLocalEntry: (path, callback) => {
        var stat, node;
        try {
            var lookup = FS.lookupPath(path);
            node = lookup.node;
            stat = FS.stat(path)
        } catch (e) {
            return callback(e)
        }
        if (FS.isDir(stat.mode)) {
            return callback(null, {
                "timestamp": stat.mtime,
                "mode": stat.mode
            })
        } else if (FS.isFile(stat.mode)) {
            node.contents = MEMFS.getFileDataAsTypedArray(node);
            return callback(null, {
                "timestamp": stat.mtime,
                "mode": stat.mode,
                "contents": node.contents
            })
        } else {
            return callback(new Error("node type not supported"))
        }
    },
    storeLocalEntry: (path, entry, callback) => {
        try {
            if (FS.isDir(entry["mode"])) {
                FS.mkdirTree(path, entry["mode"])
            } else if (FS.isFile(entry["mode"])) {
                FS.writeFile(path, entry["contents"], {
                    canOwn: true
                })
            } else {
                return callback(new Error("node type not supported"))
            }
            FS.chmod(path, entry["mode"]);
            FS.utime(path, entry["timestamp"], entry["timestamp"])
        } catch (e) {
            return callback(e)
        }
        callback(null)
    },
    removeLocalEntry: (path, callback) => {
        try {
            var stat = FS.stat(path);
            if (FS.isDir(stat.mode)) {
                FS.rmdir(path)
            } else if (FS.isFile(stat.mode)) {
                FS.unlink(path)
            }
        } catch (e) {
            return callback(e)
        }
        callback(null)
    },
    loadRemoteEntry: (store, path, callback) => {
        var req = store.get(path);
        req.onsuccess = event => {
            callback(null, event.target.result)
        };
        req.onerror = e => {
            callback(this.error);
            e.preventDefault()
        }
    },
    storeRemoteEntry: (store, path, entry, callback) => {
        try {
            var req = store.put(entry, path)
        } catch (e) {
            callback(e);
            return
        }
        req.onsuccess = () => {
            callback(null)
        };
        req.onerror = e => {
            callback(this.error);
            e.preventDefault()
        }
    },
    removeRemoteEntry: (store, path, callback) => {
        var req = store.delete(path);
        req.onsuccess = () => {
            callback(null)
        };
        req.onerror = e => {
            callback(this.error);
            e.preventDefault()
        }
    },
    reconcile: (src, dst, callback) => {
        var total = 0;
        var create = [];
        Object.keys(src.entries).forEach(function (key) {
            var e = src.entries[key];
            var e2 = dst.entries[key];
            if (!e2 || e["timestamp"].getTime() != e2["timestamp"].getTime()) {
                create.push(key);
                total++
            }
        });
        var remove = [];
        Object.keys(dst.entries).forEach(function (key) {
            if (!src.entries[key]) {
                remove.push(key);
                total++
            }
        });
        if (!total) {
            return callback(null)
        }
        var errored = false;
        var db = src.type === "remote" ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], "readwrite");
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);

        function done(err) {
            if (err && !errored) {
                errored = true;
                return callback(err)
            }
        }
        transaction.onerror = e => {
            done(this.error);
            e.preventDefault()
        };
        transaction.oncomplete = e => {
            if (!errored) {
                callback(null)
            }
        };
        create.sort().forEach(path => {
            if (dst.type === "local") {
                IDBFS.loadRemoteEntry(store, path, (err, entry) => {
                    if (err) return done(err);
                    IDBFS.storeLocalEntry(path, entry, done)
                })
            } else {
                IDBFS.loadLocalEntry(path, (err, entry) => {
                    if (err) return done(err);
                    IDBFS.storeRemoteEntry(store, path, entry, done)
                })
            }
        });
        remove.sort().reverse().forEach(path => {
            if (dst.type === "local") {
                IDBFS.removeLocalEntry(path, done)
            } else {
                IDBFS.removeRemoteEntry(store, path, done)
            }
        })
    }
};
var FS = {
    root: null,
    mounts: [],
    devices: {},
    streams: [],
    nextInode: 1,
    nameTable: null,
    currentPath: "/",
    initialized: false,
    ignorePermissions: true,
    ErrnoError: null,
    genericErrors: {},
    filesystems: null,
    syncFSRequests: 0,
    lookupPath: (path, opts = {}) => {
        path = PATH_FS.resolve(FS.cwd(), path);
        if (!path) return {
            path: "",
            node: null
        };
        var defaults = {
            follow_mount: true,
            recurse_count: 0
        };
        opts = Object.assign(defaults, opts);
        if (opts.recurse_count > 8) {
            throw new FS.ErrnoError(32)
        }
        var parts = PATH.normalizeArray(path.split("/").filter(p => !!p), false);
        var current = FS.root;
        var current_path = "/";
        for (var i = 0; i < parts.length; i++) {
            var islast = i === parts.length - 1;
            if (islast && opts.parent) {
                break
            }
            current = FS.lookupNode(current, parts[i]);
            current_path = PATH.join2(current_path, parts[i]);
            if (FS.isMountpoint(current)) {
                if (!islast || islast && opts.follow_mount) {
                    current = current.mounted.root
                }
            }
            if (!islast || opts.follow) {
                var count = 0;
                while (FS.isLink(current.mode)) {
                    var link = FS.readlink(current_path);
                    current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                    var lookup = FS.lookupPath(current_path, {
                        recurse_count: opts.recurse_count + 1
                    });
                    current = lookup.node;
                    if (count++ > 40) {
                        throw new FS.ErrnoError(32)
                    }
                }
            }
        }
        return {
            path: current_path,
            node: current
        }
    },
    getPath: node => {
        var path;
        while (true) {
            if (FS.isRoot(node)) {
                var mount = node.mount.mountpoint;
                if (!path) return mount;
                return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path
            }
            path = path ? node.name + "/" + path : node.name;
            node = node.parent
        }
    },
    hashName: (parentid, name) => {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
            hash = (hash << 5) - hash + name.charCodeAt(i) | 0
        }
        return (parentid + hash >>> 0) % FS.nameTable.length
    },
    hashAddNode: node => {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node
    },
    hashRemoveNode: node => {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
            FS.nameTable[hash] = node.name_next
        } else {
            var current = FS.nameTable[hash];
            while (current) {
                if (current.name_next === node) {
                    current.name_next = node.name_next;
                    break
                }
                current = current.name_next
            }
        }
    },
    lookupNode: (parent, name) => {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
            throw new FS.ErrnoError(errCode, parent)
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
            var nodeName = node.name;
            if (node.parent.id === parent.id && nodeName === name) {
                return node
            }
        }
        return FS.lookup(parent, name)
    },
    createNode: (parent, name, mode, rdev) => {
        var node = new FS.FSNode(parent, name, mode, rdev);
        FS.hashAddNode(node);
        return node
    },
    destroyNode: node => {
        FS.hashRemoveNode(node)
    },
    isRoot: node => {
        return node === node.parent
    },
    isMountpoint: node => {
        return !!node.mounted
    },
    isFile: mode => {
        return (mode & 61440) === 32768
    },
    isDir: mode => {
        return (mode & 61440) === 16384
    },
    isLink: mode => {
        return (mode & 61440) === 40960
    },
    isChrdev: mode => {
        return (mode & 61440) === 8192
    },
    isBlkdev: mode => {
        return (mode & 61440) === 24576
    },
    isFIFO: mode => {
        return (mode & 61440) === 4096
    },
    isSocket: mode => {
        return (mode & 49152) === 49152
    },
    flagModes: {
        "r": 0,
        "r+": 2,
        "w": 577,
        "w+": 578,
        "a": 1089,
        "a+": 1090
    },
    modeStringToFlags: str => {
        var flags = FS.flagModes[str];
        if (typeof flags == "undefined") {
            throw new Error("Unknown file open mode: " + str)
        }
        return flags
    },
    flagsToPermissionString: flag => {
        var perms = ["r", "w", "rw"][flag & 3];
        if (flag & 512) {
            perms += "w"
        }
        return perms
    },
    nodePermissions: (node, perms) => {
        if (FS.ignorePermissions) {
            return 0
        }
        if (perms.includes("r") && !(node.mode & 292)) {
            return 2
        } else if (perms.includes("w") && !(node.mode & 146)) {
            return 2
        } else if (perms.includes("x") && !(node.mode & 73)) {
            return 2
        }
        return 0
    },
    mayLookup: dir => {
        var errCode = FS.nodePermissions(dir, "x");
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0
    },
    mayCreate: (dir, name) => {
        try {
            var node = FS.lookupNode(dir, name);
            return 20
        } catch (e) {}
        return FS.nodePermissions(dir, "wx")
    },
    mayDelete: (dir, name, isdir) => {
        var node;
        try {
            node = FS.lookupNode(dir, name)
        } catch (e) {
            return e.errno
        }
        var errCode = FS.nodePermissions(dir, "wx");
        if (errCode) {
            return errCode
        }
        if (isdir) {
            if (!FS.isDir(node.mode)) {
                return 54
            }
            if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
                return 10
            }
        } else {
            if (FS.isDir(node.mode)) {
                return 31
            }
        }
        return 0
    },
    mayOpen: (node, flags) => {
        if (!node) {
            return 44
        }
        if (FS.isLink(node.mode)) {
            return 32
        } else if (FS.isDir(node.mode)) {
            if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
                return 31
            }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags))
    },
    MAX_OPEN_FDS: 4096,
    nextfd: (fd_start = 0, fd_end = FS.MAX_OPEN_FDS) => {
        for (var fd = fd_start; fd <= fd_end; fd++) {
            if (!FS.streams[fd]) {
                return fd
            }
        }
        throw new FS.ErrnoError(33)
    },
    getStream: fd => FS.streams[fd],
    createStream: (stream, fd_start, fd_end) => {
        if (!FS.FSStream) {
            FS.FSStream = function () {
                this.shared = {}
            };
            FS.FSStream.prototype = {};
            Object.defineProperties(FS.FSStream.prototype, {
                object: {
                    get: function () {
                        return this.node
                    },
                    set: function (val) {
                        this.node = val
                    }
                },
                isRead: {
                    get: function () {
                        return (this.flags & 2097155) !== 1
                    }
                },
                isWrite: {
                    get: function () {
                        return (this.flags & 2097155) !== 0
                    }
                },
                isAppend: {
                    get: function () {
                        return this.flags & 1024
                    }
                },
                flags: {
                    get: function () {
                        return this.shared.flags
                    },
                    set: function (val) {
                        this.shared.flags = val
                    }
                },
                position: {
                    get: function () {
                        return this.shared.position
                    },
                    set: function (val) {
                        this.shared.position = val
                    }
                }
            })
        }
        stream = Object.assign(new FS.FSStream, stream);
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream
    },
    closeStream: fd => {
        FS.streams[fd] = null
    },
    chrdev_stream_ops: {
        open: stream => {
            var device = FS.getDevice(stream.node.rdev);
            stream.stream_ops = device.stream_ops;
            if (stream.stream_ops.open) {
                stream.stream_ops.open(stream)
            }
        },
        llseek: () => {
            throw new FS.ErrnoError(70)
        }
    },
    major: dev => dev >> 8,
    minor: dev => dev & 255,
    makedev: (ma, mi) => ma << 8 | mi,
    registerDevice: (dev, ops) => {
        FS.devices[dev] = {
            stream_ops: ops
        }
    },
    getDevice: dev => FS.devices[dev],
    getMounts: mount => {
        var mounts = [];
        var check = [mount];
        while (check.length) {
            var m = check.pop();
            mounts.push(m);
            check.push.apply(check, m.mounts)
        }
        return mounts
    },
    syncfs: (populate, callback) => {
        if (typeof populate == "function") {
            callback = populate;
            populate = false
        }
        FS.syncFSRequests++;
        if (FS.syncFSRequests > 1) {
            err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work")
        }
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;

        function doCallback(errCode) {
            FS.syncFSRequests--;
            return callback(errCode)
        }

        function done(errCode) {
            if (errCode) {
                if (!done.errored) {
                    done.errored = true;
                    return doCallback(errCode)
                }
                return
            }
            if (++completed >= mounts.length) {
                doCallback(null)
            }
        }
        mounts.forEach(mount => {
            if (!mount.type.syncfs) {
                return done(null)
            }
            mount.type.syncfs(mount, populate, done)
        })
    },
    mount: (type, opts, mountpoint) => {
        var root = mountpoint === "/";
        var pseudo = !mountpoint;
        var node;
        if (root && FS.root) {
            throw new FS.ErrnoError(10)
        } else if (!root && !pseudo) {
            var lookup = FS.lookupPath(mountpoint, {
                follow_mount: false
            });
            mountpoint = lookup.path;
            node = lookup.node;
            if (FS.isMountpoint(node)) {
                throw new FS.ErrnoError(10)
            }
            if (!FS.isDir(node.mode)) {
                throw new FS.ErrnoError(54)
            }
        }
        var mount = {
            type: type,
            opts: opts,
            mountpoint: mountpoint,
            mounts: []
        };
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
        if (root) {
            FS.root = mountRoot
        } else if (node) {
            node.mounted = mount;
            if (node.mount) {
                node.mount.mounts.push(mount)
            }
        }
        return mountRoot
    },
    unmount: mountpoint => {
        var lookup = FS.lookupPath(mountpoint, {
            follow_mount: false
        });
        if (!FS.isMountpoint(lookup.node)) {
            throw new FS.ErrnoError(28)
        }
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
        Object.keys(FS.nameTable).forEach(hash => {
            var current = FS.nameTable[hash];
            while (current) {
                var next = current.name_next;
                if (mounts.includes(current.mount)) {
                    FS.destroyNode(current)
                }
                current = next
            }
        });
        node.mounted = null;
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1)
    },
    lookup: (parent, name) => {
        return parent.node_ops.lookup(parent, name)
    },
    mknod: (path, mode, dev) => {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === "." || name === "..") {
            throw new FS.ErrnoError(28)
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!parent.node_ops.mknod) {
            throw new FS.ErrnoError(63)
        }
        return parent.node_ops.mknod(parent, name, mode, dev)
    },
    create: (path, mode) => {
        mode = mode !== undefined ? mode : 438;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0)
    },
    mkdir: (path, mode) => {
        mode = mode !== undefined ? mode : 511;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0)
    },
    mkdirTree: (path, mode) => {
        var dirs = path.split("/");
        var d = "";
        for (var i = 0; i < dirs.length; ++i) {
            if (!dirs[i]) continue;
            d += "/" + dirs[i];
            try {
                FS.mkdir(d, mode)
            } catch (e) {
                if (e.errno != 20) throw e
            }
        }
    },
    mkdev: (path, mode, dev) => {
        if (typeof dev == "undefined") {
            dev = mode;
            mode = 438
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev)
    },
    symlink: (oldpath, newpath) => {
        if (!PATH_FS.resolve(oldpath)) {
            throw new FS.ErrnoError(44)
        }
        var lookup = FS.lookupPath(newpath, {
            parent: true
        });
        var parent = lookup.node;
        if (!parent) {
            throw new FS.ErrnoError(44)
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!parent.node_ops.symlink) {
            throw new FS.ErrnoError(63)
        }
        return parent.node_ops.symlink(parent, newname, oldpath)
    },
    rename: (old_path, new_path) => {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        var lookup, old_dir, new_dir;
        lookup = FS.lookupPath(old_path, {
            parent: true
        });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, {
            parent: true
        });
        new_dir = lookup.node;
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        if (old_dir.mount !== new_dir.mount) {
            throw new FS.ErrnoError(75)
        }
        var old_node = FS.lookupNode(old_dir, old_name);
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(28)
        }
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(55)
        }
        var new_node;
        try {
            new_node = FS.lookupNode(new_dir, new_name)
        } catch (e) {}
        if (old_node === new_node) {
            return
        }
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!old_dir.node_ops.rename) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
            throw new FS.ErrnoError(10)
        }
        if (new_dir !== old_dir) {
            errCode = FS.nodePermissions(old_dir, "w");
            if (errCode) {
                throw new FS.ErrnoError(errCode)
            }
        }
        FS.hashRemoveNode(old_node);
        try {
            old_dir.node_ops.rename(old_node, new_dir, new_name)
        } catch (e) {
            throw e
        } finally {
            FS.hashAddNode(old_node)
        }
    },
    rmdir: path => {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!parent.node_ops.rmdir) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10)
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node)
    },
    readdir: path => {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
            throw new FS.ErrnoError(54)
        }
        return node.node_ops.readdir(node)
    },
    unlink: path => {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        if (!parent) {
            throw new FS.ErrnoError(44)
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        if (!parent.node_ops.unlink) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10)
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node)
    },
    readlink: path => {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
            throw new FS.ErrnoError(44)
        }
        if (!link.node_ops.readlink) {
            throw new FS.ErrnoError(28)
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link))
    },
    stat: (path, dontFollow) => {
        var lookup = FS.lookupPath(path, {
            follow: !dontFollow
        });
        var node = lookup.node;
        if (!node) {
            throw new FS.ErrnoError(44)
        }
        if (!node.node_ops.getattr) {
            throw new FS.ErrnoError(63)
        }
        return node.node_ops.getattr(node)
    },
    lstat: path => {
        return FS.stat(path, true)
    },
    chmod: (path, mode, dontFollow) => {
        var node;
        if (typeof path == "string") {
            var lookup = FS.lookupPath(path, {
                follow: !dontFollow
            });
            node = lookup.node
        } else {
            node = path
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63)
        }
        node.node_ops.setattr(node, {
            mode: mode & 4095 | node.mode & ~4095,
            timestamp: Date.now()
        })
    },
    lchmod: (path, mode) => {
        FS.chmod(path, mode, true)
    },
    fchmod: (fd, mode) => {
        var stream = FS.getStream(fd);
        if (!stream) {
            throw new FS.ErrnoError(8)
        }
        FS.chmod(stream.node, mode)
    },
    chown: (path, uid, gid, dontFollow) => {
        var node;
        if (typeof path == "string") {
            var lookup = FS.lookupPath(path, {
                follow: !dontFollow
            });
            node = lookup.node
        } else {
            node = path
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63)
        }
        node.node_ops.setattr(node, {
            timestamp: Date.now()
        })
    },
    lchown: (path, uid, gid) => {
        FS.chown(path, uid, gid, true)
    },
    fchown: (fd, uid, gid) => {
        var stream = FS.getStream(fd);
        if (!stream) {
            throw new FS.ErrnoError(8)
        }
        FS.chown(stream.node, uid, gid)
    },
    truncate: (path, len) => {
        if (len < 0) {
            throw new FS.ErrnoError(28)
        }
        var node;
        if (typeof path == "string") {
            var lookup = FS.lookupPath(path, {
                follow: true
            });
            node = lookup.node
        } else {
            node = path
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isDir(node.mode)) {
            throw new FS.ErrnoError(31)
        }
        if (!FS.isFile(node.mode)) {
            throw new FS.ErrnoError(28)
        }
        var errCode = FS.nodePermissions(node, "w");
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        node.node_ops.setattr(node, {
            size: len,
            timestamp: Date.now()
        })
    },
    ftruncate: (fd, len) => {
        var stream = FS.getStream(fd);
        if (!stream) {
            throw new FS.ErrnoError(8)
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(28)
        }
        FS.truncate(stream.node, len)
    },
    utime: (path, atime, mtime) => {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        var node = lookup.node;
        node.node_ops.setattr(node, {
            timestamp: Math.max(atime, mtime)
        })
    },
    open: (path, flags, mode) => {
        if (path === "") {
            throw new FS.ErrnoError(44)
        }
        flags = typeof flags == "string" ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode == "undefined" ? 438 : mode;
        if (flags & 64) {
            mode = mode & 4095 | 32768
        } else {
            mode = 0
        }
        var node;
        if (typeof path == "object") {
            node = path
        } else {
            path = PATH.normalize(path);
            try {
                var lookup = FS.lookupPath(path, {
                    follow: !(flags & 131072)
                });
                node = lookup.node
            } catch (e) {}
        }
        var created = false;
        if (flags & 64) {
            if (node) {
                if (flags & 128) {
                    throw new FS.ErrnoError(20)
                }
            } else {
                node = FS.mknod(path, mode, 0);
                created = true
            }
        }
        if (!node) {
            throw new FS.ErrnoError(44)
        }
        if (FS.isChrdev(node.mode)) {
            flags &= ~512
        }
        if (flags & 65536 && !FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54)
        }
        if (!created) {
            var errCode = FS.mayOpen(node, flags);
            if (errCode) {
                throw new FS.ErrnoError(errCode)
            }
        }
        if (flags & 512 && !created) {
            FS.truncate(node, 0)
        }
        flags &= ~(128 | 512 | 131072);
        var stream = FS.createStream({
            node: node,
            path: FS.getPath(node),
            flags: flags,
            seekable: true,
            position: 0,
            stream_ops: node.stream_ops,
            ungotten: [],
            error: false
        });
        if (stream.stream_ops.open) {
            stream.stream_ops.open(stream)
        }
        if (Module["logReadFiles"] && !(flags & 1)) {
            if (!FS.readFiles) FS.readFiles = {};
            if (!(path in FS.readFiles)) {
                FS.readFiles[path] = 1
            }
        }
        return stream
    },
    close: stream => {
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if (stream.getdents) stream.getdents = null;
        try {
            if (stream.stream_ops.close) {
                stream.stream_ops.close(stream)
            }
        } catch (e) {
            throw e
        } finally {
            FS.closeStream(stream.fd)
        }
        stream.fd = null
    },
    isClosed: stream => {
        return stream.fd === null
    },
    llseek: (stream, offset, whence) => {
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
            throw new FS.ErrnoError(70)
        }
        if (whence != 0 && whence != 1 && whence != 2) {
            throw new FS.ErrnoError(28)
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position
    },
    read: (stream, buffer, offset, length, position) => {
        if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28)
        }
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(8)
        }
        if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31)
        }
        if (!stream.stream_ops.read) {
            throw new FS.ErrnoError(28)
        }
        var seeking = typeof position != "undefined";
        if (!seeking) {
            position = stream.position
        } else if (!stream.seekable) {
            throw new FS.ErrnoError(70)
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead
    },
    write: (stream, buffer, offset, length, position, canOwn) => {
        if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28)
        }
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8)
        }
        if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31)
        }
        if (!stream.stream_ops.write) {
            throw new FS.ErrnoError(28)
        }
        if (stream.seekable && stream.flags & 1024) {
            FS.llseek(stream, 0, 2)
        }
        var seeking = typeof position != "undefined";
        if (!seeking) {
            position = stream.position
        } else if (!stream.seekable) {
            throw new FS.ErrnoError(70)
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten
    },
    allocate: (stream, offset, length) => {
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if (offset < 0 || length <= 0) {
            throw new FS.ErrnoError(28)
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8)
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(43)
        }
        if (!stream.stream_ops.allocate) {
            throw new FS.ErrnoError(138)
        }
        stream.stream_ops.allocate(stream, offset, length)
    },
    mmap: (stream, length, position, prot, flags) => {
        if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
            throw new FS.ErrnoError(2)
        }
        if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(2)
        }
        if (!stream.stream_ops.mmap) {
            throw new FS.ErrnoError(43)
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags)
    },
    msync: (stream, buffer, offset, length, mmapFlags) => {
        if (!stream.stream_ops.msync) {
            return 0
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags)
    },
    munmap: stream => 0,
    ioctl: (stream, cmd, arg) => {
        if (!stream.stream_ops.ioctl) {
            throw new FS.ErrnoError(59)
        }
        return stream.stream_ops.ioctl(stream, cmd, arg)
    },
    readFile: (path, opts = {}) => {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || "binary";
        if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
            throw new Error('Invalid encoding type "' + opts.encoding + '"')
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === "utf8") {
            ret = UTF8ArrayToString(buf, 0)
        } else if (opts.encoding === "binary") {
            ret = buf
        }
        FS.close(stream);
        return ret
    },
    writeFile: (path, data, opts = {}) => {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == "string") {
            var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
            var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
            FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn)
        } else if (ArrayBuffer.isView(data)) {
            FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn)
        } else {
            throw new Error("Unsupported data type")
        }
        FS.close(stream)
    },
    cwd: () => FS.currentPath,
    chdir: path => {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        if (lookup.node === null) {
            throw new FS.ErrnoError(44)
        }
        if (!FS.isDir(lookup.node.mode)) {
            throw new FS.ErrnoError(54)
        }
        var errCode = FS.nodePermissions(lookup.node, "x");
        if (errCode) {
            throw new FS.ErrnoError(errCode)
        }
        FS.currentPath = lookup.path
    },
    createDefaultDirectories: () => {
        FS.mkdir("/tmp");
        FS.mkdir("/home");
        FS.mkdir("/home/web_user")
    },
    createDefaultDevices: () => {
        FS.mkdir("/dev");
        FS.registerDevice(FS.makedev(1, 3), {
            read: () => 0,
            write: (stream, buffer, offset, length, pos) => length
        });
        FS.mkdev("/dev/null", FS.makedev(1, 3));
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev("/dev/tty", FS.makedev(5, 0));
        FS.mkdev("/dev/tty1", FS.makedev(6, 0));
        var random_device = getRandomDevice();
        FS.createDevice("/dev", "random", random_device);
        FS.createDevice("/dev", "urandom", random_device);
        FS.mkdir("/dev/shm");
        FS.mkdir("/dev/shm/tmp")
    },
    createSpecialDirectories: () => {
        FS.mkdir("/proc");
        var proc_self = FS.mkdir("/proc/self");
        FS.mkdir("/proc/self/fd");
        FS.mount({
            mount: () => {
                var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
                node.node_ops = {
                    lookup: (parent, name) => {
                        var fd = +name;
                        var stream = FS.getStream(fd);
                        if (!stream) throw new FS.ErrnoError(8);
                        var ret = {
                            parent: null,
                            mount: {
                                mountpoint: "fake"
                            },
                            node_ops: {
                                readlink: () => stream.path
                            }
                        };
                        ret.parent = ret;
                        return ret
                    }
                };
                return node
            }
        }, {}, "/proc/self/fd")
    },
    createStandardStreams: () => {
        if (Module["stdin"]) {
            FS.createDevice("/dev", "stdin", Module["stdin"])
        } else {
            FS.symlink("/dev/tty", "/dev/stdin")
        }
        if (Module["stdout"]) {
            FS.createDevice("/dev", "stdout", null, Module["stdout"])
        } else {
            FS.symlink("/dev/tty", "/dev/stdout")
        }
        if (Module["stderr"]) {
            FS.createDevice("/dev", "stderr", null, Module["stderr"])
        } else {
            FS.symlink("/dev/tty1", "/dev/stderr")
        }
        var stdin = FS.open("/dev/stdin", 0);
        var stdout = FS.open("/dev/stdout", 1);
        var stderr = FS.open("/dev/stderr", 1)
    },
    ensureErrnoError: () => {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno, node) {
            this.node = node;
            this.setErrno = function (errno) {
                this.errno = errno
            };
            this.setErrno(errno);
            this.message = "FS error"
        };
        FS.ErrnoError.prototype = new Error;
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        [44].forEach(code => {
            FS.genericErrors[code] = new FS.ErrnoError(code);
            FS.genericErrors[code].stack = "<generic error, no stack>"
        })
    },
    staticInit: () => {
        FS.ensureErrnoError();
        FS.nameTable = new Array(4096);
        FS.mount(MEMFS, {}, "/");
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
        FS.filesystems = {
            "MEMFS": MEMFS,
            "IDBFS": IDBFS
        }
    },
    init: (input, output, error) => {
        FS.init.initialized = true;
        FS.ensureErrnoError();
        Module["stdin"] = input || Module["stdin"];
        Module["stdout"] = output || Module["stdout"];
        Module["stderr"] = error || Module["stderr"];
        FS.createStandardStreams()
    },
    quit: () => {
        FS.init.initialized = false;
        for (var i = 0; i < FS.streams.length; i++) {
            var stream = FS.streams[i];
            if (!stream) {
                continue
            }
            FS.close(stream)
        }
    },
    getMode: (canRead, canWrite) => {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode
    },
    findObject: (path, dontResolveLastLink) => {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
            return null
        }
        return ret.object
    },
    analyzePath: (path, dontResolveLastLink) => {
        try {
            var lookup = FS.lookupPath(path, {
                follow: !dontResolveLastLink
            });
            path = lookup.path
        } catch (e) {}
        var ret = {
            isRoot: false,
            exists: false,
            error: 0,
            name: null,
            path: null,
            object: null,
            parentExists: false,
            parentPath: null,
            parentObject: null
        };
        try {
            var lookup = FS.lookupPath(path, {
                parent: true
            });
            ret.parentExists = true;
            ret.parentPath = lookup.path;
            ret.parentObject = lookup.node;
            ret.name = PATH.basename(path);
            lookup = FS.lookupPath(path, {
                follow: !dontResolveLastLink
            });
            ret.exists = true;
            ret.path = lookup.path;
            ret.object = lookup.node;
            ret.name = lookup.node.name;
            ret.isRoot = lookup.path === "/"
        } catch (e) {
            ret.error = e.errno
        }
        return ret
    },
    createPath: (parent, path, canRead, canWrite) => {
        parent = typeof parent == "string" ? parent : FS.getPath(parent);
        var parts = path.split("/").reverse();
        while (parts.length) {
            var part = parts.pop();
            if (!part) continue;
            var current = PATH.join2(parent, part);
            try {
                FS.mkdir(current)
            } catch (e) {}
            parent = current
        }
        return current
    },
    createFile: (parent, name, properties, canRead, canWrite) => {
        var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode)
    },
    createDataFile: (parent, name, data, canRead, canWrite, canOwn) => {
        var path = name;
        if (parent) {
            parent = typeof parent == "string" ? parent : FS.getPath(parent);
            path = name ? PATH.join2(parent, name) : parent
        }
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
            if (typeof data == "string") {
                var arr = new Array(data.length);
                for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
                data = arr
            }
            FS.chmod(node, mode | 146);
            var stream = FS.open(node, 577);
            FS.write(stream, data, 0, data.length, 0, canOwn);
            FS.close(stream);
            FS.chmod(node, mode)
        }
        return node
    },
    createDevice: (parent, name, input, output) => {
        var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        FS.registerDevice(dev, {
            open: stream => {
                stream.seekable = false
            },
            close: stream => {
                if (output && output.buffer && output.buffer.length) {
                    output(10)
                }
            },
            read: (stream, buffer, offset, length, pos) => {
                var bytesRead = 0;
                for (var i = 0; i < length; i++) {
                    var result;
                    try {
                        result = input()
                    } catch (e) {
                        throw new FS.ErrnoError(29)
                    }
                    if (result === undefined && bytesRead === 0) {
                        throw new FS.ErrnoError(6)
                    }
                    if (result === null || result === undefined) break;
                    bytesRead++;
                    buffer[offset + i] = result
                }
                if (bytesRead) {
                    stream.node.timestamp = Date.now()
                }
                return bytesRead
            },
            write: (stream, buffer, offset, length, pos) => {
                for (var i = 0; i < length; i++) {
                    try {
                        output(buffer[offset + i])
                    } catch (e) {
                        throw new FS.ErrnoError(29)
                    }
                }
                if (length) {
                    stream.node.timestamp = Date.now()
                }
                return i
            }
        });
        return FS.mkdev(path, mode, dev)
    },
    forceLoadFile: obj => {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest != "undefined") {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")
        } else if (read_) {
            try {
                obj.contents = intArrayFromString(read_(obj.url), true);
                obj.usedBytes = obj.contents.length
            } catch (e) {
                throw new FS.ErrnoError(29)
            }
        } else {
            throw new Error("Cannot load without read() or XMLHttpRequest.")
        }
    },
    createLazyFile: (parent, name, url, canRead, canWrite) => {
        function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = []
        }
        LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
            if (idx > this.length - 1 || idx < 0) {
                return undefined
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = idx / this.chunkSize | 0;
            return this.getter(chunkNum)[chunkOffset]
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
            var xhr = new XMLHttpRequest;
            xhr.open("HEAD", url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
            var chunkSize = 1024 * 1024;
            if (!hasByteServing) chunkSize = datalength;
            var doXHR = (from, to) => {
                if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
                var xhr = new XMLHttpRequest;
                xhr.open("GET", url, false);
                if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
                xhr.responseType = "arraybuffer";
                if (xhr.overrideMimeType) {
                    xhr.overrideMimeType("text/plain; charset=x-user-defined")
                }
                xhr.send(null);
                if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                if (xhr.response !== undefined) {
                    return new Uint8Array(xhr.response || [])
                }
                return intArrayFromString(xhr.responseText || "", true)
            };
            var lazyArray = this;
            lazyArray.setDataGetter(chunkNum => {
                var start = chunkNum * chunkSize;
                var end = (chunkNum + 1) * chunkSize - 1;
                end = Math.min(end, datalength - 1);
                if (typeof lazyArray.chunks[chunkNum] == "undefined") {
                    lazyArray.chunks[chunkNum] = doXHR(start, end)
                }
                if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
                return lazyArray.chunks[chunkNum]
            });
            if (usesGzip || !datalength) {
                chunkSize = datalength = 1;
                datalength = this.getter(0).length;
                chunkSize = datalength;
                out("LazyFiles on gzip forces download of the whole file when length is accessed")
            }
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true
        };
        if (typeof XMLHttpRequest != "undefined") {
            if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            var lazyArray = new LazyUint8Array;
            Object.defineProperties(lazyArray, {
                length: {
                    get: function () {
                        if (!this.lengthKnown) {
                            this.cacheLength()
                        }
                        return this._length
                    }
                },
                chunkSize: {
                    get: function () {
                        if (!this.lengthKnown) {
                            this.cacheLength()
                        }
                        return this._chunkSize
                    }
                }
            });
            var properties = {
                isDevice: false,
                contents: lazyArray
            }
        } else {
            var properties = {
                isDevice: false,
                url: url
            }
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        if (properties.contents) {
            node.contents = properties.contents
        } else if (properties.url) {
            node.contents = null;
            node.url = properties.url
        }
        Object.defineProperties(node, {
            usedBytes: {
                get: function () {
                    return this.contents.length
                }
            }
        });
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(key => {
            var fn = node.stream_ops[key];
            stream_ops[key] = function forceLoadLazyFile() {
                FS.forceLoadFile(node);
                return fn.apply(null, arguments)
            }
        });

        function writeChunks(stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= contents.length) return 0;
            var size = Math.min(contents.length - position, length);
            if (contents.slice) {
                for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents[position + i]
                }
            } else {
                for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents.get(position + i)
                }
            }
            return size
        }
        stream_ops.read = (stream, buffer, offset, length, position) => {
            FS.forceLoadFile(node);
            return writeChunks(stream, buffer, offset, length, position)
        };
        stream_ops.mmap = (stream, length, position, prot, flags) => {
            FS.forceLoadFile(node);
            var ptr = mmapAlloc(length);
            if (!ptr) {
                throw new FS.ErrnoError(48)
            }
            writeChunks(stream, HEAP8, ptr, length, position);
            return {
                ptr: ptr,
                allocated: true
            }
        };
        node.stream_ops = stream_ops;
        return node
    },
    createPreloadedFile: (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency("cp " + fullname);

        function processData(byteArray) {
            function finish(byteArray) {
                if (preFinish) preFinish();
                if (!dontCreateFile) {
                    FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn)
                }
                if (onload) onload();
                removeRunDependency(dep)
            }
            if (Browser.handledByPreloadPlugin(byteArray, fullname, finish, () => {
                    if (onerror) onerror();
                    removeRunDependency(dep)
                })) {
                return
            }
            finish(byteArray)
        }
        addRunDependency(dep);
        if (typeof url == "string") {
            asyncLoad(url, byteArray => processData(byteArray), onerror)
        } else {
            processData(url)
        }
    },
    indexedDB: () => {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
    },
    DB_NAME: () => {
        return "EM_FS_" + window.location.pathname
    },
    DB_VERSION: 20,
    DB_STORE_NAME: "FILE_DATA",
    saveFilesToDB: (paths, onload, onerror) => {
        onload = onload || (() => {});
        onerror = onerror || (() => {});
        var indexedDB = FS.indexedDB();
        try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION)
        } catch (e) {
            return onerror(e)
        }
        openRequest.onupgradeneeded = () => {
            out("creating db");
            var db = openRequest.result;
            db.createObjectStore(FS.DB_STORE_NAME)
        };
        openRequest.onsuccess = () => {
            var db = openRequest.result;
            var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0,
                fail = 0,
                total = paths.length;

            function finish() {
                if (fail == 0) onload();
                else onerror()
            }
            paths.forEach(path => {
                var putRequest = files.put(FS.analyzePath(path).object.contents, path);
                putRequest.onsuccess = () => {
                    ok++;
                    if (ok + fail == total) finish()
                };
                putRequest.onerror = () => {
                    fail++;
                    if (ok + fail == total) finish()
                }
            });
            transaction.onerror = onerror
        };
        openRequest.onerror = onerror
    },
    loadFilesFromDB: (paths, onload, onerror) => {
        onload = onload || (() => {});
        onerror = onerror || (() => {});
        var indexedDB = FS.indexedDB();
        try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION)
        } catch (e) {
            return onerror(e)
        }
        openRequest.onupgradeneeded = onerror;
        openRequest.onsuccess = () => {
            var db = openRequest.result;
            try {
                var transaction = db.transaction([FS.DB_STORE_NAME], "readonly")
            } catch (e) {
                onerror(e);
                return
            }
            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0,
                fail = 0,
                total = paths.length;

            function finish() {
                if (fail == 0) onload();
                else onerror()
            }
            paths.forEach(path => {
                var getRequest = files.get(path);
                getRequest.onsuccess = () => {
                    if (FS.analyzePath(path).exists) {
                        FS.unlink(path)
                    }
                    FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
                    ok++;
                    if (ok + fail == total) finish()
                };
                getRequest.onerror = () => {
                    fail++;
                    if (ok + fail == total) finish()
                }
            });
            transaction.onerror = onerror
        };
        openRequest.onerror = onerror
    }
};
var SYSCALLS = {
    DEFAULT_POLLMASK: 5,
    calculateAt: function (dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
            return path
        }
        var dir;
        if (dirfd === -100) {
            dir = FS.cwd()
        } else {
            var dirstream = SYSCALLS.getStreamFromFD(dirfd);
            dir = dirstream.path
        }
        if (path.length == 0) {
            if (!allowEmpty) {
                throw new FS.ErrnoError(44)
            }
            return dir
        }
        return PATH.join2(dir, path)
    },
    doStat: function (func, path, buf) {
        try {
            var stat = func(path)
        } catch (e) {
            if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
                return -54
            }
            throw e
        }
        HEAP32[buf >> 2] = stat.dev;
        HEAP32[buf + 8 >> 2] = stat.ino;
        HEAP32[buf + 12 >> 2] = stat.mode;
        HEAPU32[buf + 16 >> 2] = stat.nlink;
        HEAP32[buf + 20 >> 2] = stat.uid;
        HEAP32[buf + 24 >> 2] = stat.gid;
        HEAP32[buf + 28 >> 2] = stat.rdev;
        tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
        HEAP32[buf + 48 >> 2] = 4096;
        HEAP32[buf + 52 >> 2] = stat.blocks;
        tempI64 = [Math.floor(stat.atime.getTime() / 1e3) >>> 0, (tempDouble = Math.floor(stat.atime.getTime() / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 56 >> 2] = tempI64[0], HEAP32[buf + 60 >> 2] = tempI64[1];
        HEAPU32[buf + 64 >> 2] = 0;
        tempI64 = [Math.floor(stat.mtime.getTime() / 1e3) >>> 0, (tempDouble = Math.floor(stat.mtime.getTime() / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 72 >> 2] = tempI64[0], HEAP32[buf + 76 >> 2] = tempI64[1];
        HEAPU32[buf + 80 >> 2] = 0;
        tempI64 = [Math.floor(stat.ctime.getTime() / 1e3) >>> 0, (tempDouble = Math.floor(stat.ctime.getTime() / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 88 >> 2] = tempI64[0], HEAP32[buf + 92 >> 2] = tempI64[1];
        HEAPU32[buf + 96 >> 2] = 0;
        tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 104 >> 2] = tempI64[0], HEAP32[buf + 108 >> 2] = tempI64[1];
        return 0
    },
    doMsync: function (addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43)
        }
        if (flags & 2) {
            return 0
        }
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags)
    },
    varargs: undefined,
    get: function () {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
        return ret
    },
    getStr: function (ptr) {
        var ret = UTF8ToString(ptr);
        return ret
    },
    getStreamFromFD: function (fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream
    }
};

function ___syscall__newselect(nfds, readfds, writefds, exceptfds, timeout) {
    try {
        var total = 0;
        var srcReadLow = readfds ? HEAP32[readfds >> 2] : 0,
            srcReadHigh = readfds ? HEAP32[readfds + 4 >> 2] : 0;
        var srcWriteLow = writefds ? HEAP32[writefds >> 2] : 0,
            srcWriteHigh = writefds ? HEAP32[writefds + 4 >> 2] : 0;
        var srcExceptLow = exceptfds ? HEAP32[exceptfds >> 2] : 0,
            srcExceptHigh = exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0;
        var dstReadLow = 0,
            dstReadHigh = 0;
        var dstWriteLow = 0,
            dstWriteHigh = 0;
        var dstExceptLow = 0,
            dstExceptHigh = 0;
        var allLow = (readfds ? HEAP32[readfds >> 2] : 0) | (writefds ? HEAP32[writefds >> 2] : 0) | (exceptfds ? HEAP32[exceptfds >> 2] : 0);
        var allHigh = (readfds ? HEAP32[readfds + 4 >> 2] : 0) | (writefds ? HEAP32[writefds + 4 >> 2] : 0) | (exceptfds ? HEAP32[exceptfds + 4 >> 2] : 0);
        var check = function (fd, low, high, val) {
            return fd < 32 ? low & val : high & val
        };
        for (var fd = 0; fd < nfds; fd++) {
            var mask = 1 << fd % 32;
            if (!check(fd, allLow, allHigh, mask)) {
                continue
            }
            var stream = SYSCALLS.getStreamFromFD(fd);
            var flags = SYSCALLS.DEFAULT_POLLMASK;
            if (stream.stream_ops.poll) {
                flags = stream.stream_ops.poll(stream)
            }
            if (flags & 1 && check(fd, srcReadLow, srcReadHigh, mask)) {
                fd < 32 ? dstReadLow = dstReadLow | mask : dstReadHigh = dstReadHigh | mask;
                total++
            }
            if (flags & 4 && check(fd, srcWriteLow, srcWriteHigh, mask)) {
                fd < 32 ? dstWriteLow = dstWriteLow | mask : dstWriteHigh = dstWriteHigh | mask;
                total++
            }
            if (flags & 2 && check(fd, srcExceptLow, srcExceptHigh, mask)) {
                fd < 32 ? dstExceptLow = dstExceptLow | mask : dstExceptHigh = dstExceptHigh | mask;
                total++
            }
        }
        if (readfds) {
            HEAP32[readfds >> 2] = dstReadLow;
            HEAP32[readfds + 4 >> 2] = dstReadHigh
        }
        if (writefds) {
            HEAP32[writefds >> 2] = dstWriteLow;
            HEAP32[writefds + 4 >> 2] = dstWriteHigh
        }
        if (exceptfds) {
            HEAP32[exceptfds >> 2] = dstExceptLow;
            HEAP32[exceptfds + 4 >> 2] = dstExceptHigh
        }
        return total
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}
var SOCKFS = {
    mount: function (mount) {
        Module["websocket"] = Module["websocket"] && "object" === typeof Module["websocket"] ? Module["websocket"] : {};
        Module["websocket"]._callbacks = {};
        Module["websocket"]["on"] = function (event, callback) {
            if ("function" === typeof callback) {
                this._callbacks[event] = callback
            }
            return this
        };
        Module["websocket"].emit = function (event, param) {
            if ("function" === typeof this._callbacks[event]) {
                this._callbacks[event].call(this, param)
            }
        };
        return FS.createNode(null, "/", 16384 | 511, 0)
    },
    createSocket: function (family, type, protocol) {
        type &= ~526336;
        var streaming = type == 1;
        if (streaming && protocol && protocol != 6) {
            throw new FS.ErrnoError(66)
        }
        var sock = {
            family: family,
            type: type,
            protocol: protocol,
            server: null,
            error: null,
            peers: {},
            pending: [],
            recv_queue: [],
            sock_ops: SOCKFS.websocket_sock_ops
        };
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
        var stream = FS.createStream({
            path: name,
            node: node,
            flags: 2,
            seekable: false,
            stream_ops: SOCKFS.stream_ops
        });
        sock.stream = stream;
        return sock
    },
    getSocket: function (fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
            return null
        }
        return stream.node.sock
    },
    stream_ops: {
        poll: function (stream) {
            var sock = stream.node.sock;
            return sock.sock_ops.poll(sock)
        },
        ioctl: function (stream, request, varargs) {
            var sock = stream.node.sock;
            return sock.sock_ops.ioctl(sock, request, varargs)
        },
        read: function (stream, buffer, offset, length, position) {
            var sock = stream.node.sock;
            var msg = sock.sock_ops.recvmsg(sock, length);
            if (!msg) {
                return 0
            }
            buffer.set(msg.buffer, offset);
            return msg.buffer.length
        },
        write: function (stream, buffer, offset, length, position) {
            var sock = stream.node.sock;
            return sock.sock_ops.sendmsg(sock, buffer, offset, length)
        },
        close: function (stream) {
            var sock = stream.node.sock;
            sock.sock_ops.close(sock)
        }
    },
    nextname: function () {
        if (!SOCKFS.nextname.current) {
            SOCKFS.nextname.current = 0
        }
        return "socket[" + SOCKFS.nextname.current++ + "]"
    },
    websocket_sock_ops: {
        createPeer: function (sock, addr, port) {
            var ws;
            if (typeof addr == "object") {
                ws = addr;
                addr = null;
                port = null
            }
            if (ws) {
                if (ws._socket) {
                    addr = ws._socket.remoteAddress;
                    port = ws._socket.remotePort
                } else {
                    var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
                    if (!result) {
                        throw new Error("WebSocket URL must be in the format ws(s)://address:port")
                    }
                    addr = result[1];
                    port = parseInt(result[2], 10)
                }
            } else {
                try {
                    var runtimeConfig = Module["websocket"] && "object" === typeof Module["websocket"];
                    var url = "ws:#".replace("#", "//");
                    if (runtimeConfig) {
                        if ("string" === typeof Module["websocket"]["url"]) {
                            url = Module["websocket"]["url"]
                        }
                    }
                    if (url === "ws://" || url === "wss://") {
                        var parts = addr.split("/");
                        url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/")
                    }
                    var subProtocols = "binary";
                    if (runtimeConfig) {
                        if ("string" === typeof Module["websocket"]["subprotocol"]) {
                            subProtocols = Module["websocket"]["subprotocol"]
                        }
                    }
                    var opts = undefined;
                    if (subProtocols !== "null") {
                        subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
                        opts = subProtocols
                    }
                    if (runtimeConfig && null === Module["websocket"]["subprotocol"]) {
                        subProtocols = "null";
                        opts = undefined
                    }
                    var WebSocketConstructor;
                    if (ENVIRONMENT_IS_NODE) {
                        WebSocketConstructor = require("ws")
                    } else {
                        WebSocketConstructor = WebSocket
                    }
                    ws = new WebSocketConstructor(url, opts);
                    ws.binaryType = "arraybuffer"
                } catch (e) {
                    throw new FS.ErrnoError(23)
                }
            }
            var peer = {
                addr: addr,
                port: port,
                socket: ws,
                dgram_send_queue: []
            };
            SOCKFS.websocket_sock_ops.addPeer(sock, peer);
            SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
            if (sock.type === 2 && typeof sock.sport != "undefined") {
                peer.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (sock.sport & 65280) >> 8, sock.sport & 255]))
            }
            return peer
        },
        getPeer: function (sock, addr, port) {
            return sock.peers[addr + ":" + port]
        },
        addPeer: function (sock, peer) {
            sock.peers[peer.addr + ":" + peer.port] = peer
        },
        removePeer: function (sock, peer) {
            delete sock.peers[peer.addr + ":" + peer.port]
        },
        handlePeerEvents: function (sock, peer) {
            var first = true;
            var handleOpen = function () {
                Module["websocket"].emit("open", sock.stream.fd);
                try {
                    var queued = peer.dgram_send_queue.shift();
                    while (queued) {
                        peer.socket.send(queued);
                        queued = peer.dgram_send_queue.shift()
                    }
                } catch (e) {
                    peer.socket.close()
                }
            };

            function handleMessage(data) {
                if (typeof data == "string") {
                    var encoder = new TextEncoder;
                    data = encoder.encode(data)
                } else {
                    assert(data.byteLength !== undefined);
                    if (data.byteLength == 0) {
                        return
                    }
                    data = new Uint8Array(data)
                }
                var wasfirst = first;
                first = false;
                if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
                    var newport = data[8] << 8 | data[9];
                    SOCKFS.websocket_sock_ops.removePeer(sock, peer);
                    peer.port = newport;
                    SOCKFS.websocket_sock_ops.addPeer(sock, peer);
                    return
                }
                sock.recv_queue.push({
                    addr: peer.addr,
                    port: peer.port,
                    data: data
                });
                Module["websocket"].emit("message", sock.stream.fd)
            }
            if (ENVIRONMENT_IS_NODE) {
                peer.socket.on("open", handleOpen);
                peer.socket.on("message", function (data, isBinary) {
                    if (!isBinary) {
                        return
                    }
                    handleMessage(new Uint8Array(data).buffer)
                });
                peer.socket.on("close", function () {
                    Module["websocket"].emit("close", sock.stream.fd)
                });
                peer.socket.on("error", function (error) {
                    sock.error = 14;
                    Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"])
                })
            } else {
                peer.socket.onopen = handleOpen;
                peer.socket.onclose = function () {
                    Module["websocket"].emit("close", sock.stream.fd)
                };
                peer.socket.onmessage = function peer_socket_onmessage(event) {
                    handleMessage(event.data)
                };
                peer.socket.onerror = function (error) {
                    sock.error = 14;
                    Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"])
                }
            }
        },
        poll: function (sock) {
            if (sock.type === 1 && sock.server) {
                return sock.pending.length ? 64 | 1 : 0
            }
            var mask = 0;
            var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
            if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
                mask |= 64 | 1
            }
            if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) {
                mask |= 4
            }
            if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
                mask |= 16
            }
            return mask
        },
        ioctl: function (sock, request, arg) {
            switch (request) {
                case 21531:
                    var bytes = 0;
                    if (sock.recv_queue.length) {
                        bytes = sock.recv_queue[0].data.length
                    }
                    HEAP32[arg >> 2] = bytes;
                    return 0;
                default:
                    return 28
            }
        },
        close: function (sock) {
            if (sock.server) {
                try {
                    sock.server.close()
                } catch (e) {}
                sock.server = null
            }
            var peers = Object.keys(sock.peers);
            for (var i = 0; i < peers.length; i++) {
                var peer = sock.peers[peers[i]];
                try {
                    peer.socket.close()
                } catch (e) {}
                SOCKFS.websocket_sock_ops.removePeer(sock, peer)
            }
            return 0
        },
        bind: function (sock, addr, port) {
            if (typeof sock.saddr != "undefined" || typeof sock.sport != "undefined") {
                throw new FS.ErrnoError(28)
            }
            sock.saddr = addr;
            sock.sport = port;
            if (sock.type === 2) {
                if (sock.server) {
                    sock.server.close();
                    sock.server = null
                }
                try {
                    sock.sock_ops.listen(sock, 0)
                } catch (e) {
                    if (!(e instanceof FS.ErrnoError)) throw e;
                    if (e.errno !== 138) throw e
                }
            }
        },
        connect: function (sock, addr, port) {
            if (sock.server) {
                throw new FS.ErrnoError(138)
            }
            if (typeof sock.daddr != "undefined" && typeof sock.dport != "undefined") {
                var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
                if (dest) {
                    if (dest.socket.readyState === dest.socket.CONNECTING) {
                        throw new FS.ErrnoError(7)
                    } else {
                        throw new FS.ErrnoError(30)
                    }
                }
            }
            var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
            sock.daddr = peer.addr;
            sock.dport = peer.port;
            throw new FS.ErrnoError(26)
        },
        listen: function (sock, backlog) {
            if (!ENVIRONMENT_IS_NODE) {
                throw new FS.ErrnoError(138)
            }
            if (sock.server) {
                throw new FS.ErrnoError(28)
            }
            var WebSocketServer = require("ws").Server;
            var host = sock.saddr;
            sock.server = new WebSocketServer({
                host: host,
                port: sock.sport
            });
            Module["websocket"].emit("listen", sock.stream.fd);
            sock.server.on("connection", function (ws) {
                if (sock.type === 1) {
                    var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
                    var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
                    newsock.daddr = peer.addr;
                    newsock.dport = peer.port;
                    sock.pending.push(newsock);
                    Module["websocket"].emit("connection", newsock.stream.fd)
                } else {
                    SOCKFS.websocket_sock_ops.createPeer(sock, ws);
                    Module["websocket"].emit("connection", sock.stream.fd)
                }
            });
            sock.server.on("close", function () {
                Module["websocket"].emit("close", sock.stream.fd);
                sock.server = null
            });
            sock.server.on("error", function (error) {
                sock.error = 23;
                Module["websocket"].emit("error", [sock.stream.fd, sock.error, "EHOSTUNREACH: Host is unreachable"])
            })
        },
        accept: function (listensock) {
            if (!listensock.server || !listensock.pending.length) {
                throw new FS.ErrnoError(28)
            }
            var newsock = listensock.pending.shift();
            newsock.stream.flags = listensock.stream.flags;
            return newsock
        },
        getname: function (sock, peer) {
            var addr, port;
            if (peer) {
                if (sock.daddr === undefined || sock.dport === undefined) {
                    throw new FS.ErrnoError(53)
                }
                addr = sock.daddr;
                port = sock.dport
            } else {
                addr = sock.saddr || 0;
                port = sock.sport || 0
            }
            return {
                addr: addr,
                port: port
            }
        },
        sendmsg: function (sock, buffer, offset, length, addr, port) {
            if (sock.type === 2) {
                if (addr === undefined || port === undefined) {
                    addr = sock.daddr;
                    port = sock.dport
                }
                if (addr === undefined || port === undefined) {
                    throw new FS.ErrnoError(17)
                }
            } else {
                addr = sock.daddr;
                port = sock.dport
            }
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
            if (sock.type === 1) {
                if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                    throw new FS.ErrnoError(53)
                } else if (dest.socket.readyState === dest.socket.CONNECTING) {
                    throw new FS.ErrnoError(6)
                }
            }
            if (ArrayBuffer.isView(buffer)) {
                offset += buffer.byteOffset;
                buffer = buffer.buffer
            }
            var data;
            data = buffer.slice(offset, offset + length);
            if (sock.type === 2) {
                if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
                    if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                        dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port)
                    }
                    dest.dgram_send_queue.push(data);
                    return length
                }
            }
            try {
                dest.socket.send(data);
                return length
            } catch (e) {
                throw new FS.ErrnoError(28)
            }
        },
        recvmsg: function (sock, length) {
            if (sock.type === 1 && sock.server) {
                throw new FS.ErrnoError(53)
            }
            var queued = sock.recv_queue.shift();
            if (!queued) {
                if (sock.type === 1) {
                    var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
                    if (!dest) {
                        throw new FS.ErrnoError(53)
                    }
                    if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                        return null
                    }
                    throw new FS.ErrnoError(6)
                }
                throw new FS.ErrnoError(6)
            }
            var queuedLength = queued.data.byteLength || queued.data.length;
            var queuedOffset = queued.data.byteOffset || 0;
            var queuedBuffer = queued.data.buffer || queued.data;
            var bytesRead = Math.min(length, queuedLength);
            var res = {
                buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
                addr: queued.addr,
                port: queued.port
            };
            if (sock.type === 1 && bytesRead < queuedLength) {
                var bytesRemaining = queuedLength - bytesRead;
                queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
                sock.recv_queue.unshift(queued)
            }
            return res
        }
    }
};

function getSocketFromFD(fd) {
    var socket = SOCKFS.getSocket(fd);
    if (!socket) throw new FS.ErrnoError(8);
    return socket
}

function setErrNo(value) {
    HEAP32[___errno_location() >> 2] = value;
    return value
}

function inetPton4(str) {
    var b = str.split(".");
    for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp)) return null;
        b[i] = tmp
    }
    return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0
}

function jstoi_q(str) {
    return parseInt(str)
}

function inetPton6(str) {
    var words;
    var w, offset, z;
    var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var parts = [];
    if (!valid6regx.test(str)) {
        return null
    }
    if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0]
    }
    if (str.startsWith("::")) {
        str = str.replace("::", "Z:")
    } else {
        str = str.replace("::", ":Z:")
    }
    if (str.indexOf(".") > 0) {
        str = str.replace(new RegExp("[.]", "g"), ":");
        words = str.split(":");
        words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
        words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
        words = words.slice(0, words.length - 2)
    } else {
        words = str.split(":")
    }
    offset = 0;
    z = 0;
    for (w = 0; w < words.length; w++) {
        if (typeof words[w] == "string") {
            if (words[w] === "Z") {
                for (z = 0; z < 8 - words.length + 1; z++) {
                    parts[w + z] = 0
                }
                offset = z - 1
            } else {
                parts[w + offset] = _htons(parseInt(words[w], 16))
            }
        } else {
            parts[w + offset] = words[w]
        }
    }
    return [parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6]]
}

function writeSockaddr(sa, family, addr, port, addrlen) {
    switch (family) {
        case 2:
            addr = inetPton4(addr);
            zeroMemory(sa, 16);
            if (addrlen) {
                HEAP32[addrlen >> 2] = 16
            }
            HEAP16[sa >> 1] = family;
            HEAP32[sa + 4 >> 2] = addr;
            HEAP16[sa + 2 >> 1] = _htons(port);
            break;
        case 10:
            addr = inetPton6(addr);
            zeroMemory(sa, 28);
            if (addrlen) {
                HEAP32[addrlen >> 2] = 28
            }
            HEAP32[sa >> 2] = family;
            HEAP32[sa + 8 >> 2] = addr[0];
            HEAP32[sa + 12 >> 2] = addr[1];
            HEAP32[sa + 16 >> 2] = addr[2];
            HEAP32[sa + 20 >> 2] = addr[3];
            HEAP16[sa + 2 >> 1] = _htons(port);
            break;
        default:
            return 5
    }
    return 0
}
var DNS = {
    address_map: {
        id: 1,
        addrs: {},
        names: {}
    },
    lookup_name: function (name) {
        var res = inetPton4(name);
        if (res !== null) {
            return name
        }
        res = inetPton6(name);
        if (res !== null) {
            return name
        }
        var addr;
        if (DNS.address_map.addrs[name]) {
            addr = DNS.address_map.addrs[name]
        } else {
            var id = DNS.address_map.id++;
            assert(id < 65535, "exceeded max address mappings of 65535");
            addr = "172.29." + (id & 255) + "." + (id & 65280);
            DNS.address_map.names[addr] = name;
            DNS.address_map.addrs[name] = addr
        }
        return addr
    },
    lookup_addr: function (addr) {
        if (DNS.address_map.names[addr]) {
            return DNS.address_map.names[addr]
        }
        return null
    }
};

function ___syscall_accept4(fd, addr, addrlen, flags) {
    try {
        var sock = getSocketFromFD(fd);
        var newsock = sock.sock_ops.accept(sock);
        if (addr) {
            var errno = writeSockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport, addrlen)
        }
        return newsock.stream.fd
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function inetNtop4(addr) {
    return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255)
}

function inetNtop6(ints) {
    var str = "";
    var word = 0;
    var longest = 0;
    var lastzero = 0;
    var zstart = 0;
    var len = 0;
    var i = 0;
    var parts = [ints[0] & 65535, ints[0] >> 16, ints[1] & 65535, ints[1] >> 16, ints[2] & 65535, ints[2] >> 16, ints[3] & 65535, ints[3] >> 16];
    var hasipv4 = true;
    var v4part = "";
    for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) {
            hasipv4 = false;
            break
        }
    }
    if (hasipv4) {
        v4part = inetNtop4(parts[6] | parts[7] << 16);
        if (parts[5] === -1) {
            str = "::ffff:";
            str += v4part;
            return str
        }
        if (parts[5] === 0) {
            str = "::";
            if (v4part === "0.0.0.0") v4part = "";
            if (v4part === "0.0.0.1") v4part = "1";
            str += v4part;
            return str
        }
    }
    for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
            if (word - lastzero > 1) {
                len = 0
            }
            lastzero = word;
            len++
        }
        if (len > longest) {
            longest = len;
            zstart = word - longest + 1
        }
    }
    for (word = 0; word < 8; word++) {
        if (longest > 1) {
            if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
                if (word === zstart) {
                    str += ":";
                    if (zstart === 0) str += ":"
                }
                continue
            }
        }
        str += Number(_ntohs(parts[word] & 65535)).toString(16);
        str += word < 7 ? ":" : ""
    }
    return str
}

function readSockaddr(sa, salen) {
    var family = HEAP16[sa >> 1];
    var port = _ntohs(HEAPU16[sa + 2 >> 1]);
    var addr;
    switch (family) {
        case 2:
            if (salen !== 16) {
                return {
                    errno: 28
                }
            }
            addr = HEAP32[sa + 4 >> 2];
            addr = inetNtop4(addr);
            break;
        case 10:
            if (salen !== 28) {
                return {
                    errno: 28
                }
            }
            addr = [HEAP32[sa + 8 >> 2], HEAP32[sa + 12 >> 2], HEAP32[sa + 16 >> 2], HEAP32[sa + 20 >> 2]];
            addr = inetNtop6(addr);
            break;
        default:
            return {
                errno: 5
            }
    }
    return {
        family: family,
        addr: addr,
        port: port
    }
}

function getSocketAddress(addrp, addrlen, allowNull) {
    if (allowNull && addrp === 0) return null;
    var info = readSockaddr(addrp, addrlen);
    if (info.errno) throw new FS.ErrnoError(info.errno);
    info.addr = DNS.lookup_addr(info.addr) || info.addr;
    return info
}

function ___syscall_bind(fd, addr, addrlen) {
    try {
        var sock = getSocketFromFD(fd);
        var info = getSocketAddress(addr, addrlen);
        sock.sock_ops.bind(sock, info.addr, info.port);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_chdir(path) {
    try {
        path = SYSCALLS.getStr(path);
        FS.chdir(path);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_chmod(path, mode) {
    try {
        path = SYSCALLS.getStr(path);
        FS.chmod(path, mode);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_connect(fd, addr, addrlen) {
    try {
        var sock = getSocketFromFD(fd);
        var info = getSocketAddress(addr, addrlen);
        sock.sock_ops.connect(sock, info.addr, info.port);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_dup3(fd, suggestFD, flags) {
    try {
        var old = SYSCALLS.getStreamFromFD(fd);
        if (old.fd === suggestFD) return -28;
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.createStream(old, suggestFD, suggestFD + 1).fd
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_faccessat(dirfd, path, amode, flags) {
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        if (amode & ~7) {
            return -28
        }
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        var node = lookup.node;
        if (!node) {
            return -44
        }
        var perms = "";
        if (amode & 4) perms += "r";
        if (amode & 2) perms += "w";
        if (amode & 1) perms += "x";
        if (perms && FS.nodePermissions(node, perms)) {
            return -2
        }
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_fadvise64(fd, offset, len, advice) {
    return 0
}

function ___syscall_fchdir(fd) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.chdir(stream.path);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_fchmod(fd, mode) {
    try {
        FS.fchmod(fd, mode);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_fchmodat(dirfd, path, mode, varargs) {
    SYSCALLS.varargs = varargs;
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        FS.chmod(path, mode);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_fchown32(fd, owner, group) {
    try {
        FS.fchown(fd, owner, group);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_fchownat(dirfd, path, owner, group, flags) {
    try {
        path = SYSCALLS.getStr(path);
        var nofollow = flags & 256;
        flags = flags & ~256;
        path = SYSCALLS.calculateAt(dirfd, path);
        (nofollow ? FS.lchown : FS.chown)(path, owner, group);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_fcntl64(fd, cmd, varargs) {
    SYSCALLS.varargs = varargs;
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (cmd) {
            case 0: {
                var arg = SYSCALLS.get();
                if (arg < 0) {
                    return -28
                }
                var newStream;
                newStream = FS.createStream(stream, arg);
                return newStream.fd
            }
            case 1:
            case 2:
                return 0;
            case 3:
                return stream.flags;
            case 4: {
                var arg = SYSCALLS.get();
                stream.flags |= arg;
                return 0
            }
            case 5: {
                var arg = SYSCALLS.get();
                var offset = 0;
                HEAP16[arg + offset >> 1] = 2;
                return 0
            }
            case 6:
            case 7:
                return 0;
            case 16:
            case 8:
                return -28;
            case 9:
                setErrNo(28);
                return -1;
            default: {
                return -28
            }
        }
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_fdatasync(fd) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_fstat64(fd, buf) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        return SYSCALLS.doStat(FS.stat, stream.path, buf)
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_statfs64(path, size, buf) {
    try {
        path = SYSCALLS.getStr(path);
        HEAP32[buf + 4 >> 2] = 4096;
        HEAP32[buf + 40 >> 2] = 4096;
        HEAP32[buf + 8 >> 2] = 1e6;
        HEAP32[buf + 12 >> 2] = 5e5;
        HEAP32[buf + 16 >> 2] = 5e5;
        HEAP32[buf + 20 >> 2] = FS.nextInode;
        HEAP32[buf + 24 >> 2] = 1e6;
        HEAP32[buf + 28 >> 2] = 42;
        HEAP32[buf + 44 >> 2] = 2;
        HEAP32[buf + 36 >> 2] = 255;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_fstatfs64(fd, size, buf) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        return ___syscall_statfs64(0, size, buf)
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function convertI32PairToI53Checked(lo, hi) {
    return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN
}

function ___syscall_ftruncate64(fd, length_low, length_high) {
    try {
        var length = convertI32PairToI53Checked(length_low, length_high);
        if (isNaN(length)) return -61;
        FS.ftruncate(fd, length);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_getcwd(buf, size) {
    try {
        if (size === 0) return -28;
        var cwd = FS.cwd();
        var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
        if (size < cwdLengthInBytes) return -68;
        stringToUTF8(cwd, buf, size);
        return cwdLengthInBytes
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_getdents64(fd, dirp, count) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        if (!stream.getdents) {
            stream.getdents = FS.readdir(stream.path)
        }
        var struct_size = 280;
        var pos = 0;
        var off = FS.llseek(stream, 0, 1);
        var idx = Math.floor(off / struct_size);
        while (idx < stream.getdents.length && pos + struct_size <= count) {
            var id;
            var type;
            var name = stream.getdents[idx];
            if (name === ".") {
                id = stream.node.id;
                type = 4
            } else if (name === "..") {
                var lookup = FS.lookupPath(stream.path, {
                    parent: true
                });
                id = lookup.node.id;
                type = 4
            } else {
                var child = FS.lookupNode(stream.node, name);
                id = child.id;
                type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8
            }
            tempI64 = [id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos >> 2] = tempI64[0], HEAP32[dirp + pos + 4 >> 2] = tempI64[1];
            tempI64 = [(idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos + 8 >> 2] = tempI64[0], HEAP32[dirp + pos + 12 >> 2] = tempI64[1];
            HEAP16[dirp + pos + 16 >> 1] = 280;
            HEAP8[dirp + pos + 18 >> 0] = type;
            stringToUTF8(name, dirp + pos + 19, 256);
            pos += struct_size;
            idx += 1
        }
        FS.llseek(stream, idx * struct_size, 0);
        return pos
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_getpeername(fd, addr, addrlen) {
    try {
        var sock = getSocketFromFD(fd);
        if (!sock.daddr) {
            return -53
        }
        var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport, addrlen);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_getsockname(fd, addr, addrlen) {
    try {
        err("__syscall_getsockname " + fd);
        var sock = getSocketFromFD(fd);
        var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || "0.0.0.0"), sock.sport, addrlen);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_getsockopt(fd, level, optname, optval, optlen) {
    try {
        var sock = getSocketFromFD(fd);
        if (level === 1) {
            if (optname === 4) {
                HEAP32[optval >> 2] = sock.error;
                HEAP32[optlen >> 2] = 4;
                sock.error = null;
                return 0
            }
        }
        return -50
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_ioctl(fd, op, varargs) {
    SYSCALLS.varargs = varargs;
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (op) {
            case 21509:
            case 21505: {
                if (!stream.tty) return -59;
                return 0
            }
            case 21510:
            case 21511:
            case 21512:
            case 21506:
            case 21507:
            case 21508: {
                if (!stream.tty) return -59;
                return 0
            }
            case 21519: {
                if (!stream.tty) return -59;
                var argp = SYSCALLS.get();
                HEAP32[argp >> 2] = 0;
                return 0
            }
            case 21520: {
                if (!stream.tty) return -59;
                return -28
            }
            case 21531: {
                var argp = SYSCALLS.get();
                return FS.ioctl(stream, op, argp)
            }
            case 21523: {
                if (!stream.tty) return -59;
                return 0
            }
            case 21524: {
                if (!stream.tty) return -59;
                return 0
            }
            default:
                return -28
        }
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_listen(fd, backlog) {
    try {
        var sock = getSocketFromFD(fd);
        sock.sock_ops.listen(sock, backlog);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_lstat64(path, buf) {
    try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.lstat, path, buf)
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_mkdirat(dirfd, path, mode) {
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        path = PATH.normalize(path);
        if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
        FS.mkdir(path, mode, 0);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_newfstatat(dirfd, path, buf, flags) {
    try {
        path = SYSCALLS.getStr(path);
        var nofollow = flags & 256;
        var allowEmpty = flags & 4096;
        flags = flags & ~4352;
        path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
        return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf)
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_openat(dirfd, path, flags, varargs) {
    SYSCALLS.varargs = varargs;
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        var mode = varargs ? SYSCALLS.get() : 0;
        return FS.open(path, flags, mode).fd
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}
var PIPEFS = {
    BUCKET_BUFFER_SIZE: 8192,
    mount: function (mount) {
        return FS.createNode(null, "/", 16384 | 511, 0)
    },
    createPipe: function () {
        var pipe = {
            buckets: [],
            refcnt: 2
        };
        pipe.buckets.push({
            buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
            offset: 0,
            roffset: 0
        });
        var rName = PIPEFS.nextname();
        var wName = PIPEFS.nextname();
        var rNode = FS.createNode(PIPEFS.root, rName, 4096, 0);
        var wNode = FS.createNode(PIPEFS.root, wName, 4096, 0);
        rNode.pipe = pipe;
        wNode.pipe = pipe;
        var readableStream = FS.createStream({
            path: rName,
            node: rNode,
            flags: 0,
            seekable: false,
            stream_ops: PIPEFS.stream_ops
        });
        rNode.stream = readableStream;
        var writableStream = FS.createStream({
            path: wName,
            node: wNode,
            flags: 1,
            seekable: false,
            stream_ops: PIPEFS.stream_ops
        });
        wNode.stream = writableStream;
        return {
            readable_fd: readableStream.fd,
            writable_fd: writableStream.fd
        }
    },
    stream_ops: {
        poll: function (stream) {
            var pipe = stream.node.pipe;
            if ((stream.flags & 2097155) === 1) {
                return 256 | 4
            }
            if (pipe.buckets.length > 0) {
                for (var i = 0; i < pipe.buckets.length; i++) {
                    var bucket = pipe.buckets[i];
                    if (bucket.offset - bucket.roffset > 0) {
                        return 64 | 1
                    }
                }
            }
            return 0
        },
        ioctl: function (stream, request, varargs) {
            return 28
        },
        fsync: function (stream) {
            return 28
        },
        read: function (stream, buffer, offset, length, position) {
            var pipe = stream.node.pipe;
            var currentLength = 0;
            for (var i = 0; i < pipe.buckets.length; i++) {
                var bucket = pipe.buckets[i];
                currentLength += bucket.offset - bucket.roffset
            }
            assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
            var data = buffer.subarray(offset, offset + length);
            if (length <= 0) {
                return 0
            }
            if (currentLength == 0) {
                throw new FS.ErrnoError(6)
            }
            var toRead = Math.min(currentLength, length);
            var totalRead = toRead;
            var toRemove = 0;
            for (var i = 0; i < pipe.buckets.length; i++) {
                var currBucket = pipe.buckets[i];
                var bucketSize = currBucket.offset - currBucket.roffset;
                if (toRead <= bucketSize) {
                    var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
                    if (toRead < bucketSize) {
                        tmpSlice = tmpSlice.subarray(0, toRead);
                        currBucket.roffset += toRead
                    } else {
                        toRemove++
                    }
                    data.set(tmpSlice);
                    break
                } else {
                    var tmpSlice = currBucket.buffer.subarray(currBucket.roffset, currBucket.offset);
                    data.set(tmpSlice);
                    data = data.subarray(tmpSlice.byteLength);
                    toRead -= tmpSlice.byteLength;
                    toRemove++
                }
            }
            if (toRemove && toRemove == pipe.buckets.length) {
                toRemove--;
                pipe.buckets[toRemove].offset = 0;
                pipe.buckets[toRemove].roffset = 0
            }
            pipe.buckets.splice(0, toRemove);
            return totalRead
        },
        write: function (stream, buffer, offset, length, position) {
            var pipe = stream.node.pipe;
            assert(buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer));
            var data = buffer.subarray(offset, offset + length);
            var dataLen = data.byteLength;
            if (dataLen <= 0) {
                return 0
            }
            var currBucket = null;
            if (pipe.buckets.length == 0) {
                currBucket = {
                    buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
                    offset: 0,
                    roffset: 0
                };
                pipe.buckets.push(currBucket)
            } else {
                currBucket = pipe.buckets[pipe.buckets.length - 1]
            }
            assert(currBucket.offset <= PIPEFS.BUCKET_BUFFER_SIZE);
            var freeBytesInCurrBuffer = PIPEFS.BUCKET_BUFFER_SIZE - currBucket.offset;
            if (freeBytesInCurrBuffer >= dataLen) {
                currBucket.buffer.set(data, currBucket.offset);
                currBucket.offset += dataLen;
                return dataLen
            } else if (freeBytesInCurrBuffer > 0) {
                currBucket.buffer.set(data.subarray(0, freeBytesInCurrBuffer), currBucket.offset);
                currBucket.offset += freeBytesInCurrBuffer;
                data = data.subarray(freeBytesInCurrBuffer, data.byteLength)
            }
            var numBuckets = data.byteLength / PIPEFS.BUCKET_BUFFER_SIZE | 0;
            var remElements = data.byteLength % PIPEFS.BUCKET_BUFFER_SIZE;
            for (var i = 0; i < numBuckets; i++) {
                var newBucket = {
                    buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
                    offset: PIPEFS.BUCKET_BUFFER_SIZE,
                    roffset: 0
                };
                pipe.buckets.push(newBucket);
                newBucket.buffer.set(data.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE));
                data = data.subarray(PIPEFS.BUCKET_BUFFER_SIZE, data.byteLength)
            }
            if (remElements > 0) {
                var newBucket = {
                    buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE),
                    offset: data.byteLength,
                    roffset: 0
                };
                pipe.buckets.push(newBucket);
                newBucket.buffer.set(data)
            }
            return dataLen
        },
        close: function (stream) {
            var pipe = stream.node.pipe;
            pipe.refcnt--;
            if (pipe.refcnt === 0) {
                pipe.buckets = null
            }
        }
    },
    nextname: function () {
        if (!PIPEFS.nextname.current) {
            PIPEFS.nextname.current = 0
        }
        return "pipe[" + PIPEFS.nextname.current++ + "]"
    }
};

function ___syscall_pipe(fdPtr) {
    try {
        if (fdPtr == 0) {
            throw new FS.ErrnoError(21)
        }
        var res = PIPEFS.createPipe();
        HEAP32[fdPtr >> 2] = res.readable_fd;
        HEAP32[fdPtr + 4 >> 2] = res.writable_fd;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_poll(fds, nfds, timeout) {
    try {
        var nonzero = 0;
        for (var i = 0; i < nfds; i++) {
            var pollfd = fds + 8 * i;
            var fd = HEAP32[pollfd >> 2];
            var events = HEAP16[pollfd + 4 >> 1];
            var mask = 32;
            var stream = FS.getStream(fd);
            if (stream) {
                mask = SYSCALLS.DEFAULT_POLLMASK;
                if (stream.stream_ops.poll) {
                    mask = stream.stream_ops.poll(stream)
                }
            }
            mask &= events | 8 | 16;
            if (mask) nonzero++;
            HEAP16[pollfd + 6 >> 1] = mask
        }
        return nonzero
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_readlinkat(dirfd, path, buf, bufsize) {
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf + len];
        stringToUTF8(ret, buf, bufsize + 1);
        HEAP8[buf + len] = endChar;
        return len
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_recvfrom(fd, buf, len, flags, addr, addrlen) {
    try {
        var sock = getSocketFromFD(fd);
        var msg = sock.sock_ops.recvmsg(sock, len);
        if (!msg) return 0;
        if (addr) {
            var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen)
        }
        HEAPU8.set(msg.buffer, buf);
        return msg.buffer.byteLength
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_recvmsg(fd, message, flags) {
    try {
        var sock = getSocketFromFD(fd);
        var iov = HEAPU32[message + 8 >> 2];
        var num = HEAP32[message + 12 >> 2];
        var total = 0;
        for (var i = 0; i < num; i++) {
            total += HEAP32[iov + (8 * i + 4) >> 2]
        }
        var msg = sock.sock_ops.recvmsg(sock, total);
        if (!msg) return 0;
        var name = HEAPU32[message >> 2];
        if (name) {
            var errno = writeSockaddr(name, sock.family, DNS.lookup_name(msg.addr), msg.port)
        }
        var bytesRead = 0;
        var bytesRemaining = msg.buffer.byteLength;
        for (var i = 0; bytesRemaining > 0 && i < num; i++) {
            var iovbase = HEAPU32[iov + (8 * i + 0) >> 2];
            var iovlen = HEAP32[iov + (8 * i + 4) >> 2];
            if (!iovlen) {
                continue
            }
            var length = Math.min(iovlen, bytesRemaining);
            var buf = msg.buffer.subarray(bytesRead, bytesRead + length);
            HEAPU8.set(buf, iovbase + bytesRead);
            bytesRead += length;
            bytesRemaining -= length
        }
        return bytesRead
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
    try {
        oldpath = SYSCALLS.getStr(oldpath);
        newpath = SYSCALLS.getStr(newpath);
        oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
        newpath = SYSCALLS.calculateAt(newdirfd, newpath);
        FS.rename(oldpath, newpath);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_rmdir(path) {
    try {
        path = SYSCALLS.getStr(path);
        FS.rmdir(path);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_sendmsg(fd, message, flags) {
    try {
        var sock = getSocketFromFD(fd);
        var iov = HEAPU32[message + 8 >> 2];
        var num = HEAP32[message + 12 >> 2];
        var addr, port;
        var name = HEAPU32[message >> 2];
        var namelen = HEAP32[message + 4 >> 2];
        if (name) {
            var info = readSockaddr(name, namelen);
            if (info.errno) return -info.errno;
            port = info.port;
            addr = DNS.lookup_addr(info.addr) || info.addr
        }
        var total = 0;
        for (var i = 0; i < num; i++) {
            total += HEAP32[iov + (8 * i + 4) >> 2]
        }
        var view = new Uint8Array(total);
        var offset = 0;
        for (var i = 0; i < num; i++) {
            var iovbase = HEAPU32[iov + (8 * i + 0) >> 2];
            var iovlen = HEAP32[iov + (8 * i + 4) >> 2];
            for (var j = 0; j < iovlen; j++) {
                view[offset++] = HEAP8[iovbase + j >> 0]
            }
        }
        return sock.sock_ops.sendmsg(sock, view, 0, total, addr, port)
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_sendto(fd, message, length, flags, addr, addr_len) {
    try {
        var sock = getSocketFromFD(fd);
        var dest = getSocketAddress(addr, addr_len, true);
        if (!dest) {
            return FS.write(sock.stream, HEAP8, message, length)
        }
        return sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port)
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_socket(domain, type, protocol) {
    try {
        var sock = SOCKFS.createSocket(domain, type, protocol);
        return sock.stream.fd
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_stat64(path, buf) {
    try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.stat, path, buf)
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_symlink(target, linkpath) {
    try {
        target = SYSCALLS.getStr(target);
        linkpath = SYSCALLS.getStr(linkpath);
        FS.symlink(target, linkpath);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_truncate64(path, length_low, length_high) {
    try {
        var length = convertI32PairToI53Checked(length_low, length_high);
        if (isNaN(length)) return -61;
        path = SYSCALLS.getStr(path);
        FS.truncate(path, length);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function ___syscall_unlinkat(dirfd, path, flags) {
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        if (flags === 0) {
            FS.unlink(path)
        } else if (flags === 512) {
            FS.rmdir(path)
        } else {
            abort("Invalid flags passed to unlinkat")
        }
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function readI53FromI64(ptr) {
    return HEAPU32[ptr >> 2] + HEAP32[ptr + 4 >> 2] * 4294967296
}

function ___syscall_utimensat(dirfd, path, times, flags) {
    try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path, true);
        if (!times) {
            var atime = Date.now();
            var mtime = atime
        } else {
            var seconds = readI53FromI64(times);
            var nanoseconds = HEAP32[times + 8 >> 2];
            atime = seconds * 1e3 + nanoseconds / (1e3 * 1e3);
            times += 16;
            seconds = readI53FromI64(times);
            nanoseconds = HEAP32[times + 8 >> 2];
            mtime = seconds * 1e3 + nanoseconds / (1e3 * 1e3)
        }
        FS.utime(path, atime, mtime);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function __dlinit(main_dso_handle) {}
var dlopenMissingError = "To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking";

function __dlopen_js(filename, flag) {
    abort(dlopenMissingError)
}

function __dlsym_js(handle, symbol) {
    abort(dlopenMissingError)
}
var nowIsMonotonic = true;

function __emscripten_get_now_is_monotonic() {
    return nowIsMonotonic
}

function __emscripten_throw_longjmp() {
    throw Infinity
}

function __gmtime_js(time, tmPtr) {
    var date = new Date(readI53FromI64(time) * 1e3);
    HEAP32[tmPtr >> 2] = date.getUTCSeconds();
    HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes();
    HEAP32[tmPtr + 8 >> 2] = date.getUTCHours();
    HEAP32[tmPtr + 12 >> 2] = date.getUTCDate();
    HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth();
    HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
    HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
    var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
    HEAP32[tmPtr + 28 >> 2] = yday
}

function __localtime_js(time, tmPtr) {
    var date = new Date(readI53FromI64(time) * 1e3);
    HEAP32[tmPtr >> 2] = date.getSeconds();
    HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
    HEAP32[tmPtr + 8 >> 2] = date.getHours();
    HEAP32[tmPtr + 12 >> 2] = date.getDate();
    HEAP32[tmPtr + 16 >> 2] = date.getMonth();
    HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
    HEAP32[tmPtr + 24 >> 2] = date.getDay();
    var start = new Date(date.getFullYear(), 0, 1);
    var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
    HEAP32[tmPtr + 28 >> 2] = yday;
    HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
    var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
    var winterOffset = start.getTimezoneOffset();
    var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
    HEAP32[tmPtr + 32 >> 2] = dst
}

function __mktime_js(tmPtr) {
    var date = new Date(HEAP32[tmPtr + 20 >> 2] + 1900, HEAP32[tmPtr + 16 >> 2], HEAP32[tmPtr + 12 >> 2], HEAP32[tmPtr + 8 >> 2], HEAP32[tmPtr + 4 >> 2], HEAP32[tmPtr >> 2], 0);
    var dst = HEAP32[tmPtr + 32 >> 2];
    var guessedOffset = date.getTimezoneOffset();
    var start = new Date(date.getFullYear(), 0, 1);
    var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
    var winterOffset = start.getTimezoneOffset();
    var dstOffset = Math.min(winterOffset, summerOffset);
    if (dst < 0) {
        HEAP32[tmPtr + 32 >> 2] = Number(summerOffset != winterOffset && dstOffset == guessedOffset)
    } else if (dst > 0 != (dstOffset == guessedOffset)) {
        var nonDstOffset = Math.max(winterOffset, summerOffset);
        var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
        date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4)
    }
    HEAP32[tmPtr + 24 >> 2] = date.getDay();
    var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
    HEAP32[tmPtr + 28 >> 2] = yday;
    HEAP32[tmPtr >> 2] = date.getSeconds();
    HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
    HEAP32[tmPtr + 8 >> 2] = date.getHours();
    HEAP32[tmPtr + 12 >> 2] = date.getDate();
    HEAP32[tmPtr + 16 >> 2] = date.getMonth();
    HEAP32[tmPtr + 20 >> 2] = date.getYear();
    return date.getTime() / 1e3 | 0
}

function __mmap_js(len, prot, flags, fd, off, allocated, addr) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var res = FS.mmap(stream, len, off, prot, flags);
        var ptr = res.ptr;
        HEAP32[allocated >> 2] = res.allocated;
        HEAPU32[addr >> 2] = ptr;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function __msync_js(addr, len, prot, flags, fd, offset) {
    try {
        SYSCALLS.doMsync(addr, SYSCALLS.getStreamFromFD(fd), len, flags, 0);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function __munmap_js(addr, len, prot, flags, fd, offset) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        if (prot & 2) {
            SYSCALLS.doMsync(addr, stream, len, flags, offset)
        }
        FS.munmap(stream)
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return -e.errno
    }
}

function allocateUTF8(str) {
    var size = lengthBytesUTF8(str) + 1;
    var ret = _malloc(size);
    if (ret) stringToUTF8Array(str, HEAP8, ret, size);
    return ret
}

function _tzset_impl(timezone, daylight, tzname) {
    var currentYear = (new Date).getFullYear();
    var winter = new Date(currentYear, 0, 1);
    var summer = new Date(currentYear, 6, 1);
    var winterOffset = winter.getTimezoneOffset();
    var summerOffset = summer.getTimezoneOffset();
    var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
    HEAP32[timezone >> 2] = stdTimezoneOffset * 60;
    HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);

    function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT"
    }
    var winterName = extractZone(winter);
    var summerName = extractZone(summer);
    var winterNamePtr = allocateUTF8(winterName);
    var summerNamePtr = allocateUTF8(summerName);
    if (summerOffset < winterOffset) {
        HEAPU32[tzname >> 2] = winterNamePtr;
        HEAPU32[tzname + 4 >> 2] = summerNamePtr
    } else {
        HEAPU32[tzname >> 2] = summerNamePtr;
        HEAPU32[tzname + 4 >> 2] = winterNamePtr
    }
}

function __tzset_js(timezone, daylight, tzname) {
    if (__tzset_js.called) return;
    __tzset_js.called = true;
    _tzset_impl(timezone, daylight, tzname)
}

function _abort() {
    abort("")
}

function _emscripten_set_main_loop_timing(mode, value) {
    Browser.mainLoop.timingMode = mode;
    Browser.mainLoop.timingValue = value;
    if (!Browser.mainLoop.func) {
        return 1
    }
    if (!Browser.mainLoop.running) {
        Browser.mainLoop.running = true
    }
    if (mode == 0) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
            var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
            setTimeout(Browser.mainLoop.runner, timeUntilNextTick)
        };
        Browser.mainLoop.method = "timeout"
    } else if (mode == 1) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
            Browser.requestAnimationFrame(Browser.mainLoop.runner)
        };
        Browser.mainLoop.method = "rAF"
    } else if (mode == 2) {
        if (typeof setImmediate == "undefined") {
            var setImmediates = [];
            var emscriptenMainLoopMessageId = "setimmediate";
            var Browser_setImmediate_messageHandler = event => {
                if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
                    event.stopPropagation();
                    setImmediates.shift()()
                }
            };
            addEventListener("message", Browser_setImmediate_messageHandler, true);
            setImmediate = function Browser_emulated_setImmediate(func) {
                setImmediates.push(func);
                if (ENVIRONMENT_IS_WORKER) {
                    if (Module["setImmediates"] === undefined) Module["setImmediates"] = [];
                    Module["setImmediates"].push(func);
                    postMessage({
                        target: emscriptenMainLoopMessageId
                    })
                } else postMessage(emscriptenMainLoopMessageId, "*")
            }
        }
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
            setImmediate(Browser.mainLoop.runner)
        };
        Browser.mainLoop.method = "immediate"
    }
    return 0
}
var _emscripten_get_now;
if (ENVIRONMENT_IS_NODE) {
    _emscripten_get_now = () => {
        var t = process["hrtime"]();
        return t[0] * 1e3 + t[1] / 1e6
    }
} else _emscripten_get_now = () => performance.now();

function _proc_exit(code) {
    EXITSTATUS = code;
    if (!keepRuntimeAlive()) {
        if (Module["onExit"]) Module["onExit"](code);
        ABORT = true
    }
    quit_(code, new ExitStatus(code))
}

function exitJS(status, implicit) {
    EXITSTATUS = status;
    _proc_exit(status)
}
var _exit = exitJS;

function handleException(e) {
    if (e instanceof ExitStatus || e == "unwind") {
        return EXITSTATUS
    }
    quit_(1, e)
}

function maybeExit() {}

function setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) {
    assert(!Browser.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    Browser.mainLoop.func = browserIterationFunc;
    Browser.mainLoop.arg = arg;
    var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;

    function checkIsRunning() {
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
            maybeExit();
            return false
        }
        return true
    }
    Browser.mainLoop.running = false;
    Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT) return;
        if (Browser.mainLoop.queue.length > 0) {
            var start = Date.now();
            var blocker = Browser.mainLoop.queue.shift();
            blocker.func(blocker.arg);
            if (Browser.mainLoop.remainingBlockers) {
                var remaining = Browser.mainLoop.remainingBlockers;
                var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
                if (blocker.counted) {
                    Browser.mainLoop.remainingBlockers = next
                } else {
                    next = next + .5;
                    Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9
                }
            }
            out('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + " ms");
            Browser.mainLoop.updateStatus();
            if (!checkIsRunning()) return;
            setTimeout(Browser.mainLoop.runner, 0);
            return
        }
        if (!checkIsRunning()) return;
        Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
        if (Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
            Browser.mainLoop.scheduler();
            return
        } else if (Browser.mainLoop.timingMode == 0) {
            Browser.mainLoop.tickStartTime = _emscripten_get_now()
        }
        GL.newRenderingFrameStarted();
        Browser.mainLoop.runIter(browserIterationFunc);
        if (!checkIsRunning()) return;
        if (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
        Browser.mainLoop.scheduler()
    };
    if (!noSetTiming) {
        if (fps && fps > 0) _emscripten_set_main_loop_timing(0, 1e3 / fps);
        else _emscripten_set_main_loop_timing(1, 1);
        Browser.mainLoop.scheduler()
    }
    if (simulateInfiniteLoop) {
        throw "unwind"
    }
}

function callUserCallback(func) {
    if (ABORT) {
        return
    }
    try {
        func()
    } catch (e) {
        handleException(e)
    }
}

function safeSetTimeout(func, timeout) {
    return setTimeout(function () {
        callUserCallback(func)
    }, timeout)
}

function warnOnce(text) {
    if (!warnOnce.shown) warnOnce.shown = {};
    if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        if (ENVIRONMENT_IS_NODE) text = "warning: " + text;
        err(text)
    }
}
var Browser = {
    mainLoop: {
        running: false,
        scheduler: null,
        method: "",
        currentlyRunningMainloop: 0,
        func: null,
        arg: 0,
        timingMode: 0,
        timingValue: 0,
        currentFrameNumber: 0,
        queue: [],
        pause: function () {
            Browser.mainLoop.scheduler = null;
            Browser.mainLoop.currentlyRunningMainloop++
        },
        resume: function () {
            Browser.mainLoop.currentlyRunningMainloop++;
            var timingMode = Browser.mainLoop.timingMode;
            var timingValue = Browser.mainLoop.timingValue;
            var func = Browser.mainLoop.func;
            Browser.mainLoop.func = null;
            setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
            _emscripten_set_main_loop_timing(timingMode, timingValue);
            Browser.mainLoop.scheduler()
        },
        updateStatus: function () {
            if (Module["setStatus"]) {
                var message = Module["statusMessage"] || "Please wait...";
                var remaining = Browser.mainLoop.remainingBlockers;
                var expected = Browser.mainLoop.expectedBlockers;
                if (remaining) {
                    if (remaining < expected) {
                        Module["setStatus"](message + " (" + (expected - remaining) + "/" + expected + ")")
                    } else {
                        Module["setStatus"](message)
                    }
                } else {
                    Module["setStatus"]("")
                }
            }
        },
        runIter: function (func) {
            if (ABORT) return;
            if (Module["preMainLoop"]) {
                var preRet = Module["preMainLoop"]();
                if (preRet === false) {
                    return
                }
            }
            callUserCallback(func);
            if (Module["postMainLoop"]) Module["postMainLoop"]()
        }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function () {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = [];
        if (Browser.initted) return;
        Browser.initted = true;
        try {
            new Blob;
            Browser.hasBlobConstructor = true
        } catch (e) {
            Browser.hasBlobConstructor = false;
            err("warning: no blob constructor, cannot create blobs with mimetypes")
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !Browser.hasBlobConstructor ? err("warning: no BlobBuilder") : null;
        Browser.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject == "undefined") {
            err("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
            Module.noImageDecoding = true
        }
        var imagePlugin = {};
        imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
            return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name)
        };
        imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
            var b = null;
            if (Browser.hasBlobConstructor) {
                try {
                    b = new Blob([byteArray], {
                        type: Browser.getMimetype(name)
                    });
                    if (b.size !== byteArray.length) {
                        b = new Blob([new Uint8Array(byteArray).buffer], {
                            type: Browser.getMimetype(name)
                        })
                    }
                } catch (e) {
                    warnOnce("Blob constructor present but fails: " + e + "; falling back to blob builder")
                }
            }
            if (!b) {
                var bb = new Browser.BlobBuilder;
                bb.append(new Uint8Array(byteArray).buffer);
                b = bb.getBlob()
            }
            var url = Browser.URLObject.createObjectURL(b);
            var img = new Image;
            img.onload = () => {
                assert(img.complete, "Image " + name + " could not be decoded");
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                preloadedImages[name] = canvas;
                Browser.URLObject.revokeObjectURL(url);
                if (onload) onload(byteArray)
            };
            img.onerror = event => {
                out("Image " + url + " could not be decoded");
                if (onerror) onerror()
            };
            img.src = url
        };
        Module["preloadPlugins"].push(imagePlugin);
        var audioPlugin = {};
        audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
            return !Module.noAudioDecoding && name.substr(-4) in {
                ".ogg": 1,
                ".wav": 1,
                ".mp3": 1
            }
        };
        audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
            var done = false;

            function finish(audio) {
                if (done) return;
                done = true;
                preloadedAudios[name] = audio;
                if (onload) onload(byteArray)
            }

            function fail() {
                if (done) return;
                done = true;
                preloadedAudios[name] = new Audio;
                if (onerror) onerror()
            }
            if (Browser.hasBlobConstructor) {
                try {
                    var b = new Blob([byteArray], {
                        type: Browser.getMimetype(name)
                    })
                } catch (e) {
                    return fail()
                }
                var url = Browser.URLObject.createObjectURL(b);
                var audio = new Audio;
                audio.addEventListener("canplaythrough", () => finish(audio), false);
                audio.onerror = function audio_onerror(event) {
                    if (done) return;
                    err("warning: browser could not fully decode audio " + name + ", trying slower base64 approach");

                    function encode64(data) {
                        var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                        var PAD = "=";
                        var ret = "";
                        var leftchar = 0;
                        var leftbits = 0;
                        for (var i = 0; i < data.length; i++) {
                            leftchar = leftchar << 8 | data[i];
                            leftbits += 8;
                            while (leftbits >= 6) {
                                var curr = leftchar >> leftbits - 6 & 63;
                                leftbits -= 6;
                                ret += BASE[curr]
                            }
                        }
                        if (leftbits == 2) {
                            ret += BASE[(leftchar & 3) << 4];
                            ret += PAD + PAD
                        } else if (leftbits == 4) {
                            ret += BASE[(leftchar & 15) << 2];
                            ret += PAD
                        }
                        return ret
                    }
                    audio.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);
                    finish(audio)
                };
                audio.src = url;
                safeSetTimeout(function () {
                    finish(audio)
                }, 1e4)
            } else {
                return fail()
            }
        };
        Module["preloadPlugins"].push(audioPlugin);

        function pointerLockChange() {
            Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"]
        }
        var canvas = Module["canvas"];
        if (canvas) {
            canvas.requestPointerLock = canvas["requestPointerLock"] || canvas["mozRequestPointerLock"] || canvas["webkitRequestPointerLock"] || canvas["msRequestPointerLock"] || (() => {});
            canvas.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || (() => {});
            canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
            document.addEventListener("pointerlockchange", pointerLockChange, false);
            document.addEventListener("mozpointerlockchange", pointerLockChange, false);
            document.addEventListener("webkitpointerlockchange", pointerLockChange, false);
            document.addEventListener("mspointerlockchange", pointerLockChange, false);
            if (Module["elementPointerLock"]) {
                canvas.addEventListener("click", ev => {
                    if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
                        Module["canvas"].requestPointerLock();
                        ev.preventDefault()
                    }
                }, false)
            }
        }
    },
    handledByPreloadPlugin: function (byteArray, fullname, finish, onerror) {
        Browser.init();
        var handled = false;
        Module["preloadPlugins"].forEach(function (plugin) {
            if (handled) return;
            if (plugin["canHandle"](fullname)) {
                plugin["handle"](byteArray, fullname, finish, onerror);
                handled = true
            }
        });
        return handled
    },
    createContext: function (canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;
        var ctx;
        var contextHandle;
        if (useWebGL) {
            var contextAttributes = {
                antialias: false,
                alpha: false,
                majorVersion: typeof WebGL2RenderingContext != "undefined" ? 2 : 1
            };
            if (webGLContextAttributes) {
                for (var attribute in webGLContextAttributes) {
                    contextAttributes[attribute] = webGLContextAttributes[attribute]
                }
            }
            if (typeof GL != "undefined") {
                contextHandle = GL.createContext(canvas, contextAttributes);
                if (contextHandle) {
                    ctx = GL.getContext(contextHandle).GLctx
                }
            }
        } else {
            ctx = canvas.getContext("2d")
        }
        if (!ctx) return null;
        if (setInModule) {
            if (!useWebGL) assert(typeof GLctx == "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
            Module.ctx = ctx;
            if (useWebGL) GL.makeContextCurrent(contextHandle);
            Module.useWebGL = useWebGL;
            Browser.moduleContextCreatedCallbacks.forEach(function (callback) {
                callback()
            });
            Browser.init()
        }
        return ctx
    },
    destroyContext: function (canvas, useWebGL, setInModule) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function (lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer == "undefined") Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas == "undefined") Browser.resizeCanvas = false;
        var canvas = Module["canvas"];

        function fullscreenChange() {
            Browser.isFullscreen = false;
            var canvasContainer = canvas.parentNode;
            if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer) {
                canvas.exitFullscreen = Browser.exitFullscreen;
                if (Browser.lockPointer) canvas.requestPointerLock();
                Browser.isFullscreen = true;
                if (Browser.resizeCanvas) {
                    Browser.setFullscreenCanvasSize()
                } else {
                    Browser.updateCanvasDimensions(canvas)
                }
            } else {
                canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
                canvasContainer.parentNode.removeChild(canvasContainer);
                if (Browser.resizeCanvas) {
                    Browser.setWindowedCanvasSize()
                } else {
                    Browser.updateCanvasDimensions(canvas)
                }
            }
            if (Module["onFullScreen"]) Module["onFullScreen"](Browser.isFullscreen);
            if (Module["onFullscreen"]) Module["onFullscreen"](Browser.isFullscreen)
        }
        if (!Browser.fullscreenHandlersInstalled) {
            Browser.fullscreenHandlersInstalled = true;
            document.addEventListener("fullscreenchange", fullscreenChange, false);
            document.addEventListener("mozfullscreenchange", fullscreenChange, false);
            document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
            document.addEventListener("MSFullscreenChange", fullscreenChange, false)
        }
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
        canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? () => canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]) : null) || (canvasContainer["webkitRequestFullScreen"] ? () => canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]) : null);
        canvasContainer.requestFullscreen()
    },
    exitFullscreen: function () {
        if (!Browser.isFullscreen) {
            return false
        }
        var CFS = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || function () {};
        CFS.apply(document, []);
        return true
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function (func) {
        var now = Date.now();
        if (Browser.nextRAF === 0) {
            Browser.nextRAF = now + 1e3 / 60
        } else {
            while (now + 2 >= Browser.nextRAF) {
                Browser.nextRAF += 1e3 / 60
            }
        }
        var delay = Math.max(Browser.nextRAF - now, 0);
        setTimeout(func, delay)
    },
    requestAnimationFrame: function (func) {
        if (typeof requestAnimationFrame == "function") {
            requestAnimationFrame(func);
            return
        }
        var RAF = Browser.fakeRequestAnimationFrame;
        RAF(func)
    },
    safeSetTimeout: function (func, timeout) {
        return safeSetTimeout(func, timeout)
    },
    safeRequestAnimationFrame: function (func) {
        return Browser.requestAnimationFrame(function () {
            callUserCallback(func)
        })
    },
    getMimetype: function (name) {
        return {
            "jpg": "image/jpeg",
            "jpeg": "image/jpeg",
            "png": "image/png",
            "bmp": "image/bmp",
            "ogg": "audio/ogg",
            "wav": "audio/wav",
            "mp3": "audio/mpeg"
        } [name.substr(name.lastIndexOf(".") + 1)]
    },
    getUserMedia: function (func) {
        if (!window.getUserMedia) {
            window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"]
        }
        window.getUserMedia(func)
    },
    getMovementX: function (event) {
        return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0
    },
    getMovementY: function (event) {
        return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0
    },
    getMouseWheelDelta: function (event) {
        var delta = 0;
        switch (event.type) {
            case "DOMMouseScroll":
                delta = event.detail / 3;
                break;
            case "mousewheel":
                delta = event.wheelDelta / 120;
                break;
            case "wheel":
                delta = event.deltaY;
                switch (event.deltaMode) {
                    case 0:
                        delta /= 100;
                        break;
                    case 1:
                        delta /= 3;
                        break;
                    case 2:
                        delta *= 80;
                        break;
                    default:
                        throw "unrecognized mouse wheel delta mode: " + event.deltaMode
                }
                break;
            default:
                throw "unrecognized mouse wheel event: " + event.type
        }
        return delta
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function (event) {
        if (Browser.pointerLock) {
            if (event.type != "mousemove" && "mozMovementX" in event) {
                Browser.mouseMovementX = Browser.mouseMovementY = 0
            } else {
                Browser.mouseMovementX = Browser.getMovementX(event);
                Browser.mouseMovementY = Browser.getMovementY(event)
            }
            if (typeof SDL != "undefined") {
                Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
                Browser.mouseY = SDL.mouseY + Browser.mouseMovementY
            } else {
                Browser.mouseX += Browser.mouseMovementX;
                Browser.mouseY += Browser.mouseMovementY
            }
        } else {
            var rect = Module["canvas"].getBoundingClientRect();
            var cw = Module["canvas"].width;
            var ch = Module["canvas"].height;
            var scrollX = typeof window.scrollX != "undefined" ? window.scrollX : window.pageXOffset;
            var scrollY = typeof window.scrollY != "undefined" ? window.scrollY : window.pageYOffset;
            if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
                var touch = event.touch;
                if (touch === undefined) {
                    return
                }
                var adjustedX = touch.pageX - (scrollX + rect.left);
                var adjustedY = touch.pageY - (scrollY + rect.top);
                adjustedX = adjustedX * (cw / rect.width);
                adjustedY = adjustedY * (ch / rect.height);
                var coords = {
                    x: adjustedX,
                    y: adjustedY
                };
                if (event.type === "touchstart") {
                    Browser.lastTouches[touch.identifier] = coords;
                    Browser.touches[touch.identifier] = coords
                } else if (event.type === "touchend" || event.type === "touchmove") {
                    var last = Browser.touches[touch.identifier];
                    if (!last) last = coords;
                    Browser.lastTouches[touch.identifier] = last;
                    Browser.touches[touch.identifier] = coords
                }
                return
            }
            var x = event.pageX - (scrollX + rect.left);
            var y = event.pageY - (scrollY + rect.top);
            x = x * (cw / rect.width);
            y = y * (ch / rect.height);
            Browser.mouseMovementX = x - Browser.mouseX;
            Browser.mouseMovementY = y - Browser.mouseY;
            Browser.mouseX = x;
            Browser.mouseY = y
        }
    },
    resizeListeners: [],
    updateResizeListeners: function () {
        var canvas = Module["canvas"];
        Browser.resizeListeners.forEach(function (listener) {
            listener(canvas.width, canvas.height)
        })
    },
    setCanvasSize: function (width, height, noUpdates) {
        var canvas = Module["canvas"];
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners()
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function () {
        if (typeof SDL != "undefined") {
            var flags = HEAPU32[SDL.screen >> 2];
            flags = flags | 8388608;
            HEAP32[SDL.screen >> 2] = flags
        }
        Browser.updateCanvasDimensions(Module["canvas"]);
        Browser.updateResizeListeners()
    },
    setWindowedCanvasSize: function () {
        if (typeof SDL != "undefined") {
            var flags = HEAPU32[SDL.screen >> 2];
            flags = flags & ~8388608;
            HEAP32[SDL.screen >> 2] = flags
        }
        Browser.updateCanvasDimensions(Module["canvas"]);
        Browser.updateResizeListeners()
    },
    updateCanvasDimensions: function (canvas, wNative, hNative) {
        if (wNative && hNative) {
            canvas.widthNative = wNative;
            canvas.heightNative = hNative
        } else {
            wNative = canvas.widthNative;
            hNative = canvas.heightNative
        }
        var w = wNative;
        var h = hNative;
        if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
            if (w / h < Module["forcedAspectRatio"]) {
                w = Math.round(h * Module["forcedAspectRatio"])
            } else {
                h = Math.round(w / Module["forcedAspectRatio"])
            }
        }
        if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
            var factor = Math.min(screen.width / w, screen.height / h);
            w = Math.round(w * factor);
            h = Math.round(h * factor)
        }
        if (Browser.resizeCanvas) {
            if (canvas.width != w) canvas.width = w;
            if (canvas.height != h) canvas.height = h;
            if (typeof canvas.style != "undefined") {
                canvas.style.removeProperty("width");
                canvas.style.removeProperty("height")
            }
        } else {
            if (canvas.width != wNative) canvas.width = wNative;
            if (canvas.height != hNative) canvas.height = hNative;
            if (typeof canvas.style != "undefined") {
                if (w != wNative || h != hNative) {
                    canvas.style.setProperty("width", w + "px", "important");
                    canvas.style.setProperty("height", h + "px", "important")
                } else {
                    canvas.style.removeProperty("width");
                    canvas.style.removeProperty("height")
                }
            }
        }
    }
};
var EGL = {
    errorCode: 12288,
    defaultDisplayInitialized: false,
    currentContext: 0,
    currentReadSurface: 0,
    currentDrawSurface: 0,
    contextAttributes: {
        alpha: false,
        depth: false,
        stencil: false,
        antialias: false
    },
    stringCache: {},
    setErrorCode: function (code) {
        EGL.errorCode = code
    },
    chooseConfig: function (display, attribList, config, config_size, numConfigs) {
        if (display != 62e3) {
            EGL.setErrorCode(12296);
            return 0
        }
        if (attribList) {
            for (;;) {
                var param = HEAP32[attribList >> 2];
                if (param == 12321) {
                    var alphaSize = HEAP32[attribList + 4 >> 2];
                    EGL.contextAttributes.alpha = alphaSize > 0
                } else if (param == 12325) {
                    var depthSize = HEAP32[attribList + 4 >> 2];
                    EGL.contextAttributes.depth = depthSize > 0
                } else if (param == 12326) {
                    var stencilSize = HEAP32[attribList + 4 >> 2];
                    EGL.contextAttributes.stencil = stencilSize > 0
                } else if (param == 12337) {
                    var samples = HEAP32[attribList + 4 >> 2];
                    EGL.contextAttributes.antialias = samples > 0
                } else if (param == 12338) {
                    var samples = HEAP32[attribList + 4 >> 2];
                    EGL.contextAttributes.antialias = samples == 1
                } else if (param == 12544) {
                    var requestedPriority = HEAP32[attribList + 4 >> 2];
                    EGL.contextAttributes.lowLatency = requestedPriority != 12547
                } else if (param == 12344) {
                    break
                }
                attribList += 8
            }
        }
        if ((!config || !config_size) && !numConfigs) {
            EGL.setErrorCode(12300);
            return 0
        }
        if (numConfigs) {
            HEAP32[numConfigs >> 2] = 1
        }
        if (config && config_size > 0) {
            HEAP32[config >> 2] = 62002
        }
        EGL.setErrorCode(12288);
        return 1
    }
};

function _eglBindAPI(api) {
    if (api == 12448) {
        EGL.setErrorCode(12288);
        return 1
    }
    EGL.setErrorCode(12300);
    return 0
}

function _eglChooseConfig(display, attrib_list, configs, config_size, numConfigs) {
    return EGL.chooseConfig(display, attrib_list, configs, config_size, numConfigs)
}

function __webgl_enable_ANGLE_instanced_arrays(ctx) {
    var ext = ctx.getExtension("ANGLE_instanced_arrays");
    if (ext) {
        ctx["vertexAttribDivisor"] = function (index, divisor) {
            ext["vertexAttribDivisorANGLE"](index, divisor)
        };
        ctx["drawArraysInstanced"] = function (mode, first, count, primcount) {
            ext["drawArraysInstancedANGLE"](mode, first, count, primcount)
        };
        ctx["drawElementsInstanced"] = function (mode, count, type, indices, primcount) {
            ext["drawElementsInstancedANGLE"](mode, count, type, indices, primcount)
        };
        return 1
    }
}

function __webgl_enable_OES_vertex_array_object(ctx) {
    var ext = ctx.getExtension("OES_vertex_array_object");
    if (ext) {
        ctx["createVertexArray"] = function () {
            return ext["createVertexArrayOES"]()
        };
        ctx["deleteVertexArray"] = function (vao) {
            ext["deleteVertexArrayOES"](vao)
        };
        ctx["bindVertexArray"] = function (vao) {
            ext["bindVertexArrayOES"](vao)
        };
        ctx["isVertexArray"] = function (vao) {
            return ext["isVertexArrayOES"](vao)
        };
        return 1
    }
}

function __webgl_enable_WEBGL_draw_buffers(ctx) {
    var ext = ctx.getExtension("WEBGL_draw_buffers");
    if (ext) {
        ctx["drawBuffers"] = function (n, bufs) {
            ext["drawBuffersWEBGL"](n, bufs)
        };
        return 1
    }
}

function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx) {
    return !!(ctx.dibvbi = ctx.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"))
}

function __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(ctx) {
    return !!(ctx.mdibvbi = ctx.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"))
}

function __webgl_enable_WEBGL_multi_draw(ctx) {
    return !!(ctx.multiDrawWebgl = ctx.getExtension("WEBGL_multi_draw"))
}
var GL = {
    counter: 1,
    buffers: [],
    programs: [],
    framebuffers: [],
    renderbuffers: [],
    textures: [],
    shaders: [],
    vaos: [],
    contexts: [],
    offscreenCanvases: {},
    queries: [],
    samplers: [],
    transformFeedbacks: [],
    syncs: [],
    byteSizeByTypeRoot: 5120,
    byteSizeByType: [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8],
    stringCache: {},
    stringiCache: {},
    unpackAlignment: 4,
    recordError: function recordError(errorCode) {
        if (!GL.lastError) {
            GL.lastError = errorCode
        }
    },
    getNewId: function (table) {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
            table[i] = null
        }
        return ret
    },
    MAX_TEMP_BUFFER_SIZE: 2097152,
    numTempVertexBuffersPerSize: 64,
    log2ceilLookup: function (i) {
        return 32 - Math.clz32(i === 0 ? 0 : i - 1)
    },
    generateTempBuffers: function (quads, context) {
        var largestIndex = GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);
        context.tempVertexBufferCounters1 = [];
        context.tempVertexBufferCounters2 = [];
        context.tempVertexBufferCounters1.length = context.tempVertexBufferCounters2.length = largestIndex + 1;
        context.tempVertexBuffers1 = [];
        context.tempVertexBuffers2 = [];
        context.tempVertexBuffers1.length = context.tempVertexBuffers2.length = largestIndex + 1;
        context.tempIndexBuffers = [];
        context.tempIndexBuffers.length = largestIndex + 1;
        for (var i = 0; i <= largestIndex; ++i) {
            context.tempIndexBuffers[i] = null;
            context.tempVertexBufferCounters1[i] = context.tempVertexBufferCounters2[i] = 0;
            var ringbufferLength = GL.numTempVertexBuffersPerSize;
            context.tempVertexBuffers1[i] = [];
            context.tempVertexBuffers2[i] = [];
            var ringbuffer1 = context.tempVertexBuffers1[i];
            var ringbuffer2 = context.tempVertexBuffers2[i];
            ringbuffer1.length = ringbuffer2.length = ringbufferLength;
            for (var j = 0; j < ringbufferLength; ++j) {
                ringbuffer1[j] = ringbuffer2[j] = null
            }
        }
        if (quads) {
            context.tempQuadIndexBuffer = GLctx.createBuffer();
            context.GLctx.bindBuffer(34963, context.tempQuadIndexBuffer);
            var numIndexes = GL.MAX_TEMP_BUFFER_SIZE >> 1;
            var quadIndexes = new Uint16Array(numIndexes);
            var i = 0,
                v = 0;
            while (1) {
                quadIndexes[i++] = v;
                if (i >= numIndexes) break;
                quadIndexes[i++] = v + 1;
                if (i >= numIndexes) break;
                quadIndexes[i++] = v + 2;
                if (i >= numIndexes) break;
                quadIndexes[i++] = v;
                if (i >= numIndexes) break;
                quadIndexes[i++] = v + 2;
                if (i >= numIndexes) break;
                quadIndexes[i++] = v + 3;
                if (i >= numIndexes) break;
                v += 4
            }
            context.GLctx.bufferData(34963, quadIndexes, 35044);
            context.GLctx.bindBuffer(34963, null)
        }
    },
    getTempVertexBuffer: function getTempVertexBuffer(sizeBytes) {
        var idx = GL.log2ceilLookup(sizeBytes);
        var ringbuffer = GL.currentContext.tempVertexBuffers1[idx];
        var nextFreeBufferIndex = GL.currentContext.tempVertexBufferCounters1[idx];
        GL.currentContext.tempVertexBufferCounters1[idx] = GL.currentContext.tempVertexBufferCounters1[idx] + 1 & GL.numTempVertexBuffersPerSize - 1;
        var vbo = ringbuffer[nextFreeBufferIndex];
        if (vbo) {
            return vbo
        }
        var prevVBO = GLctx.getParameter(34964);
        ringbuffer[nextFreeBufferIndex] = GLctx.createBuffer();
        GLctx.bindBuffer(34962, ringbuffer[nextFreeBufferIndex]);
        GLctx.bufferData(34962, 1 << idx, 35048);
        GLctx.bindBuffer(34962, prevVBO);
        return ringbuffer[nextFreeBufferIndex]
    },
    getTempIndexBuffer: function getTempIndexBuffer(sizeBytes) {
        var idx = GL.log2ceilLookup(sizeBytes);
        var ibo = GL.currentContext.tempIndexBuffers[idx];
        if (ibo) {
            return ibo
        }
        var prevIBO = GLctx.getParameter(34965);
        GL.currentContext.tempIndexBuffers[idx] = GLctx.createBuffer();
        GLctx.bindBuffer(34963, GL.currentContext.tempIndexBuffers[idx]);
        GLctx.bufferData(34963, 1 << idx, 35048);
        GLctx.bindBuffer(34963, prevIBO);
        return GL.currentContext.tempIndexBuffers[idx]
    },
    newRenderingFrameStarted: function newRenderingFrameStarted() {
        if (!GL.currentContext) {
            return
        }
        var vb = GL.currentContext.tempVertexBuffers1;
        GL.currentContext.tempVertexBuffers1 = GL.currentContext.tempVertexBuffers2;
        GL.currentContext.tempVertexBuffers2 = vb;
        vb = GL.currentContext.tempVertexBufferCounters1;
        GL.currentContext.tempVertexBufferCounters1 = GL.currentContext.tempVertexBufferCounters2;
        GL.currentContext.tempVertexBufferCounters2 = vb;
        var largestIndex = GL.log2ceilLookup(GL.MAX_TEMP_BUFFER_SIZE);
        for (var i = 0; i <= largestIndex; ++i) {
            GL.currentContext.tempVertexBufferCounters1[i] = 0
        }
    },
    getSource: function (shader, count, string, length) {
        var source = "";
        for (var i = 0; i < count; ++i) {
            var len = length ? HEAP32[length + i * 4 >> 2] : -1;
            source += UTF8ToString(HEAP32[string + i * 4 >> 2], len < 0 ? undefined : len)
        }
        return source
    },
    calcBufLength: function calcBufLength(size, type, stride, count) {
        if (stride > 0) {
            return count * stride
        }
        var typeSize = GL.byteSizeByType[type - GL.byteSizeByTypeRoot];
        return size * typeSize * count
    },
    usedTempBuffers: [],
    preDrawHandleClientVertexAttribBindings: function preDrawHandleClientVertexAttribBindings(count) {
        GL.resetBufferBinding = false;
        for (var i = 0; i < GL.currentContext.maxVertexAttribs; ++i) {
            var cb = GL.currentContext.clientBuffers[i];
            if (!cb.clientside || !cb.enabled) continue;
            GL.resetBufferBinding = true;
            var size = GL.calcBufLength(cb.size, cb.type, cb.stride, count);
            var buf = GL.getTempVertexBuffer(size);
            GLctx.bindBuffer(34962, buf);
            GLctx.bufferSubData(34962, 0, HEAPU8.subarray(cb.ptr, cb.ptr + size));
            cb.vertexAttribPointerAdaptor.call(GLctx, i, cb.size, cb.type, cb.normalized, cb.stride, 0)
        }
    },
    postDrawHandleClientVertexAttribBindings: function postDrawHandleClientVertexAttribBindings() {
        if (GL.resetBufferBinding) {
            GLctx.bindBuffer(34962, GL.buffers[GLctx.currentArrayBufferBinding])
        }
    },
    createContext: function (canvas, webGLContextAttributes) {
        if (!canvas.getContextSafariWebGL2Fixed) {
            canvas.getContextSafariWebGL2Fixed = canvas.getContext;

            function fixedGetContext(ver, attrs) {
                var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
                return ver == "webgl" == gl instanceof WebGLRenderingContext ? gl : null
            }
            canvas.getContext = fixedGetContext
        }
        var ctx = webGLContextAttributes.majorVersion > 1 ? canvas.getContext("webgl2", webGLContextAttributes) : canvas.getContext("webgl", webGLContextAttributes);
        if (!ctx) return 0;
        var handle = GL.registerContext(ctx, webGLContextAttributes);
        return handle
    },
    registerContext: function (ctx, webGLContextAttributes) {
        var handle = GL.getNewId(GL.contexts);
        var context = {
            handle: handle,
            attributes: webGLContextAttributes,
            version: webGLContextAttributes.majorVersion,
            GLctx: ctx
        };
        if (ctx.canvas) ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault == "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
            GL.initExtensions(context)
        }
        context.maxVertexAttribs = context.GLctx.getParameter(34921);
        context.clientBuffers = [];
        for (var i = 0; i < context.maxVertexAttribs; i++) {
            context.clientBuffers[i] = {
                enabled: false,
                clientside: false,
                size: 0,
                type: 0,
                normalized: 0,
                stride: 0,
                ptr: 0,
                vertexAttribPointerAdaptor: null
            }
        }
        GL.generateTempBuffers(false, context);
        return handle
    },
    makeContextCurrent: function (contextHandle) {
        GL.currentContext = GL.contexts[contextHandle];
        Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx;
        return !(contextHandle && !GLctx)
    },
    getContext: function (contextHandle) {
        return GL.contexts[contextHandle]
    },
    deleteContext: function (contextHandle) {
        if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
        if (typeof JSEvents == "object") JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
        if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
        GL.contexts[contextHandle] = null
    },
    initExtensions: function (context) {
        if (!context) context = GL.currentContext;
        if (context.initExtensionsDone) return;
        context.initExtensionsDone = true;
        var GLctx = context.GLctx;
        __webgl_enable_ANGLE_instanced_arrays(GLctx);
        __webgl_enable_OES_vertex_array_object(GLctx);
        __webgl_enable_WEBGL_draw_buffers(GLctx);
        __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
        __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
        if (context.version >= 2) {
            GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2")
        }
        if (context.version < 2 || !GLctx.disjointTimerQueryExt) {
            GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query")
        }
        __webgl_enable_WEBGL_multi_draw(GLctx);
        var exts = GLctx.getSupportedExtensions() || [];
        exts.forEach(function (ext) {
            if (!ext.includes("lose_context") && !ext.includes("debug")) {
                GLctx.getExtension(ext)
            }
        })
    }
};

function _eglCreateContext(display, config, hmm, contextAttribs) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    var glesContextVersion = 1;
    for (;;) {
        var param = HEAP32[contextAttribs >> 2];
        if (param == 12440) {
            glesContextVersion = HEAP32[contextAttribs + 4 >> 2]
        } else if (param == 12344) {
            break
        } else {
            EGL.setErrorCode(12292);
            return 0
        }
        contextAttribs += 8
    }
    if (glesContextVersion < 2 || glesContextVersion > 3) {
        EGL.setErrorCode(12293);
        return 0
    }
    EGL.contextAttributes.majorVersion = glesContextVersion - 1;
    EGL.contextAttributes.minorVersion = 0;
    EGL.context = GL.createContext(Module["canvas"], EGL.contextAttributes);
    if (EGL.context != 0) {
        EGL.setErrorCode(12288);
        GL.makeContextCurrent(EGL.context);
        Module.useWebGL = true;
        Browser.moduleContextCreatedCallbacks.forEach(function (callback) {
            callback()
        });
        GL.makeContextCurrent(null);
        return 62004
    } else {
        EGL.setErrorCode(12297);
        return 0
    }
}

function _eglCreateWindowSurface(display, config, win, attrib_list) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (config != 62002) {
        EGL.setErrorCode(12293);
        return 0
    }
    EGL.setErrorCode(12288);
    return 62006
}

function _eglDestroyContext(display, context) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (context != 62004) {
        EGL.setErrorCode(12294);
        return 0
    }
    GL.deleteContext(EGL.context);
    EGL.setErrorCode(12288);
    if (EGL.currentContext == context) {
        EGL.currentContext = 0
    }
    return 1
}

function _eglDestroySurface(display, surface) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (surface != 62006) {
        EGL.setErrorCode(12301);
        return 1
    }
    if (EGL.currentReadSurface == surface) {
        EGL.currentReadSurface = 0
    }
    if (EGL.currentDrawSurface == surface) {
        EGL.currentDrawSurface = 0
    }
    EGL.setErrorCode(12288);
    return 1
}

function _eglGetConfigAttrib(display, config, attribute, value) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (config != 62002) {
        EGL.setErrorCode(12293);
        return 0
    }
    if (!value) {
        EGL.setErrorCode(12300);
        return 0
    }
    EGL.setErrorCode(12288);
    switch (attribute) {
        case 12320:
            HEAP32[value >> 2] = EGL.contextAttributes.alpha ? 32 : 24;
            return 1;
        case 12321:
            HEAP32[value >> 2] = EGL.contextAttributes.alpha ? 8 : 0;
            return 1;
        case 12322:
            HEAP32[value >> 2] = 8;
            return 1;
        case 12323:
            HEAP32[value >> 2] = 8;
            return 1;
        case 12324:
            HEAP32[value >> 2] = 8;
            return 1;
        case 12325:
            HEAP32[value >> 2] = EGL.contextAttributes.depth ? 24 : 0;
            return 1;
        case 12326:
            HEAP32[value >> 2] = EGL.contextAttributes.stencil ? 8 : 0;
            return 1;
        case 12327:
            HEAP32[value >> 2] = 12344;
            return 1;
        case 12328:
            HEAP32[value >> 2] = 62002;
            return 1;
        case 12329:
            HEAP32[value >> 2] = 0;
            return 1;
        case 12330:
            HEAP32[value >> 2] = 4096;
            return 1;
        case 12331:
            HEAP32[value >> 2] = 16777216;
            return 1;
        case 12332:
            HEAP32[value >> 2] = 4096;
            return 1;
        case 12333:
            HEAP32[value >> 2] = 0;
            return 1;
        case 12334:
            HEAP32[value >> 2] = 0;
            return 1;
        case 12335:
            HEAP32[value >> 2] = 12344;
            return 1;
        case 12337:
            HEAP32[value >> 2] = EGL.contextAttributes.antialias ? 4 : 0;
            return 1;
        case 12338:
            HEAP32[value >> 2] = EGL.contextAttributes.antialias ? 1 : 0;
            return 1;
        case 12339:
            HEAP32[value >> 2] = 4;
            return 1;
        case 12340:
            HEAP32[value >> 2] = 12344;
            return 1;
        case 12341:
        case 12342:
        case 12343:
            HEAP32[value >> 2] = -1;
            return 1;
        case 12345:
        case 12346:
            HEAP32[value >> 2] = 0;
            return 1;
        case 12347:
            HEAP32[value >> 2] = 0;
            return 1;
        case 12348:
            HEAP32[value >> 2] = 1;
            return 1;
        case 12349:
        case 12350:
            HEAP32[value >> 2] = 0;
            return 1;
        case 12351:
            HEAP32[value >> 2] = 12430;
            return 1;
        case 12352:
            HEAP32[value >> 2] = 4;
            return 1;
        case 12354:
            HEAP32[value >> 2] = 0;
            return 1;
        default:
            EGL.setErrorCode(12292);
            return 0
    }
}

function _eglGetDisplay(nativeDisplayType) {
    EGL.setErrorCode(12288);
    return 62e3
}

function _eglGetError() {
    return EGL.errorCode
}

function _eglInitialize(display, majorVersion, minorVersion) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (majorVersion) {
        HEAP32[majorVersion >> 2] = 1
    }
    if (minorVersion) {
        HEAP32[minorVersion >> 2] = 4
    }
    EGL.defaultDisplayInitialized = true;
    EGL.setErrorCode(12288);
    return 1
}

function _eglMakeCurrent(display, draw, read, context) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (context != 0 && context != 62004) {
        EGL.setErrorCode(12294);
        return 0
    }
    if (read != 0 && read != 62006 || draw != 0 && draw != 62006) {
        EGL.setErrorCode(12301);
        return 0
    }
    GL.makeContextCurrent(context ? EGL.context : null);
    EGL.currentContext = context;
    EGL.currentDrawSurface = draw;
    EGL.currentReadSurface = read;
    EGL.setErrorCode(12288);
    return 1
}

function _eglQueryString(display, name) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    EGL.setErrorCode(12288);
    if (EGL.stringCache[name]) return EGL.stringCache[name];
    var ret;
    switch (name) {
        case 12371:
            ret = allocateUTF8("Emscripten");
            break;
        case 12372:
            ret = allocateUTF8("1.4 Emscripten EGL");
            break;
        case 12373:
            ret = allocateUTF8("");
            break;
        case 12429:
            ret = allocateUTF8("OpenGL_ES");
            break;
        default:
            EGL.setErrorCode(12300);
            return 0
    }
    EGL.stringCache[name] = ret;
    return ret
}

function _eglSwapBuffers() {
    if (!EGL.defaultDisplayInitialized) {
        EGL.setErrorCode(12289)
    } else if (!Module.ctx) {
        EGL.setErrorCode(12290)
    } else if (Module.ctx.isContextLost()) {
        EGL.setErrorCode(12302)
    } else {
        EGL.setErrorCode(12288);
        return 1
    }
    return 0
}

function _eglSwapInterval(display, interval) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (interval == 0) _emscripten_set_main_loop_timing(0, 0);
    else _emscripten_set_main_loop_timing(1, interval);
    EGL.setErrorCode(12288);
    return 1
}

function _eglTerminate(display) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    EGL.currentContext = 0;
    EGL.currentReadSurface = 0;
    EGL.currentDrawSurface = 0;
    EGL.defaultDisplayInitialized = false;
    EGL.setErrorCode(12288);
    return 1
}

function _eglWaitClient() {
    EGL.setErrorCode(12288);
    return 1
}
var _eglWaitGL = _eglWaitClient;

function _eglWaitNative(nativeEngineId) {
    EGL.setErrorCode(12288);
    return 1
}
var readAsmConstArgsArray = [];

function readAsmConstArgs(sigPtr, buf) {
    readAsmConstArgsArray.length = 0;
    var ch;
    buf >>= 2;
    while (ch = HEAPU8[sigPtr++]) {
        buf += ch != 105 & buf;
        readAsmConstArgsArray.push(ch == 105 ? HEAP32[buf] : HEAPF64[buf++ >> 1]);
        ++buf
    }
    return readAsmConstArgsArray
}

function _emscripten_asm_const_int(code, sigPtr, argbuf) {
    var args = readAsmConstArgs(sigPtr, argbuf);
    return ASM_CONSTS[code].apply(null, args)
}

function mainThreadEM_ASM(code, sigPtr, argbuf, sync) {
    var args = readAsmConstArgs(sigPtr, argbuf);
    return ASM_CONSTS[code].apply(null, args)
}

function _emscripten_asm_const_int_sync_on_main_thread(code, sigPtr, argbuf) {
    return mainThreadEM_ASM(code, sigPtr, argbuf, 1)
}

function _emscripten_async_call(func, arg, millis) {
    function wrapper() {
        (function (a1) {
            dynCall_vi.apply(null, [func, a1])
        })(arg)
    }
    if (millis >= 0 || ENVIRONMENT_IS_NODE) {
        safeSetTimeout(wrapper, millis)
    } else {
        Browser.safeRequestAnimationFrame(wrapper)
    }
}

function _emscripten_async_wget_data(url, arg, onload, onerror) {
    asyncLoad(UTF8ToString(url), function (byteArray) {
        callUserCallback(function () {
            var buffer = _malloc(byteArray.length);
            HEAPU8.set(byteArray, buffer);
            (function (a1, a2, a3) {
                dynCall_viii.apply(null, [onload, a1, a2, a3])
            })(arg, buffer, byteArray.length);
            _free(buffer)
        })
    }, function () {
        if (onerror) {
            callUserCallback(function () {
                (function (a1) {
                    dynCall_vi.apply(null, [onerror, a1])
                })(arg)
            })
        }
    }, true)
}

function _emscripten_cancel_main_loop() {
    Browser.mainLoop.pause();
    Browser.mainLoop.func = null
}

function _emscripten_date_now() {
    return Date.now()
}

function _emscripten_debugger() {
    debugger
}

function withStackSave(f) {
    var stack = stackSave();
    var ret = f();
    stackRestore(stack);
    return ret
}
var JSEvents = {
    inEventHandler: 0,
    removeAllEventListeners: function () {
        for (var i = JSEvents.eventHandlers.length - 1; i >= 0; --i) {
            JSEvents._removeHandler(i)
        }
        JSEvents.eventHandlers = [];
        JSEvents.deferredCalls = []
    },
    registerRemoveEventListeners: function () {
        if (!JSEvents.removeEventListenersRegistered) {
            __ATEXIT__.push(JSEvents.removeAllEventListeners);
            JSEvents.removeEventListenersRegistered = true
        }
    },
    deferredCalls: [],
    deferCall: function (targetFunction, precedence, argsList) {
        function arraysHaveEqualContent(arrA, arrB) {
            if (arrA.length != arrB.length) return false;
            for (var i in arrA) {
                if (arrA[i] != arrB[i]) return false
            }
            return true
        }
        for (var i in JSEvents.deferredCalls) {
            var call = JSEvents.deferredCalls[i];
            if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
                return
            }
        }
        JSEvents.deferredCalls.push({
            targetFunction: targetFunction,
            precedence: precedence,
            argsList: argsList
        });
        JSEvents.deferredCalls.sort(function (x, y) {
            return x.precedence < y.precedence
        })
    },
    removeDeferredCalls: function (targetFunction) {
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
                JSEvents.deferredCalls.splice(i, 1);
                --i
            }
        }
    },
    canPerformEventHandlerRequests: function () {
        return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls
    },
    runDeferredCalls: function () {
        if (!JSEvents.canPerformEventHandlerRequests()) {
            return
        }
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            var call = JSEvents.deferredCalls[i];
            JSEvents.deferredCalls.splice(i, 1);
            --i;
            call.targetFunction.apply(null, call.argsList)
        }
    },
    eventHandlers: [],
    removeAllHandlersOnTarget: function (target, eventTypeString) {
        for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
                JSEvents._removeHandler(i--)
            }
        }
    },
    _removeHandler: function (i) {
        var h = JSEvents.eventHandlers[i];
        h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
        JSEvents.eventHandlers.splice(i, 1)
    },
    registerOrRemoveHandler: function (eventHandler) {
        var jsEventHandler = function jsEventHandler(event) {
            ++JSEvents.inEventHandler;
            JSEvents.currentEventHandler = eventHandler;
            JSEvents.runDeferredCalls();
            eventHandler.handlerFunc(event);
            JSEvents.runDeferredCalls();
            --JSEvents.inEventHandler
        };
        if (eventHandler.callbackfunc) {
            eventHandler.eventListenerFunc = jsEventHandler;
            eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
            JSEvents.eventHandlers.push(eventHandler);
            JSEvents.registerRemoveEventListeners()
        } else {
            for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
                if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
                    JSEvents._removeHandler(i--)
                }
            }
        }
    },
    getNodeNameForTarget: function (target) {
        if (!target) return "";
        if (target == window) return "#window";
        if (target == screen) return "#screen";
        return target && target.nodeName ? target.nodeName : ""
    },
    fullscreenEnabled: function () {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled
    }
};
var currentFullscreenStrategy = {};

function maybeCStringToJsString(cString) {
    return cString > 2 ? UTF8ToString(cString) : cString
}
var specialHTMLTargets = [0, typeof document != "undefined" ? document : 0, typeof window != "undefined" ? window : 0];

function findEventTarget(target) {
    target = maybeCStringToJsString(target);
    var domElement = specialHTMLTargets[target] || (typeof document != "undefined" ? document.querySelector(target) : undefined);
    return domElement
}

function findCanvasEventTarget(target) {
    return findEventTarget(target)
}

function _emscripten_get_canvas_element_size(target, width, height) {
    var canvas = findCanvasEventTarget(target);
    if (!canvas) return -4;
    HEAP32[width >> 2] = canvas.width;
    HEAP32[height >> 2] = canvas.height
}

function getCanvasElementSize(target) {
    return withStackSave(function () {
        var w = stackAlloc(8);
        var h = w + 4;
        var targetInt = stackAlloc(target.id.length + 1);
        stringToUTF8(target.id, targetInt, target.id.length + 1);
        var ret = _emscripten_get_canvas_element_size(targetInt, w, h);
        var size = [HEAP32[w >> 2], HEAP32[h >> 2]];
        return size
    })
}

function _emscripten_set_canvas_element_size(target, width, height) {
    var canvas = findCanvasEventTarget(target);
    if (!canvas) return -4;
    canvas.width = width;
    canvas.height = height;
    return 0
}

function setCanvasElementSize(target, width, height) {
    if (!target.controlTransferredOffscreen) {
        target.width = width;
        target.height = height
    } else {
        withStackSave(function () {
            var targetInt = stackAlloc(target.id.length + 1);
            stringToUTF8(target.id, targetInt, target.id.length + 1);
            _emscripten_set_canvas_element_size(targetInt, width, height)
        })
    }
}

function registerRestoreOldStyle(canvas) {
    var canvasSize = getCanvasElementSize(canvas);
    var oldWidth = canvasSize[0];
    var oldHeight = canvasSize[1];
    var oldCssWidth = canvas.style.width;
    var oldCssHeight = canvas.style.height;
    var oldBackgroundColor = canvas.style.backgroundColor;
    var oldDocumentBackgroundColor = document.body.style.backgroundColor;
    var oldPaddingLeft = canvas.style.paddingLeft;
    var oldPaddingRight = canvas.style.paddingRight;
    var oldPaddingTop = canvas.style.paddingTop;
    var oldPaddingBottom = canvas.style.paddingBottom;
    var oldMarginLeft = canvas.style.marginLeft;
    var oldMarginRight = canvas.style.marginRight;
    var oldMarginTop = canvas.style.marginTop;
    var oldMarginBottom = canvas.style.marginBottom;
    var oldDocumentBodyMargin = document.body.style.margin;
    var oldDocumentOverflow = document.documentElement.style.overflow;
    var oldDocumentScroll = document.body.scroll;
    var oldImageRendering = canvas.style.imageRendering;

    function restoreOldStyle() {
        var fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        if (!fullscreenElement) {
            document.removeEventListener("fullscreenchange", restoreOldStyle);
            document.removeEventListener("webkitfullscreenchange", restoreOldStyle);
            setCanvasElementSize(canvas, oldWidth, oldHeight);
            canvas.style.width = oldCssWidth;
            canvas.style.height = oldCssHeight;
            canvas.style.backgroundColor = oldBackgroundColor;
            if (!oldDocumentBackgroundColor) document.body.style.backgroundColor = "white";
            document.body.style.backgroundColor = oldDocumentBackgroundColor;
            canvas.style.paddingLeft = oldPaddingLeft;
            canvas.style.paddingRight = oldPaddingRight;
            canvas.style.paddingTop = oldPaddingTop;
            canvas.style.paddingBottom = oldPaddingBottom;
            canvas.style.marginLeft = oldMarginLeft;
            canvas.style.marginRight = oldMarginRight;
            canvas.style.marginTop = oldMarginTop;
            canvas.style.marginBottom = oldMarginBottom;
            document.body.style.margin = oldDocumentBodyMargin;
            document.documentElement.style.overflow = oldDocumentOverflow;
            document.body.scroll = oldDocumentScroll;
            canvas.style.imageRendering = oldImageRendering;
            if (canvas.GLctxObject) canvas.GLctxObject.GLctx.viewport(0, 0, oldWidth, oldHeight);
            if (currentFullscreenStrategy.canvasResizedCallback) {
                (function (a1, a2, a3) {
                    return dynCall_iiii.apply(null, [currentFullscreenStrategy.canvasResizedCallback, a1, a2, a3])
                })(37, 0, currentFullscreenStrategy.canvasResizedCallbackUserData)
            }
        }
    }
    document.addEventListener("fullscreenchange", restoreOldStyle);
    document.addEventListener("webkitfullscreenchange", restoreOldStyle);
    return restoreOldStyle
}

function setLetterbox(element, topBottom, leftRight) {
    element.style.paddingLeft = element.style.paddingRight = leftRight + "px";
    element.style.paddingTop = element.style.paddingBottom = topBottom + "px"
}

function getBoundingClientRect(e) {
    return specialHTMLTargets.indexOf(e) < 0 ? e.getBoundingClientRect() : {
        "left": 0,
        "top": 0
    }
}

function JSEvents_resizeCanvasForFullscreen(target, strategy) {
    var restoreOldStyle = registerRestoreOldStyle(target);
    var cssWidth = strategy.softFullscreen ? innerWidth : screen.width;
    var cssHeight = strategy.softFullscreen ? innerHeight : screen.height;
    var rect = getBoundingClientRect(target);
    var windowedCssWidth = rect.width;
    var windowedCssHeight = rect.height;
    var canvasSize = getCanvasElementSize(target);
    var windowedRttWidth = canvasSize[0];
    var windowedRttHeight = canvasSize[1];
    if (strategy.scaleMode == 3) {
        setLetterbox(target, (cssHeight - windowedCssHeight) / 2, (cssWidth - windowedCssWidth) / 2);
        cssWidth = windowedCssWidth;
        cssHeight = windowedCssHeight
    } else if (strategy.scaleMode == 2) {
        if (cssWidth * windowedRttHeight < windowedRttWidth * cssHeight) {
            var desiredCssHeight = windowedRttHeight * cssWidth / windowedRttWidth;
            setLetterbox(target, (cssHeight - desiredCssHeight) / 2, 0);
            cssHeight = desiredCssHeight
        } else {
            var desiredCssWidth = windowedRttWidth * cssHeight / windowedRttHeight;
            setLetterbox(target, 0, (cssWidth - desiredCssWidth) / 2);
            cssWidth = desiredCssWidth
        }
    }
    if (!target.style.backgroundColor) target.style.backgroundColor = "black";
    if (!document.body.style.backgroundColor) document.body.style.backgroundColor = "black";
    target.style.width = cssWidth + "px";
    target.style.height = cssHeight + "px";
    if (strategy.filteringMode == 1) {
        target.style.imageRendering = "optimizeSpeed";
        target.style.imageRendering = "-moz-crisp-edges";
        target.style.imageRendering = "-o-crisp-edges";
        target.style.imageRendering = "-webkit-optimize-contrast";
        target.style.imageRendering = "optimize-contrast";
        target.style.imageRendering = "crisp-edges";
        target.style.imageRendering = "pixelated"
    }
    var dpiScale = strategy.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (strategy.canvasResolutionScaleMode != 0) {
        var newWidth = cssWidth * dpiScale | 0;
        var newHeight = cssHeight * dpiScale | 0;
        setCanvasElementSize(target, newWidth, newHeight);
        if (target.GLctxObject) target.GLctxObject.GLctx.viewport(0, 0, newWidth, newHeight)
    }
    return restoreOldStyle
}

function JSEvents_requestFullscreen(target, strategy) {
    if (strategy.scaleMode != 0 || strategy.canvasResolutionScaleMode != 0) {
        JSEvents_resizeCanvasForFullscreen(target, strategy)
    }
    if (target.requestFullscreen) {
        target.requestFullscreen()
    } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    } else {
        return JSEvents.fullscreenEnabled() ? -3 : -1
    }
    currentFullscreenStrategy = strategy;
    if (strategy.canvasResizedCallback) {
        (function (a1, a2, a3) {
            return dynCall_iiii.apply(null, [strategy.canvasResizedCallback, a1, a2, a3])
        })(37, 0, strategy.canvasResizedCallbackUserData)
    }
    return 0
}

function _emscripten_exit_fullscreen() {
    if (!JSEvents.fullscreenEnabled()) return -1;
    JSEvents.removeDeferredCalls(JSEvents_requestFullscreen);
    var d = specialHTMLTargets[1];
    if (d.exitFullscreen) {
        d.fullscreenElement && d.exitFullscreen()
    } else if (d.webkitExitFullscreen) {
        d.webkitFullscreenElement && d.webkitExitFullscreen()
    } else {
        return -1
    }
    return 0
}

function requestPointerLock(target) {
    if (target.requestPointerLock) {
        target.requestPointerLock()
    } else if (target.msRequestPointerLock) {
        target.msRequestPointerLock()
    } else {
        if (document.body.requestPointerLock || document.body.msRequestPointerLock) {
            return -3
        }
        return -1
    }
    return 0
}

function _emscripten_exit_pointerlock() {
    JSEvents.removeDeferredCalls(requestPointerLock);
    if (document.exitPointerLock) {
        document.exitPointerLock()
    } else if (document.msExitPointerLock) {
        document.msExitPointerLock()
    } else {
        return -1
    }
    return 0
}

function _emscripten_exit_with_live_runtime() {
    throw "unwind"
}

function fillBatteryEventData(eventStruct, e) {
    HEAPF64[eventStruct >> 3] = e.chargingTime;
    HEAPF64[eventStruct + 8 >> 3] = e.dischargingTime;
    HEAPF64[eventStruct + 16 >> 3] = e.level;
    HEAP32[eventStruct + 24 >> 2] = e.charging
}

function battery() {
    return navigator.battery || navigator.mozBattery || navigator.webkitBattery
}

function _emscripten_get_battery_status(batteryState) {
    if (!battery()) return -1;
    fillBatteryEventData(batteryState, battery());
    return 0
}

function traverseStack(args) {
    if (!args || !args.callee || !args.callee.name) {
        return [null, "", ""]
    }
    var funstr = args.callee.toString();
    var funcname = args.callee.name;
    var str = "(";
    var first = true;
    for (var i in args) {
        var a = args[i];
        if (!first) {
            str += ", "
        }
        first = false;
        if (typeof a == "number" || typeof a == "string") {
            str += a
        } else {
            str += "(" + typeof a + ")"
        }
    }
    str += ")";
    var caller = args.callee.caller;
    args = caller ? caller.arguments : [];
    if (first) str = "";
    return [args, funcname, str]
}

function jsStackTrace() {
    var error = new Error;
    if (!error.stack) {
        try {
            throw new Error
        } catch (e) {
            error = e
        }
        if (!error.stack) {
            return "(no stack trace available)"
        }
    }
    return error.stack.toString()
}

function _emscripten_get_callstack_js(flags) {
    var callstack = jsStackTrace();
    var iThisFunc = callstack.lastIndexOf("_emscripten_log");
    var iThisFunc2 = callstack.lastIndexOf("_emscripten_get_callstack");
    var iNextLine = callstack.indexOf("\n", Math.max(iThisFunc, iThisFunc2)) + 1;
    callstack = callstack.slice(iNextLine);
    if (flags & 32) {
        warnOnce("EM_LOG_DEMANGLE is deprecated; ignoring")
    }
    if (flags & 8 && typeof emscripten_source_map == "undefined") {
        warnOnce('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.');
        flags ^= 8;
        flags |= 16
    }
    var stack_args = null;
    if (flags & 128) {
        stack_args = traverseStack(arguments);
        while (stack_args[1].includes("_emscripten_")) stack_args = traverseStack(stack_args[0])
    }
    var lines = callstack.split("\n");
    callstack = "";
    var newFirefoxRe = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var firefoxRe = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var chromeRe = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var l in lines) {
        var line = lines[l];
        var symbolName = "";
        var file = "";
        var lineno = 0;
        var column = 0;
        var parts = chromeRe.exec(line);
        if (parts && parts.length == 5) {
            symbolName = parts[1];
            file = parts[2];
            lineno = parts[3];
            column = parts[4]
        } else {
            parts = newFirefoxRe.exec(line);
            if (!parts) parts = firefoxRe.exec(line);
            if (parts && parts.length >= 4) {
                symbolName = parts[1];
                file = parts[2];
                lineno = parts[3];
                column = parts[4] | 0
            } else {
                callstack += line + "\n";
                continue
            }
        }
        var haveSourceMap = false;
        if (flags & 8) {
            var orig = emscripten_source_map.originalPositionFor({
                line: lineno,
                column: column
            });
            haveSourceMap = orig && orig.source;
            if (haveSourceMap) {
                if (flags & 64) {
                    orig.source = orig.source.substring(orig.source.replace(/\\/g, "/").lastIndexOf("/") + 1)
                }
                callstack += "    at " + symbolName + " (" + orig.source + ":" + orig.line + ":" + orig.column + ")\n"
            }
        }
        if (flags & 16 || !haveSourceMap) {
            if (flags & 64) {
                file = file.substring(file.replace(/\\/g, "/").lastIndexOf("/") + 1)
            }
            callstack += (haveSourceMap ? "     = " + symbolName : "    at " + symbolName) + " (" + file + ":" + lineno + ":" + column + ")\n"
        }
        if (flags & 128 && stack_args[0]) {
            if (stack_args[1] == symbolName && stack_args[2].length > 0) {
                callstack = callstack.replace(/\s+$/, "");
                callstack += " with values: " + stack_args[1] + stack_args[2] + "\n"
            }
            stack_args = traverseStack(stack_args[0])
        }
    }
    callstack = callstack.replace(/\s+$/, "");
    return callstack
}

function _emscripten_get_callstack(flags, str, maxbytes) {
    var callstack = _emscripten_get_callstack_js(flags);
    if (!str || maxbytes <= 0) {
        return lengthBytesUTF8(callstack) + 1
    }
    var bytesWrittenExcludingNull = stringToUTF8(callstack, str, maxbytes);
    return bytesWrittenExcludingNull + 1
}

function _emscripten_get_compiler_setting(name) {
    throw "You must build with -sRETAIN_COMPILER_SETTINGS for getCompilerSetting or emscripten_get_compiler_setting to work"
}

function _emscripten_get_device_pixel_ratio() {
    return typeof devicePixelRatio == "number" && devicePixelRatio || 1
}

function _emscripten_get_element_css_size(target, width, height) {
    target = findEventTarget(target);
    if (!target) return -4;
    var rect = getBoundingClientRect(target);
    HEAPF64[width >> 3] = rect.width;
    HEAPF64[height >> 3] = rect.height;
    return 0
}

function fillGamepadEventData(eventStruct, e) {
    HEAPF64[eventStruct >> 3] = e.timestamp;
    for (var i = 0; i < e.axes.length; ++i) {
        HEAPF64[eventStruct + i * 8 + 16 >> 3] = e.axes[i]
    }
    for (var i = 0; i < e.buttons.length; ++i) {
        if (typeof e.buttons[i] == "object") {
            HEAPF64[eventStruct + i * 8 + 528 >> 3] = e.buttons[i].value
        } else {
            HEAPF64[eventStruct + i * 8 + 528 >> 3] = e.buttons[i]
        }
    }
    for (var i = 0; i < e.buttons.length; ++i) {
        if (typeof e.buttons[i] == "object") {
            HEAP32[eventStruct + i * 4 + 1040 >> 2] = e.buttons[i].pressed
        } else {
            HEAP32[eventStruct + i * 4 + 1040 >> 2] = e.buttons[i] == 1
        }
    }
    HEAP32[eventStruct + 1296 >> 2] = e.connected;
    HEAP32[eventStruct + 1300 >> 2] = e.index;
    HEAP32[eventStruct + 8 >> 2] = e.axes.length;
    HEAP32[eventStruct + 12 >> 2] = e.buttons.length;
    stringToUTF8(e.id, eventStruct + 1304, 64);
    stringToUTF8(e.mapping, eventStruct + 1368, 64)
}

function _emscripten_get_gamepad_status(index, gamepadState) {
    if (index < 0 || index >= JSEvents.lastGamepadState.length) return -5;
    if (!JSEvents.lastGamepadState[index]) return -7;
    fillGamepadEventData(gamepadState, JSEvents.lastGamepadState[index]);
    return 0
}

function getHeapMax() {
    return 2147483648
}

function _emscripten_get_heap_max() {
    return getHeapMax()
}

function _emscripten_get_now_res() {
    if (ENVIRONMENT_IS_NODE) {
        return 1
    } else return 1e3
}

function _emscripten_get_num_gamepads() {
    return JSEvents.lastGamepadState.length
}

function _emscripten_get_preloaded_image_data(path, w, h) {
    if ((path | 0) === path) path = UTF8ToString(path);
    path = PATH_FS.resolve(path);
    var canvas = preloadedImages[path];
    if (canvas) {
        var ctx = canvas.getContext("2d");
        var image = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var buf = _malloc(canvas.width * canvas.height * 4);
        HEAPU8.set(image.data, buf);
        HEAP32[w >> 2] = canvas.width;
        HEAP32[h >> 2] = canvas.height;
        return buf
    }
    return 0
}

function _emscripten_get_preloaded_image_data_from_FILE(file, w, h) {
    var fd = Module["_fileno"](file);
    var stream = FS.getStream(fd);
    if (stream) {
        return _emscripten_get_preloaded_image_data(stream.path, w, h)
    }
    return 0
}

function _emscripten_get_screen_size(width, height) {
    HEAP32[width >> 2] = screen.width;
    HEAP32[height >> 2] = screen.height
}

function _emscripten_glActiveTexture(x0) {
    GLctx["activeTexture"](x0)
}

function _emscripten_glAttachShader(program, shader) {
    GLctx.attachShader(GL.programs[program], GL.shaders[shader])
}

function _emscripten_glBeginQuery(target, id) {
    GLctx["beginQuery"](target, GL.queries[id])
}

function _emscripten_glBeginQueryEXT(target, id) {
    GLctx.disjointTimerQueryExt["beginQueryEXT"](target, GL.queries[id])
}

function _emscripten_glBeginTransformFeedback(x0) {
    GLctx["beginTransformFeedback"](x0)
}

function _emscripten_glBindAttribLocation(program, index, name) {
    GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name))
}

function _emscripten_glBindBuffer(target, buffer) {
    if (target == 34962) {
        GLctx.currentArrayBufferBinding = buffer
    } else if (target == 34963) {
        GLctx.currentElementArrayBufferBinding = buffer
    }
    if (target == 35051) {
        GLctx.currentPixelPackBufferBinding = buffer
    } else if (target == 35052) {
        GLctx.currentPixelUnpackBufferBinding = buffer
    }
    GLctx.bindBuffer(target, GL.buffers[buffer])
}

function _emscripten_glBindBufferBase(target, index, buffer) {
    GLctx["bindBufferBase"](target, index, GL.buffers[buffer])
}

function _emscripten_glBindBufferRange(target, index, buffer, offset, ptrsize) {
    GLctx["bindBufferRange"](target, index, GL.buffers[buffer], offset, ptrsize)
}

function _emscripten_glBindFramebuffer(target, framebuffer) {
    GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer])
}

function _emscripten_glBindRenderbuffer(target, renderbuffer) {
    GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer])
}

function _emscripten_glBindSampler(unit, sampler) {
    GLctx["bindSampler"](unit, GL.samplers[sampler])
}

function _emscripten_glBindTexture(target, texture) {
    GLctx.bindTexture(target, GL.textures[texture])
}

function _emscripten_glBindTransformFeedback(target, id) {
    GLctx["bindTransformFeedback"](target, GL.transformFeedbacks[id])
}

function _emscripten_glBindVertexArray(vao) {
    GLctx["bindVertexArray"](GL.vaos[vao]);
    var ibo = GLctx.getParameter(34965);
    GLctx.currentElementArrayBufferBinding = ibo ? ibo.name | 0 : 0
}

function _emscripten_glBindVertexArrayOES(vao) {
    GLctx["bindVertexArray"](GL.vaos[vao]);
    var ibo = GLctx.getParameter(34965);
    GLctx.currentElementArrayBufferBinding = ibo ? ibo.name | 0 : 0
}

function _emscripten_glBlendColor(x0, x1, x2, x3) {
    GLctx["blendColor"](x0, x1, x2, x3)
}

function _emscripten_glBlendEquation(x0) {
    GLctx["blendEquation"](x0)
}

function _emscripten_glBlendEquationSeparate(x0, x1) {
    GLctx["blendEquationSeparate"](x0, x1)
}

function _emscripten_glBlendFunc(x0, x1) {
    GLctx["blendFunc"](x0, x1)
}

function _emscripten_glBlendFuncSeparate(x0, x1, x2, x3) {
    GLctx["blendFuncSeparate"](x0, x1, x2, x3)
}

function _emscripten_glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) {
    GLctx["blitFramebuffer"](x0, x1, x2, x3, x4, x5, x6, x7, x8, x9)
}

function _emscripten_glBufferData(target, size, data, usage) {
    if (GL.currentContext.version >= 2) {
        if (data && size) {
            GLctx.bufferData(target, HEAPU8, usage, data, size)
        } else {
            GLctx.bufferData(target, size, usage)
        }
    } else {
        GLctx.bufferData(target, data ? HEAPU8.subarray(data, data + size) : size, usage)
    }
}

function _emscripten_glBufferSubData(target, offset, size, data) {
    if (GL.currentContext.version >= 2) {
        size && GLctx.bufferSubData(target, offset, HEAPU8, data, size);
        return
    }
    GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data + size))
}

function _emscripten_glCheckFramebufferStatus(x0) {
    return GLctx["checkFramebufferStatus"](x0)
}

function _emscripten_glClear(x0) {
    GLctx["clear"](x0)
}

function _emscripten_glClearBufferfi(x0, x1, x2, x3) {
    GLctx["clearBufferfi"](x0, x1, x2, x3)
}

function _emscripten_glClearBufferfv(buffer, drawbuffer, value) {
    GLctx["clearBufferfv"](buffer, drawbuffer, HEAPF32, value >> 2)
}

function _emscripten_glClearBufferiv(buffer, drawbuffer, value) {
    GLctx["clearBufferiv"](buffer, drawbuffer, HEAP32, value >> 2)
}

function _emscripten_glClearBufferuiv(buffer, drawbuffer, value) {
    GLctx["clearBufferuiv"](buffer, drawbuffer, HEAPU32, value >> 2)
}

function _emscripten_glClearColor(x0, x1, x2, x3) {
    GLctx["clearColor"](x0, x1, x2, x3)
}

function _emscripten_glClearDepthf(x0) {
    GLctx["clearDepth"](x0)
}

function _emscripten_glClearStencil(x0) {
    GLctx["clearStencil"](x0)
}

function convertI32PairToI53(lo, hi) {
    return (lo >>> 0) + hi * 4294967296
}

function _emscripten_glClientWaitSync(sync, flags, timeoutLo, timeoutHi) {
    return GLctx.clientWaitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi))
}

function _emscripten_glColorMask(red, green, blue, alpha) {
    GLctx.colorMask(!!red, !!green, !!blue, !!alpha)
}

function _emscripten_glCompileShader(shader) {
    GLctx.compileShader(GL.shaders[shader])
}

function _emscripten_glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
    if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
            GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, imageSize, data)
        } else {
            GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, HEAPU8, data, imageSize)
        }
        return
    }
    GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, data ? HEAPU8.subarray(data, data + imageSize) : null)
}

function _emscripten_glCompressedTexImage3D(target, level, internalFormat, width, height, depth, border, imageSize, data) {
    if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx["compressedTexImage3D"](target, level, internalFormat, width, height, depth, border, imageSize, data)
    } else {
        GLctx["compressedTexImage3D"](target, level, internalFormat, width, height, depth, border, HEAPU8, data, imageSize)
    }
}

function _emscripten_glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
    if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding || !imageSize) {
            GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, imageSize, data)
        } else {
            GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, HEAPU8, data, imageSize)
        }
        return
    }
    GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, data ? HEAPU8.subarray(data, data + imageSize) : null)
}

function _emscripten_glCompressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data) {
    if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx["compressedTexSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, data)
    } else {
        GLctx["compressedTexSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, HEAPU8, data, imageSize)
    }
}

function _emscripten_glCopyBufferSubData(x0, x1, x2, x3, x4) {
    GLctx["copyBufferSubData"](x0, x1, x2, x3, x4)
}

function _emscripten_glCopyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
    GLctx["copyTexImage2D"](x0, x1, x2, x3, x4, x5, x6, x7)
}

function _emscripten_glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
    GLctx["copyTexSubImage2D"](x0, x1, x2, x3, x4, x5, x6, x7)
}

function _emscripten_glCopyTexSubImage3D(x0, x1, x2, x3, x4, x5, x6, x7, x8) {
    GLctx["copyTexSubImage3D"](x0, x1, x2, x3, x4, x5, x6, x7, x8)
}

function _emscripten_glCreateProgram() {
    var id = GL.getNewId(GL.programs);
    var program = GLctx.createProgram();
    program.name = id;
    program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
    program.uniformIdCounter = 1;
    GL.programs[id] = program;
    return id
}

function _emscripten_glCreateShader(shaderType) {
    var id = GL.getNewId(GL.shaders);
    GL.shaders[id] = GLctx.createShader(shaderType);
    return id
}

function _emscripten_glCullFace(x0) {
    GLctx["cullFace"](x0)
}

function _emscripten_glDeleteBuffers(n, buffers) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[buffers + i * 4 >> 2];
        var buffer = GL.buffers[id];
        if (!buffer) continue;
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
        if (id == GLctx.currentArrayBufferBinding) GLctx.currentArrayBufferBinding = 0;
        if (id == GLctx.currentElementArrayBufferBinding) GLctx.currentElementArrayBufferBinding = 0;
        if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
        if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0
    }
}

function _emscripten_glDeleteFramebuffers(n, framebuffers) {
    for (var i = 0; i < n; ++i) {
        var id = HEAP32[framebuffers + i * 4 >> 2];
        var framebuffer = GL.framebuffers[id];
        if (!framebuffer) continue;
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null
    }
}

function _emscripten_glDeleteProgram(id) {
    if (!id) return;
    var program = GL.programs[id];
    if (!program) {
        GL.recordError(1281);
        return
    }
    GLctx.deleteProgram(program);
    program.name = 0;
    GL.programs[id] = null
}

function _emscripten_glDeleteQueries(n, ids) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[ids + i * 4 >> 2];
        var query = GL.queries[id];
        if (!query) continue;
        GLctx["deleteQuery"](query);
        GL.queries[id] = null
    }
}

function _emscripten_glDeleteQueriesEXT(n, ids) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[ids + i * 4 >> 2];
        var query = GL.queries[id];
        if (!query) continue;
        GLctx.disjointTimerQueryExt["deleteQueryEXT"](query);
        GL.queries[id] = null
    }
}

function _emscripten_glDeleteRenderbuffers(n, renderbuffers) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[renderbuffers + i * 4 >> 2];
        var renderbuffer = GL.renderbuffers[id];
        if (!renderbuffer) continue;
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null
    }
}

function _emscripten_glDeleteSamplers(n, samplers) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[samplers + i * 4 >> 2];
        var sampler = GL.samplers[id];
        if (!sampler) continue;
        GLctx["deleteSampler"](sampler);
        sampler.name = 0;
        GL.samplers[id] = null
    }
}

function _emscripten_glDeleteShader(id) {
    if (!id) return;
    var shader = GL.shaders[id];
    if (!shader) {
        GL.recordError(1281);
        return
    }
    GLctx.deleteShader(shader);
    GL.shaders[id] = null
}

function _emscripten_glDeleteSync(id) {
    if (!id) return;
    var sync = GL.syncs[id];
    if (!sync) {
        GL.recordError(1281);
        return
    }
    GLctx.deleteSync(sync);
    sync.name = 0;
    GL.syncs[id] = null
}

function _emscripten_glDeleteTextures(n, textures) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[textures + i * 4 >> 2];
        var texture = GL.textures[id];
        if (!texture) continue;
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null
    }
}

function _emscripten_glDeleteTransformFeedbacks(n, ids) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[ids + i * 4 >> 2];
        var transformFeedback = GL.transformFeedbacks[id];
        if (!transformFeedback) continue;
        GLctx["deleteTransformFeedback"](transformFeedback);
        transformFeedback.name = 0;
        GL.transformFeedbacks[id] = null
    }
}

function _emscripten_glDeleteVertexArrays(n, vaos) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[vaos + i * 4 >> 2];
        GLctx["deleteVertexArray"](GL.vaos[id]);
        GL.vaos[id] = null
    }
}

function _emscripten_glDeleteVertexArraysOES(n, vaos) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[vaos + i * 4 >> 2];
        GLctx["deleteVertexArray"](GL.vaos[id]);
        GL.vaos[id] = null
    }
}

function _emscripten_glDepthFunc(x0) {
    GLctx["depthFunc"](x0)
}

function _emscripten_glDepthMask(flag) {
    GLctx.depthMask(!!flag)
}

function _emscripten_glDepthRangef(x0, x1) {
    GLctx["depthRange"](x0, x1)
}

function _emscripten_glDetachShader(program, shader) {
    GLctx.detachShader(GL.programs[program], GL.shaders[shader])
}

function _emscripten_glDisable(x0) {
    GLctx["disable"](x0)
}

function _emscripten_glDisableVertexAttribArray(index) {
    var cb = GL.currentContext.clientBuffers[index];
    cb.enabled = false;
    GLctx.disableVertexAttribArray(index)
}

function _emscripten_glDrawArrays(mode, first, count) {
    GL.preDrawHandleClientVertexAttribBindings(first + count);
    GLctx.drawArrays(mode, first, count);
    GL.postDrawHandleClientVertexAttribBindings()
}

function _emscripten_glDrawArraysInstanced(mode, first, count, primcount) {
    GLctx["drawArraysInstanced"](mode, first, count, primcount)
}

function _emscripten_glDrawArraysInstancedANGLE(mode, first, count, primcount) {
    GLctx["drawArraysInstanced"](mode, first, count, primcount)
}

function _emscripten_glDrawArraysInstancedARB(mode, first, count, primcount) {
    GLctx["drawArraysInstanced"](mode, first, count, primcount)
}

function _emscripten_glDrawArraysInstancedEXT(mode, first, count, primcount) {
    GLctx["drawArraysInstanced"](mode, first, count, primcount)
}

function _emscripten_glDrawArraysInstancedNV(mode, first, count, primcount) {
    GLctx["drawArraysInstanced"](mode, first, count, primcount)
}
var tempFixedLengthArray = [];

function _emscripten_glDrawBuffers(n, bufs) {
    var bufArray = tempFixedLengthArray[n];
    for (var i = 0; i < n; i++) {
        bufArray[i] = HEAP32[bufs + i * 4 >> 2]
    }
    GLctx["drawBuffers"](bufArray)
}

function _emscripten_glDrawBuffersEXT(n, bufs) {
    var bufArray = tempFixedLengthArray[n];
    for (var i = 0; i < n; i++) {
        bufArray[i] = HEAP32[bufs + i * 4 >> 2]
    }
    GLctx["drawBuffers"](bufArray)
}

function _emscripten_glDrawBuffersWEBGL(n, bufs) {
    var bufArray = tempFixedLengthArray[n];
    for (var i = 0; i < n; i++) {
        bufArray[i] = HEAP32[bufs + i * 4 >> 2]
    }
    GLctx["drawBuffers"](bufArray)
}

function _emscripten_glDrawElements(mode, count, type, indices) {
    var buf;
    if (!GLctx.currentElementArrayBufferBinding) {
        var size = GL.calcBufLength(1, type, 0, count);
        buf = GL.getTempIndexBuffer(size);
        GLctx.bindBuffer(34963, buf);
        GLctx.bufferSubData(34963, 0, HEAPU8.subarray(indices, indices + size));
        indices = 0
    }
    GL.preDrawHandleClientVertexAttribBindings(count);
    GLctx.drawElements(mode, count, type, indices);
    GL.postDrawHandleClientVertexAttribBindings(count);
    if (!GLctx.currentElementArrayBufferBinding) {
        GLctx.bindBuffer(34963, null)
    }
}

function _emscripten_glDrawElementsInstanced(mode, count, type, indices, primcount) {
    GLctx["drawElementsInstanced"](mode, count, type, indices, primcount)
}

function _emscripten_glDrawElementsInstancedANGLE(mode, count, type, indices, primcount) {
    GLctx["drawElementsInstanced"](mode, count, type, indices, primcount)
}

function _emscripten_glDrawElementsInstancedARB(mode, count, type, indices, primcount) {
    GLctx["drawElementsInstanced"](mode, count, type, indices, primcount)
}

function _emscripten_glDrawElementsInstancedEXT(mode, count, type, indices, primcount) {
    GLctx["drawElementsInstanced"](mode, count, type, indices, primcount)
}

function _emscripten_glDrawElementsInstancedNV(mode, count, type, indices, primcount) {
    GLctx["drawElementsInstanced"](mode, count, type, indices, primcount)
}

function _glDrawElements(mode, count, type, indices) {
    var buf;
    if (!GLctx.currentElementArrayBufferBinding) {
        var size = GL.calcBufLength(1, type, 0, count);
        buf = GL.getTempIndexBuffer(size);
        GLctx.bindBuffer(34963, buf);
        GLctx.bufferSubData(34963, 0, HEAPU8.subarray(indices, indices + size));
        indices = 0
    }
    GL.preDrawHandleClientVertexAttribBindings(count);
    GLctx.drawElements(mode, count, type, indices);
    GL.postDrawHandleClientVertexAttribBindings(count);
    if (!GLctx.currentElementArrayBufferBinding) {
        GLctx.bindBuffer(34963, null)
    }
}

function _emscripten_glDrawRangeElements(mode, start, end, count, type, indices) {
    _glDrawElements(mode, count, type, indices)
}

function _emscripten_glEnable(x0) {
    GLctx["enable"](x0)
}

function _emscripten_glEnableVertexAttribArray(index) {
    var cb = GL.currentContext.clientBuffers[index];
    cb.enabled = true;
    GLctx.enableVertexAttribArray(index)
}

function _emscripten_glEndQuery(x0) {
    GLctx["endQuery"](x0)
}

function _emscripten_glEndQueryEXT(target) {
    GLctx.disjointTimerQueryExt["endQueryEXT"](target)
}

function _emscripten_glEndTransformFeedback() {
    GLctx["endTransformFeedback"]()
}

function _emscripten_glFenceSync(condition, flags) {
    var sync = GLctx.fenceSync(condition, flags);
    if (sync) {
        var id = GL.getNewId(GL.syncs);
        sync.name = id;
        GL.syncs[id] = sync;
        return id
    }
    return 0
}

function _emscripten_glFinish() {
    GLctx["finish"]()
}

function _emscripten_glFlush() {
    GLctx["flush"]()
}

function _emscripten_glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
    GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer])
}

function _emscripten_glFramebufferTexture2D(target, attachment, textarget, texture, level) {
    GLctx.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level)
}

function _emscripten_glFramebufferTextureLayer(target, attachment, texture, level, layer) {
    GLctx.framebufferTextureLayer(target, attachment, GL.textures[texture], level, layer)
}

function _emscripten_glFrontFace(x0) {
    GLctx["frontFace"](x0)
}

function __glGenObject(n, buffers, createFunction, objectTable) {
    for (var i = 0; i < n; i++) {
        var buffer = GLctx[createFunction]();
        var id = buffer && GL.getNewId(objectTable);
        if (buffer) {
            buffer.name = id;
            objectTable[id] = buffer
        } else {
            GL.recordError(1282)
        }
        HEAP32[buffers + i * 4 >> 2] = id
    }
}

function _emscripten_glGenBuffers(n, buffers) {
    __glGenObject(n, buffers, "createBuffer", GL.buffers)
}

function _emscripten_glGenFramebuffers(n, ids) {
    __glGenObject(n, ids, "createFramebuffer", GL.framebuffers)
}

function _emscripten_glGenQueries(n, ids) {
    __glGenObject(n, ids, "createQuery", GL.queries)
}

function _emscripten_glGenQueriesEXT(n, ids) {
    for (var i = 0; i < n; i++) {
        var query = GLctx.disjointTimerQueryExt["createQueryEXT"]();
        if (!query) {
            GL.recordError(1282);
            while (i < n) HEAP32[ids + i++ * 4 >> 2] = 0;
            return
        }
        var id = GL.getNewId(GL.queries);
        query.name = id;
        GL.queries[id] = query;
        HEAP32[ids + i * 4 >> 2] = id
    }
}

function _emscripten_glGenRenderbuffers(n, renderbuffers) {
    __glGenObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers)
}

function _emscripten_glGenSamplers(n, samplers) {
    __glGenObject(n, samplers, "createSampler", GL.samplers)
}

function _emscripten_glGenTextures(n, textures) {
    __glGenObject(n, textures, "createTexture", GL.textures)
}

function _emscripten_glGenTransformFeedbacks(n, ids) {
    __glGenObject(n, ids, "createTransformFeedback", GL.transformFeedbacks)
}

function _emscripten_glGenVertexArrays(n, arrays) {
    __glGenObject(n, arrays, "createVertexArray", GL.vaos)
}

function _emscripten_glGenVertexArraysOES(n, arrays) {
    __glGenObject(n, arrays, "createVertexArray", GL.vaos)
}

function _emscripten_glGenerateMipmap(x0) {
    GLctx["generateMipmap"](x0)
}

function __glGetActiveAttribOrUniform(funcName, program, index, bufSize, length, size, type, name) {
    program = GL.programs[program];
    var info = GLctx[funcName](program, index);
    if (info) {
        var numBytesWrittenExclNull = name && stringToUTF8(info.name, name, bufSize);
        if (length) HEAP32[length >> 2] = numBytesWrittenExclNull;
        if (size) HEAP32[size >> 2] = info.size;
        if (type) HEAP32[type >> 2] = info.type
    }
}

function _emscripten_glGetActiveAttrib(program, index, bufSize, length, size, type, name) {
    __glGetActiveAttribOrUniform("getActiveAttrib", program, index, bufSize, length, size, type, name)
}

function _emscripten_glGetActiveUniform(program, index, bufSize, length, size, type, name) {
    __glGetActiveAttribOrUniform("getActiveUniform", program, index, bufSize, length, size, type, name)
}

function _emscripten_glGetActiveUniformBlockName(program, uniformBlockIndex, bufSize, length, uniformBlockName) {
    program = GL.programs[program];
    var result = GLctx["getActiveUniformBlockName"](program, uniformBlockIndex);
    if (!result) return;
    if (uniformBlockName && bufSize > 0) {
        var numBytesWrittenExclNull = stringToUTF8(result, uniformBlockName, bufSize);
        if (length) HEAP32[length >> 2] = numBytesWrittenExclNull
    } else {
        if (length) HEAP32[length >> 2] = 0
    }
}

function _emscripten_glGetActiveUniformBlockiv(program, uniformBlockIndex, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    program = GL.programs[program];
    if (pname == 35393) {
        var name = GLctx["getActiveUniformBlockName"](program, uniformBlockIndex);
        HEAP32[params >> 2] = name.length + 1;
        return
    }
    var result = GLctx["getActiveUniformBlockParameter"](program, uniformBlockIndex, pname);
    if (result === null) return;
    if (pname == 35395) {
        for (var i = 0; i < result.length; i++) {
            HEAP32[params + i * 4 >> 2] = result[i]
        }
    } else {
        HEAP32[params >> 2] = result
    }
}

function _emscripten_glGetActiveUniformsiv(program, uniformCount, uniformIndices, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    if (uniformCount > 0 && uniformIndices == 0) {
        GL.recordError(1281);
        return
    }
    program = GL.programs[program];
    var ids = [];
    for (var i = 0; i < uniformCount; i++) {
        ids.push(HEAP32[uniformIndices + i * 4 >> 2])
    }
    var result = GLctx["getActiveUniforms"](program, ids, pname);
    if (!result) return;
    var len = result.length;
    for (var i = 0; i < len; i++) {
        HEAP32[params + i * 4 >> 2] = result[i]
    }
}

function _emscripten_glGetAttachedShaders(program, maxCount, count, shaders) {
    var result = GLctx.getAttachedShaders(GL.programs[program]);
    var len = result.length;
    if (len > maxCount) {
        len = maxCount
    }
    HEAP32[count >> 2] = len;
    for (var i = 0; i < len; ++i) {
        var id = GL.shaders.indexOf(result[i]);
        HEAP32[shaders + i * 4 >> 2] = id
    }
}

function _emscripten_glGetAttribLocation(program, name) {
    return GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name))
}

function writeI53ToI64(ptr, num) {
    HEAPU32[ptr >> 2] = num;
    HEAPU32[ptr + 4 >> 2] = (num - HEAPU32[ptr >> 2]) / 4294967296
}

function emscriptenWebGLGet(name_, p, type) {
    if (!p) {
        GL.recordError(1281);
        return
    }
    var ret = undefined;
    switch (name_) {
        case 36346:
            ret = 1;
            break;
        case 36344:
            if (type != 0 && type != 1) {
                GL.recordError(1280)
            }
            return;
        case 34814:
        case 36345:
            ret = 0;
            break;
        case 34466:
            var formats = GLctx.getParameter(34467);
            ret = formats ? formats.length : 0;
            break;
        case 33309:
            if (GL.currentContext.version < 2) {
                GL.recordError(1282);
                return
            }
            var exts = GLctx.getSupportedExtensions() || [];
            ret = 2 * exts.length;
            break;
        case 33307:
        case 33308:
            if (GL.currentContext.version < 2) {
                GL.recordError(1280);
                return
            }
            ret = name_ == 33307 ? 3 : 0;
            break
    }
    if (ret === undefined) {
        var result = GLctx.getParameter(name_);
        switch (typeof result) {
            case "number":
                ret = result;
                break;
            case "boolean":
                ret = result ? 1 : 0;
                break;
            case "string":
                GL.recordError(1280);
                return;
            case "object":
                if (result === null) {
                    switch (name_) {
                        case 34964:
                        case 35725:
                        case 34965:
                        case 36006:
                        case 36007:
                        case 32873:
                        case 34229:
                        case 36662:
                        case 36663:
                        case 35053:
                        case 35055:
                        case 36010:
                        case 35097:
                        case 35869:
                        case 32874:
                        case 36389:
                        case 35983:
                        case 35368:
                        case 34068: {
                            ret = 0;
                            break
                        }
                        default: {
                            GL.recordError(1280);
                            return
                        }
                    }
                } else if (result instanceof Float32Array || result instanceof Uint32Array || result instanceof Int32Array || result instanceof Array) {
                    for (var i = 0; i < result.length; ++i) {
                        switch (type) {
                            case 0:
                                HEAP32[p + i * 4 >> 2] = result[i];
                                break;
                            case 2:
                                HEAPF32[p + i * 4 >> 2] = result[i];
                                break;
                            case 4:
                                HEAP8[p + i >> 0] = result[i] ? 1 : 0;
                                break
                        }
                    }
                    return
                } else {
                    try {
                        ret = result.name | 0
                    } catch (e) {
                        GL.recordError(1280);
                        err("GL_INVALID_ENUM in glGet" + type + "v: Unknown object returned from WebGL getParameter(" + name_ + ")! (error: " + e + ")");
                        return
                    }
                }
                break;
            default:
                GL.recordError(1280);
                err("GL_INVALID_ENUM in glGet" + type + "v: Native code calling glGet" + type + "v(" + name_ + ") and it returns " + result + " of type " + typeof result + "!");
                return
        }
    }
    switch (type) {
        case 1:
            writeI53ToI64(p, ret);
            break;
        case 0:
            HEAP32[p >> 2] = ret;
            break;
        case 2:
            HEAPF32[p >> 2] = ret;
            break;
        case 4:
            HEAP8[p >> 0] = ret ? 1 : 0;
            break
    }
}

function _emscripten_glGetBooleanv(name_, p) {
    emscriptenWebGLGet(name_, p, 4)
}

function _emscripten_glGetBufferParameteri64v(target, value, data) {
    if (!data) {
        GL.recordError(1281);
        return
    }
    writeI53ToI64(data, GLctx.getBufferParameter(target, value))
}

function _emscripten_glGetBufferParameteriv(target, value, data) {
    if (!data) {
        GL.recordError(1281);
        return
    }
    HEAP32[data >> 2] = GLctx.getBufferParameter(target, value)
}

function _emscripten_glGetError() {
    var error = GLctx.getError() || GL.lastError;
    GL.lastError = 0;
    return error
}

function _emscripten_glGetFloatv(name_, p) {
    emscriptenWebGLGet(name_, p, 2)
}

function _emscripten_glGetFragDataLocation(program, name) {
    return GLctx["getFragDataLocation"](GL.programs[program], UTF8ToString(name))
}

function _emscripten_glGetFramebufferAttachmentParameteriv(target, attachment, pname, params) {
    var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
    if (result instanceof WebGLRenderbuffer || result instanceof WebGLTexture) {
        result = result.name | 0
    }
    HEAP32[params >> 2] = result
}

function emscriptenWebGLGetIndexed(target, index, data, type) {
    if (!data) {
        GL.recordError(1281);
        return
    }
    var result = GLctx["getIndexedParameter"](target, index);
    var ret;
    switch (typeof result) {
        case "boolean":
            ret = result ? 1 : 0;
            break;
        case "number":
            ret = result;
            break;
        case "object":
            if (result === null) {
                switch (target) {
                    case 35983:
                    case 35368:
                        ret = 0;
                        break;
                    default: {
                        GL.recordError(1280);
                        return
                    }
                }
            } else if (result instanceof WebGLBuffer) {
                ret = result.name | 0
            } else {
                GL.recordError(1280);
                return
            }
            break;
        default:
            GL.recordError(1280);
            return
    }
    switch (type) {
        case 1:
            writeI53ToI64(data, ret);
            break;
        case 0:
            HEAP32[data >> 2] = ret;
            break;
        case 2:
            HEAPF32[data >> 2] = ret;
            break;
        case 4:
            HEAP8[data >> 0] = ret ? 1 : 0;
            break;
        default:
            throw "internal emscriptenWebGLGetIndexed() error, bad type: " + type
    }
}

function _emscripten_glGetInteger64i_v(target, index, data) {
    emscriptenWebGLGetIndexed(target, index, data, 1)
}

function _emscripten_glGetInteger64v(name_, p) {
    emscriptenWebGLGet(name_, p, 1)
}

function _emscripten_glGetIntegeri_v(target, index, data) {
    emscriptenWebGLGetIndexed(target, index, data, 0)
}

function _emscripten_glGetIntegerv(name_, p) {
    emscriptenWebGLGet(name_, p, 0)
}

function _emscripten_glGetInternalformativ(target, internalformat, pname, bufSize, params) {
    if (bufSize < 0) {
        GL.recordError(1281);
        return
    }
    if (!params) {
        GL.recordError(1281);
        return
    }
    var ret = GLctx["getInternalformatParameter"](target, internalformat, pname);
    if (ret === null) return;
    for (var i = 0; i < ret.length && i < bufSize; ++i) {
        HEAP32[params + i * 4 >> 2] = ret[i]
    }
}

function _emscripten_glGetProgramBinary(program, bufSize, length, binaryFormat, binary) {
    GL.recordError(1282)
}

function _emscripten_glGetProgramInfoLog(program, maxLength, length, infoLog) {
    var log = GLctx.getProgramInfoLog(GL.programs[program]);
    if (log === null) log = "(unknown error)";
    var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
    if (length) HEAP32[length >> 2] = numBytesWrittenExclNull
}

function _emscripten_glGetProgramiv(program, pname, p) {
    if (!p) {
        GL.recordError(1281);
        return
    }
    if (program >= GL.counter) {
        GL.recordError(1281);
        return
    }
    program = GL.programs[program];
    if (pname == 35716) {
        var log = GLctx.getProgramInfoLog(program);
        if (log === null) log = "(unknown error)";
        HEAP32[p >> 2] = log.length + 1
    } else if (pname == 35719) {
        if (!program.maxUniformLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
                program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length + 1)
            }
        }
        HEAP32[p >> 2] = program.maxUniformLength
    } else if (pname == 35722) {
        if (!program.maxAttributeLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 35721); ++i) {
                program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length + 1)
            }
        }
        HEAP32[p >> 2] = program.maxAttributeLength
    } else if (pname == 35381) {
        if (!program.maxUniformBlockNameLength) {
            for (var i = 0; i < GLctx.getProgramParameter(program, 35382); ++i) {
                program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length + 1)
            }
        }
        HEAP32[p >> 2] = program.maxUniformBlockNameLength
    } else {
        HEAP32[p >> 2] = GLctx.getProgramParameter(program, pname)
    }
}

function _emscripten_glGetQueryObjecti64vEXT(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.queries[id];
    var param;
    if (GL.currentContext.version < 2) {
        param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname)
    } else {
        param = GLctx["getQueryParameter"](query, pname)
    }
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    writeI53ToI64(params, ret)
}

function _emscripten_glGetQueryObjectivEXT(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.queries[id];
    var param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    HEAP32[params >> 2] = ret
}

function _emscripten_glGetQueryObjectui64vEXT(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.queries[id];
    var param;
    if (GL.currentContext.version < 2) {
        param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname)
    } else {
        param = GLctx["getQueryParameter"](query, pname)
    }
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    writeI53ToI64(params, ret)
}

function _emscripten_glGetQueryObjectuiv(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.queries[id];
    var param = GLctx["getQueryParameter"](query, pname);
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    HEAP32[params >> 2] = ret
}

function _emscripten_glGetQueryObjectuivEXT(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.queries[id];
    var param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    HEAP32[params >> 2] = ret
}

function _emscripten_glGetQueryiv(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    HEAP32[params >> 2] = GLctx["getQuery"](target, pname)
}

function _emscripten_glGetQueryivEXT(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    HEAP32[params >> 2] = GLctx.disjointTimerQueryExt["getQueryEXT"](target, pname)
}

function _emscripten_glGetRenderbufferParameteriv(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    HEAP32[params >> 2] = GLctx.getRenderbufferParameter(target, pname)
}

function _emscripten_glGetSamplerParameterfv(sampler, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    HEAPF32[params >> 2] = GLctx["getSamplerParameter"](GL.samplers[sampler], pname)
}

function _emscripten_glGetSamplerParameteriv(sampler, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    HEAP32[params >> 2] = GLctx["getSamplerParameter"](GL.samplers[sampler], pname)
}

function _emscripten_glGetShaderInfoLog(shader, maxLength, length, infoLog) {
    var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
    if (log === null) log = "(unknown error)";
    var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
    if (length) HEAP32[length >> 2] = numBytesWrittenExclNull
}

function _emscripten_glGetShaderPrecisionFormat(shaderType, precisionType, range, precision) {
    var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
    HEAP32[range >> 2] = result.rangeMin;
    HEAP32[range + 4 >> 2] = result.rangeMax;
    HEAP32[precision >> 2] = result.precision
}

function _emscripten_glGetShaderSource(shader, bufSize, length, source) {
    var result = GLctx.getShaderSource(GL.shaders[shader]);
    if (!result) return;
    var numBytesWrittenExclNull = bufSize > 0 && source ? stringToUTF8(result, source, bufSize) : 0;
    if (length) HEAP32[length >> 2] = numBytesWrittenExclNull
}

function _emscripten_glGetShaderiv(shader, pname, p) {
    if (!p) {
        GL.recordError(1281);
        return
    }
    if (pname == 35716) {
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = "(unknown error)";
        var logLength = log ? log.length + 1 : 0;
        HEAP32[p >> 2] = logLength
    } else if (pname == 35720) {
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        var sourceLength = source ? source.length + 1 : 0;
        HEAP32[p >> 2] = sourceLength
    } else {
        HEAP32[p >> 2] = GLctx.getShaderParameter(GL.shaders[shader], pname)
    }
}

function stringToNewUTF8(jsString) {
    var length = lengthBytesUTF8(jsString) + 1;
    var cString = _malloc(length);
    stringToUTF8(jsString, cString, length);
    return cString
}

function _emscripten_glGetString(name_) {
    var ret = GL.stringCache[name_];
    if (!ret) {
        switch (name_) {
            case 7939:
                var exts = GLctx.getSupportedExtensions() || [];
                exts = exts.concat(exts.map(function (e) {
                    return "GL_" + e
                }));
                ret = stringToNewUTF8(exts.join(" "));
                break;
            case 7936:
            case 7937:
            case 37445:
            case 37446:
                var s = GLctx.getParameter(name_);
                if (!s) {
                    GL.recordError(1280)
                }
                ret = s && stringToNewUTF8(s);
                break;
            case 7938:
                var glVersion = GLctx.getParameter(7938);
                if (GL.currentContext.version >= 2) glVersion = "OpenGL ES 3.0 (" + glVersion + ")";
                else {
                    glVersion = "OpenGL ES 2.0 (" + glVersion + ")"
                }
                ret = stringToNewUTF8(glVersion);
                break;
            case 35724:
                var glslVersion = GLctx.getParameter(35724);
                var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
                var ver_num = glslVersion.match(ver_re);
                if (ver_num !== null) {
                    if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + "0";
                    glslVersion = "OpenGL ES GLSL ES " + ver_num[1] + " (" + glslVersion + ")"
                }
                ret = stringToNewUTF8(glslVersion);
                break;
            default:
                GL.recordError(1280)
        }
        GL.stringCache[name_] = ret
    }
    return ret
}

function _emscripten_glGetStringi(name, index) {
    if (GL.currentContext.version < 2) {
        GL.recordError(1282);
        return 0
    }
    var stringiCache = GL.stringiCache[name];
    if (stringiCache) {
        if (index < 0 || index >= stringiCache.length) {
            GL.recordError(1281);
            return 0
        }
        return stringiCache[index]
    }
    switch (name) {
        case 7939:
            var exts = GLctx.getSupportedExtensions() || [];
            exts = exts.concat(exts.map(function (e) {
                return "GL_" + e
            }));
            exts = exts.map(function (e) {
                return stringToNewUTF8(e)
            });
            stringiCache = GL.stringiCache[name] = exts;
            if (index < 0 || index >= stringiCache.length) {
                GL.recordError(1281);
                return 0
            }
            return stringiCache[index];
        default:
            GL.recordError(1280);
            return 0
    }
}

function _emscripten_glGetSynciv(sync, pname, bufSize, length, values) {
    if (bufSize < 0) {
        GL.recordError(1281);
        return
    }
    if (!values) {
        GL.recordError(1281);
        return
    }
    var ret = GLctx.getSyncParameter(GL.syncs[sync], pname);
    if (ret !== null) {
        HEAP32[values >> 2] = ret;
        if (length) HEAP32[length >> 2] = 1
    }
}

function _emscripten_glGetTexParameterfv(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    HEAPF32[params >> 2] = GLctx.getTexParameter(target, pname)
}

function _emscripten_glGetTexParameteriv(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    HEAP32[params >> 2] = GLctx.getTexParameter(target, pname)
}

function _emscripten_glGetTransformFeedbackVarying(program, index, bufSize, length, size, type, name) {
    program = GL.programs[program];
    var info = GLctx["getTransformFeedbackVarying"](program, index);
    if (!info) return;
    if (name && bufSize > 0) {
        var numBytesWrittenExclNull = stringToUTF8(info.name, name, bufSize);
        if (length) HEAP32[length >> 2] = numBytesWrittenExclNull
    } else {
        if (length) HEAP32[length >> 2] = 0
    }
    if (size) HEAP32[size >> 2] = info.size;
    if (type) HEAP32[type >> 2] = info.type
}

function _emscripten_glGetUniformBlockIndex(program, uniformBlockName) {
    return GLctx["getUniformBlockIndex"](GL.programs[program], UTF8ToString(uniformBlockName))
}

function _emscripten_glGetUniformIndices(program, uniformCount, uniformNames, uniformIndices) {
    if (!uniformIndices) {
        GL.recordError(1281);
        return
    }
    if (uniformCount > 0 && (uniformNames == 0 || uniformIndices == 0)) {
        GL.recordError(1281);
        return
    }
    program = GL.programs[program];
    var names = [];
    for (var i = 0; i < uniformCount; i++) names.push(UTF8ToString(HEAP32[uniformNames + i * 4 >> 2]));
    var result = GLctx["getUniformIndices"](program, names);
    if (!result) return;
    var len = result.length;
    for (var i = 0; i < len; i++) {
        HEAP32[uniformIndices + i * 4 >> 2] = result[i]
    }
}

function webglGetLeftBracePos(name) {
    return name.slice(-1) == "]" && name.lastIndexOf("[")
}

function webglPrepareUniformLocationsBeforeFirstUse(program) {
    var uniformLocsById = program.uniformLocsById,
        uniformSizeAndIdsByName = program.uniformSizeAndIdsByName,
        i, j;
    if (!uniformLocsById) {
        program.uniformLocsById = uniformLocsById = {};
        program.uniformArrayNamesById = {};
        for (i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
            var u = GLctx.getActiveUniform(program, i);
            var nm = u.name;
            var sz = u.size;
            var lb = webglGetLeftBracePos(nm);
            var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
            var id = program.uniformIdCounter;
            program.uniformIdCounter += sz;
            uniformSizeAndIdsByName[arrayName] = [sz, id];
            for (j = 0; j < sz; ++j) {
                uniformLocsById[id] = j;
                program.uniformArrayNamesById[id++] = arrayName
            }
        }
    }
}

function _emscripten_glGetUniformLocation(program, name) {
    name = UTF8ToString(name);
    if (program = GL.programs[program]) {
        webglPrepareUniformLocationsBeforeFirstUse(program);
        var uniformLocsById = program.uniformLocsById;
        var arrayIndex = 0;
        var uniformBaseName = name;
        var leftBrace = webglGetLeftBracePos(name);
        if (leftBrace > 0) {
            arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0;
            uniformBaseName = name.slice(0, leftBrace)
        }
        var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
        if (sizeAndId && arrayIndex < sizeAndId[0]) {
            arrayIndex += sizeAndId[1];
            if (uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name)) {
                return arrayIndex
            }
        }
    } else {
        GL.recordError(1281)
    }
    return -1
}

function webglGetUniformLocation(location) {
    var p = GLctx.currentProgram;
    if (p) {
        var webglLoc = p.uniformLocsById[location];
        if (typeof webglLoc == "number") {
            p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? "[" + webglLoc + "]" : ""))
        }
        return webglLoc
    } else {
        GL.recordError(1282)
    }
}

function emscriptenWebGLGetUniform(program, location, params, type) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    program = GL.programs[program];
    webglPrepareUniformLocationsBeforeFirstUse(program);
    var data = GLctx.getUniform(program, webglGetUniformLocation(location));
    if (typeof data == "number" || typeof data == "boolean") {
        switch (type) {
            case 0:
                HEAP32[params >> 2] = data;
                break;
            case 2:
                HEAPF32[params >> 2] = data;
                break
        }
    } else {
        for (var i = 0; i < data.length; i++) {
            switch (type) {
                case 0:
                    HEAP32[params + i * 4 >> 2] = data[i];
                    break;
                case 2:
                    HEAPF32[params + i * 4 >> 2] = data[i];
                    break
            }
        }
    }
}

function _emscripten_glGetUniformfv(program, location, params) {
    emscriptenWebGLGetUniform(program, location, params, 2)
}

function _emscripten_glGetUniformiv(program, location, params) {
    emscriptenWebGLGetUniform(program, location, params, 0)
}

function _emscripten_glGetUniformuiv(program, location, params) {
    emscriptenWebGLGetUniform(program, location, params, 0)
}

function emscriptenWebGLGetVertexAttrib(index, pname, params, type) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    if (GL.currentContext.clientBuffers[index].enabled) {
        err("glGetVertexAttrib*v on client-side array: not supported, bad data returned")
    }
    var data = GLctx.getVertexAttrib(index, pname);
    if (pname == 34975) {
        HEAP32[params >> 2] = data && data["name"]
    } else if (typeof data == "number" || typeof data == "boolean") {
        switch (type) {
            case 0:
                HEAP32[params >> 2] = data;
                break;
            case 2:
                HEAPF32[params >> 2] = data;
                break;
            case 5:
                HEAP32[params >> 2] = Math.fround(data);
                break
        }
    } else {
        for (var i = 0; i < data.length; i++) {
            switch (type) {
                case 0:
                    HEAP32[params + i * 4 >> 2] = data[i];
                    break;
                case 2:
                    HEAPF32[params + i * 4 >> 2] = data[i];
                    break;
                case 5:
                    HEAP32[params + i * 4 >> 2] = Math.fround(data[i]);
                    break
            }
        }
    }
}

function _emscripten_glGetVertexAttribIiv(index, pname, params) {
    emscriptenWebGLGetVertexAttrib(index, pname, params, 0)
}

function _emscripten_glGetVertexAttribIuiv(index, pname, params) {
    emscriptenWebGLGetVertexAttrib(index, pname, params, 0)
}

function _emscripten_glGetVertexAttribPointerv(index, pname, pointer) {
    if (!pointer) {
        GL.recordError(1281);
        return
    }
    if (GL.currentContext.clientBuffers[index].enabled) {
        err("glGetVertexAttribPointer on client-side array: not supported, bad data returned")
    }
    HEAP32[pointer >> 2] = GLctx.getVertexAttribOffset(index, pname)
}

function _emscripten_glGetVertexAttribfv(index, pname, params) {
    emscriptenWebGLGetVertexAttrib(index, pname, params, 2)
}

function _emscripten_glGetVertexAttribiv(index, pname, params) {
    emscriptenWebGLGetVertexAttrib(index, pname, params, 5)
}

function _emscripten_glHint(x0, x1) {
    GLctx["hint"](x0, x1)
}

function _emscripten_glInvalidateFramebuffer(target, numAttachments, attachments) {
    var list = tempFixedLengthArray[numAttachments];
    for (var i = 0; i < numAttachments; i++) {
        list[i] = HEAP32[attachments + i * 4 >> 2]
    }
    GLctx["invalidateFramebuffer"](target, list)
}

function _emscripten_glInvalidateSubFramebuffer(target, numAttachments, attachments, x, y, width, height) {
    var list = tempFixedLengthArray[numAttachments];
    for (var i = 0; i < numAttachments; i++) {
        list[i] = HEAP32[attachments + i * 4 >> 2]
    }
    GLctx["invalidateSubFramebuffer"](target, list, x, y, width, height)
}

function _emscripten_glIsBuffer(buffer) {
    var b = GL.buffers[buffer];
    if (!b) return 0;
    return GLctx.isBuffer(b)
}

function _emscripten_glIsEnabled(x0) {
    return GLctx["isEnabled"](x0)
}

function _emscripten_glIsFramebuffer(framebuffer) {
    var fb = GL.framebuffers[framebuffer];
    if (!fb) return 0;
    return GLctx.isFramebuffer(fb)
}

function _emscripten_glIsProgram(program) {
    program = GL.programs[program];
    if (!program) return 0;
    return GLctx.isProgram(program)
}

function _emscripten_glIsQuery(id) {
    var query = GL.queries[id];
    if (!query) return 0;
    return GLctx["isQuery"](query)
}

function _emscripten_glIsQueryEXT(id) {
    var query = GL.queries[id];
    if (!query) return 0;
    return GLctx.disjointTimerQueryExt["isQueryEXT"](query)
}

function _emscripten_glIsRenderbuffer(renderbuffer) {
    var rb = GL.renderbuffers[renderbuffer];
    if (!rb) return 0;
    return GLctx.isRenderbuffer(rb)
}

function _emscripten_glIsSampler(id) {
    var sampler = GL.samplers[id];
    if (!sampler) return 0;
    return GLctx["isSampler"](sampler)
}

function _emscripten_glIsShader(shader) {
    var s = GL.shaders[shader];
    if (!s) return 0;
    return GLctx.isShader(s)
}

function _emscripten_glIsSync(sync) {
    return GLctx.isSync(GL.syncs[sync])
}

function _emscripten_glIsTexture(id) {
    var texture = GL.textures[id];
    if (!texture) return 0;
    return GLctx.isTexture(texture)
}

function _emscripten_glIsTransformFeedback(id) {
    return GLctx["isTransformFeedback"](GL.transformFeedbacks[id])
}

function _emscripten_glIsVertexArray(array) {
    var vao = GL.vaos[array];
    if (!vao) return 0;
    return GLctx["isVertexArray"](vao)
}

function _emscripten_glIsVertexArrayOES(array) {
    var vao = GL.vaos[array];
    if (!vao) return 0;
    return GLctx["isVertexArray"](vao)
}

function _emscripten_glLineWidth(x0) {
    GLctx["lineWidth"](x0)
}

function _emscripten_glLinkProgram(program) {
    program = GL.programs[program];
    GLctx.linkProgram(program);
    program.uniformLocsById = 0;
    program.uniformSizeAndIdsByName = {}
}

function _emscripten_glPauseTransformFeedback() {
    GLctx["pauseTransformFeedback"]()
}

function _emscripten_glPixelStorei(pname, param) {
    if (pname == 3317) {
        GL.unpackAlignment = param
    }
    GLctx.pixelStorei(pname, param)
}

function _emscripten_glPolygonOffset(x0, x1) {
    GLctx["polygonOffset"](x0, x1)
}

function _emscripten_glProgramBinary(program, binaryFormat, binary, length) {
    GL.recordError(1280)
}

function _emscripten_glProgramParameteri(program, pname, value) {
    GL.recordError(1280)
}

function _emscripten_glQueryCounterEXT(id, target) {
    GLctx.disjointTimerQueryExt["queryCounterEXT"](GL.queries[id], target)
}

function _emscripten_glReadBuffer(x0) {
    GLctx["readBuffer"](x0)
}

function computeUnpackAlignedImageSize(width, height, sizePerPixel, alignment) {
    function roundedToNextMultipleOf(x, y) {
        return x + y - 1 & -y
    }
    var plainRowSize = width * sizePerPixel;
    var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
    return height * alignedRowSize
}

function __colorChannelsInGlTextureFormat(format) {
    var colorChannels = {
        5: 3,
        6: 4,
        8: 2,
        29502: 3,
        29504: 4,
        26917: 2,
        26918: 2,
        29846: 3,
        29847: 4
    };
    return colorChannels[format - 6402] || 1
}

function heapObjectForWebGLType(type) {
    type -= 5120;
    if (type == 0) return HEAP8;
    if (type == 1) return HEAPU8;
    if (type == 2) return HEAP16;
    if (type == 4) return HEAP32;
    if (type == 6) return HEAPF32;
    if (type == 5 || type == 28922 || type == 28520 || type == 30779 || type == 30782) return HEAPU32;
    return HEAPU16
}

function heapAccessShiftForWebGLHeap(heap) {
    return 31 - Math.clz32(heap.BYTES_PER_ELEMENT)
}

function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) {
    var heap = heapObjectForWebGLType(type);
    var shift = heapAccessShiftForWebGLHeap(heap);
    var byteSize = 1 << shift;
    var sizePerPixel = __colorChannelsInGlTextureFormat(format) * byteSize;
    var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
    return heap.subarray(pixels >> shift, pixels + bytes >> shift)
}

function _emscripten_glReadPixels(x, y, width, height, format, type, pixels) {
    if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelPackBufferBinding) {
            GLctx.readPixels(x, y, width, height, format, type, pixels)
        } else {
            var heap = heapObjectForWebGLType(type);
            GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
        }
        return
    }
    var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
    if (!pixelData) {
        GL.recordError(1280);
        return
    }
    GLctx.readPixels(x, y, width, height, format, type, pixelData)
}

function _emscripten_glReleaseShaderCompiler() {}

function _emscripten_glRenderbufferStorage(x0, x1, x2, x3) {
    GLctx["renderbufferStorage"](x0, x1, x2, x3)
}

function _emscripten_glRenderbufferStorageMultisample(x0, x1, x2, x3, x4) {
    GLctx["renderbufferStorageMultisample"](x0, x1, x2, x3, x4)
}

function _emscripten_glResumeTransformFeedback() {
    GLctx["resumeTransformFeedback"]()
}

function _emscripten_glSampleCoverage(value, invert) {
    GLctx.sampleCoverage(value, !!invert)
}

function _emscripten_glSamplerParameterf(sampler, pname, param) {
    GLctx["samplerParameterf"](GL.samplers[sampler], pname, param)
}

function _emscripten_glSamplerParameterfv(sampler, pname, params) {
    var param = HEAPF32[params >> 2];
    GLctx["samplerParameterf"](GL.samplers[sampler], pname, param)
}

function _emscripten_glSamplerParameteri(sampler, pname, param) {
    GLctx["samplerParameteri"](GL.samplers[sampler], pname, param)
}

function _emscripten_glSamplerParameteriv(sampler, pname, params) {
    var param = HEAP32[params >> 2];
    GLctx["samplerParameteri"](GL.samplers[sampler], pname, param)
}

function _emscripten_glScissor(x0, x1, x2, x3) {
    GLctx["scissor"](x0, x1, x2, x3)
}

function _emscripten_glShaderBinary() {
    GL.recordError(1280)
}

function _emscripten_glShaderSource(shader, count, string, length) {
    var source = GL.getSource(shader, count, string, length);
    GLctx.shaderSource(GL.shaders[shader], source)
}

function _emscripten_glStencilFunc(x0, x1, x2) {
    GLctx["stencilFunc"](x0, x1, x2)
}

function _emscripten_glStencilFuncSeparate(x0, x1, x2, x3) {
    GLctx["stencilFuncSeparate"](x0, x1, x2, x3)
}

function _emscripten_glStencilMask(x0) {
    GLctx["stencilMask"](x0)
}

function _emscripten_glStencilMaskSeparate(x0, x1) {
    GLctx["stencilMaskSeparate"](x0, x1)
}

function _emscripten_glStencilOp(x0, x1, x2) {
    GLctx["stencilOp"](x0, x1, x2)
}

function _emscripten_glStencilOpSeparate(x0, x1, x2, x3) {
    GLctx["stencilOpSeparate"](x0, x1, x2, x3)
}

function _emscripten_glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
    if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding) {
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels)
        } else if (pixels) {
            var heap = heapObjectForWebGLType(type);
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
        } else {
            GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null)
        }
        return
    }
    GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null)
}

function _emscripten_glTexImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels) {
    if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, pixels)
    } else if (pixels) {
        var heap = heapObjectForWebGLType(type);
        GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
    } else {
        GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, null)
    }
}

function _emscripten_glTexParameterf(x0, x1, x2) {
    GLctx["texParameterf"](x0, x1, x2)
}

function _emscripten_glTexParameterfv(target, pname, params) {
    var param = HEAPF32[params >> 2];
    GLctx.texParameterf(target, pname, param)
}

function _emscripten_glTexParameteri(x0, x1, x2) {
    GLctx["texParameteri"](x0, x1, x2)
}

function _emscripten_glTexParameteriv(target, pname, params) {
    var param = HEAP32[params >> 2];
    GLctx.texParameteri(target, pname, param)
}

function _emscripten_glTexStorage2D(x0, x1, x2, x3, x4) {
    GLctx["texStorage2D"](x0, x1, x2, x3, x4)
}

function _emscripten_glTexStorage3D(x0, x1, x2, x3, x4, x5) {
    GLctx["texStorage3D"](x0, x1, x2, x3, x4, x5)
}

function _emscripten_glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
    if (GL.currentContext.version >= 2) {
        if (GLctx.currentPixelUnpackBufferBinding) {
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels)
        } else if (pixels) {
            var heap = heapObjectForWebGLType(type);
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
        } else {
            GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, null)
        }
        return
    }
    var pixelData = null;
    if (pixels) pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
    GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData)
}

function _emscripten_glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
    if (GLctx.currentPixelUnpackBufferBinding) {
        GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels)
    } else if (pixels) {
        var heap = heapObjectForWebGLType(type);
        GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap))
    } else {
        GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null)
    }
}

function _emscripten_glTransformFeedbackVaryings(program, count, varyings, bufferMode) {
    program = GL.programs[program];
    var vars = [];
    for (var i = 0; i < count; i++) vars.push(UTF8ToString(HEAP32[varyings + i * 4 >> 2]));
    GLctx["transformFeedbackVaryings"](program, vars, bufferMode)
}

function _emscripten_glUniform1f(location, v0) {
    GLctx.uniform1f(webglGetUniformLocation(location), v0)
}
var miniTempWebGLFloatBuffers = [];

function _emscripten_glUniform1fv(location, count, value) {
    if (GL.currentContext.version >= 2) {
        count && GLctx.uniform1fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count);
        return
    }
    if (count <= 288) {
        var view = miniTempWebGLFloatBuffers[count - 1];
        for (var i = 0; i < count; ++i) {
            view[i] = HEAPF32[value + 4 * i >> 2]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 4 >> 2)
    }
    GLctx.uniform1fv(webglGetUniformLocation(location), view)
}

function _emscripten_glUniform1i(location, v0) {
    GLctx.uniform1i(webglGetUniformLocation(location), v0)
}
var __miniTempWebGLIntBuffers = [];

function _emscripten_glUniform1iv(location, count, value) {
    if (GL.currentContext.version >= 2) {
        count && GLctx.uniform1iv(webglGetUniformLocation(location), HEAP32, value >> 2, count);
        return
    }
    if (count <= 288) {
        var view = __miniTempWebGLIntBuffers[count - 1];
        for (var i = 0; i < count; ++i) {
            view[i] = HEAP32[value + 4 * i >> 2]
        }
    } else {
        var view = HEAP32.subarray(value >> 2, value + count * 4 >> 2)
    }
    GLctx.uniform1iv(webglGetUniformLocation(location), view)
}

function _emscripten_glUniform1ui(location, v0) {
    GLctx.uniform1ui(webglGetUniformLocation(location), v0)
}

function _emscripten_glUniform1uiv(location, count, value) {
    count && GLctx.uniform1uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count)
}

function _emscripten_glUniform2f(location, v0, v1) {
    GLctx.uniform2f(webglGetUniformLocation(location), v0, v1)
}

function _emscripten_glUniform2fv(location, count, value) {
    if (GL.currentContext.version >= 2) {
        count && GLctx.uniform2fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 2);
        return
    }
    if (count <= 144) {
        var view = miniTempWebGLFloatBuffers[2 * count - 1];
        for (var i = 0; i < 2 * count; i += 2) {
            view[i] = HEAPF32[value + 4 * i >> 2];
            view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 8 >> 2)
    }
    GLctx.uniform2fv(webglGetUniformLocation(location), view)
}

function _emscripten_glUniform2i(location, v0, v1) {
    GLctx.uniform2i(webglGetUniformLocation(location), v0, v1)
}

function _emscripten_glUniform2iv(location, count, value) {
    if (GL.currentContext.version >= 2) {
        count && GLctx.uniform2iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 2);
        return
    }
    if (count <= 144) {
        var view = __miniTempWebGLIntBuffers[2 * count - 1];
        for (var i = 0; i < 2 * count; i += 2) {
            view[i] = HEAP32[value + 4 * i >> 2];
            view[i + 1] = HEAP32[value + (4 * i + 4) >> 2]
        }
    } else {
        var view = HEAP32.subarray(value >> 2, value + count * 8 >> 2)
    }
    GLctx.uniform2iv(webglGetUniformLocation(location), view)
}

function _emscripten_glUniform2ui(location, v0, v1) {
    GLctx.uniform2ui(webglGetUniformLocation(location), v0, v1)
}

function _emscripten_glUniform2uiv(location, count, value) {
    count && GLctx.uniform2uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 2)
}

function _emscripten_glUniform3f(location, v0, v1, v2) {
    GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2)
}

function _emscripten_glUniform3fv(location, count, value) {
    if (GL.currentContext.version >= 2) {
        count && GLctx.uniform3fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 3);
        return
    }
    if (count <= 96) {
        var view = miniTempWebGLFloatBuffers[3 * count - 1];
        for (var i = 0; i < 3 * count; i += 3) {
            view[i] = HEAPF32[value + 4 * i >> 2];
            view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
            view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 12 >> 2)
    }
    GLctx.uniform3fv(webglGetUniformLocation(location), view)
}

function _emscripten_glUniform3i(location, v0, v1, v2) {
    GLctx.uniform3i(webglGetUniformLocation(location), v0, v1, v2)
}

function _emscripten_glUniform3iv(location, count, value) {
    if (GL.currentContext.version >= 2) {
        count && GLctx.uniform3iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 3);
        return
    }
    if (count <= 96) {
        var view = __miniTempWebGLIntBuffers[3 * count - 1];
        for (var i = 0; i < 3 * count; i += 3) {
            view[i] = HEAP32[value + 4 * i >> 2];
            view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
            view[i + 2] = HEAP32[value + (4 * i + 8) >> 2]
        }
    } else {
        var view = HEAP32.subarray(value >> 2, value + count * 12 >> 2)
    }
    GLctx.uniform3iv(webglGetUniformLocation(location), view)
}

function _emscripten_glUniform3ui(location, v0, v1, v2) {
    GLctx.uniform3ui(webglGetUniformLocation(location), v0, v1, v2)
}

function _emscripten_glUniform3uiv(location, count, value) {
    count && GLctx.uniform3uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 3)
}

function _emscripten_glUniform4f(location, v0, v1, v2, v3) {
    GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3)
}

function _emscripten_glUniform4fv(location, count, value) {
    if (GL.currentContext.version >= 2) {
        count && GLctx.uniform4fv(webglGetUniformLocation(location), HEAPF32, value >> 2, count * 4);
        return
    }
    if (count <= 72) {
        var view = miniTempWebGLFloatBuffers[4 * count - 1];
        var heap = HEAPF32;
        value >>= 2;
        for (var i = 0; i < 4 * count; i += 4) {
            var dst = value + i;
            view[i] = heap[dst];
            view[i + 1] = heap[dst + 1];
            view[i + 2] = heap[dst + 2];
            view[i + 3] = heap[dst + 3]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 16 >> 2)
    }
    GLctx.uniform4fv(webglGetUniformLocation(location), view)
}

function _emscripten_glUniform4i(location, v0, v1, v2, v3) {
    GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3)
}

function _emscripten_glUniform4iv(location, count, value) {
    if (GL.currentContext.version >= 2) {
        count && GLctx.uniform4iv(webglGetUniformLocation(location), HEAP32, value >> 2, count * 4);
        return
    }
    if (count <= 72) {
        var view = __miniTempWebGLIntBuffers[4 * count - 1];
        for (var i = 0; i < 4 * count; i += 4) {
            view[i] = HEAP32[value + 4 * i >> 2];
            view[i + 1] = HEAP32[value + (4 * i + 4) >> 2];
            view[i + 2] = HEAP32[value + (4 * i + 8) >> 2];
            view[i + 3] = HEAP32[value + (4 * i + 12) >> 2]
        }
    } else {
        var view = HEAP32.subarray(value >> 2, value + count * 16 >> 2)
    }
    GLctx.uniform4iv(webglGetUniformLocation(location), view)
}

function _emscripten_glUniform4ui(location, v0, v1, v2, v3) {
    GLctx.uniform4ui(webglGetUniformLocation(location), v0, v1, v2, v3)
}

function _emscripten_glUniform4uiv(location, count, value) {
    count && GLctx.uniform4uiv(webglGetUniformLocation(location), HEAPU32, value >> 2, count * 4)
}

function _emscripten_glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding) {
    program = GL.programs[program];
    GLctx["uniformBlockBinding"](program, uniformBlockIndex, uniformBlockBinding)
}

function _emscripten_glUniformMatrix2fv(location, count, transpose, value) {
    if (GL.currentContext.version >= 2) {
        count && GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 4);
        return
    }
    if (count <= 72) {
        var view = miniTempWebGLFloatBuffers[4 * count - 1];
        for (var i = 0; i < 4 * count; i += 4) {
            view[i] = HEAPF32[value + 4 * i >> 2];
            view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
            view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
            view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 16 >> 2)
    }
    GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, view)
}

function _emscripten_glUniformMatrix2x3fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix2x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 6)
}

function _emscripten_glUniformMatrix2x4fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix2x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 8)
}

function _emscripten_glUniformMatrix3fv(location, count, transpose, value) {
    if (GL.currentContext.version >= 2) {
        count && GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 9);
        return
    }
    if (count <= 32) {
        var view = miniTempWebGLFloatBuffers[9 * count - 1];
        for (var i = 0; i < 9 * count; i += 9) {
            view[i] = HEAPF32[value + 4 * i >> 2];
            view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
            view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
            view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2];
            view[i + 4] = HEAPF32[value + (4 * i + 16) >> 2];
            view[i + 5] = HEAPF32[value + (4 * i + 20) >> 2];
            view[i + 6] = HEAPF32[value + (4 * i + 24) >> 2];
            view[i + 7] = HEAPF32[value + (4 * i + 28) >> 2];
            view[i + 8] = HEAPF32[value + (4 * i + 32) >> 2]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 36 >> 2)
    }
    GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view)
}

function _emscripten_glUniformMatrix3x2fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix3x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 6)
}

function _emscripten_glUniformMatrix3x4fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix3x4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 12)
}

function _emscripten_glUniformMatrix4fv(location, count, transpose, value) {
    if (GL.currentContext.version >= 2) {
        count && GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 16);
        return
    }
    if (count <= 18) {
        var view = miniTempWebGLFloatBuffers[16 * count - 1];
        var heap = HEAPF32;
        value >>= 2;
        for (var i = 0; i < 16 * count; i += 16) {
            var dst = value + i;
            view[i] = heap[dst];
            view[i + 1] = heap[dst + 1];
            view[i + 2] = heap[dst + 2];
            view[i + 3] = heap[dst + 3];
            view[i + 4] = heap[dst + 4];
            view[i + 5] = heap[dst + 5];
            view[i + 6] = heap[dst + 6];
            view[i + 7] = heap[dst + 7];
            view[i + 8] = heap[dst + 8];
            view[i + 9] = heap[dst + 9];
            view[i + 10] = heap[dst + 10];
            view[i + 11] = heap[dst + 11];
            view[i + 12] = heap[dst + 12];
            view[i + 13] = heap[dst + 13];
            view[i + 14] = heap[dst + 14];
            view[i + 15] = heap[dst + 15]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 64 >> 2)
    }
    GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view)
}

function _emscripten_glUniformMatrix4x2fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix4x2fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 8)
}

function _emscripten_glUniformMatrix4x3fv(location, count, transpose, value) {
    count && GLctx.uniformMatrix4x3fv(webglGetUniformLocation(location), !!transpose, HEAPF32, value >> 2, count * 12)
}

function _emscripten_glUseProgram(program) {
    program = GL.programs[program];
    GLctx.useProgram(program);
    GLctx.currentProgram = program
}

function _emscripten_glValidateProgram(program) {
    GLctx.validateProgram(GL.programs[program])
}

function _emscripten_glVertexAttrib1f(x0, x1) {
    GLctx["vertexAttrib1f"](x0, x1)
}

function _emscripten_glVertexAttrib1fv(index, v) {
    GLctx.vertexAttrib1f(index, HEAPF32[v >> 2])
}

function _emscripten_glVertexAttrib2f(x0, x1, x2) {
    GLctx["vertexAttrib2f"](x0, x1, x2)
}

function _emscripten_glVertexAttrib2fv(index, v) {
    GLctx.vertexAttrib2f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2])
}

function _emscripten_glVertexAttrib3f(x0, x1, x2, x3) {
    GLctx["vertexAttrib3f"](x0, x1, x2, x3)
}

function _emscripten_glVertexAttrib3fv(index, v) {
    GLctx.vertexAttrib3f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2], HEAPF32[v + 8 >> 2])
}

function _emscripten_glVertexAttrib4f(x0, x1, x2, x3, x4) {
    GLctx["vertexAttrib4f"](x0, x1, x2, x3, x4)
}

function _emscripten_glVertexAttrib4fv(index, v) {
    GLctx.vertexAttrib4f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2], HEAPF32[v + 8 >> 2], HEAPF32[v + 12 >> 2])
}

function _emscripten_glVertexAttribDivisor(index, divisor) {
    GLctx["vertexAttribDivisor"](index, divisor)
}

function _emscripten_glVertexAttribDivisorANGLE(index, divisor) {
    GLctx["vertexAttribDivisor"](index, divisor)
}

function _emscripten_glVertexAttribDivisorARB(index, divisor) {
    GLctx["vertexAttribDivisor"](index, divisor)
}

function _emscripten_glVertexAttribDivisorEXT(index, divisor) {
    GLctx["vertexAttribDivisor"](index, divisor)
}

function _emscripten_glVertexAttribDivisorNV(index, divisor) {
    GLctx["vertexAttribDivisor"](index, divisor)
}

function _emscripten_glVertexAttribI4i(x0, x1, x2, x3, x4) {
    GLctx["vertexAttribI4i"](x0, x1, x2, x3, x4)
}

function _emscripten_glVertexAttribI4iv(index, v) {
    GLctx.vertexAttribI4i(index, HEAP32[v >> 2], HEAP32[v + 4 >> 2], HEAP32[v + 8 >> 2], HEAP32[v + 12 >> 2])
}

function _emscripten_glVertexAttribI4ui(x0, x1, x2, x3, x4) {
    GLctx["vertexAttribI4ui"](x0, x1, x2, x3, x4)
}

function _emscripten_glVertexAttribI4uiv(index, v) {
    GLctx.vertexAttribI4ui(index, HEAPU32[v >> 2], HEAPU32[v + 4 >> 2], HEAPU32[v + 8 >> 2], HEAPU32[v + 12 >> 2])
}

function _emscripten_glVertexAttribIPointer(index, size, type, stride, ptr) {
    GLctx["vertexAttribIPointer"](index, size, type, stride, ptr)
}

function _emscripten_glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
    var cb = GL.currentContext.clientBuffers[index];
    if (!GLctx.currentArrayBufferBinding) {
        cb.size = size;
        cb.type = type;
        cb.normalized = normalized;
        cb.stride = stride;
        cb.ptr = ptr;
        cb.clientside = true;
        cb.vertexAttribPointerAdaptor = function (index, size, type, normalized, stride, ptr) {
            this.vertexAttribPointer(index, size, type, normalized, stride, ptr)
        };
        return
    }
    cb.clientside = false;
    GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr)
}

function _emscripten_glViewport(x0, x1, x2, x3) {
    GLctx["viewport"](x0, x1, x2, x3)
}

function _emscripten_glWaitSync(sync, flags, timeoutLo, timeoutHi) {
    GLctx.waitSync(GL.syncs[sync], flags, convertI32PairToI53(timeoutLo, timeoutHi))
}

function _emscripten_has_asyncify() {
    return 1
}

function reallyNegative(x) {
    return x < 0 || x === 0 && 1 / x === -Infinity
}

function convertU32PairToI53(lo, hi) {
    return (lo >>> 0) + (hi >>> 0) * 4294967296
}

function reSign(value, bits) {
    if (value <= 0) {
        return value
    }
    var half = bits <= 32 ? Math.abs(1 << bits - 1) : Math.pow(2, bits - 1);
    if (value >= half && (bits <= 32 || value > half)) {
        value = -2 * half + value
    }
    return value
}

function unSign(value, bits) {
    if (value >= 0) {
        return value
    }
    return bits <= 32 ? 2 * Math.abs(1 << bits - 1) + value : Math.pow(2, bits) + value
}

function strLen(ptr) {
    var end = ptr;
    while (HEAPU8[end]) ++end;
    return end - ptr
}

function formatString(format, varargs) {
    var textIndex = format;
    var argIndex = varargs;

    function prepVararg(ptr, type) {
        if (type === "double" || type === "i64") {
            if (ptr & 7) {
                ptr += 4
            }
        } else {}
        return ptr
    }

    function getNextArg(type) {
        var ret;
        argIndex = prepVararg(argIndex, type);
        if (type === "double") {
            ret = HEAPF64[argIndex >> 3];
            argIndex += 8
        } else if (type == "i64") {
            ret = [HEAP32[argIndex >> 2], HEAP32[argIndex + 4 >> 2]];
            argIndex += 8
        } else {
            type = "i32";
            ret = HEAP32[argIndex >> 2];
            argIndex += 4
        }
        return ret
    }
    var ret = [];
    var curr, next, currArg;
    while (1) {
        var startTextIndex = textIndex;
        curr = HEAP8[textIndex >> 0];
        if (curr === 0) break;
        next = HEAP8[textIndex + 1 >> 0];
        if (curr == 37) {
            var flagAlwaysSigned = false;
            var flagLeftAlign = false;
            var flagAlternative = false;
            var flagZeroPad = false;
            var flagPadSign = false;
            flagsLoop: while (1) {
                switch (next) {
                    case 43:
                        flagAlwaysSigned = true;
                        break;
                    case 45:
                        flagLeftAlign = true;
                        break;
                    case 35:
                        flagAlternative = true;
                        break;
                    case 48:
                        if (flagZeroPad) {
                            break flagsLoop
                        } else {
                            flagZeroPad = true;
                            break
                        }
                    case 32:
                        flagPadSign = true;
                        break;
                    default:
                        break flagsLoop
                }
                textIndex++;
                next = HEAP8[textIndex + 1 >> 0]
            }
            var width = 0;
            if (next == 42) {
                width = getNextArg("i32");
                textIndex++;
                next = HEAP8[textIndex + 1 >> 0]
            } else {
                while (next >= 48 && next <= 57) {
                    width = width * 10 + (next - 48);
                    textIndex++;
                    next = HEAP8[textIndex + 1 >> 0]
                }
            }
            var precisionSet = false,
                precision = -1;
            if (next == 46) {
                precision = 0;
                precisionSet = true;
                textIndex++;
                next = HEAP8[textIndex + 1 >> 0];
                if (next == 42) {
                    precision = getNextArg("i32");
                    textIndex++
                } else {
                    while (1) {
                        var precisionChr = HEAP8[textIndex + 1 >> 0];
                        if (precisionChr < 48 || precisionChr > 57) break;
                        precision = precision * 10 + (precisionChr - 48);
                        textIndex++
                    }
                }
                next = HEAP8[textIndex + 1 >> 0]
            }
            if (precision < 0) {
                precision = 6;
                precisionSet = false
            }
            var argSize;
            switch (String.fromCharCode(next)) {
                case "h":
                    var nextNext = HEAP8[textIndex + 2 >> 0];
                    if (nextNext == 104) {
                        textIndex++;
                        argSize = 1
                    } else {
                        argSize = 2
                    }
                    break;
                case "l":
                    var nextNext = HEAP8[textIndex + 2 >> 0];
                    if (nextNext == 108) {
                        textIndex++;
                        argSize = 8
                    } else {
                        argSize = 4
                    }
                    break;
                case "L":
                case "q":
                case "j":
                    argSize = 8;
                    break;
                case "z":
                case "t":
                case "I":
                    argSize = 4;
                    break;
                default:
                    argSize = null
            }
            if (argSize) textIndex++;
            next = HEAP8[textIndex + 1 >> 0];
            switch (String.fromCharCode(next)) {
                case "d":
                case "i":
                case "u":
                case "o":
                case "x":
                case "X":
                case "p": {
                    var signed = next == 100 || next == 105;
                    argSize = argSize || 4;
                    currArg = getNextArg("i" + argSize * 8);
                    var argText;
                    if (argSize == 8) {
                        currArg = next == 117 ? convertU32PairToI53(currArg[0], currArg[1]) : convertI32PairToI53(currArg[0], currArg[1])
                    }
                    if (argSize <= 4) {
                        var limit = Math.pow(256, argSize) - 1;
                        currArg = (signed ? reSign : unSign)(currArg & limit, argSize * 8)
                    }
                    var currAbsArg = Math.abs(currArg);
                    var prefix = "";
                    if (next == 100 || next == 105) {
                        argText = reSign(currArg, 8 * argSize).toString(10)
                    } else if (next == 117) {
                        argText = unSign(currArg, 8 * argSize).toString(10);
                        currArg = Math.abs(currArg)
                    } else if (next == 111) {
                        argText = (flagAlternative ? "0" : "") + currAbsArg.toString(8)
                    } else if (next == 120 || next == 88) {
                        prefix = flagAlternative && currArg != 0 ? "0x" : "";
                        if (currArg < 0) {
                            currArg = -currArg;
                            argText = (currAbsArg - 1).toString(16);
                            var buffer = [];
                            for (var i = 0; i < argText.length; i++) {
                                buffer.push((15 - parseInt(argText[i], 16)).toString(16))
                            }
                            argText = buffer.join("");
                            while (argText.length < argSize * 2) argText = "f" + argText
                        } else {
                            argText = currAbsArg.toString(16)
                        }
                        if (next == 88) {
                            prefix = prefix.toUpperCase();
                            argText = argText.toUpperCase()
                        }
                    } else if (next == 112) {
                        if (currAbsArg === 0) {
                            argText = "(nil)"
                        } else {
                            prefix = "0x";
                            argText = currAbsArg.toString(16)
                        }
                    }
                    if (precisionSet) {
                        while (argText.length < precision) {
                            argText = "0" + argText
                        }
                    }
                    if (currArg >= 0) {
                        if (flagAlwaysSigned) {
                            prefix = "+" + prefix
                        } else if (flagPadSign) {
                            prefix = " " + prefix
                        }
                    }
                    if (argText.charAt(0) == "-") {
                        prefix = "-" + prefix;
                        argText = argText.substr(1)
                    }
                    while (prefix.length + argText.length < width) {
                        if (flagLeftAlign) {
                            argText += " "
                        } else {
                            if (flagZeroPad) {
                                argText = "0" + argText
                            } else {
                                prefix = " " + prefix
                            }
                        }
                    }
                    argText = prefix + argText;
                    argText.split("").forEach(function (chr) {
                        ret.push(chr.charCodeAt(0))
                    });
                    break
                }
                case "f":
                case "F":
                case "e":
                case "E":
                case "g":
                case "G": {
                    currArg = getNextArg("double");
                    var argText;
                    if (isNaN(currArg)) {
                        argText = "nan";
                        flagZeroPad = false
                    } else if (!isFinite(currArg)) {
                        argText = (currArg < 0 ? "-" : "") + "inf";
                        flagZeroPad = false
                    } else {
                        var isGeneral = false;
                        var effectivePrecision = Math.min(precision, 20);
                        if (next == 103 || next == 71) {
                            isGeneral = true;
                            precision = precision || 1;
                            var exponent = parseInt(currArg.toExponential(effectivePrecision).split("e")[1], 10);
                            if (precision > exponent && exponent >= -4) {
                                next = (next == 103 ? "f" : "F").charCodeAt(0);
                                precision -= exponent + 1
                            } else {
                                next = (next == 103 ? "e" : "E").charCodeAt(0);
                                precision--
                            }
                            effectivePrecision = Math.min(precision, 20)
                        }
                        if (next == 101 || next == 69) {
                            argText = currArg.toExponential(effectivePrecision);
                            if (/[eE][-+]\d$/.test(argText)) {
                                argText = argText.slice(0, -1) + "0" + argText.slice(-1)
                            }
                        } else if (next == 102 || next == 70) {
                            argText = currArg.toFixed(effectivePrecision);
                            if (currArg === 0 && reallyNegative(currArg)) {
                                argText = "-" + argText
                            }
                        }
                        var parts = argText.split("e");
                        if (isGeneral && !flagAlternative) {
                            while (parts[0].length > 1 && parts[0].includes(".") && (parts[0].slice(-1) == "0" || parts[0].slice(-1) == ".")) {
                                parts[0] = parts[0].slice(0, -1)
                            }
                        } else {
                            if (flagAlternative && argText.indexOf(".") == -1) parts[0] += ".";
                            while (precision > effectivePrecision++) parts[0] += "0"
                        }
                        argText = parts[0] + (parts.length > 1 ? "e" + parts[1] : "");
                        if (next == 69) argText = argText.toUpperCase();
                        if (currArg >= 0) {
                            if (flagAlwaysSigned) {
                                argText = "+" + argText
                            } else if (flagPadSign) {
                                argText = " " + argText
                            }
                        }
                    }
                    while (argText.length < width) {
                        if (flagLeftAlign) {
                            argText += " "
                        } else {
                            if (flagZeroPad && (argText[0] == "-" || argText[0] == "+")) {
                                argText = argText[0] + "0" + argText.slice(1)
                            } else {
                                argText = (flagZeroPad ? "0" : " ") + argText
                            }
                        }
                    }
                    if (next < 97) argText = argText.toUpperCase();
                    argText.split("").forEach(function (chr) {
                        ret.push(chr.charCodeAt(0))
                    });
                    break
                }
                case "s": {
                    var arg = getNextArg("i8*");
                    var argLength = arg ? strLen(arg) : "(null)".length;
                    if (precisionSet) argLength = Math.min(argLength, precision);
                    if (!flagLeftAlign) {
                        while (argLength < width--) {
                            ret.push(32)
                        }
                    }
                    if (arg) {
                        for (var i = 0; i < argLength; i++) {
                            ret.push(HEAPU8[arg++ >> 0])
                        }
                    } else {
                        ret = ret.concat(intArrayFromString("(null)".substr(0, argLength), true))
                    }
                    if (flagLeftAlign) {
                        while (argLength < width--) {
                            ret.push(32)
                        }
                    }
                    break
                }
                case "c": {
                    if (flagLeftAlign) ret.push(getNextArg("i8"));
                    while (--width > 0) {
                        ret.push(32)
                    }
                    if (!flagLeftAlign) ret.push(getNextArg("i8"));
                    break
                }
                case "n": {
                    var ptr = getNextArg("i32*");
                    HEAP32[ptr >> 2] = ret.length;
                    break
                }
                case "%": {
                    ret.push(curr);
                    break
                }
                default: {
                    for (var i = startTextIndex; i < textIndex + 2; i++) {
                        ret.push(HEAP8[i >> 0])
                    }
                }
            }
            textIndex += 2
        } else {
            ret.push(curr);
            textIndex += 1
        }
    }
    return ret
}

function _emscripten_log_js(flags, str) {
    if (flags & 24) {
        str = str.replace(/\s+$/, "");
        str += (str.length > 0 ? "\n" : "") + _emscripten_get_callstack_js(flags)
    }
    if (flags & 1) {
        if (flags & 4) {
            console.error(str)
        } else if (flags & 2) {
            console.warn(str)
        } else if (flags & 512) {
            console.info(str)
        } else if (flags & 256) {
            console.debug(str)
        } else {
            console.log(str)
        }
    } else if (flags & 6) {
        err(str)
    } else {
        out(str)
    }
}

function _emscripten_log(flags, format, varargs) {
    var result = formatString(format, varargs);
    var str = UTF8ArrayToString(result, 0);
    _emscripten_log_js(flags, str)
}

function _emscripten_memcpy_big(dest, src, num) {
    HEAPU8.copyWithin(dest, src, src + num)
}

function doRequestFullscreen(target, strategy) {
    if (!JSEvents.fullscreenEnabled()) return -1;
    target = findEventTarget(target);
    if (!target) return -4;
    if (!target.requestFullscreen && !target.webkitRequestFullscreen) {
        return -3
    }
    var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
    if (!canPerformRequests) {
        if (strategy.deferUntilInEventHandler) {
            JSEvents.deferCall(JSEvents_requestFullscreen, 1, [target, strategy]);
            return 1
        }
        return -2
    }
    return JSEvents_requestFullscreen(target, strategy)
}

function _emscripten_request_fullscreen_strategy(target, deferUntilInEventHandler, fullscreenStrategy) {
    var strategy = {
        scaleMode: HEAP32[fullscreenStrategy >> 2],
        canvasResolutionScaleMode: HEAP32[fullscreenStrategy + 4 >> 2],
        filteringMode: HEAP32[fullscreenStrategy + 8 >> 2],
        deferUntilInEventHandler: deferUntilInEventHandler,
        canvasResizedCallback: HEAP32[fullscreenStrategy + 12 >> 2],
        canvasResizedCallbackUserData: HEAP32[fullscreenStrategy + 16 >> 2]
    };
    return doRequestFullscreen(target, strategy)
}

function _emscripten_request_pointerlock(target, deferUntilInEventHandler) {
    target = findEventTarget(target);
    if (!target) return -4;
    if (!target.requestPointerLock && !target.msRequestPointerLock) {
        return -1
    }
    var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
    if (!canPerformRequests) {
        if (deferUntilInEventHandler) {
            JSEvents.deferCall(requestPointerLock, 2, [target]);
            return 1
        }
        return -2
    }
    return requestPointerLock(target)
}

function emscripten_realloc_buffer(size) {
    try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1
    } catch (e) {}
}

function _emscripten_resize_heap(requestedSize) {
    var oldSize = HEAPU8.length;
    requestedSize = requestedSize >>> 0;
    var maxHeapSize = getHeapMax();
    if (requestedSize > maxHeapSize) {
        return false
    }
    let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
    for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
            return true
        }
    }
    return false
}

function _emscripten_run_script(ptr) {
    eval(UTF8ToString(ptr))
}

function _emscripten_run_script_int(ptr) {
    return eval(UTF8ToString(ptr)) | 0
}

function _emscripten_run_script_string(ptr) {
    var s = eval(UTF8ToString(ptr));
    if (s == null) {
        return 0
    }
    s += "";
    var me = _emscripten_run_script_string;
    var len = lengthBytesUTF8(s);
    if (!me.bufferSize || me.bufferSize < len + 1) {
        if (me.bufferSize) _free(me.buffer);
        me.bufferSize = len + 1;
        me.buffer = _malloc(me.bufferSize)
    }
    stringToUTF8(s, me.buffer, me.bufferSize);
    return me.buffer
}

function _emscripten_sample_gamepad_data() {
    return (JSEvents.lastGamepadState = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null) ? 0 : -1
}

function registerBeforeUnloadEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString) {
    var beforeUnloadEventHandlerFunc = function (ev) {
        var e = ev || event;
        var confirmationMessage = function (a1, a2, a3) {
            return dynCall_iiii.apply(null, [callbackfunc, a1, a2, a3])
        }(eventTypeId, 0, userData);
        if (confirmationMessage) {
            confirmationMessage = UTF8ToString(confirmationMessage)
        }
        if (confirmationMessage) {
            e.preventDefault();
            e.returnValue = confirmationMessage;
            return confirmationMessage
        }
    };
    var eventHandler = {
        target: findEventTarget(target),
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: beforeUnloadEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_beforeunload_callback_on_thread(userData, callbackfunc, targetThread) {
    if (typeof onbeforeunload == "undefined") return -1;
    if (targetThread !== 1) return -5;
    registerBeforeUnloadEventCallback(2, userData, true, callbackfunc, 28, "beforeunload");
    return 0
}

function registerFocusEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.focusEvent) JSEvents.focusEvent = _malloc(256);
    var focusEventHandlerFunc = function (ev) {
        var e = ev || event;
        var nodeName = JSEvents.getNodeNameForTarget(e.target);
        var id = e.target.id ? e.target.id : "";
        var focusEvent = JSEvents.focusEvent;
        stringToUTF8(nodeName, focusEvent + 0, 128);
        stringToUTF8(id, focusEvent + 128, 128);
        if (function (a1, a2, a3) {
                return dynCall_iiii.apply(null, [callbackfunc, a1, a2, a3])
            }(eventTypeId, focusEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: findEventTarget(target),
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: focusEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_blur_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerFocusEventCallback(target, userData, useCapture, callbackfunc, 12, "blur", targetThread);
    return 0
}

function _emscripten_set_element_css_size(target, width, height) {
    target = findEventTarget(target);
    if (!target) return -4;
    target.style.width = width + "px";
    target.style.height = height + "px";
    return 0
}

function _emscripten_set_focus_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerFocusEventCallback(target, userData, useCapture, callbackfunc, 13, "focus", targetThread);
    return 0
}

function fillFullscreenChangeEventData(eventStruct) {
    var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var isFullscreen = !!fullscreenElement;
    HEAP32[eventStruct >> 2] = isFullscreen;
    HEAP32[eventStruct + 4 >> 2] = JSEvents.fullscreenEnabled();
    var reportedElement = isFullscreen ? fullscreenElement : JSEvents.previousFullscreenElement;
    var nodeName = JSEvents.getNodeNameForTarget(reportedElement);
    var id = reportedElement && reportedElement.id ? reportedElement.id : "";
    stringToUTF8(nodeName, eventStruct + 8, 128);
    stringToUTF8(id, eventStruct + 136, 128);
    HEAP32[eventStruct + 264 >> 2] = reportedElement ? reportedElement.clientWidth : 0;
    HEAP32[eventStruct + 268 >> 2] = reportedElement ? reportedElement.clientHeight : 0;
    HEAP32[eventStruct + 272 >> 2] = screen.width;
    HEAP32[eventStruct + 276 >> 2] = screen.height;
    if (isFullscreen) {
        JSEvents.previousFullscreenElement = fullscreenElement
    }
}

function registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.fullscreenChangeEvent) JSEvents.fullscreenChangeEvent = _malloc(280);
    var fullscreenChangeEventhandlerFunc = function (ev) {
        var e = ev || event;
        var fullscreenChangeEvent = JSEvents.fullscreenChangeEvent;
        fillFullscreenChangeEventData(fullscreenChangeEvent);
        if (function (a1, a2, a3) {
                return dynCall_iiii.apply(null, [callbackfunc, a1, a2, a3])
            }(eventTypeId, fullscreenChangeEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: fullscreenChangeEventhandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_fullscreenchange_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (!JSEvents.fullscreenEnabled()) return -1;
    target = findEventTarget(target);
    if (!target) return -4;
    registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "fullscreenchange", targetThread);
    registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "webkitfullscreenchange", targetThread);
    return 0
}

function registerGamepadEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.gamepadEvent) JSEvents.gamepadEvent = _malloc(1432);
    var gamepadEventHandlerFunc = function (ev) {
        var e = ev || event;
        var gamepadEvent = JSEvents.gamepadEvent;
        fillGamepadEventData(gamepadEvent, e["gamepad"]);
        if (function (a1, a2, a3) {
                return dynCall_iiii.apply(null, [callbackfunc, a1, a2, a3])
            }(eventTypeId, gamepadEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: findEventTarget(target),
        allowsDeferredCalls: true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: gamepadEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_gamepadconnected_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
    if (!navigator.getGamepads && !navigator.webkitGetGamepads) return -1;
    registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 26, "gamepadconnected", targetThread);
    return 0
}

function _emscripten_set_gamepaddisconnected_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
    if (!navigator.getGamepads && !navigator.webkitGetGamepads) return -1;
    registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 27, "gamepaddisconnected", targetThread);
    return 0
}

function registerKeyEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.keyEvent) JSEvents.keyEvent = _malloc(176);
    var keyEventHandlerFunc = function (e) {
        var keyEventData = JSEvents.keyEvent;
        HEAPF64[keyEventData >> 3] = e.timeStamp;
        var idx = keyEventData >> 2;
        HEAP32[idx + 2] = e.location;
        HEAP32[idx + 3] = e.ctrlKey;
        HEAP32[idx + 4] = e.shiftKey;
        HEAP32[idx + 5] = e.altKey;
        HEAP32[idx + 6] = e.metaKey;
        HEAP32[idx + 7] = e.repeat;
        HEAP32[idx + 8] = e.charCode;
        HEAP32[idx + 9] = e.keyCode;
        HEAP32[idx + 10] = e.which;
        stringToUTF8(e.key || "", keyEventData + 44, 32);
        stringToUTF8(e.code || "", keyEventData + 76, 32);
        stringToUTF8(e.char || "", keyEventData + 108, 32);
        stringToUTF8(e.locale || "", keyEventData + 140, 32);
        if (function (a1, a2, a3) {
                return dynCall_iiii.apply(null, [callbackfunc, a1, a2, a3])
            }(eventTypeId, keyEventData, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: findEventTarget(target),
        allowsDeferredCalls: true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: keyEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_keydown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerKeyEventCallback(target, userData, useCapture, callbackfunc, 2, "keydown", targetThread);
    return 0
}

function _emscripten_set_keypress_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerKeyEventCallback(target, userData, useCapture, callbackfunc, 1, "keypress", targetThread);
    return 0
}

function _emscripten_set_keyup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerKeyEventCallback(target, userData, useCapture, callbackfunc, 3, "keyup", targetThread);
    return 0
}

function _emscripten_set_main_loop_arg(func, arg, fps, simulateInfiniteLoop) {
    var browserIterationFunc = () => (function (a1) {
        dynCall_vi.apply(null, [func, a1])
    })(arg);
    setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop, arg)
}

function fillMouseEventData(eventStruct, e, target) {
    HEAPF64[eventStruct >> 3] = e.timeStamp;
    var idx = eventStruct >> 2;
    HEAP32[idx + 2] = e.screenX;
    HEAP32[idx + 3] = e.screenY;
    HEAP32[idx + 4] = e.clientX;
    HEAP32[idx + 5] = e.clientY;
    HEAP32[idx + 6] = e.ctrlKey;
    HEAP32[idx + 7] = e.shiftKey;
    HEAP32[idx + 8] = e.altKey;
    HEAP32[idx + 9] = e.metaKey;
    HEAP16[idx * 2 + 20] = e.button;
    HEAP16[idx * 2 + 21] = e.buttons;
    HEAP32[idx + 11] = e["movementX"];
    HEAP32[idx + 12] = e["movementY"];
    var rect = getBoundingClientRect(target);
    HEAP32[idx + 13] = e.clientX - rect.left;
    HEAP32[idx + 14] = e.clientY - rect.top
}

function registerMouseEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.mouseEvent) JSEvents.mouseEvent = _malloc(72);
    target = findEventTarget(target);
    var mouseEventHandlerFunc = function (ev) {
        var e = ev || event;
        fillMouseEventData(JSEvents.mouseEvent, e, target);
        if (function (a1, a2, a3) {
                return dynCall_iiii.apply(null, [callbackfunc, a1, a2, a3])
            }(eventTypeId, JSEvents.mouseEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: eventTypeString != "mousemove" && eventTypeString != "mouseenter" && eventTypeString != "mouseleave",
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: mouseEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_mousedown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerMouseEventCallback(target, userData, useCapture, callbackfunc, 5, "mousedown", targetThread);
    return 0
}

function _emscripten_set_mouseenter_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerMouseEventCallback(target, userData, useCapture, callbackfunc, 33, "mouseenter", targetThread);
    return 0
}

function _emscripten_set_mouseleave_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerMouseEventCallback(target, userData, useCapture, callbackfunc, 34, "mouseleave", targetThread);
    return 0
}

function _emscripten_set_mousemove_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerMouseEventCallback(target, userData, useCapture, callbackfunc, 8, "mousemove", targetThread);
    return 0
}

function _emscripten_set_mouseup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerMouseEventCallback(target, userData, useCapture, callbackfunc, 6, "mouseup", targetThread);
    return 0
}

function fillPointerlockChangeEventData(eventStruct) {
    var pointerLockElement = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var isPointerlocked = !!pointerLockElement;
    HEAP32[eventStruct >> 2] = isPointerlocked;
    var nodeName = JSEvents.getNodeNameForTarget(pointerLockElement);
    var id = pointerLockElement && pointerLockElement.id ? pointerLockElement.id : "";
    stringToUTF8(nodeName, eventStruct + 4, 128);
    stringToUTF8(id, eventStruct + 132, 128)
}

function registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.pointerlockChangeEvent) JSEvents.pointerlockChangeEvent = _malloc(260);
    var pointerlockChangeEventHandlerFunc = function (ev) {
        var e = ev || event;
        var pointerlockChangeEvent = JSEvents.pointerlockChangeEvent;
        fillPointerlockChangeEventData(pointerlockChangeEvent);
        if (function (a1, a2, a3) {
                return dynCall_iiii.apply(null, [callbackfunc, a1, a2, a3])
            }(eventTypeId, pointerlockChangeEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: pointerlockChangeEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_pointerlockchange_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
        return -1
    }
    target = findEventTarget(target);
    if (!target) return -4;
    registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "pointerlockchange", targetThread);
    registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mozpointerlockchange", targetThread);
    registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "webkitpointerlockchange", targetThread);
    registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mspointerlockchange", targetThread);
    return 0
}

function registerUiEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.uiEvent) JSEvents.uiEvent = _malloc(36);
    target = findEventTarget(target);
    var uiEventHandlerFunc = function (ev) {
        var e = ev || event;
        if (e.target != target) {
            return
        }
        var b = document.body;
        if (!b) {
            return
        }
        var uiEvent = JSEvents.uiEvent;
        HEAP32[uiEvent >> 2] = e.detail;
        HEAP32[uiEvent + 4 >> 2] = b.clientWidth;
        HEAP32[uiEvent + 8 >> 2] = b.clientHeight;
        HEAP32[uiEvent + 12 >> 2] = innerWidth;
        HEAP32[uiEvent + 16 >> 2] = innerHeight;
        HEAP32[uiEvent + 20 >> 2] = outerWidth;
        HEAP32[uiEvent + 24 >> 2] = outerHeight;
        HEAP32[uiEvent + 28 >> 2] = pageXOffset;
        HEAP32[uiEvent + 32 >> 2] = pageYOffset;
        if (function (a1, a2, a3) {
                return dynCall_iiii.apply(null, [callbackfunc, a1, a2, a3])
            }(eventTypeId, uiEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: uiEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_resize_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerUiEventCallback(target, userData, useCapture, callbackfunc, 10, "resize", targetThread);
    return 0
}

function registerTouchEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.touchEvent) JSEvents.touchEvent = _malloc(1696);
    target = findEventTarget(target);
    var touchEventHandlerFunc = function (e) {
        var t, touches = {},
            et = e.touches;
        for (var i = 0; i < et.length; ++i) {
            t = et[i];
            t.isChanged = t.onTarget = 0;
            touches[t.identifier] = t
        }
        for (var i = 0; i < e.changedTouches.length; ++i) {
            t = e.changedTouches[i];
            t.isChanged = 1;
            touches[t.identifier] = t
        }
        for (var i = 0; i < e.targetTouches.length; ++i) {
            touches[e.targetTouches[i].identifier].onTarget = 1
        }
        var touchEvent = JSEvents.touchEvent;
        HEAPF64[touchEvent >> 3] = e.timeStamp;
        var idx = touchEvent >> 2;
        HEAP32[idx + 3] = e.ctrlKey;
        HEAP32[idx + 4] = e.shiftKey;
        HEAP32[idx + 5] = e.altKey;
        HEAP32[idx + 6] = e.metaKey;
        idx += 7;
        var targetRect = getBoundingClientRect(target);
        var numTouches = 0;
        for (var i in touches) {
            t = touches[i];
            HEAP32[idx + 0] = t.identifier;
            HEAP32[idx + 1] = t.screenX;
            HEAP32[idx + 2] = t.screenY;
            HEAP32[idx + 3] = t.clientX;
            HEAP32[idx + 4] = t.clientY;
            HEAP32[idx + 5] = t.pageX;
            HEAP32[idx + 6] = t.pageY;
            HEAP32[idx + 7] = t.isChanged;
            HEAP32[idx + 8] = t.onTarget;
            HEAP32[idx + 9] = t.clientX - targetRect.left;
            HEAP32[idx + 10] = t.clientY - targetRect.top;
            idx += 13;
            if (++numTouches > 31) {
                break
            }
        }
        HEAP32[touchEvent + 8 >> 2] = numTouches;
        if (function (a1, a2, a3) {
                return dynCall_iiii.apply(null, [callbackfunc, a1, a2, a3])
            }(eventTypeId, touchEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: eventTypeString == "touchstart" || eventTypeString == "touchend",
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: touchEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_touchcancel_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerTouchEventCallback(target, userData, useCapture, callbackfunc, 25, "touchcancel", targetThread);
    return 0
}

function _emscripten_set_touchend_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerTouchEventCallback(target, userData, useCapture, callbackfunc, 23, "touchend", targetThread);
    return 0
}

function _emscripten_set_touchmove_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerTouchEventCallback(target, userData, useCapture, callbackfunc, 24, "touchmove", targetThread);
    return 0
}

function _emscripten_set_touchstart_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    registerTouchEventCallback(target, userData, useCapture, callbackfunc, 22, "touchstart", targetThread);
    return 0
}

function fillVisibilityChangeEventData(eventStruct) {
    var visibilityStates = ["hidden", "visible", "prerender", "unloaded"];
    var visibilityState = visibilityStates.indexOf(document.visibilityState);
    HEAP32[eventStruct >> 2] = document.hidden;
    HEAP32[eventStruct + 4 >> 2] = visibilityState
}

function registerVisibilityChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.visibilityChangeEvent) JSEvents.visibilityChangeEvent = _malloc(8);
    var visibilityChangeEventHandlerFunc = function (ev) {
        var e = ev || event;
        var visibilityChangeEvent = JSEvents.visibilityChangeEvent;
        fillVisibilityChangeEventData(visibilityChangeEvent);
        if (function (a1, a2, a3) {
                return dynCall_iiii.apply(null, [callbackfunc, a1, a2, a3])
            }(eventTypeId, visibilityChangeEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: visibilityChangeEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_visibilitychange_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
    if (!specialHTMLTargets[1]) {
        return -4
    }
    registerVisibilityChangeEventCallback(specialHTMLTargets[1], userData, useCapture, callbackfunc, 21, "visibilitychange", targetThread);
    return 0
}

function registerWheelEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.wheelEvent) JSEvents.wheelEvent = _malloc(104);
    var wheelHandlerFunc = function (ev) {
        var e = ev || event;
        var wheelEvent = JSEvents.wheelEvent;
        fillMouseEventData(wheelEvent, e, target);
        HEAPF64[wheelEvent + 72 >> 3] = e["deltaX"];
        HEAPF64[wheelEvent + 80 >> 3] = e["deltaY"];
        HEAPF64[wheelEvent + 88 >> 3] = e["deltaZ"];
        HEAP32[wheelEvent + 96 >> 2] = e["deltaMode"];
        if (function (a1, a2, a3) {
                return dynCall_iiii.apply(null, [callbackfunc, a1, a2, a3])
            }(eventTypeId, wheelEvent, userData)) e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: wheelHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}

function _emscripten_set_wheel_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    target = findEventTarget(target);
    if (typeof target.onwheel != "undefined") {
        registerWheelEventCallback(target, userData, useCapture, callbackfunc, 9, "wheel", targetThread);
        return 0
    } else {
        return -1
    }
}

function _emscripten_set_window_title(title) {
    setWindowTitle(UTF8ToString(title))
}

function _emscripten_sleep(ms) {
    return Asyncify.handleSleep(wakeUp => safeSetTimeout(wakeUp, ms))
}

function _emscripten_webgl_enable_extension(contextHandle, extension) {
    var context = GL.getContext(contextHandle);
    var extString = UTF8ToString(extension);
    if (extString.startsWith("GL_")) extString = extString.substr(3);
    if (extString == "ANGLE_instanced_arrays") __webgl_enable_ANGLE_instanced_arrays(GLctx);
    if (extString == "OES_vertex_array_object") __webgl_enable_OES_vertex_array_object(GLctx);
    if (extString == "WEBGL_draw_buffers") __webgl_enable_WEBGL_draw_buffers(GLctx);
    if (extString == "WEBGL_draw_instanced_base_vertex_base_instance") __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
    if (extString == "WEBGL_multi_draw_instanced_base_vertex_base_instance") __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
    if (extString == "WEBGL_multi_draw") __webgl_enable_WEBGL_multi_draw(GLctx);
    var ext = context.GLctx.getExtension(extString);
    return !!ext
}

function _emscripten_webgl_do_get_current_context() {
    return GL.currentContext ? GL.currentContext.handle : 0
}
var _emscripten_webgl_get_current_context = _emscripten_webgl_do_get_current_context;

function _emscripten_webgl_get_supported_extensions() {
    return stringToNewUTF8(GLctx.getSupportedExtensions().join(" "))
}

function _emscripten_wget(url, file) {
    return Asyncify.handleSleep(wakeUp => {
        var _url = UTF8ToString(url);
        var _file = UTF8ToString(file);
        _file = PATH_FS.resolve(FS.cwd(), _file);
        var destinationDirectory = PATH.dirname(_file);
        FS.createPreloadedFile(destinationDirectory, PATH.basename(_file), _url, true, true, wakeUp, wakeUp, false, false, function () {
            try {
                FS.unlink(_file)
            } catch (e) {}
            FS.mkdirTree(destinationDirectory)
        })
    })
}

function _emscripten_wget_data(url, pbuffer, pnum, perror) {
    return Asyncify.handleSleep(wakeUp => {
        asyncLoad(UTF8ToString(url), byteArray => {
            var buffer = _malloc(byteArray.length);
            HEAPU8.set(byteArray, buffer);
            HEAP32[pbuffer >> 2] = buffer;
            HEAP32[pnum >> 2] = byteArray.length;
            HEAP32[perror >> 2] = 0;
            wakeUp()
        }, () => {
            HEAP32[perror >> 2] = 1;
            wakeUp()
        }, true)
    })
}
var ENV = {};

function getExecutableName() {
    return thisProgram || "./this.program"
}

function getEnvStrings() {
    if (!getEnvStrings.strings) {
        var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = {
            "USER": "web_user",
            "LOGNAME": "web_user",
            "PATH": "/",
            "PWD": "/",
            "HOME": "/home/web_user",
            "LANG": lang,
            "_": getExecutableName()
        };
        for (var x in ENV) {
            if (ENV[x] === undefined) delete env[x];
            else env[x] = ENV[x]
        }
        var strings = [];
        for (var x in env) {
            strings.push(x + "=" + env[x])
        }
        getEnvStrings.strings = strings
    }
    return getEnvStrings.strings
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
    for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer++ >> 0] = str.charCodeAt(i)
    }
    if (!dontAddNull) HEAP8[buffer >> 0] = 0
}

function _environ_get(__environ, environ_buf) {
    var bufSize = 0;
    getEnvStrings().forEach(function (string, i) {
        var ptr = environ_buf + bufSize;
        HEAPU32[__environ + i * 4 >> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1
    });
    return 0
}

function _environ_sizes_get(penviron_count, penviron_buf_size) {
    var strings = getEnvStrings();
    HEAPU32[penviron_count >> 2] = strings.length;
    var bufSize = 0;
    strings.forEach(function (string) {
        bufSize += string.length + 1
    });
    HEAPU32[penviron_buf_size >> 2] = bufSize;
    return 0
}

function _fd_close(fd) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.close(stream);
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return e.errno
    }
}

function _fd_fdstat_get(fd, pbuf) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
        HEAP8[pbuf >> 0] = type;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return e.errno
    }
}

function doReadv(stream, iov, iovcnt, offset) {
    var ret = 0;
    for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[iov + 4 >> 2];
        iov += 8;
        var curr = FS.read(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break
    }
    return ret
}

function _fd_pread(fd, iov, iovcnt, offset_low, offset_high, pnum) {
    try {
        var offset = convertI32PairToI53Checked(offset_low, offset_high);
        if (isNaN(offset)) return 61;
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doReadv(stream, iov, iovcnt, offset);
        HEAPU32[pnum >> 2] = num;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return e.errno
    }
}

function doWritev(stream, iov, iovcnt, offset) {
    var ret = 0;
    for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[iov + 4 >> 2];
        iov += 8;
        var curr = FS.write(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr
    }
    return ret
}

function _fd_pwrite(fd, iov, iovcnt, offset_low, offset_high, pnum) {
    try {
        var offset = convertI32PairToI53Checked(offset_low, offset_high);
        if (isNaN(offset)) return 61;
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doWritev(stream, iov, iovcnt, offset);
        HEAPU32[pnum >> 2] = num;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return e.errno
    }
}

function _fd_read(fd, iov, iovcnt, pnum) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doReadv(stream, iov, iovcnt);
        HEAPU32[pnum >> 2] = num;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return e.errno
    }
}

function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
    try {
        var offset = convertI32PairToI53Checked(offset_low, offset_high);
        if (isNaN(offset)) return 61;
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.llseek(stream, offset, whence);
        tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
        if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return e.errno
    }
}

function _fd_sync(fd) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        return Asyncify.handleSleep(function (wakeUp) {
            var mount = stream.node.mount;
            if (!mount.type.syncfs) {
                wakeUp(0);
                return
            }
            mount.type.syncfs(mount, false, function (err) {
                if (err) {
                    wakeUp(function () {
                        return 29
                    });
                    return
                }
                wakeUp(0)
            })
        })
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return e.errno
    }
}

function _fd_write(fd, iov, iovcnt, pnum) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doWritev(stream, iov, iovcnt);
        HEAPU32[pnum >> 2] = num;
        return 0
    } catch (e) {
        if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
        return e.errno
    }
}

function _getaddrinfo(node, service, hint, out) {
    var addr = 0;
    var port = 0;
    var flags = 0;
    var family = 0;
    var type = 0;
    var proto = 0;
    var ai;

    function allocaddrinfo(family, type, proto, canon, addr, port) {
        var sa, salen, ai;
        var errno;
        salen = family === 10 ? 28 : 16;
        addr = family === 10 ? inetNtop6(addr) : inetNtop4(addr);
        sa = _malloc(salen);
        errno = writeSockaddr(sa, family, addr, port);
        assert(!errno);
        ai = _malloc(32);
        HEAP32[ai + 4 >> 2] = family;
        HEAP32[ai + 8 >> 2] = type;
        HEAP32[ai + 12 >> 2] = proto;
        HEAP32[ai + 24 >> 2] = canon;
        HEAPU32[ai + 20 >> 2] = sa;
        if (family === 10) {
            HEAP32[ai + 16 >> 2] = 28
        } else {
            HEAP32[ai + 16 >> 2] = 16
        }
        HEAP32[ai + 28 >> 2] = 0;
        return ai
    }
    if (hint) {
        flags = HEAP32[hint >> 2];
        family = HEAP32[hint + 4 >> 2];
        type = HEAP32[hint + 8 >> 2];
        proto = HEAP32[hint + 12 >> 2]
    }
    if (type && !proto) {
        proto = type === 2 ? 17 : 6
    }
    if (!type && proto) {
        type = proto === 17 ? 2 : 1
    }
    if (proto === 0) {
        proto = 6
    }
    if (type === 0) {
        type = 1
    }
    if (!node && !service) {
        return -2
    }
    if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
        return -1
    }
    if (hint !== 0 && HEAP32[hint >> 2] & 2 && !node) {
        return -1
    }
    if (flags & 32) {
        return -2
    }
    if (type !== 0 && type !== 1 && type !== 2) {
        return -7
    }
    if (family !== 0 && family !== 2 && family !== 10) {
        return -6
    }
    if (service) {
        service = UTF8ToString(service);
        port = parseInt(service, 10);
        if (isNaN(port)) {
            if (flags & 1024) {
                return -2
            }
            return -8
        }
    }
    if (!node) {
        if (family === 0) {
            family = 2
        }
        if ((flags & 1) === 0) {
            if (family === 2) {
                addr = _htonl(2130706433)
            } else {
                addr = [0, 0, 0, 1]
            }
        }
        ai = allocaddrinfo(family, type, proto, null, addr, port);
        HEAPU32[out >> 2] = ai;
        return 0
    }
    node = UTF8ToString(node);
    addr = inetPton4(node);
    if (addr !== null) {
        if (family === 0 || family === 2) {
            family = 2
        } else if (family === 10 && flags & 8) {
            addr = [0, 0, _htonl(65535), addr];
            family = 10
        } else {
            return -2
        }
    } else {
        addr = inetPton6(node);
        if (addr !== null) {
            if (family === 0 || family === 10) {
                family = 10
            } else {
                return -2
            }
        }
    }
    if (addr != null) {
        ai = allocaddrinfo(family, type, proto, node, addr, port);
        HEAPU32[out >> 2] = ai;
        return 0
    }
    if (flags & 4) {
        return -2
    }
    node = DNS.lookup_name(node);
    addr = inetPton4(node);
    if (family === 0) {
        family = 2
    } else if (family === 10) {
        addr = [0, 0, _htonl(65535), addr]
    }
    ai = allocaddrinfo(family, type, proto, null, addr, port);
    HEAPU32[out >> 2] = ai;
    return 0
}

function _getentropy(buffer, size) {
    if (!_getentropy.randomDevice) {
        _getentropy.randomDevice = getRandomDevice()
    }
    for (var i = 0; i < size; i++) {
        HEAP8[buffer + i >> 0] = _getentropy.randomDevice()
    }
    return 0
}

function getHostByName(name) {
    var ret = _malloc(20);
    var nameBuf = _malloc(name.length + 1);
    stringToUTF8(name, nameBuf, name.length + 1);
    HEAPU32[ret >> 2] = nameBuf;
    var aliasesBuf = _malloc(4);
    HEAPU32[aliasesBuf >> 2] = 0;
    HEAPU32[ret + 4 >> 2] = aliasesBuf;
    var afinet = 2;
    HEAP32[ret + 8 >> 2] = afinet;
    HEAP32[ret + 12 >> 2] = 4;
    var addrListBuf = _malloc(12);
    HEAPU32[addrListBuf >> 2] = addrListBuf + 8;
    HEAPU32[addrListBuf + 4 >> 2] = 0;
    HEAP32[addrListBuf + 8 >> 2] = inetPton4(DNS.lookup_name(name));
    HEAPU32[ret + 16 >> 2] = addrListBuf;
    return ret
}

function _gethostbyaddr(addr, addrlen, type) {
    if (type !== 2) {
        setErrNo(5);
        return null
    }
    addr = HEAP32[addr >> 2];
    var host = inetNtop4(addr);
    var lookup = DNS.lookup_addr(host);
    if (lookup) {
        host = lookup
    }
    return getHostByName(host)
}

function _gethostbyname(name) {
    return getHostByName(UTF8ToString(name))
}

function _getloadavg(loadavg, nelem) {
    var limit = Math.min(nelem, 3);
    var doubleSize = 8;
    for (var i = 0; i < limit; i++) {
        HEAPF64[loadavg + i * doubleSize >> 3] = .1
    }
    return limit
}

function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
    var info = readSockaddr(sa, salen);
    if (info.errno) {
        return -6
    }
    var port = info.port;
    var addr = info.addr;
    var overflowed = false;
    if (node && nodelen) {
        var lookup;
        if (flags & 1 || !(lookup = DNS.lookup_addr(addr))) {
            if (flags & 8) {
                return -2
            }
        } else {
            addr = lookup
        }
        var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
        if (numBytesWrittenExclNull + 1 >= nodelen) {
            overflowed = true
        }
    }
    if (serv && servlen) {
        port = "" + port;
        var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
        if (numBytesWrittenExclNull + 1 >= servlen) {
            overflowed = true
        }
    }
    if (overflowed) {
        return -12
    }
    return 0
}
var Protocols = {
    list: [],
    map: {}
};

function _setprotoent(stayopen) {
    function allocprotoent(name, proto, aliases) {
        var nameBuf = _malloc(name.length + 1);
        writeAsciiToMemory(name, nameBuf);
        var j = 0;
        var length = aliases.length;
        var aliasListBuf = _malloc((length + 1) * 4);
        for (var i = 0; i < length; i++, j += 4) {
            var alias = aliases[i];
            var aliasBuf = _malloc(alias.length + 1);
            writeAsciiToMemory(alias, aliasBuf);
            HEAPU32[aliasListBuf + j >> 2] = aliasBuf
        }
        HEAPU32[aliasListBuf + j >> 2] = 0;
        var pe = _malloc(12);
        HEAPU32[pe >> 2] = nameBuf;
        HEAPU32[pe + 4 >> 2] = aliasListBuf;
        HEAP32[pe + 8 >> 2] = proto;
        return pe
    }
    var list = Protocols.list;
    var map = Protocols.map;
    if (list.length === 0) {
        var entry = allocprotoent("tcp", 6, ["TCP"]);
        list.push(entry);
        map["tcp"] = map["6"] = entry;
        entry = allocprotoent("udp", 17, ["UDP"]);
        list.push(entry);
        map["udp"] = map["17"] = entry
    }
    _setprotoent.index = 0
}

function _getprotobyname(name) {
    name = UTF8ToString(name);
    _setprotoent(true);
    var result = Protocols.map[name];
    return result
}

function __isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

function __arraySum(array, index) {
    var sum = 0;
    for (var i = 0; i <= index; sum += array[i++]) {}
    return sum
}
var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function __addDays(date, days) {
    var newDate = new Date(date.getTime());
    while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
            days -= daysInCurrentMonth - newDate.getDate() + 1;
            newDate.setDate(1);
            if (currentMonth < 11) {
                newDate.setMonth(currentMonth + 1)
            } else {
                newDate.setMonth(0);
                newDate.setFullYear(newDate.getFullYear() + 1)
            }
        } else {
            newDate.setDate(newDate.getDate() + days);
            return newDate
        }
    }
    return newDate
}

function writeArrayToMemory(array, buffer) {
    HEAP8.set(array, buffer)
}

function _strftime(s, maxsize, format, tm) {
    var tm_zone = HEAP32[tm + 40 >> 2];
    var date = {
        tm_sec: HEAP32[tm >> 2],
        tm_min: HEAP32[tm + 4 >> 2],
        tm_hour: HEAP32[tm + 8 >> 2],
        tm_mday: HEAP32[tm + 12 >> 2],
        tm_mon: HEAP32[tm + 16 >> 2],
        tm_year: HEAP32[tm + 20 >> 2],
        tm_wday: HEAP32[tm + 24 >> 2],
        tm_yday: HEAP32[tm + 28 >> 2],
        tm_isdst: HEAP32[tm + 32 >> 2],
        tm_gmtoff: HEAP32[tm + 36 >> 2],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
    };
    var pattern = UTF8ToString(format);
    var EXPANSION_RULES_1 = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
    };
    for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule])
    }
    var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function leadingSomething(value, digits, character) {
        var str = typeof value == "number" ? value.toString() : value || "";
        while (str.length < digits) {
            str = character[0] + str
        }
        return str
    }

    function leadingNulls(value, digits) {
        return leadingSomething(value, digits, "0")
    }

    function compareByDay(date1, date2) {
        function sgn(value) {
            return value < 0 ? -1 : value > 0 ? 1 : 0
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
            if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
                compare = sgn(date1.getDate() - date2.getDate())
            }
        }
        return compare
    }

    function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
            case 0:
                return new Date(janFourth.getFullYear() - 1, 11, 29);
            case 1:
                return janFourth;
            case 2:
                return new Date(janFourth.getFullYear(), 0, 3);
            case 3:
                return new Date(janFourth.getFullYear(), 0, 2);
            case 4:
                return new Date(janFourth.getFullYear(), 0, 1);
            case 5:
                return new Date(janFourth.getFullYear() - 1, 11, 31);
            case 6:
                return new Date(janFourth.getFullYear() - 1, 11, 30)
        }
    }

    function getWeekBasedYear(date) {
        var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                return thisDate.getFullYear() + 1
            }
            return thisDate.getFullYear()
        }
        return thisDate.getFullYear() - 1
    }
    var EXPANSION_RULES_2 = {
        "%a": function (date) {
            return WEEKDAYS[date.tm_wday].substring(0, 3)
        },
        "%A": function (date) {
            return WEEKDAYS[date.tm_wday]
        },
        "%b": function (date) {
            return MONTHS[date.tm_mon].substring(0, 3)
        },
        "%B": function (date) {
            return MONTHS[date.tm_mon]
        },
        "%C": function (date) {
            var year = date.tm_year + 1900;
            return leadingNulls(year / 100 | 0, 2)
        },
        "%d": function (date) {
            return leadingNulls(date.tm_mday, 2)
        },
        "%e": function (date) {
            return leadingSomething(date.tm_mday, 2, " ")
        },
        "%g": function (date) {
            return getWeekBasedYear(date).toString().substring(2)
        },
        "%G": function (date) {
            return getWeekBasedYear(date)
        },
        "%H": function (date) {
            return leadingNulls(date.tm_hour, 2)
        },
        "%I": function (date) {
            var twelveHour = date.tm_hour;
            if (twelveHour == 0) twelveHour = 12;
            else if (twelveHour > 12) twelveHour -= 12;
            return leadingNulls(twelveHour, 2)
        },
        "%j": function (date) {
            return leadingNulls(date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1), 3)
        },
        "%m": function (date) {
            return leadingNulls(date.tm_mon + 1, 2)
        },
        "%M": function (date) {
            return leadingNulls(date.tm_min, 2)
        },
        "%n": function () {
            return "\n"
        },
        "%p": function (date) {
            if (date.tm_hour >= 0 && date.tm_hour < 12) {
                return "AM"
            }
            return "PM"
        },
        "%S": function (date) {
            return leadingNulls(date.tm_sec, 2)
        },
        "%t": function () {
            return "\t"
        },
        "%u": function (date) {
            return date.tm_wday || 7
        },
        "%U": function (date) {
            var days = date.tm_yday + 7 - date.tm_wday;
            return leadingNulls(Math.floor(days / 7), 2)
        },
        "%V": function (date) {
            var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7) / 7);
            if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
                val++
            }
            if (!val) {
                val = 52;
                var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
                if (dec31 == 4 || dec31 == 5 && __isLeapYear(date.tm_year % 400 - 1)) {
                    val++
                }
            } else if (val == 53) {
                var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
                if (jan1 != 4 && (jan1 != 3 || !__isLeapYear(date.tm_year))) val = 1
            }
            return leadingNulls(val, 2)
        },
        "%w": function (date) {
            return date.tm_wday
        },
        "%W": function (date) {
            var days = date.tm_yday + 7 - (date.tm_wday + 6) % 7;
            return leadingNulls(Math.floor(days / 7), 2)
        },
        "%y": function (date) {
            return (date.tm_year + 1900).toString().substring(2)
        },
        "%Y": function (date) {
            return date.tm_year + 1900
        },
        "%z": function (date) {
            var off = date.tm_gmtoff;
            var ahead = off >= 0;
            off = Math.abs(off) / 60;
            off = off / 60 * 100 + off % 60;
            return (ahead ? "+" : "-") + String("0000" + off).slice(-4)
        },
        "%Z": function (date) {
            return date.tm_zone
        },
        "%%": function () {
            return "%"
        }
    };
    pattern = pattern.replace(/%%/g, "\0\0");
    for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
            pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date))
        }
    }
    pattern = pattern.replace(/\0\0/g, "%");
    var bytes = intArrayFromString(pattern, false);
    if (bytes.length > maxsize) {
        return 0
    }
    writeArrayToMemory(bytes, s);
    return bytes.length - 1
}

function _system(command) {
    if (ENVIRONMENT_IS_NODE) {
        if (!command) return 1;
        var cmdstr = UTF8ToString(command);
        if (!cmdstr.length) return 0;
        var cp = require("child_process");
        var ret = cp.spawnSync(cmdstr, [], {
            shell: true,
            stdio: "inherit"
        });
        var _W_EXITCODE = (ret, sig) => ret << 8 | sig;
        if (ret.status === null) {
            var signalToNumber = sig => {
                switch (sig) {
                    case "SIGHUP":
                        return 1;
                    case "SIGINT":
                        return 2;
                    case "SIGQUIT":
                        return 3;
                    case "SIGFPE":
                        return 8;
                    case "SIGKILL":
                        return 9;
                    case "SIGALRM":
                        return 14;
                    case "SIGTERM":
                        return 15
                }
                return 2
            };
            return _W_EXITCODE(0, signalToNumber(ret.signal))
        }
        return _W_EXITCODE(ret.status, 0)
    }
    if (!command) return 0;
    setErrNo(52);
    return -1
}

function allocateUTF8OnStack(str) {
    var size = lengthBytesUTF8(str) + 1;
    var ret = stackAlloc(size);
    stringToUTF8Array(str, HEAP8, ret, size);
    return ret
}

function runAndAbortIfError(func) {
    try {
        return func()
    } catch (e) {
        abort(e)
    }
}

function runtimeKeepalivePush() {}

function runtimeKeepalivePop() {}
var Asyncify = {
    instrumentWasmImports: function (imports) {
        var ASYNCIFY_IMPORTS = ["env.invoke_*", "env.emscripten_sleep", "env.emscripten_wget", "env.emscripten_wget_data", "env.emscripten_idb_load", "env.emscripten_idb_store", "env.emscripten_idb_delete", "env.emscripten_idb_exists", "env.emscripten_idb_load_blob", "env.emscripten_idb_store_blob", "env.SDL_Delay", "env.emscripten_scan_registers", "env.emscripten_lazy_load_code", "env.emscripten_fiber_swap", "wasi_snapshot_preview1.fd_sync", "env.__wasi_fd_sync", "env._emval_await", "env._dlopen_js", "env.__asyncjs__*"].map(x => x.split(".")[1]);
        for (var x in imports) {
            (function (x) {
                var original = imports[x];
                var sig = original.sig;
                if (typeof original == "function") {
                    var isAsyncifyImport = ASYNCIFY_IMPORTS.indexOf(x) >= 0 || x.startsWith("__asyncjs__")
                }
            })(x)
        }
    },
    instrumentWasmExports: function (exports) {
        var ret = {};
        for (var x in exports) {
            (function (x) {
                var original = exports[x];
                if (typeof original == "function") {
                    ret[x] = function () {
                        Asyncify.exportCallStack.push(x);
                        try {
                            return original.apply(null, arguments)
                        } finally {
                            if (!ABORT) {
                                var y = Asyncify.exportCallStack.pop();
                                assert(y === x);
                                Asyncify.maybeStopUnwind()
                            }
                        }
                    }
                } else {
                    ret[x] = original
                }
            })(x)
        }
        return ret
    },
    State: {
        Normal: 0,
        Unwinding: 1,
        Rewinding: 2,
        Disabled: 3
    },
    state: 0,
    StackSize: 65535,
    currData: null,
    handleSleepReturnValue: 0,
    exportCallStack: [],
    callStackNameToId: {},
    callStackIdToName: {},
    callStackId: 0,
    asyncPromiseHandlers: null,
    sleepCallbacks: [],
    getCallStackId: function (funcName) {
        var id = Asyncify.callStackNameToId[funcName];
        if (id === undefined) {
            id = Asyncify.callStackId++;
            Asyncify.callStackNameToId[funcName] = id;
            Asyncify.callStackIdToName[id] = funcName
        }
        return id
    },
    maybeStopUnwind: function () {
        if (Asyncify.currData && Asyncify.state === Asyncify.State.Unwinding && Asyncify.exportCallStack.length === 0) {
            Asyncify.state = Asyncify.State.Normal;
            runAndAbortIfError(_asyncify_stop_unwind);
            if (typeof Fibers != "undefined") {
                Fibers.trampoline()
            }
        }
    },
    whenDone: function () {
        return new Promise((resolve, reject) => {
            Asyncify.asyncPromiseHandlers = {
                resolve: resolve,
                reject: reject
            }
        })
    },
    allocateData: function () {
        var ptr = _malloc(12 + Asyncify.StackSize);
        Asyncify.setDataHeader(ptr, ptr + 12, Asyncify.StackSize);
        Asyncify.setDataRewindFunc(ptr);
        return ptr
    },
    setDataHeader: function (ptr, stack, stackSize) {
        HEAP32[ptr >> 2] = stack;
        HEAP32[ptr + 4 >> 2] = stack + stackSize
    },
    setDataRewindFunc: function (ptr) {
        var bottomOfCallStack = Asyncify.exportCallStack[0];
        var rewindId = Asyncify.getCallStackId(bottomOfCallStack);
        HEAP32[ptr + 8 >> 2] = rewindId
    },
    getDataRewindFunc: function (ptr) {
        var id = HEAP32[ptr + 8 >> 2];
        var name = Asyncify.callStackIdToName[id];
        var func = Module["asm"][name];
        return func
    },
    doRewind: function (ptr) {
        var start = Asyncify.getDataRewindFunc(ptr);
        return start()
    },
    handleSleep: function (startAsync) {
        if (ABORT) return;
        if (Asyncify.state === Asyncify.State.Normal) {
            var reachedCallback = false;
            var reachedAfterCallback = false;
            startAsync(handleSleepReturnValue => {
                if (ABORT) return;
                Asyncify.handleSleepReturnValue = handleSleepReturnValue || 0;
                reachedCallback = true;
                if (!reachedAfterCallback) {
                    return
                }
                Asyncify.state = Asyncify.State.Rewinding;
                runAndAbortIfError(() => _asyncify_start_rewind(Asyncify.currData));
                if (typeof Browser != "undefined" && Browser.mainLoop.func) {
                    Browser.mainLoop.resume()
                }
                var asyncWasmReturnValue, isError = false;
                try {
                    asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData)
                } catch (err) {
                    asyncWasmReturnValue = err;
                    isError = true
                }
                var handled = false;
                if (!Asyncify.currData) {
                    var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
                    if (asyncPromiseHandlers) {
                        Asyncify.asyncPromiseHandlers = null;
                        (isError ? asyncPromiseHandlers.reject : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
                        handled = true
                    }
                }
                if (isError && !handled) {
                    throw asyncWasmReturnValue
                }
            });
            reachedAfterCallback = true;
            if (!reachedCallback) {
                Asyncify.state = Asyncify.State.Unwinding;
                Asyncify.currData = Asyncify.allocateData();
                if (typeof Browser != "undefined" && Browser.mainLoop.func) {
                    Browser.mainLoop.pause()
                }
                runAndAbortIfError(() => _asyncify_start_unwind(Asyncify.currData))
            }
        } else if (Asyncify.state === Asyncify.State.Rewinding) {
            Asyncify.state = Asyncify.State.Normal;
            runAndAbortIfError(_asyncify_stop_rewind);
            _free(Asyncify.currData);
            Asyncify.currData = null;
            Asyncify.sleepCallbacks.forEach(func => callUserCallback(func))
        } else {
            abort("invalid state: " + Asyncify.state)
        }
        return Asyncify.handleSleepReturnValue
    },
    handleAsync: function (startAsync) {
        return Asyncify.handleSleep(wakeUp => {
            startAsync().then(wakeUp)
        })
    }
};

function demangle(func) {
    return func
}

function demangleAll(text) {
    var regex = /\b_Z[\w\d_]+/g;
    return text.replace(regex, function (x) {
        var y = demangle(x);
        return x === y ? x : y + " [" + x + "]"
    })
}

function stackTrace() {
    var js = jsStackTrace();
    if (Module["extraStackTrace"]) js += "\n" + Module["extraStackTrace"]();
    return demangleAll(js)
}

function getCFunc(ident) {
    var func = Module["_" + ident];
    return func
}

function ccall(ident, returnType, argTypes, args, opts) {
    var toC = {
        "string": str => {
            var ret = 0;
            if (str !== null && str !== undefined && str !== 0) {
                var len = (str.length << 2) + 1;
                ret = stackAlloc(len);
                stringToUTF8(str, ret, len)
            }
            return ret
        },
        "array": arr => {
            var ret = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret);
            return ret
        }
    };

    function convertReturnValue(ret) {
        if (returnType === "string") {
            return UTF8ToString(ret)
        }
        if (returnType === "boolean") return Boolean(ret);
        return ret
    }
    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;
    if (args) {
        for (var i = 0; i < args.length; i++) {
            var converter = toC[argTypes[i]];
            if (converter) {
                if (stack === 0) stack = stackSave();
                cArgs[i] = converter(args[i])
            } else {
                cArgs[i] = args[i]
            }
        }
    }
    var previousAsync = Asyncify.currData;
    var ret = func.apply(null, cArgs);

    function onDone(ret) {
        runtimeKeepalivePop();
        if (stack !== 0) stackRestore(stack);
        return convertReturnValue(ret)
    }
    runtimeKeepalivePush();
    var asyncMode = opts && opts.async;
    if (Asyncify.currData != previousAsync) {
        return Asyncify.whenDone().then(onDone)
    }
    ret = onDone(ret);
    if (asyncMode) return Promise.resolve(ret);
    return ret
}
var FSNode = function (parent, name, mode, rdev) {
    if (!parent) {
        parent = this
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev
};
var readMode = 292 | 73;
var writeMode = 146;
Object.defineProperties(FSNode.prototype, {
    read: {
        get: function () {
            return (this.mode & readMode) === readMode
        },
        set: function (val) {
            val ? this.mode |= readMode : this.mode &= ~readMode
        }
    },
    write: {
        get: function () {
            return (this.mode & writeMode) === writeMode
        },
        set: function (val) {
            val ? this.mode |= writeMode : this.mode &= ~writeMode
        }
    },
    isFolder: {
        get: function () {
            return FS.isDir(this.mode)
        }
    },
    isDevice: {
        get: function () {
            return FS.isChrdev(this.mode)
        }
    }
});
FS.FSNode = FSNode;
FS.staticInit();
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_unlink"] = FS.unlink;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createDevice"] = FS.createDevice;
Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas) {
    Browser.requestFullscreen(lockPointer, resizeCanvas)
};
Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) {
    Browser.requestAnimationFrame(func)
};
Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) {
    Browser.setCanvasSize(width, height, noUpdates)
};
Module["pauseMainLoop"] = function Module_pauseMainLoop() {
    Browser.mainLoop.pause()
};
Module["resumeMainLoop"] = function Module_resumeMainLoop() {
    Browser.mainLoop.resume()
};
Module["getUserMedia"] = function Module_getUserMedia() {
    Browser.getUserMedia()
};
Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
    return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes)
};
var preloadedImages = {};
var preloadedAudios = {};
var GLctx;
for (var i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));
var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
for (var i = 0; i < 288; ++i) {
    miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i + 1)
}
var __miniTempWebGLIntBuffersStorage = new Int32Array(288);
for (var i = 0; i < 288; ++i) {
    __miniTempWebGLIntBuffers[i] = __miniTempWebGLIntBuffersStorage.subarray(0, i + 1)
}
var asmLibraryArg = {
    "Da": _Py_CheckEmscriptenSignals_Helper,
    "wh": _Py_emscripten_runtime,
    "a": ___assert_fail,
    "vh": ___call_sighandler,
    "uh": ___syscall__newselect,
    "Ca": ___syscall_accept4,
    "th": ___syscall_bind,
    "Ba": ___syscall_chdir,
    "Aa": ___syscall_chmod,
    "sh": ___syscall_connect,
    "za": ___syscall_dup3,
    "rh": ___syscall_faccessat,
    "Na": ___syscall_fadvise64,
    "qh": ___syscall_fchdir,
    "ph": ___syscall_fchmod,
    "ya": ___syscall_fchmodat,
    "oh": ___syscall_fchown32,
    "xa": ___syscall_fchownat,
    "j": ___syscall_fcntl64,
    "nh": ___syscall_fdatasync,
    "wa": ___syscall_fstat64,
    "mh": ___syscall_fstatfs64,
    "Ma": ___syscall_ftruncate64,
    "lh": ___syscall_getcwd,
    "kh": ___syscall_getdents64,
    "jh": ___syscall_getpeername,
    "ih": ___syscall_getsockname,
    "hh": ___syscall_getsockopt,
    "I": ___syscall_ioctl,
    "gh": ___syscall_listen,
    "fh": ___syscall_lstat64,
    "va": ___syscall_mkdirat,
    "H": ___syscall_newfstatat,
    "r": ___syscall_openat,
    "eh": ___syscall_pipe,
    "dh": ___syscall_poll,
    "ua": ___syscall_readlinkat,
    "ch": ___syscall_recvfrom,
    "bh": ___syscall_recvmsg,
    "ta": ___syscall_renameat,
    "ah": ___syscall_rmdir,
    "$g": ___syscall_sendmsg,
    "_g": ___syscall_sendto,
    "sa": ___syscall_socket,
    "Zg": ___syscall_stat64,
    "Yg": ___syscall_statfs64,
    "Xg": ___syscall_symlink,
    "La": ___syscall_truncate64,
    "ra": ___syscall_unlinkat,
    "Wg": ___syscall_utimensat,
    "Rg": __dlinit,
    "Qg": __dlopen_js,
    "Pg": __dlsym_js,
    "pa": __emscripten_get_now_is_monotonic,
    "Og": __emscripten_throw_longjmp,
    "Ng": __gmtime_js,
    "Mg": __localtime_js,
    "Lg": __mktime_js,
    "Kg": __mmap_js,
    "Jg": __msync_js,
    "Ig": __munmap_js,
    "Hg": __tzset_js,
    "b": _abort,
    "Gg": _eglBindAPI,
    "Fg": _eglChooseConfig,
    "Eg": _eglCreateContext,
    "Dg": _eglCreateWindowSurface,
    "Cg": _eglDestroyContext,
    "Bg": _eglDestroySurface,
    "Ag": _eglGetConfigAttrib,
    "oa": _eglGetDisplay,
    "zg": _eglGetError,
    "yg": _eglInitialize,
    "xg": _eglMakeCurrent,
    "wg": _eglQueryString,
    "vg": _eglSwapBuffers,
    "ug": _eglSwapInterval,
    "tg": _eglTerminate,
    "sg": _eglWaitGL,
    "rg": _eglWaitNative,
    "A": _emscripten_asm_const_int,
    "h": _emscripten_asm_const_int_sync_on_main_thread,
    "qg": _emscripten_async_call,
    "pg": _emscripten_async_wget_data,
    "og": _emscripten_cancel_main_loop,
    "w": _emscripten_date_now,
    "ng": _emscripten_debugger,
    "mg": _emscripten_exit_fullscreen,
    "lg": _emscripten_exit_pointerlock,
    "kg": _emscripten_exit_with_live_runtime,
    "jg": _emscripten_get_battery_status,
    "na": _emscripten_get_callstack,
    "ig": _emscripten_get_compiler_setting,
    "v": _emscripten_get_device_pixel_ratio,
    "l": _emscripten_get_element_css_size,
    "ma": _emscripten_get_gamepad_status,
    "hg": _emscripten_get_heap_max,
    "F": _emscripten_get_now,
    "gg": _emscripten_get_now_res,
    "fg": _emscripten_get_num_gamepads,
    "eg": _emscripten_get_preloaded_image_data_from_FILE,
    "dg": _emscripten_get_screen_size,
    "cg": _emscripten_glActiveTexture,
    "bg": _emscripten_glAttachShader,
    "ag": _emscripten_glBeginQuery,
    "$f": _emscripten_glBeginQueryEXT,
    "_f": _emscripten_glBeginTransformFeedback,
    "Zf": _emscripten_glBindAttribLocation,
    "Yf": _emscripten_glBindBuffer,
    "Xf": _emscripten_glBindBufferBase,
    "Wf": _emscripten_glBindBufferRange,
    "Vf": _emscripten_glBindFramebuffer,
    "Uf": _emscripten_glBindRenderbuffer,
    "Tf": _emscripten_glBindSampler,
    "Sf": _emscripten_glBindTexture,
    "Rf": _emscripten_glBindTransformFeedback,
    "Qf": _emscripten_glBindVertexArray,
    "Pf": _emscripten_glBindVertexArrayOES,
    "Of": _emscripten_glBlendColor,
    "Nf": _emscripten_glBlendEquation,
    "Mf": _emscripten_glBlendEquationSeparate,
    "Lf": _emscripten_glBlendFunc,
    "Kf": _emscripten_glBlendFuncSeparate,
    "Jf": _emscripten_glBlitFramebuffer,
    "If": _emscripten_glBufferData,
    "Hf": _emscripten_glBufferSubData,
    "Gf": _emscripten_glCheckFramebufferStatus,
    "Ff": _emscripten_glClear,
    "Ef": _emscripten_glClearBufferfi,
    "Df": _emscripten_glClearBufferfv,
    "Cf": _emscripten_glClearBufferiv,
    "Bf": _emscripten_glClearBufferuiv,
    "Af": _emscripten_glClearColor,
    "zf": _emscripten_glClearDepthf,
    "yf": _emscripten_glClearStencil,
    "xf": _emscripten_glClientWaitSync,
    "wf": _emscripten_glColorMask,
    "vf": _emscripten_glCompileShader,
    "uf": _emscripten_glCompressedTexImage2D,
    "tf": _emscripten_glCompressedTexImage3D,
    "sf": _emscripten_glCompressedTexSubImage2D,
    "rf": _emscripten_glCompressedTexSubImage3D,
    "qf": _emscripten_glCopyBufferSubData,
    "pf": _emscripten_glCopyTexImage2D,
    "of": _emscripten_glCopyTexSubImage2D,
    "nf": _emscripten_glCopyTexSubImage3D,
    "mf": _emscripten_glCreateProgram,
    "lf": _emscripten_glCreateShader,
    "kf": _emscripten_glCullFace,
    "jf": _emscripten_glDeleteBuffers,
    "hf": _emscripten_glDeleteFramebuffers,
    "gf": _emscripten_glDeleteProgram,
    "ff": _emscripten_glDeleteQueries,
    "ef": _emscripten_glDeleteQueriesEXT,
    "df": _emscripten_glDeleteRenderbuffers,
    "cf": _emscripten_glDeleteSamplers,
    "bf": _emscripten_glDeleteShader,
    "af": _emscripten_glDeleteSync,
    "$e": _emscripten_glDeleteTextures,
    "_e": _emscripten_glDeleteTransformFeedbacks,
    "Ze": _emscripten_glDeleteVertexArrays,
    "Ye": _emscripten_glDeleteVertexArraysOES,
    "Xe": _emscripten_glDepthFunc,
    "We": _emscripten_glDepthMask,
    "Ve": _emscripten_glDepthRangef,
    "Ue": _emscripten_glDetachShader,
    "Te": _emscripten_glDisable,
    "Se": _emscripten_glDisableVertexAttribArray,
    "Re": _emscripten_glDrawArrays,
    "Qe": _emscripten_glDrawArraysInstanced,
    "Pe": _emscripten_glDrawArraysInstancedANGLE,
    "Oe": _emscripten_glDrawArraysInstancedARB,
    "Ne": _emscripten_glDrawArraysInstancedEXT,
    "Me": _emscripten_glDrawArraysInstancedNV,
    "Le": _emscripten_glDrawBuffers,
    "Ke": _emscripten_glDrawBuffersEXT,
    "Je": _emscripten_glDrawBuffersWEBGL,
    "Ie": _emscripten_glDrawElements,
    "He": _emscripten_glDrawElementsInstanced,
    "Ge": _emscripten_glDrawElementsInstancedANGLE,
    "Fe": _emscripten_glDrawElementsInstancedARB,
    "Ee": _emscripten_glDrawElementsInstancedEXT,
    "De": _emscripten_glDrawElementsInstancedNV,
    "Ce": _emscripten_glDrawRangeElements,
    "Be": _emscripten_glEnable,
    "Ae": _emscripten_glEnableVertexAttribArray,
    "ze": _emscripten_glEndQuery,
    "ye": _emscripten_glEndQueryEXT,
    "xe": _emscripten_glEndTransformFeedback,
    "we": _emscripten_glFenceSync,
    "ve": _emscripten_glFinish,
    "ue": _emscripten_glFlush,
    "te": _emscripten_glFramebufferRenderbuffer,
    "se": _emscripten_glFramebufferTexture2D,
    "re": _emscripten_glFramebufferTextureLayer,
    "qe": _emscripten_glFrontFace,
    "pe": _emscripten_glGenBuffers,
    "oe": _emscripten_glGenFramebuffers,
    "ne": _emscripten_glGenQueries,
    "me": _emscripten_glGenQueriesEXT,
    "le": _emscripten_glGenRenderbuffers,
    "ke": _emscripten_glGenSamplers,
    "je": _emscripten_glGenTextures,
    "ie": _emscripten_glGenTransformFeedbacks,
    "he": _emscripten_glGenVertexArrays,
    "ge": _emscripten_glGenVertexArraysOES,
    "fe": _emscripten_glGenerateMipmap,
    "ee": _emscripten_glGetActiveAttrib,
    "de": _emscripten_glGetActiveUniform,
    "ce": _emscripten_glGetActiveUniformBlockName,
    "be": _emscripten_glGetActiveUniformBlockiv,
    "ae": _emscripten_glGetActiveUniformsiv,
    "$d": _emscripten_glGetAttachedShaders,
    "_d": _emscripten_glGetAttribLocation,
    "Zd": _emscripten_glGetBooleanv,
    "Yd": _emscripten_glGetBufferParameteri64v,
    "Xd": _emscripten_glGetBufferParameteriv,
    "Wd": _emscripten_glGetError,
    "Vd": _emscripten_glGetFloatv,
    "Ud": _emscripten_glGetFragDataLocation,
    "Td": _emscripten_glGetFramebufferAttachmentParameteriv,
    "Sd": _emscripten_glGetInteger64i_v,
    "Rd": _emscripten_glGetInteger64v,
    "Qd": _emscripten_glGetIntegeri_v,
    "Pd": _emscripten_glGetIntegerv,
    "Od": _emscripten_glGetInternalformativ,
    "Nd": _emscripten_glGetProgramBinary,
    "Md": _emscripten_glGetProgramInfoLog,
    "Ld": _emscripten_glGetProgramiv,
    "Kd": _emscripten_glGetQueryObjecti64vEXT,
    "Jd": _emscripten_glGetQueryObjectivEXT,
    "Id": _emscripten_glGetQueryObjectui64vEXT,
    "Hd": _emscripten_glGetQueryObjectuiv,
    "Gd": _emscripten_glGetQueryObjectuivEXT,
    "Fd": _emscripten_glGetQueryiv,
    "Ed": _emscripten_glGetQueryivEXT,
    "Dd": _emscripten_glGetRenderbufferParameteriv,
    "Cd": _emscripten_glGetSamplerParameterfv,
    "Bd": _emscripten_glGetSamplerParameteriv,
    "Ad": _emscripten_glGetShaderInfoLog,
    "zd": _emscripten_glGetShaderPrecisionFormat,
    "yd": _emscripten_glGetShaderSource,
    "xd": _emscripten_glGetShaderiv,
    "wd": _emscripten_glGetString,
    "vd": _emscripten_glGetStringi,
    "ud": _emscripten_glGetSynciv,
    "td": _emscripten_glGetTexParameterfv,
    "sd": _emscripten_glGetTexParameteriv,
    "rd": _emscripten_glGetTransformFeedbackVarying,
    "qd": _emscripten_glGetUniformBlockIndex,
    "pd": _emscripten_glGetUniformIndices,
    "od": _emscripten_glGetUniformLocation,
    "nd": _emscripten_glGetUniformfv,
    "md": _emscripten_glGetUniformiv,
    "ld": _emscripten_glGetUniformuiv,
    "kd": _emscripten_glGetVertexAttribIiv,
    "jd": _emscripten_glGetVertexAttribIuiv,
    "id": _emscripten_glGetVertexAttribPointerv,
    "hd": _emscripten_glGetVertexAttribfv,
    "gd": _emscripten_glGetVertexAttribiv,
    "fd": _emscripten_glHint,
    "ed": _emscripten_glInvalidateFramebuffer,
    "dd": _emscripten_glInvalidateSubFramebuffer,
    "cd": _emscripten_glIsBuffer,
    "bd": _emscripten_glIsEnabled,
    "ad": _emscripten_glIsFramebuffer,
    "$c": _emscripten_glIsProgram,
    "_c": _emscripten_glIsQuery,
    "Zc": _emscripten_glIsQueryEXT,
    "Yc": _emscripten_glIsRenderbuffer,
    "Xc": _emscripten_glIsSampler,
    "Wc": _emscripten_glIsShader,
    "Vc": _emscripten_glIsSync,
    "Uc": _emscripten_glIsTexture,
    "Tc": _emscripten_glIsTransformFeedback,
    "Sc": _emscripten_glIsVertexArray,
    "Rc": _emscripten_glIsVertexArrayOES,
    "Qc": _emscripten_glLineWidth,
    "Pc": _emscripten_glLinkProgram,
    "Oc": _emscripten_glPauseTransformFeedback,
    "Nc": _emscripten_glPixelStorei,
    "Mc": _emscripten_glPolygonOffset,
    "Lc": _emscripten_glProgramBinary,
    "Kc": _emscripten_glProgramParameteri,
    "Jc": _emscripten_glQueryCounterEXT,
    "Ic": _emscripten_glReadBuffer,
    "Hc": _emscripten_glReadPixels,
    "Gc": _emscripten_glReleaseShaderCompiler,
    "Fc": _emscripten_glRenderbufferStorage,
    "Ec": _emscripten_glRenderbufferStorageMultisample,
    "Dc": _emscripten_glResumeTransformFeedback,
    "Cc": _emscripten_glSampleCoverage,
    "Bc": _emscripten_glSamplerParameterf,
    "Ac": _emscripten_glSamplerParameterfv,
    "zc": _emscripten_glSamplerParameteri,
    "yc": _emscripten_glSamplerParameteriv,
    "xc": _emscripten_glScissor,
    "wc": _emscripten_glShaderBinary,
    "vc": _emscripten_glShaderSource,
    "uc": _emscripten_glStencilFunc,
    "tc": _emscripten_glStencilFuncSeparate,
    "sc": _emscripten_glStencilMask,
    "rc": _emscripten_glStencilMaskSeparate,
    "qc": _emscripten_glStencilOp,
    "pc": _emscripten_glStencilOpSeparate,
    "oc": _emscripten_glTexImage2D,
    "nc": _emscripten_glTexImage3D,
    "mc": _emscripten_glTexParameterf,
    "lc": _emscripten_glTexParameterfv,
    "kc": _emscripten_glTexParameteri,
    "jc": _emscripten_glTexParameteriv,
    "ic": _emscripten_glTexStorage2D,
    "hc": _emscripten_glTexStorage3D,
    "gc": _emscripten_glTexSubImage2D,
    "fc": _emscripten_glTexSubImage3D,
    "ec": _emscripten_glTransformFeedbackVaryings,
    "dc": _emscripten_glUniform1f,
    "cc": _emscripten_glUniform1fv,
    "bc": _emscripten_glUniform1i,
    "ac": _emscripten_glUniform1iv,
    "$b": _emscripten_glUniform1ui,
    "_b": _emscripten_glUniform1uiv,
    "Zb": _emscripten_glUniform2f,
    "Yb": _emscripten_glUniform2fv,
    "Xb": _emscripten_glUniform2i,
    "Wb": _emscripten_glUniform2iv,
    "Vb": _emscripten_glUniform2ui,
    "Ub": _emscripten_glUniform2uiv,
    "Tb": _emscripten_glUniform3f,
    "Sb": _emscripten_glUniform3fv,
    "Rb": _emscripten_glUniform3i,
    "Qb": _emscripten_glUniform3iv,
    "Pb": _emscripten_glUniform3ui,
    "Ob": _emscripten_glUniform3uiv,
    "Nb": _emscripten_glUniform4f,
    "Mb": _emscripten_glUniform4fv,
    "Lb": _emscripten_glUniform4i,
    "Kb": _emscripten_glUniform4iv,
    "Jb": _emscripten_glUniform4ui,
    "Ib": _emscripten_glUniform4uiv,
    "Hb": _emscripten_glUniformBlockBinding,
    "Gb": _emscripten_glUniformMatrix2fv,
    "Fb": _emscripten_glUniformMatrix2x3fv,
    "Eb": _emscripten_glUniformMatrix2x4fv,
    "Db": _emscripten_glUniformMatrix3fv,
    "Cb": _emscripten_glUniformMatrix3x2fv,
    "Bb": _emscripten_glUniformMatrix3x4fv,
    "Ab": _emscripten_glUniformMatrix4fv,
    "zb": _emscripten_glUniformMatrix4x2fv,
    "yb": _emscripten_glUniformMatrix4x3fv,
    "xb": _emscripten_glUseProgram,
    "wb": _emscripten_glValidateProgram,
    "vb": _emscripten_glVertexAttrib1f,
    "ub": _emscripten_glVertexAttrib1fv,
    "tb": _emscripten_glVertexAttrib2f,
    "sb": _emscripten_glVertexAttrib2fv,
    "rb": _emscripten_glVertexAttrib3f,
    "qb": _emscripten_glVertexAttrib3fv,
    "pb": _emscripten_glVertexAttrib4f,
    "ob": _emscripten_glVertexAttrib4fv,
    "nb": _emscripten_glVertexAttribDivisor,
    "mb": _emscripten_glVertexAttribDivisorANGLE,
    "lb": _emscripten_glVertexAttribDivisorARB,
    "kb": _emscripten_glVertexAttribDivisorEXT,
    "jb": _emscripten_glVertexAttribDivisorNV,
    "ib": _emscripten_glVertexAttribI4i,
    "hb": _emscripten_glVertexAttribI4iv,
    "gb": _emscripten_glVertexAttribI4ui,
    "fb": _emscripten_glVertexAttribI4uiv,
    "eb": _emscripten_glVertexAttribIPointer,
    "db": _emscripten_glVertexAttribPointer,
    "cb": _emscripten_glViewport,
    "bb": _emscripten_glWaitSync,
    "E": _emscripten_has_asyncify,
    "q": _emscripten_log,
    "ab": _emscripten_memcpy_big,
    "$a": _emscripten_request_fullscreen_strategy,
    "la": _emscripten_request_pointerlock,
    "_a": _emscripten_resize_heap,
    "u": _emscripten_run_script,
    "Za": _emscripten_run_script_int,
    "ka": _emscripten_run_script_string,
    "ja": _emscripten_sample_gamepad_data,
    "ia": _emscripten_set_beforeunload_callback_on_thread,
    "ha": _emscripten_set_blur_callback_on_thread,
    "t": _emscripten_set_canvas_element_size,
    "D": _emscripten_set_element_css_size,
    "ga": _emscripten_set_focus_callback_on_thread,
    "fa": _emscripten_set_fullscreenchange_callback_on_thread,
    "ea": _emscripten_set_gamepadconnected_callback_on_thread,
    "da": _emscripten_set_gamepaddisconnected_callback_on_thread,
    "ca": _emscripten_set_keydown_callback_on_thread,
    "ba": _emscripten_set_keypress_callback_on_thread,
    "aa": _emscripten_set_keyup_callback_on_thread,
    "Ya": _emscripten_set_main_loop_arg,
    "$": _emscripten_set_mousedown_callback_on_thread,
    "_": _emscripten_set_mouseenter_callback_on_thread,
    "Z": _emscripten_set_mouseleave_callback_on_thread,
    "Y": _emscripten_set_mousemove_callback_on_thread,
    "X": _emscripten_set_mouseup_callback_on_thread,
    "W": _emscripten_set_pointerlockchange_callback_on_thread,
    "V": _emscripten_set_resize_callback_on_thread,
    "U": _emscripten_set_touchcancel_callback_on_thread,
    "T": _emscripten_set_touchend_callback_on_thread,
    "S": _emscripten_set_touchmove_callback_on_thread,
    "R": _emscripten_set_touchstart_callback_on_thread,
    "Q": _emscripten_set_visibilitychange_callback_on_thread,
    "P": _emscripten_set_wheel_callback_on_thread,
    "Xa": _emscripten_set_window_title,
    "z": _emscripten_sleep,
    "Wa": _emscripten_webgl_enable_extension,
    "Va": _emscripten_webgl_get_current_context,
    "Ua": _emscripten_webgl_get_supported_extensions,
    "Ta": _emscripten_wget,
    "Sa": _emscripten_wget_data,
    "Vg": _environ_get,
    "Ug": _environ_sizes_get,
    "p": _exit,
    "m": _fd_close,
    "qa": _fd_fdstat_get,
    "Ka": _fd_pread,
    "Ja": _fd_pwrite,
    "G": _fd_read,
    "Ia": _fd_seek,
    "Tg": _fd_sync,
    "B": _fd_write,
    "y": _getaddrinfo,
    "O": _getentropy,
    "Ra": _gethostbyaddr,
    "Qa": _gethostbyname,
    "Pa": _getloadavg,
    "N": _getnameinfo,
    "Oa": _getprotobyname,
    "M": invoke_i,
    "c": invoke_ii,
    "d": invoke_iii,
    "g": invoke_iiii,
    "o": invoke_iiiii,
    "i": invoke_iiiiii,
    "C": invoke_iiiiiiiii,
    "L": invoke_iiiiiiiiii,
    "Ha": invoke_ji,
    "Ga": invoke_jiji,
    "n": invoke_v,
    "f": invoke_vi,
    "e": invoke_vii,
    "k": invoke_viii,
    "s": invoke_viiii,
    "x": invoke_viiiii,
    "K": invoke_viiiiiii,
    "J": invoke_viiiiiiiii,
    "Sg": _proc_exit,
    "Fa": _strftime,
    "Ea": _system
};
var asm = createWasm();
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function () {
    return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["yh"]).apply(null, arguments)
};
var _malloc = Module["_malloc"] = function () {
    return (_malloc = Module["_malloc"] = Module["asm"]["zh"]).apply(null, arguments)
};
var _free = Module["_free"] = function () {
    return (_free = Module["_free"] = Module["asm"]["Ah"]).apply(null, arguments)
};
var _main = Module["_main"] = function () {
    return (_main = Module["_main"] = Module["asm"]["Bh"]).apply(null, arguments)
};
var _fileno = Module["_fileno"] = function () {
    return (_fileno = Module["_fileno"] = Module["asm"]["Ch"]).apply(null, arguments)
};
var ___errno_location = Module["___errno_location"] = function () {
    return (___errno_location = Module["___errno_location"] = Module["asm"]["Eh"]).apply(null, arguments)
};
var _ntohs = Module["_ntohs"] = function () {
    return (_ntohs = Module["_ntohs"] = Module["asm"]["Fh"]).apply(null, arguments)
};
var _htons = Module["_htons"] = function () {
    return (_htons = Module["_htons"] = Module["asm"]["Gh"]).apply(null, arguments)
};
var _htonl = Module["_htonl"] = function () {
    return (_htonl = Module["_htonl"] = Module["asm"]["Hh"]).apply(null, arguments)
};
var _emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = function () {
    return (_emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = Module["asm"]["Ih"]).apply(null, arguments)
};
var _setThrew = Module["_setThrew"] = function () {
    return (_setThrew = Module["_setThrew"] = Module["asm"]["Jh"]).apply(null, arguments)
};
var stackSave = Module["stackSave"] = function () {
    return (stackSave = Module["stackSave"] = Module["asm"]["Kh"]).apply(null, arguments)
};
var stackRestore = Module["stackRestore"] = function () {
    return (stackRestore = Module["stackRestore"] = Module["asm"]["Lh"]).apply(null, arguments)
};
var stackAlloc = Module["stackAlloc"] = function () {
    return (stackAlloc = Module["stackAlloc"] = Module["asm"]["Mh"]).apply(null, arguments)
};
var dynCall_iii = Module["dynCall_iii"] = function () {
    return (dynCall_iii = Module["dynCall_iii"] = Module["asm"]["Nh"]).apply(null, arguments)
};
var dynCall_iiii = Module["dynCall_iiii"] = function () {
    return (dynCall_iiii = Module["dynCall_iiii"] = Module["asm"]["Oh"]).apply(null, arguments)
};
var dynCall_vii = Module["dynCall_vii"] = function () {
    return (dynCall_vii = Module["dynCall_vii"] = Module["asm"]["Ph"]).apply(null, arguments)
};
var dynCall_viii = Module["dynCall_viii"] = function () {
    return (dynCall_viii = Module["dynCall_viii"] = Module["asm"]["Qh"]).apply(null, arguments)
};
var dynCall_ii = Module["dynCall_ii"] = function () {
    return (dynCall_ii = Module["dynCall_ii"] = Module["asm"]["Rh"]).apply(null, arguments)
};
var dynCall_vi = Module["dynCall_vi"] = function () {
    return (dynCall_vi = Module["dynCall_vi"] = Module["asm"]["Sh"]).apply(null, arguments)
};
var dynCall_iiiii = Module["dynCall_iiiii"] = function () {
    return (dynCall_iiiii = Module["dynCall_iiiii"] = Module["asm"]["Th"]).apply(null, arguments)
};
var dynCall_iiiiii = Module["dynCall_iiiiii"] = function () {
    return (dynCall_iiiiii = Module["dynCall_iiiiii"] = Module["asm"]["Uh"]).apply(null, arguments)
};
var dynCall_i = Module["dynCall_i"] = function () {
    return (dynCall_i = Module["dynCall_i"] = Module["asm"]["Vh"]).apply(null, arguments)
};
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = function () {
    return (dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = Module["asm"]["Wh"]).apply(null, arguments)
};
var dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = function () {
    return (dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = Module["asm"]["Xh"]).apply(null, arguments)
};
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = function () {
    return (dynCall_iiiiiii = Module["dynCall_iiiiiii"] = Module["asm"]["Yh"]).apply(null, arguments)
};
var dynCall_iiiiiiiiii = Module["dynCall_iiiiiiiiii"] = function () {
    return (dynCall_iiiiiiiiii = Module["dynCall_iiiiiiiiii"] = Module["asm"]["Zh"]).apply(null, arguments)
};
var dynCall_iji = Module["dynCall_iji"] = function () {
    return (dynCall_iji = Module["dynCall_iji"] = Module["asm"]["_h"]).apply(null, arguments)
};
var dynCall_viiiii = Module["dynCall_viiiii"] = function () {
    return (dynCall_viiiii = Module["dynCall_viiiii"] = Module["asm"]["$h"]).apply(null, arguments)
};
var dynCall_jii = Module["dynCall_jii"] = function () {
    return (dynCall_jii = Module["dynCall_jii"] = Module["asm"]["ai"]).apply(null, arguments)
};
var dynCall_ddd = Module["dynCall_ddd"] = function () {
    return (dynCall_ddd = Module["dynCall_ddd"] = Module["asm"]["bi"]).apply(null, arguments)
};
var dynCall_dd = Module["dynCall_dd"] = function () {
    return (dynCall_dd = Module["dynCall_dd"] = Module["asm"]["ci"]).apply(null, arguments)
};
var dynCall_viiii = Module["dynCall_viiii"] = function () {
    return (dynCall_viiii = Module["dynCall_viiii"] = Module["asm"]["di"]).apply(null, arguments)
};
var dynCall_viiiiii = Module["dynCall_viiiiii"] = function () {
    return (dynCall_viiiiii = Module["dynCall_viiiiii"] = Module["asm"]["ei"]).apply(null, arguments)
};
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = function () {
    return (dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = Module["asm"]["fi"]).apply(null, arguments)
};
var dynCall_jiji = Module["dynCall_jiji"] = function () {
    return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["gi"]).apply(null, arguments)
};
var dynCall_ji = Module["dynCall_ji"] = function () {
    return (dynCall_ji = Module["dynCall_ji"] = Module["asm"]["hi"]).apply(null, arguments)
};
var dynCall_iff = Module["dynCall_iff"] = function () {
    return (dynCall_iff = Module["dynCall_iff"] = Module["asm"]["ii"]).apply(null, arguments)
};
var dynCall_ifffff = Module["dynCall_ifffff"] = function () {
    return (dynCall_ifffff = Module["dynCall_ifffff"] = Module["asm"]["ji"]).apply(null, arguments)
};
var dynCall_ifff = Module["dynCall_ifff"] = function () {
    return (dynCall_ifff = Module["dynCall_ifff"] = Module["asm"]["ki"]).apply(null, arguments)
};
var dynCall_viiiffff = Module["dynCall_viiiffff"] = function () {
    return (dynCall_viiiffff = Module["dynCall_viiiffff"] = Module["asm"]["li"]).apply(null, arguments)
};
var dynCall_viiiiffff = Module["dynCall_viiiiffff"] = function () {
    return (dynCall_viiiiffff = Module["dynCall_viiiiffff"] = Module["asm"]["mi"]).apply(null, arguments)
};
var dynCall_viiiiiffff = Module["dynCall_viiiiiffff"] = function () {
    return (dynCall_viiiiiffff = Module["dynCall_viiiiiffff"] = Module["asm"]["ni"]).apply(null, arguments)
};
var dynCall_iiiiddi = Module["dynCall_iiiiddi"] = function () {
    return (dynCall_iiiiddi = Module["dynCall_iiiiddi"] = Module["asm"]["oi"]).apply(null, arguments)
};
var dynCall_vidddddd = Module["dynCall_vidddddd"] = function () {
    return (dynCall_vidddddd = Module["dynCall_vidddddd"] = Module["asm"]["pi"]).apply(null, arguments)
};
var dynCall_viffff = Module["dynCall_viffff"] = function () {
    return (dynCall_viffff = Module["dynCall_viffff"] = Module["asm"]["qi"]).apply(null, arguments)
};
var dynCall_vidi = Module["dynCall_vidi"] = function () {
    return (dynCall_vidi = Module["dynCall_vidi"] = Module["asm"]["ri"]).apply(null, arguments)
};
var dynCall_vid = Module["dynCall_vid"] = function () {
    return (dynCall_vid = Module["dynCall_vid"] = Module["asm"]["si"]).apply(null, arguments)
};
var dynCall_iiiiddddiiii = Module["dynCall_iiiiddddiiii"] = function () {
    return (dynCall_iiiiddddiiii = Module["dynCall_iiiiddddiiii"] = Module["asm"]["ti"]).apply(null, arguments)
};
var dynCall_iiddiddiii = Module["dynCall_iiddiddiii"] = function () {
    return (dynCall_iiddiddiii = Module["dynCall_iiddiddiii"] = Module["asm"]["ui"]).apply(null, arguments)
};
var dynCall_iiiddidddiii = Module["dynCall_iiiddidddiii"] = function () {
    return (dynCall_iiiddidddiii = Module["dynCall_iiiddidddiii"] = Module["asm"]["vi"]).apply(null, arguments)
};
var dynCall_iiiiddidddiiii = Module["dynCall_iiiiddidddiiii"] = function () {
    return (dynCall_iiiiddidddiiii = Module["dynCall_iiiiddidddiiii"] = Module["asm"]["wi"]).apply(null, arguments)
};
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = function () {
    return (dynCall_viiiiiii = Module["dynCall_viiiiiii"] = Module["asm"]["xi"]).apply(null, arguments)
};
var dynCall_iifi = Module["dynCall_iifi"] = function () {
    return (dynCall_iifi = Module["dynCall_iifi"] = Module["asm"]["yi"]).apply(null, arguments)
};
var dynCall_iiiji = Module["dynCall_iiiji"] = function () {
    return (dynCall_iiiji = Module["dynCall_iiiji"] = Module["asm"]["zi"]).apply(null, arguments)
};
var dynCall_jiiij = Module["dynCall_jiiij"] = function () {
    return (dynCall_jiiij = Module["dynCall_jiiij"] = Module["asm"]["Ai"]).apply(null, arguments)
};
var dynCall_jiiji = Module["dynCall_jiiji"] = function () {
    return (dynCall_jiiji = Module["dynCall_jiiji"] = Module["asm"]["Bi"]).apply(null, arguments)
};
var dynCall_v = Module["dynCall_v"] = function () {
    return (dynCall_v = Module["dynCall_v"] = Module["asm"]["Ci"]).apply(null, arguments)
};
var dynCall_fiiii = Module["dynCall_fiiii"] = function () {
    return (dynCall_fiiii = Module["dynCall_fiiii"] = Module["asm"]["Di"]).apply(null, arguments)
};
var dynCall_iiiiiiiiiiiiiifii = Module["dynCall_iiiiiiiiiiiiiifii"] = function () {
    return (dynCall_iiiiiiiiiiiiiifii = Module["dynCall_iiiiiiiiiiiiiifii"] = Module["asm"]["Ei"]).apply(null, arguments)
};
var dynCall_fiifi = Module["dynCall_fiifi"] = function () {
    return (dynCall_fiifi = Module["dynCall_fiifi"] = Module["asm"]["Fi"]).apply(null, arguments)
};
var dynCall_viiiiiiiiiiii = Module["dynCall_viiiiiiiiiiii"] = function () {
    return (dynCall_viiiiiiiiiiii = Module["dynCall_viiiiiiiiiiii"] = Module["asm"]["Gi"]).apply(null, arguments)
};
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = function () {
    return (dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = Module["asm"]["Hi"]).apply(null, arguments)
};
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = function () {
    return (dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = Module["asm"]["Ii"]).apply(null, arguments)
};
var dynCall_viiijj = Module["dynCall_viiijj"] = function () {
    return (dynCall_viiijj = Module["dynCall_viiijj"] = Module["asm"]["Ji"]).apply(null, arguments)
};
var dynCall_iiiiiiidiiddii = Module["dynCall_iiiiiiidiiddii"] = function () {
    return (dynCall_iiiiiiidiiddii = Module["dynCall_iiiiiiidiiddii"] = Module["asm"]["Ki"]).apply(null, arguments)
};
var dynCall_jij = Module["dynCall_jij"] = function () {
    return (dynCall_jij = Module["dynCall_jij"] = Module["asm"]["Li"]).apply(null, arguments)
};
var dynCall_fiii = Module["dynCall_fiii"] = function () {
    return (dynCall_fiii = Module["dynCall_fiii"] = Module["asm"]["Mi"]).apply(null, arguments)
};
var dynCall_viifi = Module["dynCall_viifi"] = function () {
    return (dynCall_viifi = Module["dynCall_viifi"] = Module["asm"]["Ni"]).apply(null, arguments)
};
var dynCall_viidi = Module["dynCall_viidi"] = function () {
    return (dynCall_viidi = Module["dynCall_viidi"] = Module["asm"]["Oi"]).apply(null, arguments)
};
var dynCall_iiijii = Module["dynCall_iiijii"] = function () {
    return (dynCall_iiijii = Module["dynCall_iiijii"] = Module["asm"]["Pi"]).apply(null, arguments)
};
var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = function () {
    return (dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = Module["asm"]["Qi"]).apply(null, arguments)
};
var dynCall_iiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiii"] = function () {
    return (dynCall_iiiiiiiiiiiii = Module["dynCall_iiiiiiiiiiiii"] = Module["asm"]["Ri"]).apply(null, arguments)
};
var dynCall_iiiiiiiiiiii = Module["dynCall_iiiiiiiiiiii"] = function () {
    return (dynCall_iiiiiiiiiiii = Module["dynCall_iiiiiiiiiiii"] = Module["asm"]["Si"]).apply(null, arguments)
};
var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = function () {
    return (dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = Module["asm"]["Ti"]).apply(null, arguments)
};
var dynCall_viiiffi = Module["dynCall_viiiffi"] = function () {
    return (dynCall_viiiffi = Module["dynCall_viiiffi"] = Module["asm"]["Ui"]).apply(null, arguments)
};
var dynCall_viiiffffi = Module["dynCall_viiiffffi"] = function () {
    return (dynCall_viiiffffi = Module["dynCall_viiiffffi"] = Module["asm"]["Vi"]).apply(null, arguments)
};
var dynCall_viiiffffffi = Module["dynCall_viiiffffffi"] = function () {
    return (dynCall_viiiffffffi = Module["dynCall_viiiffffffi"] = Module["asm"]["Wi"]).apply(null, arguments)
};
var dynCall_viiffffffi = Module["dynCall_viiffffffi"] = function () {
    return (dynCall_viiffffffi = Module["dynCall_viiffffffi"] = Module["asm"]["Xi"]).apply(null, arguments)
};
var dynCall_viiffffi = Module["dynCall_viiffffi"] = function () {
    return (dynCall_viiffffi = Module["dynCall_viiffffi"] = Module["asm"]["Yi"]).apply(null, arguments)
};
var dynCall_iiiiiiifii = Module["dynCall_iiiiiiifii"] = function () {
    return (dynCall_iiiiiiifii = Module["dynCall_iiiiiiifii"] = Module["asm"]["Zi"]).apply(null, arguments)
};
var dynCall_ij = Module["dynCall_ij"] = function () {
    return (dynCall_ij = Module["dynCall_ij"] = Module["asm"]["_i"]).apply(null, arguments)
};
var dynCall_iiiij = Module["dynCall_iiiij"] = function () {
    return (dynCall_iiiij = Module["dynCall_iiiij"] = Module["asm"]["$i"]).apply(null, arguments)
};
var dynCall_iiij = Module["dynCall_iiij"] = function () {
    return (dynCall_iiij = Module["dynCall_iiij"] = Module["asm"]["aj"]).apply(null, arguments)
};
var dynCall_viji = Module["dynCall_viji"] = function () {
    return (dynCall_viji = Module["dynCall_viji"] = Module["asm"]["bj"]).apply(null, arguments)
};
var dynCall_vffff = Module["dynCall_vffff"] = function () {
    return (dynCall_vffff = Module["dynCall_vffff"] = Module["asm"]["cj"]).apply(null, arguments)
};
var dynCall_vf = Module["dynCall_vf"] = function () {
    return (dynCall_vf = Module["dynCall_vf"] = Module["asm"]["dj"]).apply(null, arguments)
};
var dynCall_vff = Module["dynCall_vff"] = function () {
    return (dynCall_vff = Module["dynCall_vff"] = Module["asm"]["ej"]).apply(null, arguments)
};
var dynCall_vfi = Module["dynCall_vfi"] = function () {
    return (dynCall_vfi = Module["dynCall_vfi"] = Module["asm"]["fj"]).apply(null, arguments)
};
var dynCall_viif = Module["dynCall_viif"] = function () {
    return (dynCall_viif = Module["dynCall_viif"] = Module["asm"]["gj"]).apply(null, arguments)
};
var dynCall_vif = Module["dynCall_vif"] = function () {
    return (dynCall_vif = Module["dynCall_vif"] = Module["asm"]["hj"]).apply(null, arguments)
};
var dynCall_viff = Module["dynCall_viff"] = function () {
    return (dynCall_viff = Module["dynCall_viff"] = Module["asm"]["ij"]).apply(null, arguments)
};
var dynCall_vifff = Module["dynCall_vifff"] = function () {
    return (dynCall_vifff = Module["dynCall_vifff"] = Module["asm"]["jj"]).apply(null, arguments)
};
var dynCall_iidiiii = Module["dynCall_iidiiii"] = function () {
    return (dynCall_iidiiii = Module["dynCall_iidiiii"] = Module["asm"]["kj"]).apply(null, arguments)
};
var _asyncify_start_unwind = Module["_asyncify_start_unwind"] = function () {
    return (_asyncify_start_unwind = Module["_asyncify_start_unwind"] = Module["asm"]["lj"]).apply(null, arguments)
};
var _asyncify_stop_unwind = Module["_asyncify_stop_unwind"] = function () {
    return (_asyncify_stop_unwind = Module["_asyncify_stop_unwind"] = Module["asm"]["mj"]).apply(null, arguments)
};
var _asyncify_start_rewind = Module["_asyncify_start_rewind"] = function () {
    return (_asyncify_start_rewind = Module["_asyncify_start_rewind"] = Module["asm"]["nj"]).apply(null, arguments)
};
var _asyncify_stop_rewind = Module["_asyncify_stop_rewind"] = function () {
    return (_asyncify_stop_rewind = Module["_asyncify_stop_rewind"] = Module["asm"]["oj"]).apply(null, arguments)
};
var _Py_EMSCRIPTEN_SIGNAL_HANDLING = Module["_Py_EMSCRIPTEN_SIGNAL_HANDLING"] = 5259232;
var ___start_em_js = Module["___start_em_js"] = 5244536;
var ___stop_em_js = Module["___stop_em_js"] = 5245042;

function invoke_iii(index, a1, a2) {
    var sp = stackSave();
    try {
        return dynCall_iii(index, a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiii(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        return dynCall_iiiii(index, a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_ii(index, a1) {
    var sp = stackSave();
    try {
        return dynCall_ii(index, a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiii(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        dynCall_viiii(index, a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        return dynCall_iiii(index, a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        dynCall_viii(index, a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vii(index, a1, a2) {
    var sp = stackSave();
    try {
        dynCall_vii(index, a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    var sp = stackSave();
    try {
        dynCall_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_vi(index, a1) {
    var sp = stackSave();
    try {
        dynCall_vi(index, a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8) {
    var sp = stackSave();
    try {
        return dynCall_iiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    var sp = stackSave();
    try {
        return dynCall_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_iiiiii(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        return dynCall_iiiiii(index, a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_i(index) {
    var sp = stackSave();
    try {
        return dynCall_i(index)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiii(index, a1, a2, a3, a4, a5) {
    var sp = stackSave();
    try {
        dynCall_viiiii(index, a1, a2, a3, a4, a5)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
    var sp = stackSave();
    try {
        dynCall_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_v(index) {
    var sp = stackSave();
    try {
        dynCall_v(index)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_ji(index, a1) {
    var sp = stackSave();
    try {
        return dynCall_ji(index, a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}

function invoke_jiji(index, a1, a2, a3, a4) {
    var sp = stackSave();
    try {
        return dynCall_jiji(index, a1, a2, a3, a4)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0)
    }
}
Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
Module["FS_createPath"] = FS.createPath;
Module["FS_createDataFile"] = FS.createDataFile;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["FS_createLazyFile"] = FS.createLazyFile;
Module["FS_createDevice"] = FS.createDevice;
Module["FS_unlink"] = FS.unlink;
Module["ccall"] = ccall;
Module["stackTrace"] = stackTrace;
Module["FS"] = FS;
var calledRun;
dependenciesFulfilled = function runCaller() {
    if (!calledRun) run();
    if (!calledRun) dependenciesFulfilled = runCaller
};

function callMain(args) {
    var entryFunction = Module["_main"];
    args = args || [];
    args.unshift(thisProgram);
    var argc = args.length;
    var argv = stackAlloc((argc + 1) * 4);
    var argv_ptr = argv >> 2;
    args.forEach(arg => {
        HEAP32[argv_ptr++] = allocateUTF8OnStack(arg)
    });
    HEAP32[argv_ptr] = 0;
    try {
        var ret = entryFunction(argc, argv);
        exitJS(ret, true);
        return ret
    } catch (e) {
        return handleException(e)
    }
}

function run(args) {
    args = args || arguments_;
    if (runDependencies > 0) {
        return
    }
    preRun();
    if (runDependencies > 0) {
        return
    }

    function doRun() {
        if (calledRun) return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT) return;
        initRuntime();
        preMain();
        if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
        if (shouldRunNow) callMain(args);
        postRun()
    }
    if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function () {
            setTimeout(function () {
                Module["setStatus"]("")
            }, 1);
            doRun()
        }, 1)
    } else {
        doRun()
    }
}
if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
    while (Module["preInit"].length > 0) {
        Module["preInit"].pop()()
    }
}
var shouldRunNow = true;
if (Module["noInitialRun"]) shouldRunNow = false;
run();
