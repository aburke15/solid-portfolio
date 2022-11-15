import { Component } from 'solid-js';
import loading from '../assets/images/loading.gif';

const Loading: Component = () => {
  return (
    <div class="text-center justify-content-center">
      <img src={loading} alt="loading" height={75} width={75} />
    </div>
  );
};

export default Loading;
