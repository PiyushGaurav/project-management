import React, { useState } from 'react';
import ProjectSidebar from './components/ProjectSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

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

	function handleCancelAddProject(project) {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined
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

	function handleSelectProject(id) {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: id
			};
		});
	}

	let content;

	const selectedProject = projectsState.projects.find(p => p.id === projectsState.selectedProjectId);

	content = <SelectedProject project={selectedProject} />;

	if (projectsState.selectedProjectId === null) {
		content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8 ">
			<ProjectSidebar
				onStartAddProject={handleStartAddProject}
				projects={projectsState.projects}
				onSelectProject={handleSelectProject}
				selectedProjectId={projectsState.selectedProjectId}
			/>
			{content}
		</main>
	);
}
