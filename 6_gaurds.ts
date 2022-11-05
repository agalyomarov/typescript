function strip(x: string | number): string {
  if (typeof x === "number") {
    return "x is number";
  }
  if (typeof x === "string") {
    return "x is string";
  }
}

class MyError {
  public header: string;
  public error: string;
}

class MyResponses {
  public header: string;
  public info: string;
}

const error = new MyError();
error.header = "Error header";
error.error = "Error body";

const responses = new MyResponses();
responses.header = "Responses header";
responses.info = "Responses body";

function handle(data: MyResponses | MyError) {
  if (data instanceof MyError) {
    return "data instancof MyError";
  }
  if (data instanceof MyResponses) {
    return "data instancof MyResponses";
  }
}

console.log(handle(error));
console.log(handle(responses));

type AlertType = "success" | "danger" | "warning";

function set_alert_type(type: AlertType) {
  //....
}

set_alert_type("success");
set_alert_type("danger");
set_alert_type("warning");

type Animals = "Cat" | "Dog" | "Eagle";

function set_type_animals(type: Animals) {
  return type;
}

console.log(set_type_animals("Cat"));
console.log(set_type_animals("Dog"));
console.log(set_type_animals("Eagle"));
