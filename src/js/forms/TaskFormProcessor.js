export default class TaskFormProcessor {
  constructor(taskRepository, renderer, taskHtmlContainer, formatter, formHandler) {
    this.taskRepository = taskRepository;
    this.renderer = renderer;
    this.taskHtmlContainer = taskHtmlContainer;
    this.formatter = formatter;
    this.formHandler = formHandler;
  }
  
  
    createTask({ name, description, dueDate, priority, projectName }) {
      return { name, description, dueDate, priority, projectName };
    }
  
    processTaskForm(taskForm) {
      taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
  
        const form = event.target;
        const name = form.elements["name"].value;
        const description = form.elements["description"].value;
        const dueDate = form.elements["due-date"].value;
        const priority = form.elements["priority"].value;
        const projectName = form.elements["project-name"].value;
  
        const task = this.createTask({ name, description, dueDate, priority, projectName });
        this.taskRepository.addTask(task);
        this.renderer.render(this.taskRepository.getTasks(), this.taskHtmlContainer, this.formatter);
    
        this.formHandler.hide();
      });
    }
  }
  