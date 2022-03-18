import { r as registerInstance, h, g as getElement } from './index-92b53308.js';
import { T as TableOfContentProperty } from './index-d9991986.js';

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
const PskStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.componentRender = "psk-stepper-renderer";
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    const StepperComponentRenderer = this.componentRender;
    return h(StepperComponentRenderer, { wizardSteps: this.wizardSteps, activeStep: this.activeStep, handleStepChange: this.handleStepChange });
  }
  get htmlElement() { return getElement(this); }
};
__decorate([
  TableOfContentProperty({
    description: `This property is the string that defines the psk-stepper render passed on by the psk-wizard.`,
    isMandatory: false,
    propertyType: `string`,
    defaultValue: `psk-stepper-renderer`
  })
], PskStepper.prototype, "componentRender", void 0);
__decorate([
  TableOfContentProperty({
    description: `This parameter holds an array of:
            wizard configuration
            the names of the steps
            the components that will be displayed
            other properties, like information for the steps.(optional).`,
    isMandatory: false,
    propertyType: `array for WizardStep items(WizardStep[])`,
    defaultValue: `psk-stepper-renderer`
  })
], PskStepper.prototype, "wizardSteps", void 0);
__decorate([
  TableOfContentProperty({
    description: `The WizardStep created by psk-wizard.`,
    isMandatory: true,
    propertyType: `WizardStep`
  })
], PskStepper.prototype, "activeStep", void 0);
__decorate([
  TableOfContentProperty({
    description: `This property is a function that modifies the way the step change is interpreted in the renderer.`,
    isMandatory: true,
    propertyType: `Function`
  })
], PskStepper.prototype, "handleStepChange", void 0);

export { PskStepper as psk_stepper };
