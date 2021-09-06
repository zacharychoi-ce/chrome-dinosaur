// minimal code you need to draw stuff on the canvas.
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth - 100
canvas.heigh = window.innerHeight - 100

// to draw a square instead of dinosaur first
// ctx.fillStyle = 'green' // make a square with green
// ctx.fillRect(10,10, 100,100) // sizing

// main character's elements as object
let dino = {
    // dino coordinates
    x: 10,
    y: 100,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
// dino.draw()

// obstacles. Normally use class, as you need many
class Cactus {
    constructor() {
        this.x = 600
        this.y = 100
        this.width = 50
        this.height = 50
    }
    draw() {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
let cactus = new Cactus()
cactus.draw()

// to animate, need to do x++ 60 times a second.
// using requestAnimationFrame, but if going to do gaming script seriously, just use a JS library
function funcForEachFrame() {
    requestAnimationFrame(funcForEachFrame)
    // whatever write below, will happen 60 times a second
    dino.x++
    dino.draw()

}
funcForEachFrame()