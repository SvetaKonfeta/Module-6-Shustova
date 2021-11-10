function getSum(a) {
    return function (b){
    return a + b;
    }
}
console.log(getSum(15)(9));  

