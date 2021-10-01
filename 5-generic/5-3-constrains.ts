interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time`);
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time`);
  }

  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 리턴하는 함수는 💩💩💩
// function payBad(employee: Employee): Employee {
//   employee.pay();
//   return employee;
// }

function pay<T extends Employee>(employee: T): T {
  //아무 T는 무슨 타입이기 모르기 때문에 pay가 안나옴.
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();

const ellieAfterPay = pay(ellie);
const bodAfterPay = pay(bob);

ellieAfterPay.workFullTime();

//----------------

const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "🐕",
};

//타입을 완전 명시!!!!
//keyof 를 몰라서 틀렸따..
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name"));
console.log(getValue(obj, "age"));
console.log(getValue(obj2, "animal"));
