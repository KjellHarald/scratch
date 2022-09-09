function email(email) {
  const addr = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "live.com",
    "outlook.com",
  ];

  if (addr.includes(email.split("@")[1])) {
    console.log("I do not like this email: " + email);
  } else {
    console.log(email);
  }
}
