import { r as registerInstance, i as createEvent, h, g as getElement } from './index-92b53308.js';
import { C as CustomTheme, T as TableOfContentProperty, e as TableOfContentEvent } from './index-d9991986.js';
import { C as Config } from './Config-5a03619e.js';

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
const PskListFeedbacks = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.openFeedbackHandler = createEvent(this, "openFeedback", 7);
    this._styleCustomisation = {};
    this.alertOpened = false;
    this._messagesQueue = [];
    this._messagesContent = [];
    this.timer = 0;
    this.opened = false;
    this.typeOfAlert = [];
    this.styleCustomisation = {};
    this.messagesToDisplay = 3;
  }
  styleCustomisationWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._styleCustomisation = JSON.parse(newValue);
    }
    else {
      this._styleCustomisation = newValue;
    }
  }
  closeFeedbackHandler(closeData) {
    if (this.alertOpened) {
      this.alertOpened = false;
    }
    const deleteIndex = this._messagesContent.indexOf(closeData.detail);
    if (deleteIndex > -1) {
      this.typeOfAlert.splice(deleteIndex, 1);
      this._messagesContent.splice(deleteIndex, 1);
      this._messagesContent = this._messagesContent.slice();
      if (this._messagesQueue.length > 0) {
        this._messagesContent = [...this._messagesContent, this._messagesQueue.shift()];
      }
    }
  }
  componentWillLoad() {
    this.styleCustomisationWatcher(this.styleCustomisation);
    this.openFeedbackHandler.emit((message, name, typeOfAlert) => {
      if (typeOfAlert) {
        if (typeOfAlert instanceof Array) {
          typeOfAlert.forEach((alert) => {
            this.typeOfAlert.push(alert);
          });
        }
        else {
          this.typeOfAlert.push(typeOfAlert);
        }
      }
      else {
        this.typeOfAlert.push('toast');
      }
      this.alertOpened = true;
      if (message instanceof Array) {
        message.forEach((mes) => {
          this.addToMessageArray.bind(this)(mes, name);
        });
      }
      else {
        this.addToMessageArray.bind(this)(message, name);
      }
    });
  }
  timerToShow(message) {
    if (this._messagesContent.length > 0) {
      const time = new Date().getTime();
      const time2 = message.timer;
      let equation = Math.floor((time - time2) / Config.MINUTE);
      const minute = setTimeout(() => {
        this.timerToShow.bind(this)(message);
      }, Config.MINUTE_TICK);
      const hour = setTimeout(() => {
        this.timerToShow.bind(this)(message);
      }, Config.HOUR_TICK);
      switch (true) {
        case (equation <= 0):
          this.timeMeasure = Config.RIGHT_NOW;
          minute;
          break;
        case (equation < 1):
          this.timer = Math.floor((time - time2) / Config.MINUTE);
          this.timeMeasure = "minute ago";
          minute;
          break;
        case (equation < 60):
          this.timer = Math.floor((time - time2) / Config.MINUTE);
          this.timeMeasure = Config.MINUTES;
          minute;
          break;
        case (equation >= 60):
          this.timer = Math.floor((time - time2) / Config.HOUR);
          this.timeMeasure = Config.HOURS;
          hour;
          break;
      }
    }
    else {
      return;
    }
  }
  addToMessageArray(content, name) {
    const date = new Date();
    const messageToAdd = {
      content: content,
      timer: date.getTime(),
      name: name
    };
    if (this._messagesContent.length + 1 <= this.messagesToDisplay) {
      this._messagesContent = [...this._messagesContent, messageToAdd];
    }
    else {
      this._messagesQueue = [...this._messagesQueue, messageToAdd];
    }
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    let alertMessages = [];
    let _feedbackTag;
    this._messagesContent.forEach((message, key) => {
      if (this.typeOfAlert[key] === 'toast') {
        _feedbackTag = this.toastRenderer ? this.toastRenderer : 'psk-ui-toast';
        this.timerToShow.bind(this)(message);
        alertMessages.push(h(_feedbackTag, { message: message, timeSinceCreation: this.timer, timeMeasure: this.timeMeasure, styleCustomisation: this._styleCustomisation }));
      }
      else {
        _feedbackTag = this.alertRenderer ? this.alertRenderer : 'psk-ui-alert';
        alertMessages.push(h(_feedbackTag, { message: this._messagesContent[this._messagesContent.length - 1], typeOfAlert: this.typeOfAlert[key], timeAlive: this.timeAlive, styleCustomisation: this._styleCustomisation }));
      }
    });
    return (h("div", null, alertMessages ? alertMessages : null));
  }
  get htmlElement() { return getElement(this); }
  static get watchers() { return {
    "styleCustomisation": ["styleCustomisationWatcher"]
  }; }
};
__decorate([
  CustomTheme(),
  TableOfContentProperty({
    description: `This property is a object based on StyleCustomisation interface `,
    isMandatory: false,
    propertyType: `StyleCustomisation type`,
    specialNote: `Even if you do not use all the parameters there will not be a problem with the default renderers.`,
  })
], PskListFeedbacks.prototype, "styleCustomisation", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property is the auto closing timer in milliseconds for the alert.`,
    isMandatory: false,
    propertyType: 'number',
    defaultValue: 5000,
    specialNote: `This property will only be taken into consideration when used with the psk-ui-alert child component`,
  })
], PskListFeedbacks.prototype, "timeAlive", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property represents the number of toasts to be renderer on the user interface.`,
    isMandatory: false,
    propertyType: 'number',
    defaultValue: 3,
    specialNote: `This property will only be taken into consideration when used with the psk-ui-toast child component.`,
  })
], PskListFeedbacks.prototype, "messagesToDisplay", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property allows the component to display a custom toast in case the default one is not preferred.`,
    isMandatory: false,
    propertyType: 'string',
    defaultValue: 'psk-ui-toast',
    specialNote: `If this property is missing , psk-ui-toast will be assumed.`,
  })
], PskListFeedbacks.prototype, "toastRenderer", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property allows the component to display a custom alert in case the default one is not preferred.`,
    isMandatory: false,
    propertyType: 'string',
    defaultValue: 'psk-ui-alert',
    specialNote: `If this property is missing , psk-ui-alert will be assumed.`,
  })
], PskListFeedbacks.prototype, "alertRenderer", void 0);
__decorate([
  TableOfContentEvent({
    eventName: 'openFeedback',
    controllerInteraction: {
      required: true
    },
    description: `This even is triggered when the user does an action that require feedback.This event comes with three parameters :
            message(string) : the message for the action that was executed,
            name(string) : the name is necessary in case of a toast feedback and
            typeOfAlert(string) : either toast or a bootstrap alert.`
  })
], PskListFeedbacks.prototype, "openFeedbackHandler", void 0);

export { PskListFeedbacks as psk_list_feedbacks };
