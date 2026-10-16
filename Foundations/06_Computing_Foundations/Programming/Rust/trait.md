# Rust trait

## trait Object

### trait object define

```rust
trait Draw {
    fn draw(&self) -> String;
}

impl Draw for u8 {
    fn draw(&self) -> String {
        format!("u8: {}", *self)
    }
}

impl Draw for f64 {
    fn draw(&self) -> String {
        format!("f64: {}", *self)
    }
}

// 若 T 实现了 Draw 特征， 则调用该函数时传入的 Box<T> 可以被隐式转换成函数参数签名中的 Box<dyn Draw>
fn draw1(x: Box<dyn Draw>) {
    // 由于实现了 Deref 特征，Box 智能指针会自动解引用为它所包裹的值，然后调用该值对应的类型上定义的 `draw` 方法
    x.draw();
}

fn draw2(x: &dyn Draw) {
    x.draw();
}

fn main() {
    let x = 1.1f64;
    // do_something(&x);
    let y = 8u8;

    // x 和 y 的类型 T 都实现了 `Draw` 特征，因为 Box<T> 可以在函数调用时隐式地被转换为特征对象 Box<dyn Draw> 
    // 基于 x 的值创建一个 Box<f64> 类型的智能指针，指针指向的数据被放置在了堆上
    draw1(Box::new(x));
    // 基于 y 的值创建一个 Box<u8> 类型的智能指针
    draw1(Box::new(y));
    draw2(&x);
    draw2(&y);
}
```

### trait object dynamic dispatch

泛型是在编译器完成处理的：编译器会为每一个泛型参数对应的具体类型生成一份代码，这种方式是**静态派发(static dispatch)**，因为是在编译器完成的，对于运行起性能完全没有任何影响。

与静态派发相对应的是**动态派发(dynamic dispatch)**，在这种情况下，直到运行时，才能确定需要调用什么方法。上面的代码关键字 `dyn` 正是在强调这一“动态”的特点。 

当使用特征对象时，Rust 必须使用动态分发。编译器无法知晓所有可能用于特征对象代码的类型，所以它也不知道应该调用哪个类型的哪个方法实现。为此，Rust 在运行时使用特征对象中的指针来知晓需要调用哪个方法。动态分发也阻止编译器有选择的内联方法代码，这会相应的禁用一些优化。

![](trait/trait_object.jpg)

![](trait/trait_object_layout.jpg)

- trait object 大小不固定

- 几乎总是使用 trait object 的引用
  
  - trait object 没有固定大小，但是引用类型的大小固定，它由两个指针组成，因此占两个指针大小。
  
  - `ptr` 指向实现 trait  的具体类型
  
  - `vptr` 指向一个虚表 `vtable`，`vtable` 中保存了类型实现 trait 的方法。

### Self & self

`self` 指代 trait object 而 `Self` 指代具体类型。

### trait object Limitation

不是所有 trait 都拥有 trait object，只有对象安全的 trait 才可以，当 trait 满足以下属性，它的对象才是安全的：

- 方法的返回类型不能是 `Self`

- 方法没有任何泛型参数

例如 `Clone` 就不符合对象安全的要求：

```rust
pub trait Clone {
    fn clone(&self) -> Self;
}
```

## 关联类型

关联类型是在特征定义的语句块中，声明一个自定义类型，这样就可以在特征的方法签名中使用该类型：

```rust
pub trait Iterator {
    type Item;

    fn next(&mut self) -> Option<Self::Item>;
}
```

`Self` 用来指代当前调用者的具体类型，那么 `Self::Item` 就用来指代该类型实现中定义的 `Item` 类型：

```rust
impl Iterator for Counter {
    type Item = u32;

    fn next(&mut self) -> Option<Self::Item> {
        // --snip--
    }
}

fn main() {
    let c = Counter{..}
    c.next()
}
```

## Object Safe

如果一个 trait object 具备如下特征，称其为 Object Safe 的 trait:

- 所有 supertraits 必须是对象安全的

- `Sized` 不能是 supertrait。换句话说，不应该需要 `Self: Sized`

- 禁止有任何关联常数

- 禁止有带范型的关联类型

- 所有关联函数要么可以从 trait object 中派发，要么明确不可派发：
  
  - 可派发函数需要：
    
    - 没有任何类型参数（尽管允许生命周期参数）
    
    - 不使用 `Self` 的方法
    
    - 具有以下类型之一：
      
      - `&self`
      
      - `&mut self`
      
      - `Box<Self>`
      
      - `Rc<Self>`
      
      - `Arc<Self>`
      
      - `Pin<P>`，P 是以上几个类型之一
    
    - 没有 `where Self: Sized` 绑定
  
  - 显式的不可派发函数需要：
    
    - 有 `where Self: Sized` 绑定

```rust
// Examples of object safe methods.
trait TraitMethods {
    fn by_ref(self: &Self) {}
    fn by_ref_mut(self: &mut Self) {}
    fn by_box(self: Box<Self>) {}
    fn by_rc(self: Rc<Self>) {}
    fn by_arc(self: Arc<Self>) {}
    fn by_pin(self: Pin<&Self>) {}
    fn with_lifetime<'a>(self: &'a Self) {}
    fn nested_pin(self: Pin<Arc<Self>>) {}
}
```

```rust
// This trait is object-safe, but these methods cannot be dispatched on a trait object.
trait NonDispatchable {
    // Non-methods cannot be dispatched.
    fn foo() where Self: Sized {}
    // Self type isn't known until runtime.
    fn returns(&self) -> Self where Self: Sized;
    // `other` may be a different concrete type of the receiver.
    fn param(&self, other: Self) where Self: Sized {}
    // Generics are not compatible with vtables.
    fn typed<T>(&self, x: T) where Self: Sized {}
}

struct S;
impl NonDispatchable for S {
    fn returns(&self) -> Self where Self: Sized { S }
}
let obj: Box<dyn NonDispatchable> = Box::new(S);
obj.returns(); // ERROR: cannot call with Self return
obj.param(S);  // ERROR: cannot call with Self parameter
obj.typed(1);  // ERROR: cannot call with generic type
```

```rust
// Examples of non-object safe traits.
trait NotObjectSafe {
    const CONST: i32 = 1;  // ERROR: cannot have associated const

    fn foo() {}  // ERROR: associated function without Sized
    fn returns(&self) -> Self; // ERROR: Self in return type
    fn typed<T>(&self, x: T) {} // ERROR: has generic type parameters
    fn nested(self: Rc<Box<Self>>) {} // ERROR: nested receiver not yet supported
}

struct S;
impl NotObjectSafe for S {
    fn returns(&self) -> Self { S }
}
let obj: Box<dyn NotObjectSafe> = Box::new(S); // ERROR
```

```rust
// Self: Sized traits are not object-safe.
trait TraitWithSize where Self: Sized {}

struct S;
impl TraitWithSize for S {}
let obj: Box<dyn TraitWithSize> = Box::new(S); // ERROR
```

```rust
// Not object safe if `Self` is a type argument.
trait Super<A> {}
trait WithSelf: Super<Self> where Self: Sized {}

struct S;
impl<A> Super<A> for S {}
impl WithSelf for S {}
let obj: Box<dyn WithSelf> = Box::new(S); // ERROR: cannot use `Self` type parameter
```

## Supertraits
