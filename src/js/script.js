/*
    Cascade: Animation Plugin
 */
(function ( $ ) {

    // Declare Plugin
    $.fn.cascade = function ( options ) {

        // Parameters
        var settings = $.extend({
            interval: 200 // in ms
        }, options);

        // Initialization
        this.each(function() {
            $(this).css({
                'position': 'relative',
                'left': '-2000px',
                'opacity': 0
            });
        }).promise().done(function() {
            // Cascading Animation
            return this.each(function ( index ) {
                $(this)
                    .delay(settings.interval * index)
                    .animate({
                            'left': 0,
                            'opacity': 1
                        });
            }).promise().done(function() {
                    // Runs after elements are displayed
            });
        });
    };
})( jQuery );