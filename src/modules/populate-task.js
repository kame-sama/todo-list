import createChild from "./create-child";
import populate from "./populate";

export default function(task, index) {
  (() => {
    const child = createChild('li', '', '', '', [{name: 'data-index', value: index}, {name: 'data-priority', value: task.priority}]);
    populate('.list-of-tasks', child);
  })();

  (() => {
    const children = [
      createChild('button', '', ['task-complete'], '', [{name: 'data-complete', value: index}]),
      createChild('h3', '', '', task.title),
      createChild('p', '', '', task.description),
      createChild('p', '', '', task.getFormattedDate(task.date)),
      createChild('button', '', ['task-delete'], 'Delete', [{name: 'data-delete', value: index}])
    ];
    populate('.list-of-tasks li:last-of-type', ...children);
  })();
}