document.addEventListener("DOMContentLoaded", () => {
  const showMoreButton = document.getElementById("showMoreButton");
  const hiddenProjects = document.querySelectorAll(
    ".projects-list .project-item:nth-child(n+4)"
  );

  showMoreButton.addEventListener("click", () => {
    hiddenProjects.forEach((project) => {
      project.style.display = 'block';
    });

    showMoreButton.style.display = "none";
  });
});
