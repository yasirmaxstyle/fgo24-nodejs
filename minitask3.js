const fs = require('fs')

const musicFiles = fs.readdirSync('music')

const arrMusic = musicFiles.map(music => music.split(' - '))

const artistList = []
arrMusic.forEach(arr => {
    if (!artistList.includes(arr[0])) artistList.push(arr[0])
    if (artistList.includes(arr[0])) {
        if (!musicFiles.includes(arr[0])) {
            fs.mkdirSync(`music/${arr[0]}`, { recursive: true })
            const artsitMusics = fs.readdirSync(`music/${arr[0]}`)
            if (!artsitMusics.includes(`${arr[0]}/${arr[0]} - ${arr[1]}`)) {
                fs.renameSync(`music/${arr[0]} - ${arr[1]}`, `music/${arr[0]}/${arr[0]} - ${arr[1]}`)
            }
        }
    }
})
