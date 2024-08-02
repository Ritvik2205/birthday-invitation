document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#click-me').addEventListener('click', function() {        
        // document.querySelector('.card').style.display = 'none';
        // document.querySelector('svg').style.display = 'none';
        // document.querySelector('.card').style.display = 'block';
        $('svg').fadeOut('slow', function() {
            $('.card').fadeIn('slow');
        });
    })

    
})

