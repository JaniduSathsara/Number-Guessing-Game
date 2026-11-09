

let randomNum = Math.floor(Math.random() * 10 + 1);
console.log(randomNum);




const inputNumArray = []

function btnGuessClick() {

    let userInputNum = document.getElementById("userNumber").value;
    inputNumArray.push(userInputNum)

    if (userInputNum == randomNum) {
        document.getElementById("results").innerHTML = `<h3>Your number is correct</h3>`;
    } else if (userInputNum < randomNum) {
        document.getElementById("results").innerHTML = `<h3>Your number is ${userInputNum}  but correct numer is greater than ur number</h3>`;
    } else if (userInputNum > randomNum) {
        document.getElementById("results").innerHTML = `<h3>Your number is ${userInputNum}  but correct numer is less than ur number</h3>`;
    }

    console.log(inputNumArray);

    results
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