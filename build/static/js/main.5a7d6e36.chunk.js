(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(14),n(1)),i=n(2),l=n(4),h=n(3),u=n(5),m=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tc bg-light-green dib bw2 br3 pa3 ma2 grow shadow-5"},r.a.createElement("img",{src:"https://robohash.org/test".concat(this.props.id,"?size=200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,this.props.name),r.a.createElement("p",null,this.props.email)))}}]),t}(a.Component),d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(m,{key:"robot"+e.id,id:e.id,name:e.name,email:e.email})}))},b=function(e){var t=e.searchChanged;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t}))},p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).onSearchChanged=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({robots:t})})}},{key:"render",value:function(){var e=this,t=this.state.robots.filter(function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return 0===this.state.robots.length?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(b,{searchChanged:this.onSearchChanged}),r.a.createElement(p,null,r.a.createElement(d,{robots:t})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.5a7d6e36.chunk.js.map