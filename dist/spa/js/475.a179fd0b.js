"use strict";(globalThis["webpackChunkopen_block_explorer"]=globalThis["webpackChunkopen_block_explorer"]||[]).push([[475],{44475:(e,o,t)=>{t.r(o),t.d(o,{default:()=>Qo});var a=t(59835);const l={class:"row justify-between items-center q-py-lg"},n=(0,a._)("h1",{class:"text-h5 q-ma-none"},"New Proposal Multisig Transaction",-1),s={class:"row"},i=(0,a._)("span",{class:"text-h6 text-weight-regular"},"Proposal Info",-1),r={class:"row q-col-gutter-md q-pa-md"},c={class:"col-12 col-sm-6"},u=(0,a._)("ul",{class:"q-px-lg q-py-none"},[(0,a._)("li",null,"Minimum of 2 characters"),(0,a._)("li",null,"Maximum of 13 characters"),(0,a._)("li",null,'First 12 characters can be “a-z” or “1-5" or “.”'),(0,a._)("li",null,"13th character can only be “a-j” or “1-5”"),(0,a._)("li",null,"Last character can not be “.”")],-1),d={class:"col-12 col-sm-6"},m=(0,a._)("span",{class:"text-h6 text-weight-regular"},"Requested approvals",-1),p={class:"q-pa-md"},f={class:"q-pb-md"},v=(0,a._)("span",{class:"text-body1"},"All block producers need approvals",-1),h=(0,a._)("span",{class:"text-h6 text-weight-regular"},"Advanced transaction settings",-1),w={class:"row q-col-gutter-md q-pa-md"},_={class:"col-12 col-sm-6"},b={class:"col-12 col-sm-6"},g={class:"col-12 col-sm-6"},x={class:"col-12 col-sm-6"},y={class:"col-12 col-sm-6"},q={class:"col-12 col-sm-6"},V={class:"row items-center justify-end"},k={class:"col"},W={class:"row items-center justify-end"},D={class:"col-12 col-sm-6"},U={class:"col-12 col-sm-6"},Z={class:"row justify-center items-center q-py-lg"};function A(e,o,t,A,S,P){const Q=(0,a.up)("ProposalSuccess"),z=(0,a.up)("q-btn"),T=(0,a.up)("q-separator"),C=(0,a.up)("q-icon"),j=(0,a.up)("q-tooltip"),I=(0,a.up)("q-input"),H=(0,a.up)("q-expansion-item"),Y=(0,a.up)("q-card"),N=(0,a.up)("ProposalAuthorization"),O=(0,a.up)("q-checkbox"),M=(0,a.up)("q-item-section"),F=(0,a.up)("q-item"),E=(0,a.up)("q-date"),B=(0,a.up)("q-popup-proxy"),L=(0,a.up)("q-time"),R=(0,a.up)("ProposalAction"),K=(0,a.up)("q-tab"),$=(0,a.up)("q-tabs"),J=(0,a.up)("q-tab-panel"),G=(0,a.up)("ProposalUploadCSV"),X=(0,a.up)("q-tab-panels"),ee=(0,a.up)("q-form"),oe=(0,a.up)("q-page"),te=(0,a.Q2)("ripple"),ae=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(Q,{modelValue:e.success.showModal,"onUpdate:modelValue":o[0]||(o[0]=o=>e.success.showModal=o),transactionId:e.success.transactionId,proposalName:e.success.proposalName},null,8,["modelValue","transactionId","proposalName"]),(0,a.Wm)(oe,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(ee,{greedy:"",onSubmit:e.onSubmit},{default:(0,a.w5)((()=>[(0,a._)("div",l,[n,(0,a._)("div",s,[(0,a.Wm)(z,{outline:"",class:"q-mr-sm",padding:"sm md",color:"white","text-color":"primary",label:"Cancel",to:"/proposal"}),(0,a.Wm)(z,{unelevated:"",padding:"sm md",color:"primary",label:"Send proposal",type:"submit"})])]),(0,a.Wm)(T),(0,a.Wm)(Y,{flat:"",class:"q-mt-md proposal-success__card--background"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{"switch-toggle-side":"","default-opened":""},{header:(0,a.w5)((()=>[i])),default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a._)("div",c,[(0,a.Wm)(I,{modelValue:e.formData.proposal_name,"onUpdate:modelValue":o[1]||(o[1]=o=>e.formData.proposal_name=o),outlined:"",dense:"","hide-bottom-space":"","lazy-rules":"","bg-color":"white",label:"Proposal Name",maxlength:"13",rules:[e=>!!e||"Field is required",e=>/(^[a-z1-5.]{1,11}[a-z1-5]$)|(^[a-z1-5.]{12}[a-j1-5]$)/.test(e)||"Must be up to 12 characters (a-z, 1-5, .) and cannot end with a ."]},{append:(0,a.w5)((()=>[(0,a.Wm)(C,{name:"info"}),(0,a.Wm)(j,{class:"text-body2"},{default:(0,a.w5)((()=>[u])),_:1})])),_:1},8,["modelValue","rules"])]),(0,a._)("div",d,[(0,a.Wm)(I,{modelValue:e.formData.proposer,"onUpdate:modelValue":o[2]||(o[2]=o=>e.formData.proposer=o),outlined:"",dense:"","hide-bottom-space":"","lazy-rules":"",readonly:"","bg-color":"white",label:"Proposer",maxlength:"12",rules:[e=>!!e||"Field is required"]},null,8,["modelValue","rules"])])])])),_:1})])),_:1}),(0,a.Wm)(Y,{flat:"",class:"q-mt-xs proposal-success__card--background"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{"switch-toggle-side":"","default-opened":""},{header:(0,a.w5)((()=>[m])),default:(0,a.w5)((()=>[(0,a._)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.formData.requested,((o,t)=>((0,a.wg)(),(0,a.j4)(N,{key:t,actor:o.actor,"onUpdate:actor":e=>o.actor=e,permission:o.permission,"onUpdate:permission":e=>o.permission=e,onRemove:o=>e.formData.requested.splice(t,1)},null,8,["actor","onUpdate:actor","permission","onUpdate:permission","onRemove"])))),128)),(0,a.Wm)(z,{outline:"",padding:"sm md",color:"white","text-color":"primary",label:"Add",onClick:o[3]||(o[3]=o=>e.formData.requested.push({actor:"",permission:""}))})]),(0,a.Wm)(T,{class:"q-my-md"}),(0,a._)("div",f,[e.blockProducers.length?(0,a.wy)(((0,a.wg)(),(0,a.j4)(F,{key:0,tag:"label"},{default:(0,a.w5)((()=>[(0,a.Wm)(M,{side:"",top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(O,{modelValue:e.areBlockProducersApproving,"onUpdate:modelValue":o[4]||(o[4]=o=>e.areBlockProducersApproving=o)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(M,null,{default:(0,a.w5)((()=>[v])),_:1})])),_:1})),[[te]]):(0,a.kq)("",!0)])])),_:1})])),_:1}),(0,a.Wm)(Y,{flat:"",class:"q-mt-xs proposal-success__card--background"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{"switch-toggle-side":""},{header:(0,a.w5)((()=>[h])),default:(0,a.w5)((()=>[(0,a._)("div",w,[(0,a._)("div",_,[(0,a.Wm)(I,{modelValue:e.formData.trx.max_net_usage_words,"onUpdate:modelValue":o[5]||(o[5]=o=>e.formData.trx.max_net_usage_words=o),outlined:"",dense:"","hide-bottom-space":"","bg-color":"white",label:"max_net_usage_words"},null,8,["modelValue"])]),(0,a._)("div",b,[(0,a.Wm)(I,{modelValue:e.formData.trx.max_cpu_usage_ms,"onUpdate:modelValue":o[6]||(o[6]=o=>e.formData.trx.max_cpu_usage_ms=o),outlined:"",dense:"","hide-bottom-space":"","bg-color":"white",label:"max_cpu_usage_ms"},null,8,["modelValue"])]),(0,a._)("div",g,[(0,a.Wm)(I,{modelValue:e.formData.trx.delay_sec,"onUpdate:modelValue":o[7]||(o[7]=o=>e.formData.trx.delay_sec=o),outlined:"",dense:"","hide-bottom-space":"","bg-color":"white",label:"delay_sec"},null,8,["modelValue"])]),(0,a._)("div",x,[(0,a.Wm)(I,{modelValue:e.context_free_actions_input,"onUpdate:modelValue":o[8]||(o[8]=o=>e.context_free_actions_input=o),outlined:"",dense:"","hide-bottom-space":"","bg-color":"white",label:"context_free_actions"},null,8,["modelValue"])]),(0,a._)("div",y,[(0,a.Wm)(I,{modelValue:e.transaction_extensions_input,"onUpdate:modelValue":o[9]||(o[9]=o=>e.transaction_extensions_input=o),outlined:"",dense:"","hide-bottom-space":"","bg-color":"white",label:"transaction_extensions"},null,8,["modelValue"])]),(0,a._)("div",q,[(0,a.Wm)(I,{modelValue:e.formData.trx.expiration,"onUpdate:modelValue":[o[13]||(o[13]=o=>e.formData.trx.expiration=o),e.onExpiration],outlined:"",dense:"","hide-bottom-space":"","bg-color":"white",label:"expiration",rules:[e=>!!e||"Field is required",e=>!isNaN(new Date(e).getTime())||"Invalid date",e=>new Date(e)>new Date||"Date must be greater than today"]},{prepend:(0,a.w5)((()=>[(0,a.Wm)(C,{class:"cursor-pointer",name:"event",size:"20px"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cover:"cover","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{modelValue:e.formData.trx.expiration,"onUpdate:modelValue":[o[11]||(o[11]=o=>e.formData.trx.expiration=o),e.onExpiration],mask:"YYYY-MM-DDTHH:mm:ss",options:e=>e>="2022/07/05"},{default:(0,a.w5)((()=>[(0,a._)("div",V,[(0,a._)("div",k,[(0,a.Wm)(I,{modelValue:e.amountOfDaysToExpire,"onUpdate:modelValue":[o[10]||(o[10]=o=>e.amountOfDaysToExpire=o),e.onAmountOfDaysToExpire],outlined:"",dense:"","hide-bottom-space":"","bg-color":"white",type:"number",min:"1",label:"Amount of days to expire"},null,8,["modelValue","onUpdate:modelValue"])]),(0,a.wy)((0,a.Wm)(z,{flat:"",label:"Close",color:"primary"},null,512),[[ae]])])])),_:1},8,["modelValue","options","onUpdate:modelValue"])])),_:1})])),_:1})])),append:(0,a.w5)((()=>[(0,a.Wm)(C,{class:"cursor-pointer",name:"access_time",size:"20px"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{cover:"cover","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(L,{modelValue:e.formData.trx.expiration,"onUpdate:modelValue":[o[12]||(o[12]=o=>e.formData.trx.expiration=o),e.onExpiration],mask:"YYYY-MM-DDTHH:mm:ss"},{default:(0,a.w5)((()=>[(0,a._)("div",W,[(0,a.wy)((0,a.Wm)(z,{flat:"",label:"Close",color:"primary"},null,512),[[ae]])])])),_:1},8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","rules","onUpdate:modelValue"])]),(0,a._)("div",D,[(0,a.Wm)(I,{modelValue:e.formData.trx.ref_block_num,"onUpdate:modelValue":o[14]||(o[14]=o=>e.formData.trx.ref_block_num=o),outlined:"",dense:"","hide-bottom-space":"","bg-color":"white",label:"ref_block_num"},null,8,["modelValue"])]),(0,a._)("div",U,[(0,a.Wm)(I,{modelValue:e.formData.trx.ref_block_prefix,"onUpdate:modelValue":o[15]||(o[15]=o=>e.formData.trx.ref_block_prefix=o),outlined:"",dense:"","hide-bottom-space":"","bg-color":"white",label:"ref_block_prefix"},null,8,["modelValue"])])])])),_:1})])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.formData.trx.actions,((o,t)=>((0,a.wg)(),(0,a.j4)(R,{key:o.renderKey,modelValue:e.formData.trx.actions[t],"onUpdate:modelValue":o=>e.formData.trx.actions[t]=o,onRemove:o=>e.formData.trx.actions.splice(t,1)},null,8,["modelValue","onUpdate:modelValue","onRemove"])))),128)),(0,a.Wm)(Y,{class:"q-my-md"},{default:(0,a.w5)((()=>[(0,a.Wm)($,{modelValue:e.actionsTab,"onUpdate:modelValue":o[16]||(o[16]=o=>e.actionsTab=o)},{default:(0,a.w5)((()=>[(0,a.Wm)(K,{name:"one",label:"One action"}),(0,a.Wm)(K,{name:"batch",label:"Transfer in batch"})])),_:1},8,["modelValue"]),(0,a.Wm)(T),(0,a.Wm)(X,{modelValue:e.actionsTab,"onUpdate:modelValue":o[17]||(o[17]=o=>e.actionsTab=o)},{default:(0,a.w5)((()=>[(0,a.Wm)(J,{name:"one"},{default:(0,a.w5)((()=>[(0,a._)("div",Z,[(0,a.Wm)(z,{outline:"",padding:"sm md",color:"white","text-color":"primary",label:"Add action",onClick:e.onAddAction},null,8,["onClick"])])])),_:1}),(0,a.Wm)(J,{name:"batch"},{default:(0,a.w5)((()=>[(0,a.Wm)(G,{onActions:e.onUploadCSV},null,8,["onActions"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["onSubmit"])])),_:1})],64)}var S=t(60499),P=t(18910),Q=t(43878),z=t.n(Q),T=t(86970),C=t(77122),j=t.n(C);const I={class:"proposal-success__section-wrapper"},H=(0,a._)("header",{class:"q-mb-lg"},[(0,a._)("img",{class:"inline-block vertical-middle q-mr-md q-mb-md",src:j()}),(0,a._)("span",{class:"text-h4 text-white inline-block vertical-middle q-mb-md"},"Proposal sent successfully")],-1),Y={class:"text-h6 text-white q-ma-none q-mb-xl"},N=(0,a.Uk)(" Check proposal at "),O=(0,a.Uk)(" and transaction at ");function M(e,o,t,l,n,s){const i=(0,a.up)("router-link"),r=(0,a.up)("q-btn"),c=(0,a.up)("q-card-section"),u=(0,a.up)("q-card"),d=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(d,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=o=>e.value=o),maximized:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"header-support"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"full-height row justify-center items-center"},{default:(0,a.w5)((()=>[(0,a._)("div",I,[H,(0,a._)("p",Y,[N,(0,a.Wm)(i,{to:"/proposal/"+e.proposalName,class:"text-primary text-white cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,T.zw)(e.proposalName),1)])),_:1},8,["to"]),O,(0,a.Wm)(i,{to:"/transaction/"+e.transactionId,class:"text-primary text-white cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,T.zw)(e.transactionId),1)])),_:1},8,["to"])]),(0,a.Wm)(r,{class:"full-width",unelevated:"",padding:"sm md",color:"primary",label:"Close and check proposal",type:"submit",to:"/proposal/"+e.proposalName},null,8,["to"])])])),_:1})])),_:1})])),_:1},8,["modelValue"])}const F=(0,a.aZ)({name:"ProposalSuccess",props:{modelValue:{type:Boolean,default:!1},transactionId:{type:String},proposalName:{type:String}},emits:["update:modelValue"],setup(e,o){const t=(0,a.Fl)({get:()=>e.modelValue,set:e=>{o.emit("update:modelValue",e)}});return{value:t}}});var E=t(11639),B=t(87743),L=t(44458),R=t(63190),K=t(68879),$=t(69984),J=t.n($);const G=(0,E.Z)(F,[["render",M]]),X=G;J()(F,"components",{QDialog:B.Z,QCard:L.Z,QCardSection:R.Z,QBtn:K.Z});const ee={class:"row q-col-gutter-md q-mb-md"},oe={class:"col-6 col-sm"},te=(0,a.Uk)("Searching..."),ae={class:"col-6 col-sm"},le=(0,a.Uk)("Searching..."),ne={key:0,class:"col-auto"},se={class:"text-body1 text-weight-bold text-center"},ie={class:"text-body2"},re={class:"text-body2 text-weight-bold q-px-md"},ce={class:"text-body2"},ue={class:"col-auto"};function de(e,o,t,l,n,s){var i,r;const c=(0,a.up)("q-item-label"),u=(0,a.up)("q-item-section"),d=(0,a.up)("q-item"),m=(0,a.up)("q-select"),p=(0,a.up)("q-icon"),f=(0,a.up)("q-separator"),v=(0,a.up)("q-card-section"),h=(0,a.up)("q-card"),w=(0,a.up)("q-popup-proxy"),_=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)("div",ee,[(0,a._)("div",oe,[(0,a.Wm)(m,{outlined:"",dense:"","use-input":"","hide-selected":"","fill-input":"","hide-bottom-space":"","reactive-rules":"","bg-color":"white",label:"Actor",loading:e.isLoading,"model-value":e.actorValue,options:e.actorsOptions,rules:[e=>!!e||"Field is required",o=>e.isLoading||e.actorsOptions.includes(o)||"Field invalid"],error:e.isActorError,onInputValue:o[0]||(o[0]=o=>e.actorValue=o)},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"text-center"},{default:(0,a.w5)((()=>[e.isLoading?((0,a.wg)(),(0,a.j4)(c,{key:0},{default:(0,a.w5)((()=>[te])),_:1})):((0,a.wg)(),(0,a.j4)(c,{key:1},{default:(0,a.w5)((()=>[(0,a.Uk)((0,T.zw)(e.actor?"Nothing found":"Search by actor"),1)])),_:1}))])),_:1})])),_:1})])),_:1},8,["loading","model-value","options","rules","error"])]),(0,a._)("div",ae,[(0,a.Wm)(m,{modelValue:e.permissionValue,"onUpdate:modelValue":o[1]||(o[1]=o=>e.permissionValue=o),outlined:"",dense:"","hide-bottom-space":"","bg-color":"white",label:"Permission",loading:e.isLoading,options:e.permissionsOptions,rules:[e=>!!e||"Field is required"]},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"text-center"},{default:(0,a.w5)((()=>[e.isLoading?((0,a.wg)(),(0,a.j4)(c,{key:0},{default:(0,a.w5)((()=>[le])),_:1})):((0,a.wg)(),(0,a.j4)(c,{key:1},{default:(0,a.w5)((()=>[(0,a.Uk)((0,T.zw)(e.actor?"Nothing found":"Search by actor before"),1)])),_:1}))])),_:1})])),_:1})])),_:1},8,["modelValue","loading","options","rules"])]),(null===(r=null===(i=e.requiredAccounts)||void 0===i?void 0:i.accounts)||void 0===r?void 0:r.length)>0?((0,a.wg)(),(0,a.iD)("div",ne,[(0,a.Wm)(_,{flat:"",padding:"sm md",color:"white","text-color":"primary",title:"Required accounts"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"cursor-pointer",name:"people",size:"20px"}),(0,a.Wm)(w,{"transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a._)("div",se,(0,T.zw)(e.requiredAccounts.permissionName)+" ("+(0,T.zw)(e.requiredAccounts.threshold)+")",1),(0,a.Wm)(f,{class:"q-my-sm"}),(0,a._)("table",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.requiredAccounts.accounts,((e,o)=>((0,a.wg)(),(0,a.iD)("tr",{key:o,class:"q-pb-xs"},[(0,a._)("td",ie,(0,T.zw)(e.weight),1),(0,a._)("td",re,(0,T.zw)(e.actor),1),(0,a._)("td",ce,(0,T.zw)(e.permission),1)])))),128))])])),_:1})])),_:1})])),_:1})])),_:1})])):(0,a.kq)("",!0),(0,a._)("div",ue,[(0,a.Wm)(_,{outline:"",padding:"sm md",color:"white","text-color":"primary",label:"Remove",disabled:e.disabledRemoveButton,onClick:o[2]||(o[2]=o=>e.$emit("remove"))},null,8,["disabled"])])])}var me=t(21889),pe=function(e,o,t,a){function l(e){return e instanceof t?e:new t((function(o){o(e)}))}return new(t||(t=Promise))((function(t,n){function s(e){try{r(a.next(e))}catch(o){n(o)}}function i(e){try{r(a["throw"](e))}catch(o){n(o)}}function r(e){e.done?t(e.value):l(e.value).then(s,i)}r((a=a.apply(e,o||[])).next())}))};const fe=(0,a.aZ)({name:"ProposalAuthorization",props:{actor:{type:String,default:""},permission:{type:String,default:""},disabledRemoveButton:{type:Boolean,default:!1}},emits:["update:actor","update:permission","remove"],setup(e,o){const t=(0,S.iH)([]),l=(0,S.iH)([]),n=(0,S.iH)([]),s=(0,S.iH)(!1),i=(0,S.iH)(!1),r=(0,S.iH)(null),c=(0,a.Fl)({get:()=>e.actor,set:e=>{o.emit("update:actor",e)}}),u=(0,a.Fl)({get:()=>e.permission,set:e=>{o.emit("update:permission",e)}});function d(e){return pe(this,void 0,void 0,(function*(){try{const a=yield me.h.getTableByScope({code:"eosio",limit:5,lower_bound:e,table:"userres",upper_bound:e.padEnd(12,"z")});if(a.length>0){"eosio".includes(e)&&t.value.push("eosio"),a.forEach((e=>{t.value.push(e.payer)}));const s=yield me.h.getAccount(e);"undefined"!==typeof s&&(n.value=s.permissions.map((e=>({permissionName:e.perm_name,threshold:e.required_auth.threshold,accounts:e.required_auth.accounts.map((e=>({weight:`+ ${e.weight.toString()}`,actor:e.permission.actor,permission:e.permission.permission})))}))),l.value=s.permissions.map((e=>e.perm_name)),o.emit("update:permission",l.value[0]))}else s.value=!0}catch(a){s.value=!0,o.emit("update:permission","")}}))}(0,a.bv)((()=>pe(this,void 0,void 0,(function*(){e.actor&&(yield d(e.actor))})))),(0,a.YP)(c,(e=>{if(i.value=!0,s.value=!1,r.value&&clearTimeout(r.value),""===e)return t.value=[],i.value=!1,void o.emit("update:permission","");r.value=setTimeout((()=>{r.value=null}),1e3)})),(0,a.YP)(r,(o=>pe(this,void 0,void 0,(function*(){if(o)return;const a=e.actor.toLowerCase();t.value=[],yield d(a),i.value=!1}))));const m=(0,a.Fl)((()=>u.value?n.value.find((e=>e.permissionName.toString()===u.value)):null));return{actorValue:c,permissionValue:u,isActorError:s,requiredAccounts:m,actorsOptions:t,permissionsOptions:l,isLoading:i}}});var ve=t(32259),he=t(490),we=t(76749),_e=t(33115),be=t(22857),ge=t(52765),xe=t(50926);const ye=(0,E.Z)(fe,[["render",de]]),qe=ye;J()(fe,"components",{QSelect:ve.Z,QItem:he.Z,QItemSection:we.Z,QItemLabel:_e.Z,QBtn:K.Z,QIcon:be.Z,QPopupProxy:ge.Z,QCard:L.Z,QCardSection:R.Z,QSeparator:xe.Z});var Ve=t(61957);const ke={class:"proposal-action__header full-width row items-center justify-between"},We={class:"col-auto"},De={class:"text-h6 text-weight-regular"},Ue={class:"col-auto"},Ze={class:"q-pa-md"},Ae={class:"row q-col-gutter-md q-mb-md"},Se={class:"col-6"},Pe={key:0,class:"col-6"},Qe=(0,a.Uk)("No option"),ze={key:1,class:"row q-col-gutter-md"},Te=(0,a._)("p",{class:"text-body1 q-my-md q-mb-none"},"Authorization",-1);function Ce(e,o,t,l,n,s){const i=(0,a.up)("q-btn"),r=(0,a.up)("q-input"),c=(0,a.up)("q-item-label"),u=(0,a.up)("q-item-section"),d=(0,a.up)("q-item"),m=(0,a.up)("q-select"),p=(0,a.up)("TransferAction"),f=(0,a.up)("ProposalAuthorization"),v=(0,a.up)("q-expansion-item"),h=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(h,{class:"q-mt-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{"switch-toggle-side":"","default-opened":""},{header:(0,a.w5)((()=>[(0,a._)("div",ke,[(0,a._)("div",We,[(0,a._)("span",De,(0,T.zw)(e.action.account&&e.action.name?`${e.action.account} - ${e.action.name}`:"Action"),1)]),(0,a._)("div",Ue,[(0,a.Wm)(i,{outline:"",padding:"sm md",color:"white","text-color":"primary",label:"Remove",onClick:o[0]||(o[0]=(0,Ve.iM)((o=>e.$emit("remove")),["stop"]))})])])])),default:(0,a.w5)((()=>{var t,l;return[(0,a._)("div",Ze,[(0,a._)("div",Ae,[(0,a._)("div",Se,[(0,a.Wm)(r,{modelValue:e.action.account,"onUpdate:modelValue":o[1]||(o[1]=o=>e.action.account=o),outlined:"",dense:"","hide-bottom-space":"","lazy-rules":"",label:"account",error:e.isAccountError,loading:e.isAccountLoading,rules:[e=>!!e||"Account is required"]},null,8,["modelValue","error","loading","rules"])]),e.actionOptions.length>0?((0,a.wg)(),(0,a.iD)("div",Pe,[(0,a.Wm)(m,{modelValue:e.action.name,"onUpdate:modelValue":o[2]||(o[2]=o=>e.action.name=o),outlined:"",dense:"","hide-bottom-space":"","bg-color":"white",label:"Action",options:e.actionOptions,rules:[e=>!!e||"Field is required"]},{"no-option":(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[Qe])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","options","rules"])])):(0,a.kq)("",!0)]),"eosio.token"===(null===(t=e.action)||void 0===t?void 0:t.account)&&"transfer"===(null===(l=e.action)||void 0===l?void 0:l.name)?((0,a.wg)(),(0,a.j4)(p,{key:0,modelValue:e.action,"onUpdate:modelValue":o[3]||(o[3]=o=>e.action=o),fields:e.fields},null,8,["modelValue","fields"])):e.fields?((0,a.wg)(),(0,a.iD)("div",ze,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.fields,(o=>((0,a.wg)(),(0,a.iD)("div",{key:o.name,class:"col-12 col-sm-4"},[(0,a.Wm)(r,{modelValue:e.action.data[o.name],"onUpdate:modelValue":t=>e.action.data[o.name]=t,outlined:"",dense:"","hide-bottom-space":"","lazy-rules":"",label:o.name},null,8,["modelValue","onUpdate:modelValue","label"])])))),128))])):(0,a.kq)("",!0),(0,a._)("div",null,[Te,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.action.authorization,((o,t)=>((0,a.wg)(),(0,a.j4)(f,{key:t,actor:o.actor,"onUpdate:actor":e=>o.actor=e,permission:o.permission,"onUpdate:permission":e=>o.permission=e,disabledRemoveButton:1===e.action.authorization.length,onRemove:o=>e.action.authorization.splice(t,1)},null,8,["actor","onUpdate:actor","permission","onUpdate:permission","disabledRemoveButton","onRemove"])))),128)),(0,a.Wm)(i,{outline:"",padding:"sm md",color:"white","text-color":"primary",label:"Add",onClick:o[4]||(o[4]=(0,Ve.iM)((o=>e.action.authorization.push({actor:"",permission:""})),["stop"]))})])])]})),_:1})])),_:1})}const je={key:0,class:"row q-col-gutter-md"};function Ie(e,o,t,l,n,s){const i=(0,a.up)("AccountSearch"),r=(0,a.up)("q-input");return e.fields?((0,a.wg)(),(0,a.iD)("div",je,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.fields,(o=>((0,a.wg)(),(0,a.iD)("div",{key:o.name,class:"col-12 col-sm-6"},["name"===o.type?((0,a.wg)(),(0,a.j4)(i,{key:0,modelValue:e.action.data[o.name],"onUpdate:modelValue":t=>e.action.data[o.name]=t,emitUpdateOnInput:"",outlined:"",filled:!1,"with-validation":"","remove-search-icon":"","bg-color":"white","lazy-rules":"",label:o.name},null,8,["modelValue","onUpdate:modelValue","label"])):"quantity"===o.name?((0,a.wg)(),(0,a.j4)(r,{key:1,modelValue:e.action.data[o.name],"onUpdate:modelValue":t=>e.action.data[o.name]=t,mask:e.mask,suffix:e.token,"fill-mask":"0","reverse-fill-mask":"",outlined:"",dense:"","hide-bottom-space":"","lazy-rules":"",label:o.name},null,8,["modelValue","onUpdate:modelValue","mask","suffix","label"])):((0,a.wg)(),(0,a.j4)(r,{key:2,modelValue:e.action.data[o.name],"onUpdate:modelValue":t=>e.action.data[o.name]=t,outlined:"",dense:"","hide-bottom-space":"","lazy-rules":"",label:o.name},null,8,["modelValue","onUpdate:modelValue","label"]))])))),128))])):(0,a.kq)("",!0)}var He=t(52783),Ye=t(30229);const Ne=(0,Ye.z)(),Oe=(0,a.aZ)({name:"TransferAction",components:{AccountSearch:He.Z},props:{modelValue:{type:Object},fields:{type:Object}},setup(e,o){const t=(0,S.qj)(e.modelValue),l=(0,a.Fl)((()=>{const{precision:e}=Ne.getSystemToken();let o="#";return e>0&&(o+=`.${"#".repeat(e)}`),o})),n=(0,a.Fl)((()=>Ne.getSystemToken().symbol)),s=e=>{var o;let a=Object.assign({},e);const{precision:l}=Ne.getSystemToken(),n=a.data.quantity.match(/\d+/g);let s="0",i="";(null===n||void 0===n?void 0:n.length)>0&&(s=n[0]+".",i=null!==(o=n[1])&&void 0!==o?o:""),s+=i.slice(0,l).padEnd(l,"0"),a.data.quantity=s,t.data=Object.assign({},a.data)};return(0,a.bv)((()=>{s(e.modelValue)})),(0,a.YP)((()=>e.modelValue),(e=>{s(e)})),(0,a.YP)(t,(e=>{e.data.quantity.includes(n.value)||(e.data.quantity=`${e.data.quantity} ${n.value}`),o.emit("update:modelValue",e)})),{mask:l,token:n,action:t}}});var Me=t(13119);const Fe=(0,E.Z)(Oe,[["render",Ie]]),Ee=Fe;J()(Oe,"components",{QInput:Me.Z});var Be=function(e,o,t,a){function l(e){return e instanceof t?e:new t((function(o){o(e)}))}return new(t||(t=Promise))((function(t,n){function s(e){try{r(a.next(e))}catch(o){n(o)}}function i(e){try{r(a["throw"](e))}catch(o){n(o)}}function r(e){e.done?t(e.value):l(e.value).then(s,i)}r((a=a.apply(e,o||[])).next())}))};const Le=(0,a.aZ)({name:"ProposalAction",components:{ProposalAuthorization:qe,TransferAction:Ee},props:{modelValue:{type:Object}},emits:["update:modelValue","remove"],setup(e,o){const t=(0,S.iH)([]),l=(0,S.iH)(!1),n=(0,S.iH)(!1),s=(0,S.iH)(null),i=(0,a.Fl)({get:()=>e.modelValue,set:e=>{o.emit("update:modelValue",e)}});(0,a.YP)((()=>i.value.account),(e=>{l.value=!0,n.value=!1,t.value.length>0&&(t.value=[]),s.value&&clearTimeout(s.value),""!==e?s.value=setTimeout((()=>{s.value=null}),1e3):l.value=!1})),(0,a.YP)(s,(e=>Be(this,void 0,void 0,(function*(){if(e)return;const o=i.value.account.toLowerCase();try{const{abi:e}=yield me.h.getABI(o);i.value.name=e.structs[0].name,t.value=e.structs}catch(a){n.value=!0}l.value=!1})))),(0,a.bv)((()=>Be(this,void 0,void 0,(function*(){if(!e.modelValue.account||!e.modelValue.name)return;const o=e.modelValue.account.toLowerCase();try{const{abi:a}=yield me.h.getABI(o),l=a.structs.findIndex((o=>e.modelValue.name===o.name));i.value.name=a.structs[null!==l&&void 0!==l?l:0].name,t.value=a.structs}catch(a){n.value=!0}l.value=!1}))));const r=(0,a.Fl)((()=>0===t.value.length?[]:t.value.map((e=>e.name)))),c=(0,a.Fl)((()=>{if(0===t.value.length)return[];const{fields:e}=t.value.find((e=>e.name===i.value.name));return e}));return(0,a.YP)(c,(o=>{var t;const a={};for(let l=0;l<o.length;l++){const n=o[l];a[n.name]=null!==(t=e.modelValue.data[n.name])&&void 0!==t?t:""}i.value.data=a})),{action:i,isAccountLoading:l,isAccountError:n,actionOptions:r,fields:c}}});var Re=t(50651);const Ke=(0,E.Z)(Le,[["render",Ce]]),$e=Ke;J()(Le,"components",{QCard:L.Z,QExpansionItem:Re.Z,QBtn:K.Z,QInput:Me.Z,QSelect:ve.Z,QItem:he.Z,QItemSection:we.Z,QItemLabel:_e.Z});const Je={class:"q-px-lg"},Ge={class:"text-subtitle1 q-mb-md"},Xe=(0,a.Uk)("Download the example "),eo={class:"q-mt-xs"},oo={href:"/examples/msig-transfer-batch.csv",target:"_blank",class:"text-no-decoration",download:"download"},to=(0,a._)("li",{class:"text-subtitle1 q-mb-md"},[(0,a.Uk)("Edit the example csv "),(0,a._)("ul",{class:"text-body2 text-grey-8 q-px-md q-mt-xs"},[(0,a._)("li",null,"The quantity token must be uppercase"),(0,a._)("li",null,"Must have one space between the value and the token"),(0,a._)("li",null,"The decimal values must be separated with a dot"),(0,a._)("li",null,"The memo is optional")]),(0,a._)("code",{class:"block q-mt-md q-py-sm q-px-md bg-grey-3 text-body1 rounded-borders"}," payingaccount, receivingaccount, 0.1, The memo ")],-1),ao={class:"text-subtitle1"},lo=(0,a.Uk)("Upload the example csv ");function no(e,o,t,l,n,s){const i=(0,a.up)("q-btn"),r=(0,a.up)("q-icon"),c=(0,a.up)("q-file");return(0,a.wg)(),(0,a.iD)("ol",Je,[(0,a._)("li",Ge,[Xe,(0,a._)("div",eo,[(0,a._)("a",oo,[(0,a.Wm)(i,{outline:"",padding:"sm md",color:"white","text-color":"primary",label:"Download example"})])])]),to,(0,a._)("li",ao,[lo,(0,a.Wm)(c,{modelValue:e.file,"onUpdate:modelValue":o[1]||(o[1]=o=>e.file=o),outlined:"",dense:"","hide-bottom-space":"",class:"q-mt-xs",label:"Select the CSV File",accept:".csv","max-files":"1"},{append:(0,a.w5)((()=>[null!==e.file?((0,a.wg)(),(0,a.j4)(r,{key:0,class:"cursor-pointer",name:"close",onClick:o[0]||(o[0]=(0,Ve.iM)((o=>e.file=null),["stop","prevent"]))})):(0,a.kq)("",!0)])),after:(0,a.w5)((()=>[(0,a.Wm)(i,{outline:"",padding:"sm md",color:"white","text-color":"primary",label:"Upload",disabled:null===e.file,onClick:e.handleUploadCSV},null,8,["disabled","onClick"])])),_:1},8,["modelValue"])])])}var so=t(69064),io=t.n(so),ro=t(19302),co=t(13385),uo=function(e,o,t,a){function l(e){return e instanceof t?e:new t((function(o){o(e)}))}return new(t||(t=Promise))((function(t,n){function s(e){try{r(a.next(e))}catch(o){n(o)}}function i(e){try{r(a["throw"](e))}catch(o){n(o)}}function r(e){e.done?t(e.value):l(e.value).then(s,i)}r((a=a.apply(e,o||[])).next())}))};const mo=(0,a.aZ)({name:"ProposalUploadCSV",emits:["actions"],setup(e,o){const t=(0,ro.Z)(),a=(0,S.iH)(null),l=(0,co.p)().state.account.accountPermission;function n(e){t.notify({color:"negative",message:e,actions:[{label:"Dismiss",color:"white"}]})}function s(){return uo(this,void 0,void 0,(function*(){const e=yield a.value.text(),t=yield io()().fromString(e);if(0===t.length)return void n("CSV Invalid");const s=["from","to","quantity","memo"],i=Object.keys(t[0]),r=s.every((e=>i.includes(e)));if(!r||s.length!==i.length)return void n("CSV Invalid");const c=t.map((e=>({account:"eosio.token",name:"transfer",authorization:[{actor:e.from.toLowerCase(),permission:l}],data:{from:e.from.toLowerCase(),to:e.to.toLowerCase(),quantity:e.quantity,memo:e.memo}})));o.emit("actions",c),a.value=null}))}return{handleUploadCSV:s,file:a}}});var po=t(33837);const fo=(0,E.Z)(mo,[["render",no]]),vo=fo;function ho(e=12){let o="";const t="12345abcdefghijklmnopqrstuvxyz";for(let a=0;a<e;a++)o+=t.charAt(Math.floor(Math.random()*t.length));return o}J()(mo,"components",{QBtn:K.Z,QFile:po.Z,QIcon:be.Z});var wo=t(78504),_o=function(e,o,t,a){function l(e){return e instanceof t?e:new t((function(o){o(e)}))}return new(t||(t=Promise))((function(t,n){function s(e){try{r(a.next(e))}catch(o){n(o)}}function i(e){try{r(a["throw"](e))}catch(o){n(o)}}function r(e){e.done?t(e.value):l(e.value).then(s,i)}r((a=a.apply(e,o||[])).next())}))};const bo=(0,a.aZ)({name:"ProposalNew",components:{ProposalSuccess:X,ProposalAuthorization:qe,ProposalAction:$e,ProposalUploadCSV:vo},setup(){const e=(0,P.tv)(),o=(0,wo.oR)(),t=(0,ro.Z)(),l=(0,a.Fl)((()=>o.state.account.accountName)),n=(0,a.Fl)((()=>o.state.account.isAuthenticated)),s=(0,S.iH)("one"),i=(0,S.iH)(7),r=(0,S.iH)([]),c=(0,S.iH)(!1),u=(0,S.iH)(""),d=(0,S.iH)(""),m=(0,S.qj)({proposalName:"",transactionId:"",showModal:!1}),p=(0,S.qj)({proposer:"",proposal_name:"",requested:[{actor:"",permission:""}],trx:{expiration:z()().add(i.value,"days").format("YYYY-MM-DDTHH:mm:ss"),ref_block_num:0,ref_block_prefix:0,max_net_usage_words:0,max_cpu_usage_ms:0,delay_sec:0,context_free_actions:[""],transaction_extensions:[""],actions:[]}});function f(e){t.notify({color:"negative",message:e,actions:[{label:"Dismiss",color:"white"}]})}function v(){var e,t,a;return _o(this,void 0,void 0,(function*(){const n=JSON.parse(JSON.stringify(p));if(c.value&&(n.requested=n.requested.concat(JSON.parse(JSON.stringify(r.value)))),0!==n.requested.length)if(0!==n.trx.actions.length){n.trx.transaction_extensions=d.value?d.value.split(","):[],n.trx.context_free_actions=u.value?u.value.split(","):[];try{for(let o=0;o<n.trx.actions.length;o++){const e=n.trx.actions[o],t=yield me.h.serializeActionData(e.account,e.name,e.data);n.trx.actions[o].data=t}const e=yield o.state.account.user.signTransaction({actions:[{account:"eosio.msig",name:"propose",authorization:[{actor:l.value,permission:o.state.account.accountPermission}],data:n}]},{blocksBehind:3,expireSeconds:30});"cleos"!==o.state.account.autoLogin&&(m.showModal=!0),m.transactionId=e.transactionId,m.proposalName=n.proposal_name}catch(s){const o=JSON.parse(JSON.stringify(s));f((null===(a=null===(t=null===(e=null===o||void 0===o?void 0:o.cause)||void 0===e?void 0:e.json)||void 0===t?void 0:t.error)||void 0===a?void 0:a.what)||"Unable to create a proposal")}}else f("At least one action");else f("At least one requested approval")}))}function h(){var e,o;const t=p.trx.actions.length;p.trx.actions.push({renderKey:(null!==(o=null===(e=p.trx.actions[t-1])||void 0===e?void 0:e.renderKey)&&void 0!==o?o:0)+1,account:"",name:"",authorization:[{actor:"",permission:""}],data:{}})}function w(e){e&&(p.trx.expiration=z()().add(e,"days").format("YYYY-MM-DDTHH:mm:ss"))}function _(e){if(null===e)return i.value=7,void w(7);const o=(new Date).getTime(),t=new Date(e).getTime();if(!isNaN(t)){const e=Math.abs(t-o),a=Math.ceil(e/864e5);i.value=a}}function b(e){const o=p.trx.actions.length;let t=e.map(((e,t)=>{var a,l;return Object.assign(Object.assign({},e),{renderKey:(null!==(l=null===(a=p.trx.actions[o-1])||void 0===a?void 0:a.renderKey)&&void 0!==l?l:0)+1+t})}));p.trx.actions=[...p.trx.actions,...t]}return(0,a.bv)((()=>{p.proposal_name=ho(),p.proposer=l.value})),(0,a.bv)((()=>_o(this,void 0,void 0,(function*(){n.value||(yield e.push("/proposal"))})))),(0,a.bv)((()=>_o(this,void 0,void 0,(function*(){const e=yield me.h.getProducers(),t=[];for(let a=0;a<e.rows.length;a++){const l=e.rows[a];1===l.is_active&&t.push({actor:l.owner,permission:o.state.account.accountPermission})}r.value=t})))),{onSubmit:v,onAddAction:h,amountOfDaysToExpire:i,onAmountOfDaysToExpire:w,onExpiration:_,onUploadCSV:b,formData:p,areBlockProducersApproving:c,blockProducers:r,actionsTab:s,success:m,context_free_actions_input:u,transaction_extensions_input:d}}});var go=t(69885),xo=t(8326),yo=t(46858),qo=t(11221),Vo=t(14351),ko=t(86770),Wo=t(47817),Do=t(57661),Uo=t(89800),Zo=t(84106),Ao=t(51722),So=t(62146);const Po=(0,E.Z)(bo,[["render",A]]),Qo=Po;J()(bo,"components",{QPage:go.Z,QForm:xo.Z,QBtn:K.Z,QSeparator:xe.Z,QCard:L.Z,QExpansionItem:Re.Z,QInput:Me.Z,QIcon:be.Z,QTooltip:yo.Z,QItem:he.Z,QItemSection:we.Z,QCheckbox:qo.Z,QPopupProxy:ge.Z,QDate:Vo.Z,QTime:ko.Z,QTabs:Wo.Z,QTab:Do.Z,QTabPanels:Uo.Z,QTabPanel:Zo.Z}),J()(bo,"directives",{Ripple:Ao.Z,ClosePopup:So.Z})}}]);