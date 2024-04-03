import React from 'react';
import Button from './Button';

export default function SelectedProject({ project }) {
	const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
	return (
		<div className="w-[35rem] mt-16">
			<header className="pb-4 mb-4 border-b-2 border-stone-300">
				<h1 className="test-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
			</header>
			<p className="mb-4 text-stone-400">{formattedDate}</p>
			<p className="mb-4 text-stone-600 whitespace-pre-wrap">{project.description}</p>
		</div>
	);
}
