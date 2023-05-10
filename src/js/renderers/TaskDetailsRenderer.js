import TaskDetailsRendererInterface from "../interfaces/renderers/TaskDetailsRendererInterface.js";

export default class TaskDetailsRenderer extends TaskDetailsRendererInterface {
  toggleVisibility(event) {
    const taskButton = event.target.closest(".task-button");
    const skewedElement = taskButton.querySelector(":scope > .skewed");
    const taskDetails = taskButton.querySelector(".task-details");
    taskDetails.classList.toggle("hidden");
    skewedElement.classList.toggle("-skew-x-6")
  }
}
