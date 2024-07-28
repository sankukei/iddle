let game_data = {
    cookie : 0,
}


function set_value() {

    let cook = document.getElementById("cookie")
    let tmp = game_data.cookie
    cook.innerText = tmp
}

function increment() {

    const cook = document.getElementById("cookie");
    console.log(game_data)

    game_data.cookie++
    cook.innerText = game_data.cookie
}

let save_game_loop = setInterval(() => {
    localStorage.setItem("game_data", JSON.stringify(game_data))
}, 150)

let save_game = JSON.parse(localStorage.getItem("game_data"))
if (save_game !== null) {
    game_data = save_game
}

set_value()
