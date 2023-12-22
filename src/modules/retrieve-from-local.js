import { listOfLists } from "./list-of-lists";

export default function() {
  const json = localStorage.getItem('todo');
  if (json) {
    const storage = JSON.parse(json);
    storage.forEach((list, index) => {
      if (index > 0) listOfLists.add(list.title);
      list.tasks.forEach(task => {
        listOfLists.read()[index].add(task.title, task.description, task.date, task.priority);
      });
      list.completed.forEach(task => {
        listOfLists.read()[index].add(task.title, task.description, task.date, task.priority);
        listOfLists.read()[index].complete(listOfLists.read()[index].read().length - 1);
      })
    })
  }
}