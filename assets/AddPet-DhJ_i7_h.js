import{u as i,b as y,r as g,j as t,I as f,aa as x,N as R,a as G,P as L,c as B,Q as N,G as q,ab as T,ac as p,ad as W,L as E,ae as D,af as V,ag as H}from"./index-CKbCsOGb.js";import{C as O}from"./CustomSelect-BVs4emNg.js";const Y="/pet-love/assets/add-pet-img-2x-desc-BVx0esE-.jpg",K="/pet-love/assets/add-pet-img-2x-tablet-BWjZlK6j.jpg",Q="/pet-love/assets/add-pet-img-2x-mob-Bz61LxfA.jpg",Z=i.div`
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
    max-width: 1216px;
  }
`,J=i.form`
  padding: 28px 20px 20px;
  background-color: ${e=>e.theme.colors.AddMyPetFormBG};
  /* background-color: #fff; */
  border-radius: 30px;
  border: ${e=>e.theme.colors.AddMyPetFormBorder};
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    padding: 40px 136px;
  }
  @media screen and (min-width: 1280px) {
    border-radius: 60px;
    padding: 60px 80px;
    max-width: 592px;
  }
`,X=i.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${e=>e.theme.colors.AddMyPetFormTitleColor};
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`,_=i.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  color: ${e=>e.theme.colors.AddMyPetFormTitleSpanCol};
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,ee=i.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px){
    gap: 18px;
  }
`,b=i.input`
  border: ${e=>e.theme.colors.AddMyPetFormInputBorder};
  /* border: 1px solid rgba(38, 38, 38, 0.15); */
  border-radius: 30px;
  padding: 12px;
  width: 269px;
  height: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.03em;
  color: ${e=>e.theme.colors.textColor};
  /* color:  #262626; */
  transition: border-color 300ms ease-in-out;
  outline: none;
  background-color: ${e=>e.theme.colors.AddMyPetFormInputBGC};

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
    color: ${e=>e.theme.colors.AddMyPetFormInputPlaceholderColor}; 
  }

  &:hover {
    border-color: ${e=>e.theme.colors.accentColor};
  }
  &:focus {
    border-color: ${e=>e.theme.colors.accentColor};
    outline: none;
    caret-color: ${e=>e.theme.colors.accentColor};
  }

  &:-webkit-autofill {
    transition: background-color 9999s ease-in-out 0s, color 9999s ease-in-out 0s;
    -webkit-text-fill-color: ${e=>e.theme.colors.textColor} !important;
    /* -webkit-text-fill-color: #262626 !important; */
    caret-color: ${e=>e.theme.colors.accentColor};
  }
`,te=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,h=i.div`
  position: relative;
`,oe=i.div`
  position: absolute;
  right: 12px;
  top: 11px;
  pointer-events: none;

  @media screen and (min-width: 768px) {
    right: 16px;
    top: 16px;
  }
`,ie=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,A=i.button`
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
    color: ${e=>e.theme.colors.AddMyPetFormBtnBackColor};
    background: ${e=>e.theme.colors.AddMyPetFormBtnBackBGColor};
    &:hover {
      background: ${e=>e.theme.colors.AddMyPetFormBtnBackBGHoverColor};
    }
  };

  &.submit {
    color: ${e=>e.theme.colors.AddMyPetFormBtnSubColor};
    background: ${e=>e.theme.colors.AddMyPetFormBtnSubBGColor};

    &:hover {
      background: ${e=>e.theme.colors.AddMyPetFormBtnSubBGHoverColor};
    }
  };

  @media screen and (min-width: 768px) {
    padding: 14px 67px;
    width: 170px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }

`,ne=i.div`
  display: flex;
  gap: 8px;
  padding-bottom: 8px;

  @media screen and (min-width: 768px){
    margin-bottom: -20px;
    padding-bottom: 0;
  }
`,M=i.input.attrs({type:"radio"})`
  display: none;
`,S=i.label`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${e=>e.$opt==="female"?"rgba(244, 63, 94, 0.1)":e.$opt==="male"?"rgba(84, 173, 255, 0.1)":e.theme.colors.AddMyPetRadioMultipleBGC};
  color: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.8s ease;

  &:hover {
    background-color: ${e=>e.$opt==="female"?"#F43F5E":e.$opt==="male"?"#54adff":"#f6b83d"};
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,re=i.div`
  ${M}:checked + ${S} {
    background-color: ${e=>e.$opt==="female"?"#F43F5E":e.$opt==="male"?"#54adff":"#f6b83d"};
  }
