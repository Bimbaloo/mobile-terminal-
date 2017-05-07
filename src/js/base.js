/**
 * Created by 马燥 on 2017/5/7 0007.
 */

(function ($) {
    lazyRender()
})(jQuery)

$(function () {
    $("#head-search").click(
        function(){
            search()
            event.stopPropagation();
        }
    )

   /* $(window).on('click', function (e) {
        if (e.target.getAttribute("id") !== 'head-search') {
            cancelSearch()
        }
    })*/
    $("#search-cancel").click(
        function () {
            cancelSearch()
        }
    )
/*    $("body").click(
        function () {
            cancelSearch()
        }
    )*/


/* 轮播 */
    var slide3 = new auiSlide({
        container: document.getElementById("aui-slide3"),
        // "width":300,
        "height": 240,
        "speed": 600,
        "autoPlay": 10000, //自动播放
        "loop": true,
        "pageShow": true,
        "pageStyle": 'line',
        'dotPosition': 'center'
    })

    var slide4 = new auiSlide({
        container: document.getElementById("aui-slide4"),
        // "width":300,
        "height": 240,
        "speed": 600,
        "autoPlay": 8000, //自动播放
        "loop": true,
        "pageShow": true,
        "pageStyle": 'line',
        'dotPosition': 'center'
    })

    var slide5 = new auiSlide({
        container: document.getElementById("aui-slide5"), //容器
        // "width":300, //宽度
        "height": 240,//高度
        "speed": 600,//速度
        "autoPlay": 10000, //自动播放
        "loop": true,//是否循环
        "pageShow": true,//是否显示分页器
        "pageStyle": 'line',//分页器样式，分dot,line
        'dotPosition': 'center'//当分页器样式为dot时控制分页器位置，left,center,right
    })

    /* 底部tab切换 */
    apiready = function () {
        api.parseTapmode();
    }
    var tab = new auiTab({
        element: document.getElementById("footer")
    }, function (ret) {
        console.log(ret);
        if (ret) {
            console.log(ret.index)
        }
    });


}) //$(function)结束



/* 搜索与取消搜索 */
function search(){
    $("#header").addClass("aui-hide");
    $("#search").removeClass("aui-hide")
}

function cancelSearch(){
    $("#header").removeClass("aui-hide");
    $("#search").addClass("aui-hide")
}




/* 懒加载 */
var clock
$(window).on('scroll', function () {
    if (clock) {
        clearTimeout(clock)
    }
    clock = setTimeout(function () {
        /* console.log('hello') */
        lazyRender()
    }, 100)

})

function lazyRender() {
    $('img').each(function () {
        if (checkShow($(this)) && !isLoaded($(this))) {
            loadImg($(this))
        }
    })
}

function checkShow($img) {
    var scrollTop = $(window).scrollTop()
    var windowHeight = $(window).height()
    var offsetTop = $img.offset().top
    if (offsetTop < scrollTop + windowHeight && offsetTop > scrollTop) {
        return true
    }
    return false
}

function isLoaded($img) {
    return $img.attr('data-src') === $img.attr('src')
}

function loadImg($img) {
    $img.attr('src', $img.attr('data-src'))
}
