const projects = [["Skybox", "Hei Verden"], ["Keyboard"]];
for (let i = 0; i < projects.length; i++) {
  let DisplayProject = projects[i][0];
  let context = document.getElementById("context");
  let newProject = document.createElement("div");
  newProject.setAttribute("class", "project");
  newProject.setAttribute("id", DisplayProject);
  context.appendChild(newProject);

  document.getElementById(DisplayProject).innerHTML = DisplayProject;
}

const project0 = {
  projectName: "Skybox",
  projectInfo: [],
};

const project1 = {
  projectName: "Keyboard",
  projectInfo: [],
};

const project2 = {
  projectName: "Keyboard",
  projectInfo: "",
};

const project3 = {
  projectName: "Keyboard",
  projectInfo: "",
};

const project4 = {
  projectName: "Keyboard",
  projectInfo: "",
};
