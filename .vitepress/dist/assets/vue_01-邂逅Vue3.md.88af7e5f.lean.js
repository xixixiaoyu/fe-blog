import{_ as o,o as t,c as e,z as s,t as n,a,O as p}from"./chunks/framework.80a4594e.js";const V=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/01-邂逅Vue3.md","filePath":"vue/01-邂逅Vue3.md"}'),c={name:"vue/01-邂逅Vue3.md"},r=p("",48),D=s("li",null,"表示的是 Vue 需要帮助我们渲染的模板信息",-1),F=s("li",null,"里面的 HTML 标签会替换到我们挂载元素上的(比如 id 为 app 的 div)的 innerHTML",-1),y=s("li",null,"我们也可以直接将内容写在挂载元素之上",-1),i=s("h3",{id:"data-属性",tabindex:"-1"},[a("data 属性 "),s("a",{class:"header-anchor",href:"#data-属性","aria-label":'Permalink to "data 属性"'},"​")],-1),C=s("li",null,[a("传入一个函数，并且该函数需要返回一个对象 "),s("ul",null,[s("li",null,"在 Vue2.x 的时候，也可以传入一个对象（虽然官方推荐是一个函数）"),s("li",null,"在 Vue3.x 的时候，必须传入一个函数，否则就会直接在浏览器中报错")])],-1),A=p("",6);function u(l,d,h,g,m,q){return t(),e("div",null,[r,s("ul",null,[D,F,s("li",null,"模板中有一些特有的语法，比如 "+n()+"，比如 @click",1),y]),i,s("ul",null,[C,s("li",null,[a("data 中返回的对象会被 Vue 的响应式系统劫持，之后对该对象的修改或者访问都会在劫持中被处理 "),s("ul",null,[s("li",null,"所以我们在 template 中 可以通过 "+n(l.counter)+" 访问 data 返回的数据",1),s("li",null,"并且我们修改 counter 数据值时 template 中的 "+n(l.counter)+" 也会更新 即视图更新",1)])])]),A])}const b=o(c,[["render",u]]);export{V as __pageData,b as default};
