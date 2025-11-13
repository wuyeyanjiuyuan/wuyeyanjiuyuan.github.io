$(function () {
    var $box    = $(".box");
    var boxWidth = $box.width();

    var $swiper = $(".swiper");
    var $slides = $swiper.find("li");
    var $dots   = $(".dot li");
    var len     = $slides.length;

    var index = 0;
    var timer = null;

    // 根据图片数量设置宽度
    $swiper.width(boxWidth * len);
    $slides.width(boxWidth);

    function goTo(i) {
        index = (i + len) % len; // 安全取模，0~len-1 循环
        $dots.eq(index).addClass("active").siblings().removeClass("active");
        $swiper.stop().animate({ left: -boxWidth * index }, 400);
    }

    function autoPlay() {
        clearInterval(timer);
        timer = setInterval(function () {
            goTo(index + 1);
        }, 3000);
    }

    // 小圆点点击
    $dots.click(function () {
        goTo($(this).index());
    });

    // 左右箭头
    $(".left").click(function () {
        if ($swiper.is(":animated")) return;
        goTo(index - 1);
    });

    $(".right").click(function () {
        if ($swiper.is(":animated")) return;
        goTo(index + 1);
    });

    // 初始化
    goTo(0);
    autoPlay();
});
