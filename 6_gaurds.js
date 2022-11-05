function strip(x) {
    if (typeof x === "number") {
        return "x is number";
    }
    if (typeof x === "string") {
        return "x is string";
    }
}
var MyError = /** @class */ (function () {
    function MyError() {
    }
    return MyError;
}());
var MyResponses = /** @class */ (function () {
    function MyResponses() {
    }
    return MyResponses;
}());
var error = new MyError();
error.header = "Error header";
error.error = "Error body";
var responses = new MyResponses();
responses.header = "Responses header";
responses.info = "Responses body";
function handle(data) {
    if (data instanceof MyError) {
        return "data instancof MyError";
    }
    if (data instanceof MyResponses) {
        return "data instancof MyResponses";
    }
}
console.log(handle(error));
console.log(handle(responses));
function set_alert_type(type) {
    //....
}
set_alert_type("success");
set_alert_type("danger");
set_alert_type("warning");
function set_type_animals(type) {
    return type;
}
console.log(set_type_animals("Cat"));
console.log(set_type_animals("Dog"));
console.log(set_type_animals("Eagle"));
