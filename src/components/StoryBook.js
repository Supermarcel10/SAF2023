import React, { useState } from 'react';
import StoryPage from './StoryPage';

import catImage from '../img/cat.png'
import dogImage from '../img/dog.png'
import birdImage from '../img/bird.png'
import sunImage from '../img/sun.png'
import appleImage from '../img/apple.png'
import skyImage from '../img/sky.png'
import groundImage from '../img/ground.png'
import waterImage from '../img/water.png'
import flowersImage from '../img/flowers.png'
import treesImage from '../img/trees.png'
import bushesImage from '../img/bushes.png'
import parkImage from '../img/park.png'
import bananaImage from '../img/banana.png'
import umbrellaImage from '../img/umbrella.png'
import houseImage from '../img/house.png'
import penguinImage from '../img/penguin.png'
import clockImage from '../img/clock.png'
import smokeImage from '../img/smoke.png'
import teapotImage from '../img/teapot.png'
import bookImage from '../img/book.png'
import pathImage from '../img/path.png'
import sunglassesImage from '../img/sunglasses.png'
import cakeImage from '../img/cake.png'

import flowerBackgroundImage from '../img/scenery/flowerBackground.png'
import houseDistanceImage from '../img/scenery/houseBackground.png'
import parkBackgroundImage from '../img/scenery/parkBackground.png'
import pondBackgroundImage from '../img/scenery/pondBackground.webp'
import catBackgroundImage from '../img/scenery/catBackground.png'

const StoryBook = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const storyPages = [
    {
      sentence: "Coco is a small, playful {cat}.",
      translation: "Coco kiçik, oyunçu bir pişikdir.",
      background_image: catBackgroundImage,
      answerChoices: [
        { english: "cat", translated: "pişik", image_path: catImage, image_alt: "image of a cat"},
      ]
    },
      {
        sentence: "She finds a bright, red {bird}.",
        translation: "O parlaq, qırmızı bir quş tapır.",
        background_image: parkBackgroundImage,
        answerChoices: [
          { english: "bird", translated: "quş", image_path: birdImage, image_alt: "image of a bird" },
          { english: "dog", translated: "siçan", image_path: dogImage, image_alt: "image of a dog" }
        ]
      },
      {
        sentence: "The {sun} is warm and bright.",
        translation: "Günəş isti və parlaqdır.",
        background_image: flowerBackgroundImage,
        answerChoices: [
          { english: "sun", translated: "günəş", image_path: sunImage, image_alt: "image of the sun" },
          { english: "apple", translated: "alma", image_path: appleImage, image_alt: "image of an apple" },
        ]
      },
      {
        sentence: "The bird flies up into the {sky}.",
        translation: "Quş göyə uçur.",
        background_image: flowerBackgroundImage,
        answerChoices: [
          { english: "sky", translated: "göy", image_path: skyImage, image_alt: "image of the sky" },
          { english: "ground", translated: "yer", image_path: groundImage, image_alt: "image of the ground" },
          { english: "water", translated: "su", image_path: waterImage, image_alt: "image of the water" }
        ]
      },
      {
        sentence: "Coco jumps over {flowers}.",
        translation: "Coco gülər üzərindən atlayır.",
        background_image: flowerBackgroundImage,
        answerChoices: [
          { english: "flowers", translated: "gül", image_path: flowersImage, image_alt: "image of flowers" },
          { english: "trees", translated: "ağaclar", image_path: treesImage, image_alt: "image of trees" }
        ]
      },
      {
        sentence: "She wanders past {trees} and bushes.",
        translation: "O ağaclar və çalılar üzərindən gezir.",
        background_image: parkBackgroundImage,
        answerChoices: [
          { english: "trees", translated: "ağaclar", image_path: treesImage, image_alt: "image of trees" },
          { english: "bushes", translated: "çalılar", image_path: bushesImage, image_alt: "image of bushes" },
          { english: "dog", translated: "siçan", image_path: dogImage, image_alt: "image of a dog" }
        ]
      },
      {
        sentence: "Coco feels lost in the {park}.",
        translation: "Coco parkda itirilib.",
        background_image: pondBackgroundImage,
        answerChoices: [
          { english: "park", translated: "park", image_path: parkImage, image_alt: "image of the park" },
          { english: "banana", translated: "muz", image_path: bananaImage, image_alt: "image of a banana" },
          { english: "umbrella", translated: "şəmsiyyə", image_path: umbrellaImage, image_alt: "image of an umbrella" }
        ]
      },
      {
        sentence: "She looks for her cozy {house}.",
        translation: "O rahat evini axtarır.",
        background_image: houseDistanceImage,
        answerChoices: [
          { english: "house", translated: "ev", image_path: houseImage, image_alt: "image of a house" },
          { english: "penguin", translated: "penqvin", image_path: penguinImage, image_alt: "image of a penguin" },
          { english: "clock", translated: "saat", image_path: clockImage, image_alt: "image of a clock" }
        ]
      },
    {
      sentence: "Coco sees the {smoke} in the distance.",
      translation: "Coco uzaqda duman görür.",
      background_image: houseDistanceImage,
      answerChoices: [
        { english: "smoke", translated: "duman", image_path: smokeImage, image_alt: "image of smoke" },
        { english: "teapot", translated: "çaydan", image_path: teapotImage, image_alt: "image of a teapot" },
        { english: "book", translated: "kitab", image_path: bookImage, image_alt: "image of a book" }
      ]
    },
    {
      sentence: "She walks back on the {path}.",
      translation: "O geri dönür.",
      background_image: houseDistanceImage,
      answerChoices: [
        { english: "path", translated: "yol", image_path: pathImage, image_alt: "image of a path" },
        { english: "sunglasses", translated: "günəş eynəyi", image_path: sunglassesImage, image_alt: "image of sunglasses" },
        { english: "cake", translated: "tort", image_path: cakeImage, image_alt: "image of a cake" },
        { english: "book", translated: "kitab", image_path: bookImage, image_alt: "image of a book" }
      ]
    },
    {
      sentence: "Coco is happy to be home.",
      translation: "Coco evdə olmaqdan xoşbəxt olur.",
      background_image: houseDistanceImage,
      answerChoices: []
    }
  ];

  const goToNextPage = () => {
    if (currentPage < storyPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <StoryPage
      key={currentPage}
      {...storyPages[currentPage]}
      goToNextPage={goToNextPage}
      goToPreviousPage={goToPreviousPage}
      isLastPage={currentPage === storyPages.length - 1}
      isFirstPage={currentPage === 0}
    />

  );
};

export default StoryBook;
