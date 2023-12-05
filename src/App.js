import './App.css';
import Choice from "./Choice";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p id={"sentence"}>This is a story about a little <span className={"important"}>cat</span>.</p>
        </div>
        <div>
          {/*<Choice image_path={""} image_alt={""} />*/}
        </div>
        <div>
          <button className={"nav-button"} id={"previous-button"}>&#8592;</button>
          <button className={"nav-button"} id={"next-button"}>&#8594;</button>
        </div>
      </header>
    </div>
  );
}

export default App;
