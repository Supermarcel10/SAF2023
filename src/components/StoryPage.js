import * as React from 'react';
import '../styles/StoryPage.css';
import AnswerChoice from './AnswerChoice.tsx';
import Blank from "./AnswerBlankBox.tsx";

import houseIconImage from '../img/homeIcon.png';
import {Link} from "react-router-dom";

function StoryPage(props) {
	const { sentence, translation, answerChoices, goToNextPage, goToPreviousPage, isFirstPage, isLastPage } = props;
	const [blankTexts, setBlankTexts] = React.useState(Array(answerChoices.length).fill(null));
	const [resetKey, setResetKey] = React.useState(0); // Add this line
	const [allAnswersCorrect, setAllAnswersCorrect] = React.useState(true);

	const handleGoToNextPage = () => {
		if (allAnswersCorrect) {
			goToNextPage();
			setBlankTexts(Array(answerChoices.length).fill(null));
			setResetKey(prevKey => prevKey + 1); // Add this line
		}
	};

	const parseSentence = (sentence) => {
		const parts = sentence.split(/(\{.*?})|([.,?!;:])/).filter(Boolean);

		return parts.map((part, index) => {
			if (part.startsWith("{") && part.endsWith("}")) {
				return <Blank key={resetKey} text={blankTexts[index]} setText={(text) => { // Modify this line
					const newBlankTexts = [...blankTexts];
					newBlankTexts[index] = text;
					setBlankTexts(newBlankTexts);
				}} expectedText={part.substring(1, part.length - 1)} setCorrectAnswers={setCorrectAnswers} />;
			} else return part;
		});
	};

	const setCorrectAnswers = (correct) => {
		const newAllAnswersCorrect = answerChoices.every((choice) => choice.isCorrect) && correct;
		setAllAnswersCorrect(newAllAnswersCorrect);
	};

	return (
		<div className="storyPage" style={props.background_image ? {
			background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props.background_image})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		} : {}}>
			<div className={`sentenceContainer ${props.background_image ? 'white-font-color' : ''}`}>
				<p id={props.background_image ? "sentence-white" : "sentence"}>
					{parseSentence(sentence)}
				</p>
				<p id={props.background_image ? "translation-white" : "translation"}>
					{translation}
				</p>
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
				<Link className={"houseContainer"} to="/">
					<img className={"houseIconImage"} src={houseIconImage} alt="Home" />
				</Link>
				<button
					className={`nav-button ${isLastPage || !allAnswersCorrect ? 'locked' : ''}`}
					id={"next-button"}
					onClick={handleGoToNextPage}
					disabled={isLastPage || !allAnswersCorrect}
				>
					&#8594;
				</button>
			</div>
		</div>
	);
}

// TODO: Add backgrounds to puzzles
// TODO: Video of the story
// TODO: Prep for presentation

// Optional
// TODO: Scaling for mobile
// TODO: Host the website on something
// TODO: Remove backgrounds from images

// Not happening
// TODO: Validation of correct answers
export default StoryPage;
