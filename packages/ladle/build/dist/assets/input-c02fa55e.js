import{a,j as o}from"./index-830694c6.js";const f=({isDisabled:t,isHelping:i,isLabelable:r,helpMode:e="warning",helpText:u,placeholder:n,className:l,classNameContainer:d,name:c,...h})=>{const{touch:j,setTouch:N,setValue:v,reset:x,dialog:g,...p}=h,s=[l],m=[d,"inputer"];return t&&s.push("disabled"),i&&(s.push("help"),s.push(e)),r||s.push("naked"),a("div",{className:m.join(" ").trim(),children:o("div",{className:"inputer-group",children:[o("div",{className:"halo",children:[a("input",{name:c,"aria-label":n,placeholder:n,disabled:t,className:s.join(" ").trim(),...p}),n&&r&&a("label",{htmlFor:c,children:n})]}),i&&a("div",{className:`${e}-text aura`,children:u})]})})};f.defaultProps={helpMode:"warning"};export{f as I};
