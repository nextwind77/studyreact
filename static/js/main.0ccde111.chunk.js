(this.webpackJsonpstudyreact=this.webpackJsonpstudyreact||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),u=n.n(c),s=(n(12),n(3)),o=n(4),i=n(5),l=n(6),m=(n(13),function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={username:null},a}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{clasName:"App"},r.a.createElement("header",{className:"App-header"},this.state.username?"Hello ".concat(this.state.username):"Hellow World"))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://nextwind77.cafe24app.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({username:t.username})}))}}]),n}(r.a.Component));u.a.render(r.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0ccde111.chunk.js.map