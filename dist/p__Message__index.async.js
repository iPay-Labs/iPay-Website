(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[67],{12439:function(H,L,s){"use strict";s.d(L,{U2:function(){return z},v_:function(){return u}});var C=s(15009),v=s.n(C),y=s(99289),I=s.n(y),S=s(6154),d=S.Z.create({baseURL:"https://movie.jdd001.top",timeout:5e5}),z=function(){var p=I()(v()().mark(function o(h,x){var m,f;return v()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m=sessionStorage.getItem("token"),d.defaults.headers.common.Authorization="Bearer "+m,e.next=5,d.get(h,{params:x});case 5:return f=e.sent,e.abrupt("return",f.data);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("GET request error:",e.t0),e.t0;case 13:case"end":return e.stop()}},o,null,[[0,9]])}));return function(h,x){return p.apply(this,arguments)}}(),u=function(){var p=I()(v()().mark(function o(h,x){var m,f;return v()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m=sessionStorage.getItem("token"),d.defaults.headers.common.Authorization="Bearer "+m,console.log("token",m),e.next=6,d.post(h,x);case 6:return f=e.sent,e.abrupt("return",f.data);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("POST request error:",e.t0),e.t0;case 14:case"end":return e.stop()}},o,null,[[0,10]])}));return function(h,x){return p.apply(this,arguments)}}(),r=null},30163:function(H,L,s){"use strict";s.d(L,{S:function(){return S},d:function(){return d}});var C=s(5574),v=s.n(C),y=s(67294),I=s(85893),S=(0,y.createContext)(null),d=function(u){var r=u.children,p=(0,y.useState)(""),o=v()(p,2),h=o[0],x=o[1],m=(0,y.useCallback)(function(f){x(f)},[]);return(0,I.jsx)(S.Provider,{value:{token:h,updateData:m},children:r})}},14835:function(H,L,s){"use strict";s.r(L),s.d(L,{default:function(){return De}});var C=s(15009),v=s.n(C),y=s(99289),I=s.n(y),S=s(19632),d=s.n(S),z=s(5574),u=s.n(z),r=s(67294),p=s(60778),o=s(71577),h=s(34104),x=s(68795),m=s(67261),f=s(44115),E=s(12439),e=s(85893),Z=function(t){var a=t.children,c=t.onSelect,j=t.value,g=(0,r.useState)(j||null),b=u()(g,2),U=b[0],Y=b[1],w=function(T){Y(T),c&&c(T)};return(0,e.jsx)("div",{children:r.Children.map(a,function(A){return r.cloneElement(A,{onSelect:w,selected:A.props.value===U})})})},de=function(t){var a=t.children,c=t.onSelect,j=t.selected,g=t.value;return(0,e.jsx)("div",{onClick:function(){return c&&c(g)},className:"msg_flex msg_items_center msg_cursor_pointer msg_select_none msg_bg_subtle_hover ".concat(j&&"msg_bg_subtle_night"," msg-py-2 msg-px-4"),style:{marginBottom:g==0&&"20px"||"0"},children:a})};Z.Item=de;var G=Z,Ze=function(t,a){if(t!=null)return ethers.utils.formatUnits(t,a)},Ge=function(t,a){return ethers.utils.parseUnits("".concat(t),a)};function oe(n){var t=localStorage.getItem(n);if(t)try{return JSON.parse(t)}catch(a){console.error("Error parsing JSON from LocalStorage:",a)}return null}var me=s(27484),k=s.n(me),ge=Object.defineProperty,K=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,$=(n,t,a)=>t in n?ge(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,xe=(n,t)=>{for(var a in t||(t={}))ve.call(t,a)&&$(n,a,t[a]);if(K)for(var a of K(t))he.call(t,a)&&$(n,a,t[a]);return n};const fe=n=>r.createElement("svg",xe({xmlns:"http://www.w3.org/2000/svg",height:48,viewBox:"0 -960 960 960",width:48},n),r.createElement("path",{d:"M102.615-215.384v-57.847q0-28.077 14.538-48.115 14.539-20.039 41.112-31.798 56.889-25.01 105.773-39.01 48.885-14 118.577-14 70.462 0 118.846 14 48.385 14 106.043 39.01 25.804 11.759 40.458 31.798 14.653 20.038 14.653 48.115v57.847h-560Zm630.77 0v-55.539q0-43.769-17.729-74.64-17.728-30.871-45.964-51.283 37.462 7.23 72.308 18.115 34.846 10.885 61.308 23.962 23.769 12.846 38.923 34.815 15.154 21.97 15.154 49.031v55.539h-124Zm-350.77-289.462q-49.5 0-82.442-32.942-32.943-32.943-32.943-82.443 0-50.269 32.943-82.827 32.942-32.558 82.442-32.558 50.27 0 82.827 32.558Q498-670.5 498-620.231q0 49.5-32.558 82.443-32.557 32.942-82.827 32.942Zm272.308-115.385q0 49.5-32.557 82.443-32.558 32.942-82.827 32.942-2.539 0-4.5-.346-1.962-.346-4.501-1.269 18.863-21.741 28.547-50.735 9.684-28.994 9.684-63.13t-10.577-61.713q-10.577-27.577-27.654-52.73 1.77.076 4.501-.385 2.73-.462 4.5-.462 50.269 0 82.827 32.558 32.557 32.558 32.557 82.827Z"}));var Ke="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik0xMDIuNjE1LTIxNS4zODR2LTU3Ljg0N3EwLTI4LjA3NyAxNC41MzgtNDguMTE1IDE0LjUzOS0yMC4wMzkgNDEuMTEyLTMxLjc5OCA1Ni44ODktMjUuMDEgMTA1Ljc3My0zOS4wMSA0OC44ODUtMTQgMTE4LjU3Ny0xNCA3MC40NjIgMCAxMTguODQ2IDE0IDQ4LjM4NSAxNCAxMDYuMDQzIDM5LjAxIDI1LjgwNCAxMS43NTkgNDAuNDU4IDMxLjc5OCAxNC42NTMgMjAuMDM4IDE0LjY1MyA0OC4xMTV2NTcuODQ3aC01NjBabTYzMC43NyAwdi01NS41MzlxMC00My43NjktMTcuNzI5LTc0LjY0LTE3LjcyOC0zMC44NzEtNDUuOTY0LTUxLjI4MyAzNy40NjIgNy4yMyA3Mi4zMDggMTguMTE1IDM0Ljg0NiAxMC44ODUgNjEuMzA4IDIzLjk2MiAyMy43NjkgMTIuODQ2IDM4LjkyMyAzNC44MTUgMTUuMTU0IDIxLjk3IDE1LjE1NCA0OS4wMzF2NTUuNTM5aC0xMjRabS0zNTAuNzctMjg5LjQ2MnEtNDkuNSAwLTgyLjQ0Mi0zMi45NDItMzIuOTQzLTMyLjk0My0zMi45NDMtODIuNDQzIDAtNTAuMjY5IDMyLjk0My04Mi44MjcgMzIuOTQyLTMyLjU1OCA4Mi40NDItMzIuNTU4IDUwLjI3IDAgODIuODI3IDMyLjU1OFE0OTgtNjcwLjUgNDk4LTYyMC4yMzFxMCA0OS41LTMyLjU1OCA4Mi40NDMtMzIuNTU3IDMyLjk0Mi04Mi44MjcgMzIuOTQyWm0yNzIuMzA4LTExNS4zODVxMCA0OS41LTMyLjU1NyA4Mi40NDMtMzIuNTU4IDMyLjk0Mi04Mi44MjcgMzIuOTQyLTIuNTM5IDAtNC41LS4zNDYtMS45NjItLjM0Ni00LjUwMS0xLjI2OSAxOC44NjMtMjEuNzQxIDI4LjU0Ny01MC43MzUgOS42ODQtMjguOTk0IDkuNjg0LTYzLjEzdC0xMC41NzctNjEuNzEzcS0xMC41NzctMjcuNTc3LTI3LjY1NC01Mi43MyAxLjc3LjA3NiA0LjUwMS0uMzg1IDIuNzMtLjQ2MiA0LjUtLjQ2MiA1MC4yNjkgMCA4Mi44MjcgMzIuNTU4IDMyLjU1NyAzMi41NTggMzIuNTU3IDgyLjgyN1oiLz48L3N2Zz4=";function je(n){var t=n.checked,a=n.data,c=a.header,j=a.name,g=a.type,b=n.onClick;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"msg_flex",children:(0,e.jsx)("div",{className:"msg_flex msg_bg_neutral_900 msg-rounded-full msg_items_center msg-justify-center",children:(0,e.jsx)("div",{className:"msg-text-lg",children:(0,e.jsx)("div",{className:"msg-xs",children:(0,e.jsx)("img",{style:{width:"40px",borderRadius:"100%"},src:c})})})})}),(0,e.jsx)("div",{className:"msg_flex msg-grow msg_flex_between msg-pr-2 msg-truncate",children:(0,e.jsxs)("div",{className:"msg-truncate msg-flex-col msg-max-w-full",children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[g!==1&&(0,e.jsx)(fe,{width:20,height:20})," ",(0,e.jsx)("div",{style:{fontSize:"16px",fontWeight:"400",marginLeft:"2px"},children:j})]}),(0,e.jsx)("div",{className:"msg-truncate"})]})})]})}function _e(n){var t=n.self,a=n.data,c=n.datetime;return(0,e.jsx)("div",{style:{marginBottom:"10px"},className:"".concat(t&&"base-hr"||""),children:(0,e.jsx)("div",{className:"msg_flex ".concat(!t&&"msg-justify-end","  msg-ml-10"),children:(0,e.jsx)("div",{className:"msg_flex msg-flex-col",style:{paddingRight:"20px"},children:(0,e.jsx)("div",{className:"msg_flex msg-flex-col msg-justify-end msg_items_center msg-border ".concat(t&&"msg_bg_subtle_night"||"msg_bg_subtle_light"),children:(0,e.jsxs)("div",{className:"msg-py-2 msg-px-4",children:[(0,e.jsx)("div",{style:{whiteSpace:"pre-line"},children:a}),(0,e.jsxs)("div",{className:"mst-opacity-50 msg-xs-small",children:[!t&&"Q"||"A"," ",c]})]})})})})})}function Me(n){var t=n.checked,a=n.data.header;return(0,e.jsx)("div",{className:"msg_overflow_hidden msg_shrink_0",style:{fontSize:"12px"},children:(0,e.jsxs)("div",{className:"msg_flex msg_items_center  msg-py-2",children:[(0,e.jsx)("div",{className:"msg_flex",children:(0,e.jsx)("div",{className:"msg_flex msg_bg_neutral_900 msg-rounded-full msg-w-12 msg-h-12 msg_items_center msg-justify-center",children:(0,e.jsx)("div",{className:"msg-text-base",children:(0,e.jsx)("div",{className:"msg-xs-base",children:(0,e.jsx)("img",{style:{width:"100%",borderRadius:"100%"},src:a})})})})}),(0,e.jsx)("div",{className:"msg_flex msg-grow msg_flex_between msg-pr-2 msg-truncate",children:(0,e.jsx)("div",{className:"msg-truncate msg-flex-col msg-max-w-full",children:(0,e.jsx)("div",{children:(0,e.jsx)("div",{})})})})]})})}var pe=s(30163),$e=p.Z.TextArea,ye=[{id:"1",name:"ChatGPT",type:1,content:"...",route:"ChatGpt",header:"https://bf.jdd001.top/cryptologos/chatgpt.png"},{id:"2",name:"\u9CB8\u9986\u5C0F\u5F20",type:2,content:"...",header:"https://bf.jdd001.top/cryptologos/zy.png"}],Ne=function(t){var a,c,j,g=t.user,b=(0,r.useContext)(pe.S),U=b.token,Y=(0,r.useState)(!1),w=u()(Y,2),A=w[0],T=w[1],W=(0,r.useRef)(null),Le=(0,r.useState)(1),J=u()(Le,2),Ie=J[0],Je=J[1],Se=(0,r.useState)(0),V=u()(Se,2),N=V[0],be=V[1],Te=(0,r.useState)(""),X=u()(Te,2),B=X[0],q=X[1],Ce=(0,r.useState)([]),ee=u()(Ce,2),P=ee[0],R=ee[1],Ee=(0,r.useState)([]),te=u()(Ee,2),Ae=te[0],Oe=te[1],ze=(0,r.useState)(!1),se=u()(ze,2),Ve=se[0],Xe=se[1],Ue=(0,r.useState)(100),ae=u()(Ue,2),qe=ae[0],et=ae[1],tt=(0,r.useRef)(null),we=(0,r.useState)(),ne=u()(we,2),_=ne[0],Be=ne[1],Pe=(0,r.useState)(ye),re=u()(Pe,2),D=re[0],Re=re[1],Fe=(0,r.useState)(!1),ie=u()(Fe,2),st=ie[0],at=ie[1],nt=[{symbol:"Ethereum",icon:"/eth.svg"},{symbol:"BNB Chain",icon:"/bnb.svg"},{symbol:"Polygon",icon:"/polygon.svg"},{symbol:"Optimism",icon:"/optimism.png"}],ke=(0,r.useState)(0),le=u()(ke,2),rt=le[0],it=le[1],Ye=function(){R(function(i){var M=[].concat(d()(i),[{self:!0,content:B,datetime:k()().format("YYYY-MM-DD HH:mm:ss")}]);return M}),q(""),T(!0),(0,E.v_)("/api/v1/chat/chatgpt",{prompt:B}).then(function(i){i.code==0?(ue(),R(function(M){var O=[].concat(d()(M),[{self:!1,content:i.response,datetime:k()().format("YYYY-MM-DD HH:mm:ss")}]);return O})):R(function(M){var O=[].concat(d()(M),[{self:!1,content:"\u8BF7\u91CD\u8BD5\u4E00\u6B21",datetime:k()().format("YYYY-MM-DD HH:mm:ss")}]);return O}),T(!1)}).catch(function(){return T(!1)}),console.log(P)};(0,r.useEffect)(function(){N==0&&ue(),We();var l=new f.uT,i=new m.w5("0x012540cd5fc11e09978c77885f1a434f24b6e9230c2b7b5b5e117ec473404762"),M=i.address;i.signMessage("hello").then(function(F){});var O={userID:"78",token:sessionStorage.getItem("token")||"",platformID:5,url:"wss://base.jdd001.top:9202"};l.login(O).then(function(){var F=I()(v()().mark(function ce(Qe){return v()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:console.log("login suc...",Qe),l.getSelfUserInfo().then(function(He){debugger}).catch(function(He){debugger});case 2:case"end":return Q.stop()}},ce)}));return function(ce){return F.apply(this,arguments)}}()).catch(function(F){console.log("login failed...",F)})},[U]),(0,r.useEffect)(function(){var l=oe("chatgptData");l&&R(l)},[U]),(0,r.useEffect)(function(){if(localStorage.setItem("chatgptData",JSON.stringify(P)),W.current){var l=W.current;l.scrollTop=l.scrollHeight}},[P.length]),(0,r.useEffect)(function(){return console.log("user",g)});var ue=function(){(0,E.U2)("/api/v1/chat/chatgpt_limit").then(function(i){console.log("response",i),Be(i)})},We=function(){(0,E.U2)("/api/v1/group/user").then(function(i){i.code==0&&i.data.length>0&&(Re(function(M){return console.log(M),[].concat(d()(M),[{id:i.data[0].id,name:i.data[0].school,type:2,content:"...",members:i.data.length,header:i.data[0].school=="\u6E05\u534E\u5927\u5B66"&&"/qinghua.jpg"||""}])}),Oe(i.data))})};return(0,e.jsx)("div",{className:"message",children:(0,e.jsxs)("div",{className:"msg_main",children:[(0,e.jsxs)("div",{className:"friendlist msg_flex msg_flex_col",style:{background:"rgb(245, 245, 245)"},children:[(0,e.jsx)("div",{className:"header msg_flex msg_flex_between msg_items_center msg_border_b",children:(0,e.jsx)("div",{style:{background:"#ababab30",flex:1},children:(0,e.jsx)("input",{style:{border:"0",background:"transparent",outline:"none",fontSize:"14px",padding:"0 5px"},placeholder:"\u5F00\u59CB\u65B0\u804A\u5929"})})}),(0,e.jsxs)("div",{className:"msg_list msg_flex msg_flex_col msg_flex_between",children:[(0,e.jsx)(G,{value:"none",onSelect:function(i){be(i)},children:D.map(function(l,i){return(0,e.jsx)(G.Item,{value:i,children:(0,e.jsx)(je,{data:l})})})}),(0,e.jsxs)("div",{className:"msg_flex msg_flex_between msg_bg_subtle_hover",style:{padding:"10px 18px",alignItems:"center"},children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{style:{borderRadius:"40px",marginRight:"10px"},width:40,src:g.user.avatar}),(0,e.jsx)("span",{style:{fontSize:"16px"},children:g.user.username})]}),(0,e.jsx)("div",{children:(0,e.jsx)("img",{width:25,src:"/icon_settings.svg"})})]})]})]}),(0,e.jsx)("div",{className:"msgdetails msg-w-full msg_flex msg_flex_col",children:Ie==1&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"header msg_flex msg_flex_between msg_items_center msg_border_b",children:[(0,e.jsxs)("div",{className:"chatgpt_limit",children:[(0,e.jsx)(Me,{data:D[N]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:(a=D[N])===null||a===void 0?void 0:a.name}),((c=D[N])===null||c===void 0?void 0:c.type)==1&&(0,e.jsxs)("p",{style:{fontSize:"12px",color:"gray"},children:["\u4ECA\u65E5\u5DF2\u7528",(_==null?void 0:_.max_daily_call_count)-(_==null?void 0:_.daily_left_call_count),"\u6B21\uFF0C\u5269\u4F59",_==null?void 0:_.daily_left_call_count,"\u6B21"]})||(0,e.jsxs)("p",{style:{fontSize:"12px",color:"gray"},children:[(j=D[N])===null||j===void 0?void 0:j.members," \u6210\u5458"]})]})]}),(0,e.jsx)("div",{children:(0,e.jsx)(p.Z,{placeholder:"\u641C\u7D22",prefix:(0,e.jsx)(x.Z,{})})})]}),(0,e.jsxs)("div",{className:"msg_flex msg_flex_between",style:{flex:1,height:"100%"},children:[(0,e.jsxs)("div",{className:"",style:{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",height:"calc(100vh - 60px)"},children:[(0,e.jsx)("div",{className:"detail_list msg_flex msg-flex-col",ref:W,children:P.map(function(l){return(0,e.jsx)(_e,{data:l.content,self:!l.self,datetime:l.datetime})})}),(0,e.jsx)("div",{style:{padding:"10px 0 8px",minHeight:"200px"},children:(0,e.jsxs)("div",{className:"baseinput",children:[(0,e.jsx)("textarea",{value:B,onChange:function(i){return q(i.target.value)},placeholder:"\u8BF4\u70B9\u4EC0\u4E48\u5427",className:"baseta"}),(0,e.jsx)("div",{style:{textAlign:"right",padding:"10px"},children:A&&(0,e.jsx)(o.Z,{type:"primary",children:"\u751F\u6210\u4E2D..."})||(0,e.jsx)(o.Z,{disabled:B=="",type:"primary",onClick:Ye,children:"\u53D1\u9001"})})]})})]}),(0,e.jsxs)("div",{style:{minWidth:"460px",width:"460px",background:"#F5F5F5"},children:[(0,e.jsxs)("div",{style:{width:"100%",minHeight:"150px",background:"rgb(224, 224, 224)",padding:"20px"},children:[(0,e.jsxs)("div",{className:"msg_flex",children:[(0,e.jsx)("img",{style:{borderRadius:"40px",marginRight:"10px"},width:50,src:D[N].header}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:D[N].name}),(0,e.jsx)("p",{children:"ID:#1234"})]})]}),(0,e.jsx)("div",{style:{margin:"20px 0 10px"},children:"\u83E9\u63D0\u672C\u65E0\u6811\uFF0C\u660E\u955C\u4EA6\u975E\u53F0"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{background:"#FBFBFD",display:"inline-block",padding:"0 5px",borderRadius:"10px"},children:(0,e.jsx)("img",{width:20,src:"/female.svg"})}),(0,e.jsx)("div",{style:{background:"#FBFBFD",display:"inline-block",padding:"0 10px",borderRadius:"10px",marginLeft:"10px"},children:"1992-03"}),(0,e.jsx)("div",{style:{background:"#FBFBFD",display:"inline-block",padding:"0 10px",borderRadius:"10px",marginLeft:"10px"},children:"\u6E05\u534E\u5927\u5B66"})]})]}),(0,e.jsx)("div",{children:Ae.map(function(l){return(0,e.jsxs)("div",{className:"userlist",children:[(0,e.jsx)("img",{style:{width:"40px",borderRadius:"40px",marginRight:"10px"},src:l.avatar}),(0,e.jsx)("span",{children:l.username})]})})}),(0,e.jsx)("div",{})]})]})]})})]})})},De=(0,h.connect)(function(n){var t=n.user;return{user:t}})(Ne)},88677:function(){},62808:function(){}}]);
