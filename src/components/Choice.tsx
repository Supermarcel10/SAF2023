import * as React from 'react';

interface ChoiceProps {
	english: string;
	translated: string;
	image_path: string;
	image_alt: string;
}

function Choice(props: ChoiceProps) {
	return (
		<div>
			<h2>{props.english}</h2>
			<h3>{props.translated}</h3>
			<img src={props.image_path} alt={props.image_alt} />
		</div>
	);
}

export default Choice;