import jQuery from 'js/jquery/jquery.js'
import 'js/jquery/jquery-migrate.min.js'
import 'plugins/superfish/js/superfish.js'
import 'js/hoverIntent.min.js'
import 'plugins/dl-menu/modernizr.custom.js'
import 'plugins/dl-menu/jquery.dlmenu.js'
import 'plugins/jquery.easing.js'
import 'plugins/fancybox/jquery.fancybox.pack.js'
import 'plugins/fancybox/helpers/jquery.fancybox-media.js'
import 'plugins/fancybox/helpers/jquery.fancybox-thumbs.js'
import 'plugins/flexslider/jquery.flexslider.js'
import 'plugins/jquery.isotope.min.js'
import 'js/plugins.min.js'
import  MasterSlider from 'plugins/masterslider/public/assets/js/masterslider.min.js'
const index = () => {
    (function ( $ ) {
        "use strict";

        $(function () {
            var masterslider_d1da = new MasterSlider();

            // slider controls
			masterslider_d1da.control('arrows'     ,{ autohide:true, overVideo:true  });
			masterslider_d1da.control('bullets'    ,{ autohide:true, overVideo:true, dir:'h', align:'bottom', space:6 , margin:25  });
            // slider setup
            masterslider_d1da.setup("slider_1", {
				width           : 1140,
				height          : 600,
				minHeight       : 0,
				space           : 0,
				start           : 1,
				grabCursor      : false,
				swipe           : true,
				mouse           : false,
				keyboard        : true,
				layout          : "fullwidth",
				wheel           : false,
				autoplay        : false,
                instantStartLayers:false,
				mobileBGVideo:false,
				loop            : true,
				shuffle         : false,
				preload         : 0,
				heightLimit     : true,
				autoHeight      : false,
				smoothHeight    : true,
				endPause        : false,
				overPause       : true,
				fillMode        : "fill",
				centerControls  : true,
				startOnAppear   : false,
				layersMode      : "center",
				autofillTarget  : "",
				hideLayers      : false,
				fullscreenMargin: 0,
				speed           : 20,
				dir             : "h",
				parallaxMode    : 'swipe',
				view            : "basic"
            });
            

            

            window.masterslider_instances = window.masterslider_instances || {};
            window.masterslider_instances["5_d1da"] = masterslider_d1da;
         });
        
    })(jQuery);  
}

export default index
