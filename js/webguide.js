/**
 * Created by pursuer on 15-1-8.
 */

(function ($){
    $('#webguide-list').imagesLoaded(function(){
        // Prepare layout options.
        var options = {
            itemWidth: 200, // Optional min width of a grid item
            autoResize: true, // This will auto-update the layout when the browser window is resized.
            container: $('#webguide-list'), // Optional, used for some extra CSS styling
            offset: 30, // Optional, the distance between grid items
            flexibleWidth: '30%' // Optional, the maximum width of a grid item
        };

        // Get a reference to your grid items.
        var handler = $('#webguide-list li');
        var $window = $(window);

        $window.resize(function(){
            var windowWidth = $window.width(),
                newOptions = {
                    flexibleWidth: '30%'
                };

            // Breakpoint
            if (windowWidth < 768) {
                newOptions.flexibleWidth = '100%';
            }

            handler.wookmark(newOptions);
        });

        // Call the layout function.
        handler.wookmark(options);
    });
})(jQuery);

