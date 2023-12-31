import listOfLists from './list-of-lists';

export default function retrieveFromLocal() {
  const json = localStorage.getItem('todo');
  if (json) {
    const storage = JSON.parse(json);
    storage.forEach((list, index) => {
      if (index === 0) listOfLists.lists[0].title = list.title;
      if (index > 0) listOfLists.add(list.title);
      list.tasks.forEach((task) => {
        listOfLists.lists[index].add(
          task.title,
          task.description,
          task.date,
          task.priority,
        );
      });
      list.completed.forEach((task) => {
        listOfLists.lists[index].add(
          task.title,
          task.description,
          task.date,
          task.priority,
        );
        listOfLists.lists[index].complete(
          listOfLists.lists[index].tasks.length - 1,
        );
      });
    });
  }
}
