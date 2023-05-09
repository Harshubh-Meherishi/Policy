"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/nft-storage";
exports.ids = ["pages/api/nft-storage"];
exports.modules = {

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "nft.storage":
/*!******************************!*\
  !*** external "nft.storage" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("nft.storage");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "(api)/./src/pages/api/nft-storage.ts":
/*!**************************************!*\
  !*** ./src/pages/api/nft-storage.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nft_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nft.storage */ \"nft.storage\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nft_storage__WEBPACK_IMPORTED_MODULE_2__]);\nnft_storage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nconst client = new nft_storage__WEBPACK_IMPORTED_MODULE_2__.NFTStorage({\n    token: `${process.env.NFT_STORAGE_KEY}`\n});\nconst handler = async (req, res1)=>{\n    if (req.method != \"POST\") {\n        return res1.status(403).json({\n            error: `Unsupported method ${req.method}`\n        });\n    }\n    try {\n        // Parse req body and save image in /tmp\n        const data = await new Promise((res, rej)=>{\n            const form = formidable__WEBPACK_IMPORTED_MODULE_0___default()({\n                multiples: true,\n                uploadDir: (0,os__WEBPACK_IMPORTED_MODULE_3__.tmpdir)()\n            });\n            form.parse(req, (err, fields, files)=>{\n                if (err) rej(err);\n                res({\n                    ...fields,\n                    ...files\n                });\n            });\n        });\n        // Read image from /tmp\n        const { filepath , originalFilename =\"image\" , mimetype =\"image\" ,  } = data.image;\n        const buffer = (0,fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync)(filepath);\n        const arraybuffer = Uint8Array.from(buffer).buffer;\n        const file = new nft_storage__WEBPACK_IMPORTED_MODULE_2__.File([\n            arraybuffer\n        ], originalFilename, {\n            type: mimetype\n        });\n        // Upload data to nft.storage\n        const metadata = await client.store({\n            name: data.name,\n            description: data.description,\n            image: file\n        });\n        // Delete tmp image\n        (0,fs__WEBPACK_IMPORTED_MODULE_1__.unlinkSync)(filepath);\n        // return tokenURI\n        res1.status(201).json({\n            uri: metadata.url\n        });\n    } catch (e) {\n        console.log(e);\n        return res1.status(400).json(e);\n    }\n};\n// Must disable bodyParser for formidable to work\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ0pDLFVBQVUsRUFBRSxLQUFLO0lBQ25CLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWV0QyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0cGxhY2UvLi9zcmMvcGFnZXMvYXBpL25mdC1zdG9yYWdlLnRzPzBiMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZvcm1pZGFibGUgZnJvbSBcImZvcm1pZGFibGVcIjtcbmltcG9ydCB7IHJlYWRGaWxlU3luYywgdW5saW5rU3luYyB9IGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgRmlsZSwgTkZUU3RvcmFnZSB9IGZyb20gXCJuZnQuc3RvcmFnZVwiO1xuaW1wb3J0IHsgdG1wZGlyIH0gZnJvbSBcIm9zXCI7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBORlRTdG9yYWdlKHsgdG9rZW46IGAke3Byb2Nlc3MuZW52Lk5GVF9TVE9SQUdFX0tFWX1gIH0pO1xuXG5jb25zdCBoYW5kbGVyOiBOZXh0QXBpSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPSBcIlBPU1RcIikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7IGVycm9yOiBgVW5zdXBwb3J0ZWQgbWV0aG9kICR7cmVxLm1ldGhvZH1gIH0pO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gUGFyc2UgcmVxIGJvZHkgYW5kIHNhdmUgaW1hZ2UgaW4gL3RtcFxuICAgIGNvbnN0IGRhdGE6IGFueSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgY29uc3QgZm9ybSA9IGZvcm1pZGFibGUoeyBtdWx0aXBsZXM6IHRydWUsIHVwbG9hZERpcjogdG1wZGlyKCkgfSk7XG4gICAgICBmb3JtLnBhcnNlKHJlcSwgKGVyciwgZmllbGRzLCBmaWxlcykgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZWooZXJyKTtcbiAgICAgICAgcmVzKHsgLi4uZmllbGRzLCAuLi5maWxlcyB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIFJlYWQgaW1hZ2UgZnJvbSAvdG1wXG4gICAgY29uc3Qge1xuICAgICAgZmlsZXBhdGgsXG4gICAgICBvcmlnaW5hbEZpbGVuYW1lID0gXCJpbWFnZVwiLFxuICAgICAgbWltZXR5cGUgPSBcImltYWdlXCIsXG4gICAgfSA9IGRhdGEuaW1hZ2U7XG4gICAgY29uc3QgYnVmZmVyID0gcmVhZEZpbGVTeW5jKGZpbGVwYXRoKTtcbiAgICBjb25zdCBhcnJheWJ1ZmZlciA9IFVpbnQ4QXJyYXkuZnJvbShidWZmZXIpLmJ1ZmZlcjtcbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUoW2FycmF5YnVmZmVyXSwgb3JpZ2luYWxGaWxlbmFtZSwge1xuICAgICAgdHlwZTogbWltZXR5cGUsXG4gICAgfSk7XG4gICAgLy8gVXBsb2FkIGRhdGEgdG8gbmZ0LnN0b3JhZ2VcbiAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IGNsaWVudC5zdG9yZSh7XG4gICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgIGltYWdlOiBmaWxlLFxuICAgIH0pO1xuICAgIC8vIERlbGV0ZSB0bXAgaW1hZ2VcbiAgICB1bmxpbmtTeW5jKGZpbGVwYXRoKTtcbiAgICAvLyByZXR1cm4gdG9rZW5VUklcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHVyaTogbWV0YWRhdGEudXJsIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGUpO1xuICB9XG59O1xuXG4vLyBNdXN0IGRpc2FibGUgYm9keVBhcnNlciBmb3IgZm9ybWlkYWJsZSB0byB3b3JrXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiZm9ybWlkYWJsZSIsInJlYWRGaWxlU3luYyIsInVubGlua1N5bmMiLCJGaWxlIiwiTkZUU3RvcmFnZSIsInRtcGRpciIsImNsaWVudCIsInRva2VuIiwicHJvY2VzcyIsImVudiIsIk5GVF9TVE9SQUdFX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJkYXRhIiwiUHJvbWlzZSIsInJlaiIsImZvcm0iLCJtdWx0aXBsZXMiLCJ1cGxvYWREaXIiLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiZmlsZXBhdGgiLCJvcmlnaW5hbEZpbGVuYW1lIiwibWltZXR5cGUiLCJpbWFnZSIsImJ1ZmZlciIsImFycmF5YnVmZmVyIiwiVWludDhBcnJheSIsImZyb20iLCJmaWxlIiwidHlwZSIsIm1ldGFkYXRhIiwic3RvcmUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ1cmkiLCJ1cmwiLCJlIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/nft-storage.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/nft-storage.ts"));
module.exports = __webpack_exports__;

})();