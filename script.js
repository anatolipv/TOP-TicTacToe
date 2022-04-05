const game={
    xTurn: true,
    xState: [],
    oState: [],
    winningCombinations:[
        // Rows
        ["0","1","2"],
        ["3","4","6"],
        ["6","7","8"],
        // Columns
        ["0","3","6"],
        ["1","4","7"],
        ["2","5","8"],
        // Diabonals
        ["0","4","8"],
        ["2","4","6"]
    ]

}

document.addEventListener("click",event =>{
    const target = event.target;
    const isCell= target.classList.contains("cell");
    const isDisabled = target.classList.contains("disabled");

    if(isCell && !isDisabled){
        const cellValue = target.dataset.value;

        // game.xTurn  == true ? game.xState.push(cellValue):game.oState.push(cellValue);
        if(game.xTurn){
            game.xState.push(cellValue);
            target.classList.add("x");
        }
        else   { 
            game.oState.push(cellValue);
            target.classList.add("o");
        }

        target.classList.add("disabled");
        
        game.xTurn=!game.xTurn;

        checkResult();

      
       
    }
});





function checkResult(){
    game.winningCombinations.forEach(winningCombinations => {
        const xWins = winningCombinations.every(state => game.xState.includes(state))
        const oWins = winningCombinations.every(state => game.oState.includes(state))
    
        if (xWins || oWins) {
            document.querySelectorAll('.cell').forEach(cell => cell.classList.add('disabled'))
            document.querySelector('.game-over').classList.add('visible')
            document.querySelector('.game-over-text').textContent = xWins
                ? 'X wins!'
                : 'O wins!'
        }
        else if(document.querySelectorAll(".disabled").length==9){
            document.querySelector('.game-over').classList.add('visible');
            document.querySelector('.game-over-text').textContent = 'Draw!';
        }
        
    })  

}





