import LocalStorageTaskRepository from "./data/LocalStorageTaskRepository.js";
import TaskListFormatter from "./formatters/TaskListFormatter.js";
import TaskListRenderer from "./renderers/TaskListRenderer.js";
import TaskFormHandler from "./forms/TaskFormHandler.js";
import TaskFormProcessor from "./forms/TaskFormProcessor.js";

const taskRepository = new LocalStorageTaskRepository();
const tasks = taskRepository.getTasks();
const taskHtmlContainer = document.getElementById("task-list");
const formatter = new TaskListFormatter();
const addTaskButton = document.getElementById("add-task-button");
const renderer = new TaskListRenderer();
const formHandler = new TaskFormHandler("task-form");

export function initialize() {
  renderer.render(tasks, taskHtmlContainer, formatter);
  addTaskButton.addEventListener("click", () => formHandler.show());

  const taskForm = document.getElementById("task-form");
  const processor = new TaskFormProcessor(taskRepository, renderer, taskHtmlContainer, formatter, formHandler);
  processor.processTaskForm(taskForm);
}
