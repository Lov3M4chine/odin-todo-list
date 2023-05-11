import LocalStorageTaskRepositoryInstance from "./data/LocalStorageTaskRepositoryInstance.js";
import TaskListFormatter from "./formatters/TaskListFormatter.js";
import ProjectFormatter from "./formatters/ProjectFormatter.js";
import TaskListRenderer from "./renderers/TaskListRenderer.js";
import ProjectSidebarRenderer from "./renderers/ProjectsSidebarRenderer.js";
import { attachEventListeners } from "./EventListeners.js";
import { groupTasksByProject } from "./ProjectsSorter.js";


const taskListHtmlContainer = document.getElementById("task-list");

const taskRepository = LocalStorageTaskRepositoryInstance;
const taskListFormatter = new TaskListFormatter();
const taskListRenderer = new TaskListRenderer();
const projectSidebarRenderer = new ProjectSidebarRenderer();
const projectFormatter = new ProjectFormatter();
const tasks = taskRepository.getTasks();
const projects = groupTasksByProject(tasks);

export function initialize() {
  taskListRenderer.render(tasks, projects, taskListHtmlContainer, taskListFormatter, projectFormatter);
  console.log("taskList rendered");
  projectSidebarRenderer.render(projects);
  console.log("projectSidebar rendered");
  attachEventListeners(projects, taskListHtmlContainer);
  console.log("event listeners attached");
}

