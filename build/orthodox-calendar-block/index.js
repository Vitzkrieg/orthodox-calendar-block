/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Statics.js"
/*!************************!*\
  !*** ./src/Statics.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   badStrings: () => (/* binding */ badStrings),
/* harmony export */   containerClassName: () => (/* binding */ containerClassName),
/* harmony export */   filterArrayByArray: () => (/* binding */ filterArrayByArray),
/* harmony export */   languages: () => (/* binding */ languages),
/* harmony export */   msgLoading: () => (/* binding */ msgLoading)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


// supported languages
const languages = [{
  "label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("English", "orthocalbl"),
  "value": "en"
}, {
  "label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Russian", "orthocalbl"),
  "value": "ru"
}];

// loading message
const msgLoading = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loading...", "orthocalbl");

// outermost container class
const containerClassName = "orthodox-calendar-block";

// attributes to filter out
const badStrings = ["btn_", "text_"];

/**
 * Function to filter out values
 * @param {Array} search Array to search through
 * @param {Array} filter Array of strings to filter out withf
 * @returns Array
 */
function filterArrayByArray(search, filter) {
  let parsedAtts = [];
  let keep = true;
  for (let key in search) {
    keep = true;
    if (search.hasOwnProperty(key)) {
      filter.every(bad => {
        if (key.includes(bad)) {
          keep = false;
          return false;
        }
        return true;
      });
    }
    if (keep) {
      parsedAtts[key] = "" + search[key];
    }
  }
  return parsedAtts;
}

/***/ },

/***/ "./src/components/DatePicker.js"
/*!**************************************!*\
  !*** ./src/components/DatePicker.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IconCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconCalendar */ "./src/components/IconCalendar.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Button Calendar icon
 */


const DatePicker = ({
  show,
  css,
  text,
  text_acc
}) => {
  if (!show) return null;
  const classes = ["ocButton", css].join(" ");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "date-picker-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      type: "button",
      className: classes,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_IconCalendar__WEBPACK_IMPORTED_MODULE_0__["default"], {
        title: text
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
      className: "ocDatePicker",
      "aria-label": text_acc,
      type: "date",
      hidden: true
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePicker);

/***/ },

/***/ "./src/components/IconCalendar.js"
/*!****************************************!*\
  !*** ./src/components/IconCalendar.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const IconCalendar = ({
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 32 32",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "currentColor",
      d: "M9 4v1H5v22h22V5h-4V4h-2v1H11V4zM7 7h2v1h2V7h10v1h2V7h2v2H7zm0 4h18v14H7zm6 2v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 17v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 21v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCalendar);

/***/ },

/***/ "./src/components/MultiCheckboxComponent.js"
/*!**************************************************!*\
  !*** ./src/components/MultiCheckboxComponent.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const MulitChekboxes = ({
  options,
  values,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
    children: options.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.CheckboxControl, {
        className: "check_items",
        label: opt.label,
        checked: values.includes(opt.value),
        onChange: check => {
          onChange(opt, check);
        }
      })
    }))
  });
};
const MultiCheckboxComponent = ({
  title,
  options,
  values,
  onChange
}) => {
  const [choices, setChoices] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(values);
  function mcOnChange(opt, check) {
    // copy values so that we are not directly mutating original to trigger render
    const newVals = choices.splice(0);
    check ? newVals.push(opt.value) : newVals.splice(newVals.indexOf(opt.value), 1);
    onChange(newVals);
    setChoices(newVals);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MulitChekboxes, {
      options: options,
      values: choices,
      onChange: mcOnChange
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiCheckboxComponent);

/***/ },

/***/ "./src/components/OCButton.js"
/*!************************************!*\
  !*** ./src/components/OCButton.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const OCButton = ({
  show,
  css,
  text,
  text_acc
}) => {
  if (!show) return null;
  const classes = ["ocButton", css].join(" ");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
    type: "button",
    className: classes,
    children: [text_acc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "screen-reader-text",
      children: text_acc
    }), text]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OCButton);

/***/ },

/***/ "./src/components/OCButtonsBar.js"
/*!****************************************!*\
  !*** ./src/components/OCButtonsBar.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_OCButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/OCButton */ "./src/components/OCButton.js");
/* harmony import */ var _components_DatePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DatePicker */ "./src/components/DatePicker.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Buttons
 */


/**
 * For picking dates instead of scrolling
 */


const OCButtonBar = ({
  atts
}) => {
  const {
    dp,
    ln,
    dl
  } = atts;
  const {
    text_prev,
    text_curr,
    text_next,
    text_prev_acc,
    text_curr_acc,
    text_next_acc,
    text_date,
    text_date_acc
  } = atts;
  const {
    text_week_prev,
    text_week_prev_acc,
    text_week_next,
    text_week_next_acc,
    text_language_acc
  } = atts;
  const {
    btn_today,
    btn_day,
    btn_week
  } = atts;
  const {
    btn_close,
    text_close,
    text_close_acc
  } = atts;
  const dpShow = !!dp;
  const showTodayBtn = !!btn_today;
  const showDayBtn = !!btn_day;
  const showWeekBtn = !!btn_week;
  const showLangBtn = ln?.length > 1;
  const showCloseBtn = !!btn_close;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "ocButtonsBar",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_OCButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
      show: showWeekBtn,
      css: "week-previous",
      text: text_week_prev,
      text_acc: text_week_prev_acc
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_OCButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
      show: showDayBtn,
      css: "day-previous",
      text: text_prev,
      text_acc: text_prev_acc
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_OCButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
      show: showTodayBtn,
      css: "day-current",
      text: text_curr,
      text_acc: text_curr_acc
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_OCButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
      show: showDayBtn,
      css: "day-next",
      text: text_next,
      text_acc: text_next_acc
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_OCButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
      show: showWeekBtn,
      css: "week-next",
      text: text_week_next,
      text_acc: text_week_next_acc
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_DatePicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
      show: dpShow,
      css: "day-picker",
      text: text_date,
      text_acc: text_date_acc
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_OCButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
      show: showLangBtn,
      css: "lang-toggle",
      text: dl,
      text_acc: text_language_acc
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_OCButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
      show: showCloseBtn,
      css: "ocBtnClose",
      text: text_close,
      text_acc: text_close_acc
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OCButtonBar);

/***/ },

/***/ "./src/orthodox-calendar-block/edit.js"
/*!*********************************************!*\
  !*** ./src/orthodox-calendar-block/edit.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-resizable */ "./node_modules/react-resizable/index.js");
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_resizable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_OCButtonsBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/OCButtonsBar */ "./src/components/OCButtonsBar.js");
/* harmony import */ var _Statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Statics */ "./src/Statics.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/orthodox-calendar-block/editor.scss");
/* harmony import */ var _components_MultiCheckboxComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MultiCheckboxComponent */ "./src/components/MultiCheckboxComponent.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */





/**
 * Buttons Bar
 */


