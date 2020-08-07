import React, { Component } from 'react';
import IdeaCard from './IdeaCard';
import Form from './Form';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			ideas: [
				{
					id: 1,
					title: 'Vacation idea',
					description: 'Go to MX, go to Panama'
				}
			]
		}
	}

	displayIdeas() {
		return this.state.ideas.map(idea => (
			<IdeaCard
				id={idea.id}
				title={idea.title}
				description={idea.description}
				deleteIdea={this.deleteIdea}
			/>
		));
	}

	addIdea = (ideaDetails) => {
		this.setState({ ideas: [...this.state.ideas, ideaDetails] })
	}

	deleteIdea = (id) => {
		const filteredIdeas = this.state.ideas.filter(idea => (
			idea.id !== id
		));

		this.setState({ ideas: filteredIdeas });
	}

	render() {
		return (
			<section className="App">
				<header className="App-header">
					<h1>IdeaBox</h1>
				</header>
				<Form addIdea={this.addIdea}/>
				{this.displayIdeas()}
			</section>
		)
	}
}

export default App;
