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

      // Aggiorna la classe "active" sui link
      links.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

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
          // Scorri alla sezione "contact-us" con offset di 100px
          const offset = -78; // Offset in pixel
          const contactPosition =
            contactSection.getBoundingClientRect().top +
            window.scrollY +
            offset;

          window.scrollTo({ top: contactPosition, behavior: "smooth" });
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

        // Scorri in cima alla pagina
        window.scrollTo({ top: 0, behavior: "smooth" });
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
  const latitude = 45.768572151575086;
  const longitude = 11.759129441706733;
  const address = encodeURIComponent("Agenzia Bassanese, Viale San Giuseppe 112, 36022 Cassola VI, Italia");

  if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    // iOS - Usa Apple Maps
    window.location.href = `http://maps.apple.com/?ll=${latitude},${longitude}&q=${address}`;
  } else if (navigator.userAgent.match(/Android/i)) {
    // Android - Usa Google Maps
    window.location.href = `geo:${latitude},${longitude}?q=${address}`;
  } else {
    // Fallback per browser desktop o non riconosciuti
    window.open(`https://www.google.com/maps?q=${latitude},${longitude}(${address})`, '_blank');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

var _iub = _iub || [];
_iub.csConfiguration = {"siteId":3902973,"cookiePolicyId":33516255,"lang":"it","storage":{"useSiteId":true}};
(function (w, d) {
    var loader = function () {
      var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
      s.src = "https://cdn.iubenda.com/iubenda.js"; 
      tag.parentNode.insertBefore(s, tag);
    };
    if (w.addEventListener) {
      w.addEventListener("load", loader, false);
    } else if (w.attachEvent) {
      w.attachEvent("onload", loader);
    } else {
      w.onload = loader;
    }
  })(window, document);
