{
  //JavaScript 💩
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //TypeScript ⭐️
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  //   //JavaScript 💩
  //   function jsFetchNum(id) {
  //     // code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   //TypeScript ⭐️
  //   function tsFetchNum(id: string): Promise<number> {
  //     // code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //JavaScript ⭐️ => TypeScript
  //Optional parameter
  //물음표 이용
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("steve", "jobs");
  printName("Ellie");
  printName("Anna", undefined);

  //Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  //Rest parameter
  function addNumbers(...theArgs: number[]): number {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
