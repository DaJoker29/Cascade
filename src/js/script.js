/*
    Cascade: Animation Plugin
 */
(function ( $ ) {

    // Declare Plugin
    $.fn.cascade = function ( options ) {

        // Parameters
        var settings = $.extend({
            selector: '.cascade-container > .cascade',
            interval: 300 // in ms
        }, options);

        // Cascading function
        function startCascade () {
            console.log('Cascading');
            $( settings.selector )
                .delay( settings.interval )
                .each(function ( index ) {
                    $(this)
                        .delay(settings.interval * index)
                        // .fadeIn('slow')
                        .animate({
                            'left': 0,
                            'opacity': 1
                        });
                }).promise().done(function() {
                    // Runs after elements are displayed
                });
        }

        // Initialize
        function init() {
            console.log('Initialized');
            var elements = $(settings.selector);
            elements.each(function() {
                $(this)
                    .css({
                        'position': 'relative',
                        'left': '-2000px',
                        'opacity': 0
                    });
            }).promise().done(function() {
                startCascade();
            });
        }

        init();
    };

    // Add listener to init
    $('.trigger').on('click', function() {
        console.log('Triggered');
        $.fn.cascade();
    });
})( jQuery );