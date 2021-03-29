function calc(a, oper, b){
    const ret = eval(a.toString() + oper.toString() + b.toString());
    return ret;
}

module.exports = calc;
