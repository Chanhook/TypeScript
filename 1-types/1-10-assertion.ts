{
  /**
   * Type Assertions 💩 백퍼 장담할때만
   */
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  //   const wrong: any=5;
  //   console.log((wrong as Array<number>).push(1)); 💩
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(1); //😱

  const button = document.querySelector("class")!; //100% 일때 뒤에 느낌표
  if (button) {
    button.nodeValue;
  }
}
