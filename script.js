let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let icons = document.getElementsByClassName('icons')
let clearCanvas = document.getElementById('clearCanvas')
let startPaint = document.getElementById('startPaint')
let clearPaint = document.getElementById('clearPaint')
let numberPlus = document.getElementById('numberPlus')
let numberMinus = document.getElementById('numberMinus')
let widthNumber = document.getElementById('widthNumber')
let chooseColor = document.getElementsByClassName('color-item')
let color = document.getElementById('color')
let arrColor = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
let footer = document.getElementById('footer')

// Set color 
let i = 0
for (const iterator of chooseColor) {
    iterator.style.backgroundColor = arrColor[i]
    i++
}

// Color pick
function clearBorder(arr){
    for (const iterator of arr) {
        iterator.style.border = '2px solid black'
        iterator.style.transform = 'scale(1.3);'
    }
}

// clearBorder(chooseColor)

let colorPick = 'black'
for (const iterator of chooseColor) {
    iterator.addEventListener('click', function() {
        clearBorder(chooseColor)
        this.style.border = '2px solid white'
        colorPick = this.style.backgroundColor
        console.log(colorPick);
    })
}



// Plus-minus button
numberPlus.onclick = function() {
    widthNumber.innerHTML++
}
numberMinus.onclick = function() {
    widthNumber.innerHTML--
    if(widthNumber.innerHTML <= 1){
        widthNumber.innerHTML = 1
    }
}

// Clear button canvas
clearCanvas.onclick = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// Paint button
startPaint.onclick = function() {
    let isPressed = false
canvas.onmousedown = function(e){
    context.lineWidth = +widthNumber.innerText
    context.strokeStyle = colorPick
    context.beginPath()
    context.moveTo(e.offsetX, e.offsetY)
    isPressed = true
}
canvas.onmousemove = function(e){
    if(isPressed){
        context.lineTo(e.offsetX, e.offsetY)
        context.stroke()
        footer.innerHTML = e.offsetX + ',' + e.offsetY
    }
}

canvas.onmouseup = function(){
    isPressed = false
}
}

// Clear button
clearPaint.onclick = function() {
    let isPressed = false
canvas.onmousedown = function(e){
    context.lineWidth = +widthNumber.innerText
    context.strokeStyle = 'white'
    context.beginPath()
    context.moveTo(e.offsetX, e.offsetY)
    isPressed = true
}
canvas.onmousemove = function(e){
    if(isPressed){
        context.lineTo(e.offsetX, e.offsetY)
        context.stroke()
        footer.innerHTML = e.offsetX + ',' + e.offsetY
    }
}

canvas.onmouseup = function(){
    isPressed = false
}
}