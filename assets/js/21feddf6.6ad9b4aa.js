"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[773],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3279:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={},l="weapon stats",p={unversionedId:"inventory/weapons/stats",id:"inventory/weapons/stats",title:"weapon stats",description:"where do weapon stats come from?",source:"@site/docs/inventory/weapons/stats.md",sourceDirName:"inventory/weapons",slug:"/inventory/weapons/stats",permalink:"/inventory/weapons/stats",editUrl:"https://github.com/loadout-report/docs/tree/main/docs/inventory/weapons/stats.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"investment scaling",permalink:"/inventory/weapons/investment-scaling"},next:{title:"OAuth",permalink:"/oauth/"}},u={},c=[{value:"where do weapon stats come from?",id:"where-do-weapon-stats-come-from",level:3},{value:"how do i get a real (instanced) weapon&#39;s stats?",id:"how-do-i-get-a-real-instanced-weapons-stats",level:3},{value:"how do i get a fake/default/definitions-only weapon&#39;s stats?",id:"how-do-i-get-a-fakedefaultdefinitions-only-weapons-stats",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"weapon-stats"},"weapon stats"),(0,i.kt)("h3",{id:"where-do-weapon-stats-come-from"},"where do weapon stats come from?"),(0,i.kt)("p",null,"weapon stats are a combination of the weapon's base stats, plus any bonuses or penalties added by its perks, mods, and masterworks"),(0,i.kt)("h3",{id:"how-do-i-get-a-real-instanced-weapons-stats"},"how do i get a real (instanced) weapon's stats?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"easy mode: get its live stats via the ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemStats")," component (304).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"look its stats up using its instanceId. voila."),(0,i.kt)("li",{parentName:"ul"},"what's the downside? no details. if stability is 94, we don't know ",(0,i.kt)("em",{parentName:"li"},"why")," stability is 94.",(0,i.kt)("br",{parentName:"li"}),"is the masterwork contributing? did fluted barrel help? all we know is bungie.net calculates the stability is 94."))),(0,i.kt)("li",{parentName:"ul"},"harder mode: build weapon stats from its sockets, using the ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemSockets")," component (305).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"an item's sockets is represented as an array of ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinyItemSocketState")),(0,i.kt)("li",{parentName:"ul"},"each ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinyItemSocketState")," has a ",(0,i.kt)("inlineCode",{parentName:"li"},"plugHash")," property that shows what item is plugged into that socket, and a ",(0,i.kt)("inlineCode",{parentName:"li"},"isEnabled")," property to say whether that item's contribution should be included"),(0,i.kt)("li",{parentName:"ul"},"each plugged item (a ",(0,i.kt)("inlineCode",{parentName:"li"},"DestinyInventoryItemDefinition"),") may contribute stats to the weapon. check to see if that item has an ",(0,i.kt)("inlineCode",{parentName:"li"},"investmentStats")," property"),(0,i.kt)("li",{parentName:"ul"},"once you've combined the stat contributions of all items plugged into the sockets, that total is transformed using ",(0,i.kt)("a",{parentName:"li",href:"/inventory/weapons/investment-scaling"},"investment scaling"))))),(0,i.kt)("h3",{id:"how-do-i-get-a-fakedefaultdefinitions-only-weapons-stats"},"how do i get a fake/default/definitions-only weapon's stats?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"same as above, except using only the definition, and the weapon's default sockets",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DestinyInventoryItemDefinition.sockets.sockets.socketEntries")," shows an item's default & possible sockets"),(0,i.kt)("li",{parentName:"ul"},"each socket's ",(0,i.kt)("inlineCode",{parentName:"li"},"singleInitialItemHash")," is the default thing plugged into that socket"),(0,i.kt)("li",{parentName:"ul"},"calculate as above"),(0,i.kt)("li",{parentName:"ul"},"or get really complex and use various ",(0,i.kt)("inlineCode",{parentName:"li"},"PlugSetHash"),"es to see all possibilities for that socket")))))}m.isMDXComponent=!0}}]);