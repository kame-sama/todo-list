import { listOfLists } from "./list-of-lists";
import populateList from "./populate-list";
import populateListOfTasks from "./populate-list-of-tasks";
import markSelectedList from "./mark-selected-list";
import populateListOfCompleted from "./populate-list-of-completed";

export default function(id) {
  const ul = document.querySelector('.list-of-lists');

  ul.textContent = '';
  const lists = listOfLists.read();

  lists.forEach((list, index) => {
    populateList(list, index);
  });

  if (id == 'list-create') listOfLists.setFocus(lists.length - 1);
  
  populateListOfTasks();
  populateListOfCompleted();
  markSelectedList(id);
}