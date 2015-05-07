/**
 * Created by pursuer on 14-12-26.
 */
//变量
var $list = $('#list'),
    $handler = $('li', $list);
var pagenum= 1,isLoading=false,$window = $(window),
    $document = $(document),currentAjax = null;
var width = $window.width();

// Prepare layout options.
//滚动条滚动事件
function onScroll(value) {
    if (!isLoading) {
        if ($(document).height() - $(this).scrollTop() - $(this).height() < 100)
            loadData();
    }
}
function onAboutScroll(value) {
    if (!isLoading) {
        if ($(document).height() - $(this).scrollTop() - $(this).height() < 100)
            loadAboutData();
    }
}

/**
 * Loads data from the API.
 */
function loadData() {
    isLoading = true;
    $('#loaderCircle').show();
    currentAjax = $.ajax({
        url:'api/PursuerCaseApi/GetPursuerCases',
        dataType: 'json', // Set to jsonp if you use a server on a different domain and change it's setting accordingly
        data: { id: pagenum}, // Page parameter to make sure we load new data
        success: onLoadData
    });
}
function loadAboutData(cate){
    isLoading = true;
    $('#loaderCircle').show();
    currentAjax = $.ajax({
        url:'api/PursuerCaseApi/GetAboutCases',
        dataType:'json',
        data:{Category:cate,id:0,pagenum:pagenum,pagesize:8},
        success:onLoadData
    });
}
function loadWebguideData(){
    currentAjax = $.ajax({
        url:'/api/PursuerCaseApi/GetKinds',
        dataType:'json',
        success:onLoadWebguideData
    });
}
//下载网站资讯数据
function onLoadData(response)
{
    isLoading = false;
    var data = response, $row, iHeight, iTempHeight,length = data.length;
    for(var i=0;i<length; i++)
    {
        dataInfo = data[i];
//            console.log(dataInfo);
        iHeight = -1;
        var title = dataInfo.CaseTitle;

        var describle = dataInfo.CaseTitle;
        if(dataInfo.SimpleContent.length>28)
        {describle = describle.substring(1,28)+'...'}

        $item = $('<div class="col-lg-3 col-md-4 col-sm-6"><div class="item mt2em"><a href="newsdetail.html?number=' + dataInfo.PursuerCaseId + '" title="' + dataInfo.Category + '">' +
                '<img class="img-responsive" src="../upload/'+dataInfo.CaseImg+ '">' +
                '<div class="info">' +
                '<h2>' + dataInfo.CaseTitle + '</h2><p class="info-content">' +dataInfo.SimpleContent+ '</p>'
                +'<p class="info-from">作者：<i>' + dataInfo.Author + '</i>&nbsp;&nbsp;&nbsp;来自:<i>' + dataInfo.from + '</i>'
                + '</p>'
                +'</div></div></div>'
        ).hide();
        $('#main').append($item);
        $item.fadeIn();
    }
//        console.log(length);
    if (length==0) {
        $document.off('scroll', onAboutScroll);
        $document.off('scroll', onScroll);
        $('.load-container').hide();
        $('.loadend').show();
    }
    pagenum++;
//        console.log(pagenum);
}
//下载网址导航数据
function onLoadWebguideData(response){
    isLoading = false;
    // Create HTML for the images.
    var item = '',item2='',
        data = response,
        i = 0, j= 0,length = data.length,
        $newImages;
    //console.log(length);
    for (i=0; i < length; i++) {
        var dataInfo = data[i];
//            console.log(dataInfo);
        item += '<li>';
        item +='<div class="type">';
        item +='<h1 class="typename"><i class="iconfont iconfont-product">&#'+dataInfo.icon+';</i>'+dataInfo.type+'</h1>';
        console.log(dataInfo.webList.length);
        for(j=0;j<dataInfo.webList.length;j++){
            var dataWebList=data[i].webList[j];
//                console.log(dataWebList);
            item +='<div class="website">';
            item +='<a href="'+dataWebList.src+'" target="_blank">';
            item +='<div class="detail">'
            item +='<h2 color="'+dataInfo.color+'">'+dataWebList.title+'</h2>';
            item +='<p>'+dataWebList.describle+'</p>';
            item +='</div></a>';
            item +='</div>';
        }
        for(var t=10;j<dataInfo.webList.length;t++){
            var dataWebList2=data[i].webList[t];
//                console.log(dataWebList);
            item2 +='<div class="website">';
            item2 +='<a href="'+dataWebList2.src+'" target="_blank">';
            item2 +='<div class="detail">';
            item2 +='<h2 color="'+dataInfo.color+'">'+dataWebList2.title+'</h2>';
            item2 +='<p>'+dataWebList2.describle+'</p>';
            item2 +='</div></a>';
            item2 +='</div>';
        }

        item +='</div>';
        item += '</li>';
    }
    $newImages = $(item);
//        console.log(html);
    applyLayoutWebguide($newImages);
}
//网址导航页面布局
function applyLayoutWebguide($newImages) {
    // Prepare layout options.
    var webguideoptions = {
        itemWidth: 180, // Optional min width of a grid item
        autoResize: true, // This will auto-update the layout when the browser window is resized.
        container: $('#list'), // Optional, used for some extra CSS styling
        offset: 30, // Optional, the distance between grid items
        flexibleWidth: '100%' // Optional, the maximum width of a grid item
    };
    $('#list').append($newImages);
    var handler = $('#list li');
    $window.resize(function(){
        var windowWidth = $window.width(),
            newOptions = {
                flexibleWidth: '150%'
            };

        // Breakpoint
        if (windowWidth < 1024) {
            newOptions.flexibleWidth = '100%';
        }
        handler.wookmark(newOptions);
    });
    // Call the layout function.
    handler.wookmark(webguideoptions);
}

//点击事件
function articleclick(cate) {
    pagenum = 1;
    $('.loadend').hide();
    //暂停其他数据的接口请求
    if (currentAjax) {
        currentAjax.abort();
    }
    // 删除原先已有的分类数据
    $('#main').empty();
    //显示加载图标
    $('.load-container').show();
    if (cate == "行内资讯") {
        $document.off('scroll', onAboutScroll);
        $document.on('scroll', onScroll);
        loadData();
    } else if(cate == "网址导航") {
        $document.off('scroll', onAboutScroll);
        $document.off('scroll', onScroll);
        $('#main').append('<div class="col-xs-12"><ul id="list"></ul></div>');
        $('#main').css('position','relative');
        loadWebguideData();
        $('.load-container').hide();
    } else {
        //文章分类加载
        $document.off('scroll', onScroll);
        $document.on('scroll', onAboutScroll);
        loadAboutData(cate);
    }
}