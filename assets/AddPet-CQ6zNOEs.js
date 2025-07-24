import{u as a,b as u,r as k,j as e,I as g,a9 as l,N as q,a as z,P as B,c as N,G as U,aa as W,ab as d,ac as L,L as R,ad as T,ae as E}from"./index-BRhEZXsx.js";import{C as F}from"./CustomSelect-CvxaPr6Z.js";const D="/pet-love/assets/add-pet-img-2x-desc-BVx0esE-.jpg",M="/pet-love/assets/add-pet-img-2x-tablet-BWjZlK6j.jpg",V="/pet-love/assets/add-pet-img-2x-mob-Bz61LxfA.jpg",G=a.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  padding: 20px;
  max-width: 1216px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 32px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    padding: 32px 0;
  }
`,Y=a.form`
  padding: 28px 20px 20px;
  background-color: #fff;
  border-radius: 30px;
`,O=a.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #262626;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`,H=a.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  color: rgba(43, 43, 42, 0.4);
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,K=a.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,h=a.input`
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  padding: 12px;
  width: 269px;
  height: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color:  #262626;
  transition: border-color 300ms ease-in-out;
  outline: none;

  &.date {
    width: 88px;
    padding: 12px 42px 12px 12px;
  }

  &::placeholder{
    color: rgba(38, 38, 38, 0.5);
  }

  &:hover {
    border-color: ${t=>t.theme.colors.accentColor};
  }
  &:focus {
    border-color: ${t=>t.theme.colors.accentColor};
    outline: none;
    caret-color: ${t=>t.theme.colors.accentColor};
  }
`,Z=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 32px;
`,p=a.div`
  position: relative;
`,J=a.div`
  position: absolute;
  right: 12px;
  top: 11px;
  pointer-events: none;
`,Q=a.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,P=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 12px 34px;
  width: 100px;
  height: 42px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.03em;
  margin: 0;
  opacity: 1;
  transition: background 300ms ease-in-out;

  &.back {
    color: #262626;
    background: rgba(38, 38, 38, 0.05);
    &:hover {
    background: rgba(38, 38, 38, 0.08);
  }
  };

  &.submit {
    color: #fff;
    background: #f6b83d;

    &:hover {
    background: #f9b020;;
  }
  };

  @media screen and (min-width: 768px) {
    padding: 14px 67px;
    width: 170px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }

`,X=a.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px){
    margin-bottom: -20px;
  }
`,$=a.input.attrs({type:"radio"})`
  display: none;
