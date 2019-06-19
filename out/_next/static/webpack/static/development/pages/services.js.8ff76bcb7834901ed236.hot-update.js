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
var resourceSubtitle = {// fontSize: '0.9em',
  // lineHeight: '0.75'
};
var resourcesListRow = {
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none'
};
var resourcePanel = {// width: '17%',
  // borderRadius: '4px',
  // backgroundColor: 'rgba(0, 0, 0, 0.6)',
  // padding: '20px 8px',
  // margin: '5px'
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
      }, "button.jsx-4030263169{border:2px solid white;background-color:transparent;color:white;padding:12px 28px;border-radius:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhvMTUvUHJvamVjdHMvZGpuZXVyby9wYWdlcy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0STRCLEFBR2dELHVCQUNNLDZCQUNqQixZQUNNLGtCQUNBLGtCQUN0QiIsImZpbGUiOiIvVXNlcnMvbWFobzE1L1Byb2plY3RzL2RqbmV1cm8vcGFnZXMvc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcblxuY29uc3QgYmFja2dyb3VuZCA9IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCIvc3RhdGljL2ltYWdlcy9hcnR3b3JrL25lc3Rpbi1jaGVycnkyLnBuZ1wiKScsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAndG9wIHJpZ2h0JyxcbiAgICBjb2xvcjogJ3doaXRlJ1xufTtcblxuY29uc3QgcmVzb3VyY2VTZWN0aW9uID0ge1xuICAgIHBhZGRpbmc6ICc0MHB4IDAgMTVweCcsXG4gICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDAuNykpJ1xufVxuXG5jb25zdCByZXNvdXJjZVN1YnRpdGxlID0ge1xuICAgIC8vIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgIC8vIGxpbmVIZWlnaHQ6ICcwLjc1J1xufVxuY29uc3QgcmVzb3VyY2VzTGlzdFJvdyA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgbGlzdFN0eWxlOiAnbm9uZSdcbn1cblxuY29uc3QgcmVzb3VyY2VQYW5lbCA9IHtcbiAgICAvLyB3aWR0aDogJzE3JScsXG4gICAgLy8gYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNiknLFxuICAgIC8vIHBhZGRpbmc6ICcyMHB4IDhweCcsXG4gICAgLy8gbWFyZ2luOiAnNXB4J1xufVxuXG5jb25zdCByZXNvdXJjZUZvb3RlciA9IHtcbiAgICAvLyBmb250U2l6ZTogJzAuODVlbScsXG4gICAgLy8gbGluZUhlaWdodDogJzAuNzUnLFxuICAgIC8vIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIC8vIHBhZGRpbmc6ICc1cHggNSUnXG59XG5cbmNvbnN0IGlubGluZUxpbmsgPSB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjb2xvcjogJyM0MUIwRjcnIC8vIG11dGVkIGJsdWVcbn1cblxuY29uc3Qgc2VydmljZXNTZWN0aW9uID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBtYXJnaW5MZWZ0OiAnMiUnLFxuICAgIG1hcmdpblRvcDogJzMlJyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOCUnXG59XG5cbmNvbnN0IHN1cHBvcnRUeXBlID0ge1xuICAgIHdpZHRoOiAnMzElJyxcbiAgICBtYXJnaW46ICcwIDAuMyUnLFxuICAgIGxpc3RTdHlsZVR5cGU6ICdkaXNjJyxcbiAgICBib3JkZXI6ICczcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjc1KScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNyknLFxufVxuXG5jb25zdCB0ZXh0TGVmdCA9IHtcblxuICAgIHBhZGRpbmc6ICcxMHB4IDE1cHgnLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGxpbmVIZWlnaHQ6ICcxLjJlbScsXG4gICAgZm9udFNpemU6ICc5MCUnLFxuICAgIGZvbnRXZWlnaHQ6ICcyMDAnXG59XG5cblxuY29uc3Qgc2VydmljZVBhbmVsVGl0bGUgPSB7XG4gICAgcGFkZGluZ1RvcDogJzE1cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxuICAgIGhlaWdodDogJzIuMGVtJyxcbiAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjc1J1xufVxuXG5jb25zdCBmb3JtQ29udGFpbmVyID0ge1xuICAgIG1hcmdpbjogJzIlIDEwJScsXG4gICAgcGFkZGluZ0JvdHRvbTogJzglJyxcbiAgICBwYWRkaW5nTGVmdDogJzIlJyxcbiAgICBwYWRkaW5nVG9wOiAnMiUnLFxuICAgIGJvcmRlcjogJ3NvbGlkIDJweCB3aGl0ZScsXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC40KSdcbn1cblxuY29uc3QgZm9ybWdyb3VwID0ge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMiUnXG59XG5cbmNvbnN0IGlucHV0RmllbGQgPSB7XG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICB3aWR0aDogJzIwMHB4J1xufVxuXG5jb25zdCByYWRpb0ZpZWxkID0ge1xuICAgIG1hcmdpbkxlZnQ6ICcxNXB4J1xufVxuXG5cbmNsYXNzIEFwcGx5QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgICAgICAgcmFkaW9DaGVja2VkOiBbZmFsc2UsIGZhbHNlLCBmYWxzZV0sXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoZWNrID0gdGhpcy5jaGVjay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNoZWNrKGlkLCBlKSB7XG4gICAgICAgIGlmIChpZCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgIHJhZGlvQ2hlY2tlZDogW3RydWUsIGZhbHNlLCBmYWxzZV1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChpZCA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgIHJhZGlvQ2hlY2tlZDogW2ZhbHNlLCB0cnVlLCBmYWxzZV1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChpZCA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgICAgICAgIHJhZGlvQ2hlY2tlZDogW2ZhbHNlLCBmYWxzZSwgdHJ1ZV1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ2N1c3RvbSBzZXJ2aWNlIGNoZWNrZWQhJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpZCBpczogJywgaWQpO1xuICAgICAgICBjb25zb2xlLmxvZygnZSBpczogJywgZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGlkPXRoaXMuc3RhdGUuaWQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jaGVjayhpZCwgZSl9PkFwcGx5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgcmFkaW9DaGVja2VkID0gW2ZhbHNlLCB0cnVlLCBmYWxzZV07XG5cbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgc3R5bGU9e2JhY2tncm91bmR9PlxuICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jlc291cmNlU2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgPGgzPkZyZWUgUmVzb3VyY2VzPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiIHN0eWxlPXtyZXNvdXJjZVN1YnRpdGxlfT5EYXRhSm9pbnQgTmV1cm8gaXMgdGhlIHByaW5jaXBhbCBjb250cmlidXRvciB0byB0aGUgZnJlZSwgY29tbXVuaXR5LW9yaWVudGVkLCBvcGVuLXNvdXJjZSB0b29scyBjb21wcmlzaW5nIHRoZSBEYXRhSm9pbnQgZWNvc3lzdGVtOjwvcD5cbiAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3Jlc291cmNlc0xpc3RSb3d9PlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicmVzb3VyY2VQYW5lbFwiIHN0eWxlPXtyZXNvdXJjZVBhbmVsfT5EYXRhSm9pbnQgUmVmZXJlbmNlIERvY3VtZW50YXRpb24gIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5kYXRham9pbnQub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2ljb25zL2RvY193aGl0ZS5wbmdcIi8+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJyZXNvdXJjZVBhbmVsXCIgc3R5bGU9e3Jlc291cmNlUGFuZWx9PkRhdGFKb2ludCA8YnIgLz5UdXRvcmlhbHMgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHV0b3JpYWxzLmRhdGFqb2ludC5vcmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvaWNvbnMvYmxhY2tib2FyZF93aGl0ZS5wbmdcIiAvPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicmVzb3VyY2VQYW5lbFwiIHN0eWxlPXtyZXNvdXJjZVBhbmVsfT5EYXRhSm9pbnQgU2VydmVyIENvbmZpZ3VyYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RhdGFqb2ludC9teXNxbC1kb2NrZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvaWNvbnMvc2VydmVyLWNvbmZpZy13aGl0ZS5wbmdcIiAvPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicmVzb3VyY2VQYW5lbFwiIHN0eWxlPXtyZXNvdXJjZVBhbmVsfT5EYXRhSm9pbnQgPGJyIC8+UHl0aG9uIENsaWVudCAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RhdGFqb2ludC9kYXRham9pbnQtcHl0aG9uXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2ljb25zL3B5dGhvbi1sb2dvLW1vbm9jLnBuZ1wiIC8+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJyZXNvdXJjZVBhbmVsXCIgc3R5bGU9e3Jlc291cmNlUGFuZWx9PkRhdGFKb2ludCA8YnIgLz5NQVRMQUIgQ2xpZW50ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGF0YWpvaW50L2RhdGFqb2ludC1tYXRsYWJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvaWNvbnMvbWF0bGFiLWxvZ28tbW9ub2MucG5nXCIgLz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCIgc3R5bGU9e3Jlc291cmNlRm9vdGVyfT5JbiBjb2xsYWJvcmF0aW9uIHdpdGggS2FyZWwgU3ZvYm9kYSdzIExhYiBhbmQgTGF3cmVuY2UgQmVya2VsZXkgTGFiLCBEYXRhSm9pbnQgTmV1cm8gaXMgcHJlcGFyaW5nIGEgc2V0IG9mIFwiQ2Fub25pY2FsIERhdGEgXG4gICAgICAgICAgICAgICAgICAgIFBpcGVsaW5lcyBmb3IgTmV1cm9waHlzaW9sb2d5XCIgdG8gYmUgcHJlc2VudGVkIGF0IHRoZSA8YSBzdHlsZT17aW5saW5lTGlua30gaHJlZj1cImh0dHBzOi8vd3d3LnNmbi5vcmcvTWVldGluZ3MvTmV1cm9zY2llbmNlLTIwMTlcIj5Tb2NpZXR5IGZvciBcbiAgICAgICAgICAgICAgICAgICAgTmV1cm9zY2llbmNlIENvbmZlcmVuY2UgaW4gTm92ZW1iZXIgMjAxOTwvYT4uPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN0cnVjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgIDxoMz5TdXBwb3J0IFR5cGU8L2gzPlxuICAgICAgICAgICAgICAgIDxoMj5VbmRlciBDb25zdHJ1Y3Rpb248L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17c2VydmljZXNTZWN0aW9ufT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdXBwb3J0VHlwZX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17c2VydmljZVBhbmVsVGl0bGV9PkJhc2ljIFN1cHBvcnQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0TGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5CYXNpYyBTdXBwb3J0IGlzIGEgc3Vic2NyaXB0aW9uIHNlcnZpY2Ugb2ZmZXJlZCB0byBxdWFsaWZpZWQgcmVzZWFyY2ggZ3JvdXBzIHdobyB1c2UgRGF0YUpvaW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCByZXF1aXJlIG9jY2FzaW9uYWwgb3Igc2VtaS1yZWd1bGFyIHN1cHBvcnQgYW5kIGFzc2lzdGFuY2UuPC9wPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPkNvc3Q6IDwvYj4kMTIwMC95ZWFyPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbmNsdWRlcyBhIGZyZWUgb25saW5lIDxiPlwiSW50ZXJhY3RpdmUgQ291cnNlIGZvciBEYXRhSm9pbnQgIFByYWN0aXRpb25lcnNcIjwvYj4gKDEwIHNlYXRzKS48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BY2Nlc3MgdG8gb24tZGVtYW5kIHRyYWluaW5nIHdvcmtzaG9wcyBmb3Igbm92aWNlLCBpbnRlcm1lZGlhdGUsIG9yIGFkdmFuY2VkIHByYWN0aXRpb25lcnM6PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5vbi1zaXRlIHdvcmtzaG9wczogJDE1MDAvZGF5L2luc3RydWN0b3IgKyB0cmF2ZWwgZXhwZW5zZXMuIEVhY2ggZGF5IGluY2x1ZGVzIHNpeCBob3VycyBvZiBpbnN0cnVjdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpbnRlcmFjdGl2ZSBoYW5kcy1vbiB0dXRvcmlhbHMgd2l0aCB0aGUgcmVzdCBvZiB0aGUgdGltZSBmb3IgcXVlc3Rpb25zIGFuZCBkaXNjdXNzaW9uLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbWl0IDE1IHRyYWluZWVzL2luc3RydWN0b3IuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnJlbW90ZSB3b3Jrc2hvcHM6ICQ1MDAgcGVyIDMtaG91ciBibG9jayAoMTAgc2VhdHMpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BY2Nlc3MgdG8gdGlja2V0LWJhc2VkIHByaW9yaXR5IHN1cHBvcnQ6PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Bc3Npc3RhbmNlIHdpdGggcGlwZWxpbmUgZGVzaWduIGFuZCBleGVjdXRpb246ICQ5NS9ob3VyL2VuZ2luZWVyIGluIDEtaG91ciBibG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QXNzaXN0YW5jZSB3aXRoIGxvY2FsIElUIGNvbmZpZ3VyYXRpb246ICQ5NS9ob3VyL2VuZ2luZWVyIGluIDQtaG91ciBibG9ja3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWRtaW5pc3RyYXRpb24gb2YgY2xvdWQgc3RvcmFnZSBhbmQgc2VydmVyczogJDk1L2hvdXIvZW5naW5lZXIgaW4gNC1ob3VyIGJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QXBwbHlCdXR0b24gaWQ9XCIxXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdXBwb3J0VHlwZX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17c2VydmljZVBhbmVsVGl0bGV9Pk1hbmFnZWQgRGF0YWJhc2UgSG9zdGluZyAoQmV0YSk8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0TGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5EYXRhSm9pbnQgTmV1cm88L2I+IG9mZmVycyBtYW5hZ2VkIERhdGFKb2ludC1vcHRpbWl6ZWQgY2xvdWQgaG9zdGluZyBmb3IgYW4gYWRkaXRpb25hbCAkNCw4MDAveWVhciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRyb2R1Y3RvcnkgcHJpY2luZy4gVGhpcyBzZXJ2aWNlIGlzIGFuIG9wdGlvbiBvZmZlcmVkIHRvIHF1YWxpZmllZCBncm91cHMgd2l0aCBhIEJhc2ljIFN1cHBvcnQgc3Vic2NyaXB0aW9uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZlYXR1cmVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EYXRhSm9pbnQtb3B0aW1pemVkIHJlbGF0aW9uYWwgRGF0YWJhc2UgU2VydmVyICsgb2JqZWN0IHN0b3JhZ2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT51cCB0byAxIFRpQiByZWxhdGlvbmFsIHN0b3JhZ2UgKyAxMCBUaUIgb2JqZWN0IHN0b3JhZ2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT51bmxpbWl0ZWQgdHJhbnNmZXJzIGluIGFuZCB1cCB0byAyIFRpQiAvIG1vbnRoIHRyYW5zZmVycyBvdXQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT51bmxpbWl0ZWQgdHJhbnNmZXJzIHRvIEFXUyBjb21wdXRlPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRhdGFiYXNlIGFjY2VzcyBVUkwgICZsdDt5b3VybGFiJmd0Oy5kamh1Yi5pbzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNlY3VyZSBjb25uZWN0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SGlnaCBwZXJmb3JtYW5jZSBhbmQgdXB0aW1lIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVubGltaXRlZCBkYXRhIHBpcGVsaW5lcyBhbmQgc2NoZW1hczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN1cHBvcnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVzZXIgYWNjZXNzIG1hbmFnZW1lbnQgKDEwIHVzZXJzKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNuYXBzaG90LWJhc2VkIGJhY2t1cHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BdmFpbGFiaWxpdHkgYW5kIHBlcmZvcm1hbmNlIG1vbml0b3Jpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxBcHBseUJ1dHRvbiBpZD1cIjJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N1cHBvcnRUeXBlfT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXtzZXJ2aWNlUGFuZWxUaXRsZX0+Q3VzdG9tIFNlcnZpY2UgYW5kIERldmVsb3BtZW50PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dExlZnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rm9yIG1vcmUgZGVtYW5kaW5nIHByb2plY3RzLCBEYXRhSm9pbnQgTmV1cm8gb2ZmZXJzIGRldmVsb3BtZW50IHNlcnZpY2VzIHRvIG5ldXJvc2NpZW5jZSBwcm9qZWN0cyB1bmRlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3QgY3VzdG9tIGNvbnRyYWN0cy4gVGhlc2UgcHJvamVjdHMgY29tbW9ubHkgaW5jbHVkZTogPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EZXNpZ24gb2YgZGF0YSBzY2llbmNlIHBsYW5zIGFuZCBkYXRhIHNoYXJpbmcgcGxhbnMgZm9yIG5ldXJvc2NpZW5jZSBmb3IgcHJvamVjdHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbnRlZ3JhdGlvbiB3aXRoIGluc3RydW1lbnRhdGlvbiBhbmQgbGFiIGluZm9ybWF0aW9uIG1hbmFnZW1lbnQgc3lzdGVtczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkpvaW50IHBpcGVsaW5lIGRldmVsb3BtZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+V2ViIGludGVyZmFjZXMgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGF0YSBleHBvcnQsIG1pZ3JhdGlvbiwgc2hhcmluZywgYW5kIHB1Ymxpc2hpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxBcHBseUJ1dHRvbiBpZD1cIjNcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtmb3JtQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL2RhdGFqb2ludC5pby9kak5ldXJvSW5xdWlyeVwiIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Zm9ybWdyb3VwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db250YWN0IFBlcnNvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2lucHV0RmllbGR9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkNvbnRhY3QgUGVyc29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvcm1ncm91cH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtpbnB1dEZpZWxkfSB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvcm1ncm91cH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJpbmNpcGFsIEludmVzdGlnYXRvcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2lucHV0RmllbGR9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBpXCIgcGxhY2Vob2xkZXI9XCJQcmluY2lwYWwgSW52ZXN0aWdhdG9yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvcm1ncm91cH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGVwYXJ0bWVudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2lucHV0RmllbGR9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlcGFydG1lbnRcIiBwbGFjZWhvbGRlcj1cIkRlcGFydG1lbnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Zm9ybWdyb3VwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JbnN0aXR1dGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2lucHV0RmllbGR9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluc3RpdHV0aW9uXCIgcGxhY2Vob2xkZXI9XCJJbnN0aXR1dGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtmb3JtZ3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlByb2plY3QgRGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25GaWVsZFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByb2plY3RcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgRGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Zm9ybWdyb3VwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17cmFkaW9GaWVsZH0gdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17cmFkaW9DaGVja2VkWzBdfSBuYW1lPVwic3Vic2NyaXB0aW9uX3R5cGVcIiB2YWx1ZT1cImJhc2ljXCIgLz4gQmFzaWMgU3VwcG9ydFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtyYWRpb0ZpZWxkfSB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXtyYWRpb0NoZWNrZWRbMV19IG5hbWU9XCJzdWJzY3JpcHRpb25fdHlwZVwiIHZhbHVlPVwibWFuYWdlZCBkYiBob3N0aW5nXCIgLz4gTWFuYWdlZCBEYXRhYmFzZSBIb3N0aW5nIChiZXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtyYWRpb0ZpZWxkfSB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXtyYWRpb0NoZWNrZWRbMl19IG5hbWU9XCJzdWJzY3JpcHRpb25fdHlwZVwiIHZhbHVlPVwiY3VzdG9tIHNlcnZpY2VcIiAvPiBDdXN0b20gU2VydmljZSBhbmQgRGV2ZWxvcG1lbnRcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29uc3RydWN0aW9uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnN0cnVjdGlvbiBoMyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA3NXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODVlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlc291cmNlUGFuZWwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNyU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDhweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAyOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2Rlc2NyaXB0aW9uRmllbGQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MmVtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucmVzb3VyY2VQYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODIlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlczsiXX0= */\n/*@ sourceURL=/Users/maho15/Projects/djneuro/pages/services.js */"));
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
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    style: resourceSection,
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Free Resources"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: resourceSubtitle,
    className: "jsx-4239708920" + " " + "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "DataJoint Neuro is the principal contributor to the free, community-oriented, open-source tools comprising the DataJoint ecosystem:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
    style: resourcesListRow,
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
    style: resourcePanel,
    className: "jsx-4239708920" + " " + "resourcePanel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "DataJoint Reference Documentation", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "https://docs.datajoint.org",
    target: "_blank",
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "static/images/icons/doc_white.png",
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
    style: resourcePanel,
    className: "jsx-4239708920" + " " + "resourcePanel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "DataJoint ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), "Tutorials", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "https://tutorials.datajoint.org",
    target: "_blank",
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "static/images/icons/blackboard_white.png",
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
    style: resourcePanel,
    className: "jsx-4239708920" + " " + "resourcePanel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "DataJoint Server Configuration", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "https://github.com/datajoint/mysql-docker",
    target: "_blank",
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "static/images/icons/server-config-white.png",
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
    style: resourcePanel,
    className: "jsx-4239708920" + " " + "resourcePanel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "DataJoint ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), "Python Client", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "https://github.com/datajoint/datajoint-python",
    target: "_blank",
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "static/images/icons/python-logo-monoc.png",
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
    style: resourcePanel,
    className: "jsx-4239708920" + " " + "resourcePanel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "DataJoint ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), "MATLAB Client", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    href: "https://github.com/datajoint/datajoint-matlab",
    target: "_blank",
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
    src: "static/images/icons/matlab-logo-monoc.png",
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: resourceFooter,
    className: "jsx-4239708920" + " " + "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "In collaboration with Karel Svoboda's Lab and Lawrence Berkeley Lab, DataJoint Neuro is preparing a set of \"Canonical Data Pipelines for Neurophysiology\" to be presented at the ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
    style: inlineLink,
    href: "https://www.sfn.org/Meetings/Neuroscience-2019",
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Society for Neuroscience Conference in November 2019"), ".")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-4239708920" + " " + "construction",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Support Type"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
    className: "jsx-4239708920",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Under Construction"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "4239708920",
    __self: this
  }, ".construction.jsx-4239708920{height:500px;}.construction.jsx-4239708920 h3.jsx-4239708920{padding-top:80px;}h3.jsx-4239708920{margin:0;}img.jsx-4239708920{height:70px;}a.jsx-4239708920{display:block;margin-top:13px;}.subtitle.jsx-4239708920{line-height:0.8;font-size:0.85em;text-align:left;padding:5px 5%;}.resourcePanel.jsx-4239708920{width:17%;border-radius:4px;background-color:rgba(0,0,0,0.6);padding:20px 8px;margin:5px;}button.jsx-4239708920{border:2px solid white;background-color:transparent;color:white;padding:12px 28px;border-radius:4px;}label.jsx-4239708920{margin-right:14px;font-size:90%;vertical-align:top;}#descriptionField.jsx-4239708920{width:400px;height:150px;border-radius:4px;}@media (max-width:768px){.subtitle.jsx-4239708920{line-height:1;font-size:0.82em;}img.jsx-4239708920{height:50px;}.resourcePanel.jsx-4239708920{font-size:82%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhvMTUvUHJvamVjdHMvZGpuZXVyby9wYWdlcy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErUm9CLEFBRzhCLEFBR0ksQUFHUixBQUtHLEFBSUUsQUFJRSxBQU9OLEFBUWEsQUFPTCxBQU1OLEFBT00sQUFLRixBQUlFLFNBeER0QixDQW9Cc0IsRUFmdEIsQUFvQ2lCLEFBWWIsQ0EzREosQ0Flb0IsQUF1Q0ssQUFTckIsRUE1Q2lCLENBaEJyQixDQXNDa0IsS0FQZSxFQWNYLEdBckJrQixFQVh4QyxDQXVDSSxDQWJtQixDQXRCSCxVQTZCcEIsTUE1Qm1CLEVBc0JuQixDQVJnQixTQVBLLEdBTnJCLEFBY3NCLGNBUFAsSUFRTyxPQVB0QixXQVFBIiwiZmlsZSI6Ii9Vc2Vycy9tYWhvMTUvUHJvamVjdHMvZGpuZXVyby9wYWdlcy9zZXJ2aWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnO1xuXG5jb25zdCBiYWNrZ3JvdW5kID0ge1xuICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcIi9zdGF0aWMvaW1hZ2VzL2FydHdvcmsvbmVzdGluLWNoZXJyeTIucG5nXCIpJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AgcmlnaHQnLFxuICAgIGNvbG9yOiAnd2hpdGUnXG59O1xuXG5jb25zdCByZXNvdXJjZVNlY3Rpb24gPSB7XG4gICAgcGFkZGluZzogJzQwcHggMCAxNXB4JyxcbiAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMC43KSknXG59XG5cbmNvbnN0IHJlc291cmNlU3VidGl0bGUgPSB7XG4gICAgLy8gZm9udFNpemU6ICcwLjllbScsXG4gICAgLy8gbGluZUhlaWdodDogJzAuNzUnXG59XG5jb25zdCByZXNvdXJjZXNMaXN0Um93ID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBsaXN0U3R5bGU6ICdub25lJ1xufVxuXG5jb25zdCByZXNvdXJjZVBhbmVsID0ge1xuICAgIC8vIHdpZHRoOiAnMTclJyxcbiAgICAvLyBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIC8vIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC42KScsXG4gICAgLy8gcGFkZGluZzogJzIwcHggOHB4JyxcbiAgICAvLyBtYXJnaW46ICc1cHgnXG59XG5cbmNvbnN0IHJlc291cmNlRm9vdGVyID0ge1xuICAgIC8vIGZvbnRTaXplOiAnMC44NWVtJyxcbiAgICAvLyBsaW5lSGVpZ2h0OiAnMC43NScsXG4gICAgLy8gdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgLy8gcGFkZGluZzogJzVweCA1JSdcbn1cblxuY29uc3QgaW5saW5lTGluayA9IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiAnIzQxQjBGNycgLy8gbXV0ZWQgYmx1ZVxufVxuXG5jb25zdCBzZXJ2aWNlc1NlY3Rpb24gPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIG1hcmdpbkxlZnQ6ICcyJScsXG4gICAgbWFyZ2luVG9wOiAnMyUnLFxuICAgIHBhZGRpbmdCb3R0b206ICc4JSdcbn1cblxuY29uc3Qgc3VwcG9ydFR5cGUgPSB7XG4gICAgd2lkdGg6ICczMSUnLFxuICAgIG1hcmdpbjogJzAgMC4zJScsXG4gICAgbGlzdFN0eWxlVHlwZTogJ2Rpc2MnLFxuICAgIGJvcmRlcjogJzNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNzUpJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC43KScsXG59XG5cbmNvbnN0IHRleHRMZWZ0ID0ge1xuXG4gICAgcGFkZGluZzogJzEwcHggMTVweCcsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbGluZUhlaWdodDogJzEuMmVtJyxcbiAgICBmb250U2l6ZTogJzkwJScsXG4gICAgZm9udFdlaWdodDogJzIwMCdcbn1cblxuXG5jb25zdCBzZXJ2aWNlUGFuZWxUaXRsZSA9IHtcbiAgICBwYWRkaW5nVG9wOiAnMTVweCcsXG4gICAgZm9udFdlaWdodDogJzQwMCcsXG4gICAgaGVpZ2h0OiAnMi4wZW0nLFxuICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNzUnXG59XG5cbmNvbnN0IGZvcm1Db250YWluZXIgPSB7XG4gICAgbWFyZ2luOiAnMiUgMTAlJyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOCUnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMiUnLFxuICAgIHBhZGRpbmdUb3A6ICcyJScsXG4gICAgYm9yZGVyOiAnc29saWQgMnB4IHdoaXRlJyxcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjQpJ1xufVxuXG5jb25zdCBmb3JtZ3JvdXAgPSB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBtYXJnaW5Cb3R0b206ICcyJSdcbn1cblxuY29uc3QgaW5wdXRGaWVsZCA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGhlaWdodDogJzMwcHgnLFxuICAgIHdpZHRoOiAnMjAwcHgnXG59XG5cbmNvbnN0IHJhZGlvRmllbGQgPSB7XG4gICAgbWFyZ2luTGVmdDogJzE1cHgnXG59XG5cblxuY2xhc3MgQXBwbHlCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICAgICAgICByYWRpb0NoZWNrZWQ6IFtmYWxzZSwgZmFsc2UsIGZhbHNlXSxcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2hlY2sgPSB0aGlzLmNoZWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY2hlY2soaWQsIGUpIHtcbiAgICAgICAgaWYgKGlkID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAgICAgICAgICAgcmFkaW9DaGVja2VkOiBbdHJ1ZSwgZmFsc2UsIGZhbHNlXVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlkID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAgICAgICAgICAgcmFkaW9DaGVja2VkOiBbZmFsc2UsIHRydWUsIGZhbHNlXVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlkID09PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAgICAgICAgICAgcmFkaW9DaGVja2VkOiBbZmFsc2UsIGZhbHNlLCB0cnVlXVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnY3VzdG9tIHNlcnZpY2UgY2hlY2tlZCEnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2lkIGlzOiAnLCBpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlIGlzOiAnLCBlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoaWQ9dGhpcy5zdGF0ZS5pZCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmNoZWNrKGlkLCBlKX0+QXBwbHk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAyOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCByYWRpb0NoZWNrZWQgPSBbZmFsc2UsIHRydWUsIGZhbHNlXTtcblxuY29uc3QgU2VydmljZXMgPSAoKSA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICAgPGRpdiBzdHlsZT17YmFja2dyb3VuZH0+XG4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17cmVzb3VyY2VTZWN0aW9ufT5cbiAgICAgICAgICAgICAgICA8aDM+RnJlZSBSZXNvdXJjZXM8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCIgc3R5bGU9e3Jlc291cmNlU3VidGl0bGV9PkRhdGFKb2ludCBOZXVybyBpcyB0aGUgcHJpbmNpcGFsIGNvbnRyaWJ1dG9yIHRvIHRoZSBmcmVlLCBjb21tdW5pdHktb3JpZW50ZWQsIG9wZW4tc291cmNlIHRvb2xzIGNvbXByaXNpbmcgdGhlIERhdGFKb2ludCBlY29zeXN0ZW06PC9wPlxuICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17cmVzb3VyY2VzTGlzdFJvd30+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJyZXNvdXJjZVBhbmVsXCIgc3R5bGU9e3Jlc291cmNlUGFuZWx9PkRhdGFKb2ludCBSZWZlcmVuY2UgRG9jdW1lbnRhdGlvbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmRhdGFqb2ludC5vcmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvaWNvbnMvZG9jX3doaXRlLnBuZ1wiLz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlc291cmNlUGFuZWxcIiBzdHlsZT17cmVzb3VyY2VQYW5lbH0+RGF0YUpvaW50IDxiciAvPlR1dG9yaWFscyAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90dXRvcmlhbHMuZGF0YWpvaW50Lm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9pY29ucy9ibGFja2JvYXJkX3doaXRlLnBuZ1wiIC8+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJyZXNvdXJjZVBhbmVsXCIgc3R5bGU9e3Jlc291cmNlUGFuZWx9PkRhdGFKb2ludCBTZXJ2ZXIgQ29uZmlndXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGF0YWpvaW50L215c3FsLWRvY2tlclwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9pY29ucy9zZXJ2ZXItY29uZmlnLXdoaXRlLnBuZ1wiIC8+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJyZXNvdXJjZVBhbmVsXCIgc3R5bGU9e3Jlc291cmNlUGFuZWx9PkRhdGFKb2ludCA8YnIgLz5QeXRob24gQ2xpZW50ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGF0YWpvaW50L2RhdGFqb2ludC1weXRob25cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvaWNvbnMvcHl0aG9uLWxvZ28tbW9ub2MucG5nXCIgLz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlc291cmNlUGFuZWxcIiBzdHlsZT17cmVzb3VyY2VQYW5lbH0+RGF0YUpvaW50IDxiciAvPk1BVExBQiBDbGllbnQgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kYXRham9pbnQvZGF0YWpvaW50LW1hdGxhYlwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwic3RhdGljL2ltYWdlcy9pY29ucy9tYXRsYWItbG9nby1tb25vYy5wbmdcIiAvPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGVcIiBzdHlsZT17cmVzb3VyY2VGb290ZXJ9PkluIGNvbGxhYm9yYXRpb24gd2l0aCBLYXJlbCBTdm9ib2RhJ3MgTGFiIGFuZCBMYXdyZW5jZSBCZXJrZWxleSBMYWIsIERhdGFKb2ludCBOZXVybyBpcyBwcmVwYXJpbmcgYSBzZXQgb2YgXCJDYW5vbmljYWwgRGF0YSBcbiAgICAgICAgICAgICAgICAgICAgUGlwZWxpbmVzIGZvciBOZXVyb3BoeXNpb2xvZ3lcIiB0byBiZSBwcmVzZW50ZWQgYXQgdGhlIDxhIHN0eWxlPXtpbmxpbmVMaW5rfSBocmVmPVwiaHR0cHM6Ly93d3cuc2ZuLm9yZy9NZWV0aW5ncy9OZXVyb3NjaWVuY2UtMjAxOVwiPlNvY2lldHkgZm9yIFxuICAgICAgICAgICAgICAgICAgICBOZXVyb3NjaWVuY2UgQ29uZmVyZW5jZSBpbiBOb3ZlbWJlciAyMDE5PC9hPi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3RydWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgPGgzPlN1cHBvcnQgVHlwZTwvaDM+XG4gICAgICAgICAgICAgICAgPGgyPlVuZGVyIENvbnN0cnVjdGlvbjwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXtzZXJ2aWNlc1NlY3Rpb259PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N1cHBvcnRUeXBlfT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXtzZXJ2aWNlUGFuZWxUaXRsZX0+QmFzaWMgU3VwcG9ydDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRMZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJhc2ljIFN1cHBvcnQgaXMgYSBzdWJzY3JpcHRpb24gc2VydmljZSBvZmZlcmVkIHRvIHF1YWxpZmllZCByZXNlYXJjaCBncm91cHMgd2hvIHVzZSBEYXRhSm9pbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHJlcXVpcmUgb2NjYXNpb25hbCBvciBzZW1pLXJlZ3VsYXIgc3VwcG9ydCBhbmQgYXNzaXN0YW5jZS48L3A+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+Q29zdDogPC9iPiQxMjAwL3llYXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkluY2x1ZGVzIGEgZnJlZSBvbmxpbmUgPGI+XCJJbnRlcmFjdGl2ZSBDb3Vyc2UgZm9yIERhdGFKb2ludCAgUHJhY3RpdGlvbmVyc1wiPC9iPiAoMTAgc2VhdHMpLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFjY2VzcyB0byBvbi1kZW1hbmQgdHJhaW5pbmcgd29ya3Nob3BzIGZvciBub3ZpY2UsIGludGVybWVkaWF0ZSwgb3IgYWR2YW5jZWQgcHJhY3RpdGlvbmVyczo8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPm9uLXNpdGUgd29ya3Nob3BzOiAkMTUwMC9kYXkvaW5zdHJ1Y3RvciArIHRyYXZlbCBleHBlbnNlcy4gRWFjaCBkYXkgaW5jbHVkZXMgc2l4IGhvdXJzIG9mIGluc3RydWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGludGVyYWN0aXZlIGhhbmRzLW9uIHR1dG9yaWFscyB3aXRoIHRoZSByZXN0IG9mIHRoZSB0aW1lIGZvciBxdWVzdGlvbnMgYW5kIGRpc2N1c3Npb24uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGltaXQgMTUgdHJhaW5lZXMvaW5zdHJ1Y3Rvci48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+cmVtb3RlIHdvcmtzaG9wczogJDUwMCBwZXIgMy1ob3VyIGJsb2NrICgxMCBzZWF0cyk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFjY2VzcyB0byB0aWNrZXQtYmFzZWQgcHJpb3JpdHkgc3VwcG9ydDo8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFzc2lzdGFuY2Ugd2l0aCBwaXBlbGluZSBkZXNpZ24gYW5kIGV4ZWN1dGlvbjogJDk1L2hvdXIvZW5naW5lZXIgaW4gMS1ob3VyIGJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Bc3Npc3RhbmNlIHdpdGggbG9jYWwgSVQgY29uZmlndXJhdGlvbjogJDk1L2hvdXIvZW5naW5lZXIgaW4gNC1ob3VyIGJsb2NrczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZG1pbmlzdHJhdGlvbiBvZiBjbG91ZCBzdG9yYWdlIGFuZCBzZXJ2ZXJzOiAkOTUvaG91ci9lbmdpbmVlciBpbiA0LWhvdXIgYmxvY2tzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxBcHBseUJ1dHRvbiBpZD1cIjFcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N1cHBvcnRUeXBlfT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXtzZXJ2aWNlUGFuZWxUaXRsZX0+TWFuYWdlZCBEYXRhYmFzZSBIb3N0aW5nIChCZXRhKTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRMZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPkRhdGFKb2ludCBOZXVybzwvYj4gb2ZmZXJzIG1hbmFnZWQgRGF0YUpvaW50LW9wdGltaXplZCBjbG91ZCBob3N0aW5nIGZvciBhbiBhZGRpdGlvbmFsICQ0LDgwMC95ZWFyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludHJvZHVjdG9yeSBwcmljaW5nLiBUaGlzIHNlcnZpY2UgaXMgYW4gb3B0aW9uIG9mZmVyZWQgdG8gcXVhbGlmaWVkIGdyb3VwcyB3aXRoIGEgQmFzaWMgU3VwcG9ydCBzdWJzY3JpcHRpb24uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RmVhdHVyZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRhdGFKb2ludC1vcHRpbWl6ZWQgcmVsYXRpb25hbCBEYXRhYmFzZSBTZXJ2ZXIgKyBvYmplY3Qgc3RvcmFnZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnVwIHRvIDEgVGlCIHJlbGF0aW9uYWwgc3RvcmFnZSArIDEwIFRpQiBvYmplY3Qgc3RvcmFnZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnVubGltaXRlZCB0cmFuc2ZlcnMgaW4gYW5kIHVwIHRvIDIgVGlCIC8gbW9udGggdHJhbnNmZXJzIG91dDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnVubGltaXRlZCB0cmFuc2ZlcnMgdG8gQVdTIGNvbXB1dGU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGF0YWJhc2UgYWNjZXNzIFVSTCAgJmx0O3lvdXJsYWImZ3Q7LmRqaHViLmlvPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VjdXJlIGNvbm5lY3Rpb248L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5IaWdoIHBlcmZvcm1hbmNlIGFuZCB1cHRpbWUgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VW5saW1pdGVkIGRhdGEgcGlwZWxpbmVzIGFuZCBzY2hlbWFzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3VwcG9ydDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VXNlciBhY2Nlc3MgbWFuYWdlbWVudCAoMTAgdXNlcnMpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U25hcHNob3QtYmFzZWQgYmFja3VwczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkF2YWlsYWJpbGl0eSBhbmQgcGVyZm9ybWFuY2UgbW9uaXRvcmluZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEFwcGx5QnV0dG9uIGlkPVwiMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3VwcG9ydFR5cGV9PlxuICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3NlcnZpY2VQYW5lbFRpdGxlfT5DdXN0b20gU2VydmljZSBhbmQgRGV2ZWxvcG1lbnQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0TGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Gb3IgbW9yZSBkZW1hbmRpbmcgcHJvamVjdHMsIERhdGFKb2ludCBOZXVybyBvZmZlcnMgZGV2ZWxvcG1lbnQgc2VydmljZXMgdG8gbmV1cm9zY2llbmNlIHByb2plY3RzIHVuZGVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdCBjdXN0b20gY29udHJhY3RzLiBUaGVzZSBwcm9qZWN0cyBjb21tb25seSBpbmNsdWRlOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkRlc2lnbiBvZiBkYXRhIHNjaWVuY2UgcGxhbnMgYW5kIGRhdGEgc2hhcmluZyBwbGFucyBmb3IgbmV1cm9zY2llbmNlIGZvciBwcm9qZWN0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkludGVncmF0aW9uIHdpdGggaW5zdHJ1bWVudGF0aW9uIGFuZCBsYWIgaW5mb3JtYXRpb24gbWFuYWdlbWVudCBzeXN0ZW1zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Sm9pbnQgcGlwZWxpbmUgZGV2ZWxvcG1lbnQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZWIgaW50ZXJmYWNlcyA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5EYXRhIGV4cG9ydCwgbWlncmF0aW9uLCBzaGFyaW5nLCBhbmQgcHVibGlzaGluZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEFwcGx5QnV0dG9uIGlkPVwiM1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvcm1Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vZGF0YWpvaW50LmlvL2RqTmV1cm9JbnF1aXJ5XCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtmb3JtZ3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvbnRhY3QgUGVyc29uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17aW5wdXRGaWVsZH0gdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiQ29udGFjdCBQZXJzb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Zm9ybWdyb3VwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2lucHV0RmllbGR9IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Zm9ybWdyb3VwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QcmluY2lwYWwgSW52ZXN0aWdhdG9yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17aW5wdXRGaWVsZH0gdHlwZT1cInRleHRcIiBuYW1lPVwicGlcIiBwbGFjZWhvbGRlcj1cIlByaW5jaXBhbCBJbnZlc3RpZ2F0b3JcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Zm9ybWdyb3VwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXBhcnRtZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17aW5wdXRGaWVsZH0gdHlwZT1cInRleHRcIiBuYW1lPVwiZGVwYXJ0bWVudFwiIHBsYWNlaG9sZGVyPVwiRGVwYXJ0bWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtmb3JtZ3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkluc3RpdHV0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17aW5wdXRGaWVsZH0gdHlwZT1cInRleHRcIiBuYW1lPVwiaW5zdGl0dXRpb25cIiBwbGFjZWhvbGRlcj1cIkluc3RpdHV0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Zvcm1ncm91cH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJvamVjdCBEZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvbkZpZWxkXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicHJvamVjdFwiIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBEZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtmb3JtZ3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtyYWRpb0ZpZWxkfSB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXtyYWRpb0NoZWNrZWRbMF19IG5hbWU9XCJzdWJzY3JpcHRpb25fdHlwZVwiIHZhbHVlPVwiYmFzaWNcIiAvPiBCYXNpYyBTdXBwb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3JhZGlvRmllbGR9IHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3JhZGlvQ2hlY2tlZFsxXX0gbmFtZT1cInN1YnNjcmlwdGlvbl90eXBlXCIgdmFsdWU9XCJtYW5hZ2VkIGRiIGhvc3RpbmdcIiAvPiBNYW5hZ2VkIERhdGFiYXNlIEhvc3RpbmcgKGJldGEpXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3JhZGlvRmllbGR9IHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3JhZGlvQ2hlY2tlZFsyXX0gbmFtZT1cInN1YnNjcmlwdGlvbl90eXBlXCIgdmFsdWU9XCJjdXN0b20gc2VydmljZVwiIC8+IEN1c3RvbSBTZXJ2aWNlIGFuZCBEZXZlbG9wbWVudFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb25zdHJ1Y3Rpb24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29uc3RydWN0aW9uIGgzIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDc1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC44O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDUlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVzb3VyY2VQYW5lbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE3JTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDI4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjZGVzY3JpcHRpb25GaWVsZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjgyZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5yZXNvdXJjZVBhbmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MiU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzOyJdfQ== */\n/*@ sourceURL=/Users/maho15/Projects/djneuro/pages/services.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=services.js.8ff76bcb7834901ed236.hot-update.js.map