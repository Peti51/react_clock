(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),o=n(4),s=n(5),i=n(7),r=n(6),l=n(1),m=n.n(l),u=(n(12),n(0));function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var d=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={time:"",oldName:"Clock-0",newName:"",hasClock:!0},t.prevState=function(){t.state.oldName=t.state.newName},t.clockShow=function(e){e.preventDefault(),2===e.button?t.setState({hasClock:!1}):t.setState({hasClock:!0})},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;window.setInterval((function(){t.setState({time:(new Date).toLocaleTimeString()})}),1e3),window.setInterval((function(){!0===t.state.hasClock&&console.info(t.state.time)}),1e3),window.setInterval((function(){t.setState({newName:h()}),!0===t.state.hasClock&&console.info("Renamed from ".concat(t.prevState()," to ").concat(t.state.newName))}),3300),document.addEventListener("mousedown",this.clockShow)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:this.state.newName})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:this.state.time})]})]})}}]),n}(m.a.Component);c.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.87928c09.chunk.js.map