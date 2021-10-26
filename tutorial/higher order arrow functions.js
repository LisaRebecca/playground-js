const increment = (function() {
    return function increment(number, value = 1){
        return number + value;
    }
})();

console.log(increment(5,3));
console.log(increment(5));