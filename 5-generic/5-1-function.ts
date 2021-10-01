{
  function checkNotNull(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  function checkNotNullT<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  //타입 보장이 안됨 안전하지 않음!
  function checkNotNullBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const result = checkNotNullT(123); //타입이 결정됨
  console.log(result);
}
