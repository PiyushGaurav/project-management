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

	let content;

	if (projectsState.selectedProjectId === null) {
		content = <NewProject />;
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8 ">
			<ProjectSidebar onStartAddProject={handleStartAddProject} />
			{content}
		</main>
	);
}
