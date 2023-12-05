import * as React from 'react';
import '../styles/AnswerBlankBox.css';

const AnswerBlankBox: React.FC = () => {
    const [text, setText] = React.useState("");
    const [isFilled, setIsFilled] = React.useState(false);

    const handleDragOver = (event: React.DragEvent<HTMLSpanElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLSpanElement>) => {
        event.preventDefault();
        const english = event.dataTransfer.getData('text/plain');
        setText(english);
        setIsFilled(true);
    };

    return (
        <span className={isFilled ? "filled blank" : "blank"} onDragOver={handleDragOver} onDrop={handleDrop}>
            {text || "empty"}
        </span>
    );
}

export default AnswerBlankBox;
