import TaskDetailsRendererInterface from "../interfaces/renderers/TaskDetailsRendererInterface.js";

export default class TaskDetailsRenderer extends TaskDetailsRendererInterface {
  toggleVisibility(container) {
    if (task.classList.contains("hidden")) {
        task.classList.remove("hidden");
    } else {
        task.classList.add("hidden");
    }
  }
}