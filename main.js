// Gestione dell'animazione dell'icona e del brand nel menu mobile
const mobileMenu = document.querySelector("#navbarMobileMenu");
const icon = document.querySelector(".animated-icon1");
const mobileBrand = document.querySelector("#mobileBrand");

if (mobileMenu) {
  mobileMenu.addEventListener("show.bs.collapse", () => {
    icon.classList.add("open");
    mobileBrand.classList.add("brand-hidden"); // Dissolvi il logo
  });

  mobileMenu.addEventListener("hide.bs.collapse", () => {
    icon.classList.remove("open");
    mobileBrand.classList.remove("brand-hidden"); // Riporta il logo
  });
}

// Gestione dei link e della navigazione tra sezioni
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(
    "nav a[data-target], button[data-target]"
  );
  const allMains = document.querySelectorAll("main");
  const collapseElement = document.getElementById("navbarMobileMenu");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-target");

      // Se il target è "contact-us", torna alla home e scorri ai contatti
      if (targetId === "contact-us") {
        // Mostra la home
        allMains.forEach((main) => {
          main.style.display = "none";
        });
        const homeMain = document.getElementById("main-home");
        if (homeMain) {
          homeMain.style.display = "block";
        }

        // Scorri alla sezione "contact-us"
        const contactSection = document.getElementById("contact-us");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }

        // Chiudi il menu mobile se visibile
        if (collapseElement && collapseElement.classList.contains("show")) {
          const collapseInstance = new bootstrap.Collapse(collapseElement, {
            toggle: false,
          });
          collapseInstance.hide();
        }
        return;
      }

      // Per altri target, mostra solo la sezione desiderata
      allMains.forEach((main) => {
        main.style.display = "none";
      });

      const targetMain = document.getElementById(targetId);
      if (targetMain) {
        targetMain.style.display = "block";
      }

      // Chiudi il menu mobile se visibile
      if (collapseElement && collapseElement.classList.contains("show")) {
        const collapseInstance = new bootstrap.Collapse(collapseElement, {
          toggle: false,
        });
        collapseInstance.hide();
      }
    });
  });
});
