"use strict";(globalThis["webpackChunkopen_block_explorer"]=globalThis["webpackChunkopen_block_explorer"]||[]).push([[371],{40281:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Ge});var n=o(59835);function a(e,t,o,a,l,c){const s=(0,n.up)("AppHeader"),r=(0,n.up)("q-header"),i=(0,n.up)("router-view"),u=(0,n.up)("q-page-container"),d=(0,n.up)("AppFooter"),p=(0,n.up)("q-footer"),h=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(h,{view:"lHh lpR lff"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s)])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i)])),_:1}),(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d)])),_:1})])),_:1})}var l=o(86970);const c={class:"row footer-background justify-center text-center q-py-md"},s=["href"];function r(e,t,o,a,r,i){return(0,n.wg)(),(0,n.iD)("div",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.footerLinks,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.label,class:"col-lg-1 col-md-2 col-sm-2 col-xs-4 q-pa-md"},[(0,n._)("a",{class:"no-dec",href:e.url,target:"_blank"},(0,l.zw)(e.label),9,s)])))),128))])}var i=o(30229);const u={name:"AppFooter",setup(){const e=(0,n.Fl)((()=>i.Z.get().getCurrentChain().getFooterLinks()));return{footerLinks:e}}};var d=o(11639),p=o(77741),h=o(69984),g=o.n(h);const m=(0,d.Z)(u,[["render",r],["__scopeId","data-v-211b25c8"]]),f=m;g()(u,"components",{QColor:p.Z});const v={class:"header-background"},w={class:"row text-center q-pt-sm justify-between q-pt-md"},b={class:"logo-container col-xs-3 col-sm-2 col-md-2 col-lg-2"},y={class:"q-px-xs-xs q-px-sm-xs q-px-md-md q-px-lg-md"},_={class:"logo-header-container"},k={class:"logo-chain-selector-container"},Z={class:"float-left",href:"/"},q=["src"],L=["src"],x={key:0,class:"testnet-text"},C={class:"col-xs-4 col-sm-6 col-md-4 col-lg-6"},H={class:"q-px-xs-xs q-px-sm-xs q-px-md-md q-px-lg-md"},S={class:"row justify-center full-width"},W={class:"col-12"},I={class:"row justify-center col-12 q-pt-sm"};function T(e,t,o,a,l,c){const s=(0,n.up)("ChainsMenu"),r=(0,n.up)("HeaderSearch"),i=(0,n.up)("LoginHandler"),u=(0,n.up)("q-route-tab"),d=(0,n.up)("q-tabs");return(0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("div",w,[(0,n._)("div",b,[(0,n._)("div",y,[(0,n._)("div",_,[(0,n._)("div",k,[(0,n._)("a",Z,[e.isLarge?((0,n.wg)(),(0,n.iD)("img",{key:0,class:"logo",src:e.largeLogoPath},null,8,q)):((0,n.wg)(),(0,n.iD)("img",{key:1,class:"logo-token",src:e.smallLogoPath},null,8,L))]),e.showMultichainSelector?((0,n.wg)(),(0,n.j4)(s,{key:0})):(0,n.kq)("",!0)]),e.isTestnet?((0,n.wg)(),(0,n.iD)("div",x,"TESTNET")):(0,n.kq)("",!0)])])]),(0,n._)("div",C,[(0,n._)("div",H,[(0,n._)("div",S,[(0,n._)("div",W,[(0,n.Wm)(r)])])])]),e.headerSettings.hideLoginHandler?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(i,{key:0}))]),(0,n._)("div",I,[(0,n.Wm)(d,{"active-class":"active-tab","indicator-color":"white",align:"justify","narrow-indicator":"",color:"white"},{default:(0,n.w5)((()=>[e.headerSettings.hideNetworkTab?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(u,{key:0,class:"deactive",name:"network",label:"Network",to:"/network"})),!e.headerSettings.hideWalletTab&&e.account?((0,n.wg)(),(0,n.j4)(u,{key:1,class:"deactive",name:"wallet",label:"Wallet",to:"/account/"+e.account},null,8,["to"])):(0,n.kq)("",!0),e.headerSettings.hideVoteTab?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(u,{key:2,class:"deactive",name:"vote",label:"Vote",to:"/vote"})),e.headerSettings.hideProposalTab?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(u,{key:3,class:"deactive",name:"proposal",label:"Proposal",to:"/proposal"}))])),_:1})])])}var Q=o(60499),j=o(19302);const M={class:"col-xs-5 col-sm-3 col-md-2 col-lg-2"},P={class:"q-px-xs-xs q-px-sm-xs q-px-md-md q-px-lg-md"};function A(e,t,o,a,l,c){const s=(0,n.up)("LoginHandlerDropdown"),r=(0,n.up)("q-btn"),i=(0,n.up)("WalletModal");return(0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("div",P,[e.account?((0,n.wg)(),(0,n.j4)(s,{key:0})):((0,n.wg)(),(0,n.j4)(r,{key:1,class:"button-primary btn-login",label:"Connect",onClick:t[0]||(t[0]=t=>e.showModal=!0)})),(0,n.Wm)(i,{modelValue:e.showModal,"onUpdate:modelValue":t[1]||(t[1]=t=>e.showModal=t)},null,8,["modelValue"])])])}const z=e=>((0,n.dD)("data-v-f3dc15d6"),e=e(),(0,n.Cn)(),e),D=["href"],N=z((()=>(0,n._)("div",{class:"row"},[(0,n._)("div",{class:"col-12"}," View my account ")],-1))),V=[N],F={class:"q-px-sm q-pb-sm"};function E(e,t,o,a,l,c){const s=(0,n.up)("q-card-section"),r=(0,n.up)("q-separator"),i=(0,n.up)("q-btn"),u=(0,n.up)("q-card"),d=(0,n.up)("q-btn-dropdown"),p=(0,n.up)("WalletModal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(d,{class:"connect-button",color:"primary",label:e.account,"content-style":{backgroundColor:"#172c6c"}},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"buttons-container"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{class:"account-link"},{default:(0,n.w5)((()=>[(0,n._)("a",{class:"text-white",href:"/account/"+e.account},V,8,D)])),_:1}),(0,n.Wm)(r,{dark:""}),(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n._)("div",F,[(0,n.Wm)(i,{class:"full-width",color:"primary",label:"Disconnect",onClick:e.onLogout},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["label"]),(0,n.Wm)(p,{modelValue:e.showModal,"onUpdate:modelValue":t[0]||(t[0]=t=>e.showModal=t)},null,8,["modelValue"])],64)}var O=o(79870),U=o(78504),R=o(84284),B=o(17779),G=function(e,t,o,n){function a(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,l){function c(e){try{r(n.next(e))}catch(t){l(t)}}function s(e){try{r(n["throw"](e))}catch(t){l(t)}}function r(e){e.done?o(e.value):a(e.value).then(c,s)}r((n=n.apply(e,t||[])).next())}))};const $=(0,n.aZ)({name:"LoginHandlerDropdown",components:{WalletModal:O.Z},setup(){const e=(0,R.getAuthenticators)(),t=(0,U.oR)(),o=(0,n.Fl)((()=>t.state.account.accountName)),a=(0,Q.iH)(!1),l=()=>{const t=localStorage.getItem("autoLogin_"+(0,i.z)().getChainId()),o=e.find((e=>e.getName()===t));return o},c=()=>G(this,void 0,void 0,(function*(){const e=l();try{e&&(yield e.logout()),s()}catch(t){B.error("Authenticator logout error",t),s()}})),s=()=>{t.dispatch("account/logout")};return{account:o,showModal:a,disconnectLabel:"Disconnect",onLogout:c}}});var Y=o(18479),K=o(44458),J=o(63190),X=o(50926),ee=o(68879),te=o(56362),oe=o(13246);const ne=(0,d.Z)($,[["render",E],["__scopeId","data-v-f3dc15d6"]]),ae=ne;g()($,"components",{QBtnDropdown:Y.Z,QCard:K.Z,QCardSection:J.Z,QSeparator:X.Z,QBtn:ee.Z,QMenu:te.Z,QList:oe.Z,QColor:p.Z});const le=(0,n.aZ)({name:"LoginHandler",components:{LoginHandlerDropdown:ae,WalletModal:O.Z},setup(){const e=(0,R.getAuthenticators)(),t=(0,U.oR)(),o=(0,Q.iH)(!1),a=(0,Q.iH)(!1),l=(0,n.Fl)((()=>t.state.account.accountName));return(0,n.bv)((()=>{const o=localStorage.getItem("account_"+(0,i.z)().getChainId());if(o){t.commit("account/setAccountName",o);const n=localStorage.getItem("autoLogin_"+(0,i.z)().getChainId()),a=e.find((e=>e.getName()===n));t.dispatch("account/login",{account:o,authenticator:a})}})),{showDropdown:o,showModal:a,account:l}}}),ce=(0,d.Z)(le,[["render",A],["__scopeId","data-v-77aac5ae"]]),se=ce;g()(le,"components",{QBtn:ee.Z});var re=o(61957);const ie=(0,n.Uk)("Searching...");function ue(e,t,o,a,c,s){const r=(0,n.up)("q-icon"),i=(0,n.up)("q-item-label"),u=(0,n.up)("q-item-section"),d=(0,n.up)("q-item"),p=(0,n.up)("q-select");return(0,n.wg)(),(0,n.j4)(p,{borderless:"",dense:"",filled:"","use-input":"","hide-selected":"","fill-input":"","hide-bottom-space":"","input-style":"color:white",color:"white",loading:e.isLoading,"model-value":e.inputValue,options:e.options,"option-disable":e=>e.isHeader,class:"search-input",onInputValue:t[0]||(t[0]=t=>e.inputValue=t),onKeyup:(0,re.D2)(e.handleGoTo,["enter"])},{prepend:(0,n.w5)((()=>[(0,n.Wm)(r,{class:"rotate-90",name:"search",color:"white",size:"20px"})])),"no-option":(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"text-center"},{default:(0,n.w5)((()=>[e.isLoading?((0,n.wg)(),(0,n.j4)(i,{key:0},{default:(0,n.w5)((()=>[ie])),_:1})):((0,n.wg)(),(0,n.j4)(i,{key:1},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.inputValue?"Nothing found":"Search by accounts, keys, proposals and transactions"),1)])),_:1}))])),_:1})])),_:1})])),option:(0,n.w5)((t=>[t.opt.isHeader?((0,n.wg)(),(0,n.j4)(i,{key:0,header:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(t.opt.label),1)])),_:2},1024)):((0,n.wg)(),(0,n.j4)(d,(0,n.dG)({key:1},t.itemProps,{exact:"exact",clickable:"clickable",onClick:o=>e.handleGoTo(t.opt.to)}),{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(t.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040,["onClick"]))])),_:1},8,["loading","model-value","options","option-disable","onKeyup"])}var de=o(18910),pe=o(21889),he=o(90347),ge=o(71130),me=function(e,t,o,n){function a(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,l){function c(e){try{r(n.next(e))}catch(t){l(t)}}function s(e){try{r(n["throw"](e))}catch(t){l(t)}}function r(e){e.done?o(e.value):a(e.value).then(c,s)}r((n=n.apply(e,t||[])).next())}))};const fe=(0,n.aZ)({name:"HeaderSearch",setup(){const e=(0,de.tv)(),t=(0,j.Z)(),o=(0,Q.iH)(""),a=(0,Q.iH)([]),l=(0,Q.iH)(!1),c=()=>me(this,void 0,void 0,(function*(){if(""===o.value)return void(a.value=[]);l.value=!0;const e=o.value.toLowerCase();yield Promise.all([r(e),i(e),d(e)]).then((e=>{a.value=[].concat.apply([],e)})),l.value=!1})),s=(0,ge.D)(c,200);function r(e){return me(this,void 0,void 0,(function*(){try{const t=[],o={code:"eosio",limit:5,lower_bound:u(e),table:"userres",upper_bound:e.padEnd(12,"z")},n=yield pe.h.getTableByScope(o);return e.includes("eosio")&&n.unshift({payer:"eosio"}),n.length>0&&(t.push({label:"Accounts",to:"",isHeader:!0}),n.forEach((o=>{o.payer.includes(e)&&t.push({label:o.payer,to:`/account/${o.payer}`,isHeader:!1})}))),t}catch(t){return}}))}function i(e){return me(this,void 0,void 0,(function*(){try{const t=[],{proposals:o}=yield pe.h.getProposals({proposal:e});return o.length>0&&(t.push({label:"Proposals",to:"",isHeader:!0}),o.forEach((e=>{t.push({label:e.proposal_name,to:`/proposal/${e.proposal_name}`,isHeader:!1})}))),t}catch(t){return}}))}function u(e){return e.replace(/^[\s.]+|[\s.]+$/g,"")}function d(e){return me(this,void 0,void 0,(function*(){const t=[];if(64!==e.length)return t;try{const o=yield pe.h.getTransaction(e);return(null===o||void 0===o?void 0:o.actions)&&(t.push({label:"Transactions",to:"",isHeader:!0}),t.push({label:e,to:`/transaction/${e}`,isHeader:!1})),t}catch(o){return}}))}function p(n){return me(this,void 0,void 0,(function*(){if(o.value)if("string"===typeof n&&(yield e.push(n),e.go(0)),(0,he.RJ)(o.value))yield e.push({name:"transaction",params:{transaction:o.value}}),e.go(0);else if(53===o.value.length&&o.value.startsWith("EOS")||57===o.value.length&&o.value.startsWith("PUB_K1"))yield e.push({name:"key",params:{key:o.value}}),e.go(0);else if(o.value.length<=13)try{return yield pe.h.getAccount(o.value.toLowerCase()),yield e.push({name:"account",params:{account:o.value.toLowerCase()}}),void e.go(0)}catch(a){t.notify(`account ${o.value} not found!`)}}))}return(0,n.YP)(o,s),{inputValue:o,options:a,isLoading:l,handleGoTo:p}}});var ve=o(32259),we=o(22857),be=o(490),ye=o(76749),_e=o(33115);const ke=(0,d.Z)(fe,[["render",ue]]),Ze=ke;g()(fe,"components",{QSelect:ve.Z,QIcon:we.Z,QItem:be.Z,QItemSection:ye.Z,QItemLabel:_e.Z});const qe={class:"chains-menu"};function Le(e,t,o,a,l,c){const s=(0,n.up)("q-icon"),r=(0,n.up)("ChainsListSelector"),i=(0,n.up)("q-menu"),u=(0,n.up)("q-btn");return e.hasChainsInstalled?((0,n.wg)(),(0,n.j4)(u,{key:0,flat:"",class:"chain-button"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{name:e.menuIcon,size:"md"},null,8,["name"]),(0,n.Wm)(i,{modelValue:e.menuOpened,"onUpdate:modelValue":t[0]||(t[0]=t=>e.menuOpened=t)},{default:(0,n.w5)((()=>[(0,n._)("div",qe,[(0,n.Wm)(r,{"on-chain-selected":e.chainSelected,"is-chain-selected":e.isChainSelected},null,8,["on-chain-selected","is-chain-selected"])])])),_:1},8,["modelValue"])])),_:1})):(0,n.kq)("",!0)}var xe=o(54397);const Ce=i.Z.get(),He=(0,n.aZ)({name:"ChainsMenu",components:{ChainsListSelector:xe.Z},setup(){const e=(0,Q.iH)(!1),t=(0,de.yj)(),o=(0,de.tv)(),a=(0,n.Fl)((()=>e.value?"expand_less":"expand_more")),l=(0,n.Fl)((()=>Ce.getAllChains().length>0));function c(){e.value=!1}function s(e){return sessionStorage.getItem(i.Z.CHAIN_LOCAL_STORAGE)===e.getName()}return(0,n.bv)((()=>{const e=sessionStorage.getItem(i.Z.CHAIN_LOCAL_STORAGE);if(null===e){const e=Ce.getMainnets(),n=e.filter((e=>"telos"===e.getName()))[0];s(n)||o.push({path:t.path,query:{network:n.getName()}})}})),{menuOpened:e,menuIcon:a,chainSelected:c,isChainSelected:s,hasChainsInstalled:l}}}),Se=(0,d.Z)(He,[["render",Le],["__scopeId","data-v-92d31b56"]]),We=Se;g()(He,"components",{QBtn:ee.Z,QIcon:we.Z,QMenu:te.Z});var Ie=o(91669),Te=o(3168);const Qe=(0,n.aZ)({name:"AppHeader",components:{LoginHandler:se,HeaderSearch:Ze,ChainsMenu:We},setup(){const e=(0,j.Z)(),t=(0,U.oR)(),o=(0,n.Fl)((()=>i.Z.get().getCurrentChain().getUiCustomization().headerSettings)),a=(0,n.Fl)((()=>t.state.account.accountName)),l=(0,n.Fl)((()=>e.screen.gt.sm)),c=(0,n.Fl)((()=>"true"===Te.env.SHOW_MULTICHAIN_SELECTOR)),s=(0,Q.iH)((0,i.z)().isTestnet()),r=(0,Q.iH)((0,i.z)().getSmallLogoPath()),u=(0,Q.iH)((0,i.z)().getLargeLogoPath()),d=(0,Ie.c)();return(0,n.YP)(d,(()=>{r.value=(0,i.z)().getSmallLogoPath(),u.value=(0,i.z)().getLargeLogoPath(),s.value=(0,i.z)().isTestnet()})),{headerSettings:o,account:a,isLarge:l,showMultichainSelector:c,smallLogoPath:r,largeLogoPath:u,isTestnet:s}}});var je=o(47817),Me=o(73333),Pe=o(57661);const Ae=(0,d.Z)(Qe,[["render",T],["__scopeId","data-v-56ed5d95"]]),ze=Ae;g()(Qe,"components",{QTabs:je.Z,QRouteTab:Me.Z,QTab:Pe.Z,QColor:p.Z});var De=o(57674);const Ne=["primary","secondary","accent","dark","positive","negative","info","warning","color-map","color-primary-gradient","color-secondary-gradient","color-tertiary-gradient","color-progress-gradient","color-producer-card-background","color-select-box-background","color-header-background","color-header-text","color-header-border","color-header-support-background","color-graph-shadow","color-footer-background"];var Ve=o(76510);const Fe=(0,n.aZ)({name:"MainLayout",components:{AppHeader:ze,AppFooter:f},setup(){const e=(0,Ie.c)();function t(){const e=(0,i.z)().getTheme();for(let t of Ne)e[t]?(0,De.Z)(t,e[t]):(0,De.Z)(t,Ve.t0[t])}function o(){const e=(0,i.z)().getName();let t=document.querySelector('link[rel~="icon"]');t.href=`chains/${e}/favicon.png`,document.title=e}return(0,n.YP)(e,(()=>{t(),o()})),(0,n.bv)((()=>{t(),o()})),{networkChain:e}}});var Ee=o(77605),Oe=o(16602),Ue=o(12133),Re=o(71378);const Be=(0,d.Z)(Fe,[["render",a]]),Ge=Be;g()(Fe,"components",{QLayout:Ee.Z,QHeader:Oe.Z,QPageContainer:Ue.Z,QFooter:Re.Z})}}]);