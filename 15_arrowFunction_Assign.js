console.log(`~~~~~~~~~~~~~~With no arguments and no return value~~~~~~~~~~~~~~~~`);

let arrowFunction = ()=>{
    console.log(`Good Morning, Today is Monday`);
}
arrowFunction();
console.log(`~~~~~~~~~~~~~~With 3 arguments and no return value~~~~~~~~~~~~~~~~`);

let arrowWithArg = (num1,num2,num3=1)=>{
    console.log(`Addition of Array is : ${num1+num2+num3}`);;
}
arrowWithArg(5,5,2)
arrowWithArg(10,4)
console.log(`~~~~~~~~~~~~~~With 5 arguments and return value~~~~~~~~~~~~~~~~`);

let arrowFunction2 = (num1,num2,num3,num4,num5)=>{
    let result = num1 + num2 + num3 + num4 + num5;
    return `Addition of Array is:${result}`;
}
let result = arrowFunction2(100,100,200,349,756);
console.log(result);
let result1 = arrowFunction2("I am"," learning"," ES6"," features"," in depth");
console.log(result1);
