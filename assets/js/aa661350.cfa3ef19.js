"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[778],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=r,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6542:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={},l="exploring definitions",p={unversionedId:"definitions/exploring",id:"definitions/exploring",title:"exploring definitions",description:"required reading: definitions overview",source:"@site/docs/definitions/exploring.md",sourceDirName:"definitions",slug:"/definitions/exploring",permalink:"/definitions/exploring",editUrl:"https://github.com/loadout-report/docs/docs/definitions/exploring.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"the manifest/definitions",permalink:"/definitions/"},next:{title:"fetching definitions",permalink:"/definitions/fetching"}},u={},c=[{value:"how can i check the definitions out?",id:"how-can-i-check-the-definitions-out",level:2},{value:"what&#39;s next?",id:"whats-next",level:2}],f={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exploring-definitions"},"exploring definitions"),(0,a.kt)("p",null,"required reading: ",(0,a.kt)("a",{parentName:"p",href:"definitions"},"definitions overview")),(0,a.kt)("h2",{id:"how-can-i-check-the-definitions-out"},"how can i check the definitions out?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://data.destinysets.com/"},"data.destinysets.com")," is a lovely interface that lets you explore the definitions data.",(0,a.kt)("br",{parentName:"p"}),"\n","things to note as you look around:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"there's multiple tables (the ",(0,a.kt)("inlineCode",{parentName:"li"},"Filters")," button has a list, under ",(0,a.kt)("inlineCode",{parentName:"li"},"Table\xa0name"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"each table contains a different type of data: there's one for vendors, one for items, one for perks, activities, damage and energy types, etc"),(0,a.kt)("li",{parentName:"ul"},"90% of the iceberg is InventoryItems:",(0,a.kt)("br",{parentName:"li"}),"guns and armor are items, engrams are items, quests are items, emblems are items, emotes are items, mods are items.",(0,a.kt)("br",{parentName:"li"}),"Rampage is an item. Rampage ",(0,a.kt)("em",{parentName:"li"},"Spec")," is an item. meat made of cabal is an item"))),(0,a.kt)("li",{parentName:"ul"},"within each table, the structure and properties of each entry are very similar",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"you may see one InventoryItem entry has a ",(0,a.kt)("inlineCode",{parentName:"li"},"flavorText")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"stats")," property. this is a sign that many other InventoryItem entries will also have these properties"),(0,a.kt)("li",{parentName:"ul"},"there aren't freeform or one-off properties. definitions entries aren't useful data if an application doesn't know where to look and what to expect"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("a",{parentName:"li",href:"/api/spec"},"API specification")," outlines what data you can expect inside definitions"))),(0,a.kt)("li",{parentName:"ul"},"if you're comfortable writing JavaScript, you can play with this data programatically: there are examples shown if you open the console")),(0,a.kt)("h2",{id:"whats-next"},"what's next?"),(0,a.kt)("p",null,"this definitions data is retrieved from Bungie.net as sqlite database(s), or large file(s) full of JSON data. so:",(0,a.kt)("br",{parentName:"p"}),"\n","they're not comfortable to read raw, nor easy to open or explore as text.",(0,a.kt)("br",{parentName:"p"}),"\n","if you want to use these definitions for some purpose, you should"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"learn how to ",(0,a.kt)("a",{parentName:"li",href:"/definitions/fetching"},"download the definitions data")),(0,a.kt)("li",{parentName:"ul"},"and expect to write code or use other utilities to ",(0,a.kt)("a",{parentName:"li",href:"/definitions/using"},"work with definitions data"))))}d.isMDXComponent=!0}}]);