`,ae=[{name:"female",value:"female"},{name:"male",value:"male"},{name:"multiple",value:"multiple"}],de=({setValue:e,watch:s})=>{const a=y(),n=s("sex"),[l,r]=g.useState(!1);return t.jsx(ne,{role:"radiogroup","aria-label":"Select option",children:ae.map(o=>t.jsxs(re,{$opt:o.name,children:[t.jsx(M,{id:`radio-${o.name}`,name:"sex",value:o.value,checked:n===o.value,onChange:()=>{e("sex",o.value,{shouldValidate:!0})}}),t.jsx(S,{onMouseEnter:()=>r(o.name),onMouseLeave:()=>r(null),$opt:o.name,htmlFor:`radio-${o.name}`,children:t.jsx(f,{name:n===o.name||l===o.name?`icon-${o.name}`:`icon-sex-${o.name}`,width:a==="desktop"||a==="tablet"?24:20,height:a==="desktop"||a==="tablet"?24:20})})]},o.name))})},se=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
    /* align-items: start; */
  }
`,le=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 10px;
  width: 48px;
  height: 48px;
  background: ${e=>e.theme.colors.AddMyPetPhotoImgBGC};
  margin: 0 auto 16px;
  background-image: ${({$imgPreview:e})=>e?`url(${e})`:"none"};
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 66px;
    height: 66px;
    margin: 0 auto 12px;
  }
