/*
    Cascade: Animation Plugin
 */
(function($) {
    $.fn.cascade = function(options) {
        // Parameters
        var settings = $.extend({
            direction: "slideRight",
            interval: 250,
            //in ms
            triggerDelay: 500,
            beforeCascade: function() {},
            afterCascade: function() {},
            onLoad: function() {}
        }, options);
        function hide() {
            $(this).css({
                position: "relative",
                opacity: 0
            });
            switch (settings.direction) {
              // Slide Left
                case "slideLeft":
                $(this).css("left", "100%");
                break;

              // Slide Up
                case "slideUp":
                $(this).css("top", "100%");
                break;

              // Slide Down
                case "slideDown":
                $(this).css("top", "-100%");
                break;

              // Slide Right or default
                default:
                $(this).css("left", "-100%");
                break;
            }
        }
        // Load Hook
        settings.onLoad();
        // Hide on load
        this.each(hide).promise().done(function(index) {
            // Pre-Run Hook
            settings.beforeCascade();
            // Create Context
            var element = $(this);
            // Cascade each in a delayed fashion
            element.delay(settings.triggerDelay).each(function(index) {
                $(this).delay(settings.interval * index).animate({
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                    opacity: 1
                });
            }).promise().done(function() {
                // Post-Run Hook
                settings.afterCascade();
            });
        });
        return this;
    };
})(jQuery);
//# sourceMappingURL=script.js.map