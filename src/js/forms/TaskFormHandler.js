import TaskFormHandlerInterface from "../interfaces/forms/TaskFormHandlerInterface.js";

export default class TaskFormHandler extends TaskFormHandlerInterface {
constructor() {
super();
}

show() {
this.taskform = document.getElementById("task-form");
this.taskform.classList.remove("hidden");
}

hide() {
this.taskform = document.getElementById("task-form");
this.taskform.classList.add("hidden");
}
}