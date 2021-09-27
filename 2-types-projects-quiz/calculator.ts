/**
 * Let's make a calculator 🧮
 */
type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(action: Command, num1: number, num2: number): number {
  if (action === "add") {
    return num1 + num2;
  } else if (action === "substract") {
    return num1 - num2;
  } else if (action === "multiply") {
    return num1 * num2;
  } else if (action === "divide") {
    return num1 / num2;
  } else if (action === "remainder") {
    return num1 % num2;
  }
  throw new Error("unknown error");
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
