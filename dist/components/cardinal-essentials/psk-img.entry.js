import { r as registerInstance, h, g as getElement } from './index-92b53308.js';
import { C as CustomTheme, B as BindModel, T as TableOfContentProperty } from './index-d9991986.js';

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
const PskImg = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    let imgTagAttributes = {
      src: this.src,
      alt: this.title
    };
    if (this.height) {
      imgTagAttributes['height'] = this.height;
    }
    if (this.width) {
      imgTagAttributes['width'] = this.width;
    }
    return (h("div", { class: "image_container" }, h("div", { class: "image_wrapper" }, h("img", Object.assign({}, imgTagAttributes))), this.title ? h("div", { class: "image_description" }, this.title) : null));
  }
  get htmlElement() { return getElement(this); }
};
__decorate([
  CustomTheme(),
  BindModel()
], PskImg.prototype, "modelHandler", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property is the path to the image source (Example:"page/PrivateSky/EDFS.png").`,
    isMandatory: true,
    propertyType: `string`
  })
], PskImg.prototype, "src", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property is setting the width of the image. The value should be an integer specifying the units in pixels`,
    isMandatory: false,
    propertyType: `string`,
  })
], PskImg.prototype, "width", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property is setting the height of the image. The value should be an integer specifying the units in pixels`,
    isMandatory: false,
    propertyType: `string`,
  })
], PskImg.prototype, "height", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property is the title of the image(the alt attribute) and the description of the image.`,
    isMandatory: false,
    propertyType: `string`,
    specialNote: `If no title is given,there will not be assumed one and there will be no image description/alt.`
  })
], PskImg.prototype, "title", void 0);

export { PskImg as psk_img };
