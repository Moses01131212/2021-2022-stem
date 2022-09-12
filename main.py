def light2(light_number: number):
    strip.show_rainbow(1, 360)
    for i in range(50):
        pass
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 50, NeoPixelMode.RGB)

def on_forever():
    pass
basic.forever(on_forever)
