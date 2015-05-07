$(function(){
	var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\">" +
        "<div class=\"btn btn-sq\" id=\"BDBridgeFixedWrap\">" +
        "<div class=\"sq\">在线交流</div>" +
        "</div>" +
        "<a href=\"http://wpa.qq.com/msgrd?v=3&uin=2642003615&site=qq&menu=yes\" target='_blank' class=\"btn btn-qq\">" +
        "<div class=\"qq\">在线沟通</div>" +
        "</a>" +
        "<div class=\"btn btn-phone\">" +
        "<div class=\"phone\">010-56281131</div>" +
        "</div>" +
        "<div class=\"btn btn-top\">" +
        "<div class=\"top\">返回顶部</div>" +
        "</div>" +
        "</div>";
	$("#top").html(tophtml);
	$("#izl_rmenu").each(function(){
		$(this).find(".btn-phone").on({mouseover:function(){
            $(this).find(".phone").fadeIn("fast");
        },mouseout:function(){
            $(this).find(".phone").fadeOut("fast");
        }});
        $(this).find(".btn-sq").on({mouseover:function(){
            $(this).find(".sq").fadeIn("fast");
        },mouseout:function(){
            $(this).find(".sq").fadeOut("fast");
        }});
        $(this).find(".btn-qq").on({mouseover:function(){
            $(this).find(".qq").fadeIn("fast");
        },mouseout:function(){
            $(this).find(".qq").fadeOut("fast");
        }});
        $(this).find(".btn-top").on({mouseover:function(){
            $(this).find(".top").fadeIn("fast");
        },mouseout:function(){
            $(this).find(".top").fadeOut("fast");
        }});
		$(this).find(".btn-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#izl_rmenu").data("expanded",true);
		}else{
			$("#izl_rmenu").data("expanded",false);
		}
		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#izl_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#izl_rmenu .btn-top").slideDown();
			}else{
				$("#izl_rmenu .btn-top").slideUp();
			}
		}
	});
});