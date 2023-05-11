export default function taskFormatter (task) {
    const elements = {};

    elements.buttonWrapper = document.createElement("button");
    elements.buttonWrapper.className = "task-button";

    elements.taskHtml = document.createElement("div");
    elements.taskHtml.className = "flex flex-col bg-background bg-denim bg-repeat text-white p-1 skewed -skew-x-6 rounded";

    elements.taskBasic = document.createElement("div");
    elements.taskBasic.className = "flex justify-between";

    elements.taskCheckboxNameDiv = document.createElement("div");
    elements.taskCheckboxNameDiv.className = "flex gap-1";

    elements.taskCheckbox = document.createElement("input");
    elements.taskCheckbox.type = "checkbox";
    elements.taskCheckbox.name = "completed"

    elements.taskName = document.createElement("p");
    elements.taskName.textContent = task.name;
    elements.taskName.className = "font-swankyMooMoo text-lg";

    elements.taskDueDate = document.createElement("p");
    elements.taskDueDate.textContent = `Due: ${task.dueDate}`;

    elements.taskDetails = document.createElement("div");
    elements.taskDetails.className = "flex flex-col font-swankyMooMoo p-3 pb-2 border-slate-200 border-2 rounded task-details hidden";

    elements.taskDescription = document.createElement("div");
    elements.taskDescription.className = "flex gap-2";
    elements.taskDescriptionLabel = document.createElement("span")
    elements.taskDescriptionLabel.className = "underline";
    elements.taskDescriptionLabel.textContent = "Description: "
    elements.taskDescriptionText = document.createElement("p");
    elements.taskDescriptionText.textContent = `${task.description}`;
    elements.taskDescriptionText.className = "hyphens-auto";

    elements.taskPriority = document.createElement("div");
    elements.taskPriority.className = "flex gap-2";
    elements.taskPriorityLabel = document.createElement("span")
    elements.taskPriorityLabel.className = "underline";
    elements.taskPriorityLabel.textContent = "Priority: "
    elements.taskPriorityText = document.createElement("p");
    elements.taskPriorityText.textContent = `${task.priority}`;

    elements.lastLineDiv = document.createElement("div");
    elements.lastLineDiv.className = "flex justify-between";

    elements.taskProject = document.createElement("div");
    elements.taskProject.className = "flex gap-2";
    elements.taskProjectLabel = document.createElement("span")
    elements.taskProjectLabel.className = "underline";
    elements.taskProjectLabel.textContent = "Project: "
    elements.taskProjectText = document.createElement("p");
    elements.taskProjectText.textContent = `${task.projectName}`;

    elements.editButton = document.createElement("button");
    elements.editButton.textContent = "Edit"
    elements.editButton.id = "edit-button"

    return elements;
}

