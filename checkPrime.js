function isPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return 'not a prime number';
        }
    }
    return 'Your Number is a Prime Number';
}

let result = isPrime(127);
console.log(result)