webpackHotUpdate("static/development/pages/services.js",{

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");






var _jsxFileName = "/Users/maho15/Projects/djneuro/pages/services.js";



var background = {
  backgroundImage: 'url("/static/images/artwork/nestin-cherry2.png")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top right',
  color: 'white'
};
var resourceSection = {
  padding: '40px 0 15px',
  background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.7))'
};
var resourceSubtitle = {
  fontSize: '0.9em',
  lineHeight: '0.75'
};
var resourcesListRow = {
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none'
};
var resourcePanel = {
  width: '17%',
  borderRadius: '4px',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '20px 8px',
  margin: '5px'
};
var resourceFooter = {// fontSize: '0.85em',
  // lineHeight: '0.75',
  // textAlign: 'left',
  // padding: '5px 5%'
};
var inlineLink = {
  display: 'inline-block',
  textDecoration: 'none',
  color: '#41B0F7' // muted blue

};
var servicesSection = {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '2%',
  marginTop: '3%',
  paddingBottom: '8%'
};
var supportType = {
  width: '31%',
  margin: '0 0.3%',
  listStyleType: 'disc',
  border: '3px solid rgba(255,255,255,0.75)',
  borderRadius: '5px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)'
};
var textLeft = {
  padding: '10px 15px',
  textAlign: 'left',
  lineHeight: '1.2em',
  fontSize: '90%',
  fontWeight: '200'
};
var servicePanelTitle = {
  paddingTop: '15px',
  fontWeight: '400',
  height: '2.0em',
  borderBottom: '2px solid rgba(255,255,255,0.75'
};
var formContainer = {
  margin: '2% 10%',
  paddingBottom: '8%',
  paddingLeft: '2%',
  paddingTop: '2%',
  border: 'solid 2px white',
  background: 'rgba(0, 0, 0, 0.4)'
};
var formgroup = {
  display: 'block',
  textAlign: 'left',
  marginBottom: '2%'
};
var inputField = {
  borderRadius: '4px',
  height: '30px',
  width: '200px'
};
var radioField = {
  marginLeft: '15px'
};

