"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[3822],{5032:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var c=n(5893),i=n(1151);const t={title:"focused",slug:"/api/commands/focused"},o=void 0,d={id:"api/queries/focused",title:"focused",description:"Get the DOM element that is currently focused.",source:"@site/docs/api/queries/focused.mdx",sourceDirName:"api/queries",slug:"/api/commands/focused",permalink:"/api/commands/focused",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/queries/focused.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"focused",slug:"/api/commands/focused"},sidebar:"api",previous:{title:"first",permalink:"/api/commands/first"},next:{title:"get",permalink:"/api/commands/get"}},r={},l=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"No Args",id:"No-Args",level:3},{value:"Get the element that is focused",id:"Get-the-element-that-is-focused",level:4},{value:"Blur the element with focus",id:"Blur-the-element-with-focus",level:4},{value:"Make an assertion on the focused element",id:"Make-an-assertion-on-the-focused-element",level:4},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"See also",id:"See-also",level:2}];function a(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{DocsImage:n,Icon:t}=s;return n||u("DocsImage",!0),t||u("Icon",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"Get the DOM element that is currently focused."}),"\n",(0,c.jsx)(s.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-javascript",children:"cy.focused()\ncy.focused(options)\n"})}),"\n",(0,c.jsx)(s.h3,{id:"Usage",children:"Usage"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(t,{name:"check-circle",color:"green"})," ",(0,c.jsx)(s.strong,{children:"Correct Usage"})]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-javascript",children:"cy.focused() // Yields the element currently in focus\n"})}),"\n",(0,c.jsx)(s.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(t,{name:"angle-right"})," ",(0,c.jsxs)(s.strong,{children:["options ",(0,c.jsx)(s.em,{children:"(Object)"})]})]}),"\n",(0,c.jsxs)(s.p,{children:["Pass in an options object to change the default behavior of ",(0,c.jsx)(s.code,{children:"cy.focused()"}),"."]}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Option"}),(0,c.jsx)(s.th,{children:"Default"}),(0,c.jsx)(s.th,{children:"Description"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"log"})}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"true"})}),(0,c.jsxs)(s.td,{children:["Displays the command in the ",(0,c.jsx)(s.a,{href:"/guides/core-concepts/cypress-app#Command-Log",children:"Command log"})]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"timeout"})}),(0,c.jsx)(s.td,{children:(0,c.jsx)(s.a,{href:"/guides/references/configuration#Timeouts",children:(0,c.jsx)(s.code,{children:"defaultCommandTimeout"})})}),(0,c.jsxs)(s.td,{children:["Time to wait for ",(0,c.jsx)(s.code,{children:"cy.focused()"})," to resolve before ",(0,c.jsx)(s.a,{href:"#Timeouts",children:"timing out"})]})]})]})]}),"\n",(0,c.jsxs)(s.h3,{id:"Yields",children:["Yields ",(0,c.jsx)(s.a,{href:"/guides/core-concepts/introduction-to-cypress#Subject-Management",children:(0,c.jsx)(t,{name:"question-circle"})})]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"cy.focused()"})," yields the DOM element it found."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"cy.focused()"})," is a query, and it is ",(0,c.jsx)(s.em,{children:"safe"})," to chain further commands."]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"Examples",children:"Examples"}),"\n",(0,c.jsx)(s.h3,{id:"No-Args",children:"No Args"}),"\n",(0,c.jsx)(s.h4,{id:"Get-the-element-that-is-focused",children:"Get the element that is focused"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-javascript",children:"cy.focused().then(($el) => {\n  // do something with $el\n})\n"})}),"\n",(0,c.jsx)(s.h4,{id:"Blur-the-element-with-focus",children:"Blur the element with focus"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-javascript",children:"cy.focused().blur()\n"})}),"\n",(0,c.jsx)(s.h4,{id:"Make-an-assertion-on-the-focused-element",children:"Make an assertion on the focused element"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-javascript",children:"cy.focused().should('have.attr', 'name', 'username')\n"})}),"\n",(0,c.jsx)(s.h2,{id:"Rules",children:"Rules"}),"\n",(0,c.jsxs)(s.h3,{id:"Requirements",children:["Requirements ",(0,c.jsx)(s.a,{href:"/guides/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,c.jsx)(t,{name:"question-circle"})})]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"cy.focused()"})," requires being chained off a command that yields DOM\nelement(s)."]}),"\n"]}),"\n",(0,c.jsxs)(s.h3,{id:"Assertions",children:["Assertions ",(0,c.jsx)(s.a,{href:"/guides/core-concepts/introduction-to-cypress#Assertions",children:(0,c.jsx)(t,{name:"question-circle"})})]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"cy.focused()"})," will automatically ",(0,c.jsx)(s.a,{href:"/guides/core-concepts/retry-ability",children:"retry"}),"\nuntil the element(s)\n",(0,c.jsx)(s.a,{href:"/guides/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"cy.focused()"})," will automatically ",(0,c.jsx)(s.a,{href:"/guides/core-concepts/retry-ability",children:"retry"}),"\nuntil all chained assertions have passed."]}),"\n"]}),"\n",(0,c.jsxs)(s.h3,{id:"Timeouts",children:["Timeouts ",(0,c.jsx)(s.a,{href:"/guides/core-concepts/introduction-to-cypress#Timeouts",children:(0,c.jsx)(t,{name:"question-circle"})})]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"cy.focused()"})," can time out waiting for the element(s) to\n",(0,c.jsx)(s.a,{href:"/guides/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"cy.focused()"})," can time out waiting for assertions you've added to pass."]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:(0,c.jsx)(s.em,{children:"Make an assertion on the focused element"})})}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-javascript",children:"cy.focused().should('have.attr', 'name').and('eq', 'num')\n"})}),"\n",(0,c.jsx)(s.p,{children:"The commands above will display in the Command Log as:"}),"\n",(0,c.jsx)(n,{src:"/img/api/focused/make-assertion-about-focused-element.png",alt:"Command Log focused"}),"\n",(0,c.jsxs)(s.p,{children:["When clicking on the ",(0,c.jsx)(s.code,{children:"focused"})," command within the command log, the console\noutputs the following:"]}),"\n",(0,c.jsx)(n,{src:"/img/api/focused/currently-focused-element-in-an-input.png",alt:"console focused"}),"\n",(0,c.jsx)(s.h2,{id:"See-also",children:"See also"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/api/commands/blur",children:(0,c.jsx)(s.code,{children:".blur()"})})}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/api/commands/focus",children:(0,c.jsx)(s.code,{children:".focus()"})})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}function u(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>o});var c=n(7294);const i={},t=c.createContext(i);function o(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),c.createElement(t.Provider,{value:s},e.children)}}}]);