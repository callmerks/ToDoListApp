import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { addReminder, editReminder, deleteReminder, clearReminders } from '../redux/Actions';
import moment from 'moment';

class App extends Component {
constructor(props){
super(props);
this.state = {
title: 'Enter Your Task Title',
text: 'Enter Task Description',
dueDate: '',
time: '',
}
};

change(e){
this.setState({
[e.target.name]: e.target.value
});
}

addReminder(){
//console.log('title', this.state.title);
//console.log('timing', this.state.dueDate);
let {title, text, dueDate, time} = this.state;
this.props.addReminder(
title,
text,
dueDate,
time);
}

deleteReminder(id){
//console.log('deleting items', id);
//console.log('this.props', this.props);
this.props.deleteReminder(id);
}

renderReminders(){
const {reminders} = this.props;
return(
<ul>
	{
	reminders.map(reminder => {
	let {id,title,text,dueDate,time} = reminder;
	return (
	<li key={id}>
		
		<div className="task-results">
			<div className="task-results__heading"><h1>{title}</h1></div>
			<div className="task-results__para"><p>{text}</p></div>
			<div className="task-results__date-time">Day - {moment(new Date(dueDate)).fromNow()}, at - {time}</div>
			<button className="btn-edit" onClick={() => this.props.editReminder()}>edit reminder</button>
			<button className="btn-delete" onClick={() => this.deleteReminder(reminder.id)}> Delete </button>
		</div>
		}
	</li>
	)
	})
	}
</ul>
)
}
render() {
return (
<div className="App">
	<Header />
		
		<div className="task-box text-center padding-lg-btm padding-lg-top" error={this.props.error}>
			<input className="task-box__input text-cinzel"
			onChange={e => this.change(e)}
			name="title" type="text"
			required="required"
			placeholder="Enter Your Title" /><br />

			<textarea
			className="task-box__textarea text-cinzel"
			onChange={e => this.change(e)}
			name="text"
			type="text"
			placeholder="Enter Task Description" /><br />

			<input className="task-box__input" 
			onChange={e => this.change(e)} 
			name="dueDate" 
			type="date" /><br />

			<input className="task-box__input" 
			onChange={e => this.change(e)} 
			name="time" 
			type="time" /><br />

			<button className="btn-submit" 
			onClick={() => this.addReminder()}>Submit
			</button>

		</div>

		{this.renderReminders()}

		<button className="btn-delete-all margin-lg-btm" onClick={() => this.props.clearReminders()}>Clear All Reminders</button>
		
	</div>
	);
	}
	}

	function mapStateToProps(state){
	return{
	reminders: state
	}
	}
	
	export default connect(mapStateToProps, {addReminder, editReminder, deleteReminder, clearReminders})(App);