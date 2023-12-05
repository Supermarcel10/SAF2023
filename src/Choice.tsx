import * as React from 'react';
import { ReactElement, ReactNode, ReactPortal } from 'react';

interface ChoiceProps {
	english: string;
	translated: string;
	image_path: string;
	image_alt: string;
}

const Choice: React.FC<ChoiceProps> = (props: { english: string | number | boolean | ReactElement | Iterable<ReactNode> | ReactPortal; translated: string | number | boolean | ReactElement | Iterable<ReactNode> | ReactPortal; image_path: string; image_alt: string; }) => {
	return (
		<div>
			<h2>{props.english}</h2>
			<h3>{props.translated}</h3>
			<img src={props.image_path} alt={props.image_alt} />
		</div>
	);
}

export default Choice;