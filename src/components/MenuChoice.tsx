import * as React from 'react';
import '../styles/MenuChoice.css';

interface MenuChoiceProps {
	english: string;
	translated: string;
	image_path: string;
	image_alt: string;
	status: string;
}

function MenuChoice(props: MenuChoiceProps ) {
	const statusColor = props.status === 'locked' ? 'var(--red)' : 'var(--green)' ;
	const statusLink = props.status === 'locked' ? "#" : "\story" ;
	return (
		<div className="selector">
			<div className="textContainer" style={{ backgroundColor: statusColor}}>
			<a href={statusLink} className="link" style={{ textDecoration: 'none' }}>
				<img className="image" src={props.image_path} alt={props.image_alt}/>
				<p className="english">{props.english}</p>
				<p className="translation">{props.translated}</p></a>
			</div>
		</div>
	);
}

export default MenuChoice;