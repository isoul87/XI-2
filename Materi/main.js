// Fitur Pencarian
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const materialItems = document.querySelectorAll('.material-item');
  
    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      materialItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
  
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });