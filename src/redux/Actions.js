import {ADD_REMINDER, EDIT_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';

export const addReminder = (title, text, dueDate, time) => {
	const action = {
		type: ADD_REMINDER,
		title,
		text,
		dueDate,
		time
	}
	//console.log('action in addReminder', action);
	return action;
}

export const editReminder = (title, text, dueDate, time) => {
	   const action = {
		type: EDIT_REMINDER,
		title,
		text,
		dueDate,
		time
	}
	//console.log('action in addReminder', action);
	return action;
}

export const deleteReminder = (id) => {
	const action = {
		type: DELETE_REMINDER,
		id
	}
	//console.log('deleting items', action);
	return action;
}

export const clearReminders = () => {
	   return{
       type: CLEAR_REMINDERS
       }
}