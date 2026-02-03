document.addEventListener('DOMContentLoaded', () => {

const sidebar = document.querySelector('.side-bar');
const toggle = document.querySelector('.sidebar-header');

  // 1. Ambil state dari localStorage saat halaman dibuka
  const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
  if (isCollapsed) {
    sidebar.classList.add('collapsed');
  }

  // 2. Toggle sidebar + simpan state
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');

    localStorage.setItem(
      'sidebarCollapsed',
      sidebar.classList.contains('collapsed')
    );
  });
});