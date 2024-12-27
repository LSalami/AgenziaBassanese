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

      if (targetId === "contact-us") {
        // Torna alla home e scorri alla sezione "contact-us"
        allMains.forEach((main) => {
          main.style.display = "none"; // Nascondi tutte le sezioni
        });

        const homeMain = document.getElementById("main-home");
        if (homeMain) {
          homeMain.style.display = "block"; // Mostra la home
        }

        const contactSection = document.getElementById("contact-us");
        if (contactSection) {
          // Scorri alla sezione "contact-us"
          contactSection.scrollIntoView({ behavior: "smooth" });
        }

        // Chiudi il menu mobile se è aperto
        if (collapseElement && collapseElement.classList.contains("show")) {
          const collapseInstance = new bootstrap.Collapse(collapseElement, {
            toggle: false,
          });
          collapseInstance.hide();
        }

        return;
      }

      // Per gli altri target
      allMains.forEach((main) => {
        main.style.display = "none"; // Nascondi tutte le sezioni
      });

      const targetMain = document.getElementById(targetId);
      if (targetMain) {
        targetMain.style.display = "block"; // Mostra la sezione desiderata
      }

      // Chiudi il menu mobile se è aperto
      if (collapseElement && collapseElement.classList.contains("show")) {
        const collapseInstance = new bootstrap.Collapse(collapseElement, {
          toggle: false,
        });
        collapseInstance.hide();
      }
    });
  });
});

document.getElementById('get-directions').addEventListener('click', function () {
  const latitude = 45.775752;
  const longitude = 11.755000;
  const address = encodeURIComponent("Viale San Giuseppe 112, Cassola, VI 36022");

  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    // iOS - Usa Apple Maps
    window.location.href = `http://maps.apple.com/?ll=${latitude},${longitude}&q=${address}`;
  } else if (navigator.userAgent.match(/Android/i)) {
    // Android - Usa Google Maps
    window.location.href = `geo:${latitude},${longitude}?q=${address}`;
  } else {
    // Fallback per browser desktop o non riconosciuti
    window.location.href = `https://www.google.com/maps?q=${latitude},${longitude}(${address})`;
  }
});