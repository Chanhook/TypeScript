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
    Primitive: number, string, boolean, bigint, symbol, null, undefined 7가지
    Object: function, array ...
    */

    //number
    const num:number = -6;

    //string
    const str:string = 'hello';

    //boolean
    const bool: boolean = false;

    //undefined
    let name: undefined; //error 💩
    let age: number | undefined //데이터 타입아직 정하지 못함
    age=undefined;
    age=1;

    function find(): number|undefined{
        return undefined;
    }

    //null 💩
    let person: null; // 단독으로 쓰지 않음
    let person2: string|null; //값이 유무

    //💩 unknown 가능하면 쓰지마라
    let notSure: unknown =0;
    notSure = 'he';
    notSure= true;

    //any 💩
    let anything: any = 0;
    anything = 'hello';

    //void
    function print():void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined; //💩

    //never 리턴이 없다
    function throwError(message: string):never{
        //message -> server(log)
        throw new Error(message);
        while(true){} //에러되면 여기 도달 불가
    }
    let neverEnding: never; //💩

    //object 💩
    let obj: object;
    function acceptSomeObject(obj:object){}
    acceptSomeObject({name:'ellie'});
    acceptSomeObject({animal:'dog'});
    

}