/**
 * Static props
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



function getPathArgs(dt, hh, ll, tt, ss, li, ln) {
  const date = new Date();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const yy = date.getFullYear();
  const sec_req = window?.oc_data?.sec_req ?? "";
  const args = "&month=" + mm + "&today=" + dd + "&year=" + yy + "&dt=" + dt + "&header=" + hh + "&lives=" + ll + "&trp=" + tt + "&scripture=" + ss + "&liveinfo=" + li + "&language=" + ln + "&sec_req=" + sec_req + "&editor=" + 1;
  return args;
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object} root0
 * @param {Array} root0.attributes
 * @param {Function} root0.setAttributes
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: {
      containerClassName: _Statics__WEBPACK_IMPORTED_MODULE_6__.containerClassName
    }
  });
  const className = blockProps.className;
  const {
    dp,
    dt,
    hh,
    ll,
    ss,
    tt,
    pw,
    ph,
    pr,
    pd,
    ps,
    ln,
    dl
  } = attributes;
  const {
    text_prev,
    text_curr,
    text_next,
    text_prev_acc,
    text_curr_acc,
    text_next_acc,
    text_date,
    text_date_acc
  } = attributes;
  const {
    text_week_prev,
    text_week_prev_acc,
    text_week_next,
    text_week_next_acc,
    text_language_acc
  } = attributes;
  const {
    btn_today,
    btn_day,
    btn_week
  } = attributes;
  const {
    btn_close,
    text_close,
    text_close_acc
  } = attributes;
  const displayBoxBtnAtts = {
    'btn_close': true,
    'text_close': 'X',
    'text_close_acc': 'Close'
  };
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [loadingPosts, setLoadingPosts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const [info, setInfo] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(_Statics__WEBPACK_IMPORTED_MODULE_6__.msgLoading);
  const [liveinfo, setLiveinfo] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const multipleLanguages = ln.length > 1;
  function mcOnChange(value) {
    setAttributes({
      ln: value
    });
  }
  const parsedAtts = (0,_Statics__WEBPACK_IMPORTED_MODULE_6__.filterArrayByArray)(attributes, _Statics__WEBPACK_IMPORTED_MODULE_6__.badStrings);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setLoadingPosts(true);
    const url = oc_data?.url_day ?? false;
    if (!url) {
      setError("Misconfiguration");
      return;
    }
    const lang = dl === ln ? dl : ln[0];
    const pathArgs = getPathArgs(dt, hh, ll, tt, ss, liveinfo, lang);
    const path = url + pathArgs;
    fetch(path, {
      method: "GET",
      credentials: "same-origin"
    }).then(response => response.json()).then(resp => {
      setInfo(resp.data);
    }).catch(err => {
      setError(err.message);
    }).finally(() => setLoadingPosts(false));
  }, [dt, hh, ll, ss, tt, ln, dl, liveinfo]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Settings", "orthodox-calendar-block"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Edit with live info", "orthodox-calendar-block"),
          checked: liveinfo,
          onChange: li => setLiveinfo(li ? 1 : 0)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_MultiCheckboxComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: "Languages",
          options: _Statics__WEBPACK_IMPORTED_MODULE_6__.languages,
          values: ln,
          onChange: mcOnChange
        }), multipleLanguages && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default Language", "orthodox-calendar-block"),
          value: dl,
          onChange: value => setAttributes({
            dl: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("The language to show when first loaded", "orthodox-calendar"),
          options: [{
            value: "en",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("English", "orthodox-calendar-block"),
            disabled: !ln.includes("en")
          }, {
            value: "ru",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Russian", "orthodox-calendar-block"),
            disabled: !ln.includes("ru")
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show today button", "orthodox-calendar-block"),
          checked: btn_today,
          onChange: value => setAttributes({
            btn_today: value ? 1 : 0
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show day button", "orthodox-calendar-block"),
          checked: btn_day,
          onChange: value => setAttributes({
            btn_day: value ? 1 : 0
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show week button", "orthodox-calendar-block"),
          checked: btn_week,
          onChange: value => setAttributes({
            btn_week: value ? 1 : 0
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show date picker", "orthodox-calendar-block"),
          checked: dp,
          onChange: datepick => setAttributes({
            dp: datepick ? 1 : 0
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show date", "orthodox-calendar-block"),
          checked: dt,
          onChange: sd => setAttributes({
            dt: sd ? 1 : 0
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show a heading before", "orthodox-calendar-block"),
          help: hh ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display header", "orthodox-calendar-block") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No header", "orthodox-calendar-block"),
          checked: hh,
          onChange: sh => setAttributes({
            hh: sh ? 1 : 0
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display Lives of Saints", "orthodox-calendar-block"),
          value: ll,
          onChange: lives => setAttributes({
            ll: lives
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How to display the lives of the saints", "orthodox-calendar"),
          options: [{
            value: 0,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Do not display", "orthodox-calendar-block")
          }, {
            value: 1,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("all Saints in separate paragraphs", "orthodox-calendar-block")
          }, {
            value: 2,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("all Saints in one paragraph", "orthodox-calendar-block")
          }, {
            value: 3,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("major Saints in separate paragraphs", "orthodox-calendar-block")
          }, {
            value: 4,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("major Saints in one paragraph", "orthodox-calendar-block")
          }, {
            value: 5,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("major Saints and New Martyrs in separate paragraphs", "orthodox-calendar-block")
          }, {
            value: 6,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("major Saints and New Martyrs in one paragraph", "orthodox-calendar-block")
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scripture Readings", "orthodox-calendar-block"),
          value: ss,
          onChange: scripts => setAttributes({
            ss: scripts
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How to display the Scripture Readings", "orthodox-calendar"),
          options: [{
            value: 0,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Do not display", "orthodox-calendar-block")
          }, {
            value: 1,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("display with header", "orthodox-calendar-block")
          }, {
            value: 2,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("display without header", "orthodox-calendar-block")
          }, {
            value: 3,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("display with header and wtih verses", "orthodox-calendar-block")
          }, {
            value: 4,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("display without header and with verses", "orthodox-calendar-block")
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display Troparion", "orthodox-calendar-block"),
          value: tt,
          onChange: trpn => setAttributes({
            tt: trpn
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How to display the Troparion", "orthodox-calendar-block"),
          options: [{
            value: 0,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Do not display", "orthodox-calendar-block")
          }, {
            value: 1,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("display with header", "orthodox-calendar-block")
          }, {
            value: 2,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("display without header", "orthodox-calendar-block")
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Popup window width", "orthodox-calendar-block"),
          value: pw,
          onChange: popw => setAttributes({
            pw: popw
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Popup window height", "orthodox-calendar-block"),
          value: ph,
          onChange: poph => setAttributes({
            ph: poph
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Popup window resizable", "orthodox-calendar-block"),
          checked: pr === "yes",
          onChange: popr => setAttributes({
            pr: popr ? "yes" : "no"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Popup window dependent", "orthodox-calendar-block"),
          checked: pd === "yes",
          onChange: popd => setAttributes({
            pd: popd ? "yes" : "no"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Popup window scrollbars", "orthodox-calendar-block"),
          checked: ps === "yes",
          onChange: pops => setAttributes({
            ps: pops ? "yes" : "no"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text", "orthodox-calendar-block"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Previous Button Text", "orthodox-calendar-block"),
          value: text_prev,
          onChange: value => setAttributes({
            text_prev: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Previous Button Accessibility Text", "orthodox-calendar-block"),
          value: text_prev_acc,
          onChange: value => setAttributes({
            text_prev_acc: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Current Button Text", "orthodox-calendar-block"),
          value: text_curr,
          onChange: value => setAttributes({
            text_curr: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Current Button Accessibility Text", "orthodox-calendar-block"),
          value: text_curr_acc,
          onChange: value => setAttributes({
            text_curr_acc: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Next Button Text", "orthodox-calendar-block"),
          value: text_next,
          onChange: value => setAttributes({
            text_next: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Next Button Accessibility Text", "orthodox-calendar-block"),
          value: text_next_acc,
          onChange: value => setAttributes({
            text_next_acc: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Date Picker Text", "orthodox-calendar-block"),
          value: text_date,
          onChange: value => setAttributes({
            text_date: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Date Picker Text", "orthodox-calendar-block"),
          value: text_date,
          onChange: value => setAttributes({
            text_date: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Date Picker Accessibility Text", "orthodox-calendar-block"),
          value: text_date_acc,
          onChange: value => setAttributes({
            text_date_acc: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Previous Week Button Text", "orthodox-calendar-block"),
          value: text_week_prev,
          onChange: value => setAttributes({
            text_week_prev: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Previous Week Button Accessibility Text", "orthodox-calendar-block"),
          value: text_week_prev_acc,
          onChange: value => setAttributes({
            text_week_prev_acc: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Next Week Button Text", "orthodox-calendar-block"),
          value: text_week_next,
          onChange: value => setAttributes({
            text_week_next: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Next Week Button Accessibility Text", "orthodox-calendar-block"),
          value: text_week_next_acc,
          onChange: value => setAttributes({
            text_week_next_acc: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Language Toggle Button Accessibility Text", "orthodox-calendar-block"),
          value: text_language_acc,
          onChange: value => setAttributes({
            text_language_acc: value
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      ...parsedAtts,
      className: className,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_OCButtonsBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        atts: attributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "ocContainer",
        id: "ocContainer",
        children: [loadingPosts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          children: _Statics__WEBPACK_IMPORTED_MODULE_6__.msgLoading
        }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("There was an error loading calendar information.", "orthodox-calendar-block")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            children: error
          })]
        }), !loadingPosts && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.RawHTML, {
          children: info
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_resizable__WEBPACK_IMPORTED_MODULE_4__.ResizableBox, {
        minConstraints: [300, 300],
        resizeHandles: ["se"],
        className: "display-box hidden",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_OCButtonsBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
          atts: displayBoxBtnAtts
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "display-box-content"
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/orthodox-calendar-block/index.js"
/*!**********************************************!*\
  !*** ./src/orthodox-calendar-block/index.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/orthodox-calendar-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/orthodox-calendar-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/orthodox-calendar-block/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/orthodox-calendar-block/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/orthodox-calendar-block/save.js"
/*!*********************************************!*\
  !*** ./src/orthodox-calendar-block/save.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-resizable */ "./node_modules/react-resizable/index.js");
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_resizable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_OCButtonsBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/OCButtonsBar */ "./src/components/OCButtonsBar.js");
/* harmony import */ var _Statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Statics */ "./src/Statics.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * Buttons Bar
 */


