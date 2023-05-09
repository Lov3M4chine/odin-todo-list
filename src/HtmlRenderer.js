import InterfaceRenderer from "./InterfaceRenderer.js";

export default class HtmlRenderer extends InterfaceRenderer {
  render(tasks, container, formatter) {
    container.innerHTML = "";
    tasks.forEach((task) => {
      const taskHtml = formatter.format(task);
      container.appendChild(taskHtml);
    });
  }
}
