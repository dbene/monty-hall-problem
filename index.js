const n = 1000
const changeOpinion = true

const iterations = []

// ### Start
for (i = 0; i < n; i++) {
    let game = [
        {
            open: false,
            type: 'goat',
            selected: false
        },
        {
            open: false,
            type: 'goat',
            selected: false
        },
        {
            open: false,
            type: 'goat',
            selected: false
        }
    ]

    let winner = Math.floor(Math.random() * 3)
    game[winner].type = 'sportscar'

    let selected = Math.floor(Math.random() * 3)
    game[selected].selected = true

    iterations.push(game)
}

// ### Show Goat
iterations.forEach(game => {
    let doors = game.filter(door => { return (door.type == 'goat' && !door.selected) })

    if (doors.length == 2) {
        doors[Math.floor(Math.random() * 2)].open = true
    } else if (doors.length == 1) {
        doors[0].open = true
    }
})

// ### Change Opinon
if (changeOpinion) {
    iterations.forEach(game => {
        let closedDoors = game.filter(door => { return !door.open })

        if (closedDoors[0].selected) {
            closedDoors[0].selected = false
            closedDoors[1].selected = true
        } else if (closedDoors[1].selected) {
            closedDoors[1].selected = false
            closedDoors[0].selected = true
        }
    })
}

// ### Evaluation
let hits = 0
iterations.forEach(game => {
    game.forEach(door => {
        if (door.selected && door.type == 'sportscar') {
            hits++
        }
    })
})

console.log(hits / n)