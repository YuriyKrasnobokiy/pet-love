import{u as a,b as j,r as g,j as e,I as b,aa as x,N as q,a as B,P as W,c as C,Q as E,G as T,ab as F,ac as c,ad as D,L as M,ae as V,af as G,ag as O}from"./index-obbgT2kB.js";import{C as Y}from"./CustomSelect-B6aRnBMY.js";const H="/pet-love/assets/add-pet-img-2x-desc-BVx0esE-.jpg",K="/pet-love/assets/add-pet-img-2x-tablet-BWjZlK6j.jpg",Q="/pet-love/assets/add-pet-img-2x-mob-Bz61LxfA.jpg",Z=a.div`
  display: grid;
  grid-template-columns: 1fr;
  /* gap: 10px; */
  padding: 0 20px 20px;
  /* padding: 20px; */
  /* max-width: 1216px; */
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
    /* gap: 16px; */
    padding: 0 32px 32px;
    /* padding: 32px; */
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    padding:  0 0 32px 0;
    /* padding: 32px 0; */
  }
`,J=a.form`
  padding: 28px 20px 20px;
  background-color: #fff;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    padding: 40px 136px;
  }
  @media screen and (min-width: 1280px) {
    border-radius: 60px;
    padding: 60px 80px;
  }
`,X=a.h2`
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
`,_=a.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  color: rgba(43, 43, 42, 0.4);
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,ee=a.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px){
    gap: 18px;
  }
`,f=a.input`
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

  @media screen and (min-width: 768px) {
    padding: 16px;
    width: calc(432px - 16px - 16px - 2px);
    height: calc(52px - 16px - 16px - 2px);
    font-size: 16px;
    line-height: 1.25;
  }

  &.date {
    width: 88px;
    padding: 12px 42px 12px 12px;

    @media screen and (min-width: 768px) {
      padding: 16px 109px 16px 16px;
      width: calc(210px - 109px - 16px - 2px);
    }
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

  &:-webkit-autofill {
    transition: background-color 9999s ease-in-out 0s, color 9999s ease-in-out 0s;
    -webkit-text-fill-color: #262626 !important;
    caret-color: ${t=>t.theme.colors.accentColor};
  }
`,te=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,h=a.div`
  position: relative;
`,ie=a.div`
  position: absolute;
  right: 12px;
  top: 11px;
  pointer-events: none;

  @media screen and (min-width: 768px) {
    right: 16px;
    top: 16px;
  }
`,ae=a.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,z=a.button`
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

`,ne=a.div`
  display: flex;
  gap: 8px;
  padding-bottom: 8px;

  @media screen and (min-width: 768px){
    margin-bottom: -20px;
    padding-bottom: 0;
  }
`,I=a.input.attrs({type:"radio"})`
  display: none;
`,L=a.label`
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
`,oe=a.div`
  ${I}:checked + ${L} {
    background-color: ${t=>t.$opt==="female"?"#F43F5E":t.$opt==="male"?"#54adff":"#f6b83d"};
  }
`,se=[{name:"female",value:"female"},{name:"male",value:"male"},{name:"multiple",value:"multiple"}],re=({setValue:t,watch:d})=>{const s=j(),n=d("sex"),[l,o]=g.useState(!1);return e.jsx(ne,{role:"radiogroup","aria-label":"Select option",children:se.map(i=>e.jsxs(oe,{$opt:i.name,children:[e.jsx(I,{id:`radio-${i.name}`,name:"sex",value:i.value,checked:n===i.value,onChange:()=>{t("sex",i.value,{shouldValidate:!0})}}),e.jsx(L,{onMouseEnter:()=>o(i.name),onMouseLeave:()=>o(null),$opt:i.name,htmlFor:`radio-${i.name}`,children:e.jsx(b,{name:n===i.name||l===i.name?`icon-${i.name}`:`icon-sex-${i.name}`,width:s==="desktop"||s==="tablet"?24:20,height:s==="desktop"||s==="tablet"?24:20})})]},i.name))})},de=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
    /* align-items: start; */
  }
`,le=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 10px;
  width: 48px;
  height: 48px;
  background: #fff4df;
  margin: 0 auto 16px;
  background-image: ${({$imgPreview:t})=>t?`url(${t})`:"none"};
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 66px;
    height: 66px;
    margin: 0 auto 12px;
  }
