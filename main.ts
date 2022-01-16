input.onButtonPressed(Button.A, function () {
    turns += -1
    Ball.set(LedSpriteProperty.Direction, 45)
    Pause = 100
    for (let index = 0; index < 20; index++) {
        Ball.move(Speed)
        Ball.ifOnEdgeBounce()
        Pause += 20
        basic.pause(Pause)
    }
})
input.onButtonPressed(Button.AB, function () {
    Ball.turn(Direction.Right, randint(-37, 37))
})
input.onButtonPressed(Button.B, function () {
    Pause = 100
    turns += -1
    Ball.set(LedSpriteProperty.Direction, -45)
    for (let index = 0; index < 20; index++) {
        Ball.move(Speed)
        Ball.ifOnEdgeBounce()
        Pause += 20
        basic.pause(Pause)
    }
})
let Pause = 0
let Speed = 0
let Ball: game.LedSprite = null
Ball = game.createSprite(2, 4)
let target = game.createSprite(0, 1)
Speed = 1
let turns = 10
basic.forever(function () {
    target.move(1)
    if (Ball.isTouching(target)) {
        game.addScore(7)
    }
    target.ifOnEdgeBounce()
    basic.pause(100)
    if (turns < 1) {
        game.gameOver()
    }
})
