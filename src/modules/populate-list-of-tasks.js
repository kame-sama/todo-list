import { listOfLists } from "./list-of-lists";
import populateTask from "./populate-task";

export default function () {
  const ul = document.querySelector('.list-of-tasks');

  ul.textContent = '';
  const tasks = listOfLists.getFocus().read();

  tasks.forEach((task, index) => {
    populateTask(task, index);
  });
}