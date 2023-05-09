let velocidad = 0
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
basic.pause(2000)
maqueen.motorStop(maqueen.Motors.All)
basic.pause(2000)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, velocidad)
basic.forever(function () {
    velocidad = 40
})
