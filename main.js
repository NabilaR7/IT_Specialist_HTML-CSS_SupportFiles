// main.js

// Event listener for dropdown menus
const dropdownBtns = document.querySelectorAll('.dropBtn');

dropdownBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
    const dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });
});
