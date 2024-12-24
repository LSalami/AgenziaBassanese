const mobileMenu = document.querySelector('#navbarMobileMenu');
const icon = document.querySelector('.animated-icon1');
const mobileBrand = document.querySelector('#mobileBrand');

if (mobileMenu) {
    mobileMenu.addEventListener('show.bs.collapse', () => {
        icon.classList.add('open');
        mobileBrand.classList.add('brand-hidden'); // Dissolvi il logo
    });

    mobileMenu.addEventListener('hide.bs.collapse', () => {
      icon.classList.remove('open');
     mobileBrand.classList.remove('brand-hidden'); // Riporta il logo
    });
}
  
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a[data-target]');
    const allMains = document.querySelectorAll('main');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');

            // Nascondi tutti i main
            allMains.forEach(main => {
            main.style.display = 'none';
            });
            var collapseElement = document.getElementById('navbarMobileMenu');
            
            // Inizializza l'istanza di Bootstrap Collapse
            var collapseInstance = new bootstrap.Collapse(collapseElement);
            
            // Chiude il collapse
            collapseInstance.hide();

            // Mostra solo il main corrispondente
            const targetMain = document.getElementById(targetId);
            if (targetMain) {
            targetMain.style.display = 'block';
            }
        });
    });
});