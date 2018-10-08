import { webcomponentsReady } from '@codebakery/origami/polyfills';

webcomponentsReady()
  .then(() => {
    return import('./main');
  });
