import TaskListRendererInterface from "../interfaces/renderers/TaskListRendererInterface.js";

export default class TaskListRenderer extends TaskListRendererInterface {
  render(tasks, projects, container, taskFormatter, projectFormatter) {
    container.innerHTML = "";

    tasks.forEach((task) => {
      if (task.projectName === "none") {
      const taskHtml = taskFormatter.format(task);
      container.appendChild(taskHtml);
      }

    });

    for (let project of projects) {
      console.log(projects)
      const projectLabel = projectFormatter.format(project);
      container.appendChild(projectLabel);
      for (let task of project.tasks) {
        const taskHtml = taskFormatter.format(task);
        container.appendChild(taskHtml);
      }
    };


  }
}
