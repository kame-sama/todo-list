import populate from "./populate";
import createChild from "./create-child";

export default function(heading, title, description, date, priority) {
  (() => {
    const child = createChild('form', '', ['task-form', 'dialog']);
    populate('main', child);
  })();

  (() => {
    const children = [
      createChild('button', 'close-task-create', '', 'Close'),
      createChild('button', 'submit-task-create', '', 'Done'),
      createChild('h2', '', '', heading),
      createChild('label', '', '', 'Title', [{name: 'for', value: 'task-title'}]),
      createChild('input', 'task-title', '', '', [{name: 'value', value: title}]),
      createChild('label', '', '', 'Description', [{name: 'for', value: 'task-description'}]),
      createChild('textarea', 'task-description', '', description, [{name: 'maxlength', value: '128'}]),
      createChild('label', '', '', 'Due Date', [{name: 'for', value: 'task-due-date'}]),
      createChild('input', 'task-due-date', '', '', [{name: 'type', value: 'date'}, {name: 'value', value: date}]),
      createChild('label', '', '', 'Priority', [{name: 'for', value: 'task-priority'}]),
      createChild('select', 'task-priority', '', '', [{name: 'value', value: priority}])
    ];
    populate('.task-form', ...children)
  })();

  (() => {
    const children = [
      createChild('option', '', '', 'None.', [{name: 'value', value: '0'}]),
      createChild('option', '', '', 'Low!', [{name: 'value', value: '1'}]),
      createChild('option', '', '', 'Medium!!', [{name: 'value', value: '2'}]),
      createChild('option', '', '', 'High!!!', [{name: 'value', value: '3'}])
    ];
    children[priority].attributes.push({name: 'selected', value: ''});
    populate('.task-form select', ...children);
  })();
}