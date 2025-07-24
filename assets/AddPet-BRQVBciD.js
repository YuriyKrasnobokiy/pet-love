import{u as d,b as i,r as s,j as t,I as m,ab as x}from"./index-z7FlnO6O.js";const g="/pet-love/assets/add-pet-img-2x-desc-BVx0esE-.jpg",f="/pet-love/assets/add-pet-img-2x-tablet-BWjZlK6j.jpg",h="/pet-love/assets/add-pet-img-2x-mob-Bz61LxfA.jpg",u=d.div`
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
`,b=d.form`
  padding: 28px 20px 20px;
  background-color: #fff;
  border-radius: 30px;
`,j=d.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #262626;

  @media screen and (min-width: 768px) {
    font-style: 32px;
  }
`,v=d.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  color: rgba(43, 43, 42, 0.4);
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-style: 16px;
  }
`,$=d.div`
  display: flex;
  gap: 8px;
`,l=d.input.attrs({type:"radio"})`
  display: none;
`,r=d.label`
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
`,y=d.div`
  ${l}:checked + ${r} {
    background-color: ${e=>e.$opt==="female"?"#F43F5E":e.$opt==="male"?"#54adff":"#f6b83d"};
  }
`,P=[{name:"female",value:"female"},{name:"male",value:"male"},{name:"both",value:"multiple"}],w=()=>{const e=i(),[n,p]=s.useState(null),[c,o]=s.useState(!1);return t.jsx($,{role:"radiogroup","aria-label":"Select option",children:P.map(a=>t.jsxs(y,{$opt:a.name,children:[t.jsx(l,{id:`radio-${a.name}`,name:"gender",value:a.value,checked:n===a.name,onChange:()=>p(a.name)}),t.jsx(r,{onMouseEnter:()=>o(a.name),onMouseLeave:()=>o(null),$opt:a.name,htmlFor:`radio-${a.name}`,children:t.jsx(m,{name:n===a.name||c===a.name?`icon-${a.name}`:`icon-sex-${a.name}`,width:e==="desktop"||e==="tablet"?24:20,height:e==="desktop"||e==="tablet"?24:20})})]},a.name))})},k=()=>t.jsxs(b,{children:[t.jsxs(j,{children:["Add my pet /",t.jsx(v,{children:"Personal details"})]}),t.jsx(w,{})]}),F=()=>{const e=i();return t.jsxs(u,{children:[t.jsx(x,{imageUrl:e==="desktop"?g:e==="tablet"?f:h}),t.jsx(k,{})]})};export{F as default};
