const projects = [["Skybox", "Hei Verden"], ["Keyboard"]];
console.log("l");
for (let i = 0; i < projects.length; i++) {
  let DisplayProject = projects[i][0];
  let context = document.getElementById("context");
  let newProject = document.createElement("div");
  newProject.setAttribute("class", "project");
  newProject.setAttribute("id", DisplayProject);
  context.appendChild(newProject);

  document.getElementById(DisplayProject).innerHTML = DisplayProject;
}

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

function PXtoEM(px) {
  document.getElementById("pxtoem");
  em = px / 16;
}
