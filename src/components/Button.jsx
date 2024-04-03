import React from 'react';

export default function Button({ children, isCenter = false, ...props }) {
	const center = isCenter ? ' m-auto' : '';
	const classes =
		'px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 w-max' +
		center;
	return (
		<div className={classes} {...props}>
			<button>{children}</button>
		</div>
	);
}
