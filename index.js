/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
  //CommonJS2 Comment
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  //AMD Comment
  else if (typeof define === 'function' && define.amd) define([], factory);
  //CommonJS Comment
  else if (typeof exports === 'object') exports['imgur'] = factory();
  //Root Comment
  else root['imgur'] = factory();
})(
  (() => {
    if (typeof self !== 'undefined') {
      return self;
    } else if (typeof window !== 'undefined') {
      return window;
    } else if (typeof global !== 'undefined') {
      return global;
    } else {
      return Function('return this')();
    }
  })(),
  function () {
    return /******/ (() => {
      // webpackBootstrap
      /******/ 'use strict';
      /******/ var __webpack_modules__ = {
        /***/ './dist/esm/album/getAlbum.js':
          /*!************************************!*\
  !*** ./dist/esm/album/getAlbum.js ***!
  \************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "getAlbum": () => (/* binding */ getAlbum)\n/* harmony export */ });\n/* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/endpoints */ "./dist/esm/common/endpoints.js");\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "./dist/esm/common/utils.js");\n\n\nasync function getAlbum(client, albumHash) {\n  const url = `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.ALBUM_ENDPOINT}/${albumHash}`;\n  return (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(await client.request({\n    url\n  }));\n}\n\n//# sourceURL=webpack://imgur-api/./dist/esm/album/getAlbum.js?'
            );

            /***/
          },

        /***/ './dist/esm/album/index.js':
          /*!*********************************!*\
  !*** ./dist/esm/album/index.js ***!
  \*********************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "getAlbum": () => (/* reexport safe */ _getAlbum__WEBPACK_IMPORTED_MODULE_0__.getAlbum)\n/* harmony export */ });\n/* harmony import */ var _getAlbum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAlbum */ "./dist/esm/album/getAlbum.js");\n\n\n//# sourceURL=webpack://imgur-api/./dist/esm/album/index.js?'
            );

            /***/
          },

        /***/ './dist/esm/client.js':
          /*!****************************!*\
  !*** ./dist/esm/client.js ***!
  \****************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "ImgurClient": () => (/* binding */ ImgurClient)\n/* harmony export */ });\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "events");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _getAuthorizationHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAuthorizationHeader */ "./dist/esm/getAuthorizationHeader.js");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./dist/esm/image/index.js");\n/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery */ "./dist/esm/gallery/index.js");\n/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./album */ "./dist/esm/album/index.js");\n/* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/endpoints */ "./dist/esm/common/endpoints.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\nconst USERAGENT = \'imgur/next (https://github.com/kaimallea/node-imgur)\';\n\nclass ImgurClient extends events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {\n  constructor(credentials) {\n    super();\n    this.credentials = credentials;\n    this.plainFetcher = axios__WEBPACK_IMPORTED_MODULE_6___default().create({\n      baseURL: _common_endpoints__WEBPACK_IMPORTED_MODULE_5__.IMGUR_API_PREFIX,\n      headers: {\n        \'user-agent\': USERAGENT\n      },\n      responseType: \'json\'\n    });\n    this.fetcher = axios__WEBPACK_IMPORTED_MODULE_6___default().create({\n      baseURL: _common_endpoints__WEBPACK_IMPORTED_MODULE_5__.IMGUR_API_PREFIX,\n      headers: {\n        \'user-agent\': USERAGENT\n      },\n      responseType: \'json\'\n    });\n    this.fetcher.interceptors.request.use(async config => {\n      config.headers = config.headers ? config.headers : {};\n      config.headers.authorization = await (0,_getAuthorizationHeader__WEBPACK_IMPORTED_MODULE_1__.getAuthorizationHeader)(this);\n      return config;\n    }, e => Promise.reject(e));\n  }\n\n  plainRequest(options) {\n    return this.plainFetcher(options);\n  }\n\n  request(options = {}) {\n    return this.fetcher(options);\n  }\n\n  deleteImage(imageHash) {\n    return (0,_image__WEBPACK_IMPORTED_MODULE_2__.deleteImage)(this, imageHash);\n  }\n\n  favoriteImage(imageHash) {\n    return (0,_image__WEBPACK_IMPORTED_MODULE_2__.favoriteImage)(this, imageHash);\n  }\n\n  getAlbum(albumHash) {\n    return (0,_album__WEBPACK_IMPORTED_MODULE_4__.getAlbum)(this, albumHash);\n  }\n\n  getGallery(options) {\n    return (0,_gallery__WEBPACK_IMPORTED_MODULE_3__.getGallery)(this, options);\n  }\n\n  getSubredditGallery(options) {\n    return (0,_gallery__WEBPACK_IMPORTED_MODULE_3__.getSubredditGallery)(this, options);\n  }\n\n  searchGallery(options) {\n    return (0,_gallery__WEBPACK_IMPORTED_MODULE_3__.searchGallery)(this, options);\n  }\n\n  getImage(imageHash) {\n    return (0,_image__WEBPACK_IMPORTED_MODULE_2__.getImage)(this, imageHash);\n  }\n\n  updateImage(payload) {\n    return (0,_image__WEBPACK_IMPORTED_MODULE_2__.updateImage)(this, payload);\n  }\n\n  upload(payload) {\n    return (0,_image__WEBPACK_IMPORTED_MODULE_2__.upload)(this, payload);\n  }\n\n}\n\n//# sourceURL=webpack://imgur-api/./dist/esm/client.js?'
            );

            /***/
          },

        /***/ './dist/esm/common/endpoints.js':
          /*!**************************************!*\
  !*** ./dist/esm/common/endpoints.js ***!
  \**************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "IMGUR_API_PREFIX": () => (/* binding */ IMGUR_API_PREFIX),\n/* harmony export */   "API_VERSION": () => (/* binding */ API_VERSION),\n/* harmony export */   "AUTHORIZE_ENDPOINT": () => (/* binding */ AUTHORIZE_ENDPOINT),\n/* harmony export */   "ALBUM_ENDPOINT": () => (/* binding */ ALBUM_ENDPOINT),\n/* harmony export */   "IMAGE_ENDPOINT": () => (/* binding */ IMAGE_ENDPOINT),\n/* harmony export */   "UPLOAD_ENDPOINT": () => (/* binding */ UPLOAD_ENDPOINT),\n/* harmony export */   "GALLERY_ENDPOINT": () => (/* binding */ GALLERY_ENDPOINT),\n/* harmony export */   "SUBREDDIT_GALLERY_ENDPOINT": () => (/* binding */ SUBREDDIT_GALLERY_ENDPOINT),\n/* harmony export */   "SEARCH_GALLERY_ENDPOINT": () => (/* binding */ SEARCH_GALLERY_ENDPOINT)\n/* harmony export */ });\nconst IMGUR_API_PREFIX = \'https://api.imgur.com\';\nconst API_VERSION = \'3\';\nconst AUTHORIZE_ENDPOINT = \'oauth2/authorize\';\nconst ALBUM_ENDPOINT = `${API_VERSION}/album`;\nconst IMAGE_ENDPOINT = `${API_VERSION}/image`;\nconst UPLOAD_ENDPOINT = `${API_VERSION}/upload`;\nconst GALLERY_ENDPOINT = `${API_VERSION}/gallery`;\nconst SUBREDDIT_GALLERY_ENDPOINT = `${API_VERSION}/gallery/r`;\nconst SEARCH_GALLERY_ENDPOINT = `${API_VERSION}/gallery/search`;\n\n//# sourceURL=webpack://imgur-api/./dist/esm/common/endpoints.js?'
            );

            /***/
          },

        /***/ './dist/esm/common/types.js':
          /*!**********************************!*\
  !*** ./dist/esm/common/types.js ***!
  \**********************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "isAccessToken": () => (/* binding */ isAccessToken),\n/* harmony export */   "isClientId": () => (/* binding */ isClientId),\n/* harmony export */   "isLogin": () => (/* binding */ isLogin)\n/* harmony export */ });\nfunction isAccessToken(arg) {\n  return arg.accessToken !== undefined;\n}\nfunction isClientId(arg) {\n  return arg.clientId !== undefined;\n}\nfunction isLogin(arg) {\n  return arg.clientId !== undefined && arg.username !== undefined && arg.password !== undefined;\n}\n\n//# sourceURL=webpack://imgur-api/./dist/esm/common/types.js?'
            );

            /***/
          },

        /***/ './dist/esm/common/utils.js':
          /*!**********************************!*\
  !*** ./dist/esm/common/utils.js ***!
  \**********************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isBase64\": () => (/* binding */ isBase64),\n/* harmony export */   \"isImageUrl\": () => (/* binding */ isImageUrl),\n/* harmony export */   \"isStream\": () => (/* binding */ isStream),\n/* harmony export */   \"getSource\": () => (/* binding */ getSource),\n/* harmony export */   \"createForm\": () => (/* binding */ createForm),\n/* harmony export */   \"getImgurApiResponseFromResponse\": () => (/* binding */ getImgurApiResponseFromResponse)\n/* harmony export */ });\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-data */ \"form-data\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction isBase64(payload) {\n  if (typeof payload === 'string') {\n    return false;\n  }\n\n  return typeof payload.base64 !== 'undefined' && payload.type === 'base64';\n}\nfunction isImageUrl(payload) {\n  if (typeof payload === 'string') {\n    return true;\n  }\n\n  return typeof payload.image !== 'undefined' && payload.type === 'url';\n}\nfunction isStream(payload) {\n  if (typeof payload === 'string') {\n    return false;\n  }\n\n  return typeof payload.stream !== 'undefined';\n} // TODO: Refactor this to be a unique name of some kind (a hash?)\n\nfunction getSource(payload) {\n  if (typeof payload === 'string') {\n    return payload;\n  }\n\n  if (isBase64(payload)) {\n    return 'payload.base64';\n  } else if (isStream(payload)) {\n    return 'payload.stream';\n  } else {\n    return payload.image;\n  }\n}\nfunction createForm(payload) {\n  const form = new (form_data__WEBPACK_IMPORTED_MODULE_0___default())();\n\n  if (typeof payload === 'string') {\n    form.append('image', payload);\n    return form;\n  }\n\n  for (const [key, value] of Object.entries(payload)) {\n    const supportedUploadObjectTypes = ['base64', 'stream'];\n\n    if (supportedUploadObjectTypes.indexOf(key) !== -1) {\n      if (supportedUploadObjectTypes.indexOf(payload.type) !== -1) {\n        form.append(key, payload);\n      }\n    } else {\n      form.append(key, value);\n    }\n  }\n\n  return form;\n}\nfunction getImgurApiResponseFromResponse(response) {\n  if (typeof response.data?.status !== 'undefined' && typeof response.data?.success !== 'undefined') {\n    return response.data;\n  }\n\n  return {\n    data: response.data,\n    status: response.status,\n    // TODO: determine the success of the call?\n    success: true\n  };\n}\n\n//# sourceURL=webpack://imgur-api/./dist/esm/common/utils.js?"
            );

            /***/
          },

        /***/ './dist/esm/gallery/getGallery.js':
          /*!****************************************!*\
  !*** ./dist/esm/gallery/getGallery.js ***!
  \****************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"constructGalleryUrl\": () => (/* binding */ constructGalleryUrl),\n/* harmony export */   \"getGallery\": () => (/* binding */ getGallery)\n/* harmony export */ });\n/* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/endpoints */ \"./dist/esm/common/endpoints.js\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ \"./dist/esm/common/utils.js\");\n\n\n\nconst defaultOptions = {\n  section: 'hot',\n  sort: 'viral'\n};\nfunction constructGalleryUrl(options) {\n  const mergedOptions = Object.assign({}, defaultOptions, options);\n  let uri = `${mergedOptions.section}`;\n\n  if (mergedOptions.sort) {\n    uri += `/${mergedOptions.sort}`;\n  }\n\n  if (mergedOptions.section === 'top' && mergedOptions.window) {\n    uri += `/${mergedOptions.window}`;\n  }\n\n  if (mergedOptions.page) {\n    uri += `/${mergedOptions.page}`;\n  }\n\n  const url = new url__WEBPACK_IMPORTED_MODULE_1__.URL(`${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMGUR_API_PREFIX}/${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.GALLERY_ENDPOINT}/${uri}`);\n\n  if (mergedOptions.showViral !== undefined) {\n    url.searchParams.append('showViral', mergedOptions.showViral.toString());\n  }\n\n  if (mergedOptions.mature !== undefined) {\n    url.searchParams.append('mature', mergedOptions.mature.toString());\n  }\n\n  if (mergedOptions.album_previews !== undefined) {\n    url.searchParams.append('album_previews', mergedOptions.album_previews.toString());\n  }\n\n  return url;\n}\nasync function getGallery(client, options = defaultOptions) {\n  const {\n    pathname\n  } = constructGalleryUrl(options); // since we're using prefixUrl with got, we have to remove the starting slash or it'll throw\n\n  const finalPathname = pathname.slice(1);\n  return (0,_common_utils__WEBPACK_IMPORTED_MODULE_2__.getImgurApiResponseFromResponse)(await client.request({\n    url: finalPathname\n  }));\n}\n\n//# sourceURL=webpack://imgur-api/./dist/esm/gallery/getGallery.js?"
            );

            /***/
          },

        /***/ './dist/esm/gallery/getSubredditGallery.js':
          /*!*************************************************!*\
  !*** ./dist/esm/gallery/getSubredditGallery.js ***!
  \*************************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "constructSubredditGalleryUrl": () => (/* binding */ constructSubredditGalleryUrl),\n/* harmony export */   "getSubredditGallery": () => (/* binding */ getSubredditGallery)\n/* harmony export */ });\n/* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/endpoints */ "./dist/esm/common/endpoints.js");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "url");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./dist/esm/common/utils.js");\n\n\n\nfunction constructSubredditGalleryUrl(options) {\n  let uri = `${options.subreddit}`;\n\n  if (options.sort) {\n    uri += `/${options.sort}`;\n  }\n\n  if (options.sort === \'top\' && options.window) {\n    uri += `/${options.window}`;\n  }\n\n  if (options.page) {\n    uri += `/${options.page}`;\n  }\n\n  const url = new url__WEBPACK_IMPORTED_MODULE_1__.URL(`${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMGUR_API_PREFIX}/${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.SUBREDDIT_GALLERY_ENDPOINT}/${uri}`);\n  return url;\n}\nasync function getSubredditGallery(client, options) {\n  const {\n    pathname\n  } = constructSubredditGalleryUrl(options); // since we\'re using prefixUrl with got, we have to remove the starting slash or it\'ll throw\n\n  const finalPathname = pathname.slice(1);\n  return (0,_common_utils__WEBPACK_IMPORTED_MODULE_2__.getImgurApiResponseFromResponse)(await client.request({\n    url: finalPathname\n  }));\n}\n\n//# sourceURL=webpack://imgur-api/./dist/esm/gallery/getSubredditGallery.js?'
            );

            /***/
          },

        /***/ './dist/esm/gallery/index.js':
          /*!***********************************!*\
  !*** ./dist/esm/gallery/index.js ***!
  \***********************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "constructGalleryUrl": () => (/* reexport safe */ _getGallery__WEBPACK_IMPORTED_MODULE_0__.constructGalleryUrl),\n/* harmony export */   "getGallery": () => (/* reexport safe */ _getGallery__WEBPACK_IMPORTED_MODULE_0__.getGallery),\n/* harmony export */   "constructSubredditGalleryUrl": () => (/* reexport safe */ _getSubredditGallery__WEBPACK_IMPORTED_MODULE_1__.constructSubredditGalleryUrl),\n/* harmony export */   "getSubredditGallery": () => (/* reexport safe */ _getSubredditGallery__WEBPACK_IMPORTED_MODULE_1__.getSubredditGallery),\n/* harmony export */   "constructSearchGalleryUrl": () => (/* reexport safe */ _searchGallery__WEBPACK_IMPORTED_MODULE_2__.constructSearchGalleryUrl),\n/* harmony export */   "searchGallery": () => (/* reexport safe */ _searchGallery__WEBPACK_IMPORTED_MODULE_2__.searchGallery)\n/* harmony export */ });\n/* harmony import */ var _getGallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getGallery */ "./dist/esm/gallery/getGallery.js");\n/* harmony import */ var _getSubredditGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSubredditGallery */ "./dist/esm/gallery/getSubredditGallery.js");\n/* harmony import */ var _searchGallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchGallery */ "./dist/esm/gallery/searchGallery.js");\n\n\n\n\n//# sourceURL=webpack://imgur-api/./dist/esm/gallery/index.js?'
            );

            /***/
          },

        /***/ './dist/esm/gallery/searchGallery.js':
          /*!*******************************************!*\
  !*** ./dist/esm/gallery/searchGallery.js ***!
  \*******************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"constructSearchGalleryUrl\": () => (/* binding */ constructSearchGalleryUrl),\n/* harmony export */   \"searchGallery\": () => (/* binding */ searchGallery)\n/* harmony export */ });\n/* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/endpoints */ \"./dist/esm/common/endpoints.js\");\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ \"./dist/esm/common/utils.js\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst advancedParameters = ['q_all', 'q_any', 'q_exactly', 'q_not', 'q_type', 'q_size_px'];\nfunction constructSearchGalleryUrl(options) {\n  let uri = '';\n\n  if (options.sort) {\n    uri += `/${options.sort}`;\n  }\n\n  if (options.sort === 'top' && options.window) {\n    uri += `/${options.window}`;\n  }\n\n  if (options.page) {\n    uri += `/${options.page}`;\n  }\n\n  const url = new url__WEBPACK_IMPORTED_MODULE_2__.URL(`${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMGUR_API_PREFIX}/${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.SEARCH_GALLERY_ENDPOINT}${uri}`);\n  advancedParameters.forEach(param => {\n    if (options[param]?.length) {\n      url.searchParams.append(param, options[param]);\n    }\n  });\n\n  if (!url.search) {\n    const query = options.q || options.query;\n\n    if (!query) {\n      throw new Error('No query was provided');\n    }\n\n    url.searchParams.append('q', query);\n  }\n\n  return url;\n}\nasync function searchGallery(client, options) {\n  const {\n    pathname\n  } = constructSearchGalleryUrl(options); // since we're using prefixUrl with got, we have to remove the starting slash or it'll throw\n\n  const finalPathname = pathname.slice(1);\n  return (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(await client.request({\n    url: finalPathname\n  }));\n}\n\n//# sourceURL=webpack://imgur-api/./dist/esm/gallery/searchGallery.js?"
            );

            /***/
          },

        /***/ './dist/esm/getAuthorizationHeader.js':
          /*!********************************************!*\
  !*** ./dist/esm/getAuthorizationHeader.js ***!
  \********************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAuthorizationHeader\": () => (/* binding */ getAuthorizationHeader)\n/* harmony export */ });\n/* harmony import */ var _common_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/types */ \"./dist/esm/common/types.js\");\n/* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/endpoints */ \"./dist/esm/common/endpoints.js\");\n\n\nasync function getAuthorizationHeader(client) {\n  if ((0,_common_types__WEBPACK_IMPORTED_MODULE_0__.isAccessToken)(client.credentials)) {\n    return `Bearer ${client.credentials.accessToken}`;\n  }\n\n  if ((0,_common_types__WEBPACK_IMPORTED_MODULE_0__.isClientId)(client.credentials) && !(0,_common_types__WEBPACK_IMPORTED_MODULE_0__.isLogin)(client.credentials)) {\n    return `Client-ID ${client.credentials.clientId}`;\n  }\n\n  const {\n    clientId,\n    username,\n    password\n  } = client.credentials;\n  const options = {\n    url: _common_endpoints__WEBPACK_IMPORTED_MODULE_1__.AUTHORIZE_ENDPOINT,\n    baseURL: _common_endpoints__WEBPACK_IMPORTED_MODULE_1__.IMGUR_API_PREFIX,\n    params: {\n      client_id: clientId,\n      response_type: 'token'\n    }\n  };\n  let response = await client.plainRequest(options);\n  const cookies = Array.isArray(response.headers['set-cookie']) ? response.headers['set-cookie'][0] : response.headers['set-cookie'];\n\n  if (!cookies) {\n    throw new Error('No cookies were set during authorization');\n  }\n\n  const matches = cookies.match('(^|;)[s]*authorize_token=([^;]*)');\n\n  if (!matches || matches.length < 3) {\n    throw new Error('Unable to find authorize_token cookie');\n  }\n\n  const authorizeToken = matches[2];\n  options.method = 'POST';\n  options.data = {\n    username,\n    password,\n    allow: authorizeToken\n  };\n  options.followRedirect = false;\n  options.headers = {\n    cookie: `authorize_token=${authorizeToken}`\n  };\n  response = await client.plainRequest(options);\n  const location = response.headers.location;\n\n  if (!location) {\n    throw new Error('Unable to parse location');\n  }\n\n  const token = JSON.parse('{\"' + decodeURI(location.slice(location.indexOf('#') + 1)).replace(/\"/g, '\\\\\"').replace(/&/g, '\",\"').replace(/=/g, '\":\"') + '\"}');\n  const accessToken = token.access_token;\n  client.credentials.accessToken = accessToken;\n  return `Bearer ${accessToken}`;\n}\n\n//# sourceURL=webpack://imgur-api/./dist/esm/getAuthorizationHeader.js?"
            );

            /***/
          },

        /***/ './dist/esm/image/deleteImage.js':
          /*!***************************************!*\
  !*** ./dist/esm/image/deleteImage.js ***!
  \***************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "deleteImage": () => (/* binding */ deleteImage)\n/* harmony export */ });\n/* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/endpoints */ "./dist/esm/common/endpoints.js");\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "./dist/esm/common/utils.js");\n\n\nasync function deleteImage(client, imageHash) {\n  const url = `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMAGE_ENDPOINT}/${imageHash}`;\n  return (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(await client.request({\n    url,\n    method: \'DELETE\'\n  }));\n}\n\n//# sourceURL=webpack://imgur-api/./dist/esm/image/deleteImage.js?'
            );

            /***/
          },

        /***/ './dist/esm/image/favoriteImage.js':
          /*!*****************************************!*\
  !*** ./dist/esm/image/favoriteImage.js ***!
  \*****************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "favoriteImage": () => (/* binding */ favoriteImage)\n/* harmony export */ });\n/* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/endpoints */ "./dist/esm/common/endpoints.js");\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "./dist/esm/common/utils.js");\n\n\nasync function favoriteImage(client, imageHash) {\n  const url = `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMAGE_ENDPOINT}/${imageHash}/favorite`;\n  return (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(await client.request({\n    url,\n    method: \'POST\'\n  }));\n}\n\n//# sourceURL=webpack://imgur-api/./dist/esm/image/favoriteImage.js?'
            );

            /***/
          },

        /***/ './dist/esm/image/getImage.js':
          /*!************************************!*\
  !*** ./dist/esm/image/getImage.js ***!
  \************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "getImage": () => (/* binding */ getImage)\n/* harmony export */ });\n/* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/endpoints */ "./dist/esm/common/endpoints.js");\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "./dist/esm/common/utils.js");\n\n\nasync function getImage(client, imageHash) {\n  const url = `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMAGE_ENDPOINT}/${imageHash}`;\n  return (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(await client.request({\n    url\n  }));\n}\n\n//# sourceURL=webpack://imgur-api/./dist/esm/image/getImage.js?'
            );

            /***/
          },

        /***/ './dist/esm/image/index.js':
          /*!*********************************!*\
  !*** ./dist/esm/image/index.js ***!
  \*********************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "deleteImage": () => (/* reexport safe */ _deleteImage__WEBPACK_IMPORTED_MODULE_0__.deleteImage),\n/* harmony export */   "favoriteImage": () => (/* reexport safe */ _favoriteImage__WEBPACK_IMPORTED_MODULE_1__.favoriteImage),\n/* harmony export */   "getImage": () => (/* reexport safe */ _getImage__WEBPACK_IMPORTED_MODULE_2__.getImage),\n/* harmony export */   "updateImage": () => (/* reexport safe */ _updateImage__WEBPACK_IMPORTED_MODULE_3__.updateImage),\n/* harmony export */   "upload": () => (/* reexport safe */ _upload__WEBPACK_IMPORTED_MODULE_4__.upload)\n/* harmony export */ });\n/* harmony import */ var _deleteImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteImage */ "./dist/esm/image/deleteImage.js");\n/* harmony import */ var _favoriteImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favoriteImage */ "./dist/esm/image/favoriteImage.js");\n/* harmony import */ var _getImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getImage */ "./dist/esm/image/getImage.js");\n/* harmony import */ var _updateImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateImage */ "./dist/esm/image/updateImage.js");\n/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload */ "./dist/esm/image/upload.js");\n\n\n\n\n\n\n//# sourceURL=webpack://imgur-api/./dist/esm/image/index.js?'
            );

            /***/
          },

        /***/ './dist/esm/image/updateImage.js':
          /*!***************************************!*\
  !*** ./dist/esm/image/updateImage.js ***!
  \***************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateImage\": () => (/* binding */ updateImage)\n/* harmony export */ });\n/* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/endpoints */ \"./dist/esm/common/endpoints.js\");\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ \"./dist/esm/common/utils.js\");\n\n\n\nfunction isValidUpdatePayload(p) {\n  return typeof p.title === 'string' || typeof p.description === 'string';\n}\n\nasync function updateImage(client, payload) {\n  if (Array.isArray(payload)) {\n    const promises = payload.map(p => {\n      if (!isValidUpdatePayload(p)) {\n        throw new Error('Update requires a title and/or description');\n      }\n\n      const url = `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMAGE_ENDPOINT}/${p.imageHash}`;\n      const form = (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.createForm)(p);\n      /* eslint no-async-promise-executor: 0 */\n\n      return new Promise(async function (resolve) {\n        return resolve((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(await client.request({\n          url,\n          method: 'POST',\n          data: form\n        })));\n      });\n    });\n    return await Promise.all(promises);\n  }\n\n  if (!isValidUpdatePayload(payload)) {\n    throw new Error('Update requires a title and/or description');\n  }\n\n  const url = `${_common_endpoints__WEBPACK_IMPORTED_MODULE_0__.IMAGE_ENDPOINT}/${payload.imageHash}`;\n  const form = (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.createForm)(payload);\n  return (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.getImgurApiResponseFromResponse)(await client.request({\n    url,\n    method: 'POST',\n    data: form\n  }));\n}\n\n//# sourceURL=webpack://imgur-api/./dist/esm/image/updateImage.js?"
            );

            /***/
          },

        /***/ './dist/esm/image/upload.js':
          /*!**********************************!*\
  !*** ./dist/esm/image/upload.js ***!
  \**********************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "upload": () => (/* binding */ upload)\n/* harmony export */ });\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "./dist/esm/common/utils.js");\n/* harmony import */ var _common_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/endpoints */ "./dist/esm/common/endpoints.js");\n/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ "console-browserify");\n\n\nasync function upload(client, payload) {\n  if (Array.isArray(payload)) {\n    const promises = payload.map(p => {\n      const form = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.createForm)(p);\n      /* eslint no-async-promise-executor: 0 */\n\n      return new Promise(async resolve => {\n        resolve((0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.getImgurApiResponseFromResponse)(await client.request({\n          url: _common_endpoints__WEBPACK_IMPORTED_MODULE_1__.UPLOAD_ENDPOINT,\n          method: \'POST\',\n          data: form,\n          onUploadProgress: progressEvent => {\n            console.log({\n              progressEvent\n            });\n            client.emit(\'uploadProgress\', { ...progressEvent\n            });\n          }\n        })));\n      });\n    });\n    return await Promise.all(promises);\n  }\n\n  const form = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.createForm)(payload); // const id = Date.now.toString();\n\n  const request = await client.request({\n    url: _common_endpoints__WEBPACK_IMPORTED_MODULE_1__.UPLOAD_ENDPOINT,\n    method: \'POST\',\n    data: form,\n    onUploadProgress: progressEvent => {\n      console.log({\n        progressEvent\n      });\n      client.emit(\'uploadProgress\', { ...progressEvent\n      });\n    }\n  });\n  return Promise.resolve((0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.getImgurApiResponseFromResponse)(request));\n}\n\n//# sourceURL=webpack://imgur-api/./dist/esm/image/upload.js?'
            );

            /***/
          },

        /***/ './dist/esm/index.js':
          /*!***************************!*\
  !*** ./dist/esm/index.js ***!
  \***************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            eval(
              '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "ImgurClient": () => (/* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_0__.ImgurClient)\n/* harmony export */ });\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./dist/esm/client.js");\n\n\n//# sourceURL=webpack://imgur-api/./dist/esm/index.js?'
            );

            /***/
          },

        /***/ axios:
          /*!************************!*\
  !*** external "axios" ***!
  \************************/
          /***/ (module) => {
            module.exports = require('axios');

            /***/
          },

        /***/ 'console-browserify':
          /*!*************************************!*\
  !*** external "console-browserify" ***!
  \*************************************/
          /***/ (module) => {
            module.exports = require('console-browserify');

            /***/
          },

        /***/ events:
          /*!*************************!*\
  !*** external "events" ***!
  \*************************/
          /***/ (module) => {
            module.exports = require('events');

            /***/
          },

        /***/ 'form-data':
          /*!****************************!*\
  !*** external "form-data" ***!
  \****************************/
          /***/ (module) => {
            module.exports = require('form-data');

            /***/
          },

        /***/ url:
          /*!**********************!*\
  !*** external "url" ***!
  \**********************/
          /***/ (module) => {
            module.exports = require('url');

            /***/
          },

        /******/
      }; // The module cache
      /************************************************************************/
      /******/ /******/ var __webpack_module_cache__ = {}; // The require function
      /******/
      /******/ /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
          /******/ return cachedModule.exports;
          /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
          /******/ // no module.id needed
          /******/ // no module.loaded needed
          /******/ exports: {},
          /******/
        }); // Execute the module function
        /******/
        /******/ /******/ __webpack_modules__[moduleId](
          module,
          module.exports,
          __webpack_require__
        ); // Return the exports of the module
        /******/
        /******/ /******/ return module.exports;
        /******/
      } /* webpack/runtime/compat get default export */
      /******/
      /************************************************************************/
      /******/ /******/ (() => {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = (module) => {
          /******/ var getter =
            module && module.__esModule
              ? /******/ () => module['default']
              : /******/ () => module;
          /******/ __webpack_require__.d(getter, { a: getter });
          /******/ return getter;
          /******/
        };
        /******/
      })(); /* webpack/runtime/define property getters */
      /******/
      /******/ /******/ (() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
          /******/ for (var key in definition) {
            /******/ if (
              __webpack_require__.o(definition, key) &&
              !__webpack_require__.o(exports, key)
            ) {
              /******/ Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key],
              });
              /******/
            }
            /******/
          }
          /******/
        };
        /******/
      })(); /* webpack/runtime/hasOwnProperty shorthand */
      /******/
      /******/ /******/ (() => {
        /******/ __webpack_require__.o = (obj, prop) =>
          Object.prototype.hasOwnProperty.call(obj, prop);
        /******/
      })(); /* webpack/runtime/make namespace object */
      /******/
      /******/ /******/ (() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports) => {
          /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module',
            });
            /******/
          }
          /******/ Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          /******/
        };
        /******/
      })(); // startup // Load entry module and return exports // This entry module can't be inlined because the eval devtool is used.
      /******/
      /************************************************************************/
      /******/
      /******/ /******/ /******/ /******/ var __webpack_exports__ = __webpack_require__(
        './dist/esm/index.js'
      );
      /******/ __webpack_exports__ = __webpack_exports__.default;
      /******/
      /******/ return __webpack_exports__;
      /******/
    })();
  }
);
