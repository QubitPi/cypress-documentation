"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[3016],{2654:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var n=s(5893),r=s(1151);const i={title:"Cypress.currentTest"},c=void 0,a={id:"api/cypress-api/currenttest",title:"Cypress.currentTest",description:"Cypress.currentTest is an object representing the currently executing test",source:"@site/docs/api/cypress-api/currenttest.mdx",sourceDirName:"api/cypress-api",slug:"/api/cypress-api/currenttest",permalink:"/api/cypress-api/currenttest",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/cypress-api/currenttest.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"Cypress.currentTest"},sidebar:"api",previous:{title:"Cypress.currentRetry",permalink:"/api/cypress-api/currentretry"},next:{title:"Cypress.log",permalink:"/api/cypress-api/cypress-log"}},l={},o=[{value:"Syntax",id:"Syntax",level:2},{value:"Examples",id:"Examples",level:2},{value:"Get current test title",id:"Get-current-test-title",level:3},{value:"Get full path of current test title",id:"Get-full-path-of-current-test-title",level:3},{value:"History",id:"History",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Cypress.currentTest"})," is an object representing the currently executing test\ninstance, with properties to access the title of the test."]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Note that ",(0,n.jsx)(t.code,{children:"Cypress.currentTest"})," may only be used inside tests and\n",(0,n.jsx)(t.a,{href:"/guides/core-concepts/writing-and-organizing-tests#Hooks",children:"test hooks"}),", and will\nbe ",(0,n.jsx)(t.code,{children:"null"})," outside of tests and test hooks."]})}),"\n",(0,n.jsx)(t.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// an object with title and titlePath properties\nCypress.currentTest\n\n// the title of the current test\nCypress.currentTest.title\n\n// an array with the current test's title path\nCypress.currentTest.titlePath\n"})}),"\n",(0,n.jsx)(t.h2,{id:"Examples",children:"Examples"}),"\n",(0,n.jsx)(t.h3,{id:"Get-current-test-title",children:"Get current test title"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"describe('app layout and responsiveness', () => {\n  it('toggles the nav', () => {\n    expect(Cypress.currentTest.title).to.eq('toggles the nav')\n  })\n})\n"})}),"\n",(0,n.jsx)(t.h3,{id:"Get-full-path-of-current-test-title",children:"Get full path of current test title"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"describe('app layout and responsiveness', () => {\n  it('toggles the nav', () => {\n    expect(Cypress.currentTest.titlePath).to.deep.eq([\n      'app layout and responsiveness',\n      'toggles the nav',\n    ])\n  })\n})\n"})}),"\n",(0,n.jsx)(t.h2,{id:"History",children:"History"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Version"}),(0,n.jsx)(t.th,{children:"Changes"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/guides/references/changelog#8-2-0",children:"8.2.0"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Cypress.currentTest"})," added"]})]})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>c});var n=s(7294);const r={},i=n.createContext(r);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);