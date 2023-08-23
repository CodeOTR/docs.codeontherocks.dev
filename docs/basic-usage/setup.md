---
sidebar_position: 1
---

# Setup

Every screen that appears in your application will have a `ViewModel` and a `ViewModelBuilder`.

The ViewModel is a [State](https://api.flutter.dev/flutter/widgets/State-class.html) object that introduces an InheritedWidget to the widget tree. This is where your business logic will live.

```dart
class HomeViewModel extends ViewModel<HomeViewModel> {
  
  // For convenience, you can add a static .of_ getter. This is optional
  static HomeViewModel of_(BuildContext context) => getModel<HomeViewModel>(context);

  // Here is where you will add your business logic and state properties
  // Notice that you have access to setState here
  ValueNotifier<int> counter = ValueNotifier(0);

  void incrementCounter() {
    setState(() {
      counter.value++;
    });
  }
}
```

The ViewModelBuilder is a [StatefulWidget](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) that you will include in your widget tree. ViewModelBuilder creates the ViewModel from above.

```dart
 class HomeViewModelBuilder extends ViewModelBuilder<HomeViewModel> {
  const HomeViewModelBuilder({
    super.key,
    required super.builder,
  });

  // Override createState to create the specific ViewModel from above
  @override
  State<StatefulWidget> createState() => HomeViewModel();
}
 ```

 Once you have your ViewModel and ViewModelBuilder, add the ViewModelBuilder to your widget tree:
```dart
return Scaffold(
      body: HomeViewModelBuilder(
        builder: (context, model) {
          return Text('Test')
        },
      ),
    );
```