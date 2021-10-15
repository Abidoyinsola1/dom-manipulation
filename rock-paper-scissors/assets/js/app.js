const userName = prompt("Welcome to Rock, Paper, Scissors\n \nWhat's your name?")

// Timer
timer = () => {
    const date = new Date();
    const day = date.getDay()
    const hour = date.getHours();

    const minute = date.getMinutes();

    const second = date.getSeconds();

    twoDigits = (x) => {
        const y = x.toString();
        if (y.length == 1) {
            return 0 + y;
        } else {
            return x;
        }
    }

    if (hour >= "00" && hour <= "11") {
        document.getElementById("greeting").textContent = "Good Morning, " + userName;
    } else if ((hour >= "12") & (hour <= "16")) {
        document.getElementById("greeting").textContent = "Good Afternoon, " + userName;
    } else {
        document.getElementById("greeting").textContent = "Good Evening, " + userName;
    }

    document.getElementById("currentTimer").textContent = `${twoDigits(
        hour
    )} : ${twoDigits(minute)} : ${twoDigits(second)}`;
    setTimeout(timer, 1000);
}
timer()

convertCompChoice = (x) => {
    if (x == 0) {
        return "r"
    } else if (x == 1) {
        return "p"
    } else {
        return "s"
    }
}

const buttons = document.querySelectorAll(".option")

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (eachButton) {
        const buttonAttr = eachButton.currentTarget.classList
        if (buttonAttr.contains("rock")) {
            userChoice = "r"
        }
        else if (buttonAttr.contains("paper")) {
            userChoice = "p"
        }
        else if (buttonAttr.contains("scissors")) {
            userChoice = "s"
        } else {
            alert("Not a valid shot")
        }

        compChoice = Math.floor(Math.random() * 3)

        if (userChoice === convertCompChoice(compChoice)) {
            document.querySelectorAll("h1")[1].textContent = `It's a tie! Try again, ${userName}`
        } else {

            if ((convertCompChoice(compChoice) == "r" && userChoice == "s") || (convertCompChoice(compChoice) == "s" && userChoice == "p") || (convertCompChoice(compChoice) == "p" && userChoice == "r")) {
                document.querySelectorAll("h1")[1].textContent = "Computer Won!"
            }

            if ((convertCompChoice(compChoice) == "s" && userChoice == "r") || (convertCompChoice(compChoice) == "p" && userChoice == "s") || (convertCompChoice(compChoice) == "r" && userChoice == "p")) {
                document.querySelectorAll("h1")[1].textContent = `${userName}  Won!`
            }
        }

        icons = (x) => {
            if (x == "r") {
                return '<span class="fa fa-gem"></span>'
            }
            if (x == "p") {
                return '<span class="fa fa-paper-plane"></span>'
            }
            if (x == "s") {
                return '<span class="fa fa-cut"></span>'
            }
        }

        document.getElementById("userChoice").innerHTML = icons(userChoice)
        document.getElementById("compChoice").innerHTML = icons(convertCompChoice(compChoice))

    })
})





// r > s, s > p, p > r 