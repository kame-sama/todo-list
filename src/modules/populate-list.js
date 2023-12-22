import createChild from "./create-child";
import populate from "./populate";

export default function(list = { title: 'Default' }, index = 0) {
  (() => {
    const child = createChild('li');
    populate('.list-of-lists', child);
  })();

  (() => {
    const child = createChild('button', '', '', list.title, [{name: 'data-index', value: index}]);
    populate('.list-of-lists li:last-of-type', child);
  })();
}