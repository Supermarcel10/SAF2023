import * as React from 'react';
import '../styles/AnswerBlankBox.css';

interface AnswerBlankBoxProps {
    text: string | null;
    setText: (text: string) => void;
    expectedText: string | null;
    setCorrectAnswers: (correct: boolean) => void;
}

const AnswerBlankBox: React.FC<AnswerBlankBoxProps> = (props) => {
    const [isFilled, setIsFilled] = React.useState(false);
    const [isCorrect, setIsCorrect] = React.useState(false);

    const handleDragOver = (event: React.DragEvent<HTMLSpanElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLSpanElement>) => {
        event.preventDefault();
        const english = event.dataTransfer.getData('text/plain');
        props.setText(english);
        setIsFilled(true);
        if (english === props.expectedText) {
            setIsCorrect(true);
            props.setCorrectAnswers(true);
        } else {
            setIsCorrect(false);
            props.setCorrectAnswers(false);
        }
    };

    return (
        <span className={isFilled ? (isCorrect ? "filled blank correct" : "filled blank incorrect") : "blank"} onDragOver={handleDragOver} onDrop={handleDrop}>
      {props.text || "empty"}
    </span>
    );
}

export default AnswerBlankBox;