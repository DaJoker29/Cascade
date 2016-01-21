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

        function cycle ( context, fn, callback ) {
            context.each(fn).promise().done(callback);
        }

        // Initialize Plugin
        cycle(this, hide, function() {
            // Pre-Cascade callback
            settings.beforeCascade();
            // Start Cascade and run Post-Cascade callback
            cycle(this, show, settings.afterCascade);
        });
    };
})( jQuery );