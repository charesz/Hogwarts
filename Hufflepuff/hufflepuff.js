// Dropdown toggle
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector('svg');
    content.classList.toggle('active');
    icon.classList.toggle('rotate-180');
  });
});

// Modal
const contactModal = document.getElementById('contactModal');
const showModalBtn = document.getElementById('showModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

function openModal() { contactModal.classList.remove('hidden'); }
function closeModal() { contactModal.classList.add('hidden'); }

showModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
  if (event.target === contactModal) closeModal();
});
