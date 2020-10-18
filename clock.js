const clock = document.querySelector("#clock");
const body = document.querySelector("body");

setInterval(updateClock, 1000);
//number
for (let i = 1; i <= 12; i++) {
  let num = document.createElement("div");
  clock.appendChild(num);
  num.className = "num";
  num.id = "num" + i;
  let numDiv = document.createElement("div");
  num.appendChild(numDiv);
  numDiv.innerText = i;
  numDiv.id = "numDiv" + i;
  $(num).css({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "700",
    padding: "18px",
  });
  $(num).after({
    content: "",
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "5px",
    height: "15px",
    backgroundColor: "black",
  });
  $("#num1").css({ transform: "rotate(30deg)" });
  $("#numDiv1").css({ transform: "rotate(-30deg)" });
  $("#num2").css({ transform: "rotate(60deg)" });
  $("#numDiv2").css({ transform: "rotate(-60deg)" });
  $("#num3").css("transform", "rotate(90deg)");
  $("#numDiv3").css({ transform: "rotate(-90deg)" });
  $("#num4").css("transform", "rotate(120deg)");
  $("#numDiv4").css({ transform: "rotate(-120deg)" });
  $("#num5").css("transform", "rotate(150deg)");
  $("#numDiv5").css({ transform: "rotate(-150deg)" });
  $("#num6").css("transform", "rotate(180deg)");
  $("#numDiv6").css({ transform: "rotate(-180deg)" });
  $("#num7").css("transform", "rotate(210deg)");
  $("#numDiv7").css({ transform: "rotate(-210deg)" });
  $("#num8").css("transform", "rotate(240deg)");
  $("#numDiv8").css({ transform: "rotate(-240deg)" });
  $("#num9").css("transform", "rotate(270deg)");
  $("#numDiv9").css({ transform: "rotate(-270deg)" });
  $("#num10").css("transform", "rotate(300deg)");
  $("#numDiv10").css({ transform: "rotate(-300deg)" });
  $("#num11").css("transform", "rotate(330deg)");
  $("#numDiv11").css({ transform: "rotate(-330deg)" });
}

//drawClock

let handleHour = document.createElement("div");
clock.appendChild(handleHour);
handleHour.className = "clockHandle";
handleHour.id = "idHour";
let hour = document.createElement("div");
handleHour.appendChild(hour);
hour.className = "classHour";

let handleMinute = document.createElement("div");
clock.appendChild(handleMinute);
handleMinute.className = "clockHandle";
handleMinute.id = "idMinute";
let minute = document.createElement("div");
handleMinute.appendChild(minute);
minute.className = "classMinute";

let handleSecond = document.createElement("div");
clock.appendChild(handleSecond);
handleSecond.className = "clockHandle";
handleSecond.id = "idSecond";
let second = document.createElement("div");
handleSecond.appendChild(second);
second.className = "classSecond";

function updateClock() {
  let date = new Date();
  let sec = date.getSeconds() / 60;
  let min = (date.getMinutes() + sec) / 60;
  let hou = (date.getHours() + min) / 12;

  $(handleSecond).css({ transform: "rotate(" + sec * 360 + "deg)" });
}

updateClock();

$(".clockHandle").css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});
$(".classHour, .classMinute, .classSecond").css({
  position: "absolute",
  bottom: "50%",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "black",
});
$(".classSecond").css({
  width: "1px",
  height: "40%",
});
$(".classMinute").css({
  width: "4px",
  height: "38%",
  borderRadius: "2px",
});
$(".classHour").css({
  width: "8px",
  height: "28%",
  borderRadius: "4px",
});
//clockCss
$("*").css({ padding: 0, margin: 0, boxSizing: "border-box" });
$("body").css({
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});
$(clock).css({
  position: "relative",
  width: "400px",
  height: "400px",
  overflow: "hidden",
  borderRadius: "50%",
  border: "5px solid black",
  backgroundColor: "#fff",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});
$(clock).after({
  content: "",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  background:
    "linear-gradient(285deg, rgba(0, 0, 0, 0.175) 50%, rgba(0, 0, 0, 0.1) 50%)",
});
$(clock).before({
  content: "",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20px",
  height: "20px",
  backgroundColor: "black",
  borderRadius: "50%",
});
