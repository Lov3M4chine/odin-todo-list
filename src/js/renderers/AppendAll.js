import formatAndAppendAllTasks from "./FormatAndAppendAllTasks.js";
import formatAndAppendAllProjects from "./FormatAndAppendAllProjects.js";

export default function appendAll (tasks, projects, container) {
    container.innerHTML = "";
    console.log("appendAll");
    console.log(container);
    formatAndAppendAllTasks(tasks, container);
    formatAndAppendAllProjects(projects, container);
}
