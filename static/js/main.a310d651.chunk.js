(this["webpackJsonpreact-way-of-samurai-ts"]=this["webpackJsonpreact-way-of-samurai-ts"]||[]).push([[0],{12:function(e,t,s){e.exports={wrapper:"Navbar_wrapper__3oknN",nav:"Navbar_nav__3j_MG",item:"Navbar_item__1OyJD",activeLink:"Navbar_activeLink__2Ubgr"}},122:function(e,t,s){e.exports={news:"News_news__3q4B5"}},123:function(e,t,s){e.exports={music:"Music_music__14jij"}},124:function(e,t,s){e.exports={settings:"Settings_settings__1Twb_"}},125:function(e,t,s){e.exports={siteBar:"SiteBar_siteBar__UVcXu"}},127:function(e,t,s){e.exports={profile:"Profile_profile__1U4Qr"}},128:function(e,t,s){e.exports={social:"Social_social__A0wT0"}},13:function(e,t,s){e.exports={users:"Users_users__ygJzY",leftContent:"Users_leftContent__3imbX",buttons:"Users_buttons__1TWgR",unfollow:"Users_unfollow__3FA7I",follow:"Users_follow__2fcw9",avatarBG:"Users_avatarBG__1o7T-",avatar:"Users_avatar__1n4J8",user:"Users_user__3zAP9",rightContent:"Users_rightContent__1TefX",innerLeft:"Users_innerLeft__38_DD",innerRight:"Users_innerRight__1zpr6",name:"Users_name__29eea",status:"Users_status__3wQOm",city:"Users_city__2e9I0",country:"Users_country__35-4c",page:"Users_page__Pgi1K",current:"Users_current__2iicU"}},137:function(e,t,s){},220:function(e,t,s){},24:function(e,t,s){e.exports={wrapper:"ProfileInfo_wrapper__2TN9j",person:"ProfileInfo_person__2W0sc",status:"ProfileInfo_status__3wAsk",preview:"ProfileInfo_preview__2NOY3",description:"ProfileInfo_description__MfRma",work:"ProfileInfo_work__KuhDm",photo:"ProfileInfo_photo__16Miy",name:"ProfileInfo_name__3ORPZ"}},25:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__9d_03",listReset:"Dialogs_listReset__2DZjo",dialogsItems:"Dialogs_dialogsItems__3xfpV",active:"Dialogs_active__R-dH6",messages:"Dialogs_messages__32clz",messenger:"Dialogs_messenger__3HgeR",submitWrapper:"Dialogs_submitWrapper__3N8VE"}},265:function(e,t,s){"use strict";s.r(t);s(137);var n=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,270)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))},a=s(8),r=s(41),i=s(4),c=s(268),o=s(119),u=s.n(o).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e12dcb15-1200-4ce1-bb28-bb99ac0ccb98"}}),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return u.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},j=function(e){return u.post("follow/".concat(e)).then((function(e){return e.data}))},d=function(e){return u.delete("follow/".concat(e)).then((function(e){return e.data}))},b=function(){return u.get("auth/me").then((function(e){return e.data}))},p=function(e){return u.get("profile/".concat(e)).then((function(e){return e.data}))},f=function(e){return u.get("profile/status/".concat(e)).then((function(e){return e.data}))},h=function(e){return u.put("profile/status",{status:e}).then((function(e){return e.data}))},m="ADD-POST",O="SET-USER-PROFILE",g="SET-STATUS",_={posts:[{id:Object(c.a)(),message:"Hi, how are you?",likeCount:3},{id:Object(c.a)(),message:"How is your it-camasutra?",likeCount:13}],profile:null,status:""},x=function(e){return{type:g,status:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var s={id:Object(c.a)(),message:t.newPostText,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[s].concat(Object(r.a)(e.posts))});case O:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case g:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}},w="ADD-MESSAGE",N={dialogs:[{id:Object(c.a)(),name:"Dimych"},{id:Object(c.a)(),name:"Andrey"},{id:Object(c.a)(),name:"Sveta"},{id:Object(c.a)(),name:"Sasha"},{id:Object(c.a)(),name:"Viktor"},{id:Object(c.a)(),name:"Valera"}],messages:[{id:Object(c.a)(),message:"Hi!",user:1},{id:Object(c.a)(),message:"Hi!",user:2},{id:Object(c.a)(),message:"How is your it-camasutra?",user:2},{id:Object(c.a)(),message:"Perfectly",user:1},{id:Object(c.a)(),message:"It's amazing",user:2},{id:Object(c.a)(),message:"Thanks",user:1}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:Object(c.a)(),message:t.newMessageBody,user:2}])});default:return e}},k={friends:[{id:Object(c.a)(),name:"Andrew"},{id:Object(c.a)(),name:"Sasha"},{id:Object(c.a)(),name:"Sveta"}]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;return e},C="users/FOLLOW",S="users/UNFOLLOW",I="users/SET_USERS",U="users/SET_CURRENT_PAGE",M="users/SET_TOTAL_USERS_COUNT",F="users/TOGGLE_IS_FETCHING",L="users/TOGGLE_IS_FOLLOWING_PROGRESS",T={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},A=function(e){return{type:F,isFetching:e}},D=function(e,t){return{type:L,isFetching:e,userId:t}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case S:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case I:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case U:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case M:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case F:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case L:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(r.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},B="users/SET-USER-DATA",G={id:null,email:null,login:null,isAuth:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.data),{},{isAuth:!0});default:return e}},z=s(120),H=s(269),W=Object(a.c)({profilePage:v,dialogsPage:P,siteBar:y,usersPage:E,auth:R,form:H.a}),J=Object(a.e)(W,Object(a.a)(z.a));window.store=J;var V=J,X=s(1),Z=s.n(X),q=s(58),Q=s.n(q),Y=(s(220),s(9)),K=s(122),$=s.n(K),ee=s(0),te=function(){return Object(ee.jsx)("div",{className:$.a.news,children:Object(ee.jsx)("h1",{children:"News"})})},se=s(123),ne=s.n(se),ae=function(){return Object(ee.jsx)("div",{className:ne.a.music,children:Object(ee.jsx)("h1",{children:"Music"})})},re=s(124),ie=s.n(re),ce=function(){return Object(ee.jsx)("div",{className:ie.a.settings,children:Object(ee.jsx)("h1",{children:"Settings"})})},oe=s(12),ue=s.n(oe),le=s(11),je=s(125),de=s.n(je),be=s(60),pe=s.n(be),fe=s(82),he=s.n(fe),me=function(e){return Object(ee.jsxs)("li",{className:he.a.item,children:[Object(ee.jsx)("div",{className:he.a.circle}),e.name]})},Oe=function(e){var t=e.friends.map((function(e){return Object(ee.jsx)(me,{id:e.id,name:e.name},e.id)}));return Object(ee.jsxs)("div",{className:pe.a.wrapper,children:[Object(ee.jsx)("h2",{className:pe.a.title,children:"Friends"}),Object(ee.jsx)("ul",{className:pe.a.friendsList,children:t})]})},ge=s(10),_e=Object(ge.b)((function(e){return{friends:e.siteBar.friends}}),{})((function(e){return Object(ee.jsx)("div",{className:de.a.siteBar,children:Object(ee.jsx)(Oe,{friends:e.friends})})})),xe=function(){return Object(ee.jsxs)("div",{className:ue.a.wrapper,children:[Object(ee.jsxs)("nav",{className:ue.a.nav,children:[Object(ee.jsx)("div",{className:ue.a.item,children:Object(ee.jsx)(le.b,{to:"/profile",activeClassName:ue.a.activeLink,children:"Profile"})}),Object(ee.jsx)("div",{className:"".concat(ue.a.item," ").concat(ue.a.active),children:Object(ee.jsx)(le.b,{to:"/dialogs",activeClassName:ue.a.activeLink,children:"Messages"})}),Object(ee.jsx)("div",{className:ue.a.item,children:Object(ee.jsx)(le.b,{to:"/users",activeClassName:ue.a.activeLink,children:"Users"})}),Object(ee.jsx)("div",{className:ue.a.item,children:Object(ee.jsx)(le.b,{to:"/news",activeClassName:ue.a.activeLink,children:"News"})}),Object(ee.jsx)("div",{className:ue.a.item,children:Object(ee.jsx)(le.b,{to:"/music",activeClassName:ue.a.activeLink,children:"Music"})}),Object(ee.jsx)("div",{className:ue.a.item,children:Object(ee.jsx)(le.b,{to:"/settings",activeClassName:ue.a.activeLink,children:"Settings"})}),Object(ee.jsx)("div",{className:ue.a.item,children:Object(ee.jsx)(le.b,{to:"/login",activeClassName:ue.a.activeLink,children:"Login"})})]}),Object(ee.jsx)(_e,{})]})},ve=s(25),we=s.n(ve),Ne=s(61),Pe=s.n(Ne),ke=function(e){var t="/dialogs/".concat(e.id);return Object(ee.jsx)("li",{className:Pe.a.dialogItem,children:Object(ee.jsxs)(le.b,{className:Pe.a.link,activeClassName:Pe.a.active,to:t,children:[Object(ee.jsx)("img",{width:"30px",height:"30px",src:"https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png",alt:"avatar"}),e.name]})})},ye=s(62),Ce=s.n(ye),Se=function(e){var t=1===e.user?Ce.a.user1:Ce.a.user2;return Object(ee.jsx)("li",{className:Ce.a.message+" "+t,children:e.message})},Ie=s(267),Ue=s(266),Me=function(e){if(!e)return"Field is required"},Fe=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},Le=s(42),Te=s(63),Ae=s.n(Te),De=["input","meta"],Ee=["input","meta"],Be=["input","meta"],Ge=function(e){e.input;var t=e.meta,s=Object(Le.a)(e,De),n=t.touched&&t.error;return Object(ee.jsx)("div",{className:n?"".concat(Ae.a.formControl," ").concat(Ae.a.error):Ae.a.formControl,children:s.children})},Re=function(e){var t=e.input,s=e.meta,n=Object(Le.a)(e,Ee),a=s.touched&&s.error;return Object(ee.jsxs)(Ge,Object(i.a)(Object(i.a)({},e),{},{children:[Object(ee.jsx)("textarea",Object(i.a)(Object(i.a)({},t),n)),Object(ee.jsx)("span",{children:a&&s.error})]}))},ze=function(e){var t=e.input,s=e.meta,n=Object(Le.a)(e,Be),a=s.touched&&s.error;return Object(ee.jsx)(Ge,Object(i.a)(Object(i.a)({},e),{},{children:Object(ee.jsxs)("label",{children:[Object(ee.jsx)("span",{children:e.text}),Object(ee.jsx)("br",{}),Object(ee.jsx)("input",Object(i.a)(Object(i.a)({},t),n)),Object(ee.jsx)("br",{}),Object(ee.jsx)("span",{children:a&&s.error})]})}))},He=Fe(50),We=Object(Ue.a)({form:"dialogAddMessageForm"})((function(e){return Object(ee.jsxs)("form",{onSubmit:e.handleSubmit,className:we.a.messenger,children:[Object(ee.jsx)(Ie.a,{component:Re,placeholder:"...Enter your message",name:"newMessageBody",validate:[Me,He]}),Object(ee.jsx)("div",{className:we.a.submitWrapper,children:Object(ee.jsx)("button",{children:"Send"})})]})})),Je=function(e){var t=e.dialogsPage,s=t.dialogs.map((function(e){return Object(ee.jsx)(ke,{id:e.id,name:e.name},e.id)})),n=t.messages.map((function(e){return Object(ee.jsx)(Se,{id:e.id,user:e.user,message:e.message},e.id)}));return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)("div",{className:we.a.dialogs,children:[Object(ee.jsx)("ul",{className:we.a.dialogsItems+" "+we.a.listReset,children:s}),Object(ee.jsx)("ul",{className:we.a.messages+" "+we.a.listReset,children:n})]}),Object(ee.jsx)(We,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})},Ve=["isAuth"],Xe=function(e){return{isAuth:e.auth.isAuth}};var Ze=Object(a.d)(Object(ge.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:w,newMessageBody:e}}(t))}}})),(function(e){return Object(ge.b)(Xe)((function(t){var s=t.isAuth,n=Object(Le.a)(t,Ve);return s?Object(ee.jsx)(e,Object(i.a)({},n)):Object(ee.jsx)(Y.a,{to:"/login"})}))}))(Je),qe=s(28),Qe=s(29),Ye=s(31),Ke=s(30),$e=s(13),et=s.n($e),tt=s.p+"static/media/avatar.2479805a.png",st=s(136),nt={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"},at=function(e){return Object(ee.jsxs)("div",{className:et.a.users,children:[Object(ee.jsx)("div",{className:"pagination",children:Object(ee.jsx)(st.a,{showTitle:!0,current:e.currentPage,className:"ant-pagination",onChange:function(t){e.onPageChanged(t)},defaultCurrent:e.currentPage,defaultPageSize:e.pageSize,total:e.totalUsersCount,locale:nt})}),e.users.map((function(t){return Object(ee.jsxs)("div",{className:et.a.user,children:[Object(ee.jsxs)("div",{className:et.a.leftContent,children:[Object(ee.jsx)("div",{className:et.a.avatarBG,children:Object(ee.jsx)(le.b,{to:"./profile/".concat(t.id),children:Object(ee.jsx)("img",{className:et.a.avatar,src:null!==t.photos.small?t.photos.small:tt,alt:"avatar"})})}),Object(ee.jsx)("div",{className:et.a.buttons,children:t.followed?Object(ee.jsx)("button",{className:t.followed?et.a.unfollow:et.a.follow,disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(ee.jsx)("button",{className:t.followed?et.a.unfollow:et.a.follow,disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(ee.jsxs)("div",{className:et.a.rightContent,children:[Object(ee.jsxs)("div",{className:et.a.innerLeft,children:[Object(ee.jsx)("div",{className:et.a.name,children:t.name}),Object(ee.jsx)("div",{className:et.a.status,children:t.status})]}),Object(ee.jsxs)("div",{className:et.a.innerRight,children:[Object(ee.jsx)("div",{className:et.a.country,children:"u.location.country"}),Object(ee.jsx)("div",{className:et.a.city,children:"u.location.city"})]})]})]},t.id)}))]})},rt=s.p+"static/media/spinner.6f870003.svg",it=function(){return Object(ee.jsx)("div",{className:"preloader",children:Object(ee.jsx)("img",{src:rt,alt:"preloader"})})},ct=function(e){Object(Ye.a)(s,e);var t=Object(Ke.a)(s);function s(){return Object(qe.a)(this,s),t.apply(this,arguments)}return Object(Qe.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"onPageChanged",value:function(e){this.props.setCurrentPage(e),this.props.getUsers(e,this.props.pageSize)}},{key:"render",value:function(){return Object(ee.jsx)(ee.Fragment,{children:this.props.isFetching?Object(ee.jsx)(it,{}):Object(ee.jsx)(at,{users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged.bind(this),followingInProgress:this.props.followingInProgress})})}}]),s}(Z.a.Component),ot=Object(a.d)(Object(ge.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(D(!0,e)),j(e).then((function(s){0===s.resultCode&&t({type:C,userID:e}),t(D(!1,e))}))}},unfollow:function(e){return function(t){t(D(!0,e)),d(e).then((function(s){0===s.resultCode&&t({type:S,userID:e}),t(D(!1,e))}))}},setCurrentPage:function(e){return{type:U,currentPage:e}},getUsers:function(e,t){return function(s){s(A(!0)),l(e,t).then((function(e){var t,n;s(A(!1)),s((t=e.items,{type:I,users:t})),s((n=e.totalCount,{type:M,totalUsersCount:n}))}))}},toggleFollowingInProgress:D}))(ct),ut=s(127),lt=s.n(ut),jt=s(36),dt=s.n(jt),bt=s(87),pt=s.n(bt),ft=function(e){return Object(ee.jsxs)("div",{className:pt.a.item,children:[Object(ee.jsx)("img",{src:"https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png",alt:"avatar"}),Object(ee.jsx)("p",{children:e.message}),Object(ee.jsxs)("div",{children:[Object(ee.jsx)("span",{className:pt.a.like,children:"\u2665"})," ",e.likeCount]})]})},ht=Fe(10),mt=Object(Ue.a)({form:"PostForm"})((function(e){return Object(ee.jsxs)("form",{onSubmit:e.handleSubmit,className:dt.a.wrapperContent,children:[Object(ee.jsx)(Ie.a,{component:Re,placeholder:"...Enter your message",name:"newPostText",validate:[Me,ht]}),Object(ee.jsx)("div",{className:dt.a.wrapperButton,children:Object(ee.jsx)("button",{children:"Add post"})})]})})),Ot=function(e){var t=e.posts.map((function(e){return Object(ee.jsx)(ft,{id:e.id,message:e.message,likeCount:e.likeCount},e.id)}));return Object(ee.jsxs)("div",{className:dt.a.wrapper,children:[Object(ee.jsxs)("div",{className:dt.a.wrapperMessenger,children:[Object(ee.jsx)("h3",{children:"My posts"}),Object(ee.jsx)(mt,{onSubmit:function(t){e.addPost(t.newPostText)}})]}),Object(ee.jsx)("div",{className:dt.a.posts,children:t})]})},gt=Object(ge.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e({type:m,newPostText:t})}}}))(Ot),_t=s(24),xt=s.n(_t),vt=s(135),wt=s(129),Nt=s(130),Pt=s(131),kt=s(132),yt=s(133),Ct=s(134),St=s(128),It=s.n(St),Ut=function(e){return Object(ee.jsxs)("ul",{className:It.a.social,children:[e.facebook?Object(ee.jsxs)("li",{children:[Object(ee.jsx)(wt.AiOutlineFacebook,{}),e.facebook]}):null,e.vk?Object(ee.jsxs)("li",{children:[Object(ee.jsx)(Nt.FaVk,{}),e.vk]}):null,e.twitter?Object(ee.jsxs)("li",{children:[Object(ee.jsx)(Pt.FaTwitter,{}),e.twitter]}):null,e.instagram?Object(ee.jsxs)("li",{children:[Object(ee.jsx)(kt.FaInstagram,{}),e.instagram]}):null,e.youtube?Object(ee.jsxs)("li",{children:[Object(ee.jsx)(yt.FaYoutubeSquare,{}),e.youtube]}):null,e.github?Object(ee.jsxs)("li",{children:[Object(ee.jsx)(Ct.FaGithub,{}),e.github]}):null]})},Mt=s.p+"static/media/profile-image.ed4049d6.jpg",Ft=function(e){Object(Ye.a)(s,e);var t=Object(Ke.a)(s);function s(){var e;Object(qe.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(Qe.a)(s,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status}),console.log("componentDidUpdate")}},{key:"render",value:function(){return console.log("render"),Object(ee.jsxs)("div",{className:xt.a.status,children:[!this.state.editMode&&Object(ee.jsxs)("div",{onDoubleClick:this.activateEditMode,children:[Object(ee.jsx)("b",{children:"status: "}),Object(ee.jsx)("span",{children:this.props.status||" -empty-"})]}),this.state.editMode&&Object(ee.jsx)("div",{children:Object(ee.jsx)("input",{onChange:this.onStatusChange,onBlur:this.deactivateEditMode,autoFocus:!0,value:this.state.status})})]})}}]),s}(X.Component),Lt=function(e){if(!e.profile)return Object(ee.jsx)(it,{});var t=!e.profile.contacts.facebook&&!e.profile.contacts.vk&&!e.profile.contacts.mainLink&&!e.profile.contacts.github&&!e.profile.contacts.twitter&&!e.profile.contacts.instagram&&!e.profile.contacts.website;return Object(ee.jsxs)("div",{children:[Object(ee.jsx)("div",{className:xt.a.preview,children:Object(ee.jsx)("img",{src:Mt,alt:"background"})}),Object(ee.jsxs)("div",{className:xt.a.wrapper,children:[Object(ee.jsxs)("div",{className:xt.a.person,children:[Object(ee.jsx)("img",{className:xt.a.photo,src:e.profile.photos.large||tt,width:"300",alt:"ava"}),Object(ee.jsxs)("div",{className:xt.a.description,children:[Object(ee.jsx)("h3",{children:"About me:"}),Object(ee.jsx)("b",{className:xt.a.name,children:e.profile.fullName}),Object(ee.jsx)("p",{children:e.profile.aboutMe?e.profile.aboutMe:"- No description -"}),t?null:Object(ee.jsx)("h3",{children:"Contacts:"}),Object(ee.jsx)(Ut,{facebook:e.profile.contacts.facebook,vk:e.profile.contacts.vk,twitter:e.profile.contacts.twitter,instagram:e.profile.contacts.instagram,youtube:e.profile.contacts.youtube,github:e.profile.contacts.github}),e.profile.contacts.mainLink?Object(ee.jsxs)("p",{children:[Object(ee.jsx)("b",{children:"mainLink - "})," ",e.profile.contacts.mainLink]}):null,e.profile.contacts.website?Object(ee.jsxs)("p",{children:[Object(ee.jsx)("b",{children:"website - "})," ",e.profile.contacts.website]}):null,e.profile.lookingForAJob?Object(ee.jsxs)("p",{className:xt.a.work,children:[Object(ee.jsx)(vt.MdWork,{}),e.profile.lookingForAJobDescription]}):null]})]}),Object(ee.jsx)(Ft,{status:e.status,updateStatus:e.updateStatus})]})]})},Tt=function(e){return Object(ee.jsxs)("div",{className:lt.a.profile,children:[Object(ee.jsx)(Lt,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(ee.jsx)(gt,{})]})},At=function(e){Object(Ye.a)(s,e);var t=Object(Ke.a)(s);function s(){return Object(qe.a)(this,s),t.apply(this,arguments)}return Object(Qe.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="18407"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(ee.jsx)(Tt,Object(i.a)(Object(i.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(Z.a.Component),Dt=Object(a.d)(Object(ge.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(t){p(e).then((function(e){return t({type:O,profile:e})}))}},getStatus:function(e){return function(t){f(e).then((function(e){return t(x(e))}))}},updateStatus:function(e){return function(t){h(e).then((function(s){0===s.resultCode&&t(x(e))}))}}}),Y.f)(At),Et=s(88),Bt=s.n(Et),Gt=s.p+"static/media/logo.d941bb34.svg",Rt=function(e){return Object(ee.jsxs)("header",{className:Bt.a.header,children:[Object(ee.jsx)("img",{src:Gt,alt:"logo"}),Object(ee.jsx)("div",{className:Bt.a.loginBlock,children:e.isAuth?e.login:Object(ee.jsx)(le.b,{to:"/login",children:"Login"})})]})},zt=function(e){Object(Ye.a)(s,e);var t=Object(Ke.a)(s);function s(){return Object(qe.a)(this,s),t.apply(this,arguments)}return Object(Qe.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(ee.jsx)(Rt,Object(i.a)({},this.props))}}]),s}(Z.a.Component),Ht=Object(ge.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){b().then((function(t){if(0===t.resultCode){var s=t.data,n=s.id,a=s.login,r=s.email;e(function(e,t,s){return{type:B,data:{id:e,email:t,login:s}}}(n,r,a))}}))}}})(zt),Wt=s(43),Jt=s.n(Wt),Vt=Object(Ue.a)({form:"Login"})((function(e){return Object(ee.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(ee.jsx)(Ie.a,{text:"Name",name:"name",component:ze,validate:[Me]}),Object(ee.jsx)(Ie.a,{type:"password",text:"Password",name:"password",component:ze,validate:[Me]}),Object(ee.jsx)("div",{className:"".concat(Jt.a.formGroup," ").concat(Jt.a.formGroup_checkbox),children:Object(ee.jsxs)("label",{children:[Object(ee.jsx)(Ie.a,{name:"checkbox",component:"input",type:"checkbox"}),Object(ee.jsx)("span",{className:Jt.a.checkboxText,children:"remember me"})]})}),Object(ee.jsx)("div",{className:Jt.a.formGroup,children:Object(ee.jsx)("button",{type:"submit",children:"submit"})})]})})),Xt=function(){return Object(ee.jsxs)("div",{className:Jt.a.login,children:[Object(ee.jsx)("h1",{children:"Login"}),Object(ee.jsx)(Vt,{onSubmit:function(e){console.log(e)}})]})},Zt=function(){return Object(ee.jsxs)("div",{className:"app-wrapper",children:[Object(ee.jsx)(Ht,{}),Object(ee.jsx)(xe,{}),Object(ee.jsxs)("div",{className:"app-wrapper-content",children:[Object(ee.jsx)(Y.b,{path:"/",exact:!0,render:function(){return Object(ee.jsx)(Y.a,{to:"/profile"})}}),Object(ee.jsx)(Y.b,{path:"/dialogs",component:Ze,render:function(){return Object(ee.jsx)(Ze,{})}}),Object(ee.jsx)(Y.b,{path:"/profile/:userId?",component:Dt,render:function(){return Object(ee.jsx)(Dt,{})}}),Object(ee.jsx)(Y.b,{path:"/news",component:te,render:function(){return Object(ee.jsx)(te,{})}}),Object(ee.jsx)(Y.b,{path:"/music",component:ae,render:function(){return Object(ee.jsx)(ae,{})}}),Object(ee.jsx)(Y.b,{path:"/settings",component:ce,render:function(){return Object(ee.jsx)(ce,{})}}),Object(ee.jsx)(Y.b,{path:"/users",component:ot,render:function(){return Object(ee.jsx)(ot,{})}}),Object(ee.jsx)(Y.b,{path:"/login",component:Xt,render:function(){return Object(ee.jsx)(Xt,{})}})]})]})};Q.a.render(Object(ee.jsx)(ge.a,{store:V,children:Object(ee.jsx)(le.a,{children:Object(ee.jsx)(Zt,{})})}),document.getElementById("root")),n()},36:function(e,t,s){e.exports={wrapper:"MyPosts_wrapper__3pZ18",wrapperMessenger:"MyPosts_wrapperMessenger__2cJyv",wrapperContent:"MyPosts_wrapperContent__3L0-j",wrapperButton:"MyPosts_wrapperButton__1QS50",posts:"MyPosts_posts__3GeRT"}},43:function(e,t,s){e.exports={login:"Login_login__20SqU",formGroup:"Login_formGroup__3GsaD",formGroup_checkbox:"Login_formGroup_checkbox__2OoCz",errorInput:"Login_errorInput__14XaB"}},60:function(e,t,s){e.exports={wrapper:"Friends_wrapper__1ATQ7",title:"Friends_title__18mMj",friendsList:"Friends_friendsList__200-J"}},61:function(e,t,s){e.exports={dialogItem:"DialogItem_dialogItem__3VzTr",link:"DialogItem_link__2xWDI",active:"DialogItem_active__bUNsx"}},62:function(e,t,s){e.exports={message:"Message_message__1TnnS",user1:"Message_user1__S8wZx",user2:"Message_user2__2h3_T"}},63:function(e,t,s){e.exports={formControl:"FormsControls_formControl___Itib",error:"FormsControls_error__13d8D"}},82:function(e,t,s){e.exports={item:"FriendsItem_item__2fAi-",circle:"FriendsItem_circle__1Hy3A"}},87:function(e,t,s){e.exports={item:"Post_item__2ZpOe",like:"Post_like__29_NC"}},88:function(e,t,s){e.exports={header:"Header_header__1tXis",loginBlock:"Header_loginBlock__Xhj6l"}}},[[265,1,2]]]);
//# sourceMappingURL=main.a310d651.chunk.js.map