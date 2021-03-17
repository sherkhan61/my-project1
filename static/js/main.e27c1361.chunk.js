(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(48),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"11f6f6da-a19a-4694-bc7f-68eb9e84e954"}}),c={me:function(){return r.get("/auth/me").then((function(e){if(0===e.data.resultCode)return e.data.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login")}},o={getProfile:function(e){return r.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("newPhoto",e),r.put("/profile/photo",t).then((function(e){if(0===e.data.resultCode)return e.data}))},saveProfile:function(e){return r.put("/profile/",e).then((function(e){return e}))}},s={getCaptchaUrl:function(){return r.get("security/get-captcha-url").then((function(e){return e.data}))}},u={getUsers:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return r.get("users?count=".concat(e,"&page=").concat(t,"&friend=").concat(n,"&term=").concat(a)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},isFollowed:function(e){return r.get("follow/".concat(e)).then((function(e){return e.data}))}},l={"messages-received":[],"status-changed":[]},i=null,f=function(){E("pending"),setTimeout(h,3e3)},m=function(e){var t=JSON.parse(e.data);l["messages-received"].forEach((function(e){return e(t)}))},d=function(){E("ready")},p=function(){E("error"),console.error("REFRESH PAGE")},_=function(){var e,t,n,a;null===(e=i)||void 0===e||e.removeEventListener("close",f),null===(t=i)||void 0===t||t.removeEventListener("message",m),null===(n=i)||void 0===n||n.removeEventListener("open",d),null===(a=i)||void 0===a||a.removeEventListener("error",p)},E=function(e){l["status-changed"].forEach((function(t){return t(e)}))};function h(){var e;_(),null===(e=i)||void 0===e||e.close(),i=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),E("pending"),i.addEventListener("close",f),i.addEventListener("message",m),i.addEventListener("open",d),i.addEventListener("error",p)}var g={start:function(){h()},stop:function(){var e;l["messages-received"]=[],l["status-changed"]=[],_(),null===(e=i)||void 0===e||e.close()},subscribe:function(e,t){return l[e].push(t),function(){l[e]=l[e].filter((function(e){return e!==t}))}},unsubscribe:function(e,t){l[e]=l[e].filter((function(e){return e!==t}))},sendMessage:function(e){var t;null===(t=i)||void 0===t||t.send(e)}}},,,,,,,,function(e,t,n){"use strict";n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(6),r=n(2),c=n.n(r),o=n(7),s=n(8),u={followSuccess:function(e){return{type:"SN/USERS/FOLLOW",userId:e}},unfollowSuccess:function(e){return{type:"SN/USERS/UNFOLLOW",userId:e}},setUsers:function(e){return{type:"SN/USERS/SET_USERS",users:e}},setFriends:function(e){return{type:"SN/USERS/SET_FRIENDS",friends:e}},setCurrentPage:function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},setTotalUsersCount:function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},toggleIsFetching:function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},toggleIsFollowingProgress:function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}}},l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3?arguments[3]:void 0;return function(){var r=Object(o.a)(c.a.mark((function r(o){var l;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o(u.toggleIsFetching(!0)),o(u.setCurrentPage(e)),r.next=4,s.e.getUsers(e,t,n,a);case 4:l=r.sent,o(u.toggleIsFetching(!1)),o(u.setUsers(l.items)),o(u.setTotalUsersCount(l.totalCount));case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},i=function(){var e=Object(o.a)(c.a.mark((function e(t,n,a,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(u.toggleIsFollowingProgress(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(r(n)),t(u.toggleIsFollowingProgress(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),f=function(e){return function(){var t=Object(o.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(n,e,s.e.follow.bind(s.e),u.followSuccess);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(n,e,s.e.unfollow.bind(s.e),u.unfollowSuccess);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(c.a.mark((function t(n,r){var o,l,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(u.toggleIsFetching(!0)),t.next=3,s.e.getUsers(r().usersPage.pageSize,r().usersPage.currentPage/2,!0,e);case 3:return o=t.sent,t.next=6,s.e.getUsers(r().usersPage.pageSize,r().usersPage.currentPage/2,!1,e);case 6:l=t.sent,i=[].concat(Object(a.a)(o.items),Object(a.a)(l.items)),n(u.setUsers(i)),n(u.setTotalUsersCount(i.length)),n(u.toggleIsFetching(!1));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},p=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var a=Object(o.a)(c.a.mark((function a(r){var o;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.e.getUsers(e,t,n);case 2:o=a.sent,r(u.setFriends(o.items));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},,function(e,t,n){e.exports={paginator_wrapper:"Paginator_paginator_wrapper__3n-gQ",paginator:"Paginator_paginator__1kcEK",pageNumber:"Paginator_pageNumber__2tS1b",selectedPage:"Paginator_selectedPage__2BPuB",icon:"Paginator_icon__FWlwL",arrow:"Paginator_arrow__1rxH3",left:"Paginator_left__3UDzl"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var a=n(0),r=n.n(a),c=n(39),o=n.n(c),s=n(4),u=n(16),l=n(21),i=n(22),f=n.n(i),m=n(9),d=function(e){var t=e.children,n=e.clearPage,a=e.clearMusicSearch,c=document.documentElement.clientWidth<=860;return r.a.createElement("div",{className:f.a.container},r.a.createElement("nav",null,r.a.createElement("ul",{className:f.a["mcd-menu"]},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/profile",activeClassName:f.a.active},r.a.createElement("i",{className:"fa fa-home"}),r.a.createElement("strong",null,"Profile"),r.a.createElement("small",null,"your story"))),r.a.createElement("li",{onClick:n},r.a.createElement(m.c,{to:c?"/friends":"/users",activeClassName:f.a.active},r.a.createElement("i",{className:"fa fa-users"}),r.a.createElement("strong",null,"Users"),r.a.createElement("small",null,"our developers"))),r.a.createElement("li",{className:f.a.dialogs_link},r.a.createElement(m.c,{to:"/chat",activeClassName:f.a.active},r.a.createElement("i",{className:"fa fa-comments-o"}),r.a.createElement("strong",null,"Chat"),r.a.createElement("small",null,"your chat"))),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/news",activeClassName:f.a.active},r.a.createElement("i",{className:"fa fa-globe"}),r.a.createElement("strong",null,"News"),r.a.createElement("small",null,"breaking news"))),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/music",activeClassName:f.a.active,onClick:a},r.a.createElement("i",{className:"fa fa-music"}),r.a.createElement("strong",null,"Music"),r.a.createElement("small",null,"deezer chart"))))),t)},p=n(46),_=n.n(p),E=function(){return r.a.createElement("footer",{className:_.a.footer},r.a.createElement("p",{className:_.a.footer_content},"Sherkhan Tulkibay \xa9 2021. All rights are not reserved"))},h=n(34),g=n.n(h),b=n(64),v=n.n(b),S=function(e){var t=e.children;return r.a.createElement("header",{className:g.a.header},r.a.createElement("div",{className:g.a.header_content},r.a.createElement("div",{className:g.a.logo_wrapper},r.a.createElement("img",{className:g.a.header_logo,alt:"logo",src:v.a}),t[0]),t[1]))},O=n(10),w=n(38),N=n.n(w),j=n(31),P=n.n(j),U=n(65),y=n.n(U),C=n(30),F=function(e){var t=e.isMobile,n=Object(s.d)();return r.a.createElement("li",{className:t?"":y.a.logout,onClick:function(){return n(Object(C.c)())}},r.a.createElement("i",{className:"fa fa-sign-out","aria-hidden":"true"}),"Logout")},I=r.a.forwardRef((function(e,t){var n=e.onDropdown,a=e.children,c=Object(s.e)((function(e){var t;return{userName:e.auth.user.fullName,userPhoto:null===(t=e.auth.user.photos)||void 0===t?void 0:t.small}}),s.c),o=c.userName,u=c.userPhoto,l=document.documentElement.clientWidth<=480;return r.a.createElement(r.a.Fragment,null,l?r.a.createElement(F,{isMobile:l}):r.a.createElement("div",{ref:t,className:P.a.userInfo,onClick:n},r.a.createElement("span",{className:P.a.userInfo_name},o),r.a.createElement("div",{className:P.a.userInfo_photo},r.a.createElement("img",{alt:"user_photo",src:u})),a))})),x=n(66),T=n.n(x),L=function(){return r.a.createElement("div",{className:T.a.sign_in},r.a.createElement(m.c,{className:P.a.login_link,to:"/login"},"Login"),r.a.createElement("i",{className:"fa fa-sign-in","aria-hidden":"true"}))},R=n(3),k=r.a.forwardRef((function(e,t){e.isVisible;var n=document.documentElement.clientWidth<=860,a=Object(R.j)("/profile");return r.a.createElement("ul",{ref:t,className:N.a.dropdown},a?null:r.a.createElement("li",null,r.a.createElement(m.b,{to:"/profile"},"My profile")),r.a.createElement(F,{isMobile:n}))})),A=function(){var e=Object(a.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1],o=Object(s.e)((function(e){return e.auth.isAuth})),u=Object(a.useRef)(null),l=Object(a.useRef)(null),i=Object(a.useCallback)((function(e){e.target.closest("."+N.a.dropdown)||(c(!1),u.current.style.background="",l.current.style.opacity="0",l.current.style.visibility="hidden"),document.removeEventListener("click",i)}),[]);return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(I,{ref:u,onDropdown:function(){u.current.style.background="#1e1e1e",l.current.style.visibility="visible",l.current.style.opacity="0.9",document.addEventListener("click",i)}},r.a.createElement(k,{isVisible:n,ref:l})):r.a.createElement(L,null))},M=function(e){var t=e.children,n=e.clearMusicSearch,a=Object(s.d)(),c=function(){a(u.f.setCurrentPage(1))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null,r.a.createElement(l.b,null),r.a.createElement(A,null)),r.a.createElement("div",{className:o.a.app_wrapper},r.a.createElement("div",{className:o.a.content_wrapper},r.a.createElement(d,{clearPage:c,clearMusicSearch:n},r.a.createElement(l.a,{clearPage:c})),r.a.createElement("main",{className:o.a.app_content},t)),r.a.createElement(E,null)))}},function(e,t,n){e.exports={common_input:"LoginForm_common_input__1GhB-",send_btn:"LoginForm_send_btn__2o1l2",switch:"LoginForm_switch__2Bnre",input_error:"LoginForm_input_error__SEroT",error:"LoginForm_error__PnKPK",span_error:"LoginForm_span_error__1LIow"}},function(e,t,n){"use strict";n.d(t,"c",(function(){return F})),n.d(t,"a",(function(){return L})),n.d(t,"b",(function(){return M}));var a=n(0),r=n.n(a),c=n(4),o=n(42),s=n.n(o),u=n(3),l=function(e){return e.usersPage.users},i=function(e){return e.usersPage.pageSize},f=function(e){return e.usersPage.totalUsersCount},m=function(e){return e.usersPage.currentPage},d=function(e){return e.usersPage.isFetching},p=function(e){return e.usersPage.followingInProgress},_=n(16),E=n(9),h=n(26),g=n.n(h),b=n(37),v=n.n(b),S=n(43),O=n.n(S),w=function(e){var t=e.followed,n=e.isFollowing,a=e.id,o=Object(c.d)();return t?r.a.createElement("button",{className:O.a.followBtn,disabled:n.some((function(e){return e===a})),onClick:function(){!function(e){o(Object(_.e)(e))}(a)}},"Unfollow"):r.a.createElement("button",{className:O.a.followBtn,disabled:n.some((function(e){return e===a})),onClick:function(){!function(e){o(Object(_.a)(e))}(a)}},"Follow")},N=function(e){var t=e.status,n=e.isAuth,a=e.id,c=e.photo,o=e.fullName,s=e.followed,u=e.isFollowing;return t&&t.length>30&&(t=t.trim().substr(0,30)+". . ."),r.a.createElement("div",{className:g.a.user,key:a},r.a.createElement("div",{className:g.a.user_info},r.a.createElement("div",{className:g.a.user_photo},r.a.createElement(E.c,{to:"/profile/".concat(a)},r.a.createElement("img",{src:c||v.a,alt:"avatar"}))),r.a.createElement("div",null,r.a.createElement("p",null,o),r.a.createElement("p",{className:g.a.user_info_status},t))),r.a.createElement("div",{className:g.a.btn_container},n?r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{followed:s,isFollowing:u,id:a}),r.a.createElement(E.b,{to:"/dialogs/".concat(a)},r.a.createElement("button",{className:g.a.sendMsg_btn},"Send Message"))," "):""))},j=n(10),P=n(18),U=n.n(P),y=function(e){var t=e.portionSize,n=void 0===t?10:t,c=e.totalUsersCount,o=e.pageSize,s=e.currentPage,u=e.onPageChanged;document.documentElement.clientWidth<=480&&(n=5);for(var l=Math.ceil(c/o),i=[],f=1;f<=l;f++)i.push(f);var m=Math.ceil(l/n),d=Object(a.useState)(Math.ceil(s/n)),p=Object(j.a)(d,2),_=p[0],E=p[1],h=(_-1)*n+1,g=_*n,b=i.filter((function(e){return e>=h&&e<=g})).map((function(e){return r.a.createElement("span",{className:e===s?"".concat(U.a.pageNumber," ").concat(U.a.selectedPage):U.a.pageNumber,key:e,onClick:function(){u(e)}},e)})),v=function(e,t){E(_+t)};return r.a.createElement("div",{className:U.a.paginator_wrapper},r.a.createElement("div",{className:U.a.paginator},_>1&&r.a.createElement("div",{onClick:function(e){return v(0,-1)},className:"".concat(U.a.icon," ").concat(U.a.left)},r.a.createElement("div",{className:U.a.arrow})),b,m>_&&r.a.createElement("div",{onClick:function(e){return v(0,1)},className:U.a.icon},r.a.createElement("div",{className:U.a.arrow}))))},C=n(23),F=function(){var e=Object(u.h)().pathname,t="/friends"===e,n=Object(u.i)().term,o=Object(c.e)((function(e){return{users:l(e),pageSize:i(e),totalUsersCount:f(e),currentPage:m(e),isFetching:d(e),isFollowing:p(e),isAuth:e.auth.isAuth}}),c.c),E=o.users,h=o.pageSize,g=o.totalUsersCount,b=o.currentPage,v=o.isFetching,S=o.isFollowing,O=o.isAuth,w=Object(c.d)();Object(a.useEffect)((function(){e.startsWith("/search/")?w(Object(_.d)(n)):w(Object(_.c)(h,b,t))}),[b,h,w,e,t,n]);var j=E.map((function(e){return r.a.createElement(N,{key:e.id,isAuth:O,photo:e.photos.small,status:e.status,id:e.id,followed:e.followed,fullName:e.name,isFollowing:S})}));return r.a.createElement(r.a.Fragment,null,v?r.a.createElement(C.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:s.a.users},function(e){for(var t in e)return!1;return!0}(j)?r.a.createElement("p",{className:s.a.users_notFound},"Sorry, nothing found"):j),r.a.createElement(y,{totalUsersCount:g,pageSize:h,currentPage:b,onPageChanged:function(e){w(_.f.setCurrentPage(e))}})))},I=n(27),x=n.n(I),T=function(e){var t=e.clearPage,n=Object(c.d)();Object(a.useEffect)((function(){n(Object(_.b)(6,1))}),[n]);var o=Object(c.e)((function(e){return e.usersPage.friends})),s=o.map((function(e){var t;return r.a.createElement("div",{key:e.id,className:x.a.friend},r.a.createElement(E.b,{to:"/profile/".concat(e.id)},r.a.createElement("img",{className:x.a.friendPhoto,src:(null===(t=e.photos)||void 0===t?void 0:t.small)||v.a,alt:""}),r.a.createElement("p",{className:x.a.friendName},e.name)))}));return r.a.createElement(r.a.Fragment,null,0===o.length?r.a.createElement(C.a,null):r.a.createElement("aside",{className:x.a.friendsBar},r.a.createElement("h3",{onClick:t},r.a.createElement(E.c,{activeClassName:x.a.active,to:"/friends"},"Friends")),r.a.createElement("div",{className:x.a.friendInfo},s)))},L=function(e){var t=e.clearPage,n=document.documentElement.clientWidth<=860;return Object(c.e)((function(e){return e.auth.isAuth}))&&!n?r.a.createElement(T,{clearPage:t}):null},R=n(63),k=n.n(R),A=function(e){var t=e.searchTerm,n=e.onSearch,a=e.onChange;return r.a.createElement("div",{className:k.a.usersSearch},r.a.createElement("p",null,r.a.createElement("input",{autoComplete:"off",onKeyDown:n,placeholder:"Find User",type:"text",value:t,onChange:a}),r.a.createElement("i",{className:"fa fa-search"})))},M=function(){var e=Object(u.g)(),t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],o=n[1];return r.a.createElement(A,{searchTerm:c,onChange:function(e){o(e.target.value)},onSearch:function(t){"Enter"===t.key&&e.push("/search/".concat(c))}})}},function(e,t,n){e.exports={container:"Navbar_container__bPROr","mcd-menu":"Navbar_mcd-menu__1dl6u",active:"Navbar_active__30xB3"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),r=n.n(a),c=n(25),o=n.n(c),s=function(){return r.a.createElement("div",{className:o.a.cssload_loader},r.a.createElement("div",{className:"".concat(o.a.cssload_inner," ").concat(o.a.cssload_one," ")}),r.a.createElement("div",{className:"".concat(o.a.cssload_inner," ").concat(o.a.cssload_two," ")}),r.a.createElement("div",{className:"".concat(o.a.cssload_inner," ").concat(o.a.cssload_three," ")}))}},,function(e,t,n){e.exports={preloader:"Preloader_preloader__1NvHy",cssload_loader:"Preloader_cssload_loader__3bGq4",cssload_inner:"Preloader_cssload_inner__jGbvQ",cssload_one:"Preloader_cssload_one__1YyfL","cssload-rotate-one":"Preloader_cssload-rotate-one__37_lG",cssload_two:"Preloader_cssload_two__29jxm","cssload-rotate-two":"Preloader_cssload-rotate-two__1K7y1",cssload_three:"Preloader_cssload_three__3qFuE","cssload-rotate-three":"Preloader_cssload-rotate-three__3_wsA"}},function(e,t,n){e.exports={user:"User_user__1e5gT",user_info:"User_user_info__CIH-X",user_photo:"User_user_photo__3CIRy",user_info_status:"User_user_info_status__1ZYUf",btn_container:"User_btn_container__1TLP_",sendMsg_btn:"User_sendMsg_btn__3aqc1"}},function(e,t,n){e.exports={friendsBar:"FriendsBar_friendsBar__1DOOZ",friendInfo:"FriendsBar_friendInfo__1wZBq",friend:"FriendsBar_friend__3V4DM",active:"FriendsBar_active__2BGw1"}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d}));var a=n(2),r=n.n(a),c=n(7),o=n(1),s=n(8),u=function(e,t){return{type:"SN/auth/SET_USER_DATA",user:Object(o.a)({},e),isAuth:t}},l=function(e){return{type:"SN/auth/GET_CAPTCHA_URL_SUCCESS",captchaUrl:e}},i=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.me();case 2:if(!(a=t.sent)){t.next=8;break}return t.next=6,s.c.getProfile(a.id);case 6:c=t.sent,n(u(c,e));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e,t,n,a){return function(){var o=Object(c.a)(r.a.mark((function c(o){var u,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.login(e,t,n,a);case 2:if(0!==(u=r.sent).resultCode){r.next=8;break}return r.next=6,o(i(!0));case 6:r.next=13;break;case 8:if(10!==u.resultCode){r.next=11;break}return r.next=11,o(m());case 11:return l=u.messages.length>0?u.messages[0]:"Unknown Error",r.abrupt("return",l);case 13:case"end":return r.stop()}}),c)})));return function(e){return o.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.d.getCaptchaUrl();case 2:n=e.sent,a=n.url,t(l(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.data.resultCode&&t(u(void 0,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},function(e,t,n){e.exports={userInfo:"UserAuthInfoBar_userInfo__OOWXH",userInfo_photo:"UserAuthInfoBar_userInfo_photo__GiG03",userInfo_name:"UserAuthInfoBar_userInfo_name__2EI8C",login_link:"UserAuthInfoBar_login_link__qc4wd"}},,,function(e,t,n){e.exports={header:"Header_header__3S5Ot",header_content:"Header_header_content__1jeoT",logo_wrapper:"Header_logo_wrapper__2DKMU",header_logo:"Header_header_logo__1Vz4o"}},,,function(e,t,n){e.exports=n.p+"static/media/avatar-undefined.54c6edcf.jpg"},function(e,t,n){e.exports={dropdown:"Dropdown_dropdown__10R0R"}},function(e,t,n){e.exports={app_wrapper:"Common_app_wrapper__3xtfL",content_wrapper:"Common_content_wrapper__GXNjy",app_content:"Common_app_content__3n0Ib"}},,,function(e,t,n){e.exports={users:"Users_users__364nf",users_notFound:"Users_users_notFound__2TCK0"}},function(e,t,n){e.exports={followBtn:"Followbtn_followBtn__3yGH7"}},,,function(e,t,n){e.exports={footer:"Footer_footer__1AnqI",footer_content:"Footer_footer_content__2ESLO"}},function(e,t,n){e.exports={login_title:"Login_login_title__t0c7j"}},,,,,,,,,,,,,,,,function(e,t,n){e.exports={usersSearch:"UsersSearch_usersSearch__1InsJ"}},function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"},function(e,t,n){e.exports={logout:"Logout_logout__2KSkG"}},function(e,t,n){e.exports={sign_in:"SignIn_sign_in__f8gOH"}},,,,,function(e,t,n){e.exports=n(102)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),o=n.n(c),s=(n(76),n(60)),u=n(61),l=n(70),i=n(69),f=(n(77),n(9)),m=n(4),d=n(3),p=n(19),_=n(2),E=n.n(_),h=n(7),g=n(8),b=function(e){return{type:"SN/chat/MESSAGES_RECEVIED",payload:{messages:e}}},v=function(e){return{type:"SN/chat/STATUS_CHANGED",payload:{status:e}}},S=null,O=function(e){return null===S&&(S=function(t){e(b(t))}),S},w=null,N=function(e){return null===w&&(w=function(t){e(v(t))}),w},j=n(10),P=n(67),U=r.a.memo((function(e){var t=e.message;return console.log(">>>>>>Message"),r.a.createElement("div",null,r.a.createElement("img",{src:t.photo,style:{width:"30px"}})," ",r.a.createElement("b",null,t.userName),r.a.createElement("br",null),t.message,r.a.createElement("hr",null))})),y=function(e){Object(P.a)(e);var t=Object(m.e)((function(e){return e.chat.messages})),n=Object(a.useRef)(null),c=Object(a.useState)(!0),o=Object(j.a)(c,2),s=o[0],u=o[1];return Object(a.useEffect)((function(){var e;s&&(null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[t]),r.a.createElement("div",{style:{height:"400px",overflowY:"auto"},onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<300?!s&&u(!0):s&&u(!1)}},t.map((function(e,t){return r.a.createElement(U,{key:e.id,message:e})})),r.a.createElement("div",{ref:n}))},C=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],o=Object(m.d)(),s=Object(m.e)((function(e){return e.chat.status}));return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("textarea",{onChange:function(e){return c(e.currentTarget.value)},value:n})),r.a.createElement("div",null,r.a.createElement("button",{disabled:"ready"!==s,onClick:function(){n&&(o(function(e){return function(){var t=Object(h.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g.b.sendMessage(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n)),c(""))}},"Send")))},F=function(){var e=Object(m.d)(),t=Object(m.e)((function(e){return e.chat.status}));return Object(a.useEffect)((function(){return e(function(){var e=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.b.start(),g.b.subscribe("messages-received",O(t)),g.b.subscribe("status-changed",N(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(){e(function(){var e=Object(h.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.b.unsubscribe("messages-received",O(t)),g.b.unsubscribe("status-changed",N(t)),g.b.stop();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}),[]),r.a.createElement("div",null,"error"===t&&r.a.createElement("div",null,"Some error occured. Please refresh the page"),r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(C,null)))},I=function(){return r.a.createElement(p.a,null,r.a.createElement(F,null))},x=n(21),T=function(){return r.a.createElement(p.a,null,r.a.createElement(x.c,null))},L=function(){return r.a.createElement(p.a,null,r.a.createElement(x.c,null))},R=function(){return r.a.createElement(p.a,null,r.a.createElement(x.c,null))},k=n(49),A=n(20),M=n.n(A),G=n(30),D=function(e){var t=e.captchaUrl,n=Object(k.a)(),a=n.register,c=n.errors,o=n.handleSubmit,s=Object(m.d)();return r.a.createElement("form",{onSubmit:o((function(e){s(Object(G.b)(e.email,e.password,e.rememberMe,e.captcha))}))},r.a.createElement("div",null,r.a.createElement("input",{className:M.a.common_input,name:"email",ref:a({required:"Please  enter your email"}),placeholder:"e-mail"}),r.a.createElement("span",{className:M.a.span_error},c.name)),r.a.createElement("div",null,r.a.createElement("input",{className:M.a.common_input,name:"password",ref:a({required:"Please enter your password"}),type:"password",placeholder:"password"}),r.a.createElement("span",{className:M.a.span_error},c.name)),r.a.createElement("div",null,r.a.createElement("input",{className:M.a.common_input,name:"rememberMe",type:"checkbox"}),r.a.createElement("label",{htmlFor:"rememberMe"},"Remember Me")),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{alt:"captcha",src:t}),r.a.createElement("input",{className:M.a.common_input,name:"captcha",placeholder:"Enter symbols",ref:a({required:"Please enter symbols"}),type:"text"}),r.a.createElement("span",{className:M.a.span_error},c.name),c.captcha&&"Captcha is required"):"",r.a.createElement("div",null,r.a.createElement("p",{className:M.a.span_error},c.name),r.a.createElement("input",{className:M.a.send_btn,value:"Login",type:"submit"})))},B=n(47),z=n.n(B),H=function(){var e=Object(m.e)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}})),t=e.isAuth,n=e.captchaUrl;return t?r.a.createElement(d.a,{to:"/profile"}):r.a.createElement("div",{className:z.a.login},r.a.createElement("h1",{className:z.a.login_title},"Please, log in..."),r.a.createElement(D,{captchaUrl:n}))},W=function(){return r.a.createElement(p.a,null,r.a.createElement(H,null))},q=n(23),K=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,123)).then((function(e){return{default:e.ProfilePage}}))})),V=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,124)).then((function(e){return{default:e.NewsPage}}))})),J=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,122)).then((function(e){return{default:e.MusicPage}}))})),X=function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(q.a,null)},r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/profile/:userId?"},r.a.createElement(K,null)),r.a.createElement(d.b,{path:"/news"},r.a.createElement(V,null)),r.a.createElement(d.b,{path:"/music"},r.a.createElement(J,null)),r.a.createElement(d.b,{path:"/chat"},r.a.createElement(I,null)),r.a.createElement(d.b,{path:"/users/"},r.a.createElement(T,null)),r.a.createElement(d.b,{path:"/friends"},r.a.createElement(L,null)),r.a.createElement(d.b,{path:"/search/:term?"},r.a.createElement(R,null)),r.a.createElement(d.b,{path:"/login"},r.a.createElement(W,null)),r.a.createElement(d.a,{exact:!0,from:"/",to:"/profile/"}),r.a.createElement(d.b,{render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}})))},Z=function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}},Y=Object(m.b)((function(e){return{initialized:e.init.initialized}}),(function(e){return{initializeApp:function(){return e((function(e){return e(Object(G.a)(!0)).then((function(){e(Z())}))}))}}}))(function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement(f.a,null,r.a.createElement(X,null)):r.a.createElement(q.a,null)}}]),n}(a.Component)),Q=n(24),$=n(68),ee=n(1),te={isFollowing:!1,followed:!1,profile:null,status:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0420\u0435\u0434\u0430\u043a\u0441\u0430"},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/SET_USERS_PROFILE":return Object(ee.a)(Object(ee.a)({},e),{},{profile:t.profile});case"SN/PROFILE/SET_STATUS":return Object(ee.a)(Object(ee.a)({},e),{},{status:t.status});case"SN/PROFILE/SAVE_PHOTO_SUCCESS":return Object(ee.a)(Object(ee.a)({},e),{},{profile:Object(ee.a)(Object(ee.a)({},e.profile),{},{photos:t.photos})});case"SN/PROFILE/TOGGLE_IS_FOLLOWING":return Object(ee.a)(Object(ee.a)({},e),{},{isFollowing:t.isFollowing});case"SN/PROFILE/IS_FOLLOWED":return Object(ee.a)(Object(ee.a)({},e),{},{followed:t.isFollowed});default:return e}},ae=n(6),re=function(e,t,n){return e.map((function(e){return e.id===t?Object(ee.a)(Object(ee.a)({},e),n):e}))},ce={users:[],friends:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(ee.a)(Object(ee.a)({},e),{},{users:re(e.users,t.userId,{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(ee.a)(Object(ee.a)({},e),{},{users:re(e.users,t.userId,{followed:!1})});case"SN/USERS/SET_USERS":return Object(ee.a)(Object(ee.a)({},e),{},{users:Object(ae.a)(t.users)});case"SN/USERS/SET_FRIENDS":return Object(ee.a)(Object(ee.a)({},e),{},{friends:Object(ae.a)(t.friends)});case"SN/USERS/SET_CURRENT_PAGE":return Object(ee.a)(Object(ee.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(ee.a)(Object(ee.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(ee.a)(Object(ee.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(ae.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return t.userId!==e}))});default:return e}},se=n(104),ue={messages:[],status:"pending"},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/chat/MESSAGES_RECEVIED":return Object(ee.a)(Object(ee.a)({},e),{},{messages:[].concat(Object(ae.a)(e.messages),Object(ae.a)(t.payload.messages.map((function(e){return Object(ee.a)(Object(ee.a)({},e),{},{id:Object(se.a)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"SN/chat/STATUS_CHANGED":return Object(ee.a)(Object(ee.a)({},e),{},{status:t.payload.status});default:return e}},ie={user:{aboutMe:null,contacts:null,lookingForAJob:null,lookingForAJobDescription:null,fullName:null,userId:null,photos:null},isAuth:!1,captchaUrl:null},fe={initialized:!1},me={articles:null},de={charts:null,searchResults:null},pe=Object(Q.c)({profilePage:ne,usersPage:oe,chat:le,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET_USER_DATA":return Object(ee.a)(Object(ee.a)({},e),{},{user:Object(ee.a)({},t.user),isAuth:t.isAuth});case"SN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(ee.a)(Object(ee.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALIZED_SUCCESS":return Object(ee.a)(Object(ee.a)({},e),{},{initialized:!0});default:return e}},news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEWS/SET_NEWS":return Object(ee.a)(Object(ee.a)({},e),{},{articles:t.articles});default:return e}},music:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MUSIC/SET_MUSIC_CHARTS":return Object(ee.a)(Object(ee.a)({},e),{},{charts:t.charts});case"MUSIC/SET_SEARCH_RESULTS":return Object(ee.a)(Object(ee.a)({},e),{},{searchResults:t.searchResults});default:return e}}}),_e=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,Ee=Object(Q.e)(pe,_e(Object(Q.a)($.a)));o.a.render(r.a.createElement(m.a,{store:Ee},r.a.createElement(Y,null)),document.getElementById("root"))}],[[71,1,2]]]);
//# sourceMappingURL=main.e27c1361.chunk.js.map