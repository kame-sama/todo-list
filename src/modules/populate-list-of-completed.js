import { listOfLists } from "./list-of-lists";
import populateComplete from "./populate-complete";

export default function () {
  const listOfCompleted = document.querySelector('.list-of-completed');

  listOfCompleted.textContent = '';

  const completed = listOfLists.getFocus().readCompleted();
  completed.forEach((task, index) => {
    populateComplete(task, index);
  });
}