input.onButtonPressed(Button.A, function () {
    basic.showString("Pression" + pression)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Humidite" + humidite)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Temperature" + temperature)
})
let temperature = 0
let humidite = 0
let pression = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    humidite = envirobit.getHumidity()
    pression = envirobit.getPressure()
    temperature = envirobit.getTemperature()
})
