const canvas = document.querySelector(".canvas");
const body = document.querySelector("body");

$(body).css({
  "background-color": "gray",
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  "min-height": "100vh",
  overflow: "hidden",
});
$("canvas").css({
  width: "300px",
  height: "300px",
  "background-color": "rgba(255, 255, 255, .8)",
  "border-radius": "50%",
  border: "2px solid black",
  position: "relative",
  position: "absolute",
  "text-align": "center",
  "font-size": "1.5rem",
});

const hour = document.createElement("div");
canvas.appendChild(hour);
hour.className = "hour";
const minute = document.createElement("div");
canvas.appendChild(minute);
minute.className = "minute";
const second = document.createElement("div");
canvas.appendChild(second);
second.className = "second";

for (let i = 1; i <= 12; i++) {
  let number = document.createElement("div");
  canvas.appendChild(number);
  number.innerText = i;
  number.className = "number";
  number.id = "num" + i;
  $(number).css({
    position: "absolute",
    width: "20px",
    height: "20px",
    "background-color": "pink",
    "text-align": "center",
    "font-size": "1.5rem",
  });
}
