function add(a, b) {
    return a + b;
}
function to_upper_case(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return {
            x: undefined,
            y: undefined
        };
    }
    if (a && !b) {
        return {
            x: a,
            y: undefined,
            "default": a.toString()
        };
    }
    return {
        x: a,
        y: b
    };
}
console.log("Empty: ", position());
console.log("One param: ", position(42));
console.log("Two param: ", position(10, 15));
function example(a, b) {
    if (a && b) {
        return {
            x: a,
            y: b
        };
    }
    return {
        x: undefined,
        y: undefined,
        "default": 10
    };
}
console.log(example(42, 19));
console.log(example());
function rect(a, b) {
    if (a !== undefined || b !== undefined) {
        return {
            x: a,
            y: b
        };
    }
    return {
        x: undefined,
        y: undefined
    };
}
console.log(rect(1, 2));
console.log(rect());
