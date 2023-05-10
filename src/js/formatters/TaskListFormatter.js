import FormatterInterface from "../interfaces/formatters/FormatterInterface.js";

export default class TaskListFormatter extends FormatterInterface {
  format(task) {
        const taskHtml = document.createElement("div");
        taskHtml.classList.add("flex", "justify-between");
    
        const taskName = document.createElement("p");
        taskName.textContent = task.name;
    
        const dueDate = document.createElement("p");
        dueDate.textContent = `Due: ${task.dueDate}`;
    
        taskHtml.appendChild(taskName);
        taskHtml.appendChild(dueDate);
    
        return taskHtml;
    };
}

