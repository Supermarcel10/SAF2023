import * as React from 'react';
import '../styles/MenuChoice.css';

interface MenuChoiceProps {
	english: string;
	translated: string;
	image_path: string;
	image_alt: string;
}

function MenuChoice(props: MenuChoiceProps) {
	return (
		<div className="selector">
			<img className="image" src={props.image_path} alt={props.image_alt} />
			<p className="english">{props.english}</p>
			<p className={"translation"}>{props.translated}</p>
		</div>
	);
}

export default MenuChoice;