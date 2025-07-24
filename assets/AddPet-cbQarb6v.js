import{u as n,b as s,r,j as t,I as d,N as g,a as u,c as f,G as b,L as j,a9 as y}from"./index-BkMkcFRi.js";import{C as v}from"./CustomSelect-DHJpx6IB.js";const w="/pet-love/assets/add-pet-img-2x-desc-BVx0esE-.jpg",k="/pet-love/assets/add-pet-img-2x-tablet-BWjZlK6j.jpg",P="/pet-love/assets/add-pet-img-2x-mob-Bz61LxfA.jpg",$=n.div`
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
`,A=n.form`
  padding: 28px 20px 20px;
  background-color: #fff;
  border-radius: 30px;
`,z=n.h2`
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
`,C=n.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  color: rgba(43, 43, 42, 0.4);
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,I=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,i=n.input`
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
    border-color: ${e=>e.theme.colors.accentColor};
  }
  &:focus {
    border-color: ${e=>e.theme.colors.accentColor};
    outline: none;
    caret-color: ${e=>e.theme.colors.accentColor};
  }
`,W=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 32px;
`,S=n.div`
  position: relative;
`,B=n.div`
  position: absolute;
  right: 12px;
  top: 11px;
  pointer-events: none;
`,T=n.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`,p=n.button`
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

`,E=n.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px){
    margin-bottom: -20px;
  }
`,l=n.input.attrs({type:"radio"})`
  display: none;
`,x=n.label`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${e=>e.$opt==="female"?"rgba(244, 63, 94, 0.1)":e.$opt==="male"?"rgba(84, 173, 255, 0.1)":"#fff4df"};
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
`,F=n.div`
  ${l}:checked + ${x} {
    background-color: ${e=>e.$opt==="female"?"#F43F5E":e.$opt==="male"?"#54adff":"#f6b83d"};
  }
`,L=[{name:"female",value:"female"},{name:"male",value:"male"},{name:"both",value:"multiple"}],R=()=>{const e=s(),[a,m]=r.useState(null),[h,c]=r.useState(!1);return t.jsx(E,{role:"radiogroup","aria-label":"Select option",children:L.map(o=>t.jsxs(F,{$opt:o.name,children:[t.jsx(l,{id:`radio-${o.name}`,name:"gender",value:o.value,checked:a===o.name,onChange:()=>m(o.name)}),t.jsx(x,{onMouseEnter:()=>c(o.name),onMouseLeave:()=>c(null),$opt:o.name,htmlFor:`radio-${o.name}`,children:t.jsx(d,{name:a===o.name||h===o.name?`icon-${o.name}`:`icon-sex-${o.name}`,width:e==="desktop"||e==="tablet"?24:20,height:e==="desktop"||e==="tablet"?24:20})})]},o.name))})},N=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`,U=n.div`
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
`,D=n.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`,G=n.input`
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
    border-color: ${e=>e.theme.colors.accentColor};
  }
  &:focus {
    border-color: ${e=>e.theme.colors.accentColor};
    outline: none;
    caret-color: ${e=>e.theme.colors.accentColor};
  }

  &::placeholder {
    font-style: 14px;
    align-items: center;
    justify-content: center;
    color: inherit;
  }
`,M=n.button`
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
`,O=()=>{const e=s();return t.jsxs(N,{children:[t.jsx(U,{children:t.jsx(d,{width:e==="desktop"||e==="tablet"?44:34,height:e==="desktop"||e==="tablet"?44:34,name:"icon-paw"})}),t.jsxs(D,{children:[t.jsx(G,{name:"url",placeholder:"Enter URL",type:"text"}),t.jsxs(M,{children:["Upload photo ",t.jsx(d,{width:16,height:16,name:"icon-cloud"})]})]})]})};function H(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",x2:"16",y1:"2",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",x2:"8",y1:"2",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",x2:"21",y1:"10",y2:"10"},child:[]}]})(e)}const K=()=>{const e=u(),a=f(b);return r.useEffect(()=>{e(j())},[e]),t.jsxs(A,{children:[t.jsxs(z,{children:["Add my pet /",t.jsx(C,{children:"Personal details"})]}),t.jsx(R,{}),t.jsx(O,{}),t.jsxs(I,{children:[t.jsx(i,{name:"title",placeholder:"Title",type:"text"}),t.jsx(i,{name:"name",placeholder:"Pet’s Name",type:"text"}),t.jsxs(W,{children:[t.jsxs(S,{children:[t.jsx(B,{children:t.jsx(H,{})}),t.jsx(i,{className:"date",name:"date",placeholder:"00.00.0000",type:"text"})]}),t.jsx(v,{addPet:!0,options:a,placeholder:"Pet type",handleOptionChange:()=>{},selectedOpt:()=>{}})]})]}),t.jsxs(T,{children:[t.jsx(p,{className:"back",children:"Back"}),t.jsx(p,{className:"submit",children:"Submit"})]})]})},q=()=>{const e=s();return t.jsxs($,{children:[t.jsx(y,{imageUrl:e==="desktop"?w:e==="tablet"?k:P}),t.jsx(K,{})]})};export{q as default};
