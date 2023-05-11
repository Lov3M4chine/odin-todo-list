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

/***/ "./src/js/EventListeners.js":
/*!**********************************!*\
  !*** ./src/js/EventListeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attachEventListeners\": () => (/* binding */ attachEventListeners),\n/* harmony export */   \"attachTaskButtonEventListeners\": () => (/* binding */ attachTaskButtonEventListeners)\n/* harmony export */ });\n/* harmony import */ var _data_LocalStorageTaskRepositoryInstance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/LocalStorageTaskRepositoryInstance.js */ \"./src/js/data/LocalStorageTaskRepositoryInstance.js\");\n/* harmony import */ var _renderers_TaskDetailsRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderers/TaskDetailsRenderer.js */ \"./src/js/renderers/TaskDetailsRenderer.js\");\n/* harmony import */ var _forms_TaskFormHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/TaskFormHandler.js */ \"./src/js/forms/TaskFormHandler.js\");\n/* harmony import */ var _forms_TaskFormProcessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/TaskFormProcessor.js */ \"./src/js/forms/TaskFormProcessor.js\");\n/* harmony import */ var _renderers_TaskListRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderers/TaskListRenderer.js */ \"./src/js/renderers/TaskListRenderer.js\");\n/* harmony import */ var _formatters_TaskListFormatter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatters/TaskListFormatter.js */ \"./src/js/formatters/TaskListFormatter.js\");\n/* harmony import */ var _formatters_ProjectFormatter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatters/ProjectFormatter.js */ \"./src/js/formatters/ProjectFormatter.js\");\n\n\n\n\n\n\n\nconst addTaskButton = document.getElementById(\"add-task-button\");\nconst taskForm = document.getElementById(\"task-form\");\nconst taskListHtmlContainer = document.getElementById(\"task-list\");\nconst taskDetailsRenderer = new _renderers_TaskDetailsRenderer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst taskRepository = _data_LocalStorageTaskRepositoryInstance_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst taskListFormatter = new _formatters_TaskListFormatter_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\nconst projectFormatter = new _formatters_ProjectFormatter_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nconst taskListRenderer = new _renderers_TaskListRenderer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nconst taskformHandler = new _forms_TaskFormHandler_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst taskformProcessor = new _forms_TaskFormProcessor_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](taskRepository, taskListRenderer, taskListHtmlContainer, taskListFormatter, projectFormatter, taskformHandler);\nfunction attachTaskButtonEventListeners() {\n  const taskButtons = document.querySelectorAll(\".task-button\");\n  taskButtons.forEach(taskButton => {\n    taskButton.addEventListener(\"click\", event => {\n      taskDetailsRenderer.toggleVisibility(event);\n    });\n  });\n}\nfunction attachEventListeners() {\n  addTaskButton.addEventListener(\"click\", taskformHandler.show);\n  taskForm.addEventListener(\"submit\", event => taskformProcessor.processTaskForm(event));\n  attachTaskButtonEventListeners();\n}\n\n//# sourceURL=webpack://todo-list/./src/js/EventListeners.js?");

/***/ }),

/***/ "./src/js/Initialization.js":
/*!**********************************!*\
  !*** ./src/js/Initialization.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialize\": () => (/* binding */ initialize)\n/* harmony export */ });\n/* harmony import */ var _data_LocalStorageTaskRepositoryInstance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/LocalStorageTaskRepositoryInstance.js */ \"./src/js/data/LocalStorageTaskRepositoryInstance.js\");\n/* harmony import */ var _formatters_TaskListFormatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatters/TaskListFormatter.js */ \"./src/js/formatters/TaskListFormatter.js\");\n/* harmony import */ var _formatters_ProjectFormatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatters/ProjectFormatter.js */ \"./src/js/formatters/ProjectFormatter.js\");\n/* harmony import */ var _renderers_TaskListRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderers/TaskListRenderer.js */ \"./src/js/renderers/TaskListRenderer.js\");\n/* harmony import */ var _EventListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventListeners.js */ \"./src/js/EventListeners.js\");\n/* harmony import */ var _ProjectsSorter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectsSorter.js */ \"./src/js/ProjectsSorter.js\");\n\n\n\n\n\n\nconst taskListHtmlContainer = document.getElementById(\"task-list\");\nconst taskRepository = _data_LocalStorageTaskRepositoryInstance_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst taskListFormatter = new _formatters_TaskListFormatter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst taskListRenderer = new _renderers_TaskListRenderer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst projectFormatter = new _formatters_ProjectFormatter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst tasks = taskRepository.getTasks();\nconst projects = (0,_ProjectsSorter_js__WEBPACK_IMPORTED_MODULE_5__.groupTasksByProject)(tasks);\nfunction initialize() {\n  taskListRenderer.render(tasks, projects, taskListHtmlContainer, taskListFormatter, projectFormatter);\n  (0,_EventListeners_js__WEBPACK_IMPORTED_MODULE_4__.attachEventListeners)();\n}\n\n//# sourceURL=webpack://todo-list/./src/js/Initialization.js?");

