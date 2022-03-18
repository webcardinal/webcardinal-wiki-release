import { s as setMode } from './index-3f4eb3b9.js';

const appGlobalScript = () => setMode(element => {
  return element.mode || element.getAttribute('mode') || 'default';
});

export { appGlobalScript as a };
