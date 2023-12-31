import print from './print';
import listOfLists from './list-of-lists';

export default function updateTasksDisplay() {
  const tasks = document.querySelector('.tasks');
  const completed = document.querySelector('.completed');
  tasks.textContent = '';
  completed.textContent = '';
  const tasksArr = [
    listOfLists.lists[listOfLists.index].tasks,
    listOfLists.lists[listOfLists.index].completed,
  ];
  tasksArr.forEach((arr, arrIndex) => {
    arr.forEach((task, index) => {
      print({
        parent: arrIndex === 0 ? '.tasks' : '.completed',
        type: 'li',
        classes: `${task.priority}-priority`,
        content: `
            <div class="task-complete" data-complete="${index}"></div>
            <div class="task-title">${task.title}</div>
            <div class="task-description">${task.description}</div>
            <div class="task-date">${task.date}</div>
            <div class="task-delete" data-del="${index}">delete</div>`,
        attributes: [
          {
            name: 'data-index',
            value: `${index}`,
          },
        ],
      });
    });
  });
}
