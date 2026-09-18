# 迭代器

## Methods

**reduce**

Reduces the elements to a single one, by repeatedly applying a reducing operation.

If the iterator is empty, returns None; otherwise, returns the result of the reduction.

The reducing function is a closure with two arguments: an ‘accumulator’, and an element. For iterators with at least one element, this is the same as fold() with the first element of the iterator as the initial accumulator value, folding every subsequent element into it.

`reduce` 元素到一个单一的结果，通过重复应用一个减少操作。

如果迭代器为空，返回 None；否则，返回 reduce 的结果。

`reduce` 是一个闭包，有两个参数：累加器，和一个元素。对于至少有一个元素的迭代器，这与 `fold()` 第一个元素为初始累加器值，将每个后续元素合并到它是一样的。


**fold**

Folds every element into an accumulator by applying an operation, returning the final result.

将每个元素应用于累加器，通过应用操作，返回最终结果。

**scan**

An iterator adapter which, like fold, holds internal state, but unlike fold, produces a new iterator.

`scan()` takes two arguments: an initial value which seeds the internal state, and a closure with two arguments, the first being a mutable reference to the internal state and the second an iterator element. The closure can assign to the internal state to share state between iterations.

On iteration, the closure will be applied to each element of the iterator and the return value from the closure, an Option, is returned by the next method. Thus the closure can return Some(value) to yield value, or None to end the iteration.

scan()方法类似于fold()方法，但是scan()方法返回的是一个新的迭代器。

`scan()` 输入两个参数：一个初始值，它会初始化内部状态，以及一个带有两个参数的闭包，第一个参数是可变引用，指向内部状态，第二个参数是迭代器元素。闭包可以将内部状态赋值，以便在迭代过程中共享状态。

在迭代过程中，闭包将被应用于迭代器的每个元素，并将闭包返回的 `Option` 作为 `next()` 方法的返回值。因此，闭包可以返回 `Some(value)`来生成 `value`，或者返回 `None` 来结束迭代。


