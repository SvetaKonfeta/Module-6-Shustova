let num = prompt('Введите любое число от 0 до 1000');
function isPrime(num) {
    if (num > 1000 && isNaN(num) && num < 0){
        return 'Данные неверны'
    }
    else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) 
     return 'Непростое число'
        }
        return 'Простое число'
    }
    }
    console.log (isPrime(num));
    isPrime();