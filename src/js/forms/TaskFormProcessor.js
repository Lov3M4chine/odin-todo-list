import Task from "../Task";
import { initialize } from '../Initialization.js';
import { groupTasksByProject } from "../ProjectsSorter";

export default class TaskFormProcessor {
  constructor(taskRepository, taskListRenderer, taskListHtmlContainer, taskListFormatter, projectFormatter, taskformHandler) {
    this.taskRepository = taskRepository;
    this.renderer = taskListRenderer;
    this.taskListHtmlContainer = taskListHtmlContainer;
    this.taskListFormatter = taskListFormatter;
    this.projectFormatter = projectFormatter;
    this.taskformHandler = taskformHandler;
  }

  createTask() {
    const taskForm = document.getElementById("task-form");
    const name = taskForm.elements["name"].value || "none";
    const description = taskForm.elements["description"].value || "none";
    const dueDate = taskForm.elements["due-date"].value || "none";
    const priority = taskForm.elements["priority"].value || "none";
    const projectName = taskForm.elements["project-name"].value || "none";
  
    const task = new Task(name, description, dueDate, priority, projectName);
    return task;
  }
  

  addTaskToRepository(task) {
    this.taskRepository.addTask(task);
  }

  renderNewTask() {
    const tasks = this.taskRepository.getTasks();
    const projects = groupTasksByProject(tasks);
    this.renderer.render(tasks, projects, this.taskListHtmlContainer, this.taskListFormatter, this.projectFormatter);
  }

  

  hideForm() {
    this.taskformHandler.hide();
  }

  processTaskForm(event) {
    event.preventDefault();
    const task = this.createTask();
    this.addTaskToRepository(task);
    this.renderNewTask();
    this.hideForm();
    initialize();
  }
}

  