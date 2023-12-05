import React, { useState } from 'react';
import StoryPage from './StoryPage';

import catImage from '../img/cat.png'
import dogImage from '../img/dog.png'

const StoryBook = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const storyPages = [
    {
      sentence: "This is a story about a little {cat} and a {dog}.",
      translation: "Bu kiçik bir pişik və it haqqında hekayədir.",
      answerChoices: [
        { english: "cat", translated: "pişik", image_path: catImage, image_alt: "image of a cat" }
      ]
    },
    {
      sentence: "Another page about a {mouse} and a {cheese}.",
      translation: "Bu bir siçan və pendir haqqında başqa bir səhifədir.",
      answerChoices: [
        { english: "dog", translated: "siçan", image_path: dogImage, image_alt: "image of a mouse" },
      ]
    },
    // ... more pages ...
  ];

  const goToNextPage = () => {
    // TODO: Make a validation of correct answers
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
      {...storyPages[currentPage]}
      goToNextPage={goToNextPage}
      goToPreviousPage={goToPreviousPage}
      isLastPage={currentPage === storyPages.length - 1}
      isFirstPage={currentPage === 0}
    />
  );
};

export default StoryBook;
