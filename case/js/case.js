/**
 * Created by pursuer on 14-11-3.
 */
function realiveweb(){
    $('.relative-web').on({
        mouseover:function(){
            this.src="img/public/pc-interaction.jpg";
        },mouseout:function(){
            this.src="img/public/pc.jpg";
        }
    });

};
function download(){
    $('#ecarman-ios-download').on({
        mouseover:function(){
            this.src="img/ecarman/public/ios-download.png";
        },mouseout:function(){
            this.src="img/ecarman/public/ios.png";
        }
    });
    $('#ecarman-android-download').on({
        mouseover:function(){
            this.src="img/ecarman/public/android-download.png";
        },mouseout:function(){
            this.src="img/ecarman/public/android.png";
        }
    });
};
$(function(){
    if($('.relative-web')){
        realiveweb();
    }
    if($('#ecarman')){
        download();
    }
});
