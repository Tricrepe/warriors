(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],m=0,d=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/admin/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"22de":function(e,t,r){"use strict";var n=r("8319"),a=r.n(n);a.a},"2b84":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e623"),r("e379"),r("5dc8"),r("37e1");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],i=(r("034f"),r("2877")),o={},l=Object(i["a"])(o,a,s,!1,null,null,null),c=l.exports,u=r("5c96"),m=r.n(u);r("0fae");n["default"].use(m.a);var d=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("el-card",{staticClass:"login-card",attrs:{header:"请先登陆"}},[r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("登陆")])],1)],1)],1)],1)},f=[],h=(r("96cf"),r("1da1")),v={data:function(){return{model:{}}},methods:{login:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("login",e.model);case 2:r=t.sent,localStorage.token=r.data,e.$router.push("/"),e.$message({type:"success",message:"登陆成功"});case 6:case"end":return t.stop()}}),t)})))()}}},b=v,g=(r("d6db"),Object(i["a"])(b,p,f,!1,null,null,null)),x=g.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticStyle:{height:"100vh"}},[r("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[r("el-menu",{attrs:{router:"","default-openeds":["3"],"unique-opened":"","default-active":e.$router.path}},[r("el-submenu",{attrs:{index:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("内容管理 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("物品")]),r("el-menu-item",{attrs:{index:"/items/create"}},[e._v("新建物品")]),r("el-menu-item",{attrs:{index:"/items/list"}},[e._v("物品列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("英雄")]),r("el-menu-item",{attrs:{index:"/heros/create"}},[e._v("新建英雄")]),r("el-menu-item",{attrs:{index:"/heros/list"}},[e._v("英雄列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("文章")]),r("el-menu-item",{attrs:{index:"/articles/create"}},[e._v("新建文章")]),r("el-menu-item",{attrs:{index:"/articles/list"}},[e._v("文章列表")])],2)],2),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("运营管理 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("广告位")]),r("el-menu-item",{attrs:{index:"/ads/create"}},[e._v("新建广告位")]),r("el-menu-item",{attrs:{index:"/ads/list"}},[e._v("广告位列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("分类")]),r("el-menu-item",{attrs:{index:"/categories/create"}},[e._v("新建分类")]),r("el-menu-item",{attrs:{index:"/categories/list"}},[e._v("分类列表")])],2)],2),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("系统设置 ")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("管理员")]),r("el-menu-item",{attrs:{index:"/admin_users/create"}},[e._v("新建管理员")]),r("el-menu-item",{attrs:{index:"/admin_users/list"}},[e._v("管理员列表")])],2)],2)],1)],1),r("el-container",[r("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[r("el-dropdown",[r("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[e._v("查看")]),r("el-dropdown-item",[e._v("新增")]),r("el-dropdown-item",[e._v("删除")])],1)],1),r("span",[e._v("王小虎")])],1),r("el-main",[r("router-view",{key:e.$route.path})],1)],1)],1)},_=[],k=(r("cb29"),{data:function(){var e={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(e)}}}),y=k,$=(r("22de"),Object(i["a"])(y,w,_,!1,null,null,null)),R=$.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"分类"+e._s(e.id))]),r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"上级分类"}},[r("el-select",{model:{value:e.model.parent,callback:function(t){e.$set(e.model,"parent",t)},expression:"model.parent"}},e._l(e.categoryParents,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},j=[],C={props:{id:{}},data:function(){return{model:{},categoryParents:[]}},methods:{save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("crud/categories/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("crud/categories",e.model);case 7:e.$router.push("/categories/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/categories/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchCategoryParents:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/categories");case 2:r=t.sent,e.categoryParents=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch(),this.fetchCategoryParents()}},S=C,T=Object(i["a"])(S,O,j,!1,null,null,null),E=T.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("分类列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"400"}}),r("el-table-column",{attrs:{prop:"parent.name",label:"上级分类"}}),r("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/categories/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},z=[],D=(r("b0c0"),{data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/categories");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:console.log(123),t.$confirm("是否确定要删除分类?".concat(e.name),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("crud/categories/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 2:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}}),B=D,U=Object(i["a"])(B,P,z,!1,null,null,null),I=U.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"物品"+e._s(e.id))]),r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":e.afterUpload}},[e.model.icon?r("img",{staticClass:"avatar",attrs:{src:e.model.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},L=[],M={props:{id:{}},data:function(){return{model:{}}},methods:{afterUpload:function(e){this.$set(this.model,"icon",e.url)},save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("crud/items/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("crud/items",e.model);case 7:e.$router.push("/items/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/items/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},H=M,V=(r("b72d"),Object(i["a"])(H,A,L,!1,null,null,null)),q=V.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("分类列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"400"}}),r("el-table-column",{attrs:{prop:"name",label:"物品名称"}}),r("el-table-column",{attrs:{prop:"name",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.icon,alt:""}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/items/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},N=[],F={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:console.log(123),t.$confirm("是否确定要删除分类?".concat(e.name),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("crud/items/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 2:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},G=F,K=Object(i["a"])(G,J,N,!1,null,null,null),Q=K.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"英雄"+e._s(e.id))]),r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-tabs",{attrs:{type:"border-card",value:"skills"}},[r("el-tab-pane",{attrs:{label:"基础信息"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"称号"}},[r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":e.afterUpload}},[e.model.avatar?r("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-form-item",{attrs:{label:"类型"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"难度"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),r("el-form-item",{attrs:{label:"技能"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),r("el-form-item",{attrs:{label:"攻击"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),r("el-form-item",{attrs:{label:"生存"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),r("el-form-item",{attrs:{label:"顺风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"逆风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"使用技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),r("el-form-item",{attrs:{label:"对抗技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),r("el-form-item",{attrs:{label:"团战思路"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1)],1)],1),r("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.skills.push({})}}},[r("i",{staticClass:"el-icon-plus"},[e._v("添加技能")])]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.skills,(function(t,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"skill.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":function(r){return e.$set(t,"icon",r.url)}}},[t.icon?r("img",{staticClass:"avatar",attrs:{src:t.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"skill.description"}})],1),r("el-form-item",{attrs:{label:"小提示"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(r){e.$set(t,"tips",r)},expression:"skill.tips"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.model.skills.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1)],1),r("el-button",{staticStyle:{"margin-top":"2rem"},attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)},X=[],Y={props:{id:{}},data:function(){return{categories:[],items:[],model:{name:"",avatar:"",scores:{difficult:0,skills:0,attack:0,survive:0}}}},methods:{afterUpload:function(){},save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("crud/heros/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("crud/heros",e.model);case 7:e.$router.push("/heros/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/heros/".concat(e.id));case 2:r=t.sent,e.model=Object.assign({},e.model,r.data);case 4:case"end":return t.stop()}}),t)})))()},fetchCategories:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchItems:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchItems(),this.fetchCategories(),this.id&&this.fetch()}},Z=Y,ee=(r("9de8"),Object(i["a"])(Z,W,X,!1,null,null,null)),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("英雄列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"400"}}),r("el-table-column",{attrs:{prop:"name",label:"英雄名称"}}),r("el-table-column",{attrs:{prop:"name",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.avatar,alt:""}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/heros/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},ne=[],ae={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/heros");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:console.log(123),t.$confirm("是否确定要删除分类?".concat(e.name),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("crud/heros/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 2:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},se=ae,ie=Object(i["a"])(se,re,ne,!1,null,null,null),oe=ie.exports,le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"文章"+e._s(e.id))]),r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"所属分类"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",[r("el-form-item",{attrs:{label:"详情"}},[r("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.model.body,callback:function(t){e.$set(e.model,"body",t)},expression:"model.body"}})],1),r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},ce=[],ue=r("5873"),me={components:{VueEditor:ue["a"]},props:{id:{}},data:function(){return{model:{},categories:[]}},methods:{handleImageAdded:function(e,t,r,n){var a=this;return Object(h["a"])(regeneratorRuntime.mark((function s(){var i,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return i=new FormData,i.append("file",e),s.next=4,a.$http.post("upload",i);case 4:o=s.sent,t.insertEmbed(r,"image",o.data.url),n();case 7:case"end":return s.stop()}}),s)})))()},save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("crud/articles/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("crud/articles",e.model);case 7:e.$router.push("/articles/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/articles/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchCategories:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchCategories(),this.id&&this.fetch()}},de=me,pe=Object(i["a"])(de,le,ce,!1,null,null,null),fe=pe.exports,he=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("文章列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"400"}}),r("el-table-column",{attrs:{prop:"title",label:"标题"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/articles/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},ve=[],be={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/articles");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm("是否确定要删除分类?".concat(e.title),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("crud/articles/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},ge=be,xe=Object(i["a"])(ge,he,ve,!1,null,null,null),we=xe.exports,_e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"广告位"+e._s(e.id))]),r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.items.push({})}}},[r("i",{staticClass:"el-icon-plus"},[e._v("添加广告")])]),r("el-form-item",{attrs:{label:"广告"}},[r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.items,(function(t,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"URL"}},[r("el-input",{model:{value:t.url,callback:function(r){e.$set(t,"url",r)},expression:"item.url"}})],1),r("el-form-item",{attrs:{label:"图片"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":function(r){return e.$set(t,"image",r.url)}}},[t.image?r("img",{staticClass:"avatar",attrs:{src:t.image}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.model.items.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},ke=[],ye={props:{id:{}},data:function(){return{model:{items:[]}}},methods:{save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("crud/ads/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("crud/ads",e.model);case 7:e.$router.push("/ads/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/ads/".concat(e.id));case 2:r=t.sent,e.model=Object.assign({},e.model,r.data);case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},$e=ye,Re=Object(i["a"])($e,_e,ke,!1,null,null,null),Oe=Re.exports,je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("广告位列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"400"}}),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/ads/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},Ce=[],Se={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/ads");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:console.log(123),t.$confirm("是否确定要删除分类?".concat(e.name),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("crud/ads/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 2:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},Te=Se,Ee=Object(i["a"])(Te,je,Ce,!1,null,null,null),Pe=Ee.exports,ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"管理员"+e._s(e.id))]),r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"text"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},De=[],Be={props:{id:{}},data:function(){return{model:{}}},methods:{save:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("crud/admin_users/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("crud/admin_users",e.model);case 7:e.$router.push("/admin_users/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/admin_users/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},Ue=Be,Ie=Object(i["a"])(Ue,ze,De,!1,null,null,null),Ae=Ie.exports,Le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("管理员列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"400"}}),r("el-table-column",{attrs:{prop:"username",label:"管理员名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/admin_users/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},Me=[],He={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("crud/admin_users");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:console.log(123),t.$confirm("是否确定要删除?".concat(e.name),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("crud/categories/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 2:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},Ve=He,qe=Object(i["a"])(Ve,Le,Me,!1,null,null,null),Je=qe.exports;n["default"].use(d["a"]);var Ne=[{path:"/login",name:"login",component:x,meta:{isPublic:!0}},{path:"/",name:"main",component:R,children:[{path:"/categories/create",component:E},{path:"/categories/edit/:id",component:E,props:!0},{path:"/categories/list",component:I},{path:"/items/create",component:q},{path:"/items/edit/:id",component:q,props:!0},{path:"/items/list",component:Q},{path:"/heros/create",component:te},{path:"/heros/edit/:id",component:te,props:!0},{path:"/heros/list",component:oe},{path:"/articles/create",component:fe},{path:"/articles/edit/:id",component:fe,props:!0},{path:"/articles/list",component:we},{path:"/ads/create",component:Oe},{path:"/ads/edit/:id",component:Oe,props:!0},{path:"/ads/list",component:Pe},{path:"/admin_users/create",component:Ae},{path:"/admin_users/edit/:id",component:Ae,props:!0},{path:"/admin_users/list",component:Je}]}],Fe=new d["a"]({routes:Ne});Fe.beforeEach((function(e,t,r){if(!e.meta.isPublic&&!localStorage.token)return r("/login");r()}));var Ge=Fe,Ke=(r("d3b7"),r("bc3a")),Qe=r.n(Ke),We=Qe.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_API_URL||"/admin/api"});We.interceptors.request.use((function(e){return localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e}),(function(e){return Promise.reject(e)})),We.interceptors.response.use((function(e){return e}),(function(e){if(e.response.data.message)return n["default"].prototype.$message({type:"error",message:e.response.data.message}),401==e.response.status&&Ge.push("/login"),Promise.reject(e)}));var Xe=We;n["default"].config.productionTip=!1,n["default"].prototype.$http=Xe,n["default"].mixin({computed:{uploadUrl:function(){return this.$http.defaults.baseURL+"/upload"}},methods:{getAuthHeaders:function(){return{Authorization:"Bearer ".concat(localStorage.token||"")}}}}),new n["default"]({router:Ge,render:function(e){return e(c)}}).$mount("#app")},8319:function(e,t,r){},"85ec":function(e,t,r){},"9de8":function(e,t,r){"use strict";var n=r("d8ad"),a=r.n(n);a.a},b72d:function(e,t,r){"use strict";var n=r("2b84"),a=r.n(n);a.a},d6db:function(e,t,r){"use strict";var n=r("e67a"),a=r.n(n);a.a},d8ad:function(e,t,r){},e67a:function(e,t,r){}});
//# sourceMappingURL=app.803def87.js.map