import { useRef, useEffect } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

function m({data:r}){let s=useRef(null);return useEffect(()=>{if(!s.current?.children)return;let i=a=>{let{currentTarget:t}=a;if(t instanceof HTMLDivElement){let c=t.getBoundingClientRect(),l=a.clientY-c.top,n=a.clientX-c.left;t.style.setProperty("--mouse-x",`${n}px`),t.style.setProperty("--mouse-y",`${l}px`);}};for(let a of s.current.children)a instanceof HTMLDivElement&&(a.onpointermove=t=>{i(t);});},[s]),jsxs("div",{className:"gridcards text-white",ref:s,children:[r?.map(i=>jsx("div",{className:"gridcard",children:jsxs("div",{className:"gridcard_content flex items-end justify-between",children:[jsxs("div",{className:"flex flex-col pb-2 pl-3",children:[jsxs("div",{className:"flex gap-4 pb-1",children:[jsx("p",{children:i.layout}),jsx("p",{children:i.color})]}),jsx("p",{className:"text-2xl font-bold",children:i.title})]}),jsxs("div",{className:"flex flex-col items-center pb-2 pr-3",children:[jsx("p",{className:"pb-1 text-xl font-bold",children:i.price}),jsx("div",{className:"bg-white px-5 py-1 text-black",children:i.status})]})]})},i.id)),jsx("div",{className:"gridcard",children:jsxs("div",{className:"gridcard_content flex items-end justify-between",children:[jsxs("div",{className:"flex flex-col pb-2 pl-3",children:[jsxs("div",{className:"flex gap-4 pb-1",children:[jsx("p",{children:"\uB808\uC774\uC544\uC6C3"}),jsx("p",{children:"\uC0C9\uC0C1"})]}),jsx("p",{className:"text-2xl font-bold",children:"\uC0C1\uBBF8\uB2C8"})]}),jsxs("div",{className:"flex flex-col items-center pb-2 pr-3",children:[jsx("p",{className:"pb-1 text-xl font-bold",children:"\uAC00\uACA9"}),jsx("div",{className:"bg-white px-5 py-1 text-black",children:"\uC0C1\uD0DC"})]})]})}),jsx("div",{className:"gridcard",children:jsx("div",{className:"gridcard_content"})}),jsx("div",{className:"gridcard",children:jsx("div",{className:"gridcard_content"})}),jsx("div",{className:"gridcard",children:jsx("div",{className:"gridcard_content"})}),jsx("div",{className:"gridcard",children:jsx("div",{className:"gridcard_content"})}),jsx("div",{className:"gridcard",children:jsx("div",{className:"gridcard_content"})}),jsx("div",{className:"gridcard",children:jsx("div",{className:"gridcard_content"})}),jsx("div",{className:"gridcard",children:jsx("div",{className:"gridcard_content"})}),jsx("div",{className:"gridcard",children:jsx("div",{className:"gridcard_content"})}),jsx("div",{className:"gridcard",children:jsx("div",{className:"gridcard_content"})}),jsx("div",{className:"gridcard",children:jsx("div",{className:"gridcard_content"})})]})}

export { m as default };
