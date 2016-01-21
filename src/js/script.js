/*
    Cascade: Animation Plugin
 */
(function ( $ ) {
    $.fn.cascade = function ( options ) {

        // Parameters
        var settings = $.extend({
            interval: 200, //in ms
            beforeCascade: function() {},
            afterCascade: function() {}
        }, options);

        function hide() {
            $(this).css({
                'position': 'relative',
                'left': '-2000px',
                'opacity': 0
            });
        }

        function show( index ) {
            $(this).delay(settings.interval * index)
                .animate({
                    'left': 0,
                    'opacity': 1
                });
        }

        // Initialization
        this.each(hide).promise().done(function() {

            // Pre-Run Callback
            settings.beforeCascade();

            // Cascading Animation
            this.each(show).promise().done(function() {
                // Post-Run Callback
                settings.afterCascade();
            });
        });
    };
})( jQuery );