import LocalStorageTaskRepository from "./LocalStorageTaskRepository.js";
import HtmlFormatter from "./HtmlFormatter.js";
import { processTaskForm } from "./Form.js";
import HtmlRenderer from "./HtmlRenderer.js";
import TaskFormHandler from "./TaskFormHandler.js";

const taskRepository = new LocalStorageTaskRepository();
const tasks = taskRepository.getTasks();
const taskHtmlContainer = document.getElementById("task-list");
const formatter = new HtmlFormatter();
const addTaskButton = document.getElementById("add-task");
const renderer = new HtmlRenderer();
const formHandler = new TaskFormHandler("task-form");

export function initialize() {
  renderer.render(tasks, taskHtmlContainer, formatter);
  addTaskButton.addEventListener("click", () => formHandler.show());
  processTaskForm(taskRepository, taskHtmlContainer, formatter, formHandler);
}
