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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialize\": () => (/* binding */ initialize)\n/* harmony export */ });\n/* harmony import */ var _data_LocalStorageTaskRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/LocalStorageTaskRepository.js */ \"./src/js/data/LocalStorageTaskRepository.js\");\n/* harmony import */ var _ProjectsSorter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsSorter.js */ \"./src/js/ProjectsSorter.js\");\n/* harmony import */ var _renderers_AppendAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderers/AppendAll.js */ \"./src/js/renderers/AppendAll.js\");\n/* harmony import */ var _renderers_TaskDetailsFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderers/TaskDetailsFilter.js */ \"./src/js/renderers/TaskDetailsFilter.js\");\n\n// import TaskListFormatter from \"./formatters/TaskListFormatter.js\";\n// import ProjectFormatter from \"./formatters/ProjectFormatter.js\";\n// import TaskListRenderer from \"./renderers/TaskListRenderer.js\";\n// import ProjectSidebarRenderer from \"./renderers/ProjectsSidebarRenderer.js\";\n// import { attachEventListeners } from \"./EventListeners.js\";\n\n\n\n\n// const taskListHtmlContainer = document.getElementById(\"task-list\");\nconst taskRepository = new _data_LocalStorageTaskRepository_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n// const taskListFormatter = new TaskListFormatter();\n// const taskListRenderer = new TaskListRenderer();\n// const projectSidebarRenderer = new ProjectSidebarRenderer();\n// const projectFormatter = new ProjectFormatter();\n\n// export function initialize() {\n//   taskListRenderer.render(tasks, projects, taskListHtmlContainer, taskListFormatter, projectFormatter);\n//   console.log(\"taskList rendered\");\n//   projectSidebarRenderer.render(projects);\n//   console.log(\"projectSidebar rendered\");\n//   attachEventListeners(projects, taskListHtmlContainer);\n//   console.log(\"event listeners attached\");\n// }\n\nfunction attachTaskButtonEventListeners() {\n  const taskButtons = document.querySelectorAll(\".task-button\");\n  taskButtons.forEach(taskButton => {\n    taskButton.addEventListener(\"click\", event => {\n      (0,_renderers_TaskDetailsFilter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(event);\n    });\n  });\n}\nfunction initialize() {\n  const tasks = taskRepository.getTasks();\n  const projects = (0,_ProjectsSorter_js__WEBPACK_IMPORTED_MODULE_1__.groupTasksByProject)(tasks);\n  const container = document.getElementById(\"task-list\");\n  (0,_renderers_AppendAll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(tasks, projects, container);\n  attachTaskButtonEventListeners();\n}\n\n//# sourceURL=webpack://todo-list/./src/js/Initialization.js?");

/***/ }),

/***/ "./src/js/ProjectsSorter.js":
/*!**********************************!*\
  !*** ./src/js/ProjectsSorter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"groupTasksByProject\": () => (/* binding */ groupTasksByProject)\n/* harmony export */ });\n/* harmony import */ var _data_LocalStorageTaskRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/LocalStorageTaskRepository.js */ \"./src/js/data/LocalStorageTaskRepository.js\");\n\nconst taskRepository = new _data_LocalStorageTaskRepository_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst tasks = taskRepository.getTasks();\nfunction groupTasksByProject() {\n  const groups = {};\n  tasks.forEach(task => {\n    const projectName = task.projectName;\n    if (projectName !== \"none\") {\n      if (!groups[projectName]) {\n        groups[projectName] = {\n          projectName: projectName,\n          tasks: []\n        };\n      }\n      groups[projectName].tasks.push(task);\n    }\n  });\n  return Object.values(groups);\n}\n\n//# sourceURL=webpack://todo-list/./src/js/ProjectsSorter.js?");

/***/ }),

