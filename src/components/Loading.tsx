import { Component } from 'solid-js';
import loading from '../assets/images/loading.gif';

const Loading: Component = () => {
  return (
    <div class="text-center justify-content-center">
      <img class="img-responsive" src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