/***/ }),

/***/ "./src/js/ProjectsSorter.js":
/*!**********************************!*\
  !*** ./src/js/ProjectsSorter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"groupTasksByProject\": () => (/* binding */ groupTasksByProject)\n/* harmony export */ });\n/* harmony import */ var _data_LocalStorageTaskRepositoryInstance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/LocalStorageTaskRepositoryInstance.js */ \"./src/js/data/LocalStorageTaskRepositoryInstance.js\");\n\nconst taskRepository = _data_LocalStorageTaskRepositoryInstance_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst tasks = taskRepository.getTasks();\nfunction groupTasksByProject(tasks) {\n  const groups = {};\n  tasks.forEach(task => {\n    const projectName = task.projectName;\n    if (projectName !== \"none\") {\n      if (!groups[projectName]) {\n        groups[projectName] = {\n          projectName: projectName,\n          tasks: []\n        };\n      }\n      groups[projectName].tasks.push(task);\n    }\n  });\n  return Object.values(groups);\n}\n\n//# sourceURL=webpack://todo-list/./src/js/ProjectsSorter.js?");

/***/ }),

/***/ "./src/js/Task.js":
/*!************************!*\
  !*** ./src/js/Task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(name, description, dueDate, priority, projectName) {\n    this.name = name;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.projectName = projectName;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/Task.js?");

/***/ }),

/***/ "./src/js/data/LocalStorageTaskRepository.js":
/*!***************************************************!*\
  !*** ./src/js/data/LocalStorageTaskRepository.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorageTaskRepository)\n/* harmony export */ });\n/* harmony import */ var _interfaces_data_TaskRepositoryInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/data/TaskRepositoryInterface.js */ \"./src/js/interfaces/data/TaskRepositoryInterface.js\");\n\nclass LocalStorageTaskRepository extends _interfaces_data_TaskRepositoryInterface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\n  }\n  addTask(task) {\n    this.tasks.push(task);\n    localStorage.setItem(\"tasks\", JSON.stringify(this.tasks));\n  }\n  removeTask(taskIndex) {\n    this.tasks.splice(taskIndex, 1);\n    localStorage.setItem(\"tasks\", JSON.stringify(this.tasks));\n  }\n  getTasks() {\n    return this.tasks;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/data/LocalStorageTaskRepository.js?");

/***/ }),

/***/ "./src/js/data/LocalStorageTaskRepositoryInstance.js":
/*!***********************************************************!*\
  !*** ./src/js/data/LocalStorageTaskRepositoryInstance.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _LocalStorageTaskRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorageTaskRepository.js */ \"./src/js/data/LocalStorageTaskRepository.js\");\n\nconst localStorageTaskRepository = new _LocalStorageTaskRepository_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageTaskRepository);\n\n//# sourceURL=webpack://todo-list/./src/js/data/LocalStorageTaskRepositoryInstance.js?");

/***/ }),

