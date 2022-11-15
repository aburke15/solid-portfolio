import { Component } from 'solid-js';

import linkedIn from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import youtube from '../assets/images/youtube.png';

const Contact: Component = () => {
  return (
    <div id="contact" class="contact-section global-padding">
      <div class="container text-center">
        <div class="row contact-margin contact-top-row">
          <h5>
            <a class="contact-email" href="mailto:aburke.dev@gmail.com" rel="noopener" target="_top">
              <i class="bi bi-envelope"></i> aburke.dev@gmail.com
            </a>
          </h5>
        </div>
        <div>
          <a
            class="contact-icon-space"
            href="https://www.linkedin.com/in/aburke15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} alt="LinkedIn logo" height={50} width={50} />
          </a>
          <a class="contact-icon-space" href="https://github.com/aburke15" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub logo" height={50} width={50} />
          </a>
          <a
            class="contact-icon-space"
            href="https://www.youtube.com/channel/UCczcmJfcsvhmW-65r1RuZ4w/featured?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="YouTube logo" height={50} width={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
