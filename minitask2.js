const { reverse } = require('dns')
const fs = require('fs')
const path = require('path')

const url = 'https://gist.githubusercontent.com/fulsep/58daee79a699d0fe143da36bbc47e3d6/raw/dcc2e9c970af553011ba6d2d13331e68f5cf42ff/lagu.json'

const getMusic = async () => {
    try {
        const res = await fetch(url)
        const dataMusic = await res.json()
        let arrangedMusic = []
        dataMusic.forEach(music => {
            const reverse = music.split('-').reverse().join(' - ')
            arrangedMusic.push(reverse)
        });

        arrangedMusic.forEach(music => {
            fs.writeFile(`${path.join('music/')}${music}.mp3`, "", (err) => {
                if (!err) console.log(`lagu ${music} berhasil dimasukkan`)
                else console.log(err)
            })
        })
    } catch (error) {
        console.log(error)
    }
}

getMusic()