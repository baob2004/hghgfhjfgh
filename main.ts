let phut = 0
let gio = 0
let giay = 0
basic.forever(function () {
    giay += 1
    basic.showNumber(giay)
    basic.pause(1000)
    if (giay == 60) {
        giay = 0
        phut += 1
        basic.showNumber(phut)
    }
    if (phut == 60) {
        phut = 0
        gio += 1
        basic.showNumber(gio)
    }
    if (gio == 24) {
        giay = 0
        phut = 0
        gio = 0
    }
})
