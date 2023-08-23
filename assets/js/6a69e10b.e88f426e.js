"use strict";(self.webpackChunkcotr_guide=self.webpackChunkcotr_guide||[]).push([[638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="Update Your UI",l={unversionedId:"basic-usage/update-data",id:"basic-usage/update-data",title:"Update Your UI",description:"You can rebuild the widgets in your UI one of two ways.",source:"@site/docs/basic-usage/update-data.md",sourceDirName:"basic-usage",slug:"/basic-usage/update-data",permalink:"/docs.codeontherocks.dev/docs/basic-usage/update-data",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Access Data",permalink:"/docs.codeontherocks.dev/docs/basic-usage/accessing-data"},next:{title:"\ud83d\udd2c Advanced Usage",permalink:"/docs.codeontherocks.dev/docs/category/-advanced-usage"}},u={},s=[{value:"1. Call <code>setState</code>",id:"1-call-setstate",level:3},{value:"2. Use ValueNotifiers and ValueListenableBuilders",id:"2-use-valuenotifiers-and-valuelistenablebuilders",level:3}],d={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update-your-ui"},"Update Your UI"),(0,a.kt)("p",null,"You can rebuild the widgets in your UI one of two ways."),(0,a.kt)("h3",{id:"1-call-setstate"},"1. Call ",(0,a.kt)("inlineCode",{parentName:"h3"},"setState")),(0,a.kt)("p",null,"Since the ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewModelBuilder")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"StatefulWidget")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewModel")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"State")," object, you have access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," method in the model. When data changes and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewModelBuilder")," UI should redraw, call ",(0,a.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/State/setState.html"},"setState"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class CounterViewModel extends ViewModel<CounterViewModel> {\n  int counter = 0;\n\n  void increment() {\n    setState(() => counter = counter + 1);\n  }\n\n  void decrement() {\n    setState(() => counter = counter - 1);\n  }\n}\n")),(0,a.kt)("div",{class:"alert alert--warning",role:"alert"},"Calling setState when data changes will rebuild the entire widget tree inside your ViewModelBuilder."),(0,a.kt)("h3",{id:"2-use-valuenotifiers-and-valuelistenablebuilders"},"2. Use ValueNotifiers and ValueListenableBuilders"),(0,a.kt)("p",null,"If you would like more control over what parts of your UI rebuild when data is updated, wrap the values inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewModel")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"ValueNotifiers"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class CounterViewModel extends ViewModel<CounterViewModel> {\n\n  ValueNotifier<int> secretCounter = ValueNotifier(0);\n  \n  void incrementSecretCounter(){\n    secretCounter.value = secretCounter.value + 1;\n  }\n\n  void decrementSecretCounter(){\n    secretCounter.value = secretCounter.value - 1;\n  }\n\n}\n")),(0,a.kt)("p",null,"Then, wrap the parts of your UI that should be updated when this value changes in a ",(0,a.kt)("inlineCode",{parentName:"p"},"ValueListenableBuilder"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class CounterView extends StatelessWidget {\n  const CounterView({Key? key}) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    return CounterViewModelBuilder(\n      builder: (context, model) {\n        debugPrint('building');\n        return Scaffold(\n          appBar: AppBar(title: const Text('Counter')),\n          body: Center(child: ValueListenableBuilder( // Wrap the Text Widget\n             valueListenable: model.secretCounter,\n            builder: (context, value, child) {\n              return Text('$value');\n            }\n          )),\n          floatingActionButton: Column(\n            mainAxisAlignment: MainAxisAlignment.end,\n            crossAxisAlignment: CrossAxisAlignment.end,\n            children: [\n              FloatingActionButton(\n                key: const Key('increment'),\n                child: const Icon(Icons.add),\n                onPressed: () => CounterViewModel.of_(context).incrementSecretCounter(),\n              ),\n              const SizedBox(height: 8),\n              FloatingActionButton(\n                key: const Key('decrement'),\n                child: const Icon(Icons.remove),\n                onPressed: () => CounterViewModel.of_(context).decrementSecretCounter(),\n              ),\n            ],\n          ),\n        );\n      },\n    );\n  }\n}\n")))}p.isMDXComponent=!0}}]);