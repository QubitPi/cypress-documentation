"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[4136],{5750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(5893),r=n(1151);const s={title:"Working with GraphQL: Cypress Guide",sidebar_label:"Working with GraphQL",description:"Working with GraphQL: Cypress Guide. Efficiently work with GraphQL in Cypress for enhanced testing, ensuring smooth integration and accurate results",slug:"/guides/end-to-end-testing/working-with-graphql"},a="Working with GraphQL",o={id:"guides/end-to-end-testing/testing-strategies/working-with-graphql",title:"Working with GraphQL: Cypress Guide",description:"Working with GraphQL: Cypress Guide. Efficiently work with GraphQL in Cypress for enhanced testing, ensuring smooth integration and accurate results",source:"@site/docs/guides/end-to-end-testing/testing-strategies/working-with-graphql.mdx",sourceDirName:"guides/end-to-end-testing/testing-strategies",slug:"/guides/end-to-end-testing/working-with-graphql",permalink:"/guides/end-to-end-testing/working-with-graphql",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/guides/end-to-end-testing/testing-strategies/working-with-graphql.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"Working with GraphQL: Cypress Guide",sidebar_label:"Working with GraphQL",description:"Working with GraphQL: Cypress Guide. Efficiently work with GraphQL in Cypress for enhanced testing, ensuring smooth integration and accurate results",slug:"/guides/end-to-end-testing/working-with-graphql"},sidebar:"guides",previous:{title:"Social Authentication",permalink:"/guides/end-to-end-testing/social-authentication"},next:{title:"Migrating from Protractor to Cypress",permalink:"/guides/end-to-end-testing/protractor-to-cypress"}},l={},c=[{value:"<Icon></Icon> What you&#39;ll learn",id:"What-youll-learn",level:2},{value:"Alias multiple queries or mutations",id:"Alias-multiple-queries-or-mutations",level:2},{value:"Expectations for Query or Mutation Results",id:"Expectations-for-Query-or-Mutation-Results",level:2},{value:"Modifying a Query or Mutation Response",id:"Modifying-a-Query-or-Mutation-Response",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Icon:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"Working-with-GraphQL",children:"Working with GraphQL"}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.h2,{id:"What-youll-learn",children:[(0,i.jsx)(n,{name:"graduation-cap"})," What you'll learn"]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Best practices to alias multiple GraphQL queries or mutations for a group of\ntests."}),"\n",(0,i.jsx)(t.li,{children:"Overriding an existing intercept to modify the query or mutation response"}),"\n",(0,i.jsx)(t.li,{children:"Asserting against a GraphQL query or mutation response"}),"\n"]})]}),"\n",(0,i.jsx)(t.p,{children:"The strategies below follow best known practices for waiting and asserting\nagainst GraphQL queries or mutations."}),"\n",(0,i.jsx)(t.p,{children:"Waiting and asserting on GraphQL API requests rely on matching a query or\nmutation name in the POST body."}),"\n",(0,i.jsxs)(t.p,{children:["Using ",(0,i.jsx)(t.a,{href:"/api/commands/intercept",children:"cy.intercept()"})," we can override the response to\na GraphQL query or mutation by declaring an intercept at the beginning of the\ntest or closer to the expectation."]}),"\n",(0,i.jsx)(t.h2,{id:"Alias-multiple-queries-or-mutations",children:"Alias multiple queries or mutations"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"beforeEach"}),", we will use ",(0,i.jsx)(t.a,{href:"/api/commands/intercept",children:"cy.intercept()"})," to\ncapture all requests for a GraphQL endpoint (e.g. ",(0,i.jsx)(t.code,{children:"/graphql"}),"), use conditionals\nto match the query or mutation and set an alias for using ",(0,i.jsx)(t.code,{children:"req.alias"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"First, we'll create a set of utility functions to help match and alias our\nqueries and mutations."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// utils/graphql-test-utils.js\n\n// Utility to match GraphQL mutation based on the operation name\nexport const hasOperationName = (req, operationName) => {\n  const { body } = req\n  return (\n    Object.prototype.hasOwnProperty.call(body, 'operationName') &&\n    body.operationName === operationName\n  )\n}\n\n// Alias query if operationName matches\nexport const aliasQuery = (req, operationName) => {\n  if (hasOperationName(req, operationName)) {\n    req.alias = `gql${operationName}Query`\n  }\n}\n\n// Alias mutation if operationName matches\nexport const aliasMutation = (req, operationName) => {\n  if (hasOperationName(req, operationName)) {\n    req.alias = `gql${operationName}Mutation`\n  }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In our test file, we can import these utilities and use them to alias the\nqueries and mutations for our tests in a ",(0,i.jsx)(t.code,{children:"beforeEach"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// app.cy.js\nimport { aliasQuery, aliasMutation } from '../utils/graphql-test-utils'\n\ncontext('Tests', () => {\n  beforeEach(() => {\n    cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {\n      // Queries\n      aliasQuery(req, 'GetLaunchList')\n      aliasQuery(req, 'LaunchDetails')\n      aliasQuery(req, 'GetMyTrips')\n\n      // Mutations\n      aliasMutation(req, 'Login')\n      aliasMutation(req, 'BookTrips')\n    })\n  })\n  // ...\n})\n"})}),"\n",(0,i.jsx)(t.h2,{id:"Expectations-for-Query-or-Mutation-Results",children:"Expectations for Query or Mutation Results"}),"\n",(0,i.jsxs)(t.p,{children:["Expectations can be made against the response of an intercepted GraphQL query or\nmutation using ",(0,i.jsx)(t.a,{href:"/api/commands/wait",children:"cy.wait()"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// app.cy.js\nimport { aliasQuery } from '../utils/graphql-test-utils'\n\ncontext('Tests', () => {\n  beforeEach(() => {\n    cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {\n      // Queries\n      aliasQuery(req, 'Login')\n\n      // ...\n    })\n  })\n\n  it('should verify login data', () => {\n    cy.wait('@gqlLoginQuery')\n      .its('response.body.data.login')\n      .should('have.property', 'id')\n      .and('have.property', 'token')\n  })\n})\n"})}),"\n",(0,i.jsx)(t.h2,{id:"Modifying-a-Query-or-Mutation-Response",children:"Modifying a Query or Mutation Response"}),"\n",(0,i.jsx)(t.p,{children:"In the test below, the response is modified to test the UI for a single page of\nresults."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// app.cy.js\nimport { hasOperationName, aliasQuery } from '../utils/graphql-test-utils'\n\ncontext('Tests', () => {\n  beforeEach(() => {\n    cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {\n      // Queries\n      aliasQuery(req, 'GetLaunchList')\n\n      // ...\n    })\n  })\n\n  it('should not display the load more button on the launches page', () => {\n    cy.intercept('POST', 'http://localhost:3000/graphql', (req) => {\n      if (hasOperationName(req, 'GetLaunchList')) {\n        // Declare the alias from the initial intercept in the beforeEach\n        req.alias = 'gqlGetLaunchListQuery'\n\n        // Set req.fixture or use req.reply to modify portions of the response\n        req.reply((res) => {\n          // Modify the response body directly\n          res.body.data.launches.hasMore = false\n          res.body.data.launches.launches =\n            res.body.data.launches.launches.slice(5)\n        })\n      }\n    })\n\n    // Must visit after cy.intercept\n    cy.visit('/')\n\n    cy.wait('@gqlGetLaunchListQuery')\n      .its('response.body.data.launches')\n      .should((launches) => {\n        expect(launches.hasMore).to.be.false\n        expect(launches.length).to.be.lte(20)\n      })\n\n    cy.get('#launch-list').its('length').should('be.gte', 1).and('be.lt', 20)\n    cy.contains('button', 'Load More').should('not.exist')\n  })\n})\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(7294);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);