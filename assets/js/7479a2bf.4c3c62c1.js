"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[2499],{1034:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(5893),t=n(1151);const i={title:"Cypress.version"},o=void 0,a={id:"api/cypress-api/version",title:"Cypress.version",description:"Cypress.version returns you the current version of Cypress you are running.",source:"@site/docs/api/cypress-api/version.mdx",sourceDirName:"api/cypress-api",slug:"/api/cypress-api/version",permalink:"/api/cypress-api/version",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/cypress-api/version.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"Cypress.version"},sidebar:"api",previous:{title:"Cypress.testingType",permalink:"/api/cypress-api/testing-type"},next:{title:"Cypress.$",permalink:"/api/utilities/$"}},c={},p=[{value:"Syntax",id:"Syntax",level:2},{value:"Examples",id:"Examples",level:2},{value:"Conditionals",id:"Conditionals",level:3},{value:"See also",id:"See-also",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Cypress.version"})," returns you the current version of Cypress you are running."]}),"\n",(0,r.jsx)(s.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"Cypress.version // '1.1.0'\n"})}),"\n",(0,r.jsx)(s.h2,{id:"Examples",children:"Examples"}),"\n",(0,r.jsx)(s.h3,{id:"Conditionals",children:"Conditionals"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"const semver = require('semver')\n\nif (semver.gte(Cypress.version, '1.1.3')) {\n  it('has Cypress.platform', () => {\n    expect(Cypress.platform).to.be.a('string')\n  })\n}\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Hint:"})," you can use ",(0,r.jsx)(s.a,{href:"https://github.com/npm/node-semver#readme",children:"semver"}),"\nlibrary to work with semantic versions."]})}),"\n",(0,r.jsx)(s.h2,{id:"See-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:["To find the version of the Electron component, or the bundled Node version, use\nthe Cypress CLI command\n",(0,r.jsx)(s.a,{href:"/guides/guides/command-line#cypress-version",children:"cypress version"}),"."]})]})}function l(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var r=n(7294);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);