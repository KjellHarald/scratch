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

function showProjects() {
  const projects = [["Skybox"], ["Keyboard"]];

  for (let i = 0; i < projects.length; i++) {
    let context = document.querySelector(".context");
    let newProject = document.createElement("div");
    newProject.setAttribute("class", "project");
    context.appendChild(newProject);
  }
}

function PXtoEM(px) {
  document.getElementById("pxtoem");
  em = px / 16;
}
