(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[67],{12439:function(Ve,pe,o){"use strict";o.d(pe,{U2:function(){return D},v_:function(){return H}});var Ee=o(15009),X=o.n(Ee),ae=o(99289),w=o.n(ae),n=o(6154),S=n.Z.create({baseURL:"https://movie.jdd001.top",timeout:5e5}),D=function(){var R=w()(X()().mark(function W(de,ge){var me,ee;return X()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.prev=0,me=sessionStorage.getItem("token"),S.defaults.headers.common.Authorization="Bearer "+me,x.next=5,S.get(de,{params:ge});case 5:return ee=x.sent,x.abrupt("return",ee.data);case 9:throw x.prev=9,x.t0=x.catch(0),console.error("GET request error:",x.t0),x.t0;case 13:case"end":return x.stop()}},W,null,[[0,9]])}));return function(de,ge){return R.apply(this,arguments)}}(),H=function(){var R=w()(X()().mark(function W(de,ge){var me,ee;return X()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.prev=0,me=sessionStorage.getItem("token"),S.defaults.headers.common.Authorization="Bearer "+me,console.log("token",me),x.next=6,S.post(de,ge);case 6:return ee=x.sent,x.abrupt("return",ee.data);case 10:throw x.prev=10,x.t0=x.catch(0),console.error("POST request error:",x.t0),x.t0;case 14:case"end":return x.stop()}},W,null,[[0,10]])}));return function(de,ge){return R.apply(this,arguments)}}(),q=null},30163:function(Ve,pe,o){"use strict";o.d(pe,{S:function(){return n},d:function(){return S}});var Ee=o(5574),X=o.n(Ee),ae=o(67294),w=o(85893),n=(0,ae.createContext)(null),S=function(H){var q=H.children,R=(0,ae.useState)(""),W=X()(R,2),de=W[0],ge=W[1],me=(0,ae.useCallback)(function(ee){ge(ee)},[]);return(0,w.jsx)(n.Provider,{value:{token:de,updateData:me},children:q})}},5244:function(Ve,pe,o){"use strict";o.r(pe),o.d(pe,{default:function(){return Ut}});var Ee=o(19632),X=o.n(Ee),ae=o(5574),w=o.n(ae),n=o(67294),S=o(87462),D=o(4942),H=o(94184),q=o.n(H),R=o(53124),W=function(e,r){var s={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&r.indexOf(c)<0&&(s[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,c=Object.getOwnPropertySymbols(e);u<c.length;u++)r.indexOf(c[u])<0&&Object.prototype.propertyIsEnumerable.call(e,c[u])&&(s[c[u]]=e[c[u]]);return s},de=function(r){var s,c=n.useContext(R.E_),u=c.getPrefixCls,b=c.direction,y=r.prefixCls,_=r.type,E=_===void 0?"horizontal":_,te=r.orientation,L=te===void 0?"center":te,$=r.orientationMargin,V=r.className,F=r.children,K=r.dashed,G=r.plain,A=W(r,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),j=u("divider",y),Z=L.length>0?"-".concat(L):L,Y=!!F,I=L==="left"&&$!=null,fe=L==="right"&&$!=null,oe=q()(j,"".concat(j,"-").concat(E),(s={},(0,D.Z)(s,"".concat(j,"-with-text"),Y),(0,D.Z)(s,"".concat(j,"-with-text").concat(Z),Y),(0,D.Z)(s,"".concat(j,"-dashed"),!!K),(0,D.Z)(s,"".concat(j,"-plain"),!!G),(0,D.Z)(s,"".concat(j,"-rtl"),b==="rtl"),(0,D.Z)(s,"".concat(j,"-no-default-orientation-margin-left"),I),(0,D.Z)(s,"".concat(j,"-no-default-orientation-margin-right"),fe),s),V),he=(0,S.Z)((0,S.Z)({},I&&{marginLeft:$}),fe&&{marginRight:$});return n.createElement("div",(0,S.Z)({className:oe},A,{role:"separator"}),F&&E!=="vertical"&&n.createElement("span",{className:"".concat(j,"-inner-text"),style:he},F))},ge=de,me=o(50888),ee=o(97685),ke=o(91),x=o(3129),xe=o(15105),je=n.forwardRef(function(e,r){var s,c=e.prefixCls,u=c===void 0?"rc-switch":c,b=e.className,y=e.checked,_=e.defaultChecked,E=e.disabled,te=e.loadingIcon,L=e.checkedChildren,$=e.unCheckedChildren,V=e.onClick,F=e.onChange,K=e.onKeyDown,G=(0,ke.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),A=(0,x.Z)(!1,{value:y,defaultValue:_}),j=(0,ee.Z)(A,2),Z=j[0],Y=j[1];function I(P,Me){var re=Z;return E||(re=P,Y(re),F==null||F(re,Me)),re}function fe(P){P.which===xe.Z.LEFT?I(!1,P):P.which===xe.Z.RIGHT&&I(!0,P),K==null||K(P)}function oe(P){var Me=I(!Z,P);V==null||V(Me,P)}var he=q()(u,b,(s={},(0,D.Z)(s,"".concat(u,"-checked"),Z),(0,D.Z)(s,"".concat(u,"-disabled"),E),s));return n.createElement("button",Object.assign({},G,{type:"button",role:"switch","aria-checked":Z,disabled:E,className:he,ref:r,onKeyDown:fe,onClick:oe}),te,n.createElement("span",{className:"".concat(u,"-inner")},Z?L:$))});je.displayName="Switch";var Ye=je,Pe=o(98866),T=o(97647),v=o(68349),Ue=function(e,r){var s={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&r.indexOf(c)<0&&(s[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,c=Object.getOwnPropertySymbols(e);u<c.length;u++)r.indexOf(c[u])<0&&Object.prototype.propertyIsEnumerable.call(e,c[u])&&(s[c[u]]=e[c[u]]);return s},He=n.forwardRef(function(e,r){var s,c=e.prefixCls,u=e.size,b=e.disabled,y=e.loading,_=e.className,E=_===void 0?"":_,te=Ue(e,["prefixCls","size","disabled","loading","className"]),L=n.useContext(R.E_),$=L.getPrefixCls,V=L.direction,F=n.useContext(T.Z),K=n.useContext(Pe.Z),G=(b??K)||y,A=$("switch",c),j=n.createElement("div",{className:"".concat(A,"-handle")},y&&n.createElement(me.Z,{className:"".concat(A,"-loading-icon")})),Z=q()((s={},(0,D.Z)(s,"".concat(A,"-small"),(u||F)==="small"),(0,D.Z)(s,"".concat(A,"-loading"),y),(0,D.Z)(s,"".concat(A,"-rtl"),V==="rtl"),s),E);return n.createElement(v.Z,{insertExtraNode:!0},n.createElement(Ye,(0,S.Z)({},te,{prefixCls:A,className:Z,disabled:G,ref:r,loadingIcon:j})))});He.__ANT_SWITCH=!0;var d=He,l=o(97937),a=o(1413),m=o(15471),i=o(8410),f=o(62874),h=function(r){var s=r.prefixCls,c=r.className,u=r.style,b=r.children,y=r.containerRef;return n.createElement(n.Fragment,null,n.createElement("div",{className:q()("".concat(s,"-content"),c),style:(0,a.Z)({},u),"aria-modal":"true",role:"dialog",ref:y},b))},g=h,O=n.createContext(null),p=O,B=o(80334);function ye(e){return typeof e=="string"&&String(Number(e))===e?((0,B.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}function Ne(e){warning(!("wrapperClassName"in e),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!e.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var Le={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function Te(e,r){var s,c,u,b,y=e.prefixCls,_=e.open,E=e.placement,te=e.inline,L=e.push,$=e.forceRender,V=e.autoFocus,F=e.keyboard,K=e.rootClassName,G=e.rootStyle,A=e.zIndex,j=e.className,Z=e.style,Y=e.motion,I=e.width,fe=e.height,oe=e.children,he=e.contentWrapperStyle,P=e.mask,Me=e.maskClosable,re=e.maskMotion,be=e.maskClassName,$e=e.maskStyle,ve=e.afterOpenChange,se=e.onClose,ce=n.useRef(),k=n.useRef(),we=n.useRef();n.useImperativeHandle(r,function(){return ce.current});var ze=function(ne){var C=ne.keyCode,M=ne.shiftKey;switch(C){case xe.Z.TAB:{if(C===xe.Z.TAB){if(!M&&document.activeElement===we.current){var le;(le=k.current)===null||le===void 0||le.focus({preventScroll:!0})}else if(M&&document.activeElement===k.current){var Oe;(Oe=we.current)===null||Oe===void 0||Oe.focus({preventScroll:!0})}}break}case xe.Z.ESC:{se&&F&&(ne.stopPropagation(),se(ne));break}}};n.useEffect(function(){if(_&&V){var N;(N=ce.current)===null||N===void 0||N.focus({preventScroll:!0})}},[_]);var U=n.useState(!1),ie=(0,ee.Z)(U,2),De=ie[0],_e=ie[1],z=n.useContext(p),Ae;L===!1?Ae={distance:0}:L===!0?Ae={}:Ae=L||{};var ue=(s=(c=(u=Ae)===null||u===void 0?void 0:u.distance)!==null&&c!==void 0?c:z==null?void 0:z.pushDistance)!==null&&s!==void 0?s:180,Ze=n.useMemo(function(){return{pushDistance:ue,push:function(){_e(!0)},pull:function(){_e(!1)}}},[ue]);n.useEffect(function(){if(_){var N;z==null||(N=z.push)===null||N===void 0||N.call(z)}else{var ne;z==null||(ne=z.pull)===null||ne===void 0||ne.call(z)}},[_]),n.useEffect(function(){return function(){var N;z==null||(N=z.pull)===null||N===void 0||N.call(z)}},[]);var Fe=P&&n.createElement(f.Z,(0,S.Z)({key:"mask"},re,{visible:_}),function(N,ne){var C=N.className,M=N.style;return n.createElement("div",{className:q()("".concat(y,"-mask"),C,be),style:(0,a.Z)((0,a.Z)({},M),$e),onClick:Me&&_?se:void 0,ref:ne})}),Be=typeof Y=="function"?Y(E):Y,J={};if(De&&ue)switch(E){case"top":J.transform="translateY(".concat(ue,"px)");break;case"bottom":J.transform="translateY(".concat(-ue,"px)");break;case"left":J.transform="translateX(".concat(ue,"px)");break;default:J.transform="translateX(".concat(-ue,"px)");break}E==="left"||E==="right"?J.width=ye(I):J.height=ye(fe);var Ce=n.createElement(f.Z,(0,S.Z)({key:"panel"},Be,{visible:_,forceRender:$,onVisibleChanged:function(ne){ve==null||ve(ne)},removeOnLeave:!1,leavedClassName:"".concat(y,"-content-wrapper-hidden")}),function(N,ne){var C=N.className,M=N.style;return n.createElement("div",{className:q()("".concat(y,"-content-wrapper"),C),style:(0,a.Z)((0,a.Z)((0,a.Z)({},J),M),he)},n.createElement(g,{containerRef:ne,prefixCls:y,className:j,style:Z},oe))}),Ke=(0,a.Z)({},G);return A&&(Ke.zIndex=A),n.createElement(p.Provider,{value:Ze},n.createElement("div",{className:q()(y,"".concat(y,"-").concat(E),K,(b={},(0,D.Z)(b,"".concat(y,"-open"),_),(0,D.Z)(b,"".concat(y,"-inline"),te),b)),style:Ke,tabIndex:-1,ref:ce,onKeyDown:ze},Fe,n.createElement("div",{tabIndex:0,ref:k,style:Le,"aria-hidden":"true","data-sentinel":"start"}),Ce,n.createElement("div",{tabIndex:0,ref:we,style:Le,"aria-hidden":"true","data-sentinel":"end"})))}var Ie=n.forwardRef(Te),Q=Ie,Se=function(r){var s=r.open,c=s===void 0?!1:s,u=r.prefixCls,b=u===void 0?"rc-drawer":u,y=r.placement,_=y===void 0?"right":y,E=r.autoFocus,te=E===void 0?!0:E,L=r.keyboard,$=L===void 0?!0:L,V=r.width,F=V===void 0?378:V,K=r.mask,G=K===void 0?!0:K,A=r.maskClosable,j=A===void 0?!0:A,Z=r.getContainer,Y=r.forceRender,I=r.afterOpenChange,fe=r.destroyOnClose,oe=n.useState(!1),he=(0,ee.Z)(oe,2),P=he[0],Me=he[1],re=n.useState(!1),be=(0,ee.Z)(re,2),$e=be[0],ve=be[1];(0,i.Z)(function(){ve(!0)},[]);var se=$e?c:!1,ce=n.useRef(),k=n.useRef();(0,i.Z)(function(){se&&(k.current=document.activeElement)},[se]);var we=function(ie){var De;if(Me(ie),I==null||I(ie),!ie&&k.current&&!(!((De=ce.current)===null||De===void 0)&&De.contains(k.current))){var _e;(_e=k.current)===null||_e===void 0||_e.focus({preventScroll:!0})}};if(!Y&&!P&&!se&&fe)return null;var ze=(0,a.Z)((0,a.Z)({},r),{},{open:se,prefixCls:b,placement:_,autoFocus:te,keyboard:$,width:F,mask:G,maskClosable:j,inline:Z===!1,afterOpenChange:we,ref:ce});return n.createElement(m.Z,{open:se||Y||P,autoDestroy:!1,getContainer:Z,autoLock:G&&(se||P)},n.createElement(Q,ze))},We=Se,Re=We,ot=o(65223),et=o(33603),ct=o(93355),ut=o(4173),dt=function(e,r){var s={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&r.indexOf(c)<0&&(s[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,c=Object.getOwnPropertySymbols(e);u<c.length;u++)r.indexOf(c[u])<0&&Object.prototype.propertyIsEnumerable.call(e,c[u])&&(s[c[u]]=e[c[u]]);return s},Yt=(0,ct.b)("default","large"),mt={distance:180};function ft(e){var r=e.width,s=e.height,c=e.size,u=c===void 0?"default":c,b=e.closable,y=b===void 0?!0:b,_=e.mask,E=_===void 0?!0:_,te=e.push,L=te===void 0?mt:te,$=e.closeIcon,V=$===void 0?n.createElement(l.Z,null):$,F=e.bodyStyle,K=e.drawerStyle,G=e.className,A=e.visible,j=e.open,Z=e.children,Y=e.style,I=e.title,fe=e.headerStyle,oe=e.onClose,he=e.footer,P=e.footerStyle,Me=e.prefixCls,re=e.getContainer,be=e.extra,$e=e.afterVisibleChange,ve=e.afterOpenChange,se=dt(e,["width","height","size","closable","mask","push","closeIcon","bodyStyle","drawerStyle","className","visible","open","children","style","title","headerStyle","onClose","footer","footerStyle","prefixCls","getContainer","extra","afterVisibleChange","afterOpenChange"]),ce=n.useContext(R.E_),k=ce.getPopupContainer,we=ce.getPrefixCls,ze=ce.direction,U=we("drawer",Me),ie=re===void 0&&k?function(){return k(document.body)}:re,De=y&&n.createElement("button",{type:"button",onClick:oe,"aria-label":"Close",className:"".concat(U,"-close")},V);[["visible","open"],["afterVisibleChange","afterOpenChange"]].forEach(function(J){var Ce=(0,ee.Z)(J,2),Ke=Ce[0],N=Ce[1]});function _e(){return!I&&!y?null:n.createElement("div",{className:q()("".concat(U,"-header"),(0,D.Z)({},"".concat(U,"-header-close-only"),y&&!I&&!be)),style:fe},n.createElement("div",{className:"".concat(U,"-header-title")},De,I&&n.createElement("div",{className:"".concat(U,"-title")},I)),be&&n.createElement("div",{className:"".concat(U,"-extra")},be))}function z(){if(!he)return null;var J="".concat(U,"-footer");return n.createElement("div",{className:J,style:P},he)}var Ae=q()((0,D.Z)({"no-mask":!E},"".concat(U,"-rtl"),ze==="rtl"),G),ue=n.useMemo(function(){return r??(u==="large"?736:378)},[r,u]),Ze=n.useMemo(function(){return s??(u==="large"?736:378)},[s,u]),Fe={motionName:(0,et.mL)(U,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},Be=function(Ce){return{motionName:(0,et.mL)(U,"panel-motion-".concat(Ce)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}};return n.createElement(ut.BR,null,n.createElement(ot.Ux,{status:!0,override:!0},n.createElement(Re,(0,S.Z)({prefixCls:U,onClose:oe},se,{open:j??A,mask:E,push:L,width:ue,height:Ze,rootClassName:Ae,getContainer:ie,afterOpenChange:function(Ce){ve==null||ve(Ce),$e==null||$e(Ce)},maskMotion:Fe,motion:Be,rootStyle:Y}),n.createElement("div",{className:"".concat(U,"-wrapper-body"),style:(0,S.Z)({},K)},_e(),n.createElement("div",{className:"".concat(U,"-body"),style:F},Z),z()))))}var ht=ft,Je=o(60778),tt=o(71577),vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},gt=vt,Ge=o(42135),nt=function(r,s){return n.createElement(Ge.Z,(0,a.Z)((0,a.Z)({},r),{},{ref:s,icon:gt}))};nt.displayName="ArrowLeftOutlined";var xt=n.forwardRef(nt),yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"},Mt=yt,at=function(r,s){return n.createElement(Ge.Z,(0,a.Z)((0,a.Z)({},r),{},{ref:s,icon:Mt}))};at.displayName="SwapOutlined";var Ct=n.forwardRef(at),pt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"},jt=pt,rt=function(r,s){return n.createElement(Ge.Z,(0,a.Z)((0,a.Z)({},r),{},{ref:s,icon:jt}))};rt.displayName="MessageOutlined";var Nt=n.forwardRef(rt),St={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"unlock",theme:"outlined"},Dt=St,st=function(r,s){return n.createElement(Ge.Z,(0,a.Z)((0,a.Z)({},r),{},{ref:s,icon:Dt}))};st.displayName="UnlockOutlined";var _t=n.forwardRef(st),bt=o(68795),Xe=o(12439),Ht=function(r,s){if(r!=null)return ethers.utils.formatUnits(r,s)},Wt=function(r,s){return ethers.utils.parseUnits("".concat(r),s)};function wt(e){var r=localStorage.getItem(e);if(r)try{return JSON.parse(r)}catch(s){console.error("Error parsing JSON from LocalStorage:",s)}return null}var Ot=o(27484),qe=o.n(Ot),Et=Object.defineProperty,it=Object.getOwnPropertySymbols,Lt=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,lt=(e,r,s)=>r in e?Et(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,$t=(e,r)=>{for(var s in r||(r={}))Lt.call(r,s)&&lt(e,s,r[s]);if(it)for(var s of it(r))It.call(r,s)&&lt(e,s,r[s]);return e};const At=e=>n.createElement("svg",$t({xmlns:"http://www.w3.org/2000/svg",height:48,viewBox:"0 -960 960 960",width:48,role:"img"},e),n.createElement("path",{d:"M102.615-215.384v-57.847q0-28.077 14.538-48.115 14.539-20.039 41.112-31.798 56.889-25.01 105.773-39.01 48.885-14 118.577-14 70.462 0 118.846 14 48.385 14 106.043 39.01 25.804 11.759 40.458 31.798 14.653 20.038 14.653 48.115v57.847h-560Zm630.77 0v-55.539q0-43.769-17.729-74.64-17.728-30.871-45.964-51.283 37.462 7.23 72.308 18.115 34.846 10.885 61.308 23.962 23.769 12.846 38.923 34.815 15.154 21.97 15.154 49.031v55.539h-124Zm-350.77-289.462q-49.5 0-82.442-32.942-32.943-32.943-32.943-82.443 0-50.269 32.943-82.827 32.942-32.558 82.442-32.558 50.27 0 82.827 32.558Q498-670.5 498-620.231q0 49.5-32.558 82.443-32.557 32.942-82.827 32.942Zm272.308-115.385q0 49.5-32.557 82.443-32.558 32.942-82.827 32.942-2.539 0-4.5-.346-1.962-.346-4.501-1.269 18.863-21.741 28.547-50.735 9.684-28.994 9.684-63.13t-10.577-61.713q-10.577-27.577-27.654-52.73 1.77.076 4.501-.385 2.73-.462 4.5-.462 50.269 0 82.827 32.558 32.557 32.558 32.557 82.827Z"}));var Ft="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik0xMDIuNjE1LTIxNS4zODR2LTU3Ljg0N3EwLTI4LjA3NyAxNC41MzgtNDguMTE1IDE0LjUzOS0yMC4wMzkgNDEuMTEyLTMxLjc5OCA1Ni44ODktMjUuMDEgMTA1Ljc3My0zOS4wMSA0OC44ODUtMTQgMTE4LjU3Ny0xNCA3MC40NjIgMCAxMTguODQ2IDE0IDQ4LjM4NSAxNCAxMDYuMDQzIDM5LjAxIDI1LjgwNCAxMS43NTkgNDAuNDU4IDMxLjc5OCAxNC42NTMgMjAuMDM4IDE0LjY1MyA0OC4xMTV2NTcuODQ3aC01NjBabTYzMC43NyAwdi01NS41MzlxMC00My43NjktMTcuNzI5LTc0LjY0LTE3LjcyOC0zMC44NzEtNDUuOTY0LTUxLjI4MyAzNy40NjIgNy4yMyA3Mi4zMDggMTguMTE1IDM0Ljg0NiAxMC44ODUgNjEuMzA4IDIzLjk2MiAyMy43NjkgMTIuODQ2IDM4LjkyMyAzNC44MTUgMTUuMTU0IDIxLjk3IDE1LjE1NCA0OS4wMzF2NTUuNTM5aC0xMjRabS0zNTAuNzctMjg5LjQ2MnEtNDkuNSAwLTgyLjQ0Mi0zMi45NDItMzIuOTQzLTMyLjk0My0zMi45NDMtODIuNDQzIDAtNTAuMjY5IDMyLjk0My04Mi44MjcgMzIuOTQyLTMyLjU1OCA4Mi40NDItMzIuNTU4IDUwLjI3IDAgODIuODI3IDMyLjU1OFE0OTgtNjcwLjUgNDk4LTYyMC4yMzFxMCA0OS41LTMyLjU1OCA4Mi40NDMtMzIuNTU3IDMyLjk0Mi04Mi44MjcgMzIuOTQyWm0yNzIuMzA4LTExNS4zODVxMCA0OS41LTMyLjU1NyA4Mi40NDMtMzIuNTU4IDMyLjk0Mi04Mi44MjcgMzIuOTQyLTIuNTM5IDAtNC41LS4zNDYtMS45NjItLjM0Ni00LjUwMS0xLjI2OSAxOC44NjMtMjEuNzQxIDI4LjU0Ny01MC43MzUgOS42ODQtMjguOTk0IDkuNjg0LTYzLjEzdC0xMC41NzctNjEuNzEzcS0xMC41NzctMjcuNTc3LTI3LjY1NC01Mi43MyAxLjc3LjA3NiA0LjUwMS0uMzg1IDIuNzMtLjQ2MiA0LjUtLjQ2MiA1MC4yNjkgMCA4Mi44MjcgMzIuNTU4IDMyLjU1NyAzMi41NTggMzIuNTU3IDgyLjgyN1oiLz48L3N2Zz4=",t=o(85893);function kt(e){var r=e.checked,s=e.data,c=s.header,u=s.name,b=s.type;return(0,t.jsx)("div",{className:"msg_overflow_hidden msg_shrink_0",children:(0,t.jsxs)("div",{className:"msg_flex msg_items_center msg_cursor_pointer msg_select_none msg_border_b msg_bg_subtle_hover ".concat(r&&"msg_bg_subtle_night"," msg-py-2 msg-px-4"),children:[(0,t.jsx)("div",{className:"msg_flex",children:(0,t.jsx)("div",{className:"msg_flex msg_bg_neutral_900 msg-rounded-full msg-w-14 msg-h-14 msg_items_center msg-justify-center",children:(0,t.jsx)("div",{className:"msg-text-lg",children:(0,t.jsx)("div",{className:"msg-xs",children:(0,t.jsx)("img",{style:{width:"100%",borderRadius:"100%"},src:c})})})})}),(0,t.jsxs)("div",{className:"msg_flex msg-grow msg_flex_between msg-pr-2 msg-truncate",children:[(0,t.jsxs)("div",{className:"msg-truncate msg-flex-col msg-max-w-full",children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[b!==1&&(0,t.jsx)(At,{width:20,height:20})," ",(0,t.jsx)("div",{style:{fontSize:"16px",fontWeight:"400"},children:u})]}),(0,t.jsx)("div",{className:"msg-truncate"})]}),(0,t.jsx)("div",{className:"msg_flex msg-flex-col msg_items_end msg_flex_between",children:(0,t.jsx)("span",{style:{fontSize:"12px",fontWeight:"normal",color:"rgba(255,255,255,0.4)"},children:"0xeb...89e1"})})]})]})})}function Tt(e){var r=e.self,s=e.data,c=e.datetime;return(0,t.jsx)("div",{style:{marginBottom:"10px"},className:"".concat(r&&"base-hr"||""),children:(0,t.jsx)("div",{className:"msg_flex ".concat(!r&&"msg-justify-end","  msg-ml-10"),children:(0,t.jsx)("div",{className:"msg_flex msg-flex-col",style:{paddingRight:"20px"},children:(0,t.jsx)("div",{className:"msg_flex msg-flex-col msg-justify-end msg_items_center msg-border ".concat(r&&"msg_bg_subtle_night"||"msg_bg_subtle_light"),children:(0,t.jsxs)("div",{className:"msg-py-2 msg-px-4",children:[(0,t.jsx)("div",{style:{whiteSpace:"pre-line"},children:s}),(0,t.jsxs)("div",{className:"mst-opacity-50 msg-xs-small",children:[!r&&"Q"||"A"," ",c]})]})})})})})}function zt(e){var r=e.checked,s=e.data.header;return(0,t.jsx)("div",{className:"msg_overflow_hidden msg_shrink_0",style:{fontSize:"12px"},children:(0,t.jsxs)("div",{className:"msg_flex msg_items_center  msg-py-2",children:[(0,t.jsx)("div",{className:"msg_flex",children:(0,t.jsx)("div",{className:"msg_flex msg_bg_neutral_900 msg-rounded-full msg-w-12 msg-h-12 msg_items_center msg-justify-center",children:(0,t.jsx)("div",{className:"msg-text-base",children:(0,t.jsx)("div",{className:"msg-xs-base",children:(0,t.jsx)("img",{style:{width:"100%",borderRadius:"100%"},src:s})})})})}),(0,t.jsx)("div",{className:"msg_flex msg-grow msg_flex_between msg-pr-2 msg-truncate",children:(0,t.jsx)("div",{className:"msg-truncate msg-flex-col msg-max-w-full",children:(0,t.jsx)("div",{children:(0,t.jsx)("div",{})})})})]})})}var Zt=o(30163),Kt=Je.Z.TextArea,Pt=[{id:"1",name:"ChatGPT",type:1,content:"...",route:"ChatGpt",header:"https://bf.jdd001.top/cryptologos/chatgpt.png"}];function Ut(){var e,r,s,c=(0,n.useContext)(Zt.S),u=c.token,b=(0,n.useState)(1),y=w()(b,2),_=y[0],E=y[1],te=(0,n.useState)(0),L=w()(te,2),$=L[0],V=L[1],F=(0,n.useState)(""),K=w()(F,2),G=K[0],A=K[1],j=(0,n.useState)([]),Z=w()(j,2),Y=Z[0],I=Z[1],fe=(0,n.useState)(!1),oe=w()(fe,2),he=oe[0],P=oe[1],Me=(0,n.useState)(100),re=w()(Me,2),be=re[0],$e=re[1],ve=(0,n.useRef)(null),se=(0,n.useState)(),ce=w()(se,2),k=ce[0],we=ce[1],ze=(0,n.useState)(Pt),U=w()(ze,2),ie=U[0],De=U[1],_e=(0,n.useState)(!1),z=w()(_e,2),Ae=z[0],ue=z[1],Ze=[{symbol:"Ethereum",icon:"/eth.svg"},{symbol:"BNB Chain",icon:"/bnb.svg"},{symbol:"Polygon",icon:"/polygon.svg"},{symbol:"Optimism",icon:"/optimism.png"}],Fe=(0,n.useState)(0),Be=w()(Fe,2),J=Be[0],Ce=Be[1],Ke=function(){I(function(M){var le=[].concat(X()(M),[{self:!0,content:G,datetime:qe()().format("YYYY-MM-DD HH:mm:ss")}]);return le}),A(""),(0,Xe.v_)("/api/v1/chat/chatgpt",{prompt:G}).then(function(M){M.code==0?(N(),I(function(le){var Oe=[].concat(X()(le),[{self:!1,content:M.response,datetime:qe()().format("YYYY-MM-DD HH:mm:ss")}]);return Oe})):I(function(le){var Oe=[].concat(X()(le),[{self:!1,content:"\u8BF7\u91CD\u8BD5\u4E00\u6B21",datetime:qe()().format("YYYY-MM-DD HH:mm:ss")}]);return Oe})}),console.log(Y)};(0,n.useEffect)(function(){$==0&&N()},[u]),(0,n.useEffect)(function(){var C=wt("chatgptData");C&&I(C)},[u]),(0,n.useEffect)(function(){localStorage.setItem("chatgptData",JSON.stringify(Y))},[Y.length]);var N=function(){(0,Xe.U2)("/api/v1/chat/chatgpt_limit").then(function(M){console.log("response",M),we(M)})},ne=function(){(0,Xe.U2)("/api/v1/group/user").then(function(M){M.code==0&&M.data.length>0&&De(function(le){return console.log(le),[].concat(X()(le),[{id:M.data[0].id,name:M.data[0].school,type:2,content:"...",members:M.data.length}])})})};return(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"message",children:(0,t.jsxs)("div",{className:"msg_main",children:[(0,t.jsxs)("div",{className:"friendlist msg_flex msg_flex_col",children:[(0,t.jsx)("div",{className:"header msg_flex msg_flex_between msg_items_center msg_border_b",children:(0,t.jsx)("div",{children:(0,t.jsx)(Je.Z,{ref:ve,style:{color:"white",background:"transparent",border:"transparent",height:"30px"},prefix:(0,t.jsx)(bt.Z,{onClick:function(){ve.current.focus({cursor:"start"})},style:{color:"var(--messagecolor)",cursor:"pointer"}})})})}),(0,t.jsxs)("div",{className:"msg_list",children:[ie.map(function(C,M){return(0,t.jsx)("div",{onClick:function(){De(function(Oe){var Rt=Oe.map(function(Qe){return Qe.checked=!1,Qe}).map(function(Qe,Bt){return Bt==M&&(Qe.checked=!0),Qe});return Rt}),V(M)},children:(0,t.jsx)(kt,{data:C})})}),(0,t.jsx)("p",{children:(0,t.jsx)("br",{})})]})]}),(0,t.jsxs)("div",{className:"msgdetails msg-w-full msg_flex msg_flex_col",children:[_==0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"header msg_flex msg_flex_between msg_items_center msg_border_b",children:(0,t.jsxs)("div",{onClick:function(){return E(1)},children:[(0,t.jsx)(xt,{}),"\xA0\xA0\xA0\xA0Send Message"]})}),(0,t.jsxs)("div",{className:"msg-max-w-sm tokenwrap",children:[(0,t.jsx)("p",{style:{marginTop:"15px"},children:"Select Target Chain"}),(0,t.jsxs)("div",{className:"chainselect flex flex-between flex-align-center",onClick:function(){return ue(!0)},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{style:{width:"30px",marginRight:"20px"},src:Ze[J].icon}),(0,t.jsx)("span",{children:Ze[J].symbol})]}),(0,t.jsx)(Ct,{})]}),(0,t.jsx)("p",{children:"Enter Recipient Address"}),(0,t.jsx)(Je.Z,{style:{color:"white",background:"#040000",height:"50px",border:"1px solid var(--bordercolor)"}}),(0,t.jsx)(ge,{className:"mst-opacity-50",style:{background:"#ffffff"}}),(0,t.jsxs)("div",{className:"msg_flex msg_flex_between msg_bg_subtle_night msg-py-3 msg-px-4 msg-rounded-2xl",children:[(0,t.jsxs)("span",{children:[(0,t.jsx)(Nt,{}),"\xA0\xA0Off-chain"]}),(0,t.jsx)(d,{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{className:"msg_flex msg_flex_between msg_bg_subtle_night msg-py-3 msg-px-4 msg-rounded-2xl",children:[(0,t.jsxs)("span",{children:[(0,t.jsx)(_t,{}),"\xA0\xA0Unencrypted"]}),(0,t.jsx)(d,{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(ht,{bodyStyle:{background:"var(--selectbg)"},headerStyle:{display:"none"},width:"100%",height:"100%",title:"Basic Drawer",placement:"bottom",getContainer:!1,open:Ae,mask:!1,children:[(0,t.jsxs)("div",{className:"flex flex-between",children:[(0,t.jsx)("span",{children:"Select Target Chain"}),(0,t.jsx)(l.Z,{onClick:function(){return ue(!1)}})]}),(0,t.jsx)("div",{className:"tokenlist",children:Ze.map(function(C,M){return(0,t.jsx)("div",{className:"item",onClick:function(){Ce(M),ue(!1)},children:(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{src:C.icon,style:{marginRight:"15px"}}),(0,t.jsx)("p",{children:C.symbol})]})})})})]})]}),(0,t.jsx)(tt.Z,{style:{width:"384px",margin:"20px auto"},type:"primary",size:"large",className:"cardButton",children:"Send Message"})]}),_==1&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"header msg_flex msg_flex_between msg_items_center msg_border_b",children:(0,t.jsxs)("div",{className:"chatgpt_limit",children:[(0,t.jsx)(zt,{data:ie[$]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(e=ie[$])===null||e===void 0?void 0:e.name}),((r=ie[$])===null||r===void 0?void 0:r.type)==1&&(0,t.jsxs)("p",{style:{fontSize:"12px",color:"gray"},children:["\u4ECA\u65E5\u5DF2\u7528",(k==null?void 0:k.max_daily_call_count)-(k==null?void 0:k.daily_left_call_count),"\u6B21\uFF0C\u5269\u4F59",k==null?void 0:k.daily_left_call_count,"\u6B21"]})||(0,t.jsxs)("p",{style:{fontSize:"12px",color:"gray"},children:[(s=ie[$])===null||s===void 0?void 0:s.members," \u6210\u5458"]})]})]})}),(0,t.jsx)("div",{className:"detail_list msg_flex msg-flex-col",children:Y.map(function(C){return(0,t.jsx)(Tt,{data:C.content,self:!C.self,datetime:C.datetime})})}),(0,t.jsx)("div",{style:{padding:"10px 0 8px"},children:(0,t.jsxs)("div",{className:"baseinput",children:[(0,t.jsx)("textarea",{value:G,onChange:function(M){return A(M.target.value)},placeholder:"\u8BF4\u70B9\u4EC0\u4E48\u5427",className:"baseta"}),(0,t.jsx)("div",{style:{textAlign:"right",padding:"10px"},children:(0,t.jsx)(tt.Z,{type:"primary",onClick:Ke,children:"\u53D1\u9001"})})]})})]})]})]})})})}},27484:function(Ve){(function(pe,o){Ve.exports=o()})(this,function(){"use strict";var pe=1e3,o=6e4,Ee=36e5,X="millisecond",ae="second",w="minute",n="hour",S="day",D="week",H="month",q="quarter",R="year",W="date",de="Invalid Date",ge=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,me=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ee={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(d){var l=["th","st","nd","rd"],a=d%100;return"["+d+(l[(a-20)%10]||l[a]||l[0])+"]"}},ke=function(d,l,a){var m=String(d);return!m||m.length>=l?d:""+Array(l+1-m.length).join(a)+d},x={s:ke,z:function(d){var l=-d.utcOffset(),a=Math.abs(l),m=Math.floor(a/60),i=a%60;return(l<=0?"+":"-")+ke(m,2,"0")+":"+ke(i,2,"0")},m:function d(l,a){if(l.date()<a.date())return-d(a,l);var m=12*(a.year()-l.year())+(a.month()-l.month()),i=l.clone().add(m,H),f=a-i<0,h=l.clone().add(m+(f?-1:1),H);return+(-(m+(a-i)/(f?i-h:h-i))||0)},a:function(d){return d<0?Math.ceil(d)||0:Math.floor(d)},p:function(d){return{M:H,y:R,w:D,d:S,D:W,h:n,m:w,s:ae,ms:X,Q:q}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(d){return d===void 0}},xe="en",je={};je[xe]=ee;var Ye=function(d){return d instanceof Ue},Pe=function d(l,a,m){var i;if(!l)return xe;if(typeof l=="string"){var f=l.toLowerCase();je[f]&&(i=f),a&&(je[f]=a,i=f);var h=l.split("-");if(!i&&h.length>1)return d(h[0])}else{var g=l.name;je[g]=l,i=g}return!m&&i&&(xe=i),i||!m&&xe},T=function(d,l){if(Ye(d))return d.clone();var a=typeof l=="object"?l:{};return a.date=d,a.args=arguments,new Ue(a)},v=x;v.l=Pe,v.i=Ye,v.w=function(d,l){return T(d,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var Ue=function(){function d(a){this.$L=Pe(a.locale,null,!0),this.parse(a)}var l=d.prototype;return l.parse=function(a){this.$d=function(m){var i=m.date,f=m.utc;if(i===null)return new Date(NaN);if(v.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var h=i.match(ge);if(h){var g=h[2]-1||0,O=(h[7]||"0").substring(0,3);return f?new Date(Date.UTC(h[1],g,h[3]||1,h[4]||0,h[5]||0,h[6]||0,O)):new Date(h[1],g,h[3]||1,h[4]||0,h[5]||0,h[6]||0,O)}}return new Date(i)}(a),this.$x=a.x||{},this.init()},l.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},l.$utils=function(){return v},l.isValid=function(){return this.$d.toString()!==de},l.isSame=function(a,m){var i=T(a);return this.startOf(m)<=i&&i<=this.endOf(m)},l.isAfter=function(a,m){return T(a)<this.startOf(m)},l.isBefore=function(a,m){return this.endOf(m)<T(a)},l.$g=function(a,m,i){return v.u(a)?this[m]:this.set(i,a)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(a,m){var i=this,f=!!v.u(m)||m,h=v.p(a),g=function(Ie,Q){var Se=v.w(i.$u?Date.UTC(i.$y,Q,Ie):new Date(i.$y,Q,Ie),i);return f?Se:Se.endOf(S)},O=function(Ie,Q){return v.w(i.toDate()[Ie].apply(i.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(Q)),i)},p=this.$W,B=this.$M,ye=this.$D,Ne="set"+(this.$u?"UTC":"");switch(h){case R:return f?g(1,0):g(31,11);case H:return f?g(1,B):g(0,B+1);case D:var Le=this.$locale().weekStart||0,Te=(p<Le?p+7:p)-Le;return g(f?ye-Te:ye+(6-Te),B);case S:case W:return O(Ne+"Hours",0);case n:return O(Ne+"Minutes",1);case w:return O(Ne+"Seconds",2);case ae:return O(Ne+"Milliseconds",3);default:return this.clone()}},l.endOf=function(a){return this.startOf(a,!1)},l.$set=function(a,m){var i,f=v.p(a),h="set"+(this.$u?"UTC":""),g=(i={},i[S]=h+"Date",i[W]=h+"Date",i[H]=h+"Month",i[R]=h+"FullYear",i[n]=h+"Hours",i[w]=h+"Minutes",i[ae]=h+"Seconds",i[X]=h+"Milliseconds",i)[f],O=f===S?this.$D+(m-this.$W):m;if(f===H||f===R){var p=this.clone().set(W,1);p.$d[g](O),p.init(),this.$d=p.set(W,Math.min(this.$D,p.daysInMonth())).$d}else g&&this.$d[g](O);return this.init(),this},l.set=function(a,m){return this.clone().$set(a,m)},l.get=function(a){return this[v.p(a)]()},l.add=function(a,m){var i,f=this;a=Number(a);var h=v.p(m),g=function(B){var ye=T(f);return v.w(ye.date(ye.date()+Math.round(B*a)),f)};if(h===H)return this.set(H,this.$M+a);if(h===R)return this.set(R,this.$y+a);if(h===S)return g(1);if(h===D)return g(7);var O=(i={},i[w]=o,i[n]=Ee,i[ae]=pe,i)[h]||1,p=this.$d.getTime()+a*O;return v.w(p,this)},l.subtract=function(a,m){return this.add(-1*a,m)},l.format=function(a){var m=this,i=this.$locale();if(!this.isValid())return i.invalidDate||de;var f=a||"YYYY-MM-DDTHH:mm:ssZ",h=v.z(this),g=this.$H,O=this.$m,p=this.$M,B=i.weekdays,ye=i.months,Ne=function(Q,Se,We,Re){return Q&&(Q[Se]||Q(m,f))||We[Se].slice(0,Re)},Le=function(Q){return v.s(g%12||12,Q,"0")},Te=i.meridiem||function(Q,Se,We){var Re=Q<12?"AM":"PM";return We?Re.toLowerCase():Re},Ie={YY:String(this.$y).slice(-2),YYYY:v.s(this.$y,4,"0"),M:p+1,MM:v.s(p+1,2,"0"),MMM:Ne(i.monthsShort,p,ye,3),MMMM:Ne(ye,p),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:Ne(i.weekdaysMin,this.$W,B,2),ddd:Ne(i.weekdaysShort,this.$W,B,3),dddd:B[this.$W],H:String(g),HH:v.s(g,2,"0"),h:Le(1),hh:Le(2),a:Te(g,O,!0),A:Te(g,O,!1),m:String(O),mm:v.s(O,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:h};return f.replace(me,function(Q,Se){return Se||Ie[Q]||h.replace(":","")})},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(a,m,i){var f,h=v.p(m),g=T(a),O=(g.utcOffset()-this.utcOffset())*o,p=this-g,B=v.m(this,g);return B=(f={},f[R]=B/12,f[H]=B,f[q]=B/3,f[D]=(p-O)/6048e5,f[S]=(p-O)/864e5,f[n]=p/Ee,f[w]=p/o,f[ae]=p/pe,f)[h]||p,i?B:v.a(B)},l.daysInMonth=function(){return this.endOf(H).$D},l.$locale=function(){return je[this.$L]},l.locale=function(a,m){if(!a)return this.$L;var i=this.clone(),f=Pe(a,m,!0);return f&&(i.$L=f),i},l.clone=function(){return v.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},d}(),He=Ue.prototype;return T.prototype=He,[["$ms",X],["$s",ae],["$m",w],["$H",n],["$W",S],["$M",H],["$y",R],["$D",W]].forEach(function(d){He[d[1]]=function(l){return this.$g(l,d[0],d[1])}}),T.extend=function(d,l){return d.$i||(d(l,Ue,T),d.$i=!0),T},T.locale=Pe,T.isDayjs=Ye,T.unix=function(d){return T(1e3*d)},T.en=je[xe],T.Ls=je,T.p={},T})}}]);
