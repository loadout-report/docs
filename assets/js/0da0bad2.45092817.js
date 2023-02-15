"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[224],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3574:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="presentation nodes",c={unversionedId:"data-structures/presentation-nodes",id:"data-structures/presentation-nodes",title:"presentation nodes",description:"node trees are used to hold lots of data, like Collections, Triumphs, Catalysts, Metrics, Medals, etc.",source:"@site/docs/data-structures/presentation-nodes.md",sourceDirName:"data-structures",slug:"/data-structures/presentation-nodes",permalink:"/data-structures/presentation-nodes",editUrl:"https://github.com/loadout-report/docs/tree/main/docs/data-structures/presentation-nodes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"entry-values",permalink:"/data-structures/entry-values"},next:{title:"the manifest/definitions",permalink:"/definitions/"}},p={},d=[{value:"root nodes",id:"root-nodes",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"presentation-nodes"},"presentation nodes"),(0,a.kt)("p",null,"node trees are used to hold lots of data, like Collections, Triumphs, Catalysts, Metrics, Medals, etc."),(0,a.kt)("p",null,"they're a hierarchical structure where each branch node can have multiple children.",(0,a.kt)("br",{parentName:"p"}),"\n","a node's children can be other presentation nodes, collectibles, metrics, craftables, or records (triumphs)"),(0,a.kt)("p",null,"an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'                                      PresentationNode\n                                         Collections\n                                       \u2199            \u2198\n                            PresentationNode      armor, mods,\n                                "Weapons"          flair, etc\n                              \u2199           \u2198\n                   PresentationNode       special,\n                       "Primary"         heavy, etc\n                    \u2199             \u2198\n          PresentationNode      sidearms, bows\n           "Hand Cannons"      auto rifles, etc\n          \u2199              \u2198\n  Collectible           some other hand\n"Kindled Orchid"      cannon collectibles\n')),(0,a.kt)("h2",{id:"root-nodes"},"root nodes"),(0,a.kt)("p",null,"many of the top level nodes are available through the ",(0,a.kt)("inlineCode",{parentName:"p"},"destiny2CoreSettings")," key in ",(0,a.kt)("a",{parentName:"p",href:"/api/endpoints/settings"},"the settings endpoint"),"'s data"),(0,a.kt)("p",null,"if you want to enumerate collections data, instead of hardcoding ",(0,a.kt)("inlineCode",{parentName:"p"},"3790247699")," in your app, just load the current d2 settings and check the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"collectionRootNode")),(0,a.kt)("p",null,"there's lots of these, including node hashes for ",(0,a.kt)("inlineCode",{parentName:"p"},"collection"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"badges"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"records"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"medals"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"activeTriumphs"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"activeSeals"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"legacyTriumphs"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"legacySeals"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"medals"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"exoticCatalysts"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lore"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"crafting")))}m.isMDXComponent=!0}}]);