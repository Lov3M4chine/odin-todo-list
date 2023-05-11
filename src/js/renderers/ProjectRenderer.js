import ProjectRendererInterface from "../interfaces/renderers/ProjectRendererInterface.js";

export default class ProjectRenderer extends ProjectRendererInterface {
    render(projects, container, taskListFormatter, projectFormatter, buttonName) {
        container.innerHTML = "";

        for (let project of projects) {
            const buttonName = event.target.textContent
            if (project.projectName === buttonName) {
                const projectLabel = projectFormatter.format(project);
                container.appendChild(projectLabel);
                for (let task of project.tasks) {
                const taskHtml = taskListFormatter.format(task);
                container.appendChild(taskHtml);
                }
            };
        };
    }
}