(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),i=n.n(c),l=n(24),u=n.n(l),s=n(18),o=n(10),b=n(11),m=n(14),O=n(12),j=n(15),p=n(54),h=n(55),f=n(56),E=n(22),d=n(16),g=n(57),q=n(13),y=n(4),k=n.n(y),L=k.a.shape({name:k.a.string.isRequired,label:k.a.string.isRequired,href:k.a.string.isRequired}),v=(k.a.arrayOf(L),n(9)),w=Object(q.a)(function(e){return e.sidebar},function(e){return Object(v.get)(e,"linksList",[])}),R=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return c.createElement(g.a,null,c.createElement(g.a.Item,null,c.createElement(E.b,{to:"/"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")),this.props.linksList.map(function(e){return c.createElement(g.a.Item,{key:e.name},c.createElement(E.b,{to:"/".concat(e.href)},e.label))}))}}]),t}(c.PureComponent),x=Object(q.b)({linksList:w}),C=Object(s.b)(x)(R),D=n(19),P={name:"vectors",label:"\u0412\u0435\u043a\u0442\u043e\u0440\u044b",href:"vectors",questionsList:["\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u0442\u0440\u0435\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0430 \u043f\u043e 3 \u0442\u043e\u0447\u043a\u0430\u043c","\u041d\u0430\u0439\u0442\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u0432\u0435\u043a\u0442\u043e\u0440\u0430 c, \u043f\u0435\u0440\u043f\u0435\u043d\u0434\u0438\u043a\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0434\u0432\u0443\u043c \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0432\u0435\u043a\u0442\u043e\u0440\u0430\u043c, \u0437\u043d\u0430\u044f \u0435\u0433\u043e \u0434\u043b\u0438\u043d\u0443","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0431\u044a\u0451\u043c \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u044b"]},I={name:"linear-spaces",label:"\u041b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430",href:"linear-spaces",questionsList:["\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c","\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432 \u043d\u0430 \u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c","\u041d\u0430\u0439\u0442\u0438 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0435\u0435 \u043f\u043e\u0434\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0431\u0430\u0437\u0438\u0441 \u043f\u043e\u0434\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430, \u0435\u0441\u043b\u0438 \u043f\u043e\u0434\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0437\u0430\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e\u0440\u043e\u0434\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0439","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0431\u0430\u0437\u0438\u0441 \u0438 \u0440\u0430\u0437\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432 \u043f\u043e \u0431\u0430\u0437\u0438\u0441\u0443 \u0434\u043b\u044f \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0431\u0430\u0437\u0438\u0441 \u0441\u0443\u043c\u043c\u044b \u0438 \u0431\u0430\u0437\u0438\u0441 \u043f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u0434\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043c\u0430\u0442\u0440\u0438\u0446\u0443 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u043e\u0442 \u0431\u0430\u0437\u0438\u0441\u0430 \u043a \u0431\u0430\u0437\u0438\u0441\u0443","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u0432\u0435\u043a\u0442\u043e\u0440\u0430 \u0432 \u0434\u0440\u0443\u0433\u043e\u043c \u0431\u0430\u0437\u0438\u0441\u0435","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043c\u0430\u0442\u0440\u0438\u0446\u0443 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0432 \u0434\u0440\u0443\u0433\u043e\u043c \u0431\u0430\u0437\u0438\u0441\u0435","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043c\u0430\u0442\u0440\u0438\u0446\u0443 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0449\u0435\u0433\u043e \u0432\u0435\u043a\u0442\u043e\u0440\u043d\u043e\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u043c \u0431\u0430\u0437\u0438\u0441\u0435 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043c\u0430\u0442\u0440\u0438\u0446\u0443 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0432 \u0431\u0430\u0437\u0438\u0441\u0435, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u043c \u043c\u0430\u0442\u0440\u0438\u0446\u0430\u043c\u0438","\u041d\u0430\u0439\u0442\u0438 \u043c\u0430\u0442\u0440\u0438\u0446\u0443 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430, \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044f\u0449\u0435\u0433\u043e \u0432\u0435\u043a\u0442\u043e\u0440\u044b  \u043e\u0442 a \u043a b \u0432 \u0442\u043e\u043c \u0436\u0435 \u0431\u0430\u0437\u0438\u0441\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0434\u0430\u043d\u044b \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c, \u043c\u043e\u0433\u0443\u0442 \u043b\u0438 \u0434\u0432\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u043c\u0430\u0442\u0440\u0438\u0446\u044b \u0431\u044b\u0442\u044c \u043c\u0430\u0442\u0440\u0438\u0446\u0430\u043c\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0431\u0430\u0437\u0438\u0441\u0430\u0445","\u041d\u0430\u0439\u0442\u0438 \u043c\u0430\u0442\u0440\u0438\u0446\u0443 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u043f\u043b\u043e\u0441\u043a\u043e\u0441\u0442\u044c \u0432 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u043c \u0431\u0430\u0437\u0438\u0441\u0435","\u041d\u0430\u0439\u0442\u0438 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0432\u0435\u043a\u0442\u043e\u0440\u044b \u0438 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u0430\u0442\u0440\u0438\u0446\u0435\u0439","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0416\u043e\u0440\u0434\u0430\u043d\u043e\u0432\u0443 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u0443\u044e \u0444\u043e\u0440\u043c\u0443","\u041d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0416\u043e\u0440\u0434\u0430\u043d\u043e\u0432\u0430 \u0431\u0430\u0437\u0438\u0441\u0430","\u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u043e\u0440\u043c\u0430\u043b\u0438 \u043f\u043b\u043e\u0441\u043a\u043e\u0441\u0442\u0438 \u0438\u0437 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f","\u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u041b\u0438\u043d\u0435\u0439\u043d\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u043f\u043b\u043e\u0441\u043a\u043e\u0441\u0442\u044c","\u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f","\u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0416\u043e\u0440\u0434\u0430\u043d\u043e\u0432\u044b\u0445 \u043a\u043b\u0435\u0442\u043e\u043a, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e","\u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0447\u0438\u0441\u043b\u0430 \u0416\u043e\u0440\u0434\u0430\u043d\u043e\u0432\u044b\u0445 \u043a\u043b\u0435\u0442\u043e\u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0430","\u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0416\u043e\u0440\u0434\u0430\u043d\u043e\u0432\u0430 \u0431\u0430\u0437\u0438\u0441\u0430","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043e\u0442 \u043c\u0430\u0442\u0440\u0438\u0446\u044b \u0441 \u043e\u0434\u043d\u0438\u043c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043e\u0442 \u043c\u0430\u0442\u0440\u0438\u0446\u044b \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438","\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u043c\u0430\u0442\u0440\u0438\u0446\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u0440\u043d\u0435\u043c \u0441\u0432\u043e\u0435\u0433\u043e \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043c\u043d\u043e\u0433\u043e\u0447\u043b\u0435\u043d\u0430","\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u043d\u043e\u0433\u043e\u0447\u043b\u0435\u043d \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0416\u043e\u0440\u0434\u0430\u043d\u043e\u0432\u043e\u0439 \u0444\u043e\u0440\u043c\u044b","\u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043e\u0442 \u043c\u0430\u0442\u0440\u0438\u0446\u044b \u0441 \u043e\u0434\u043d\u0438\u043c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c","\u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043e\u0442 \u043c\u0430\u0442\u0440\u0438\u0446\u044b \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438","\u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043c\u043d\u043e\u0433\u043e\u0447\u043b\u0435\u043d\u0430 \u0416\u043e\u0440\u0434\u0430\u043d\u043e\u0432\u043e\u0439 \u043a\u043b\u0435\u0442\u043a\u0438"]},J=(a={},Object(D.a)(a,P.href,P),Object(D.a)(a,I.href,I),a),B={linksList:Object(v.map)(J,function(e){return Object(v.omit)(e,"questionsList")})},z=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return c.createElement(p.a,null,c.createElement(h.a,null,c.createElement(f.a,null,c.createElement("h1",null,"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u0414\u0438\u043a\u0442\u0430\u043d\u0442\u044b!"),c.createElement("p",null,"\n  \u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u043f\u0443\u043d\u043a\u0442\u043e\u0432 \u0441\u043f\u0440\u0430\u0432\u0430 \u0438 \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0430\u0439\u0442\u0435 \u043a \u0434\u0438\u043a\u0442\u0430\u043d\u0442\u0443\n"))))}}]),t}(c.PureComponent),A=Object(q.a)(function(e){return e["dictation-list"]},function(e,t){return Object(v.get)(t,"match.params.name")},function(e,t){return{header:Object(v.get)(e,[t,"label"],""),questionsList:Object(v.shuffle)(Object(v.get)(e,[t,"questionsList"],[]))}}),F=(k.a.shape({header:k.a.string.isRequired,questionsList:k.a.arrayOf(k.a.string.isRequired)}),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return c.createElement(p.a,null,c.createElement(h.a,null,c.createElement(f.a,null,c.createElement("h1",null,this.props.dictationData.header))),c.createElement(h.a,null,c.createElement(f.a,null,c.createElement("ul",null,0===this.props.dictationData.questionsList.length?"\u041f\u043e\u0447\u0435\u043c\u0443 \u0442\u043e \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445":this.props.dictationData.questionsList.map(function(e){return c.createElement("li",{key:e},e)})))))}}]),t}(c.PureComponent)),G=Object(q.b)({dictationData:A}),H=Object(s.b)(G)(F),K=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return c.createElement(p.a,{fluid:!0},c.createElement(E.a,{basename:"/dictations"},c.createElement(h.a,null,c.createElement(f.a,{xs:2},c.createElement(C,null)),c.createElement(f.a,null,c.createElement(d.c,null,c.createElement(d.a,{exact:!0,path:"/",component:z}),c.createElement(d.a,{exact:!0,path:"/:name",component:H}))))))}}]),t}(c.PureComponent),M=n(21),N=(r={},Object(D.a)(r,"sidebar",function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:B}),Object(D.a)(r,"dictation-list",function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:J}),r),Q=Object(M.c)(Object(M.b)(N));n(52);u.a.render(i.a.createElement(s.a,{store:Q},i.a.createElement(K,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.832b2fd2.chunk.js.map