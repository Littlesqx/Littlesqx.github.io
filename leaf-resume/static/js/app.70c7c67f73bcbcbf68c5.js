webpackJsonp([1],{"0DSH":function(e,t){},"2IUn":function(e,t){},"4t6S":function(e,t){},"5ZUa":function(e,t){},"67gX":function(e,t){},"6bPp":function(e,t){},"8LME":function(e,t){},"8gzn":function(e,t){},AmKc:function(e,t){},B4c3:function(e,t){},"C5/D":function(e,t){},EKDc:function(e,t){},FZ8k:function(e,t){},HYnv:function(e,t){},K7EH:function(e,t){},KDmp:function(e,t){},LcVd:function(e,t){},M2Kz:function(e,t){},MMae:function(e,t){},"N1k/":function(e,t){},N6qQ:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("dOjA"),i("5ZUa");var n=i("OB+G"),a=i.n(n),s=(i("EKDc"),i("bj19")),l=i.n(s),o=(i("k2DR"),i("+qca")),r=i.n(o),u=(i("AmKc"),i("Gkh/")),c=i.n(u),p=(i("N1k/"),i("TSZU")),f=i.n(p),d=(i("8LME"),i("DgbL")),v=i.n(d),m=(i("OVQN"),i("m7fT")),_=i.n(m),h=(i("XYLo"),i("vZl+")),b=i.n(h),k=(i("iMWL"),i("6bNU")),x=i.n(k),y=(i("UJNC"),i("yyjC")),g=i.n(y),w=(i("4t6S"),i("qePe")),C=i.n(w),S=(i("eavy"),i("isCD")),E=i.n(S),O=(i("B4c3"),i("Q/B0")),N=i.n(O),L=(i("C5/D"),i("OQN+")),U=i.n(L),M=(i("N6qQ"),i("PyDY")),R=i.n(M),A=(i("nh25"),i("EyFx")),V=i.n(A),$=(i("nXj/"),i("GafK")),j=i.n($),D=(i("K7EH"),i("27l0")),F=i.n(D),P=(i("8gzn"),i("hpbi")),Q=i.n(P),q=(i("MMae"),i("2kJl")),H=i.n(q),I=(i("M2Kz"),i("adwe")),z=i.n(I),J=(i("nok4"),i("zQUF")),K=i.n(J),Y=(i("phPM"),i("kb6f")),B=i.n(Y),T=(i("HYnv"),i("orNa")),X=i.n(T),G=(i("KDmp"),i("eCVn")),Z=i.n(G),W=(i("67gX"),i("eVIb")),ee=i.n(W),te=(i("FZ8k"),i("Be7p")),ie=i.n(te),ne=(i("s6rd"),i("AEIh")),ae=i.n(ne),se=(i("U3JS"),i("Wnlk")),le=i.n(se),oe=(i("eYIm"),i("/sLi")),re=i.n(oe),ue=(i("zkRu"),i("XOOp")),ce=i.n(ue),pe=(i("lxx2"),i("emmM")),fe=i.n(pe),de=(i("2IUn"),i("5CN7")),ve=i.n(de),me=(i("c1Vq"),i("2iFT")),_e=i.n(me),he=(i("aMQw"),i("//FO")),be=i.n(he),ke=i("7+uW"),xe={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var ye=i("VU/8")({name:"App"},xe,!1,function(e){i("0DSH")},null,null).exports,ge=i("/ocq"),we=i("mvHQ"),Ce=i.n(we),Se=i("BO1k"),Ee=i.n(Se),Oe={methods:{handleSelect:function(e){"#"!==e&&window.open(e)}}},Ne={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-menu",{staticClass:"head-menu",attrs:{"default-active":"#","background-color":"#686868","text-color":"#fff","active-text-color":"#ffd04b",mode:"horizontal"},on:{select:e.handleSelect}},[i("el-menu-item",{attrs:{index:"#"}},[e._v("Leaf-resume")]),e._v(" "),i("el-submenu",{attrs:{index:"#about"}},[i("template",{slot:"title"},[e._v("About")]),e._v(" "),i("el-menu-item",{attrs:{index:"https://github.com/Littlesqx/leaf-resume"}},[e._v("Github")]),e._v(" "),i("el-menu-item",{attrs:{index:"https://littlesqx.github.io"}},[e._v("Author")])],2)],1)},staticRenderFns:[]};var Le=i("VU/8")(Oe,Ne,!1,function(e){i("6bPp")},null,null).exports,Ue={props:{profile:Array,experiences:Array,skills:Array,form:Object},data:function(){return{skill:""}},methods:{addExperience:function(){this.experiences.push({company:"",position:"",date:"",description:""})},addSkill:function(){this.skills.push(this.skill),this.skill=""}}},Me={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-aside",{staticClass:"setting",attrs:{width:"386px"}},[i("el-tabs",{attrs:{type:"border-card"}},[i("el-tab-pane",{attrs:{label:"基础信息"}},[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[i("div",{staticClass:"topic"},[i("span",[e._v("基础信息")])]),e._v(" "),e._l(e.profile,function(t,n){return i("el-form-item",{key:n,attrs:{label:t.label}},["about"===t.key?i("el-input",{attrs:{type:"textarea",rows:3},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"item.value"}}):i("el-input",{model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"item.value"}})],1)})],2)],1),e._v(" "),i("el-tab-pane",{attrs:{label:"项目经历"}},[i("div",{staticClass:"topic"},[i("span",[e._v("项目经历")]),e._v(" "),i("div",{staticClass:"option"},[i("el-button",{attrs:{size:"mini",plain:"",icon:"el-icon-plus"},on:{click:e.addExperience}},[e._v("新增经历")])],1)]),e._v(" "),e._l(e.experiences,function(t,n){return i("el-form",{key:n,attrs:{"label-width":"100px"}},[i("el-form-item",{attrs:{label:"项目 / 公司"}},[i("el-input",{model:{value:t.company,callback:function(i){e.$set(t,"company",i)},expression:"item.company"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"职位"}},[i("el-input",{model:{value:t.position,callback:function(i){e.$set(t,"position",i)},expression:"item.position"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"时间"}},[i("el-input",{model:{value:t.date,callback:function(i){e.$set(t,"date",i)},expression:"item.date"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{type:"textarea",rows:3},model:{value:t.description,callback:function(i){e.$set(t,"description",i)},expression:"item.description"}})],1)],1)})],2),e._v(" "),i("el-tab-pane",{attrs:{label:"技能清单"}},[i("div",{staticClass:"topic"},[i("span",[e._v("技能清单")]),e._v(" "),i("div",{staticClass:"option"},[i("el-popover",{ref:"popover",attrs:{placement:"right",trigger:"click"}},[i("el-form",{attrs:{inline:!0}},[i("el-form-item",[i("el-input",{model:{value:e.skill,callback:function(t){e.skill=t},expression:"skill"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{plain:"",size:"small"},on:{click:e.addSkill}},[e._v("新增")])],1)],1)],1),e._v(" "),i("el-button",{directives:[{name:"popover",rawName:"v-popover:popover",arg:"popover"}],attrs:{size:"mini",plain:"",icon:"el-icon-plus"}},[e._v("新增技能")])],1)]),e._v(" "),i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"参考技能"}},[i("el-checkbox-group",{model:{value:e.form.skills,callback:function(t){e.$set(e.form,"skills",t)},expression:"form.skills"}},e._l(e.skills,function(e,t){return i("el-checkbox",{key:t,attrs:{label:e,name:"type"}})}))],1)],1)],1),e._v(" "),i("el-tab-pane",{attrs:{label:"主题设置"}},[e._v("主题设置")])],1)],1)},staticRenderFns:[]},Re=i("VU/8")(Ue,Me,!1,null,null,null).exports,Ae={props:{options:Object},created:function(){console.log(this.options)}},Ve={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"resume",attrs:{id:"template"}},[i("div",{attrs:{id:"resume-header"}},[i("div",{attrs:{id:"header-left"}},[i("h1",{attrs:{id:"name"}},[e._v("\n                "+e._s(e.options.profile.name)+"\n                "),i("span",[e._v(e._s(e.options.profile.position))])]),e._v(" "),i("div",{attrs:{id:"info-flex"}},[e.options.profile.email?i("span",{attrs:{id:"email"}},[i("a",{attrs:{href:"mailto:"+e.options.profile.email}},[i("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(e.options.profile.email))])]):e._e(),e._v(" "),e.options.profile.phone?i("span",{attrs:{id:"phone"}},[i("i",{staticClass:"fa fa-phone-square",attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(e.options.profile.phone)+"\n                ")]):e._e(),e._v(" "),e.options.profile.website?i("span",{attrs:{id:"website"}},[i("a",{attrs:{href:e.options.profile.website}},[i("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(e.options.profile.website)+"\n                  ")])]):e._e(),e._v(" "),e.options.profile.github?i("span",{attrs:{id:"github"}},[i("a",{attrs:{href:"https://github.com/"+e.options.profile.github}},[i("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(e.options.profile.github)+"\n                  ")])]):e._e()])]),e._v(" "),e._m(0)]),e._v(" "),i("div",{attrs:{id:"resume-body"}},[i("div",{attrs:{id:"education-container"}},[i("h2",{attrs:{id:"education-title"}},[e._v("Education")]),e._v(" "),i("div",{staticClass:"spacer"}),e._v(" "),i("div",{staticClass:"education"},[i("h2",{staticClass:"education-description"},[e._v(e._s(e.options.profile.description))]),e._v(" "),i("p",[e.options.profile.degree?i("span",{staticClass:"degree"},[e._v(e._s(e.options.profile.degree)+" | ")]):e._e(),e._v(" "),i("span",{staticClass:"education-timeperiod"},[e._v(e._s(e.options.profile.timeperiod))])])])]),e._v(" "),i("div",{attrs:{id:"experience-container"}},[i("h2",{attrs:{id:"experience-title"}},[e._v("Experience")]),e._v(" "),i("div",{staticClass:"spacer"}),e._v(" "),e._l(e.options.experiences,function(t,n){return t.date?i("div",{key:n,staticClass:"experience"},[i("h2",{staticClass:"company"},[e._v(e._s(t.company))]),e._v(" "),i("p",{staticClass:"job-info"},[i("span",{staticClass:"job-title"},[e._v(e._s(t.position)+" | ")]),i("span",{staticClass:"experience-timeperiod"},[e._v(e._s(t.date))])]),e._v(" "),t.description?i("p",{staticClass:"job-description"},[e._v(e._s(t.description))]):e._e()]):e._e()})],2),e._v(" "),e.options.skills!=[]?i("div",{attrs:{id:"skills-container"}},[i("h2",{attrs:{id:"skills-title"}},[e._v("Skill")]),e._v(" "),i("div",{staticClass:"spacer"}),e._v(" "),i("ul",{attrs:{id:"skill-list"}},e._l(e.options.skills,function(t,n){return i("li",{key:n,staticClass:"skill"},[i("span",{staticClass:"list-item-black"},[e._v("\n                    "+e._s(t)+"\n                  ")])])}))]):e._e()]),e._v(" "),i("div",{attrs:{id:"resume-footer"}},[e.options.profile.about?i("div",[i("h2",[e._v("About")]),e._v(" "),i("p",[e._v(e._s(e.options.profile.about))])]):e._e()])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"header-right"}},[t("div",{attrs:{id:"headshot"}})])}]};var $e=i("VU/8")(Ae,Ve,!1,function(e){i("LcVd")},"data-v-d071791e",null).exports,je={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"button",on:{click:function(t){e.action()}}},[i("i",{staticClass:"el-icon-download"})])},staticRenderFns:[]};var De={profile:[{label:"名字",key:"name",value:""},{label:"毕业院校",key:"description",value:""},{label:"学历",key:"degree",value:""},{label:"在校时间",key:"timeperiod",value:""},{label:"期望职位",key:"position",value:""},{label:"联系邮箱",key:"email",value:""},{label:"联系电话",key:"phone",value:""},{label:"技术博客",key:"website",value:""},{label:"Github Id",key:"github",value:""},{label:"自我介绍",key:"about",value:""}],experiences:[{company:"",position:"",date:"",description:""}],skills:["CSS/CSS3","SaSS/LeSS/Stylus","Vue","React","Angular","RESTful/GraphQL","Webpack/npm","Node","Express","PHP","Laravel/Lumen","Python","Django","Java","Spring","Ruby","Rails"]},Fe={data:function(){return{profile:this.getProfile(),experiences:this.getExperiences(),form:{profile:this.getProfile(),experiences:this.getExperiences(),skills:this.getSkills()},skills:De.skills}},methods:{resumeOptions:function(){var e={},t=!0,i=!1,n=void 0;try{for(var a,s=Ee()(this.profile);!(t=(a=s.next()).done);t=!0){var l=a.value;e[l.key]=l.value}}catch(e){i=!0,n=e}finally{try{!t&&s.return&&s.return()}finally{if(i)throw n}}return{profile:e,experiences:this.experiences,skills:this.form.skills}},preview:function(){window.localStorage.setItem("options",Ce()({profile:this.profile,experiences:this.experiences,skills:this.form.skills})),window.open("#preview")},getProfile:function(){return(JSON.parse(window.localStorage.getItem("options"))||De).profile},getExperiences:function(){return(JSON.parse(window.localStorage.getItem("options"))||De).experiences},getSkills:function(){return(JSON.parse(window.localStorage.getItem("options"))||De).skills}},components:{HeadMenu:Le,LeftAside:Re,LineTheme:$e,FloatButton:i("VU/8")({data:function(){return{}},methods:{action:function(){this.$emit("action")}}},je,!1,function(e){i("q3tj")},null,null).exports},created:function(){console.log(this.cacheConfig)}},Pe={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",[i("el-header",[i("head-menu")],1),e._v(" "),i("el-container",{staticClass:"main"},[i("left-aside",{attrs:{profile:e.profile,experiences:e.experiences,skills:e.skills,form:e.form}}),e._v(" "),i("el-main",[i("line-theme",{attrs:{options:e.resumeOptions()}})],1),e._v(" "),i("float-button",{on:{action:function(t){e.preview()}}})],1)],1)},staticRenderFns:[]};var Qe=i("VU/8")(Fe,Pe,!1,function(e){i("txdQ")},null,null).exports,qe={data:function(){return{}},methods:{resumeOptions:function(){var e=JSON.parse(window.localStorage.getItem("options")),t={},i=!0,n=!1,a=void 0;try{for(var s,l=Ee()(e.profile);!(i=(s=l.next()).done);i=!0){var o=s.value;t[o.key]=o.value}}catch(e){n=!0,a=e}finally{try{!i&&l.return&&l.return()}finally{if(n)throw a}}return{profile:t,experiences:e.experiences,skills:e.skills}}},components:{LineTheme:$e},mounted:function(){window.print()}},He={render:function(){var e=this.$createElement;return(this._self._c||e)("line-theme",{attrs:{options:this.resumeOptions()}})},staticRenderFns:[]};var Ie=i("VU/8")(qe,He,!1,function(e){i("RYks")},null,null).exports;ke.default.use(ge.a);var ze=new ge.a({routes:[{path:"/",name:"Home",component:Qe},{path:"/preview",name:"Preview",component:Ie}]});ke.default.use(be.a),ke.default.use(_e.a),ke.default.use(ve.a),ke.default.use(fe.a),ke.default.use(ce.a),ke.default.use(re.a),ke.default.use(le.a),ke.default.use(ae.a),ke.default.use(ie.a),ke.default.use(ee.a),ke.default.use(Z.a),ke.default.use(X.a),ke.default.use(B.a),ke.default.use(K.a),ke.default.use(z.a),ke.default.use(H.a),ke.default.use(Q.a),ke.default.use(F.a),ke.default.use(j.a),ke.default.use(V.a),ke.default.use(R.a),ke.default.use(U.a),ke.default.use(N.a),ke.default.use(E.a),ke.default.use(C.a),ke.default.use(g.a),ke.default.use(x.a),ke.default.use(b.a),ke.default.use(_.a),ke.default.use(v.a),ke.default.use(f.a),ke.default.use(c.a),ke.default.use(r.a),ke.default.use(l.a),ke.default.use(a.a.directive),ke.default.config.productionTip=!1,new ke.default({el:"#app",router:ze,components:{App:ye},template:"<App/>"})},OVQN:function(e,t){},RYks:function(e,t){},U3JS:function(e,t){},UJNC:function(e,t){},XYLo:function(e,t){},aMQw:function(e,t){},c1Vq:function(e,t){},dOjA:function(e,t){},eYIm:function(e,t){},eavy:function(e,t){},iMWL:function(e,t){},k2DR:function(e,t){},lxx2:function(e,t){},"nXj/":function(e,t){},nh25:function(e,t){},nok4:function(e,t){},phPM:function(e,t){},q3tj:function(e,t){},s6rd:function(e,t){},txdQ:function(e,t){},zkRu:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.70c7c67f73bcbcbf68c5.js.map