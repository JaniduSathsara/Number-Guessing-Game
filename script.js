let randomNum = Math.floor(Math.random() * 10 + 1);
console.log(randomNum);

let clickCount = 0;

const inputNumArray = []

function btnGuessClick() {
    let userInputNum = document.getElementById("userNumber").value;
    let button = document.getElementById("lblBtnGues");
    let textArea = document.getElementById("userNumber");

    if (userInputNum == "") {
        Swal.fire({
            title: "The number?",
            text: "Please enter Number ",
            icon: "question",
            imageUrl: "https://i.pinimg.com/736x/0e/ac/aa/0eacaa656065c691a1819cedb2d07500.jpg",
            imageWidth: 100,
            imageHeight: 100,
            footer: "<p>moda yakek</p>"
        });
        return;
    }

    userInputNum = Number(userInputNum);

    clickCount++;

    inputNumArray.push(userInputNum);

    if (userInputNum == randomNum) {
        Swal.fire({
            title: "Good job!",
            text: "Your number is correct",
            imageUrl: "https://i.pinimg.com/736x/a6/b4/6c/a6b46c125d2a3e4901b5d2555547716e.jpg",
            imageWidth: 200,
            imageHeight: 150,
            icon: "success"
        });

        button.disabled = true;
        textArea.disabled = true;

        //document.getElementById("results").innerHTML = `<h3>Your number is correct</h3>`;

    } else if (clickCount == 3) {
        Swal.fire({
            title: "Oops! 😅 You've used all 3 attempts! Don't give up just yet. Click OK to start a new game and try your luck again! 🎮",
            icon: "warning",
            draggable: true
        });

        button.disabled = true;
        textArea.disabled = true;

        console.log(`Total clicks: ${clickCount}`);

    } else if (userInputNum < randomNum) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            imageUrl: "https://i.pinimg.com/236x/72/d7/21/72d721a27be7adfd94a58e37f3d58f89.jpg",
            imageWidth: 100,
            imageHeight: 100,
            text: "Your guess is " + userInputNum + ", but the correct number is higher! Try again! 😉”",
            footer: "<p>moda yakek</p>"
        });
        
        // document.getElementById("results").innerHTML = `<h3>Your number is ${userInputNum} but correct numer is greater than ur number</h3>`;
        
    } else if (userInputNum > randomNum) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            imageUrl: "https://i.pinimg.com/236x/72/d7/21/72d721a27be7adfd94a58e37f3d58f89.jpg",
            imageWidth: 100,
            imageHeight: 100,
            text:"“Your guess is " + userInputNum + ", but the correct number is lower! Try again! 😉”",
            footer: "<p>moda yakek</p>"
        });

        //document.getElementById("results").innerHTML = `<h3>Your number is ${userInputNum} but correct numer is less than ur number</h3>`;
    }

    console.log(inputNumArray);

    let round = 1;
    document.getElementById("lblHistory").innerHTML = "";

    for (let history of inputNumArray) {
        // console.log(history);
        document.getElementById("lblHistory").innerHTML += `<h3>Round ${round}: ${history}</h3>`;
        round++;
    }

    document.getElementById("userNumber").value = "";
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