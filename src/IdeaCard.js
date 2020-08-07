import React from 'react';

function IdeaCard({ id, title, description, deleteIdea }) {
	return (
		<section className='card'>
			<h2>{title}</h2>
			<p>{description}</p>
			<button
				onClick={() => deleteIdea(id)}>
				remove
			</button>
		</section>
	)
}

export default IdeaCard;