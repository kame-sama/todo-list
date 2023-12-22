import createForm from './create-list-form';
import handleForm from './handle-list-form';
import { listOfLists } from './list-of-lists';
import populateListOfLists from './populate-list-of-lists';
import saveToLocal from './save-to-local';

export default function() {
  const menu = document.querySelector('.list-edit-menu');
  const rename = document.querySelector('#list-rename');
  const remove = document.querySelector('#list-remove');
  const close = document.querySelector('#list-edit-close');

  if (listOfLists.getIndex() == 0) remove.setAttribute('disabled', '');

  rename.addEventListener('click', handleRenameClick);
  remove.addEventListener('click', handleRemoveClick);
  close.addEventListener('click', handleCloseClick);

  function handleRenameClick(event) {
    createForm('Rename list', listOfLists.getFocus().title);
    handleForm(event);
    menu.remove();
  }

  function handleRemoveClick(event) {
      listOfLists.remove();
      saveToLocal();
      const id = event.target.id;
      populateListOfLists(id);
      menu.remove();
  }

  function handleCloseClick() {
    menu.remove();
  }
}