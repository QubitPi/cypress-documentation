"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[5300],{2696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(5893),i=n(1151);const r={title:"Svelte API",sidebar_position:40},o=void 0,d={id:"guides/component-testing/svelte/api",title:"Svelte API",description:"Methods",source:"@site/docs/guides/component-testing/svelte/api.mdx",sourceDirName:"guides/component-testing/svelte",slug:"/guides/component-testing/svelte/api",permalink:"/guides/component-testing/svelte/api",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/guides/component-testing/svelte/api.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",sidebarPosition:40,frontMatter:{title:"Svelte API",sidebar_position:40},sidebar:"guides",previous:{title:"Svelte Examples",permalink:"/guides/component-testing/svelte/examples"},next:{title:"Integrating with Cypress Component Testing",permalink:"/guides/component-testing/third-party-definitions"}},l={},c=[{value:"Methods",id:"Methods",level:2},{value:"mount",id:"mount",level:3},{value:"Example",id:"Example",level:4},{value:"Interfaces",id:"Interfaces",level:2},{value:"MountOptions",id:"MountOptions",level:3},{value:"MountReturn",id:"MountReturn",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"Methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"mount",children:"mount"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { mount } from 'cypress/svelte'\n"})}),"\n",(0,s.jsxs)("table",{class:"api-table table-list",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Description"}),(0,s.jsx)("td",{children:"Mounts a Svelte component inside the Cypress browser"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Signature"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"mount<T extends SvelteComponent>(Component:\nSvelteConstructor<T>, options?: MountOptions<T>):\nCypress.Chainable<MountReturn<T>>"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Generic Param T"}),(0,s.jsx)("td",{children:"The component type"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Returns"}),(0,s.jsx)("td",{children:"Cypress.Chainable<MountReturn>"})]})]}),"\n",(0,s.jsxs)("table",{class:"api-table",children:[(0,s.jsx)("caption",{children:"mount Parameters"}),(0,s.jsxs)("thead",{children:[(0,s.jsx)("td",{children:"Name"}),(0,s.jsx)("td",{children:"Type"}),(0,s.jsx)("td",{children:"Description"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"component"}),(0,s.jsx)("td",{children:"SvelteConstructor<T>"}),(0,s.jsx)("td",{children:"Svelte component being mounted"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"options"}),(0,s.jsx)("td",{children:"MountOptions<T> (optional)"}),(0,s.jsx)("td",{children:"options to customize the component being mounted"})]})]}),"\n",(0,s.jsx)(t.h4,{id:"Example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import Counter from './Counter.svelte'\nimport { mount } from 'cypress/svelte'\n\nit('should render', () => {\n  mount(Counter, { props: { count: 42 } })\n  cy.get('button').contains(42)\n})\n"})}),"\n",(0,s.jsx)(t.h2,{id:"Interfaces",children:"Interfaces"}),"\n",(0,s.jsx)(t.h3,{id:"MountOptions",children:"MountOptions"}),"\n",(0,s.jsxs)("table",{class:"api-table",children:[(0,s.jsx)("caption",{children:"members"}),(0,s.jsxs)("thead",{children:[(0,s.jsx)("td",{children:"Name"}),(0,s.jsx)("td",{children:"Type"}),(0,s.jsx)("td",{children:"Description"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"anchor"}),(0,s.jsx)("td",{children:"Element (optional)"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"context"}),(0,s.jsx)("td",{children:"Map<any, any> (optional)"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"intro"}),(0,s.jsx)("td",{children:"boolean (optional)"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"log"}),(0,s.jsx)("td",{children:"boolean (optional)"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"props"}),(0,s.jsx)("td",{children:"Record<string any> (optional)"}),(0,s.jsx)("td",{})]})]}),"\n",(0,s.jsx)(t.h3,{id:"MountReturn",children:"MountReturn"}),"\n",(0,s.jsxs)(t.p,{children:["Type that the ",(0,s.jsx)(t.code,{children:"mount"})," function yields"]}),"\n",(0,s.jsxs)("table",{class:"api-table",children:[(0,s.jsx)("caption",{children:"members"}),(0,s.jsxs)("thead",{children:[(0,s.jsx)("td",{children:"Name"}),(0,s.jsx)("td",{children:"Type"}),(0,s.jsx)("td",{children:"Description"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"component"}),(0,s.jsx)("td",{children:"T"}),(0,s.jsx)("td",{})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);