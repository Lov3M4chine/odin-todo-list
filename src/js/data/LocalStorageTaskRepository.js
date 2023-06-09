import TaskRepositoryInterface from "../interfaces/data/TaskRepositoryInterface.js";

export default class LocalStorageTaskRepository extends TaskRepositoryInterface {
  constructor() {
    super();
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  addTask(task) {
    this.tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  removeTask(taskIndex) {
    this.tasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  getTasks() {
    return this.tasks;
  }
}
