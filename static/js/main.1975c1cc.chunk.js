(this["webpackJsonpreact-way-of-samurai-ts"]=this["webpackJsonpreact-way-of-samurai-ts"]||[]).push([[0],{110:function(e,t,n){"use strict";t.a=n.p+"static/media/avatar.2479805a.png"},12:function(e,t,n){e.exports={users:"Users_users__ygJzY",leftContent:"Users_leftContent__3imbX",buttons:"Users_buttons__1TWgR",unfollow:"Users_unfollow__3FA7I",follow:"Users_follow__2fcw9",avatarBG:"Users_avatarBG__1o7T-",avatar:"Users_avatar__1n4J8",user:"Users_user__3zAP9",rightContent:"Users_rightContent__1TefX",innerLeft:"Users_innerLeft__38_DD",innerRight:"Users_innerRight__1zpr6",name:"Users_name__29eea",status:"Users_status__3wQOm",city:"Users_city__2e9I0",country:"Users_country__35-4c",page:"Users_page__Pgi1K",current:"Users_current__2iicU"}},13:function(e,t,n){e.exports={wrapper:"Navbar_wrapper__3oknN",nav:"Navbar_nav__3j_MG",item:"Navbar_item__1OyJD",activeLink:"Navbar_activeLink__2Ubgr"}},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(42),a=n(4),s=n(16),c="ADD-MESSAGE",i={dialogs:[{id:Object(s.a)(),name:"Dimych"},{id:Object(s.a)(),name:"Andrey"},{id:Object(s.a)(),name:"Sveta"},{id:Object(s.a)(),name:"Sasha"},{id:Object(s.a)(),name:"Viktor"},{id:Object(s.a)(),name:"Valera"}],messages:[{id:Object(s.a)(),message:"Hi!",user:1},{id:Object(s.a)(),message:"Hi!",user:2},{id:Object(s.a)(),message:"How is your it-camasutra?",user:2},{id:Object(s.a)(),message:"Perfectly",user:1},{id:Object(s.a)(),message:"It's amazing",user:2},{id:Object(s.a)(),message:"Thanks",user:1}]},o=function(e){return{type:c,newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:Object(s.a)(),message:t.newMessageBody,user:2}])});default:return e}}},134:function(e,t,n){e.exports={news:"News_news__3q4B5"}},135:function(e,t,n){e.exports={music:"Music_music__14jij"}},136:function(e,t,n){e.exports={settings:"Settings_settings__1Twb_"}},137:function(e,t,n){e.exports={siteBar:"SiteBar_siteBar__UVcXu"}},171:function(e,t,n){},176:function(e,t,n){},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(138),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e12dcb15-1200-4ce1-bb28-bb99ac0ccb98"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={get:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}},i={get:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}}},29:function(e,t,n){e.exports={login:"Login_login__20SqU",inner:"Login_inner__eyIyF",formGroup:"Login_formGroup__3GsaD",formGroup_checkbox:"Login_formGroup_checkbox__2OoCz",errorInput:"Login_errorInput__14XaB",formSummaryError:"Login_formSummaryError__1ac4r"}},300:function(e,t,n){"use strict";n.r(t);n(171);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,316)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},a=n(0),s=n.n(a),c=n(66),i=n.n(c),o=n(38),u=n(39),l=n(43),j=n(41),d=(n(176),n(11)),f=n(18),b=n(134),p=n.n(b),O=n(1),h=function(){return Object(O.jsx)("div",{className:p.a.news,children:Object(O.jsx)("h1",{children:"News"})})},m=n(135),g=n.n(m),x=function(){return Object(O.jsx)("div",{className:g.a.music,children:Object(O.jsx)("h1",{children:"Music"})})},v=n(136),_=n.n(v),w=function(){return Object(O.jsx)("div",{className:_.a.settings,children:Object(O.jsx)("h1",{children:"Settings"})})},y=n(13),N=n.n(y),P=n(137),C=n.n(P),S=n(71),k=n.n(S),U=n(93),L=n.n(U),I=function(e){return Object(O.jsxs)("li",{className:L.a.item,children:[Object(O.jsx)("div",{className:L.a.circle}),e.name]})},E=function(e){var t=e.friends.map((function(e){return Object(O.jsx)(I,{id:e.id,name:e.name},e.id)}));return Object(O.jsxs)("div",{className:k.a.wrapper,children:[Object(O.jsx)("h2",{className:k.a.title,children:"Friends"}),Object(O.jsx)("ul",{className:k.a.friendsList,children:t})]})},T=n(17),F=Object(T.b)((function(e){return{friends:e.siteBar.friends}}),{})((function(e){return Object(O.jsx)("div",{className:C.a.siteBar,children:Object(O.jsx)(E,{friends:e.friends})})})),A=function(){return Object(O.jsxs)("div",{className:N.a.wrapper,children:[Object(O.jsxs)("nav",{className:N.a.nav,children:[Object(O.jsx)("div",{className:N.a.item,children:Object(O.jsx)(f.b,{to:"/profile",activeClassName:N.a.activeLink,children:"Profile"})}),Object(O.jsx)("div",{className:"".concat(N.a.item," ").concat(N.a.active),children:Object(O.jsx)(f.b,{to:"/dialogs",activeClassName:N.a.activeLink,children:"Messages"})}),Object(O.jsx)("div",{className:N.a.item,children:Object(O.jsx)(f.b,{to:"/users",activeClassName:N.a.activeLink,children:"Users"})}),Object(O.jsx)("div",{className:N.a.item,children:Object(O.jsx)(f.b,{to:"/news",activeClassName:N.a.activeLink,children:"News"})}),Object(O.jsx)("div",{className:N.a.item,children:Object(O.jsx)(f.b,{to:"/music",activeClassName:N.a.activeLink,children:"Music"})}),Object(O.jsx)("div",{className:N.a.item,children:Object(O.jsx)(f.b,{to:"/settings",activeClassName:N.a.activeLink,children:"Settings"})}),Object(O.jsx)("div",{className:N.a.item,children:Object(O.jsx)(f.b,{to:"/login",activeClassName:N.a.activeLink,children:"Login"})})]}),Object(O.jsx)(F,{})]})},z=n(9),G=n.n(z),D=n(15),B=n(42),M=n(4),R=n(19),H=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(M.a)(Object(M.a)({},e),r):e}))},X="users/FOLLOW",J="users/UNFOLLOW",V="users/SET_USERS",W="users/SET_CURRENT_PAGE",q="users/SET_TOTAL_USERS_COUNT",Y="users/TOGGLE_IS_FETCHING",K="users/TOGGLE_IS_FOLLOWING_PROGRESS",Q={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Z=function(e){return{type:X,followed:!0,userID:e}},$=function(e){return{type:J,followed:!1,userID:e}},ee=function(e){return{type:W,currentPage:e}},te=function(e){return{type:Y,isFetching:e}},ne=function(e,t){return{type:K,isFetching:e,userId:t}},re=function(){var e=Object(D.a)(G.a.mark((function e(t,n,r,a){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ne(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(ne(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:case J:return Object(M.a)(Object(M.a)({},e),{},{users:H(e.users,t.userID,"id",{followed:t.followed})});case V:return Object(M.a)(Object(M.a)({},e),{},{users:t.users});case W:return Object(M.a)(Object(M.a)({},e),{},{currentPage:t.currentPage});case q:return Object(M.a)(Object(M.a)({},e),{},{totalUsersCount:t.totalUsersCount});case Y:return Object(M.a)(Object(M.a)({},e),{},{isFetching:t.isFetching});case K:return Object(M.a)(Object(M.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(B.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},se=n(12),ce=n.n(se),ie=n(110),oe=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow,s=t;return Object(O.jsxs)("div",{className:ce.a.user,children:[Object(O.jsxs)("div",{className:ce.a.leftContent,children:[Object(O.jsx)("div",{className:ce.a.avatarBG,children:Object(O.jsx)(f.b,{to:"./profile/".concat(s.id),children:Object(O.jsx)("img",{className:ce.a.avatar,src:null!==s.photos.small?s.photos.small:ie.a,alt:"avatar"})})}),Object(O.jsx)("div",{className:ce.a.buttons,children:s.followed?Object(O.jsx)("button",{className:s.followed?ce.a.unfollow:ce.a.follow,disabled:n.some((function(e){return e===s.id})),onClick:function(){a(s.id)},children:"Unfollow"}):Object(O.jsx)("button",{className:s.followed?ce.a.unfollow:ce.a.follow,disabled:n.some((function(e){return e===s.id})),onClick:function(){r(s.id)},children:"Follow"})})]}),Object(O.jsxs)("div",{className:ce.a.rightContent,children:[Object(O.jsxs)("div",{className:ce.a.innerLeft,children:[Object(O.jsx)("div",{className:ce.a.name,children:s.name}),Object(O.jsx)("div",{className:ce.a.status,children:s.status})]}),Object(O.jsxs)("div",{className:ce.a.innerRight,children:[Object(O.jsx)("div",{className:ce.a.country,children:"u.location.country"}),Object(O.jsx)("div",{className:ce.a.city,children:"u.location.city"})]})]})]},s.id)},ue=n(144),le={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"},je=function(e){var t=e.follow,n=e.unfollow,r=e.users,a=e.followingInProgress;return Object(O.jsxs)("div",{className:ce.a.users,children:[Object(O.jsx)("div",{className:"pagination",children:Object(O.jsx)(ue.a,{showTitle:!0,current:e.currentPage,className:"ant-pagination",onChange:function(t){e.onPageChanged(t)},defaultCurrent:e.currentPage,defaultPageSize:e.pageSize,total:e.totalUsersCount,locale:le})}),r.map((function(e){return Object(O.jsx)(oe,{user:e,followingInProgress:a,follow:t,unfollow:n},e.id)}))]})},de=n(68),fe=n(10),be=n(140),pe=Object(be.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Oe=function(e){return e.usersPage.pageSize},he=function(e){return e.usersPage.totalUsersCount},me=function(e){return e.usersPage.currentPage},ge=function(e){return e.usersPage.isFetching},xe=function(e){return e.usersPage.followingInProgress},ve=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;ee(t),e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.isFetching&&Object(O.jsx)(de.a,{}),Object(O.jsx)(je,{users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),_e=Object(fe.d)(Object(T.b)((function(e){return{users:pe(e),pageSize:Oe(e),totalUsersCount:he(e),currentPage:me(e),isFetching:ge(e),followingInProgress:xe(e)}}),{follow:function(e){var t=R.c.follow.bind(R.c),n=Z;return function(){var r=Object(D.a)(G.a.mark((function r(a){return G.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,re(a,e,t,n);case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},unfollow:function(e){var t=R.c.unfollow.bind(R.c),n=$;return function(){var r=Object(D.a)(G.a.mark((function r(a){return G.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,re(a,e,t,n);case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},setCurrentPage:ee,getUsers:function(e,t){return function(){var n=Object(D.a)(G.a.mark((function n(r){var a;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(te(!0)),r(ee(e)),n.next=4,R.c.getUsers(e,t);case 4:a=n.sent,r(te(!1)),r((c=a.items,{type:V,users:c})),r((s=a.totalCount,{type:q,totalUsersCount:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()},toggleFollowingInProgress:ne}))(ve),we=n(72),ye=n.n(we),Ne=n.p+"static/media/logo.d941bb34.svg",Pe=n(141),Ce=function(e){return Object(O.jsxs)("header",{className:ye.a.header,children:[Object(O.jsx)("img",{src:Ne,alt:"logo"}),Object(O.jsx)("div",{className:ye.a.loginBlock,children:e.isAuth?Object(O.jsxs)("div",{className:ye.a.login,children:[e.login," ",Object(O.jsx)(Pe.FiLogOut,{onClick:e.logout})]}):Object(O.jsx)(f.b,{to:"/login",children:"Login"})})]})},Se=n(47),ke="users/SET-USER-DATA",Ue={id:null,email:null,login:null,isAuth:!1},Le=function(e,t,n,r){return{type:ke,payload:{id:e,email:t,login:n,isAuth:r}}},Ie=function(){return function(){var e=Object(D.a)(G.a.mark((function e(t){var n,r,a,s,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,s=r.login,c=r.email,t(Le(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return Object(M.a)(Object(M.a)({},e),t.payload);default:return e}},Te=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)(Ce,Object(M.a)({},this.props))}}]),n}(s.a.Component),Fe=Object(T.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(D.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.logout();case 2:0===e.sent.resultCode&&t(Le(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Te),Ae=n(29),ze=n.n(Ae),Ge=n(92),De=n(132),Be=n(77),Me=n(51),Re=Object(De.a)({form:"Login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(O.jsxs)("form",{onSubmit:t,children:[Object(Me.c)("text","Email","email",[Be.b],Me.a),Object(Me.c)("password","password","password",[Be.b],Me.a),Object(O.jsx)("div",{className:"".concat(ze.a.formGroup," ").concat(ze.a.formGroup_checkbox),children:Object(O.jsxs)("label",{className:ze.a.checkbox,children:[Object(O.jsx)(Ge.a,{name:"rememberMe",component:"input",type:"checkbox"}),Object(O.jsx)("span",{className:ze.a.checkboxText,children:"remember me"})]})}),Object(O.jsx)("div",{className:ze.a.formSummaryError,children:n}),Object(O.jsx)("div",{className:ze.a.formGroup,children:Object(O.jsx)("button",{type:"submit",children:"submit"})})]})})),He=Object(T.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(D.a)(G.a.mark((function r(a){var s,c;return G.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,R.a.login(e,t,n);case 2:if(0!==(s=r.sent).resultCode){r.next=8;break}return r.next=6,a(Ie());case 6:r.next=10;break;case 8:c=s.messages.length>0?s.messages[0]:"Some error",a(Object(Se.a)("Login",{_error:c}));case 10:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,n=e.login;return t?Object(O.jsx)(d.a,{to:"/profile"}):Object(O.jsxs)("div",{className:ze.a.login,children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsxs)("div",{className:ze.a.inner,children:[Object(O.jsx)(Re,{onSubmit:function(e){n(e.email,e.password,e.rememberMe)}}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"To login, enter test e-mails and password:"}),Object(O.jsxs)("p",{children:["Email: ",Object(O.jsx)("span",{children:"free@samuraijs.com"})]}),Object(O.jsxs)("p",{children:["Password: ",Object(O.jsx)("span",{children:"free"})]})]})]})]})})),Xe="app/SET-INITIALIZED-SUCCESS",Je={initialized:!1},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Xe:return Object(M.a)(Object(M.a)({},e),{},{initialized:!0});default:return e}},We=n(98),qe=n(131),Ye=n(16),Ke={friends:[{id:Object(Ye.a)(),name:"Andrew"},{id:Object(Ye.a)(),name:"Sasha"},{id:Object(Ye.a)(),name:"Sveta"}]},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke;return e},Ze=n(143),$e=n(133),et=Object(fe.c)({profilePage:We.b,dialogsPage:qe.b,siteBar:Qe,usersPage:ae,auth:Ee,app:Ve,form:$e.a}),tt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.d,nt=Object(fe.e)(et,tt(Object(fe.a)(Ze.a)));window.__store__=nt;var rt=nt;function at(e){return function(t){return Object(O.jsx)(s.a.Suspense,{fallback:Object(O.jsx)("div",{children:"loading..."}),children:Object(O.jsx)(e,Object(M.a)({},t))})}}var st=s.a.lazy((function(){return n.e(4).then(n.bind(null,318))})),ct=s.a.lazy((function(){return n.e(3).then(n.bind(null,317))})),it=at(st),ot=at(ct),ut=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(O.jsxs)("div",{className:"app-wrapper",children:[Object(O.jsx)(Fe,{}),Object(O.jsx)(A,{}),Object(O.jsxs)("div",{className:"app-wrapper-content",children:[Object(O.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(d.a,{to:"/profile"})}}),Object(O.jsx)(d.b,{path:"/dialogs",render:function(){return Object(O.jsx)(it,{})}}),Object(O.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(O.jsx)(ot,{})}}),Object(O.jsx)(d.b,{path:"/news",render:function(){return Object(O.jsx)(h,{})}}),Object(O.jsx)(d.b,{path:"/music",render:function(){return Object(O.jsx)(x,{})}}),Object(O.jsx)(d.b,{path:"/settings",render:function(){return Object(O.jsx)(w,{})}}),Object(O.jsx)(d.b,{path:"/users",render:function(){return Object(O.jsx)(_e,{})}}),Object(O.jsx)(d.b,{path:"/login",render:function(){return Object(O.jsx)(He,{})}})]})]}):Object(O.jsx)(de.a,{})}}]),n}(s.a.Component),lt=Object(fe.d)(d.f,Object(T.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(D.a)(G.a.mark((function e(t){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(Ie()),e.next=3,Promise.all([n]);case 3:t({type:Xe});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(ut),jt=function(){return Object(O.jsx)(f.a,{children:Object(O.jsx)(T.a,{store:rt,children:Object(O.jsx)(lt,{})})})};i.a.render(Object(O.jsx)(jt,{}),document.getElementById("root")),r()},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return p}));var r=n(4),a=n(70),s=(n(0),n(73)),c=n.n(s),i=n(92),o=n(1),u=["input","meta"],l=["input","meta"],j=["input","meta","text"],d=function(e){e.input;var t=e.meta,n=Object(a.a)(e,u),r=t.touched&&t.error;return Object(o.jsx)("div",{className:r?"".concat(c.a.formControl," ").concat(c.a.error):c.a.formControl,children:n.children})},f=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,l),c=n.touched&&n.error;return Object(o.jsxs)(d,Object(r.a)(Object(r.a)({},e),{},{children:[Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),s)),Object(o.jsx)("span",{children:c&&n.error})]}))},b=function(e){var t=e.input,n=e.meta,s=n.touched,c=n.error,i=e.text,u=Object(a.a)(e,j),l=s&&c;return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:i}),Object(o.jsx)("br",{}),Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),u)),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:l&&c})]})}))},p=function(e,t,n,r,a){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(i.a,{type:e,text:t,name:n,component:a,validate:r})})}},68:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/spinner.6f870003.svg",a=n(1);t.a=function(){return Object(a.jsx)("div",{className:"preloader",children:Object(a.jsx)("img",{src:r,alt:"preloader"})})}},71:function(e,t,n){e.exports={wrapper:"Friends_wrapper__1ATQ7",title:"Friends_title__18mMj",friendsList:"Friends_friendsList__200-J"}},72:function(e,t,n){e.exports={header:"Header_header__1tXis",loginBlock:"Header_loginBlock__Xhj6l",login:"Header_login__3uVYG"}},73:function(e,t,n){e.exports={formControl:"FormsControls_formControl___Itib",error:"FormsControls_error__13d8D"}},77:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},93:function(e,t,n){e.exports={item:"FriendsItem_item__2fAi-",circle:"FriendsItem_circle__1Hy3A"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"f",(function(){return x})),n.d(t,"e",(function(){return v}));var r=n(9),a=n.n(r),s=n(15),c=n(42),i=n(4),o=n(16),u=n(19),l="ADD-POST",j="SET-USER-PROFILE",d="SET-STATUS",f="DELETE_POST",b="SAVE-PHOTO-SUCCESS",p={posts:[{id:Object(o.a)(),message:"Hi, how are you?",likeCount:3},{id:Object(o.a)(),message:"How is your it-camasutra?",likeCount:13}],profile:null,status:""},O=function(e){return{type:l,newPostText:e}},h=function(e){return{type:d,status:e}},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.get(e);case 2:r=t.sent,n({type:j,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(h(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:b,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:Object(o.a)(),message:t.newPostText,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[n].concat(Object(c.a)(e.posts))});case j:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case b:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case f:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}}},[[300,1,2]]]);
//# sourceMappingURL=main.1975c1cc.chunk.js.map