(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{1058:function(e,a,t){"use strict";var l=t(8),n=t(23),r=t(0),c=t.n(r),s=t(3),u=t.n(s),m=t(28),i=t.n(m),o=t(12),E={children:u.a.node,className:u.a.string,listClassName:u.a.string,cssModule:u.a.object,size:u.a.string,tag:o.p,listTag:o.p,"aria-label":u.a.string},b=function(e){var a,t=e.className,r=e.listClassName,s=e.cssModule,u=e.size,m=e.tag,E=e.listTag,b=e["aria-label"],g=Object(n.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),d=Object(o.l)(i()(t),s),p=Object(o.l)(i()(r,"pagination",((a={})["pagination-"+u]=!!u,a)),s);return c.a.createElement(m,{className:d,"aria-label":b},c.a.createElement(E,Object(l.a)({},g,{className:p})))};b.propTypes=E,b.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=b},1059:function(e,a,t){"use strict";var l=t(8),n=t(23),r=t(0),c=t.n(r),s=t(3),u=t.n(s),m=t(28),i=t.n(m),o=t(12),E={active:u.a.bool,children:u.a.node,className:u.a.string,cssModule:u.a.object,disabled:u.a.bool,tag:o.p},b=function(e){var a=e.active,t=e.className,r=e.cssModule,s=e.disabled,u=e.tag,m=Object(n.a)(e,["active","className","cssModule","disabled","tag"]),E=Object(o.l)(i()(t,"page-item",{active:a,disabled:s}),r);return c.a.createElement(u,Object(l.a)({},m,{className:E}))};b.propTypes=E,b.defaultProps={tag:"li"},a.a=b},1060:function(e,a,t){"use strict";var l=t(8),n=t(23),r=t(0),c=t.n(r),s=t(3),u=t.n(s),m=t(28),i=t.n(m),o=t(12),E={"aria-label":u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,next:u.a.bool,previous:u.a.bool,first:u.a.bool,last:u.a.bool,tag:o.p},b=function(e){var a,t=e.className,r=e.cssModule,s=e.next,u=e.previous,m=e.first,E=e.last,b=e.tag,g=Object(n.a)(e,["className","cssModule","next","previous","first","last","tag"]),d=Object(o.l)(i()(t,"page-link"),r);u?a="Previous":s?a="Next":m?a="First":E&&(a="Last");var p,f=e["aria-label"]||a;u?p="\u2039":s?p="\u203a":m?p="\xab":E&&(p="\xbb");var v=e.children;return v&&Array.isArray(v)&&0===v.length&&(v=null),g.href||"a"!==b||(b="button"),(u||s||m||E)&&(v=[c.a.createElement("span",{"aria-hidden":"true",key:"caret"},v||p),c.a.createElement("span",{className:"sr-only",key:"sr"},f)]),c.a.createElement(b,Object(l.a)({},g,{className:d,"aria-label":f}),v)};b.propTypes=E,b.defaultProps={tag:"a"},a.a=b},926:function(e,a,t){"use strict";var l=t(8),n=t(23),r=t(0),c=t.n(r),s=t(3),u=t.n(s),m=t(28),i=t.n(m),o=t(12),E={tag:o.p,className:u.a.string,cssModule:u.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),u=Object(o.l)(i()(a,"card-header"),t);return c.a.createElement(r,Object(l.a)({},s,{className:u}))};b.propTypes=E,b.defaultProps={tag:"div"},a.a=b},999:function(e,a,t){"use strict";t.r(a);var l=t(45),n=t(51),r=t(53),c=t(52),s=t(54),u=t(0),m=t.n(u),i=t(245),o=t(926),E=t(246),b=t(1058),g=t(1059),d=t(1060),p=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(i.a,null,m.a.createElement(o.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Pagination"),m.a.createElement("div",{className:"card-header-actions"},m.a.createElement("a",{href:"https://reactstrap.github.io/components/pagination/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},m.a.createElement("small",{className:"text-muted"},"docs")))),m.a.createElement(E.a,null,m.a.createElement(b.a,null,m.a.createElement(g.a,null,m.a.createElement(d.a,{previous:!0,tag:"button"})),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"1")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"2")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"3")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"4")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"5")),m.a.createElement(g.a,null,m.a.createElement(d.a,{next:!0,tag:"button"}))))),m.a.createElement(i.a,null,m.a.createElement(o.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Pagination"),m.a.createElement("small",null," disabled and active states")),m.a.createElement(E.a,null,m.a.createElement(b.a,null,m.a.createElement(g.a,{disabled:!0},m.a.createElement(d.a,{previous:!0,tag:"button"})),m.a.createElement(g.a,{active:!0},m.a.createElement(d.a,{tag:"button"},"1")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"2")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"3")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"4")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"5")),m.a.createElement(g.a,null,m.a.createElement(d.a,{next:!0,tag:"button"}))))),m.a.createElement(i.a,null,m.a.createElement(o.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Pagination"),m.a.createElement("small",null," sizing")),m.a.createElement(E.a,null,m.a.createElement(b.a,{size:"lg"},m.a.createElement(g.a,null,m.a.createElement(d.a,{previous:!0,tag:"button"})),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"1")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"2")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"3")),m.a.createElement(g.a,{className:"d-none d-sm-block"},m.a.createElement(d.a,{next:!0,tag:"button"}))),m.a.createElement(b.a,null,m.a.createElement(g.a,null,m.a.createElement(d.a,{previous:!0,tag:"button"})),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"1")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"2")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"3")),m.a.createElement(g.a,null,m.a.createElement(d.a,{next:!0,tag:"button"}))),m.a.createElement(b.a,{size:"sm"},m.a.createElement(g.a,null,m.a.createElement(d.a,{previous:!0,tag:"button"})),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"1")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"2")),m.a.createElement(g.a,null,m.a.createElement(d.a,{tag:"button"},"3")),m.a.createElement(g.a,null,m.a.createElement(d.a,{next:!0,tag:"button"}))))))}}]),a}(u.Component);a.default=p}}]);
//# sourceMappingURL=22.3d3e41a6.chunk.js.map