def on_forever():
    global lightLevel
    lightLevel = input.light_level()
    if lightLevel < 40:
        basic.show_icon(IconNames.NO)
        pins.digital_write_pin(DigitalPin.P0, 1)
    else:
        basic.show_icon(IconNames.YES)
        pins.digital_write_pin(DigitalPin.P0, 0)
basic.forever(on_forever)