`,ce=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
`,pe=i.input`
  border: ${e=>e.theme.colors.AddMyPetPhotoUrlInputBorder};
  border-radius: 30px;
  padding: 9px 18px 9px 10px;
  height: 16px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.textColor};
  width: 140px;
  transition: all 300ms ease-in-out;
  outline: none;
  background-color: ${e=>e.theme.colors.AddMyPetPhotoUrlInputBGC};

  @media screen and (min-width: 768px) {
    padding: 12px 20px 12px 12px;
    width: calc(278px - 20px - 12px - 2px);
    font-size: 14px;
  }

  &:hover {
    border-color: ${e=>e.theme.colors.accentColor};
  }
  &:focus {
    border-color: ${e=>e.theme.colors.accentColor};
    outline: none;
    caret-color: ${e=>e.theme.colors.accentColor};
  }

  &::placeholder {
    font-style: 14px;
    color: ${e=>e.theme.colors.AddMyPetPhotoUrlInputPlaceholderColor};
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:-webkit-autofill {
    transition: background-color 9999s ease-in-out 0s, color 9999s ease-in-out 0s;
    -webkit-text-fill-color: ${e=>e.theme.colors.textColor} !important;
    caret-color: ${e=>e.theme.colors.accentColor};
  }
`,xe=i.button`
  display: flex;
  border-radius: 30px;
  padding: 10px;
  width: 117px;
  height: 36px;
  background: ${e=>e.theme.colors.AddMyPetPhotoUploadBtnBGC};
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${e=>e.theme.colors.AddMyPetPhotoUploadBtnColor};
  transition: background 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    padding: 12px 16px;
    width: 146px;
    height: 42px;
    font-size: 14px;
    line-height: 1.28;
  }

  &:hover {
    background: ${e=>e.theme.colors.AddMyPetPhotoUploadBtnHoverBGC};
  }
`,me=({watch:e,register:s,errors:a})=>{var d;const n=y(),[l,r]=g.useState(null),o=e("imgURL"),u=()=>{if(!o){r(null);return}r(o.trim())};return g.useEffect(()=>{o!=null&&o.trim()||r(null)},[o]),t.jsxs(se,{children:[t.jsx(le,{$imgPreview:l,children:l?null:t.jsx(f,{width:n==="desktop"||n==="tablet"?44:34,height:n==="desktop"||n==="tablet"?44:34,name:"icon-paw"})}),t.jsxs(ce,{children:[t.jsx(pe,{...s("imgURL"),name:"imgURL",placeholder:"Enter URL",type:"text"}),t.jsxs(xe,{type:"button",onClick:u,children:["Upload photo ",t.jsx(f,{width:n==="desktop"||n==="tablet"?18:16,height:n==="desktop"||n==="tablet"?18:16,name:"icon-cloud"})]}),t.jsx(x,{className:"addPet photo",children:(d=a.imgURL)==null?void 0:d.message})]})]})};function he(e){return R({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",x2:"16",y1:"2",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",x2:"8",y1:"2",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",x2:"21",y1:"10",y2:"10"},child:[]}]})(e)}const ge=()=>{var w,$,k,v,C;const e=G(),s=L(),a=B(N);console.log("profile: ",a);const n=B(q),[l,r]=g.useState(null),o=()=>{s("/profile")},u=T().shape({title:p().required("Title is required"),name:p().required("Pet's name is required"),imgURL:p().matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,"Invalid image URL").required("Image URL is required"),species:p().required("Species is required"),birthday:p().matches(/^\d{4}-\d{2}-\d{2}$/,"Date must be in YYYY-MM-DD format").required("Birthday is required"),sex:p().required("Sex is required")}),{register:d,handleSubmit:F,setValue:P,watch:j,reset:I,formState:{errors:c}}=W({defaultValues:{title:"",name:"",imgURL:"",species:"",birthday:"",sex:""},resolver:D(u)}),U=async m=>{try{console.log("Valid form data:",m),e(V(m)),I(),r(null),s("/profile")}catch(z){console.log(z)}};return g.useEffect(()=>{e(E())},[e]),t.jsxs(J,{onSubmit:F(U),children:[t.jsxs(X,{children:["Add my pet /",t.jsx(_,{children:"Personal details"})]}),t.jsxs(h,{children:[t.jsx(de,{register:d,setValue:P,watch:j}),t.jsx(x,{className:"addPet",children:(w=c.sex)==null?void 0:w.message})]}),t.jsx(me,{watch:j,register:d,errors:c}),t.jsxs(ee,{children:[t.jsxs(h,{children:[t.jsx(b,{...d("title"),name:"title",placeholder:"Title",type:"text"}),t.jsx(x,{className:"addPet",children:($=c.title)==null?void 0:$.message})]}),t.jsxs(h,{children:[t.jsx(b,{...d("name"),name:"name",placeholder:"Pet’s Name",type:"text"}),t.jsx(x,{className:"addPet",children:(k=c.name)==null?void 0:k.message})]}),t.jsxs(te,{children:[t.jsxs(h,{children:[t.jsx(oe,{children:t.jsx(he,{})}),t.jsx(b,{...d("birthday"),className:"date",name:"birthday",placeholder:"0000-00-00",type:"text"}),t.jsx(x,{className:"addPet",children:(v=c.birthday)==null?void 0:v.message})]}),t.jsxs(h,{children:[t.jsx(O,{addPet:!0,options:n,placeholder:"Pet type",handleOptionChange:m=>{P("species",m.value,{shouldValidate:!0}),r(m)},selectedOpt:l}),t.jsx(x,{className:"addPet",children:(C=c.species)==null?void 0:C.message})]})]})]}),t.jsxs(ie,{children:[t.jsx(A,{type:"button",onClick:o,className:"back",children:"Back"}),t.jsx(A,{type:"submit",className:"submit",children:"Submit"})]})]})},fe=()=>{const e=y();return t.jsxs(Z,{className:"container",children:[t.jsx(H,{imageUrl:e==="desktop"?Y:e==="tablet"?K:Q}),t.jsx(ge,{})]})};export{fe as default};
