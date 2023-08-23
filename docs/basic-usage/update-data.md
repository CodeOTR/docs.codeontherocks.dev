---
sidebar_position: 3
---

# Update Your UI

You can rebuild the widgets in your UI one of two ways.

### 1. Call `setState`
Since the `ViewModelBuilder` is a `StatefulWidget` and the `ViewModel` is a `State` object, you have access to the `setState` method in the model. When data changes and the `ViewModelBuilder` UI should redraw, call [setState](https://api.flutter.dev/flutter/widgets/State/setState.html):

```dart
class CounterViewModel extends ViewModel<CounterViewModel> {
  int counter = 0;

  void increment() {
    setState(() => counter = counter + 1);
  }

  void decrement() {
    setState(() => counter = counter - 1);
  }
}
```


<div class="alert alert--warning" role="alert">
 Calling setState when data changes will rebuild the entire widget tree inside your ViewModelBuilder.
</div>

### 2. Use ValueNotifiers and ValueListenableBuilders 

If you would like more control over what parts of your UI rebuild when data is updated, wrap the values inside your `ViewModel` in `ValueNotifiers`:

```dart
class CounterViewModel extends ViewModel<CounterViewModel> {

  ValueNotifier<int> secretCounter = ValueNotifier(0);
  
  void incrementSecretCounter(){
    secretCounter.value = secretCounter.value + 1;
  }

  void decrementSecretCounter(){
    secretCounter.value = secretCounter.value - 1;
  }

}
```
Then, wrap the parts of your UI that should be updated when this value changes in a `ValueListenableBuilder`:

```dart
class CounterView extends StatelessWidget {
  const CounterView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CounterViewModelBuilder(
      builder: (context, model) {
        debugPrint('building');
        return Scaffold(
          appBar: AppBar(title: const Text('Counter')),
          body: Center(child: ValueListenableBuilder( // Wrap the Text Widget
             valueListenable: model.secretCounter,
            builder: (context, value, child) {
              return Text('$value');
            }
          )),
          floatingActionButton: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              FloatingActionButton(
                key: const Key('increment'),
                child: const Icon(Icons.add),
                onPressed: () => CounterViewModel.of_(context).incrementSecretCounter(),
              ),
              const SizedBox(height: 8),
              FloatingActionButton(
                key: const Key('decrement'),
                child: const Icon(Icons.remove),
                onPressed: () => CounterViewModel.of_(context).decrementSecretCounter(),
              ),
            ],
          ),
        );
      },
    );
  }
}
```