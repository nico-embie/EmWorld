(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{1521:function(e,s,n){"use strict";var a=n(5893);n(7294);s.C=function(e){var s=e.children;return(0,a.jsx)("div",{className:"bg-white p-6 shadow-lg rounded-md flex items-center w-full space-x-6 h-full",children:s})}},8237:function(e,s,n){"use strict";var a=n(5893);s.Z=function(e){var s=e.children;return(0,a.jsx)("h1",{className:"text-5xl font-bold text-center text-white flex justify-center item-center pt-10",children:s})}},458:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return i}});var a=n(5893),l=n(8237),r=n(1521),c=n(1664),t=(n(7294),n(6049)),i=!0;s.default=function(e){var s,n=e.countries,i=e.countryName,d=n?n.filter((function(e){return e.name.toLowerCase()===i.toLowerCase()}))[0]:[],x=function(){var e=d.languages;return(0,a.jsx)("ul",{children:e?e.map((function(e,s){return(0,a.jsx)(c.default,{href:"/languages/".concat(e.name),children:(0,a.jsx)("a",{children:(0,a.jsx)("li",{className:"text-gray-600",children:e.name},s)})})})):"error"})},h=function(){var e=d.currencies;return(0,a.jsx)("ul",{children:e?e.map((function(e,s){return(0,a.jsx)("li",{className:"text-gray-600",children:(0,a.jsx)(c.default,{href:"/currencies/".concat(e.name?e.name.toLowerCase():e.name),children:(0,a.jsx)("a",{className:"flex items-center p-5 ",children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{className:"",children:["Name : ","".concat(e.name||"")]}),(0,a.jsxs)("li",{className:"",children:["Symbol : ","".concat(e.symbol||"")]}),(0,a.jsxs)("li",{className:"",children:["Code : ","".concat(e.code||"")]})]})})})},s)})):"error"})},m=function(){var e=function(){var e=d.borders;return n?n.filter((function(s){var n=s.alpha3Code;return e.includes(n)})):[]}();return e.length?(0,a.jsxs)(r.C,{children:[(0,a.jsx)("div",{className:"rounded-full p-3 bg-green-100",children:(0,a.jsx)(t.Zlt,{className:"h-5 text-green-700"})}),(0,a.jsx)("ul",{children:e?e.map((function(e,s){return(0,a.jsx)("li",{className:"text-gray-600 ",children:(0,a.jsx)(c.default,{href:"/countries/".concat(e.name),children:(0,a.jsxs)("a",{className:"flex items-center",children:[(0,a.jsx)("img",{src:e.flag,className:"h-6 w-12 pr-3 "}),e.name]})})},s)})):"error"})]}):(0,a.jsx)("div",{className:"hidden"})},u=function(e){var s=e.data;return""===s?(0,a.jsx)("div",{className:"hidden"}):s===d.capital?(0,a.jsxs)(r.C,{children:[(0,a.jsx)("div",{className:"rounded-full p-3 bg-red-100",children:(0,a.jsx)(t.U65,{className:"h-5 text-embie-red"})}),(0,a.jsx)("span",{className:"text-gray-600",children:s})]}):s===d.demonym?(0,a.jsxs)(r.C,{children:[(0,a.jsx)("div",{className:"rounded-full p-3 bg-blue-100",children:(0,a.jsx)(t.tBG,{className:"h-5 text-embie-lightblue"})}),(0,a.jsx)("span",{className:"text-gray-600",children:s})]}):s===d.region?(0,a.jsxs)(r.C,{children:[(0,a.jsx)("div",{className:"rounded-full p-3 bg-yellow-100",children:(0,a.jsx)(t.n9J,{className:"h-5 text-embie-yellow"})}),(0,a.jsx)(c.default,{href:"/regions/".concat(s),children:(0,a.jsx)("a",{children:(0,a.jsxs)("span",{className:"text-gray-600",children:[" ",s," "]})})})]}):void 0};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"bg-embie-blue flex pl-20 pt-20",children:(0,a.jsx)(c.default,{href:"/",children:(0,a.jsxs)("a",{children:[(0,a.jsx)(t.n9J,{className:"h-14 text-white inline-block mr-6"}),(0,a.jsx)(t.Y4O,{className:"h-14 text-white inline-block"})]})})}),d?(0,a.jsxs)("div",{className:"w-5xl mx-auto bg-embie-blue h-full min-h-screen flex flex-col space-y-16",children:[(0,a.jsxs)(l.Z,{children:[(0,a.jsx)("img",{src:d.flag,className:"h-14 w-15 pr-3 item-center"}),d.name]}),(0,a.jsxs)("div",{className:"text-2xl shadow-smooth grid grid-cols-2 w-1/2 gap-6 mt-md mx-auto  p-10",children:[(0,a.jsx)(u,{data:d.capital}),(0,a.jsxs)(r.C,{children:[(0,a.jsx)("div",{className:"rounded-full p-3 bg-purple-100",children:(0,a.jsx)(t.vxs,{className:"h-5 text-embie-purple"})}),(0,a.jsx)(c.default,{href:"/people/#".concat(d.name),children:(0,a.jsx)("a",{href:"#".concat(d.name),children:(0,a.jsxs)("span",{className:"text-gray-600",children:[(s=d.population,s?s.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "):s)," "]})})})]}),(0,a.jsx)(u,{data:d.region}),(0,a.jsxs)(r.C,{children:[(0,a.jsx)("div",{className:"rounded-full p-3 bg-blue-100",children:(0,a.jsx)(t.T39,{className:"h-5 text-embie-lightblue"})}),(0,a.jsx)("span",{className:"text-gray-600 overflow-hidden overflow-scroll-contain",children:(0,a.jsx)("ul",{children:d.timezones?d.timezones.map((function(e,s){return(0,a.jsx)("li",{className:"text-gray-600 ",children:(0,a.jsx)(c.default,{href:"/timezones/".concat(e),children:(0,a.jsx)("a",{className:"flex items-center",children:e})})},s)})):"error"})})," "]}),(0,a.jsx)(u,{data:d.demonym}),(0,a.jsxs)(r.C,{children:[(0,a.jsx)("div",{className:"rounded-full p-3 bg-red-100",children:(0,a.jsx)(t.T9q,{className:"h-5 text-embie-red"})}),(0,a.jsx)("span",{className:"text-gray-600",children:(0,a.jsx)(x,{})})]}),(0,a.jsxs)(r.C,{children:[(0,a.jsx)("div",{className:"rounded-full p-3 bg-gray-100",children:(0,a.jsx)(t.UK3,{className:"h-5 text-gray-600"})}),(0,a.jsx)("span",{className:"text-gray-600",children:(0,a.jsx)(h,{})})]}),(0,a.jsx)(m,{}),parseInt(d.callingCodes)?(0,a.jsxs)(r.C,{children:[(0,a.jsx)("div",{className:"rounded-full p-3 bg-green-100",children:(0,a.jsx)(t.qWc,{className:"h-5 text-green-700"})}),(0,a.jsxs)("span",{className:"text-gray-600",children:["+",d.callingCodes]})]}):(0,a.jsx)("div",{className:"hidden"})]})]}):(0,a.jsx)("div",{className:"",children:"404"})]})}},2483:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/countries/[name]",function(){return n(458)}])}},function(e){e.O(0,[489,774,888,179],(function(){return s=2483,e(e.s=s);var s}));var s=e.O();_N_E=s}]);