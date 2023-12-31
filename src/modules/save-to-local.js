import listOfLists from './list-of-lists';

export default function saveToLocal() {
  const storage = [];
  listOfLists.lists.forEach((list, index) => {
    storage.push({
      title: list.title,
      tasks: [],
      completed: [],
    });
    list.tasks.forEach((task) => {
      storage[index].tasks.push({
        title: task.title,
        description: task.description,
        date: task.date,
        priority: task.priority,
      });
    });
    list.completed.forEach((task) => {
      storage[index].completed.push({
        title: task.title,
        description: task.description,
        date: task.date,
        priority: task.priority,
      });
    });
  });

  const json = JSON.stringify(storage);

  localStorage.setItem('todo', json);
}
