(this["webpackJsonpreact-way-of-samurai-ts"]=this["webpackJsonpreact-way-of-samurai-ts"]||[]).push([[0],{16:function(e,s,t){e.exports={wrapper:"MyPosts_wrapper__3pZ18",posts:"MyPosts_posts__3GeRT"}},17:function(e,s,t){e.exports={wrapper:"ProfileInfo_wrapper__2TN9j",preview:"ProfileInfo_preview__2NOY3"}},20:function(e,s,t){e.exports={header:"Header_header__1tXis"}},22:function(e,s,t){e.exports={item:"Post_item__2ZpOe"}},27:function(e,s,t){},28:function(e,s,t){},35:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),i=t(19),n=t.n(i),r=(t(27),t(28),t(20)),j=t.n(r),o=t(0),l=function(){return Object(o.jsx)("header",{className:j.a.header,children:Object(o.jsx)("img",{src:"https://www.meme-arsenal.com/memes/e207dd3d241976dcbca5fefcd1bfdc70.jpg",alt:"logo"})})},d=t(6),b=t.n(d),x=t(8),m=function(){return Object(o.jsxs)("nav",{className:b.a.nav,children:[Object(o.jsx)("div",{className:b.a.item,children:Object(o.jsx)(x.b,{to:"/profile",activeClassName:b.a.activeLink,children:"Profile"})}),Object(o.jsx)("div",{className:"".concat(b.a.item," ").concat(b.a.active),children:Object(o.jsx)(x.b,{to:"/dialogs",activeClassName:b.a.activeLink,children:"Messages"})}),Object(o.jsx)("div",{className:b.a.item,children:Object(o.jsx)(x.b,{to:"/news",activeClassName:b.a.activeLink,children:"News"})}),Object(o.jsx)("div",{className:b.a.item,children:Object(o.jsx)(x.b,{to:"/music",activeClassName:b.a.activeLink,children:"Music"})}),Object(o.jsx)("div",{className:b.a.item,children:Object(o.jsx)(x.b,{to:"/settings",activeClassName:b.a.activeLink,children:"Settings"})})]})},O=t(16),u=t.n(O),p=t(22),h=t.n(p),v=function(e){return Object(o.jsxs)("div",{className:h.a.item,children:[Object(o.jsx)("img",{src:"https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png",alt:"avatar"}),e.message,Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"\u2665"})," ",e.likeCount]})]})},g=function(){return Object(o.jsxs)("div",{className:u.a.wrapper,children:[Object(o.jsx)("h3",{children:"My posts"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"Add post"})})]}),Object(o.jsxs)("div",{className:u.a.posts,children:[Object(o.jsx)(v,{message:"Hi, how are you?",likeCount:3}),Object(o.jsx)(v,{message:"It's my first post",likeCount:13})]})]})},f=t(17),_=t.n(f),N=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:_.a.preview,children:Object(o.jsx)("img",{src:"https://playprint.ru/images/catalog/categories/category-marvel-bg.jpg",alt:"background"})}),Object(o.jsx)("div",{className:_.a.wrapper,children:"ava + description"})]})},w=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(N,{}),Object(o.jsx)(g,{})]})},k=t(9),y=t.n(k),C=function(e){var s="/dialogs/".concat(e.id);return Object(o.jsx)("li",{className:y.a.dialog+" "+y.a.active,children:Object(o.jsx)(x.b,{to:s,children:e.name})})},D=function(e){return Object(o.jsx)("li",{className:y.a.message,children:e.message})},L=function(){return Object(o.jsxs)("div",{className:y.a.dialogs,children:[Object(o.jsxs)("ul",{className:y.a.dialogsItems+" "+y.a.listReset,children:[Object(o.jsx)(C,{id:1,name:"Dimych"}),Object(o.jsx)(C,{id:2,name:"Andrey"}),Object(o.jsx)(C,{id:3,name:"Sveta"}),Object(o.jsx)(C,{id:4,name:"Sasha"}),Object(o.jsx)(C,{id:5,name:"Viktor"}),Object(o.jsx)(C,{id:6,name:"Valera"})]}),Object(o.jsxs)("ul",{className:y.a.messages+" "+y.a.listReset,children:[Object(o.jsx)(D,{message:"Hi!"}),Object(o.jsx)(D,{message:"How is your it-camasutra?"}),Object(o.jsx)(D,{message:"Yo"}),Object(o.jsx)(D,{message:"Yo"}),Object(o.jsx)(D,{message:"Yo"}),Object(o.jsx)(D,{message:"Yo"})]})]})},I=t(2),M=function(){return Object(o.jsx)("div",{children:"News"})},P=function(){return Object(o.jsx)("div",{children:"Music"})},R=function(){return Object(o.jsx)("div",{children:"Settings"})},S=function(){return Object(o.jsx)(x.a,{children:Object(o.jsxs)("div",{className:"app-wrapper",children:[Object(o.jsx)(l,{}),Object(o.jsx)(m,{}),Object(o.jsxs)("div",{className:"app-wrapper-content",children:[Object(o.jsx)(I.a,{path:"/dialogs",render:function(){return Object(o.jsx)(L,{})}}),Object(o.jsx)(I.a,{path:"/profile",render:function(){return Object(o.jsx)(w,{})}}),Object(o.jsx)(I.a,{path:"/news",render:function(){return Object(o.jsx)(M,{})}}),Object(o.jsx)(I.a,{path:"/music",render:function(){return Object(o.jsx)(P,{})}}),Object(o.jsx)(I.a,{path:"/settings",render:function(){return Object(o.jsx)(R,{})}})]})]})})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,i=s.getLCP,n=s.getTTFB;t(e),a(e),c(e),i(e),n(e)}))};n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root")),H()},6:function(e,s,t){e.exports={nav:"Navbar_nav__3j_MG",item:"Navbar_item__1OyJD",activeLink:"Navbar_activeLink__2Ubgr"}},9:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__9d_03",listReset:"Dialogs_listReset__2DZjo",dialogsItems:"Dialogs_dialogsItems__3xfpV",active:"Dialogs_active__R-dH6",messages:"Dialogs_messages__32clz"}}},[[35,1,2]]]);
//# sourceMappingURL=main.3923d331.chunk.js.map