(this["webpackJsonpreact-way-of-samurai-ts"]=this["webpackJsonpreact-way-of-samurai-ts"]||[]).push([[0],{119:function(e,t,s){e.exports={news:"News_news__3q4B5"}},12:function(e,t,s){e.exports={wrapper:"Navbar_wrapper__3oknN",nav:"Navbar_nav__3j_MG",item:"Navbar_item__1OyJD",activeLink:"Navbar_activeLink__2Ubgr"}},120:function(e,t,s){e.exports={music:"Music_music__14jij"}},121:function(e,t,s){e.exports={settings:"Settings_settings__1Twb_"}},122:function(e,t,s){e.exports={siteBar:"SiteBar_siteBar__UVcXu"}},124:function(e,t,s){e.exports={profile:"Profile_profile__1U4Qr"}},125:function(e,t,s){e.exports={social:"Social_social__A0wT0"}},13:function(e,t,s){e.exports={users:"Users_users__ygJzY",leftContent:"Users_leftContent__3imbX",buttons:"Users_buttons__1TWgR",unfollow:"Users_unfollow__3FA7I",follow:"Users_follow__2fcw9",avatarBG:"Users_avatarBG__1o7T-",avatar:"Users_avatar__1n4J8",user:"Users_user__3zAP9",rightContent:"Users_rightContent__1TefX",innerLeft:"Users_innerLeft__38_DD",innerRight:"Users_innerRight__1zpr6",name:"Users_name__29eea",status:"Users_status__3wQOm",city:"Users_city__2e9I0",country:"Users_country__35-4c",page:"Users_page__Pgi1K",current:"Users_current__2iicU"}},136:function(e,t,s){},219:function(e,t,s){},24:function(e,t,s){e.exports={wrapper:"ProfileInfo_wrapper__2TN9j",person:"ProfileInfo_person__2W0sc",status:"ProfileInfo_status__3wAsk",preview:"ProfileInfo_preview__2NOY3",description:"ProfileInfo_description__MfRma",work:"ProfileInfo_work__KuhDm",photo:"ProfileInfo_photo__16Miy",name:"ProfileInfo_name__3ORPZ"}},25:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__9d_03",listReset:"Dialogs_listReset__2DZjo",dialogsItems:"Dialogs_dialogsItems__3xfpV",active:"Dialogs_active__R-dH6",messages:"Dialogs_messages__32clz",messenger:"Dialogs_messenger__3HgeR",textareaWrapper:"Dialogs_textareaWrapper__18KeY",submitWrapper:"Dialogs_submitWrapper__3N8VE"}},264:function(e,t,s){"use strict";s.r(t);s(136);var n=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,269)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))},a=s(8),r=s(42),i=s(4),c=s(267),o=s(116),u=s.n(o).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e12dcb15-1200-4ce1-bb28-bb99ac0ccb98"}}),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return u.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},j=function(e){return u.post("follow/".concat(e)).then((function(e){return e.data}))},d=function(e){return u.delete("follow/".concat(e)).then((function(e){return e.data}))},p=function(){return u.get("auth/me").then((function(e){return e.data}))},b=function(e){return u.get("profile/".concat(e)).then((function(e){return e.data}))},f=function(e){return u.get("profile/status/".concat(e)).then((function(e){return e.data}))},h=function(e){return u.put("profile/status",{status:e}).then((function(e){return e.data}))},g="ADD-POST",O="UPDATE-NEW-POST-TEXT",m="SET-USER-PROFILE",x="SET-STATUS",_={posts:[{id:Object(c.a)(),message:"Hi, how are you?",likeCount:3},{id:Object(c.a)(),message:"How is your it-camasutra?",likeCount:13}],newPostText:"",profile:null,status:""},v=function(e){return{type:x,status:e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var s={id:Object(c.a)(),message:e.newPostText,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[s].concat(Object(r.a)(e.posts)),newPostText:""});case O:return Object(i.a)(Object(i.a)({},e),{},{newPostText:t.newPostText});case m:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case x:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}},N="ADD-MESSAGE",P="UPDATE-NEW-MESSAGE",k={dialogs:[{id:Object(c.a)(),name:"Dimych"},{id:Object(c.a)(),name:"Andrey"},{id:Object(c.a)(),name:"Sveta"},{id:Object(c.a)(),name:"Sasha"},{id:Object(c.a)(),name:"Viktor"},{id:Object(c.a)(),name:"Valera"}],messages:[{id:Object(c.a)(),message:"Hi!",user:1},{id:Object(c.a)(),message:"Hi!",user:2},{id:Object(c.a)(),message:"How is your it-camasutra?",user:2},{id:Object(c.a)(),message:"Perfectly",user:1},{id:Object(c.a)(),message:"It's amazing",user:2},{id:Object(c.a)(),message:"Thanks",user:1}],newMessageText:""},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:Object(c.a)(),message:e.newMessageText,user:2}]),newMessageText:""});case P:return Object(i.a)(Object(i.a)({},e),{},{newMessageText:t.newMessageText});default:return e}},C={friends:[{id:Object(c.a)(),name:"Andrew"},{id:Object(c.a)(),name:"Sasha"},{id:Object(c.a)(),name:"Sveta"}]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;return e},T="users/FOLLOW",U="users/UNFOLLOW",I="users/SET_USERS",M="users/SET_CURRENT_PAGE",A="users/SET_TOTAL_USERS_COUNT",D="users/TOGGLE_IS_FETCHING",L="users/TOGGLE_IS_FOLLOWING_PROGRESS",F={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},E=function(e){return{type:D,isFetching:e}},G=function(e,t){return{type:L,isFetching:e,userId:t}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case U:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case I:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case M:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case A:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case D:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case L:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(r.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},z="users/SET-USER-DATA",B={id:null,email:null,login:null,isAuth:!1},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.data),{},{isAuth:!0});default:return e}},H=s(117),J=s(268),V=Object(a.c)({profilePage:w,dialogsPage:y,siteBar:S,usersPage:R,auth:W,form:J.a}),X=Object(a.e)(V,Object(a.a)(H.a));window.store=X;var Y=X,Z=s(1),q=s.n(Z),K=s(57),Q=s.n(K),$=(s(219),s(9)),ee=s(119),te=s.n(ee),se=s(0),ne=function(){return Object(se.jsx)("div",{className:te.a.news,children:Object(se.jsx)("h1",{children:"News"})})},ae=s(120),re=s.n(ae),ie=function(){return Object(se.jsx)("div",{className:re.a.music,children:Object(se.jsx)("h1",{children:"Music"})})},ce=s(121),oe=s.n(ce),ue=function(){return Object(se.jsx)("div",{className:oe.a.settings,children:Object(se.jsx)("h1",{children:"Settings"})})},le=s(12),je=s.n(le),de=s(11),pe=s(122),be=s.n(pe),fe=s(59),he=s.n(fe),ge=s(79),Oe=s.n(ge),me=function(e){return Object(se.jsxs)("li",{className:Oe.a.item,children:[Object(se.jsx)("div",{className:Oe.a.circle}),e.name]})},xe=function(e){var t=e.friends.map((function(e){return Object(se.jsx)(me,{id:e.id,name:e.name},e.id)}));return Object(se.jsxs)("div",{className:he.a.wrapper,children:[Object(se.jsx)("h2",{className:he.a.title,children:"Friends"}),Object(se.jsx)("ul",{className:he.a.friendsList,children:t})]})},_e=s(10),ve=Object(_e.b)((function(e){return{friends:e.siteBar.friends}}),{})((function(e){return Object(se.jsx)("div",{className:be.a.siteBar,children:Object(se.jsx)(xe,{friends:e.friends})})})),we=function(){return Object(se.jsxs)("div",{className:je.a.wrapper,children:[Object(se.jsxs)("nav",{className:je.a.nav,children:[Object(se.jsx)("div",{className:je.a.item,children:Object(se.jsx)(de.b,{to:"/profile",activeClassName:je.a.activeLink,children:"Profile"})}),Object(se.jsx)("div",{className:"".concat(je.a.item," ").concat(je.a.active),children:Object(se.jsx)(de.b,{to:"/dialogs",activeClassName:je.a.activeLink,children:"Messages"})}),Object(se.jsx)("div",{className:je.a.item,children:Object(se.jsx)(de.b,{to:"/users",activeClassName:je.a.activeLink,children:"Users"})}),Object(se.jsx)("div",{className:je.a.item,children:Object(se.jsx)(de.b,{to:"/news",activeClassName:je.a.activeLink,children:"News"})}),Object(se.jsx)("div",{className:je.a.item,children:Object(se.jsx)(de.b,{to:"/music",activeClassName:je.a.activeLink,children:"Music"})}),Object(se.jsx)("div",{className:je.a.item,children:Object(se.jsx)(de.b,{to:"/settings",activeClassName:je.a.activeLink,children:"Settings"})}),Object(se.jsx)("div",{className:je.a.item,children:Object(se.jsx)(de.b,{to:"/login",activeClassName:je.a.activeLink,children:"Login"})})]}),Object(se.jsx)(ve,{})]})},Ne=s(25),Pe=s.n(Ne),ke=s(60),ye=s.n(ke),Ce=function(e){var t="/dialogs/".concat(e.id);return Object(se.jsx)("li",{className:ye.a.dialogItem,children:Object(se.jsxs)(de.b,{className:ye.a.link,activeClassName:ye.a.active,to:t,children:[Object(se.jsx)("img",{width:"30px",height:"30px",src:"https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png",alt:"avatar"}),e.name]})})},Se=s(61),Te=s.n(Se),Ue=function(e){var t=1===e.user?Te.a.user1:Te.a.user2;return Object(se.jsx)("li",{className:Te.a.message+" "+t,children:e.message})},Ie=function(e){var t=e.dialogsPage,s=t.dialogs.map((function(e){return Object(se.jsx)(Ce,{id:e.id,name:e.name},e.id)})),n=t.messages.map((function(e){return Object(se.jsx)(Ue,{id:e.id,user:e.user,message:e.message},e.id)})),a=Object(Z.useRef)(null);return Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)("div",{className:Pe.a.dialogs,children:[Object(se.jsx)("ul",{className:Pe.a.dialogsItems+" "+Pe.a.listReset,children:s}),Object(se.jsx)("ul",{className:Pe.a.messages+" "+Pe.a.listReset,children:n})]}),Object(se.jsxs)("div",{className:Pe.a.messenger,children:[Object(se.jsx)("div",{className:Pe.a.textareaWrapper,children:Object(se.jsx)("textarea",{placeholder:"...Enter your message",ref:a,value:t.newMessageText,onChange:function(){if(a.current){var t,s=null===(t=a.current)||void 0===t?void 0:t.value;e.updateNewMessageText(s)}}})}),Object(se.jsx)("div",{className:Pe.a.submitWrapper,children:Object(se.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})},Me=s(134),Ae=["isAuth"],De=function(e){return{isAuth:e.auth.isAuth}};var Le=Object(a.d)(Object(_e.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{updateNewMessageText:function(t){e(function(e){return{type:P,newMessageText:e}}(t))},sendMessage:function(){e({type:N})}}})),(function(e){return Object(_e.b)(De)((function(t){var s=t.isAuth,n=Object(Me.a)(t,Ae);return s?Object(se.jsx)(e,Object(i.a)({},n)):Object(se.jsx)($.a,{to:"/login"})}))}))(Ie),Fe=s(28),Ee=s(29),Ge=s(31),Re=s(30),ze=s(13),Be=s.n(ze),We=s.p+"static/media/avatar.2479805a.png",He=s(133),Je={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"},Ve=function(e){return Object(se.jsxs)("div",{className:Be.a.users,children:[Object(se.jsx)("div",{className:"pagination",children:Object(se.jsx)(He.a,{showTitle:!0,current:e.currentPage,className:"ant-pagination",onChange:function(t){e.onPageChanged(t)},defaultCurrent:e.currentPage,defaultPageSize:e.pageSize,total:e.totalUsersCount,locale:Je})}),e.users.map((function(t){return Object(se.jsxs)("div",{className:Be.a.user,children:[Object(se.jsxs)("div",{className:Be.a.leftContent,children:[Object(se.jsx)("div",{className:Be.a.avatarBG,children:Object(se.jsx)(de.b,{to:"./profile/".concat(t.id),children:Object(se.jsx)("img",{className:Be.a.avatar,src:null!==t.photos.small?t.photos.small:We,alt:"avatar"})})}),Object(se.jsx)("div",{className:Be.a.buttons,children:t.followed?Object(se.jsx)("button",{className:t.followed?Be.a.unfollow:Be.a.follow,disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(se.jsx)("button",{className:t.followed?Be.a.unfollow:Be.a.follow,disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(se.jsxs)("div",{className:Be.a.rightContent,children:[Object(se.jsxs)("div",{className:Be.a.innerLeft,children:[Object(se.jsx)("div",{className:Be.a.name,children:t.name}),Object(se.jsx)("div",{className:Be.a.status,children:t.status})]}),Object(se.jsxs)("div",{className:Be.a.innerRight,children:[Object(se.jsx)("div",{className:Be.a.country,children:"u.location.country"}),Object(se.jsx)("div",{className:Be.a.city,children:"u.location.city"})]})]})]},t.id)}))]})},Xe=s.p+"static/media/spinner.6f870003.svg",Ye=function(){return Object(se.jsx)("div",{className:"preloader",children:Object(se.jsx)("img",{src:Xe,alt:"preloader"})})},Ze=function(e){Object(Ge.a)(s,e);var t=Object(Re.a)(s);function s(){return Object(Fe.a)(this,s),t.apply(this,arguments)}return Object(Ee.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"onPageChanged",value:function(e){this.props.setCurrentPage(e),this.props.getUsers(e,this.props.pageSize)}},{key:"render",value:function(){return Object(se.jsx)(se.Fragment,{children:this.props.isFetching?Object(se.jsx)(Ye,{}):Object(se.jsx)(Ve,{users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged.bind(this),followingInProgress:this.props.followingInProgress})})}}]),s}(q.a.Component),qe=Object(a.d)(Object(_e.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(G(!0,e)),j(e).then((function(s){0===s.resultCode&&t({type:T,userID:e}),t(G(!1,e))}))}},unfollow:function(e){return function(t){t(G(!0,e)),d(e).then((function(s){0===s.resultCode&&t({type:U,userID:e}),t(G(!1,e))}))}},setCurrentPage:function(e){return{type:M,currentPage:e}},getUsers:function(e,t){return function(s){s(E(!0)),l(e,t).then((function(e){var t,n;s(E(!1)),s((t=e.items,{type:I,users:t})),s((n=e.totalCount,{type:A,totalUsersCount:n}))}))}},toggleFollowingInProgress:G}))(Ze),Ke=s(124),Qe=s.n(Ke),$e=s(37),et=s.n($e),tt=s(82),st=s.n(tt),nt=function(e){return Object(se.jsxs)("div",{className:st.a.item,children:[Object(se.jsx)("img",{src:"https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png",alt:"avatar"}),Object(se.jsx)("p",{children:e.message}),Object(se.jsxs)("div",{children:[Object(se.jsx)("span",{className:st.a.like,children:"\u2665"})," ",e.likeCount]})]})},at=function(e){var t=e.posts.map((function(e){return Object(se.jsx)(nt,{id:e.id,message:e.message,likeCount:e.likeCount},e.id)})),s=Object(Z.useRef)(null);return Object(se.jsxs)("div",{className:et.a.wrapper,children:[Object(se.jsxs)("div",{className:et.a.wrapperMessenger,children:[Object(se.jsx)("h3",{children:"My posts"}),Object(se.jsxs)("div",{className:et.a.wrapperContent,children:[Object(se.jsx)("div",{className:et.a.wrapperTextarea,children:Object(se.jsx)("textarea",{ref:s,onChange:function(){if(s.current){var t,n=null===(t=s.current)||void 0===t?void 0:t.value;e.updateNewPostText(n)}},value:e.newPostText})}),Object(se.jsx)("div",{className:et.a.wrapperButton,children:Object(se.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})})]})]}),Object(se.jsx)("div",{className:et.a.posts,children:t})]})},rt=Object(_e.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){e(function(e){return{type:O,newPostText:e}}(t))},addPost:function(){e({type:g})}}}))(at),it=s(24),ct=s.n(it),ot=s(132),ut=s(126),lt=s(127),jt=s(128),dt=s(129),pt=s(130),bt=s(131),ft=s(125),ht=s.n(ft),gt=function(e){return Object(se.jsxs)("ul",{className:ht.a.social,children:[e.facebook?Object(se.jsxs)("li",{children:[Object(se.jsx)(ut.AiOutlineFacebook,{}),e.facebook]}):null,e.vk?Object(se.jsxs)("li",{children:[Object(se.jsx)(lt.FaVk,{}),e.vk]}):null,e.twitter?Object(se.jsxs)("li",{children:[Object(se.jsx)(jt.FaTwitter,{}),e.twitter]}):null,e.instagram?Object(se.jsxs)("li",{children:[Object(se.jsx)(dt.FaInstagram,{}),e.instagram]}):null,e.youtube?Object(se.jsxs)("li",{children:[Object(se.jsx)(pt.FaYoutubeSquare,{}),e.youtube]}):null,e.github?Object(se.jsxs)("li",{children:[Object(se.jsx)(bt.FaGithub,{}),e.github]}):null]})},Ot=s.p+"static/media/profile-image.ed4049d6.jpg",mt=function(e){Object(Ge.a)(s,e);var t=Object(Re.a)(s);function s(){var e;Object(Fe.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(Ee.a)(s,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status}),console.log("componentDidUpdate")}},{key:"render",value:function(){return console.log("render"),Object(se.jsxs)("div",{className:ct.a.status,children:[!this.state.editMode&&Object(se.jsxs)("div",{onDoubleClick:this.activateEditMode,children:[Object(se.jsx)("b",{children:"status: "}),Object(se.jsx)("span",{children:this.props.status||" -empty-"})]}),this.state.editMode&&Object(se.jsx)("div",{children:Object(se.jsx)("input",{onChange:this.onStatusChange,onBlur:this.deactivateEditMode,autoFocus:!0,value:this.state.status})})]})}}]),s}(Z.Component),xt=function(e){if(!e.profile)return Object(se.jsx)(Ye,{});var t=!e.profile.contacts.facebook&&!e.profile.contacts.vk&&!e.profile.contacts.mainLink&&!e.profile.contacts.github&&!e.profile.contacts.twitter&&!e.profile.contacts.instagram&&!e.profile.contacts.website;return Object(se.jsxs)("div",{children:[Object(se.jsx)("div",{className:ct.a.preview,children:Object(se.jsx)("img",{src:Ot,alt:"background"})}),Object(se.jsxs)("div",{className:ct.a.wrapper,children:[Object(se.jsxs)("div",{className:ct.a.person,children:[Object(se.jsx)("img",{className:ct.a.photo,src:e.profile.photos.large||We,width:"300",alt:"ava"}),Object(se.jsxs)("div",{className:ct.a.description,children:[Object(se.jsx)("h3",{children:"About me:"}),Object(se.jsx)("b",{className:ct.a.name,children:e.profile.fullName}),Object(se.jsx)("p",{children:e.profile.aboutMe?e.profile.aboutMe:"- No description -"}),t?null:Object(se.jsx)("h3",{children:"Contacts:"}),Object(se.jsx)(gt,{facebook:e.profile.contacts.facebook,vk:e.profile.contacts.vk,twitter:e.profile.contacts.twitter,instagram:e.profile.contacts.instagram,youtube:e.profile.contacts.youtube,github:e.profile.contacts.github}),e.profile.contacts.mainLink?Object(se.jsxs)("p",{children:[Object(se.jsx)("b",{children:"mainLink - "})," ",e.profile.contacts.mainLink]}):null,e.profile.contacts.website?Object(se.jsxs)("p",{children:[Object(se.jsx)("b",{children:"website - "})," ",e.profile.contacts.website]}):null,e.profile.lookingForAJob?Object(se.jsxs)("p",{className:ct.a.work,children:[Object(se.jsx)(ot.MdWork,{}),e.profile.lookingForAJobDescription]}):null]})]}),Object(se.jsx)(mt,{status:e.status,updateStatus:e.updateStatus})]})]})},_t=function(e){return Object(se.jsxs)("div",{className:Qe.a.profile,children:[Object(se.jsx)(xt,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(se.jsx)(rt,{})]})},vt=function(e){Object(Ge.a)(s,e);var t=Object(Re.a)(s);function s(){return Object(Fe.a)(this,s),t.apply(this,arguments)}return Object(Ee.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="18407"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(se.jsx)(_t,Object(i.a)(Object(i.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(q.a.Component),wt=Object(a.d)(Object(_e.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(t){b(e).then((function(e){return t({type:m,profile:e})}))}},getStatus:function(e){return function(t){f(e).then((function(e){return t(v(e))}))}},updateStatus:function(e){return function(t){h(e).then((function(s){0===s.resultCode&&t(v(e))}))}}}),$.f)(vt),Nt=s(83),Pt=s.n(Nt),kt=s.p+"static/media/logo.d941bb34.svg",yt=function(e){return Object(se.jsxs)("header",{className:Pt.a.header,children:[Object(se.jsx)("img",{src:kt,alt:"logo"}),Object(se.jsx)("div",{className:Pt.a.loginBlock,children:e.isAuth?e.login:Object(se.jsx)(de.b,{to:"/login",children:"Login"})})]})},Ct=function(e){Object(Ge.a)(s,e);var t=Object(Re.a)(s);function s(){return Object(Fe.a)(this,s),t.apply(this,arguments)}return Object(Ee.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(se.jsx)(yt,Object(i.a)({},this.props))}}]),s}(q.a.Component),St=Object(_e.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){p().then((function(t){if(0===t.resultCode){var s=t.data,n=s.id,a=s.login,r=s.email;e(function(e,t,s){return{type:z,data:{id:e,email:t,login:s}}}(n,r,a))}}))}}})(Ct),Tt=s(33),Ut=s.n(Tt),It=s(266),Mt=s(265),At=Object(Mt.a)({form:"Login"})((function(e){return Object(se.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(se.jsx)("div",{className:Ut.a.formGroup,children:Object(se.jsxs)("label",{children:[Object(se.jsx)("span",{children:"Name"}),Object(se.jsx)("br",{}),Object(se.jsx)(It.a,{name:"name",component:"input"})]})}),Object(se.jsx)("div",{className:Ut.a.formGroup,children:Object(se.jsxs)("label",{children:[Object(se.jsx)("span",{children:"Password"}),Object(se.jsx)("br",{}),Object(se.jsx)(It.a,{name:"password",component:"input"})]})}),Object(se.jsx)("div",{className:"".concat(Ut.a.formGroup," ").concat(Ut.a.formGroup_checkbox),children:Object(se.jsxs)("label",{children:[Object(se.jsx)(It.a,{name:"checkbox",component:"input",type:"checkbox"}),Object(se.jsx)("span",{className:Ut.a.checkboxText,children:"remember me"})]})}),Object(se.jsx)("div",{className:Ut.a.formGroup,children:Object(se.jsx)("button",{type:"submit",children:"submit"})})]})})),Dt=function(){return Object(se.jsxs)("div",{className:Ut.a.login,children:[Object(se.jsx)("h1",{children:"Login"}),Object(se.jsx)(At,{onSubmit:function(e){console.log(e)}})]})},Lt=function(){return Object(se.jsxs)("div",{className:"app-wrapper",children:[Object(se.jsx)(St,{}),Object(se.jsx)(we,{}),Object(se.jsxs)("div",{className:"app-wrapper-content",children:[Object(se.jsx)($.b,{path:"/",exact:!0,render:function(){return Object(se.jsx)($.a,{to:"/profile"})}}),Object(se.jsx)($.b,{path:"/dialogs",component:Le,render:function(){return Object(se.jsx)(Le,{})}}),Object(se.jsx)($.b,{path:"/profile/:userId?",component:wt,render:function(){return Object(se.jsx)(wt,{})}}),Object(se.jsx)($.b,{path:"/news",component:ne,render:function(){return Object(se.jsx)(ne,{})}}),Object(se.jsx)($.b,{path:"/music",component:ie,render:function(){return Object(se.jsx)(ie,{})}}),Object(se.jsx)($.b,{path:"/settings",component:ue,render:function(){return Object(se.jsx)(ue,{})}}),Object(se.jsx)($.b,{path:"/users",component:qe,render:function(){return Object(se.jsx)(qe,{})}}),Object(se.jsx)($.b,{path:"/login",component:Dt,render:function(){return Object(se.jsx)(Dt,{})}})]})]})};Q.a.render(Object(se.jsx)(_e.a,{store:Y,children:Object(se.jsx)(de.a,{children:Object(se.jsx)(Lt,{})})}),document.getElementById("root")),n()},33:function(e,t,s){e.exports={login:"Login_login__20SqU",formGroup:"Login_formGroup__3GsaD",formGroup_checkbox:"Login_formGroup_checkbox__2OoCz"}},37:function(e,t,s){e.exports={wrapper:"MyPosts_wrapper__3pZ18",wrapperMessenger:"MyPosts_wrapperMessenger__2cJyv",wrapperContent:"MyPosts_wrapperContent__3L0-j",wrapperTextarea:"MyPosts_wrapperTextarea__2Swqi",wrapperButton:"MyPosts_wrapperButton__1QS50",posts:"MyPosts_posts__3GeRT"}},59:function(e,t,s){e.exports={wrapper:"Friends_wrapper__1ATQ7",title:"Friends_title__18mMj",friendsList:"Friends_friendsList__200-J"}},60:function(e,t,s){e.exports={dialogItem:"DialogItem_dialogItem__3VzTr",link:"DialogItem_link__2xWDI",active:"DialogItem_active__bUNsx"}},61:function(e,t,s){e.exports={message:"Message_message__1TnnS",user1:"Message_user1__S8wZx",user2:"Message_user2__2h3_T"}},79:function(e,t,s){e.exports={item:"FriendsItem_item__2fAi-",circle:"FriendsItem_circle__1Hy3A"}},82:function(e,t,s){e.exports={item:"Post_item__2ZpOe",like:"Post_like__29_NC"}},83:function(e,t,s){e.exports={header:"Header_header__1tXis",loginBlock:"Header_loginBlock__Xhj6l"}}},[[264,1,2]]]);
//# sourceMappingURL=main.e4828835.chunk.js.map