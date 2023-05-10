import LocalStorageTaskRepository from "./data/LocalStorageTaskRepository.js";
import TaskListFormatter from "./formatters/TaskListFormatter.js";
import TaskListRenderer from "./renderers/TaskListRenderer.js";
import TaskDetailsRenderer from "./renderers/TaskDetailsRenderer.js";
import TaskFormHandler from "./forms/TaskFormHandler.js";
import TaskFormProcessor from "./forms/TaskFormProcessor.js";


const taskListHtmlContainer = document.getElementById("task-list");
const addTaskButton = document.getElementById("add-task-button");
const submitTaskButton = document.getElementById("submit-task");
const taskForm = document.getElementById("task-form");
const taskRepository = new LocalStorageTaskRepository();
const taskListFormatter = new TaskListFormatter();
const taskListRenderer = new TaskListRenderer();
const taskDetailsRenderer = new TaskDetailsRenderer();
const taskformHandler = new TaskFormHandler();
const taskformProcessor = new TaskFormProcessor(taskRepository, taskListRenderer, taskListHtmlContainer, taskListFormatter, taskformHandler);
const tasks = taskRepository.getTasks();

function attachEventListeners() {
  const taskButtons = document.querySelectorAll(".task-button");
  addTaskButton.addEventListener("click", taskformHandler.show);
  taskForm.addEventListener("submit", (event) => taskformProcessor.processTaskForm(event));
  taskButtons.forEach((taskButton) => {
    taskButton.addEventListener("click", (event) => {
        taskDetailsRenderer.toggleVisibility(event);
    });
  });
}

export function initialize() {
  taskListRenderer.render(tasks, taskListHtmlContainer, taskListFormatter);
  attachEventListeners();
}

