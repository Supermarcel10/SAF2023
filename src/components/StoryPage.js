import * as React from 'react';
import '../styles/StoryPage.css';
import AnswerChoice from './AnswerChoice.tsx';
import Blank from "./AnswerBlankBox.tsx";

import houseIconImage from '../img/homeIcon.png';
import {Link} from "react-router-dom";

function StoryPage(props) {
	const { sentence, translation, answerChoices, goToNextPage, goToPreviousPage, isFirstPage, isLastPage } = props;
	const [allAnswersCorrect, setAllAnswersCorrect] = React.useState(false);

	const parseSentence = (sentence) => {
		const parts = sentence.split(/(\{.*?})|([.,?!;:])/).filter(Boolean);

		return parts.map((part, index) => {
			if (part.startsWith("{") && part.endsWith("}")) {
				return <Blank key={index} setCorrectAnswers={setCorrectAnswers} />;
			} else return part;
		});
	};

	const setCorrectAnswers = (correct) => {
		const newAllAnswersCorrect = answerChoices.every((choice) => choice.isCorrect) && correct;
		setAllAnswersCorrect(newAllAnswersCorrect);
	};

	return (
		<div className="storyPage">
			<div className={"sentenceContainer"}>
				<p id={"sentence"}>{parseSentence(sentence)}</p>
				<p id={"translation"}>{translation}</p>
			</div>
			<div className={"selector"}>
				{answerChoices.map((choice, index) => (
					<AnswerChoice key={index} {...choice} setCorrectAnswers={setCorrectAnswers} />
				))}
			</div>
			<div className={"navigation"}>
				<button
					className={`nav-button ${isFirstPage ? 'locked' : ''}`}
					id={"previous-button"}
					onClick={goToPreviousPage}
					disabled={isFirstPage}
				>
					&#8592;
				</button>
				<Link className={"houseContainer"} to="/MainMenu">
					<img className={"houseIconImage"} src={houseIconImage} alt="Home" />
				</Link>
				<button
					className={`nav-button ${isLastPage || !allAnswersCorrect ? 'locked' : ''}`}
					id={"next-button"}
					onClick={goToNextPage}
					disabled={isLastPage || !allAnswersCorrect}
				>
					&#8594;
				</button>
			</div>
		</div>
	);
}

// TODO: Fix the bug where the buttons for moving to next page are not working
// TODO: Fix error with dragging and dropping
// TODO: Remove backgrounds from images
// TODO: Validation of correct answers
// TODO: Scaling for mobile
// TODO: Video of the story
// TODO: Prep for presentation
// TODO: Host the website on something
export default StoryPage;
