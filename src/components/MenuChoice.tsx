import * as React from 'react';
import '../styles/MenuChoice.css';

interface MenuChoiceProps {
	english: string;
	translated: string;
	image_path: string;
	image_alt: string;
	status: string;
	onClick: () => void;
}

function MenuChoice(props: MenuChoiceProps ) {
	const statusColor = props.status === 'locked' ? 'var(--red)' : 'var(--small-font-color)' ;
	return (
		
		<div className="selector"  onClick={props.onClick}>
			<div className="textContainer" style={{ backgroundColor: statusColor}}>
			<img className="image" src={props.image_path} alt={props.image_alt}/>
				<p className="english">{props.english}</p>
				<p className="translation">{props.translated}</p>
      		</div>
		</div>
	);
}

export default MenuChoice;