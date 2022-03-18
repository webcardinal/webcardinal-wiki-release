import { r as registerInstance, h, g as getElement } from './index-92b53308.js';
import { C as CustomTheme, B as BindModel, T as TableOfContentProperty } from './index-d9991986.js';

const pskProgressCss = ".overTheProgress{position:absolute;color:white;padding-left:5px}progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-size:auto;height:25px}.psk-progress label{margin-bottom:0}.psk-card .card-body div.psk-progress,.psk-card .card-body div.psk-progress .psk-card .card-body div{padding-top:0}progress.aliceblue::-webkit-progress-value{background-color:aliceblue}progress.antiquewhite::-webkit-progress-value{background-color:antiquewhite}progress.aqua::-webkit-progress-value{background-color:aqua}progress.aquamarine::-webkit-progress-value{background-color:aquamarine}progress.azure::-webkit-progress-value{background-color:azure}progress.beige::-webkit-progress-value{background-color:beige}progress.bisque::-webkit-progress-value{background-color:bisque}progress.black::-webkit-progress-value{background-color:black}progress.blanchedalmond::-webkit-progress-value{background-color:blanchedalmond}progress.blue::-webkit-progress-value{background-color:blue}progress.blueviolet::-webkit-progress-value{background-color:blueviolet}progress.brown::-webkit-progress-value{background-color:brown}progress.burlywood::-webkit-progress-value{background-color:burlywood}progress.cadetblue::-webkit-progress-value{background-color:cadetblue}progress.chartreuse::-webkit-progress-value{background-color:chartreuse}progress.chocolate::-webkit-progress-value{background-color:chocolate}progress.coral::-webkit-progress-value{background-color:coral}progress.cornflowerblue::-webkit-progress-value{background-color:cornflowerblue}progress.cornsilk::-webkit-progress-value{background-color:cornsilk}progress.crimson::-webkit-progress-value{background-color:crimson}progress.cyan::-webkit-progress-value{background-color:cyan}progress.darkblue::-webkit-progress-value{background-color:darkblue}progress.darkcyan::-webkit-progress-value{background-color:darkcyan}progress.darkgoldenrod::-webkit-progress-value{background-color:darkgoldenrod}progress.darkgray::-webkit-progress-value{background-color:darkgray}progress.darkgrey::-webkit-progress-value{background-color:darkgrey}progress.darkgreen::-webkit-progress-value{background-color:darkgreen}progress.darkkhaki::-webkit-progress-value{background-color:darkkhaki}progress.darkmagenta::-webkit-progress-value{background-color:darkmagenta}progress.darkolivegreen::-webkit-progress-value{background-color:darkolivegreen}progress.darkorange::-webkit-progress-value{background-color:darkorange}progress.darkorchid::-webkit-progress-value{background-color:darkorchid}progress.darkred::-webkit-progress-value{background-color:darkred}progress.darksalmon::-webkit-progress-value{background-color:darksalmon}progress.darkseagreen::-webkit-progress-value{background-color:darkseagreen}progress.darkslateblue::-webkit-progress-value{background-color:darkslateblue}progress.darkslategray::-webkit-progress-value{background-color:darkslategray}progress.darkslategrey::-webkit-progress-value{background-color:darkslategrey}progress.darkturquoise::-webkit-progress-value{background-color:darkturquoise}progress.darkviolet::-webkit-progress-value{background-color:darkviolet}progress.deeppink::-webkit-progress-value{background-color:deeppink}progress.deepskyblue::-webkit-progress-value{background-color:deepskyblue}progress.dimgray::-webkit-progress-value{background-color:dimgray}progress.dimgrey::-webkit-progress-value{background-color:dimgrey}progress.dodgerblue::-webkit-progress-value{background-color:dodgerblue}progress.firebrick::-webkit-progress-value{background-color:firebrick}progress.floralwhite::-webkit-progress-value{background-color:floralwhite}progress.forestgreen::-webkit-progress-value{background-color:forestgreen}progress.fuchsia::-webkit-progress-value{background-color:fuchsia}progress.gainsboro::-webkit-progress-value{background-color:gainsboro}progress.ghostwhite::-webkit-progress-value{background-color:ghostwhite}progress.gold::-webkit-progress-value{background-color:gold}progress.goldenrod::-webkit-progress-value{background-color:goldenrod}progress.gray::-webkit-progress-value{background-color:gray}progress.grey::-webkit-progress-value{background-color:grey}progress.green::-webkit-progress-value{background-color:green}progress.greenyellow::-webkit-progress-value{background-color:greenyellow}progress.honeydew::-webkit-progress-value{background-color:honeydew}progress.hotpink::-webkit-progress-value{background-color:hotpink}progress.indianred::-webkit-progress-value{background-color:indianred}progress.indigo::-webkit-progress-value{background-color:indigo}progress.ivory::-webkit-progress-value{background-color:ivory}progress.khaki::-webkit-progress-value{background-color:khaki}progress.lavender::-webkit-progress-value{background-color:lavender}progress.lavenderblush::-webkit-progress-value{background-color:lavenderblush}progress.lawngreen::-webkit-progress-value{background-color:lawngreen}progress.lemonchiffon::-webkit-progress-value{background-color:lemonchiffon}progress.lightblue::-webkit-progress-value{background-color:lightblue}progress.lightcoral::-webkit-progress-value{background-color:lightcoral}progress.lightcyan::-webkit-progress-value{background-color:lightcyan}progress.lightgoldenrodyellow::-webkit-progress-value{background-color:lightgoldenrodyellow}progress.lightgray::-webkit-progress-value{background-color:lightgray}progress.lightgrey::-webkit-progress-value{background-color:lightgrey}progress.lightgreen::-webkit-progress-value{background-color:lightgreen}progress.lightpink::-webkit-progress-value{background-color:lightpink}progress.lightsalmon::-webkit-progress-value{background-color:lightsalmon}progress.lightseagreen::-webkit-progress-value{background-color:lightseagreen}progress.lightskyblue::-webkit-progress-value{background-color:lightskyblue}progress.lightslategray::-webkit-progress-value{background-color:lightslategray}progress.lightslategrey::-webkit-progress-value{background-color:lightslategrey}progress.lightsteelblue::-webkit-progress-value{background-color:lightsteelblue}progress.lightyellow::-webkit-progress-value{background-color:lightyellow}progress.lime::-webkit-progress-value{background-color:lime}progress.limegreen::-webkit-progress-value{background-color:limegreen}progress.linen::-webkit-progress-value{background-color:linen}progress.magenta::-webkit-progress-value{background-color:magenta}progress.maroon::-webkit-progress-value{background-color:maroon}progress.mediumaquamarine::-webkit-progress-value{background-color:mediumaquamarine}progress.mediumblue::-webkit-progress-value{background-color:mediumblue}progress.mediumorchid::-webkit-progress-value{background-color:mediumorchid}progress.mediumpurple::-webkit-progress-value{background-color:mediumpurple}progress.mediumseagreen::-webkit-progress-value{background-color:mediumseagreen}progress.mediumslateblue::-webkit-progress-value{background-color:mediumslateblue}progress.mediumspringgreen::-webkit-progress-value{background-color:mediumspringgreen}progress.mediumturquoise::-webkit-progress-value{background-color:mediumturquoise}progress.mediumvioletred::-webkit-progress-value{background-color:mediumvioletred}progress.midnightblue::-webkit-progress-value{background-color:midnightblue}progress.mintcream::-webkit-progress-value{background-color:mintcream}progress.mistyrose::-webkit-progress-value{background-color:mistyrose}progress.moccasin::-webkit-progress-value{background-color:moccasin}progress.navajowhite::-webkit-progress-value{background-color:navajowhite}progress.navy::-webkit-progress-value{background-color:navy}progress.oldlace::-webkit-progress-value{background-color:oldlace}progress.olive::-webkit-progress-value{background-color:olive}progress.olivedrab::-webkit-progress-value{background-color:olivedrab}progress.orange::-webkit-progress-value{background-color:orange}progress.orangered::-webkit-progress-value{background-color:orangered}progress.orchid::-webkit-progress-value{background-color:orchid}progress.palegoldenrod::-webkit-progress-value{background-color:palegoldenrod}progress.palegreen::-webkit-progress-value{background-color:palegreen}progress.paleturquoise::-webkit-progress-value{background-color:paleturquoise}progress.palevioletred::-webkit-progress-value{background-color:palevioletred}progress.papayawhip::-webkit-progress-value{background-color:papayawhip}progress.peachpuff::-webkit-progress-value{background-color:peachpuff}progress.peru::-webkit-progress-value{background-color:peru}progress.pink::-webkit-progress-value{background-color:pink}progress.plum::-webkit-progress-value{background-color:plum}progress.powderblue::-webkit-progress-value{background-color:powderblue}progress.purple::-webkit-progress-value{background-color:purple}progress.red::-webkit-progress-value{background-color:red}progress.rosybrown::-webkit-progress-value{background-color:rosybrown}progress.royalblue::-webkit-progress-value{background-color:royalblue}progress.saddlebrown::-webkit-progress-value{background-color:saddlebrown}progress.salmon::-webkit-progress-value{background-color:salmon}progress.sandybrown::-webkit-progress-value{background-color:sandybrown}progress.seagreen::-webkit-progress-value{background-color:seagreen}progress.seashell::-webkit-progress-value{background-color:seashell}progress.sienna::-webkit-progress-value{background-color:sienna}progress.silver::-webkit-progress-value{background-color:silver}progress.skyblue::-webkit-progress-value{background-color:skyblue}progress.slateblue::-webkit-progress-value{background-color:slateblue}progress.slategray::-webkit-progress-value{background-color:slategray}progress.slategrey::-webkit-progress-value{background-color:slategrey}progress.snow::-webkit-progress-value{background-color:snow}progress.springgreen::-webkit-progress-value{background-color:springgreen}progress.steelblue::-webkit-progress-value{background-color:steelblue}progress.tan::-webkit-progress-value{background-color:tan}progress.teal::-webkit-progress-value{background-color:teal}progress.thistle::-webkit-progress-value{background-color:thistle}progress.tomato::-webkit-progress-value{background-color:tomato}progress.turquoise::-webkit-progress-value{background-color:turquoise}progress.violet::-webkit-progress-value{background-color:violet}progress.wheat::-webkit-progress-value{background-color:wheat}progress.white::-webkit-progress-value{background-color:white}progress.whitesmoke::-webkit-progress-value{background-color:whitesmoke}progress.yellow::-webkit-progress-value{background-color:yellow}progress.yellowgreen::-webkit-progress-value{background-color:yellowgreen}";

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
const PskProgress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = 0;
    this.max = 100;
    this.color = null;
    this.label = null;
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    let safeValue = this.value, safeMax = this.max;
    if (safeValue < 0) {
      safeValue = 0;
    }
    if (safeValue > 100) {
      safeValue = 100;
    }
    if (safeMax < 0) {
      safeMax = 0;
    }
    if (safeMax > 100) {
      safeMax = 100;
    }
    if (safeMax < safeValue) {
      safeValue = safeMax;
    }
    return h("div", { class: "psk-progress" }, this.label == null ? null : h("label", null, this.label), h("div", null, this.value == null ? null : h("label", { class: "overTheProgress" }, safeValue + '%'), h("progress", { class: this.color, max: safeMax, value: safeValue })));
  }
  get htmlElement() { return getElement(this); }
};
__decorate([
  CustomTheme(),
  BindModel()
], PskProgress.prototype, "modelHandler", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property is used to set the progress percent`,
    isMandatory: false,
    propertyType: `number`,
    defaultValue: 0
  })
], PskProgress.prototype, "value", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property is used to set the max progress percent`,
    isMandatory: false,
    propertyType: `number`,
    defaultValue: 100
  })
], PskProgress.prototype, "max", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property is used to set the progress bar color`,
    isMandatory: false,
    propertyType: `string`
  })
], PskProgress.prototype, "color", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property is used to set the label of the progress bar`,
    isMandatory: false,
    propertyType: `string`
  })
], PskProgress.prototype, "label", void 0);
PskProgress.style = pskProgressCss;

export { PskProgress as psk_progress };
