//匿名函数
(function ($) {
    $.fn.getFlake=function(){
        var flakeList=["❄","❉","❅","❆","❄️","✼","❇","❈","❊","✥","✺","✻"];
        var colorList=[];
        var $flake = $('<div id="snowbox" />')
        .css({
            position: "absolute",
            "z-index": "9999",
            top: "-50px",
            //鼠标穿透
            "pointer-events": 'none',
            //鼠标形状
            //cursor: "crosshair",
        })
        .html(flakeList[Math.floor(Math.random()*flakeList.length)]);
        return $flake;
    }
    $.fn.getFlakeColor=function(){
  		let arr = [];
  		for (var i = 0; i < 3; i++) {
  			arr.push(Math.floor(Math.random() * 256));
  		}
  		let [r, g, b] = arr;
  		var color = `#${r.toString(16).length > 1 ? r.toString(16) : '0' + r.toString(16)}${g.toString(16).length > 1 ? g.toString(16) : '0' + g.toString(16)}${
  			b.toString(16).length > 1 ? b.toString(16) : '0' + b.toString(16)}`;
  		return color;

    }
    console.log($.fn.getFlakeColor());
    $.fn.snow = function (options) {
        var documentHeight = $(document).height(),
            documentWidth = $(document).width(),
            defaults = {
                minSize: 10,
                maxSize: 20,
                newOn: 1000,
                //flakeColor: "#FFFFFF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */,
            },
            options = $.extend({}, defaults, options);
       
        var interval = setInterval(function () {
            var startPositionLeft = Math.random() * documentWidth - 100,
                startOpacity = 0.5 + Math.random(),
                sizeFlake = options.minSize + Math.random() * options.maxSize,
                endPositionTop = documentHeight - 200,
                endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
                durationFall = documentHeight * 10 + Math.random() * 5000;

            // $flake
            //     .clone()
            $.fn.getFlake()
                .appendTo("body")
                .css({
                    left: startPositionLeft,
                    opacity: startOpacity,
                    "font-size": sizeFlake,
                    color: options.flakeColor?options.flakeColor:$.fn.getFlakeColor(),
                })
                .animate(
                    {
                        top: endPositionTop,
                        left: endPositionLeft,
                        opacity: 0.2,
                    },
                    durationFall,
                    "linear",
                    function () {
                        $(this).remove();
                    }
                );
        }, options.newOn);
    };
})(jQuery);
//jq 的$(function(){})也就是$(document).ready(function(){})的简写
$(function () {
    //$.fn.abc()是对jQuery扩展了一个abc()方法，在每一个jquery实例都可以引用这个方法，例如$("#div").abc();
    $.fn.snow({
        minSize: 5 /* 定义雪花最小尺寸 */,
        maxSize: 40 /* 定义雪花最大尺寸 */,
        newOn: 400 /* 定义密集程度，数字越小越密集 */,
        //flakeColor: "#2FF3FF"/* 自定义颜色 */,
    });
});
