"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[7656],{1508:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=i(5893),t=i(1151);const r={title:"viewport"},o=void 0,d={id:"api/commands/viewport",title:"viewport",description:"Control the size and orientation of the screen for your application.",source:"@site/docs/api/commands/viewport.mdx",sourceDirName:"api/commands",slug:"/api/commands/viewport",permalink:"/api/commands/viewport",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/commands/viewport.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"viewport"},sidebar:"api",previous:{title:"tick",permalink:"/api/commands/tick"},next:{title:"visit",permalink:"/api/commands/visit"}},l={},c=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"Width, Height",id:"Width-Height",level:3},{value:"Resize the viewport to 1024px x 768px",id:"Resize-the-viewport-to-1024px-x-768px",level:4},{value:"Organize desktop vs mobile tests separately",id:"Organize-desktop-vs-mobile-tests-separately",level:4},{value:"Dynamically test multiple viewports",id:"Dynamically-test-multiple-viewports",level:4},{value:"Preset",id:"Preset",level:3},{value:"Resize the viewport to iPhone 6 width and height",id:"Resize-the-viewport-to-iPhone-6-width-and-height",level:4},{value:"Orientation",id:"Orientation",level:3},{value:"Change the orientation to landscape",id:"Change-the-orientation-to-landscape",level:4},{value:"Notes",id:"Notes",level:2},{value:"devicePixelRatio",id:"devicePixelRatio",level:3},{value:"<code>devicePixelRatio</code> is not simulated",id:"devicePixelRatio-is-not-simulated",level:4},{value:"Restores",id:"Restores",level:3},{value:"Cypress will restore the viewport in the snapshot",id:"Cypress-will-restore-the-viewport-in-the-snapshot",level:4},{value:"Defaults",id:"Defaults",level:3},{value:"Default sizing",id:"Default-sizing",level:4},{value:"Scaling",id:"Scaling",level:3},{value:"Auto Scaling",id:"Auto-Scaling",level:4},{value:"Reset viewport via <code>Cypress.config()</code>",id:"Reset-viewport-via-Cypressconfig",level:3},{value:"Set viewport in the test configuration",id:"Set-viewport-in-the-test-configuration",level:3},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"History",id:"History",level:2},{value:"See also",id:"See-also",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{CypressConfigFileTabs:i,DocsImage:r,E2EOrCtTabs:o,Icon:d}=n;return i||p("CypressConfigFileTabs",!0),r||p("DocsImage",!0),o||p("E2EOrCtTabs",!0),d||p("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Control the size and orientation of the screen for your application."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You can set the viewport's width and height globally by defining ",(0,s.jsx)(n.code,{children:"viewportWidth"}),"\nand ",(0,s.jsx)(n.code,{children:"viewportHeight"})," in the\n",(0,s.jsx)(n.a,{href:"/guides/references/configuration",children:"Cypress configuration"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.viewport(width, height)\ncy.viewport(preset, orientation)\ncy.viewport(width, height, options)\ncy.viewport(preset, orientation, options)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(d,{name:"check-circle",color:"green"})," ",(0,s.jsx)(n.strong,{children:"Correct Usage"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.viewport(550, 750) // Set viewport to 550px x 750px\ncy.viewport('iphone-6') // Set viewport to 375px x 667px\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(d,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["width ",(0,s.jsx)(n.em,{children:"(Number)"})]})]}),"\n",(0,s.jsx)(n.p,{children:"Width of viewport in pixels (must be a non-negative, finite number)."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(d,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["height ",(0,s.jsx)(n.em,{children:"(Number)"})]})]}),"\n",(0,s.jsx)(n.p,{children:"Height of viewport in pixels (must be a non-negative, finite number)."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(d,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["preset ",(0,s.jsx)(n.em,{children:"(String)"})]})]}),"\n",(0,s.jsx)(n.p,{children:"A preset dimension to set the viewport. Preset supports the following options:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Preset"}),(0,s.jsx)(n.th,{children:"width"}),(0,s.jsx)(n.th,{children:"height"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ipad-2"})}),(0,s.jsx)(n.td,{children:"768"}),(0,s.jsx)(n.td,{children:"1024"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ipad-mini"})}),(0,s.jsx)(n.td,{children:"768"}),(0,s.jsx)(n.td,{children:"1024"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"iphone-3"})}),(0,s.jsx)(n.td,{children:"320"}),(0,s.jsx)(n.td,{children:"480"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"iphone-4"})}),(0,s.jsx)(n.td,{children:"320"}),(0,s.jsx)(n.td,{children:"480"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"iphone-5"})}),(0,s.jsx)(n.td,{children:"320"}),(0,s.jsx)(n.td,{children:"568"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"iphone-6"})}),(0,s.jsx)(n.td,{children:"375"}),(0,s.jsx)(n.td,{children:"667"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"iphone-6+"})}),(0,s.jsx)(n.td,{children:"414"}),(0,s.jsx)(n.td,{children:"736"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"iphone-7"})}),(0,s.jsx)(n.td,{children:"375"}),(0,s.jsx)(n.td,{children:"667"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"iphone-8"})}),(0,s.jsx)(n.td,{children:"375"}),(0,s.jsx)(n.td,{children:"667"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"iphone-x"})}),(0,s.jsx)(n.td,{children:"375"}),(0,s.jsx)(n.td,{children:"812"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"iphone-xr"})}),(0,s.jsx)(n.td,{children:"414"}),(0,s.jsx)(n.td,{children:"896"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"iphone-se2"})}),(0,s.jsx)(n.td,{children:"375"}),(0,s.jsx)(n.td,{children:"667"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"macbook-11"})}),(0,s.jsx)(n.td,{children:"1366"}),(0,s.jsx)(n.td,{children:"768"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"macbook-13"})}),(0,s.jsx)(n.td,{children:"1280"}),(0,s.jsx)(n.td,{children:"800"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"macbook-15"})}),(0,s.jsx)(n.td,{children:"1440"}),(0,s.jsx)(n.td,{children:"900"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"macbook-16"})}),(0,s.jsx)(n.td,{children:"1536"}),(0,s.jsx)(n.td,{children:"960"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"samsung-note9"})}),(0,s.jsx)(n.td,{children:"414"}),(0,s.jsx)(n.td,{children:"846"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"samsung-s10"})}),(0,s.jsx)(n.td,{children:"360"}),(0,s.jsx)(n.td,{children:"760"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(d,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["orientation ",(0,s.jsx)(n.em,{children:"(String)"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["The orientation of the screen. The ",(0,s.jsx)(n.em,{children:"default orientation"})," is ",(0,s.jsx)(n.code,{children:"portrait"}),". Pass\n",(0,s.jsx)(n.code,{children:"landscape"})," as the orientation to reverse the width/height."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(d,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["options ",(0,s.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Pass in an options object to change the default behavior of ",(0,s.jsx)(n.code,{children:"cy.viewport()"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"log"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{children:["Displays the command in the ",(0,s.jsx)(n.a,{href:"/guides/core-concepts/cypress-app#Command-Log",children:"Command log"})]})]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"Yields",children:["Yields ",(0,s.jsx)(n.a,{href:"/guides/core-concepts/introduction-to-cypress#Subject-Management",children:(0,s.jsx)(d,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cy.viewport()"})," yields ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"Width-Height",children:"Width, Height"}),"\n",(0,s.jsx)(n.h4,{id:"Resize-the-viewport-to-1024px-x-768px",children:"Resize the viewport to 1024px x 768px"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.viewport(1024, 768)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"Organize-desktop-vs-mobile-tests-separately",children:"Organize desktop vs mobile tests separately"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"describe('Nav Menus', () => {\n  context('720p resolution', () => {\n    beforeEach(() => {\n      // run these tests as if in a desktop\n      // browser with a 720p monitor\n      cy.viewport(1280, 720)\n    })\n\n    it('displays full header', () => {\n      cy.get('nav .desktop-menu').should('be.visible')\n      cy.get('nav .mobile-menu').should('not.be.visible')\n    })\n  })\n\n  context('iphone-5 resolution', () => {\n    beforeEach(() => {\n      // run these tests as if in a mobile browser\n      // and ensure our responsive UI is correct\n      cy.viewport('iphone-5')\n    })\n\n    it('displays mobile menu on click', () => {\n      cy.get('nav .desktop-menu').should('not.be.visible')\n      cy.get('nav .mobile-menu')\n        .should('be.visible')\n        .find('i.hamburger')\n        .click()\n\n      cy.get('ul.slideout-menu').should('be.visible')\n    })\n  })\n})\n"})}),"\n",(0,s.jsx)(n.h4,{id:"Dynamically-test-multiple-viewports",children:"Dynamically test multiple viewports"}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const sizes = ['iphone-6', 'ipad-2', [1024, 768]]\n\ndescribe('Logo', () => {\n  sizes.forEach((size) => {\n    // make assertions on the logo using\n    // an array of different viewports\n    it(`Should display logo on ${size} screen`, () => {\n      if (Cypress._.isArray(size)) {\n        cy.viewport(size[0], size[1])\n      } else {\n        cy.viewport(size)\n      }\n\n      cy.visit('https://example.cypress.io')\n      cy.get('#logo').should('be.visible')\n    })\n  })\n})\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const sizes = ['iphone-6', 'ipad-2', [1024, 768]]\n\ndescribe('Logo', () => {\n  sizes.forEach((size) => {\n    // make assertions on the logo using\n    // an array of different viewports\n    it(`Should display logo on ${size} screen`, () => {\n      if (Cypress._.isArray(size)) {\n        cy.viewport(size[0], size[1])\n      } else {\n        cy.viewport(size)\n      }\n\n      cy.mount(<MyComponent />)\n      cy.get('#logo').should('be.visible')\n    })\n  })\n})\n"})})]}),"\n",(0,s.jsx)(r,{src:"/img/api/viewport/loop-through-an-array-of-multiple-viewports.png",alt:"Command Log of multiple viewports"}),"\n",(0,s.jsx)(n.h3,{id:"Preset",children:"Preset"}),"\n",(0,s.jsx)(n.h4,{id:"Resize-the-viewport-to-iPhone-6-width-and-height",children:"Resize the viewport to iPhone 6 width and height"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.viewport('iphone-6') // viewport will change to 414px x 736px\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Orientation",children:"Orientation"}),"\n",(0,s.jsx)(n.h4,{id:"Change-the-orientation-to-landscape",children:"Change the orientation to landscape"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// the viewport will now be changed to 736px x 414px\n// and simulates the user holding the iPhone in landscape\ncy.viewport('iphone-6', 'landscape')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"Notes",children:"Notes"}),"\n",(0,s.jsx)(n.h3,{id:"devicePixelRatio",children:"devicePixelRatio"}),"\n",(0,s.jsxs)(n.h4,{id:"devicePixelRatio-is-not-simulated",children:[(0,s.jsx)(n.code,{children:"devicePixelRatio"})," is not simulated"]}),"\n",(0,s.jsxs)(n.p,{children:["Follow ",(0,s.jsx)(n.a,{href:"https://github.com/cypress-io/cypress/issues/7075",children:"#7075"})," if you need\nthis supported."]}),"\n",(0,s.jsx)(n.h3,{id:"Restores",children:"Restores"}),"\n",(0,s.jsx)(n.h4,{id:"Cypress-will-restore-the-viewport-in-the-snapshot",children:"Cypress will restore the viewport in the snapshot"}),"\n",(0,s.jsx)(n.p,{children:"When hovering over each command, Cypress will automatically display the snapshot\nin the viewport dimensions that existed when that command ran."}),"\n",(0,s.jsx)(n.h3,{id:"Defaults",children:"Defaults"}),"\n",(0,s.jsx)(n.h4,{id:"Default-sizing",children:"Default sizing"}),"\n",(0,s.jsxs)(n.p,{children:["By default, until you issue a ",(0,s.jsx)(n.code,{children:"cy.viewport()"})," command, Cypress sets the width to\n",(0,s.jsx)(n.code,{children:"1000px"})," and the height to ",(0,s.jsx)(n.code,{children:"660px"})," by default."]}),"\n",(0,s.jsxs)(n.p,{children:["You can\n",(0,s.jsx)(n.a,{href:"/guides/references/configuration#Viewport",children:"change these default dimensions"})," by\nadding the following to your Cypress configuration:"]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  viewportWidth: 1000,\n  viewportHeight: 660,\n})\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  viewportWidth: 1000,\n  viewportHeight: 660,\n})\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"Additionally, Cypress automatically sets the viewport to its default size\nbetween each test."}),"\n",(0,s.jsx)(n.h3,{id:"Scaling",children:"Scaling"}),"\n",(0,s.jsx)(n.h4,{id:"Auto-Scaling",children:"Auto Scaling"}),"\n",(0,s.jsx)(n.p,{children:"By default, if your screen is not large enough to display all of the current\ndimension's pixels, Cypress will scale and center your application within the\npreview pane to accommodate."}),"\n",(0,s.jsx)(n.p,{children:"Scaling the app should not affect any calculations or behavior of your\napplication (in fact it won't even know it's being scaled)."}),"\n",(0,s.jsxs)(n.p,{children:["The upsides to this are that tests should consistently pass or fail regardless\nof a developers' screen size. Tests will also consistently run in ",(0,s.jsx)(n.code,{children:"CI"})," because\nall of the viewports will be the same no matter what machine Cypress runs on."]}),"\n",(0,s.jsxs)(n.h3,{id:"Reset-viewport-via-Cypressconfig",children:["Reset viewport via ",(0,s.jsx)(n.code,{children:"Cypress.config()"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can change the size of the viewport height and width for the remainder of\nthe tests by setting the new values for ",(0,s.jsx)(n.code,{children:"viewportHeight"})," or ",(0,s.jsx)(n.code,{children:"viewportWidth"}),"\nwithin ",(0,s.jsx)(n.a,{href:"/api/cypress-api/config",children:"Cypress.config()"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Cypress.config('viewportWidth', 800)\nCypress.config('viewportWidth') // => 800\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Set-viewport-in-the-test-configuration",children:"Set viewport in the test configuration"}),"\n",(0,s.jsxs)(n.p,{children:["You can configure the size of the viewport height and width within a suite or\ntest by passing the new configuration value within the\n",(0,s.jsx)(n.a,{href:"/guides/references/configuration#Test-Configuration",children:"test configuration"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This will set the height and width throughout the duration of the tests, then\nreturn it to the default ",(0,s.jsx)(n.code,{children:"viewportHeight"})," and ",(0,s.jsx)(n.code,{children:"viewportWidth"})," when complete."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"describe(\n  'page display on medium size screen',\n  {\n    viewportHeight: 1000,\n    viewportWidth: 400,\n  },\n  () => {\n    it('does not display sidebar', () => {\n      cy.get('#sidebar').should('not.be.visible')\n    })\n\n    it('shows hamburger menu', () => {\n      cy.get('#header').find('i.menu').should('be.visible')\n    })\n  }\n)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"Rules",children:"Rules"}),"\n",(0,s.jsxs)(n.h3,{id:"Requirements",children:["Requirements ",(0,s.jsx)(n.a,{href:"/guides/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,s.jsx)(d,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cy.viewport()"})," requires being chained off of ",(0,s.jsx)(n.code,{children:"cy"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Assertions",children:["Assertions ",(0,s.jsx)(n.a,{href:"/guides/core-concepts/introduction-to-cypress#Assertions",children:(0,s.jsx)(d,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cy.viewport()"})," cannot have any assertions chained."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Timeouts",children:["Timeouts ",(0,s.jsx)(n.a,{href:"/guides/core-concepts/introduction-to-cypress#Timeouts",children:(0,s.jsx)(d,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cy.viewport()"})," cannot time out."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"Change viewport size to test responsive nav"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('#navbar').should('be.visible')\n\ncy.viewport(320, 480)\n\n// the navbar should have collapse since our screen is smaller\ncy.get('#navbar').should('not.be.visible')\ncy.get('.navbar-toggle').should('be.visible').click()\ncy.get('.nav').find('a').should('be.visible')\n"})}),"\n",(0,s.jsx)(n.p,{children:"The commands above will display in the Command Log as:"}),"\n",(0,s.jsx)(r,{src:"/img/api/viewport/viewport-size-width-and-height-changes-and-is-shown-in-the-commands.png",alt:"Command Log viewport"}),"\n",(0,s.jsxs)(n.p,{children:["When clicking on ",(0,s.jsx)(n.code,{children:"viewport"})," within the command log, the console outputs the\nfollowing:"]}),"\n",(0,s.jsx)(r,{src:"/img/api/viewport/console-log-shows-width-and-height-of-tested-viewport.png",alt:"Console Log viewport"}),"\n",(0,s.jsx)(n.h2,{id:"History",children:"History"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Version"}),(0,s.jsx)(n.th,{children:"Changes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/guides/references/changelog#5-5-0",children:"5.5.0"})}),(0,s.jsxs)(n.td,{children:["Added support for ",(0,s.jsx)(n.code,{children:"macbook-16"})," preset."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/guides/references/changelog#5-4-0",children:"5.4.0"})}),(0,s.jsxs)(n.td,{children:["Added support for presets ",(0,s.jsx)(n.code,{children:"iphone-7"}),", ",(0,s.jsx)(n.code,{children:"iphone-8"}),", and ",(0,s.jsx)(n.code,{children:"iphone-se2"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/guides/references/changelog#3-8-0",children:"3.8.0"})}),(0,s.jsxs)(n.td,{children:["Removed max viewport size and lowered min viewport size to ",(0,s.jsx)(n.code,{children:"0"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/guides/references/changelog#3-5-0",children:"3.5.0"})}),(0,s.jsxs)(n.td,{children:["Added support for presets ",(0,s.jsx)(n.code,{children:"iphone-xr"}),", ",(0,s.jsx)(n.code,{children:"iphone-x"}),", ",(0,s.jsx)(n.code,{children:"samsung-s10"}),", and ",(0,s.jsx)(n.code,{children:"samsung-note9"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/guides/references/changelog#3-5-0",children:"3.5.0"})}),(0,s.jsxs)(n.td,{children:["Increased max viewport size to ",(0,s.jsx)(n.code,{children:"4000"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/guides/references/changelog#0-9-0",children:"0.9.0"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"cy.viewport()"})," command added"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Read blog post\n",(0,s.jsx)(n.a,{href:"https://www.cypress.io/blog/2019/12/06/use-meaningful-smoke-tests/",children:"Use meaningful smoke tests"}),"\nwhere we run the same test with different viewport resolutions"]}),"\n",(0,s.jsxs)(n.li,{children:["Read blog post\n",(0,s.jsx)(n.a,{href:"https://www.cypress.io/blog/2021/03/01/generate-high-resolution-videos-and-screenshots/",children:"Generate High-Resolution Videos and Screenshots"}),"\nto learn how to change the browser's window size to capture screenshots and\nvideos with more detail"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/guides/references/configuration",children:"Configuration"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/cypress-api/config",children:"Cypress.config()"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var s=i(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);