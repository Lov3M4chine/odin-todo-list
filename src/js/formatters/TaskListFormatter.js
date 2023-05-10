import TaskListFormatterInterface from "../interfaces/formatters/TaskListFormatterInterface.js";

export default class TaskListFormatter extends TaskListFormatterInterface {
  format(task) {
        const buttonWrapper = document.createElement("button");
        buttonWrapper.className = "task-button";

        const taskHtml = document.createElement("div");
        taskHtml.className = "flex flex-col bg-background bg-denim bg-repeat text-white p-1 skewed -skew-x-6 rounded";

        const taskBasic = document.createElement("div");
        taskBasic.className = "flex justify-between";

        const taskCheckboxNameDiv = document.createElement("div");
        taskCheckboxNameDiv.className = "flex gap-1";

        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.name = "completed"

        const taskName = document.createElement("p");
        taskName.textContent = task.name;
        taskName.className = "font-swankyMooMoo text-lg";

        const taskDueDate = document.createElement("p");
        taskDueDate.textContent = `Due: ${task.dueDate}`;

        const taskDetails = document.createElement("div");
        taskDetails.className = "flex flex-col font-swankyMooMoo p-3 pb-2 border-slate-200 border-2 rounded task-details hidden";

        const taskDescription = document.createElement("div");
        taskDescription.className = "flex gap-2";
        const taskDescriptionLabel = document.createElement("span")
        taskDescriptionLabel.className = "underline";
        taskDescriptionLabel.textContent = "Description: "
        const taskDescriptionText = document.createElement("p");
        taskDescriptionText.textContent = `${task.description}`;
        taskDescriptionText.className = "hyphens-auto";


        const taskPriority = document.createElement("div");
        taskPriority.className = "flex gap-2";
        const taskPriorityLabel = document.createElement("span")
        taskPriorityLabel.className = "underline";
        taskPriorityLabel.textContent = "Priority: "
        const taskPriorityText = document.createElement("p");
        taskPriorityText.textContent = `${task.priority}`;

        const lastLineDiv = document.createElement("div");
        lastLineDiv.className = "flex justify-between";

        const taskProject = document.createElement("div");
        taskProject.className = "flex gap-2";
        const taskProjectLabel = document.createElement("span")
        taskProjectLabel.className = "underline";
        taskProjectLabel.textContent = "Project: "
        const taskProjectText = document.createElement("p");
        taskProjectText.textContent = `${task.projectName}`;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit"
        editButton.id = "edit-button"

        buttonWrapper.appendChild(taskHtml);
        taskHtml.appendChild(taskBasic);
        taskBasic.appendChild(taskCheckboxNameDiv);
        taskCheckboxNameDiv.appendChild(taskCheckbox);
        taskCheckboxNameDiv.appendChild(taskName);
        taskBasic.appendChild(taskDueDate);
        taskHtml.appendChild(taskDetails);
        taskDetails.appendChild(taskDescription);
        taskDescription.appendChild(taskDescriptionLabel);
        taskDescription.appendChild(taskDescriptionText);
        taskDetails.appendChild(taskPriority);
        taskPriority.appendChild(taskPriorityLabel);
        taskPriority.appendChild(taskPriorityText);
        taskDetails.appendChild(lastLineDiv);
        lastLineDiv.appendChild(taskProject);
        taskProject.appendChild(taskProjectLabel);
        taskProject.appendChild(taskProjectText);
        lastLineDiv.appendChild(editButton);
    
        return buttonWrapper;
    };
}

