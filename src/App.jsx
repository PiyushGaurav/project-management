import React, { useState } from 'react';
import ProjectSidebar from './components/ProjectSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

export default function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: []
	});

	function handleStartAddProject(project) {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: null
			};
		});
	}

	function handleAddProject(projectData) {
		setProjectsState(prevState => {
			const newProject = {
				...projectData,
				id: Math.random()
			};

			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject]
			};
		});
	}

	console.log(projectsState);

	let content;

	if (projectsState.selectedProjectId === null) {
		content = <NewProject onAdd={handleAddProject} />;
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8 ">
			<ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
			{content}
		</main>
	);
}
