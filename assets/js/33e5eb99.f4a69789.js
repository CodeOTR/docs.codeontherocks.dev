"use strict";(self.webpackChunkcotr_guide=self.webpackChunkcotr_guide||[]).push([[5774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>w});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,w=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(w,i(i({ref:t},s),{},{components:n})):o.createElement(w,i({ref:t},s))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="Reuse ViewModels",l={unversionedId:"advanced-usage/reuse-models",id:"advanced-usage/reuse-models",title:"Reuse ViewModels",description:"Extend a ViewModel",source:"@site/docs/advanced-usage/reuse-models.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/reuse-models",permalink:"/docs.codeontherocks.dev/docs/advanced-usage/reuse-models",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd2c Advanced Usage",permalink:"/docs.codeontherocks.dev/docs/category/-advanced-usage"},next:{title:"Services",permalink:"/docs.codeontherocks.dev/docs/advanced-usage/services"}},d={},c=[{value:"Extend a ViewModel",id:"extend-a-viewmodel",level:2},{value:"ViewModel Mixins",id:"viewmodel-mixins",level:2}],s={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reuse-viewmodels"},"Reuse ViewModels"),(0,r.kt)("h2",{id:"extend-a-viewmodel"},"Extend a ViewModel"),(0,r.kt)("p",null,"To share logic between multiple ViewModels, create a separate ViewModel with the shared logic. Be sure to include the generic type T in the ViewModel class definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:code_on_the_rocks/code_on_the_rocks.dart';\nimport 'package:flutter/foundation.dart';\n\nclass CounterViewModel<T> extends ViewModel<T> {\n  ValueNotifier<int> counter = ValueNotifier(0);\n\n  void increment() {\n    setState(() {\n      counter.value = counter.value + 1;\n    });\n  }\n}\n")),(0,r.kt)("p",null,"Then, extend the ViewModel in your other ViewModels. Pass the ViewModel type as the generic type T."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"class OneViewModel extends CounterViewModel<OneViewModel> {\n  static OneViewModel of_(BuildContext context) => getModel<OneViewModel>(context);\n}\n")),(0,r.kt)("p",null,"This approach is useful when the shared logic is simple and is only used in a few ViewModels."),(0,r.kt)("h2",{id:"viewmodel-mixins"},"ViewModel Mixins"),(0,r.kt)("p",null,"If you want more granular control over the which shared logic each ViewModel can use, Mixins are a better approach. Create a mixin for each piece of shared logic (again, remember to include the generic type T in the mixin class definition):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"mixin ColorMixin<T> on ViewModel<T>{\n  ValueNotifier<Color> color = ValueNotifier(Colors.blue);\n  \n  void setColor(Color val){\n    color.value = val;\n  }\n}\n")),(0,r.kt)("p",null,"Then, extend the ViewModel and include the mixins you want to use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"class TwoViewModel extends CounterViewModel<TwoViewModel> with ColorMixin{\n  static TwoViewModel of_(BuildContext context) => getModel<TwoViewModel>(context);\n}\n")))}p.isMDXComponent=!0}}]);