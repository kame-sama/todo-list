import createList from './create-list';

const listOfLists = {
  lists: [createList('Default')],
  index: 0,
  add(title) {
    this.lists.push(createList(title));
    this.index = this.lists.length - 1;
  },
  remove() {
    this.lists.splice(this.index, 1);
    this.index -= 1;
  },
};

export default listOfLists;
