function Fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return Fibonacci(num - 2) + Fibonacci(num - 1);
  }

var i = 0;
do{
    i++;
    console.log(Fibonacci(i));
}while(i<200)

