emailbtn.addEventListener("click", function email() {
  const emailbtn = document.getElementById("emailbtn");
  const emailvalue = document.getElementById("emailvalue");
  const response = document.getElementById("response");
  let email = emailvalue.value;

  console.log(email);

  const addr = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "live.com",
    "outlook.com",
  ];

  if (addr.includes(email.split("@")[1])) {
    response.innerHTML = `I do not like this email: ${email}`;
    console.log("I do not like this email: " + email);
  } else {
    response.innerHTML = "Thank you!";
    console.log(email);
  }
});

function PXtoEM(px) {
  document.getElementById("pxtoem");
  em = px / 16;
}
