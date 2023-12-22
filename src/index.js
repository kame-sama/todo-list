import init from './modules/init';
import handleAside from './modules/handle-aside';
import handleMain from './modules/handle-main';
import retrieveFromLocal from './modules/retrieve-from-local';
import './style.css';

retrieveFromLocal();
init();
handleAside();
handleMain();