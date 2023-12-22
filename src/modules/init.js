import populate from './populate';
import createChild from './create-child';
import populateList from './populate-list';
import markSelectedList from './mark-selected-list';

export default function init() {
  (() => {
    const children = [
      createChild('header'),
      createChild('aside'),
      createChild('main')
    ];
    populate('body', ...children);
  })();

  (() => {
    const child = createChild('h1', '', '', 'to do...');
    populate('header', child);
  })();

  (() => {
    const children = [
      createChild('button', 'list-create', '', '+ Create new list'),
      createChild('button', 'list-edit', '', 'Edit'),
      createChild('ul', '', ['list-of-lists'])
    ];
    populate('aside', ...children);
  })();

  populateList();
  markSelectedList();

  (() => {
    const children = [
      // createChild('h2', '', '', 'Tasks'),
      createChild('button', 'task-create', '', '+ Create new task'),
      createChild('ul', '', ['list-of-tasks']),
      createChild('ul', '', ['list-of-completed'])
    ];
    populate('main', ...children);
  })();
}