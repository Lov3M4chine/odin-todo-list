import LocalStorageTaskRepository from "./data/LocalStorageTaskRepository.js";
// import TaskListFormatter from "./formatters/TaskListFormatter.js";
// import ProjectFormatter from "./formatters/ProjectFormatter.js";
// import TaskListRenderer from "./renderers/TaskListRenderer.js";
// import ProjectSidebarRenderer from "./renderers/ProjectsSidebarRenderer.js";
// import { attachEventListeners } from "./EventListeners.js";
import { groupTasksByProject } from "./ProjectsSorter.js";
import appendAll from "./renderers/AppendAll.js";
import taskDetailsFilterToggle from "./renderers/TaskDetailsFilter.js";


// const taskListHtmlContainer = document.getElementById("task-list");
const taskRepository = new LocalStorageTaskRepository();
// const taskListFormatter = new TaskListFormatter();
// const taskListRenderer = new TaskListRenderer();
// const projectSidebarRenderer = new ProjectSidebarRenderer();
// const projectFormatter = new ProjectFormatter();


// export function initialize() {
//   taskListRenderer.render(tasks, projects, taskListHtmlContainer, taskListFormatter, projectFormatter);
//   console.log("taskList rendered");
//   projectSidebarRenderer.render(projects);
//   console.log("projectSidebar rendered");
//   attachEventListeners(projects, taskListHtmlContainer);
//   console.log("event listeners attached");
// }

function attachTaskButtonEventListeners () {
  const taskButtons = document.querySelectorAll(".task-button");
  taskButtons.forEach((taskButton) => {
    taskButton.addEventListener("click", (event) => {
      taskDetailsFilterToggle(event);
    });
  });
}

export function initialize () {
  const tasks = taskRepository.getTasks();
  const projects = groupTasksByProject(tasks);
  const container = document.getElementById("task-list");
  appendAll(tasks, projects, container);

  attachTaskButtonEventListeners();
}



