"use strict";(globalThis["webpackChunkopen_block_explorer"]=globalThis["webpackChunkopen_block_explorer"]||[]).push([[895],{29895:(e,t,o)=>{o.r(t),o.d(t,{default:()=>K});var a=o(59835),n=o(86970);const r={class:"proposal-item full-width row justify-center items-center header-support"},s={key:0,class:"col text-center"},l={key:1,class:"proposal-item__content col text-center"},i={class:"proposal-item__content-title text-h4 text-white q-ma-none"},c={class:"proposal-item__content-sub text-caption text-white text-uppercase q-mt-xs"},u=(0,a.Uk)("PROPOSER "),p={class:"q-mb-lg"},d={class:"row q-gutter-sm justify-center items-center"},v=(0,a._)("h2",{class:"text-h6 text-weight-regular"},"Multisig Transaction",-1),m={class:"text-h6 text-weight-regular"},h={class:"text-h6 text-weight-regular q-mt-xl"},w=(0,a._)("span",null,"Requested Approvals",-1),g={class:"text-body1 q-ml-sm text-grey"},f=(0,a._)("span",{class:"q-mx-sm"},"•",-1),y=(0,a._)("span",null,"Active BPs",-1),x={class:"text-body1 q-ml-sm text-grey"};function b(e,t,o,b,_,k){const S=(0,a.up)("q-spinner"),q=(0,a.up)("router-link"),A=(0,a.up)("q-badge"),C=(0,a.up)("q-btn"),P=(0,a.up)("JsonViewer"),E=(0,a.up)("q-expansion-item"),B=(0,a.up)("q-card"),T=(0,a.up)("q-td"),j=(0,a.up)("q-tr"),U=(0,a.up)("q-table"),D=(0,a.up)("q-page");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",r,[e.isLoading?((0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(S,{color:"white",size:"2em"})])):((0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("h1",i,"Proposal "+(0,n.zw)(e.proposalName),1),(0,a._)("p",c,[u,(0,a.Wm)(q,{to:"/account/"+e.proposer,class:"text-white cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.proposer),1)])),_:1},8,["to"]),(0,a.Uk)(" • APPROVAL STATUS "+(0,n.zw)(e.approvalStatus)+" • EXPIRATION "+(0,n.zw)(e.expirationDate),1)]),(0,a._)("div",p,[e.isExecuted&&!e.isCanceled?((0,a.wg)(),(0,a.j4)(A,{key:0,color:"green",label:"EXECUTED"})):(0,a.kq)("",!0),e.isExecuted||e.isCanceled?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(A,{key:1,color:"orange",label:"NOT EXECUTED"})),e.isCanceled?((0,a.wg)(),(0,a.j4)(A,{key:2,color:"red",label:"CANCELED"})):(0,a.kq)("",!0)]),(0,a._)("div",d,[e.isShowExecuteButton?((0,a.wg)(),(0,a.j4)(C,{key:0,outline:"",padding:"sm md",color:"white","text-color":"white",label:"Execute",onClick:e.onExecute},null,8,["onClick"])):(0,a.kq)("",!0),e.isShowCancelButton?((0,a.wg)(),(0,a.j4)(C,{key:1,outline:"",padding:"sm md",color:"white","text-color":"white",label:"Cancel",onClick:e.onCancel},null,8,["onClick"])):(0,a.kq)("",!0),e.isShowApproveButton?((0,a.wg)(),(0,a.j4)(C,{key:2,outline:"",padding:"sm md",color:"white","text-color":"white",label:"Approve",onClick:e.onApprove},null,8,["onClick"])):(0,a.kq)("",!0),e.isShowUnapproveButton?((0,a.wg)(),(0,a.j4)(C,{key:3,outline:"",padding:"sm md",color:"white","text-color":"white",label:"Unapprove",onClick:e.onUnapprove},null,8,["onClick"])):(0,a.kq)("",!0)])]))]),(0,a.Wm)(D,{padding:""},{default:(0,a.w5)((()=>[v,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.multsigTransactionData,((e,t)=>((0,a.wg)(),(0,a.j4)(B,{key:t,class:"q-mt-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{"switch-toggle-side":"","default-opened":""},{header:(0,a.w5)((()=>[(0,a._)("span",m,(0,n.zw)(e.account)+" - "+(0,n.zw)(e.name),1)])),default:(0,a.w5)((()=>[(0,a.Wm)(P,{value:e,"expand-depth":5,"preview-mode":"preview-mode",boxed:"boxed",copyable:"copyable",sort:"sort"},null,8,["value"])])),_:2},1024)])),_:2},1024)))),128)),(0,a._)("h2",h,[w,(0,a._)("span",g,(0,n.zw)(e.approvalStatus),1),f,y,(0,a._)("span",x,(0,n.zw)(e.producersApprovalStatus),1)]),(0,a.Wm)(B,{class:"q-mb-xl"},{default:(0,a.w5)((()=>[(0,a.Wm)(U,{color:"primary",flat:"",bordered:!1,square:!0,"table-header-class":"text-grey-7",rows:e.requestedApprovalsRows,columns:e.requestedApprovalsColumns,"row-key":"index","rows-per-page-options":[25,40,80,160]},{body:(0,a.w5)((e=>[(0,a.Wm)(j,{props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(T,{key:"actor",props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(q,{class:"text-primary text-no-decoration cursor-pointer",to:"/account/"+e.row.actor},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.row.actor),1)])),_:2},1032,["to"]),e.row.isBp?((0,a.wg)(),(0,a.j4)(A,{key:0,class:"q-ml-xs",label:"Active BP"})):(0,a.kq)("",!0)])),_:2},1032,["props"]),(0,a.Wm)(T,{key:"permission",props:e},{default:(0,a.w5)((()=>[(0,a._)("span",null,(0,n.zw)(e.row.permission),1)])),_:2},1032,["props"]),(0,a.Wm)(T,{key:"status",props:e},{default:(0,a.w5)((()=>[(0,a.Wm)(A,{color:e.row.status?"green":"orange",label:e.row.status?"APPROVED":"PENDING"},null,8,["color","label"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])),_:1})])),_:1})],64)}var _=o(60499),k=o(18910),S=o(19302),q=o(18803),A=o.n(q),C=o(43878),P=o.n(C),E=o(21889),B=o(61429),T=o.n(B),j=o(61753),U=o(78504),D=o(3708),N=o(71130),z=o(17779),O=o(40270)["lW"],W=function(e,t,o,a){function n(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,r){function s(e){try{i(a.next(e))}catch(t){r(t)}}function l(e){try{i(a["throw"](e))}catch(t){r(t)}}function i(e){e.done?o(e.value):n(e.value).then(s,l)}i((a=a.apply(e,t||[])).next())}))};const H=(0,a.aZ)({name:"ProposalItem",components:{JsonViewer:A()},setup(){const e=(0,k.yj)(),t=(0,k.tv)(),o=(0,S.Z)(),n=(0,U.useStore)(),{proposalName:r}=e.params,s=(0,a.Fl)((()=>n.state.account.accountName)),l=(0,a.Fl)((()=>n.state.account.isAuthenticated)),i=(0,_.iH)(!0),c=(0,_.iH)(""),u=(0,_.iH)(""),p=(0,_.iH)(""),d=(0,_.iH)(!1),v=(0,_.iH)(!1),m=(0,_.iH)(!1),h=(0,_.iH)(!1),w=(0,_.iH)([]),g=(0,_.iH)([]),f=[{name:"actor",align:"left",label:"ACTOR",field:"actor"},{name:"permission",align:"left",label:"PERMISSION",field:"permission"},{name:"status",align:"left",label:"STATUS",field:"status"}],y=(0,a.Fl)((()=>P()(new Date).isAfter(new Date(p.value)))),x=(0,a.Fl)((()=>l.value&&h.value&&!y.value&&!d.value&&!v.value&&!m.value)),b=(0,a.Fl)((()=>l.value&&d.value&&!y.value&&!v.value&&!m.value)),q=(0,a.Fl)((()=>l.value&&!y.value&&(s.value===c.value||h.value||d.value)&&!v.value&&!m.value)),A=(0,a.Fl)((()=>l.value&&s.value===c.value&&!y.value&&!v.value&&!m.value)),C=(0,a.Fl)((()=>{const e=g.value.filter((e=>e.isBp)),t=e.filter((e=>e.status));return`${t.length}/${e.length}`}));function B(e,t){var a,n,r;const s=JSON.parse(JSON.stringify(e));o.notify({color:"negative",message:(null===(r=null===(n=null===(a=null===s||void 0===s?void 0:s.cause)||void 0===a?void 0:a.json)||void 0===n?void 0:n.error)||void 0===r?void 0:r.what)||t,actions:[{label:"Dismiss",color:"white"}]})}function H(e){return W(this,void 0,void 0,(function*(){const t=yield E.h.getProducerSchedule(),o=t.active.producers.map((e=>e.producer_name));let a=[];return e.requested_approvals.forEach((e=>{a.push({actor:e.actor,permission:e.permission,status:!1,isBp:!1})})),e.provided_approvals.forEach((e=>{a.push({actor:e.actor,permission:e.permission,status:!0,isBp:!1})})),a=a.map((e=>Object.assign(Object.assign({},e),{isBp:o.includes(e.actor)}))).sort(((e,t)=>e.actor.localeCompare(t.actor))).sort(((e,t)=>Number(t.isBp)-Number(e.isBp)||Number(e.status)-Number(t.status))),a}))}function Z(){return W(this,void 0,void 0,(function*(){try{const{proposals:e}=yield E.h.getProposals({proposal:r,limit:1});return e[0]}catch(e){B(e,"Proposal not found"),yield t.push("/proposal")}}))}function R(e){return W(this,void 0,void 0,(function*(){let t,o=0;const a=100;while("undefined"===typeof t)try{const{actions:n}=yield E.h.getActions(e.proposer,"eosio.msig:propose",a,o);[t]=n.filter((t=>{const{proposal_name:o}=t.act.data;return o===e.proposal_name})),o+=a}catch(i){z.error(i)}const{trx:n}=t.act.data,r=j.Transaction.from(n);p.value=r.expiration.toString();const s={},l=[];for(let e=0;e<r.actions.length;e++){const t=r.actions[e],o=t.account.toString();let a;if(a=s.hasOwnProperty(o)?(0,D.Lw)(t,s[o]):yield E.h.deserializeActionData(t),"eosio"===o&&"setcode"===t.name.toString())a.code=`Binary data with SHA <${X(a.code)}>`;else if("eosio"===t.account.toString()&&"setabi"===t.name.toString()){const e=j.Serializer.decode({data:a.abi,type:j.ABI});s[a.account]=e}l.push(Object.assign(Object.assign({},j.Serializer.objectify(t)),{data:a}))}return l}))}function F(e){return W(this,void 0,void 0,(function*(){const t=yield E.h.getBlock(String(e)),o=t.transactions.map((e=>W(this,void 0,void 0,(function*(){let t=e.trx.id;"string"!==typeof t&&(t=e.trx.toString());const{actions:o}=yield E.h.getTransaction(t);return o}))));return yield Promise.all(o)}))}function Q(){return W(this,void 0,void 0,(function*(){i.value=!0;const e=yield Z();if("undefined"===typeof e)return B(null,"Proposal not found"),void(yield t.push("/proposal"));c.value=e.proposer,u.value=`${e.provided_approvals.length}/${e.provided_approvals.length+e.requested_approvals.length}`,v.value=e.executed,d.value=e.provided_approvals.some((e=>e.actor===s.value)),h.value=e.requested_approvals.some((e=>e.actor===s.value));const[o,a]=yield Promise.all([H(e),R(e)]);g.value=o,w.value=a;const n=yield F(e.block_num);m.value=n.some((e=>"eosio.msig"===e[0].act.account&&"cancel"===e[0].act.name)),i.value=!1}))}function I({name:e,data:t}){return W(this,void 0,void 0,(function*(){const o=yield n.state.account.user.signTransaction({actions:[{account:"eosio.msig",name:e,authorization:[{actor:s.value,permission:n.state.account.accountPermission}],data:t}]},{blocksBehind:3,expireSeconds:30});return o}))}function L(){return W(this,void 0,void 0,(function*(){try{yield I({name:"approve",data:{proposer:c.value,proposal_name:r,level:{actor:s.value,permission:n.state.account.accountPermission}}}),yield(0,N._)(),yield Q()}catch(e){z.error(e),B(e,"Unable approve proposal")}}))}function $(){return W(this,void 0,void 0,(function*(){try{yield I({name:"unapprove",data:{proposer:c.value,proposal_name:r,level:{actor:s.value,permission:n.state.account.accountPermission}}}),yield(0,N._)(),yield Q()}catch(e){z.error(e),B(e,"Unable approve proposal")}}))}function J(){return W(this,void 0,void 0,(function*(){try{yield I({name:"exec",data:{proposer:c.value,proposal_name:r,executer:s.value}}),yield(0,N._)(),yield Q()}catch(e){B(e,"Unable execute proposal")}}))}function V(){return W(this,void 0,void 0,(function*(){try{yield I({name:"cancel",data:{proposer:c.value,proposal_name:r,canceler:s.value}}),yield(0,N._)(),yield Q()}catch(e){B(e,"Unable cancel proposal")}}))}function X(e){const t=Uint8Array.from(O.from(e,"hex")),o=T()(t);return O.from(o).toString("hex")}return(0,a.bv)(Q),{isLoading:i,account:s,proposalName:r,proposer:c,approvalStatus:u,producersApprovalStatus:C,expirationDate:p,isShowApproveButton:x,isShowUnapproveButton:b,isShowExecuteButton:q,isShowCancelButton:A,isExecuted:v,isCanceled:m,multsigTransactionData:w,requestedApprovalsRows:g,requestedApprovalsColumns:f,onApprove:L,onUnapprove:$,onExecute:J,onCancel:V,getShaForCode:X}}});var Z=o(11639),R=o(63940),F=o(20990),Q=o(68879),I=o(69885),L=o(44458),$=o(50651),J=o(82429),V=o(31233),X=o(67220),M=o(69984),Y=o.n(M);const G=(0,Z.Z)(H,[["render",b]]),K=G;Y()(H,"components",{QSpinner:R.Z,QBadge:F.Z,QBtn:Q.Z,QPage:I.Z,QCard:L.Z,QExpansionItem:$.Z,QTable:J.Z,QTr:V.Z,QTd:X.Z})}}]);