`,S=a.label`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${t=>t.$opt==="female"?"rgba(244, 63, 94, 0.1)":t.$opt==="male"?"rgba(84, 173, 255, 0.1)":"#fff4df"};
  color: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.8s ease;

  &:hover {
    background-color: ${t=>t.$opt==="female"?"#F43F5E":t.$opt==="male"?"#54adff":"#f6b83d"};
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,_=a.div`
  ${$}:checked + ${S} {
    background-color: ${t=>t.$opt==="female"?"#F43F5E":t.$opt==="male"?"#54adff":"#f6b83d"};
  }
`,ee=[{name:"female",value:"female"},{name:"male",value:"male"},{name:"both",value:"both"}],te=({setValue:t,watch:c})=>{const n=u(),o=c("sex"),[x,s]=k.useState(!1);return e.jsx(X,{role:"radiogroup","aria-label":"Select option",children:ee.map(i=>e.jsxs(_,{$opt:i.name,children:[e.jsx($,{id:`radio-${i.name}`,name:"sex",value:i.value,checked:o===i.value,onChange:()=>{t("sex",i.value,{shouldValidate:!0})}}),e.jsx(S,{onMouseEnter:()=>s(i.name),onMouseLeave:()=>s(null),$opt:i.name,htmlFor:`radio-${i.name}`,children:e.jsx(g,{name:o===i.name||x===i.name?`icon-${i.name}`:`icon-sex-${i.name}`,width:n==="desktop"||n==="tablet"?24:20,height:n==="desktop"||n==="tablet"?24:20})})]},i.name))})},ae=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`,ie=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 10px;
  width: 48px;
  height: 48px;
  background: #fff4df;
  margin: 0 auto 16px;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
    margin: 0 auto 12px;
  }
`,ne=a.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  position: relative;
`,se=a.input`
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  padding: 9px 19px 8px 9px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
  width: 140px;
  /* height: 36px; */
  transition: all 300ms ease-in-out;
  outline: none;

  &:hover {
    border-color: ${t=>t.theme.colors.accentColor};
  }
  &:focus {
    border-color: ${t=>t.theme.colors.accentColor};
    outline: none;
    caret-color: ${t=>t.theme.colors.accentColor};
  }

  &::placeholder {
    font-style: 14px;
    align-items: center;
    justify-content: center;
    color: inherit;
  }
`,oe=a.button`
  display: flex;
  border-radius: 30px;
  padding: 10px;
  width: 117px;
  height: 36px;
  background: #fff4df;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #262626;
  transition: background 300ms ease-in-out;

  &:hover {
    background: #fbe7c1;
  }
`,re=({register:t,errors:c})=>{var o;const n=u();return e.jsxs(ae,{children:[e.jsx(ie,{children:e.jsx(g,{width:n==="desktop"||n==="tablet"?44:34,height:n==="desktop"||n==="tablet"?44:34,name:"icon-paw"})}),e.jsxs(ne,{children:[e.jsx(se,{...t("imgUrl"),name:"imgUrl",placeholder:"Enter URL",type:"text"}),e.jsxs(oe,{type:"button",children:["Upload photo ",e.jsx(g,{width:16,height:16,name:"icon-cloud"})]}),e.jsx(l,{className:"addPet photo",children:(o=c.imgUrl)==null?void 0:o.message})]})]})};function de(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",x2:"16",y1:"2",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",x2:"8",y1:"2",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",x2:"21",y1:"10",y2:"10"},child:[]}]})(t)}const le=()=>{var b,j,y,v,w;const t=z(),c=B(),n=N(U),o=()=>{c("/profile")},x=W().shape({title:d().required("Title is required"),name:d().required("Pet's name is required"),imgUrl:d().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,"Invalid image URL").required("Image URL is required"),species:d().required("Species is required"),birthday:d().matches(/^\d{2}\.\d{2}\.\d{4}$/,"Date must be in DD.MM.YYYY format").required("Birthday is required"),sex:d().required("Sex is required")}),{register:s,handleSubmit:i,setValue:f,watch:A,reset:C,formState:{errors:r}}=L({defaultValues:{title:"",name:"",imgUrl:"",species:"",birthday:"",sex:""},resolver:T(x)}),I=m=>{console.log("Valid form data:",m),C()};return k.useEffect(()=>{t(R())},[t]),e.jsxs(Y,{onSubmit:i(I),children:[e.jsxs(O,{children:["Add my pet /",e.jsx(H,{children:"Personal details"})]}),e.jsxs(p,{children:[e.jsx(te,{register:s,setValue:f,watch:A}),e.jsx(l,{className:"addPet",children:(b=r.sex)==null?void 0:b.message})]}),e.jsx(re,{register:s,errors:r}),e.jsxs(K,{children:[e.jsxs(p,{children:[e.jsx(h,{...s("title"),name:"title",placeholder:"Title",type:"text"}),e.jsx(l,{className:"addPet",children:(j=r.title)==null?void 0:j.message})]}),e.jsxs(p,{children:[e.jsx(h,{...s("name"),name:"name",placeholder:"Pet’s Name",type:"text"}),e.jsx(l,{className:"addPet",children:(y=r.name)==null?void 0:y.message})]}),e.jsxs(Z,{children:[e.jsxs(p,{children:[e.jsx(J,{children:e.jsx(de,{})}),e.jsx(h,{...s("birthday"),className:"date",name:"birthday",placeholder:"00.00.0000",type:"text"}),e.jsx(l,{className:"addPet",children:(v=r.birthday)==null?void 0:v.message})]}),e.jsxs(p,{children:[e.jsx(F,{addPet:!0,options:n,placeholder:"Pet type",handleOptionChange:m=>{f("species",m.value,{shouldValidate:!0})},selectedOpt:null}),e.jsx(l,{className:"addPet",children:(w=r.species)==null?void 0:w.message})]})]})]}),e.jsxs(Q,{children:[e.jsx(P,{onClick:o,className:"back",children:"Back"}),e.jsx(P,{type:"submit",className:"submit",children:"Submit"})]})]})},xe=()=>{const t=u();return e.jsxs(G,{children:[e.jsx(E,{imageUrl:t==="desktop"?D:t==="tablet"?M:V}),e.jsx(le,{})]})};export{xe as default};
