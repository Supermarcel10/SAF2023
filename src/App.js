import './styles/App.css';
import AnswerChoice from './components/AnswerChoice.tsx'

import catImage from './img/cat.png';
import dogImage from './img/dog.png';

function App() {
  return (
    <div className="App">
      <div className={"sentenceContainer"}>
        <p id={"sentence"}>This is a story about a little <span className={"blank"}>cat</span>. This is a slightly longer story. That spans multiple lines.</p>
      </div>
      <div className={"selector"}>
        <AnswerChoice english={"cat"} translated={"pişik"} image_path={catImage} image_alt={"image of a cat"} />
        <AnswerChoice english={"dog"} translated={"it"} image_path={dogImage} image_alt={"image of a dog"} />
        <AnswerChoice english={"dog"} translated={"it"} image_path={dogImage} image_alt={"image of a dog"} />
        <AnswerChoice english={"dog"} translated={"it"} image_path={dogImage} image_alt={"image of a dog"} />
      </div>
      <div className={"navigation"}>
        <button className={"nav-button"} id={"previous-button"}>&#8592;</button>
        <button className={"nav-button"} id={"next-button"}>&#8594;</button>
      </div>
    </div>
  );
}

export default App;
