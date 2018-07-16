import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';
import {bake_cookie, read_cookie} from 'sfcookies';

const reminder = (action) => {
	let {title, text, dueDate, time} = action;
	return {
		id: Math.random(),
		title,
		text,
		dueDate,
		time
	}

}

/*const updatedItems = (state = [], id) => {
    const reminders =  state.map(reminder => reminder.id === id);
        return reminders;
}
*/

const removeById = (state = [], id) => {
	const reminders = state.filter(reminder => reminder.id!==id);
	    return reminders;
}

const reminders = (state = [], action) => {
	let reminders = null;
	state = read_cookie('reminders');
	switch(action.type) {
		case ADD_REMINDER:
		reminders = [...state, reminder(action)];
		bake_cookie('reminders', reminders);
		//console.log('reminders as state', reminders);
		return reminders;
    
		/*case EDIT_REMINDER:
        reminders = updatedItems(state, action.id);
        bake_cookie('reminders', reminders);
        return reminders;
        */

        case DELETE_REMINDER:
        reminders = removeById(state, action.id);
        bake_cookie('reminders', reminders);
        return reminders;

        case CLEAR_REMINDERS:
        reminders= [];
        bake_cookie('reminders', reminders);
        return reminders;

		default:
		 return state;
	}
}

export default reminders;