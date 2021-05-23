const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");


let size = 30
let isPressed = false
let color = 'white'
let x = undefined
let y = undefined

canvas.addEventListener('mousedown', e =>{
  isPressed = true
  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mousemove', e=> {
if(isPressed) {
  const x2 = e.offsetX
  const y2 = e.offsetY

  drawCircle(x2, y2)
  drawLine(x, y, x2, y2,)
  x = x2
  y = y2
}
})

function drawCircle(x, y) {
ctx.beginPath()
ctx.arc(x, y, size, 0, Math.PI * 2)
ctx.fillStyle = color
ctx.fill()

}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}
// boshidigi axvolga qaytarish
canvas.addEventListener('mouseup', function(){
  isPressed = false
  x = undefined
  y = undefined
})

increaseBtn.addEventListener('click', () => {
size += 5
if (size > 50) {
  size = 50
}
updateSizeScreen()
})

increaseBtn.addEventListener('click', () => {
  size += 5
  if (size > 5) {
    size = 5
  }
    updateSizeScreen()
})

function updateSizeScreen(){
  sizeEl.innerText = size
}


clearEl.addEventListener('click', (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})

colorEl.addEventListener('change', e=> {
  color = e.target.vaule
})

















































const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});
document.addEventListener("click", () => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

