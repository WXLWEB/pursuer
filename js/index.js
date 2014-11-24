function banner() {
    var width = $(window).width();
    var height = 0;
    if (window.innerHeight)
        height = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        height = document.body.clientHeight;
    // 通过深入 Document 内部对 body 进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        height = document.documentElement.clientHeight;
    }
     var $imgs = $("#index").find(".carousel-inner").find('.item img');
    if (width < 768) {

        var $imgs1 = $(".swipe-wrap").find('img');
        $imgs1.each(function(index, val) {
            this.src = "http://pursuer.cn/img/index/indexxs/" + (index + 1) + ".jpg";
        });
        $(".swipe-wrap").css({
            height: "auto"
        });
    } else if (width < 992) {
        $imgs.each(function(index, el) {
            this.src = "http://pursuer.cn/img/index/indexsm/" + (index + 1) + ".jpg";
            $(this).css("max-width", "100% ");
        });
        $(".carousel-inner").css({
            height: "auto"
        });
    } else if (width < 1200) {

        $imgs.each(function(index, el) {
            this.src = "http://pursuer.cn/img/index/indexmd/" + (index + 1) + ".jpg";
            $(this).css("max-width", "100% ");
        });
        $(".carousel-inner").css({
            height: height
        });
    } else {
        $imgs.each(function(index, el) {
            this.src = "http://pursuer.cn/img/index/indexlg/" + (index + 1) + ".jpg";
            $(this).css("max-width", "100% ");
        });
        $(".carousel-inner").css({
            height: height
        });
    }
    $(window).resize(function() {
        var height = 0;
        var width = $(window).width();
        if (window.innerHeight)
            height = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            height = document.body.clientHeight;
        // 通过深入 Document 内部对 body 进行检测，获取窗口大小
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            height = document.documentElement.clientHeight;
        }
        if (width < 768) {
            $imgs.each(function(index, el) {
                this.src = "http://pursuer.cn/img/index/indexxs/" + (index + 1) + ".jpg";
                $(this).css("width", "100% ");
            });
            $(".carousel-inner").css({
                height: "auto"
            });
            var $imgs1 = $(".swipe-wrap").find('img');
            $imgs1.each(function(index, val) {
                this.src = "http://pursuer.cn/img/index/indexxs/" + (index + 1) + ".jpg";
            });
        } else if (width < 992) {
            $imgs.each(function(index, el) {
                this.src = "http://pursuer.cn/img/index/indexsm/" + (index + 1) + ".jpg";
                $(this).css("max-width", "100% ");
            });
            $(".carousel-inner").css({
                height: "auto"
            });
        } else if (width < 1200) {

            $imgs.each(function(index, el) {
                this.src = "http://pursuer.cn/img/index/indexmd/" + (index + 1) + ".jpg";
                $(this).css("max-width", "100% ");
            });
            $(".carousel-inner").css({
                height: height
            });
        } else {
            $imgs.each(function(index, el) {
                this.src = "http://pursuer.cn/img/index/indexlg/" + (index + 1) + ".jpg";
                $(this).css("max-width", "100% ");
            });
            $(".carousel-inner").css({
                height: height
            });
        }
    });
    //$(".carousel-inner").css("height",height);
    $(".intro").hover(function() {
        $(this).css("color", "#025499");
    }, function() {
        $(this).css("color", "rgb(35, 44, 64)");
    });
}
$(function(){
    if($('#index')){
        banner();
    }
});
if (author) {
    var author = new Array();
    author[0] = {
        name: "diwer",
        email: "diwers@163.com"
    };
    author[1] = {
        name: 'wuxinlu',
        email: '894147172@qq.com'
    }
}