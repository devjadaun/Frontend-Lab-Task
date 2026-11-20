let board = document.getElementById("board");

for (let i = 0; i < 8; i++) {

    for (let j = 0; j < 8; j++) {

        let square = document.createElement("div");

        if ((i + j) % 2 == 0) {
            square.classList.add("white");
        } 
        else {
            square.classList.add("black");
        }

        board.appendChild(square);
    }
}