import * as React from 'react';
import '../styles/AnswerChoice.css';

interface ChoiceProps {
	english: string;
	translated: string;
	image_path: string;
	image_alt: string;
}

function AnswerChoice(props: ChoiceProps) {
	const dragStart = (event: React.DragEvent) => {
		event.dataTransfer.setData('text/plain', props.english);
	};

	const dragEnd = (event: React.DragEvent) => {
		event.stopPropagation();
	};

	return (
		<div className={"selection"} draggable={true} onDragStart={dragStart} onDragEnd={dragEnd}>
			<img className={"image"} draggable={false} src={props.image_path} alt={props.image_alt} />
			<p className={"english"}>{props.english}</p>
			<p className={"translation"}>{props.translated}</p>
		</div>
	);
}

export default AnswerChoice;
