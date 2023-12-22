import createChild from "./create-child";
import populate from "./populate";

export default function(task, index) {
  (() => {
    const child = createChild('li', '', '', '', [{name: 'data-index', value: index}, {name: 'data-priority', value: 0}]);
    populate('.list-of-completed', child);
  })();

  (() => {
    const children = [
      createChild('button', '', ['task-undo'], '', [{name: 'data-undo', value: index}]),
      createChild('h3', '', '', task.title),
      createChild('p', '', '', task.description),
      createChild('p', '', '', ''),
      createChild('button', '', ['task-delete'], 'Delete', [{name: 'data-delete', value: index}])
    ];
    populate('.list-of-completed li:last-of-type', ...children);
  })();
}