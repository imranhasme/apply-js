//moulas uses================%


const year = 4424;
const remainder = year % 4;
console.log(remainder == 0);




//note [ = to set] and [== to compare and === to]

const year1 = 5353;
const remainder1 = year1 % 4 ;
if(remainder1 == 0){
    console.log('your year is a leap Year');
}
else(console.log('your is is not leap year'))


 



//with function uses-------------

function isLeapYear (year){
    const remainder2 = year % 4;
    if(remainder2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const check2423 = isLeapYear(2423);
console.log(check2423)


//basic function-------------------