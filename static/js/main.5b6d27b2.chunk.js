(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,o=n(8),c=n.n(o),r=n(6),i=n(9),a=(n(7),n(1));n(14);!function(t){t.Alphabet="alphabet",t.Length="length",t.Default=""}(s||(s={}));var l=n(0),u=function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})},b=n(4),h=n.n(b),d=function(t){var e=t.sortPanelData,n=e.sortField,o=e.isReverse,c=e.setSortField,r=e.setIsReverse,i=n||o;return Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{onClick:function(){c(s.Alphabet)},type:"button",className:h()("button","is-info",{"is-light":n!==s.Alphabet}),children:"Sort alphabetically"}),Object(l.jsx)("button",{onClick:function(){c(s.Length)},type:"button",className:h()("button","is-success",{"is-light":n!==s.Length}),children:"Sort by length"}),Object(l.jsx)("button",{onClick:function(){r((function(t){return!t}))},type:"button",className:h()("button","is-warning",{"is-light":!o}),children:"Reverse"}),i&&Object(l.jsx)("button",{onClick:function(){c(s.Default),r(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(){var t=Object(a.useState)(s.Default),e=Object(r.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(!1),b=Object(r.a)(c,2),h=b[0],g=b[1],f=function(t,e){var n=e.sortField,o=e.isReverse,c=Object(i.a)(t);return n&&c.sort((function(t,e){switch(n){case s.Alphabet:return t.localeCompare(e);case s.Length:return t.length-e.length;default:return 0}})),o?c.reverse():c}(j,{sortField:n,isReverse:h});return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsx)(d,{sortPanelData:{sortField:n,isReverse:h,setSortField:o,setIsReverse:g}}),Object(l.jsx)(u,{goods:f})]})};c.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5b6d27b2.chunk.js.map