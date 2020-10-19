const clock = document.querySelector("#clock");
const body = document.querySelector("body");

//number
for (let i = 1; i <= 12; i++) {
  let num = document.createElement("div");
  clock.appendChild(num);
  num.className = "num";
  num.id = "num" + i;
  let numDiv = document.createElement("div");
  num.appendChild(numDiv);
  numDiv.textContent = i;
  const numStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "700",
    transform: `rotate(${30 * i}deg)`,
  };
  Object.assign(num.style, numStyle);
  const numAfterStyle = {
    content: "",
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "5px",
    height: "15px",
    backgroundColor: "black",
  };
  Object.assign(num.after, numAfterStyle);
  const numDivStyle = {
    transform: `rotate(${-30 * i}deg)`,
  };
  Object.assign(numDiv.style, numDivStyle);
}
//clckFace
const bodyStyle = {
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
};
Object.assign(body.style, bodyStyle);
const clockStyle = {
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
};
Object.assign(clock.style, clockStyle);
const clockAfterStyle = {
  content: "",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  background:
    "linear-gradient(285deg, rgba(0, 0, 0, 0.175) 50%, rgba(0, 0, 0, 0.1) 50%)",
};
Object.assign(clock.after, clockAfterStyle);
const clockBeforeStyle = {
  content: "",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20px",
  height: "20px",
  backgroundColor: "black",
  borderRadius: "50%",
};
Object.assign(clock.before, clockBeforeStyle);

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

second.style.width = "1px";
second.style.height = "40%";
minute.style.width = "4px";
minute.style.height = "38%";
minute.style.borderRadius = "2px";
hour.style.width = "8px";
hour.style.height = "28%";
hour.style.borderRadius = "4px";

const clockHandleStyle = {
  position: "absolute",
  top: "0",
  left: " 0",
  width: "100%",
  height: "100%",
};
Object.assign(handleHour.style, clockHandleStyle);
Object.assign(handleMinute.style, clockHandleStyle);
Object.assign(handleSecond.style, clockHandleStyle);

const clockClassDivStyle = {
  position: "absolute",
  bottom: "50%",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "black",
};

Object.assign(hour.style, clockClassDivStyle);
Object.assign(minute.style, clockClassDivStyle);
Object.assign(second.style, clockClassDivStyle);

function getTime() {
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  const minutes = (date.getMinutes() + seconds) / 60;
  const hours = (date.getHours() + minutes) / 12;
  const getSecStyle = {
    transform: "rotate(" + seconds * 360 + "deg)",
  };
  const getMinStyle = {
    transform: "rotate(" + minutes * 360 + "deg)",
  };
  const getHourStyle = {
    transform: "rotate(" + hours * 360 + "deg)",
  };
  Object.assign(handleHour.style, getHourStyle);
  Object.assign(handleMinute.style, getMinStyle);
  Object.assign(handleSecond.style, getSecStyle);
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
