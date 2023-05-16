function fizz_buzz(N, arr = []){
        if (N === 1) {                         
            arr.push('1');
            return arr.reverse();
          } else {                               
            if (N % 3 === 0 && N % 5 === 0) {
              arr.push('FizzBuzz');
            } else if (N % 5 === 0) {
              arr.push('Buzz');
            } else if (N % 3 === 0) {
              arr.push('Fizz');
            } else {
              arr.push('' + N);
            }
            return fizz_buzz(N - 1, arr);
          }
        }

    console.log(fizz_buzz(15));