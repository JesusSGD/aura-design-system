import{j as n,a as e}from"./index-830694c6.js";import{C as h}from"./MenuIcon-7d6ca586.js";import"./CloseIcon-cc786f6b.js";const i=({isDisabled:l,isHelping:a,helpMode:d,helpText:p,placeholder:t,className:c,children:r,...s})=>{const o=[c];return l&&o.push("disabled"),a&&(o.push("help"),o.push(d)),n("div",{className:"inputer",children:[e("div",{className:"inputer-group",children:n("div",{className:"halo",children:[n("select",{className:o.join(" ").trim(),"aria-label":t,disabled:l,...s,children:[t&&e("option",{value:"",children:t}),r]}),e("div",{className:"dropdown disable notevent",children:e(h,{className:"icon",role:"presentation",focusable:"false"})})]})}),a&&e("div",{className:`${d}-text wall-pad aura`,children:p})]})};i.defaultProps={helpMode:"warning"};const v=()=>n(i,{"aria-label":"Naked select",children:[e("option",{value:"Option 1",children:"Option 1"}),e("option",{value:"Option 2",children:"Option 2"}),e("option",{value:"Option 3",children:"Option 3"})]}),w=()=>n(i,{placeholder:"Placeholder",children:[e("option",{value:"Option 1",children:"Option 1"}),e("option",{value:"Option 2",children:"Option 2"}),e("option",{value:"Option 3",children:"Option 3"})]}),f=()=>n(i,{placeholder:"Placeholder",isHelping:!0,helpText:"⚠️ Oooops, something happened text",children:[e("option",{value:"Option 1",children:"Option 1"}),e("option",{value:"Option 2",children:"Option 2"}),e("option",{value:"Option 3",children:"Option 3"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{v as Naked,f as WithDialog,w as WithPlaceholder};
