import{p as B,i as X,c as p,r as F,a as V,b as C,g as ce,s as pe,o as ve,d as de,f as fe,e as U,h as g,j as W,k as Y,l as z,m as H,w as G,u as me,n as ye,q as _e,t as J,v as ge,x as he,y as xe,z as be,A as Ie}from"./index-cc3538fd.js";import{u as $e,m as Q,a as Se,b as we,c as ee,_ as te,V as Le}from"./VImg-4f689e82.js";const A=Symbol.for("vuetify:layout"),Ve=Symbol.for("vuetify:layout-item"),q=1e3,Ce=B({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function ze(){const e=X(A);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}const Me=(e,s,t,o)=>{let l={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...l}}];for(const i of e){const f=s.get(i),y=t.get(i),x=o.get(i);if(!f||!y||!x)continue;const _={...l,[f.value]:parseInt(l[f.value],10)+(x.value?parseInt(y.value,10):0)};r.push({id:i,layer:_}),l=_}return r};function Re(e){const s=X(A,null),t=p(()=>s?s.rootZIndex.value-100:q),o=F([]),l=V(new Map),r=V(new Map),i=V(new Map),f=V(new Map),y=V(new Map),{resizeRef:x,contentRect:_}=$e(),oe=p(()=>{const a=new Map,v=e.overlaps??[];for(const n of v.filter(c=>c.includes(":"))){const[c,u]=n.split(":");if(!o.value.includes(c)||!o.value.includes(u))continue;const m=l.get(c),h=l.get(u),S=r.get(c),w=r.get(u);!m||!h||!S||!w||(a.set(u,{position:m.value,amount:parseInt(S.value,10)}),a.set(c,{position:h.value,amount:-parseInt(w.value,10)}))}return a}),b=p(()=>{const a=[...new Set([...i.values()].map(n=>n.value))].sort((n,c)=>n-c),v=[];for(const n of a){const c=o.value.filter(u=>{var m;return((m=i.get(u))==null?void 0:m.value)===n});v.push(...c)}return Me(v,l,r,f)}),O=p(()=>!Array.from(y.values()).some(a=>a.value)),I=p(()=>b.value[b.value.length-1].layer),ne=p(()=>({"--v-layout-left":C(I.value.left),"--v-layout-right":C(I.value.right),"--v-layout-top":C(I.value.top),"--v-layout-bottom":C(I.value.bottom),...O.value?void 0:{transition:"none"}})),$=p(()=>b.value.slice(1).map((a,v)=>{let{id:n}=a;const{layer:c}=b.value[v],u=r.get(n),m=l.get(n);return{id:n,...c,size:Number(u.value),position:m.value}})),T=a=>$.value.find(v=>v.id===a),M=ce("createLayout"),E=pe(!1);ve(()=>{E.value=!0}),de(A,{register:(a,v)=>{let{id:n,order:c,position:u,layoutSize:m,elementSize:h,active:S,disableTransitions:w,absolute:le}=v;i.set(n,c),l.set(n,u),r.set(n,m),f.set(n,S),w&&y.set(n,w);const N=fe(Ve,M==null?void 0:M.vnode).indexOf(a);N>-1?o.value.splice(N,0,n):o.value.push(n);const j=p(()=>$.value.findIndex(L=>L.id===n)),R=p(()=>t.value+b.value.length*2-j.value*2),ue=p(()=>{const L=u.value==="left"||u.value==="right",k=u.value==="right",ie=u.value==="bottom",Z={[u.value]:0,zIndex:R.value,transform:`translate${L?"X":"Y"}(${(S.value?0:-110)*(k||ie?-1:1)}%)`,position:le.value||t.value!==q?"absolute":"fixed",...O.value?void 0:{transition:"none"}};if(!E.value)return Z;const d=$.value[j.value];if(!d)throw new Error(`[Vuetify] Could not find layout item "${n}"`);const P=oe.value.get(n);return P&&(d[P.position]+=P.amount),{...Z,height:L?`calc(100% - ${d.top}px - ${d.bottom}px)`:h.value?`${h.value}px`:void 0,left:k?void 0:`${d.left}px`,right:k?`${d.right}px`:void 0,top:u.value!=="bottom"?`${d.top}px`:void 0,bottom:u.value!=="top"?`${d.bottom}px`:void 0,width:L?h.value?`${h.value}px`:void 0:`calc(100% - ${d.left}px - ${d.right}px)`}}),re=p(()=>({zIndex:R.value-1}));return{layoutItemStyles:ue,layoutItemScrimStyles:re,zIndex:R}},unregister:a=>{i.delete(a),l.delete(a),r.delete(a),f.delete(a),y.delete(a),o.value=o.value.filter(v=>v!==a)},mainRect:I,mainStyles:ne,getLayoutItem:T,items:$,layoutRect:_,rootZIndex:t});const ae=p(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),se=p(()=>({zIndex:t.value,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:ae,layoutStyles:se,getLayoutItem:T,items:$,layoutRect:_,layoutRef:x}}const ke=B({scrollable:Boolean,...Q(),...Se({tag:"main"})},"VMain"),Pe=U()({name:"VMain",props:ke(),setup(e,s){let{slots:t}=s;const{mainStyles:o}=ze(),{ssrBootStyles:l}=we();return ee(()=>g(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,l.value,e.style]},{default:()=>{var r,i;return[e.scrollable?g("div",{class:"v-main__scroller"},[(r=t.default)==null?void 0:r.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),Ae=W({__name:"View",setup(e){return(s,t)=>{const o=Y("router-view");return z(),H(Pe,null,{default:G(()=>[g(o)]),_:1})}}}),D="/assets/france-0d075f82.png",K="/assets/united-states-c2444d28.png",Be={setup(){const{locale:e}=me(),s=F(e.value==="fr"?D:K),t=()=>{e.value=e.value==="fr"?"en":"fr"};return ye(()=>e.value,o=>{s.value=o==="fr"?D:K}),{changeLanguage:t,logo:s}}};function He(e,s,t,o,l,r){return z(),H(Le,{src:o.logo,onClick:o.changeLanguage,width:"30px"},null,8,["src","onClick"])}const Oe=te(Be,[["render",He],["__scopeId","data-v-7352549e"]]),Te={components:{LanguageSelector:Oe}};const Ee=e=>(ge("data-v-bd384fd2"),e=e(),he(),e),Ne=Ee(()=>J("h1",null,"Portfolio",-1));function je(e,s,t,o,l,r){const i=Y("LanguageSelector");return z(),_e("header",null,[Ne,J("div",null,[g(i,{class:"selector"})])])}const Ze=te(Te,[["render",je],["__scopeId","data-v-bd384fd2"]]);const qe=B({...Q(),...Ce({fullHeight:!0}),...xe()},"VApp"),De=U()({name:"VApp",props:qe(),setup(e,s){let{slots:t}=s;const o=be(e),{layoutClasses:l,layoutStyles:r,getLayoutItem:i,items:f,layoutRef:y}=Re(e),{rtlClasses:x}=Ie();return ee(()=>{var _;return g("div",{ref:y,class:["v-application",o.themeClasses.value,l.value,x.value,e.class],style:[r.value,e.style]},[g("div",{class:"v-application__wrap"},[(_=t.default)==null?void 0:_.call(t)])])}),{getLayoutItem:i,items:f,theme:o}}}),Ue=W({__name:"Default",setup(e){return(s,t)=>(z(),H(De,null,{default:G(()=>[g(Ze),g(Ae)]),_:1}))}});export{Ue as default};
