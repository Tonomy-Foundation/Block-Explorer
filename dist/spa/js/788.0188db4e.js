"use strict";(globalThis["webpackChunkopen_block_explorer"]=globalThis["webpackChunkopen_block_explorer"]||[]).push([[788],{64285:(e,t,o)=>{o.r(t),o.d(t,{default:()=>$e});var n=o(59835);function a(e,t,o,a,l,c){const s=(0,n.up)("AppHeader"),r=(0,n.up)("q-header"),i=(0,n.up)("router-view"),u=(0,n.up)("q-page-container"),d=(0,n.up)("AppFooter"),p=(0,n.up)("q-footer"),g=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(g,{view:"lHh lpR lff"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s)])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i)])),_:1}),(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d)])),_:1})])),_:1})}var l=o(86970);const c={class:"row footer-background justify-center text-center q-py-md"},s=["href"];function r(e,t,o,a,r,i){return(0,n.wg)(),(0,n.iD)("div",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.footerLinks,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.label,class:"col-lg-1 col-md-2 col-sm-2 col-xs-4 q-pa-md"},[(0,n._)("a",{class:"no-dec",href:e.url,target:"_blank"},(0,l.zw)(e.label),9,s)])))),128))])}var i=o(30229);const u={name:"AppFooter",setup(){const e=(0,n.Fl)((()=>i.Z.get().getCurrentChain().getFooterLinks()));return{footerLinks:e}}};var d=o(11639),p=o(77741),g=o(69984),h=o.n(g);const m=(0,d.Z)(u,[["render",r],["__scopeId","data-v-211b25c8"]]),f=m;h()(u,"components",{QColor:p.Z});const v={class:"header-background"},w={class:"row text-center q-pt-sm justify-between q-pt-md"},y={class:"logo-container col-xs-3 col-sm-2 col-md-2 col-lg-2"},b={class:"q-px-xs-xs q-px-sm-xs q-px-md-md q-px-lg-md"},_={class:"logo-header-container"},k={class:"logo-chain-selector-container"},Z={class:"float-left",href:"/"},q=["src"],x=["src"],L={className:"logo-text"},C={key:0,class:"testnet-text"},S={class:"col-xs-4 col-sm-6 col-md-4 col-lg-6"},H={class:"q-px-xs-xs q-px-sm-xs q-px-md-md q-px-lg-md"},W={class:"row justify-center full-width"},I={class:"col-12"},T={class:"row justify-center col-12 q-pt-sm"};function Q(e,t,o,a,c,s){const r=(0,n.up)("ChainsMenu"),i=(0,n.up)("HeaderSearch"),u=(0,n.up)("LoginHandler"),d=(0,n.up)("q-route-tab"),p=(0,n.up)("q-tabs");return(0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("div",w,[(0,n._)("div",y,[(0,n._)("div",b,[(0,n._)("div",_,[(0,n._)("div",k,[(0,n._)("a",Z,[e.isLarge?((0,n.wg)(),(0,n.iD)("img",{key:0,class:"logo",src:e.largeLogoPath},null,8,q)):((0,n.wg)(),(0,n.iD)("img",{key:1,class:"logo-token",src:e.smallLogoPath},null,8,x)),(0,n._)("p",L,(0,l.zw)(e.logoText),1)]),e.showMultichainSelector?((0,n.wg)(),(0,n.j4)(r,{key:0})):(0,n.kq)("",!0)]),e.isTestnet?((0,n.wg)(),(0,n.iD)("div",C,"Testnet")):(0,n.kq)("",!0)])])]),(0,n._)("div",S,[(0,n._)("div",H,[(0,n._)("div",W,[(0,n._)("div",I,[(0,n.Wm)(i)])])])]),e.headerSettings.hideLoginHandler?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(u,{key:0}))]),(0,n._)("div",T,[(0,n.Wm)(p,{"active-class":"active-tab","indicator-color":"white",align:"justify","narrow-indicator":"",color:"white"},{default:(0,n.w5)((()=>[e.headerSettings.hideNetworkTab?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(d,{key:0,class:"deactive",name:"network",label:"Network",to:"/network"})),!e.headerSettings.hideWalletTab&&e.account?((0,n.wg)(),(0,n.j4)(d,{key:1,class:"deactive",name:"wallet",label:"Wallet",to:"/account/"+e.account},null,8,["to"])):(0,n.kq)("",!0),e.headerSettings.hideVoteTab?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(d,{key:2,class:"deactive",name:"vote",label:"Vote",to:"/vote"})),e.headerSettings.hideProposalTab?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(d,{key:3,class:"deactive",name:"proposal",label:"Proposal",to:"/proposal"}))])),_:1})])])}var j=o(60499),z=o(19302);const M={class:"col-xs-5 col-sm-3 col-md-2 col-lg-2"},P={class:"q-px-xs-xs q-px-sm-xs q-px-md-md q-px-lg-md"};function A(e,t,o,a,l,c){const s=(0,n.up)("LoginHandlerDropdown"),r=(0,n.up)("q-btn"),i=(0,n.up)("WalletModal");return(0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("div",P,[e.account?((0,n.wg)(),(0,n.j4)(s,{key:0})):((0,n.wg)(),(0,n.j4)(r,{key:1,class:"button-primary btn-login",label:"Connect",onClick:t[0]||(t[0]=t=>e.showModal=!0)})),(0,n.Wm)(i,{modelValue:e.showModal,"onUpdate:modelValue":t[1]||(t[1]=t=>e.showModal=t)},null,8,["modelValue"])])])}const D=e=>((0,n.dD)("data-v-f3dc15d6"),e=e(),(0,n.Cn)(),e),N=["href"],V=D((()=>(0,n._)("div",{class:"row"},[(0,n._)("div",{class:"col-12"}," View my account ")],-1))),F=[V],O={class:"q-px-sm q-pb-sm"};function U(e,t,o,a,l,c){const s=(0,n.up)("q-card-section"),r=(0,n.up)("q-separator"),i=(0,n.up)("q-btn"),u=(0,n.up)("q-card"),d=(0,n.up)("q-btn-dropdown"),p=(0,n.up)("WalletModal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(d,{class:"connect-button",color:"primary",label:e.account,"content-style":{backgroundColor:"#172c6c"}},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"buttons-container"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{class:"account-link"},{default:(0,n.w5)((()=>[(0,n._)("a",{class:"text-white",href:"/account/"+e.account},F,8,N)])),_:1}),(0,n.Wm)(r,{dark:""}),(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n._)("div",O,[(0,n.Wm)(i,{class:"full-width",color:"primary",label:"Disconnect",onClick:e.onLogout},null,8,["onClick"])])])),_:1})])),_:1})])),_:1},8,["label"]),(0,n.Wm)(p,{modelValue:e.showModal,"onUpdate:modelValue":t[0]||(t[0]=t=>e.showModal=t)},null,8,["modelValue"])],64)}var E=o(79870),B=o(78504),G=o(84284),R=o(17779),$=function(e,t,o,n){function a(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,l){function c(e){try{r(n.next(e))}catch(t){l(t)}}function s(e){try{r(n["throw"](e))}catch(t){l(t)}}function r(e){e.done?o(e.value):a(e.value).then(c,s)}r((n=n.apply(e,t||[])).next())}))};const Y=(0,n.aZ)({name:"LoginHandlerDropdown",components:{WalletModal:E.Z},setup(){const e=(0,G.getAuthenticators)(),t=(0,B.useStore)(),o=(0,n.Fl)((()=>t.state.account.accountName)),a=(0,j.iH)(!1),l=()=>{const t=localStorage.getItem("autoLogin_"+(0,i.z)().getChainId()),o=e.find((e=>e.getName()===t));return o},c=()=>$(this,void 0,void 0,(function*(){const e=l();try{e&&(yield e.logout()),s()}catch(t){R.error("Authenticator logout error",t),s()}})),s=()=>{t.dispatch("account/logout")};return{account:o,showModal:a,disconnectLabel:"Disconnect",onLogout:c}}});var K=o(18479),J=o(44458),X=o(63190),ee=o(50926),te=o(68879),oe=o(56362),ne=o(13246);const ae=(0,d.Z)(Y,[["render",U],["__scopeId","data-v-f3dc15d6"]]),le=ae;h()(Y,"components",{QBtnDropdown:K.Z,QCard:J.Z,QCardSection:X.Z,QSeparator:ee.Z,QBtn:te.Z,QMenu:oe.Z,QList:ne.Z,QColor:p.Z});const ce=(0,n.aZ)({name:"LoginHandler",components:{LoginHandlerDropdown:le,WalletModal:E.Z},setup(){const e=(0,G.getAuthenticators)(),t=(0,B.useStore)(),o=(0,j.iH)(!1),a=(0,j.iH)(!1),l=(0,n.Fl)((()=>t.state.account.accountName));return(0,n.bv)((()=>{const o=localStorage.getItem("account_"+(0,i.z)().getChainId());if(o){t.commit("account/setAccountName",o);const n=localStorage.getItem("autoLogin_"+(0,i.z)().getChainId()),a=e.find((e=>e.getName()===n));t.dispatch("account/login",{account:o,authenticator:a})}})),{showDropdown:o,showModal:a,account:l}}}),se=(0,d.Z)(ce,[["render",A],["__scopeId","data-v-77aac5ae"]]),re=se;h()(ce,"components",{QBtn:te.Z});var ie=o(61957);const ue=(0,n.Uk)("Searching...");function de(e,t,o,a,c,s){const r=(0,n.up)("q-icon"),i=(0,n.up)("q-item-label"),u=(0,n.up)("q-item-section"),d=(0,n.up)("q-item"),p=(0,n.up)("q-select");return(0,n.wg)(),(0,n.j4)(p,{borderless:"",dense:"",filled:"","use-input":"","hide-selected":"","fill-input":"","hide-bottom-space":"","input-style":"color:white",color:"white",loading:e.isLoading,"model-value":e.inputValue,options:e.options,"option-disable":e=>e.isHeader,class:"search-input",onInputValue:t[0]||(t[0]=t=>e.inputValue=t),onKeyup:(0,ie.D2)(e.handleGoTo,["enter"])},{prepend:(0,n.w5)((()=>[(0,n.Wm)(r,{class:"rotate-90",name:"search",color:"white",size:"20px"})])),"no-option":(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{class:"text-center"},{default:(0,n.w5)((()=>[e.isLoading?((0,n.wg)(),(0,n.j4)(i,{key:0},{default:(0,n.w5)((()=>[ue])),_:1})):((0,n.wg)(),(0,n.j4)(i,{key:1},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.inputValue?"Nothing found":"Search by accounts, keys, proposals and transactions"),1)])),_:1}))])),_:1})])),_:1})])),option:(0,n.w5)((t=>[t.opt.isHeader?((0,n.wg)(),(0,n.j4)(i,{key:0,header:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(t.opt.label),1)])),_:2},1024)):((0,n.wg)(),(0,n.j4)(d,(0,n.dG)({key:1},t.itemProps,{exact:"exact",clickable:"clickable",onClick:o=>e.handleGoTo(t.opt.to)}),{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(t.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040,["onClick"]))])),_:1},8,["loading","model-value","options","option-disable","onKeyup"])}var pe=o(18910),ge=o(21889),he=o(90347),me=o(71130),fe=function(e,t,o,n){function a(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,l){function c(e){try{r(n.next(e))}catch(t){l(t)}}function s(e){try{r(n["throw"](e))}catch(t){l(t)}}function r(e){e.done?o(e.value):a(e.value).then(c,s)}r((n=n.apply(e,t||[])).next())}))};const ve=(0,n.aZ)({name:"HeaderSearch",setup(){const e=(0,pe.tv)(),t=(0,z.Z)(),o=(0,j.iH)(""),a=(0,j.iH)([]),l=(0,j.iH)(!1),c=()=>fe(this,void 0,void 0,(function*(){if(""===o.value)return void(a.value=[]);l.value=!0;const e=o.value.toLowerCase();yield Promise.all([r(e),i(e),d(e)]).then((e=>{a.value=[].concat.apply([],e)})),l.value=!1})),s=(0,me.D)(c,200);function r(e){return fe(this,void 0,void 0,(function*(){try{const t=[],o={code:"eosio",limit:5,lower_bound:u(e),table:"userres",upper_bound:e.padEnd(12,"z")},n=yield ge.h.getTableByScope(o);return e.includes("eosio")&&n.unshift({payer:"eosio"}),n.length>0&&(t.push({label:"Accounts",to:"",isHeader:!0}),n.forEach((o=>{o.payer.includes(e)&&t.push({label:o.payer,to:`/account/${o.payer}`,isHeader:!1})}))),t}catch(t){return}}))}function i(e){return fe(this,void 0,void 0,(function*(){try{const t=[],{proposals:o}=yield ge.h.getProposals({proposal:e});return o.length>0&&(t.push({label:"Proposals",to:"",isHeader:!0}),o.forEach((e=>{t.push({label:e.proposal_name,to:`/proposal/${e.proposal_name}`,isHeader:!1})}))),t}catch(t){return}}))}function u(e){return e.replace(/^[\s.]+|[\s.]+$/g,"")}function d(e){return fe(this,void 0,void 0,(function*(){const t=[];if(64!==e.length)return t;try{const o=yield ge.h.getTransaction(e);return(null===o||void 0===o?void 0:o.actions)&&(t.push({label:"Transactions",to:"",isHeader:!0}),t.push({label:e,to:`/transaction/${e}`,isHeader:!1})),t}catch(o){return}}))}function p(n){return fe(this,void 0,void 0,(function*(){if(o.value)if("string"===typeof n&&(yield e.push(n),e.go(0)),(0,he.RJ)(o.value))yield e.push({name:"transaction",params:{transaction:o.value}}),e.go(0);else if(53===o.value.length&&o.value.startsWith("EOS")||57===o.value.length&&o.value.startsWith("PUB_K1"))yield e.push({name:"key",params:{key:o.value}}),e.go(0);else if(o.value.length<=13)try{return yield ge.h.getAccount(o.value.toLowerCase()),yield e.push({name:"account",params:{account:o.value.toLowerCase()}}),void e.go(0)}catch(a){t.notify(`account ${o.value} not found!`)}}))}return(0,n.YP)(o,s),{inputValue:o,options:a,isLoading:l,handleGoTo:p}}});var we=o(32259),ye=o(22857),be=o(490),_e=o(76749),ke=o(33115);const Ze=(0,d.Z)(ve,[["render",de]]),qe=Ze;h()(ve,"components",{QSelect:we.Z,QIcon:ye.Z,QItem:be.Z,QItemSection:_e.Z,QItemLabel:ke.Z});const xe={class:"chains-menu"};function Le(e,t,o,a,l,c){const s=(0,n.up)("q-icon"),r=(0,n.up)("ChainsListSelector"),i=(0,n.up)("q-menu"),u=(0,n.up)("q-btn");return e.hasChainsInstalled?((0,n.wg)(),(0,n.j4)(u,{key:0,flat:"",class:"chain-button"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{name:e.menuIcon,size:"md"},null,8,["name"]),(0,n.Wm)(i,{modelValue:e.menuOpened,"onUpdate:modelValue":t[0]||(t[0]=t=>e.menuOpened=t)},{default:(0,n.w5)((()=>[(0,n._)("div",xe,[(0,n.Wm)(r,{"on-chain-selected":e.chainSelected,"is-chain-selected":e.isChainSelected},null,8,["on-chain-selected","is-chain-selected"])])])),_:1},8,["modelValue"])])),_:1})):(0,n.kq)("",!0)}var Ce=o(54397);const Se=i.Z.get(),He=(0,n.aZ)({name:"ChainsMenu",components:{ChainsListSelector:Ce.Z},setup(){const e=(0,j.iH)(!1),t=(0,pe.yj)(),o=(0,pe.tv)(),a=(0,n.Fl)((()=>e.value?"expand_less":"expand_more")),l=(0,n.Fl)((()=>Se.getAllChains().length>0));function c(){e.value=!1}function s(e){return sessionStorage.getItem(i.Z.CHAIN_LOCAL_STORAGE)===e.getName()}return(0,n.bv)((()=>{const e=sessionStorage.getItem(i.Z.CHAIN_LOCAL_STORAGE);if(null===e){const e=Se.getMainnets(),n=e.filter((e=>"telos"===e.getName()))[0];s(n)||o.push({path:t.path,query:{network:n.getName()}})}})),{menuOpened:e,menuIcon:a,chainSelected:c,isChainSelected:s,hasChainsInstalled:l}}}),We=(0,d.Z)(He,[["render",Le],["__scopeId","data-v-92d31b56"]]),Ie=We;h()(He,"components",{QBtn:te.Z,QIcon:ye.Z,QMenu:oe.Z});var Te=o(91669),Qe=o(3168);const je=(0,n.aZ)({name:"AppHeader",components:{LoginHandler:re,HeaderSearch:qe,ChainsMenu:Ie},setup(){const e=(0,z.Z)(),t=(0,B.useStore)(),o=(0,n.Fl)((()=>i.Z.get().getCurrentChain().getUiCustomization().headerSettings)),a=(0,n.Fl)((()=>t.state.account.accountName)),l=(0,n.Fl)((()=>e.screen.gt.sm)),c=(0,n.Fl)((()=>"true"===Qe.env.SHOW_MULTICHAIN_SELECTOR)),s=(0,j.iH)((0,i.z)().isTestnet()),r=(0,j.iH)((0,i.z)().getSmallLogoPath()),u=(0,j.iH)((0,i.z)().getLargeLogoPath()),d=(0,j.iH)((0,i.z)().getDisplay()),p=(0,Te.c)();return(0,n.YP)(p,(()=>{r.value=(0,i.z)().getSmallLogoPath(),u.value=(0,i.z)().getLargeLogoPath(),s.value=(0,i.z)().isTestnet()})),{headerSettings:o,account:a,isLarge:l,showMultichainSelector:c,smallLogoPath:r,largeLogoPath:u,isTestnet:s,logoText:d}}});var ze=o(47817),Me=o(73333),Pe=o(57661);const Ae=(0,d.Z)(je,[["render",Q],["__scopeId","data-v-15e1773f"]]),De=Ae;h()(je,"components",{QTabs:ze.Z,QRouteTab:Me.Z,QTab:Pe.Z,QColor:p.Z});var Ne=o(57674);const Ve=["primary","secondary","accent","dark","positive","negative","info","warning","color-map","color-primary-gradient","color-secondary-gradient","color-tertiary-gradient","color-progress-gradient","color-producer-card-background","color-select-box-background","color-header-background","color-header-text","color-header-border","color-header-support-background","color-graph-shadow","color-footer-background"];var Fe=o(76510);const Oe=(0,n.aZ)({name:"MainLayout",components:{AppHeader:De,AppFooter:f},setup(){const e=(0,Te.c)();function t(){const e=(0,i.z)().getTheme();for(let t of Ve)e[t]?(0,Ne.Z)(t,e[t]):(0,Ne.Z)(t,Fe.t0[t])}function o(){const e=(0,i.z)().getName();let t=document.querySelector('link[rel~="icon"]');t.href=`chains/${e}/favicon.png`,document.title=e}return(0,n.YP)(e,(()=>{t(),o()})),(0,n.bv)((()=>{t(),o()})),{networkChain:e}}});var Ue=o(77605),Ee=o(16602),Be=o(12133),Ge=o(71378);const Re=(0,d.Z)(Oe,[["render",a]]),$e=Re;h()(Oe,"components",{QLayout:Ue.Z,QHeader:Ee.Z,QPageContainer:Be.Z,QFooter:Ge.Z})}}]);