var a = 4;
var b = 2;

function mySum(param1, param2){
    return param1 + param2;
}

console.log(mySum(a,b));

var mySum= (param1, param2) => {
    return param1 + param2;
}

console.log(mySum(a,b));