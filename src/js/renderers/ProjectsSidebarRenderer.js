import ProjectSidebarFormatter from "../formatters/ProjectSidebarFormatter";
import ProjectSidebarRendererInterface from "../interfaces/renderers/ProjectSidebarRendererInterface"
const projectSidebarFormatter = new ProjectSidebarFormatter();
const container = document.getElementById("projects-list")

export default class projectSidebarRenderer extends ProjectSidebarRendererInterface {
    render(projects) {
        for (let project of projects) {
            const projectSideBarButton = projectSidebarFormatter.format(project);
            console.log(projectSideBarButton)
            container.appendChild(projectSideBarButton);
        }
    }
}