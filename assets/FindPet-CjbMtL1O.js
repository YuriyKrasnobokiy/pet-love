import{u as c,j as o,I as z,c as a,a as _,i as T,k as N,l as w,m as y,n as ae,o as re,p as ie,q,t as U,r,v as we,w as Be,A as $e,x as le,y as Ie,z as _e,B as Ee,C as Fe,D as We,E as Ge,F as De,G as He,H as Ae,J as Te,K as Ne,L as Ve,M as se}from"./index-J56aj5DR.js";import{_ as ze,a as v,h as Me,b as $,c as qe,u as Ue,S as Je,d as Ke,e as Qe,f as Xe,C as V}from"./CustomSelect-BMGPIZnD.js";import{R as Ye,S as Ze,P as et}from"./SearchField-V7iJpTEy.js";import{P as tt,R as ot}from"./ResultsNotFound-BYVlCMxM.js";import{S as nt}from"./SimpleLoader-BmNLcVSi.js";const st=c.div`
  padding: 20px;
  border-radius: 30px;
  background-color: ${e=>e.theme.colors.FiltersWrapBGColor};
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding: 40px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px;
    width: 1136px;
    margin: 0 -32px 40px;
  }
`,at=c.div`
  display: grid;
  grid-template-columns: 1fr;

  padding-bottom: 20px;
  gap: 12px 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 2fr 1fr;
  }
`,rt=c.div`
  @media screen and (min-width: 768px) {
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 2fr;
  }
`,it=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    gap: 16px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 200px 1fr;
  }
`,lt=c.div`
  display: grid;
  gap: 12px;
  @media screen and (min-width: 768px) {
    gap: 16px;
    grid-template-columns: 1fr 227px 1fr;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 190px 227px;
  }
