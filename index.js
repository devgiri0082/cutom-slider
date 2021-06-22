let circle = document.querySelector(".circle");
let line = document.querySelector(".slider");
let offSet = line.offsetLeft;
circle.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
let score = document.querySelector(".value");
let color = document.querySelector(".color");
function mouseupHandler(e) {
  document.body.removeEventListener("mousemove", mousemoveHandler);
}
function mousedownHandler(e) {
  document.body.addEventListener("mousemove", mousemoveHandler);
}

function mousemoveHandler(e) {
  console.log(offSet);
  let value = e.clientX - offSet;
  let actualValue = value < 0 ? 0 : value > 230 ? 230 : value;
  let percent = (actualValue / 230) * 100;
  circle.style.left = `${actualValue}px`;
  console.log(value);
  color.style.width = `${percent}%`;
  score.innerText = `value: ${Math.floor(percent)}`;
}
