import LocalStorageTaskRepositoryInstance from "./data/LocalStorageTaskRepositoryInstance.js";
import TaskDetailsRenderer from "./renderers/TaskDetailsRenderer.js";
import TaskFormHandler from "./forms/TaskFormHandler.js";
import TaskFormProcessor from "./forms/TaskFormProcessor.js";
import TaskListRenderer from "./renderers/TaskListRenderer.js";
import TaskListFormatter from "./formatters/TaskListFormatter.js";
import ProjectFormatter from "./formatters/ProjectFormatter.js";

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


export function attachTaskButtonEventListeners () {
    const taskButtons = document.querySelectorAll(".task-button");
    taskButtons.forEach((taskButton) => {
      taskButton.addEventListener("click", (event) => {
          taskDetailsRenderer.toggleVisibility(event);
      });
    });
  }

export function attachEventListeners() {
    addTaskButton.addEventListener("click", taskformHandler.show);
    taskForm.addEventListener("submit", (event) => taskformProcessor.processTaskForm(event));
    attachTaskButtonEventListeners();
  }