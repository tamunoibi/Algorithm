class TuringClass {
  readonly myReadonlyProperty = 1;
    turingMethod() {
      console.log(this.myReadonlyProperty);
    }
}
  new TuringClass().myReadonlyProperty = 5;