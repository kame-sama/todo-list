import listOfLists from './list-of-lists';
import updateListsDisplay from './updateListsDisplay';
import updateTasksDisplay from './updateTasksDisplay';
import saveToLocal from './save-to-local';

export default function controller() {
  const newListButton = document.querySelector('.new-list-button');
  const editListButton = document.querySelector('.edit-list-button');
  const lists = document.querySelector('.lists');
  const listPopUp = document.querySelector('.list-pop-up');
  const listPopUpClose = document.querySelector('.list-pop-up .icon');
  const editList = document.querySelector('.list-edit');
  const editListClose = document.querySelector('.list-edit .icon');

  const newTaskButton = document.querySelector('.new-task-button');
  const taskPopUp = document.querySelector('.task-pop-up');
  const taskPopUpClose = document.querySelector('.task-pop-up .icon');

  const newListTitle = document.querySelector('#list-title');
  const newListSubmit = document.querySelector('#list-submit');

  const renameList = document.querySelector('#list-rename');
  const deleteList = document.querySelector('#list-delete');
  const listEditHeading = document.querySelector('.list-to-edit');

  const newTaskTitle = document.querySelector('#task-title');
  const newTaskDescription = document.querySelector('#task-description');
  const newTaskDate = document.querySelector('#task-date');
  const newTaskPriority = document.querySelector('#task-priority');
  const taskSubmit = document.querySelector('#task-submit');

  const tasks = document.querySelector('.tasks');
  const completed = document.querySelector('.completed');

  let isEdit = false;
  let editIndex;
  let taskListType;

  newListButton.addEventListener('click', () => {
    const active = document.querySelector('.active');
    if (active) active.classList.toggle('active');
    listPopUp.classList.toggle('active');
    newListTitle.value = '';
    newListTitle.select();
    newListSubmit.setAttribute('disabled', '');
    isEdit = false;
  });

  newListTitle.addEventListener('input', () => {
    if (newListTitle.value === '') {
      newListSubmit.setAttribute('disabled', '');
    } else {
      newListSubmit.removeAttribute('disabled', '');
    }
  });

  newListSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if (!isEdit) {
      listOfLists.add(newListTitle.value);
    } else {
      listOfLists.lists[listOfLists.index].title = newListTitle.value;
    }
    listPopUp.classList.toggle('active');

    updateListsDisplay();
    updateTasksDisplay();
    saveToLocal();
  });

  listPopUpClose.addEventListener('click', () => {
    listPopUp.classList.toggle('active');
  });

  editListButton.addEventListener('click', () => {
    const active = document.querySelector('.active');
    if (active) active.classList.toggle('active');
    editList.classList.toggle('active');

    listEditHeading.textContent = listOfLists.lists[listOfLists.index].title;
    if (listOfLists.index === 0) {
      deleteList.setAttribute('disabled', '');
    } else {
      deleteList.removeAttribute('disabled', '');
    }
  });

  deleteList.addEventListener('click', () => {
    listOfLists.remove();
    editList.classList.toggle('active');
    updateListsDisplay();
    updateTasksDisplay();
    saveToLocal();
  });

  renameList.addEventListener('click', () => {
    isEdit = true;
    editList.classList.toggle('active');
    listPopUp.classList.toggle('active');
    newListTitle.value = listOfLists.lists[listOfLists.index].title;
    newListTitle.select();
  });

  editListClose.addEventListener('click', () => {
    editList.classList.toggle('active');
  });

  lists.addEventListener('click', (e) => {
    if (e.target.dataset.index) {
      if (+e.target.dataset.index !== listOfLists.index) {
        listOfLists.index = +e.target.dataset.index;
        updateListsDisplay();
        updateTasksDisplay();
      }
    }
  });

  newTaskButton.addEventListener('click', () => {
    isEdit = false;
    const active = document.querySelector('.active');
    if (active) active.classList.toggle('active');
    taskPopUp.classList.toggle('active');
    newTaskTitle.value = '';
    newTaskDescription.value = '';
    newTaskDate.value = '';
    newTaskPriority.value = '';
    taskSubmit.setAttribute('disabled', '');
    newTaskTitle.removeAttribute('disabled', '');
    newTaskDescription.removeAttribute('disabled', '');
    newTaskDate.removeAttribute('disabled', '');
    newTaskPriority.removeAttribute('disabled', '');
  });

  newTaskTitle.addEventListener('input', () => {
    if (newTaskTitle.value === '') {
      taskSubmit.setAttribute('disabled', '');
    } else {
      taskSubmit.removeAttribute('disabled', '');
    }
  });

  taskSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (!isEdit) {
      listOfLists.lists[listOfLists.index].add(
        newTaskTitle.value,
        newTaskDescription.value,
        newTaskDate.value,
        newTaskPriority.value,
      );
    } else {
      listOfLists.lists[listOfLists.index][taskListType][editIndex].title =
        newTaskTitle.value;
      listOfLists.lists[listOfLists.index][taskListType][
        editIndex
      ].description = newTaskDescription.value;
      listOfLists.lists[listOfLists.index][taskListType][editIndex].date =
        newTaskDate.value;
      listOfLists.lists[listOfLists.index][taskListType][editIndex].priority =
        newTaskPriority.value;
    }
    taskPopUp.classList.toggle('active');
    updateTasksDisplay();
    saveToLocal();
  });

  taskPopUpClose.addEventListener('click', () => {
    taskPopUp.classList.toggle('active');
  });

  tasks.addEventListener('click', (e) => {
    if (e.target.dataset.complete) {
      listOfLists.lists[listOfLists.index].complete(e.target.dataset.complete);

      const active = document.querySelector('.active');
      if (active) active.classList.remove('active');
      updateTasksDisplay();
      saveToLocal();
    }
    if (e.target.dataset.del) {
      listOfLists.lists[listOfLists.index].remove(e.target.dataset.del);
      updateTasksDisplay();
      saveToLocal();
    }
    if (e.target.dataset.index) {
      isEdit = true;
      taskListType = 'tasks';
      const active = document.querySelector('.active');
      if (active) active.classList.toggle('active');
      taskPopUp.classList.toggle('active');
      editIndex = e.target.dataset.index;
      newTaskTitle.value =
        listOfLists.lists[listOfLists.index].tasks[
          e.target.dataset.index
        ].title;
      newTaskDescription.value =
        listOfLists.lists[listOfLists.index].tasks[
          e.target.dataset.index
        ].description;
      newTaskDate.value =
        listOfLists.lists[listOfLists.index].tasks[e.target.dataset.index].date;
      newTaskPriority.value =
        listOfLists.lists[listOfLists.index].tasks[
          e.target.dataset.index
        ].priority;

      newTaskTitle.removeAttribute('disabled', '');
      newTaskDescription.removeAttribute('disabled', '');
      newTaskDate.removeAttribute('disabled', '');
      newTaskPriority.removeAttribute('disabled', '');
      taskSubmit.removeAttribute('disabled', '');
    }
  });

  completed.addEventListener('click', (e) => {
    if (e.target.dataset.complete) {
      listOfLists.lists[listOfLists.index].redo(e.target.dataset.complete);

      const active = document.querySelector('.active');
      if (active) active.classList.remove('active');
      updateTasksDisplay();
      saveToLocal();
    }
    if (e.target.dataset.del) {
      listOfLists.lists[listOfLists.index].removeCompleted(
        e.target.dataset.del,
      );
      updateTasksDisplay();
      saveToLocal();
    }
    if (e.target.dataset.index) {
      isEdit = true;
      taskListType = 'completed';
      const active = document.querySelector('.active');
      if (active) active.classList.toggle('active');
      taskPopUp.classList.toggle('active');
      editIndex = e.target.dataset.index;
      newTaskTitle.value =
        listOfLists.lists[listOfLists.index].completed[
          e.target.dataset.index
        ].title;
      newTaskDescription.value =
        listOfLists.lists[listOfLists.index].completed[
          e.target.dataset.index
        ].description;
      newTaskDate.value =
        listOfLists.lists[listOfLists.index].completed[
          e.target.dataset.index
        ].date;
      newTaskPriority.value =
        listOfLists.lists[listOfLists.index].completed[
          e.target.dataset.index
        ].priority;

      newTaskTitle.setAttribute('disabled', '');
      newTaskDescription.setAttribute('disabled', '');
      newTaskDate.setAttribute('disabled', '');
      newTaskPriority.setAttribute('disabled', '');
      taskSubmit.setAttribute('disabled', '');
    }
  });
}
