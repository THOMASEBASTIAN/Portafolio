document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA LA TRANSICIÓN DEL AVATAR DE HABBO ---
    const habboAvatar = document.getElementById('habboAvatar');
    const habboImages = ['./imagenes/habbo.png', './imagenes/habbolado.png', './imagenes/habbolado2.png'];
    let currentImageIndex = 0;
    let avatarInterval;

    const startAvatarTransition = () => {
        clearInterval(avatarInterval);
        avatarInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % habboImages.length;
            if (habboAvatar) {
                habboAvatar.src = habboImages[currentImageIndex];
            }
        }, 2000);
    };

    const stopAvatarTransition = () => {
        clearInterval(avatarInterval);
    };

    // --- Lógica para abrir y cerrar ventanas ---
    const setupWindow = (iconId, windowId) => {
        const icon = document.getElementById(iconId);
        const windowElement = document.getElementById(windowId);
        if (icon && windowElement) {
            const closeBtn = windowElement.querySelector('.close-btn');
            icon.addEventListener('click', () => {
                windowElement.style.display = 'block';
                if (windowId === 'sobreMiModal') {
                    startAvatarTransition();
                }
            });
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    windowElement.style.display = 'none';
                    if (windowId === 'sobreMiModal') {
                        stopAvatarTransition();
                    }
                });
            }
        }
    };
    
    // AQUÍ SE ACTIVAN TODAS LAS VENTANAS
    setupWindow('sobreMiIcon', 'sobreMiModal');
    setupWindow('videoIcon', 'videoModal');
    setupWindow('skillsIcon', 'skillsModal');
    setupWindow('experienciaIcon', 'experienciaModal'); // <--- AÑADIDO
    setupWindow('kariomedia-folder', 'kariomediaModal'); // <--- AÑADIDO
    setupWindow('f1-folder', 'f1Modal'); // <--- AÑADIDO
    // setupWindow('certificadosIcon', 'certificadosModal'); // Puedes activar esta cuando la crees

    // --- Lógica para hacer las ventanas arrastrables ---
    const makeWindowsDraggable = () => {
        const windows = document.querySelectorAll('.window');
        windows.forEach(window => {
            const titleBar = window.querySelector('.title-bar');
            let isDragging = false;
            let offsetX, offsetY;
            titleBar.addEventListener('mousedown', (e) => {
                isDragging = true;
                offsetX = e.clientX - window.offsetLeft;
                offsetY = e.clientY - window.offsetTop;
                windows.forEach(w => w.style.zIndex = '10');
                window.style.zIndex = '11';
            });
            document.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    window.style.left = `${e.clientX - offsetX}px`;
                    window.style.top = `${e.clientY - offsetY}px`;
                }
            });
            document.addEventListener('mouseup', () => { isDragging = false; });
        });
    };
    makeWindowsDraggable();

    // --- Lógica para el reloj de la barra de tareas ---
    const updateClock = () => {
        const clockElement = document.getElementById('clock');
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
        clockElement.textContent = timeString;
    };
    setInterval(updateClock, 1000);
    updateClock();

    // --- LÓGICA PARA EL MENÚ DE INICIO ---
    const startButton = document.querySelector('.start-button');
    const startMenu = document.getElementById('start-menu');
    
    if (startButton && startMenu) {
        startButton.addEventListener('click', (event) => {
            event.stopPropagation();
            startMenu.classList.toggle('active');
        });

        document.addEventListener('click', (event) => {
            if (!startMenu.contains(event.target) && !startButton.contains(event.target)) {
                startMenu.classList.remove('active');
            }
        });
    }

    // --- LÓGICA PARA EL MODO DÍA/NOCHE ---
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('night-mode');
        });
    }

    // --- LÓGICA PARA LA VENTANA DE CONTACTO ---
    const contactoLink = document.getElementById('contacto-link');
    const contactoModal = document.getElementById('contactoModal');
    
    if (contactoLink && contactoModal) {
        contactoLink.addEventListener('click', (event) => {
            event.preventDefault(); 
            contactoModal.style.display = 'block';
            if (startMenu) {
                startMenu.classList.remove('active');
            }
        });

        const contactoCloseBtn = contactoModal.querySelector('.close-btn');
        if (contactoCloseBtn) {
            contactoCloseBtn.addEventListener('click', () => {
                contactoModal.style.display = 'none';
            });
        }
    }

});