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

//function showProjects() {
const projects = [["Skybox"], ["Keyboard"]];

for (let i = 0; i < projects.length; i++) {
  let DisplayProject = projects[i][0];
  let context = document.querySelector(".context");
  let newProject = document.createElement("div");
  newProject.setAttribute("class", "project");
  newProject.setAttribute("id", DisplayProject);
  context.appendChild(newProject);

  document.getElementById(DisplayProject).innerHTML = DisplayProject;
}
//}

function PXtoEM(px) {
  document.getElementById("pxtoem");
  em = px / 16;
}
