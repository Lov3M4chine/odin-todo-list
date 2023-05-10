/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/js/HtmlFormatter.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ HtmlFormatter)\n/* harmony export */ });\n/* harmony import */ var _interfaces_FormatterInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces/FormatterInterface.js */ "./src/js/interfaces/FormatterInterface.js");\n\nclass HtmlFormatter extends _interfaces_FormatterInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"] {\n  format(task) {\n    const taskHtml = document.createElement("div");\n    taskHtml.classList.add("flex", "justify-between");\n    const taskName = document.createElement("p");\n    taskName.textContent = task.name;\n    const dueDate = document.createElement("p");\n    dueDate.textContent = `Due: ${task.dueDate}`;\n    taskHtml.appendChild(taskName);\n    taskHtml.appendChild(dueDate);\n    return taskHtml;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/HtmlFormatter.js?')},"./src/js/HtmlRenderer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ HtmlRenderer)\n/* harmony export */ });\n/* harmony import */ var _interfaces_RendererInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces/RendererInterface.js */ "./src/js/interfaces/RendererInterface.js");\n\nclass HtmlRenderer extends _interfaces_RendererInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"] {\n  render(tasks, container, formatter) {\n    container.innerHTML = "";\n    tasks.forEach(task => {\n      const taskHtml = formatter.format(task);\n      container.appendChild(taskHtml);\n    });\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/HtmlRenderer.js?')},"./src/js/Initialization.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "initialize": () => (/* binding */ initialize)\n/* harmony export */ });\n/* harmony import */ var _data_LocalStorageTaskRepository_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/LocalStorageTaskRepository.js */ "./src/js/data/LocalStorageTaskRepository.js");\n/* harmony import */ var _HtmlFormatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HtmlFormatter.js */ "./src/js/HtmlFormatter.js");\n/* harmony import */ var _HtmlRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HtmlRenderer.js */ "./src/js/HtmlRenderer.js");\n/* harmony import */ var _forms_TaskFormHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/TaskFormHandler.js */ "./src/js/forms/TaskFormHandler.js");\n/* harmony import */ var _forms_TaskFormProcessor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/TaskFormProcessor.js */ "./src/js/forms/TaskFormProcessor.js");\n\n\n\n\n\nconst taskRepository = new _data_LocalStorageTaskRepository_js__WEBPACK_IMPORTED_MODULE_0__["default"]();\nconst tasks = taskRepository.getTasks();\nconst taskHtmlContainer = document.getElementById("task-list");\nconst formatter = new _HtmlFormatter_js__WEBPACK_IMPORTED_MODULE_1__["default"]();\nconst addTaskButton = document.getElementById("add-task");\nconst renderer = new _HtmlRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"]();\nconst formHandler = new _forms_TaskFormHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"]("task-form");\nfunction initialize() {\n  renderer.render(tasks, taskHtmlContainer, formatter);\n  addTaskButton.addEventListener("click", () => formHandler.show());\n  const taskForm = document.getElementById("task-form");\n  const processor = new _forms_TaskFormProcessor_js__WEBPACK_IMPORTED_MODULE_4__["default"](taskRepository, renderer, taskHtmlContainer, formatter, formHandler);\n  processor.processTaskForm(taskForm);\n}\n\n//# sourceURL=webpack://todo-list/./src/js/Initialization.js?')},"./src/js/data/LocalStorageTaskRepository.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ LocalStorageTaskRepository)\n/* harmony export */ });\n/* harmony import */ var _interfaces_TaskRepositoryInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/TaskRepositoryInterface.js */ "./src/js/interfaces/TaskRepositoryInterface.js");\n\nclass LocalStorageTaskRepository extends _interfaces_TaskRepositoryInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"] {\n  constructor() {\n    super();\n    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];\n  }\n  addTask(task) {\n    this.tasks.push(task);\n    localStorage.setItem("tasks", JSON.stringify(this.tasks));\n  }\n  removeTask(taskIndex) {\n    this.tasks.splice(taskIndex, 1);\n    localStorage.setItem("tasks", JSON.stringify(this.tasks));\n  }\n  getTasks() {\n    return this.tasks;\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/data/LocalStorageTaskRepository.js?')},"./src/js/forms/TaskFormHandler.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ TaskFormHandler)\n/* harmony export */ });\n/* harmony import */ var _interfaces_FormHandlerInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/FormHandlerInterface.js */ "./src/js/interfaces/FormHandlerInterface.js");\n\nclass TaskFormHandler extends _interfaces_FormHandlerInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"] {\n  constructor(formId) {\n    super();\n    this.form = document.getElementById(formId);\n  }\n  show() {\n    this.form.classList.remove("hidden");\n  }\n  hide() {\n    this.form.classList.add("hidden");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/forms/TaskFormHandler.js?')},"./src/js/forms/TaskFormProcessor.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ TaskFormProcessor)\n/* harmony export */ });\nclass TaskFormProcessor {\n  constructor(taskRepository, renderer, formatter, formHandler) {\n    this.taskRepository = taskRepository;\n    this.renderer = renderer;\n    this.formatter = formatter;\n    this.formHandler = formHandler;\n  }\n  createTask({\n    name,\n    description,\n    dueDate,\n    priority,\n    projectName\n  }) {\n    return {\n      name,\n      description,\n      dueDate,\n      priority,\n      projectName\n    };\n  }\n  processTaskForm(taskForm) {\n    taskForm.addEventListener("submit", event => {\n      event.preventDefault();\n      const form = event.target;\n      const name = form.elements["name"].value;\n      const description = form.elements["description"].value;\n      const dueDate = form.elements["due-date"].value;\n      const priority = form.elements["priority"].value;\n      const projectName = form.elements["project-name"].value;\n      const task = this.createTask({\n        name,\n        description,\n        dueDate,\n        priority,\n        projectName\n      });\n      this.taskRepository.addTask(task);\n      this.renderer.render(this.taskRepository.getTasks(), this.formatter);\n      this.formHandler.hide(); // Hide the form after the task is submitted\n    });\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/forms/TaskFormProcessor.js?')},"./src/js/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");\n/* harmony import */ var _Initialization_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Initialization.js */ "./src/js/Initialization.js");\n\n\n(0,_Initialization_js__WEBPACK_IMPORTED_MODULE_1__.initialize)();\n\n//# sourceURL=webpack://todo-list/./src/js/index.js?')},"./src/js/interfaces/FormHandlerInterface.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ FormHandlerInterface)\n/* harmony export */ });\nclass FormHandlerInterface {\n  show() {\n    throw new Error("Not implemented");\n  }\n  hide() {\n    throw new Error("Not implemented");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/FormHandlerInterface.js?')},"./src/js/interfaces/FormatterInterface.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ FormatterInterface)\n/* harmony export */ });\nclass FormatterInterface {\n  format(task) {\n    throw new Error("Not implemented");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/FormatterInterface.js?')},"./src/js/interfaces/RendererInterface.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ RendererInterface)\n/* harmony export */ });\nclass RendererInterface {\n  render(tasks, container, formatter) {\n    throw new Error("Not implemented");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/RendererInterface.js?')},"./src/js/interfaces/TaskRepositoryInterface.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ TaskRepositoryInterface)\n/* harmony export */ });\nclass TaskRepositoryInterface {\n  addTask(task) {\n    throw new Error("Not implemented");\n  }\n  removeTask(taskIndex) {\n    throw new Error("Not implemented");\n  }\n  getTasks() {\n    throw new Error("Not implemented");\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/js/interfaces/TaskRepositoryInterface.js?')},"./src/styles/styles.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-list/./src/styles/styles.css?")}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/js/index.js")})();