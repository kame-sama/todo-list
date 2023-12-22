export default function(title) {
  const _tasks = [];
  const _completed = [];

  const add = (title, description, date, priority) => {
    const task = createTask(title, description, date, priority);
    _tasks.push(task);
  };

  const complete = (index) => {
    _completed.push(..._tasks.splice(index, 1));
  };

  const undo = (index) => {
    _tasks.push(..._completed.splice(index, 1));
  };

  const removeTask = (index) => {
    _tasks.splice(index, 1);
  };

  const removeCompleted = (index) => {
    _completed.splice(index, 1);
  }

  const read = () => {
    return _tasks;
  };

  const readCompleted = () => {
    return _completed;
  };

  const edit = (newTitle) => {
    title = newTitle;
    console.log(title);
  }

  return {
    title,
    add,
    complete,
    removeTask,
    removeCompleted,
    read,
    readCompleted,
    edit,
    undo
  };
}

import createTask from './create-task';