/**
 * Static props
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see 	https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param 	{Object} 	root0
 * @param 	{Array} 	root0.attributes
 *
 * @return 	{Element} 	Element to render.
 */

function save({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: {
      containerClassName: _Statics__WEBPACK_IMPORTED_MODULE_4__.containerClassName
    }
  });
  const className = blockProps?.className ?? "";
  const {
    pw,
    ph
  } = attributes;
  const {
    btn_close,
    text_close,
    text_close_acc
  } = attributes;
  const displayBoxBtnAtts = {
    'btn_close': true,
    'text_close': 'X',
    'text_close_acc': 'Close'
  };
  const parsedAtts = (0,_Statics__WEBPACK_IMPORTED_MODULE_4__.filterArrayByArray)(attributes, _Statics__WEBPACK_IMPORTED_MODULE_4__.badStrings);
  parsedAtts.lang = parsedAtts.dl;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    ...parsedAtts,
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_OCButtonsBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      atts: attributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "ocContainer",
      children: _Statics__WEBPACK_IMPORTED_MODULE_4__.msgLoading
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_resizable__WEBPACK_IMPORTED_MODULE_2__.ResizableBox, {
      minConstraints: [300, 300],
      resizeHandles: ["se"],
      className: "display-box hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_OCButtonsBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        atts: displayBoxBtnAtts
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "display-box-content"
      })]
    })]
  });
}

/***/ },

/***/ "./node_modules/clsx/dist/clsx.js"
/*!****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.js ***!
  \****************************************/
(module) {

function r(e){var o,t,f="";if("string"==typeof e||"number"==typeof e)f+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(o=0;o<n;o++)e[o]&&(t=r(e[o]))&&(f&&(f+=" "),f+=t)}else for(t in e)e[t]&&(f&&(f+=" "),f+=t);return f}function e(){for(var e,o,t=0,f="",n=arguments.length;t<n;t++)(e=arguments[t])&&(o=r(e))&&(f&&(f+=" "),f+=o);return f}module.exports=e,module.exports.clsx=e;

/***/ },

/***/ "./src/orthodox-calendar-block/editor.scss"
/*!*************************************************!*\
  !*** ./src/orthodox-calendar-block/editor.scss ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/orthodox-calendar-block/style.scss"
/*!************************************************!*\
  !*** ./src/orthodox-calendar-block/style.scss ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./node_modules/object-assign/index.js"
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ },

/***/ "./node_modules/prop-types/checkPropTypes.js"
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ },

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js"
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ },

/***/ "./node_modules/prop-types/index.js"
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else // removed by dead control flow
{}


/***/ },

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ },

/***/ "./node_modules/prop-types/lib/has.js"
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ },

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ },

/***/ "./node_modules/prop-types/node_modules/react-is/index.js"
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ },

/***/ "./node_modules/react-draggable/build/cjs/Draggable.js"
/*!*************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/Draggable.js ***!
  \*************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/Draggable.tsx
var Draggable_exports = {};
__export(Draggable_exports, {
  DraggableCore: () => DraggableCore,
  default: () => Draggable
});
module.exports = __toCommonJS(Draggable_exports);
var React2 = __toESM(__webpack_require__(/*! react */ "react"));
var import_prop_types2 = __toESM(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var import_react_dom2 = __toESM(__webpack_require__(/*! react-dom */ "react-dom"));
var import_clsx = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.js");

// lib/utils/shims.ts
function findInArray(array, callback) {
  for (let i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}
function isFunction(func) {
  return typeof func === "function" || Object.prototype.toString.call(func) === "[object Function]";
}
function isNum(num) {
  return typeof num === "number" && !isNaN(num);
}
function int(a) {
  return parseInt(a, 10);
}
function dontSetMe(props, propName, componentName) {
  if (props[propName]) {
    return new Error(`Invalid prop ${propName} passed to ${componentName} - do not set this, set it on the child.`);
  }
}

// lib/utils/getPrefix.ts
var prefixes = ["Moz", "Webkit", "O", "ms"];
function getPrefix(prop = "transform") {
  var _a, _b;
  if (typeof window === "undefined") return "";
  const style = (_b = (_a = window.document) == null ? void 0 : _a.documentElement) == null ? void 0 : _b.style;
  if (!style) return "";
  if (prop in style) return "";
  for (let i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }
  return "";
}
function browserPrefixToKey(prop, prefix) {
  return prefix ? `${prefix}${kebabToTitleCase(prop)}` : prop;
}
function kebabToTitleCase(str) {
  let out = "";
  let shouldCapitalize = true;
  for (let i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === "-") {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }
  return out;
}
var getPrefix_default = getPrefix();

// lib/utils/domFns.ts
var matchesSelectorFunc = "";
function matchesSelector(el, selector) {
  var _a;
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = (_a = findInArray([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(method) {
      return isFunction(el[method]);
    })) != null ? _a : "";
  }
  const matchFn = el[matchesSelectorFunc];
  if (!isFunction(matchFn)) return false;
  return Boolean(matchFn.call(el, selector));
}
function matchesSelectorAndParentsTo(el, selector, baseNode) {
  let node = el;
  do {
    if (matchesSelector(node, selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);
  return false;
}
function addEvent(el, event, handler, inputOptions) {
  if (!el) return;
  const options = { capture: true, ...inputOptions };
  const listener = handler;
  if (el.addEventListener) {
    el.addEventListener(event, listener, options);
  } else if (el.attachEvent) {
    el.attachEvent("on" + event, listener);
  } else {
    el["on" + event] = listener;
  }
}
function removeEvent(el, event, handler, inputOptions) {
  if (!el) return;
  const options = { capture: true, ...inputOptions };
  const listener = handler;
  if (el.removeEventListener) {
    el.removeEventListener(event, listener, options);
  } else if (el.detachEvent) {
    el.detachEvent("on" + event, listener);
  } else {
    el["on" + event] = null;
  }
}
function outerHeight(node) {
  let height = node.clientHeight;
  const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += int(computedStyle.borderTopWidth);
  height += int(computedStyle.borderBottomWidth);
  return height;
}
function outerWidth(node) {
  let width = node.clientWidth;
  const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += int(computedStyle.borderLeftWidth);
  width += int(computedStyle.borderRightWidth);
  return width;
}
function innerHeight(node) {
  let height = node.clientHeight;
  const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= int(computedStyle.paddingTop);
  height -= int(computedStyle.paddingBottom);
  return height;
}
function innerWidth(node) {
  let width = node.clientWidth;
  const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= int(computedStyle.paddingLeft);
  width -= int(computedStyle.paddingRight);
  return width;
}
function offsetXYFromParent(evt, offsetParent, scale) {
  const isBody = offsetParent === offsetParent.ownerDocument.body;
  const offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();
  const x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
  const y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
  return { x, y };
}
function createCSSTransform(controlPos, positionOffset) {
  const translation = getTranslation(controlPos, positionOffset, "px");
  return { [browserPrefixToKey("transform", getPrefix_default)]: translation };
}
function createSVGTransform(controlPos, positionOffset) {
  const translation = getTranslation(controlPos, positionOffset, "");
  return translation;
}
function getTranslation({ x, y }, positionOffset, unitSuffix) {
  let translation = `translate(${x}${unitSuffix},${y}${unitSuffix})`;
  if (positionOffset) {
    const defaultX = `${typeof positionOffset.x === "string" ? positionOffset.x : positionOffset.x + unitSuffix}`;
    const defaultY = `${typeof positionOffset.y === "string" ? positionOffset.y : positionOffset.y + unitSuffix}`;
    translation = `translate(${defaultX}, ${defaultY})` + translation;
  }
  return translation;
}
function getTouch(e, identifier) {
  return e.targetTouches && findInArray(e.targetTouches, (t) => identifier === t.identifier) || e.changedTouches && findInArray(e.changedTouches, (t) => identifier === t.identifier);
}
function getTouchIdentifier(e) {
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
}
function getDefaultNonce() {
  return  true ? __webpack_require__.nc : 0;
}
function addUserSelectStyles(doc, nonce) {
  if (!doc) return;
  let styleEl = doc.getElementById("react-draggable-style-el");
  if (!styleEl) {
    styleEl = doc.createElement("style");
    styleEl.type = "text/css";
    styleEl.id = "react-draggable-style-el";
    const resolvedNonce = nonce != null ? nonce : getDefaultNonce();
    if (resolvedNonce) styleEl.setAttribute("nonce", resolvedNonce);
    styleEl.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n";
    styleEl.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n";
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
  }
  if (doc.body) addClassName(doc.body, "react-draggable-transparent-selection");
}
function scheduleRemoveUserSelectStyles(doc) {
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(() => {
      removeUserSelectStyles(doc);
    });
  } else {
    removeUserSelectStyles(doc);
  }
}
function removeUserSelectStyles(doc) {
  if (!doc) return;
  try {
    if (doc.body) removeClassName(doc.body, "react-draggable-transparent-selection");
    const ieSelection = doc.selection;
    if (ieSelection) {
      ieSelection.empty();
    } else {
      const selection = (doc.defaultView || window).getSelection();
      if (selection && selection.type !== "Caret") {
        selection.removeAllRanges();
      }
    }
  } catch {
  }
}
function addClassName(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp(`(?:^|\\s)${className}(?!\\S)`))) {
      el.className += ` ${className}`;
    }
  }
}
function removeClassName(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp(`(?:^|\\s)${className}(?!\\S)`, "g"), "");
  }
}

