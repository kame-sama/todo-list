import { listOfLists } from "../modules/list-of-lists";
import createListEditMenu from "./create-list-edit-menu";
import createForm from "./create-list-form";
import handleListEditMenu from "./handle-list-edit-menu";
import handleForm from "./handle-list-form";
import markSelectedList from "./mark-selected-list";
import populateListOfCompleted from "./populate-list-of-completed";
import populateListOfTasks from "./populate-list-of-tasks";

export default function() {
  const create = document.querySelector('#list-create');
  const edit = document.querySelector('#list-edit');
  const ul = document.querySelector('.list-of-lists');

  create.addEventListener('click', handleCreateClick);
  edit.addEventListener('click', handleEditClick);
  ul.addEventListener('click', handleListClicks);

  function handleListClicks(event) {
    if (event.target.dataset.index) {
      listOfLists.setFocus(+event.target.dataset.index);
      console.log(listOfLists.getFocus());
      populateListOfTasks();
      populateListOfCompleted();
      markSelectedList(event);
    }
  }

  function handleCreateClick(event) {
    createForm('Create list', '');
    handleForm(event);
  }

  function handleEditClick(event) {
    createListEditMenu();
    handleListEditMenu();
  }
}