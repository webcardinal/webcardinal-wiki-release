import { r as registerInstance } from './index-3f4eb3b9.js';
import { H as HostElement } from './index-a0faa9cd.js';
import './active-router-0c3af58b.js';
import { i as injectHistory } from './index-704a6ae4.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const WebcAppRedirect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Redirects to the specified URL.
     */
    this.url = '';
  }
  componentWillLoad() {
    if (this.url) {
      this.history.push(this.url, {});
    }
    else {
      console.warn('Url was not provided!\n', this.host);
    }
  }
};
__decorate([
  HostElement()
], WebcAppRedirect.prototype, "host", void 0);
injectHistory(WebcAppRedirect);

export { WebcAppRedirect as webc_app_redirect };