// lib/utils/positionFns.ts
function getBoundPosition(draggable, x, y) {
  if (!draggable.props.bounds) return [x, y];
  let { bounds } = draggable.props;
  bounds = typeof bounds === "string" ? bounds : cloneBounds(bounds);
  const node = findDOMNode(draggable);
  if (typeof bounds === "string") {
    const { ownerDocument } = node;
    const ownerWindow = ownerDocument.defaultView;
    if (!ownerWindow) {
      throw new Error("Cannot resolve the owner window of the draggable node.");
    }
    let boundNode;
    if (bounds === "parent") {
      boundNode = node.parentNode;
    } else {
      const rootNode = node.getRootNode();
      boundNode = rootNode.querySelector(bounds);
    }
    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }
    const boundNodeEl = boundNode;
    const nodeStyle = ownerWindow.getComputedStyle(node);
    const boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl);
    bounds = {
      left: -node.offsetLeft + int(boundNodeStyle.paddingLeft) + int(nodeStyle.marginLeft),
      top: -node.offsetTop + int(boundNodeStyle.paddingTop) + int(nodeStyle.marginTop),
      right: innerWidth(boundNodeEl) - outerWidth(node) - node.offsetLeft + int(boundNodeStyle.paddingRight) - int(nodeStyle.marginRight),
      bottom: innerHeight(boundNodeEl) - outerHeight(node) - node.offsetTop + int(boundNodeStyle.paddingBottom) - int(nodeStyle.marginBottom)
    };
  }
  if (isNum(bounds.right)) x = Math.min(x, bounds.right);
  if (isNum(bounds.bottom)) y = Math.min(y, bounds.bottom);
  if (isNum(bounds.left)) x = Math.max(x, bounds.left);
  if (isNum(bounds.top)) y = Math.max(y, bounds.top);
  return [x, y];
}
function snapToGrid(grid, pendingX, pendingY) {
  const x = Math.round(pendingX / grid[0]) * grid[0];
  const y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}
function canDragX(draggable) {
  return draggable.props.axis === "both" || draggable.props.axis === "x";
}
function canDragY(draggable) {
  return draggable.props.axis === "both" || draggable.props.axis === "y";
}
function getControlPosition(e, touchIdentifier, draggableCore) {
  const touchObj = typeof touchIdentifier === "number" ? getTouch(e, touchIdentifier) : null;
  if (typeof touchIdentifier === "number" && !touchObj) return null;
  const node = findDOMNode(draggableCore);
  const offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return offsetXYFromParent(touchObj || e, offsetParent, draggableCore.props.scale);
}
function createCoreData(draggable, x, y) {
  const isStart = !isNum(draggable.lastX);
  const node = findDOMNode(draggable);
  if (isStart) {
    return {
      node,
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x,
      y
    };
  } else {
    return {
      node,
      deltaX: x - draggable.lastX,
      deltaY: y - draggable.lastY,
      lastX: draggable.lastX,
      lastY: draggable.lastY,
      x,
      y
    };
  }
}
function createDraggableData(draggable, coreData) {
  const scale = draggable.props.scale;
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX / scale,
    y: draggable.state.y + coreData.deltaY / scale,
    deltaX: coreData.deltaX / scale,
    deltaY: coreData.deltaY / scale,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
}
function cloneBounds(bounds) {
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}
function findDOMNode(draggable) {
  const node = draggable.findDOMNode();
  if (!node) {
    throw new Error("<DraggableCore>: Unmounted during event!");
  }
  return node;
}

