{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level
    private coffeeBeans: number = 0; // instance,object level

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat() {
      console.log("heating up ... ๐ฅ");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots} shots ... โ๏ธ`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    //readonly ํ๋ฒ ์ค์ ๋๋ฉด ๋ฐ๋์งใฃ ์์
    //๋ถ๋ชจ ์์ฑ์ ๊ทธ๋๋ก ๋ค ๋ฐ์์์ผํจ ํ๋ผ๋ฏธํฐ๋
    //๊ทธ๋ฆฌ๊ณ  super() ์จ์ผํจ
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk... ๐ฅ");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, "SSSS");
  const coffee = latteMachine.makeCoffee(1);
  console.log(latteMachine.serialNumber);
}