/***/ "./src/js/data/LocalStorageTaskRepository.js":
/*!***************************************************!*\
  !*** ./src/js/data/LocalStorageTaskRepository.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorageTaskRepository)\n/* harmony export */ });\n/* harmony import */ var _interfaces_data_TaskRepositoryInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/data/TaskRepositoryInterface.js */ \"./src/js/interfaces/data/TaskRepositoryInterface.js\");\n\nclass LocalStorageTaskRepository extends _interfaces_data_TaskRepositoryInterface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\n  }\n  addTask(task) {\n    this.tasks.push(task);\n    localStorage.setItem(\"tasks\", JSON.stringify(this.tasks));\n  }\n  removeTask(taskIndex) {\n    this.tasks.splice(taskIndex, 1);\n    localStorage.setItem(\"tasks\", JSON.stringify(this.tasks));\n  }\n  getTasks() {\n    return this.tasks;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/data/LocalStorageTaskRepository.js?");

/***/ }),

/***/ "./src/js/formatters/ProjectFormatter.js":
/*!***********************************************!*\
  !*** ./src/js/formatters/ProjectFormatter.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectFormatter)\n/* harmony export */ });\nfunction projectFormatter(project) {\n  const elements = {};\n  elements.projectName = document.createElement(\"div\");\n  elements.projectName.textContent = `${project.projectName}`;\n  return elements;\n}\n;\n\n//# sourceURL=webpack://todo-list/./src/js/formatters/ProjectFormatter.js?");

/***/ }),

/***/ "./src/js/formatters/TaskFormatter.js":
/*!********************************************!*\
  !*** ./src/js/formatters/TaskFormatter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskFormatter)\n/* harmony export */ });\nfunction taskFormatter(task) {\n  const elements = {};\n  elements.buttonWrapper = document.createElement(\"button\");\n  elements.buttonWrapper.className = \"task-button\";\n  elements.taskHtml = document.createElement(\"div\");\n  elements.taskHtml.className = \"flex flex-col bg-background bg-denim bg-repeat text-white p-1 skewed -skew-x-6 rounded\";\n  elements.taskBasic = document.createElement(\"div\");\n  elements.taskBasic.className = \"flex justify-between\";\n  elements.taskCheckboxNameDiv = document.createElement(\"div\");\n  elements.taskCheckboxNameDiv.className = \"flex gap-1\";\n  elements.taskCheckbox = document.createElement(\"input\");\n  elements.taskCheckbox.type = \"checkbox\";\n  elements.taskCheckbox.name = \"completed\";\n  elements.taskName = document.createElement(\"p\");\n  elements.taskName.textContent = task.name;\n  elements.taskName.className = \"font-swankyMooMoo text-lg\";\n  elements.taskDueDate = document.createElement(\"p\");\n  elements.taskDueDate.textContent = `Due: ${task.dueDate}`;\n  elements.taskDetails = document.createElement(\"div\");\n  elements.taskDetails.className = \"flex flex-col font-swankyMooMoo p-3 pb-2 border-slate-200 border-2 rounded task-details hidden\";\n  elements.taskDescription = document.createElement(\"div\");\n  elements.taskDescription.className = \"flex gap-2\";\n  elements.taskDescriptionLabel = document.createElement(\"span\");\n  elements.taskDescriptionLabel.className = \"underline\";\n  elements.taskDescriptionLabel.textContent = \"Description: \";\n  elements.taskDescriptionText = document.createElement(\"p\");\n  elements.taskDescriptionText.textContent = `${task.description}`;\n  elements.taskDescriptionText.className = \"hyphens-auto\";\n  elements.taskPriority = document.createElement(\"div\");\n  elements.taskPriority.className = \"flex gap-2\";\n  elements.taskPriorityLabel = document.createElement(\"span\");\n  elements.taskPriorityLabel.className = \"underline\";\n  elements.taskPriorityLabel.textContent = \"Priority: \";\n  elements.taskPriorityText = document.createElement(\"p\");\n  elements.taskPriorityText.textContent = `${task.priority}`;\n  elements.lastLineDiv = document.createElement(\"div\");\n  elements.lastLineDiv.className = \"flex justify-between\";\n  elements.taskProject = document.createElement(\"div\");\n  elements.taskProject.className = \"flex gap-2\";\n  elements.taskProjectLabel = document.createElement(\"span\");\n  elements.taskProjectLabel.className = \"underline\";\n  elements.taskProjectLabel.textContent = \"Project: \";\n  elements.taskProjectText = document.createElement(\"p\");\n  elements.taskProjectText.textContent = `${task.projectName}`;\n  elements.editButton = document.createElement(\"button\");\n  elements.editButton.textContent = \"Edit\";\n  elements.editButton.id = \"edit-button\";\n  return elements;\n}\n\n//# sourceURL=webpack://todo-list/./src/js/formatters/TaskFormatter.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _Initialization_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Initialization.js */ \"./src/js/Initialization.js\");\n\n\n(0,_Initialization_js__WEBPACK_IMPORTED_MODULE_1__.initialize)();\n\n//# sourceURL=webpack://todo-list/./src/js/index.js?");

/***/ }),

