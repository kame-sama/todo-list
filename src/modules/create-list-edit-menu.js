import createChild from "./create-child";
import populate from "./populate";
import { listOfLists } from "./list-of-lists";

export default function() {
  (() => {
    const child = createChild('div', '', ['list-edit-menu', 'dialog']);
    populate('aside', child);
  })();

  (() => {
    const children = [
      createChild('button', 'list-edit-close', '', 'Close'),
      createChild('button', '', '', listOfLists.getFocus().title),
      createChild('button', 'list-rename', '', 'Rename'),
      createChild('button', 'list-remove', '', 'Remove')
    ];
    populate('.list-edit-menu', ...children);
  })();
}