(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[50],{1043:function(e,t,a){"use strict";a.r(t);var l=a(45),n=a(51),o=a(53),r=a(52),i=a(247),c=a(54),s=a(0),p=a.n(s),m=a(116),u=a(8),g=a(28),h=a.n(g),E=a(1047),f=function(e){var t=h()("tooltip","show"),a=h()("tooltip-inner",e.innerClassName);return p.a.createElement(E.a,Object(u.a)({},e,{popperClassName:t,innerClassName:a}))};f.propTypes=E.b,f.defaultProps={placement:"top",autohide:!0,placementPrefix:"bs-tooltip",trigger:"click hover focus"};var d=f,O=a(245),b=a(926),j=a(246),v=a(925),y=a(96),T=a(40),x=a(3),N=a.n(x),k=a(12),w=["defaultOpen"],C=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(y.a)(a)),a}Object(T.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return p.a.createElement(d,Object(u.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(k.m)(this.props,w)))},t}(s.Component);C.propTypes=Object(v.a)({defaultOpen:N.a.bool},d.propTypes);var S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).toggle=a.toggle.bind(Object(i.a)(a)),a.state={tooltipOpen:!1},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"toggle",value:function(){this.setState({tooltipOpen:!this.state.tooltipOpen})}},{key:"render",value:function(){return p.a.createElement("span",null,p.a.createElement(m.a,{className:"mr-1",color:"secondary",id:"Tooltip-"+this.props.id},this.props.item.text),p.a.createElement(d,{placement:this.props.item.placement,isOpen:this.state.tooltipOpen,target:"Tooltip-"+this.props.id,toggle:this.toggle},"Tooltip Content!"))}}]),t}(p.a.Component),H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).toggle=a.toggle.bind(Object(i.a)(a)),a.state={tooltipOpen:[!1,!1],tooltips:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"toggle",value:function(e){var t=this.state.tooltipOpen.map((function(t,a){return a===e&&!t}));this.setState({tooltipOpen:t})}},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(O.a,null,p.a.createElement(b.a,null,p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Tooltips"),p.a.createElement("div",{className:"card-header-actions"},p.a.createElement("a",{href:"https://reactstrap.github.io/components/tooltips/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},p.a.createElement("small",{className:"text-muted"},"docs")))),p.a.createElement(j.a,null,p.a.createElement("p",null,"Somewhere in here is a ",p.a.createElement("a",{href:"#",id:"TooltipExample"},"tooltip"),"."),p.a.createElement(d,{placement:"right",isOpen:this.state.tooltipOpen[0],target:"TooltipExample",toggle:function(){e.toggle(0)}},"Hello world!"))),p.a.createElement(O.a,null,p.a.createElement(b.a,null,p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Tooltip"),p.a.createElement("small",null," disable autohide")),p.a.createElement(j.a,null,p.a.createElement("p",null,"Sometimes you need to allow users to select text within a ",p.a.createElement("a",{href:"#",id:"DisabledAutoHideExample"},"tooltip"),"."),p.a.createElement(d,{placement:"top",isOpen:this.state.tooltipOpen[1],autohide:!1,target:"DisabledAutoHideExample",toggle:function(){e.toggle(1)}},"Try to select this text!"))),p.a.createElement(O.a,null,p.a.createElement(b.a,null,p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Tooltip"),p.a.createElement("small",null," list")),p.a.createElement(j.a,null,this.state.tooltips.map((function(e,t){return p.a.createElement(S,{key:t,item:e,id:t})})))),p.a.createElement(O.a,null,p.a.createElement(b.a,null,p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Tooltip"),p.a.createElement("small",null," uncontrolled")),p.a.createElement(j.a,null,p.a.createElement("p",null,"Somewhere in here is a ",p.a.createElement("a",{href:"#",id:"UncontrolledTooltipExample"},"tooltip"),"."),p.a.createElement(C,{placement:"right",target:"UncontrolledTooltipExample"},"Hello world!"))))}}]),t}(s.Component);t.default=H}}]);
//# sourceMappingURL=50.c136b560.chunk.js.map