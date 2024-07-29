let game_data = {
    cookie: 0,
    cookie_per_sec: 0,
    drill_price: 10,
};

function set_value() {
    let cook = document.getElementById("cookie");
    cook.innerText = game_data.cookie;
}

function increment() {
    const cook = document.getElementById("cookie");
    game_data.cookie++;
    cook.innerText = game_data.cookie;
}

function buy_drill() {
    if(game_data.cookie >= game_data.drill_price) {
        game_data.cookie -= game_data.drill_price
        game_data.cookie_per_sec += 1;
    }
}

console.log(game_data);

let save_game = JSON.parse(localStorage.getItem("game_data"));
if (save_game !== null) {
    // Validate and correct the loaded data
    game_data.cookie = typeof save_game.cookie === "number" && !isNaN(save_game.cookie) ? save_game.cookie : 0;
    game_data.cookie_per_sec = typeof save_game.cookie_per_sec === "number" && !isNaN(save_game.cookie_per_sec) ? save_game.cookie_per_sec : 0;
    game_data.drill_price = typeof save_game.drill_price === "number" && !isNaN(save_game.drill_price) ? save_game.drill_price : 10;
}

let game_loop = setInterval(() => {
    console.log(game_data);
    const cook = document.getElementById("cookie")
    game_data.cookie += game_data.cookie_per_sec;
    cook.innerText = game_data.cookie
    
}, 1000);

let save_game_loop = setInterval(() => {
    localStorage.setItem("game_data", JSON.stringify(game_data));
}, 150);

set_value();
