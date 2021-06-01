function superbowlWin(array) {
    let winner = array.find(win => {
        return win.result === "W"
    })
    if (winner === undefined) {
        return winner
    } else {
        return winner.year
    }
}
