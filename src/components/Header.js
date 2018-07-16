import React, {Component} from 'react';

class Header extends Component{
	render(){
		return(
			<div>
			    <header className="header text-center">
		          <h1 className="header__title text-cinzel">Reminder Taskdum</h1>
		          <p className="header__para padding-lg-btm">Do you forget your tasks and planning. Do not worry, everyone do. We are here to help you write down your taks and work in an efficient way.</p>
		        </header>
			</div>
		)
	}
}

export default Header;