import { Component } from 'solid-js';

import src from '../assets/images/me.png';

const Bio: Component = () => {
  return (
    <div id="about" class="bio-section global-padding">
      <div class="container text-center">
        <div class="row">
          <h2>About Me</h2>
          <p class="b-underline"></p>
        </div>
        <div class="global-margin">
          <div class="justify-content-center">
            <img class="img-responsive bio-pic" src={src} alt={'this is Andre Burke'} />
          </div>
          <div class="row justify-content-center mt-3">
            <p class="col-md-8">
              I am a die hard tech enthusiast with a passion for learning. I have worked in the tech industry for over 5
              years and have a solid background in software development. Although I have experience in both front and
              back end development, I am currently specialized in back end development. My goal is to build top quality
              software that is easy to use and easy to maintain. I hope to accomplish this by keeping up with tested
              architecture/development practices and the latest technologies. Please visit my links below to see my work
              and social profiles. I would love to connect with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
