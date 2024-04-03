import React from 'react';
import Button from './Button';

export default function NoProjectSelected({ onStartAddProject }) {
	return (
		<div className="mt-24 text-center w-2/3">
			<h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
			<p className="text-stone-400 mb-4">Select a project to get started with a new one</p>
			<Button onClick={onStartAddProject} isCenter={true}>
				Create new Project
			</Button>
		</div>
	);
}
