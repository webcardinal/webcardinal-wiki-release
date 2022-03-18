import { r as registerInstance, h, f as Host } from './index-3f4eb3b9.js';
import { H as HostElement } from './index-a0faa9cd.js';

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
const WebcSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, this.condition === 'default' ? h("slot", null) : h("slot", { name: this.condition })));
  }
};
__decorate([
  HostElement()
], WebcSwitch.prototype, "host", void 0);

export { WebcSwitch as webc_switch };
