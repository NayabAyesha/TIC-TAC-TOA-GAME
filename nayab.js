let s = document.querySelector("#start"); // Start button
let r = document.querySelector("#reset"); // Reset button
let b = document.querySelectorAll(".box"); // Game boxes
let m = document.querySelector(".msg"); // Message container
let w = document.querySelector("#win"); // Win message container
let player0 = true;

const resetGame = () => {
    player0 = true;
    count = 0;
    enableBoxes(); // Re-enable and clear all boxes
    m.classList.add("hide");
    w.innerHTML = ""; // Clear win message
};

// Enable and reset boxes
const enableBoxes = () => {
    b.forEach((box) => {
        box.innerHTML = ""; // Clear box content
        box.disabled = false; // Enable the box
    });
};

r.addEventListener("click", resetGame);
s.addEventListener("click", resetGame);

const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

b.forEach((box) => {
    box.addEventListener("click", () => {

        if (player0) {
            box.innerHTML = "o";
            player0 = false;
        } else {
            box.innerHTML = "x";
            player0 = true;
        }
        box.disabled = true; // Disable box after being clicked

        const showWinner = (winner) => {
            w.innerHTML = `Congratulations ${winner}, you have won the game!`;
            m.classList.remove("hide");
        };

        const checkWinner = () => {
            for (let pattern of arr) {
                let positionvalue0 = b[pattern[0]].innerHTML;
                let positionvalue1 = b[pattern[1]].innerHTML;
                let positionvalue2 = b[pattern[2]].innerHTML;

                if (positionvalue0 !== "" && positionvalue1 !== "" && positionvalue2 !== "") {
                    if (positionvalue0 === positionvalue1 && positionvalue1 === positionvalue2) {
                        showWinner(positionvalue0);
                        return;
                    }
                }
            }
        };

        checkWinner();
    });
});
