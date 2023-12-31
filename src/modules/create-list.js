import createTask from './create-task';

export default function createList(title) {
  const tasks = [];
  const completed = [];

  const add = (taskTitle, description, date, priority) => {
    tasks.push(createTask(taskTitle, description, date, priority));
  };

  const complete = (index) => {
    completed.push(...tasks.splice(index, 1));
  };

  const redo = (index) => {
    tasks.push(...completed.splice(index, 1));
  };

  const remove = (index) => {
    tasks.splice(index, 1);
  };

  const removeCompleted = (index) => {
    completed.splice(index, 1);
  };

  return {
    title,
    tasks,
    completed,
    add,
    complete,
    redo,
    remove,
    removeCompleted,
  };
}
