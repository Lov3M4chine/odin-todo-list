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

/***/ "./src/js/Initialization.js":
/*!**********************************!*\
  !*** ./src/js/Initialization.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialize\": () => (/* binding */ initialize)\n/* harmony export */ });\n/* harmony import */ var _data_LocalStorageTaskRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/LocalStorageTaskRepository.js */ \"./src/js/data/LocalStorageTaskRepository.js\");\n/* harmony import */ var _formatters_TaskListFormatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatters/TaskListFormatter.js */ \"./src/js/formatters/TaskListFormatter.js\");\n/* harmony import */ var _renderers_TaskListRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderers/TaskListRenderer.js */ \"./src/js/renderers/TaskListRenderer.js\");\n/* harmony import */ var _forms_TaskFormHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/TaskFormHandler.js */ \"./src/js/forms/TaskFormHandler.js\");\n/* harmony import */ var _forms_TaskFormProcessor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/TaskFormProcessor.js */ \"./src/js/forms/TaskFormProcessor.js\");\n\n\n\n\n\nconst taskRepository = new _data_LocalStorageTaskRepository_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst tasks = taskRepository.getTasks();\nconst taskHtmlContainer = document.getElementById(\"task-list\");\nconst formatter = new _formatters_TaskListFormatter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst addTaskButton = document.getElementById(\"add-task-button\");\nconst renderer = new _renderers_TaskListRenderer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst formHandler = new _forms_TaskFormHandler_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"task-form\");\nfunction initialize() {\n  renderer.render(tasks, taskHtmlContainer, formatter);\n  addTaskButton.addEventListener(\"click\", () => formHandler.show());\n  const taskForm = document.getElementById(\"task-form\");\n  const processor = new _forms_TaskFormProcessor_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](taskRepository, renderer, taskHtmlContainer, formatter, formHandler);\n  processor.processTaskForm(taskForm);\n}\n\n//# sourceURL=webpack://todo-list/./src/js/Initialization.js?");

/***/ }),

/***/ "./src/js/data/LocalStorageTaskRepository.js":
/*!***************************************************!*\
  !*** ./src/js/data/LocalStorageTaskRepository.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorageTaskRepository)\n/* harmony export */ });\n/* harmony import */ var _interfaces_data_TaskRepositoryInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/data/TaskRepositoryInterface.js */ \"./src/js/interfaces/data/TaskRepositoryInterface.js\");\n\nclass LocalStorageTaskRepository extends _interfaces_data_TaskRepositoryInterface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\n  }\n  addTask(task) {\n    this.tasks.push(task);\n    localStorage.setItem(\"tasks\", JSON.stringify(this.tasks));\n  }\n  removeTask(taskIndex) {\n    this.tasks.splice(taskIndex, 1);\n    localStorage.setItem(\"tasks\", JSON.stringify(this.tasks));\n  }\n  getTasks() {\n    return this.tasks;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/data/LocalStorageTaskRepository.js?");

/***/ }),

/***/ "./src/js/formatters/TaskListFormatter.js":
/*!************************************************!*\
  !*** ./src/js/formatters/TaskListFormatter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskListFormatter)\n/* harmony export */ });\n/* harmony import */ var _interfaces_formatters_FormatterInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/formatters/FormatterInterface.js */ \"./src/js/interfaces/formatters/FormatterInterface.js\");\n\nclass TaskListFormatter extends _interfaces_formatters_FormatterInterface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  format(task) {\n    const taskHtml = document.createElement(\"div\");\n    taskHtml.classList.add(\"flex\", \"justify-between\");\n    const taskName = document.createElement(\"p\");\n    taskName.textContent = task.name;\n    const dueDate = document.createElement(\"p\");\n    dueDate.textContent = `Due: ${task.dueDate}`;\n    taskHtml.appendChild(taskName);\n    taskHtml.appendChild(dueDate);\n    return taskHtml;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/formatters/TaskListFormatter.js?");

/***/ }),

/***/ "./src/js/forms/TaskFormHandler.js":
/*!*****************************************!*\
  !*** ./src/js/forms/TaskFormHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskFormHandler)\n/* harmony export */ });\n/* harmony import */ var _interfaces_forms_FormHandlerInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/forms/FormHandlerInterface.js */ \"./src/js/interfaces/forms/FormHandlerInterface.js\");\n\nclass TaskFormHandler extends _interfaces_forms_FormHandlerInterface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(formId) {\n    super();\n    this.form = document.getElementById(formId);\n  }\n  show() {\n    this.form.classList.remove(\"hidden\");\n  }\n  hide() {\n    this.form.classList.add(\"hidden\");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/forms/TaskFormHandler.js?");

