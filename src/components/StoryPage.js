import * as React from 'react';
import '../styles/StoryPage.css';
import AnswerChoice from './AnswerChoice.tsx'
import Blank from "./AnswerBlankBox.tsx";

function StoryPage(props) {
	const { sentence, translation, answerChoices } = props;

	const parseSentence = (sentence) => {
		// Split the sentence into parts, including blanks and punctuation
		const parts = sentence.split(/(\{.*?})|([.,?!;:])/).filter(Boolean);

		return parts.map((part, index) => {
			if (part.startsWith("{") && part.endsWith("}")) {
				return <Blank key={index} />;
			} else return /^[.,?!;:]$/.test(part) ? part : `${part} `;
		});
	};


	return (
		<div className="storyPage">
			<div className={"sentenceContainer"}>
				<p id={"sentence"}>{parseSentence(sentence)}</p>
				<p id={"translation"}>{translation}</p>
			</div>
			<div className={"selector"}>
				{answerChoices.map((choice, index) => (
					<AnswerChoice key={index} {...choice} />
				))}
			</div>
			<div className={"navigation"}>
				<button className={"nav-button"} id={"previous-button"}>&#8592;</button>
				<button className={"nav-button"} id={"next-button"}>&#8594;</button>
			</div>
		</div>
	);
}

export default StoryPage;
