"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[8893],{8860:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=n(5893),i=n(1151);const t={title:"CircleCI"},o=void 0,l={id:"guides/continuous-integration/circleci",title:"CircleCI",description:"What you'll learn",source:"@site/docs/guides/continuous-integration/circleci.mdx",sourceDirName:"guides/continuous-integration",slug:"/guides/continuous-integration/circleci",permalink:"/guides/continuous-integration/circleci",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/guides/continuous-integration/circleci.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"CircleCI"},sidebar:"guides",previous:{title:"Bitbucket Pipelines",permalink:"/guides/continuous-integration/bitbucket-pipelines"},next:{title:"GitHub Actions",permalink:"/guides/continuous-integration/github-actions"}},c={},a=[{value:"<Icon></Icon> What you&#39;ll learn",id:"What-youll-learn",level:2},{value:"Basic Setup",id:"Basic-Setup",level:2},{value:"Parallelization",id:"Parallelization",level:2},{value:"<Icon></Icon> Real World Example <Badge>New</Badge>",id:"Real-World-Example-New",level:3},{value:"Additional Examples",id:"Additional-Examples",level:2},{value:"Component Testing Example",id:"Component-Testing-Example",level:4},{value:"Yarn Example",id:"Yarn-Example",level:4},{value:"Chrome Example",id:"Chrome-Example",level:4}];function p(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Badge:n,Icon:t}=s;return n||u("Badge",!0),t||u("Icon",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsxs)(s.h2,{id:"What-youll-learn",children:[(0,r.jsx)(t,{name:"graduation-cap"})," What you'll learn"]}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"How to run Cypress tests with CircleCI as part of CI/CD pipeline"}),"\n",(0,r.jsx)(s.li,{children:"How to parallelize Cypress test runs within CircleCI"}),"\n"]})]}),"\n","\n",(0,r.jsxs)(s.p,{children:["The\n",(0,r.jsx)(s.a,{href:"https://circleci.com/developer/orbs/orb/cypress-io/cypress",children:"Cypress CircleCI Orb"}),"\nis the ",(0,r.jsx)(s.em,{children:"official"})," CircleCI Orb of Cypress. Although you do not need to use the\norb to run your tests in CircleCI, the benefit of using the orb is that it\nallows you to easily install, cache and run Cypress tests in CircleCI with less\neffort. The orb abstracts common steps necessary for running your tests in\nCircleCI in order to make your life as a developer better!"]}),"\n",(0,r.jsx)(s.h2,{id:"Basic-Setup",children:"Basic Setup"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"https://github.com/cypress-io/circleci-orb",children:"Cypress CircleCI Orb"})," is a\npiece of configuration set in your ",(0,r.jsx)(s.code,{children:".circleci/config.yml"})," file to correctly\ninstall, cache and run Cypress with very little effort."]}),"\n",(0,r.jsxs)(s.p,{children:["For the Orb Quick Start Guide and usage cases, view the CircleCI\n",(0,r.jsx)(s.a,{href:"https://circleci.com/developer/orbs/orb/cypress-io/cypress",children:"Cypress orb documentation"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"A typical project can have:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'version: 2.1\norbs:\n  # "cypress-io/cypress@3" installs the latest published\n  # version "s.x.y" of the orb. We recommend you then use\n  # the strict explicit version "cypress-io/cypress@3.x.y"\n  # to lock the version and prevent unexpected CI changes\n  cypress: cypress-io/cypress@3\nworkflows:\n  build:\n    jobs:\n      - cypress/run # "run" job comes from "cypress" orb\n          start-command: \'npm run start\'\n'})}),"\n",(0,r.jsx)(s.p,{children:"That's it! Your repo's dependencies will be installed and cached and your\nCypress tests will run in CircleCI"}),"\n",(0,r.jsx)(s.h2,{id:"Parallelization",children:"Parallelization"}),"\n",(0,r.jsxs)(s.p,{children:["A more complex project that needs to install dependencies, start a server, and\nrun tests across 4 CI machines\n",(0,r.jsx)(s.a,{href:"/guides/cloud/smart-orchestration/parallelization",children:"in parallel"})," may have:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"version: 2.1\norbs:\n  cypress: cypress-io/cypress@3\nworkflows:\n  build:\n    jobs:\n      - cypress/run:\n          start-command: 'npm run start'\n          cypress-command: 'npx cypress run --parallel --record --group all tests'\n          parallelism: 4\n"})}),"\n",(0,r.jsx)(s.p,{children:"Using the orb brings simplicity and static checks of parameters to CircleCI\nconfiguration."}),"\n",(0,r.jsxs)(s.p,{children:["You can find additional examples at\n",(0,r.jsx)(s.a,{href:"https://github.com/cypress-io/circleci-orb/blob/master/src/examples",children:"our orb examples page"}),"."]}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsxs)(s.h3,{id:"Real-World-Example-New",children:[(0,r.jsx)(t,{name:"graduation-cap"})," Real World Example ",(0,r.jsx)(n,{type:"success",children:"New"})]}),(0,r.jsxs)(s.p,{children:["The Cypress ",(0,r.jsx)(t,{name:"github",inline:"true",contentType:"rwa"})," uses the\nCircle CI ",(0,r.jsx)(s.a,{href:"https://github.com/cypress-io/circleci-orb",children:"Cypress Orb"}),", Codecov\nOrb, and Windows Orb to test over 300 test cases in parallel across 25 machines,\nmultiple browsers, multiple device sizes, and multiple operating systems with\nfull code-coverage reporting and\n",(0,r.jsx)(s.a,{href:"https://cloud.cypress.io/projects/7s5okt",children:"Cypress Cloud recording"}),"."]}),(0,r.jsxs)(s.p,{children:["Check out the full ",(0,r.jsx)(t,{name:"github",inline:"true",callout:"RWA Circle CI configuration",url:"https://github.com/cypress-io/cypress-realworld-app/blob/develop/.circleci/config.yml"}),"."]})]}),"\n",(0,r.jsx)(s.h2,{id:"Additional-Examples",children:"Additional Examples"}),"\n",(0,r.jsx)(s.h4,{id:"Component-Testing-Example",children:"Component Testing Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"version: 2.1\norbs:\n  cypress: cypress-io/cypress@3\nworkflows:\n  test:\n    jobs:\n      - cypress/run:\n          cypress-command: 'npx cypress run --component'\n"})}),"\n",(0,r.jsx)(s.h4,{id:"Yarn-Example",children:"Yarn Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"version: 2.1\norbs:\n  cypress: cypress-io/cypress@3\nworkflows:\n  test:\n    jobs:\n      - cypress/run:\n          package-manager: 'yarn'\n          start-command: 'yarn start'\n"})}),"\n",(0,r.jsx)(s.h4,{id:"Chrome-Example",children:"Chrome Example"}),"\n",(0,r.jsxs)(s.p,{children:["Cypress uses Electron by default to run your tests. The ",(0,r.jsx)(s.code,{children:"install-browsers"})," flag\nis used to install Firefox and Chrome to run your tests. This is only needed if\nyou are passing the ",(0,r.jsx)(s.code,{children:"--browser"})," flag in your ",(0,r.jsx)(s.code,{children:"cypress-command"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"version: 2.1\norbs:\n  cypress: cypress-io/cypress@3\nworkflows:\n  test:\n    jobs:\n      - cypress/run:\n          install-browsers: true\n          start-command: 'npm run start'\n          cypress-command: 'npx cypress run --browser chrome'\n"})})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function u(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>o});var r=n(7294);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);