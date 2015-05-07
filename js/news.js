$(document).ready(function(){
    var cate='';
        //下载第一批数据
        loadData();
        //启动滚动条事件
        $document.on('scroll', onScroll);
    //点击分类文章事件
    $('#articlemenu li').on("click",function(){
        //给当前元素添加active属性，并且删除同辈元素中的active属性
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).text());
        cate = $(this).text();
        articleclick(cate);
    });
    $('#articlemenu2 li').on("click",function(){
        //给当前元素添加active属性，并且删除同辈元素中的active属性
        $(this).addClass('active').siblings().removeClass('active');
        cate = $(this).text();
        articleclick(cate);
    });
    //点击收藏事件
    $('.glyphicon-heart-empty').on("click",function(){
        alert("hell");
        $(this).addClass('glyphicon-heart').removeClass('.glyphicon-heart-empty');
    });
    // 鼠标滑过分享事件
    $('.weixin').on({
        mouseover:function(){
            $('.weixin-pursuer').show();
        },mouseout:function(){
            $('.weixin-pursuer').hide();

        }
    });
    //分享
    window._bd_share_config = {
        common : {
            bdText : '我发现了一个国内非常好的设计与开发公司——北京普修设计,并且我还在普修设计官网上发现了很多有用的关于设计与开发方面的知识,分享给想学习实用设计与IT技能的同学!',
            bdDesc : '自定义分享摘要',
            bdUrl : 'http://www.pursuer.cn/news.html',
            bdPic : 'http://pursuer.cn/img/public/pursuer.jpeg'
        },
        share : [{
            "bdSize" : 32
        }]
    };
    with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];

});

