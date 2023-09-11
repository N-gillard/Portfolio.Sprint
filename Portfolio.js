
window.addEventListener('load', function() {
    alert('Welcome to my portfolio website!');
});

function filterProjects(category) {
    const projects = document.querySelectorAll('.project');

    projects.forEach((project) => {
        const projectCategory = project.getAttribute('data-category');

        if (category === 'all' || projectCategory === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

const categoryButtons = document.querySelectorAll('.category-button');

categoryButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const selectedCategory = e.target.getAttribute('data-category');
        filterProjects(selectedCategory);
    });
});
