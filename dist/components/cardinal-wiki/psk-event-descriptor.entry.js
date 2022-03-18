import { r as registerInstance, h, g as getElement } from './index-c014206a.js';
import { n as normalizeElementId } from './index-8a7950ff.js';

const PskEventDescriptor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.title = "";
    this.decoratorEvents = [];
  }
  receivedEventsDescription(evt) {
    const payload = evt.detail;
    evt.stopImmediatePropagation();
    if (payload && payload.length > 0) {
      this.decoratorEvents = JSON.parse(JSON.stringify(payload));
    }
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    let componentEventsDefinitions = this.decoratorEvents.map((event) => {
      const cardSubtitle = `${event.eventName}: CustomEvent`;
      return (h("psk-chapter-wrapper", { title: event.eventName }, h("p", { class: "subtitle" }, h("i", null, cardSubtitle)), h("p", null, event.description), event.specialNote ? (h("p", null, h("b", null, "Note: ", event.specialNote))) : null));
    });
    return (h("psk-chapter", { title: this.title, id: normalizeElementId(this.title) }, componentEventsDefinitions));
  }
  get htmlElement() { return getElement(this); }
};

export { PskEventDescriptor as psk_event_descriptor };
