const about_button = document.getElementById("about");
const projects_button = document.getElementById("projects");
const linkedin_button = document.getElementById("linkedin");
const github_button = document.getElementById("github");

const onAboutButtonClick = function () {
    window.location.href = 'index.html';
};

const onProjectsButtonClick = function () {
    window.location.href = 'projects.html';
};

const onLinkedInButtonClick = function () {
    window.location = 'https://www.linkedin.com/in/andrew-valentin-profile/';
};

const onGitHubButtonClick = function () {
    window.location = 'https://github.com/andrew-valentin';
};

about_button.addEventListener("click", onAboutButtonClick);
projects_button.addEventListener("click", onProjectsButtonClick);
linkedin_button.addEventListener("click", onLinkedInButtonClick);
github_button.addEventListener("click", onGitHubButtonClick)
