import React, { Component } from 'react';

class Form extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			description: ''
		}
	}

	updateValue(event) {
		this.setState( {[event.target.name]: event.target.value} )
	}

	createIdea(event) {
		event.preventDefault();
		const newIdea = {
			id: Date.now(),
			title: this.state.title,
			description: this.state.description
		};
		this.props.addIdea(newIdea);
		this.clearInputs();
	}

	clearInputs() {
		this.setState( {title: '', description: ''} )
	}

	render() {
		return (
			<form>
				<input 
					type='text' 
					placeholder='title' 
					name='title' 
					value={this.state.title} onChange={event => this.updateValue(event)}
				/>
				<input 
					type='text' 
					placeholder='description' 
					name='description' 
					value={this.state.description} onChange={event => this.updateValue(event)}
				/>
				<button
					onClick={event => this.createIdea(event)}>
					Add new idea
				</button>
			</form>
		)
	}
}

export default Form;