import { listOfLists } from "./list-of-lists";
import populateListOfLists from "./populate-list-of-lists";

export default function(event) {
  const aside = document.querySelector('aside');
  const id = event.target.id;
  const form = document.querySelector('.list-form');
  const done = document.querySelector('#submit-list-create');
  const close = document.querySelector('#close-list-create');
  const title = document.querySelector('#list-title');

  title.select();

  if (title.value == '') done.toggleAttribute('disabled');

  close.addEventListener('click', handleCloseClick);
  done.addEventListener('click', handleDoneClick);
  title.addEventListener('input', handleInputChange);

  function handleCloseClick(event) {
    event.preventDefault();
    form.remove();
  }

  function handleDoneClick(event) {
    event.preventDefault();
    if (id == 'list-create') {
      listOfLists.add(title.value);
    } else if (id == 'list-rename') {
      listOfLists.getFocus().title = title.value;
    }

    populateListOfLists(id);

    form.remove();

    // if (id == 'list-create') aside.scrollTo(0, aside.scrollHeight);
  }

  function handleInputChange(event) {
    if (event.target.value != '') {
      done.removeAttribute('disabled');
    } else {
      done.setAttribute('disabled', '');
    }
  }
}