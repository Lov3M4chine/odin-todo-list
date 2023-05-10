import RendererInterface from "../interfaces/RendererInterface.js";

export default class HtmlRenderer extends RendererInterface {
  render(tasks, container, formatter) {
    container.innerHTML = "";
    tasks.forEach((task) => {
      const taskHtml = formatter.format(task);
      container.appendChild(taskHtml);
    });
  }
}
