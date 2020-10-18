const body = document.querySelector("body");
const clock = document.querySelector(".clock");
const clockFase = document.createElement("div");
clockFase.className = "clockFace";
clock.appendChild(clockFase);

const hour = document.createElement("div");
clockFase.appendChild(hour);
hour.id = "hour";
hour.className = "clockHandle";

const minute = document.createElement("div");
clockFase.appendChild(minute);
minute.id = "minute";
minute.className = "clockHandle";

const second = document.createElement("div");
clockFase.appendChild(second);
second.id = "second";
second.className = "clockHandle";

function getTime() {
  const now = new Date();

  const getSeconds = now.getSeconds();
  const secondsDeg = (getSeconds / 60) * 360 + 90;
  second.style.transform = `rotate(${secondsDeg}deg)`;

  const getMinutes = now.getMinutes();
  const minutesDeg = (getMinutes / 60) * 360 + 90;
  minute.style.transform = `rotate(${minutesDeg}deg)`;

  const getHours = now.getHours();
  const hoursDeg = ((getHours + getMinutes / 60) / 12) * 360 + 90;
  hour.style.transform = `rotate(${hoursDeg}deg)`;
}

$(body).css({
  margin: "0",
  "font-size": "32px",
  display: "flex",
  "align-items": "center",
});

$(clock).css({
  width: "480px",
  height: "480px",
  "background-color": "gray",
  "border-radius": "50%",
  border: "2px solid black",
  margin: "50px auto",
  "text-align": "center",
  "font-size": "24px",
});
$(clockFase).css({
  position: "relative",
  width: "100%",
  height: "100%",
  transform: "translateY(-3px)",
});
$(second).css({
  width: "50%",
  height: "6px",
  top: "50%",
  "background-color": "black",
});
$(minute).css({
  width: "50%",
  height: "7px",
  top: "50%",
  "background-color": "red",
});
$(hour).css({
  width: "50%",
  height: "7px",
  top: "50%",
  "background-color": "blue",
});
$(".clockHandle").css({
  position: "absolute",
  transformOrigin: "100%",
  transform: "rotate(90deg)",
  transition: "0.1s all",
  transitionTimingFunction: "cubic-bezier(0.1, 2.7, 0.58, 1)",
});
setInterval(getTime, 10);
