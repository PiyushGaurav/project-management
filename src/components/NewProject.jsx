import React, { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAdd, onCancel }) {
	const modal = useRef();

	const titleRef = useRef();
	const descRef = useRef();
	const dueRef = useRef();

	function handleSave() {
		const title = titleRef.current.value;
		const description = descRef.current.value;
		const dueDate = dueRef.current.value;

		if (title.trim() == '' || description.trim() == '' || dueDate.trim() == '') {
			modal.current.open();
			return;
		}
		//validation....
		onAdd({ title, description, dueDate });
	}

	return (
		<>
			<Modal ref={modal} buttonCaption={'Close'}>
				<h2 className="text-xl font-bold text-stone-500 my-4 text-center">Invalid Input</h2>
				<p className="text-stone-600 text-center">Oops... looks like you forgot to enter a value.</p>
				<p className="text-stone-600 mb-4 text-center">Please make sure you provide a valid value for every field.</p>
			</Modal>
			<div className="w-[35rem] mt-16">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
							Cancel
						</button>
					</li>
					<li>
						<button className="px-6 py-2 bg-stone-800 rounded-md text-stone-50 hover:bg-stone-950" onClick={handleSave}>
							Save
						</button>
					</li>
				</menu>
				<div>
					<Input type="text" ref={titleRef} label={'Title'} />
					<Input ref={descRef} label={'Description'} textarea={true} />
					<Input type="date" ref={dueRef} label={'Due Date'} />
				</div>
			</div>
		</>
	);
}
