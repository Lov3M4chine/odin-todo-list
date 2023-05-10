import FormHandlerInterface from "../interfaces/forms/FormHandlerInterface.js";

export default class TaskFormHandler extends FormHandlerInterface {
  constructor(formId) {
    super();
    this.form = document.getElementById(formId);
  }

  show() {
    this.form.classList.remove("hidden");
  }

  hide() {
    this.form.classList.add("hidden");
  }
}
