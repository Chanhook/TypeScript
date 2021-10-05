{
  type Video = {
    title: string;
    author: string;
  };

  //[1,2].map(item=>item*item); //[1,4]

  type Optional<T> = {
    [P in keyof T]?: T[P]; // [] == for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]?: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "hel",
  };

  type Animal = {
    name: string;
    age: number;
  };

  type AnimalOptional = Optional<Animal>;
  const animalOp: AnimalOptional = {
    age: 10,
  };

  type ReadOnlyAnimal = ReadOnly<Animal>;
  const animalRO: ReadOnlyAnimal = {
    name: "ekk",
    age: 10,
  };
  // animalRO.age=11;  readonly 라 error

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
