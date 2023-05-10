import Task from "../Task";
import { initialize } from '../Initialization.js';

export default class TaskFormProcessor {
  constructor(taskRepository, renderer, taskHtmlContainer, formatter, formHandler) {
    this.taskRepository = taskRepository;
    this.renderer = renderer;
    this.taskHtmlContainer = taskHtmlContainer;
    this.formatter = formatter;
    this.formHandler = formHandler;
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
    this.renderer.render(this.taskRepository.getTasks(), this.taskHtmlContainer, this.formatter);
  }

  hideForm() {
    this.formHandler.hide();
  }

  processTaskForm() {
    event.preventDefault();
    const task = this.createTask();
    console.log("Task created")
    this.addTaskToRepository(task);
    console.log("Task added to repo")
    this.renderNewTask();
    console.log("Tasklist rendered")
    this.hideForm();
    console.log("Task form processed")
    initialize();
    console.log("Reinitialized")
  }
}

  