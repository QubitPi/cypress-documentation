"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[5908],{5266:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=s(5893),r=s(1151);const t={title:"Plugins"},o=void 0,a={id:"guides/tooling/plugins-guide",title:"Plugins",description:"Plugins enable you to tap into, modify, or extend the internal behavior of",source:"@site/docs/guides/tooling/plugins-guide.mdx",sourceDirName:"guides/tooling",slug:"/guides/tooling/plugins-guide",permalink:"/guides/tooling/plugins-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/guides/tooling/plugins-guide.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"Plugins"},sidebar:"guides",previous:{title:"Code Coverage",permalink:"/guides/tooling/code-coverage"},next:{title:"Reporters",permalink:"/guides/tooling/reporters"}},l={},c=[{value:"Use Cases",id:"Use-Cases",level:2},{value:"Configuration",id:"Configuration",level:3},{value:"Preprocessors",id:"Preprocessors",level:3},{value:"Run Lifecycle",id:"Run-Lifecycle",level:3},{value:"Spec Lifecycle",id:"Spec-Lifecycle",level:3},{value:"Browser Launching",id:"Browser-Launching",level:3},{value:"Screenshot handling",id:"Screenshot-handling",level:3},{value:"cy.task",id:"cytask",level:3},{value:"<Icon></Icon> Real World Example",id:"Real-World-Example",level:3},{value:"List of plugins",id:"List-of-plugins",level:2},{value:"Installing plugins",id:"Installing-plugins",level:2},{value:"Using a plugin",id:"Using-a-plugin",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{CypressConfigFileTabs:s,Icon:t,WarningSetupNodeEvents:o}=n;return s||u("CypressConfigFileTabs",!0),t||u("Icon",!0),o||u("WarningSetupNodeEvents",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Plugins enable you to tap into, modify, or extend the internal behavior of\nCypress."}),"\n",(0,i.jsx)(n.p,{children:"Normally, as a user, all of your test code, your application, and Cypress\ncommands are executed in the browser. But Cypress is also a Node process that\nplugins can use."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Plugins enable you to tap into the Node process running outside of the\nbrowser."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'Plugins are a "seam" for you to write your own custom code that executes during\nparticular stages of the Cypress lifecycle.'}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)("strong",{children:"This is a brief overview"}),(0,i.jsx)(n.p,{children:"If you want more details about how to write a plugin, we've written API docs\nthat show you how to work with each plugin event."}),(0,i.jsxs)(n.p,{children:["You can ",(0,i.jsx)(n.a,{href:"/api/plugins/writing-a-plugin",children:"check out the API docs here"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"Use-Cases",children:"Use Cases"}),"\n",(0,i.jsx)(n.h3,{id:"Configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["With plugins, you can programmatically alter the resolved configuration and\nenvironment variables that come from the\n",(0,i.jsx)(n.a,{href:"/guides/references/configuration",children:"Cypress configuration file"}),",\n",(0,i.jsx)(n.a,{href:"/guides/guides/environment-variables#Option-2-cypressenvjson",children:(0,i.jsx)(n.code,{children:"cypress.env.json"})}),",\nthe ",(0,i.jsx)(n.a,{href:"/guides/guides/command-line",children:"command line"}),", or system environment\nvariables."]}),"\n",(0,i.jsx)(n.p,{children:"This enables you to do things like:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use multiple environments with their own configurations"}),"\n",(0,i.jsx)(n.li,{children:"Swap out environment variables based on an environment"}),"\n",(0,i.jsxs)(n.li,{children:["Read in configuration files using the built in ",(0,i.jsx)(n.code,{children:"fs"})," lib"]}),"\n",(0,i.jsx)(n.li,{children:"Change the list of browsers used for testing"}),"\n",(0,i.jsxs)(n.li,{children:["Write your configuration in ",(0,i.jsx)(n.code,{children:"yml"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Check out our ",(0,i.jsx)(n.a,{href:"/api/plugins/configuration-api",children:"Configuration API docs"})," which\ndescribe how to use this event."]}),"\n",(0,i.jsx)(n.h3,{id:"Preprocessors",children:"Preprocessors"}),"\n",(0,i.jsxs)(n.p,{children:["The event ",(0,i.jsx)(n.code,{children:"file:preprocessor"})," is used to customize how your test code is\ntranspiled and sent to the browser. By default, Cypress handles ES2015+,\nTypeScript, and CoffeeScript, using webpack to package it for the browser."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"file:preprocessor"})," event to do things like:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add the latest ES* support."}),"\n",(0,i.jsx)(n.li,{children:"Write your test code in ClojureScript."}),"\n",(0,i.jsx)(n.li,{children:"Customize the Babel settings to add your own plugins."}),"\n",(0,i.jsx)(n.li,{children:"Customize the options for compiling TypeScript."}),"\n",(0,i.jsx)(n.li,{children:"Swap out webpack for Browserify or anything else."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Check out our ",(0,i.jsx)(n.a,{href:"/api/plugins/preprocessors-api",children:"File Preprocessor API docs"})," which\ndescribe how to use this event."]}),"\n",(0,i.jsx)(n.h3,{id:"Run-Lifecycle",children:"Run Lifecycle"}),"\n",(0,i.jsxs)(n.p,{children:["The events ",(0,i.jsx)(n.a,{href:"/api/plugins/before-run-api",children:(0,i.jsx)(n.code,{children:"before:run"})})," and\n",(0,i.jsx)(n.a,{href:"/api/plugins/after-run-api",children:(0,i.jsx)(n.code,{children:"after:run"})})," occur before and after a run,\nrespectively."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"/api/plugins/before-run-api",children:(0,i.jsx)(n.code,{children:"before:run"})})," to do things like:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set up reporting on a run"}),"\n",(0,i.jsx)(n.li,{children:"Start a timer for the run to time how long it takes"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"/api/plugins/after-run-api",children:(0,i.jsx)(n.code,{children:"after:run"})})," to do things like:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Finish up reporting on a run set up in ",(0,i.jsx)(n.code,{children:"before:run"})]}),"\n",(0,i.jsxs)(n.li,{children:["Stop the timer for the run set up in ",(0,i.jsx)(n.code,{children:"before:run"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"Spec-Lifecycle",children:"Spec Lifecycle"}),"\n",(0,i.jsxs)(n.p,{children:["The events ",(0,i.jsx)(n.a,{href:"/api/plugins/before-spec-api",children:(0,i.jsx)(n.code,{children:"before:spec"})})," and\n",(0,i.jsx)(n.a,{href:"/api/plugins/after-spec-api",children:(0,i.jsx)(n.code,{children:"after:spec"})})," run before and after a single spec\nis run, respectively."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"/api/plugins/before-spec-api",children:(0,i.jsx)(n.code,{children:"before:spec"})})," to do things like:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set up reporting on a spec running"}),"\n",(0,i.jsx)(n.li,{children:"Start a timer for the spec to time how long it takes"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"/api/plugins/after-spec-api",children:(0,i.jsx)(n.code,{children:"after:spec"})})," to do things like:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Finish up reporting set up in ",(0,i.jsx)(n.code,{children:"before:spec"})]}),"\n",(0,i.jsxs)(n.li,{children:["Stop the timer for the spec set up in ",(0,i.jsx)(n.code,{children:"before:spec"})]}),"\n",(0,i.jsx)(n.li,{children:"Delete the video recorded for the spec. This prevents it from taking time and\ncomputing resources for compressing and uploading the video. You can do this\nconditionally based on the results of the spec, such as if it passes (so\nvideos for failing tests are preserved for debugging purposes)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Check out the ",(0,i.jsx)(n.a,{href:"/api/plugins/before-spec-api",children:"Before Spec API doc"})," and\n",(0,i.jsx)(n.a,{href:"/api/plugins/after-spec-api",children:"After Spec API doc"})," which describe how to use\nthese events."]}),"\n",(0,i.jsx)(n.h3,{id:"Browser-Launching",children:"Browser Launching"}),"\n",(0,i.jsxs)(n.p,{children:["The event ",(0,i.jsx)(n.code,{children:"before:browser:launch"})," can be used to modify the launch arguments for\neach particular browser."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"before:browser:launch"})," event to do things like:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Load a Chrome extension"}),"\n",(0,i.jsx)(n.li,{children:"Enable or disable experimental chrome features"}),"\n",(0,i.jsx)(n.li,{children:"Control which Chrome components are loaded"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Check out our ",(0,i.jsx)(n.a,{href:"/api/plugins/browser-launch-api",children:"Browser Launch API docs"})," which\ndescribe how to use this event."]}),"\n",(0,i.jsx)(n.h3,{id:"Screenshot-handling",children:"Screenshot handling"}),"\n",(0,i.jsxs)(n.p,{children:["The event ",(0,i.jsx)(n.code,{children:"after:screenshot"})," is called after a screenshot is taken and saved to\ndisk."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"after:screenshot"})," event to do things like:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Save details about the screenshot"}),"\n",(0,i.jsx)(n.li,{children:"Rename the screenshot"}),"\n",(0,i.jsx)(n.li,{children:"Manipulate the screenshot image by resizing or cropping it"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Check out our ",(0,i.jsx)(n.a,{href:"/api/plugins/after-screenshot-api",children:"After Screenshot API docs"}),"\nwhich describe how to use this event."]}),"\n",(0,i.jsx)(n.h3,{id:"cytask",children:"cy.task"}),"\n",(0,i.jsxs)(n.p,{children:["The event ",(0,i.jsx)(n.code,{children:"task"})," is used in conjunction with the\n",(0,i.jsx)(n.a,{href:"/api/commands/task",children:(0,i.jsx)(n.code,{children:"cy.task()"})})," command. It allows you to write arbitrary code\nin Node to accomplish tasks that aren't possible in the browser."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"task"})," event to do things like:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Manipulating a database (seeding, reading, writing, etc.)"}),"\n",(0,i.jsx)(n.li,{children:"Storing state in Node that you want persisted (since the driver is fully\nrefreshed on visits)"}),"\n",(0,i.jsx)(n.li,{children:"Performing parallel tasks (like making multiple http requests outside of\nCypress)"}),"\n",(0,i.jsx)(n.li,{children:"Running an external process (like spinning up a Webdriver instance of another\nbrowser like Safari or puppeteer)"}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"Real-World-Example",children:[(0,i.jsx)(t,{name:"graduation-cap"})," Real World Example"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(t,{name:"github",inline:"true",contentType:"rwa"})," uses\n",(0,i.jsx)(n.a,{href:"/api/commands/task",children:"tasks"})," to re-seed its database, and to filter/find test\ndata for various testing scenarios."]}),"\n",(0,i.jsx)(o,{}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        async 'db:seed'() {\n          // seed database with test data\n          const { data } = await axios.post(`${testDataApiEndpoint}/seed`)\n          return data\n        },\n\n        // fetch test data from a database (MySQL, PostgreSQL, etc...)\n        'filter:database'(queryPayload) {\n          return queryDatabase(queryPayload, (data, attrs) =>\n            _.filter(data.results, attrs)\n          )\n        },\n        'find:database'(queryPayload) {\n          return queryDatabase(queryPayload, (data, attrs) =>\n            _.find(data.results, attrs)\n          )\n        },\n      })\n    },\n  },\n})\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('task', {\n        async 'db:seed'() {\n          // seed database with test data\n          const { data } = await axios.post(`${testDataApiEndpoint}/seed`)\n          return data\n        },\n\n        // fetch test data from a database (MySQL, PostgreSQL, etc...)\n        'filter:database'(queryPayload) {\n          return queryDatabase(queryPayload, (data, attrs) =>\n            _.filter(data.results, attrs)\n          )\n        },\n        'find:database'(queryPayload) {\n          return queryDatabase(queryPayload, (data, attrs) =>\n            _.find(data.results, attrs)\n          )\n        },\n      })\n    },\n  },\n})\n"})})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:[(0,i.jsx)(t,{name:"github"})," Source:\n",(0,i.jsx)(n.a,{href:"https://github.com/cypress-io/cypress-realworld-app/blob/develop/cypress.config.ts",children:"Real World App > cypress.config.ts"})]})})}),"\n",(0,i.jsxs)(n.p,{children:["Check out the\n",(0,i.jsx)(n.a,{href:"https://github.com/cypress-io/cypress-realworld-app/tree/develop/cypress/tests/ui",children:"Real World App test suites"}),"\nto see these tasks in action."]}),"\n",(0,i.jsx)(n.h2,{id:"List-of-plugins",children:"List of plugins"}),"\n",(0,i.jsxs)(n.p,{children:["Cypress maintains a curated list of plugins created by us and the community. You\ncan ",(0,i.jsx)(n.code,{children:"npm install"})," any of the plugins listed below:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/plugins",children:"Our curated list of Cypress plugins."})}),"\n",(0,i.jsx)(n.h2,{id:"Installing-plugins",children:"Installing plugins"}),"\n",(0,i.jsxs)(n.p,{children:["Plugins from our ",(0,i.jsx)(n.a,{href:"/plugins",children:"official list"})," are npm modules. This enables them to\nbe versioned and updated separately without needing to update Cypress itself."]}),"\n",(0,i.jsx)(n.p,{children:"You can install any published plugin using npm:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"npm install <plugin name> --save-dev\n"})}),"\n",(0,i.jsx)(n.h2,{id:"Using-a-plugin",children:"Using a plugin"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to use a plugin in Cypress:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["As of Cypress version 10.0.0, you will need to add your plugin to the\n",(0,i.jsx)(n.a,{href:"/guides/references/configuration#setupNodeEvents",children:(0,i.jsx)(n.code,{children:"setupNodeEvents"})}),"\nfunction in the ",(0,i.jsx)(n.a,{href:"/guides/references/configuration",children:"Cypress configuration"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If you're using an older version of Cypress, you can add your plugin to the\n(deprecated) ",(0,i.jsx)(n.a,{href:"/guides/references/legacy-configuration#Plugins",children:"plugins file"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here's an example of what this might look like:"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      // bind to the event we care about\n      on('<event>', (arg1, arg2) => {\n        // plugin stuff here\n      })\n    },\n  },\n})\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      // bind to the event we care about\n      on('<event>', (arg1, arg2) => {\n        // plugin stuff here\n      })\n    },\n  },\n})\n"})})]}),"\n",(0,i.jsxs)(n.p,{children:["For information on writing plugins, please check out our\n",(0,i.jsx)(n.a,{href:"/api/plugins/writing-a-plugin",children:"Writing a Plugin"})," guide."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var i=s(7294);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);