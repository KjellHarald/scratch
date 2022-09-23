for (let i = 1; i <= 50; i++) {
  bf = "";

  bf += i % 3 ? "" : "Fizz";
  bf += i % 5 ? "" : "Buzz";

  console.log(bf ? bf : i);

  /*if (fizz % 1 == 0 && buzz % 1 == 0) {
    console.log("FizzBuzz");
  }*/
}
