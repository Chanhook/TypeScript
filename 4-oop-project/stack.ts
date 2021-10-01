//어떤 api를 받을지 규격을 정해보자 ==> Interface!
interface Stack {
  push(value: string): void;
  pop(): string;
  readonly size: number; // 값이 변경되지 않음
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode; //값이 있고 없고
};

class StackImpl implements Stack {
  private _size: number = 0; //내부에서만 쓰이는 변수구나 ( _ )
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node: StackNode = {
      value,
      next: this.head,
    };
    this.head = node;
    this._size += 1;
  }

  pop(): string {
    //null == undefined , null!==undefined
    if (this.head == null) {
      throw new Error("Stack is empty!!");
    }
    const node = this.head;
    this.head = node.next;
    this._size -= 1;
    return node.value;
  }
}

const myStack = new StackImpl(3);
myStack.push("a");
myStack.push("b");
myStack.push("c");
while (myStack.size !== 0) {
  console.log(myStack.pop());
}
