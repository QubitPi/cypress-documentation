"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[8541],{5821:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(5893),r=n(1151);const i={title:"Test Replay",sidebar_position:40,sidebar_custom_props:{new_label:!0}},o=void 0,l={id:"guides/cloud/test-replay",title:"Test Replay",description:"What you'll learn",source:"@site/docs/guides/cloud/test-replay.mdx",sourceDirName:"guides/cloud",slug:"/guides/cloud/test-replay",permalink:"/guides/cloud/test-replay",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/guides/cloud/test-replay.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",sidebarPosition:40,frontMatter:{title:"Test Replay",sidebar_position:40,sidebar_custom_props:{new_label:!0}},sidebar:"guides",previous:{title:"Recorded Runs",permalink:"/guides/cloud/recorded-runs"},next:{title:"Branch Review",permalink:"/guides/cloud/branch-review"}},a={},d=[{value:"<Icon></Icon> What you&#39;ll learn",id:"What-youll-learn",level:2},{value:"What Is Test Replay?",id:"What-Is-Test-Replay",level:2},{value:"Test Replay vs Screenshots and Videos",id:"Test-Replay-vs-Screenshots-and-Videos",level:3},{value:"How Does Test Replay Advance Your Workflow?",id:"How-Does-Test-Replay-Advance-Your-Workflow",level:3},{value:"Getting Started",id:"Getting-Started",level:2},{value:"Accessing Test Replay",id:"Accessing-Test-Replay",level:2},{value:"Debugging With Test Replay",id:"Debugging-With-Test-Replay",level:2},{value:"Run header",id:"Run-header",level:3},{value:"Command Log",id:"Command-Log",level:3},{value:"Developer Tools",id:"Developer-Tools",level:3},{value:"Replay Controls",id:"Replay-Controls",level:3},{value:"Opt-out of Test Replay",id:"Opt-out-of-Test-Replay",level:2},{value:"Troubleshooting",id:"Troubleshooting",level:2},{value:"Runner UI Notes",id:"Runner-UI-Notes",level:2},{value:"Runner UI",id:"Runner-UI",level:3},{value:"Problem",id:"Problem",level:3},{value:"Solution",id:"Solution",level:3},{value:"See also",id:"See-also",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{CloudFreePlan:n,DocsImage:i,DocsVideo:o,Icon:l}=s;return n||p("CloudFreePlan",!0),i||p("DocsImage",!0),o||p("DocsVideo",!0),l||p("Icon",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsxs)(s.h2,{id:"What-youll-learn",children:[(0,t.jsx)(l,{name:"graduation-cap"})," What you'll learn"]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"What Test Replay is and why you should use it"}),"\n",(0,t.jsx)(s.li,{children:"How to get started with Test Replay in Cypress Cloud"}),"\n",(0,t.jsx)(s.li,{children:"How to debug failed and flaky CI test runs more accurately and efficiently"}),"\n"]})]}),"\n",(0,t.jsxs)(s.admonition,{type:"caution",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(l,{name:"exclamation-triangle"})," Test Replay is available when recording tests\nto Cypress Cloud using Cypress ",(0,t.jsx)(s.code,{children:"v13"})," and up. See the ",(0,t.jsx)(s.a,{href:"/guides/references/changelog#13-0-0",children:"Cypress v13 changelog"}),"."]}),(0,t.jsx)(s.p,{children:"Test Replay currently supports Chromium-based browsers (Chrome, Edge, Electron) only."})]}),"\n",(0,t.jsx)(s.h2,{id:"What-Is-Test-Replay",children:"What Is Test Replay?"}),"\n",(0,t.jsxs)(s.p,{children:["Test Replay in Cypress Cloud allows developers to accurately and efficiently debug failed and flaky ",(0,t.jsx)(s.a,{href:"/guides/continuous-integration/introduction",children:"continuous integration"})," test runs. It captures every test run detail, enabling developers to replay it and inspect the DOM, network requests, console logs, JavaScript errors, and element rendering as they happened during ",(0,t.jsx)(s.code,{children:"cypress run"}),"."]}),"\n",(0,t.jsx)(o,{title:"Test Replay Product Demo",src:"https://youtube.com/embed/vFLShoCM8pA"}),"\n",(0,t.jsx)(s.h3,{id:"Test-Replay-vs-Screenshots-and-Videos",children:"Test Replay vs Screenshots and Videos"}),"\n",(0,t.jsxs)(s.p,{children:["Before Cypress ",(0,t.jsx)(s.code,{children:"v13"}),", test failures in CI have historically been captured through screenshots, videos, and stack trace outputs, but these artifacts provide limited information. Developers often need more context to understand the root cause of failures, requiring them to reproduce the issue locally, which may not always be possible due to environmental or network conditions. This knowledge gap between test failures and debugging capabilities leads to increased debugging time and potentially deploying unresolved bugs to production."]}),"\n",(0,t.jsx)(s.h3,{id:"How-Does-Test-Replay-Advance-Your-Workflow",children:"How Does Test Replay Advance Your Workflow?"}),"\n",(0,t.jsx)(s.p,{children:"Test Replay complements the existing visual artifacts provided by Cypress Cloud. It eliminates the need for local test replication by enabling developers to time-travel to the exact moment of test failure. Developers gain access to previously inaccessible details and feedback loops, enabling faster and more accurate debugging, and instilling confidence in handling test failures in CI. Replacing video recordings with Test Replay provides a superior debugging experience that is sharable and supports team collaboration with efficient workflows."}),"\n",(0,t.jsx)(s.h2,{id:"Getting-Started",children:"Getting Started"}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(l,{name:"check-circle"})," Test Replay is available to ",(0,t.jsx)(s.strong,{children:"all"})," Cypress Cloud plans\nat no additional cost, subject to usage limits."]}),(0,t.jsx)(n,{})]}),"\n",(0,t.jsxs)(s.p,{children:["Test Replay is automatically enabled when updating to ",(0,t.jsx)(s.code,{children:"v13"})," of Cypress. If desired, an opt-out is provided through project-level settings. Learn about what this means for capturing video of test failure in Cypress Cloud under ",(0,t.jsx)(s.a,{href:"#See-also",children:'"See also"'})," below."]}),"\n",(0,t.jsxs)(s.p,{children:["All you need to do after ",(0,t.jsx)(s.a,{href:"/guides/cloud/getting-started",children:"recording test runs"})," is log in to your Cypress Cloud account and leverage these new debugging capabilities. No additional software, configuration or changes to the existing test recording process is required. For example, you do not need to edit your ",(0,t.jsx)(s.a,{href:"/guides/references/configuration",children:"Cypress configuration"})," file or pass any flags or new commands when recording via ",(0,t.jsx)(s.a,{href:"/guides/guides/command-line#Commands",children:"the command line"})," in order to enable or use Test Replay."]}),"\n",(0,t.jsx)(s.h2,{id:"Accessing-Test-Replay",children:"Accessing Test Replay"}),"\n",(0,t.jsx)(s.p,{children:"Accessing the replay of your test is as simple as reviewing any other test artifact in Cypress Cloud."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Hover on a ",(0,t.jsx)(s.a,{href:"/guides/cloud/recorded-runs#Tests-for-Review",children:"test for review"})," under the Latest Runs Overview."]}),"\n",(0,t.jsx)(i,{src:"/img/guides/cloud/test-replay/replay_row_magnified.jpg",alt:"Run overview row"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Or navigate to the ",(0,t.jsx)(s.a,{href:"/guides/cloud/recorded-runs#Test-detail-sidebar",children:"test detail sidebar"})," header or above each attempt in the errors panel. The header option will replay the first failing test while the option above each attempt will replay the affiliated test."]}),"\n",(0,t.jsx)(i,{src:"/img/guides/cloud/test-replay/replay_sidebar_magnified.jpg",alt:"Run sidebar",width:"60%"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"Debugging-With-Test-Replay",children:"Debugging With Test Replay"}),"\n",(0,t.jsx)(s.p,{children:"Both options above display the Test Replay interface, which we'll unpack from top to bottom in more detail below."}),"\n",(0,t.jsx)(s.h3,{id:"Run-header",children:"Run header"}),"\n",(0,t.jsx)(s.p,{children:"The left side of the header displays the Cypress Cloud test run ID number (#), with the Git branch name along with the spec, platform and browser information. Hovering on this exposes additional test meta data."}),"\n",(0,t.jsx)(i,{src:"/img/guides/cloud/test-replay/test-replay-header.jpg",alt:"Test Replay header"}),"\n",(0,t.jsx)(s.h3,{id:"Command-Log",children:"Command Log"}),"\n",(0,t.jsxs)(s.p,{children:["The left side of the screen displays the ",(0,t.jsx)(s.a,{href:"/guides/core-concepts/cypress-app#Command-Log",children:"command log"})," just like in the Cypress app, where you can step through, inspect and ",(0,t.jsx)(s.a,{href:"/guides/core-concepts/cypress-app#Time-traveling",children:"time travel"})," debug your test."]}),"\n",(0,t.jsx)(i,{src:"/img/guides/cloud/test-replay/command-log.png",alt:"Test Replay Developer Tools panel",width:"60%"}),"\n",(0,t.jsx)(s.h3,{id:"Developer-Tools",children:"Developer Tools"}),"\n",(0,t.jsx)(s.p,{children:"Dive into network-level traffic, console events and inspect the application under test just as you can in the browser."}),"\n",(0,t.jsx)(i,{src:"/img/guides/cloud/test-replay/dev-tools.png",alt:"Test Replay Developer Tools panel",width:"60%"}),"\n",(0,t.jsx)(s.h3,{id:"Replay-Controls",children:"Replay Controls"}),"\n",(0,t.jsx)(s.p,{children:"Toggle each test attempt, play back errors at a variety of speeds or scrub through the captured error by dragging the playhead along the timeline."}),"\n",(0,t.jsx)(i,{src:"/img/guides/cloud/test-replay/scrubber.png",alt:"Test Replay scrubber controls"}),"\n",(0,t.jsx)(s.h2,{id:"Opt-out-of-Test-Replay",children:"Opt-out of Test Replay"}),"\n",(0,t.jsxs)(s.admonition,{type:"caution",children:[(0,t.jsxs)(s.p,{children:["Please refer to the ",(0,t.jsx)(s.a,{href:"https://cloud.cypress.io/terms-of-use",children:"Cypress Cloud Terms of Use"})," and our ",(0,t.jsx)(s.a,{href:"https://www.cypress.io/security/",children:"Security & Compliance"})," guide for specifics around reasonable use of Cypress Cloud, data storage and security at Cypress."]}),(0,t.jsx)(s.p,{children:"Test Replays, including the test data leveraged within your tests, are visible to everyone with access to your project."})]}),"\n",(0,t.jsx)(s.p,{children:'If you do not want to capture test data for replay and debugging purposes, simply "shut off" Test Replay in project settings.'}),"\n",(0,t.jsx)(i,{src:"/img/guides/cloud/test-replay/opt-out.png",alt:"Test Replay opt-out controls"}),"\n",(0,t.jsx)(s.h2,{id:"Troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"If Test Replay is not present or disabled in Cypress Cloud:"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Confirm runs have been recorded to Cypress Cloud using Cypress ",(0,t.jsx)(s.code,{children:"v13"})," or later."]}),"\n",(0,t.jsx)(s.li,{children:"Ensure tests were recorded using a Chromium-based browser (Chrome, Edge, Electron)."}),"\n",(0,t.jsx)(s.li,{children:"Check that Test Replay is enabled in Cypress Cloud project settings."}),"\n",(0,t.jsx)(s.li,{children:"Review the standard output of the test run to ensure there was not an error capturing Test Replay. If you encounter an error capturing Test Replay, please open an issue so that we can investigate."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.strong,{children:["Safari 16.3 and under users may experience errors when ",(0,t.jsx)(s.em,{children:"viewing"})," Test Replay"]})}),"\n",(0,t.jsx)(s.p,{children:"Cypress Cloud relies on certain web APIs implemented by specific browsers. Safari versions older than 16.4 may be missing certain APIs required for rendering Test Replay. To view Test Replay in Safari, version 16.4 and above may be used. This does not affect running tests or recording to Cypress Cloud."}),"\n",(0,t.jsx)(s.h2,{id:"Runner-UI-Notes",children:"Runner UI Notes"}),"\n",(0,t.jsx)(s.h3,{id:"Runner-UI",children:"Runner UI"}),"\n",(0,t.jsxs)(s.p,{children:["The Cypress ",(0,t.jsx)(s.a,{href:"/guides/core-concepts/cypress-app#Test-Runner",children:"Test Runner"}),' "Runner UI" is made up of the powerful ',(0,t.jsx)(s.a,{href:"/guides/core-concepts/cypress-app#Command-Log",children:"command log"})," which displays every command executed in your spec. The UI also includes the URL bar, browser selector, and the viewport size control above the application under test."]}),"\n",(0,t.jsxs)(s.p,{children:["The Runner UI is visible during ",(0,t.jsx)(s.code,{children:"cypress open"})," mode, but is also rendered (",(0,t.jsx)(s.a,{href:"/guides/guides/command-line#Options",children:"headless"}),"-ly) during ",(0,t.jsx)(s.code,{children:"cypress run"})," so that it displays within captured screenshots or videos, to assist in debugging CI failures."]}),"\n",(0,t.jsx)(s.h3,{id:"Problem",children:"Problem"}),"\n",(0,t.jsxs)(s.p,{children:["Rendering the Runner UI while running tests via ",(0,t.jsx)(s.code,{children:"cypress run"})," often has performance implications, resulting in a slower test runtime, especially on lower resourced machines."]}),"\n",(0,t.jsx)(s.h3,{id:"Solution",children:"Solution"}),"\n",(0,t.jsx)(s.p,{children:"With Test Replay, Cypress Cloud regenerates the entire UI for viewing the run and debugging CI failures. Additionally, displaying the Cypress command log in videos and screenshots is less valuable for users using Test Replay."}),"\n",(0,t.jsxs)(s.p,{children:["Therefore, as of Cypress ",(0,t.jsx)(s.code,{children:"v13"}),", the Runner UI is no longer rendered during ",(0,t.jsx)(s.code,{children:"cypress run"})," for users using Test Replay, with an option to opt-out of this behavior."]}),"\n",(0,t.jsxs)(s.p,{children:["If you'd like to render the Runner UI, you can turn on this behavior by passing ",(0,t.jsx)(s.code,{children:"--runner-ui"})," as a CLI flag. You may encounter a slower performance when turning this on, especially in lower resourced machines. Learn more about the ",(0,t.jsx)(s.code,{children:"--runner-ui"})," ",(0,t.jsx)(s.a,{href:"/guides/guides/command-line#cypress-run-runner-ui",children:"command line option"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"See-also",children:"See also"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/faq/questions/cloud-faq#Test-Replay",children:"Test Replay FAQ"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/guides/references/changelog#13-0-0",children:"Cypress v13 changelog"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/guides/references/configuration#Videos",children:"Cypress Default Video Configuration"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/guides/guides/screenshots-and-videos#Videos",children:"Cypress Video Artifacts"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>o});var t=n(7294);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);