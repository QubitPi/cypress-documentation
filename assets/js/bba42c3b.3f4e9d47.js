"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[9603],{3082:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(5893),t=n(1151);const r={title:"Applications",sidebar_position:30},c=void 0,a={id:"examples/applications",title:"Applications",description:"Below is a list of complete applications tested in Cypress.",source:"@site/docs/examples/applications.mdx",sourceDirName:"examples",slug:"/examples/applications",permalink:"/examples/applications",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/examples/applications.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",sidebarPosition:30,frontMatter:{title:"Applications",sidebar_position:30},sidebar:"examples",previous:{title:"Tutorial Videos",permalink:"/examples/tutorials"},next:{title:"Docker",permalink:"/examples/docker"}},o={},l=[{value:"Kitchen Sink",id:"Kitchen-Sink",level:2},{value:"TodoMVC",id:"TodoMVC",level:2},{value:"Realworld",id:"Realworld",level:2},{value:"Angular-playground",id:"Angular-playground",level:2},{value:"More examples",id:"More-examples",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{DocsImage:n,Icon:r}=s;return n||h("DocsImage",!0),r||h("Icon",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Below is a list of complete applications tested in Cypress."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"JS"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"#Kitchen-Sink",children:"Kitchen Sink"})}),(0,i.jsx)(s.td,{children:"Vanilla"}),(0,i.jsx)(s.td,{children:"Showcases every single Cypress command"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"#TodoMVC",children:"TodoMVC"})}),(0,i.jsx)(s.td,{children:"React"}),(0,i.jsx)(s.td,{children:"Compares the official TodoMVC Selenium tests to Cypress"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"#Realworld",children:"Realworld"})}),(0,i.jsx)(s.td,{children:"React"}),(0,i.jsxs)(s.td,{children:["Full end-to-end tests for the ",(0,i.jsx)(s.a,{href:"https://github.com/gothinkster/realworld",children:"gothinkster/realworld"}),' "Conduit" app']})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"#Angular-playground",children:"Angular-playground"})}),(0,i.jsx)(s.td,{children:"Angular 11"}),(0,i.jsx)(s.td,{children:"Full TypeScript project with code coverage"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"Kitchen-Sink",children:"Kitchen Sink"}),"\n",(0,i.jsx)(r,{name:"github",url:"https://github.com/cypress-io/cypress-example-kitchensink"}),"\n",(0,i.jsx)(s.p,{children:"This is an example app which is used to showcase every command available in\nCypress."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Query and traverse DOM elements using ",(0,i.jsx)(s.a,{href:"/api/commands/get",children:"cy.get()"}),",\n",(0,i.jsx)(s.a,{href:"/api/commands/find",children:"cy.find()"})," and other commands."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/api/commands/type",children:".type()"})," into forms, ",(0,i.jsx)(s.a,{href:"/api/commands/click",children:".click()"}),"\nelements, ",(0,i.jsx)(s.a,{href:"/api/commands/select",children:".select()"})," dropdowns, and other actions."]}),"\n",(0,i.jsxs)(s.li,{children:["Change the size of the viewport using ",(0,i.jsx)(s.a,{href:"/api/commands/viewport",children:"cy.viewport()"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"Navigate to other pages."}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/api/commands/intercept",children:"cy.intercept()"})," network requests,\n",(0,i.jsx)(s.a,{href:"/api/commands/wait",children:"cy.wait()"})," on responses, and stub response data using\n",(0,i.jsx)(s.a,{href:"/api/commands/fixture",children:"cy.fixture()"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"Inspect and manipulate cookies and localStorage."}),"\n"]}),"\n",(0,i.jsx)(n,{src:"/img/examples/public-project-kitchen-sink.png",alt:"kitchensink running"}),"\n",(0,i.jsx)(s.h2,{id:"TodoMVC",children:"TodoMVC"}),"\n",(0,i.jsx)(r,{name:"github",url:"https://github.com/cypress-io/cypress-example-todomvc"}),"\n",(0,i.jsxs)(s.p,{children:["This repo compares\n",(0,i.jsx)(s.a,{href:"https://github.com/cypress-io/cypress-example-todomvc/blob/master/cypress/e2e/app.cy.js",children:"Cypress Tests"}),"\nto\n",(0,i.jsx)(s.a,{href:"https://github.com/tastejs/todomvc/blob/master/tests/test.js",children:"official TodoMVC Tests"}),".\nThis gives you a good comparison of writing and running tests in Cypress versus\nvanilla Selenium."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Query and make assertions about DOM elements state."}),"\n",(0,i.jsxs)(s.li,{children:["Type into an input using ",(0,i.jsx)(s.a,{href:"/api/commands/type",children:"cy.type()"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Create a custom ",(0,i.jsx)(s.code,{children:"cy.createTodo()"})," command to run multiple cy commands."]}),"\n",(0,i.jsxs)(s.li,{children:["Click and double click elements using ",(0,i.jsx)(s.a,{href:"/api/commands/click",children:"cy.click()"})," and\n",(0,i.jsx)(s.a,{href:"/api/commands/dblclick",children:"cy.dblclick()"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n,{src:"/img/examples/public-project-todomvc.png",alt:"TodoMvc testing in Cypress"}),"\n",(0,i.jsx)(s.h2,{id:"Realworld",children:"Realworld"}),"\n",(0,i.jsx)(r,{name:"github",url:"https://github.com/cypress-io/cypress-example-realworld"}),"\n",(0,i.jsx)(s.p,{children:'Shows a full blogging application, "Conduit", with back end code and a database.'}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Create a test user from tests by running database commands via the\n",(0,i.jsx)(s.a,{href:"/api/commands/task",children:"cy.task()"})," command."]}),"\n",(0,i.jsxs)(s.li,{children:["Log in using ",(0,i.jsx)(s.a,{href:"/api/commands/request",children:"cy.request()"})," and then setting the\nreturned JWT token in ",(0,i.jsx)(s.code,{children:"localStorage"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"Test all aspects of writing blog posts, commenting, and marking favorite\nposts."}),"\n",(0,i.jsxs)(s.li,{children:["Collect full stack code coverage using\n",(0,i.jsx)(s.a,{href:"https://github.com/cypress-io/code-coverage",children:"@cypress/code-coverage"}),". Read\nthe Cypress ",(0,i.jsx)(s.a,{href:"/guides/tooling/code-coverage",children:"code coverage guide"})," for more\ndetails."]}),"\n"]}),"\n",(0,i.jsx)(n,{src:"/img/examples/realworld-app.png",alt:"Realworld test in Cypress"}),"\n",(0,i.jsx)(s.h2,{id:"Angular-playground",children:"Angular-playground"}),"\n",(0,i.jsx)(r,{name:"github",url:"https://github.com/muratkeremozcan/angular-playground"}),"\n",(0,i.jsx)(s.p,{children:"A 3rd-party copy of Angular's Karma examples, enhanced for innovation\nactivities, best practices and information sharing."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"100% code and tests implemented in TypeScript"}),"\n",(0,i.jsxs)(s.li,{children:["CI setup using\n",(0,i.jsx)(s.a,{href:"https://github.com/cypress-io/circleci-orb",children:"Cypress CircleCI Orb"})]}),"\n",(0,i.jsxs)(s.li,{children:["Combined coverage with Jest and Cypress via\n",(0,i.jsx)(s.a,{href:"https://github.com/cypress-io/code-coverage",children:"Cypress code coverage plugin"})]}),"\n",(0,i.jsx)(s.li,{children:"linters and pre-commit hooks: Eslint, Prettier, Js-beautify, Husky"}),"\n",(0,i.jsx)(s.li,{children:"recording test results on Cypress Cloud"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"More-examples",children:"More examples"}),"\n",(0,i.jsxs)(s.p,{children:["To find more Cypress examples, search GitHub for\n",(0,i.jsx)(s.a,{href:"https://github.com/search?q=topic%3Acypress-example",children:(0,i.jsx)(s.code,{children:"topic:cypress-example"})}),".\nIf the number of results is overwhelming, limit yourself to the examples created\nunder Cypress organization\n",(0,i.jsx)(s.a,{href:"https://github.com/search?q=topic%3Acypress-example+user%3Acypress-io",children:(0,i.jsx)(s.code,{children:"topic:cypress-example user:cypress-io"})}),",\nor created by individual Cypress engineers, like\n",(0,i.jsx)(s.a,{href:"https://github.com/search?q=topic%3Acypress-example+user%3Abahmutov",children:(0,i.jsx)(s.code,{children:"topic:cypress-example user:bahmutov"})}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function h(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>c});var i=n(7294);const t={},r=i.createContext(t);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);