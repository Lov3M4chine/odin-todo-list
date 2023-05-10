import TaskListRendererInterface from "../interfaces/renderers/TaskListRendererInterface.js";

export default class TaskListRenderer extends TaskListRendererInterface {
  render(tasks, container, formatter) {
    container.innerHTML = "";
    tasks.forEach((task) => {
      const taskHtml = formatter.format(task);
      container.appendChild(taskHtml);
    });
  }
}
