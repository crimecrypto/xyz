document.addEventListener('DOMContentLoaded', function() {
    var menuTrigger = document.querySelector('.menu-trigger');
    var customMenu = document.querySelector('.custom-menu');

    menuTrigger.addEventListener('click', function() {
        customMenu.classList.toggle('active');
    });
});
