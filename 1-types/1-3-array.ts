{
  //Array
  const fruits: string[] = ["π", "π"]; //Array<string> μ§μ x
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {
    // fruits.push() λΆκ°λ₯
  }

  //Tuple μλ‘ λ€λ₯Έ νμ λ°μ΄ν° λ΄κΈ° (λΉμΆ) => interface, type alias, class λμ²΄
  let student: [string, number];
  student = ["name1", 123];
  student[0]; // name
  student[1]; // 123

  const [name, age] = student;
  console.log(name);
}
