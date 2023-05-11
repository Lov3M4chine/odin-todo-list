export default function projectFormatter (project) {
    const elements = {};

    elements.projectName = document.createElement("div");
    elements.projectName.textContent = `${project.projectName}`;
   
    return elements;
};