`,ct=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid ${e=>e.theme.colors.RadioBtnsBorderColor};
`,dt=c.button`
  padding: 12px;
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  border-radius: 30px;
  color: ${e=>e.theme.colors.RadioBtnLabelColor};
  background-color: ${e=>e.theme.colors.RadioBtnLabelBGColor};
  cursor: pointer;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;

  &:hover {
    color: ${e=>e.theme.colors.RadioBtnLabelColorHover};
    background-color: ${e=>e.theme.colors.RadioBtnLabelBGColorHover};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px;
  }
`,pt=c.div``,M=c.button`
  display: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.RadioBtnLabelColorHover};
  width: 18px;
  height: 18px;
`,ut=c.input.attrs({type:"radio"})`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 0;
  height: 0;
  position: absolute;

  &.pop-radio-btn + label {
    color: ${e=>e.theme.colors.RadioBtnLabelColorHover};
    background-color: ${e=>e.theme.colors.RadioBtnLabelBGColorHover};
  }

  &.pop-radio-btn + label ${M} {
    display: block;
  }

  &.price-radio-btn + label {
    color: ${e=>e.theme.colors.RadioBtnLabelColorHover};
    background-color: ${e=>e.theme.colors.RadioBtnLabelBGColorHover};
  }

  &.price-radio-btn + label ${M} {
    display: block;
  }
`,ht=c.label`
  display: inline-block;
  padding: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  border-radius: 30px;
  color: ${e=>e.theme.colors.RadioBtnLabelColor};
  background-color: ${e=>e.theme.colors.RadioBtnLabelBGColor};
  cursor: pointer;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;

  &:hover {
    color: ${e=>e.theme.colors.RadioBtnLabelColorHover};
    background-color: ${e=>e.theme.colors.RadioBtnLabelBGColorHover};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px;
  }
`,mt=c.div`
  display: flex;
  gap: 6px;
`,I=({id:e,name:s,label:t,className:n,handleClick:i,handleDeleteClick:l})=>o.jsxs(pt,{children:[o.jsx(ut,{id:e,type:"radio",name:s,onClick:()=>i(t),className:n}),o.jsx(ht,{htmlFor:e,children:o.jsxs(mt,{children:[t,o.jsx(M,{onClick:l,children:o.jsx(z,{name:"icon-cross-small",width:18,height:18})})]})})]}),gt=e=>e.filtersStore.category,ft=e=>e.filtersStore.specie,xt=e=>e.filtersStore.gender,ce=e=>e.filtersStore.popular,de=e=>e.filtersStore.expensive,Ct=e=>e.filtersStore.locationId,vt=e=>e.filtersStore.location,bt=()=>{const e=a(de),s=a(ce),t=_(),n=d=>{t(T(d.toLowerCase()!=="popular"))},i=()=>{t(T(null))},l=d=>{t(N(d.toLowerCase()==="expensive"))},p=()=>{t(N(null))},u=()=>{t(N(null)),t(T(null)),t(w("")),t(y(1)),t(ae("")),t(re("")),t(ie("")),t(q("")),t(U(""))};return o.jsxs(ct,{children:[o.jsx(I,{handleDeleteClick:i,handleClick:n,id:"0",name:"pop",label:"Popular",className:s===!1?"pop-radio-btn":""}),o.jsx(I,{handleDeleteClick:i,handleClick:n,id:"1",name:"pop",label:"Unpopular",className:s===!0?"pop-radio-btn":""}),o.jsx(I,{handleDeleteClick:p,handleClick:l,id:"2",name:"price",label:"Cheap",className:e===!1?"price-radio-btn":""}),o.jsx(I,{handleDeleteClick:p,handleClick:l,id:"3",name:"price",label:"Expensive",className:e===!0?"price-radio-btn":""}),o.jsx(dt,{type:"button",onClick:u,children:"Reset Filters"})]})};var St=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function yt(e){var s=e.defaultOptions,t=s===void 0?!1:s,n=e.cacheOptions,i=n===void 0?!1:n,l=e.loadOptions;e.options;var p=e.isLoading,u=p===void 0?!1:p,d=e.onInputChange,h=e.filterOption,j=h===void 0?null:h,b=ze(e,St),S=b.inputValue,x=r.useRef(void 0),C=r.useRef(!1),m=r.useState(Array.isArray(t)?t:void 0),L=v(m,2),E=L[0],f=L[1],pe=r.useState(typeof S<"u"?S:""),J=v(pe,2),K=J[0],F=J[1],ue=r.useState(t===!0),Q=v(ue,2),he=Q[0],O=Q[1],me=r.useState(void 0),X=v(me,2),W=X[0],G=X[1],ge=r.useState([]),Y=v(ge,2),fe=Y[0],D=Y[1],xe=r.useState(!1),Z=v(xe,2),Ce=Z[0],B=Z[1],ve=r.useState({}),ee=v(ve,2),R=ee[0],te=ee[1],be=r.useState(void 0),oe=v(be,2),Se=oe[0],ye=oe[1],je=r.useState(void 0),ne=v(je,2),Le=ne[0],Pe=ne[1];i!==Le&&(te({}),Pe(i)),t!==Se&&(f(Array.isArray(t)?t:void 0),ye(t)),r.useEffect(function(){return C.current=!0,function(){C.current=!1}},[]);var H=r.useCallback(function(k,P){if(!l)return P();var g=l(k,P);g&&typeof g.then=="function"&&g.then(P,function(){return P()})},[l]);r.useEffect(function(){t===!0&&H(K,function(k){C.current&&(f(k||[]),O(!!x.current))})},[]);var Oe=r.useCallback(function(k,P){var g=Me(k,P,d);if(!g){x.current=void 0,F(""),G(""),D([]),O(!1),B(!1);return}if(i&&R[g])F(g),G(g),D(R[g]),O(!1),B(!1);else{var ke=x.current={};F(g),O(!0),B(!W),H(g,function(A){C&&ke===x.current&&(x.current=void 0,O(!1),G(g),D(A||[]),B(!1),te(A?$($({},R),{},qe({},g,A)):R))})}},[i,H,W,R,d]),Re=Ce?[]:K&&W?fe:E||[];return $($({},b),{},{options:Re,isLoading:he||u,onInputChange:Oe,filterOption:j})}var jt=r.forwardRef(function(e,s){var t=yt(e),n=Ue(t);return r.createElement(Je,Ke({ref:s},n))}),Lt=jt;const Pt=c.div`
  display: flex;
  margin-right: 12px;
  align-items: "center";
  color: ${e=>e.theme.colors.LocationSelectWrapColor};

  @media screen and (min-width: 768px) {
    margin-right: 14px;
  }
`,Ot=({children:e,...s})=>{const t=_(),{selectProps:n}=s,i=()=>{t(U("")),t(q("")),t(w("")),n.onInputChange(""),n.onChange(null)};return o.jsxs(Xe.Control,{...s,children:[e,(n.value||n.inputValue)&&o.jsx(Ye,{$location:!0,type:"button",onClick:i,children:o.jsx(z,{height:18,width:18,name:"icon-cross-small"})}),o.jsx(Pt,{children:o.jsx(z,{name:"icon-search",width:18,height:18})})]})},Rt=({handleOptionChange:e,selectedOpt:s})=>{const t=we(),n=async l=>{try{return(await Be.get(`${$e}cities?keyword=${l}`)).data.map(d=>({value:d._id,label:`${d.stateEn}, ${d.cityEn}`}))}catch(p){return console.error("Error fetching options:",p),[]}},i=l=>{l&&e(l)};return o.jsx(Lt,{value:s,onChange:i,loadOptions:n,styles:Qe(t),placeholder:"Enter location",noOptionsMessage:()=>"No options found",hideIndicators:!0,components:{Control:Ot}})},kt=({genders:e,species:s,categories:t,filterTearm:n,onFetch:i,onPageChange:l,categoryTerm:p,specieTerm:u,genderTerm:d})=>{const h=_(),j=a(vt),b=m=>{h(ae(m.value)),h(y(1))},S=m=>{h(ie(m.value)),h(y(1))},x=m=>{h(re(m.value))},C=m=>{h(q(m.value)),h(U(m)),h(y(1))};return o.jsxs(st,{children:[o.jsxs(at,{children:[o.jsxs(rt,{children:[o.jsx(Ze,{onFetch:i,setFilterTerm:w,selectFilterTerm:le,onPageChange:l,filterWord:n,isInFilters:!0}),o.jsxs(it,{children:[o.jsx(V,{options:t,placeholder:"Categories",handleOptionChange:b,selectedOpt:p}),o.jsx(V,{options:e,placeholder:"By gender",handleOptionChange:x,selectedOpt:d})]})]}),o.jsxs(lt,{children:[o.jsx(V,{options:s,placeholder:"By type",handleOptionChange:S,selectedOpt:u}),o.jsx(Rt,{handleOptionChange:C,selectedOpt:j})]})]}),o.jsx(bt,{})]})},wt=c.div`
  padding-top: 34px;

  @media screen and (min-width: 768px) {
    padding-top: 53px;
  }
`,Bt=c.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 44px;
  }
