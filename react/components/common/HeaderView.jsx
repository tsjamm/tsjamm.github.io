"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.HeaderView=void 0;var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reactRouterDom=require("react-router-dom"),HeaderViewModel={navInfo:{sampleItem:{id:"sample",class:"sample-nav-item nav-list-item",text:"Sample",viewId:"sample"}}},HeaderView=exports.HeaderView=function(e){function t(e){_classCallCheck(this,t);var a=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state=HeaderViewModel,a}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.state.navInfo).map(function(t){var a=e.state.navInfo[t];return _react2.default.createElement("li",{key:a.id,id:a.id,className:a.class},_react2.default.createElement(_reactRouterDom.NavLink,{className:"nav-link",activeClassName:"selected",to:"/"+a.viewId+".html"},a.text))});return _react2.default.createElement("header",{id:"header",className:"header"},_react2.default.createElement("div",{id:"headerContainer",className:"header-container"},_react2.default.createElement("div",{id:"logoWrapper",className:"logo-wrapper"},_react2.default.createElement(_reactRouterDom.NavLink,{className:"nav-link",activeClassName:"selected",to:"/"},_react2.default.createElement("img",{src:"./assets/img/sample-logo.png"}))),_react2.default.createElement("div",{id:"navWrapper",className:"nav-wrapper"},_react2.default.createElement("nav",{id:"nav",className:"nav"},_react2.default.createElement("div",{id:"navContainer",className:"nav-container"},_react2.default.createElement("ul",{id:"navList",className:"nav-list"},t))))))}}]),t}(_react.Component);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL0hlYWRlclZpZXcuanN4Il0sIm5hbWVzIjpbIl9yZWFjdCIsInJlcXVpcmUiLCJfcmVhY3RSb3V0ZXJEb20iLCJIZWFkZXJWaWV3TW9kZWwiLCJuYXZJbmZvIiwic2FtcGxlSXRlbSIsImlkIiwiY2xhc3MiLCJ0ZXh0Iiwidmlld0lkIiwiSGVhZGVyVmlldyIsInByb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIl90aGlzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfX3Byb3RvX18iLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNhbGwiLCJzdGF0ZSIsIl90aGlzMiIsIm5hdkl0ZW1MaXN0Iiwia2V5cyIsIm1hcCIsImluZm9LZXkiLCJuYXZJdGVtIiwiX3JlYWN0MiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwiY2xhc3NOYW1lIiwiTmF2TGluayIsImFjdGl2ZUNsYXNzTmFtZSIsInRvIiwic3JjIl0sIm1hcHBpbmdzIjoicWhDQUdBQSxPQUFBQyxRQUFBLGdEQUNBQyxnQkFBQUQsUUFBQSxvQkFFSUUsaUJBQ0FDLFNBQ0lDLFlBQWNDLEdBQUcsU0FBVUMsTUFBTSxnQ0FBaUNDLEtBQUssU0FBVUMsT0FBTyxZQUluRkMsbUJBQUFBLHVCQUNULFFBQUFBLEdBQVlDLEdBQU9DLGdCQUFBQyxLQUFBSCxFQUFBLElBQUFJLEdBQUFDLDJCQUFBRixNQUFBSCxFQUFBTSxXQUFBQyxPQUFBQyxlQUFBUixJQUFBUyxLQUFBTixLQUNURixHQURTLE9BRWZHLEdBQUtNLE1BQVFqQixnQkFGRVcsdUVBSVYsR0FBQU8sR0FBQVIsS0FDRFMsRUFBY0wsT0FBT00sS0FBS1YsS0FBS08sTUFBTWhCLFNBQVNvQixJQUFJLFNBQUNDLEdBQ25ELEdBQUlDLEdBQVVMLEVBQUtELE1BQU1oQixRQUFRcUIsRUFFakMsT0FDSUUsU0FBQUMsUUFBQUMsY0FBQSxNQUFJQyxJQUFLSixFQUFRcEIsR0FBSUEsR0FBSW9CLEVBQVFwQixHQUFJeUIsVUFBV0wsRUFBUW5CLE9BQ3BEb0IsUUFBQUMsUUFBQUMsY0FBQTNCLGdCQUFBOEIsU0FBU0QsVUFBVSxXQUFXRSxnQkFBZ0IsV0FBV0MsR0FBSSxJQUFJUixFQUFRakIsT0FBTyxTQUFXaUIsRUFBUWxCLFFBSS9HLE9BQ0FtQixTQUFBQyxRQUFBQyxjQUFBLFVBQVF2QixHQUFHLFNBQVN5QixVQUFVLFVBQzFCSixRQUFBQyxRQUFBQyxjQUFBLE9BQUt2QixHQUFHLGtCQUFrQnlCLFVBQVUsb0JBQ2hDSixRQUFBQyxRQUFBQyxjQUFBLE9BQUt2QixHQUFHLGNBQWN5QixVQUFVLGdCQUM1QkosUUFBQUMsUUFBQUMsY0FBQTNCLGdCQUFBOEIsU0FBU0QsVUFBVSxXQUFXRSxnQkFBZ0IsV0FBV0MsR0FBSSxLQUN6RFAsUUFBQUMsUUFBQUMsY0FBQSxPQUFLTSxJQUFJLG1DQUdqQlIsUUFBQUMsUUFBQUMsY0FBQSxPQUFLdkIsR0FBRyxhQUFheUIsVUFBVSxlQUMzQkosUUFBQUMsUUFBQUMsY0FBQSxPQUFLdkIsR0FBRyxNQUFNeUIsVUFBVSxPQUNwQkosUUFBQUMsUUFBQUMsY0FBQSxPQUFLdkIsR0FBRyxlQUFleUIsVUFBVSxpQkFDN0JKLFFBQUFDLFFBQUFDLGNBQUEsTUFBSXZCLEdBQUcsVUFBVXlCLFVBQVUsWUFDdEJUIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9uL0hlYWRlclZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKiBIZWFkZXIgKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxudmFyIEhlYWRlclZpZXdNb2RlbCA9IHtcbiAgICBuYXZJbmZvOiB7IFxuICAgICAgICBzYW1wbGVJdGVtOiB7IGlkOlwic2FtcGxlXCIsIGNsYXNzOlwic2FtcGxlLW5hdi1pdGVtIG5hdi1saXN0LWl0ZW1cIiwgdGV4dDpcIlNhbXBsZVwiLCB2aWV3SWQ6XCJzYW1wbGVcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gSGVhZGVyVmlld01vZGVsO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBuYXZJdGVtTGlzdCA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUubmF2SW5mbykubWFwKChpbmZvS2V5KSA9PiB7XG4gICAgICAgICAgICB2YXIgbmF2SXRlbSA9IHRoaXMuc3RhdGUubmF2SW5mb1tpbmZvS2V5XTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtuYXZJdGVtLmlkfSBpZD17bmF2SXRlbS5pZH0gY2xhc3NOYW1lPXtuYXZJdGVtLmNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBhY3RpdmVDbGFzc05hbWU9XCJzZWxlY3RlZFwiIHRvPXtcIi9cIituYXZJdGVtLnZpZXdJZCtcIi5odG1sXCJ9ID57bmF2SXRlbS50ZXh0fTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBpZD1cImhlYWRlclwiIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImhlYWRlckNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9nb1dyYXBwZXJcIiBjbGFzc05hbWU9XCJsb2dvLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBhY3RpdmVDbGFzc05hbWU9XCJzZWxlY3RlZFwiIHRvPXtcIi9cIn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvc2FtcGxlLWxvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZXcmFwcGVyXCIgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBpZD1cIm5hdlwiIGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdkNvbnRhaW5lclwiIGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJuYXZMaXN0XCIgY2xhc3NOYW1lPVwibmF2LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hdkl0ZW1MaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=
