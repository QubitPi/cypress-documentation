"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[6496],{2990:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var o=n(5893),i=n(1151);const c={title:"clearCookies"},r=void 0,l={id:"api/commands/clearcookies",title:"clearCookies",description:"Clear browser cookies for a domain.",source:"@site/docs/api/commands/clearcookies.mdx",sourceDirName:"api/commands",slug:"/api/commands/clearcookies",permalink:"/api/commands/clearcookies",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/clearcookies.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"clearCookies"},sidebar:"api",previous:{title:"clearCookie",permalink:"/api/commands/clearcookie"},next:{title:"clearLocalStorage",permalink:"/api/commands/clearlocalstorage"}},t={},a=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"No Args",id:"No-Args",level:3},{value:"Clear cookies after logging in <E2EOnlyBadge></E2EOnlyBadge>",id:"Clear-cookies-after-logging-in",level:4},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"See also",id:"See-also",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{DocsImage:n,E2EOnlyBadge:c,Icon:r}=s;return n||u("DocsImage",!0),c||u("E2EOnlyBadge",!0),r||u("Icon",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Clear browser cookies for a domain."}),"\n",(0,o.jsx)(s.admonition,{type:"caution",children:(0,o.jsxs)(s.p,{children:["Cypress automatically clears all cookies ",(0,o.jsx)(s.em,{children:"before"})," each test to prevent state\nfrom being shared across tests when\n",(0,o.jsx)(s.a,{href:"/guides/core-concepts/writing-and-organizing-tests#Test-Isolation",children:"test isolation"}),"\nis enabled. You shouldn't need to use this command unless you're using it to\nclear specific cookies inside a single test or test isolation is disabled."]})}),"\n",(0,o.jsx)(s.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:"cy.clearCookies()\ncy.clearCookies(options)\n"})}),"\n",(0,o.jsx)(s.h3,{id:"Usage",children:"Usage"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(r,{name:"check-circle",color:"green"})," ",(0,o.jsx)(s.strong,{children:"Correct Usage"})]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:"cy.clearCookies() // Clear cookies for the currrent domain\n"})}),"\n",(0,o.jsx)(s.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(r,{name:"angle-right"})," ",(0,o.jsxs)(s.strong,{children:["options ",(0,o.jsx)(s.em,{children:"(Object)"})]})]}),"\n",(0,o.jsxs)(s.p,{children:["Pass in an options object to change the default behavior of ",(0,o.jsx)(s.code,{children:"cy.clearCookies()"}),"."]}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Option"}),(0,o.jsx)(s.th,{children:"Default"}),(0,o.jsx)(s.th,{children:"Description"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"domain"})}),(0,o.jsx)(s.td,{children:"Hostname of the current URL"}),(0,o.jsx)(s.td,{children:"Clears the cookies from the specified domain"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"log"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"true"})}),(0,o.jsxs)(s.td,{children:["Displays the command in the ",(0,o.jsx)(s.a,{href:"/guides/core-concepts/cypress-app#Command-Log",children:"Command log"})]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"timeout"})}),(0,o.jsx)(s.td,{children:(0,o.jsx)(s.a,{href:"/guides/references/configuration#Timeouts",children:(0,o.jsx)(s.code,{children:"responseTimeout"})})}),(0,o.jsxs)(s.td,{children:["Time to wait for ",(0,o.jsx)(s.code,{children:"cy.clearCookies()"})," to resolve before ",(0,o.jsx)(s.a,{href:"#Timeouts",children:"timing out"})]})]})]})]}),"\n",(0,o.jsxs)(s.h3,{id:"Yields",children:["Yields ",(0,o.jsx)(s.a,{href:"/guides/core-concepts/introduction-to-cypress#Subject-Management",children:(0,o.jsx)(r,{name:"question-circle"})})]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"cy.clearCookies()"})," yields ",(0,o.jsx)(s.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"Examples",children:"Examples"}),"\n",(0,o.jsx)(s.h3,{id:"No-Args",children:"No Args"}),"\n",(0,o.jsxs)(s.h4,{id:"Clear-cookies-after-logging-in",children:["Clear cookies after logging in ",(0,o.jsx)(c,{})]}),"\n",(0,o.jsxs)(s.p,{children:["In this example, on first login our server sends us back a session cookie. After\ninvoking ",(0,o.jsx)(s.code,{children:"cy.clearCookies()"})," this clears the session cookie, and upon navigating\nto an unauthorized page, our server should have redirected us back to login."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:"// assume we just logged in\ncy.contains('Login').click()\ncy.url().should('include', 'profile')\ncy.clearCookies()\ncy.visit('/dashboard') // we should be redirected back to login\ncy.url().should('include', 'login')\n"})}),"\n",(0,o.jsx)(s.h2,{id:"Rules",children:"Rules"}),"\n",(0,o.jsxs)(s.h3,{id:"Requirements",children:["Requirements ",(0,o.jsx)(s.a,{href:"/guides/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,o.jsx)(r,{name:"question-circle"})})]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"cy.clearCookies()"})," requires being chained off of ",(0,o.jsx)(s.code,{children:"cy"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.h3,{id:"Assertions",children:["Assertions ",(0,o.jsx)(s.a,{href:"/guides/core-concepts/introduction-to-cypress#Assertions",children:(0,o.jsx)(r,{name:"question-circle"})})]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"cy.clearCookies()"})," cannot have any assertions chained."]}),"\n"]}),"\n",(0,o.jsxs)(s.h3,{id:"Timeouts",children:["Timeouts ",(0,o.jsx)(s.a,{href:"/guides/core-concepts/introduction-to-cypress#Timeouts",children:(0,o.jsx)(r,{name:"question-circle"})})]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"cy.clearCookies()"})," should never time out."]}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{type:"caution",children:(0,o.jsxs)(s.p,{children:["Because ",(0,o.jsx)(s.code,{children:"cy.clearCookies()"})," is asynchronous it is technically possible for there\nto be a timeout while talking to the internal Cypress automation APIs. But for\npractical purposes it should never happen."]})}),"\n",(0,o.jsx)(s.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.em,{children:"Clear cookies after getting cookies"})})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:"cy.getCookies().should('have.length', 1)\ncy.clearCookies()\ncy.getCookies().should('be.empty')\n"})}),"\n",(0,o.jsx)(s.p,{children:"The commands above will display in the Command Log as:"}),"\n",(0,o.jsx)(n,{src:"/img/api/clearcookies/clear-all-cookies-in-cypress-tests.png",alt:"Command Log"}),"\n",(0,o.jsxs)(s.p,{children:["When clicking on ",(0,o.jsx)(s.code,{children:"clearCookies"})," within the command log, the console outputs the\nfollowing:"]}),"\n",(0,o.jsx)(n,{src:"/img/api/clearcookies/inspect-cleared-cookies-in-console.png",alt:"Console Log"}),"\n",(0,o.jsx)(s.h2,{id:"See-also",children:"See also"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/api/commands/clearcookie",children:(0,o.jsx)(s.code,{children:"cy.clearCookie()"})})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/api/commands/getcookie",children:(0,o.jsx)(s.code,{children:"cy.getCookie()"})})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/api/commands/getcookies",children:(0,o.jsx)(s.code,{children:"cy.getCookies()"})})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/api/commands/setcookie",children:(0,o.jsx)(s.code,{children:"cy.setCookie()"})})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/api/cypress-api/cookies",children:(0,o.jsx)(s.code,{children:"Cypress.Cookies.debug()"})})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function u(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var o=n(7294);const i={},c=o.createContext(i);function r(e){const s=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(c.Provider,{value:s},e.children)}}}]);