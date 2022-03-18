import { r as registerInstance, h, f as Host } from './index-92b53308.js';
import { C as CustomTheme, T as TableOfContentProperty } from './index-d9991986.js';

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
const PskTab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { hidden: true }, h("slot", null)));
  }
};
__decorate([
  CustomTheme(),
  TableOfContentProperty({
    description: [
      `This property is used as the tab title.`,
      `psk-tab-navigator will use this title in order to generate the control area.`
    ],
    isMandatory: true,
    propertyType: `string`
  })
], PskTab.prototype, "title", void 0);

export { PskTab as psk_tab };
