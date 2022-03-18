import { g as getElement } from './index-3f4eb3b9.js';

function HostElement() {
  return (proto, name) => {
    const { componentWillLoad } = proto;
    proto.componentWillLoad = function () {
      this[name] = getElement(this);
      return componentWillLoad === null || componentWillLoad === void 0 ? void 0 : componentWillLoad.call(this);
    };
  };
}

export { HostElement as H };
