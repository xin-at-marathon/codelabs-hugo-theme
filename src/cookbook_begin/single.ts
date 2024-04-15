import kaboom from 'kaboom'

let baseUrl = getUrlVars()['baseUrl']
let params = JSON.parse(getUrlVars()['params'])
let steps = JSON.parse(getUrlVars()['steps'])

function getUrlVars() {
    var url = decodeURIComponent(window.location.href)
    var vars = [],
        hash
    var hashes = url.slice(url.indexOf('?') + 1).split('&')
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=')
        vars.push(hash[0])
        vars[hash[0]] = hash[1]
    }
    return vars
}

const FONT = 'happy'
kaboom({
    font: FONT,
    width: 800,
    height: 1000,
    background: [255, 255, 255]
})
loadFont(FONT, `${baseUrl}fonts/happy.ttf`)

let img1
let img2

const pad = 24
add([
    text('[blue]配料表：[/blue]', {
        // What font to use
        size: 24,
        // It'll wrap to next line if the text width exceeds the width option specified here
        width: width() - pad * 2,
        styles: {
            blue: {
                color: rgb(0, 0, 255)
            }
        }
    }),
    pos(pad, pad)
])

let i = 0
for (let ingredient of params['ingredients']) {
    i++
    add([
        text(`[blue].[/blue] [black]${ingredient}[/black]`, {
            // What font to use
            font: FONT,
            size: 18,
            // It'll wrap to next line if the text width exceeds the width option specified here
            width: width() - pad * 2,
            styles: {
                black: {
                    color: rgb(0, 0, 0)
                },
                blue: {
                    color: rgb(0, 0, 255)
                }
            }
        }),
        pos(50, 30 * (i + 1))
    ])
}

loadSprite('img1', baseUrl + 'cookbook/mapo_tofu/1.png')
img1 = add([
    sprite('img1'),
    // Make the background centered on the screen
    pos(width() - 400, 0),
    // Allow the background to be scaled
    scale(0.7),
    // Keep the background position fixed even when the camera moves
    fixed()
])

const BASE_HEIGHT = 500
const BASE_LEFT = 250

loadSprite('img2', baseUrl + 'cookbook/mapo_tofu/2.png')
img2 = add([
    sprite('img2'),
    // Make the background centered on the screen
    pos(0, BASE_HEIGHT),
    // Allow the background to be scaled
    scale(0.7),
    // Keep the background position fixed even when the camera moves
    fixed()
])
add([
    text('[blue]制作步骤：[/blue]', {
        // What font to use
        font: FONT,
        size: 24,
        // It'll wrap to next line if the text width exceeds the width option specified here
        width: width() - pad * 2,
        styles: {
            blue: {
                color: rgb(0, 0, 255)
            }
        }
    }),
    pos(BASE_LEFT, BASE_HEIGHT)
])

i = 0
for (let step of steps) {
    i++
    add([
        text(`[blue]${i}.[/blue] [black]${step}[/black]`, {
            // What font to use
            font: FONT,
            size: 18,
            // It'll wrap to next line if the text width exceeds the width option specified here
            width: width() - pad * 2,
            styles: {
                black: {
                    color: rgb(0, 0, 0)
                },
                blue: {
                    color: rgb(0, 0, 255)
                }
            }
        }),
        pos(BASE_LEFT, BASE_HEIGHT + 30 * (i + 1))
    ])
}

let scale = 0.7
let direction = -1
onUpdate(() => {
    img1.scaleTo(scale)
    // img2.scaleTo(scale)
    scale += direction * 0.001
    if (scale < 0.65) {
        direction = 1
    }
    if (scale > 0.75) {
        direction = -1
    }
})
