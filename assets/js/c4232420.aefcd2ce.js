"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[825],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=r,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},176:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={title:"PGCRs"},l="postgame carnage reports",p={unversionedId:"activities/pgcrs",id:"activities/pgcrs",title:"PGCRs",description:"about",source:"@site/docs/activities/pgcrs.md",sourceDirName:"activities",slug:"/activities/pgcrs",permalink:"/activities/pgcrs",editUrl:"https://github.com/loadout-report/docs/tree/main/docs/activities/pgcrs.md",tags:[],version:"current",frontMatter:{title:"PGCRs"},sidebar:"tutorialSidebar",previous:{title:"global activity history",permalink:"/activities/the-big-scrape"},next:{title:"API",permalink:"/api/"}},c={},u=[{value:"about",id:"about",level:3},{value:"fetching PGCRs with the API",id:"fetching-pgcrs-with-the-api",level:3},{value:"PGCR data",id:"pgcr-data",level:3}],h={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"postgame-carnage-reports"},"postgame carnage reports"),(0,i.kt)("h3",{id:"about"},"about"),(0,i.kt)("p",null,"a ",(0,i.kt)("strong",{parentName:"p"},"postgame carnage report")," (PGCR) is the data structure that describes what happened in an ",(0,i.kt)("strong",{parentName:"p"},"instance"),".",(0,i.kt)("br",{parentName:"p"}),"\n","it has players, characters, kill counts, scores, teams, fireteams, medals, etc."),(0,i.kt)("p",null,"for the purposes of a PGCR, an ",(0,i.kt)("strong",{parentName:"p"},"instance")," is a continuous activity, from start, until nobody's left in it."),(0,i.kt)("p",null,"fireteam-only instances:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a party launches a raid, and completes it. now the instance is over."),(0,i.kt)("li",{parentName:"ul"},"a party launches a raid, decides not to raid, everyone leaves. now the instance is over."),(0,i.kt)("li",{parentName:"ul"},"a party launches a raid, completes some encounters, decides to finish tomorrow, everyone leaves. now the instance is over."),(0,i.kt)("li",{parentName:"ul"},"a party launches a raid, some people leave, others join, more leave, eventually none of the original people are in that raid. it's ",(0,i.kt)("strong",{parentName:"li"},"still not over")," until all the replacements leave.")),(0,i.kt)("p",null,"shared instances:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a player launches a crucible match. the match ends. now the instance is over. teammates and opponents will show up on the PGCR."),(0,i.kt)("li",{parentName:"ul"},"a player launches a crucible match. they leave midway. the instance is ",(0,i.kt)("strong",{parentName:"li"},"still going")," until all players have finished. teammates and opponents will show up on the PGCR. if someone matchmakes in as a replacement, that player & character will also be on the PGCR."),(0,i.kt)("li",{parentName:"ul"},"a player launches a matchmade strike, hunt, or seasonal activity. they complete it. now the instance is over. their teammates will show up on the PGCR."),(0,i.kt)("li",{parentName:"ul"},"planetary patrols and planetary matchmaking are a little different. a player runs around with blueberries on the tangled shore, or sees passerby while beginning a strike. this doesn't include them on the player's PGCR. the instance is over and the PGCR is generated when the player/fireteam leave the planet.")),(0,i.kt)("p",null,"if your whole team leaves a raid halfway through, then launches it again and finishes, that's a new instance and a new PGCR. it may start from a checkpoint, but it's a separate copy of the game world. all the ammo drops and debris are gone, your kill counters are fresh, etc.  "),(0,i.kt)("p",null,"API-wise, there's ",(0,i.kt)("strong",{parentName:"p"},"no fixed/guaranteed way to link those two PGCRs."),(0,i.kt)("br",{parentName:"p"}),"\n","if you want, you can assume they're related, from the fact that it's the same 6 people, and the first one wasn't completed, but that's up to you.  "),(0,i.kt)("p",null,"raid/resumable PGCRs used to show whether they were fresh or started at a checkpoint,",(0,i.kt)("br",{parentName:"p"}),"\n","but ",(0,i.kt)("del",{parentName:"p"},(0,i.kt)("a",{parentName:"del",href:"https://github.com/Bungie-net/api/issues/1320"},"they no longer do")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("del",{parentName:"p"},"this was fixed"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Bungie-net/api/issues/1601"},"activityWasStartedFromBeginning is currently inconsistent/wrong")),(0,i.kt)("p",null,"PGCR IDs increment serially. there's a PGCR 1, a PGCR 2, etc.",(0,i.kt)("br",{parentName:"p"}),"\n","say hi to StyxBoatman on ",(0,i.kt)("a",{parentName:"p",href:"https://www.bungie.net/en/PGCR/1"},"https://www.bungie.net/en/PGCR/1")," :)",(0,i.kt)("br",{parentName:"p"}),"\n","he has a twitter account last i checked."),(0,i.kt)("h3",{id:"fetching-pgcrs-with-the-api"},"fetching PGCRs with the API"),(0,i.kt)("p",null,"endpoint spec: ",(0,i.kt)("a",{parentName:"p",href:"https://bungie-net.github.io/#Destiny2.GetPostGameCarnageReport"},"https://bungie-net.github.io/#Destiny2.GetPostGameCarnageReport")),(0,i.kt)("p",null,"all it takes to request a PGCR is its instanceId:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"you don't need to know any of the players involved."),(0,i.kt)("li",{parentName:"ul"},"you don't need oauth for a participant."),(0,i.kt)("li",{parentName:"ul"},"they can't be kept private.  ")),(0,i.kt)("p",null,"basically, just hit this URL with an API key",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://stats.bungie.net/Platform/Destiny2/Stats/PostGameCarnageReport/123456789/"),(0,i.kt)("br",{parentName:"p"}),"\n","to get the PGCR for instance #123456789"),(0,i.kt)("p",null,"if a PGCR doesn't exist, it's ",(0,i.kt)("em",{parentName:"p"},"usually")," because it hasn't been created yet. you'll get a 404 HTTP status code, accompanied by this JSON:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ErrorCode": 1653,\n  "ThrottleSeconds": 0,\n  "ErrorStatus": "DestinyPGCRNotFound",\n  "Message": "The activity you were looking for was not found.",\n  "MessageData": {}\n}\n')),(0,i.kt)("h3",{id:"pgcr-data"},"PGCR data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"period")," property is a timestamp of when the activity ",(0,i.kt)("em",{parentName:"li"},"began")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activityDetails")," shows which activity was played, among other things"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startingPhaseIndex"),' rest in peace. "no longer supported"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activityWasStartedFromBeginning")," replacement for startingPhaseIndex. flaky?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"teams")," ",(0,i.kt)("strong",{parentName:"li"},"exists even when there aren't teams"),", but it will be empty")))}m.isMDXComponent=!0}}]);