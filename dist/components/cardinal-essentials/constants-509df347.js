const TOOLTIP_TEXT = "Copy to clipboard";
const TOOLTIP_COPIED_TEXT = "Copied!";
const LIST_TYPE_ORDERED = "ordered";
const LIST_TYPE_UNORDERED = "unordered";
const EVENTS_TYPES = {
  PSK_SCROLL_EVT: "PSK_SCROLL_EVT",
  PSK_WIZARD_EVT: "PSK_WIZARD_EVT",
  PSK_FILE_CHOOSER_EVT: "PSK_FILE_CHOOSER_EVT"
};
const PSK_LIST_PARSE_CONFIG = {
  startTag: /^<([a-z]+-?[a-z]*)+[^>]*>/,
  endTag: /^<\/([a-z]+-?[a-z]*)+[^>]*>/,
  inlineTag: /^<([a-z]+-?[a-z]*)+[^>]*>.*<\/([a-z]+-?[a-z]*)+[^>]*>/
};
const ACTIONS_ICONS = {
  view: {
    value: "eye",
    color: "rgba(108, 192, 145, 1)"
  },
  edit: {
    value: "edit",
    color: "#007bff"
  },
  cancel: {
    value: "close",
    color: "#dc3545"
  },
  bid: {
    value: "gavel"
  },
  calendar: {
    value: "calendar-check-o"
  }
};
const GRID_IGNORED_COMPONENTS = ["link", "style", "slot", "#text", "#comment", "text", "comment"];
const GRID_BREAKPOINTS = ["xs", "s", "m", "l", "xl"];
const GRID_HIDDEN_BREAKPOINTS = {
  xs: "d-none d-sm-block",
  sm: "d-sm-none d-md-block",
  md: "d-md-none d-lg-block",
  lg: "d-lg-none d-xl-block",
  xl: "d-xl-none"
};
const DATE_FORMAT_MASKS = {
  'default': 'mm dd yyyy HH:MM',
  'shortTime': 'HH:MM ',
  'isoTime': 'HH:MM:ss',
  'isoDate': 'yyyy-mm-dd',
};
const BREADCRUMB_CONSTANTS = {
  ARROWS: "arrows",
  DEFAULT: "default",
  SCROLL: "scroll",
  PREVIOUS_ID: "prev",
  NEXT_ID: "next",
  BREADCRUMB_CLICK: "breadcrumb-click"
};

export { ACTIONS_ICONS as A, BREADCRUMB_CONSTANTS as B, DATE_FORMAT_MASKS as D, EVENTS_TYPES as E, GRID_IGNORED_COMPONENTS as G, LIST_TYPE_ORDERED as L, PSK_LIST_PARSE_CONFIG as P, TOOLTIP_COPIED_TEXT as T, GRID_HIDDEN_BREAKPOINTS as a, GRID_BREAKPOINTS as b, TOOLTIP_TEXT as c };
