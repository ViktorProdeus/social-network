(this["webpackJsonpreact-way-of-samurai-ts"]=this["webpackJsonpreact-way-of-samurai-ts"]||[]).push([[0],[,,,,,function(e,t,s){e.exports={users:"Users_users__ygJzY",leftContent:"Users_leftContent__3imbX",buttons:"Users_buttons__1TWgR",follow:"Users_follow__2fcw9",unfollow:"Users_unfollow__3FA7I",avatar:"Users_avatar__1n4J8",user:"Users_user__3zAP9",rightContent:"Users_rightContent__1TefX",innerLeft:"Users_innerLeft__38_DD",innerRight:"Users_innerRight__1zpr6",name:"Users_name__29eea",status:"Users_status__3wQOm",city:"Users_city__2e9I0",country:"Users_country__35-4c"}},,function(e,t,s){e.exports={wrapper:"Navbar_wrapper__3oknN",nav:"Navbar_nav__3j_MG",item:"Navbar_item__1OyJD",activeLink:"Navbar_activeLink__2Ubgr"}},,,,,,function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__9d_03",listReset:"Dialogs_listReset__2DZjo",dialogsItems:"Dialogs_dialogsItems__3xfpV",active:"Dialogs_active__R-dH6",messages:"Dialogs_messages__32clz",messenger:"Dialogs_messenger__3HgeR",textareaWrapper:"Dialogs_textareaWrapper__18KeY",submitWrapper:"Dialogs_submitWrapper__3N8VE"}},,,,,,function(e,t,s){e.exports={dialogItem:"DialogItem_dialogItem__3VzTr",link:"DialogItem_link__2xWDI",active:"DialogItem_active__bUNsx"}},function(e,t,s){e.exports={message:"Message_message__1TnnS",user1:"Message_user1__S8wZx",user2:"Message_user2__2h3_T"}},,,,function(e,t,s){e.exports={wrapper:"ProfileInfo_wrapper__2TN9j",preview:"ProfileInfo_preview__2NOY3"}},function(e,t,s){e.exports={wrapper:"MyPosts_wrapper__3pZ18",posts:"MyPosts_posts__3GeRT"}},function(e,t,s){e.exports={title:"Friends_title__18mMj",friendsList:"Friends_friendsList__200-J"}},function(e,t,s){e.exports={item:"FriendsItem_item__2fAi-",circle:"FriendsItem_circle__1Hy3A"}},,,,function(e,t,s){},function(e,t,s){e.exports={header:"Header_header__1tXis"}},function(e,t,s){e.exports={profile:"Profile_profile__1U4Qr"}},function(e,t,s){e.exports={item:"Post_item__2ZpOe"}},function(e,t,s){e.exports={news:"News_news__3q4B5"}},function(e,t,s){e.exports={music:"Music_music__14jij"}},function(e,t,s){e.exports={settings:"Settings_settings__1Twb_"}},function(e,t,s){e.exports={siteBar:"SiteBar_siteBar__UVcXu"}},,,,,function(e,t,s){},,,,,,,function(e,t,s){"use strict";s.r(t);s(31);var a=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,52)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))},n=s(30),c=s(14),i=s(4),r=s(51),o="ADD-POST",l="UPDATE-NEW-POST-TEXT",u={posts:[{id:Object(r.a)(),message:"Hi, how are you?",likeCount:3},{id:Object(r.a)(),message:"How is your it-camasutra?",likeCount:13}],newPostText:""},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var s={id:Object(r.a)(),message:e.newPostText,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[s]),newPostText:""});case l:return Object(i.a)(Object(i.a)({},e),{},{newPostText:t.newPostText});default:return e}},d="ADD-MESSAGE",b="UPDATE-NEW-MESSAGE",m={dialogs:[{id:Object(r.a)(),name:"Dimych"},{id:Object(r.a)(),name:"Andrey"},{id:Object(r.a)(),name:"Sveta"},{id:Object(r.a)(),name:"Sasha"},{id:Object(r.a)(),name:"Viktor"},{id:Object(r.a)(),name:"Valera"}],messages:[{id:Object(r.a)(),message:"Hi!",user:1},{id:Object(r.a)(),message:"Hi!",user:2},{id:Object(r.a)(),message:"How is your it-camasutra?",user:2},{id:Object(r.a)(),message:"Perfectly",user:1},{id:Object(r.a)(),message:"It's amazing",user:2},{id:Object(r.a)(),message:"Thanks",user:1}],newMessageText:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(c.a)(e.messages),[{id:Object(r.a)(),message:e.newMessageText,user:2}]),newMessageText:""});case b:return Object(i.a)(Object(i.a)({},e),{},{newMessageText:t.newMessageText});default:return e}},O={friends:[{id:Object(r.a)(),name:"Andrew"},{id:Object(r.a)(),name:"Sasha"},{id:Object(r.a)(),name:"Sveta"}]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;return e},_="FOLLOW",g="UNFOLLOW",x="SET_USERS",h={users:[{id:Object(r.a)(),photoUrl:"https://cdna.artstation.com/p/assets/images/images/000/082/308/medium/Capface.jpg?1443930786",followed:!1,fullName:"Dmitry",status:"I am a boss",location:{city:"Minsk",country:"Belarus"}},{id:Object(r.a)(),photoUrl:"https://www.vokrug.tv/pic/person/1/0/b/a/10ba699a3bca946690a61476ad7a5a32.jpeg",followed:!0,fullName:"Sasha",status:"I am a boss too",location:{city:"Moscow",country:"Russia"}},{id:Object(r.a)(),photoUrl:"https://www.vokrug.tv/pic/person/4/c/3/8/4c385380340d56acd318cf77d7777924.jpeg",followed:!1,fullName:"Andrew",status:"I am a boss too",location:{city:"Kiev",country:"Ukraine"}}]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case g:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case x:return Object(i.a)(Object(i.a)({},e),{},{users:[].concat(Object(c.a)(e.users),Object(c.a)(t.users))});default:return e}},w=Object(n.a)({profilePage:j,dialogsPage:f,siteBar:p,usersPage:v}),N=Object(n.b)(w);window.store=N;var y=N,T=s(1),P=s.n(T),k=s(17),D=s.n(k),M=(s(43),s(32)),U=s.n(M),C=s(0),I=function(){return Object(C.jsx)("header",{className:U.a.header,children:Object(C.jsx)("img",{src:"https://www.meme-arsenal.com/memes/e207dd3d241976dcbca5fefcd1bfdc70.jpg",alt:"logo"})})},S=s(33),L=s.n(S),A=s(24),E=s.n(A),F=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:E.a.preview,children:Object(C.jsx)("img",{src:"https://playprint.ru/images/catalog/categories/category-marvel-bg.jpg",alt:"background"})}),Object(C.jsx)("div",{className:E.a.wrapper,children:"ava + description"})]})},R=s(25),W=s.n(R),z=s(34),B=s.n(z),H=function(e){return Object(C.jsxs)("div",{className:B.a.item,children:[Object(C.jsx)("img",{src:"https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png",alt:"avatar"}),e.message,Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"\u2665"})," ",e.likeCount]})]})},J=function(e){var t=e.posts.map((function(e){return Object(C.jsx)(H,{id:e.id,message:e.message,likeCount:e.likeCount},e.id)})),s=Object(T.useRef)(null);return Object(C.jsxs)("div",{className:W.a.wrapper,children:[Object(C.jsx)("h3",{children:"My posts"}),Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{children:Object(C.jsx)("textarea",{ref:s,onChange:function(){if(s.current){var t,a=null===(t=s.current)||void 0===t?void 0:t.value;e.updateNewPostText(a)}},value:e.newPostText})}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})})]}),Object(C.jsx)("div",{className:W.a.posts,children:t})]})},V=s(12),G=Object(V.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){e(function(e){return{type:l,newPostText:e}}(t))},addPost:function(){e({type:o})}}}))(J),X=function(){return Object(C.jsxs)("div",{className:L.a.profile,children:[Object(C.jsx)(F,{}),Object(C.jsx)(G,{})]})},Z=s(3),Y=s(35),K=s.n(Y),Q=function(){return Object(C.jsx)("div",{className:K.a.news,children:"News"})},q=s(36),$=s.n(q),ee=function(){return Object(C.jsx)("div",{className:$.a.music,children:"Music"})},te=s(37),se=s.n(te),ae=function(){return Object(C.jsx)("div",{className:se.a.settings,children:"Settings"})},ne=s(7),ce=s.n(ne),ie=s(11),re=s(38),oe=s.n(re),le=s(26),ue=s.n(le),je=s(27),de=s.n(je),be=function(e){return Object(C.jsxs)("li",{className:de.a.item,children:[Object(C.jsx)("div",{className:de.a.circle}),e.name]})},me=function(e){var t=e.friends.map((function(e){return Object(C.jsx)(be,{id:e.id,name:e.name},e.id)}));return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h2",{className:ue.a.title,children:"Friends"}),Object(C.jsx)("ul",{className:ue.a.friendsList,children:t})]})},fe=Object(V.b)((function(e){return{friends:e.siteBar.friends}}),{})((function(e){return Object(C.jsx)("div",{className:oe.a.siteBar,children:Object(C.jsx)(me,{friends:e.friends})})})),Oe=function(){return Object(C.jsxs)("div",{className:ce.a.wrapper,children:[Object(C.jsxs)("nav",{className:ce.a.nav,children:[Object(C.jsx)("div",{className:ce.a.item,children:Object(C.jsx)(ie.b,{to:"/profile",activeClassName:ce.a.activeLink,children:"Profile"})}),Object(C.jsx)("div",{className:"".concat(ce.a.item," ").concat(ce.a.active),children:Object(C.jsx)(ie.b,{to:"/dialogs",activeClassName:ce.a.activeLink,children:"Messages"})}),Object(C.jsx)("div",{className:ce.a.item,children:Object(C.jsx)(ie.b,{to:"/news",activeClassName:ce.a.activeLink,children:"News"})}),Object(C.jsx)("div",{className:ce.a.item,children:Object(C.jsx)(ie.b,{to:"/music",activeClassName:ce.a.activeLink,children:"Music"})}),Object(C.jsx)("div",{className:ce.a.item,children:Object(C.jsx)(ie.b,{to:"/settings",activeClassName:ce.a.activeLink,children:"Settings"})})]}),Object(C.jsx)(fe,{})]})},pe=s(13),_e=s.n(pe),ge=s(19),xe=s.n(ge),he=function(e){var t="/dialogs/".concat(e.id);return Object(C.jsx)("li",{className:xe.a.dialogItem,children:Object(C.jsxs)(ie.b,{className:xe.a.link,activeClassName:xe.a.active,to:t,children:[Object(C.jsx)("img",{width:"30px",height:"30px",src:"https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png",alt:"avatar"}),e.name]})})},ve=s(20),we=s.n(ve),Ne=function(e){var t=1===e.user?we.a.user1:we.a.user2;return Object(C.jsx)("li",{className:we.a.message+" "+t,children:e.message})},ye=function(e){var t=e.dialogsPage,s=t.dialogs.map((function(e){return Object(C.jsx)(he,{id:e.id,name:e.name},e.id)})),a=t.messages.map((function(e){return Object(C.jsx)(Ne,{id:e.id,user:e.user,message:e.message},e.id)})),n=Object(T.useRef)(null);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:_e.a.dialogs,children:[Object(C.jsx)("ul",{className:_e.a.dialogsItems+" "+_e.a.listReset,children:s}),Object(C.jsx)("ul",{className:_e.a.messages+" "+_e.a.listReset,children:a})]}),Object(C.jsxs)("div",{className:_e.a.messenger,children:[Object(C.jsx)("div",{className:_e.a.textareaWrapper,children:Object(C.jsx)("textarea",{placeholder:"...Enter your message",ref:n,value:t.newMessageText,onChange:function(){if(n.current){var t,s=null===(t=n.current)||void 0===t?void 0:t.value;e.updateNewMessageText(s)}}})}),Object(C.jsx)("div",{className:_e.a.submitWrapper,children:Object(C.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send"})})]})]})},Te=Object(V.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageText:function(t){e(function(e){return{type:b,newMessageText:e}}(t))},sendMessage:function(){e({type:"ADD-MESSAGE"})}}}))(ye),Pe=s(5),ke=s.n(Pe),De=function(e){return Object(C.jsx)("div",{className:ke.a.users,children:e.users.map((function(t){return Object(C.jsxs)("div",{className:ke.a.user,children:[Object(C.jsxs)("div",{className:ke.a.leftContent,children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{className:ke.a.avatar,src:t.photoUrl,alt:"avatar"})}),Object(C.jsx)("div",{className:ke.a.buttons,children:t.followed?Object(C.jsx)("button",{className:t.followed?ke.a.unfollow:ke.a.follow,onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(C.jsx)("button",{className:t.followed?ke.a.unfollow:ke.a.follow,onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(C.jsxs)("div",{className:ke.a.rightContent,children:[Object(C.jsxs)("div",{className:ke.a.innerLeft,children:[Object(C.jsx)("div",{className:ke.a.name,children:t.fullName}),Object(C.jsx)("div",{className:ke.a.status,children:t.status})]}),Object(C.jsxs)("div",{className:ke.a.innerRight,children:[Object(C.jsx)("div",{className:ke.a.country,children:t.location.country}),Object(C.jsx)("div",{className:ke.a.city,children:t.location.city})]})]})]},t.id)}))})},Me=Object(V.b)((function(e){return{users:e.usersPage.users}}),(function(e){return{follow:function(t){e(function(e){return{type:_,userID:e}}(t))},unfollow:function(t){e(function(e){return{type:g,userID:e}}(t))},setUsers:function(t){e(function(e){return{type:x,users:e}}(t))}}}))(De),Ue=function(){return Object(C.jsxs)("div",{className:"app-wrapper",children:[Object(C.jsx)(I,{}),Object(C.jsx)(Oe,{}),Object(C.jsxs)("div",{className:"app-wrapper-content",children:[Object(C.jsx)(Z.a,{path:"/dialogs",render:function(){return Object(C.jsx)(Te,{})}}),Object(C.jsx)(Z.a,{path:"/profile",render:function(){return Object(C.jsx)(X,{})}}),Object(C.jsx)(Z.a,{path:"/news",render:function(){return Object(C.jsx)(Q,{})}}),Object(C.jsx)(Z.a,{path:"/music",render:function(){return Object(C.jsx)(ee,{})}}),Object(C.jsx)(Z.a,{path:"/settings",render:function(){return Object(C.jsx)(ae,{})}}),Object(C.jsx)(Z.a,{path:"/users",render:function(){return Object(C.jsx)(Me,{})}})]})]})};D.a.render(Object(C.jsx)(P.a.StrictMode,{children:Object(C.jsx)(ie.a,{children:Object(C.jsx)(V.a,{store:y,children:Object(C.jsx)(Ue,{})})})}),document.getElementById("root")),a()}],[[50,1,2]]]);
//# sourceMappingURL=main.f8f11993.chunk.js.map