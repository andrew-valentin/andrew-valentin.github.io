const about_button = document.getElementById("about");
const projects_button = document.getElementById("projects");

const onAboutButtonClick = function () {
    window.location.href = 'index.html';
};

const onProjectsButtonClick = function () {
    window.location.href = 'projects.html';
};

about_button.addEventListener("click", onAboutButtonClick);
projects_button.addEventListener("click", onProjectsButtonClick);