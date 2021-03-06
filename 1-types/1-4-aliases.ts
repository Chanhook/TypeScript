{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "elie",
    age: 12,
  };
  console.log(student.age);
  /**
   * String Literal Types
   */
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  const t: Boal = true;
}
