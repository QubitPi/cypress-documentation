"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[1042],{6381:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var s=i(5893),t=i(1151);const l={title:"eq",slug:"/api/commands/eq"},r=void 0,d={id:"api/queries/eq",title:"eq",description:"Get A DOM element at a specific index in an array of elements.",source:"@site/docs/api/queries/eq.mdx",sourceDirName:"api/queries",slug:"/api/commands/eq",permalink:"/api/commands/eq",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/api/queries/eq.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"eq",slug:"/api/commands/eq"},sidebar:"api",previous:{title:"document",permalink:"/api/commands/document"},next:{title:"filter",permalink:"/api/commands/filter"}},c={},a=[{value:"Syntax",id:"Syntax",level:2},{value:"Usage",id:"Usage",level:3},{value:"Arguments",id:"Arguments",level:3},{value:"Yields <Icon></Icon>",id:"Yields",level:3},{value:"Examples",id:"Examples",level:2},{value:"Index",id:"Index",level:3},{value:"Find the 2nd element within the elements",id:"Find-the-2nd-element-within-the-elements",level:4},{value:"Make an assertion on the 3rd row of a table",id:"Make-an-assertion-on-the-3rd-row-of-a-table",level:4},{value:"Index From End",id:"Index-From-End",level:3},{value:"Find the 2nd from the last element within the elements",id:"Find-the-2nd-from-the-last-element-within-the-elements",level:4},{value:"Rules",id:"Rules",level:2},{value:"Requirements <Icon></Icon>",id:"Requirements",level:3},{value:"Assertions <Icon></Icon>",id:"Assertions",level:3},{value:"Timeouts <Icon></Icon>",id:"Timeouts",level:3},{value:"Command Log",id:"Command-Log",level:2},{value:"See also",id:"See-also",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{DocsImage:i,Icon:l}=n;return i||m("DocsImage",!0),l||m("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Get A DOM element at a specific index in an array of elements."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The querying behavior of this command matches exactly how\n",(0,s.jsx)(n.a,{href:"https://api.jquery.com/eq",children:(0,s.jsx)(n.code,{children:".eq()"})})," works in jQuery."]})}),"\n",(0,s.jsx)(n.h2,{id:"Syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:".eq(index)\n.eq(indexFromEnd)\n.eq(index, options)\n.eq(indexFromEnd, options)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(l,{name:"check-circle",color:"green"})," ",(0,s.jsx)(n.strong,{children:"Correct Usage"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('tbody>tr').eq(0) // Yield first 'tr' in 'tbody'\ncy.get('ul>li').eq(4) // Yield fifth 'li' in 'ul'\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(l,{name:"exclamation-triangle",color:"red"})," ",(0,s.jsx)(n.strong,{children:"Incorrect Usage"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.eq(0) // Errors, cannot be chained off 'cy'\ncy.getCookies().eq(4) // Errors, 'getCookies' does not yield DOM element\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(l,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["index ",(0,s.jsx)(n.em,{children:"(Number)"})]})]}),"\n",(0,s.jsx)(n.p,{children:"A number indicating the index to find the element at within an array of\nelements. Starts with 0."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(l,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["indexFromEnd ",(0,s.jsx)(n.em,{children:"(Number)"})]})]}),"\n",(0,s.jsx)(n.p,{children:"A negative number indicating the index position from the end to find the element\nat within an array of elements."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(l,{name:"angle-right"})," ",(0,s.jsxs)(n.strong,{children:["options ",(0,s.jsx)(n.em,{children:"(Object)"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Pass in an options object to change the default behavior of ",(0,s.jsx)(n.code,{children:".eq()"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"log"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsxs)(n.td,{children:["Displays the command in the ",(0,s.jsx)(n.a,{href:"/guides/core-concepts/cypress-app#Command-Log",children:"Command log"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"timeout"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/guides/references/configuration#Timeouts",children:(0,s.jsx)(n.code,{children:"defaultCommandTimeout"})})}),(0,s.jsxs)(n.td,{children:["Time to wait for ",(0,s.jsx)(n.code,{children:".eq()"})," to resolve before ",(0,s.jsx)(n.a,{href:"#Timeouts",children:"timing out"})]})]})]})]}),"\n",(0,s.jsxs)(n.h3,{id:"Yields",children:["Yields ",(0,s.jsx)(n.a,{href:"/guides/core-concepts/introduction-to-cypress#Subject-Management",children:(0,s.jsx)(l,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".eq()"})," yields the new DOM element it found."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".eq()"})," is a query, and it is ",(0,s.jsx)(n.em,{children:"safe"})," to chain further commands."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"Index",children:"Index"}),"\n",(0,s.jsx)(n.h4,{id:"Find-the-2nd-element-within-the-elements",children:"Find the 2nd element within the elements"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<ul>\n  <li>tabby</li>\n  <li>siamese</li>\n  <li>persian</li>\n  <li>sphynx</li>\n  <li>burmese</li>\n</ul>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('li').eq(1).should('contain', 'siamese') // true\n"})}),"\n",(0,s.jsx)(n.h4,{id:"Make-an-assertion-on-the-3rd-row-of-a-table",children:"Make an assertion on the 3rd row of a table"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<table>\n  <tr>\n    <th>Breed</th>\n    <th>Origin</th>\n  </tr>\n  <tr>\n    <td>Siamese</td>\n    <td>Thailand</td>\n  </tr>\n  <tr>\n    <td>Sphynx</td>\n    <td>Canada</td>\n  </tr>\n  <tr>\n    <td>Persian</td>\n    <td>Iran</td>\n  </tr>\n</table>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('tr').eq(2).should('contain', 'Canada') //true\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Index-From-End",children:"Index From End"}),"\n",(0,s.jsx)(n.h4,{id:"Find-the-2nd-from-the-last-element-within-the-elements",children:"Find the 2nd from the last element within the elements"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<ul>\n  <li>tabby</li>\n  <li>siamese</li>\n  <li>persian</li>\n  <li>sphynx</li>\n  <li>burmese</li>\n</ul>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('li').eq(-2).should('contain', 'sphynx') // true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"Rules",children:"Rules"}),"\n",(0,s.jsxs)(n.h3,{id:"Requirements",children:["Requirements ",(0,s.jsx)(n.a,{href:"/guides/core-concepts/introduction-to-cypress#Chains-of-Commands",children:(0,s.jsx)(l,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".eq()"})," requires being chained off a command that yields DOM element(s)."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Assertions",children:["Assertions ",(0,s.jsx)(n.a,{href:"/guides/core-concepts/introduction-to-cypress#Assertions",children:(0,s.jsx)(l,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".eq()"})," will automatically ",(0,s.jsx)(n.a,{href:"/guides/core-concepts/retry-ability",children:"retry"})," until\nthe element(s)\n",(0,s.jsx)(n.a,{href:"/guides/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".eq()"})," will automatically ",(0,s.jsx)(n.a,{href:"/guides/core-concepts/retry-ability",children:"retry"})," until\nall chained assertions have passed."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"Timeouts",children:["Timeouts ",(0,s.jsx)(n.a,{href:"/guides/core-concepts/introduction-to-cypress#Timeouts",children:(0,s.jsx)(l,{name:"question-circle"})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".eq()"})," can time out waiting for the element(s) to\n",(0,s.jsx)(n.a,{href:"/guides/core-concepts/introduction-to-cypress#Implicit-Assertions",children:"exist in the DOM"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".eq()"})," can time out waiting for assertions you've added to pass."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Command-Log",children:"Command Log"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Find the 4th ",(0,s.jsx)(n.code,{children:"<li>"})," in the navigation"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"cy.get('.left-nav.nav').find('>li').eq(3)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The commands above will display in the Command Log as:"}),"\n",(0,s.jsx)(i,{src:"/img/api/eq/find-element-at-index.png",alt:"Command log eq"}),"\n",(0,s.jsxs)(n.p,{children:["When clicking on the ",(0,s.jsx)(n.code,{children:"eq"})," command within the command log, the console outputs\nthe following:"]}),"\n",(0,s.jsx)(i,{src:"/img/api/eq/see-element-and-list-when-using-eq.png",alt:"console.log eq"}),"\n",(0,s.jsx)(n.h2,{id:"See-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/first",children:(0,s.jsx)(n.code,{children:".first()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/last",children:(0,s.jsx)(n.code,{children:".last()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/next",children:(0,s.jsx)(n.code,{children:".next()"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/commands/prev",children:(0,s.jsx)(n.code,{children:".prev()"})})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>r});var s=i(7294);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);