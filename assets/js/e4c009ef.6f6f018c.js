"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[6669],{4512:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(5893),r=s(1151);const i={title:"After Run API"},o=void 0,a={id:"api/plugins/after-run-api",title:"After Run API",description:"The after:run event fires after a run is finished. When running cypress via",source:"@site/docs/api/plugins/after-run-api.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/after-run-api",permalink:"/api/plugins/after-run-api",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/plugins/after-run-api.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"After Run API"},sidebar:"api",previous:{title:"Cypress.sinon",permalink:"/api/utilities/sinon"},next:{title:"After Screenshot API",permalink:"/api/plugins/after-screenshot-api"}},l={},c=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:2},{value:"Log the number of passed tests of a run",id:"Log-the-number-of-passed-tests-of-a-run",level:3},{value:"See also",id:"See-also",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{CypressConfigFileTabs:s,Icon:i,WarningSetupNodeEvents:o}=n;return s||p("CypressConfigFileTabs",!0),i||p("Icon",!0),o||p("WarningSetupNodeEvents",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"after:run"})," event fires after a run is finished. When running cypress via\n",(0,t.jsx)(n.code,{children:"cypress open"}),", the event will fire when closing a project."]}),"\n",(0,t.jsxs)(n.p,{children:["When running via ",(0,t.jsx)(n.code,{children:"cypress run"}),", the event will fire each time ",(0,t.jsx)(n.code,{children:"cypress run"}),"\nexecutes. As a result, if running your specs in\n",(0,t.jsx)(n.a,{href:"/guides/cloud/smart-orchestration/parallelization",children:"parallel"}),", the event will\nfire once for each machine on which ",(0,t.jsx)(n.code,{children:"cypress run"})," is called."]}),"\n",(0,t.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["\u26a0\ufe0f When running via ",(0,t.jsx)(n.code,{children:"cypress open"}),", the ",(0,t.jsx)(n.code,{children:"after:run"})," event only fires if the\n",(0,t.jsx)(n.a,{href:"/guides/references/configuration#Experiments",children:"experimentalInteractiveRunEvents flag"}),"\nis enabled."]})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('after:run', (results) => {\n        /* ... */\n      })\n    },\n  },\n})\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('after:run', (results) => {\n        /* ... */\n      })\n    },\n  },\n})\n"})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(i,{name:"angle-right"})," ",(0,t.jsxs)(n.strong,{children:["results ",(0,t.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Results of the run, including the total number of passes/failures/etc, the\nproject config, and details about the browser and system. It is the same as the\nresults object resolved by the ",(0,t.jsx)(n.a,{href:"/guides/guides/module-api#Results",children:"Module API"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Results are only provided when running via ",(0,t.jsx)(n.code,{children:"cypress run"}),". When running via\n",(0,t.jsx)(n.code,{children:"cypress open"}),", the results will be undefined."]}),"\n",(0,t.jsx)(n.h2,{id:"Usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["You can return a promise from the ",(0,t.jsx)(n.code,{children:"after:run"})," event handler and it will be\nawaited before Cypress proceeds running your specs."]}),"\n",(0,t.jsx)(n.h3,{id:"Log-the-number-of-passed-tests-of-a-run",children:"Log the number of passed tests of a run"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('after:run', (results) => {\n        // results will look something like this when run via `cypress run`:\n        // {\n        //   totalDuration: 81,\n        //   totalSuites: 0,\n        //   totalTests: 1,\n        //   totalFailed: 0,\n        //   totalPassed: 1,\n        //   totalPending: 0,\n        //   totalSkipped: 0,\n        //   browserName: 'electron',\n        //   browserVersion: '59.0.3071.115',\n        //   osName: 'darwin',\n        //   osVersion: '16.7.0',\n        //   cypressVersion: '3.1.0',\n        //   config: {\n        //     projectId: '1qv3w7',\n        //     baseUrl: 'http://example.com',\n        //     viewportWidth: 1000,\n        //     viewportHeight: 660,\n        //     // ... more properties...\n        //   }\n        //   // ... more properties...\n        //   }\n        // }\n        if (results) {\n          // results will be undefined in interactive mode\n          console.log(\n            results.totalPassed,\n            'out of',\n            results.totalTests,\n            'passed'\n          )\n        }\n      })\n    },\n  },\n})\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('after:run', (results) => {\n        // results will look something like this when run via `cypress run`:\n        // {\n        //   totalDuration: 81,\n        //   totalSuites: 0,\n        //   totalTests: 1,\n        //   totalFailed: 0,\n        //   totalPassed: 1,\n        //   totalPending: 0,\n        //   totalSkipped: 0,\n        //   browserName: 'electron',\n        //   browserVersion: '59.0.3071.115',\n        //   osName: 'darwin',\n        //   osVersion: '16.7.0',\n        //   cypressVersion: '3.1.0',\n        //   config: {\n        //     projectId: '1qv3w7',\n        //     baseUrl: 'http://example.com',\n        //     viewportWidth: 1000,\n        //     viewportHeight: 660,\n        //     // ... more properties...\n        //   }\n        //   // ... more properties...\n        //   }\n        // }\n        if (results) {\n          // results will be undefined in interactive mode\n          console.log(\n            results.totalPassed,\n            'out of',\n            results.totalTests,\n            'passed'\n          )\n        }\n      })\n    },\n  },\n})\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/plugins/before-run-api",children:"Before Run API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/plugins/before-spec-api",children:"Before Spec API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/plugins/after-spec-api",children:"After Spec API"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/guides/tooling/plugins-guide",children:"Plugins Guide"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/plugins/writing-a-plugin",children:"Writing a Plugin"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(7294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);