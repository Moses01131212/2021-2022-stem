input.onPinPressed(TouchPin.P0, function () {
    // p0
    mark += 1
    basic.showNumber(mark)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    for (let index = 0; index < 5; index++) {
        light2(10)
    }
    strip.clear()
    strip.show()
})
input.onButtonPressed(Button.A, function () {
    control.reset()
})
function light3 (num: number) {
    // light
    light22.showRainbow(1, 360)
    light22.rotate(num)
    basic.pause(num)
    light22.clear()
    light22.show()
}
function start () {
    // start
    strip = neopixel.create(DigitalPin.P2, 50, NeoPixelMode.RGB)
    light22 = neopixel.create(DigitalPin.P1, 34, NeoPixelMode.RGB)
    mark = 0
    basic.showNumber(mark)
}
function light2 (light_number: number) {
    // light
    strip.showRainbow(1, 360)
    for (let index = 0; index < 50; index++) {
        strip.rotate(1)
        basic.pause(light_number)
        strip.show()
    }
}
let light22: neopixel.Strip = null
let strip: neopixel.Strip = null
let mark = 0
start()
basic.forever(function () {
    light3(100)
})
