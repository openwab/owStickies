/**
 * owStickies.js
 * Main javascript file for this wordpress plugin
 */
(function($)
    {
        $.fn.owStickies=function(options)
        {
            var defauts=
           {
               "language": "en",
               "is_debug": true,
               "is_activ":true
           };
            var parametres=$.extend(defauts, options);
            
            return this.each(function()
            {
                //Code de notre plug-in ici
                
                $(this).wrap('<div class="owStickies-wrapper"></div>');
                $('.owStickies-wrapper').append('<div class="owStickies-msg"><p>owStckies : Click on the image to create a new spot !</p></div>');
                $(this).after('<div class="owStickies-overlay"></div>');
                $(this).after('<ul class="owStickies-debugger"></ul>');
                
                var img_height = $(this).height();
                var img_width = $(this).width();
                var img_position = $(this).position();
                
                $('.owStickies-overlay').css({
                    'width':img_width,
                    'height':img_height,
                    'top':img_position.top,
                    'left':img_position.left
                });
                
                $('.owStickies-msg').css({});
                
                $(this).hover(function(){
                    
                });
                
                $('.owStickies-overlay').click(function(e){
                   var spot_x = e.pageX;
                   var spot_y = e.pageY;
                   
                });
                
                var debug = '';
                debug += '<li>Image width => '+img_width+' Image Height => '+img_height+'</li>';
                debug += '<li>Image position x => '+img_position.top+' Image position y => '+img_position.left+'</li>';
                
                if(parametres.is_debug == true){
                    $('.owStickies-debugger').html(debug);
                }
                
                });
        };
    })(jQuery);


