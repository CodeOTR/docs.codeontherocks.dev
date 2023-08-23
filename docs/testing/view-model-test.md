---
sidebar_position: 1
---

# Test a ViewModel

ViewModels in code_on_the_rocks are state objects so in order to test them, you need to build the corresponding StatefulWidget (ex. for the `CounterViewModel`, you need to build the `CounterViewModelBuilder`).

```dart
void main() {
  testWidgets('CounterViewModel smoke test', (WidgetTester tester) async {
    await tester.pumpWidget(MaterialApp(builder: (context, child) => const CounterView()));
  });
}
```

Once the ViewModelBuilder widget is added to the tree, you can use the [state method](https://api.flutter.dev/flutter/flutter_test/WidgetController/state.html) on WidgetTester to find the state object:
```dart
final CounterViewModel model = tester.state(find.byType(CounterViewModelBuilder));
```

With the model in hand, you can start test it's internal logic directly:

```dart
void main() {
  testWidgets('CounterViewModel smoke test', (WidgetTester tester) async {
    // Setup - Arrange
    await tester.pumpWidget(MaterialApp(builder: (context, child) => const CounterView()));
    final CounterViewModel model = tester.state(find.byType(CounterViewModelBuilder));

    // Action - Act
    model.increment();

    // Result - Assert
    expect(model.counter, 1);

    model.decrement();
    expect(model.counter, 0);
  });
}
```
<div class="alert alert--primary" role="alert">
  <a href="https://stackoverflow.com/a/42128652/12806961">See this StackOverflow answer by one of Flutter's lead engineers</a>
</div>