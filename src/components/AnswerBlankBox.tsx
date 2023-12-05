import * as React from 'react';
import '../styles/AnswerBlankBox.css';

interface AnswerBlankBoxProps {
    text: string;
    setText: (text: string) => void;
}

const AnswerBlankBox: React.FC<AnswerBlankBoxProps> = (props) => {
    const [isFilled, setIsFilled] = React.useState(false);

    const handleDragOver = (event: React.DragEvent<HTMLSpanElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLSpanElement>) => {
        event.preventDefault();
        const english = event.dataTransfer.getData('text/plain');
        props.setText(english);
        setIsFilled(true);
    };

    return (
        <span className={isFilled ? "filled blank" : "blank"} onDragOver={handleDragOver} onDrop={handleDrop}>{props.text}</span>
    );
}

export default AnswerBlankBox;