`,pe=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
`,ce=a.input`
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  padding: 9px 18px 9px 10px;
  height: 16px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: #262626;
  width: 140px;
  transition: all 300ms ease-in-out;
  outline: none;

  @media screen and (min-width: 768px) {
    padding: 12px 20px 12px 12px;
    width: calc(278px - 20px - 12px - 2px);
    font-size: 14px;
  }

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
    color: rgba(38, 38, 38, 0.5);
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:-webkit-autofill {
    transition: background-color 9999s ease-in-out 0s, color 9999s ease-in-out 0s;
    -webkit-text-fill-color: #262626 !important;
    caret-color: ${t=>t.theme.colors.accentColor};
  }
`,xe=a.button`
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

  @media screen and (min-width: 768px) {
    padding: 12px 16px;
    width: 146px;
    height: 42px;
    font-size: 14px;
    line-height: 1.28;
  }

  &:hover {
    background: #fbe7c1;
  }
`,me=({watch:t,register:d,errors:s})=>{var r;const n=j(),[l,o]=g.useState(null),i=t("imgURL"),u=()=>{if(!i){o(null);return}o(i.trim())};return g.useEffect(()=>{i!=null&&i.trim()||o(null)},[i]),e.jsxs(de,{children:[e.jsx(le,{$imgPreview:l,children:l?null:e.jsx(b,{width:n==="desktop"||n==="tablet"?44:34,height:n==="desktop"||n==="tablet"?44:34,name:"icon-paw"})}),e.jsxs(pe,{children:[e.jsx(ce,{...d("imgURL"),name:"imgURL",placeholder:"Enter URL",type:"text"}),e.jsxs(xe,{type:"button",onClick:u,children:["Upload photo ",e.jsx(b,{width:n==="desktop"||n==="tablet"?18:16,height:n==="desktop"||n==="tablet"?18:16,name:"icon-cloud"})]}),e.jsx(x,{className:"addPet photo",children:(r=s.imgURL)==null?void 0:r.message})]})]})};function he(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",x2:"16",y1:"2",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",x2:"8",y1:"2",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",x2:"21",y1:"10",y2:"10"},child:[]}]})(t)}const ge=()=>{var v,k,P,$,S;const t=B(),d=W(),s=C(E);console.log("profile: ",s);const n=C(T),[l,o]=g.useState(null),i=()=>{d("/profile")},u=F().shape({title:c().required("Title is required"),name:c().required("Pet's name is required"),imgURL:c().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,"Invalid image URL").required("Image URL is required"),species:c().required("Species is required"),birthday:c().matches(/^\d{4}-\d{2}-\d{2}$/,"Date must be in YYYY-MM-DD format").required("Birthday is required"),sex:c().required("Sex is required")}),{register:r,handleSubmit:R,setValue:w,watch:y,reset:A,formState:{errors:p}}=D({defaultValues:{title:"",name:"",imgURL:"",species:"",birthday:"",sex:""},resolver:V(u)}),N=async m=>{try{console.log("Valid form data:",m),t(G(m)),A(),o(null),d("/profile")}catch(U){console.log(U)}};return g.useEffect(()=>{t(M())},[t]),e.jsxs(J,{onSubmit:R(N),children:[e.jsxs(X,{children:["Add my pet /",e.jsx(_,{children:"Personal details"})]}),e.jsxs(h,{children:[e.jsx(re,{register:r,setValue:w,watch:y}),e.jsx(x,{className:"addPet",children:(v=p.sex)==null?void 0:v.message})]}),e.jsx(me,{watch:y,register:r,errors:p}),e.jsxs(ee,{children:[e.jsxs(h,{children:[e.jsx(f,{...r("title"),name:"title",placeholder:"Title",type:"text"}),e.jsx(x,{className:"addPet",children:(k=p.title)==null?void 0:k.message})]}),e.jsxs(h,{children:[e.jsx(f,{...r("name"),name:"name",placeholder:"Pet’s Name",type:"text"}),e.jsx(x,{className:"addPet",children:(P=p.name)==null?void 0:P.message})]}),e.jsxs(te,{children:[e.jsxs(h,{children:[e.jsx(ie,{children:e.jsx(he,{})}),e.jsx(f,{...r("birthday"),className:"date",name:"birthday",placeholder:"0000-00-00",type:"text"}),e.jsx(x,{className:"addPet",children:($=p.birthday)==null?void 0:$.message})]}),e.jsxs(h,{children:[e.jsx(Y,{addPet:!0,options:n,placeholder:"Pet type",handleOptionChange:m=>{w("species",m.value,{shouldValidate:!0}),o(m)},selectedOpt:l}),e.jsx(x,{className:"addPet",children:(S=p.species)==null?void 0:S.message})]})]})]}),e.jsxs(ae,{children:[e.jsx(z,{type:"button",onClick:i,className:"back",children:"Back"}),e.jsx(z,{type:"submit",className:"submit",children:"Submit"})]})]})},be=()=>{const t=j();return e.jsxs(Z,{className:"container",children:[e.jsx(O,{imageUrl:t==="desktop"?H:t==="tablet"?K:Q}),e.jsx(ge,{})]})};export{be as default};