// lib/DraggableCore.tsx
var React = __toESM(__webpack_require__(/*! react */ "react"));
var import_prop_types = __toESM(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var import_react_dom = __toESM(__webpack_require__(/*! react-dom */ "react-dom"));

// lib/utils/log.ts
var log = typeof process !== "undefined" && process.env.DRAGGABLE_DEBUG ? console.log.bind(console) : function noop() {
};
var log_default = log;

// lib/DraggableCore.tsx
var eventsFor = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
};
var dragEventFor = eventsFor.mouse;
var DraggableCore = class extends React.Component {
  constructor() {
    super(...arguments);
    this.dragging = false;
    // Used while dragging to determine deltas.
    this.lastX = NaN;
    this.lastY = NaN;
    this.touchIdentifier = null;
    this.mounted = false;
    this.handleDragStart = (e) => {
      this.props.onMouseDown(e);
      if (!this.props.allowAnyClick && (typeof e.button === "number" && e.button !== 0 || e.ctrlKey)) return false;
      const thisNode = this.findDOMNode();
      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error("<DraggableCore> not mounted on DragStart!");
      }
      const { ownerDocument } = thisNode;
      if (this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || this.props.handle && !matchesSelectorAndParentsTo(e.target, this.props.handle, thisNode) || this.props.cancel && matchesSelectorAndParentsTo(e.target, this.props.cancel, thisNode)) {
        return;
      }
      if (e.type === "touchstart" && !this.props.allowMobileScroll) e.preventDefault();
      const touchIdentifier = getTouchIdentifier(e);
      this.touchIdentifier = touchIdentifier;
      const position = getControlPosition(e, touchIdentifier, this);
      if (position == null) return;
      const { x, y } = position;
      const coreEvent = createCoreData(this, x, y);
      log_default("DraggableCore: handleDragStart: %j", coreEvent);
      log_default("calling", this.props.onStart);
      const shouldUpdate = this.props.onStart(e, coreEvent);
      if (shouldUpdate === false || this.mounted === false) return;
      if (this.props.enableUserSelectHack) addUserSelectStyles(ownerDocument, this.props.nonce);
      this.dragging = true;
      this.lastX = x;
      this.lastY = y;
      addEvent(ownerDocument, dragEventFor.move, this.handleDrag);
      addEvent(ownerDocument, dragEventFor.stop, this.handleDragStop);
    };
    this.handleDrag = (e) => {
      const position = getControlPosition(e, this.touchIdentifier, this);
      if (position == null) return;
      let { x, y } = position;
      if (Array.isArray(this.props.grid)) {
        let deltaX = x - this.lastX, deltaY = y - this.lastY;
        [deltaX, deltaY] = snapToGrid(this.props.grid, deltaX, deltaY);
        if (!deltaX && !deltaY) return;
        x = this.lastX + deltaX;
        y = this.lastY + deltaY;
      }
      const coreEvent = createCoreData(this, x, y);
      log_default("DraggableCore: handleDrag: %j", coreEvent);
      const shouldUpdate = this.props.onDrag(e, coreEvent);
      if (shouldUpdate === false || this.mounted === false) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const event = document.createEvent("MouseEvents");
          event.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          this.handleDragStop(event);
        }
        return;
      }
      this.lastX = x;
      this.lastY = y;
    };
    this.handleDragStop = (e) => {
      if (!this.dragging) return;
      const position = getControlPosition(e, this.touchIdentifier, this);
      if (position == null) return;
      let { x, y } = position;
      if (Array.isArray(this.props.grid)) {
        let deltaX = x - this.lastX || 0;
        let deltaY = y - this.lastY || 0;
        [deltaX, deltaY] = snapToGrid(this.props.grid, deltaX, deltaY);
        x = this.lastX + deltaX;
        y = this.lastY + deltaY;
      }
      const coreEvent = createCoreData(this, x, y);
      const shouldContinue = this.props.onStop(e, coreEvent);
      if (shouldContinue === false || this.mounted === false) return false;
      const thisNode = this.findDOMNode();
      if (thisNode) {
        if (this.props.enableUserSelectHack) scheduleRemoveUserSelectStyles(thisNode.ownerDocument);
      }
      log_default("DraggableCore: handleDragStop: %j", coreEvent);
      this.dragging = false;
      this.lastX = NaN;
      this.lastY = NaN;
      if (thisNode) {
        log_default("DraggableCore: Removing handlers");
        removeEvent(thisNode.ownerDocument, dragEventFor.move, this.handleDrag);
        removeEvent(thisNode.ownerDocument, dragEventFor.stop, this.handleDragStop);
      }
    };
    this.onMouseDown = (e) => {
      dragEventFor = eventsFor.mouse;
      return this.handleDragStart(e);
    };
    this.onMouseUp = (e) => {
      dragEventFor = eventsFor.mouse;
      return this.handleDragStop(e);
    };
    // Same as onMouseDown (start drag), but now consider this a touch device.
    this.onTouchStart = (e) => {
      dragEventFor = eventsFor.touch;
      return this.handleDragStart(e);
    };
    this.onTouchEnd = (e) => {
      dragEventFor = eventsFor.touch;
      return this.handleDragStop(e);
    };
  }
  componentDidMount() {
    this.mounted = true;
    const thisNode = this.findDOMNode();
    if (thisNode) {
      addEvent(thisNode, eventsFor.touch.start, this.onTouchStart, { passive: false });
    }
  }
  componentWillUnmount() {
    this.mounted = false;
    const thisNode = this.findDOMNode();
    if (thisNode) {
      const { ownerDocument } = thisNode;
      removeEvent(ownerDocument, eventsFor.mouse.move, this.handleDrag);
      removeEvent(ownerDocument, eventsFor.touch.move, this.handleDrag);
      removeEvent(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
      removeEvent(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
      removeEvent(thisNode, eventsFor.touch.start, this.onTouchStart, { passive: false });
      if (this.props.enableUserSelectHack) scheduleRemoveUserSelectStyles(ownerDocument);
    }
  }
  // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
  // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
  findDOMNode() {
    var _a;
    if ((_a = this.props) == null ? void 0 : _a.nodeRef) {
      return this.props.nodeRef.current;
    }
    const legacyReactDOM = import_react_dom.default;
    if (typeof legacyReactDOM.findDOMNode === "function") {
      return legacyReactDOM.findDOMNode(this);
    }
    log_default(
      "react-draggable: ReactDOM.findDOMNode is not available in React 19+. You must provide a nodeRef prop. See: https://github.com/react-grid-layout/react-draggable#noderef"
    );
    return null;
  }
  render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      // Note: mouseMove handler is attached to document so it will still function
      // when the user drags quickly and leaves the bounds of the element.
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      // onTouchStart is added on `componentDidMount` so they can be added with
      // {passive: false}, which allows it to cancel. See
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention
      onTouchEnd: this.onTouchEnd
    });
  }
};
DraggableCore.displayName = "DraggableCore";
// Both the annotation and the `?` are load-bearing:
//  - The index-signature annotation stops tsc from inferring the
//    PropTypes.Requireable<...> types and emitting `import PropTypes from
//    'prop-types'` into the generated public .d.ts, which would force consumers
//    to install @types/prop-types (the v4.5.0 hand-written typings had none).
//  - The `?` keeps `propTypes` from being a *required* member of the public
//    type. React <= 18's JSX LibraryManagedAttributes only consults a
//    component's `propTypes` when it is required (`C extends {propTypes: ...}`);
//    when it does, this index-signature `propTypes` makes `defaultProps` stop
//    marking props optional, so consumers are forced to pass every prop.
//    Optional dodges that branch; React 19 ignores `propTypes` entirely. The
//    typings/tsconfig.react18.json check guards against a regression here.
// Do not remove. See lib/Draggable.tsx for the same guard.
DraggableCore.propTypes = {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: import_prop_types.default.bool,
  /**
   * `allowMobileScroll` turns off cancellation of the 'touchstart' event
   * on mobile devices. Only enable this if you are having trouble with click
   * events. Prefer using 'handle' / 'cancel' instead.
   *
   * Defaults to `false`.
   */
  allowMobileScroll: import_prop_types.default.bool,
  children: import_prop_types.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: import_prop_types.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: import_prop_types.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(props, propName) {
    if (props[propName] && props[propName].nodeType !== 1) {
      throw new Error("Draggable's offsetParent must be a DOM Node.");
    }
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: import_prop_types.default.arrayOf(import_prop_types.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: import_prop_types.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: import_prop_types.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: import_prop_types.default.object,
  /**
   * `nonce` is applied to the dynamically-injected <style> element used by the
   * user-select hack, so it isn't blocked under a strict Content Security
   * Policy (`style-src` without `'unsafe-inline'`). If omitted, webpack's
   * `__webpack_nonce__` global is used when available.
   */
  nonce: import_prop_types.default.string,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: import_prop_types.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: import_prop_types.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: import_prop_types.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: import_prop_types.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: import_prop_types.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: dontSetMe,
  style: dontSetMe,
  transform: dontSetMe
};
// Typed as the full `DraggableCoreProps` (not just the default-provided subset)
// so React's JSX LibraryManagedAttributes treats EVERY prop as optional for
// consumers, matching the historical hand-written typings. At runtime only the
// default-able props are actually populated.
DraggableCore.defaultProps = {
  allowAnyClick: false,
  // by default only accept left click
  allowMobileScroll: false,
  disabled: false,
  enableUserSelectHack: true,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
};

// lib/Draggable.tsx
var Draggable = class extends React2.Component {
  constructor(props) {
    super(props);
    this.onDragStart = (e, coreData) => {
      log_default("Draggable: onDragStart: %j", coreData);
      const shouldStart = this.props.onStart(e, createDraggableData(this, coreData));
      if (shouldStart === false) return false;
      this.setState({ dragging: true, dragged: true });
    };
    this.onDrag = (e, coreData) => {
      if (!this.state.dragging) return false;
      log_default("Draggable: onDrag: %j", coreData);
      const uiData = createDraggableData(this, coreData);
      const newState = {
        x: uiData.x,
        y: uiData.y,
        slackX: 0,
        slackY: 0
      };
      if (this.props.bounds) {
        const { x, y } = newState;
        newState.x += this.state.slackX;
        newState.y += this.state.slackY;
        const [newStateX, newStateY] = getBoundPosition(this, newState.x, newState.y);
        newState.x = newStateX;
        newState.y = newStateY;
        newState.slackX = this.state.slackX + (x - newState.x);
        newState.slackY = this.state.slackY + (y - newState.y);
        uiData.x = newState.x;
        uiData.y = newState.y;
        uiData.deltaX = newState.x - this.state.x;
        uiData.deltaY = newState.y - this.state.y;
      }
      const shouldUpdate = this.props.onDrag(e, uiData);
      if (shouldUpdate === false) return false;
      this.setState(newState);
    };
    this.onDragStop = (e, coreData) => {
      if (!this.state.dragging) return false;
      const shouldContinue = this.props.onStop(e, createDraggableData(this, coreData));
      if (shouldContinue === false) return false;
      log_default("Draggable: onDragStop: %j", coreData);
      const newState = {
        dragging: false,
        slackX: 0,
        slackY: 0
      };
      const controlled = Boolean(this.props.position);
      if (controlled) {
        const { x, y } = this.props.position;
        newState.x = x;
        newState.y = y;
      }
      this.setState(newState);
    };
    this.state = {
      // Whether or not we are currently dragging.
      dragging: false,
      // Whether or not we have been dragged before.
      dragged: false,
      // Current transform x and y.
      x: props.position ? props.position.x : props.defaultPosition.x,
      y: props.position ? props.position.y : props.defaultPosition.y,
      prevPropsPosition: { ...props.position },
      // Used for compensating for out-of-bounds drags
      slackX: 0,
      slackY: 0,
      // Can only determine if SVG after mounting
      isElementSVG: false
    };
    if (props.position && !(props.onDrag || props.onStop)) {
      console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
  }
  // React 16.3+
  // Arity (props, state)
  static getDerivedStateFromProps({ position }, { prevPropsPosition }) {
    if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
      log_default("Draggable: getDerivedStateFromProps %j", { position, prevPropsPosition });
      return {
        x: position.x,
        y: position.y,
        prevPropsPosition: { ...position }
      };
    }
    return null;
  }
  componentDidMount() {
    if (typeof window.SVGElement !== "undefined" && this.findDOMNode() instanceof window.SVGElement) {
      this.setState({ isElementSVG: true });
    }
  }
  componentWillUnmount() {
    if (this.state.dragging) {
      this.setState({ dragging: false });
    }
  }
  // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
  // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
  findDOMNode() {
    var _a;
    if ((_a = this.props) == null ? void 0 : _a.nodeRef) {
      return this.props.nodeRef.current;
    }
    const legacyReactDOM = import_react_dom2.default;
    if (typeof legacyReactDOM.findDOMNode === "function") {
      return legacyReactDOM.findDOMNode(this);
    }
    return null;
  }
  render() {
    const {
      axis,
      bounds,
      children,
      defaultPosition,
      defaultClassName,
      defaultClassNameDragging,
      defaultClassNameDragged,
      position,
      positionOffset,
      scale,
      ...draggableCoreProps
    } = this.props;
    let style = {};
    let svgTransform = null;
    const controlled = Boolean(position);
    const draggable = !controlled || this.state.dragging;
    const validPosition = position || defaultPosition;
    const transformOpts = {
      // Set left if horizontal drag is enabled
      x: canDragX(this) && draggable ? this.state.x : validPosition.x,
      // Set top if vertical drag is enabled
      y: canDragY(this) && draggable ? this.state.y : validPosition.y
    };
    if (this.state.isElementSVG) {
      svgTransform = createSVGTransform(transformOpts, positionOffset);
    } else {
      style = createCSSTransform(transformOpts, positionOffset);
    }
    const onlyChild = React2.Children.only(children);
    const className = (0, import_clsx.clsx)(onlyChild.props.className || "", defaultClassName, {
      [defaultClassNameDragging]: this.state.dragging,
      [defaultClassNameDragged]: this.state.dragged
    });
    return /* @__PURE__ */ React2.createElement(DraggableCore, { ...draggableCoreProps, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, React2.cloneElement(onlyChild, {
      className,
      style: { ...onlyChild.props.style, ...style },
      transform: svgTransform
    }));
  }
};
Draggable.displayName = "Draggable";
// Both the annotation and the `?` are load-bearing:
//  - The index-signature annotation stops tsc from inferring the
//    PropTypes.Requireable<...> types and emitting `import PropTypes from
//    'prop-types'` into the generated public .d.ts, which would force consumers
//    to install @types/prop-types (the v4.5.0 hand-written typings had none).
//  - The `?` keeps `propTypes` from being a *required* member of the public
//    type. React <= 18's JSX LibraryManagedAttributes only consults a
//    component's `propTypes` when it is required (`C extends {propTypes: ...}`);
//    when it does, this index-signature `propTypes` makes `defaultProps` stop
//    marking props optional, so consumers are forced to pass every prop.
//    Optional dodges that branch; React 19 ignores `propTypes` entirely. The
//    typings/tsconfig.react18.json check guards against a regression here.
// Do not remove. See lib/DraggableCore.tsx for the same guard.
Draggable.propTypes = {
  // Accepts all props <DraggableCore> accepts.
  ...DraggableCore.propTypes,
  /**
   * `axis` determines which axis the draggable can move.
   *
   *  Note that all callbacks will still return data as normal. This only
   *  controls flushing to the DOM.
   *
   * 'both' allows movement horizontally and vertically.
   * 'x' limits movement to horizontal axis.
   * 'y' limits movement to vertical axis.
   * 'none' limits all movement.
   *
   * Defaults to 'both'.
   */
  axis: import_prop_types2.default.oneOf(["both", "x", "y", "none"]),
  /**
   * `bounds` determines the range of movement available to the element.
   * Available values are:
   *
   * 'parent' restricts movement within the Draggable's parent node.
   *
   * Alternatively, pass an object with the following properties, all of which are optional:
   *
   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
   *
   * All values are in px.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable bounds={{right: 300, bottom: 300}}>
   *              <div>Content</div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  bounds: import_prop_types2.default.oneOfType([
    import_prop_types2.default.shape({
      left: import_prop_types2.default.number,
      right: import_prop_types2.default.number,
      top: import_prop_types2.default.number,
      bottom: import_prop_types2.default.number
    }),
    import_prop_types2.default.string,
    import_prop_types2.default.oneOf([false])
  ]),
  defaultClassName: import_prop_types2.default.string,
  defaultClassNameDragging: import_prop_types2.default.string,
  defaultClassNameDragged: import_prop_types2.default.string,
  /**
   * `defaultPosition` specifies the x and y that the dragged item should start at
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  defaultPosition: import_prop_types2.default.shape({
    x: import_prop_types2.default.number,
    y: import_prop_types2.default.number
  }),
  positionOffset: import_prop_types2.default.shape({
    x: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]),
    y: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string])
  }),
  /**
   * `position`, if present, defines the current position of the element.
   *
   *  This is similar to how form elements in React work - if no `position` is supplied, the component
   *  is uncontrolled.
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable position={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  position: import_prop_types2.default.shape({
    x: import_prop_types2.default.number,
    y: import_prop_types2.default.number
  }),
  /**
   * These properties should be defined on the child, not here.
   */
  className: dontSetMe,
  style: dontSetMe,
  transform: dontSetMe
};
// Typed as the full `DraggableProps` (not just the default-provided subset) so
// React's JSX LibraryManagedAttributes treats EVERY prop as optional for
// consumers, matching the historical hand-written typings. At runtime only the
// default-able props are actually populated.
Draggable.defaultProps = {
  ...DraggableCore.defaultProps,
  axis: "both",
  bounds: false,
  defaultClassName: "react-draggable",
  defaultClassNameDragging: "react-draggable-dragging",
  defaultClassNameDragged: "react-draggable-dragged",
  defaultPosition: { x: 0, y: 0 },
  scale: 1
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=Draggable.js.map

/***/ },

/***/ "./node_modules/react-draggable/build/cjs/cjs.js"
/*!*******************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/cjs.js ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// Generated by tsup.config.ts onSuccess. See that file for the compat rationale.
const Draggable = __webpack_require__(/*! ./Draggable.js */ "./node_modules/react-draggable/build/cjs/Draggable.js");
const DraggableCore = Draggable.DraggableCore;
const Default = Draggable.default || Draggable;

module.exports = Default;
module.exports["default"] = Default;
module.exports.DraggableCore = DraggableCore;


/***/ },

/***/ "./node_modules/react-resizable/build/Resizable.js"
/*!*********************************************************!*\
  !*** ./node_modules/react-resizable/build/Resizable.js ***!
  \*********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _reactDraggable = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js");
var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-resizable/build/utils.js");
var _propTypes = __webpack_require__(/*! ./propTypes */ "./node_modules/react-resizable/build/propTypes.js");
const _excluded = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// The base <Resizable> component.
// This component does not have state and relies on the parent to set its props based on callback data.
class Resizable extends React.Component {
  constructor() {
    super(...arguments);
    this.handleRefs = {};
    this.lastHandleRect = null;
    this.slack = null;
    this.lastSize = null;
  }
  componentWillUnmount() {
    this.resetData();
  }
  resetData() {
    this.lastHandleRect = this.slack = this.lastSize = null;
  }

