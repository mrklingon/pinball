input.onButtonPressed(Button.A, function () {
    Ball.set(LedSpriteProperty.Direction, 45)
    for (let index = 0; index < 20; index++) {
        Ball.move(Speed)
        Ball.ifOnEdgeBounce()
        Speed = Speed / 1.5
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    Ball.set(LedSpriteProperty.Direction, -45)
    for (let index = 0; index < 20; index++) {
        Ball.move(Speed)
        Ball.ifOnEdgeBounce()
        Speed = Speed / 1.5
        basic.pause(100)
    }
})
let Speed = 0
let Ball: game.LedSprite = null
Ball = game.createSprite(2, 4)
Speed = 1
basic.forever(function () {
	
})
