export default function(event) {
  if (!event) {
    const list = document.querySelector('.list-of-lists li button');
    list.classList.add('selected');
  } else {
    if (event == 'list-create') {
      const list = document.querySelector('.list-of-lists li:last-of-type button');
      list.classList.add('selected');
      list.scrollIntoView(false);
    } else if (event == 'list-rename' || event == 'list-remove') {
      const index = listOfLists.read().indexOf(listOfLists.getFocus());
      const list = document.querySelector(`.list-of-lists button[data-index="${index}"]`);
      list.classList.add('selected');
      list.scrollIntoView(false);
    } else if (event.target.dataset.index) {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  }
}

import { listOfLists } from "../modules/list-of-lists";