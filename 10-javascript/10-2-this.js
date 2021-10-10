//this 는 호출한 사람 문맥

console.log(this); //window가 호출

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();
console.clear();

class Counter {
  count = 0;
  increase = () => {
    //arrow로 하면 그 당시 스코프와 this context를 유지
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); //this 가 counter 객체로 바뀜
const caller = counter.increase;
//const caller = counter.increase.bind(counter);
caller(); //this를 잃어버림

//변수는 글로벌 객체에 등록되지 않는다

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
