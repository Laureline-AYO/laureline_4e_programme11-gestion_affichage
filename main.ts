input.onGesture(Gesture.LogoUp, function () {
    mode += 1
    if (mode == 1) {
        basic.showString("Heure")
    }
    if (mode == 2) {
        basic.showString("Pas")
    }
    if (mode == 3) {
        basic.showString("Distance")
    }
    if (mode == 4) {
        basic.showString("Temperature")
    }
    if (mode == 5) {
        basic.showString("Boussole")
    }
})
let mode = 0
mode = 0
