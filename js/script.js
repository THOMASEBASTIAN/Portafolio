window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('introModal');
  const closeBtn = document.getElementById('closeModal');

  // Mostrar modal al cargar
  modal.style.display = 'flex';

  // Cerrar el modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Más adelante puedes poner aquí funciones para abrir otras ventanas
});
// Video modal
const videoModal = document.getElementById('videoModal');
const closeVideo = document.getElementById('closeVideo');
const videoIcon = document.querySelector('.video');
const miVideo = document.getElementById('miVideo');

videoIcon.addEventListener('click', () => {
  videoModal.style.display = 'flex';
  miVideo.currentTime = 0;
  miVideo.play();
});

closeVideo.addEventListener('click', () => {
  videoModal.style.display = 'none';
  miVideo.pause();
});
const sobreMiModal = document.getElementById('sobreMiModal');
const closeSobreMi = document.getElementById('closeSobreMi');
const sobreMiIcon = document.querySelector('.mio');

sobreMiIcon.addEventListener('click', () => {
  sobreMiModal.style.display = 'flex';
});

closeSobreMi.addEventListener('click', () => {
  sobreMiModal.style.display = 'none';
});
