(this["webpackJsonpurl-shortening-page"]=this["webpackJsonpurl-shortening-page"]||[]).push([[6],{44:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(0);var a=n(50),r=n.n(a),c=n(1),i=function(t){var e=t.className?t.className:"",n="".concat(r.a.card," ").concat(e).trim();return Object(c.jsx)("div",{className:n,children:t.children})}},47:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o.a})),n.d(e,"c",(function(){return _.a})),n.d(e,"d",(function(){return l}));n(0);var a=n(49),r=n.n(a),c=n(1),i=function(t){var e=t.type,n=t.className,a=t.variant,i=t.onClick,o=t.disabled,_=t.children,u="semi-rectangle"===e?"".concat(r.a["semi-rectangle"]):"",s=n||"",d=a?"".concat(r.a[a]):"",l="".concat("btn"," ").concat(d," ").concat(u," ").concat(s).trim();return Object(c.jsx)("button",{className:l,type:e,onClick:i,disabled:o,children:_})},o=n(13),_=n(44),u=n(17),s=n(51),d=n.n(s),l=function(t){var e=t.className,n=t.onChange,a=t.input,r=e||"",i="".concat(d.a.input," ").concat(r).trim();return Object(c.jsx)("input",Object(u.a)({onChange:n,className:i},a))}},49:function(t,e,n){t.exports={"semi-rectangle":"Button_semi-rectangle__1hAsE",secondary:"Button_secondary__NYFMG"}},50:function(t,e,n){t.exports={card:"Card_card__3AJ-o"}},51:function(t,e,n){t.exports={input:"Input_input__3uLFF"}},63:function(t,e,n){t.exports={"auth-form":"AuthForm_auth-form__tLEbk","auth-form__container":"AuthForm_auth-form__container__mHacr","auth-form__title":"AuthForm_auth-form__title__1ShyR","auth-form__input":"AuthForm_auth-form__input__1deXa"}},64:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(68),r=n(56),c=Object(a.a)({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/url-shortening-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/url-shortening-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/url-shortening-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/url-shortening-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/url-shortening-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/url-shortening-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_APP_ID}),i=Object(r.b)(c)},65:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n(0),r=n(47),c=n(25),i=n(63),o=n.n(i),_=n(1),u=function(t){var e=t.title,n=t.btnText,i=t.submit,u=t.isLoading,s=Object(a.useRef)(),d=Object(a.useRef)(),l={ref:s,placeholder:"User",type:"text"},E={ref:d,placeholder:"Password",type:"password"},O=u?Object(_.jsx)(c.a,{}):n;return Object(_.jsxs)("div",{className:o.a["auth-form"],children:[Object(_.jsx)("h2",{className:o.a["auth-form__title"],children:e}),Object(_.jsxs)("div",{className:o.a["auth-form__container"],children:[Object(_.jsx)(r.d,{className:o.a["auth-form__input"],input:l}),Object(_.jsx)(r.d,{className:o.a["auth-form__input"],input:E}),Object(_.jsx)(r.a,{className:o.a["auth-form__btn"],type:"semi-rectangle",onClick:i.bind(null,s,d),children:O})]})]})}},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return T}));var a=n(45),r=n.n(a),c=n(46),i=n(5),o=n(0),_=n(2),u=n(7),s=n(56),d=n(65),l=n(83),E=n.n(l),O=n(64),S=n(10),p=n(1);function T(){var t=Object(_.g)(),e=Object(o.useState)(!1),n=Object(i.a)(e,2),a=n[0],l=n[1],T=Object(u.b)(),m=function(){var e=Object(c.a)(r.a.mark((function e(n,a){var c,i,o,_,u,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,Object(s.c)(O.a,n.current.value,a.current.value);case 4:c=e.sent,i=c.user,o=i.accessToken,_=i.email,u=i.emailVerified,d={authToken:o,email:_,emailVerified:u,isLoggedIn:!0},l(!1),T(S.a.setUser(d)),localStorage.setItem("user",JSON.stringify(d)),t("/admin"),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),"auth/invalid-email"===e.t0.code&&alert("invalid email"),"auth/wrong-password"===e.t0.code&&alert("wrong password"),"auth/user-not-found"===e.t0.code&&alert("user not found");case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:E.a.login,children:Object(p.jsx)(d.a,{title:"Login",btnText:"Login",submit:m,isLoading:a})})}},83:function(t,e,n){t.exports={login:"Login_login__PjBUD"}}}]);
//# sourceMappingURL=6.2cc1f64b.chunk.js.map