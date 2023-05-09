import HtmlRenderer from "./HtmlRenderer.js";

function createTask({ name, description, dueDate, priority, projectName }) {
  return { name, description, dueDate, priority, projectName };
}

export function processTaskForm(taskRepository, taskHtmlContainer, formatter, formHandler) {
  const taskForm = document.getElementById("task-form");
  const renderer = new HtmlRenderer();

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements["name"].value;
    const description = form.elements["description"].value;
    const dueDate = form.elements["due-date"].value;
    const priority = form.elements["priority"].value;
    const projectName = form.elements["project-name"].value;

    const task = createTask({ name, description, dueDate, priority, projectName });
    taskRepository.addTask(task);
    renderer.render(taskRepository.getTasks(), taskHtmlContainer, formatter);

    formHandler.hide(); // Hide the form after the task is submitted
  });
}
