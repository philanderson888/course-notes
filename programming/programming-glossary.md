# Programming Glossary

## Contents

- [Programming Glossary](#programming-glossary)
  - [Contents](#contents)
  - [Glossary](#glossary)
  - [i](#i)
    - [Imperative Programming](#imperative-programming)
  - [m](#m)
    - [Mixin](#mixin)


## Glossary

## i

### Imperative Programming

Answers 'how to do' this problem with workflow control 

Imperative programming languages (C, C++, Java, Python …)


## m 

### Mixin

mixins allow code to be `injected`

see 

```java
class MixinParent {
  parentBehaviour() {
    print('parent is doing this');
  }
}

class MixinChild01 extends MixinParent {
  @override
  parentBehaviour() {
    print(' ');
    super.parentBehaviour();
    print('mixinChild01 also has some extra unique behaviour');
  }
}

class MixinChild02 extends MixinParent {
  @override
  parentBehaviour() {
    print(' ');
    super.parentBehaviour();
    print('mixinChild02 also has some extra unique behaviour');
  }
}

class MixinChild03 extends MixinParent with InjectCode01, InjectCode02 {
  @override
  parentBehaviour() {
    print(' ');
    super.parentBehaviour();
    print('mixinChild03 also has some extra unique behaviour');
  }
}

mixin InjectCode01 {
  uniqueBehaviour01() {
    print('doing some pretty unique stuff');
  }
}

mixin InjectCode02 {
  uniqueBehaviour02() {
    print('doing some more pretty unique stuff');
  }
}
```

used by 

```java
print('mixin demo');
print(' ');
var mixinParent = MixinParent();
var mixinChild01 = MixinChild01();
var mixinChild02 = MixinChild02();
var mixinChild03 = MixinChild03();
mixinParent.parentBehaviour();
mixinChild01.parentBehaviour();
mixinChild02.parentBehaviour();
mixinChild03.parentBehaviour();
mixinChild03.uniqueBehaviour01();
mixinChild03.uniqueBehaviour02();
/*
mixin demo

parent is doing this

parent is doing this
mixinChild01 also has some extra unique behaviour

parent is doing this
mixinChild02 also has some extra unique behaviour

parent is doing this
mixinChild03 also has some extra unique behaviour
doing some pretty unique stuff
doing some more pretty unique stuff
*/
```