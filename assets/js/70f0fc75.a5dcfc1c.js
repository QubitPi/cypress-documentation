"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[4256],{2853:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(5893),t=n(1151);const r={title:"Cypress.log"},i=void 0,c={id:"api/cypress-api/cypress-log",title:"Cypress.log",description:"This is the internal API for controlling what gets printed to the Command Log.",source:"@site/docs/api/cypress-api/cypress-log.mdx",sourceDirName:"api/cypress-api",slug:"/api/cypress-api/cypress-log",permalink:"/api/cypress-api/cypress-log",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/cypress-api/cypress-log.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"Cypress.log"},sidebar:"api",previous:{title:"Cypress.currentTest",permalink:"/api/cypress-api/currenttest"},next:{title:"Cypress.dom",permalink:"/api/cypress-api/dom"}},d={},l=[{value:"Syntax",id:"Syntax",level:2},{value:"Arguments",id:"Arguments",level:3},{value:"Examples",id:"Examples",level:2},{value:"See also",id:"See-also",level:2}];function a(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{DocsImage:n,Icon:r}=s;return n||h("DocsImage",!0),r||h("Icon",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"This is the internal API for controlling what gets printed to the Command Log."}),"\n",(0,o.jsxs)(s.p,{children:["Useful when writing your own\n",(0,o.jsx)(s.a,{href:"/api/cypress-api/custom-commands",children:"custom commands"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:"Cypress.log(options)\n"})}),"\n",(0,o.jsx)(s.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(r,{name:"angle-right"})," ",(0,o.jsxs)(s.strong,{children:["options ",(0,o.jsx)(s.em,{children:"(Object)"})]})]}),"\n",(0,o.jsxs)(s.p,{children:["Pass in an options object to ",(0,o.jsx)(s.code,{children:"Cypress.log()"}),"."]}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Option"}),(0,o.jsx)(s.th,{children:"Default"}),(0,o.jsx)(s.th,{children:"Description"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"$el"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"undefined"})}),(0,o.jsx)(s.td,{})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"name"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"name of the command"})}),(0,o.jsx)(s.td,{})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"displayName"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"name of the command"})}),(0,o.jsxs)(s.td,{children:["Overrides ",(0,o.jsx)(s.code,{children:"name"})," only for display purposes."]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"message"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"command args"})}),(0,o.jsx)(s.td,{})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"consoleProps"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"function() {}"})}),(0,o.jsx)(s.td,{})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"Examples",children:"Examples"}),"\n",(0,o.jsx)(s.p,{children:"We want the Command Log and the console in the DevTools to log specific\nproperties of our custom command."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:"Cypress.Commands.add('setSessionStorage', (key, value) => {\n  // Turn off logging of the cy.window() to command log\n  cy.window({ log: false }).then((window) => {\n    window.sessionStorage.setItem(key, value)\n  })\n\n  const log = Cypress.log({\n    name: 'setSessionStorage',\n    // shorter name for the Command Log\n    displayName: 'setSS',\n    message: `${key}, ${value}`,\n    consoleProps: () => {\n      // return an object which will\n      // print to dev tools console on click\n      return {\n        Key: key,\n        Value: value,\n        'Session Storage': window.sessionStorage,\n      }\n    },\n  })\n})\n"})}),"\n",(0,o.jsx)(s.p,{children:"The code above displays in the Command Log as shown below, with the console\nproperties shown on click of the command."}),"\n",(0,o.jsx)(n,{src:"/img/api/Cypress.log-custom-logging-and-console.png",alt:"Custom logging of custom command"}),"\n",(0,o.jsx)(s.h2,{id:"See-also",children:"See also"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/api/cypress-api/custom-commands",children:(0,o.jsx)(s.code,{children:"Commands"})})}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}function h(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>i});var o=n(7294);const t={},r=o.createContext(t);function i(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);