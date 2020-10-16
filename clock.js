const app = document.getElementById("app");
function clockDraw() {
  $("#app").width("300px");
  $("#app").height("300px");
  const creatText = app.getContext("2d");
  $("#app").css("backgroundColor", "white");
  const radius = $("#app").css("borderRadius", "50%");
  $("#app").css("border", "2px solid pink");
}
for (let i = 0; i < 12; i++) {
  const number = document.createElement("div");
  app.appendChild(number);
  number.innerHTML = i + 1;
  number.className = "number" + (i + 1);
}
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
