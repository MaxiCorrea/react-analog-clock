(this["webpackJsonpreact-analog-clock"]=this["webpackJsonpreact-analog-clock"]||[]).push([[0],{19:function(t,e,r){},33:function(t,e,r){"use strict";r.r(e);var o,n=r(0),a=r.n(n),i=(r(19),r(8)),s=r.n(i),c=r(7),l=r(14),u=r(6);!function(t){t.UPDATE_TIME="CLOCK/UPDATE_TIME"}(o||(o={}));var d={hours:0,minutes:0,seconds:0,textHours:0,textMinutes:0,ampm:""},x=Object(u.b)({clockState:function(){var t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.UPDATE_TIME:var e,r=t.payload,n=30*r.getHours(),a=6*r.getMinutes(),i=6*r.getSeconds(),s=r.getHours(),c=r.getMinutes();return s>=12?(s-=12,e="PM"):e="AM",0===s&&(s=12),{hours:n+a/12,minutes:a,seconds:i,textHours:s,textMinutes:c,ampm:e};default:return d}}});var h=r(17),j=r(3),b=Object(j.a)({root:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px",marginBottom:"50px",maxWidth:"968px",marginLeft:"auto",marginRight:"auto"}}),f=r(1),m=function(t){var e=b();return Object(f.jsx)("section",{className:e.root,children:t.children})},p=Object(j.a)({root:{position:"relative",width:"200px",height:"200px",background:"#fff",borderRadius:"50%",boxShadow:"-6px -6px 16px var(--white-color), 6px 6px 16px hsla(var(--hue-color), 30%, 86%, 1), inset 6px 6px 16px hsla(var(--hue-color), 30%, 86%, 1), inset -6px -6px 16px var(--white-color)",display:"flex",justifyContent:"center",alignItems:"center"}}),v=function(t){var e=p();return Object(f.jsx)("div",{className:e.root,children:t.children})},g=Object(j.a)({twelve:{position:"absolute",width:"1rem",height:"1px",backgroundColor:"var(--text-color-light)",transform:"translateX(-50%) rotate(90deg)",top:"1.5rem",left:"50%"},six:{position:"absolute",width:"1rem",height:"1px",backgroundColor:"var(--text-color-light)",transform:"translateX(-50%) rotate(90deg)",bottom:"1.25rem",left:"50%"},three:{position:"absolute",width:"1rem",height:"1px",backgroundColor:"var(--text-color-light)",top:"50%",right:".75rem"},nine:{position:"absolute",width:"1rem",height:"1px",backgroundColor:"var(--text-color-light)",left:".75rem",top:"50%"},axis:{width:".75rem",height:".75rem",backgroundColor:"var(--first-color)",borderRadius:"50%",border:"2px solid var(--body-color)",zIndex:"var(--z-tooltip)"}}),O=function(){var t=g();return Object(f.jsx)("span",{className:t.twelve})},w=function(){var t=g();return Object(f.jsx)("span",{className:t.three})},y=function(){var t=g();return Object(f.jsx)("span",{className:t.six})},C=function(){var t=g();return Object(f.jsx)("span",{className:t.nine})},N=function(){var t=g();return Object(f.jsx)("span",{className:t.axis})},E=Object(j.a)({hours:{position:"absolute",display:"flex",justifyContent:"center",width:"105px",height:"105px","&:before":{content:'""',position:"absolute",backgroundColor:"var(--text-color)",width:".25rem",height:"3rem",borderRadius:".75rem",zIndex:"var(--z-normal)"}},minutes:{position:"absolute",width:"136px",height:"136px",display:"flex",justifyContent:"center","&:before":{content:'""',position:"absolute",backgroundColor:"var(--text-color)",width:".25rem",height:"4rem",borderRadius:".75rem",zIndex:"var(--z-normal)"}},seconds:{position:"absolute",width:"130px",height:"130px",display:"flex",justifyContent:"center","&:before":{content:'""',position:"absolute",backgroundColor:"var(--first-color)",width:".125rem",height:"5rem",borderRadius:".75rem",zIndex:"var(--z-normal)"}}}),I=function(t){var e=E();return Object(f.jsx)("span",{style:{transform:"rotateZ("+t.value+"deg)"},className:e.hours})},k=function(t){var e=E();return Object(f.jsx)("span",{style:{transform:"rotateZ("+t.value+"deg)"},className:e.minutes})},z=function(t){var e=E();return Object(f.jsx)("span",{style:{transform:"rotateZ("+t.value+"deg)"},className:e.seconds})},_=Object(j.a)({container:{display:"flex",justifyContent:"center"},hours:{fontSize:"var(--biggest-font-size)",fontWeight:"var(--font-medium)",color:"var(--title-color)"},minutes:{fontSize:"var(--biggest-font-size)",fontWeight:"var(--font-medium)",color:"var(--title-color)"},ampm:{fontSize:"var(--tiny-font-size)",color:"var(--title-color)",fontWeight:"var(--font-medium)",marginLeft:"var(--mn-0-25)"}}),M=function(t){var e=_(),r=t.textHours<10?"0"+t.textHours+":":t.textHours+":",o=t.textMinutes<10?"0"+t.textMinutes:t.textMinutes;return Object(f.jsxs)("div",{className:e.container,children:[Object(f.jsx)("div",{className:e.hours,children:r}),Object(f.jsx)("div",{className:e.minutes,children:o}),Object(f.jsx)("div",{className:e.ampm,children:t.ampm})]})},T=Object(j.a)({footer:{width:"100%",height:"100px"}}),S=Object(j.a)({root:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}),D=function(t){var e=S();return Object(f.jsx)("div",{className:e.root,children:t.children})},P=Object(j.a)({root:{fontFamily:"Poppins",fontSize:"var(--smaller-font-size)",fontWeight:"var(--font-medium)",color:"var(--text-color-light)",transition:".3s","&:hover":{color:"var(--first-color)"}}}),R=function(){var t=P();return Object(f.jsxs)("div",{className:t.root,children:["\xa9Copyright ",(new Date).getFullYear()," developing by Maximiliano Correa"]})},F=function(){var t=T();return Object(f.jsx)("footer",{className:t.footer,children:Object(f.jsx)(D,{children:Object(f.jsx)(R,{})})})},H=r(11),L=r.n(H),U=r(16),X=function(){var t=Object(c.b)(),e=Object(c.c)((function(t){return t.clockState}));return n.useEffect((function(){var e=setInterval((function(){t(function(){var t=Object(U.a)(L.a.mark((function t(e){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:o.UPDATE_TIME,payload:new Date});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),1e3);return function(){clearInterval(e)}}),[t]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m,{children:Object(f.jsxs)(v,{children:[Object(f.jsx)(O,{}),Object(f.jsx)(w,{}),Object(f.jsx)(y,{}),Object(f.jsx)(C,{}),Object(f.jsx)(N,{}),Object(f.jsx)(I,{value:e.hours}),Object(f.jsx)(k,{value:e.minutes}),Object(f.jsx)(z,{value:e.seconds})]})}),Object(f.jsx)(M,Object(h.a)({},e)),Object(f.jsx)(F,{})]})},A=function(){return Object(f.jsx)(X,{})},W=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,34)).then((function(e){var r=e.getCLS,o=e.getFID,n=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),o(t),n(t),a(t),i(t)}))},B=Object(u.d)(x,void 0,Object(u.c)(Object(u.a)(l.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():u.c));s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(c.a,{store:B,children:Object(f.jsx)(A,{})})}),document.getElementById("root")),W()}},[[33,1,2]]]);
//# sourceMappingURL=main.4ab2edf1.chunk.js.map