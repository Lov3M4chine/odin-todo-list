import LocalStorageTaskRepository from "./data/LocalStorageTaskRepository.js";
const taskRepository = new LocalStorageTaskRepository();
const tasks = taskRepository.getTasks();


export function groupTasksByProject() {
  const groups = {};
  tasks.forEach((task) => {
    const projectName = task.projectName;
    if (projectName !== "none") {
      if (!groups[projectName]) {
        groups[projectName] = {
          projectName: projectName,
          tasks: [],
        };
      }
      groups[projectName].tasks.push(task);
    }
  });
  return Object.values(groups);
}
