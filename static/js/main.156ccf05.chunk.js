(this["webpackJsonpreact-way-of-samurai-ts"]=this["webpackJsonpreact-way-of-samurai-ts"]||[]).push([[0],[,,,,function(e,s,a){e.exports={wrapper:"Navbar_wrapper__3oknN",nav:"Navbar_nav__3j_MG",item:"Navbar_item__1OyJD",activeLink:"Navbar_activeLink__2Ubgr"}},,,,,function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__9d_03",listReset:"Dialogs_listReset__2DZjo",dialogsItems:"Dialogs_dialogsItems__3xfpV",active:"Dialogs_active__R-dH6",messages:"Dialogs_messages__32clz",messenger:"Dialogs_messenger__3HgeR",textareaWrapper:"Dialogs_textareaWrapper__18KeY",submitWrapper:"Dialogs_submitWrapper__3N8VE"}},,,function(e,s,a){e.exports={dialogItem:"DialogItem_dialogItem__3VzTr",link:"DialogItem_link__2xWDI",active:"DialogItem_active__bUNsx"}},function(e,s,a){e.exports={message:"Message_message__1TnnS",user1:"Message_user1__S8wZx",user2:"Message_user2__2h3_T"}},,,function(e,s,a){e.exports={wrapper:"MyPosts_wrapper__3pZ18",posts:"MyPosts_posts__3GeRT"}},function(e,s,a){e.exports={wrapper:"ProfileInfo_wrapper__2TN9j",preview:"ProfileInfo_preview__2NOY3"}},,,function(e,s,a){e.exports={title:"Friends_title__18mMj",friendsList:"Friends_friendsList__200-J"}},function(e,s,a){e.exports={item:"FriendsItem_item__2fAi-",circle:"FriendsItem_circle__1Hy3A"}},,,function(e,s,a){e.exports={header:"Header_header__1tXis"}},function(e,s,a){e.exports={profile:"Profile_profile__1U4Qr"}},function(e,s,a){e.exports={item:"Post_item__2ZpOe"}},,function(e,s,a){e.exports={news:"News_news__3q4B5"}},function(e,s,a){e.exports={music:"Music_music__14jij"}},function(e,s,a){e.exports={settings:"Settings_settings__1Twb_"}},function(e,s,a){e.exports={siteBar:"SiteBar_siteBar__UVcXu"}},,,,,function(e,s,a){},function(e,s,a){},,,,,,,function(e,s,a){"use strict";a.r(s);var t=a(1),i=a.n(t),n=a(23),c=a.n(n),r=(a(36),a(37),a(24)),d=a.n(r),l=a(0),j=function(){return Object(l.jsx)("header",{className:d.a.header,children:Object(l.jsx)("img",{src:"https://www.meme-arsenal.com/memes/e207dd3d241976dcbca5fefcd1bfdc70.jpg",alt:"logo"})})},o=a(25),u=a.n(o),m=a(16),b=a.n(m),p=a(26),g=a.n(p),x=function(e){return Object(l.jsxs)("div",{className:g.a.item,children:[Object(l.jsx)("img",{src:"https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png",alt:"avatar"}),e.message,Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"\u2665"})," ",e.likeCount]})]})},_=function(e){var s=e.posts.map((function(e){return Object(l.jsx)(x,{message:e.message,likeCount:e.likeCount})})),a=Object(t.useRef)(null);return Object(l.jsxs)("div",{className:b.a.wrapper,children:[Object(l.jsx)("h3",{children:"My posts"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{ref:a})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){var s;a.current&&(s=a.current.value),e.addPost(s)},children:"Add post"})})]}),Object(l.jsx)("div",{className:b.a.posts,children:s})]})},O=a(17),f=a.n(O),h=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:f.a.preview,children:Object(l.jsx)("img",{src:"https://playprint.ru/images/catalog/categories/category-marvel-bg.jpg",alt:"background"})}),Object(l.jsx)("div",{className:f.a.wrapper,children:"ava + description"})]})},v=function(e){return Object(l.jsxs)("div",{className:u.a.profile,children:[Object(l.jsx)(h,{}),Object(l.jsx)(_,{posts:e.posts,addPost:e.addPost})]})},N=a(9),w=a.n(N),k=a(8),P=a(12),C=a.n(P),I=function(e){var s="/dialogs/".concat(e.id);return Object(l.jsx)("li",{className:C.a.dialogItem,children:Object(l.jsxs)(k.b,{className:C.a.link,activeClassName:C.a.active,to:s,children:[Object(l.jsx)("img",{width:"30px",height:"30px",src:"https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png",alt:"avatar"}),e.name]})})},M=a(13),y=a.n(M),D=function(e){var s=1===e.user?y.a.user1:y.a.user2;return Object(l.jsx)("li",{className:y.a.message+" "+s,children:e.message})},S=function(e){var s=e.dialogs.map((function(e){return Object(l.jsx)(I,{id:e.id,name:e.name})})),a=e.messages.map((function(e){return Object(l.jsx)(D,{user:e.user,message:e.message})})),i=Object(t.useRef)(null);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:w.a.dialogs,children:[Object(l.jsx)("ul",{className:w.a.dialogsItems+" "+w.a.listReset,children:s}),Object(l.jsx)("ul",{className:w.a.messages+" "+w.a.listReset,children:a})]}),Object(l.jsxs)("div",{className:w.a.messenger,children:[Object(l.jsx)("div",{className:w.a.textareaWrapper,children:Object(l.jsx)("textarea",{ref:i})}),Object(l.jsx)("div",{className:w.a.submitWrapper,children:Object(l.jsx)("button",{onClick:function(){var s;i.current&&(s=i.current.value),e.addMessage(s)},children:"Send"})})]})]})},L=a(2),F=a(28),B=a.n(F),H=function(){return Object(l.jsx)("div",{className:B.a.news,children:"News"})},R=a(29),T=a.n(R),z=function(){return Object(l.jsx)("div",{className:T.a.music,children:"Music"})},W=a(30),V=a.n(W),A=function(){return Object(l.jsx)("div",{className:V.a.settings,children:"Settings"})},J=a(4),U=a.n(J),Z=a(31),E=a.n(Z),G=a(20),X=a.n(G),Y=a(21),q=a.n(Y),K=function(e){return Object(l.jsxs)("li",{className:q.a.item,children:[Object(l.jsx)("div",{className:q.a.circle}),e.name]})},Q=function(e){var s=e.friends.map((function(e){return Object(l.jsx)(K,{id:e.id,name:e.name})}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:X.a.title,children:"Friends"}),Object(l.jsx)("ul",{className:X.a.friendsList,children:s})]})},$=function(e){return Object(l.jsx)("div",{className:E.a.siteBar,children:Object(l.jsx)(Q,{friends:e.friends})})},ee=function(e){return Object(l.jsxs)("div",{className:U.a.wrapper,children:[Object(l.jsxs)("nav",{className:U.a.nav,children:[Object(l.jsx)("div",{className:U.a.item,children:Object(l.jsx)(k.b,{to:"/profile",activeClassName:U.a.activeLink,children:"Profile"})}),Object(l.jsx)("div",{className:"".concat(U.a.item," ").concat(U.a.active),children:Object(l.jsx)(k.b,{to:"/dialogs",activeClassName:U.a.activeLink,children:"Messages"})}),Object(l.jsx)("div",{className:U.a.item,children:Object(l.jsx)(k.b,{to:"/news",activeClassName:U.a.activeLink,children:"News"})}),Object(l.jsx)("div",{className:U.a.item,children:Object(l.jsx)(k.b,{to:"/music",activeClassName:U.a.activeLink,children:"Music"})}),Object(l.jsx)("div",{className:U.a.item,children:Object(l.jsx)(k.b,{to:"/settings",activeClassName:U.a.activeLink,children:"Settings"})})]}),Object(l.jsx)($,{friends:e.friends})]})},se=function(e){return Object(l.jsxs)("div",{className:"app-wrapper",children:[Object(l.jsx)(j,{}),Object(l.jsx)(ee,{friends:e.state.siteBar.friends}),Object(l.jsxs)("div",{className:"app-wrapper-content",children:[Object(l.jsx)(L.a,{path:"/dialogs",render:function(){return Object(l.jsx)(S,{dialogs:e.state.dialogsPage.dialogs,messages:e.state.dialogsPage.messages,addMessage:e.addMessage})}}),Object(l.jsx)(L.a,{path:"/profile",render:function(){return Object(l.jsx)(v,{posts:e.state.profilePage.posts,addPost:e.addPost})}}),Object(l.jsx)(L.a,{path:"/news",render:function(){return Object(l.jsx)(H,{})}}),Object(l.jsx)(L.a,{path:"/music",render:function(){return Object(l.jsx)(z,{})}}),Object(l.jsx)(L.a,{path:"/settings",render:function(){return Object(l.jsx)(A,{})}})]})]})},ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(s){var a=s.getCLS,t=s.getFID,i=s.getFCP,n=s.getLCP,c=s.getTTFB;a(e),t(e),i(e),n(e),c(e)}))},te=a(46),ie={profilePage:{posts:[{id:Object(te.a)(),message:"Hi, how are you?",likeCount:3},{id:Object(te.a)(),message:"How is your it-camasutra?",likeCount:13}]},dialogsPage:{dialogs:[{id:Object(te.a)(),name:"Dimych"},{id:Object(te.a)(),name:"Andrey"},{id:Object(te.a)(),name:"Sveta"},{id:Object(te.a)(),name:"Sasha"},{id:Object(te.a)(),name:"Viktor"},{id:Object(te.a)(),name:"Valera"}],messages:[{id:Object(te.a)(),message:"Hi!",user:1},{id:Object(te.a)(),message:"Hi!",user:2},{id:Object(te.a)(),message:"How is your it-camasutra?",user:2},{id:Object(te.a)(),message:"Perfectly",user:1},{id:Object(te.a)(),message:"It's amazing",user:2},{id:Object(te.a)(),message:"Thanks",user:1}]},siteBar:{friends:[{id:Object(te.a)(),name:"Andrew"},{id:Object(te.a)(),name:"Sasha"},{id:Object(te.a)(),name:"Sveta"}]}},ne=ie;c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(k.a,{children:Object(l.jsx)(se,{state:ne,addPost:function(e){var s={id:Object(te.a)(),message:e,likeCount:0};ie.profilePage.posts.push(s)},addMessage:function(e){var s={id:Object(te.a)(),message:e,user:2};ie.dialogsPage.messages.push(s)}})})}),document.getElementById("root")),ae()}],[[44,1,2]]]);
//# sourceMappingURL=main.156ccf05.chunk.js.map