"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[6388],{1157:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(5893),s=t(1151);const r={title:"Auto Cancellation",sidebar_position:50},o=void 0,a={id:"guides/cloud/smart-orchestration/run-cancellation",title:"Auto Cancellation",description:"Continuous Integration (CI) pipelines are typically costly processes that can",source:"@site/docs/guides/cloud/smart-orchestration/run-cancellation.mdx",sourceDirName:"guides/cloud/smart-orchestration",slug:"/guides/cloud/smart-orchestration/run-cancellation",permalink:"/guides/cloud/smart-orchestration/run-cancellation",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/guides/cloud/smart-orchestration/run-cancellation.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",sidebarPosition:50,frontMatter:{title:"Auto Cancellation",sidebar_position:50},sidebar:"guides",previous:{title:"Spec Prioritization",permalink:"/guides/cloud/smart-orchestration/spec-prioritization"},next:{title:"GitHub",permalink:"/guides/cloud/integrations/source-control/github"}},l={},c=[{value:"Activate Auto Cancellation in Cypress Cloud",id:"Activate-Auto-Cancellation-in-Cypress-Cloud",level:3},{value:"Specifying failures before auto canceling in the CLI",id:"Specifying-failures-before-auto-canceling-in-the-CLI",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{DocsImage:t,Icon:r}=n;return t||h("DocsImage",!0),r||h("Icon",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Continuous Integration (CI) pipelines are typically costly processes that can\ndemand significant compute time. ",(0,i.jsx)(n.strong,{children:"When a test failure occurs in CI, it often\ndoes not make sense to continue running the remainder of a test suite"})," since\nthe process has to start again upon merging of subsequent fixes and other code\nchanges. When Auto Cancellation is enabled, once the number of failed tests goes\nover a preset threshold, the entire test run is canceled. Note that any\nin-progress specs will continue to run to completion."]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{name:"check"})," ",(0,i.jsx)(n.strong,{children:"Benefits"})]}),(0,i.jsxs)(n.p,{children:["Canceling an ",(0,i.jsx)(n.strong,{children:"entire"})," test run, even if parallelized, upon the first test\nfailure will:"]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Save time"}),". Resolve test outcomes faster."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reduce CI costs"}),". These cost savings can be significant for large test\nsuites."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Free-up CI resources"})," for validating fixes, and helping other users."]}),"\n"]})]}),"\n",(0,i.jsx)(n.h3,{id:"Activate-Auto-Cancellation-in-Cypress-Cloud",children:"Activate Auto Cancellation in Cypress Cloud"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{name:"star"})," ",(0,i.jsx)(n.strong,{children:"Premium Cypress Cloud Feature"})]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Auto Cancellation"})," is a ",(0,i.jsx)(n.em,{children:"Smart Orchestration"})," feature available to users with\na ",(0,i.jsx)(n.a,{href:"https://cypress.io/pricing",children:"Business or Enterprise tier Cypress Cloud plan"}),".\nWondering if upgrading your Team tier subscription is worth it? Check out the\n",(0,i.jsx)(n.a,{href:"/guides/cloud/recorded-runs#Recommendations",children:"recommendations"})," on the run\noverview page to see how much time we predict these features would save you."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Auto Cancellation is a ",(0,i.jsx)(n.em,{children:"Smart Orchestration"})," feature that is managed within a\nproject's settings."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)("strong",{children:"Consideration for Teams"}),(0,i.jsx)(n.p,{children:"If your development, testing, or QA teams operate in a highly collaborative\nworkflow where multiple people are working on various test failures at the same\ntime, it may make sense to increase the failures threshold to surface more failures on each test run."})]}),"\n",(0,i.jsx)(n.p,{children:"To enable or disable this feature at the Project level (must be an admin user):"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Select the desired project within Projects view to visit Cypress Cloud."}),"\n",(0,i.jsx)(n.li,{children:'Click "Project Settings" with the right-hand sidebar.'}),"\n",(0,i.jsx)(n.li,{children:"Scroll to the Smart Orchestration section within Project Settings page."}),"\n",(0,i.jsx)(n.li,{children:'Toggle "Auto Cancellation".'}),"\n",(0,i.jsx)(n.li,{children:'Set the "failures before auto canceling" threshold (or just leave it at the\ndefault value of 1).'}),"\n"]}),"\n",(0,i.jsx)(t,{src:"/img/guides/cloud/smart-orchestration/auto-cancellation-active.png",alt:"Enable Auto Cancellation"}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)("strong",{children:"CI Tip: Save Time"}),(0,i.jsxs)(n.p,{children:["In addition to Auto Cancellation, consider reducing CI costs further by enabling\n",(0,i.jsx)(n.a,{href:"/guides/cloud/smart-orchestration/spec-prioritization",children:"Spec Prioritization"})," to\nsurface test failures earlier in the run, and reduce the time it takes to fix\nissues and deploy changes."]})]}),"\n",(0,i.jsx)(n.h3,{id:"Specifying-failures-before-auto-canceling-in-the-CLI",children:"Specifying failures before auto canceling in the CLI"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"auto-cancel-after-failures"})," flag in the CLI is only available in Cypress\n",(0,i.jsx)(n.code,{children:"12.6.0"})," and later. Including the flag in an older version will throw an error."]})}),"\n",(0,i.jsx)(n.p,{children:"With the Cypress CLI, you can specify the number of test failures to execute\nbefore canceling the run via a command flag. This allows more granular control\nof Auto Cancellation on a per-run basis."}),"\n",(0,i.jsx)(n.p,{children:"Some common use cases for doing so might be:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Setting a lower-than-normal value on dev environments to fail a test suite\nearly for faster feedback"}),"\n",(0,i.jsx)(n.li,{children:"Disabling Auto Cancellation on important branches that need the full test\nsuite to run every time"}),"\n",(0,i.jsx)(n.li,{children:"Overriding the project value on a case-by-case basis"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Specifying the flag will override the project setting in Cypress Cloud, and not\nspecifying it will default to the value in the project settings."}),"\n",(0,i.jsxs)(n.p,{children:["To set it, pass the ",(0,i.jsx)(n.code,{children:"--auto-cancel-after-failures"})," flag to the ",(0,i.jsx)(n.code,{children:"cypress run"}),"\ncommand, and give it a numeric value:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx cypress run --record --key <<your_record_key>> --auto-cancel-after-failures 1\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also specify ",(0,i.jsx)(n.code,{children:"false"})," for the value to disable Auto Cancellation for the\nrun:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx cypress run --record --key <<your_record_key>> --auto-cancel-after-failures false\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more info on passing CLI flags, see our guide on the\n",(0,i.jsx)(n.a,{href:"/guides/guides/command-line",children:"Cypress Command Line"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);