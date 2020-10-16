const app = document.getElementById("app").getContext("2d");

function clockDraw() {
  $("#app").width("280px");
  $("#app").height("280px");
  $("#app").css("background-color", "white");
  $("#app").css("border-radius", "50%");
  $("#app").css("border", "8px solid pink");
  $("#app").css("margin", "100px auto");
  $("#app").css("margin-bottom", "0px");
  $("#app").css("position", "relative");
}

clockDraw();
for (let i = 0; i < 12; i++) {
  const number = document.createElement("div");
  app.appendChild(number);
  number.innerHTML = i + 1;
  number.className = "number";
  number.id = "num" + (i + 1);
}
function clockHand() {
  const center = document.createElement("div");
  app.appendChild(center);
  center.className = "center";
  const hour = document.createElement("div");
  app.appendChild(hour);
  hour.className = "hour";
  const minute = document.createElement("div");
  app.appendChild(minute);
  minute.className = "minute";
  const second = document.createElement("div");
  app.appendChild(second);
  second.className = "second";
}
function numberSetting() {
  $(".number").css("position", "absolute");
  $(".number").css("z-index", "1");
  $(".number").css("font-size", "26px");
  $(".number").css("color", "black");
}
function num3Css() {
  $("#num3").css("top", "0");
  $("#num3").css("bottom", "0");
  $("#num3").css("right", "2px");
  $("#num3").css("display", "flex");
  $("#num3").css("align-item", "center");
}
function num6Css() {
  $("#num6").css("left", "0");
  $("#num6").css("right", "0");
  $("#num6").css("bottom", "0");
  $("#num6").css("text-align", "center");
}
function num9Css() {
  $("#num9").css("top", "0");
  $("#num9").css("bottom", "0");
  $("#num9").css("left", "2px");
  $("#num9").css("align-item", "center");
}
function num12Css() {
  $("#num12").css("left", "0");
  $("#num12").css("right", "0");
  $("#num12").css("top", "0");
  $("#num12").css("text-align", "center");
}
function centerCss() {
  $(".center").css("position", "absolute");
  $(".center").css("border", "1px solid black");
  $(".center").width("14px");
  $(".center").height("14px");
  $(".center").width("14px");
  $(".center").css("top", "0");
  $(".center").css("bottom", "0");
  $(".center").css("left", "0");
  $(".center").css("right", "0");
  $(".center").css("background- color", "black");
  $(".center").css("margin", "auto");
  $(".center").css("border-radius", "50%");
  $(".center").css("z-index", "10");
}
function secondCss() {
  $(".second").css("position", "absolute");
  $(".second").width("2px");
  $(".second").height("80px");
  $(".second").css("background- color", "red");
  $(".second").css("left", "0");
  $(".second").css("right", "0");
  $(".second").css("margin", "auto");
  $(".second").css("bottom", "130px");
  $(".second").css("transform-origin", "center bottom");
}
function minuteCss() {
  $(".minute").css("position", "absolute");
  $(".minute").width("2px");
  $(".minute").height("95px");
  $(".minute").css("background- color", "black");
  $(".minute").css("left", "0");
  $(".minute").css("right", "0");
  $(".minute").css("margin", "auto");
  $(".minute").css("bottom", "130px");
  $(".minute").css("transform-origin", "center bottom");
}
function hourCss() {
  $(".hour").css("position", "absolute");
  $(".hour").width("7px");
  $(".hour").height("60px");
  $(".hour").css("background- color", "black");
  $(".hour").css("left", "0");
  $(".hour").css("right", "0");
  $(".hour").css("margin", "auto");
  $(".hour").css("bottom", "130px");
  $(".hour").css("transform-origin", "center bottom");
}
clockHand();
numberSetting();
num3Css();
num6Css();
num9Css();
num12Css();
centerCss();
secondCss();