/***/ "./src/js/formatters/ProjectFormatter.js":
/*!***********************************************!*\
  !*** ./src/js/formatters/ProjectFormatter.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectFormatter)\n/* harmony export */ });\n/* harmony import */ var _interfaces_formatters_ProjectFormatterInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/formatters/ProjectFormatterInterface.js */ \"./src/js/interfaces/formatters/ProjectFormatterInterface.js\");\n\nclass ProjectFormatter extends _interfaces_formatters_ProjectFormatterInterface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  format(project) {\n    const projectName = document.createElement(\"div\");\n    projectName.textContent = `${project.projectName}`;\n    return projectName;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/formatters/ProjectFormatter.js?");

/***/ }),

/***/ "./src/js/formatters/TaskListFormatter.js":
/*!************************************************!*\
  !*** ./src/js/formatters/TaskListFormatter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskListFormatter)\n/* harmony export */ });\n/* harmony import */ var _interfaces_formatters_TaskListFormatterInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/formatters/TaskListFormatterInterface.js */ \"./src/js/interfaces/formatters/TaskListFormatterInterface.js\");\n\nclass TaskListFormatter extends _interfaces_formatters_TaskListFormatterInterface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  format(task) {\n    const buttonWrapper = document.createElement(\"button\");\n    buttonWrapper.className = \"task-button\";\n    const taskHtml = document.createElement(\"div\");\n    taskHtml.className = \"flex flex-col bg-background bg-denim bg-repeat text-white p-1 skewed -skew-x-6 rounded\";\n    const taskBasic = document.createElement(\"div\");\n    taskBasic.className = \"flex justify-between\";\n    const taskCheckboxNameDiv = document.createElement(\"div\");\n    taskCheckboxNameDiv.className = \"flex gap-1\";\n    const taskCheckbox = document.createElement(\"input\");\n    taskCheckbox.type = \"checkbox\";\n    taskCheckbox.name = \"completed\";\n    const taskName = document.createElement(\"p\");\n    taskName.textContent = task.name;\n    taskName.className = \"font-swankyMooMoo text-lg\";\n    const taskDueDate = document.createElement(\"p\");\n    taskDueDate.textContent = `Due: ${task.dueDate}`;\n    const taskDetails = document.createElement(\"div\");\n    taskDetails.className = \"flex flex-col font-swankyMooMoo p-3 pb-2 border-slate-200 border-2 rounded task-details hidden\";\n    const taskDescription = document.createElement(\"div\");\n    taskDescription.className = \"flex gap-2\";\n    const taskDescriptionLabel = document.createElement(\"span\");\n    taskDescriptionLabel.className = \"underline\";\n    taskDescriptionLabel.textContent = \"Description: \";\n    const taskDescriptionText = document.createElement(\"p\");\n    taskDescriptionText.textContent = `${task.description}`;\n    taskDescriptionText.className = \"hyphens-auto\";\n    const taskPriority = document.createElement(\"div\");\n    taskPriority.className = \"flex gap-2\";\n    const taskPriorityLabel = document.createElement(\"span\");\n    taskPriorityLabel.className = \"underline\";\n    taskPriorityLabel.textContent = \"Priority: \";\n    const taskPriorityText = document.createElement(\"p\");\n    taskPriorityText.textContent = `${task.priority}`;\n    const lastLineDiv = document.createElement(\"div\");\n    lastLineDiv.className = \"flex justify-between\";\n    const taskProject = document.createElement(\"div\");\n    taskProject.className = \"flex gap-2\";\n    const taskProjectLabel = document.createElement(\"span\");\n    taskProjectLabel.className = \"underline\";\n    taskProjectLabel.textContent = \"Project: \";\n    const taskProjectText = document.createElement(\"p\");\n    taskProjectText.textContent = `${task.projectName}`;\n    const editButton = document.createElement(\"button\");\n    editButton.textContent = \"Edit\";\n    editButton.id = \"edit-button\";\n    buttonWrapper.appendChild(taskHtml);\n    taskHtml.appendChild(taskBasic);\n    taskBasic.appendChild(taskCheckboxNameDiv);\n    taskCheckboxNameDiv.appendChild(taskCheckbox);\n    taskCheckboxNameDiv.appendChild(taskName);\n    taskBasic.appendChild(taskDueDate);\n    taskHtml.appendChild(taskDetails);\n    taskDetails.appendChild(taskDescription);\n    taskDescription.appendChild(taskDescriptionLabel);\n    taskDescription.appendChild(taskDescriptionText);\n    taskDetails.appendChild(taskPriority);\n    taskPriority.appendChild(taskPriorityLabel);\n    taskPriority.appendChild(taskPriorityText);\n    taskDetails.appendChild(lastLineDiv);\n    lastLineDiv.appendChild(taskProject);\n    taskProject.appendChild(taskProjectLabel);\n    taskProject.appendChild(taskProjectText);\n    lastLineDiv.appendChild(editButton);\n    return buttonWrapper;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/formatters/TaskListFormatter.js?");

