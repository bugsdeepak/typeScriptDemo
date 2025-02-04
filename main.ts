let a: number = 1;
let b: boolean = false;
let c: String = "Hello World";
let d: any = 1;
let e: number [] = [1, 2, 3];
let f: any [] = [1, "Hello", true];

enum Color {Red, Green, Blue};
let backgroundColor = Color.Red;
//By defaulut if you dont intialized a variable its type will be any and value will be undefined
let abc = "abc";

//Type Assestion in two ways
let endsWithA = (<string>abc).endsWith("a");
let endsWithB = (abc as string).endsWith("b");

//Arrow function
let log = function(message : string) {
    console.log(message);
}

let doLog = (message : string) => {
    console.log(message);
}

class Point {

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}