var ApplyButton =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ApplyButton, _React$Component);

  function ApplyButton(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ApplyButton);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ApplyButton).call(this, props));
    _this.state = {
      radioChecked: [false, false, false],
      id: _this.props.id
    };
    _this.check = _this.check.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ApplyButton, [{
    key: "check",
    value: function check(id, e) {
      if (id === 1) {
        this.setState(function (state) {
          return {
            radioChecked: [true, false, false]
          };
        });
      } else if (id === 2) {
        this.setState(function (state) {
          return {
            radioChecked: [false, true, false]
          };
        });
      } else if (id === 3) {
        this.setState(function (state) {
          return {
            radioChecked: [false, false, true]
          };
        });
      }

      console.log('custom service checked!');
      console.log('id is: ', id);
      console.log('e is: ', e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.id;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-4030263169",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick(e) {
          return _this2.check(id, e);
        },
        className: "jsx-4030263169",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Apply"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "4030263169",
        __self: this
      }, "button.jsx-4030263169{border:2px solid white;background-color:transparent;color:white;padding:12px 28px;border-radius:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhvMTUvUHJvamVjdHMvZGpuZXVyby9wYWdlcy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0STRCLEFBR2dELHVCQUNNLDZCQUNqQixZQUNNLGtCQUNBLGtCQUN0QiIsImZpbGUiOiIvVXNlcnMvbWFobzE1L1Byb2plY3RzL2RqbmV1cm8vcGFnZXMvc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcblxuY29uc3QgYmFja2dyb3VuZCA9IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCIvc3RhdGljL2ltYWdlcy9hcnR3b3JrL25lc3Rpbi1jaGVycnkyLnBuZ1wiKScsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAndG9wIHJpZ2h0JyxcbiAgICBjb2xvcjogJ3doaXRlJ1xufTtcblxuY29uc3QgcmVzb3VyY2VTZWN0aW9uID0ge1xuICAgIHBhZGRpbmc6ICc0MHB4IDAgMTVweCcsXG4gICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDAuNykpJ1xufVxuXG5jb25zdCByZXNvdXJjZVN1YnRpdGxlID0ge1xuICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgIGxpbmVIZWlnaHQ6ICcwLjc1J1xufVxuY29uc3QgcmVzb3VyY2VzTGlzdFJvdyA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgbGlzdFN0eWxlOiAnbm9uZSdcbn1cblxuY29uc3QgcmVzb3VyY2VQYW5lbCA9IHtcbiAgICB3aWR0aDogJzE3JScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNiknLFxuICAgIHBhZGRpbmc6ICcyMHB4IDhweCcsXG4gICAgbWFyZ2luOiAnNXB4J1xufVxuXG5jb25zdCByZXNvdXJjZUZvb3RlciA9IHtcbiAgICAvLyBmb250U2l6ZTogJzAuODVlbScsXG4gICAgLy8gbGluZUhlaWdodDogJzAuNzUnLFxuICAgIC8vIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIC8vIHBhZGRpbmc6ICc1cHggNSUnXG59XG5cbmNvbnN0IGlubGluZUxpbmsgPSB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjb2xvcjogJyM0MUIwRjcnIC8vIG11dGVkIGJsdWVcbn1cblxuY29uc3Qgc2VydmljZXNTZWN0aW9uID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBtYXJnaW5MZWZ0OiAnMiUnLFxuICAgIG1hcmdpblRvcDogJzMlJyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOCUnXG59XG5cbmNvbnN0IHN1cHBvcnRUeXBlID0ge1xuICAgIHdpZHRoOiAnMzElJyxcbiAgICBtYXJnaW46ICcwIDAuMyUnLFxuICAgIGxpc3RTdHlsZVR5cGU6ICdkaXNjJyxcbiAgICBib3JkZXI6ICczcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjc1KScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNyknLFxufVxuXG5jb25zdCB0ZXh0TGVmdCA9IHtcblxuICAgIHBhZGRpbmc6ICcxMHB4IDE1cHgnLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGxpbmVIZWlnaHQ6ICcxLjJlbScsXG4gICAgZm9udFNpemU6ICc5MCUnLFxuICAgIGZvbnRXZWlnaHQ6ICcyMDAnXG59XG5cblxuY29uc3Qgc2VydmljZVBhbmVsVGl0bGUgPSB7XG4gICAgcGFkZGluZ1RvcDogJzE1cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxuICAgIGhlaWdodDogJzIuMGVtJyxcbiAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjc1J1xufVxuXG5jb25zdCBmb3JtQ29udGFpbmVyID0ge1xuICAgIG1hcmdpbjogJzIlIDEwJScsXG4gICAgcGFkZGluZ0JvdHRvbTogJzglJyxcbiAgICBwYWRkaW5nTGVmdDogJzIlJyxcbiAgICBwYWRkaW5nVG9wOiAnMiUnLFxuICAgIGJvcmRlcjogJ3NvbGlkIDJweCB3aGl0ZScsXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC40KSdcbn1cblxuY29uc3QgZm9ybWdyb3VwID0ge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMiUnXG59XG5cbmNvbnN0IGlucHV0RmllbGQgPSB7XG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICB3aWR0aDogJzIwMHB4J1xufVxuXG5jb25zdCByYWRpb0ZpZWxkID0ge1xuICAgIG1hcmdpbkxlZnQ6ICcxNXB4J1xufVxuXG5cbmNsYXNzIEFwcGx5QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgICAgICAgcmFkaW9DaGVja2VkOiBbZmFsc2UsIGZhbHNlLCBmYWxzZV0sXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoZWNrID0gdGhpcy5jaGVjay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNoZWNrKGlkLCBlKSB7XG4gICAgICAgIGlmIChpZCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgIHJhZGlvQ2hlY2tlZDogW3RydWUsIGZhbHNlLCBmYWxzZV1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChpZCA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgIHJhZGlvQ2hlY2tlZDogW2ZhbHNlLCB0cnVlLCBmYWxzZV1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChpZCA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgIHJhZGlvQ2hlY2tlZDogW2ZhbHNlLCBmYWxzZSwgdHJ1ZV1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ2N1c3RvbSBzZXJ2aWNlIGNoZWNrZWQhJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpZCBpczogJywgaWQpO1xuICAgICAgICBjb25zb2xlLmxvZygnZSBpczogJywgZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGlkPXRoaXMuc3RhdGUuaWQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jaGVjayhpZCwgZSl9PkFwcGx5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgcmFkaW9DaGVja2VkID0gW2ZhbHNlLCB0cnVlLCBmYWxzZV07XG5cbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgc3R5bGU9e2JhY2tncm91bmR9PlxuICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jlc291cmNlU2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgPGgzPkZyZWUgUmVzb3VyY2VzPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiIHN0eWxlPXtyZXNvdXJjZVN1YnRpdGxlfT5EYXRhSm9pbnQgTmV1cm8gaXMgdGhlIHByaW5jaXBhbCBjb250cmlidXRvciB0byB0aGUgZnJlZSwgY29tbXVuaXR5LW9yaWVudGVkLCBvcGVuLXNvdXJjZSB0b29scyBjb21wcmlzaW5nIHRoZSBEYXRhSm9pbnQgZWNvc3lzdGVtOjwvcD5cbiAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3Jlc291cmNlc0xpc3RSb3d9PlxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3Jlc291cmNlUGFuZWx9PkRhdGFKb2ludCBSZWZlcmVuY2UgRG9jdW1lbnRhdGlvbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmRhdGFqb2ludC5vcmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvaWNvbnMvZG9jX3doaXRlLnBuZ1wiLz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXtyZXNvdXJjZVBhbmVsfT5EYXRhSm9pbnQgPGJyIC8+VHV0b3JpYWxzICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R1dG9yaWFscy5kYXRham9pbnQub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2ljb25zL2JsYWNrYm9hcmRfd2hpdGUucG5nXCIgLz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXtyZXNvdXJjZVBhbmVsfT5EYXRhSm9pbnQgU2VydmVyIENvbmZpZ3VyYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RhdGFqb2ludC9teXNxbC1kb2NrZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvaWNvbnMvc2VydmVyLWNvbmZpZy13aGl0ZS5wbmdcIiAvPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3Jlc291cmNlUGFuZWx9PkRhdGFKb2ludCA8YnIgLz5QeXRob24gQ2xpZW50ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGF0YWpvaW50L2RhdGFqb2ludC1weXRob25cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvaWNvbnMvcHl0aG9uLWxvZ28tbW9ub2MucG5nXCIgLz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXtyZXNvdXJjZVBhbmVsfT5EYXRhSm9pbnQgPGJyIC8+TUFUTEFCIENsaWVudCAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RhdGFqb2ludC9kYXRham9pbnQtbWF0bGFiXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2ljb25zL21hdGxhYi1sb2dvLW1vbm9jLnBuZ1wiIC8+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiIHN0eWxlPXtyZXNvdXJjZUZvb3Rlcn0+SW4gY29sbGFib3JhdGlvbiB3aXRoIEthcmVsIFN2b2JvZGEncyBMYWIgYW5kIExhd3JlbmNlIEJlcmtlbGV5IExhYiwgRGF0YUpvaW50IE5ldXJvIGlzIHByZXBhcmluZyBhIHNldCBvZiBcIkNhbm9uaWNhbCBEYXRhIFxuICAgICAgICAgICAgICAgICAgICBQaXBlbGluZXMgZm9yIE5ldXJvcGh5c2lvbG9neVwiIHRvIGJlIHByZXNlbnRlZCBhdCB0aGUgPGEgc3R5bGU9e2lubGluZUxpbmt9IGhyZWY9XCJodHRwczovL3d3dy5zZm4ub3JnL01lZXRpbmdzL05ldXJvc2NpZW5jZS0yMDE5XCI+U29jaWV0eSBmb3IgXG4gICAgICAgICAgICAgICAgICAgIE5ldXJvc2NpZW5jZSBDb25mZXJlbmNlIGluIE5vdmVtYmVyIDIwMTk8L2E+LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdHJ1Y3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICA8aDM+U3VwcG9ydCBUeXBlPC9oMz5cbiAgICAgICAgICAgICAgICA8aDI+VW5kZXIgQ29uc3RydWN0aW9uPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3NlcnZpY2VzU2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3VwcG9ydFR5cGV9PlxuICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3NlcnZpY2VQYW5lbFRpdGxlfT5CYXNpYyBTdXBwb3J0PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dExlZnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmFzaWMgU3VwcG9ydCBpcyBhIHN1YnNjcmlwdGlvbiBzZXJ2aWNlIG9mZmVyZWQgdG8gcXVhbGlmaWVkIHJlc2VhcmNoIGdyb3VwcyB3aG8gdXNlIERhdGFKb2ludCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgcmVxdWlyZSBvY2Nhc2lvbmFsIG9yIHNlbWktcmVndWxhciBzdXBwb3J0IGFuZCBhc3Npc3RhbmNlLjwvcD4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5Db3N0OiA8L2I+JDEyMDAveWVhcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SW5jbHVkZXMgYSBmcmVlIG9ubGluZSA8Yj5cIkludGVyYWN0aXZlIENvdXJzZSBmb3IgRGF0YUpvaW50ICBQcmFjdGl0aW9uZXJzXCI8L2I+ICgxMCBzZWF0cykuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWNjZXNzIHRvIG9uLWRlbWFuZCB0cmFpbmluZyB3b3Jrc2hvcHMgZm9yIG5vdmljZSwgaW50ZXJtZWRpYXRlLCBvciBhZHZhbmNlZCBwcmFjdGl0aW9uZXJzOjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+b24tc2l0ZSB3b3Jrc2hvcHM6ICQxNTAwL2RheS9pbnN0cnVjdG9yICsgdHJhdmVsIGV4cGVuc2VzLiBFYWNoIGRheSBpbmNsdWRlcyBzaXggaG91cnMgb2YgaW5zdHJ1Y3Rpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaW50ZXJhY3RpdmUgaGFuZHMtb24gdHV0b3JpYWxzIHdpdGggdGhlIHJlc3Qgb2YgdGhlIHRpbWUgZm9yIHF1ZXN0aW9ucyBhbmQgZGlzY3Vzc2lvbi4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaW1pdCAxNSB0cmFpbmVlcy9pbnN0cnVjdG9yLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5yZW1vdGUgd29ya3Nob3BzOiAkNTAwIHBlciAzLWhvdXIgYmxvY2sgKDEwIHNlYXRzKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWNjZXNzIHRvIHRpY2tldC1iYXNlZCBwcmlvcml0eSBzdXBwb3J0OjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QXNzaXN0YW5jZSB3aXRoIHBpcGVsaW5lIGRlc2lnbiBhbmQgZXhlY3V0aW9uOiAkOTUvaG91ci9lbmdpbmVlciBpbiAxLWhvdXIgYmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFzc2lzdGFuY2Ugd2l0aCBsb2NhbCBJVCBjb25maWd1cmF0aW9uOiAkOTUvaG91ci9lbmdpbmVlciBpbiA0LWhvdXIgYmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFkbWluaXN0cmF0aW9uIG9mIGNsb3VkIHN0b3JhZ2UgYW5kIHNlcnZlcnM6ICQ5NS9ob3VyL2VuZ2luZWVyIGluIDQtaG91ciBibG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEFwcGx5QnV0dG9uIGlkPVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3VwcG9ydFR5cGV9PlxuICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3NlcnZpY2VQYW5lbFRpdGxlfT5NYW5hZ2VkIERhdGFiYXNlIEhvc3RpbmcgKEJldGEpPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dExlZnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+RGF0YUpvaW50IE5ldXJvPC9iPiBvZmZlcnMgbWFuYWdlZCBEYXRhSm9pbnQtb3B0aW1pemVkIGNsb3VkIGhvc3RpbmcgZm9yIGFuIGFkZGl0aW9uYWwgJDQsODAwL3llYXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50cm9kdWN0b3J5IHByaWNpbmcuIFRoaXMgc2VydmljZSBpcyBhbiBvcHRpb24gb2ZmZXJlZCB0byBxdWFsaWZpZWQgZ3JvdXBzIHdpdGggYSBCYXNpYyBTdXBwb3J0IHN1YnNjcmlwdGlvbi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GZWF0dXJlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGF0YUpvaW50LW9wdGltaXplZCByZWxhdGlvbmFsIERhdGFiYXNlIFNlcnZlciArIG9iamVjdCBzdG9yYWdlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+dXAgdG8gMSBUaUIgcmVsYXRpb25hbCBzdG9yYWdlICsgMTAgVGlCIG9iamVjdCBzdG9yYWdlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+dW5saW1pdGVkIHRyYW5zZmVycyBpbiBhbmQgdXAgdG8gMiBUaUIgLyBtb250aCB0cmFuc2ZlcnMgb3V0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+dW5saW1pdGVkIHRyYW5zZmVycyB0byBBV1MgY29tcHV0ZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EYXRhYmFzZSBhY2Nlc3MgVVJMICAmbHQ7eW91cmxhYiZndDsuZGpodWIuaW88L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZWN1cmUgY29ubmVjdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhpZ2ggcGVyZm9ybWFuY2UgYW5kIHVwdGltZSA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5VbmxpbWl0ZWQgZGF0YSBwaXBlbGluZXMgYW5kIHNjaGVtYXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TdXBwb3J0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Vc2VyIGFjY2VzcyBtYW5hZ2VtZW50ICgxMCB1c2Vycyk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TbmFwc2hvdC1iYXNlZCBiYWNrdXBzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QXZhaWxhYmlsaXR5IGFuZCBwZXJmb3JtYW5jZSBtb25pdG9yaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QXBwbHlCdXR0b24gaWQ9XCIyXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdXBwb3J0VHlwZX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17c2VydmljZVBhbmVsVGl0bGV9PkN1c3RvbSBTZXJ2aWNlIGFuZCBEZXZlbG9wbWVudDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRMZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciBtb3JlIGRlbWFuZGluZyBwcm9qZWN0cywgRGF0YUpvaW50IE5ldXJvIG9mZmVycyBkZXZlbG9wbWVudCBzZXJ2aWNlcyB0byBuZXVyb3NjaWVuY2UgcHJvamVjdHMgdW5kZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0IGN1c3RvbSBjb250cmFjdHMuIFRoZXNlIHByb2plY3RzIGNvbW1vbmx5IGluY2x1ZGU6IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGVzaWduIG9mIGRhdGEgc2NpZW5jZSBwbGFucyBhbmQgZGF0YSBzaGFyaW5nIHBsYW5zIGZvciBuZXVyb3NjaWVuY2UgZm9yIHByb2plY3RzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SW50ZWdyYXRpb24gd2l0aCBpbnN0cnVtZW50YXRpb24gYW5kIGxhYiBpbmZvcm1hdGlvbiBtYW5hZ2VtZW50IHN5c3RlbXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Kb2ludCBwaXBlbGluZSBkZXZlbG9wbWVudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPldlYiBpbnRlcmZhY2VzIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRhdGEgZXhwb3J0LCBtaWdyYXRpb24sIHNoYXJpbmcsIGFuZCBwdWJsaXNoaW5nPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QXBwbHlCdXR0b24gaWQ9XCIzXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Zm9ybUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9kYXRham9pbnQuaW8vZGpOZXVyb0lucXVpcnlcIiBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvcm1ncm91cH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29udGFjdCBQZXJzb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtpbnB1dEZpZWxkfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJDb250YWN0IFBlcnNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtmb3JtZ3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17aW5wdXRGaWVsZH0gdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtmb3JtZ3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByaW5jaXBhbCBJbnZlc3RpZ2F0b3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtpbnB1dEZpZWxkfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaVwiIHBsYWNlaG9sZGVyPVwiUHJpbmNpcGFsIEludmVzdGlnYXRvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtmb3JtZ3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlcGFydG1lbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtpbnB1dEZpZWxkfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXBhcnRtZW50XCIgcGxhY2Vob2xkZXI9XCJEZXBhcnRtZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvcm1ncm91cH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SW5zdGl0dXRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtpbnB1dEZpZWxkfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnN0aXR1dGlvblwiIHBsYWNlaG9sZGVyPVwiSW5zdGl0dXRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Zm9ybWdyb3VwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9qZWN0IERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uRmllbGRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJwcm9qZWN0XCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IERlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvcm1ncm91cH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3JhZGlvRmllbGR9IHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3JhZGlvQ2hlY2tlZFswXX0gbmFtZT1cInN1YnNjcmlwdGlvbl90eXBlXCIgdmFsdWU9XCJiYXNpY1wiIC8+IEJhc2ljIFN1cHBvcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17cmFkaW9GaWVsZH0gdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17cmFkaW9DaGVja2VkWzFdfSBuYW1lPVwic3Vic2NyaXB0aW9uX3R5cGVcIiB2YWx1ZT1cIm1hbmFnZWQgZGIgaG9zdGluZ1wiIC8+IE1hbmFnZWQgRGF0YWJhc2UgSG9zdGluZyAoYmV0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17cmFkaW9GaWVsZH0gdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17cmFkaW9DaGVja2VkWzJdfSBuYW1lPVwic3Vic2NyaXB0aW9uX3R5cGVcIiB2YWx1ZT1cImN1c3RvbSBzZXJ2aWNlXCIgLz4gQ3VzdG9tIFNlcnZpY2UgYW5kIERldmVsb3BtZW50XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIj5TZW5kPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnN0cnVjdGlvbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb25zdHJ1Y3Rpb24gaDMge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogNzVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjhweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNkZXNjcmlwdGlvbkZpZWxkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNSU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzOyJdfQ== */\n/*@ sourceURL=/Users/maho15/Projects/djneuro/pages/services.js */"));
    }
  }]);

  return ApplyButton;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var radioChecked = [false, true, false];

