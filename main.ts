let lightLevel;
basic.forever(function () {
    lightLevel = input.lightLevel()
    if (lightLevel < 40) {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
