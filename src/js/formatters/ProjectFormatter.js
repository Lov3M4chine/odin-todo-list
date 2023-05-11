import ProjectFormatterInterface from "../interfaces/formatters/ProjectFormatterInterface.js";

export default class ProjectFormatter extends ProjectFormatterInterface {
  format(project) {
        const projectName = document.createElement("div");
        projectName.textContent = `${project.projectName}`;
    
        return projectName;
    };
}

