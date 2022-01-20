const iterations = 10000
let winsForSwap = 0
let winsForNoSwap = 0

const pickDoor = () => {
    return Math.floor(Math.random() * 3) + 1
}

const hostOpenDoor = (carDoor, playerDoor) => {
    const doors = [1, 2 ,3]
    const chosenDoors = [carDoor, playerDoor]
    const intersection = doors.filter(x => !chosenDoors.includes(x))
    return intersection[0]
}


const play = (swap) => {
    const doors = [1, 2, 3]
    const doorForCar = pickDoor()
    const doorChosenByPlayer = pickDoor()
    const hostDoor = hostOpenDoor(doorForCar, doorChosenByPlayer);
    const chosenDoors = [hostDoor, doorChosenByPlayer]
    let newPlayerDoor = doorChosenByPlayer

    if (swap) {
        newPlayerDoor = doors.filter(x => !chosenDoors.includes(x))[0]
    }

    const won = doorForCar === newPlayerDoor;

    console.log(`Player picked door ${doorChosenByPlayer}. The car was behind door ${doorForCar}. The host opened door ${hostDoor}. The player chose ${newPlayerDoor === doorChosenByPlayer ? 'NOT TO' : 'TO'} swap. The player ${won ? 'WON' : 'LOST'}.`)

    return won
}

// Run simulation
for (let i = 0; i < iterations; i++)
{
    if (play(true)) {
        winsForSwap++
    }

    if (play(false))
    {
        winsForNoSwap++
    }
}

console.log(`The swap strategy won ${winsForSwap} from ${iterations} `)
console.log(`The stay strategy won ${winsForNoSwap} from ${iterations} `)