`,$t=c.h2`
  margin-bottom: 0;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`,Gt=()=>{const e=a(Ie),s=a(_e),t=_();a(Ee);const n=a(le),i=a(Fe),l=a(We),p=a(Ge),u=a(xt),d=a(De),h=a(He),j=a(Ae),b=a(gt),S=a(ft),x=a(de),C=a(ce),m=a(Ct),L=u?d.filter(f=>f.sex===u):d;r.useEffect(()=>{t(Te()),t(Ne()),t(Ve()),t(w("")),t(y(1))},[t]),r.useEffect(()=>{t(se({page:s,limit:p,filterWord:n,category:b,species:S,sex:u,isPopular:C,isExpensive:x,locationId:m,location}))},[t,s,p,n,b,S,u,C,x,m,location]);const E=f=>{t(y(f))};return l?o.jsx(nt,{}):o.jsxs(wt,{className:"container",children:[o.jsx(Bt,{children:o.jsx($t,{className:"title",children:"Find your favorite pet"})}),o.jsx(kt,{genders:i,categories:e,species:h,filterTearm:n,onFilterChange:f=>t(w(f)),onFetch:f=>t(se(f)),onPageChange:f=>t(y(f)),categoryTerm:b,specieTerm:S,genderTerm:u}),L.length!==0?o.jsxs(o.Fragment,{children:[o.jsx(tt,{pets:L}),u!==""?L.length>p:j>1?o.jsx(et,{currentPage:s,totalPages:j,onPageChange:E}):null]}):o.jsx(ot,{})]})};export{Gt as default};
