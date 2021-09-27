{
  /**
   * Type Inference 타입유추
   */
  let text = "hello";
  function print(message = "hello") {
    console.log(message);
  }

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
  
}
