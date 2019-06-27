// function getRem(pwidth, prem) {
//     if (/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i.test(navigator.userAgent)) {
//         var html = document.getElementsByTagName("html")[0];
//         var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
//         html.style.fontSize = oWidth / pwidth * prem + "px";

//     }
// }
// window.onresize = function () {
//     getRem(750, 100)
// };
// $(function () {
//     getRem(750, 100);
// })

var win = window,
    doc = document;
function setFontSize() {
    var winWidth = $(window).width();

    //750这个数字是根据你的设计图的实际大小来的，所以值具体根据设计图的大小
    var size = (winWidth / 750) * 100;
    doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px';
};
//这里我们给个定时器来实现页面加载完毕再进行字体设置
setTimeout(function() {
    //初始化
    setFontSize();
}, 100);/**
 * Created by Administrator on 2019\2\16 0016.
 */
