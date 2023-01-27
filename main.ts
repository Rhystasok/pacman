input.onButtonPressed(Button.A, function () {
    if (true) {
        led.unplot(Pacmanx, PacmanY)
        PacmanY += -1
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    led.unplot(Pacmanx, PacmanY)
    if (Pacmanx <= -1) {
        Pacmanx = 4
    } else {
        Pacmanx += -1
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(Pacmanx, PacmanY)
    if (PacmanY >= 4) {
        PacmanY = 0
    } else {
        PacmanY += 1
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (true) {
        led.unplot(Pacmanx, PacmanY)
        Pacmanx += 1
    }
})
let PacmanY = 0
let Pacmanx = 0
Pacmanx = 2
PacmanY = 2
let GhostX = 0
let GhostY = 0
basic.clearScreen()
led.plot(Pacmanx, PacmanY)
led.plot(GhostX, GhostY)
basic.forever(function () {
    led.toggle(0, 0)
    led.plot(Pacmanx, PacmanY)
})
