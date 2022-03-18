import { r as registerInstance, h, g as getElement } from './index-c014206a.js';
import { C as CustomTheme, T as TableOfContentProperty } from './index-8a7950ff.js';

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
const PskExample = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.title = "";
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    return (h("psk-chapter", { title: this.title }, h("div", { class: "example-content" }, h("slot", null))));
  }
  get htmlElement() { return getElement(this); }
};
__decorate([
  CustomTheme(),
  TableOfContentProperty({
    description: `The title of the component's example that will be used to create a psk-chapter.`,
    isMandatory: false,
    propertyType: `string`
  })
], PskExample.prototype, "title", void 0);

export { PskExample as psk_example };
