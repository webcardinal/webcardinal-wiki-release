import { s as setMode, g as getElement, e as Build } from './index-92b53308.js';

const cardinalInternalsGlobalScript = _ => setMode((element) => (element.mode || element.getAttribute('mode') || 'default'));

/**
 * @deprecated You should create your own Event.
 * See /events/PskButtonEvent.ts example
 * @param eventName
 * @param options
 * @param trigger
 * @param triggerElement
 */
function createCustomEvent(eventName, options, trigger = false, triggerElement = null) {
  const customEvent = new CustomEvent(eventName, options);
  if (trigger) {
    if (triggerElement) {
      triggerElement.dispatchEvent(customEvent);
    }
    else {
      document.dispatchEvent(customEvent);
    }
  }
}
function closestParentElement(el, selector, stopSelector) {
  let retval = null;
  while (el) {
    if (el.matches(selector)) {
      retval = el;
      break;
    }
    else if (stopSelector && el.matches(stopSelector)) {
      break;
    }
    el = el.parentElement;
  }
  return retval;
}
function closestParentTagElement(el, tag, deepLevel = 1) {
  let retval = null;
  while (el) {
    if (el.tagName.toLowerCase() === tag && --deepLevel === 0) {
      retval = el;
      break;
    }
    el = el.parentElement;
  }
  return retval;
}
/**
 * normalize a string to be compliant with a HTML id value
 * @param source
 */
function normalizeElementId(source) {
  let normalizedId = source.replace(/[^A-Za-z0-9_-]/g, "-").toLowerCase();
  normalizedId = normalizedId.replace(/(-+){2}/gm, "-");
  normalizedId = normalizedId.replace(/(-+)$/gm, "");
  return normalizedId;
}
function scrollToElement(elementId, htmlView) {
  const selector = normalizeElementId(elementId);
  const chapterElm = htmlView.querySelector(`#${selector}`);
  if (!chapterElm) {
    return;
  }
  chapterElm.scrollIntoView();
  let basePath = window.location.href;
  let queryOperator = "?";
  if (basePath.indexOf("chapter=") !== -1) {
    basePath = window.location.href.split("chapter=")[0];
    if (basePath.length > 0) {
      queryOperator = basePath[basePath.length - 1];
      basePath = basePath.substring(0, basePath.length - 1);
    }
  }
  else {
    queryOperator = basePath.indexOf("?") > 0 ? "&" : "?";
  }
  let chapterKey = `${queryOperator}chapter=`;
  window.history.pushState({}, "", `${basePath}${chapterKey}${selector}`);
}
function normalizeInnerHTML(source = "") {
  return source.replace(/<!----->/g, "").replace(/<!---->/g, "");
}
function normalizeCamelCaseToDashed(source) {
  if (!source || typeof source !== 'string' || source.length === 0) {
    return '';
  }
  return source
    .split("")
    .map((letter) => {
    if (letter === letter.toLowerCase()) {
      return letter;
    }
    return `-${letter.toLowerCase()}`;
  })
    .join("");
}
function normalizeDashedToCamelCase(source) {
  if (!source || typeof source !== 'string' || source.length === 0) {
    return '';
  }
  return source
    .split("-")
    .map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
    .join("");
}
/**
 * @param source
 * @param regex
 * @param replaceString
 * @param applyCallback - A callback function that will be applied to the string result
 */
function normalizeRegexToString(source, regex, replaceString, applyCallback = null) {
  let result = source.replace(regex, replaceString);
  if (applyCallback) {
    return applyCallback(result);
  }
  return result;
}
function normalizeModelChain(chain) {
  if (typeof chain !== "string") {
    throw new Error("Invalid model chain");
  }
  return chain.split("@").join("");
}
function canAttachShadow(tagName) {
  if (tagName.startsWith("psk-")) {
    return true;
  }
  const found = [
    "article",
    "aside",
    "blockquote",
    "body",
    "div",
    "footer",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "main",
    "nav",
    "p",
    "section",
    "span"
  ].find((htmlTag) => htmlTag === tagName);
  return found === tagName;
}
function stringToBoolean(str) {
  if (typeof str === "boolean") {
    return str;
  }
  if (typeof str === "string") {
    switch (str.toLowerCase().trim()) {
      case "true":
      case "1":
        return true;
      case "false":
      case "0":
      case null:
        return false;
      default:
        return Boolean(str);
    }
  }
  return Boolean(str);
}
function dashToCamelCase(str) {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}
function getInnerHTML(component) {
  const host = getElement(component);
  if (!host.innerHTML) {
    return null;
  }
  let styleElement = host.querySelector('style');
  if (styleElement) {
    let content = host.innerHTML.replace(styleElement.outerHTML, "");
    host.innerHTML = styleElement.outerHTML;
    return content;
  }
  return host.innerHTML;
}
function applyStyles(host, styles) {
  const style = document.createElement('style');
  style.innerHTML = styles;
  host.appendChild(style);
}

