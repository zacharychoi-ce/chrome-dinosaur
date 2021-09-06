// minimal code you need to draw stuff on the canvas.
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth - 100
canvas.heigh = window.innerHeight - 100

// to draw a square instead of dinosaur first
ctx.fillStyle = 'green' // make a square with green
ctx.fillRect(10,10, 100,100) // sizing