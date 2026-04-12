const btn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

btn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  if (sidebar.classList.contains('active')) {
    btn.textContent = "✖";
  }
  else {
    btn.textContent = "☰";
  }
});