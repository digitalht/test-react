(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(7),c=a.n(r),h=a(9),i=a(2),o=a(3),s=a(5),j=a(4),b=a(8),l=a(0),u=function(e){Object(s.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).initialState={job:"",name:"",phone:""},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(b.a)({},n,r))},e.submitForm=function(){e.props.handleSubmit(e.state),e.setState(e.initialState)},e.state=e.initialState,e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job,n=e.phone;return Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),Object(l.jsx)("label",{htmlFor:"job",children:"Job"}),Object(l.jsx)("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),Object(l.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(l.jsx)("input",{type:"text",name:"phone",id:"phone",value:n,onChange:this.handleChange}),Object(l.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),a}(n.Component),d=function(){return Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Job"}),Object(l.jsx)("th",{children:"Phone"})]})})},m=function(e){var t=e.characterData.map((function(t,a){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.name}),Object(l.jsx)("td",{children:t.job}),Object(l.jsx)("td",{children:t.phone}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{onClick:function(){return e.removeCharacter(a)},children:"Bidona"})})]},a)}));return Object(l.jsx)("tbody",{children:t})},O=function(e){var t=e.characterData,a=e.removeCharacter;return Object(l.jsxs)("table",{children:[Object(l.jsx)(d,{}),Object(l.jsx)(m,{characterData:t,removeCharacter:a})]})},p=function(e){Object(s.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={characters:[{name:"Charlie",job:"Janitor",phone:"123456"},{name:"Mac",job:"Bouncer",phone:"555-555-555"},{name:"Dee",job:"Aspring actress",phone:"+39 1211123456"},{name:"Dennis",job:"Bartender",phone:"+45 123456"}]},e.removeCharacter=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({characters:[].concat(Object(h.a)(e.state.characters),[t])})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.characters;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(O,{characterData:e,removeCharacter:this.removeCharacter}),Object(l.jsx)(u,{handleSubmit:this.handleSubmit})]})}}]),a}(n.Component);a(15);c.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3ad2298e.chunk.js.map