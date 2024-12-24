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

      // Nascondi tutte le sezioni
      allMains.forEach((main) => {
        main.style.display = "none";
      });

      // Mostra solo la sezione target
      const targetMain = document.getElementById(targetId);
      if (targetMain) {
        targetMain.style.display = "block";
      }

      // Chiudi il menu mobile solo se è visibile
      if (collapseElement && collapseElement.classList.contains("show")) {
        const collapseInstance = new bootstrap.Collapse(collapseElement, {
          toggle: false,
        });
        collapseInstance.hide();
      }
    });
  });
});
