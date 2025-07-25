import{u as n,b as j,r as h,j as e,I as b,a9 as p,N as q,a as B,P as N,c as W,G as E,aa as L,ab as c,ac as R,L as T,ad as F,ae as D}from"./index-BsvDpt2r.js";import{C as M}from"./CustomSelect-CWRvPmbX.js";const V="/pet-love/assets/add-pet-img-2x-desc-BVx0esE-.jpg",G="/pet-love/assets/add-pet-img-2x-tablet-BWjZlK6j.jpg",O="/pet-love/assets/add-pet-img-2x-mob-Bz61LxfA.jpg",Y=n.div`
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
`,H=n.form`
  padding: 28px 20px 20px;
  background-color: #fff;
  border-radius: 30px;
`,K=n.h2`
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
`,Z=n.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  color: rgba(43, 43, 42, 0.4);
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,J=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,f=n.input`
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
`,Q=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 32px;
`,m=n.div`
  position: relative;
`,X=n.div`
  position: absolute;
  right: 12px;
  top: 11px;
  pointer-events: none;
`,_=n.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,C=n.button`
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

`,ee=n.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px){
    margin-bottom: -20px;
  }
`,I=n.input.attrs({type:"radio"})`
  display: none;
`,A=n.label`
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
`,te=n.div`
  ${I}:checked + ${A} {
    background-color: ${t=>t.$opt==="female"?"#F43F5E":t.$opt==="male"?"#54adff":"#f6b83d"};
  }
`,ae=[{name:"female",value:"female"},{name:"male",value:"male"},{name:"both",value:"both"}],ne=({setValue:t,watch:x})=>{const o=j(),i=x("sex"),[r,s]=h.useState(!1);return e.jsx(ee,{role:"radiogroup","aria-label":"Select option",children:ae.map(a=>e.jsxs(te,{$opt:a.name,children:[e.jsx(I,{id:`radio-${a.name}`,name:"sex",value:a.value,checked:i===a.value,onChange:()=>{t("sex",a.value,{shouldValidate:!0})}}),e.jsx(A,{onMouseEnter:()=>s(a.name),onMouseLeave:()=>s(null),$opt:a.name,htmlFor:`radio-${a.name}`,children:e.jsx(b,{name:i===a.name||r===a.name?`icon-${a.name}`:`icon-sex-${a.name}`,width:o==="desktop"||o==="tablet"?24:20,height:o==="desktop"||o==="tablet"?24:20})})]},a.name))})},ie=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`,oe=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 10px;
  width: 48px;
  height: 48px;
  background: #fff4df;
  margin: 0 auto 16px;
  background-image: ${({imgPreview:t})=>t?`url(${t})`:"none"};
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
    margin: 0 auto 12px;
  }
`,se=n.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  position: relative;
`,re=n.input`
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
`,de=n.button`
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
`,le=({watch:t,register:x,errors:o})=>{var g;const i=j(),[r,s]=h.useState(null),a=t("imgUrl"),d=()=>{if(!a){s(null);return}s(a.trim())};return h.useEffect(()=>{a!=null&&a.trim()||s(null)},[a]),e.jsxs(ie,{children:[e.jsx(oe,{imgPreview:r,children:r?null:e.jsx(b,{width:i==="desktop"||i==="tablet"?44:34,height:i==="desktop"||i==="tablet"?44:34,name:"icon-paw"})}),e.jsxs(se,{children:[e.jsx(re,{...x("imgUrl"),name:"imgUrl",placeholder:"Enter URL",type:"text"}),e.jsxs(de,{type:"button",onClick:d,children:["Upload photo ",e.jsx(b,{width:16,height:16,name:"icon-cloud"})]}),e.jsx(p,{className:"addPet photo",children:(g=o.imgUrl)==null?void 0:g.message})]})]})};function ce(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",x2:"16",y1:"2",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",x2:"8",y1:"2",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",x2:"21",y1:"10",y2:"10"},child:[]}]})(t)}const pe=()=>{var w,k,P,$,S;const t=B(),x=N(),o=W(E),[i,r]=h.useState(null),s=()=>{x("/profile")},a=L().shape({title:c().required("Title is required"),name:c().required("Pet's name is required"),imgUrl:c().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,"Invalid image URL").required("Image URL is required"),species:c().required("Species is required"),birthday:c().matches(/^\d{4}-\d{2}-\d{2}$/,"Date must be in YYYY-MM-DD format").required("Birthday is required"),sex:c().required("Sex is required")}),{register:d,handleSubmit:g,setValue:y,watch:v,reset:z,formState:{errors:l}}=R({defaultValues:{title:"",name:"",imgUrl:"",species:"",birthday:"",sex:""},resolver:F(a)}),U=u=>{console.log("Valid form data:",u),z(),r(null)};return h.useEffect(()=>{t(T())},[t]),e.jsxs(H,{onSubmit:g(U),children:[e.jsxs(K,{children:["Add my pet /",e.jsx(Z,{children:"Personal details"})]}),e.jsxs(m,{children:[e.jsx(ne,{register:d,setValue:y,watch:v}),e.jsx(p,{className:"addPet",children:(w=l.sex)==null?void 0:w.message})]}),e.jsx(le,{watch:v,register:d,errors:l}),e.jsxs(J,{children:[e.jsxs(m,{children:[e.jsx(f,{...d("title"),name:"title",placeholder:"Title",type:"text"}),e.jsx(p,{className:"addPet",children:(k=l.title)==null?void 0:k.message})]}),e.jsxs(m,{children:[e.jsx(f,{...d("name"),name:"name",placeholder:"Pet’s Name",type:"text"}),e.jsx(p,{className:"addPet",children:(P=l.name)==null?void 0:P.message})]}),e.jsxs(Q,{children:[e.jsxs(m,{children:[e.jsx(X,{children:e.jsx(ce,{})}),e.jsx(f,{...d("birthday"),className:"date",name:"birthday",placeholder:"0000-00-00",type:"text"}),e.jsx(p,{className:"addPet",children:($=l.birthday)==null?void 0:$.message})]}),e.jsxs(m,{children:[e.jsx(M,{addPet:!0,options:o,placeholder:"Pet type",handleOptionChange:u=>{y("species",u.value,{shouldValidate:!0}),r(u)},selectedOpt:i}),e.jsx(p,{className:"addPet",children:(S=l.species)==null?void 0:S.message})]})]})]}),e.jsxs(_,{children:[e.jsx(C,{onClick:s,className:"back",children:"Back"}),e.jsx(C,{type:"submit",className:"submit",children:"Submit"})]})]})},he=()=>{const t=j();return e.jsxs(Y,{children:[e.jsx(D,{imageUrl:t==="desktop"?V:t==="tablet"?G:O}),e.jsx(pe,{})]})};export{he as default};
