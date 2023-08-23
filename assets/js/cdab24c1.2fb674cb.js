"use strict";(self.webpackChunkcotr_guide=self.webpackChunkcotr_guide||[]).push([[1827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:i,a[1]=d;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},a="Test a ViewModelBuilder",d={unversionedId:"testing/view-model-builder-test",id:"testing/view-model-builder-test",title:"Test a ViewModelBuilder",description:"ViewModelBuilders are StatefulWidgets which means they need to be tested using the WidgetTester. They can be tested like any other widget as shown here.",source:"@site/docs/testing/view-model-builder-test.md",sourceDirName:"testing",slug:"/testing/view-model-builder-test",permalink:"/docs/testing/view-model-builder-test",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Test a ViewModel",permalink:"/docs/testing/view-model-test"},next:{title:"\u2728 Example Apps",permalink:"/docs/category/-example-apps"}},l={},s=[],c={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-a-viewmodelbuilder"},"Test a ViewModelBuilder"),(0,i.kt)("p",null,"ViewModelBuilders are StatefulWidgets which means they need to be tested using the WidgetTester. They can be tested like any other widget as shown here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"  testWidgets('CounterViewModel UI test', (WidgetTester tester) async {\n    // Setup - Arrange\n    await tester.pumpWidget(MaterialApp(builder: (context, child) => const CounterView()));\n    final CounterViewModel model = tester.state(find.byType(CounterViewModelBuilder));\n\n    // finders\n    final counterFinder = find.text('Counter');\n    final incrementFinder = find.byIcon(Icons.add);\n    final decrementFinder = find.byIcon(Icons.remove);\n\n    expect(counterFinder, findsOneWidget);\n    expect(incrementFinder, findsOneWidget);\n    expect(decrementFinder, findsOneWidget);\n  });\n")),(0,i.kt)("p",null,"You can update the model directly to verify that the UI updates appropriately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"  testWidgets('CounterViewModel UI test', (WidgetTester tester) async {\n    // Setup - Arrange\n    await tester.pumpWidget(MaterialApp(builder: (context, child) => const CounterView()));\n    final CounterViewModel model = tester.state(find.byType(CounterViewModelBuilder));\n\n    model.setState(() => model.counter = 7);\n\n    await tester.pump();\n\n    // finders\n    final countFinder = find.text('7');\n\n    expect(countFinder, findsOneWidget);\n  });\n")))}p.isMDXComponent=!0}}]);