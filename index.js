$(document).ready(function() {
    $('#pop-up').click(function() {
        $('.card').hide();
        $('svg').fadeOut();
        $('.card').fadeIn();
    })
})