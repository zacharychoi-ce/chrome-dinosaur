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
// let cactus = new Cactus()
// cactus.draw()



let timer = 0
let cactusArr = []
let jumpTimer = 0
let animation
// to animate, need to do x++ 60 times a second.
// using requestAnimationFrame, but if going to do gaming script seriously, just use a JS library
function funcForEachFrame() {
    animation = requestAnimationFrame(funcForEachFrame)
    timer++
    // whatever write below, will happen 60 times a second

    ctx.clearRect(0, 0, canvas.width, canvas.height) // removing canvas and recreating every time
    // dino.x++ // but this will leave an afterimage so will look like it is increasing. thus we wrote above line

    if (timer % 120 === 0) { // every 120 frames (depending on hardware, monitor) draw a cactus
        var cactus = new Cactus()
        cactusArr.push(cactus) // every 120 frames put a cactus into the array
    }

    cactusArr.forEach((a, i, o) => {
        // if x coordinate is lower than 0, remove from array
        if (a.x < 0) {
            o.splice(i, 1)
        }
        a.x--

        // keep on collision checking
        isCollision(dino, a);

        a.draw()

        // for jumping, only when space bar is triggered
        if (jumping == true) {
            dino.y -= 1
            jumpTimer++
        }
        if (jumping == false) {
            if (dino.y < 100) {
                dino.y++
            }
        }
        // stop jumping after reaching 100 frames
        if (jumpTimer > 100) {
            jumping = false
            jumpTimer = 0 // enables to use Space again
        }
    })

    dino.draw()
}

funcForEachFrame()

// collision checking
function isCollision(dino, cactus) {
    let xDiff = cactus.x - (dino.x + dino.width)
    let yDiff = cactus.y - (dino.y + dino.height)
    if (xDiff < 0 && yDiff < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        cancelAnimationFrame(animation)
    }
}


// to make space bar equals jump in above funcForEachFrame
let jumping = false
document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        jumping = true
    }
})