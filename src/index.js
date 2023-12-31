import init from './modules/init';
import './style.css';
import updateListsDisplay from './modules/updateListsDisplay';
import controller from './modules/controller';
import retrieveFromLocal from './modules/retrieve-from-local';
import updateTasksDisplay from './modules/updateTasksDisplay';

init();
retrieveFromLocal();
updateListsDisplay();
updateTasksDisplay();
controller();
