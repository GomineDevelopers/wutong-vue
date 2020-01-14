//rem适配
(function () {
    var styleN = document.createElement("style");
    var width = document.documentElement.clientWidth / 16;
    styleN.innerHTML = 'html{font-size:' + width + 'px!important}';
    document.head.appendChild(styleN);
})();