"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[4304],{3830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=t(5893),s=t(1151);const o={title:"Svelte Component Testing",sidebar_position:10,sidebar_label:"Svelte Overview"},r=void 0,a={id:"guides/component-testing/svelte/overview",title:"Svelte Component Testing",description:"Framework Support",source:"@site/docs/guides/component-testing/svelte/overview.mdx",sourceDirName:"guides/component-testing/svelte",slug:"/guides/component-testing/svelte/overview",permalink:"/guides/component-testing/svelte/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/guides/component-testing/svelte/overview.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",sidebarPosition:10,frontMatter:{title:"Svelte Component Testing",sidebar_position:10,sidebar_label:"Svelte Overview"},sidebar:"guides",previous:{title:"Vue API",permalink:"/guides/component-testing/vue/api"},next:{title:"Svelte Examples",permalink:"/guides/component-testing/svelte/examples"}},l={},p=[{value:"Framework Support",id:"Framework-Support",level:2},{value:"Tutorial",id:"Tutorial",level:2},{value:"Installation",id:"Installation",level:2},{value:"Framework Configuration",id:"Framework-Configuration",level:2},{value:"Svelte with Vite",id:"Svelte-with-Vite",level:3},{value:"Vite Configuration",id:"Vite-Configuration",level:4},{value:"Svelte Vite Sample Apps",id:"Svelte-Vite-Sample-Apps",level:4},{value:"Svelte with Webpack",id:"Svelte-with-Webpack",level:3},{value:"Webpack Configuration",id:"Webpack-Configuration",level:4},{value:"Svelte Webpack Sample Apps",id:"Svelte-Webpack-Sample-Apps",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{CypressConfigFileTabs:t,DocsImage:o}=n;return t||u("CypressConfigFileTabs",!0),o||u("DocsImage",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"Framework-Support",children:"Framework Support"}),"\n",(0,i.jsx)(n.p,{children:"Cypress Component Testing supports Svelte 3+ in a variety of different\nframeworks:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Svelte-with-Vite",children:"Svelte with Vite"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#Svelte-with-Webpack",children:"Svelte with Webpack"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Svelte is currently in alpha support for component testing."})}),"\n",(0,i.jsx)(n.h2,{id:"Tutorial",children:"Tutorial"}),"\n",(0,i.jsxs)(n.p,{children:["Visit the\n",(0,i.jsx)(n.a,{href:"/guides/component-testing/getting-started",children:"Getting Started Guide"})," for a\nstep-by-step tutorial on adding component testing to any project and how to write your first tests."]}),"\n",(0,i.jsx)(n.h2,{id:"Installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"To get up and running with Cypress Component Testing in Svelte, install Cypress\ninto your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install cypress --save-dev\n"})}),"\n",(0,i.jsx)(n.p,{children:"Open Cypress:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx cypress open\n"})}),"\n",(0,i.jsx)(o,{src:"/img/guides/component-testing/select-test-type.jpg",caption:"Choose Component Testing"}),"\n",(0,i.jsx)(n.p,{children:"The Cypress Launchpad will guide you through configuring your project."}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["For a step-by-step guide on how to create a component test, refer to the\n",(0,i.jsx)(n.a,{href:"/guides/component-testing/getting-started",children:"Getting Started"})," guide."]}),(0,i.jsxs)(n.p,{children:["For usage and examples, visit the\n",(0,i.jsx)(n.a,{href:"/guides/component-testing/svelte/examples",children:"Svelte Examples"})," guide."]})]}),"\n",(0,i.jsx)(n.h2,{id:"Framework-Configuration",children:"Framework Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Cypress Component Testing works out of the box with ",(0,i.jsx)(n.a,{href:"https://vitejs.dev/",children:"Vite"}),",\nand a custom ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/",children:"Webpack"})," config. Cypress will\nautomatically detect one of these frameworks during setup and configure them\nproperly. The examples below are for reference purposes."]}),"\n",(0,i.jsx)(n.h3,{id:"Svelte-with-Vite",children:"Svelte with Vite"}),"\n",(0,i.jsx)(n.p,{children:"Cypress Component Testing works with Svelte apps that use Vite 2+ as the\nbundler."}),"\n",(0,i.jsx)(n.h4,{id:"Vite-Configuration",children:"Vite Configuration"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  component: {\n    devServer: {\n      framework: 'svelte',\n      bundler: 'vite',\n    },\n  },\n})\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\n\nexport default defineConfig({\n  component: {\n    devServer: {\n      framework: 'svelte',\n      bundler: 'vite',\n    },\n  },\n})\n"})})]}),"\n",(0,i.jsx)(n.h4,{id:"Svelte-Vite-Sample-Apps",children:"Svelte Vite Sample Apps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cypress-io/cypress-component-testing-apps/tree/main/svelte-vite-ts",children:"Svelte 3 Vite 3 with Typescript"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"Svelte-with-Webpack",children:"Svelte with Webpack"}),"\n",(0,i.jsx)(n.p,{children:"Cypress Component Testing works with Vue apps that use Webpack 4+ as the\nbundler."}),"\n",(0,i.jsx)(n.h4,{id:"Webpack-Configuration",children:"Webpack Configuration"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"",children:"const { defineConfig } = require('cypress')\nconst webpackConfig = require('./webpack.config')\n\nmodule.exports = defineConfig({\n  component: {\n    devServer: {\n      framework: 'svelte',\n      bundler: 'webpack',\n      // optionally pass in webpack config\n      webpackConfig,\n    },\n  },\n})\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:"",children:"import { defineConfig } from 'cypress'\nimport webpackConfig from './webpack.config'\n\nexport default defineConfig({\n  component: {\n    devServer: {\n      framework: 'svelte',\n      bundler: 'webpack',\n      // optionally pass in webpack config\n      webpackConfig,\n    },\n  },\n})\n"})})]}),"\n",(0,i.jsxs)(n.p,{children:["If you don't provide one, Cypress will try to infer your webpack config. If\nCypress cannot or you want to make modifications to your config, you can pass it\nin manually via the ",(0,i.jsx)(n.code,{children:"webpackConfig"})," option."]}),"\n",(0,i.jsx)(n.h4,{id:"Svelte-Webpack-Sample-Apps",children:"Svelte Webpack Sample Apps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cypress-io/cypress-component-testing-apps/tree/main/svelte-webpack-ts",children:"Svelte 3 Webpack 5 with Typescript"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);