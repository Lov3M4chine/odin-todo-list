import LocalStorageTaskRepositoryInstance from "./data/LocalStorageTaskRepositoryInstance.js";
import TaskListFormatter from "./formatters/TaskListFormatter.js";
import ProjectFormatter from "./formatters/ProjectFormatter.js";
import TaskListRenderer from "./renderers/TaskListRenderer.js";
import { attachEventListeners } from "./EventListeners.js";
import { groupTasksByProject } from "./ProjectsSorter.js";


const taskListHtmlContainer = document.getElementById("task-list");

const taskRepository = LocalStorageTaskRepositoryInstance;
const taskListFormatter = new TaskListFormatter();
const taskListRenderer = new TaskListRenderer();
const projectFormatter = new ProjectFormatter();
const tasks = taskRepository.getTasks();
const projects = groupTasksByProject(tasks);

export function initialize() {
  taskListRenderer.render(tasks, projects, taskListHtmlContainer, taskListFormatter, projectFormatter);
  attachEventListeners();
}

