import * as React from 'react';
import '../styles/Choice.css';

interface ChoiceProps {
	english: string;
	translated: string;
	image_path: string;
	image_alt: string;
}

function Choice(props: ChoiceProps) {
	return (
		<div className={"selector"}>
			<img className={"image"} src={props.image_path} alt={props.image_alt} />
			<p className={"english"}>{props.english}</p>
			<p className={"translation"}>{props.translated}</p>
		</div>
	);
}

export default Choice;