import { listOfLists } from "./list-of-lists";

export default function() {
  const storage = [];
  listOfLists.read().forEach((list, index) => {
    storage.push({title: list.title, tasks: [], completed: []});
    list.read().forEach(task => {
      storage[index].tasks.push({title: task.title, description: task.description, date: task.date, priority: task.priority});
    });
    list.readCompleted().forEach(task => {
      storage[index].completed.push({title: task.title, description: task.description, date: task.date, priority: task.priority});
    });
  });

  const json = JSON.stringify(storage);

  localStorage.setItem('todo', json);
}