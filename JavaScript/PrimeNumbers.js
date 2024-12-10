let i,j = 0;
let flag = 0;
let primeNumbers = '';
for (i = 2; i <= 100; i++) {
    flag = 0;
    for (j = 2; j <= i / 2; j++) {
        if (i % j === 0) {
            flag = 1;
            break;
        }
    }
    if (flag === 0) {
        primeNumbers += i + ' ';
    }
}
console.log('Prime numbers between 1 to 100 are : '+primeNumbers);