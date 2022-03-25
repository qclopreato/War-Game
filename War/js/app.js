let humanArray = [];
let computerArray = [];
let humanNumber = 0;
let computerNumber = 0;
let min = 1;
let max = 6;
let humanPoints = 0;
let computerPoints = 0;

document.getElementById(`roll`).addEventListener(`click`, function(){
    document.getElementById(`roll`).disabled = true;
    for (let i=0;i<6;i++){
        humanNumber = Math.floor(Math.random()* (max - min + 1) + min);
        humanArray.push(humanNumber);
        computerNumber = Math.floor(Math.random()* (max - min + 1) + min);
        computerArray.push(computerNumber);
    }
    console.log(humanArray);
    console.log(computerArray);
    document.getElementById(`firstRedNumber`).innerHTML = humanArray[0];
    document.getElementById(`secondRedNumber`).innerHTML = humanArray[1];
    document.getElementById(`thirdRedNumber`).innerHTML = humanArray[2];
    document.getElementById(`fourthRedNumber`).innerHTML = humanArray[3];
    document.getElementById(`fifthRedNumber`).innerHTML = humanArray[4];

    document.getElementById(`firstBlueNumber`).innerHTML = computerArray[0];
    document.getElementById(`secondBlueNumber`).innerHTML = computerArray[1];
    document.getElementById(`thirdBlueNumber`).innerHTML = computerArray[2];
    document.getElementById(`fourthBlueNumber`).innerHTML = computerArray[3];
    document.getElementById(`fifthBlueNumber`).innerHTML = computerArray[4];

    humanArray.sort();
    console.log(humanArray + ` Sorted`);
    computerArray.sort();
    console.log(computerArray + ` Sorted`);
    for (let j=0;j<6;j++){
        if (humanArray[j] > computerArray[j]){
            humanPoints += 1;
            document.getElementById(`humanScore`).innerHTML = humanPoints;
            if(j === 0){
                document.getElementById(`firstBattle`).innerHTML = `Red's ` + humanArray[j] + ` beat Blue's ` + computerArray[j];
            } else if(j === 1){
                document.getElementById(`secondBattle`).innerHTML = `Red's ` + humanArray[j] + ` beat Blue's ` + computerArray[j];
            } else if(j === 2){
                document.getElementById(`thirdBattle`).innerHTML = `Red's ` + humanArray[j] + ` beat Blue's ` + computerArray[j];
            } else if(j === 3){
                document.getElementById(`fourthBattle`).innerHTML = `Red's ` + humanArray[j] + ` beat Blue's ` + computerArray[j];
            } else if(j === 4){
                document.getElementById(`fifthBattle`).innerHTML = `Red's ` + humanArray[j] + ` beat Blue's ` + computerArray[j];
            }
        } else if (humanArray[j] < computerArray[j]){
            computerPoints += 1;
            document.getElementById(`computerScore`).innerHTML = computerPoints;
            if(j === 0){
                document.getElementById(`firstBattle`).innerHTML = `Blue's ` + computerArray[j] + ` beat Red's ` + humanArray[j];
            } else if(j === 1){
                document.getElementById(`secondBattle`).innerHTML = `Blue's ` + computerArray[j] + ` beat Red's ` + humanArray[j];
            } else if(j === 2){
                document.getElementById(`thirdBattle`).innerHTML = `Blue's ` + computerArray[j] + ` beat Red's ` + humanArray[j];
            } else if(j === 3){
                document.getElementById(`fourthBattle`).innerHTML = `Blue's ` + computerArray[j] + ` beat Red's ` + humanArray[j];
            } else if(j === 4){
                document.getElementById(`fifthBattle`).innerHTML = `Blue's ` + computerArray[j] + ` beat Red's ` + humanArray[j];
            }
        } else if (humanArray[j] === computerArray[j]){
            computerPoints += 0;
            humanPoints += 0;
            if(j === 0){
                document.getElementById(`firstBattle`).innerHTML = `Red's ` + computerArray[j] + ` tied Blue's ` + humanArray[j];
            } else if(j === 1){
                document.getElementById(`secondBattle`).innerHTML = `Red's ` + computerArray[j] + ` tied Blue's ` + humanArray[j];
            } else if(j === 2){
                document.getElementById(`thirdBattle`).innerHTML = `Red's ` + computerArray[j] + ` tied Blue's ` + humanArray[j];
            } else if(j === 3){
                document.getElementById(`fourthBattle`).innerHTML = `Red's ` + computerArray[j] + ` tied Blue's ` + humanArray[j];
            } else if(j === 4){
                document.getElementById(`fifthBattle`).innerHTML = `Red's ` + computerArray[j] + ` tied Blue's ` + humanArray[j];
            }
        }
    }
    humanArray = [];
    computerArray = [];
    document.getElementById(`roll`).disabled = false;
});