/***/ }),

/***/ "./src/js/forms/TaskFormHandler.js":
/*!*****************************************!*\
  !*** ./src/js/forms/TaskFormHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskFormHandler)\n/* harmony export */ });\n/* harmony import */ var _interfaces_forms_TaskFormHandlerInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/forms/TaskFormHandlerInterface.js */ \"./src/js/interfaces/forms/TaskFormHandlerInterface.js\");\n\nclass TaskFormHandler extends _interfaces_forms_TaskFormHandlerInterface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n  show() {\n    this.taskform = document.getElementById(\"task-form\");\n    this.taskform.classList.remove(\"hidden\");\n  }\n  hide() {\n    this.taskform = document.getElementById(\"task-form\");\n    this.taskform.classList.add(\"hidden\");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/forms/TaskFormHandler.js?");

/***/ }),

/***/ "./src/js/forms/TaskFormProcessor.js":
/*!*******************************************!*\
  !*** ./src/js/forms/TaskFormProcessor.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskFormProcessor)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Task */ \"./src/js/Task.js\");\n/* harmony import */ var _Initialization_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Initialization.js */ \"./src/js/Initialization.js\");\n/* harmony import */ var _ProjectsSorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ProjectsSorter */ \"./src/js/ProjectsSorter.js\");\n\n\n\nclass TaskFormProcessor {\n  constructor(taskRepository, taskListRenderer, taskListHtmlContainer, taskListFormatter, projectFormatter, taskformHandler) {\n    this.taskRepository = taskRepository;\n    this.renderer = taskListRenderer;\n    this.taskListHtmlContainer = taskListHtmlContainer;\n    this.taskListFormatter = taskListFormatter;\n    this.projectFormatter = projectFormatter;\n    this.taskformHandler = taskformHandler;\n  }\n  createTask() {\n    const taskForm = document.getElementById(\"task-form\");\n    const name = taskForm.elements[\"name\"].value || \"none\";\n    const description = taskForm.elements[\"description\"].value || \"none\";\n    const dueDate = taskForm.elements[\"due-date\"].value || \"none\";\n    const priority = taskForm.elements[\"priority\"].value || \"none\";\n    const projectName = taskForm.elements[\"project-name\"].value || \"none\";\n    const task = new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, description, dueDate, priority, projectName);\n    return task;\n  }\n  addTaskToRepository(task) {\n    this.taskRepository.addTask(task);\n  }\n  renderNewTask() {\n    const tasks = this.taskRepository.getTasks();\n    const projects = (0,_ProjectsSorter__WEBPACK_IMPORTED_MODULE_2__.groupTasksByProject)(tasks);\n    this.renderer.render(tasks, projects, this.taskListHtmlContainer, this.taskListFormatter, this.projectFormatter);\n  }\n  hideForm() {\n    this.taskformHandler.hide();\n  }\n  processTaskForm(event) {\n    event.preventDefault();\n    const task = this.createTask();\n    this.addTaskToRepository(task);\n    this.renderNewTask();\n    this.hideForm();\n    (0,_Initialization_js__WEBPACK_IMPORTED_MODULE_1__.initialize)();\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/forms/TaskFormProcessor.js?");

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

/***/ "./src/js/interfaces/formatters/ProjectFormatterInterface.js":
/*!*******************************************************************!*\
  !*** ./src/js/interfaces/formatters/ProjectFormatterInterface.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectFormatterInterface)\n/* harmony export */ });\nclass ProjectFormatterInterface {\n  format(project) {\n    throw new Error(\"Not implemented\");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/formatters/ProjectFormatterInterface.js?");

/***/ }),

