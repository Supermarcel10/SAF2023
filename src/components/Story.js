import StoryPage from './StoryPage.js';

import catImage from '../img/cat.png';
import dogImage from '../img/dog.png';

function Story() {
  return (
    <div className="App">
      <StoryPage
        sentence="This is a story about a little {cat} and a {dog}."
        translation="Bu kiçik bir pişik və it haqqında hekayədir."
        answerChoices={[
          { english: "cat", translated: "pişik", image_path: catImage, image_alt: "image of a cat" },
          { english: "dog", translated: "it", image_path: dogImage, image_alt: "image of a dog" },
          { english: "dog", translated: "it", image_path: dogImage, image_alt: "image of a dog" },
          { english: "dog", translated: "it", image_path: dogImage, image_alt: "image of a dog" },
        ]}
      />
    </div>
  );
}

export default Story;