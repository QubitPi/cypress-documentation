"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[5130],{5971:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=n(5893),r=n(1151);const o={title:"Screenshots and Videos"},t=void 0,d={id:"guides/guides/screenshots-and-videos",title:"Screenshots and Videos",description:"What you'll learn",source:"@site/docs/guides/guides/screenshots-and-videos.mdx",sourceDirName:"guides/guides",slug:"/guides/guides/screenshots-and-videos",permalink:"/guides/guides/screenshots-and-videos",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/guides/guides/screenshots-and-videos.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"Screenshots and Videos"},sidebar:"guides",previous:{title:"Network Requests",permalink:"/guides/guides/network-requests"},next:{title:"Stubs, Spies, and Clocks",permalink:"/guides/guides/stubs-spies-and-clocks"}},c={},a=[{value:"<Icon></Icon> What you&#39;ll learn",id:"What-youll-learn",level:2},{value:"Screenshots",id:"Screenshots",level:2},{value:"Videos",id:"Videos",level:2},{value:"Video encoding",id:"Video-encoding",level:3},{value:"Control which videos to keep and upload to Cypress Cloud",id:"Control-which-videos-to-keep-and-upload-to-Cypress-Cloud",level:3},{value:"Delete videos for specs without failing or retried tests",id:"Delete-videos-for-specs-without-failing-or-retried-tests",level:3},{value:"Now What?",id:"Now-What",level:2},{value:"Share Them With Your Team",id:"Share-Them-With-Your-Team",level:3},{value:"Visual Regression Test / Screenshot Diffing",id:"Visual-Regression-Test--Screenshot-Diffing",level:3},{value:"See also",id:"See-also",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{CypressConfigFileTabs:n,Icon:o,TestReplayInfo:t,VideoRecordingSupportedBrowsers:d}=s;return n||u("CypressConfigFileTabs",!0),o||u("Icon",!0),t||u("TestReplayInfo",!0),d||u("VideoRecordingSupportedBrowsers",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsxs)(s.h2,{id:"What-youll-learn",children:[(0,i.jsx)(o,{name:"graduation-cap"})," What you'll learn"]}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"How Cypress captures screenshots of test failures automatically"}),"\n",(0,i.jsx)(s.li,{children:"How to manually capture your own screenshot"}),"\n",(0,i.jsx)(s.li,{children:"How Cypress can record a video of the entire run"}),"\n",(0,i.jsx)(s.li,{children:"Some options of what to do with screenshot and video artifacts"}),"\n"]})]}),"\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(s.h2,{id:"Screenshots",children:"Screenshots"}),"\n",(0,i.jsxs)(s.p,{children:["Cypress comes with the ability to take screenshots, whether you are running via\n",(0,i.jsx)(s.code,{children:"cypress open"})," or ",(0,i.jsx)(s.code,{children:"cypress run"}),", even in CI."]}),"\n",(0,i.jsxs)(s.p,{children:["To take a manual screenshot you can use the\n",(0,i.jsx)(s.a,{href:"/api/commands/screenshot",children:(0,i.jsx)(s.code,{children:"cy.screenshot()"})})," command."]}),"\n",(0,i.jsxs)(s.p,{children:["Additionally, Cypress will automatically capture screenshots when a failure\nhappens during ",(0,i.jsx)(s.code,{children:"cypress run"}),". Screenshots on failure are ",(0,i.jsx)(s.em,{children:"not"})," automatically\ntaken during ",(0,i.jsx)(s.code,{children:"cypress open"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Capturing of screenshots when a test fails can be turned off entirely by setting\n",(0,i.jsx)(s.a,{href:"/guides/references/configuration#Screenshots",children:(0,i.jsx)(s.code,{children:"screenshotOnRunFailure"})})," to\n",(0,i.jsx)(s.code,{children:"false"})," from within the\n",(0,i.jsx)(s.a,{href:"/guides/references/configuration",children:"Cypress configuration"})," or by setting\n",(0,i.jsx)(s.code,{children:"screenshotOnRunFailure"})," to ",(0,i.jsx)(s.code,{children:"false"})," in the\n",(0,i.jsx)(s.a,{href:"/api/cypress-api/screenshot-api",children:"Cypress.Screenshot.defaults()"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Screenshots are stored in the\n",(0,i.jsx)(s.a,{href:"/guides/references/configuration#Screenshots",children:(0,i.jsx)(s.code,{children:"screenshotsFolder"})})," which is set\nto ",(0,i.jsx)(s.code,{children:"cypress/screenshots"})," by default."]}),"\n",(0,i.jsxs)(s.p,{children:["Cypress clears any existing screenshots before ",(0,i.jsx)(s.code,{children:"cypress run"}),". If you do not want\nto clear your screenshots folder before a run, you can set\n",(0,i.jsx)(s.a,{href:"/guides/references/configuration#Screenshots",children:(0,i.jsx)(s.code,{children:"trashAssetsBeforeRuns"})})," to\n",(0,i.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"Videos",children:"Videos"}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsxs)(s.p,{children:["Video recording is disabled by default, but can be turned on by setting\n",(0,i.jsx)(s.a,{href:"/guides/references/configuration#Videos",children:(0,i.jsx)(s.code,{children:"video"})})," to ",(0,i.jsx)(s.code,{children:"true"})," from within your\nconfiguration."]}),"\n",(0,i.jsxs)(s.p,{children:["If enabled, Cypress records a video for each spec file when running tests during\n",(0,i.jsx)(s.code,{children:"cypress run"}),". Videos are ",(0,i.jsx)(s.em,{children:"not"})," recorded during ",(0,i.jsx)(s.code,{children:"cypress open"}),"."]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  video: true,\n})\n"})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  video: true,\n})\n"})})]}),"\n",(0,i.jsxs)(s.p,{children:["Videos are stored in the\n",(0,i.jsx)(s.a,{href:"/guides/references/configuration#Videos",children:(0,i.jsx)(s.code,{children:"videosFolder"})})," which is set to\n",(0,i.jsx)(s.code,{children:"cypress/videos"})," by default."]}),"\n",(0,i.jsxs)(s.p,{children:["When using the ",(0,i.jsx)(s.code,{children:"--record"})," flag while running your tests, videos are processed,\ncompressed, and uploaded to ",(0,i.jsx)(s.a,{href:"/guides/cloud/introduction",children:"Cypress Cloud"})," after\nevery spec file runs, successful or not. To change this behavior to only process\nvideos in the case that tests fail, see how to\n",(0,i.jsx)(s.a,{href:"/guides/guides/screenshots-and-videos#Delete-videos-for-specs-without-failing-or-retried-tests",children:"delete videos for specs without failing or retried tests"}),".\nDeleting the video will cause the video to not be uploaded to Cypress Cloud."]}),"\n",(0,i.jsxs)(s.p,{children:["Cypress clears any existing videos before a ",(0,i.jsx)(s.code,{children:"cypress run"}),". If you do not want to\nclear your videos folder before a run, you can set\n",(0,i.jsx)(s.a,{href:"/guides/references/configuration#Videos",children:(0,i.jsx)(s.code,{children:"trashAssetsBeforeRuns"})})," to ",(0,i.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"Video-encoding",children:"Video encoding"}),"\n",(0,i.jsx)(s.p,{children:"After a video is recorded, Cypress encodes the video to a commonly digestable\nformat. Part of this encoding process includes video compression."}),"\n",(0,i.jsxs)(s.p,{children:["Compression is disabled by default, meaning this step will be skipped\ncompletely, so the file size of the video will be larger, but the encoding\nprocess is faster. Setting\n",(0,i.jsx)(s.a,{href:"/guides/references/configuration#Videos",children:(0,i.jsx)(s.code,{children:"videoCompression"})})," to ",(0,i.jsx)(s.code,{children:"true"})," will\ncoerce the video compression value to 32 Constant Rate Factor (CRF), which takes\nlonger to process, but results in a smaller video."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Enabling compression"})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  videoCompression: true,\n})\n"})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  videoCompression: true,\n})\n"})})]}),"\n",(0,i.jsxs)(s.p,{children:["If your spec files have a long run duration and\n",(0,i.jsx)(s.a,{href:"/guides/references/configuration#Videos",children:(0,i.jsx)(s.code,{children:"videoCompression"})})," is enabled, you\nmight notice a time gap between a finished spec and a new spec starting during\n",(0,i.jsx)(s.code,{children:"cypress run"}),". During this time, Cypress is encoding the captured video and\npossibly uploading it to Cypress Cloud."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Change compression value from 32"})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  videoCompression: 15,\n})\n"})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  videoCompression: 15,\n})\n"})})]}),"\n",(0,i.jsx)(s.p,{children:"In addition to enabling or disabling video compress, you can specify the CRF\nvalue used to compress the video. Here are some common scenarios:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"If the machine is encoding the video slowly (which is often the case for\nvirtual machines that use less CPU cores), try increasing the CRF value."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"If your videos are extremely low quality, try decreasing the CRF value."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["A lower ",(0,i.jsx)(s.code,{children:"videoCompression"})," value will spend less time compressing and result in\na bigger video file size and higher quality video."]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.p,{children:"If you are an FFmpeg pro and want to see all the settings and debug messages\nduring the encoding, run Cypress with the following environment variable:"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"DEBUG=cypress:server:video\n"})})]}),"\n",(0,i.jsx)(s.h3,{id:"Control-which-videos-to-keep-and-upload-to-Cypress-Cloud",children:"Control which videos to keep and upload to Cypress Cloud"}),"\n",(0,i.jsxs)(s.p,{children:["You may want to have more control over which videos you want to keep and upload\nto Cypress Cloud. Deleting videos after the run can save resource space on the\nmachine as well as skip the time used to process, compress, and upload the video\nto ",(0,i.jsx)(s.a,{href:"/guides/cloud/introduction",children:"Cypress Cloud"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["To only process videos in the case that a test fails, you can\n",(0,i.jsx)(s.a,{href:"/guides/guides/screenshots-and-videos#Delete-videos-for-specs-without-failing-or-retried-tests",children:"delete videos for specs without failing or retried tests"}),",\nwhich will not upload the video of passed runs to Cypress Cloud."]}),"\n",(0,i.jsxs)(s.p,{children:["For more fine grained control, you can use Cypress's\n",(0,i.jsx)(s.a,{href:"/api/plugins/after-spec-api",children:(0,i.jsx)(s.code,{children:"after:spec"})})," event listener that fires after each\nspec file is run and delete the video when certain conditions are met."]}),"\n",(0,i.jsx)(s.h3,{id:"Delete-videos-for-specs-without-failing-or-retried-tests",children:"Delete videos for specs without failing or retried tests"}),"\n",(0,i.jsxs)(s.p,{children:["The example below shows how to delete the recorded video for specs that had no\nretry attempts or failures when using Cypress\n",(0,i.jsx)(s.a,{href:"/guides/guides/test-retries",children:"test retries"}),"."]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\nconst fs = require('fs')\n\nmodule.exports = defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on('after:spec', (spec, results) => {\n        if (results && results.video) {\n          // Do we have failures for any retry attempts?\n          const failures = results.tests.some((test) =>\n            test.attempts.some((attempt) => attempt.state === 'failed')\n          )\n          if (!failures) {\n            // delete the video if the spec passed and no tests retried\n            fs.unlinkSync(results.video)\n          }\n        }\n      })\n    },\n  },\n})\n"})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\nimport fs from 'fs'\n\nexport default defineConfig({\n  // setupNodeEvents can be defined in either\n  // the e2e or component configuration\n  e2e: {\n    setupNodeEvents(on, config) {\n      on(\n        'after:spec',\n        (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {\n          if (results && results.video) {\n            // Do we have failures for any retry attempts?\n            const failures = results.tests.some((test) =>\n              test.attempts.some((attempt) => attempt.state === 'failed')\n            )\n            if (!failures) {\n              // delete the video if the spec passed and no tests retried\n              fs.unlinkSync(results.video)\n            }\n          }\n        }\n      )\n    },\n  },\n})\n"})})]}),"\n",(0,i.jsx)(s.h2,{id:"Now-What",children:"Now What?"}),"\n",(0,i.jsx)(s.p,{children:"So you are capturing screenshots and recording videos of your test runs, now\nwhat?"}),"\n",(0,i.jsx)(s.h3,{id:"Share-Them-With-Your-Team",children:"Share Them With Your Team"}),"\n","\n",(0,i.jsxs)(s.p,{children:["Something you can take advantage of today is\n",(0,i.jsx)(s.a,{href:"/guides/cloud/introduction",children:"Cypress Cloud"}),": our companion enterprise service\nthat stores your artifacts for you and lets you view them from any web browser,\nas well as share them with your team."]}),"\n",(0,i.jsx)(s.h3,{id:"Visual-Regression-Test--Screenshot-Diffing",children:"Visual Regression Test / Screenshot Diffing"}),"\n",(0,i.jsxs)(s.p,{children:["Another possibility is visual regression testing: comparing screenshots of past\nruns with the current run to ensure that nothing changed.\n",(0,i.jsx)(s.a,{href:"/guides/tooling/visual-testing",children:"Read about how to implement visual testing."})]}),"\n",(0,i.jsx)(s.h2,{id:"See-also",children:"See also"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/api/plugins/after-screenshot-api",children:"After Screenshot API"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/api/cypress-api/screenshot-api",children:"Cypress.Screenshot"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/api/commands/screenshot",children:(0,i.jsx)(s.code,{children:"cy.screenshot()"})})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/guides/cloud/introduction",children:"Cypress Cloud"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/guides/cloud/test-replay",children:"Test Replay"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/guides/tooling/visual-testing",children:"Visual Testing"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function u(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>t});var i=n(7294);const r={},o=i.createContext(r);function t(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);