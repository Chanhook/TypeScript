{
  /**
   * Type Assertions π© λ°±νΌ μ₯λ΄ν λλ§
   */
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  //   const wrong: any=5;
  //   console.log((wrong as Array<number>).push(1)); π©
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(1); //π±

  const button = document.querySelector("class")!; //100% μΌλ λ€μ λλν
  if (button) {
    button.nodeValue;
  }
}
