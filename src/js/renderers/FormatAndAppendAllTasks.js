import taskFormatter from "../formatters/TaskFormatter";
import taskAppender from "./TaskAppender";

export default function formatAndAppendAllTasks(tasks, container) {
    console.log("formatAndAppendAllTasks");
    console.log(tasks, container);
    tasks.forEach((task) => {
        const elements = taskFormatter(task);
        taskAppender(elements, container);
    })
}