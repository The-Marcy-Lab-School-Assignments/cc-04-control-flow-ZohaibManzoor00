//1
const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++){
      if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
      } else if (i % 5 === 0) {
        console.log("Buzz")
      } else if (i % 3 === 0 ) {
        console.log("Fizz")
      } else {
        console.log(i)
      }
  }
}
//fizzBuzz()
//2
const fizzzBuz = (number) => {
    let answer = [];
    for (let i = 1; i <= number; i++){
        if (i % 3 === 0 && i % 5 === 0){
        answer.push("FizzBuzz")
      } else if (i % 5 === 0) {
        answer.push("Buzz")
      } else if (i % 3 === 0 ) {
        answer.push("Fizz")
      } else {
        answer.push(i.toString())
      }
    
  } console.log(answer)
}

fizzzBuz(15)
