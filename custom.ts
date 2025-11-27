namespace led {
    //%color=#450f5c icon="\uf111"

    //%block="blink at $x $y evry $ms ms"
    export function blink(x:number, y:number, ms:number): void {
        basic.forever(function() {
            led.plot(x, y)
            basic.pause(ms)
            led.unplot(x, y)
            basic.pause(ms)


        })
    }
}