/***/ "./src/js/interfaces/formatters/TaskListFormatterInterface.js":
/*!********************************************************************!*\
  !*** ./src/js/interfaces/formatters/TaskListFormatterInterface.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskListFormatterInterface)\n/* harmony export */ });\nclass TaskListFormatterInterface {\n  format(task) {\n    throw new Error(\"Not implemented\");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/formatters/TaskListFormatterInterface.js?");

/***/ }),

/***/ "./src/js/interfaces/forms/TaskFormHandlerInterface.js":
/*!*************************************************************!*\
  !*** ./src/js/interfaces/forms/TaskFormHandlerInterface.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskFormHandlerInterface)\n/* harmony export */ });\nclass TaskFormHandlerInterface {\n  show() {\n    throw new Error(\"Not implemented\");\n  }\n  hide() {\n    throw new Error(\"Not implemented\");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/forms/TaskFormHandlerInterface.js?");

/***/ }),

/***/ "./src/js/interfaces/renderers/TaskDetailsRendererInterface.js":
/*!*********************************************************************!*\
  !*** ./src/js/interfaces/renderers/TaskDetailsRendererInterface.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskDetailsRendererInterface)\n/* harmony export */ });\nclass TaskDetailsRendererInterface {\n  toggleVisibility(task) {\n    throw new Error(\"Not implemented\");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/renderers/TaskDetailsRendererInterface.js?");

/***/ }),

/***/ "./src/js/interfaces/renderers/TaskListRendererInterface.js":
/*!******************************************************************!*\
  !*** ./src/js/interfaces/renderers/TaskListRendererInterface.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskListRendererInterface)\n/* harmony export */ });\nclass TaskListRendererInterface {\n  render(tasks, projects, container, taskFormatter, projectFormatter) {\n    throw new Error(\"Not implemented\");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/renderers/TaskListRendererInterface.js?");

/***/ }),

/***/ "./src/js/renderers/TaskDetailsRenderer.js":
/*!*************************************************!*\
  !*** ./src/js/renderers/TaskDetailsRenderer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskDetailsRenderer)\n/* harmony export */ });\n/* harmony import */ var _interfaces_renderers_TaskDetailsRendererInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/renderers/TaskDetailsRendererInterface.js */ \"./src/js/interfaces/renderers/TaskDetailsRendererInterface.js\");\n\nclass TaskDetailsRenderer extends _interfaces_renderers_TaskDetailsRendererInterface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  toggleVisibility(event) {\n    const taskButton = event.target.closest(\".task-button\");\n    const skewedElement = taskButton.querySelector(\":scope > .skewed\");\n    const taskDetails = taskButton.querySelector(\".task-details\");\n    taskDetails.classList.toggle(\"hidden\");\n    skewedElement.classList.toggle(\"-skew-x-6\");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/renderers/TaskDetailsRenderer.js?");

/***/ }),

/***/ "./src/js/renderers/TaskListRenderer.js":
/*!**********************************************!*\
  !*** ./src/js/renderers/TaskListRenderer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskListRenderer)\n/* harmony export */ });\n/* harmony import */ var _interfaces_renderers_TaskListRendererInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/renderers/TaskListRendererInterface.js */ \"./src/js/interfaces/renderers/TaskListRendererInterface.js\");\n\nclass TaskListRenderer extends _interfaces_renderers_TaskListRendererInterface_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  render(tasks, projects, container, taskFormatter, projectFormatter) {\n    container.innerHTML = \"\";\n    tasks.forEach(task => {\n      if (task.projectName === \"none\") {\n        const taskHtml = taskFormatter.format(task);\n        container.appendChild(taskHtml);\n      }\n    });\n    for (let project of projects) {\n      console.log(projects);\n      const projectLabel = projectFormatter.format(project);\n      container.appendChild(projectLabel);\n      for (let task of project.tasks) {\n        const taskHtml = taskFormatter.format(task);\n        container.appendChild(taskHtml);\n      }\n    }\n    ;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/renderers/TaskListRenderer.js?");

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