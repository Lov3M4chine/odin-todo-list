export default class ProjectSidebarFormatter {
    format(project) {
          const projectSidebarButton = document.createElement("button");
          projectSidebarButton.textContent = `${project.projectName}`;
          projectSidebarButton.className = "whitespace-nowrap project-sidebar-button"
      
          return projectSidebarButton;
      };
  }