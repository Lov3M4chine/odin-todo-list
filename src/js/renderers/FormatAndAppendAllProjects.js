import projectFormatter from "../formatters/ProjectFormatter";
import projectAppender from "./ProjectAppender";
import taskFormatter from "../formatters/TaskFormatter";
import taskAppender from "./TaskAppender";

export default function formatAndAppendAllProjects(projects, container) {
    console.log("formatAndAppendAllProjects");
    for (let project of projects) {
        console.log(projects);
        console.log(container);
        let elements = projectFormatter(project);
        projectAppender(elements, container);
        
        for (let task of project.tasks) {
            console.log(task);
            console.log(container);
            const elements = taskFormatter(task);
            taskAppender(elements, container);
        }
    };
}