import { r as registerInstance, h, g as getElement } from './index-92b53308.js';
import { C as CustomTheme, B as BindModel } from './index-d9991986.js';

const pskDraggableListCss = ".clearItem,.selectedItem{border:1px solid black;margin-bottom:5px;border-radius:4px;list-style:none;display:flex;justify-content:space-between;padding:0.5rem;box-shadow:0 0 3px 0 rgba(0,0,0,0.75);background-color:white}.selectedItem{background-color:cornsilk}.arrow-button .btn.btn-primary{padding:0;margin-bottom:0}.arrow-button-container{padding:0 !important}";

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
const PskDraggableList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.SWAP_TYPE = {
      UP: 'up',
      DOWN: 'down'
    };
  }
  __onItemClick(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    let array = JSON.parse(JSON.stringify(this.items));
    let itemId = event.target.id.split("item-")[1];
    let selectedIndex = array.findIndex(item => item.value === itemId);
    if (selectedIndex === -1 || array.length === 0) {
      return;
    }
    let nextState = !array[selectedIndex].selected;
    array = array.map(item => {
      return Object.assign(Object.assign({}, item), { selected: false });
    });
    array[selectedIndex] = Object.assign(Object.assign({}, array[selectedIndex]), { selected: nextState });
    this.items = array;
  }
  __onItemsChange(event, swapType) {
    event.preventDefault();
    event.stopImmediatePropagation();
    let itemArray = JSON.parse(JSON.stringify(this.items));
    let selectedIndex = itemArray.findIndex(item => item.selected === true);
    let limitIndex, toChangeIndex;
    switch (swapType) {
      case this.SWAP_TYPE.UP: {
        limitIndex = 0;
        toChangeIndex = selectedIndex - 1;
        break;
      }
      case this.SWAP_TYPE.DOWN: {
        limitIndex = itemArray.length - 1;
        toChangeIndex = selectedIndex + 1;
        break;
      }
      default: {
        return;
      }
    }
    if (selectedIndex === -1 || selectedIndex === limitIndex) {
      return;
    }
    let currentElement = itemArray[selectedIndex];
    itemArray[selectedIndex] = itemArray[toChangeIndex];
    itemArray[toChangeIndex] = currentElement;
    let cleanItems = JSON.parse(JSON.stringify(itemArray));
    this.items = cleanItems;
    if (this.modelHandler) {
      this.modelHandler.updateModel('items', cleanItems);
    }
  }
  __clearMultipleSelections() {
    let items = this.items;
    if (items === undefined) {
      return;
    }
    let foundSelection = false;
    let itemsLength = items.length;
    for (let i = 0; i < itemsLength; i++) {
      if (items[i].selected === true && foundSelection === false) {
        foundSelection = true;
      }
      else {
        items[i].selected = false;
      }
    }
    this.items = items;
  }
  componentDidLoad() {
    if (this.items) {
      this.__clearMultipleSelections();
    }
  }
  render() {
    if (!this.htmlElement.isConnected)
      return null;
    let renderedItems = this.items ? this.items.map((item) => {
      if (item.selected && item.selected === true) {
        return h("div", { class: "selectedItem", id: "item-" + item.value, onClick: (e) => this.__onItemClick(e) }, h("p", null, item.label), h("div", { class: "arrow-button-container" }, h("psk-button", { class: "arrow-button", onClick: e => this.__onItemsChange(e, this.SWAP_TYPE.UP) }, h("psk-icon", { icon: "arrow-up", color: "rgb(255, 255, 255)" })), h("psk-button", { class: "arrow-button", onClick: e => this.__onItemsChange(e, this.SWAP_TYPE.DOWN) }, h("psk-icon", { icon: "arrow-down", color: "rgb(255, 255, 255)" }))));
      }
      return h("div", { class: "clearItem", id: "item-" + item.value, onClick: (e) => this.__onItemClick(e) }, item.label);
    }) : h("p", null, "Items were not provided.");
    return h("div", null, renderedItems);
  }
  get htmlElement() { return getElement(this); }
};
__decorate([
  CustomTheme(),
  BindModel()
], PskDraggableList.prototype, "modelHandler", void 0);
PskDraggableList.style = pskDraggableListCss;

export { PskDraggableList as psk_draggable_list };