/***/ "./src/js/interfaces/data/TaskRepositoryInterface.js":
/*!***********************************************************!*\
  !*** ./src/js/interfaces/data/TaskRepositoryInterface.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskRepositoryInterface)\n/* harmony export */ });\nclass TaskRepositoryInterface {\n  addTask(task) {\n    throw new Error(\"Not implemented\");\n  }\n  removeTask(taskIndex) {\n    throw new Error(\"Not implemented\");\n  }\n  getTasks() {\n    throw new Error(\"Not implemented\");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/data/TaskRepositoryInterface.js?");

/***/ }),

/***/ "./src/js/renderers/AppendAll.js":
/*!***************************************!*\
  !*** ./src/js/renderers/AppendAll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendAll)\n/* harmony export */ });\n/* harmony import */ var _FormatAndAppendAllTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormatAndAppendAllTasks.js */ \"./src/js/renderers/FormatAndAppendAllTasks.js\");\n/* harmony import */ var _FormatAndAppendAllProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormatAndAppendAllProjects.js */ \"./src/js/renderers/FormatAndAppendAllProjects.js\");\n\n\nfunction appendAll(tasks, projects, container) {\n  container.innerHTML = \"\";\n  console.log(\"appendAll\");\n  console.log(container);\n  (0,_FormatAndAppendAllTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks, container);\n  (0,_FormatAndAppendAllProjects_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projects, container);\n}\n\n//# sourceURL=webpack://todo-list/./src/js/renderers/AppendAll.js?");

/***/ }),

/***/ "./src/js/renderers/FormatAndAppendAllProjects.js":
/*!********************************************************!*\
  !*** ./src/js/renderers/FormatAndAppendAllProjects.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatAndAppendAllProjects)\n/* harmony export */ });\n/* harmony import */ var _formatters_ProjectFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatters/ProjectFormatter */ \"./src/js/formatters/ProjectFormatter.js\");\n/* harmony import */ var _ProjectAppender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectAppender */ \"./src/js/renderers/ProjectAppender.js\");\n/* harmony import */ var _formatters_TaskFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formatters/TaskFormatter */ \"./src/js/formatters/TaskFormatter.js\");\n/* harmony import */ var _TaskAppender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskAppender */ \"./src/js/renderers/TaskAppender.js\");\n\n\n\n\nfunction formatAndAppendAllProjects(projects, container) {\n  console.log(\"formatAndAppendAllProjects\");\n  for (let project of projects) {\n    console.log(projects);\n    console.log(container);\n    let elements = (0,_formatters_ProjectFormatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(project);\n    (0,_ProjectAppender__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elements, container);\n    for (let task of project.tasks) {\n      console.log(task);\n      console.log(container);\n      const elements = (0,_formatters_TaskFormatter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(task);\n      (0,_TaskAppender__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(elements, container);\n    }\n  }\n  ;\n}\n\n//# sourceURL=webpack://todo-list/./src/js/renderers/FormatAndAppendAllProjects.js?");

