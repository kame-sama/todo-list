import { listOfLists } from "./list-of-lists";
import populateListOfTasks from "./populate-list-of-tasks";
import saveToLocal from "./save-to-local";

export default function(id, index) {
  const form = document.querySelector('.task-form');
  const done = document.querySelector('#submit-task-create');
  const close = document.querySelector('#close-task-create');
  const title = document.querySelector('#task-title');
  const description = document.querySelector('#task-description');
  const date = document.querySelector('#task-due-date');
  const priority = document.querySelector('#task-priority');

  title.select();

  if (title.value == '') done.toggleAttribute('disabled');
  if (id == 'completed') {
    done.toggleAttribute('disabled');
    title.toggleAttribute('disabled');
    description.toggleAttribute('disabled');
    date.toggleAttribute('disabled');
    priority.toggleAttribute('disabled');
  }

  close.addEventListener('click', handleCloseClick);
  done.addEventListener('click', handleDoneClick);
  title.addEventListener('input', handleInputChange);

  function handleCloseClick(event) {
    event.preventDefault();
    form.remove();
  }

  function handleDoneClick(event) {
    event.preventDefault();

    if (id == 'task-create') {
      listOfLists.getFocus().add(title.value, description.value, date.value, priority.value);
    } else {
      listOfLists.getFocus().read()[index].title = title.value;
      listOfLists.getFocus().read()[index].description = description.value;
      listOfLists.getFocus().read()[index].date = date.value;
      listOfLists.getFocus().read()[index].priority = priority.value;
    }

    saveToLocal();
    populateListOfTasks();

    form.remove();
  }

  function handleInputChange(event) {
    if (event.target.value != '') {
      done.removeAttribute('disabled');
    } else {
      done.setAttribute('disabled', '');
    }
  }
}