document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (!menuToggle || !navMenu) {
        console.error("Error: No se encontró el botón de menú o el menú de navegación.");
        return;
    }

    // Evento para alternar el menú en móviles
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Cerrar el menú si se hace clic en un enlace
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });

    // Smooth scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Lightbox effect for project images
    document.querySelectorAll("#projects img").forEach(img => {
        img.addEventListener("click", function () {
            const modal = document.createElement("div");
            modal.id = "lightbox";
            modal.innerHTML = `<div class='lightbox-content'><img src='${this.src}' alt='Expanded view'><button id='close-lightbox'>✖</button></div>`;
            document.body.appendChild(modal);

            document.getElementById("close-lightbox").addEventListener("click", function () {
                modal.remove();
            });
        });
    });

    // Form validation
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        let valid = true;
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name) {
            alert("Please enter your name.");
            valid = false;
        }
        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            valid = false;
        }
        if (!message) {
            alert("Please enter a message.");
            valid = false;
        }

        if (valid) {
            alert("Message sent successfully!");
            this.reset();
        }
    });
});
