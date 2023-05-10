import LocalStorageTaskRepositoryInstance from "./data/LocalStorageTaskRepositoryInstance.js";
import TaskListFormatter from "./formatters/TaskListFormatter.js";
import TaskListRenderer from "./renderers/TaskListRenderer.js";
import { attachEventListeners } from "./EventListeners.js";

const taskListHtmlContainer = document.getElementById("task-list");

const taskRepository = LocalStorageTaskRepositoryInstance;
const taskListFormatter = new TaskListFormatter();
const taskListRenderer = new TaskListRenderer();
const tasks = taskRepository.getTasks();

export function initialize() {
  taskListRenderer.render(tasks, taskListHtmlContainer, taskListFormatter);
  console.log("TaskList Rendered");
  attachEventListeners();
  console.log("Event listeners attached");
}

