---
sidebar_position: 1
---

# Why Code on the Rocks?

Code on the Rocks (CotR) is a straightforward MVVM state management package that aims to make adopting and mastering Flutter a breeze. It was designed to be easy to learn, easy to use, and easy to transition away from if you'd like.

The goal of CotR is to stick as close to the Flutter framework as possible so that everything you learn is directly applicable to every other Flutter app you work on. With a little bit of practice, you should feel confident enough to remove all state management packages from your `pubspec.yaml` (yes, even this one 😭).

This package consists of 3 classes that each extend a core Flutter class:

| CotR | Flutter | MVVM |
| --- | --- | --- |
| ViewModelBuilder | StatefulWidget | View |
| ViewModel | State | ViewModel |
| ViewModelProvider | InheritedWidget | - |

The CotR classes abstract away some of the boilerplate required to implement this specific flavor of MVVM but you can implement it in pure Flutter with a little extra code.

If you take one thing away from implementing this package, it should be that Flutter by itself is more than capable of managing your entire app state.


## Another State Management Solution?

If you've been using Flutter for any amount of time, you're probably aware of the large list of state management packages that exist. I've listed the most popular ones below with some arbitrary complexity metrics.

| Package | # of Classes | # of Dependencies | 
| --- | --- | --- |
| [flutter_riverpod](https://pub.dev/packages/flutter_riverpod) | 106 | 4 |
| [get](https://pub.dev/packages/get) | 96 | 0 |
| [stacked](https://pub.dev/packages/stacked) | 84 | 7 |
| [states_rebuilder](https://pub.dev/packages/states_rebuilder) | 53 | 4 |
| [provider](https://pub.dev/packages/provider) | 46 | 2 |
| [flutter_bloc](https://pub.dev/packages/flutter_bloc) | 26 | 2 |
| [mvc_pattern](https://pub.dev/packages/mvc_pattern) | 10 | 1 |
| [flutter_mobx](https://pub.dev/packages/flutter_mobx) | 6 | 1 | 
| [flutter_redux](https://pub.dev/packages/flutter_redux/versions) | 3 | 1 |
| [scoped_model](https://pub.dev/packages/scoped_model) | 3 | 0 |

<div class="alert alert--secondary" role="alert">
  This data was collected in August, 2023
</div>


<br/>


I find complexity in a state management solution unnecessary, especially considering the inherent power of Flutter. Why add more when you can get by with less? With that in mind, I wanted to create a lightweight solution that was simple and, of course, different than what was already available.

## Isn't this ScopedModel?

Of all the currently available state management packages, code_on_the_rocks is most similar to scoped_model, but there are a few differences.
- scoped_model Models are ChangeNotifiers. CotR ViewModels are State objects.
- In scoped_model, ScopedModels use AnimationBuilders to listen to their Models. In CotR, ViewModelBuilders are StatefulWidget that get rebuilt when setState is called.
- ScopedModels require the Model to be passed in as an argument. A ViewModelBuilder is unique to a ViewModel and does not require an argument.
- ViewModels in CotR can override the initState and dispose methods of the State class.
