(function ($) {
    function getQueryString(name) { var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); var r = window.location.search.substr(1).match(reg); if (r != null) return unescape(r[2]); return null; }

    var id = window.location.href;
    id = getQueryString("number");
    var cate = "";
    $(document).ready(function () {
        $.getJSON("api/PursuerCaseApi/GetPursuerCase/" + id, function (data) {
            console.log(data);
            $('#title').html(data.CaseTitle);
            cate = data.Category;
            $('#content').append(data.Content);
            console.log(cate);
        });
        $.getJSON("api/PursuerCaseApi/GetAboutCases/",
        { "Category":cate,"id":id,"pagesize":3},
        function (data) {
            $.each(data,function (i, info) {
                console.log(info);
                var html = '<div class="relative-article"><a  href="newsdetail.html?number='+ info.PursuerCaseId+'" title="交互设计图">'
                html += '<img class="img-responsive" src="../upload/' + info.CaseImg + '" />'
                html += ' <div class="info">'
                html += '     <h2>' + info.CaseTitle + '</h2>'
                html += '   <p class="info-content">' + info.SimpleContent + '</p>'
                html += '    <p class="info-from">'
                html += '     作者:<i>' + info.Author + '</i>&nbsp;&nbsp;&nbsp;来自:<i>' + info.from + '</i>'
                html += ' </p></div></a> </div>'
                console.log(html);
                $('#relative-list').append(html);
            });
        });
    });
    window._bd_share_config = {
        common : {
        bdText : '我发现了一个国内非常好的设计与开发公司——北京普修设计,并且我还在普修设计官网上发现了很多有用的关于设计与开发方面的知识,分享给想学习实用设计与IT技能的同学!',
        bdDesc : $("#title").text(),
        bdUrl : window.location.href,
        bdPic : 'http://pursuer.cn/img/public/pursuer.jpeg'
        },
        share : [{
        "bdSize" : 32
        }],
        slide : [{
        bdImg : 6,
        bdPos : "right",
        bdTop : 100
        }]
     }
    with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
})(jQuery);