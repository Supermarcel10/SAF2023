import '../styles/MainMenu.css'
import MenuChoice from '../components/MenuChoice.tsx'
import React from 'react'

import catImage from '../img/cat.png';
import dogImage from '../img/dog.png';
import horseImage from '../img/horse.png';
import beeImage from '../img/bee.png';
import frogImage from '../img/frog.png';
import logo from '../img/logo.png';

// const LazyApp = React.lazy(() => import('../App.js'));

function ImageClickLoader() {
  const handleMenuChoiceClick = () => {
  // Dynamically load App component
  // LazyApp.preload();

  // Your logic for handling the click event goes here
  console.log('MenuChoice clicked!');}}

function MainMenu() {
    return (
      <div className = "MainMenu">
          <header className="App-header">
          <div>
            <img className="logoImage" src={logo} alt = "Logo image"></img>
          </div>
            <div className={"sentenceContainer"}>
              <p id={"title"}>Felines & Fables</p>
            </div>
            <div>
              <p id={"sentence"}>Select a story:</p>
            </div>
            <div> <p id = {"Sentence"}> Coins: 0</p></div>
            <div className={"selector"}>
              <MenuChoice english={"Coco The Curious Cat"} translated={"Coco Maraqlı Pişik"} image_path={catImage} image_alt={"image of a cat"} onClick={ImageClickLoader}/>
              <MenuChoice english={"Daisy's Digging Day"} translated={"Daisy'nin Qazma Günü"} image_path={dogImage} image_alt={"image of a dog"} status = "locked" />
              <MenuChoice english={"Cinnamon's Wild Ride"} translated={"Darçın Vəhşi Sürüş"} image_path={horseImage} image_alt={"image of a horse"} status = "locked"/>
              <MenuChoice english={"Frog finds a friend"} translated={"Qurbağa dost tapır"} image_path={frogImage} image_alt={"image of a frog"} status = "locked"/>
            </div>
          </header>
      </div>
    );
  }

  export default MainMenu;