import InterfaceFormHandler from "./InterfaceFormHandler.js";

export default class TaskFormHandler extends InterfaceFormHandler {
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
