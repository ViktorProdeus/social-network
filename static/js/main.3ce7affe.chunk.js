(this["webpackJsonpreact-way-of-samurai-ts"]=this["webpackJsonpreact-way-of-samurai-ts"]||[]).push([[0],{16:function(e,s,t){e.exports={wrapper:"MyPosts_wrapper__3pZ18",posts:"MyPosts_posts__3GeRT"}},17:function(e,s,t){e.exports={wrapper:"ProfileInfo_wrapper__2TN9j",preview:"ProfileInfo_preview__2NOY3"}},20:function(e,s,t){e.exports={header:"Header_header__1tXis"}},22:function(e,s,t){e.exports={item:"Post_item__2ZpOe"}},27:function(e,s,t){},28:function(e,s,t){},35:function(e,s,t){"use strict";t.r(s);var a=t(1),i=t.n(a),c=t(19),n=t.n(c),r=(t(27),t(28),t(20)),j=t.n(r),d=t(0),o=function(){return Object(d.jsx)("header",{className:j.a.header,children:Object(d.jsx)("img",{src:"https://www.meme-arsenal.com/memes/e207dd3d241976dcbca5fefcd1bfdc70.jpg",alt:"logo"})})},l=t(6),m=t.n(l),u=t(8),b=function(){return Object(d.jsxs)("nav",{className:m.a.nav,children:[Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(u.b,{to:"/profile",activeClassName:m.a.activeLink,children:"Profile"})}),Object(d.jsx)("div",{className:"".concat(m.a.item," ").concat(m.a.active),children:Object(d.jsx)(u.b,{to:"/dialogs",activeClassName:m.a.activeLink,children:"Messages"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(u.b,{to:"/news",activeClassName:m.a.activeLink,children:"News"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(u.b,{to:"/music",activeClassName:m.a.activeLink,children:"Music"})}),Object(d.jsx)("div",{className:m.a.item,children:Object(d.jsx)(u.b,{to:"/settings",activeClassName:m.a.activeLink,children:"Settings"})})]})},x=t(16),p=t.n(x),O=t(22),h=t.n(O),g=function(e){return Object(d.jsxs)("div",{className:h.a.item,children:[Object(d.jsx)("img",{src:"https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png",alt:"avatar"}),e.message,Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"\u2665"})," ",e.likeCount]})]})},v=function(){var e=[{id:1,message:"Hi, how are you?",likeCount:3},{id:2,message:"How is your it-camasutra?",likeCount:13}].map((function(e){return Object(d.jsx)(g,{message:e.message,likeCount:e.likeCount})}));return Object(d.jsxs)("div",{className:p.a.wrapper,children:[Object(d.jsx)("h3",{children:"My posts"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("textarea",{})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Add post"})})]}),Object(d.jsx)("div",{className:p.a.posts,children:e})]})},f=t(17),_=t.n(f),N=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:_.a.preview,children:Object(d.jsx)("img",{src:"https://playprint.ru/images/catalog/categories/category-marvel-bg.jpg",alt:"background"})}),Object(d.jsx)("div",{className:_.a.wrapper,children:"ava + description"})]})},w=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(N,{}),Object(d.jsx)(v,{})]})},k=t(9),y=t.n(k),C=function(e){var s="/dialogs/".concat(e.id);return Object(d.jsx)("li",{className:y.a.dialog+" "+y.a.active,children:Object(d.jsx)(u.b,{to:s,children:e.name})})},D=function(e){return Object(d.jsx)("li",{className:y.a.message,children:e.message})},L=function(){var e=[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}].map((function(e){return Object(d.jsx)(C,{id:e.id,name:e.name})})),s=[{id:1,message:"Hi!"},{id:2,message:"How is your it-camasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"},{id:6,message:"Yo"}].map((function(e){return Object(d.jsx)(D,{message:e.message})}));return Object(d.jsxs)("div",{className:y.a.dialogs,children:[Object(d.jsx)("ul",{className:y.a.dialogsItems+" "+y.a.listReset,children:e}),Object(d.jsx)("ul",{className:y.a.messages+" "+y.a.listReset,children:s})]})},M=t(2),P=function(){return Object(d.jsx)("div",{children:"News"})},I=function(){return Object(d.jsx)("div",{children:"Music"})},H=function(){return Object(d.jsx)("div",{children:"Settings"})},R=function(){return Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(o,{}),Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"app-wrapper-content",children:[Object(d.jsx)(M.a,{path:"/dialogs",render:function(){return Object(d.jsx)(L,{})}}),Object(d.jsx)(M.a,{path:"/profile",render:function(){return Object(d.jsx)(w,{})}}),Object(d.jsx)(M.a,{path:"/news",render:function(){return Object(d.jsx)(P,{})}}),Object(d.jsx)(M.a,{path:"/music",render:function(){return Object(d.jsx)(I,{})}}),Object(d.jsx)(M.a,{path:"/settings",render:function(){return Object(d.jsx)(H,{})}})]})]})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(s){var t=s.getCLS,a=s.getFID,i=s.getFCP,c=s.getLCP,n=s.getTTFB;t(e),a(e),i(e),c(e),n(e)}))};n.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root")),S()},6:function(e,s,t){e.exports={nav:"Navbar_nav__3j_MG",item:"Navbar_item__1OyJD",activeLink:"Navbar_activeLink__2Ubgr"}},9:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__9d_03",listReset:"Dialogs_listReset__2DZjo",dialogsItems:"Dialogs_dialogsItems__3xfpV",active:"Dialogs_active__R-dH6",messages:"Dialogs_messages__32clz"}}},[[35,1,2]]]);
//# sourceMappingURL=main.3ce7affe.chunk.js.map