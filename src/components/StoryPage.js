import * as React from 'react';
import '../styles/StoryPage.css';
import AnswerChoice from './AnswerChoice.tsx';
import Blank from "./AnswerBlankBox.tsx";
import MainMenu from "./MainMenu";

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

// TODO: Button to go back to main menu.
// TODO: Icons
// TODO: Validation of correct answers
export default StoryPage;
