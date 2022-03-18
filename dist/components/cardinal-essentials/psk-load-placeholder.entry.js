import { r as registerInstance, h, g as getElement } from './index-92b53308.js';
import { C as CustomTheme } from './index-d9991986.js';

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
const PskLoadPlaceholder = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.shouldBeRendered = false;
  }
  componentDidLoad() {
    setTimeout(() => {
      this.shouldBeRendered = true;
    }, 0);
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    if (this.shouldBeRendered) {
      return (h("slot", null));
    }
  }
  get htmlElement() { return getElement(this); }
};
__decorate([
  CustomTheme()
], PskLoadPlaceholder.prototype, "shouldBeRendered", void 0);

export { PskLoadPlaceholder as psk_load_placeholder };
