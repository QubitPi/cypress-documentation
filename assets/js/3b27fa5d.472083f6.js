"use strict";(self.webpackChunkcypress_docusaurus_ts=self.webpackChunkcypress_docusaurus_ts||[]).push([[4556],{5795:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=r(5893),i=r(1151);const o={title:"Proxy Configuration"},t=void 0,a={id:"guides/references/proxy-configuration",title:"Proxy Configuration",description:"Cypress needs Internet access to work. Many companies require the use of a",source:"@site/docs/guides/references/proxy-configuration.mdx",sourceDirName:"guides/references",slug:"/guides/references/proxy-configuration",permalink:"/guides/references/proxy-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/cypress-io/cypress-documentation/tree/main/docs/guides/references/proxy-configuration.mdx",tags:[],version:"current",lastUpdatedAt:1728611023,formattedLastUpdatedAt:"Oct 11, 2024",frontMatter:{title:"Proxy Configuration"},sidebar:"guides",previous:{title:"Migration Guide",permalink:"/guides/references/migration-guide"},next:{title:"Release Stages",permalink:"/guides/references/release-stages"}},l={},c=[{value:"Set a proxy on Linux or macOS",id:"Set-a-proxy-on-Linux-or-macOS",level:2},{value:"Set a proxy on Windows",id:"Set-a-proxy-on-Windows",level:2},{value:"Proxy environment variables",id:"Proxy-environment-variables",level:2},{value:"Using a custom certificate authority (CA)",id:"Using-a-custom-certificate-authority-CA",level:2},{value:"View, unset, and set environment variables",id:"View-unset-and-set-environment-variables",level:2},{value:"Linux or macOS",id:"Linux-or-macOS",level:3},{value:"Set an environment variable for the current session",id:"Set-an-environment-variable-for-the-current-session",level:4},{value:"Unset an environment variable",id:"Unset-an-environment-variable",level:4},{value:"See all the currently set environment variables",id:"See-all-the-currently-set-environment-variables",level:4},{value:"Windows",id:"Windows",level:3},{value:"Set an environment variable for current session",id:"Set-an-environment-variable-for-current-session",level:4},{value:"Set environment variable globally for all future sessions",id:"Set-environment-variable-globally-for-all-future-sessions",level:4},{value:"Unset an environment variable in the current session",id:"Unset-an-environment-variable-in-the-current-session",level:4},{value:"See all currently set environment variables",id:"See-all-currently-set-environment-variables",level:4},{value:"View proxy settings in Cypress",id:"View-proxy-settings-in-Cypress",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{DocsImage:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("DocsImage",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Cypress needs Internet access to work. Many companies require the use of a\ncorporate proxy to access the Internet. If your company does this, many\nfunctions of Cypress will not work until you've configured Cypress to use your\nproxy:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cypress won't be able to load web pages besides ",(0,s.jsx)(n.code,{children:"localhost"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Cypress won't be able to warn you if your\n",(0,s.jsx)(n.a,{href:"/guides/references/configuration#Global",children:"baseUrl"})," isn't available."]}),"\n",(0,s.jsxs)(n.li,{children:["Cypress won't be able to connect to\n",(0,s.jsx)(n.a,{href:"/guides/cloud/introduction",children:"Cypress Cloud"})," to log in or record test runs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm install cypress"})," may fail while downloading the Cypress binary."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you are experiencing any or all of these issues, you may need to configure\nCypress with your proxy. Instructions are available for\n",(0,s.jsx)(n.a,{href:"#Set-a-proxy-on-Linux-or-macOS",children:"macOS"}),",\n",(0,s.jsx)(n.a,{href:"#Set-a-proxy-on-Linux-or-macOS",children:"Linux"}),", and ",(0,s.jsx)(n.a,{href:"#Set-a-proxy-on-Windows",children:"Windows"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Proxy Auto-Configuration (PAC) files are not currently supported. If your\norganization uses a PAC file, contact a network administrator to ask what HTTP\nproxy you should be using to access the general Internet, then use that proxy\nwith Cypress."})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["SOCKS proxies are not currently supported. A workaround is to set up an HTTP\nproxy locally that points to your SOCKS proxy, then using that HTTP proxy with\nCypress.\n",(0,s.jsx)(n.a,{href:"https://superuser.com/questions/423563/convert-http-requests-to-socks5",children:"Read more about forwarding an HTTP proxy through SOCKS."})]})}),"\n",(0,s.jsx)(n.h2,{id:"Set-a-proxy-on-Linux-or-macOS",children:"Set a proxy on Linux or macOS"}),"\n",(0,s.jsx)(n.p,{children:"To set your proxy on Linux or macOS, run the following command in a terminal\nbefore running Cypress:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"export HTTP_PROXY=http://my-company-proxy.com\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also set ",(0,s.jsx)(n.code,{children:"NO_PROXY"})," to bypass the proxy for certain domains (by default,\nonly ",(0,s.jsx)(n.code,{children:"localhost"})," will be bypassed):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"export NO_PROXY=localhost,google.com,apple.com\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To make these changes permanent, you can add these commands to your shell's\n",(0,s.jsx)(n.code,{children:"~/.profile"})," (",(0,s.jsx)(n.code,{children:"~/.zsh_profile"}),", ",(0,s.jsx)(n.code,{children:"~/.bash_profile"}),", etc.) to run them on every\nlogin."]}),"\n",(0,s.jsx)(n.h2,{id:"Set-a-proxy-on-Windows",children:"Set a proxy on Windows"}),"\n",(0,s.jsxs)(n.p,{children:["When starting up after being installed, Cypress will attempt to load the proxy\nconfigured in the Windows registry by default.\n",(0,s.jsx)(n.a,{href:"https://www.howtogeek.com/tips/how-to-set-your-proxy-settings-in-windows-8.1/",children:"Learn how to set your proxy settings system-wide in Windows."})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["When downloading Cypress for the first time, the ",(0,s.jsx)(n.code,{children:"cypress"})," command line tool\n",(0,s.jsx)(n.em,{children:"does not"})," read proxy settings from the Windows registry. If you need to\nconfigure a proxy for the installation to work, you must set the appropriate\nenvironment variables as described below."]})}),"\n",(0,s.jsxs)(n.p,{children:["You can also set proxy environment variables before running Cypress to override\nthe Windows registry. This is also the only way to define a proxy for\n",(0,s.jsx)(n.code,{children:"cypress install"}),". In Command Prompt, defining the required environment\nvariables looks like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"set HTTP_PROXY=http://my-company-proxy.com\n"})}),"\n",(0,s.jsx)(n.p,{children:"To accomplish the same thing in PowerShell:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$env:HTTP_PROXY = "http://my-company-proxy.com"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To save the ",(0,s.jsx)(n.code,{children:"HTTP_PROXY"})," variable and use your proxy for all new shells, use\n",(0,s.jsx)(n.code,{children:"setx"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"setx HTTP_PROXY http://my-company-proxy.com\n"})}),"\n",(0,s.jsx)(n.h2,{id:"Proxy-environment-variables",children:"Proxy environment variables"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["This section refers to your operating system's environment variables, ",(0,s.jsx)(n.em,{children:"not"}),"\n",(0,s.jsx)(n.a,{href:"/guides/guides/environment-variables",children:"Cypress environment variables"})]})}),"\n",(0,s.jsxs)(n.p,{children:["Cypress automatically reads from your system's ",(0,s.jsx)(n.code,{children:"HTTP_PROXY"})," environment variable\nand uses that proxy for all HTTP and HTTPS traffic. If an ",(0,s.jsx)(n.code,{children:"HTTPS_PROXY"}),"\nenvironment variable is set, HTTPS traffic will use that proxy instead."]}),"\n",(0,s.jsxs)(n.p,{children:["To bypass the proxy for certain domains, a ",(0,s.jsx)(n.code,{children:"NO_PROXY"})," environment variable can\nbe set to a comma-separated list of domain names to not proxy traffic for. By\ndefault, traffic to ",(0,s.jsx)(n.code,{children:"localhost"})," will not be proxied. To make Cypress send\ntraffic for ",(0,s.jsx)(n.code,{children:"localhost"})," through the proxy, pass ",(0,s.jsx)(n.code,{children:"<-loopback>"})," in ",(0,s.jsx)(n.code,{children:"NO_PROXY"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If an uppercase and a lowercase version of the proxy settings are supplied (for\nexample, ",(0,s.jsx)(n.code,{children:"HTTP_PROXY"})," and ",(0,s.jsx)(n.code,{children:"http_proxy"})," are both set), the lowercase variable\nwill be preferred."]}),"\n",(0,s.jsx)(n.h2,{id:"Using-a-custom-certificate-authority-CA",children:"Using a custom certificate authority (CA)"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["This section refers to npm config variables and node environment variables,\n",(0,s.jsx)(n.em,{children:"not"})," ",(0,s.jsx)(n.a,{href:"/guides/guides/environment-variables",children:"Cypress environment variables"})]})}),"\n",(0,s.jsxs)(n.p,{children:["Cypress needs to be able to authenticate properly when communicating to\n",(0,s.jsx)(n.a,{href:"/guides/cloud/introduction",children:"Cypress Cloud"}),". When connecting through a proxy,\noftentimes a self signed certificate is used as a CA. In order to handle this\nconfiguration, Cypress automatically reads from npm config's\n",(0,s.jsx)(n.a,{href:"https://docs.npmjs.com/cli/v8/using-npm/config#cafile",children:(0,s.jsx)(n.code,{children:"cafile"})})," and\n",(0,s.jsx)(n.a,{href:"https://docs.npmjs.com/cli/v8/using-npm/config#ca",children:(0,s.jsx)(n.code,{children:"ca"})})," options and the\n",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/cli.html#node_extra_ca_certsfile",children:(0,s.jsx)(n.code,{children:"NODE_EXTRA_CA_CERTS"})}),"\nnode environment variable."]}),"\n",(0,s.jsxs)(n.p,{children:["To mimic the behavior of npm and node, Cypress looks at ",(0,s.jsx)(n.code,{children:"cafile"})," first and then\n",(0,s.jsx)(n.code,{children:"ca"})," and uses the corresponding certificate(s) as a replacement for the CA. For\nexample, to use the CA at ",(0,s.jsx)(n.code,{children:"/home/person/certs/ca.crt"}),", add the following to your\n",(0,s.jsx)(n.code,{children:".npmrc"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cafile=/home/person/certs/ca.crt\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If neither ",(0,s.jsx)(n.code,{children:"cafile"})," nor ",(0,s.jsx)(n.code,{children:"ca"})," are set, Cypress looks at the system environment\nvariable ",(0,s.jsx)(n.code,{children:"NODE_EXTRA_CA_CERTS"})," and uses the corresponding certificate(s) as an\nextension for the trusted CA."]}),"\n",(0,s.jsx)(n.p,{children:"Note that the npm config is used as a replacement, and the node environment\nvariable is used as an extension."}),"\n",(0,s.jsx)(n.h2,{id:"View-unset-and-set-environment-variables",children:"View, unset, and set environment variables"}),"\n",(0,s.jsx)(n.p,{children:"In order to properly configure your proxy configuration, it can be helpful to\nknow how to view currently set environment variables, unset unwanted environment\nvariables, and set environment variables depending on your operating system."}),"\n",(0,s.jsx)(n.h3,{id:"Linux-or-macOS",children:"Linux or macOS"}),"\n",(0,s.jsx)(n.h4,{id:"Set-an-environment-variable-for-the-current-session",children:"Set an environment variable for the current session"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"export SOME_VARIABLE=some-value\n"})}),"\n",(0,s.jsx)(n.h4,{id:"Unset-an-environment-variable",children:"Unset an environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"unset SOME_VARIABLE\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"echo"})," will print nothing after ",(0,s.jsx)(n.code,{children:"unset"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"echo $SOME_VARIABLE\n"})}),"\n",(0,s.jsx)(n.h4,{id:"See-all-the-currently-set-environment-variables",children:"See all the currently set environment variables"}),"\n",(0,s.jsx)(n.p,{children:"Print all env vars:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"env\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Print environment variables with ",(0,s.jsx)(n.code,{children:"proxy"})," (case insensitive) in the name:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"env | grep -i proxy\n"})}),"\n",(0,s.jsx)(n.h3,{id:"Windows",children:"Windows"}),"\n",(0,s.jsxs)(n.p,{children:["Setting environment variables in Windows is different depending on if you're\nusing ",(0,s.jsx)(n.em,{children:"command prompt"})," or ",(0,s.jsx)(n.em,{children:"PowerShell"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"Set-an-environment-variable-for-current-session",children:"Set an environment variable for current session"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Command prompt:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"set SOME_VARIABLE=some-value\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"PowerShell:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$env:SOME_VARIABLE = "some-value"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"Set-environment-variable-globally-for-all-future-sessions",children:"Set environment variable globally for all future sessions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"setx SOME_VARIABLE some-value\n"})}),"\n",(0,s.jsx)(n.h4,{id:"Unset-an-environment-variable-in-the-current-session",children:"Unset an environment variable in the current session"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Command prompt:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"set SOME_VARIABLE=\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"PowerShell:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"Remove-Item Env:\\SOME_VARIABLE\n"})}),"\n",(0,s.jsx)(n.h4,{id:"See-all-currently-set-environment-variables",children:"See all currently set environment variables"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Command prompt:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"set\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"PowerShell:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"Get-ChildItem Env:\n"})}),"\n",(0,s.jsx)(n.h2,{id:"View-proxy-settings-in-Cypress",children:"View proxy settings in Cypress"}),"\n",(0,s.jsx)(n.p,{children:"Your current proxy settings can be viewed from within Cypress. Follow these\nsteps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open up your project in Cypress via ",(0,s.jsx)(n.code,{children:"cypress open"}),"."]}),"\n",(0,s.jsx)(n.li,{children:'Click the "Settings" tab.'}),"\n",(0,s.jsx)(n.li,{children:'Click the "Proxy Settings" section to expand it and view the proxy settings\nthat Cypress is currently using.'}),"\n"]}),"\n",(0,s.jsx)(r,{src:"/img/guides/configuration/test-runner-settings-proxy-configuration.jpg",alt:"Proxy configuration in the Desktop app"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>t});var s=r(7294);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);