"use strict";(globalThis["webpackChunkopen_block_explorer"]=globalThis["webpackChunkopen_block_explorer"]||[]).push([[823],{89723:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Ye});var r=o(59835),n=o(86970);const i={class:"row"},a={class:"col-12"},s={key:0,class:"items-center arrow-button"},l=(0,r._)("div",{class:"full-width text-center justify-center actor-font"},null,-1),c={class:"col-12"},p=(0,r._)("div",{class:"full-width text-center justify-center actor-font"},null,-1),d={key:0,class:"items-center arrow-button"},u={key:1,class:"col-12 map-data-position overlap-map"},h={key:0,class:"col-12 map-data-position"};function v(e,t,o,v,w,g){const m=(0,r.up)("q-icon"),f=(0,r.up)("WorldMap"),x=(0,r.up)("MapData"),y=(0,r.up)("PriceChart"),P=(0,r.up)("TransactionsTable");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",a,[e.mapDisplay?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,n.C_)(["row header-support justify-center render-container",{"show-map":e.showMap}])},[(0,r._)("div",{class:"row full-width chevron-toggle hide",onClick:t[0]||(t[0]=(...t)=>e.toggleMap&&e.toggleMap(...t))},[e.showMap?((0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(m,{class:"fas fa-chevron-up q-pr-lg chevron",size:"17px"})])):(0,r.kq)("",!0),l]),(0,r._)("div",c,[(0,r.Wm)(f)])],2)):(0,r.kq)("",!0)]),e.mapDisplay?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"row full-width chevron-toggle",onClick:t[1]||(t[1]=(...t)=>e.toggleMap&&e.toggleMap(...t))},[p,e.showMap?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(m,{class:"fas fa-chevron-down q-pr-lg chevron",size:"17px"})])),(0,r._)("div",{class:(0,n.C_)(["map-hint",{"fade-in":e.showMapHint,"fade-out":!e.showMapHint}])},"(click or scroll to view producer map)",2)])):(0,r.kq)("",!0),e.mapDisplay&&e.showMap?((0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(x,{mapVisible:e.showMap},null,8,["mapVisible"])])):(0,r.kq)("",!0),(0,r._)("div",{class:(0,n.C_)(["container-max-width",{"container-margin":!e.showMap}])},[e.mapDisplay&&!e.showMap?((0,r.wg)(),(0,r.iD)("div",h,[(0,r.Wm)(x,{mapVisible:e.showMap},null,8,["mapVisible"])])):(0,r.kq)("",!0),(0,r.Wm)(y,{class:(0,n.C_)(["price-box-position",{"overlap-map":e.mapDisplay&&e.showMap}])},null,8,["class"]),(0,r.Wm)(P)],2)])}var w=o(60499);const g=e=>((0,r.dD)("data-v-6f5e07aa"),e=e(),(0,r.Cn)(),e),m={class:"price-chart row col-12 justify-center actor-font",align:"center"},f={class:"row col-11 price-box flex"},x={class:"col-xs-12 col-sx-12 col-md-8 col-lg-8 col-xs-8 q-pa-md"},y={class:"col-xs-12 col-sx-12 col-md-4 col-lg-4 col-xs-4 q-pa-md"},P={class:"col-12 flex row q-mt-md"},b={class:"col-6 chart-info"},_=g((()=>(0,r._)("p",null,"TOKEN PRICE",-1))),k={class:"sub-title"},Z=g((()=>(0,r._)("p",{class:"border-line"},null,-1))),H={class:"col-6 chart-info"},M=g((()=>(0,r._)("p",null,"MARKETCAP",-1))),T={class:"sub-title"},F=g((()=>(0,r._)("p",{class:"border-line"},null,-1)));function C(e,t,o,i,a,s){const l=(0,r.up)("Highcharts");return(0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("div",f,[(0,r._)("div",x,[(0,r.Wm)(l,{class:"highcharts-description col-12",options:e.chartOptions,highcharts:e.hcInstance},null,8,["options","highcharts"])]),(0,r._)("div",y,[(0,r._)("div",P,[(0,r._)("div",b,[_,(0,r._)("p",k,(0,n.zw)(e.tokenPrice),1),Z]),(0,r._)("div",H,[M,(0,r._)("p",T,(0,n.zw)(e.marketCap),1),F])])])])])}var I=o(15581),D=o(82341),S=o.n(D),B=o(15192),L=o.n(B),q=o(30229),$=o(52729),V=function(e,t,o,r){function n(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function s(e){try{l(r["throw"](e))}catch(t){i(t)}}function l(e){e.done?o(e.value):n(e.value).then(a,s)}l((r=r.apply(e,t||[])).next())}))};const E=(0,q.z)(),W=1e6,z=1e9;L()(S());const A=(0,r.aZ)({name:"PriceChart",components:{Highcharts:I.Chart},setup(){const e=S(),t=(0,w.iH)({chart:{type:"area"},title:{text:"Past 24h"},xAxis:{dateTimeLabelFormats:{day:"%A, %b %e, %l %p",millisecond:"%A, %b %e, %l %p"},type:"datetime"},yAxis:{title:{text:"Price"}},legend:{enabled:!0},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,(0,$.Z)("color-graph-shadow")]]},marker:{radius:.5},lineWidth:2,states:{hover:{lineWidth:4}},threshold:null}},series:[{name:E.getSystemToken().symbol,color:(0,$.Z)("primary"),data:[]}],tooltip:{dateTimeLabelFormats:{hour:"%A, %b %e, %l %p"}}}),o=(0,w.iH)(0),n=(0,w.iH)(""),i=(0,w.iH)(""),a=(0,w.iH)(""),s=(0,w.iH)(""),l=(0,w.iH)(""),c=()=>V(this,void 0,void 0,(function*(){const e=yield E.getPriceData();o.value=e.lastUpdated,n.value=d(e.tokenPrice),l.value=p(e.dayChange),s.value=d(e.dayVolume),i.value=d(e.marketCap),t.value.series[0].data=e.prices})),p=e=>`${e.toFixed(2)} %`,d=e=>e<1?`$${e.toFixed(3)}`:e<W?`$${e.toFixed(2)}`:e<z?`$${(e/W).toFixed(2)}M`:`$${(e/z).toFixed(2)}B`;return(0,r.bv)((()=>V(this,void 0,void 0,(function*(){yield c()})))),{hcInstance:e,chartOptions:t,lastUpdated:o,tokenPrice:n,marketCap:i,rank:a,dayVolume:s,dayChange:l,fetchPriceChartData:c,formatPercentage:p,formatCurrencyValue:d}}});var N=o(11639);const j=(0,N.Z)(A,[["render",C],["__scopeId","data-v-6f5e07aa"]]),G=j;var O=o(76921),R=o(61957);const U={class:"absolute q-pa-md producer-toggle text-white"},K={class:"map-container",id:"map",ref:"map-root"},Q={class:"ol-popup",id:"popup",ref:"popup"},X={class:"ol-popup-closer",href:"#",id:"popup-closer",ref:"popup-closer"},Y={id:"popup-content",ref:"popup-content"},J={class:"ol-popup",id:"producerPopup",ref:"producerPopup"},ee={class:"ol-popup-closer",href:"#",id:"producerPopup-closer",ref:"producerPopup-closer"},te={id:"producerPopup-content",ref:"producerPopup-content"};function oe(e,t,o,n,i,a){const s=(0,r.up)("q-toggle");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",U,[(0,r.Wm)(s,{modelValue:e.producerToggle,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.producerToggle=t),t[1]||(t[1]=t=>e.updateToggleOption(t))],label:"Show Active BP","left-label":"",color:"white"},null,8,["modelValue"])]),(0,r._)("div",K,null,512),(0,r._)("div",Q,[(0,r.wy)((0,r._)("a",X,null,512),[[R.F8,e.$q.platform.is.mobile]]),(0,r._)("div",Y,null,512)],512),(0,r._)("div",J,[(0,r._)("a",ee,null,512),(0,r._)("div",te,null,512)],512)],64)}var re=o(21308),ne=o(54312),ie=o(57617),ae=o(3244),se=(o(1811),o(24553)),le=o(98723),ce=o(95695),pe=o(3038),de=o(33410),ue=o(95347),he=o(73504),ve=o(79100),we=o(55335),ge=o(36907),me=o(51317),fe=o(6884),xe=o(33100),ye=o(78504),Pe=o(98453),be=function(e,t,o,r){function n(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function s(e){try{l(r["throw"](e))}catch(t){i(t)}}function l(e){e.done?o(e.value):n(e.value).then(a,s)}l((r=r.apply(e,t||[])).next())}))};const _e=(0,r.aZ)({name:"WorldMap",components:{Map:re.Z,View:ne.ZP},setup(){const e=(0,ye.useStore)(),t=(0,w.iH)([40,40]),o=(0,w.iH)("EPSG:4326"),n=(0,w.iH)(8),i=(0,w.iH)(0),a=(0,w.iH)(Boolean(Number(localStorage.getItem("mapBP-toggle")))),s=(0,r.Fl)((()=>e.state.chain.bpList)),l=(0,r.Fl)((()=>e.state.chain.producerSchedule)),c=(0,r.Fl)((()=>e.state.chain.head_block_producer)),p=(0,w.iH)("");function d(e){localStorage.setItem("mapBP-toggle",Number(e).toString())}return{center:t,projection:o,zoom:n,rotation:i,BPlist:s,HeadProducer:c,currentHeadProducer:p,schedule:l,producerToggle:a,updateToggleOption:d}},data(){return{map:null,flashGeom:null,listenerKey:null,duration:2600,MapSource:null}},methods:Object.assign({},(0,xe.nv)("chain",["updateBpList"])),mounted(){return be(this,void 0,void 0,(function*(){yield this.updateBpList();const e=new le.ZP({image:new ce.Z({fill:new pe.Z({color:"#FFFFFF"}),radius:5}),fill:new pe.Z({color:(0,$.Z)("color-map")}),stroke:new de.Z({color:(0,$.Z)("color-map"),width:1}),zIndex:50}),t=new le.ZP({image:new ce.Z({fill:new pe.Z({color:"#8276d2"}),stroke:new de.Z({color:"#63C9EF",width:3}),radius:5}),zIndex:51}),o=new le.ZP({image:new ce.Z({fill:new pe.Z({color:"#8276d2"}),stroke:new de.Z({color:"#FFFFFF",width:3}),radius:5}),zIndex:51}),r=new ue.Z({wrapX:!1,url:"https://openlayers.org/data/vector/ecoregions.json",format:new se.Z}),n=new Pe.Z({imageRatio:1,source:r,style:e}),i=new ue.Z({wrapX:!1}),a=new he.Z({source:i}),s=this.$refs["popup"],l=this.$refs["popup-content"],c=this.$refs["popup-closer"],p=this.$refs["producerPopup"],d=this.$refs["producerPopup-content"],u=this.$refs["producerPopup-closer"],h=new ae.Z({element:s,autoPan:{animation:{duration:250}}}),v=new ae.Z({element:p});c.onclick=function(){return h.setPosition(void 0),c.blur(),!1},u.onclick=function(){return v.setPosition(void 0),u.blur(),!1};const w=new re.Z({layers:[n,a],overlays:[h,v],target:"map",view:new ne.ZP({center:[0,0],zoom:0}),controls:[],interactions:[]});let g=null;function m(t,r){for(const n of t)if(n.org&&n.org.location){const t=n.org.location.longitude,a=n.org.location.latitude,s=new ie.Z((0,ve.mi)([t,a])),l=new we.Z(s);r.includes(n.owner)?l.setStyle(o):l.setStyle(e),l.setId(n.owner),l.setProperties({type:"bp",country:n.org.location.name}),i.addFeature(l)}else{const t=360*Math.random()-180,a=15*Math.random()-89,s=new ie.Z((0,ve.mi)([t,a])),l=new we.Z(s);r.includes(n.owner)?l.setStyle(o):l.setStyle(e),l.setId(n.owner),l.setProperties({type:"bp",country:"unknown"}),i.addFeature(l)}}w.on("singleclick",(e=>{null!==g&&g.getProperties().type&&"bp"===g.getProperties().type&&(h.setPosition(void 0),c.blur(),l.innerHTML="&nbsp;",g=null),w.forEachFeatureAtPixel(e.pixel,(function(e){e.getProperties().type&&"bp"===e.getProperties().type&&(g=e)})),g&&g.getProperties().type&&"bp"===g.getProperties().type?(l.innerHTML=(g.getId()===this.HeadProducer?'<div class="owner-text text-h6 text-center text-uppercase text-primary">Producing</div>':"")+'<div class="owner-text text-h6 text-center text-uppercase">'+g.getId()+'</div><div class="country-text text-subtitle1 text-center">'+g.getProperties().country+"</div>",h.setPosition(g.getGeometry().getCoordinates())):l.innerHTML="&nbsp;"})),w.on("pointermove",(e=>{null!==g&&g.getProperties().type&&"bp"===g.getProperties().type&&(h.setPosition(void 0),c.blur(),l.innerHTML="&nbsp;",g=null),w.forEachFeatureAtPixel(e.pixel,(function(e){e.getProperties().type&&"bp"===e.getProperties().type&&(g=e)})),g&&g.getProperties().type&&"bp"===g.getProperties().type?(l.innerHTML=(g.getId()===this.HeadProducer?'<div class="owner-text text-h6 text-center text-uppercase text-primary">Producing</div>':"")+'<div class="owner-text text-h6 text-center text-uppercase">'+g.getId()+'</div><div class="country-text text-subtitle1 text-center">'+g.getProperties().country+"</div>",h.setPosition(g.getGeometry().getCoordinates())):l.innerHTML="&nbsp;"}));const f=2600;function x(e){const t=Date.now(),o=e.getGeometry().clone(),r=a.on("postrender",n);function n(e){const n=e.frameState,i=n.time-t;if(i>=f)return void(0,fe.B)(r);const a=(0,me.u3)(e),s=i/f,l=25*(0,ge.Vv)(s)+5,c=(0,ge.Vv)(1-s),p=new le.ZP({image:new ce.Z({radius:l,stroke:new de.Z({color:"rgba(255, 255, 255, "+c+")",width:.25+c})})});a.setStyle(p),a.drawGeometry(o),w.render()}}const y=()=>{if(this.HeadProducer!==this.currentHeadProducer){v.setPosition(void 0);let r=i.getFeatureById(this.HeadProducer),n=i.getFeatureById(this.currentHeadProducer);this.currentHeadProducer=this.HeadProducer,this.MapSource,null!==r&&(d.innerHTML=(r.getId()===this.HeadProducer?'<div class="owner-text text-h6 text-center text-uppercase text-primary">Producing</div>':"")+'<div class="owner-text text-h6 text-center text-uppercase">'+r.getId()+'</div><div class="country-text text-subtitle1 text-center">'+r.getProperties().country+"</div>",this.producerToggle&&v.setPosition(r.getGeometry().getCoordinates()),r.setStyle(t),x(r)),null!==n&&(this.schedule.includes(this.currentHeadProducer)?n.setStyle(o):n.setStyle(e))}};i.on("addfeature",(function(e){x(e.feature)})),window.setInterval((()=>{y()}),1e3),m(this.BPlist,this.schedule),this.map=w,this.MapSource=r}))}});var ke=o(23175),Ze=o(69984),He=o.n(Ze);const Me=(0,N.Z)(_e,[["render",oe],["__scopeId","data-v-9c30d6a4"]]),Te=Me;He()(_e,"components",{QToggle:ke.Z});const Fe=e=>((0,r.dD)("data-v-8161cf88"),e=e(),(0,r.Cn)(),e),Ce={class:"col-3"},Ie={class:"row"},De=Fe((()=>(0,r._)("div",{class:"col-12 text-subtitle1 text-weight-thin text-uppercase"},"Head Block",-1))),Se={class:"col-12 text-subtitle1 text-bold"},Be=Fe((()=>(0,r._)("div",{class:"col-1"},[(0,r._)("div",{class:"hr-vertical"})],-1))),Le={class:"col-3"},qe={class:"row"},$e=Fe((()=>(0,r._)("div",{class:"col-12 text-subtitle1 text-weight-thin text-uppercase"},"Producing",-1))),Ve={class:"col-12 text-subtitle1 text-bold"},Ee=Fe((()=>(0,r._)("div",{class:"col-1"},[(0,r._)("div",{class:"hr-vertical"})],-1))),We={class:"col-3"},ze={class:"row"},Ae=Fe((()=>(0,r._)("div",{class:"col-12 text-subtitle1 text-weight-thin text-uppercase"},"Irreversible Block",-1))),Ne={class:"col-12 text-subtitle1 text-bold"};function je(e,t,o,i,a,s){return(0,r.wg)(),(0,r.iD)("div",{class:(0,n.C_)(["row full-width text-center justify-center actor-font",{"text-grey-3":e.mapVisible}])},[(0,r._)("div",Ce,[(0,r._)("div",Ie,[De,(0,r._)("div",Se,(0,n.zw)(e.HeadBlock.toLocaleString()),1)])]),Be,(0,r._)("div",Le,[(0,r._)("div",qe,[$e,(0,r._)("div",Ve,(0,n.zw)(e.HeadBlockProducer),1)])]),Ee,(0,r._)("div",We,[(0,r._)("div",ze,[Ae,(0,r._)("div",Ne,(0,n.zw)(e.lastIrreversibleBlock.toLocaleString()),1)])])],2)}const Ge=(0,r.aZ)({name:"MapData",props:{mapVisible:{type:Boolean,required:!0}},setup(){const e=(0,ye.useStore)(),t=(0,r.Fl)((()=>e.state.chain.head_block_producer)),o=(0,r.Fl)((()=>e.state.chain.head_block_num)),n=(0,r.Fl)((()=>e.state.chain.last_irreversible_block_num));return{HeadBlock:o,HeadBlockProducer:t,lastIrreversibleBlock:n}}}),Oe=(0,N.Z)(Ge,[["render",je],["__scopeId","data-v-8161cf88"]]),Re=Oe;var Ue;(function(e){e[e["Reveal"]=0]="Reveal",e[e["Top"]=1]="Top",e[e["None"]=2]="None"})(Ue||(Ue={}));const Ke=(0,r.aZ)({name:"PageNetwork",components:{PriceChart:G,TransactionsTable:O.Z,WorldMap:Te,MapData:Re},setup(){const e=(0,ye.useStore)(),t=q.Z.get().getCurrentChain().getMapDisplay(),o=(0,w.iH)(!1),n=(0,w.iH)(!1),i=100;let a,s=(0,w.iH)(Ue.None);const l=()=>{o.value=!o.value,o.value||s.value===Ue.None||(s.value=Ue.None)},c=()=>{if(0===document.documentElement.scrollTop){if(!o.value){if(s.value===Ue.None)return void(s.value=Ue.Top);s.value===Ue.Top&&(s.value=Ue.Reveal,l())}}else s.value=Ue.None};(0,r.YP)(s,(e=>{e===Ue.Top&&(n.value=!0,setTimeout((()=>{n.value=!1}),2e3))}));const p=function(){window.clearTimeout(a),a=setTimeout(c,i)},d=function(e){"ArrowUp"===e.key&&p()},u=()=>{window.removeEventListener("scroll",p),window.removeEventListener("wheel",p),window.removeEventListener("keyup",d)};return(0,r.bv)((()=>{t&&(window.addEventListener("scroll",p,!1),window.addEventListener("wheel",p,!1),window.addEventListener("keyup",d,!1),window.setInterval((()=>{e.dispatch("chain/updateBlockData")}),2e3))})),(0,r.Jd)((()=>{u()})),{mapDisplay:t,showMap:o,showMapHint:n,toggleMap:l}}});var Qe=o(22857);const Xe=(0,N.Z)(Ke,[["render",v]]),Ye=Xe;He()(Ke,"components",{QIcon:Qe.Z})}}]);