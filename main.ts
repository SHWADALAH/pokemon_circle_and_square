namespace SpriteKind {
    export const ui = SpriteKind.create()
    export const poke = SpriteKind.create()
    export const rival = SpriteKind.create()
    export const prof = SpriteKind.create()
    export const polyball = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile77`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau0`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile79`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field0, function (sprite, location) {
    if (portail == 1) {
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile79`)
        mySprite.sayText("non-ouvert au public", 500, true)
    } else {
        if (portail > 1) {
            if (portail == 2) {
                tiles.setCurrentTilemap(tilemap`niveau9`)
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile78`)
            } else {
                tiles.setCurrentTilemap(tilemap`niveau11`)
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile78`)
            }
        }
    }
})
function combat_sauvage () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pokecombat = randint(1, 8)
    tiles.setCurrentTilemap(tilemap`niveau14`)
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ddddddddddddddddddddddddddd111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd11111dd11111dddd111111111111111111111111111ddd111111111111111d11111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111dd11111dd11111dd11111111111111111111111111111111111111111111111111d1111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111ddd11111dd111111111111111111111111111111111111111111111111111111111111d111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111dddd1111dd111111111111111111111111111111111111111111111111111111111111111d11111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111ddd1111dd111111111ddddddddddddd1111111111111111111111111111111111111111111d11111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111dd1111dd1111111dddd1111111111111dddddddddd1111111111111111111111111111111111d1111
        111111111111111111111111111111111111111111111111111111111111111111111111111111d1111dd1111111dd111111111111111111111111111dd11111111111111111111111111111111d1111
        1111111111111111111111111111111111111111111111111111111111111111111111111111ddd11dd1111111111111111111111111111111111111111ddd11111111111111111111111111111d1111
        111111111111111111111111111111111111111111111111111111111111111111111111111d1d1dd111111111111111111111111111111111111111111111ddd111111111111111111111111111d111
        11111111111111111111111111111111111111111111111111111111111111111111111111d1d1d1111111111111111111ffffffffffffffffffffff111111111dd1111111111111111111111111d111
        1111111111111111111111111111111111111111111111111111111111111111111111111d11dd111111111111111fffffccccccccccccccccccccccff111111111dd11111111111111111111111d111
        111111111111111111111111111111111111111111111111111111111111111111111111d11d1111111111fffffffcccccccccccccccccccccccccccccffff1111111dd1111111111111111111111d11
        111111111111111111111111111111111111111111111111111111111111111111111111ddd11111111111fffcccccccccccccccccccccccccccccccccccccff1111111d111111111111111111111d11
        11111111111111111111111111111111111111111111111111111111111111111111111dd1d111111111ffccccccccccccccccccccccccccccccccccccccccccf1111111dd1111111111111111111d11
        1111111111111111111111111111111111111111111111111111111111111111111111d111d111111111fccccccccccccccccccccccccccccccccccccccccccccfff111111dd11111111111111111d11
        1111111111111111111111111111111111111111111111111111111111111111111111d111d11111111fcccccccccccccccccccccccccccccccccccccccccccccccff111111111111111111111111d11
        111111111111111111111111111111111111111111111111111111111111111111111d1111d11111111fccccccccccccccccccccccccccccccccccccccccccccccccf111111111111111111111111d11
        111111111111111111111111111111111111111111111111111111111111111111111d1111d11111111fccccccccccccccccccccccccccccccccccccccccccccccccf111111111111111111111111d11
        111111111111111111111111111111111111111111111111111111111111111111111d1111d11111111fccccccccccccccccccccccccccccccccccccccccccccccccf111111111111111111111111d11
        111111111111111111111111111111111111111111111111111111111111111111111d111d111111111fccccccccccccccccccccccccccccccccccccccccccccccccf111111111111111111111111d11
        111111111111111111111111111111111111111111111111111111111111111111111d111d111111111fcccccccccccccccccccccccccccccccccccccccccccccccf1111111111111111111111111d11
        111111111111111111111111111111111111111111111111111111111111111111111d1111d11111111fcccccccccccccccccccccccccccccccccccccccccccccccf1111111111111111111111111d11
        111111111111111111111111111111111111111111111111111111111111111111111d1111d11111111fccccccccccccccccccccccccccccccccccccccccccccccf1111111111111111111111111d111
        111111111111111111111111111111111111111111111111111111111111111111111d11111d11111111fccccccccccccccccccccccccccccccccccccccccccccff1111111111111111111111111d111
        111111111111111111111111111111111111111111111111111111111111111111111d11111d111111111fcccccccccccccccccccccccccccccccccccccccccff111111111111111111111111111d111
        111111111111111111111111111111111111111111111111111111111111111111111d11111d1111111111ffccccccccccccccccccccccccccccccccccccccf11111111111111111111111111111d111
        111111111111111111111111111111111111111111111111111111111111111111111d11111d111111111111ffccccccccccccccccccccccccccccccccffff111111111111111111111111111111d111
        1111111111111111111111111111111111111111111111111111111111111111111111d11111d1111111111111ffffccccccccccccccccccccccffffff1111111111111111111111111111111111d111
        1111111111111111111111111111111111111111111111111111111111111111111111d11111d11111111111111111ffffffffffffffffffffff1111111111111111111111111111111111111111d111
        11111111111111111111111111111111111111111111111111111111111111111111111d11111d11111111111111111111111111111111111111111111111111111111111111111111111111111d1111
        111111111111111111111111111111111111111111111111111111111111111111111111d1111dd1dd1111111111111111111111111111111111111111111111111111111111111111111111111d1111
        111111111111111111111111111111111111111111111111111111111111111111111111d111111dd1dd1111111111111111111111111111111111111111111111111111111111111111111111d11111
        1111111111111111111111111111111111111111111111111111111111111111111111111d1111111dd1ddd1111111111111111111111111111111111111111111111111111111111111111111d11111
        1111111111111111111111111111111111111111111111111111111111111111111111111dd11111111dd11ddddd1111111111111111111111111111111111111111111111111111111111111d111111
        111111111111111111111111111111111111111111111111111111111111111111111111111d111111111dd11111dddd11111111111111ddddd1111111111111111111111111111111111111d1111111
        111111111111111111111111111111111111111111111111111111111111111111111111111dd1111111111ddd111111dddd111111dddd11111111111111111111111111111111111111111d11111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111dd11111111111dddddddddddddddd111111111111111111111111111111111111111111111d11111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111dd11111111111111111111111ddddd11111111111111111111111111111111111111111d111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111d111111111111111111111111111dddddd1111111111111111111111111111111111d1111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111dd1111111111111111111111111111111dddd11111111111111111111111111111d11111111111
        11111111111111111111111111111111111111111111111111ddddddddddddddd1111111111111111111dd111111111111111111111111111111111ddddd111111111111111111111ddd111111111111
        111111111111111111111111111111111111111111111ddddd111111111111111ddd111111111111111111d1111111111111111111111111111111111111ddddddddddddddddddddd111111111111111
        11111111111111111111111111111111111111111dddd11111111111111111111111dd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111ddd11111111111111111111111111111dd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111dd111111111ddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111dd1111111dddd111111dddddddddd11111111111ddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111dd11ddddddd1111111ddd1111111111dddd111111111d111111dddd1111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111dddddd11111111dddddd11111111111111111dd11111111d111111111dddd111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111ddd11111111111dd1111111111111111111111111dd1111111d111111111111ddd111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111ddd1d111111111ddd1111ddddddddddddddddddddddd11ddd11111d11111111111111dd1111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111dd111d11111111dd1111ddd11111111111111111111111dddd1111111d111111111111111ddd1111111111111111111111111111111111111111111111111111111111111
        11111111111111111111ddd1111d1111111dd1ddddd111111111111111111111111111111dd111111d11111111111111111ddd1111111111111111111111111111111111111111111111111111111111
        111111111111111111dd111111d1111111d11d1111111111111111111111111111111111111ddd1111d1111111111111111111dd11111111111111111111111111111111111111111111111111111111
        1111111111111111dd11111111d11111dd11d11111111111111111111111111111111111111111dd111d11111111111111111111dd111111111111111111111111111111111111111111111111111111
        11111111111111dd111111111d1111dd11dd11111111111111111111111111111111111111111111dd1d1111111111111111111111dd1111111111111111111111111111111111111111111111111111
        111111111111dd11111111111d11dd1ddd111111111111111111111111111111111111111111111111ddd11111111111111111111111d111111111111111111111111111111111111111111111111111
        11111111111d111111111111d1dd11d111111111111111ffffffffffffff111111111111111111111111dd11111111111111111111111dd1111111111111111111111111111111111111111111111111
        1111111111d111111111111ddd11dd111111111111ffffccccccccccccccfff11111111111111111111111d111111111111111111111111d111111111111111111111111111111111111111111111111
        111111111d111111111111dd111d111111111111ffcccccccccccccccccccccfffffffff11111111111111dd111111111111111111111111d11111111111111111111111111111111111111111111111
        111111111d111111111111d111d111111111111fccccccccccccccccccccccccccccccccfff111111111111ddd11111111111111111111111d1111111111111111111111111111111111111111111111
        11111111d111111111111d111dd11111111111fccccccccccccccccccccccccccccccccccccf111111111111d1d11111111111111111111111dd11111111111111111111111111111111111111111111
        1111111d111111111111dd11d111111111111fccccccccccccccccccccccccccccccccccccccf111111111111d1d111111111111111111111111d1111111111111111111111111111111111111111111
        111111d111111111111d1111111111111111fccccccccccccccccccccccccccccccccccccccccf11111111111d11d111111111111111111111111d111111111111111111111111111111111111111111
        111111d11111111111d11111111111111111fcccccccccccccccccccccccccccccccccccccccccf11111111111d1d1111111111111111111111111d11111111111111111111111111111111111111111
        11111d11111111111d11111111111111111fcccccccccccccccccccccccccccccccccccccccccccf1111111111d11d1111111111111111111111111d1111111111111111111111111111111111111111
        11111d1111111111d11111111111111111fccccccccccccccccccccccccccccccccccccccccccccf1111111111d111d1111111111111111111111111d111111111111111111111111111111111111111
        11111d111111111d11111111111111111fccccccccccccccccccccccccccccccccccccccccccccccf1111111111d111d1111111111111111111111111d11111111111111111111111111111111111111
        11111d11111111d11111111111111111fcccccccccccccccccccccccccccccccccccccccccccccccf1111111111d111d1111111111111111111111111d11111111111111111111111111111111111111
        11111d11111111d1111111111111111fcccccccccccccccccccccccccccccccccccccccccccccccccf111111111d1111d111111111111111111111111d11111111111111111111111111111111111111
        11111d1111111d1111111111111111ffcccccccccccccccccccccccccccccccccccccccccccccccccf111111111d11111d111111111111111111111111d1111111111111111111111111111111111111
        11111d1111111d1111111111111111fccccccccccccccccccccccccccccccccccccccccccccccccccf1111111111d11111d11111111111111111111111d1111111111111111111111111111111111111
        11111d1111111d111111111111111fcccccccccccccccccccccccccccccccccccccccccccccccccccf1111111111d11111d111111111111111111111111d111111111111111111111111111111111111
        111111d11111d1111111111111111fccccccccccccccccccccccccccccccccccccccccccccccccccff1111111111d111111d11111111111111111111111d111111111111111111111111111111111111
        111111d11111d1111111111111111fcccccccccccccccccccccccccccccccccccccccccccccccccff1111111111d11111111d1111111111111111111111d111111111111111111111111111111111111
        111111d1111d11111111111111111fcccccccccccccccccccccccccccccccccccccccccccccccccf11111111111d11111111d1111111111111111111111d111111111111111111111111111111111111
        111111d1111d11111111111111111fccccccccccccccccccccccccccccccccccccccccccccccccf111111111111d11111111d11111111111111111111111d11111111111111111111111111111111111
        1111111d11d1111111111111111111fcccccccccccccccccccccccccccccccccccccccccccccccf11111111111d111111111d11111111111111111111111d11111111111111111111111111111111111
        1111111d11d11111111111111111111fccccccccccccccccccccccccccccccccccccccccccccccf11111111111d1111111111d1111111111111111111111d11111111111111111111111111111111111
        1111111d11d111111111111111111111fffccccccccccccccccccccccccccccccccccccccccccf11111111111d11111111111d1111111111111111111111d11111111111111111111111111111111111
        11111111d1d111111111111111111111111fccccccccccccccccccccccccccccccccccccccccf11111111111d111111111111d111111111111111111111d111111111111111111111111111111111111
        11111d11d1d1111111111111111111111111ffffccccccccccccccccccccccccccccccccccff1111111111dd1111111111111d11111111111111111111d1111111111111111111111111111111111111
        111111ddd11d1111111111111111111111111111ffcccccccccccccccccccccccccccccccf11111111111d1111111111111111d1111111111111111111d1111111111111111111111111111111111111
        11111111dd1d11111111111111111111111111111fffffffffffcccccccccccccccccffff11111111111d11111111111111111d111111111111111111d11111111111111111111111111111111111111
        111111111ddd111111111111111111111111111111111111fcccccccccccfffffffff1111111111111dd11111111111111111d11111111111111111dd111111111111111111111111111111111111111
        1111111111d1dd1111111111111111111111111111111111ffffffffffff111111111111111111111d1111111111111111111d111111111111111dd11111111111111111111111111111111111111111
        1111111111d11ddd1111111111111111111111111111111111111111111111111111111111111111d1111111111111111111d1111111111111ddd1111111111111111111111111111111111111111111
        1111111111d11d11dd111111111111111111111111111111111111111111111111111111111111dd1111111111111111111d11111111111ddd1111111111111111111111111111111111111111111111
        11111111111d11d111dd111111111111111111111111111111111111111111111111111111111d11111111111111111111d1111111111dd1111111111111111111111111111111111111111111111111
        111111111111d11d1111dd11111111111111111111111111111111111111111111111111111dd111111111111111111111d1111111ddd111111111111111111111111111111111111111111111111111
        1111111111111d11d11111dd11111111111111111111111111111111111111111111111111d1111111111111111111111d11111ddd111111111111111111111111111111111111111111111111111111
        11111111111111dd1d111111dd111111111111111111111111111111111111111111111111d111111111111111111111d111ddd111111111111111111111111111111111111111111111111111111111
        1111111111111111ddd1111111dd111111111111111111111111111111111111111111111d11111111111111111111dddddd111111111111111111111111111111111111111111111111111111111111
        111111111111111111dd11111111ddd1111111111111111111111111111111111111111dd1111111111111111111dddd1111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111dd111111111dd11111111111111111111111111111111111ddd111111111111111111dddd1111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111dd111111111dd1111111111111111111111111111111dd1111111111111111111ddd1111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111ddd111111111ddd111111111111111111111111111d11111111111111111dddd1111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111ddd1111111111dd11111111111111111111111dd111111111111111dddd1111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111ddddd11111111dddd11111111111111111dd1111111111ddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111dd1dddd11111111ddddddd111111111d1111dddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111dd111ddddddddddddddddddddddddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111ddd1111111111111111111ddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111ddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    if (pokecombat == 1) {
        ennemi = sprites.create(assets.image`myImage7`, SpriteKind.Enemy)
    }
    if (pokecombat == 2) {
        ennemi = sprites.create(assets.image`myImage9`, SpriteKind.Enemy)
    }
    if (pokecombat == 3) {
        ennemi = sprites.create(assets.image`myImage10`, SpriteKind.Enemy)
    }
    if (pokecombat == 4) {
        ennemi = sprites.create(assets.image`myImage11`, SpriteKind.Enemy)
    }
    if (pokecombat == 5) {
        ennemi = sprites.create(assets.image`myImage12`, SpriteKind.Enemy)
    }
    if (pokecombat == 6) {
        ennemi = sprites.create(assets.image`myImage13`, SpriteKind.Enemy)
    }
    if (pokecombat == 7) {
        ennemi = sprites.create(assets.image`myImage14`, SpriteKind.Enemy)
    }
    if (pokecombat == 8) {
        ennemi = sprites.create(assets.image`myImage15`, SpriteKind.Enemy)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.polyball, function (sprite, otherSprite) {
    _000polyball += 1
    sprites.destroy(otherSprite, effects.spray, 500)
    story.printText("+1 polyball.augmente la taux de capure des pokémons roche ou acier et aux pokémons symétriques", 100, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau0`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile12`)
    coffre1sprite_ = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f 5 f 5 . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . 5 f 5 f 5 f 5 f 5 f . . . 
        . . f f f f f f f f f f f f . . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 . . 
        . f f f f f f f f f f f f f f . 
        . 5 f 5 f 5 f 1 1 f f 5 f 5 f . 
        . f f f f f f 1 1 f f f f f f . 
        . 1 1 f 1 1 f 1 1 f f f f 1 f . 
        . . f f f f f f f 1 1 1 f 1 . . 
        . . 1 f 1 1 1 f 1 1 1 f 1 1 . . 
        . . . 1 f 1 f 1 f 1 f 1 1 . . . 
        . . . . 1 f 1 1 1 f f 1 . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.polyball)
    tiles.placeOnRandomTile(coffre1sprite_, sprites.dungeon.collectibleInsignia)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile11`)
})
controller.combos.attachCombo("b+a", function () {
    combat_sauvage()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (anim_yor_n == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        true
        )
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (anim_yor_n == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau0`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile23`)
    coffre1sprite_ = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f 5 f 5 . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . 5 f 5 f 5 f 5 f 5 f . . . 
        . . f f f f f f f f f f f f . . 
        . . f 5 f 5 f 5 f 5 f 5 f 5 . . 
        . f f f f f f f f f f f f f f . 
        . 5 f 5 f 5 f 1 1 f f 5 f 5 f . 
        . f f f f f f 1 1 f f f f f f . 
        . 1 1 f 1 1 f 1 1 f f f f 1 f . 
        . . f f f f f f f 1 1 1 f 1 . . 
        . . 1 f 1 1 1 f 1 1 1 f 1 1 . . 
        . . . 1 f 1 f 1 f 1 f 1 1 . . . 
        . . . . 1 f 1 1 1 f f 1 . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.polyball)
    tiles.placeOnRandomTile(coffre1sprite_, sprites.dungeon.collectibleInsignia)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    vitesse = 150
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controls == 1) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile24`)) {
            anim_yor_n = 0
            tiles.setCurrentTilemap(tilemap`niveau3`)
            music.setVolume(10)
            story.printText("bonjour.", 50, 100, 8, 1, story.TextSpeed.Normal)
            story.printText("je suis le professeur érable.", 50, 100, 8, 1, story.TextSpeed.Normal)
            story.printText("j'imagine que tu est là pour avoir ton pokémon?", 50, 100, 8, 1, story.TextSpeed.Normal)
            story.showPlayerChoices("oui", "non")
            if (story.checkLastAnswer("non")) {
                story.printText("alors va t'en. j'attends de vrais nouveaux dresseurs.", 50, 100, 8, 1, story.TextSpeed.Normal)
            }
            if (story.checkLastAnswer("oui")) {
                story.printText("commençons", 50, 100, 8, 1, story.TextSpeed.Normal)
                story.printText("regarde les pokémons et choisis", 50, 100, 8, 1, story.TextSpeed.Normal)
                pokés = sprites.create(assets.image`myImage4`, SpriteKind.ui)
                tiles.placeOnRandomTile(pokés, assets.tile`myTile42`)
                story.printText("tritro, le pokémon arbre.Il est de type plante. Il est connu pour se camoufler en s'enterrant.", 50, 100, 8, 1, story.TextSpeed.Normal)
                story.printText("splaqui, le pokémon flaque. il est de type eau. il adore faire glisser les gens dans sa flaque.", 50, 100, 8, 1, story.TextSpeed.Normal)
                story.printText("forfeu, le pokémon fumée. Il est de type feu. Une de ses attaques permet d'aveugler.", 50, 100, 8, 1, story.TextSpeed.Normal)
                story.showPlayerChoices("tritro", "splaqui", "forfeu")
                if (story.checkLastAnswer("tritro")) {
                    _1poke = 1
                }
                if (story.checkLastAnswer("forfeu")) {
                    _1poke = 2
                }
                if (story.checkLastAnswer("splaqui")) {
                    _1poke = 3
                }
                sprites.destroy(pokés)
                rival = sprites.create(img`
                    . f f f . f f f f . f f f . 
                    f f f f f c c c c f f f f f 
                    f f f f b c c c c b f f f f 
                    f f f c 3 c c c c 3 c f f f 
                    . f 3 3 c c c c c c 3 3 f . 
                    . f c c c c c c c c c c f . 
                    . f f c c c c c c c c f f . 
                    . f f f c c c c c c f f f . 
                    . f f f f f f f f f f f f . 
                    . . f f f f f f f f f f . . 
                    . . e f f f f f f f f e . . 
                    . e 4 f f f f f f f f 4 e . 
                    . 4 d f 3 3 3 3 3 3 c d 4 . 
                    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                    . . . . f f f f f f . . . . 
                    . . . . f f . . f f . . . . 
                    `, SpriteKind.rival)
                tiles.placeOnRandomTile(rival, assets.tile`myTile7`)
                mySprite.setImage(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f f e 2 2 2 2 2 2 e e f . . 
                    . . f e 2 f f f f f f 2 e f . . 
                    . . f f f f e e e e f f f f . . 
                    . f f e f b f 4 4 f b f e f f . 
                    . f e e 4 1 f d d f 1 4 e e f . 
                    . . f e e d d d d d d e e f . . 
                    . . . f e e 4 4 4 4 e e f . . . 
                    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `)
                story.printText("prof! prof! attendez!", 50, 100, 8, 1, story.TextSpeed.Normal)
                animation.runImageAnimation(
                rival,
                [img`
                    . f f f . f f f f . f f f . 
                    f f f f f c c c c f f f f f 
                    f f f f b c c c c b f f f f 
                    f f f c 3 c c c c 3 c f f f 
                    . f 3 3 c c c c c c 3 3 f . 
                    . f c c c c c c c c c c f . 
                    . f f c c c c c c c c f f . 
                    . f f f c c c c c c f f f . 
                    . f f f f f f f f f f f f . 
                    . . f f f f f f f f f f . . 
                    . . e f f f f f f f f e . . 
                    . e 4 f f f f f f f f 4 e . 
                    . 4 d f 3 3 3 3 3 3 c d 4 . 
                    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                    . . . . f f f f f f . . . . 
                    . . . . f f . . f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . 
                    . f f f . f f f f . f f f . 
                    f f f f f c c c c f f f f f 
                    f f f f b c c c c b f f f f 
                    f f f c 3 c c c c 3 c f f f 
                    . f 3 3 c c c c c c 3 3 f . 
                    . f c c c c c c c c c f f . 
                    . f f c c c c c c c c f f . 
                    . f f c c c c c c f f f f . 
                    . f f f f f f f f f f f f . 
                    . . f f f f f f f f f f . . 
                    . . e f f f f f f f f e . . 
                    . . e f f f f f f f f 4 e . 
                    . . 4 f 3 3 3 3 3 e d d 4 . 
                    . . e f f f f f f e e 4 . . 
                    . . . f f f . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . 
                    . f f f . f f f f . f f f . 
                    f f f f f c c c c f f f f f 
                    f f f f b c c c c b f f f f 
                    f f f c 3 c c c c 3 c f f f 
                    . f 3 3 c c c c c c 3 3 f . 
                    . f f c c c c c c c c c f . 
                    . f f c c c c c c c c f f . 
                    . f f f f c c c c c c f f . 
                    . f f f f f f f f f f f f . 
                    . . f f f f f f f f f f . . 
                    . . e f f f f f f f f e . . 
                    . e 4 f f f f f f f f e . . 
                    . 4 d d e 3 3 3 3 3 f 4 . . 
                    . . 4 e e f f f f f f e . . 
                    . . . . . . . . f f f . . . 
                    `],
                100,
                true
                )
                story.spriteMoveToLocation(rival, 40, 88, 69)
                animation.runImageAnimation(
                rival,
                [img`
                    . . . . . . . . . . . . . . 
                    . f f f . f f f f f . . . . 
                    f f f f f c c c c f f . . . 
                    f f f f b c c c c c c f . . 
                    f f f c 3 c c c c c c f . . 
                    . f 3 3 c c c c c c c c f . 
                    . f f f c c c c c 4 c c f . 
                    . f f f f c c c 4 4 c f f . 
                    . f f 4 4 f b f 4 4 f f f . 
                    . f f 4 d 4 1 f d d c f . . 
                    . . f f f 4 d d d d f . . . 
                    . . 4 d d e 4 4 4 e f . . . 
                    . . e d d e 3 3 3 3 f . . . 
                    . . f e e f 6 6 6 6 f f . . 
                    . . f f f f f f f f f f . . 
                    . . . f f . . . f f f . . . 
                    `,img`
                    . . . . . . . . . . . . . . 
                    . f f f . f f f f f . . . . 
                    f f f f f c c c c f f . . . 
                    f f f f b c c c c c c f . . 
                    f f f c 3 c c c c c c f . . 
                    . f 3 3 c c c c c c c c f . 
                    . f f f c c c c c 4 c c f . 
                    . f f f f c c c 4 4 c f f . 
                    . f f 4 4 f b f 4 4 f f f . 
                    . . f 4 d 4 1 f d d f f . . 
                    . . f f f e e d d d f . . . 
                    . . . f 4 d d e 4 e f . . . 
                    . . . f e d d e 3 3 f . . . 
                    . . f f f e e f 6 6 f f . . 
                    . . f f f f f f f f f f . . 
                    . . . f f . . . f f f . . . 
                    `,img`
                    . f f f . f f f f f . . . . 
                    f f f f f c c c c f f . . . 
                    f f f f b c c c c c c f . . 
                    f f f c 3 c c c c c c f . . 
                    . f 3 3 c c c c c c c c f . 
                    . f f f c c c c c 4 c c f . 
                    . f f f f c c c 4 4 e f f . 
                    . f f 4 4 f b f 4 4 e f f . 
                    . . f 4 d 4 1 f d d f f . . 
                    . . f f f 4 d d d d f . . . 
                    . . . f e e 4 4 4 e f . . . 
                    . . . 4 d d e 3 3 3 f . . . 
                    . . . e d d e 3 3 3 f . . . 
                    . . . f e e f 6 6 6 f . . . 
                    . . . . f f f f f f . . . . 
                    . . . . . f f f . . . . . . 
                    `],
                100,
                true
                )
                story.spriteMoveToLocation(rival, 104, 88, 69)
                mySprite.setImage(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f e e e e f f . . . . 
                    . . . f e e e f f e e e f . . . 
                    . . f f f f f 2 2 f f f f f . . 
                    . . f f e 2 e 2 2 e 2 e f f . . 
                    . . f e 2 f 2 f f 2 f 2 e f . . 
                    . . f f f 2 2 e e 2 2 f f f . . 
                    . f f e f 2 f e e f 2 f e f f . 
                    . f e e f f e e e e f e e e f . 
                    . . f e e e e e e e e e e f . . 
                    . . . f e e e e e e e e f . . . 
                    . . e 4 f f f f f f f f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `)
                animation.runImageAnimation(
                rival,
                [img`
                    . f f f . f f f f . f f f . 
                    f f f f f c c c c f f f f f 
                    f f f f b c c c c b f f f f 
                    f f f c 3 c c c c 3 c f f f 
                    . f 3 3 c c c c c c 3 3 f . 
                    . f c c c c c c c c c c f . 
                    . f f c c c c c c c c f f . 
                    . f f f c c c c c c f f f . 
                    . f f f f f f f f f f f f . 
                    . . f f f f f f f f f f . . 
                    . . e f f f f f f f f e . . 
                    . e 4 f f f f f f f f 4 e . 
                    . 4 d f 3 3 3 3 3 3 c d 4 . 
                    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                    . . . . f f f f f f . . . . 
                    . . . . f f . . f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . . 
                    . f f f . f f f f . f f f . 
                    f f f f f c c c c f f f f f 
                    f f f f b c c c c b f f f f 
                    f f f c 3 c c c c 3 c f f f 
                    . f 3 3 c c c c c c 3 3 f . 
                    . f c c c c c c c c c f f . 
                    . f f c c c c c c c c f f . 
                    . f f c c c c c c f f f f . 
                    . f f f f f f f f f f f f . 
                    . . f f f f f f f f f f . . 
                    . . e f f f f f f f f e . . 
                    . . e f f f f f f f f 4 e . 
                    . . 4 f 3 3 3 3 3 e d d 4 . 
                    . . e f f f f f f e e 4 . . 
                    . . . f f f . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . 
                    . f f f . f f f f . f f f . 
                    f f f f f c c c c f f f f f 
                    f f f f b c c c c b f f f f 
                    f f f c 3 c c c c 3 c f f f 
                    . f 3 3 c c c c c c 3 3 f . 
                    . f f c c c c c c c c c f . 
                    . f f c c c c c c c c f f . 
                    . f f f f c c c c c c f f . 
                    . f f f f f f f f f f f f . 
                    . . f f f f f f f f f f . . 
                    . . e f f f f f f f f e . . 
                    . e 4 f f f f f f f f e . . 
                    . 4 d d e 3 3 3 3 3 f 4 . . 
                    . . 4 e e f f f f f f e . . 
                    . . . . . . . . f f f . . . 
                    `],
                100,
                true
                )
                story.spriteMoveToLocation(rival, 104, 72, 69)
                animation.runImageAnimation(
                rival,
                [img`
                    . . . . . . . . . . . . . . 
                    . f f f . f f f f f . . . . 
                    f f f f f c c c c f f . . . 
                    f f f f b c c c c c c f . . 
                    f f f c 3 c c c c c c f . . 
                    . f 3 3 c c c c c c c c f . 
                    . f f f c c c c c 4 c c f . 
                    . f f f f c c c 4 4 c f f . 
                    . f f 4 4 f b f 4 4 f f f . 
                    . f f 4 d 4 1 f d d c f . . 
                    . . f f f 4 d d d d f . . . 
                    . . 4 d d e 4 4 4 e f . . . 
                    . . e d d e 3 3 3 3 f . . . 
                    . . f e e f 6 6 6 6 f f . . 
                    . . f f f f f f f f f f . . 
                    . . . f f . . . f f f . . . 
                    `,img`
                    . . . . . . . . . . . . . . 
                    . f f f . f f f f f . . . . 
                    f f f f f c c c c f f . . . 
                    f f f f b c c c c c c f . . 
                    f f f c 3 c c c c c c f . . 
                    . f 3 3 c c c c c c c c f . 
                    . f f f c c c c c 4 c c f . 
                    . f f f f c c c 4 4 c f f . 
                    . f f 4 4 f b f 4 4 f f f . 
                    . . f 4 d 4 1 f d d f f . . 
                    . . f f f e e d d d f . . . 
                    . . . f 4 d d e 4 e f . . . 
                    . . . f e d d e 3 3 f . . . 
                    . . f f f e e f 6 6 f f . . 
                    . . f f f f f f f f f f . . 
                    . . . f f . . . f f f . . . 
                    `,img`
                    . f f f . f f f f f . . . . 
                    f f f f f c c c c f f . . . 
                    f f f f b c c c c c c f . . 
                    f f f c 3 c c c c c c f . . 
                    . f 3 3 c c c c c c c c f . 
                    . f f f c c c c c 4 c c f . 
                    . f f f f c c c 4 4 e f f . 
                    . f f 4 4 f b f 4 4 e f f . 
                    . . f 4 d 4 1 f d d f f . . 
                    . . f f f 4 d d d d f . . . 
                    . . . f e e 4 4 4 e f . . . 
                    . . . 4 d d e 3 3 3 f . . . 
                    . . . e d d e 3 3 3 f . . . 
                    . . . f e e f 6 6 6 f . . . 
                    . . . . f f f f f f . . . . 
                    . . . . . f f f . . . . . . 
                    `],
                100,
                true
                )
                story.spriteMoveToLocation(rival, 120, 72, 69)
                animation.stopAnimation(animation.AnimationTypes.All, rival)
                tiles.setCurrentTilemap(tilemap`niveau5`)
                story.printText("ah, éloïse ventis, le prodige d'éclat d'argent!", 50, 100, 8, 1, story.TextSpeed.Normal)
                tiles.setCurrentTilemap(tilemap`niveau3`)
                story.printText("je te présente Éloïse Ventis, directrice de la filiale pokémon du labo de sa famille à seulement 11 ans.", 50, 100, 8, 1, story.TextSpeed.Normal)
                tiles.setCurrentTilemap(tilemap`niveau5`)
                story.printText("oh, oui! et mes parents ne veulent pas que j'ai mon propre pokémon, même en temps que directrice! mais aujourd'hui j'ai été en retard à cause d'un prototype de portail interdimensionnel expérimental.", 50, 100, 8, 1, story.TextSpeed.Normal)
                story.printText("et quel pokémon veut-tu, éloïse?", 50, 100, 8, 1, story.TextSpeed.Normal)
                if (_1poke == 1) {
                    story.printText("un forfeu, bien sur!", 50, 100, 8, 1, story.TextSpeed.Normal)
                }
                if (_1poke == 2) {
                    story.printText("un splaqui, bien sur!", 50, 100, 8, 1, story.TextSpeed.Normal)
                }
                if (_1poke == 3) {
                    story.printText("un tritro, bien sur!", 50, 100, 8, 1, story.TextSpeed.Normal)
                }
                story.printText("avec, je vais pouvoir capturer tout plein de pokémons electrik et acier!", 50, 100, 8, 1, story.TextSpeed.Normal)
                story.printText("bon,je retourne au travail", 50, 100, 8, 1, story.TextSpeed.Normal)
                animation.runImageAnimation(
                rival,
                [img`
                    . . . . f f f f f . f f f . 
                    . . . f f c c c c f f f f f 
                    . . f c c c c c c b f f f f 
                    . . f c c c c c c 3 c f f f 
                    . f c c c c c c c c 3 3 f . 
                    . f c c 4 c c c c c f f f . 
                    . f f e 4 4 c c c f f f f . 
                    . f f e 4 4 f b f 4 4 f f . 
                    . . f f d d f 1 4 d 4 f . . 
                    . . . f d d d d 4 f f f . . 
                    . . . f e 4 4 4 e e f . . . 
                    . . . f 3 3 3 e d d 4 . . . 
                    . . . f 3 3 3 e d d e . . . 
                    . . . f 6 6 6 f e e f . . . 
                    . . . . f f f f f f . . . . 
                    . . . . . . f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . 
                    . . . . f f f f f . f f f . 
                    . . . f f c c c c f f f f f 
                    . . f c c c c c c b f f f f 
                    . . f c c c c c c 3 c f f f 
                    . f c c c c c c c c 3 3 f . 
                    . f c c 4 c c c c c f f f . 
                    . f f c 4 4 c c c f f f f . 
                    . f f f 4 4 f b f 4 4 f f . 
                    . . f f d d f 1 4 d 4 f . . 
                    . . . f d d d e e f f f . . 
                    . . . f e 4 e d d 4 f . . . 
                    . . . f 3 3 e d d e f . . . 
                    . . f f 6 6 f e e f f f . . 
                    . . f f f f f f f f f f . . 
                    . . . f f f . . . f f . . . 
                    `,img`
                    . . . . . . . . . . . . . . 
                    . . . . f f f f f . f f f . 
                    . . . f f c c c c f f f f f 
                    . . f c c c c c c b f f f f 
                    . . f c c c c c c 3 c f f f 
                    . f c c c c c c c c 3 3 f . 
                    . f c c 4 c c c c c f f f . 
                    . f f c 4 4 c c c f f f f . 
                    . f f f 4 4 f b f 4 4 f f . 
                    . . f c d d f 1 4 d 4 f f . 
                    . . . f d d d d 4 f f f . . 
                    . . . f e 4 4 4 e d d 4 . . 
                    . . . f 3 3 3 3 e d d e . . 
                    . . f f 6 6 6 6 f e e f . . 
                    . . f f f f f f f f f f . . 
                    . . . f f f . . . f f . . . 
                    `],
                100,
                true
                )
                story.spriteMoveToLocation(rival, 104, 72, 69)
                animation.runImageAnimation(
                rival,
                [img`
                    . . . . f f f f . . . . . 
                    . . f f f f f f f f . . . 
                    . f f f f f f c f f f . . 
                    f f f f f f c c f f f c . 
                    f f f c f f f f f f f c . 
                    c c c f f f e e f f c c . 
                    f f f f f e e f f c c f . 
                    f f f b f e e f b f f f . 
                    . f 4 1 f 4 4 f 1 4 f . . 
                    . f e 4 4 4 4 4 4 e f . . 
                    . f f f e e e e f f f . . 
                    f e f b 7 7 7 7 b f e f . 
                    e 4 f 7 7 7 7 7 7 f 4 e . 
                    e e f 6 6 6 6 6 6 f e e . 
                    . . . f f f f f f . . . . 
                    . . . f f . . f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . 
                    . . . . . f f f f . . . . 
                    . . . f f f f f f f f . . 
                    . . f f f f f f c f f f . 
                    f f f f f f f c c f f f c 
                    f f f f c f f f f f f f c 
                    . c c c f f f e e f f c c 
                    . f f f f f e e f f c c f 
                    . f f f b f e e f b f f f 
                    . f f 4 1 f 4 4 f 1 4 f f 
                    . . f e 4 4 4 4 4 e e f e 
                    . f e f b 7 7 7 e 4 4 4 e 
                    . e 4 f 7 7 7 7 e 4 4 e . 
                    . . . f 6 6 6 6 6 e e . . 
                    . . . f f f f f f f . . . 
                    . . . f f f . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . 
                    . . . . f f f f . . . . . 
                    . . f f f f f f f f . . . 
                    . f f f c f f f f f f . . 
                    c f f f c c f f f f f f f 
                    c f f f f f f f c f f f f 
                    c c f f e e f f f c c c . 
                    f c c f f e e f f f f f . 
                    f f f b f e e f b f f f . 
                    f f 4 1 f 4 4 f 1 4 f f . 
                    e f e e 4 4 4 4 4 e f . . 
                    e 4 4 4 e 7 7 7 b f e f . 
                    . e 4 4 e 7 7 7 7 f 4 e . 
                    . . e e 6 6 6 6 6 f . . . 
                    . . . f f f f f f f . . . 
                    . . . . . . . f f f . . . 
                    `],
                100,
                true
                )
                story.spriteMoveToLocation(rival, 104, 88, 69)
                animation.runImageAnimation(
                rival,
                [img`
                    . . . . f f f f f . f f f . 
                    . . . f f c c c c f f f f f 
                    . . f c c c c c c b f f f f 
                    . . f c c c c c c 3 c f f f 
                    . f c c c c c c c c 3 3 f . 
                    . f c c 4 c c c c c f f f . 
                    . f f e 4 4 c c c f f f f . 
                    . f f e 4 4 f b f 4 4 f f . 
                    . . f f d d f 1 4 d 4 f . . 
                    . . . f d d d d 4 f f f . . 
                    . . . f e 4 4 4 e e f . . . 
                    . . . f 3 3 3 e d d 4 . . . 
                    . . . f 3 3 3 e d d e . . . 
                    . . . f 6 6 6 f e e f . . . 
                    . . . . f f f f f f . . . . 
                    . . . . . . f f f . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . 
                    . . . . f f f f f . f f f . 
                    . . . f f c c c c f f f f f 
                    . . f c c c c c c b f f f f 
                    . . f c c c c c c 3 c f f f 
                    . f c c c c c c c c 3 3 f . 
                    . f c c 4 c c c c c f f f . 
                    . f f c 4 4 c c c f f f f . 
                    . f f f 4 4 f b f 4 4 f f . 
                    . . f f d d f 1 4 d 4 f . . 
                    . . . f d d d e e f f f . . 
                    . . . f e 4 e d d 4 f . . . 
                    . . . f 3 3 e d d e f . . . 
                    . . f f 6 6 f e e f f f . . 
                    . . f f f f f f f f f f . . 
                    . . . f f f . . . f f . . . 
                    `,img`
                    . . . . . . . . . . . . . . 
                    . . . . f f f f f . f f f . 
                    . . . f f c c c c f f f f f 
                    . . f c c c c c c b f f f f 
                    . . f c c c c c c 3 c f f f 
                    . f c c c c c c c c 3 3 f . 
                    . f c c 4 c c c c c f f f . 
                    . f f c 4 4 c c c f f f f . 
                    . f f f 4 4 f b f 4 4 f f . 
                    . . f c d d f 1 4 d 4 f f . 
                    . . . f d d d d 4 f f f . . 
                    . . . f e 4 4 4 e d d 4 . . 
                    . . . f 3 3 3 3 e d d e . . 
                    . . f f 6 6 6 6 f e e f . . 
                    . . f f f f f f f f f f . . 
                    . . . f f f . . . f f . . . 
                    `],
                100,
                true
                )
                tiles.setCurrentTilemap(tilemap`niveau3`)
                mySprite.setImage(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 2 2 f f f . . . . 
                    . . . f f f 2 2 2 2 f f f . . . 
                    . . f f f e e e e e e f f f . . 
                    . . f f e 2 2 2 2 2 2 e e f . . 
                    . . f e 2 f f f f f f 2 e f . . 
                    . . f f f f e e e e f f f f . . 
                    . f f e f b f 4 4 f b f e f f . 
                    . f e e 4 1 f d d f 1 4 e e f . 
                    . . f e e d d d d d d e e f . . 
                    . . . f e e 4 4 4 4 e e f . . . 
                    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . . 
                    `)
                story.spriteMoveToLocation(rival, 40, 88, 69)
                animation.runImageAnimation(
                rival,
                [img`
                    . . . . f f f f . . . . . 
                    . . f f f f f f f f . . . 
                    . f f f f f f c f f f . . 
                    f f f f f f c c f f f c . 
                    f f f c f f f f f f f c . 
                    c c c f f f e e f f c c . 
                    f f f f f e e f f c c f . 
                    f f f b f e e f b f f f . 
                    . f 4 1 f 4 4 f 1 4 f . . 
                    . f e 4 4 4 4 4 4 e f . . 
                    . f f f e e e e f f f . . 
                    f e f b 7 7 7 7 b f e f . 
                    e 4 f 7 7 7 7 7 7 f 4 e . 
                    e e f 6 6 6 6 6 6 f e e . 
                    . . . f f f f f f . . . . 
                    . . . f f . . f f . . . . 
                    `,img`
                    . . . . . . . . . . . . . 
                    . . . . . f f f f . . . . 
                    . . . f f f f f f f f . . 
                    . . f f f f f f c f f f . 
                    f f f f f f f c c f f f c 
                    f f f f c f f f f f f f c 
                    . c c c f f f e e f f c c 
                    . f f f f f e e f f c c f 
                    . f f f b f e e f b f f f 
                    . f f 4 1 f 4 4 f 1 4 f f 
                    . . f e 4 4 4 4 4 e e f e 
                    . f e f b 7 7 7 e 4 4 4 e 
                    . e 4 f 7 7 7 7 e 4 4 e . 
                    . . . f 6 6 6 6 6 e e . . 
                    . . . f f f f f f f . . . 
                    . . . f f f . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . 
                    . . . . f f f f . . . . . 
                    . . f f f f f f f f . . . 
                    . f f f c f f f f f f . . 
                    c f f f c c f f f f f f f 
                    c f f f f f f f c f f f f 
                    c c f f e e f f f c c c . 
                    f c c f f e e f f f f f . 
                    f f f b f e e f b f f f . 
                    f f 4 1 f 4 4 f 1 4 f f . 
                    e f e e 4 4 4 4 4 e f . . 
                    e 4 4 4 e 7 7 7 b f e f . 
                    . e 4 4 e 7 7 7 7 f 4 e . 
                    . . e e 6 6 6 6 6 f . . . 
                    . . . f f f f f f f . . . 
                    . . . . . . . f f f . . . 
                    `],
                100,
                true
                )
                story.spriteMoveToLocation(rival, 40, 144, 69)
                sprites.destroy(rival)
                story.printText("je te suggères d'aller sur la route de son centre de recherches pour aller au village voisin. il y a plein de pokémons à capturer là bas!", 50, 100, 8, 1, story.TextSpeed.Normal)
                tiles.setCurrentTilemap(tilemap`niveau`)
                anim_yor_n = 1
                music.setVolume(20)
            }
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (anim_yor_n == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile11`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (anim_yor_n == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        true
        )
    }
})
let rival: Sprite = null
let pokés: Sprite = null
let coffre1sprite_: Sprite = null
let _000polyball = 0
let ennemi: Sprite = null
let pokecombat = 0
let mySprite: Sprite = null
let portail = 0
let vitesse = 0
let _1poke = 0
let anim_yor_n = 0
let controls = 0
color.setPalette(
color.Arcade
)
let coffre1 = 0
controls = 0
anim_yor_n = 0
_1poke = 0
vitesse = 0
while (!(controller.A.isPressed())) {
    scene.setBackgroundImage(img`
        8888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777778888777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777885555888887777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777885555555558877778887777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777885555555555877785558888777777777777777777777
        8888888888888888888888888888888888888888888555888888888888888888888888888888888777777777777777777777777777777777777888555555555877785555555887777777777777777777
        8888888888888888888888888888888888888888888555888888888888888888888888888888888777777777777777777777777777777777777777888555555877855555555877777777777777777777
        8888888888888888888888888885588888888888888555888888555888888888888888888888888777777777777777777777777777777777777777855555555877855555555877777777777777777777
        8888888888888888888888885555588888888888888555888885558555555555555888888888888888888888888888888888777777777777777777855555555888555555555877777777777777777777
        8888888888888888558855555555588888888888888555888855885555555555555588888888555555555585555555555558777777777777777777855555555888555555555877777777777777777777
        8888888888888885555555558885555888888888888555888558555555555555555558888888555555555585555555555558777777777777777778555555555855555555588777777777777777777777
        8888888888888885555555558885555888888888888555888558555555555555555558888888555555555585555555555558777777777777777778555555555855555555588777777777777777777777
        8888888888888885555555588885555888888888888555855585555555555555555555888855555555555585555555555558777888888888887778555555555855555555588777777777777777777777
        8888888888888885555555888885555888888888888555555585555555888888555555888855555555555585555555555555888555555555558888555555555855555555588777777777777777777777
        8888888888888888555555888555588855555555588555555585555588888885555555888555555555555585555555555558855555555555555558555555555855555555588777777777777777777777
        8888888888888888555555555555888555555555555885555585555555888555555555888555555555555555555555555885555555555555555555855555555855555555588777777777777777777777
        8888888888888888555555555888855555555555555885555585555555555555555558885555555555555555555555555885555555555555555555855585555855555555588777777777777777777777
        8888888888888888885555588888555555555555555558555585555555555555555888885555555555555555555555558555555555555555555555588558555588555555877777777777777777777777
        8888888888888888885555888888555558888555555558555885555555555555888888885555555555555555555555558555555558888555555555588558555555555555877777777777777777777777
        8888888888888888888555588888555588888555555558588885555555555888888885885555555555555555555555558555555588888555555555588558555555555555877777777777777777777777
        8888888888888888888555588888555588885555555558555588555555588555555555885555555555555555558555558555555588885555555555588558555555555555877777777777777777777777
        8888888888888888888555588888555588885588855558555558555555555555555558555555555555888555558855558555555588885588855555588558555555555555877777777777777777777777
        8888888888888888888855558888555588888888855558555555885555555555555585555555555888777855887855558555555588888888855555588555885555555558777777777777777777777777
        8888888888888888888855558888555588888888855558555555885555555555555585555555555888777855887855558555555588888888855555588555885555555558777777777777777777777777
        8888888888888888888855558888555588888888855558555555558555555555555855555555558777777788777788558555555588888888855555588555885555555558777777777777777777777777
        8888888888888888888888558888855558888888555885555555555888888888888855555555887777777777777777858555555558888888555555588555885555555558777777777777777777777777
        8888888888888888888888555888855555555555555885555555555555555555555588555888777777777777777777858555555555555555555555588555885555555558877777777777777777777777
        8888888888888888888888555888888855555555588555888555555555555555555558558877777777777777777778888885555555555555555555855555885555555558887777777777777777777777
        8888888888888888888888855888887788888888888555888885555555555555555588888877777778888888888788888885555555555555555555888888888888888888888777777777777777777777
        8888888888888888888888858888877777888888888555888888888555555555555888888777777788888888888888888888555555555555555558888888888888888888888877777777777777777777
        8888888888888888888888888888877777788888888555888888888888855555588888888777777788888888888888888888888555555555558888888888888888888888888887777777777777777777
        8888888888888888888888888888777777778888888555888888888888888555888888888777777788888888888888888888888888888888888888888888888888888888888888777777777777777777
        8888888888888888888888888887777777778888888888888888888888888888888888887788777777888888888888888888888888888888888888888888888888888888888888777777777777777777
        8888888888888888888888888887777777777888888888888888888887778888888888887787887788787888888888888888888888888888888888888888888888888888888888877777777777777777
        8888888888888888888888888877777777777788888888888888888877777788888888888787788877887778888888888888888888888888888888888888888888888888888888887777777777777777
        8888888888888888888888888777777777777778888888888888888877777778887777777887787777787777788888888888888888888888888888888888888888888888888888887777777777777777
        8888888888888888888888887777777777777778888888888888888778877778877777777787787777787777778888888888888888888888888888888888888888888888888888888777777777777777
        8888888888888888888888887777777777777777888888888888888778877788877777777787787777787877778888888888888888888888888888888888888888888888888888888777777777777777
        8888888888888888888888877777777777777777788888888888888777777888877778777787778777787877778888888888888888888888888888888888888888888888888888888877777777777777
        8888888888888888888888777777777777777777778888888888888777777888877788877787877777787877777888888888888888888888888888888888888888888888888888888877777777777777
        8888888888888888888888777777777777777777778888888888888777787788877778777787787777787787777888888888888888888888888888888888888888888888888888888887777777777777
        8888888888888888888887777777777777777777777888888888888777778777877777777787787777878777778888888888888888888888888888888888888888888888888888888887777777777777
        8888888888888888888877777777777777777777777788888888888877778887877777777787778778778777788888888888888888888888888888888888888888888888888888888887777777777777
        8888888888888888888777777777777777777777777788888888888877788888887777777878888887788777888888888888888888888888888888888888888888888888888888888888777777777777
        8888888888888888888777777777777777777777777778888888888877888888888888888777777777788888888888888888888888888888888888888888888888888888888888888888777777777777
        8888888888888888887777777777777777777777777777888888888888888888888888887777777777788888888888888888888888888888888888888888888888888888888888888888777777777777
        8888888888888888877777777777777777777777777777888888888888888888888888887777777777788888888888888888888888888888888888888888888888888888888888888888777777777777
        8888888888888888877777777777777777777777777777888888888888888888888888887888888887788888888888888888888888888888888888888888888888888888888888888888777777777777
        8888888888888888777777777777777777777777777778888888888888888888888888888855555588888888888888888888888888888888888888888888888888888888888888888888777777777777
        8888888888888887777777777777777777777777777778888888888888888888888888888558888855888888888888888888888888888888888888888888888888888888888888888888887777777777
        8888888888888877777777777777777777777777777788888888888888888888888888888588888885588888888888888888888888888888888888888888888888888888888888888888888877777777
        8888888888887778777777777777777777777777777888888888888888888888888888888588888888588888888888888888888888888888888888888888888888888888888888888888888887777777
        8888888888877888877777777777777777777777777888888888888888888888888888888558888885588888888888888888888888888888888888888888888888888888888888888888888888777777
        8888888888878888877777777777777777777777778888888888888888888888888888888855888885888888888888888888888888888888888888888888888888888888888888888888888888777777
        8888888888788888887777777777777777777777777788888888888888888888888888888885588855888888888888888888888888888888888888888888888888888888888888888888888888877777
        8888888887888888888777777777777777777777788777888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888877777
        8888888887888888888877777777777777777777788887788888888888888888888888888885555888788888888888888888888888888888888888888888888888888888888888888888888888877777
        8888888888888888888887777777777777777777888888788888888888888888888888888855885588888888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888887777777777777777778888888878888888888888888888888888558888555888888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888777777777777777778888888887888888888888888888888888588885558888888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888877777777777777788888888888888888888888888888888888555555855878888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888887777777777777788888888888888888888888888888888888888888888878888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888888777777777777888888888888888888888888888888888888888887777778888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888888777777777777888888888888888888888888888888888888888887777777888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888888877777777778888888888888888888888888888888888888888887777777888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888888887777777788888888888888888888888888888888888888888888777777788888887888788888888888888888888888888888888888888888888888888888888877777
        8888888888888888888888888888777777788888888888888888888887777777777777777777777777777777777777777788888888888888888888888888888888888888888888888777777777777777
        8888888888888888888888888888877777888888888888888888888887888888888778888887788888878888887888888788888888888888888888888888888888888888888888887777777777777777
        8888888888888888888888888888877777888888888888888888888887877777777778777787787777878777787877777788888888888888888888888888888888888888888888887777777777777777
        8888888888888888888888888888887778888888888888888888888887878888888878788787787777878788787878888888888888888888888888888888888888888888888888877777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878788787787777878777787878888888888888888888888888888888888888888888888888777777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878777787788888878888887877777888888888888888888888888888888888888888888888777777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878888887787777778777777888887888888888888888888888888888888888888888888887777777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878777787788888878888887877777888888888888888888888888888888888888888888877777777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878788787787777878777787878888888888888888888888888888888888888888888888777777777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878788787787777878788787878888888888888888888888888888888888888888888887777777777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878788787787777878788787878888888888888888888888888888888888888888888877777777777777777777777
        8888888888888888888888888888888888888888888888888888888887877777777778788787787787878788787877777788888888888888888888888888888888888888777777777777777777777777
        8888888888888888888888888888888888888888888888888888888887888888888778788787787787878788787888888788888888888888888888888888888888888877777777777777777777777777
        8888888888888888888888888888888888888888888888888888888887777777777777788777777787777788777777777788888888888888888888888888888888888777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888777788888888888888888888888888888888888888888888888888877777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888887777788888888888888888888888888888888888888888888888887777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888887777788888888888888888888888788888888888888888888888777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777778888888888888888888887777788888888888888888887777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777778888888888888888888877777777888888888888888887777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777888888888888888888877777777888888888888888887777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777888888888888888888777777777888888888888888887777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888887777777777888888888888888888777777777788888888888888877777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888877777777777788888888888888877777777777788888888888888877777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888877777777777777888888888888877777777777778888888888888877777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888777777777777777788888888887777777777777777888888888888777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777788888888887777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777778888888877777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777778887777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777788788778878887887888787888787787888777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777787787877878787878787787878788787877777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777787788777878787887787787878787887888777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777787787877878787877787787878787787778777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777788788778878887877787787888787787888777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    pause(500)
    scene.setBackgroundImage(img`
        8888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777778888777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777885555888887777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777885555555558877778887777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777885555555555877785558888777777777777777777777
        8888888888888888888888888888888888888888888555888888888888888888888888888888888777777777777777777777777777777777777888555555555877785555555887777777777777777777
        8888888888888888888888888888888888888888888555888888888888888888888888888888888777777777777777777777777777777777777777888555555877855555555877777777777777777777
        8888888888888888888888888885588888888888888555888888555888888888888888888888888777777777777777777777777777777777777777855555555877855555555877777777777777777777
        8888888888888888888888885555588888888888888555888885558555555555555888888888888888888888888888888888777777777777777777855555555888555555555877777777777777777777
        8888888888888888558855555555588888888888888555888855885555555555555588888888555555555585555555555558777777777777777777855555555888555555555877777777777777777777
        8888888888888885555555558885555888888888888555888558555555555555555558888888555555555585555555555558777777777777777778555555555855555555588777777777777777777777
        8888888888888885555555558885555888888888888555888558555555555555555558888888555555555585555555555558777777777777777778555555555855555555588777777777777777777777
        8888888888888885555555588885555888888888888555855585555555555555555555888855555555555585555555555558777888888888887778555555555855555555588777777777777777777777
        8888888888888885555555888885555888888888888555555585555555888888555555888855555555555585555555555555888555555555558888555555555855555555588777777777777777777777
        8888888888888888555555888555588855555555588555555585555588888885555555888555555555555585555555555558855555555555555558555555555855555555588777777777777777777777
        8888888888888888555555555555888555555555555885555585555555888555555555888555555555555555555555555885555555555555555555855555555855555555588777777777777777777777
        8888888888888888555555555888855555555555555885555585555555555555555558885555555555555555555555555885555555555555555555855585555855555555588777777777777777777777
        8888888888888888885555588888555555555555555558555585555555555555555888885555555555555555555555558555555555555555555555588558555588555555877777777777777777777777
        8888888888888888885555888888555558888555555558555885555555555555888888885555555555555555555555558555555558888555555555588558555555555555877777777777777777777777
        8888888888888888888555588888555588888555555558588885555555555888888885885555555555555555555555558555555588888555555555588558555555555555877777777777777777777777
        8888888888888888888555588888555588885555555558555588555555588555555555885555555555555555558555558555555588885555555555588558555555555555877777777777777777777777
        8888888888888888888555588888555588885588855558555558555555555555555558555555555555888555558855558555555588885588855555588558555555555555877777777777777777777777
        8888888888888888888855558888555588888888855558555555885555555555555585555555555888777855887855558555555588888888855555588555885555555558777777777777777777777777
        8888888888888888888855558888555588888888855558555555885555555555555585555555555888777855887855558555555588888888855555588555885555555558777777777777777777777777
        8888888888888888888855558888555588888888855558555555558555555555555855555555558777777788777788558555555588888888855555588555885555555558777777777777777777777777
        8888888888888888888888558888855558888888555885555555555888888888888855555555887777777777777777858555555558888888555555588555885555555558777777777777777777777777
        8888888888888888888888555888855555555555555885555555555555555555555588555888777777777777777777858555555555555555555555588555885555555558877777777777777777777777
        8888888888888888888888555888888855555555588555888555555555555555555558558877777777777777777778888885555555555555555555855555885555555558887777777777777777777777
        8888888888888888888888855888887788888888888555888885555555555555555588888877777778888888888788888885555555555555555555888888888888888888888777777777777777777777
        8888888888888888888888858888877777888888888555888888888555555555555888888777777788888888888888888888555555555555555558888888888888888888888877777777777777777777
        8888888888888888888888888888877777788888888555888888888888855555588888888777777788888888888888888888888555555555558888888888888888888888888887777777777777777777
        8888888888888888888888888888777777778888888555888888888888888555888888888777777788888888888888888888888888888888888888888888888888888888888888777777777777777777
        8888888888888888888888888887777777778888888888888888888888888888888888887788777777888888888888888888888888888888888888888888888888888888888888777777777777777777
        8888888888888888888888888887777777777888888888888888888887778888888888887787887788787888888888888888888888888888888888888888888888888888888888877777777777777777
        8888888888888888888888888877777777777788888888888888888877777788888888888787788877887778888888888888888888888888888888888888888888888888888888887777777777777777
        8888888888888888888888888777777777777778888888888888888877777778887777777887787777787777788888888888888888888888888888888888888888888888888888887777777777777777
        8888888888888888888888887777777777777778888888888888888778877778877777777787787777787777778888888888888888888888888888888888888888888888888888888777777777777777
        8888888888888888888888887777777777777777888888888888888778877788877777777787787777787877778888888888888888888888888888888888888888888888888888888777777777777777
        8888888888888888888888877777777777777777788888888888888777777888877778777787778777787877778888888888888888888888888888888888888888888888888888888877777777777777
        8888888888888888888888777777777777777777778888888888888777777888877788877787877777787877777888888888888888888888888888888888888888888888888888888877777777777777
        8888888888888888888888777777777777777777778888888888888777787788877778777787787777787787777888888888888888888888888888888888888888888888888888888887777777777777
        8888888888888888888887777777777777777777777888888888888777778777877777777787787777878777778888888888888888888888888888888888888888888888888888888887777777777777
        8888888888888888888877777777777777777777777788888888888877778887877777777787778778778777788888888888888888888888888888888888888888888888888888888887777777777777
        8888888888888888888777777777777777777777777788888888888877788888887777777878888887788777888888888888888888888888888888888888888888888888888888888888777777777777
        8888888888888888888777777777777777777777777778888888888877888888888888888777777777788888888888888888888888888888888888888888888888888888888888888888777777777777
        8888888888888888887777777777777777777777777777888888888888888888888888887777777777788888888888888888888888888888888888888888888888888888888888888888777777777777
        8888888888888888877777777777777777777777777777888888888888888888888888887777777777788888888888888888888888888888888888888888888888888888888888888888777777777777
        8888888888888888877777777777777777777777777777888888888888888888888888887888888887788888888888888888888888888888888888888888888888888888888888888888777777777777
        8888888888888888777777777777777777777777777778888888888888888888888888888855555588888888888888888888888888888888888888888888888888888888888888888888777777777777
        8888888888888887777777777777777777777777777778888888888888888888888888888558888855888888888888888888888888888888888888888888888888888888888888888888887777777777
        8888888888888877777777777777777777777777777788888888888888888888888888888588888885588888888888888888888888888888888888888888888888888888888888888888888877777777
        8888888888887778777777777777777777777777777888888888888888888888888888888588888888588888888888888888888888888888888888888888888888888888888888888888888887777777
        8888888888877888877777777777777777777777777888888888888888888888888888888558888885588888888888888888888888888888888888888888888888888888888888888888888888777777
        8888888888878888877777777777777777777777778888888888888888888888888888888855888885888888888888888888888888888888888888888888888888888888888888888888888888777777
        8888888888788888887777777777777777777777777788888888888888888888888888888885588855888888888888888888888888888888888888888888888888888888888888888888888888877777
        8888888887888888888777777777777777777777788777888888888888888888888888888888555558888888888888888888888888888888888888888888888888888888888888888888888888877777
        8888888887888888888877777777777777777777788887788888888888888888888888888885555888788888888888888888888888888888888888888888888888888888888888888888888888877777
        8888888888888888888887777777777777777777888888788888888888888888888888888855885588888888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888887777777777777777778888888878888888888888888888888888558888555888888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888777777777777777778888888887888888888888888888888888588885558888888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888877777777777777788888888888888888888888888888888888555555855878888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888887777777777777788888888888888888888888888888888888888888888878888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888888777777777777888888888888888888888888888888888888888887777778888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888888777777777777888888888888888888888888888888888888888887777777888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888888877777777778888888888888888888888888888888888888888887777777888888888888888888888888888888888888888888888888888888888888888888888887777
        8888888888888888888888888887777777788888888888888888888888888888888888888888888777777788888887888788888888888888888888888888888888888888888888888888888888877777
        8888888888888888888888888888777777788888888888888888888887777777777777777777777777777777777777777788888888888888888888888888888888888888888888888777777777777777
        8888888888888888888888888888877777888888888888888888888887888888888778888887788888878888887888888788888888888888888888888888888888888888888888887777777777777777
        8888888888888888888888888888877777888888888888888888888887877777777778777787787777878777787877777788888888888888888888888888888888888888888888887777777777777777
        8888888888888888888888888888887778888888888888888888888887878888888878788787787777878788787878888888888888888888888888888888888888888888888888877777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878788787787777878777787878888888888888888888888888888888888888888888888888777777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878777787788888878888887877777888888888888888888888888888888888888888888888777777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878888887787777778777777888887888888888888888888888888888888888888888888887777777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878777787788888878888887877777888888888888888888888888888888888888888888877777777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878788787787777878777787878888888888888888888888888888888888888888888888777777777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878788787787777878788787878888888888888888888888888888888888888888888887777777777777777777777
        8888888888888888888888888888888888888888888888888888888887878888888878788787787777878788787878888888888888888888888888888888888888888888877777777777777777777777
        8888888888888888888888888888888888888888888888888888888887877777777778788787787787878788787877777788888888888888888888888888888888888888777777777777777777777777
        8888888888888888888888888888888888888888888888888888888887888888888778788787787787878788787888888788888888888888888888888888888888888877777777777777777777777777
        8888888888888888888888888888888888888888888888888888888887777777777777788777777787777788777777777788888888888888888888888888888888888777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888888777788888888888888888888888888888888888888888888888888877777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888887777788888888888888888888888888888888888888888888888887777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888887777788888888888888888888888788888888888888888888888777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777778888888888888888888887777788888888888888888887777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888877777778888888888888888888877777777888888888888888887777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888555888888888888777777777888885558888888888877777777888888888888888887777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888588855855885585575577777555888858888888888777777777888888888888888887777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888588855855885885775777777585888858888888888777777777788888888888888877777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888588858858585575575577777555888858888888877777777777788888888888888877777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888588858858585877577577777575888858888888877777777777778888888888888877777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888555858858588575575577777575785558888887777777777777777888888888888777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777788888888887777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777778888888877777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777778887777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777788788778878887887888787888787787888777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777787787877878787878787787878788787877777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777787788777878787887787787878787887888777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777787787877878787877787787878787787778777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777788788778878887877787787888787787888777
        8888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    pause(500)
    if (controller.B.isPressed()) {
        story.showPlayerChoices("contrôles", "game boy")
        if (story.checkLastAnswer("contrôles")) {
            story.printText("flèches pour bouger, a selon actions ,b pour courir ou parler", 50, 100)
        }
        if (story.checkLastAnswer("game boy")) {
            color.setPalette(
            color.originalPalette
            )
        }
    }
}
portail = 1
controls = 1
let skip1 = 0
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
story.printText("hé!...", 50, 100, 8, 1, story.TextSpeed.Normal)
story.printText("petit aventurier...", 50, 100, 8, 1, story.TextSpeed.Normal)
story.printText("réveille-toi!...", 50, 100, 8, 1, story.TextSpeed.Normal)
music.setVolume(100)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`niveau2`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile21`)
_1poke = 0
scene.cameraFollowSprite(mySprite)
pause(1000)
music.play(music.createSong(hex`0096000408050200001c00010a006400f40164000004000000000000000000000000000500000496000400080001160c001000011d10001400011b1400180001191c002000011d20002400011b2400280001192c003000011d30003400011b3400380001193c004000011d4c005000011654005800011d58005c00011b5c006000011964006800011d68006c00011b6c007000011974007800011d78007c00011b7c008000011984008800011d94009800011d98009c00011d9c00a000011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003c001c001d00030006082c002d0004000607084400450002000848004900010864006500030006087400750004000607088c008d00020008900091000108`), music.PlaybackMode.LoopingInBackground)
story.printText("c'est le grand jour!", 50, 100, 8, 1, story.TextSpeed.Normal)
story.printText("va voir le profeseur érable au labo et va chercher ton premier pokémon allié!", 50, 100, 8, 1, story.TextSpeed.Normal)
story.printText("bonne chance!", 50, 100, 8, 1, story.TextSpeed.Normal)
music.setVolume(0)
anim_yor_n = 1
vitesse = 100
forever(function () {
    if (!(controller.anyButton.isPressed())) {
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite)
    }
})
forever(function () {
    if (!(controller.B.isPressed())) {
        vitesse = 100
    }
})
forever(function () {
    controller.moveSprite(mySprite, vitesse, vitesse)
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile24`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile29`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile30`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile31`)))) {
        mySprite.sayText("appuie(b)", 1000, false)
        pauseUntil(() => controller.B.isPressed())
    }
})
forever(function () {
	
})
