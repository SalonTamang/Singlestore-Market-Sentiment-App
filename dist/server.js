/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/connection.ts":
/*!**********************************!*\
  !*** ./src/server/connection.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.readData = exports.stopSingleStore = exports.connectSingleStore = void 0;\nvar mysql = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nfunction connectSingleStore(config) {\n    if (config === void 0) { config = {}; }\n    return __awaiter(this, void 0, void 0, function () {\n        var baseConfig;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    dotenv.config();\n                    baseConfig = {\n                        host: process.env.HOST,\n                        port: Number(process.env.DB_PORT),\n                        password: process.env.PASSWORD,\n                        user: \"admin\",\n                        database: \"stock_sentiment\"\n                    };\n                    return [4 /*yield*/, mysql.createConnection(__assign(__assign({}, baseConfig), config))];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n}\nexports.connectSingleStore = connectSingleStore;\nfunction stopSingleStore(conn) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, conn.end()];\n                case 1:\n                    _a.sent();\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.stopSingleStore = stopSingleStore;\nfunction readData(_a) {\n    var conn = _a.conn, database = _a.database, embedding = _a.embedding;\n    return __awaiter(this, void 0, void 0, function () {\n        var closeConn, rows, error_1;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    _b.trys.push([0, 6, , 7]);\n                    closeConn = false;\n                    if (!!conn) return [3 /*break*/, 2];\n                    return [4 /*yield*/, connectSingleStore({ database: database })];\n                case 1:\n                    conn = _b.sent();\n                    closeConn = true;\n                    _b.label = 2;\n                case 2: return [4 /*yield*/, conn.execute(\"SELECT text, DOT_PRODUCT(embedding, JSON_ARRAY_PACK('[\".concat(embedding, \"]')) AS similarity FROM tweets ORDER BY similarity DESC LIMIT 1\"))];\n                case 3:\n                    rows = (_b.sent())[0];\n                    if (!closeConn) return [3 /*break*/, 5];\n                    return [4 /*yield*/, stopSingleStore(conn)];\n                case 4:\n                    _b.sent();\n                    _b.label = 5;\n                case 5: return [2 /*return*/, rows[0].text];\n                case 6:\n                    error_1 = _b.sent();\n                    console.error(error_1);\n                    return [2 /*return*/, error_1];\n                case 7: return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.readData = readData;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/connection.ts?");

/***/ }),

/***/ "./src/server/routes.ts":
/*!******************************!*\
  !*** ./src/server/routes.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar connection_1 = __webpack_require__(/*! ./connection */ \"./src/server/connection.ts\");\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nvar router = express.Router();\ndotenv.config();\nvar openai_1 = __webpack_require__(/*! openai */ \"openai\");\nvar database = \"stock_sentiment\";\nrouter.get(\"/api/hello\", function (req, res, next) {\n    res.json(\"SingleStore\");\n});\nrouter.get(\"/api/market/:symbol\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var symbol, url, response, data, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                symbol = req.params.symbol;\n                url = \"https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=\".concat(symbol, \"&apikey=\").concat(process.env.ALPHA_KEY);\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 4, , 5]);\n                return [4 /*yield*/, fetch(url)];\n            case 2:\n                response = _a.sent();\n                return [4 /*yield*/, response.json()];\n            case 3:\n                data = _a.sent();\n                res.send(data);\n                return [3 /*break*/, 5];\n            case 4:\n                error_1 = _a.sent();\n                console.error(error_1);\n                return [3 /*break*/, 5];\n            case 5: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/api/database/:symbol\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var symbol, openai, response, embedding, sqlRes, prompt, completion, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                symbol = req.params.symbol;\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 5, , 6]);\n                openai = new openai_1.default({ apiKey: process.env.OPENAI_API_KEY });\n                return [4 /*yield*/, openai.embeddings.create({\n                        model: \"text-embedding-3-small\",\n                        input: symbol,\n                        encoding_format: \"float\"\n                    })];\n            case 2:\n                response = _a.sent();\n                embedding = response.data[0].embedding;\n                console.log(\"AAAA\", symbol, embedding);\n                return [4 /*yield*/, (0, connection_1.readData)({ database: database, embedding: embedding })];\n            case 3:\n                sqlRes = _a.sent();\n                prompt = \"We need to decide if \".concat(symbol, \" is a good stock to invest in.\\n        The tweet that is most similar to this from the \\n        stock_sentiment is: \").concat(sqlRes, \". Please use this tweet to give \\n        market sentiment on the stock and only this tweet. \\n        Please limit the response to 120 characters.\");\n                return [4 /*yield*/, openai.chat.completions.create({\n                        messages: [\n                            { role: \"system\", content: \"You are a helpful assistant.\" },\n                            { role: \"user\", content: prompt },\n                        ],\n                        model: \"gpt-4o\"\n                    })];\n            case 4:\n                completion = _a.sent();\n                res.send(completion.choices[0].message.content);\n                return [3 /*break*/, 6];\n            case 5:\n                error_2 = _a.sent();\n                console.error(error_2);\n                return [3 /*break*/, 6];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); });\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes.ts\");\nvar app = express();\napp.use(express.static('public'));\napp.use(routes_1.default);\nvar port = process.env.PORT || 3000;\napp.listen(port, function () { return console.log(\"Server listening on port: \".concat(port)); });\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/server.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;