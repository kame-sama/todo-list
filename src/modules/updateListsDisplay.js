import print from './print';
import listOfLists from './list-of-lists';

export default function updateListsDisplay() {
  const ul = document.querySelector('.lists');
  ul.textContent = '';

  listOfLists.lists.forEach((list, index) => {
    print({
      parent: '.lists',
      type: 'li',
      classes: index === listOfLists.index ? 'selected' : '',
      content: list.title,
      attributes: [
        {
          name: 'data-index',
          value: index,
        },
      ],
    });
  });
}
