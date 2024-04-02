import React from 'react';
import ProjectSidebar from './components/ProjectSidebar';
import NewProject from './components/NewProject';

export default function App() {
	return (
		<main className="h-screen my-8 flex gap-8 ">
			<ProjectSidebar />
			<NewProject />
		</main>
	);
}
