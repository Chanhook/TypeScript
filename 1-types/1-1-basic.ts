{
    //JavaScript
    //old: var
    var age=5;
    age=1;

    //let es6
    let name = 'hello';
    name='hi';

    //const
    const age=5;
    // age=5; error!

    /*
    javaScript
    Primitive: number, string, boolean, bigint, symbol, null, undefined 7κ°μ§
    Object: function, array ...
    */

    //number
    const num:number = -6;

    //string
    const str:string = 'hello';

    //boolean
    const bool: boolean = false;

    //undefined
    let name: undefined; //error π©
    let age: number | undefined //λ°μ΄ν° νμμμ§ μ νμ§ λͺ»ν¨
    age=undefined;
    age=1;

    function find(): number|undefined{
        return undefined;
    }

    //null π©
    let person: null; // λ¨λμΌλ‘ μ°μ§ μμ
    let person2: string|null; //κ°μ΄ μ λ¬΄

    //π© unknown κ°λ₯νλ©΄ μ°μ§λ§λΌ
    let notSure: unknown =0;
    notSure = 'he';
    notSure= true;

    //any π©
    let anything: any = 0;
    anything = 'hello';

    //void
    function print():void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined; //π©

    //never λ¦¬ν΄μ΄ μλ€
    function throwError(message: string):never{
        //message -> server(log)
        throw new Error(message);
        while(true){} //μλ¬λλ©΄ μ¬κΈ° λλ¬ λΆκ°
    }
    let neverEnding: never; //π©

    //object π©
    let obj: object;
    function acceptSomeObject(obj:object){}
    acceptSomeObject({name:'ellie'});
    acceptSomeObject({animal:'dog'});
    

}