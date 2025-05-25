const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#winningScore");

let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

const p1 = {
    score: 0,
    button: document.querySelector("#p1button"),
    display: document.querySelector("#p1Display")
};

const p2 = {
    score: 0,
    button: document.querySelector("#p2button"),
    display: document.querySelector("#p2Display")

};

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        //勝利条件：規定点数以上＆2点差以上あること（デュース機能）
        if (player.score >= winningScore && (player.score - opponent.score) >= 2)
        // if (player.score == winningScore)// 
        {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }

}

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-danger");
        p.display.classList.remove("has-text-success");
        p.button.disabled = false;
    }

}

winningScoreSelect.addEventListener('change', (e) => {
    winningScore = parseInt(e.target.value);
    reset();

});

p1.button.addEventListener('click', () => {

    updateScores(p1, p2);

});

p2.button.addEventListener('click', () => {

    updateScores(p2, p1);
});

resetButton.addEventListener("click", reset);





