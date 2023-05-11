import LocalStorageTaskRepositoryInstance from "./data/LocalStorageTaskRepositoryInstance.js";
import TaskDetailsRenderer from "./renderers/TaskDetailsRenderer.js";
import TaskFormHandler from "./forms/TaskFormHandler.js";
import TaskFormProcessor from "./forms/TaskFormProcessor.js";
import TaskListRenderer from "./renderers/TaskListRenderer.js";
import TaskListFormatter from "./formatters/TaskListFormatter.js";
import ProjectFormatter from "./formatters/ProjectFormatter.js";
import ProjectRenderer from "./renderers/ProjectRenderer.js";

const addTaskButton = document.getElementById("add-task-button");
const taskForm = document.getElementById("task-form");
const taskListHtmlContainer = document.getElementById("task-list");

const taskDetailsRenderer = new TaskDetailsRenderer();
const taskRepository = LocalStorageTaskRepositoryInstance;
const taskListFormatter = new TaskListFormatter();
const projectFormatter = new ProjectFormatter();
const taskListRenderer = new TaskListRenderer();
const taskformHandler = new TaskFormHandler();
const taskformProcessor = new TaskFormProcessor(taskRepository, taskListRenderer, taskListHtmlContainer, taskListFormatter, projectFormatter, taskformHandler);
const projectRenderer = new ProjectRenderer();

 function attachTaskButtonEventListeners () {
    const taskButtons = document.querySelectorAll(".task-button");
    taskButtons.forEach((taskButton) => {
      taskButton.addEventListener("click", (event) => {
          taskDetailsRenderer.toggleVisibility(event);
      });
    });
  }

   function attachProjectSidebarListeners (projects) {
    console.log(projects);
    console.log(taskListHtmlContainer);
    const projectSideBarButtons = document.querySelectorAll(".project-sidebar-button");
    console.log('projectSideBarButtons:', [...projectSideBarButtons]);
    projectSideBarButtons.forEach((projectButton) => {
      console.log(`Project button looped: ${projectButton}`);
      projectButton.addEventListener("click", (event) => {
        const buttonName = event.target.textContent;
        projectRenderer.render(projects, taskListHtmlContainer, taskListFormatter, projectFormatter, buttonName);
        console.log("projectButton event listener added");
      });
    });
  }

  export function attachEventListeners(projects) {
      addTaskButton.addEventListener("click", taskformHandler.show);
      console.log("addTaskButton event listener attached");
      taskForm.addEventListener("submit", (event) => taskformProcessor.processTaskForm(event));
      console.log("taskForm event listener attached");
      attachProjectSidebarListeners(projects);
      console.log("ProjectSidebar event listener attached");
      attachTaskButtonEventListeners();
      console.log("TaskButton event listener attached");
  }

