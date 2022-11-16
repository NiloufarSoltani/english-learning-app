"use strict";(self.webpackChunklearning_english_app=self.webpackChunklearning_english_app||[]).push([[945],{6363:function(n,e,r){r.d(e,{Z:function(){return a}});var t="Card_card__Zi619",o=r(184),a=function(n){var e=t;return(0,o.jsx)("div",{onClick:n.onClick,className:n.className?"".concat(e," ").concat(n.className):e,children:n.children})}},6510:function(n,e,r){r.d(e,{Z:function(){return i}});var t="Input_form-control__4lNCk",o="Input_invalid__ARa-D",a="Input_error__NdRaW",s=r(184),i=function(n){return(0,s.jsxs)("div",{className:t,children:[(0,s.jsx)("label",{htmlFor:n.id,children:n.label}),(0,s.jsx)("input",{id:n.id,type:n.type,className:n.hasError?o:null,value:n.inputValue,onChange:n.onChange,onBlur:n.onBlur}),n.showError&&n.hasError&&(0,s.jsx)("p",{className:a,children:n.error})]})}},5499:function(n,e,r){r.d(e,{Z:function(){return _}});var t=r(4164),o="Modal_backdrop__qaofM",a="Modal_overlay__lKJ-T",s="Modal_header__vSJCg",i="Modal_content__tGlgj",c="Modal_footer__+ejtP",l="Modal_action__ioezI",u="Modal_confirm-btn__Sgmni",d="Modal_action-btn__W2Yo6",h=r(184),p=function(n){return(0,h.jsx)("div",{className:o,onClick:n.onClick})},g=function(n){return(0,h.jsxs)("div",{className:a,children:[(0,h.jsx)("header",{className:s,children:n.title}),(0,h.jsx)("div",{className:i,children:n.message}),(0,h.jsx)("footer",{className:c,children:(0,h.jsxs)("div",{className:l,children:[n.secondOnClick&&(0,h.jsx)("button",{className:d,onClick:n.secondOnClick,children:n.secondTextButton}),(0,h.jsx)("button",{className:u,onClick:n.onClick,children:n.firstTextButton?n.firstTextButton:"OK"})]})})]})},_=function(n){return(0,h.jsxs)(h.Fragment,{children:[t.createPortal((0,h.jsx)(p,{onClick:n.onClick}),document.getElementById("backdrop-root")),t.createPortal((0,h.jsx)(g,{onClick:n.onClick,title:n.title,message:n.message,secondOnClick:n.secondOnClick,secondTextButton:n.secondTextButton,firstTextButton:n.firstTextButton}),document.getElementById("overlay-root"))]})}},2421:function(n,e,r){var t=r(8152),o=r(2791);e.Z=function(n){var e=(0,o.useState)(""),r=(0,t.Z)(e,2),a=r[0],s=r[1],i=(0,o.useState)(!1),c=(0,t.Z)(i,2),l=c[0],u=c[1],d=(0,o.useState)(!1),h=(0,t.Z)(d,2),p=h[0],g=h[1],_=!l&&p,f=(0,o.useState)(!1),m=(0,t.Z)(f,2),x=m[0],v=m[1];return{inputValue:a,isValid:l,hasError:_,showError:x,inputChangeHandler:function(e){var r=e.target.value;g(!1),s(r),n.secondCondition&&n.secondCondition(r),n.condition(r)?u(!0):u(!1)},inputBlurHandler:function(){g(!0),v(!0)},resetInput:function(){s(""),g(!1)},turnOnIsTouched:function(){g(!0)},changeIsValid:function(n){u(n)},changeShowError:function(n){v(n)}}}},8945:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t=r(8214),o=r(5861),a=r(8152),s=r(1523),i=r(8931),c=r(2791),l=r(2421),u=r(9009),d=r(6363),h=r(6510),p="SignUp_signing-page__k72wM",g="SignUp_sign-up__N6Vg2",_="SignUp_title__Y7NXw",f="SignUp_submit__gKcEn",m="SignUp_toggleForm__mnblO",x="SignUp_toggleLink__H9Noo",v=r(5499),C=r(184),j=function(n){var e=(0,c.useContext)(u.Z),r=(0,i.k6)(),j=(0,c.useState)(!1),k=(0,a.Z)(j,2),Z=k[0],N=k[1],w=(0,c.useState)(""),y=(0,a.Z)(w,2),S=y[0],b=y[1],E=(0,l.Z)({condition:function(n){return n.includes("@")}}),B=E.inputValue,I=E.isValid,T=E.hasError,U=E.showError,O=E.changeShowError,V=E.inputChangeHandler,M=E.inputBlurHandler,D=E.resetInput,H=E.turnOnIsTouched,A=(0,l.Z)({condition:function(n){return n===L}}),W=A.inputValue,P=A.isValid,R=A.hasError,Y=A.inputChangeHandler,z=A.inputBlurHandler,F=A.resetInput,G=A.turnOnIsTouched,J=A.changeIsValid,K=(0,l.Z)({condition:function(n){return n.trim().length>6},secondCondition:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W;n!==e?(J(!1),O(!0)):(J(!0),O(!0))}}),L=K.inputValue,q=K.isValid,X=K.hasError,Q=K.inputChangeHandler,$=K.inputBlurHandler,nn=K.resetInput,en=K.turnOnIsTouched,rn=I&&q&&P,tn=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(){var r,o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return N(!1),"AIzaSyD0iWDZ1ABlsuooDbitUTmj93_GWg8CRyA",n.next=4,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat("AIzaSyD0iWDZ1ABlsuooDbitUTmj93_GWg8CRyA"),{method:"POST",body:JSON.stringify({email:B,password:L,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}});case 4:return r=n.sent,n.next=7,r.json();case 7:if(!(o=n.sent).error||!o.error.message){n.next=14;break}throw N(!0),b(o.error.message),new Error(o.error.message);case 14:e.signUp(o.idToken,o.email);case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),on=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),rn){n.next=9;break}return H(),en(),G(),O(!0),n.abrupt("return");case 9:O(!1);case 10:return n.next=12,tn();case 12:D(),nn(),F(),r.push("/");case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,C.jsxs)("div",{className:p,children:[(0,C.jsxs)(d.Z,{className:g,children:[(0,C.jsx)("h2",{className:_,children:"Sign-Up"}),(0,C.jsxs)("form",{onSubmit:on,children:[(0,C.jsx)(h.Z,{id:B,label:"E-mail",type:"email",value:B,onChange:V,onBlur:M,showError:U,hasError:T,error:"Your email address is not valid!"}),(0,C.jsx)(h.Z,{id:L,label:"Password (7 characters minimum)",type:"password",value:L,onChange:Q,onBlur:$,showError:U,hasError:X,error:"Your password must have at least 7 characters!"}),(0,C.jsx)(h.Z,{id:W,label:"Repeat your password",type:"password",value:W,onChange:Y,onBlur:z,showError:U,hasError:R,error:"Your passwords are different!"}),(0,C.jsx)("button",{className:f,children:"Sign Up"})]})]}),(0,C.jsxs)("div",{className:m,children:[(0,C.jsx)("fieldset",{children:(0,C.jsx)("legend",{children:"Do you already have an account?"})}),(0,C.jsx)(s.rU,{className:x,to:"/sign-in",children:"Loging on your account"})]}),Z&&(0,C.jsx)(v.Z,{title:"Error",message:S,onClick:function(){N(!1)}})]})}}}]);
//# sourceMappingURL=945.d6db442b.chunk.js.map