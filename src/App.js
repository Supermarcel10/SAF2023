import './App.css';
import Choice from "./components/Choice";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p id={"sentence"}>This is a <span className={"blank"}>story</span> about a little <span className={"important"}>cat</span>.</p>
        </div>
        <div>
          {/*<Choice english={"Cat"} translated={"pişik"} image_path={"src/img/ball.png"} image_alt={"cat"} />*/}
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
