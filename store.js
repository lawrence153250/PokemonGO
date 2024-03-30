window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

$(document).ready(function () {
    $('#cardTabLink').on('click', function () {
        $('.gcash-tab').hide();
        $('.card-tab').show();
    });

    $('#gcashTabLink').on('click', function () {
        $('.card-tab').hide();
        $('.gcash-tab').show();
    });
});