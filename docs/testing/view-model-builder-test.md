---
sidebar_position: 2
---

# Test a ViewModelBuilder

ViewModelBuilders are StatefulWidgets which means they need to be tested using the WidgetTester. They can be tested like any other widget as shown here.

```dart
  testWidgets('CounterViewModel UI test', (WidgetTester tester) async {
    // Setup - Arrange
    await tester.pumpWidget(MaterialApp(builder: (context, child) => const CounterView()));
    final CounterViewModel model = tester.state(find.byType(CounterViewModelBuilder));

    // finders
    final counterFinder = find.text('Counter');
    final incrementFinder = find.byIcon(Icons.add);
    final decrementFinder = find.byIcon(Icons.remove);

    expect(counterFinder, findsOneWidget);
    expect(incrementFinder, findsOneWidget);
    expect(decrementFinder, findsOneWidget);
  });
```
You can update the model directly to verify that the UI updates appropriately:

```dart
  testWidgets('CounterViewModel UI test', (WidgetTester tester) async {
    // Setup - Arrange
    await tester.pumpWidget(MaterialApp(builder: (context, child) => const CounterView()));
    final CounterViewModel model = tester.state(find.byType(CounterViewModelBuilder));

    model.setState(() => model.counter = 7);

    await tester.pump();

    // finders
    final countFinder = find.text('7');

    expect(countFinder, findsOneWidget);
  });
```