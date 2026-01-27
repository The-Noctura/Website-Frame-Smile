const sidebar = document.querySelector('.side-bar');
const toggle = document.querySelector('.sidebar-header');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});