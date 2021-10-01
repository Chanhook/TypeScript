//어떤 api를 받을지 규격을 정해보자 ==> Interface!
interface Stack<T> {
  push(value: T): void;
  pop(): T;
  readonly size: number; // 값이 변경되지 않음
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>; //값이 있고 없고
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0; //내부에서만 쓰이는 변수구나 ( _ )
  private head?: StackNode<T>;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: T): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node: StackNode<T> = {
      value,
      next: this.head,
    };
    this.head = node;
    this._size += 1;
  }

  pop(): T {
    this._size -= 1;
    //null == undefined , null!==undefined
    if (this.head == null) {
      throw new Error("Stack is empty!!");
    }
    const node = this.head;
    this.head = node.next;
    return node.value;
  }
}
const myStack2 = new StackImpl<number>(3);
myStack2.push(1);
myStack2.push(2);
myStack2.push(3);
while (myStack2.size !== 0) {
  console.log(myStack2.pop());
}

const myStack = new StackImpl(3);
myStack.push("a");
myStack.push("b");
myStack.push("c");
while (myStack.size !== 0) {
  console.log(myStack.pop());
}
