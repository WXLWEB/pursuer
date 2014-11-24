
$(function(){
    var winHeight = 0,
        winWidth = 0;
    // 获取窗口高度
    if (window.innerHeight)
        winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;
    // 获取窗口宽度
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;
    // 通过深入 Document 内部对 body 进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
    }
    if(winWidth>=1000){
        $('#wx-pursuer').on({mouseover: function () {
            $('.weixin-pursuer-2').fadeIn("normal");
        }, click: function () {
            $('.weixin-pursuer-2').fadeOut("fast");
        }
        });
    }else{
        $('#wx-pursuer').on({mouseover: function () {
            $('.weixin-pursuer-1').fadeIn("normal");
        }, click: function () {
            $('.weixin-pursuer-1').fadeOut("fast");
        }
        });
    }
    if(winWidth>=768){
        if($('.show')){
            $(".show").hover(function() {
                var width = $(this).width();
                $(this).find('.intro-detail').width(width).fadeIn("normal");
            }, function() {
                $(this).find('.intro-detail').fadeOut('fast');
            });
        }


        //默认导航条的样式
        $('.dropdown-menu').css('display','none');
        $('.navbar-nav .active').css('border-bottom','4px solid #fff');
        $('#anli-nochange-nav .navbar-nav .active').css('border-bottom','4px solid #025499');
        $('.dropdown-toggle').on({
            mouseover:function(){
                $('.dropdown-list').show();
                $('.dropdown-toggle').css('border-bottom', '4px solid #fff');
                $('#anli-nochange-nav .dropdown-toggle').css('border-bottom', '4px solid #025499');
            },mouseout:function(){
                $('.dropdown-list').on({mouseover:function()
                {
                    $('.dropdown-list').show();
                    $('.dropdown-toggle').css('border-bottom', '4px solid #fff');
                    $('#anli-nochange-nav .dropdown-toggle').css('border-bottom', '4px solid #025499');
                }
                    ,mouseout:function(){
                        $('.dropdown-toggle').css('border-bottom', '');
                        $('.dropdown-list').hide();
                        $('.dropdown-toggle').css('color', '#fff');
                        $('#anli-nochange-nav  .dropdown-toggle').css('color', '#025499');
                    }

                });
                $('.dropdown-list').hide();
                $('.dropdown-toggle').css('border-bottom', '');
            }
        });

        $(window).scroll(function() {
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            if(t>0){
                //当滚动条滚动时替换导航条
                $('.linkcolor-white').removeClass('linkcolor-white').addClass('linkcolor-blue');
                //不同页面导航条之间的切换
                $('.nav-service-bgcolor').removeClass('nav-service-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-index-bgcolor').removeClass('nav-index-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-about-bgcolor').removeClass('nav-about-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-design-bgcolor').removeClass( 'nav-design-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-anli-pets-bgcolor').removeClass( 'nav-anli-pets-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-anli-ecarman-bgcolor').removeClass( 'nav-anli-ecarman-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-anli-guoke-bgcolor').removeClass( 'nav-anli-guoke-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-anli-yiye-bgcolor').removeClass( 'nav-anli-yiye-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-anli-dmg-bgcolor').removeClass( 'nav-anli-dmg-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-anli-shb-bgcolor').removeClass( 'nav-anli-dmg-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-anli-hongye-bgcolor').removeClass( 'nav-anli-txdddc-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-anli-txdddc-bgcolor').removeClass( 'nav-anli-txdddc-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-anli-ku6-bgcolor').removeClass( 'nav-anli-ku6-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-anli-gy-bgcolor').removeClass( 'nav-anli-ui-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-anli-ui-bgcolor').removeClass( 'nav-anli-ui-bgcolor').addClass('nav-bgcolor-white');
                $('.nav-anli-web-bgcolor').removeClass( 'nav-anli-web-bgcolor').addClass('nav-bgcolor-white');
                $('.logo1').removeClass('logo1').addClass('logo2');
                $('.navbar-default .navbar-nav>li>a').css('color','#171E24');
                $('.navbar-fixed-top').css('border-bottom','1px solid gray');
                //导航条颜色切换
                $('.navbar-default .navbar-nav>li>a').hover(function(){
                    $(this).css('border-bottom','4px solid #025499');
                    $(this).css('color','#025499');

                },function(){
                        $(this).css('border-bottom', '');
                        $(this).css('color', '#171E24');
                    $('.navbar-nav .active').css('border-bottom','4px solid #025499');
                    $('.navbar-nav .active').css('color','#025499');
                });
                $('.navbar-nav .active').css('border-bottom','4px solid #025499');
                $('.navbar-nav .active').css('color','#025499');
                //二级菜单鼠标划过事件
                $('.dropdown-toggle').on({
                    mouseover:function(){
                        $('.dropdown-list').show();
                        $('.dropdown-toggle').css('color', '#025499');
                        $('.dropdown-toggle').css('border-bottom', '4px solid #025499');
                    },mouseout:function(){
                        $('.dropdown-list').on({mouseover:function()
                        {
                            $('.dropdown-list').show();
                            $('.dropdown-toggle').css('color', '#025499');
                            $('.dropdown-toggle').css('border-bottom', '4px solid #025499');
                        }
                            ,mouseout:function(){
                                $('.dropdown-list').hide();
                                $('.dropdown-toggle').css('color', '#171E24');
                                $('.dropdown-toggle').css('border-bottom', 'none');
                            }

                        });
                        $('.dropdown-toggle').css('color', '#171E24');
                        $('.dropdown-list').hide();
                        $('.dropdown-toggle').css('background-color', '');
                        $('.dropdown-toggle').css('border-bottom', 'none');
                    }
                });


            }else {
                //当滚动条不滚动时换回导航条
                $('.linkcolor-blue').removeClass('linkcolor-blue').addClass('linkcolor-white');
                //不同页面导航条之间的切换
                $('#service .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-service-bgcolor');
                $('#index .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-index-bgcolor');
                $('#about .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-about-bgcolor');
                $('#designresearch .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-design-bgcolor');
                $('#anli-pets .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-anli-pets-bgcolor');
                $('#anli-gy .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-anli-gy-bgcolor');
                $('#anli-ui .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-anli-ui-bgcolor');
                $('#anli-hongye .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-anli-hongye-bgcolor');
                $('#anli-txdddc .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-anli-txdddc-bgcolor');
                $('#anli-ecarman .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-anli-ecarman-bgcolor');
                $('#anli-guoke .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-anli-guoke-bgcolor');
                $('#anli-web .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-anli-web-bgcolor');
                $('#anli-dmg .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-anli-dmg-bgcolor');
                $('#anli-yiye .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-anli-yiye-bgcolor');
                $('#anli-shb .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-anli-shb-bgcolor');
                $('#anli-ku6 .nav-bgcolor-white').removeClass('nav-bgcolor-white').addClass('nav-anli-ku6-bgcolor');
                $('.logo2').removeClass('logo2').addClass('logo1');
                $('#anli-nochange-nav .logo1').removeClass('logo1').addClass('logo2');
                $('.navbar-default .navbar-nav>li>a').css('color','#fff');
                $('#anli-nochange-nav .navbar-default .navbar-nav>li>a').css('color','#025499');
                $('.navbar-fixed-top').css('border-bottom','none');
                $('#anli-nochange-nav .navbar-fixed-top').css('border-bottom','1px solid gray');
                $('.navbar-default .navbar-nav>li>a').hover(function(){
                    $(this).css('border-bottom','4px solid #fff');
                    $(this).css('color','#fff');

                },function(){
                    $(this).css('border-bottom','');
                    $(this).css('color','#fff');
                    $('.navbar-nav .active').css('border-bottom','4px solid #fff');
                    $('.navbar-nav .active').css('color','#fff');

                });

                $('.navbar-default .navbar-nav .active').css('border-bottom','4px solid #fff');
                $('.dropdown-toggle').on({
                    mouseover:function(){
                        $('.dropdown-list').show();
                        $('.dropdown-toggle').css('color', '#fff');
                        $('.dropdown-toggle').css('border-bottom', '4px solid #fff');
                    },mouseout:function(){
                        $('.dropdown-list').on({mouseover:function()
                        {
                            $('.dropdown-list').show();
                            $('.dropdown-toggle').css('border-bottom', '4px solid #fff');
                            $('.dropdown-toggle').css('color', '#fff');
                        }
                            ,mouseout:function(){
                                $('.dropdown-toggle').css('color', '#fff');
                                $('.dropdown-toggle').css('border-bottom', '');
                                $('.dropdown-toggle').css('background-color', '');
                                $('.dropdown-list').hide();
                            }

                        });
                        $('.dropdown-toggle').css('color', '#fff');
                        $('.dropdown-list').hide();
                        $('.dropdown-toggle').css('border-bottom', '');
                    }
                });
                $('#anli-nochange-nav .navbar-default .navbar-nav>li>a').hover(function(){
                    $(this).css('border-bottom','4px solid #025499');
                    $(this).css('color','#025499');

                },function(){
                    $(this).css('border-bottom', '');
                    $(this).css('color', '#171E24');
                    $('#anli-nochange-nav .navbar-nav .active').css('border-bottom','4px solid #025499');
                    $('#anli-nochange-nav .navbar-nav .active').css('color','#025499');
                });
                $('#anli-nochange-nav .navbar-nav .active').css('border-bottom','4px solid #025499');
                $('#anli-nochange-nav .navbar-nav .active').css('color','#025499');
                //二级菜单鼠标划过事件
                $('#anli-nochange-nav .dropdown-toggle').on({
                    mouseover:function(){
                        $('#anli-nochange-nav .dropdown-list').show();
                        $('#anli-nochange-nav .dropdown-toggle').css('color', '#025499');
                        $('#anli-nochange-nav .dropdown-toggle').css('border-bottom', '4px solid #025499');
                    },mouseout:function(){
                        $('#anli-nochange-nav .dropdown-list').on({mouseover:function()
                        {
                            $('#anli-nochange-nav .dropdown-list').show();
                            $('#anli-nochange-nav .dropdown-toggle').css('color', '#025499');
                            $('#anli-nochange-nav .dropdown-toggle').css('border-bottom', '4px solid #025499');
                        }
                            ,mouseout:function(){
                                $('.dropdown-list').hide();
                                $('#anli-nochange-nav .dropdown-toggle').css('color', '#171E24');
                                $('#anli-nochange-nav .dropdown-toggle').css('border-bottom', 'none');
                            }

                        });
                        $('#anli-nochange-nav .dropdown-toggle').css('color', '#171E24');
                        $('#anli-nochange-nav .dropdown-list').hide();
                        $('#anli-nochange-nav .dropdown-toggle').css('background-color', '');
                        $('#anli-nochange-nav .dropdown-toggle').css('border-bottom', 'none');
                    }
                });


            }
        })

    }
    else{
         $('.dropdown-toggle').on('click', function () {
                $('.navbar-nav .active').css('background-color', '#fff');
                $('.navbar-nav .active').css('color', '#025499');
                $('.dropdown-toggle').css('background-color','#025499');
                $('.dropdown-toggle').css('color','#fff');
         });

    }
});






