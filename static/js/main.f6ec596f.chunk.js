(this["webpackJsonpreact-way-of-samurai-ts"]=this["webpackJsonpreact-way-of-samurai-ts"]||[]).push([[0],{16:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__9d_03",listReset:"Dialogs_listReset__2DZjo",dialogsItems:"Dialogs_dialogsItems__3xfpV",active:"Dialogs_active__R-dH6",messages:"Dialogs_messages__32clz",messenger:"Dialogs_messenger__3HgeR",textareaWrapper:"Dialogs_textareaWrapper__18KeY",submitWrapper:"Dialogs_submitWrapper__3N8VE"}},18:function(e,t,s){e.exports={wrapper:"ProfileInfo_wrapper__2TN9j",preview:"ProfileInfo_preview__2NOY3",description:"ProfileInfo_description__MfRma",work:"ProfileInfo_work__KuhDm",photo:"ProfileInfo_photo__16Miy",name:"ProfileInfo_name__3ORPZ"}},28:function(e,t,s){e.exports={dialogItem:"DialogItem_dialogItem__3VzTr",link:"DialogItem_link__2xWDI",active:"DialogItem_active__bUNsx"}},29:function(e,t,s){e.exports={message:"Message_message__1TnnS",user1:"Message_user1__S8wZx",user2:"Message_user2__2h3_T"}},32:function(e,t,s){e.exports={title:"Friends_title__18mMj",friendsList:"Friends_friendsList__200-J"}},33:function(e,t,s){e.exports={item:"FriendsItem_item__2fAi-",circle:"FriendsItem_circle__1Hy3A"}},36:function(e,t,s){e.exports={wrapper:"MyPosts_wrapper__3pZ18",posts:"MyPosts_posts__3GeRT"}},37:function(e,t,s){e.exports={header:"Header_header__1tXis",loginBlock:"Header_loginBlock__Xhj6l"}},49:function(e,t,s){e.exports={news:"News_news__3q4B5"}},50:function(e,t,s){e.exports={music:"Music_music__14jij"}},51:function(e,t,s){e.exports={settings:"Settings_settings__1Twb_"}},52:function(e,t,s){e.exports={siteBar:"SiteBar_siteBar__UVcXu"}},54:function(e,t,s){e.exports={profile:"Profile_profile__1U4Qr"}},55:function(e,t,s){e.exports={item:"Post_item__2ZpOe"}},56:function(e,t,s){e.exports={social:"Social_social__A0wT0"}},6:function(e,t,s){e.exports={wrapper:"Navbar_wrapper__3oknN",nav:"Navbar_nav__3j_MG",item:"Navbar_item__1OyJD",activeLink:"Navbar_activeLink__2Ubgr"}},64:function(e,t,s){e.exports={login:"Login_login__20SqU"}},67:function(e,t,s){},7:function(e,t,s){e.exports={users:"Users_users__ygJzY",leftContent:"Users_leftContent__3imbX",buttons:"Users_buttons__1TWgR",unfollow:"Users_unfollow__3FA7I",follow:"Users_follow__2fcw9",avatarBG:"Users_avatarBG__1o7T-",avatar:"Users_avatar__1n4J8",user:"Users_user__3zAP9",rightContent:"Users_rightContent__1TefX",innerLeft:"Users_innerLeft__38_DD",innerRight:"Users_innerRight__1zpr6",name:"Users_name__29eea",status:"Users_status__3wQOm",city:"Users_city__2e9I0",country:"Users_country__35-4c",page:"Users_page__Pgi1K",current:"Users_current__2iicU"}},90:function(e,t,s){},97:function(e,t,s){"use strict";s.r(t);s(67);var n=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,99)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))},a=s(15),r=s(22),i=s(2),c=s(98),o=s(47),l="https://social-network.samuraijs.com/api/1.0/",u=s.n(o).a.create({withCredentials:!0,baseURL:l,headers:{"API-KEY":"e12dcb15-1200-4ce1-bb28-bb99ac0ccb98"}}),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return u.get(l+"users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},d=function(e){return u.post(l+"follow/".concat(e)).then((function(e){return e.data}))},b=function(e){return u.delete(l+"follow/".concat(e)).then((function(e){return e.data}))},p=function(){return u.get(l+"auth/me").then((function(e){return e.data}))},f=function(e){return u.get(l+"profile/".concat(e)).then((function(e){return e.data}))},g="ADD-POST",O="UPDATE-NEW-POST-TEXT",h="SET-USER-PROFILE",m={posts:[{id:Object(c.a)(),message:"Hi, how are you?",likeCount:3},{id:Object(c.a)(),message:"How is your it-camasutra?",likeCount:13}],newPostText:"",profile:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var s={id:Object(c.a)(),message:e.newPostText,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[s].concat(Object(r.a)(e.posts)),newPostText:""});case O:return Object(i.a)(Object(i.a)({},e),{},{newPostText:t.newPostText});case h:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});default:return e}},_="ADD-MESSAGE",v="UPDATE-NEW-MESSAGE",w={dialogs:[{id:Object(c.a)(),name:"Dimych"},{id:Object(c.a)(),name:"Andrey"},{id:Object(c.a)(),name:"Sveta"},{id:Object(c.a)(),name:"Sasha"},{id:Object(c.a)(),name:"Viktor"},{id:Object(c.a)(),name:"Valera"}],messages:[{id:Object(c.a)(),message:"Hi!",user:1},{id:Object(c.a)(),message:"Hi!",user:2},{id:Object(c.a)(),message:"How is your it-camasutra?",user:2},{id:Object(c.a)(),message:"Perfectly",user:1},{id:Object(c.a)(),message:"It's amazing",user:2},{id:Object(c.a)(),message:"Thanks",user:1}],newMessageText:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:Object(c.a)(),message:e.newMessageText,user:2}]),newMessageText:""});case v:return Object(i.a)(Object(i.a)({},e),{},{newMessageText:t.newMessageText});default:return e}},P={friends:[{id:Object(c.a)(),name:"Andrew"},{id:Object(c.a)(),name:"Sasha"},{id:Object(c.a)(),name:"Sveta"}]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return e},y="users/FOLLOW",C="users/UNFOLLOW",T="users/SET_USERS",U="users/SET_CURRENT_PAGE",I="users/SET_TOTAL_USERS_COUNT",S="users/TOGGLE_IS_FETCHING",F="users/TOGGLE_IS_FOLLOWING_PROGRESS",A={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},D=function(e){return{type:S,isFetching:e}},L=function(e,t){return{type:F,isFetching:e,userId:t}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case C:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case T:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case U:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case I:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case S:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case F:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(r.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},E="users/SET-USER-DATA",R={id:null,email:null,login:null,isAuth:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.data),{},{isAuth:!0});default:return e}},G=s(48),B=Object(a.b)({profilePage:x,dialogsPage:N,siteBar:k,usersPage:M,auth:z}),W=Object(a.d)(B,Object(a.a)(G.a));window.store=W;var H=W,J=s(1),V=s.n(J),X=s(26),Y=s.n(X),Z=(s(90),s(4)),K=s(49),q=s.n(K),Q=s(0),$=function(){return Object(Q.jsx)("div",{className:q.a.news,children:"News"})},ee=s(50),te=s.n(ee),se=function(){return Object(Q.jsx)("div",{className:te.a.music,children:"Music"})},ne=s(51),ae=s.n(ne),re=function(){return Object(Q.jsx)("div",{className:ae.a.settings,children:"Settings"})},ie=s(6),ce=s.n(ie),oe=s(5),le=s(52),ue=s.n(le),je=s(32),de=s.n(je),be=s(33),pe=s.n(be),fe=function(e){return Object(Q.jsxs)("li",{className:pe.a.item,children:[Object(Q.jsx)("div",{className:pe.a.circle}),e.name]})},ge=function(e){var t=e.friends.map((function(e){return Object(Q.jsx)(fe,{id:e.id,name:e.name},e.id)}));return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("h2",{className:de.a.title,children:"Friends"}),Object(Q.jsx)("ul",{className:de.a.friendsList,children:t})]})},Oe=s(8),he=Object(Oe.b)((function(e){return{friends:e.siteBar.friends}}),{})((function(e){return Object(Q.jsx)("div",{className:ue.a.siteBar,children:Object(Q.jsx)(ge,{friends:e.friends})})})),me=function(){return Object(Q.jsxs)("div",{className:ce.a.wrapper,children:[Object(Q.jsxs)("nav",{className:ce.a.nav,children:[Object(Q.jsx)("div",{className:ce.a.item,children:Object(Q.jsx)(oe.b,{to:"/profile",activeClassName:ce.a.activeLink,children:"Profile"})}),Object(Q.jsx)("div",{className:"".concat(ce.a.item," ").concat(ce.a.active),children:Object(Q.jsx)(oe.b,{to:"/dialogs",activeClassName:ce.a.activeLink,children:"Messages"})}),Object(Q.jsx)("div",{className:ce.a.item,children:Object(Q.jsx)(oe.b,{to:"/users",activeClassName:ce.a.activeLink,children:"Users"})}),Object(Q.jsx)("div",{className:ce.a.item,children:Object(Q.jsx)(oe.b,{to:"/news",activeClassName:ce.a.activeLink,children:"News"})}),Object(Q.jsx)("div",{className:ce.a.item,children:Object(Q.jsx)(oe.b,{to:"/music",activeClassName:ce.a.activeLink,children:"Music"})}),Object(Q.jsx)("div",{className:ce.a.item,children:Object(Q.jsx)(oe.b,{to:"/settings",activeClassName:ce.a.activeLink,children:"Settings"})}),Object(Q.jsx)("div",{className:ce.a.item,children:Object(Q.jsx)(oe.b,{to:"/login",activeClassName:ce.a.activeLink,children:"Login"})})]}),Object(Q.jsx)(he,{})]})},xe=s(16),_e=s.n(xe),ve=s(28),we=s.n(ve),Ne=function(e){var t="/dialogs/".concat(e.id);return Object(Q.jsx)("li",{className:we.a.dialogItem,children:Object(Q.jsxs)(oe.b,{className:we.a.link,activeClassName:we.a.active,to:t,children:[Object(Q.jsx)("img",{width:"30px",height:"30px",src:"https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png",alt:"avatar"}),e.name]})})},Pe=s(29),ke=s.n(Pe),ye=function(e){var t=1===e.user?ke.a.user1:ke.a.user2;return Object(Q.jsx)("li",{className:ke.a.message+" "+t,children:e.message})},Ce=function(e){var t=e.dialogsPage,s=t.dialogs.map((function(e){return Object(Q.jsx)(Ne,{id:e.id,name:e.name},e.id)})),n=t.messages.map((function(e){return Object(Q.jsx)(ye,{id:e.id,user:e.user,message:e.message},e.id)})),a=Object(J.useRef)(null);return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)("div",{className:_e.a.dialogs,children:[Object(Q.jsx)("ul",{className:_e.a.dialogsItems+" "+_e.a.listReset,children:s}),Object(Q.jsx)("ul",{className:_e.a.messages+" "+_e.a.listReset,children:n})]}),Object(Q.jsxs)("div",{className:_e.a.messenger,children:[Object(Q.jsx)("div",{className:_e.a.textareaWrapper,children:Object(Q.jsx)("textarea",{placeholder:"...Enter your message",ref:a,value:t.newMessageText,onChange:function(){if(a.current){var t,s=null===(t=a.current)||void 0===t?void 0:t.value;e.updateNewMessageText(s)}}})}),Object(Q.jsx)("div",{className:_e.a.submitWrapper,children:Object(Q.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})},Te=s(66),Ue=["isAuth"],Ie=function(e){return{isAuth:e.auth.isAuth}};function Se(e){return Object(Oe.b)(Ie)((function(t){var s=t.isAuth,n=Object(Te.a)(t,Ue);return s?Object(Q.jsx)(e,Object(i.a)({},n)):Object(Q.jsx)(Z.a,{to:"/login"})}))}var Fe=Object(a.c)(Object(Oe.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{updateNewMessageText:function(t){e(function(e){return{type:v,newMessageText:e}}(t))},sendMessage:function(){e({type:_})}}})),Se)(Ce),Ae=s(20),De=s(21),Le=s(24),Me=s(23),Ee=s(7),Re=s.n(Ee),ze=s.p+"static/media/avatar.2479805a.png",Ge=s(65),Be={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"},We=function(e){return Object(Q.jsxs)("div",{className:Re.a.users,children:[Object(Q.jsx)("div",{className:"pagination",children:Object(Q.jsx)(Ge.a,{showTitle:!0,current:e.currentPage,className:"ant-pagination",onChange:function(t){e.onPageChanged(t)},defaultCurrent:e.currentPage,defaultPageSize:e.pageSize,total:e.totalUsersCount,locale:Be})}),e.users.map((function(t){return Object(Q.jsxs)("div",{className:Re.a.user,children:[Object(Q.jsxs)("div",{className:Re.a.leftContent,children:[Object(Q.jsx)("div",{className:Re.a.avatarBG,children:Object(Q.jsx)(oe.b,{to:"./profile/".concat(t.id),children:Object(Q.jsx)("img",{className:Re.a.avatar,src:null!==t.photos.small?t.photos.small:ze,alt:"avatar"})})}),Object(Q.jsx)("div",{className:Re.a.buttons,children:t.followed?Object(Q.jsx)("button",{className:t.followed?Re.a.unfollow:Re.a.follow,disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(Q.jsx)("button",{className:t.followed?Re.a.unfollow:Re.a.follow,disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(Q.jsxs)("div",{className:Re.a.rightContent,children:[Object(Q.jsxs)("div",{className:Re.a.innerLeft,children:[Object(Q.jsx)("div",{className:Re.a.name,children:t.name}),Object(Q.jsx)("div",{className:Re.a.status,children:t.status})]}),Object(Q.jsxs)("div",{className:Re.a.innerRight,children:[Object(Q.jsx)("div",{className:Re.a.country,children:"u.location.country"}),Object(Q.jsx)("div",{className:Re.a.city,children:"u.location.city"})]})]})]},t.id)}))]})},He=s.p+"static/media/spinner.6f870003.svg",Je=function(){return Object(Q.jsx)("div",{className:"preloader",children:Object(Q.jsx)("img",{src:He,alt:"preloader"})})},Ve=function(e){Object(Le.a)(s,e);var t=Object(Me.a)(s);function s(){return Object(Ae.a)(this,s),t.apply(this,arguments)}return Object(De.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"onPageChanged",value:function(e){this.props.setCurrentPage(e),this.props.getUsers(e,this.props.pageSize)}},{key:"render",value:function(){return Object(Q.jsx)(Q.Fragment,{children:this.props.isFetching?Object(Q.jsx)(Je,{}):Object(Q.jsx)(We,{users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged.bind(this),followingInProgress:this.props.followingInProgress})})}}]),s}(V.a.Component),Xe=Object(a.c)(Se,Object(Oe.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(L(!0,e)),d(e).then((function(s){0===s.resultCode&&t({type:y,userID:e}),t(L(!1,e))}))}},unfollow:function(e){return function(t){t(L(!0,e)),b(e).then((function(s){0===s.resultCode&&t({type:C,userID:e}),t(L(!1,e))}))}},setCurrentPage:function(e){return{type:U,currentPage:e}},getUsers:function(e,t){return function(s){s(D(!0)),j(e,t).then((function(e){var t,n;s(D(!1)),s((t=e.items,{type:T,users:t})),s((n=e.totalCount,{type:I,totalUsersCount:n}))}))}},toggleFollowingInProgress:L}))(Ve),Ye=s(54),Ze=s.n(Ye),Ke=s(36),qe=s.n(Ke),Qe=s(55),$e=s.n(Qe),et=function(e){return Object(Q.jsxs)("div",{className:$e.a.item,children:[Object(Q.jsx)("img",{src:"https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png",alt:"avatar"}),e.message,Object(Q.jsxs)("div",{children:[Object(Q.jsx)("span",{children:"\u2665"})," ",e.likeCount]})]})},tt=function(e){var t=e.posts.map((function(e){return Object(Q.jsx)(et,{id:e.id,message:e.message,likeCount:e.likeCount},e.id)})),s=Object(J.useRef)(null);return Object(Q.jsxs)("div",{className:qe.a.wrapper,children:[Object(Q.jsx)("h3",{children:"My posts"}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("div",{children:Object(Q.jsx)("textarea",{ref:s,onChange:function(){if(s.current){var t,n=null===(t=s.current)||void 0===t?void 0:t.value;e.updateNewPostText(n)}},value:e.newPostText})}),Object(Q.jsx)("div",{children:Object(Q.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})})]}),Object(Q.jsx)("div",{className:qe.a.posts,children:t})]})},st=Object(Oe.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){e(function(e){return{type:O,newPostText:e}}(t))},addPost:function(){e({type:g})}}}))(tt),nt=s(18),at=s.n(nt),rt=s(63),it=s(57),ct=s(58),ot=s(59),lt=s(60),ut=s(61),jt=s(62),dt=s(56),bt=s.n(dt),pt=function(e){return Object(Q.jsxs)("ul",{className:bt.a.social,children:[e.facebook?Object(Q.jsxs)("li",{children:[Object(Q.jsx)(it.AiOutlineFacebook,{}),e.facebook]}):null,e.vk?Object(Q.jsxs)("li",{children:[Object(Q.jsx)(ct.FaVk,{}),e.vk]}):null,e.twitter?Object(Q.jsxs)("li",{children:[Object(Q.jsx)(ot.FaTwitter,{}),e.twitter]}):null,e.instagram?Object(Q.jsxs)("li",{children:[Object(Q.jsx)(lt.FaInstagram,{}),e.instagram]}):null,e.youtube?Object(Q.jsxs)("li",{children:[Object(Q.jsx)(ut.FaYoutubeSquare,{}),e.youtube]}):null,e.github?Object(Q.jsxs)("li",{children:[Object(Q.jsx)(jt.FaGithub,{}),e.github]}):null]})},ft=function(e){if(!e.profile)return Object(Q.jsx)(Je,{});var t=!e.profile.contacts.facebook&&!e.profile.contacts.vk&&!e.profile.contacts.mainLink&&!e.profile.contacts.github&&!e.profile.contacts.twitter&&!e.profile.contacts.instagram&&!e.profile.contacts.website;return Object(Q.jsxs)("div",{children:[Object(Q.jsx)("div",{className:at.a.preview,children:Object(Q.jsx)("img",{src:"https://playprint.ru/images/catalog/categories/category-marvel-bg.jpg",alt:"background"})}),Object(Q.jsxs)("div",{className:at.a.wrapper,children:[Object(Q.jsx)("img",{className:at.a.photo,src:e.profile.photos.large||ze,width:"300",alt:"ava"}),Object(Q.jsxs)("div",{className:at.a.description,children:[Object(Q.jsx)("h3",{children:"About me:"}),Object(Q.jsx)("b",{className:at.a.name,children:e.profile.fullName}),Object(Q.jsx)("p",{children:e.profile.aboutMe?e.profile.aboutMe:"- No description -"}),t?null:Object(Q.jsx)("h3",{children:"Contacts:"}),Object(Q.jsx)(pt,{facebook:e.profile.contacts.facebook,vk:e.profile.contacts.vk,twitter:e.profile.contacts.twitter,instagram:e.profile.contacts.instagram,youtube:e.profile.contacts.youtube,github:e.profile.contacts.github}),e.profile.contacts.mainLink?Object(Q.jsxs)("p",{children:[Object(Q.jsx)("b",{children:"mainLink - "})," ",e.profile.contacts.mainLink]}):null,e.profile.contacts.website?Object(Q.jsxs)("p",{children:[Object(Q.jsx)("b",{children:"website - "})," ",e.profile.contacts.website]}):null,e.profile.lookingForAJob?Object(Q.jsxs)("p",{className:at.a.work,children:[Object(Q.jsx)(rt.MdWork,{}),e.profile.lookingForAJobDescription]}):null]})]})]})},gt=function(e){return Object(Q.jsxs)("div",{className:Ze.a.profile,children:[Object(Q.jsx)(ft,{profile:e.profile}),Object(Q.jsx)(st,{})]})},Ot=function(e){Object(Le.a)(s,e);var t=Object(Me.a)(s);function s(){return Object(Ae.a)(this,s),t.apply(this,arguments)}return Object(De.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="18407"),this.props.getUserProfile(e)}},{key:"render",value:function(){return Object(Q.jsx)(gt,Object(i.a)(Object(i.a)({},this.props),{},{profile:this.props.profile}))}}]),s}(V.a.Component),ht=Object(a.c)(Object(Oe.b)((function(e){return{profile:e.profilePage.profile}}),{getUserProfile:function(e){return function(t){f(e).then((function(e){return t({type:h,profile:e})}))}}}),Z.f,Se)(Ot),mt=s(37),xt=s.n(mt),_t=function(e){return Object(Q.jsxs)("header",{className:xt.a.header,children:[Object(Q.jsx)("img",{src:"https://www.meme-arsenal.com/memes/e207dd3d241976dcbca5fefcd1bfdc70.jpg",alt:"logo"}),Object(Q.jsx)("div",{className:xt.a.loginBlock,children:e.isAuth?e.login:Object(Q.jsx)(oe.b,{to:"/login",children:"Login"})})]})},vt=function(e){Object(Le.a)(s,e);var t=Object(Me.a)(s);function s(){return Object(Ae.a)(this,s),t.apply(this,arguments)}return Object(De.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(Q.jsx)(_t,Object(i.a)({},this.props))}}]),s}(V.a.Component),wt=Object(Oe.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){p().then((function(t){if(0===t.resultCode){var s=t.data,n=s.id,a=s.login,r=s.email;e(function(e,t,s){return{type:E,data:{id:e,email:t,login:s}}}(n,r,a))}}))}}})(vt),Nt=s(64),Pt=s.n(Nt),kt=function(){return Object(Q.jsx)("div",{className:Pt.a.login,children:Object(Q.jsx)("h1",{children:"Login"})})},yt=function(){return Object(Q.jsxs)("div",{className:"app-wrapper",children:[Object(Q.jsx)(wt,{}),Object(Q.jsx)(me,{}),Object(Q.jsxs)("div",{className:"app-wrapper-content",children:[Object(Q.jsx)(Z.b,{path:"/",exact:!0,render:function(){return Object(Q.jsx)(Z.a,{to:"/profile"})}}),Object(Q.jsx)(Z.b,{path:"/dialogs",component:Fe,render:function(){return Object(Q.jsx)(Fe,{})}}),Object(Q.jsx)(Z.b,{path:"/profile/:userId?",component:ht,render:function(){return Object(Q.jsx)(ht,{})}}),Object(Q.jsx)(Z.b,{path:"/news",component:$,render:function(){return Object(Q.jsx)($,{})}}),Object(Q.jsx)(Z.b,{path:"/music",component:se,render:function(){return Object(Q.jsx)(se,{})}}),Object(Q.jsx)(Z.b,{path:"/settings",component:re,render:function(){return Object(Q.jsx)(re,{})}}),Object(Q.jsx)(Z.b,{path:"/users",component:Xe,render:function(){return Object(Q.jsx)(Xe,{})}}),Object(Q.jsx)(Z.b,{path:"/login",component:kt,render:function(){return Object(Q.jsx)(kt,{})}})]})]})};Y.a.render(Object(Q.jsx)(V.a.StrictMode,{children:Object(Q.jsx)(Oe.a,{store:H,children:Object(Q.jsx)(oe.a,{basename:"/social-network/",children:Object(Q.jsx)(yt,{})})})}),document.getElementById("root")),n()}},[[97,1,2]]]);
//# sourceMappingURL=main.f6ec596f.chunk.js.map