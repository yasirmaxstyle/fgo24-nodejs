const fs = require('fs')
const path = require('path')

const listMusic = [
    'Avenged Sevenfold - Fiction',
    'Avenged Sevenfold - Save Me',
    'Avenged Sevenfold - Exist',
    'Linkin Park - Don\'t Stay',
    'Linkin Park - Papercut',
    'Linkin Park - Faint',
    'Bring Me The Horizon - Sleepwalking',
    'Bring Me The Horizon - Ludens',
    'DJ Okawari - Flower Dance',
    'Kikuo - Dwelling'
]

listMusic.forEach(music => {
    fs.writeFile(`${path.join('music/')}${music}.mp3`, "", (err) => {
        if(!err) console.log('berhasil')
        else console.log(err)
    })
})