/***/ }),

/***/ "./src/js/renderers/FormatAndAppendAllTasks.js":
/*!*****************************************************!*\
  !*** ./src/js/renderers/FormatAndAppendAllTasks.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatAndAppendAllTasks)\n/* harmony export */ });\n/* harmony import */ var _formatters_TaskFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatters/TaskFormatter */ \"./src/js/formatters/TaskFormatter.js\");\n/* harmony import */ var _TaskAppender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskAppender */ \"./src/js/renderers/TaskAppender.js\");\n\n\nfunction formatAndAppendAllTasks(tasks, container) {\n  console.log(\"formatAndAppendAllTasks\");\n  console.log(tasks, container);\n  tasks.forEach(task => {\n    const elements = (0,_formatters_TaskFormatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(task);\n    (0,_TaskAppender__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elements, container);\n  });\n}\n\n//# sourceURL=webpack://todo-list/./src/js/renderers/FormatAndAppendAllTasks.js?");

/***/ }),

/***/ "./src/js/renderers/ProjectAppender.js":
/*!*********************************************!*\
  !*** ./src/js/renderers/ProjectAppender.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectAppender)\n/* harmony export */ });\nfunction projectAppender(elements, container) {\n  container.appendChild(elements.projectName);\n}\n\n//# sourceURL=webpack://todo-list/./src/js/renderers/ProjectAppender.js?");

/***/ }),

/***/ "./src/js/renderers/TaskAppender.js":
/*!******************************************!*\
  !*** ./src/js/renderers/TaskAppender.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskAppender)\n/* harmony export */ });\nfunction taskAppender(elements, container) {\n  container.appendChild(elements.buttonWrapper);\n  elements.buttonWrapper.appendChild(elements.taskHtml);\n  elements.taskHtml.appendChild(elements.taskBasic);\n  elements.taskBasic.appendChild(elements.taskCheckboxNameDiv);\n  elements.taskCheckboxNameDiv.appendChild(elements.taskCheckbox);\n  elements.taskCheckboxNameDiv.appendChild(elements.taskName);\n  elements.taskBasic.appendChild(elements.taskDueDate);\n  elements.taskHtml.appendChild(elements.taskDetails);\n  elements.taskDetails.appendChild(elements.taskDescription);\n  elements.taskDescription.appendChild(elements.taskDescriptionLabel);\n  elements.taskDescription.appendChild(elements.taskDescriptionText);\n  elements.taskDetails.appendChild(elements.taskPriority);\n  elements.taskPriority.appendChild(elements.taskPriorityLabel);\n  elements.taskPriority.appendChild(elements.taskPriorityText);\n  elements.taskDetails.appendChild(elements.lastLineDiv);\n  elements.lastLineDiv.appendChild(elements.taskProject);\n  elements.taskProject.appendChild(elements.taskProjectLabel);\n  elements.taskProject.appendChild(elements.taskProjectText);\n  elements.lastLineDiv.appendChild(elements.editButton);\n}\n\n//# sourceURL=webpack://todo-list/./src/js/renderers/TaskAppender.js?");

/***/ }),

/***/ "./src/js/renderers/TaskDetailsFilter.js":
/*!***********************************************!*\
  !*** ./src/js/renderers/TaskDetailsFilter.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ taskDetailsFilterToggle)\n/* harmony export */ });\nfunction taskDetailsFilterToggle(event) {\n  const taskButton = event.target.closest(\".task-button\");\n  const skewedElement = taskButton.querySelector(\":scope > .skewed\");\n  const taskDetails = taskButton.querySelector(\".task-details\");\n  taskDetails.classList.toggle(\"hidden\");\n  skewedElement.classList.toggle(\"-skew-x-6\");\n}\n\n//# sourceURL=webpack://todo-list/./src/js/renderers/TaskDetailsFilter.js?");

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