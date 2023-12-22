import populate from "./populate";
import createChild from "./create-child";

export default function(heading, value) {
  (() => {
    const child = createChild('form', '', ['list-form', 'dialog']);
    populate('aside', child);
  })();

  (() => {
    const children = [
      createChild('button', 'close-list-create', '', 'Close'),
      createChild('button', 'submit-list-create', '', 'Done'),
      createChild('h2', '', '', heading),
      createChild('input', 'list-title', '', '', [{name: 'value', value: value}, {name: 'placeholder', value: 'Enter list title'}])
    ];
    populate('.list-form', ...children);
  })();
}