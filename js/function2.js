/**
 * Created by upsmart on 17-8-21.
 */
var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;

console.log(offsetX);
console.log(offsetY);

var displayMode = 1;
var together = new Date();
together.setFullYear(2010, 10, 2);
together.setHours(20);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);

$("#loveHeart").click(function(){
    displayMode *= -1;
    timeElapse(together, displayMode);
});

if (!document.createElement('canvas').getContext) {
    var msg = document.createElement("div");
    msg.id = "errorMsg";
    msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+";
    document.body.appendChild(msg);
    $("#code").css("display", "none");
    $("#copyright").css("position", "absolute");
    $("#copyright").css("bottom", "10px");
    document.execCommand("stop");
} else {
    setTimeout(function () {
        adjustWordsPosition();
        startHeartAnimation();
    }, 5000);

    timeElapse(together, displayMode);
    setInterval(function () {
        timeElapse(together, displayMode);
    }, 500);

    adjustCodePosition();
    $("#code").typewriter();
}
