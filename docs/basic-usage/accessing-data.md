---
sidebar_position: 2
---

# Access Data

There are several ways to access the ViewModel now that its added to your widget tree.

### 1. Use the provided "model" object:

```dart
return Scaffold(
      body: HomeViewModelBuilder(
        builder: (context, model) {
          return Text(model.title); // Add a title String to your ViewModel
        },
      ),
    );
```

### 2. Use the getModel\<T\> helper function:
Under the hood, the getModel function uses dependOnInheritedWidgetOfExactType to get the type you specify in the generic parameter T.

```dart
return Scaffold(
      body: HomeViewModelBuilder(
        builder: (context, model) {
          return Text(getModel<HomeViewModel>(context).title); // Add a title String to your ViewModel
        },
      ),
    );
```

### 3. Use the .of(context) method:
Each ViewModel has a built in .of() method. This is useful if you break your widget tree up and need to access the model in a different widget:
```dart
return Scaffold(
      body: HomeViewModelBuilder(
        builder: (context, model) {
          return Text(HomeViewModel().of(context).title); // Add a title String to your ViewModel
        },
      ),
    );
```
The .of(context) method only works on an instance of your ViewModel since [static members can't reference type parameters of a class](https://dart.dev/tools/diagnostic-messages?utm_source=dartdev&utm_medium=redir&utm_id=diagcode&utm_content=type_parameter_referenced_by_static#type_parameter_referenced_by_static). If you want to save yourself the time it takes to type the extra parenthesis, add a separate method directly in your View Model (classes can't have instance and static methods with the same name, hence the ".of_" vs ".of"):
```dart
class HomeViewModel extends ViewModel<HomeViewModel> {

  // Add this
  static HomeViewModel of_(BuildContext context) => getModel<HomeViewModel>(context);
}
```