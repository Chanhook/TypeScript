{
  //Array
  const fruits: string[] = ["🍓", "🍊"]; //Array<string> 지원 x
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {
    // fruits.push() 불가능
  }

  //Tuple 서로 다른 타입 데이터 담기 (비추) => interface, type alias, class 대체
  let student: [string, number];
  student = ["name1", 123];
  student[0]; // name
  student[1]; // 123

  const [name, age] = student;
  console.log(name);
}
