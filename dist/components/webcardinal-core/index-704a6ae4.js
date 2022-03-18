import { A as ActiveRouter } from './active-router-0c3af58b.js';
import './match-path-760e1797.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}

export { injectHistory as i };
