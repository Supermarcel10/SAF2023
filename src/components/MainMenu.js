import '../styles/MainMenu.css'
import MenuChoice from '../components/MenuChoice.tsx'

import catImage from '../img/cat.png';
import dogImage from '../img/dog.png';
import horseImage from '../img/horse.png';
import beeImage from '../img/bee.png';
import frogImage from '../img/frog.png';

function MainMenu() {
    return (
      <div className = "MainMenu">
          <header className="App-header">
            <div className={"sentenceContainer"}>
              <p id={"title"}>Felines & Fables</p>
            </div>
            <div>
              <p id={"sentence"}>Select a story:</p>
            </div>
            <div className={"selector"}>
              <MenuChoice english={"Coco The Curious Cat"} translated={"Coco Maraqlı Pişik"} image_path={catImage} image_alt={"image of a cat"} />
              <MenuChoice english={"Daisy's Digging Day"} translated={"Daisy'nin Qazma Günü"} image_path={dogImage} image_alt={"image of a dog"} />
              <MenuChoice english={"Cinnamon's Wild Ride"} translated={"Darçın Vəhşi Sürüş"} image_path={horseImage} image_alt={"image of a horse"} />
              <MenuChoice english={"Happy Honey Harvest"} translated={"Xoşbəxt Bal Məhsulu"} image_path={beeImage} image_alt={"image of a bee"} />
              <MenuChoice english={"Frog finds a friend"} translated={"Qurbağa dost tapır"} image_path={frogImage} image_alt={"image of a frog"} />
            </div>
          </header>
      </div>
    );
  }

  export default MainMenu;