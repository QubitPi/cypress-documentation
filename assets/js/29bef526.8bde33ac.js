"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[8554],{6576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(5893),i=n(1151);const r={title:"Cypress.Blob"},l=void 0,a={id:"api/utilities/blob",title:"Cypress.Blob",description:"Cypress automatically includes a",source:"@site/docs/api/utilities/blob.mdx",sourceDirName:"api/utilities",slug:"/api/utilities/blob",permalink:"/api/utilities/blob",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/utilities/blob.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"Cypress.Blob"},sidebar:"api",previous:{title:"Cypress.$",permalink:"/api/utilities/$"},next:{title:"Cypress.Buffer",permalink:"/api/utilities/buffer"}},o={},d=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Examples",id:"Examples",level:2},{value:"Image Fixture",id:"Image-Fixture",level:3},{value:"Using an image fixture for jQuery plugin upload",id:"Using-an-image-fixture-for-jQuery-plugin-upload",level:4},{value:"Getting dataUrl string",id:"Getting-dataUrl-string",level:3},{value:"Create an <code>img</code> element and set its <code>src</code> to the <code>dataUrl</code>",id:"Create-an-img-element-and-set-its-src-to-the-dataUrl",level:4},{value:"History",id:"History",level:2},{value:"See also",id:"See-also",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Icon:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Cypress automatically includes a\n",(0,s.jsx)(t.a,{href:"https://github.com/nolanlawson/blob-util",children:"Blob"})," library and exposes it as\n",(0,s.jsx)(t.code,{children:"Cypress.Blob"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Use ",(0,s.jsx)(t.code,{children:"Cypress.Blob"})," to convert ",(0,s.jsx)(t.code,{children:"base64"})," strings to Blob objects. Useful for\ntesting uploads."]}),"\n",(0,s.jsx)(t.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"Cypress.Blob.method()\n"})}),"\n",(0,s.jsx)(t.h3,{id:"Usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(n,{name:"check-circle",color:"green"})," ",(0,s.jsx)(t.strong,{children:"Correct Usage"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"Cypress.Blob.method()\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(n,{name:"exclamation-triangle",color:"red"})," ",(0,s.jsx)(t.strong,{children:"Incorrect Usage"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"cy.Blob.method() // Errors, cannot be chained off 'cy'\n"})}),"\n",(0,s.jsx)(t.h2,{id:"Examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"Image-Fixture",children:"Image Fixture"}),"\n",(0,s.jsx)(t.h4,{id:"Using-an-image-fixture-for-jQuery-plugin-upload",children:"Using an image fixture for jQuery plugin upload"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"// programmatically upload the logo\ncy.fixture('images/logo.png').as('logo')\ncy.get('input[type=file]').then(function ($input) {\n  // convert the logo base64 string to a blob\n  const blob = Cypress.Blob.base64StringToBlob(this.logo, 'image/png')\n\n  // pass the blob to the fileupload jQuery plugin\n  // https://github.com/blueimp/jQuery-File-Upload\n  // used in your application's code\n  // which initiates a programmatic upload\n  $input.fileupload('add', { files: blob })\n})\n"})}),"\n",(0,s.jsx)(t.h3,{id:"Getting-dataUrl-string",children:"Getting dataUrl string"}),"\n",(0,s.jsxs)(t.h4,{id:"Create-an-img-element-and-set-its-src-to-the-dataUrl",children:["Create an ",(0,s.jsx)(t.code,{children:"img"})," element and set its ",(0,s.jsx)(t.code,{children:"src"})," to the ",(0,s.jsx)(t.code,{children:"dataUrl"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"return Cypress.Blob.imgSrcToDataURL('/assets/img/logo.png').then((dataUrl) => {\n  const img = Cypress.$('<img />', { src: dataUrl })\n\n  cy.get('.utility-blob').then(($div) => {\n    // append the image\n    $div.append(img)\n  })\n  cy.get('.utility-blob img').click().should('have.attr', 'src', dataUrl)\n})\n"})}),"\n",(0,s.jsx)(t.h2,{id:"History",children:"History"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Version"}),(0,s.jsx)(t.th,{children:"Changes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/guides/references/changelog",children:"5.0.0"})}),(0,s.jsxs)(t.td,{children:["Return type of ",(0,s.jsx)(t.code,{children:"arrayBufferToBlob"}),", ",(0,s.jsx)(t.code,{children:"base64StringToBlob"}),", ",(0,s.jsx)(t.code,{children:"binaryStringToBlob"}),", and ",(0,s.jsx)(t.code,{children:"dataURLToBlob"})," methods changed from ",(0,s.jsx)(t.code,{children:"Promise<Blob>"})," to ",(0,s.jsx)(t.code,{children:"Blob"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/guides/references/changelog",children:"5.0.0"})}),(0,s.jsxs)(t.td,{children:["Added ",(0,s.jsx)(t.code,{children:"arrayBufferToBinaryString"}),", ",(0,s.jsx)(t.code,{children:"binaryStringToArrayBuffer"})," methods."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"See-also",children:"See also"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/guides/references/bundled-libraries",children:"Bundled Libraries"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>l});var s=n(7294);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);