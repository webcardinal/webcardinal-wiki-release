import { r as registerInstance, h, g as getElement } from './index-c014206a.js';
import { T as TableOfContentProperty } from './index-8a7950ff.js';

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
const PskDescription = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.title = "";
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    const descriptionBody = (h("div", { class: "psk-description" }, h("slot", null)));
    if (this.title.replace(/\s/g, '') === '') {
      return (h("psk-card", null, descriptionBody));
    }
    return (h("psk-chapter", { title: this.title }, descriptionBody));
  }
  get htmlElement() { return getElement(this); }
};
__decorate([
  TableOfContentProperty({
    description: `This property is the title of the new psk-card/psk-chapter that will be created.`,
    isMandatory: false,
    propertyType: `string`,
    specialNote: `All the empty spaces in the title will be deleted.`
  })
], PskDescription.prototype, "title", void 0);

export { PskDescription as psk_description };
