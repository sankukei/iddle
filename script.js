let game_data = {
    coockie : 0,
}

function set_value() {

    let cook = document.getElementById("coockie")
    let tmp = game_data.coockie
    cook.innerText = tmp
}

function increment() {

    let cook = document.getElementById("coockie");
    game_data.coockie++
    cook.innerText = game_data.coockie
}