/***/ }),

/***/ "./src/js/forms/TaskFormProcessor.js":
/*!*******************************************!*\
  !*** ./src/js/forms/TaskFormProcessor.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskFormProcessor)\n/* harmony export */ });\nclass TaskFormProcessor {\n  constructor(taskRepository, renderer, taskHtmlContainer, formatter, formHandler) {\n    this.taskRepository = taskRepository;\n    this.renderer = renderer;\n    this.taskHtmlContainer = taskHtmlContainer;\n    this.formatter = formatter;\n    this.formHandler = formHandler;\n  }\n  createTask({\n    name,\n    description,\n    dueDate,\n    priority,\n    projectName\n  }) {\n    return {\n      name,\n      description,\n      dueDate,\n      priority,\n      projectName\n    };\n  }\n  processTaskForm(taskForm) {\n    taskForm.addEventListener(\"submit\", event => {\n      event.preventDefault();\n      const form = event.target;\n      const name = form.elements[\"name\"].value;\n      const description = form.elements[\"description\"].value;\n      const dueDate = form.elements[\"due-date\"].value;\n      const priority = form.elements[\"priority\"].value;\n      const projectName = form.elements[\"project-name\"].value;\n      const task = this.createTask({\n        name,\n        description,\n        dueDate,\n        priority,\n        projectName\n      });\n      this.taskRepository.addTask(task);\n      this.renderer.render(this.taskRepository.getTasks(), this.taskHtmlContainer, this.formatter);\n      this.formHandler.hide();\n    });\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/forms/TaskFormProcessor.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _Initialization_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Initialization.js */ \"./src/js/Initialization.js\");\n\n\n\n// initialize();\n\n//# sourceURL=webpack://todo-list/./src/js/index.js?");

/***/ }),

/***/ "./src/js/interfaces/data/TaskRepositoryInterface.js":
/*!***********************************************************!*\
  !*** ./src/js/interfaces/data/TaskRepositoryInterface.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskRepositoryInterface)\n/* harmony export */ });\nclass TaskRepositoryInterface {\n  addTask(task) {\n    throw new Error(\"Not implemented\");\n  }\n  removeTask(taskIndex) {\n    throw new Error(\"Not implemented\");\n  }\n  getTasks() {\n    throw new Error(\"Not implemented\");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/data/TaskRepositoryInterface.js?");

/***/ }),

/***/ "./src/js/interfaces/formatters/FormatterInterface.js":
/*!************************************************************!*\
  !*** ./src/js/interfaces/formatters/FormatterInterface.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormatterInterface)\n/* harmony export */ });\nclass FormatterInterface {\n  format(task) {\n    throw new Error(\"Not implemented\");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/formatters/FormatterInterface.js?");

/***/ }),

/***/ "./src/js/interfaces/forms/FormHandlerInterface.js":
/*!*********************************************************!*\
  !*** ./src/js/interfaces/forms/FormHandlerInterface.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormHandlerInterface)\n/* harmony export */ });\nclass FormHandlerInterface {\n  show() {\n    throw new Error(\"Not implemented\");\n  }\n  hide() {\n    throw new Error(\"Not implemented\");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/forms/FormHandlerInterface.js?");

/***/ }),

/***/ "./src/js/interfaces/renderers/TaskListRendererInterface.js":
/*!******************************************************************!*\
  !*** ./src/js/interfaces/renderers/TaskListRendererInterface.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskListRendererInterface)\n/* harmony export */ });\nclass TaskListRendererInterface {\n  render(tasks, container, formatter) {\n    throw new Error(\"Not implemented\");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/renderers/TaskListRendererInterface.js?");

/***/ }),

/***/ "./src/js/renderers/TaskListRenderer.js":
/*!**********************************************!*\
  !*** ./src/js/renderers/TaskListRenderer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskListRenderer)\n/* harmony export */ });\n/* harmony import */ var _interfaces_renderers_TaskListRendererInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/renderers/TaskListRendererInterface.js */ \"./src/js/interfaces/renderers/TaskListRendererInterface.js\");\n\nclass TaskListRenderer extends _interfaces_renderers_TaskListRendererInterface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  render(tasks, container, formatter) {\n    container.innerHTML = \"\";\n    tasks.forEach(task => {\n      const taskHtml = formatter.format(task);\n      container.appendChild(taskHtml);\n    });\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/renderers/TaskListRenderer.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-list/./src/styles/styles.css?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;