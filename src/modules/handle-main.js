import { listOfLists } from './list-of-lists';
import createForm from './create-task-form';
import handleForm from './handle-task-form';
import populateListOfTasks from './populate-list-of-tasks';
import populateListOfCompleted from './populate-list-of-completed';
import saveToLocal from './save-to-local';

export default function() {
  const create = document.querySelector('#task-create');
  const listOfTasks = document.querySelector('.list-of-tasks');
  const listOfCompleted = document.querySelector('.list-of-completed');

  create.addEventListener('click', handleCreateClick);
  listOfTasks.addEventListener('click', handleTaskClick);
  listOfCompleted.addEventListener('click', handleCompletedClick);

  function handleCreateClick(event) {
    const id = event.target.id;
    const form = document.querySelector('.dialog');
    if (form) form.remove();
    createForm('Create new task', '', '', '', 0);
    handleForm(id);
  }
  function handleTaskClick(event) {
    const form = document.querySelector('.dialog');
    if (form) form.remove();
    if (event.target.dataset.complete) {
      const index = event.target.dataset.complete;
      listOfLists.getFocus().complete(index);
      saveToLocal();
      populateListOfTasks();
      populateListOfCompleted();
    } else if (event.target.dataset.delete) {
      const index = event.target.dataset.complete;
      listOfLists.getFocus().removeTask(index);
      saveToLocal();
      populateListOfTasks();
      populateListOfCompleted();
    } else if (event.target.dataset.index) {
      const id = 'task';

      const index = event.target.dataset.index;
      const task = listOfLists.getFocus().read()[index];
      createForm('Edit task' ,task.title, task.description, task.date, +task.priority);
      handleForm(id, index);
    }
  }

  function handleCompletedClick(event) {
    const form = document.querySelector('.dialog');
    if (form) form.remove();
    if (event.target.dataset.undo) {
      const index = event.target.dataset.undo;
      listOfLists.getFocus().undo(index);
      saveToLocal();
      populateListOfTasks();
      populateListOfCompleted();
    } else if (event.target.dataset.delete) {
      const index = event.target.dataset.complete;
      listOfLists.getFocus().removeCompleted(index);
      saveToLocal();
      populateListOfTasks();
      populateListOfCompleted();
    } else if (event.target.dataset.index) {
      const id = 'completed';

      const index = event.target.dataset.index;
      const task = listOfLists.getFocus().readCompleted()[index];
      createForm('Edit task' ,task.title, task.description, task.date, +task.priority);
      handleForm(id, index);
    }
  }
}