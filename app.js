
function calc(a, oper, b){
    const ret = eval(a.toString() + oper.toString() + b.toString());
    return ret;
}

console.log(calc(10, "-", 5));


// console.log("Olá Mundo Node.JS !");
