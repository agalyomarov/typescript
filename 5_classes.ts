class Typescript {
  version: string;
  constructor(version: string) {
    this.version = version;
  }
  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

// class Car {
//   readonly model: string;
//   readonly number_of_wheels: number = 4;
//   constructor(the_model: string) {
//     this.model = the_model;
//   }
// }

class Car {
  readonly number_of_wheels: number = 4;
  constructor(readonly model: string) {}
}

class Model {
  constructor(readonly model: string) {}
  get_model(): string {
    return this.model;
  }
}

const model = new Model("BMW");
console.log(model.get_model());

class Animal {
  protected voice: string = "";
  public color: string = "black";
  private go() {
    console.log("go");
  }
}

class Cat extends Animal {
  public set_voice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.set_voice("myaw");
console.log(cat.color);

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component rendered");
  }
  info(): string {
    return "This is info";
  }
}
