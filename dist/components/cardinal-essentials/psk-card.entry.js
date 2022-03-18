import { r as registerInstance, h, g as getElement } from './index-92b53308.js';
import { B as BindModel, C as CustomTheme, T as TableOfContentProperty } from './index-d9991986.js';

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
const PskCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.title = "";
    this.id = "";
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    let cardAttributes = {};
    const elementId = this.id.trim().replace(/(\s+|:+|\/+)/g, "-").toLowerCase();
    if (elementId) {
      cardAttributes['id'] = elementId;
    }
    let cardHeader = null;
    if (this.title) {
      cardHeader = (h("div", { class: "card-header" }, h("h5", null, this.title, elementId.length > 0 ? h("psk-copy-clipboard", { id: elementId }, "#") : null), h("slot", { name: "toolbar" })));
    }
    return (h("div", Object.assign({ class: "card psk-card" }, cardAttributes), cardHeader, h("div", { class: "card-body" }, h("slot", null))));
  }
  get htmlElement() { return getElement(this); }
};
__decorate([
  BindModel()
], PskCard.prototype, "modelHandler", void 0);
__decorate([
  CustomTheme(),
  TableOfContentProperty({
    description: `This property is the title that will be rendered in title specific format.`,
    isMandatory: false,
    propertyType: `string`
  })
], PskCard.prototype, "title", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property is the id which will be attached to the component so finding the component in the DOM should be simplified.
					The id is also simplifying the navigation to that section of the page where the component is rendered.
					Special characters(Example : ':','/') will be replaced with dash('-').`,
    isMandatory: false,
    propertyType: `string`
  })
], PskCard.prototype, "id", void 0);

export { PskCard as psk_card };