const ATTRIBUTE = "attr";
const PROPERTY = "prop";
function hasChainSignature(property) {
  if (property === null || typeof property !== "string") {
    return false;
  }
  if (!property.startsWith("@")) {
    return false;
  }
  return property.length >= 1;
}
function attributeHasValidChain(attr, attrValue, properties) {
  if (!hasChainSignature(attrValue)) {
    return false;
  }
  if (typeof properties[dashToCamelCase(attr)] !== "undefined") {
    return false;
  }
  return attr !== "view-model";
}
function getUpdateHandler(type, model) {
  switch (type) {
    case ATTRIBUTE:
      return function (attr, boundedChain) {
        this.setAttribute(attr, model.getChainValue(boundedChain));
      };
    default:
      return function (property, boundedChain) {
        let newValue = model.getChainValue(boundedChain);
        if (Array.isArray(this[property])) {
          this[property] = [...newValue];
        }
        else {
          this[property] = newValue;
        }
      };
  }
}
function BoundedModel(updateHandler, model) {
  this.createBoundedModel = function (property, boundedChain) {
    boundedChain = normalizeModelChain(boundedChain);
    model.onChange(boundedChain, () => {
      updateHandler(property, boundedChain);
    });
    updateHandler(property, boundedChain);
    return {
      updateModel: (value) => {
        model.setChainValue(boundedChain, value);
      }
    };
  };
}
function bindComponentProps(element, propsData, callback) {
  let { properties, hasViewModel, instanceName } = propsData;
  let modelReceived = (err, model) => {
    if (err) {
      console.error(err);
    }
    let viewModelParentChain;
    let boundedProperties = {};
    const bindSingleProperty = (prop) => {
      if (!boundedProperties[prop]) {
        let instance = properties[prop].type === ATTRIBUTE ? element : this;
        let handler = getUpdateHandler.call(instance, properties[prop].type, model);
        let propViewModel = new BoundedModel(handler.bind(instance), model);
        boundedProperties[prop] = propViewModel.createBoundedModel(prop, properties[prop].value);
      }
    };
    const bindProperties = () => {
      for (let prop in properties) {
        bindSingleProperty(prop);
      }
    };
    /**
     * if view-model is defined, construct the property dictionary but do not overwrite existing
     * properties
     */
    if (hasViewModel) {
      viewModelParentChain = element.getAttribute("view-model");
      viewModelParentChain = normalizeModelChain(viewModelParentChain);
      const updateProperties = () => {
        let propertiesData = model.getChainValue(viewModelParentChain);
        for (let prop in propertiesData) {
          if (!properties[prop]) {
            properties[prop] = {
              value: viewModelParentChain ? viewModelParentChain + "." + prop : prop,
              type: PROPERTY
            };
          }
        }
      };
      updateProperties();
      /**
       * This model chain listener set on the view model parent chain is used for the those children chains (of this parent chain) which are added at the runtime, and are not bound.
       * The below part of the code is updating and binding these new children chains to the component.
       */
      model.onChange(viewModelParentChain, () => {
        updateProperties();
        bindProperties();
      });
    }
    bindProperties();
    if (typeof this[instanceName] !== "undefined") {
      throw new Error(`BindModel decorator received a wrong argument as instance name: [${instanceName}]`);
    }
    else {
      this[instanceName] = {
        updateModel: (prop, value) => {
          if (!properties[prop]) {
            properties[prop] = {
              value: viewModelParentChain ? viewModelParentChain + "." + prop : prop,
              type: PROPERTY
            };
            bindSingleProperty(prop);
          }
          boundedProperties[prop].updateModel(value);
        }
      };
    }
    callback();
  };
  element.dispatchEvent(new CustomEvent("getModelEvent", {
    bubbles: true,
    composed: true,
    detail: { callback: modelReceived }
  }));
}
function BindModel() {
  return (proto, instanceName) => {
    let { componentWillLoad } = proto;
    proto.componentWillLoad = function () {
      let componentInstance = this.__proto__;
      let self = this;
      let element = getElement(self);
      let callComponentWillLoad = (promise) => {
        if (!promise) {
          return componentWillLoad && componentWillLoad.call(self);
        }
        else {
          return new Promise((resolve => {
            promise.then(() => {
              resolve(componentWillLoad && componentWillLoad.call(self));
            });
          }));
        }
      };
      if (element.isConnected) {
        let componentProperties = Object.keys(componentInstance);
        let elementAttributes = element.getAttributeNames();
        let properties = {};
        /**
         * iterate through component properties and search for model chains
         */
        for (let i = 0; i < componentProperties.length; i++) {
          let prop = componentProperties[i];
          if (hasChainSignature(this[prop])) {
            properties[prop] = {
              value: this[prop],
              type: PROPERTY
            };
          }
        }
        /**
         * iterate through component attributes and search for model chains
         */
        for (let i = 0; i < elementAttributes.length; i++) {
          let attr = elementAttributes[i];
          let attrValue = element.getAttribute(attr);
          if (attributeHasValidChain(attr, attrValue, properties)) {
            properties[attr] = {
              value: attrValue,
              type: ATTRIBUTE
            };
          }
        }
        /**
         * check for existing view-model attribute
         */
        let hasViewModel = element.hasAttribute("view-model");
        if (Object.keys(properties).length > 0 || hasViewModel) {
          return callComponentWillLoad(new Promise((resolve) => {
            let propsData = {
              properties: properties,
              hasViewModel: hasViewModel,
              instanceName: instanceName
            };
            bindComponentProps.call(self, element, propsData, resolve);
          }));
        }
      }
      return callComponentWillLoad();
    };
  };
}

