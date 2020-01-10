(this["webpackJsonpreact-login-signup-ui-template"]=this["webpackJsonpreact-login-signup-ui-template"]||[]).push([[0],{33:function(e,a,t){e.exports=t(64)},38:function(e,a,t){},40:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(30),r=t.n(l),o=t(7),i=(t(38),t(39),t(40),t(6)),c=t(9),m=t(13),u=t(15),p=t(14),d=t(10),h=t(16),g=t(11),E=t.n(g),b=new function e(){Object(c.a)(this,e),this.config={},this.configReady=!1,this.BACKEND_API_URL="http://192.168.11.23:8001/"},v=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).state={email:"",password:"",errors:[]},t.onLogin=t.onLogin.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"handleValidation",value:function(){var e={},a=!0;if(""==this.state.email)a=!1,e.email="Cannot be empty";else{var t=this.state.email.lastIndexOf("@"),n=this.state.email.lastIndexOf(".");t<n&&t>0&&-1==this.state.email.indexOf("@@")&&n>2&&this.state.email.length-n>2||(a=!1,e.email="Email is not valid")}return this.setState({errors:e}),a}},{key:"onLogin",value:function(){E.a.defaults.baseURL=b.BACKEND_API_URL,this.handleValidation()||alert("Form has errors."),E()({method:"post",url:"/auth/login",data:{email:this.state.email,password:this.state.password},headers:{"content-type":"application/json"}}).then((function(e){"success"==e.data.status&&alert("Login success"),"no user"==e.data.status&&alert("Wrong credential")})).catch((function(e){alert("Something went wrong")}))}},{key:"render",value:function(){var e=this;return console.log(this.state),s.a.createElement("div",null,s.a.createElement("h3",null,"Sign In"),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Email address"),s.a.createElement("input",{type:"email",onChange:function(a){return e.setState({email:a.target.value})},className:"form-control",placeholder:"Enter email"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{type:"password",name:"password",onChange:function(a){return e.setState({password:a.target.value})},className:"form-control",placeholder:"Enter password"})),s.a.createElement("button",{className:"btn btn-primary btn-block",onClick:this.onLogin},"Sign In"),s.a.createElement("p",{className:"forgot-password text-right"},"Forgot ",s.a.createElement("a",{href:"#"},"password?")))}}]),a}(n.Component),f=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).state={email:"",password:""},t.onSignup=t.onSignup.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"onSignup",value:function(){console.log("signup",b.BACKEND_API_URL),E.a.defaults.baseURL=b.BACKEND_API_URL,E()({method:"post",url:"/auth/signup",data:{email:this.state.email,password:this.state.password},headers:{"content-type":"application/json"}}).then((function(e){console.log("RESPONSE RECEIVED: ",e),"success"==e.data.status&&alert("Success"),"exist"==e.data.status&&alert("Already registered"),"error"==e.data.status&&alert("Something went wrong")})).catch((function(e){console.log("AXIOS ERROR: ",e)}))}},{key:"render",value:function(){var e=this;return console.log(this.state),s.a.createElement("div",null,s.a.createElement("h3",null,"Sign Up"),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Email address"),s.a.createElement("input",{type:"email",name:"email",onChange:function(a){return e.setState({email:a.target.value})},className:"form-control",placeholder:"Enter email"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{type:"password",name:"password",onChange:function(a){return e.setState({password:a.target.value})},className:"form-control",placeholder:"Enter password"})),s.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:this.onSignup},"Sign Up"),s.a.createElement("p",{className:"forgot-password text-right"},"Already registered ",s.a.createElement("a",{href:"#"},"sign in?")))}}]),a}(n.Component);var w=function(){return s.a.createElement(o.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},s.a.createElement("div",{className:"container"},s.a.createElement(o.b,{className:"navbar-brand",to:"/sign-in"},"positronX.io"),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},s.a.createElement("ul",{className:"navbar-nav ml-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(o.b,{className:"nav-link",to:"/sign-in"},"Login")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(o.b,{className:"nav-link",to:"/sign-up"},"Sign up")))))),s.a.createElement("div",{className:"auth-wrapper"},s.a.createElement("div",{className:"auth-inner"},s.a.createElement(i.c,null,s.a.createElement(i.a,{exact:!0,path:"/",component:v}),s.a.createElement(i.a,{path:"/sign-in",component:v}),s.a.createElement(i.a,{path:"/sign-up",component:f}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(o.a,null,s.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.77121735.chunk.js.map