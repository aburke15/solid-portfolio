import { Component } from 'solid-js';

const Resume: Component = () => {
  return (
    <div id="resume" class="resume-section global-padding">
      <div class="container text-center">
        <div class="row">
          <h2>Resume</h2>
          <p class="b-underline"></p>
        </div>
        <div class="row global-margin justify-content-center">
          <iframe style={'height: 90vh'} src="https://res.aburke.tech"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Resume;
