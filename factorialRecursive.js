// 10! =  1*2*3*4*5*6*7*8*9*10
// 0! = 1==================
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4============ 3!*4
// 5! = 1*2*3*4*5=============== 4!*5
// 6! = 1*2*3*4*5*6============== (6-1)!*6

//and {n}factorial ============ (n-1)!* n

function factoriall(n){
    if(n == 0){
        return 1;
    }

    else{
        return n * factoriall(n - 1);
    }
}


var result = factoriall(10);
console.log(result)