import { r as registerInstance, h, f as Host, g as getElement } from './index-92b53308.js';
import { C as CustomTheme, T as TableOfContentProperty } from './index-d9991986.js';
import { a as applyStyles } from './psk-style.utils-d03eab88.js';
import { g as generateRule } from './psk-layout.utils-cfa9aa51.js';

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
const PskLayoutItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.column = null;
    this.columnStart = null;
    this.columnEnd = null;
    this.row = null;
    this.rowStart = null;
    this.rowEnd = null;
    this.align = null;
    this.alignX = null;
    this.alignY = null;
  }
  async componentWillLoad() {
    const styles = generateRule(':host', this.__getProperties());
    applyStyles(this.__host, styles);
  }
  __getProperties() {
    const properties = {};
    if (this.column)
      properties['grid-column'] = this.column;
    if (this.columnStart)
      properties['grid-column-start'] = this.columnStart;
    if (this.columnEnd)
      properties['grid-column-end'] = this.columnEnd;
    if (this.row)
      properties['grid-row'] = this.row;
    if (this.rowStart)
      properties['grid-row-start'] = this.rowStart;
    if (this.rowEnd)
      properties['grid-row-end'] = this.rowEnd;
    if (this.align)
      properties['place-self'] = this.align;
    if (this.alignX)
      properties['justify-self'] = this.alignX;
    if (this.alignY)
      properties['align-self'] = this.alignY;
    return properties;
  }
  render() {
    if (!this.__host.isConnected)
      return null;
    return (h(Host, null, h("slot", null)));
  }
  get __host() { return getElement(this); }
};
__decorate([
  CustomTheme()
], PskLayoutItem.prototype, "__host", void 0);
__decorate([
  TableOfContentProperty({
    description: '',
    isMandatory: false,
    propertyType: `string`
  })
], PskLayoutItem.prototype, "column", void 0);
__decorate([
  TableOfContentProperty({
    description: '',
    isMandatory: false,
    propertyType: `string`
  })
], PskLayoutItem.prototype, "columnStart", void 0);
__decorate([
  TableOfContentProperty({
    description: '',
    isMandatory: false,
    propertyType: `string`
  })
], PskLayoutItem.prototype, "columnEnd", void 0);
__decorate([
  TableOfContentProperty({
    description: '',
    isMandatory: false,
    propertyType: `string`
  })
], PskLayoutItem.prototype, "row", void 0);
__decorate([
  TableOfContentProperty({
    description: '',
    isMandatory: false,
    propertyType: `string`
  })
], PskLayoutItem.prototype, "rowStart", void 0);
__decorate([
  TableOfContentProperty({
    description: '',
    isMandatory: false,
    propertyType: `string`
  })
], PskLayoutItem.prototype, "rowEnd", void 0);
__decorate([
  TableOfContentProperty({
    description: [
      `Equivalent to <em>place-self</em>.`
    ],
    isMandatory: false,
    propertyType: `string`
  })
], PskLayoutItem.prototype, "align", void 0);
__decorate([
  TableOfContentProperty({
    description: [
      `Equivalent to <em>justify-self</em>.`
    ],
    isMandatory: false,
    propertyType: `string`
  })
], PskLayoutItem.prototype, "alignX", void 0);
__decorate([
  TableOfContentProperty({
    description: [
      `Equivalent to <em>align-self</em>.`
    ],
    isMandatory: false,
    propertyType: `string`
  })
], PskLayoutItem.prototype, "alignY", void 0);

export { PskLayoutItem as psk_layout_item };
