# JavaScript Objects, Prototypes and Classes
This is the demo code for the Pluralsight course at https://app.pluralsight.com/courses/javascript-objects-prototypes-and-classes

## Class

```
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}
```

### constructor
 calls the constructor() method every time it creates a new instance of a class.
```
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```
