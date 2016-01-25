/*
    Cascade: Animation Plugin
 */
(function ( $ ) {
    $.fn.cascade = function ( options ) {

        // Parameters
        var settings = $.extend({
            direction: 'slideRight',
            interval: 200, //in ms
            beforeCascade: function() {},
            afterCascade: function() {}
        }, options);

        function hide() {
            $(this).css({
                'position': 'relative',
                'opacity': 0
            });

            switch (settings.direction) {
                // Slide Left
                case 'slideLeft':
                    $(this).css( 'left', '100%');
                    break;
                // Slide Up
                case 'slideUp':
                    $(this).css('top', '100%');
                    break;
                // Slide Down
                case 'slideDown':
                    $(this).css( 'top', '-100%');
                    break;
                // Slide Right or default
                default:
                    $(this).css( 'left', '-100%');
                    break;
            }
        }

        function show( index ) {
            $(this).delay(settings.interval * index)
                .animate({
                    'left': 0,
                    'right': 0,
                    'bottom': 0,
                    'top': 0,
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

        return this;
    };
})( jQuery );