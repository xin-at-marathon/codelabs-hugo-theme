import kaboom from 'kaboom'

let baseUrl = getUrlVars()['baseUrl'].replace(window.location.origin, '')
let params = JSON.parse(getUrlVars()['params'])

kaboom({
    font: 'msyh',
    width: 800,
    height: 1000,
    background: [255, 255, 255]
})
loadFont('msyh', `${baseUrl}/fonts/msyh-X.ttf`)

const SCALE = 0.7
const BASE_HEIGHT = 600
const BASE_LEFT = 250
const pad = 25

loadSprite('img3', baseUrl + '/cookbook/mapo_tofu/3.png')
img3 = add([
    sprite('img3'),
    // Make the background centered on the screen
    pos(30, 0),
    // Allow the background to be scaled
    scale(SCALE),
    // Keep the background position fixed even when the camera moves
    fixed()
])

add([
    text('[blue]知识点：[/blue]', {
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
    pos(pad, BASE_HEIGHT)
])

let i = 0
for (let nutrition_fact of params['nutrition_facts']) {
    i++
    add([
        text(`[blue].[/blue] [black]${nutrition_fact}[/black]`, {
            // What font to use
            font: 'msyh',
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
        pos(pad * 2, BASE_HEIGHT + 30 * (i + 1))
    ])
}

add([
    text('[blue]注意事项：[/blue]', {
        // What font to use
        font: 'msyh',
        size: 24,
        // It'll wrap to next line if the text width exceeds the width option specified here
        width: BASE_LEFT,
        styles: {
            blue: {
                color: rgb(0, 0, 255)
            }
        }
    }),
    pos(BASE_LEFT, BASE_HEIGHT)
])

i = 0
for (let tip of params['tips']) {
    i++
    add([
        text(`[blue]${i}.[/blue] [black]${tip}[/black]`, {
            // What font to use
            font: 'msyh',
            size: 18,
            // It'll wrap to next line if the text width exceeds the width option specified here
            width: width() - BASE_LEFT - 50,
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

let scale = SCALE
let direction = -1
onUpdate(() => {
    img3.scaleTo(scale)
    // img2.scaleTo(scale)
    scale += direction * 0.001
    if (scale < 0.68) {
        direction = 1
    }
    if (scale > 0.72) {
        direction = -1
    }
})

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
