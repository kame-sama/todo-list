export const listOfLists = (function() {
  const _lists = [createList('Default')];
  let _focus = _lists[0];
  let _index = 0;

  const add = (title) => {
    const list = createList(title);
    _lists.push(list);
  };

  const read = () => {
    console.log(_lists);
    return _lists;
  }

  const setFocus = (index) => {
    _focus = _lists[index];
    _index = index;
  };

  const remove = () => {
    _lists.splice(_index, 1);
    setFocus(_index - 1);
  };

  const getFocus = () => {
    return _focus;
  }

  const getIndex = () => {
    return _index;
  }

  return {
    add,
    remove,
    read,
    setFocus,
    getFocus,
    getIndex
  };
})();

import createList from "./create-list";
