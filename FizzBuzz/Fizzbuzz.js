for (let i = 1; i <= 50; i++) {
  let buzz = i / 5;
  let fizz = i / 3;

  if (buzz % 1 == 0) {
    console.log("Buzz");
  }
  if (fizz % 1 == 0) {
    console.log("Fizz");
  }

  if (fizz % 1 == 0 && buzz % 1 == 0) {
    console.log("FizzBuzz");
  }
}
