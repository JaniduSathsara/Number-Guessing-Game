
function generateRandomNum() {
    let randomNum = Math.floor(Math.random() * 10 + 1);
    console.log(randomNum);
}




const inputNumArray = []

function btnGuessClick() {
    generateRandomNum();

    let userInputNum = document.getElementById("userNumber").value;
    inputNumArray.push(userInputNum)

    if (userInputNum == randomNum) {
        console.log("done");
    } else if (userInputNum < randomNum) {
        console.log("wadii");
    } else if (userInputNum > randomNum) {
        console.log("adui");
    }

    console.log(inputNumArray);


}

////////////////////////////////////////////////////////////
let refreshButton = document.getElementById("btnRefresh");
if (refreshButton) {
    refreshButton.addEventListener('click', () => {
        location.reload();
    });
}

function tryAgain() {
    location.reload();
}
///////////////////////////////////////////////////////////