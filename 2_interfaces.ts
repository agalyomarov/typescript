interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect_1: Rect = {
  id: "1234",
  size: {
    width: 10,
    height: 10,
  },
  color: "#ccc",
};

const rect_2: Rect = {
  id: "1234",
  size: {
    width: 10,
    height: 10,
  },
};

rect_2.color = "black";

const rect_3 = {} as Rect;
const rect_4 = <Rect>{};

interface RectWithArea extends Rect {
  get_area: () => number;
}

const rect_5: RectWithArea = {
  id: "123",
  size: {
    width: 20,
    height: 20,
  },
  get_area(): number {
    return this.size.width * this.size.height;
  },
};

interface IClock {
  time: Date;
  set_time(date: Date): void;
  get_time: () => Date;
}

class Clock implements IClock {
  time: Date = new Date();
  set_time(date: Date): void {
    this.time = date;
  }
  get_time(): Date {
    return this.time;
  }
}

interface Style {
  [key: string]: string;
}

const css: Style = {
  border: "1px solid black",
  margin_top: "2px",
  border_radius: "5px",
};

interface Example {
  [key: number]: string;
}

const example: Example = {
  0: "0",
  1: "1",
  2: "2",
};
