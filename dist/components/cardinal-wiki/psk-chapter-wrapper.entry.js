import { r as registerInstance, h, g as getElement } from './index-c014206a.js';

const PskChapterWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    return (h("psk-chapter", { title: this.title }, h("div", { class: "sub-card" }, h("slot", null))));
  }
  get htmlElement() { return getElement(this); }
};

export { PskChapterWrapper as psk_chapter_wrapper };
