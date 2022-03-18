import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-92b53308.js';
import './index-d9991986.js';
import { g as globalScripts } from './app-globals-968da14c.js';

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-424264d0.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["psk-pin-popup",[[1,"psk-pin-popup",{"opened":[1540],"pin":[32],"errorMessage":[32]},[[0,"closeModal","closePinPopup"]]]]],["psk-accordion-item",[[33,"psk-accordion-item",{"title":[1],"opened":[4],"layout":[1537]}]]],["psk-breadcrumb-navigator",[[33,"psk-breadcrumb-navigator",{"eventName":[1,"event-name"],"segments":[16]}]]],["psk-button-group",[[4,"psk-button-group",{"opened":[1540],"label":[513],"icon":[1],"iconColor":[1,"icon-color"],"classes":[1]},[[10,"click","handleClickOutside"]]]]],["psk-card",[[4,"psk-card",{"title":[513],"id":[1]}]]],["psk-details",[[33,"psk-details",{"title":[1],"opened":[4],"layout":[1537],"eventName":[1,"event-name"],"eventData":[8,"event-data"],"eventDispatcher":[1,"event-dispatcher"]}]]],["psk-draggable-list",[[0,"psk-draggable-list",{"items":[32]}]]],["psk-toolbar",[[1,"psk-toolbar",{"actions":[1],"icons":[4],"eventData":[1,"event-data"]}]]],["psk-wizard",[[0,"psk-wizard",{"componentRender":[1,"component-render"],"wizardSteps":[1040],"activeStep":[32]}]]],["context-consumer",[[0,"context-consumer",{"context":[16],"renderer":[16],"subscribe":[16],"unsubscribe":[32]}]]],["psk-accordion",[[33,"psk-accordion",{"multiple":[4],"layout":[1537]}]]],["psk-attachments-list",[[1,"psk-attachments-list",{"files":[8],"readOnly":[4,"read-only"],"noAttachmentsText":[1,"no-attachments-text"],"attachmentsClass":[1,"attachments-class"]}]]],["psk-condition",[[0,"psk-condition",{"condition":[8],"conditionResult":[32],"modelChain":[32]}]]],["psk-container",[[4,"psk-container",{"controllerName":[1,"controller-name"],"htmlFilePath":[1,"html-file-path"],"parentCallback":[16],"history":[16],"controller":[32],"innerHtml":[32],"controllerScript":[32],"disconnected":[32]}]]],["psk-date",[[0,"psk-date",{"value":[8],"format":[1],"hoverFormat":[1,"hover-format"]}]]],["psk-echo",[[0,"psk-echo",{"value":[1]}]]],["psk-files-chooser",[[4,"psk-files-chooser",{"label":[1],"accept":[1],"listFiles":[4,"list-files"],"filesAppend":[4,"files-append"],"eventName":[1,"event-name"],"files":[32]}]]],["psk-floating-menu",[[1,"psk-floating-menu",{"opened":[1540],"menuItems":[32]}]]],["psk-for-each",[[0,"psk-for-each",{"dataViewModel":[1,"data-view-model"],"modelChanged":[32],"model":[32],"chain":[32]}]]],["psk-grid",[[0,"psk-grid",{"columns":[2],"layout":[1]}]]],["psk-highlight",[[4,"psk-highlight",{"title":[1],"typeOfHighlight":[1,"type-of-highlight"]}]]],["psk-icon-chooser",[[0,"psk-icon-chooser",{"iconsColor":[1,"icons-color"],"iconsSize":[1,"icons-size"],"value":[1],"iconsModelListToShow":[32]}]]],["psk-img",[[0,"psk-img",{"src":[1],"width":[1],"height":[1],"title":[1]}]]],["psk-layout",[[1,"psk-layout",{"templateColumns":[1,"template-columns"],"templateRows":[1,"template-rows"],"columns":[2],"rows":[2],"autoColumns":[1,"auto-columns"],"autoRows":[1,"auto-rows"],"autoFlow":[1,"auto-flow"],"gap":[1],"columnGap":[1,"column-gap"],"rowGap":[1,"row-gap"],"alignItems":[1,"align-items"],"alignItemsX":[1,"align-items-x"],"alignItemsY":[1,"align-items-y"],"alignContent":[1,"align-content"],"alignContentX":[1,"align-content-x"],"alignContentY":[1,"align-content-y"]}]]],["psk-layout-item",[[1,"psk-layout-item",{"column":[1],"columnStart":[1,"column-start"],"columnEnd":[1,"column-end"],"row":[1],"rowStart":[1,"row-start"],"rowEnd":[1,"row-end"],"align":[1],"alignX":[1,"align-x"],"alignY":[1,"align-y"]}]]],["psk-list",[[0,"psk-list",{"listType":[1,"list-type"]}]]],["psk-list-feedbacks",[[1,"psk-list-feedbacks",{"styleCustomisation":[1,"style-customisation"],"timeAlive":[2,"time-alive"],"messagesToDisplay":[2,"messages-to-display"],"toastRenderer":[1,"toast-renderer"],"alertRenderer":[1,"alert-renderer"],"alertOpened":[32],"_messagesQueue":[32],"_messagesContent":[32],"timeMeasure":[32],"timer":[32],"opened":[32],"typeOfAlert":[32]},[[0,"closeFeedback","closeFeedbackHandler"]]]]],["psk-load-placeholder",[[1,"psk-load-placeholder",{"shouldBeRendered":[32]}]]],["psk-progress",[[0,"psk-progress",{"value":[2],"max":[2],"color":[1],"label":[1]}]]],["psk-slideshow",[[1,"psk-slideshow",{"images":[1],"title":[1],"caption":[1],"visibleSeconds":[2,"visible-seconds"],"fadeSeconds":[2,"fade-seconds"],"imagesSrcs":[32],"slideshowHeight":[32],"marginTop":[32]},[[11,"resize","checkLayout"]]]]],["psk-stepper-renderer",[[1,"psk-stepper-renderer",{"wizardSteps":[16],"activeStep":[16],"handleStepChange":[16]}]]],["psk-style",[[1,"psk-style",{"src":[1]}]]],["psk-switch-button",[[0,"psk-switch-button",{"active":[1],"inactive":[1],"eventDispatcher":[1,"event-dispatcher"],"toggleEvent":[1,"toggle-event"],"title":[1],"closed":[32]}]]],["psk-tab",[[1,"psk-tab",{"title":[1]}]]],["psk-tab-navigator",[[33,"psk-tab-navigator",{"default":[1538],"layout":[513],"tabNavigationDisabled":[4,"tab-navigation-disabled"],"selected":[2],"tabNavigator":[32]},[[0,"psk-tab-navigator:psk-select:change","onTabSelected"]]]]],["psk-ui-alert",[[1,"psk-ui-alert",{"typeOfAlert":[1,"type-of-alert"],"message":[8],"timeAlive":[8,"time-alive"],"styleCustomisation":[1,"style-customisation"],"isVisible":[32]}]]],["psk-ui-toast",[[1,"psk-ui-toast",{"message":[8],"timeSinceCreation":[2,"time-since-creation"],"timeMeasure":[1,"time-measure"],"styleCustomisation":[1,"style-customisation"],"toast":[32]}]]],["stencil-async-content",[[0,"stencil-async-content",{"documentLocation":[1,"document-location"],"content":[32]}]]],["stencil-route",[[0,"stencil-route",{"group":[513],"componentUpdated":[16],"match":[1040],"url":[1],"component":[1],"componentProps":[16],"exact":[4],"routeRender":[16],"scrollTopOffset":[2,"scroll-top-offset"],"routeViewsUpdated":[16],"location":[16],"history":[16],"historyType":[1,"history-type"]}]]],["stencil-route-link",[[4,"stencil-route-link",{"url":[1],"urlMatch":[1,"url-match"],"activeClass":[1,"active-class"],"exact":[4],"strict":[4],"custom":[1],"anchorClass":[1,"anchor-class"],"anchorRole":[1,"anchor-role"],"anchorTitle":[1,"anchor-title"],"anchorTabIndex":[1,"anchor-tab-index"],"anchorId":[1,"anchor-id"],"history":[16],"location":[16],"root":[1],"ariaHaspopup":[1,"aria-haspopup"],"ariaPosinset":[1,"aria-posinset"],"ariaSetsize":[2,"aria-setsize"],"ariaLabel":[1,"aria-label"],"match":[32]}]]],["stencil-route-switch",[[4,"stencil-route-switch",{"group":[513],"scrollTopOffset":[2,"scroll-top-offset"],"location":[16],"routeViewsUpdated":[16]}]]],["stencil-route-title",[[0,"stencil-route-title",{"titleSuffix":[1,"title-suffix"],"pageTitle":[1,"page-title"]}]]],["stencil-router",[[4,"stencil-router",{"root":[1],"historyType":[1,"history-type"],"titleSuffix":[1,"title-suffix"],"scrollTopOffset":[2,"scroll-top-offset"],"location":[32],"history":[32]}]]],["stencil-router-prompt",[[0,"stencil-router-prompt",{"when":[4],"message":[1],"history":[16],"unblock":[32]}]]],["stencil-router-redirect",[[0,"stencil-router-redirect",{"history":[16],"root":[1],"url":[1]}]]],["psk-icon",[[0,"psk-icon",{"icon":[1],"disableColor":[4,"disable-color"],"color":[1],"classes":[1]}]]],["psk-modal",[[33,"psk-modal",{"opened":[1540],"expanded":[1540],"eventName":[1,"event-name"]}]]],["psk-copy-clipboard",[[4,"psk-copy-clipboard",{"id":[1],"chapterToken":[32]}]]],["psk-stepper",[[0,"psk-stepper",{"componentRender":[1,"component-render"],"wizardSteps":[16],"activeStep":[16],"handleStepChange":[16]}]]]], options);
});
