import './styles/App.css';
import Choice from './components/Choice.tsx'

import catImage from './img/cat.png';
import dogImage from './img/dog.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={"sentenceContainer"}>
          <p id={"sentence"}>This is a <span className={"blank"}>story</span> about a little cat. This is a slightly longer story. That spans multiple lines.</p>
        </div>
        <div className={"selector"}>
          <Choice english={"cat"} translated={"pişik"} image_path={catImage} image_alt={"image of a cat"} />
          <Choice english={"dog"} translated={"it"} image_path={dogImage} image_alt={"image of a dog"} />
          <Choice english={"dog"} translated={"it"} image_path={dogImage} image_alt={"image of a dog"} />
          <Choice english={"dog"} translated={"it"} image_path={dogImage} image_alt={"image of a dog"} />
        </div>
        <div className={"navigation"}>
          <button className={"nav-button"} id={"previous-button"}>&#8592;</button>
          <button className={"nav-button"} id={"next-button"}>&#8594;</button>
        </div>
      </header>
    </div>
  );
}

export default App;