var Services = function Services() {
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    style: background,
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    style: resourceSection,
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Free Resources"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: resourceSubtitle,
    className: "jsx-3308888322" + " " + "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "DataJoint Neuro is the principal contributor to the free, community-oriented, open-source tools comprising the DataJoint ecosystem:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
    style: resourcesListRow,
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
    style: resourcePanel,
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "DataJoint Reference Documentation", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "https://docs.datajoint.org",
    target: "_blank",
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "static/images/icons/doc_white.png",
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
    style: resourcePanel,
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "DataJoint ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), "Tutorials", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "https://tutorials.datajoint.org",
    target: "_blank",
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "static/images/icons/blackboard_white.png",
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
    style: resourcePanel,
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "DataJoint Server Configuration", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "https://github.com/datajoint/mysql-docker",
    target: "_blank",
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "static/images/icons/server-config-white.png",
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
    style: resourcePanel,
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "DataJoint ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), "Python Client", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "https://github.com/datajoint/datajoint-python",
    target: "_blank",
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "static/images/icons/python-logo-monoc.png",
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
    style: resourcePanel,
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "DataJoint ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), "MATLAB Client", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "https://github.com/datajoint/datajoint-matlab",
    target: "_blank",
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "static/images/icons/matlab-logo-monoc.png",
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: resourceFooter,
    className: "jsx-3308888322" + " " + "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "In collaboration with Karel Svoboda's Lab and Lawrence Berkeley Lab, DataJoint Neuro is preparing a set of \"Canonical Data Pipelines for Neurophysiology\" to be presented at the ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    style: inlineLink,
    href: "https://www.sfn.org/Meetings/Neuroscience-2019",
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Society for Neuroscience Conference in November 2019"), ".")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-3308888322" + " " + "construction",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Support Type"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
    className: "jsx-3308888322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Under Construction"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "3308888322",
    __self: this
  }, ".construction.jsx-3308888322{height:500px;}.construction.jsx-3308888322 h3.jsx-3308888322{padding-top:80px;}h3.jsx-3308888322{margin:0;}img.jsx-3308888322{height:70px;}a.jsx-3308888322{display:block;margin-top:13px;}button.jsx-3308888322{border:2px solid white;background-color:transparent;color:white;padding:12px 28px;border-radius:4px;}label.jsx-3308888322{margin-right:14px;font-size:90%;vertical-align:top;}#descriptionField.jsx-3308888322{width:400px;height:150px;border-radius:4px;}@media (max-width:768px){.subtitle.jsx-3308888322{line-height:1.2;font-size:0.85em;text-align:left;padding:5px 5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhvMTUvUHJvamVjdHMvZGpuZXVyby9wYWdlcy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErUm9CLEFBRzhCLEFBR0ksQUFHUixBQUtHLEFBSUUsQUFLUyxBQU9MLEFBTU4sQUFPUSxTQWpDeEIsR0FLQSxBQXNCaUIsQ0FqQ2pCLENBZW9CLEVBeUJLLENBckN6QixDQXdCa0IsS0FQZSxFQWNYLEtBbEJ0QixFQVl1QixDQWFDLFVBTnhCLE1BT3VCLEVBYnZCLENBUmdCLFlBQ00sQUFxQmxCLGtCQXBCa0Isa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9tYWhvMTUvUHJvamVjdHMvZGpuZXVyby9wYWdlcy9zZXJ2aWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnO1xuXG5jb25zdCBiYWNrZ3JvdW5kID0ge1xuICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcIi9zdGF0aWMvaW1hZ2VzL2FydHdvcmsvbmVzdGluLWNoZXJyeTIucG5nXCIpJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AgcmlnaHQnLFxuICAgIGNvbG9yOiAnd2hpdGUnXG59O1xuXG5jb25zdCByZXNvdXJjZVNlY3Rpb24gPSB7XG4gICAgcGFkZGluZzogJzQwcHggMCAxNXB4JyxcbiAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMC43KSknXG59XG5cbmNvbnN0IHJlc291cmNlU3VidGl0bGUgPSB7XG4gICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgbGluZUhlaWdodDogJzAuNzUnXG59XG5jb25zdCByZXNvdXJjZXNMaXN0Um93ID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBsaXN0U3R5bGU6ICdub25lJ1xufVxuXG5jb25zdCByZXNvdXJjZVBhbmVsID0ge1xuICAgIHdpZHRoOiAnMTclJyxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC42KScsXG4gICAgcGFkZGluZzogJzIwcHggOHB4JyxcbiAgICBtYXJnaW46ICc1cHgnXG59XG5cbmNvbnN0IHJlc291cmNlRm9vdGVyID0ge1xuICAgIC8vIGZvbnRTaXplOiAnMC44NWVtJyxcbiAgICAvLyBsaW5lSGVpZ2h0OiAnMC43NScsXG4gICAgLy8gdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgLy8gcGFkZGluZzogJzVweCA1JSdcbn1cblxuY29uc3QgaW5saW5lTGluayA9IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiAnIzQxQjBGNycgLy8gbXV0ZWQgYmx1ZVxufVxuXG5jb25zdCBzZXJ2aWNlc1NlY3Rpb24gPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIG1hcmdpbkxlZnQ6ICcyJScsXG4gICAgbWFyZ2luVG9wOiAnMyUnLFxuICAgIHBhZGRpbmdCb3R0b206ICc4JSdcbn1cblxuY29uc3Qgc3VwcG9ydFR5cGUgPSB7XG4gICAgd2lkdGg6ICczMSUnLFxuICAgIG1hcmdpbjogJzAgMC4zJScsXG4gICAgbGlzdFN0eWxlVHlwZTogJ2Rpc2MnLFxuICAgIGJvcmRlcjogJzNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNzUpJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC43KScsXG59XG5cbmNvbnN0IHRleHRMZWZ0ID0ge1xuXG4gICAgcGFkZGluZzogJzEwcHggMTVweCcsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbGluZUhlaWdodDogJzEuMmVtJyxcbiAgICBmb250U2l6ZTogJzkwJScsXG4gICAgZm9udFdlaWdodDogJzIwMCdcbn1cblxuXG5jb25zdCBzZXJ2aWNlUGFuZWxUaXRsZSA9IHtcbiAgICBwYWRkaW5nVG9wOiAnMTVweCcsXG4gICAgZm9udFdlaWdodDogJzQwMCcsXG4gICAgaGVpZ2h0OiAnMi4wZW0nLFxuICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNzUnXG59XG5cbmNvbnN0IGZvcm1Db250YWluZXIgPSB7XG4gICAgbWFyZ2luOiAnMiUgMTAlJyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOCUnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMiUnLFxuICAgIHBhZGRpbmdUb3A6ICcyJScsXG4gICAgYm9yZGVyOiAnc29saWQgMnB4IHdoaXRlJyxcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjQpJ1xufVxuXG5jb25zdCBmb3JtZ3JvdXAgPSB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBtYXJnaW5Cb3R0b206ICcyJSdcbn1cblxuY29uc3QgaW5wdXRGaWVsZCA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGhlaWdodDogJzMwcHgnLFxuICAgIHdpZHRoOiAnMjAwcHgnXG59XG5cbmNvbnN0IHJhZGlvRmllbGQgPSB7XG4gICAgbWFyZ2luTGVmdDogJzE1cHgnXG59XG5cblxuY2xhc3MgQXBwbHlCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICAgICAgICByYWRpb0NoZWNrZWQ6IFtmYWxzZSwgZmFsc2UsIGZhbHNlXSxcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2hlY2sgPSB0aGlzLmNoZWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY2hlY2soaWQsIGUpIHtcbiAgICAgICAgaWYgKGlkID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAgICAgICAgICAgcmFkaW9DaGVja2VkOiBbdHJ1ZSwgZmFsc2UsIGZhbHNlXVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlkID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAgICAgICAgICAgcmFkaW9DaGVja2VkOiBbZmFsc2UsIHRydWUsIGZhbHNlXVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlkID09PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAgICAgICAgICAgcmFkaW9DaGVja2VkOiBbZmFsc2UsIGZhbHNlLCB0cnVlXVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnY3VzdG9tIHNlcnZpY2UgY2hlY2tlZCEnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2lkIGlzOiAnLCBpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlIGlzOiAnLCBlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoaWQ9dGhpcy5zdGF0ZS5pZCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmNoZWNrKGlkLCBlKX0+QXBwbHk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAyOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCByYWRpb0NoZWNrZWQgPSBbZmFsc2UsIHRydWUsIGZhbHNlXTtcblxuY29uc3QgU2VydmljZXMgPSAoKSA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICAgPGRpdiBzdHlsZT17YmFja2dyb3VuZH0+XG4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17cmVzb3VyY2VTZWN0aW9ufT5cbiAgICAgICAgICAgICAgICA8aDM+RnJlZSBSZXNvdXJjZXM8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCIgc3R5bGU9e3Jlc291cmNlU3VidGl0bGV9PkRhdGFKb2ludCBOZXVybyBpcyB0aGUgcHJpbmNpcGFsIGNvbnRyaWJ1dG9yIHRvIHRoZSBmcmVlLCBjb21tdW5pdHktb3JpZW50ZWQsIG9wZW4tc291cmNlIHRvb2xzIGNvbXByaXNpbmcgdGhlIERhdGFKb2ludCBlY29zeXN0ZW06PC9wPlxuICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17cmVzb3VyY2VzTGlzdFJvd30+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17cmVzb3VyY2VQYW5lbH0+RGF0YUpvaW50IFJlZmVyZW5jZSBEb2N1bWVudGF0aW9uICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZGF0YWpvaW50Lm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9pY29ucy9kb2Nfd2hpdGUucG5nXCIvPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3Jlc291cmNlUGFuZWx9PkRhdGFKb2ludCA8YnIgLz5UdXRvcmlhbHMgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHV0b3JpYWxzLmRhdGFqb2ludC5vcmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvaWNvbnMvYmxhY2tib2FyZF93aGl0ZS5wbmdcIiAvPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3Jlc291cmNlUGFuZWx9PkRhdGFKb2ludCBTZXJ2ZXIgQ29uZmlndXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGF0YWpvaW50L215c3FsLWRvY2tlclwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9pY29ucy9zZXJ2ZXItY29uZmlnLXdoaXRlLnBuZ1wiIC8+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17cmVzb3VyY2VQYW5lbH0+RGF0YUpvaW50IDxiciAvPlB5dGhvbiBDbGllbnQgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kYXRham9pbnQvZGF0YWpvaW50LXB5dGhvblwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9pY29ucy9weXRob24tbG9nby1tb25vYy5wbmdcIiAvPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3Jlc291cmNlUGFuZWx9PkRhdGFKb2ludCA8YnIgLz5NQVRMQUIgQ2xpZW50ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGF0YWpvaW50L2RhdGFqb2ludC1tYXRsYWJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvaWNvbnMvbWF0bGFiLWxvZ28tbW9ub2MucG5nXCIgLz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCIgc3R5bGU9e3Jlc291cmNlRm9vdGVyfT5JbiBjb2xsYWJvcmF0aW9uIHdpdGggS2FyZWwgU3ZvYm9kYSdzIExhYiBhbmQgTGF3cmVuY2UgQmVya2VsZXkgTGFiLCBEYXRhSm9pbnQgTmV1cm8gaXMgcHJlcGFyaW5nIGEgc2V0IG9mIFwiQ2Fub25pY2FsIERhdGEgXG4gICAgICAgICAgICAgICAgICAgIFBpcGVsaW5lcyBmb3IgTmV1cm9waHlzaW9sb2d5XCIgdG8gYmUgcHJlc2VudGVkIGF0IHRoZSA8YSBzdHlsZT17aW5saW5lTGlua30gaHJlZj1cImh0dHBzOi8vd3d3LnNmbi5vcmcvTWVldGluZ3MvTmV1cm9zY2llbmNlLTIwMTlcIj5Tb2NpZXR5IGZvciBcbiAgICAgICAgICAgICAgICAgICAgTmV1cm9zY2llbmNlIENvbmZlcmVuY2UgaW4gTm92ZW1iZXIgMjAxOTwvYT4uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN0cnVjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgIDxoMz5TdXBwb3J0IFR5cGU8L2gzPlxuICAgICAgICAgICAgICAgIDxoMj5VbmRlciBDb25zdHJ1Y3Rpb248L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17c2VydmljZXNTZWN0aW9ufT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdXBwb3J0VHlwZX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17c2VydmljZVBhbmVsVGl0bGV9PkJhc2ljIFN1cHBvcnQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0TGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5CYXNpYyBTdXBwb3J0IGlzIGEgc3Vic2NyaXB0aW9uIHNlcnZpY2Ugb2ZmZXJlZCB0byBxdWFsaWZpZWQgcmVzZWFyY2ggZ3JvdXBzIHdobyB1c2UgRGF0YUpvaW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCByZXF1aXJlIG9jY2FzaW9uYWwgb3Igc2VtaS1yZWd1bGFyIHN1cHBvcnQgYW5kIGFzc2lzdGFuY2UuPC9wPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPkNvc3Q6IDwvYj4kMTIwMC95ZWFyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbmNsdWRlcyBhIGZyZWUgb25saW5lIDxiPlwiSW50ZXJhY3RpdmUgQ291cnNlIGZvciBEYXRhSm9pbnQgIFByYWN0aXRpb25lcnNcIjwvYj4gKDEwIHNlYXRzKS48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BY2Nlc3MgdG8gb24tZGVtYW5kIHRyYWluaW5nIHdvcmtzaG9wcyBmb3Igbm92aWNlLCBpbnRlcm1lZGlhdGUsIG9yIGFkdmFuY2VkIHByYWN0aXRpb25lcnM6PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5vbi1zaXRlIHdvcmtzaG9wczogJDE1MDAvZGF5L2luc3RydWN0b3IgKyB0cmF2ZWwgZXhwZW5zZXMuIEVhY2ggZGF5IGluY2x1ZGVzIHNpeCBob3VycyBvZiBpbnN0cnVjdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpbnRlcmFjdGl2ZSBoYW5kcy1vbiB0dXRvcmlhbHMgd2l0aCB0aGUgcmVzdCBvZiB0aGUgdGltZSBmb3IgcXVlc3Rpb25zIGFuZCBkaXNjdXNzaW9uLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbWl0IDE1IHRyYWluZWVzL2luc3RydWN0b3IuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnJlbW90ZSB3b3Jrc2hvcHM6ICQ1MDAgcGVyIDMtaG91ciBibG9jayAoMTAgc2VhdHMpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BY2Nlc3MgdG8gdGlja2V0LWJhc2VkIHByaW9yaXR5IHN1cHBvcnQ6PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Bc3Npc3RhbmNlIHdpdGggcGlwZWxpbmUgZGVzaWduIGFuZCBleGVjdXRpb246ICQ5NS9ob3VyL2VuZ2luZWVyIGluIDEtaG91ciBibG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QXNzaXN0YW5jZSB3aXRoIGxvY2FsIElUIGNvbmZpZ3VyYXRpb246ICQ5NS9ob3VyL2VuZ2luZWVyIGluIDQtaG91ciBibG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWRtaW5pc3RyYXRpb24gb2YgY2xvdWQgc3RvcmFnZSBhbmQgc2VydmVyczogJDk1L2hvdXIvZW5naW5lZXIgaW4gNC1ob3VyIGJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QXBwbHlCdXR0b24gaWQ9XCIxXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdXBwb3J0VHlwZX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17c2VydmljZVBhbmVsVGl0bGV9Pk1hbmFnZWQgRGF0YWJhc2UgSG9zdGluZyAoQmV0YSk8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0TGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5EYXRhSm9pbnQgTmV1cm88L2I+IG9mZmVycyBtYW5hZ2VkIERhdGFKb2ludC1vcHRpbWl6ZWQgY2xvdWQgaG9zdGluZyBmb3IgYW4gYWRkaXRpb25hbCAkNCw4MDAveWVhciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRyb2R1Y3RvcnkgcHJpY2luZy4gVGhpcyBzZXJ2aWNlIGlzIGFuIG9wdGlvbiBvZmZlcmVkIHRvIHF1YWxpZmllZCBncm91cHMgd2l0aCBhIEJhc2ljIFN1cHBvcnQgc3Vic2NyaXB0aW9uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZlYXR1cmVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EYXRhSm9pbnQtb3B0aW1pemVkIHJlbGF0aW9uYWwgRGF0YWJhc2UgU2VydmVyICsgb2JqZWN0IHN0b3JhZ2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT51cCB0byAxIFRpQiByZWxhdGlvbmFsIHN0b3JhZ2UgKyAxMCBUaUIgb2JqZWN0IHN0b3JhZ2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT51bmxpbWl0ZWQgdHJhbnNmZXJzIGluIGFuZCB1cCB0byAyIFRpQiAvIG1vbnRoIHRyYW5zZmVycyBvdXQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT51bmxpbWl0ZWQgdHJhbnNmZXJzIHRvIEFXUyBjb21wdXRlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRhdGFiYXNlIGFjY2VzcyBVUkwgICZsdDt5b3VybGFiJmd0Oy5kamh1Yi5pbzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlY3VyZSBjb25uZWN0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SGlnaCBwZXJmb3JtYW5jZSBhbmQgdXB0aW1lIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVubGltaXRlZCBkYXRhIHBpcGVsaW5lcyBhbmQgc2NoZW1hczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN1cHBvcnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVzZXIgYWNjZXNzIG1hbmFnZW1lbnQgKDEwIHVzZXJzKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNuYXBzaG90LWJhc2VkIGJhY2t1cHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BdmFpbGFiaWxpdHkgYW5kIHBlcmZvcm1hbmNlIG1vbml0b3Jpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxBcHBseUJ1dHRvbiBpZD1cIjJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N1cHBvcnRUeXBlfT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXtzZXJ2aWNlUGFuZWxUaXRsZX0+Q3VzdG9tIFNlcnZpY2UgYW5kIERldmVsb3BtZW50PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dExlZnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rm9yIG1vcmUgZGVtYW5kaW5nIHByb2plY3RzLCBEYXRhSm9pbnQgTmV1cm8gb2ZmZXJzIGRldmVsb3BtZW50IHNlcnZpY2VzIHRvIG5ldXJvc2NpZW5jZSBwcm9qZWN0cyB1bmRlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3QgY3VzdG9tIGNvbnRyYWN0cy4gVGhlc2UgcHJvamVjdHMgY29tbW9ubHkgaW5jbHVkZTogPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EZXNpZ24gb2YgZGF0YSBzY2llbmNlIHBsYW5zIGFuZCBkYXRhIHNoYXJpbmcgcGxhbnMgZm9yIG5ldXJvc2NpZW5jZSBmb3IgcHJvamVjdHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbnRlZ3JhdGlvbiB3aXRoIGluc3RydW1lbnRhdGlvbiBhbmQgbGFiIGluZm9ybWF0aW9uIG1hbmFnZW1lbnQgc3lzdGVtczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkpvaW50IHBpcGVsaW5lIGRldmVsb3BtZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+V2ViIGludGVyZmFjZXMgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGF0YSBleHBvcnQsIG1pZ3JhdGlvbiwgc2hhcmluZywgYW5kIHB1Ymxpc2hpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxBcHBseUJ1dHRvbiBpZD1cIjNcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtmb3JtQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL2RhdGFqb2ludC5pby9kak5ldXJvSW5xdWlyeVwiIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Zm9ybWdyb3VwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db250YWN0IFBlcnNvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2lucHV0RmllbGR9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgUGVyc29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvcm1ncm91cH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtpbnB1dEZpZWxkfSB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvcm1ncm91cH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJpbmNpcGFsIEludmVzdGlnYXRvcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2lucHV0RmllbGR9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBpXCIgcGxhY2Vob2xkZXI9XCJQcmluY2lwYWwgSW52ZXN0aWdhdG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvcm1ncm91cH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGVwYXJ0bWVudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2lucHV0RmllbGR9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlcGFydG1lbnRcIiBwbGFjZWhvbGRlcj1cIkRlcGFydG1lbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Zm9ybWdyb3VwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JbnN0aXR1dGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2lucHV0RmllbGR9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluc3RpdHV0aW9uXCIgcGxhY2Vob2xkZXI9XCJJbnN0aXR1dGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtmb3JtZ3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2plY3QgRGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25GaWVsZFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2plY3RcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgRGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Zm9ybWdyb3VwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17cmFkaW9GaWVsZH0gdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17cmFkaW9DaGVja2VkWzBdfSBuYW1lPVwic3Vic2NyaXB0aW9uX3R5cGVcIiB2YWx1ZT1cImJhc2ljXCIgLz4gQmFzaWMgU3VwcG9ydFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtyYWRpb0ZpZWxkfSB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXtyYWRpb0NoZWNrZWRbMV19IG5hbWU9XCJzdWJzY3JpcHRpb25fdHlwZVwiIHZhbHVlPVwibWFuYWdlZCBkYiBob3N0aW5nXCIgLz4gTWFuYWdlZCBEYXRhYmFzZSBIb3N0aW5nIChiZXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtyYWRpb0ZpZWxkfSB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXtyYWRpb0NoZWNrZWRbMl19IG5hbWU9XCJzdWJzY3JpcHRpb25fdHlwZVwiIHZhbHVlPVwiY3VzdG9tIHNlcnZpY2VcIiAvPiBDdXN0b20gU2VydmljZSBhbmQgRGV2ZWxvcG1lbnRcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29uc3RydWN0aW9uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnN0cnVjdGlvbiBoMyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA3NXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAyOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2Rlc2NyaXB0aW9uRmllbGQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1JTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7Il19 */\n/*@ sourceURL=/Users/maho15/Projects/djneuro/pages/services.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=services.js.6638f08f31a208ce353f.hot-update.js.map