const SLOTTED = "SLOTTED:";
window.cardinal = window.cardinal || {};
window.cardinal.oldCustomTheme = window.cardinal.oldCustomTheme || {};
const { oldCustomTheme } = window.cardinal;
oldCustomTheme.dependencies = oldCustomTheme.dependencies || {};
oldCustomTheme.imports = oldCustomTheme.imports || {};
oldCustomTheme.appTheme = oldCustomTheme.appTheme || null;
const { dependencies, imports } = oldCustomTheme;
const regex = /@import.*?["']([^"']+)["'].*?;/g;
function checkForInnerDependencies(referrer, styleStr) {
  if (!imports[referrer]) {
    imports[referrer] = new Promise((resolve, reject) => {
      if (regex.exec(styleStr)) {
        styleStr.replace(regex, (match, depUrl) => {
          if (!dependencies[depUrl]) {
            dependencies[depUrl] = resolveDependency(depUrl);
          }
          dependencies[depUrl].then((content) => {
            resolve(styleStr.replace(match, content));
          }).catch(reject);
        });
      }
      else {
        resolve(styleStr);
      }
    });
  }
  return imports[referrer];
}
function resolveDependency(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      if (response.ok) {
        return resolve(response.text());
      }
      reject({ url: response.url, status: response.status, statusText: response.statusText });
    });
  });
}
function isFromSlot(child, element) {
  if (!element) {
    return false;
  }
  if (element.shadowRoot) {
    return child.parentNode === element.shadowRoot.host;
  }
  return isFromSlot(element, element.parentElement);
}
function CustomTheme() {
  let handleStyleExistenceCheck = (element) => {
    let childComponents = {};
    element.addEventListener("styleExists", (event) => {
      event.stopImmediatePropagation();
      event.preventDefault();
      let eventCallback = event.detail.callback;
      let componentName = event.detail.componentTag;
      eventCallback(undefined, childComponents.hasOwnProperty(componentName), element);
      if (!childComponents[componentName]) {
        childComponents[componentName] = true;
      }
    });
    element.addEventListener("componentWasRemoved", (event) => {
      let componentName = event.detail.componentTag;
      if (childComponents[componentName]) {
        delete childComponents[componentName];
      }
    });
  };
  handleStyleExistenceCheck(document.querySelector("body"));
  return (proto) => {
    const { componentWillLoad, disconnectedCallback } = proto;
    proto.componentWillLoad = function () {
      const host = getElement(this);
      if (!host || !host.isConnected) {
        return componentWillLoad && componentWillLoad.call(this);
      }
      else {
        let injectThemeStyle = (theme) => {
          let basePath = '';
          if (window) {
            if (window.basePath) {
              basePath = window.basePath;
            }
            else if (window.WebCardinal && window.WebCardinal.basePath) {
              basePath = window.WebCardinal.basePath;
            }
          }
          let componentName = host.tagName.toLowerCase();
          let addStyleElement = (parent) => {
            return new Promise((resolve) => {
              // @ts-ignore
              let themeStylePath = basePath + "/themes/" + theme + "/components/" + componentName + "/" + componentName + ".css";
              if (!dependencies[themeStylePath]) {
                dependencies[themeStylePath] = new Promise((resolve, reject) => {
                  resolveDependency(themeStylePath).then((cssRaw) => {
                    resolve(cssRaw);
                  }).catch(reject);
                });
              }
              dependencies[themeStylePath].then((cssRaw) => {
                checkForInnerDependencies(themeStylePath, cssRaw).then((data) => {
                  let styleElement = document.createElement("style");
                  styleElement.innerHTML = data;
                  parent.append(styleElement);
                });
              }).catch((errorStatus) => {
                console.log(`Request on resource ${errorStatus.url} ended with status: ${errorStatus.status} (${errorStatus.statusText})`);
              }).finally(() => {
                resolve(componentWillLoad && componentWillLoad.call(this));
              });
            });
          };
          if (host.shadowRoot) {
            handleStyleExistenceCheck(host);
            return addStyleElement(host.shadowRoot);
          }
          if (!host.isConnected) {
            return new Promise(resolve => {
              resolve(componentWillLoad && componentWillLoad.call(this));
            });
          }
          return new Promise((resolve => {
            let isSlotted = isFromSlot(host, host.parentElement);
            host['isSlotted'] = isSlotted;
            let styleExistsEvent = new CustomEvent("styleExists", {
              bubbles: true,
              cancelable: true,
              composed: true,
              detail: {
                callback: (err, styleExists, shadowRootHostComponent) => {
                  if (err) {
                    console.log(err);
                    return;
                  }
                  if (!styleExists) {
                    if (!isSlotted) {
                      shadowRootHostComponent = shadowRootHostComponent.shadowRoot;
                    }
                    addStyleElement(shadowRootHostComponent).then(() => {
                      // @ts-ignore
                      resolve();
                    });
                  }
                  else {
                    resolve(componentWillLoad && componentWillLoad.call(this));
                  }
                },
                componentTag: isSlotted ? SLOTTED + componentName : componentName
              }
            });
            host.dispatchEvent(styleExistsEvent);
          }));
        };
        if (!oldCustomTheme.appTheme) {
          return new Promise((resolve) => {
            let event = new CustomEvent("getThemeConfig", {
              bubbles: true,
              cancelable: true,
              composed: true,
              detail: (err, theme) => {
                if (err) {
                  return console.log(err);
                }
                oldCustomTheme.appTheme = theme;
                injectThemeStyle(oldCustomTheme.appTheme).then(() => {
                  resolve();
                });
              }
            });
            host.dispatchEvent(event);
          });
        }
        else {
          return injectThemeStyle(oldCustomTheme.appTheme);
        }
      }
    };
    proto.disconnectedCallback = function () {
      const host = getElement(this);
      let componentName = host.tagName.toLowerCase();
      if (host['isSlotted']) {
        componentName = SLOTTED + componentName;
      }
      let componentWasRemovedEvent = new CustomEvent("componentWasRemoved", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          componentTag: componentName
        }
      });
      host.dispatchEvent(componentWasRemovedEvent);
      disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

function executeFetch(url, options = null) {
  // check if we need to add the BASE_URL to the prefix of the url
  let $$ = window['$$'];
  const isBaseUrlSet = $$ && $$.SSAPP_CONTEXT && $$.SSAPP_CONTEXT.BASE_URL && $$.SSAPP_CONTEXT.SEED && url.indexOf($$.SSAPP_CONTEXT.BASE_URL) !== 0;
  if (isBaseUrlSet && url.indexOf("data:image") !== 0) {
    // BASE_URL ends with / so make sure that url doesn't already start with /
    url = `${$$.SSAPP_CONTEXT.BASE_URL}${url.indexOf("/") === 0 ? url.substr(1) : url}`;
  }
  return fetch(url, options);
}

window.cardinal = window.cardinal || {};
window.cardinal.customTheme = window.cardinal.customTheme || {
  THEME: undefined,
  IMPORTS: {},
  // DEPENDENCIES: {},
  EVENTS: {
    GET_THEME: "getThemeConfig",
    ADD_STYLE: "CustomTheme:add-style",
    REMOVE_STYLE: "CustomTheme:remove-style"
  }
};
const GLOBALS = window.cardinal.customTheme;
async function getDependency(url) {
  try {
    const response = await executeFetch(url);
    const style = await response.text();
    return [true, style];
  }
  catch (err) {
    console.log(err);
    return [false];
  }
}
async function getTheme(host, asyncCallback) {
  host.dispatchEvent(new CustomEvent(GLOBALS.EVENTS.GET_THEME, {
    bubbles: true, cancelable: true, composed: true,
    detail: async (err, theme) => {
      if (err)
        return console.log(err);
      GLOBALS.THEME = theme;
      await asyncCallback(host);
    }
  }));
}
async function injectTheme(host) {
  let basePath = '';
  if (window) {
    if (window.basePath) {
      basePath = window.basePath;
    }
    else if (window.WebCardinal && window.WebCardinal.basePath) {
      basePath = window.WebCardinal.basePath;
    }
  }
  const componentName = host.tagName.toLowerCase();
  const componentMode = host.mode || host.getAttribute('mode') || 'default';
  const file = componentName + (componentMode !== 'default' ? `.${componentMode}` : '') + '.css';
  const path = `${basePath}/themes/${GLOBALS.THEME}/components/${componentName}/${file}`;
  if (!GLOBALS.IMPORTS[path]) {
    const [status, style] = await getDependency(path);
    if (status)
      GLOBALS.IMPORTS[path] = style;
    else
      return;
  }
  const styles = GLOBALS.IMPORTS[path];
  if (host.shadowRoot) {
    memorizeStyledElements(host.shadowRoot);
    applyStyles(host.shadowRoot, styles);
    // console.log(host.tagName, path);
  }
  else {
    host['isSlotted'] = isSlotted(host);
    // host.setAttribute('data-slotted', `${host['isSlotted']}`);
    host.dispatchEvent(new CustomEvent(GLOBALS.EVENTS.ADD_STYLE, {
      bubbles: true, cancelable: true, composed: true,
      detail: {
        data: {
          tag: componentName,
          slotted: host['isSlotted']
        },
        callback: async (err, data) => {
          if (err)
            return console.log(err);
          const { target } = data;
          applyStyles(target, styles);
          // host.setAttribute('data-root', target.tagName);
        }
      }
    }));
  }
}
function isSlotted(element) {
  while (element.parentElement) {
    if (element.parentElement.shadowRoot) {
      return element.parentElement.shadowRoot.host === element.parentNode;
    }
    element = element.parentElement;
  }
  return false;
}
function memorizeStyledElements(shadowRoot) {
  const element = shadowRoot.host;
  const children = {
    true: {},
    false: {} // opposite
  };
  element.addEventListener(GLOBALS.EVENTS.ADD_STYLE, (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    const { data: { tag, slotted }, callback } = event.detail;
    if (!children[slotted][tag]) {
      if (slotted) {
        callback(undefined, { target: element });
      }
      else {
        callback(undefined, { target: shadowRoot });
      }
      children[slotted][tag] = true;
    }
  });
  element.addEventListener(GLOBALS.EVENTS.REMOVE_STYLE, (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    const { data: { tag, slotted } } = event.detail;
    children[slotted][tag] = false;
  });
}
function CustomTheme_v2() {
  return (proto) => {
    const { componentWillLoad, disconnectedCallback } = proto;
    proto.componentWillLoad = async function () {
      const host = getElement(this);
      if (host || host.isConnected) {
        if (!GLOBALS.THEME) {
          await getTheme(host, injectTheme);
        }
        else {
          await injectTheme(host);
        }
      }
      return componentWillLoad && componentWillLoad.call(this);
    };
    proto.disconnectedCallback = async function () {
      const host = getElement(this);
      host.dispatchEvent(new CustomEvent(GLOBALS.EVENTS.REMOVE_STYLE, {
        bubbles: true, cancelable: true, composed: true,
        detail: {
          data: {
            tag: host.tagName.toLowerCase(),
            slotted: !!host['isSlotted'] // host['isSlotted'] ? true : false
          }
        }
      }));
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

const GLOBALS$1 = {
  VERSIONS: [
    { ref: CustomTheme, version: 'v1.0' },
    { ref: CustomTheme_v2, version: 'v2.0' }
  ]
};
const version = window.customThemeVersion;
const isValid = [1, 2].includes(version);
const theme = isValid ? GLOBALS$1.VERSIONS[version - 1] : GLOBALS$1.VERSIONS[0];
if (Build.isDev) {
  const STENCIL_DEV_STYLE = [
    '%c%s',
    'color: white; background: #4461b4; font-weight: bold; font-size: 10px; padding: 2px 6px; border-radius: 5px'
  ];
  if (version)
    console.log(...STENCIL_DEV_STYLE, 'CustomTheme', theme.version);
}
const CustomTheme$1 = theme.ref;

const MOBILE_MAX_WIDTH = 960;
const DEFINED_PROPERTIES = "definedProperties";
const DEFINED_EVENTS = "definedEvents";
const DEFINED_CONTROLLERS = "definedControllers";
const DATA_DEFINED_PROPS = "data-define-props";
const DATA_DEFINED_EVENTS = "data-define-events";
const DATA_DEFINED_CONTROLLERS = "data-define-controller";
const EVENTS_TYPES = {
  PSK_BUTTON_EVT: "PSK_BUTTON_EVT",
  PSK_SUB_MENU_EVT: "PSK_SUB_MENU_EVT"
};

function TableOfContentEvent(opts) {
  return function (proto, propertyKey) {
    const { connectedCallback, componentWillLoad, componentDidLoad, render } = proto;
    let actionSend = 'psk-send-events';
    let typeDefined = DEFINED_EVENTS;
    let dataDefineAction = DATA_DEFINED_EVENTS;
    let definedAction = 'definedEvents';
    proto.componentWillLoad = function () {
      let self = this;
      let thisElement = getElement(self);
      if (!thisElement.hasAttribute(DATA_DEFINED_EVENTS) && !thisElement.hasAttribute(DATA_DEFINED_CONTROLLERS)) {
        return componentWillLoad && componentWillLoad.call(self);
      }
    };
    proto.componentDidLoad = function () {
      let self = this;
      let thisElement = getElement(self);
      if (!thisElement.hasAttribute(DATA_DEFINED_EVENTS) && !thisElement.hasAttribute(DATA_DEFINED_CONTROLLERS)) {
        return componentDidLoad && componentDidLoad.call(self);
      }
    };
    proto.connectedCallback = function () {
      let self = this;
      let thisElement = getElement(self);
      if (opts.controllerInteraction) {
        dataDefineAction = DATA_DEFINED_CONTROLLERS;
        definedAction = 'definedControllers';
        typeDefined = DEFINED_CONTROLLERS;
        actionSend = 'psk-send-controllers';
      }
      if (thisElement.hasAttribute(dataDefineAction)) {
        if (!self.componentDefinitions) {
          self.componentDefinitions = {};
          self.componentDefinitions[definedAction] = [Object.assign(Object.assign({}, opts), { eventName: String(propertyKey) })];
          return connectedCallback && connectedCallback.call(self);
        }
        let componentDefinitions = self.componentDefinitions;
        const newEvent = Object.assign(Object.assign({}, opts), { eventName: String(propertyKey) });
        if (componentDefinitions && componentDefinitions.hasOwnProperty(typeDefined)) {
          let tempProps = [...componentDefinitions[typeDefined]];
          tempProps.push(newEvent);
          componentDefinitions[typeDefined] = [...tempProps];
        }
        else {
          componentDefinitions[typeDefined] = [newEvent];
        }
        self.componentDefinitions = Object.assign({}, componentDefinitions);
      }
      return connectedCallback && connectedCallback.call(self);
    };
    proto.render = function () {
      let self = this;
      if (!self.componentDefinitions
        || !(self.componentDefinitions && self.componentDefinitions[typeDefined])) {
        return render && render.call(self);
      }
      let definedEvts = self.componentDefinitions[typeDefined];
      if (definedEvts) {
        definedEvts = definedEvts.reverse();
      }
      createCustomEvent(actionSend, {
        composed: true,
        bubbles: true,
        cancelable: true,
        detail: definedEvts
      }, true);
    };
  };
}

function TableOfContentProperty(opts) {
  return function (proto, propertyKey) {
    const { connectedCallback, render, componentWillLoad, componentDidLoad } = proto;
    proto.componentWillLoad = function () {
      let self = this;
      let thisElement = getElement(self);
      if (!thisElement.hasAttribute(DATA_DEFINED_PROPS)) {
        return componentWillLoad && componentWillLoad.call(self);
      }
    };
    proto.componentDidLoad = function () {
      let self = this;
      let thisElement = getElement(self);
      if (!thisElement.hasAttribute(DATA_DEFINED_PROPS)) {
        return componentDidLoad && componentDidLoad.call(self);
      }
    };
    proto.connectedCallback = function () {
      let self = this;
      let thisElement = getElement(self);
      let propertyName = normalizeCamelCaseToDashed(String(propertyKey));
      if (thisElement.hasAttribute(DATA_DEFINED_PROPS)) {
        if (!self.componentDefinitions) {
          self.componentDefinitions = {
            definedProperties: [
              Object.assign(Object.assign({}, opts), { propertyName: propertyName })
            ]
          };
          return connectedCallback && connectedCallback.call(self);
        }
        let componentDefinitions = self.componentDefinitions;
        const newProperty = Object.assign(Object.assign({}, opts), { propertyName: propertyName });
        if (componentDefinitions &&
          componentDefinitions.hasOwnProperty(DEFINED_PROPERTIES)) {
          let tempProps = [
            ...componentDefinitions[DEFINED_PROPERTIES]
          ];
          tempProps.push(newProperty);
          componentDefinitions[DEFINED_PROPERTIES] = [...tempProps];
        }
        else {
          componentDefinitions[DEFINED_PROPERTIES] = [newProperty];
        }
        self.componentDefinitions = Object.assign({}, componentDefinitions);
      }
      return connectedCallback && connectedCallback.call(self);
    };
    proto.render = function () {
      let self = this;
      let thisElement = getElement(self);
      const tag = thisElement.tagName.toLowerCase();
      if (!self.componentDefinitions ||
        !(self.componentDefinitions &&
          self.componentDefinitions[DEFINED_PROPERTIES])) {
        return render && render.call(self);
      }
      let definedProps = self.componentDefinitions[DEFINED_PROPERTIES];
      if (definedProps) {
        definedProps = definedProps.reverse();
      }
      createCustomEvent("psk-send-props", {
        composed: true,
        bubbles: true,
        cancelable: true,
        detail: {
          tag,
          props: definedProps
        }
      }, true);
    };
  };
}

const EVENT_TYPE = EVENTS_TYPES.PSK_BUTTON_EVT;
class PskButtonEvent extends CustomEvent {
  constructor(eventName, eventData, eventOptions) {
    super(eventName, eventOptions);
    this.getEventType = function () {
      return EVENT_TYPE;
    };
    this.data = eventData;
  }
}

const EVENT_TYPE$1 = EVENTS_TYPES.PSK_SUB_MENU_EVT;
class SubMenuItemsEvent extends CustomEvent {
  constructor(eventName, eventData, eventOptions) {
    super(eventName, eventOptions);
    this.getEventType = function () {
      return EVENT_TYPE$1;
    };
    this.data = eventData;
  }
}

// import EVENT_TYPES from "../constants";
const DEFAULT_EVENT_OPTIONS = { bubbles: true, cancelable: true, composed: true };
/**
 * @description This function is a helper for Cardinal components. It has the role to dispatch an event based on @Props.
 *
 * @param {HTMLElement} host - which element dispatches the event if the eventDispatcher is not specified
 * // @param {typeof EVENT_TYPES} eventType - what kind of event is dispatched
 * @param {EventProps} eventProps - properties of your Component (eventName, eventData, eventDispatcher)
 * @param {EventOptions} eventOptions - properties of a CustomEvent (bubbles, cancelable, composed)
 **/
function dispatchEvent(host, 
// eventType: typeof EVENT_TYPES,
eventProps, eventOptions = DEFAULT_EVENT_OPTIONS) {
  if (!eventProps.eventName)
    return;
  const { eventName, eventData, eventDispatcher } = eventProps;
  const isGlobalDispatcher = (eventDispatcher && [document, window].indexOf(window[eventDispatcher]) !== -1);
  const event = new PskButtonEvent(eventName, eventData, eventOptions);
  const dispatcher = (isGlobalDispatcher ? window[eventDispatcher] : host);
  dispatcher.dispatchEvent(event);
}

window.cardinal = window.cardinal || {};
window.cardinal.controllers = window.cardinal.controllers || {};
window.cardinal.pendingControllerRequests = window.cardinal.pendingControllerRequests || {};
const { controllers, pendingControllerRequests } = window.cardinal;
const ControllerRegistryService = {
  /**
   * @deprecated
   */
  registerController: (controllerName, controller) => {
    controllers[controllerName] = controller;
    if (pendingControllerRequests[controllerName]) {
      while (pendingControllerRequests[controllerName].length) {
        let request = pendingControllerRequests[controllerName].pop();
        request.resolve(controllers[controllerName]);
      }
    }
  },
  /**
   * @deprecated
   */
  getController: async (controllerName, isBaseController = false) => {
    // with this update, old psk-<component>s will partially work with @webcardinal/core
    const WebCardinal = window.WebCardinal;
    if (WebCardinal) {
      if (isBaseController === true && controllerName === 'ContainerController') {
        controllerName = 'WebcController';
      }
      if (typeof WebCardinal.controllers === 'object') {
        const { controllers } = WebCardinal;
        if (controllers[controllerName]) {
          return controllers[controllerName];
        }
      }
      if (typeof WebCardinal.basePath === 'string') {
        const { basePath } = window.WebCardinal;
        try {
          let controller = await import(`${basePath}/scripts/controllers/${controllerName}.js`);
          return controller.default || controller;
        }
        catch (error) {
          console.error(error);
          return null;
        }
      }
    }
    if (controllers[controllerName]) {
      return (controllers[controllerName]);
    }
    let resourcePath = `scripts/controllers/${controllerName}.js`;
    if (isBaseController) {
      resourcePath = `cardinal/base/controllers/${controllerName}.js`;
    }
    if (typeof window.basePath !== 'undefined') {
      let separator = window.basePath[window.basePath.length - 1] === '/' ? '' : '/';
      resourcePath = window.basePath + separator + resourcePath;
    }
    try {
      let controller = await import(resourcePath);
      return controller.default || controller;
    }
    catch (error) {
      console.error(error);
      return null;
    }
  }
};

const SSAPP_HISTORY_CHANGED_EVT = "ssapp-history-changed";
class NavigationTrackerService {
  setIdentity(identity) {
    this.identity = identity;
  }
  setSSAppPage(ssAppPage) {
    this.ssAppPage = ssAppPage;
  }
  getSSAppPage() {
    return this.ssAppPage ? this.ssAppPage : this.identity;
  }
  listenForSSAppHistoryChanges() {
    window.document.addEventListener(SSAPP_HISTORY_CHANGED_EVT, (evt) => {
      let eventData = evt.detail;
      if (eventData.ssappPageUrl) {
        this.setSSAppPage(this.identity + eventData.ssappPageUrl);
      }
      let currentSSAppRoute = "~" + this.getSSAppPage();
      if (eventData.childRoute) {
        currentSSAppRoute += eventData.childRoute;
      }
      let currentPageTitle = eventData.ssappPageUrl ? eventData.ssappPageUrl : eventData.currentPageTitle;
      console.log(currentSSAppRoute, currentPageTitle);
      this.notifyParentForChanges({
        currentPageTitle: currentPageTitle,
        childRoute: currentSSAppRoute
      });
    });
  }
  notifyParentForChanges(navigationChanges) {
    let isNestedSSApp = () => {
      try {
        return window.self !== window.parent;
      }
      catch (e) {
        return false;
      }
    };
    if (isNestedSSApp()) {
      window.parent.document.dispatchEvent(new CustomEvent(SSAPP_HISTORY_CHANGED_EVT, {
        detail: navigationChanges
      }));
    }
  }
}
let instance = new NavigationTrackerService();
const NavigationTrackerService$1 = {
  getInstance: function () {
    return instance;
  },
  notifyParentForChanges: instance.notifyParentForChanges,
};

export { BindModel as B, CustomTheme$1 as C, PskButtonEvent as P, TableOfContentProperty as T, ControllerRegistryService as a, normalizeDashedToCamelCase as b, cardinalInternalsGlobalScript as c, dispatchEvent as d, TableOfContentEvent as e, createCustomEvent as f, getInnerHTML as g, scrollToElement as h, closestParentElement as i, normalizeElementId as j, normalizeModelChain as n, stringToBoolean as s };