  // Clamp width and height within provided constraints
  runConstraints(width, height) {
    const _this$props = this.props,
      minConstraints = _this$props.minConstraints,
      maxConstraints = _this$props.maxConstraints,
      lockAspectRatio = _this$props.lockAspectRatio;
    // short circuit
    if (!minConstraints && !maxConstraints && !lockAspectRatio) return [width, height];

    // If constraining to min and max, we need to also fit width and height to aspect ratio.
    if (lockAspectRatio) {
      const ratio = this.props.width / this.props.height;

      // Project (width, height) onto the line w = ratio * h.
      // Distributes tracking error across both axes instead of forcing one to overshoot.
      // t = (w * ratio + h) / (ratio^2 + 1),  new_w = t * ratio,  new_h = t
      height = (width * ratio + height) / (ratio * ratio + 1);
      width = height * ratio;
    }
    const oldW = width,
      oldH = height;

    // Add slack to the values used to calculate bound position. This will ensure that if
    // we start removing slack, the element won't react to it right away until it's been
    // completely removed.
    const _ref = this.slack || [0, 0],
      slackW = _ref[0],
      slackH = _ref[1];
    width += slackW;
    height += slackH;
    if (minConstraints) {
      width = Math.max(minConstraints[0], width);
      height = Math.max(minConstraints[1], height);
    }
    if (maxConstraints) {
      width = Math.min(maxConstraints[0], width);
      height = Math.min(maxConstraints[1], height);
    }

    // If the width or height changed, we must have introduced some slack. Record it for the next iteration.
    this.slack = [slackW + (oldW - width), slackH + (oldH - height)];
    return [width, height];
  }

