export class MyClass {
  /**
   * MyMethod
   * * Important information is highlighted
   * ! Deprecated method, do not use
   * ? Should this method be exposed in the public API?
   * TODO: refactor this method so that it conforms to the API
   * @param myParam The parameter for this method
   */

  public MyMethod(myParam: any): void {
    let myVar: number = 123;

    //* This is highlighted
    if (myVar > 0) {
      throw new TypeError(); //! This is an alert
    }

    //? This is a query
    let x = 1;

    // this.lineOfCode == commentedOut

    //TODO: Create some test cases
  }
}
