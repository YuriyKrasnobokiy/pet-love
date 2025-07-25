import{u as o,b as j,r as g,j as e,I as b,a9 as x,N as B,a as N,P as W,c as C,Q as E,G as T,aa as F,ab as p,ac as D,L as M,ad as V,ae as G,af as O}from"./index-Bx4pz8mJ.js";import{C as Y}from"./CustomSelect-Bf46kj2Y.js";const H="/pet-love/assets/add-pet-img-2x-desc-BVx0esE-.jpg",K="/pet-love/assets/add-pet-img-2x-tablet-BWjZlK6j.jpg",Q="/pet-love/assets/add-pet-img-2x-mob-Bz61LxfA.jpg",Z=o.div`
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
`,J=o.form`
  padding: 28px 20px 20px;
  background-color: #fff;
  border-radius: 30px;
`,X=o.h2`
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
`,_=o.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  color: rgba(43, 43, 42, 0.4);
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,ee=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,f=o.input`
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

  &:-webkit-autofill {
    transition: background-color 9999s ease-in-out 0s, color 9999s ease-in-out 0s;
    -webkit-text-fill-color: #262626 !important;
    caret-color: ${t=>t.theme.colors.accentColor};
  }
`,te=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 32px;
`,h=o.div`
  position: relative;
`,ae=o.div`
  position: absolute;
  right: 12px;
  top: 11px;
  pointer-events: none;
`,oe=o.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,I=o.button`
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

`,ie=o.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px){
    margin-bottom: -20px;
  }
`,L=o.input.attrs({type:"radio"})`
  display: none;
`,R=o.label`
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
`,ne=o.div`
  ${L}:checked + ${R} {
    background-color: ${t=>t.$opt==="female"?"#F43F5E":t.$opt==="male"?"#54adff":"#f6b83d"};
  }
`,se=[{name:"female",value:"female"},{name:"male",value:"male"},{name:"multiple",value:"multiple"}],re=({setValue:t,watch:d})=>{const s=j(),i=d("sex"),[l,n]=g.useState(!1);return e.jsx(ie,{role:"radiogroup","aria-label":"Select option",children:se.map(a=>e.jsxs(ne,{$opt:a.name,children:[e.jsx(L,{id:`radio-${a.name}`,name:"sex",value:a.value,checked:i===a.value,onChange:()=>{t("sex",a.value,{shouldValidate:!0})}}),e.jsx(R,{onMouseEnter:()=>n(a.name),onMouseLeave:()=>n(null),$opt:a.name,htmlFor:`radio-${a.name}`,children:e.jsx(b,{name:i===a.name||l===a.name?`icon-${a.name}`:`icon-sex-${a.name}`,width:s==="desktop"||s==="tablet"?24:20,height:s==="desktop"||s==="tablet"?24:20})})]},a.name))})},de=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`,le=o.div`
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
`,ce=o.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  position: relative;
`,pe=o.input`
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  padding: 9px 18px 8px 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: #262626;
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
    color: rgba(38, 38, 38, 0.5);
  }

  &:-webkit-autofill {
    transition: background-color 9999s ease-in-out 0s, color 9999s ease-in-out 0s;
    -webkit-text-fill-color: #262626 !important;
    caret-color: ${t=>t.theme.colors.accentColor};
  }
`,xe=o.button`
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
`,me=({watch:t,register:d,errors:s})=>{var r;const i=j(),[l,n]=g.useState(null),a=t("imgURL"),u=()=>{if(!a){n(null);return}n(a.trim())};return g.useEffect(()=>{a!=null&&a.trim()||n(null)},[a]),e.jsxs(de,{children:[e.jsx(le,{imgPreview:l,children:l?null:e.jsx(b,{width:i==="desktop"||i==="tablet"?44:34,height:i==="desktop"||i==="tablet"?44:34,name:"icon-paw"})}),e.jsxs(ce,{children:[e.jsx(pe,{...d("imgURL"),name:"imgURL",placeholder:"Enter URL",type:"text"}),e.jsxs(xe,{type:"button",onClick:u,children:["Upload photo ",e.jsx(b,{width:16,height:16,name:"icon-cloud"})]}),e.jsx(x,{className:"addPet photo",children:(r=s.imgURL)==null?void 0:r.message})]})]})};function he(t){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",x2:"16",y1:"2",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",x2:"8",y1:"2",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",x2:"21",y1:"10",y2:"10"},child:[]}]})(t)}const ge=()=>{var k,w,P,$,S;const t=N(),d=W(),s=C(E);console.log("profile: ",s);const i=C(T),[l,n]=g.useState(null),a=()=>{d("/profile")},u=F().shape({title:p().required("Title is required"),name:p().required("Pet's name is required"),imgURL:p().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,"Invalid image URL").required("Image URL is required"),species:p().required("Species is required"),birthday:p().matches(/^\d{4}-\d{2}-\d{2}$/,"Date must be in YYYY-MM-DD format").required("Birthday is required"),sex:p().required("Sex is required")}),{register:r,handleSubmit:A,setValue:y,watch:v,reset:z,formState:{errors:c}}=D({defaultValues:{title:"",name:"",imgURL:"",species:"",birthday:"",sex:""},resolver:V(u)}),U=async m=>{try{console.log("Valid form data:",m),t(G(m)),z(),n(null),d("/profile")}catch(q){console.log(q)}};return g.useEffect(()=>{t(M())},[t]),e.jsxs(J,{onSubmit:A(U),children:[e.jsxs(X,{children:["Add my pet /",e.jsx(_,{children:"Personal details"})]}),e.jsxs(h,{children:[e.jsx(re,{register:r,setValue:y,watch:v}),e.jsx(x,{className:"addPet",children:(k=c.sex)==null?void 0:k.message})]}),e.jsx(me,{watch:v,register:r,errors:c}),e.jsxs(ee,{children:[e.jsxs(h,{children:[e.jsx(f,{...r("title"),name:"title",placeholder:"Title",type:"text"}),e.jsx(x,{className:"addPet",children:(w=c.title)==null?void 0:w.message})]}),e.jsxs(h,{children:[e.jsx(f,{...r("name"),name:"name",placeholder:"Pet’s Name",type:"text"}),e.jsx(x,{className:"addPet",children:(P=c.name)==null?void 0:P.message})]}),e.jsxs(te,{children:[e.jsxs(h,{children:[e.jsx(ae,{children:e.jsx(he,{})}),e.jsx(f,{...r("birthday"),className:"date",name:"birthday",placeholder:"0000-00-00",type:"text"}),e.jsx(x,{className:"addPet",children:($=c.birthday)==null?void 0:$.message})]}),e.jsxs(h,{children:[e.jsx(Y,{addPet:!0,options:i,placeholder:"Pet type",handleOptionChange:m=>{y("species",m.value,{shouldValidate:!0}),n(m)},selectedOpt:l}),e.jsx(x,{className:"addPet",children:(S=c.species)==null?void 0:S.message})]})]})]}),e.jsxs(oe,{children:[e.jsx(I,{onClick:a,className:"back",children:"Back"}),e.jsx(I,{type:"submit",className:"submit",children:"Submit"})]})]})},be=()=>{const t=j();return e.jsxs(Z,{children:[e.jsx(O,{imageUrl:t==="desktop"?H:t==="tablet"?K:Q}),e.jsx(ge,{})]})};export{be as default};