  /**
   * Wrapper around drag events to provide more useful data.
   *
   * @param  {String} handlerName Handler name to wrap.
   * @return {Function}           Handler function.
   */
  resizeHandler(handlerName, axis) {
    return (e, _ref2) => {
      var _this$lastSize$width, _this$lastSize, _this$lastSize$height, _this$lastSize2;
      let node = _ref2.node,
        deltaX = _ref2.deltaX,
        deltaY = _ref2.deltaY;
      // Reset data in case it was left over somehow (should not be possible)
      if (handlerName === 'onResizeStart') this.resetData();

      // Axis restrictions
      const canDragX = (this.props.axis === 'both' || this.props.axis === 'x') && axis !== 'n' && axis !== 's';
      const canDragY = (this.props.axis === 'both' || this.props.axis === 'y') && axis !== 'e' && axis !== 'w';
      // No dragging possible.
      if (!canDragX && !canDragY) return;

      // Decompose axis for later use
      const axisV = axis[0];
      const axisH = axis[axis.length - 1]; // intentionally not axis[1], so that this catches axis === 'w' for example

      // Track the element being dragged to account for changes in position.
      // If a handle's position is changed between callbacks, we need to factor this in to the next callback.
      // Failure to do so will cause the element to "skip" when resized upwards or leftwards.
      const handleRect = node.getBoundingClientRect();
      if (this.lastHandleRect != null) {
        // If the handle has repositioned on either axis since last render,
        // we need to increase our callback values by this much.
        // Only checking 'n', 'w' since resizing by 's', 'w' won't affect the overall position on page,
        if (axisH === 'w') {
          const deltaLeftSinceLast = handleRect.left - this.lastHandleRect.left;
          deltaX += deltaLeftSinceLast;
        }
        if (axisV === 'n') {
          const deltaTopSinceLast = handleRect.top - this.lastHandleRect.top;
          deltaY += deltaTopSinceLast;
        }
      }
      // Storage of last rect so we know how much it has really moved.
      this.lastHandleRect = handleRect;

      // Reverse delta if using top or left drag handles.
      if (axisH === 'w') deltaX = -deltaX;
      if (axisV === 'n') deltaY = -deltaY;

      // Update w/h by the deltas. Also factor in transformScale.
      // Use lastSize (if available) instead of props to avoid losing deltas
      // when React can't re-render between consecutive mouse events.
      const baseWidth = (_this$lastSize$width = (_this$lastSize = this.lastSize) == null ? void 0 : _this$lastSize.width) != null ? _this$lastSize$width : this.props.width;
      const baseHeight = (_this$lastSize$height = (_this$lastSize2 = this.lastSize) == null ? void 0 : _this$lastSize2.height) != null ? _this$lastSize$height : this.props.height;
      let width = baseWidth + (canDragX ? deltaX / this.props.transformScale : 0);
      let height = baseHeight + (canDragY ? deltaY / this.props.transformScale : 0);

      // Run user-provided constraints.
      // For onResizeStop, use the last size from onResize rather than recalculating.
      // This avoids issues where props.width/height are stale due to React's batched updates.
      var _this$runConstraints = this.runConstraints(width, height);
      width = _this$runConstraints[0];
      height = _this$runConstraints[1];
      if (handlerName === 'onResizeStop' && this.lastSize) {
        var _this$lastSize3 = this.lastSize;
        width = _this$lastSize3.width;
        height = _this$lastSize3.height;
      }

      // Compare against the base (lastSize-or-props) so that callbacks correctly
      // suppress when the net delta is zero, even if props are stale relative to
      // the accumulated lastSize.
      const dimensionsChanged = width !== baseWidth || height !== baseHeight;

      // Store the size for use in onResizeStop. We do this after the onResizeStop check
      // above so we don't overwrite the stored value with a potentially stale calculation.
      if (handlerName !== 'onResizeStop') {
        this.lastSize = {
          width,
          height
        };
      }

      // Call user-supplied callback if present.
      const cb = typeof this.props[handlerName] === 'function' ? this.props[handlerName] : null;
      // Don't call 'onResize' if dimensions haven't changed.
      const shouldSkipCb = handlerName === 'onResize' && !dimensionsChanged;
      if (cb && !shouldSkipCb) {
        e.persist == null || e.persist();
        cb(e, {
          node,
          size: {
            width,
            height
          },
          handle: axis
        });
      }

      // Reset internal data
      if (handlerName === 'onResizeStop') this.resetData();
    };
  }

  // Render a resize handle given an axis & DOM ref. Ref *must* be attached for
  // the underlying draggable library to work properly.
  renderResizeHandle(handleAxis, ref) {
    const handle = this.props.handle;
    // No handle provided, make the default
    if (!handle) {
      return /*#__PURE__*/React.createElement("span", {
        className: "react-resizable-handle react-resizable-handle-" + handleAxis,
        ref: ref
      });
    }
    // Handle is a function, such as:
    // `handle={(handleAxis) => <span className={...} />}`
    if (typeof handle === 'function') {
      return handle(handleAxis, ref);
    }
    // Handle is a React component (composite or DOM).
    const isDOMElement = typeof handle.type === 'string';
    const props = _objectSpread({
      ref
    }, isDOMElement ? {} : {
      handleAxis
    });
    return /*#__PURE__*/React.cloneElement(handle, props);
  }
  render() {
    // Pass along only props not meant for the `<Resizable>`.`
    const _this$props2 = this.props,
      children = _this$props2.children,
      className = _this$props2.className,
      draggableOpts = _this$props2.draggableOpts,
      width = _this$props2.width,
      height = _this$props2.height,
      handle = _this$props2.handle,
      handleSize = _this$props2.handleSize,
      lockAspectRatio = _this$props2.lockAspectRatio,
      axis = _this$props2.axis,
      minConstraints = _this$props2.minConstraints,
      maxConstraints = _this$props2.maxConstraints,
      onResize = _this$props2.onResize,
      onResizeStop = _this$props2.onResizeStop,
      onResizeStart = _this$props2.onResizeStart,
      resizeHandles = _this$props2.resizeHandles,
      transformScale = _this$props2.transformScale,
      p = _objectWithoutPropertiesLoose(_this$props2, _excluded);

    // What we're doing here is getting the child of this element, and cloning it with this element's props.
    // We are then defining its children as:
    // 1. Its original children (resizable's child's children), and
    // 2. One or more draggable handles.
    return (0, _utils.cloneElement)(children, _objectSpread(_objectSpread({}, p), {}, {
      className: (className ? className + " " : '') + "react-resizable",
      children: [...React.Children.toArray(children.props.children), ...resizeHandles.map(handleAxis => {
        var _this$handleRefs$hand;
        // Create a ref to the handle so that `<DraggableCore>` doesn't have to use ReactDOM.findDOMNode().
        const ref = (_this$handleRefs$hand = this.handleRefs[handleAxis]) != null ? _this$handleRefs$hand : this.handleRefs[handleAxis] = /*#__PURE__*/React.createRef();
        return /*#__PURE__*/React.createElement(_reactDraggable.DraggableCore, _extends({}, draggableOpts, {
          nodeRef: ref,
          key: "resizableHandle-" + handleAxis,
          onStop: this.resizeHandler('onResizeStop', handleAxis),
          onStart: this.resizeHandler('onResizeStart', handleAxis),
          onDrag: this.resizeHandler('onResize', handleAxis)
        }), this.renderResizeHandle(handleAxis, ref));
      })]
    }));
  }
}
exports["default"] = Resizable;
Resizable.propTypes = _propTypes.resizableProps;
Resizable.defaultProps = {
  axis: 'both',
  handleSize: [20, 20],
  lockAspectRatio: false,
  minConstraints: [20, 20],
  maxConstraints: [Infinity, Infinity],
  resizeHandles: ['se'],
  transformScale: 1
};

/***/ },

/***/ "./node_modules/react-resizable/build/ResizableBox.js"
/*!************************************************************!*\
  !*** ./node_modules/react-resizable/build/ResizableBox.js ***!
  \************************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _Resizable = _interopRequireDefault(__webpack_require__(/*! ./Resizable */ "./node_modules/react-resizable/build/Resizable.js"));
var _propTypes2 = __webpack_require__(/*! ./propTypes */ "./node_modules/react-resizable/build/propTypes.js");
const _excluded = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
// <ResizableBox> does not have defaultProps, so we make all of <Resizable>'s defaults optional here
// and add an optional `style` property.

