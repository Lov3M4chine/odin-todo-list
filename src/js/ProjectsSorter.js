import LocalStorageTaskRepositoryInstance from "./data/LocalStorageTaskRepositoryInstance.js";
const taskRepository = LocalStorageTaskRepositoryInstance;
const tasks = taskRepository.getTasks();


export function groupTasksByProject(tasks) {
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