class ResizableBox extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      width: this.props.width,
      height: this.props.height,
      propsWidth: this.props.width,
      propsHeight: this.props.height
    };
    this.onResize = (e, data) => {
      const size = data.size;
      if (this.props.onResize) {
        e.persist == null || e.persist();
        this.setState(size, () => this.props.onResize && this.props.onResize(e, data));
      } else {
        this.setState(size);
      }
    };
  }
  static getDerivedStateFromProps(props, state) {
    // If parent changes height/width, set that in our state.
    if (state.propsWidth !== props.width || state.propsHeight !== props.height) {
      return {
        width: props.width,
        height: props.height,
        propsWidth: props.width,
        propsHeight: props.height
      };
    }
    return null;
  }
  render() {
    // Basic wrapper around a Resizable instance.
    // If you use Resizable directly, you are responsible for updating the child component
    // with a new width and height.
    const _this$props = this.props,
      handle = _this$props.handle,
      handleSize = _this$props.handleSize,
      onResize = _this$props.onResize,
      onResizeStart = _this$props.onResizeStart,
      onResizeStop = _this$props.onResizeStop,
      draggableOpts = _this$props.draggableOpts,
      minConstraints = _this$props.minConstraints,
      maxConstraints = _this$props.maxConstraints,
      lockAspectRatio = _this$props.lockAspectRatio,
      axis = _this$props.axis,
      width = _this$props.width,
      height = _this$props.height,
      resizeHandles = _this$props.resizeHandles,
      style = _this$props.style,
      transformScale = _this$props.transformScale,
      props = _objectWithoutPropertiesLoose(_this$props, _excluded);
    return /*#__PURE__*/React.createElement(_Resizable.default, {
      axis: axis,
      draggableOpts: draggableOpts,
      handle: handle,
      handleSize: handleSize,
      height: this.state.height,
      lockAspectRatio: lockAspectRatio,
      maxConstraints: maxConstraints,
      minConstraints: minConstraints,
      onResizeStart: onResizeStart,
      onResize: this.onResize,
      onResizeStop: onResizeStop,
      resizeHandles: resizeHandles,
      transformScale: transformScale,
      width: this.state.width
    }, /*#__PURE__*/React.createElement("div", _extends({}, props, {
      style: _objectSpread(_objectSpread({}, style), {}, {
        width: this.state.width + 'px',
        height: this.state.height + 'px'
      })
    })));
  }
}
exports["default"] = ResizableBox;
// PropTypes are identical to <Resizable>, except that children are not strictly required to be present.
ResizableBox.propTypes = _objectSpread(_objectSpread({}, _propTypes2.resizableProps), {}, {
  children: _propTypes.default.element
});

/***/ },

/***/ "./node_modules/react-resizable/build/propTypes.js"
/*!*********************************************************!*\
  !*** ./node_modules/react-resizable/build/propTypes.js ***!
  \*********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.resizableProps = void 0;
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// <Resizable>

const resizableProps = exports.resizableProps = {
  /*
  * Restricts resizing to a particular axis (default: 'both')
  * 'both' - allows resizing by width or height
  * 'x' - only allows the width to be changed
  * 'y' - only allows the height to be changed
  * 'none' - disables resizing altogether
  * */
  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),
  className: _propTypes.default.string,
  /*
  * Require that one and only one child be present.
  * */
  children: _propTypes.default.element.isRequired,
  /*
  * These will be passed wholesale to react-draggable's DraggableCore
  * */
  draggableOpts: _propTypes.default.shape({
    allowAnyClick: _propTypes.default.bool,
    cancel: _propTypes.default.string,
    children: _propTypes.default.node,
    disabled: _propTypes.default.bool,
    enableUserSelectHack: _propTypes.default.bool,
    // #251: Check for Element to support SSR environments where DOM globals don't exist
    offsetParent: typeof Element !== 'undefined' ? _propTypes.default.instanceOf(Element) : _propTypes.default.any,
    grid: _propTypes.default.arrayOf(_propTypes.default.number),
    handle: _propTypes.default.string,
    nodeRef: _propTypes.default.object,
    onStart: _propTypes.default.func,
    onDrag: _propTypes.default.func,
    onStop: _propTypes.default.func,
    onMouseDown: _propTypes.default.func,
    scale: _propTypes.default.number
  }),
  /*
  * Initial height
  * */
  height: function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const props = args[0];
    // Required if resizing height or both
    if (props.axis === 'both' || props.axis === 'y') {
      return _propTypes.default.number.isRequired(...args);
    }
    return _propTypes.default.number(...args);
  },
  /*
  * Customize cursor resize handle
  * */
  handle: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  /*
  * If you change this, be sure to update your css
  * */
  handleSize: _propTypes.default.arrayOf(_propTypes.default.number),
  lockAspectRatio: _propTypes.default.bool,
  /*
  * Max X & Y measure
  * */
  maxConstraints: _propTypes.default.arrayOf(_propTypes.default.number),
  /*
  * Min X & Y measure
  * */
  minConstraints: _propTypes.default.arrayOf(_propTypes.default.number),
  /*
  * Called on stop resize event
  * */
  onResizeStop: _propTypes.default.func,
  /*
  * Called on start resize event
  * */
  onResizeStart: _propTypes.default.func,
  /*
  * Called on resize event
  * */
  onResize: _propTypes.default.func,
  /*
  * Defines which resize handles should be rendered (default: 'se')
  * 's' - South handle (bottom-center)
  * 'w' - West handle (left-center)
  * 'e' - East handle (right-center)
  * 'n' - North handle (top-center)
  * 'sw' - Southwest handle (bottom-left)
  * 'nw' - Northwest handle (top-left)
  * 'se' - Southeast handle (bottom-right)
  * 'ne' - Northeast handle (top-center)
  * */
  resizeHandles: _propTypes.default.arrayOf(_propTypes.default.oneOf(['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne'])),
  /*
  * If `transform: scale(n)` is set on the parent, this should be set to `n`.
  * */
  transformScale: _propTypes.default.number,
  /*
   * Initial width
   */
  width: function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    const props = args[0];
    // Required if resizing width or both
    if (props.axis === 'both' || props.axis === 'x') {
      return _propTypes.default.number.isRequired(...args);
    }
    return _propTypes.default.number(...args);
  }
};

/***/ },

/***/ "./node_modules/react-resizable/build/utils.js"
/*!*****************************************************!*\
  !*** ./node_modules/react-resizable/build/utils.js ***!
  \*****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cloneElement = cloneElement;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// React.addons.cloneWithProps look-alike that merges style & className.
function cloneElement(element, props) {
  if (props.style && element.props.style) {
    props.style = _objectSpread(_objectSpread({}, element.props.style), props.style);
  }
  if (props.className && element.props.className) {
    props.className = element.props.className + " " + props.className;
  }
  return /*#__PURE__*/_react.default.cloneElement(element, props);
}

/***/ },

/***/ "./node_modules/react-resizable/index.js"
/*!***********************************************!*\
  !*** ./node_modules/react-resizable/index.js ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

module.exports = function() {
  throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
};

module.exports.Resizable = __webpack_require__(/*! ./build/Resizable */ "./node_modules/react-resizable/build/Resizable.js")["default"];
module.exports.ResizableBox = __webpack_require__(/*! ./build/ResizableBox */ "./node_modules/react-resizable/build/ResizableBox.js")["default"];


/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

"use strict";
module.exports = window["React"];

/***/ },

/***/ "react-dom"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/orthodox-calendar-block/block.json"
/*!************************************************!*\
  !*** ./src/orthodox-calendar-block/block.json ***!
  \************************************************/
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"orthodox-calendar-block/orthodox-calendar-block","version":"0.10.1","title":"Orthodox Calendar","category":"widgets","icon":"calendar-alt","description":"Displays the daily Orthodox Calendar information","example":{},"attributes":{"dp":{"type":"integer","default":0},"dt":{"type":"integer","default":1},"hh":{"type":"integer","default":1},"ll":{"type":"integer","default":3},"ss":{"type":"integer","default":1},"tt":{"type":"integer","default":1},"pw":{"type":"integer","default":600},"ph":{"type":"integer","default":500},"pr":{"type":"string","default":"yes"},"pd":{"type":"string","default":"yes"},"ps":{"type":"string","default":"yes"},"ln":{"type":"array","default":["en","ru"]},"dl":{"type":"string","default":"en"},"btn_language":{"type":"integer","default":"0"},"btn_today":{"type":"integer","default":"1"},"btn_day":{"type":"integer","default":"1"},"text_prev":{"type":"string","default":"❰"},"text_prev_acc":{"type":"string","default":"Previous Day"},"text_curr":{"type":"string","default":"⬤"},"text_curr_acc":{"type":"string","default":"Today"},"text_next":{"type":"string","default":"❱"},"text_next_acc":{"type":"string","default":"Next Day"},"text_date":{"type":"string","default":"Show Date Picker"},"text_date_acc":{"type":"string","default":"Pick Date"},"text_week_prev":{"type":"string","default":"❰❰"},"text_week_prev_acc":{"type":"string","default":"Previous Week"},"text_week_next":{"type":"string","default":"❱❱"},"text_week_next_acc":{"type":"string","default":"Previous Week"},"text_language":{"type":"string","default":"”"},"text_language_acc":{"type":"string","default":"Switch Language"}},"supports":{"color":{"text":true,"background":true},"interactivity":true},"textdomain":"orthodox-calendar-block","viewScript":"file:./view.js","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","styles":[{"name":"none","label":"None","isDefault":true},{"name":"blue","label":"Blue"},{"name":"grey","label":"Grey"},{"name":"red","label":"Red"}]}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			let notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn, priority] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"orthodox-calendar-block/index": 0,
/******/ 			"orthodox-calendar-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = globalThis["webpackChunkorthodox_calendar_block"] ||= [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["orthodox-calendar-block/style-index"], () => (__webpack_require__("./src/orthodox-calendar-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map