const userName = prompt("Welcome, can I know your name?")
document.getElementById("result").style.display = "none";
document.getElementById("replay-button").style.display = "none";
document.querySelector("button").addEventListener("click", function () {
    const adj1 = prompt("Enter an adjective");
    const timeOfTheDay = prompt("Enter a time of the day");
    const bodyPartPlural = prompt("Enter a body part(plural)");
    const noun = prompt("Enter a noun(plural)");
    const color = prompt("Enter a color");
    const verbPastTense = prompt("Enter a verb(past tense)");
    const food = prompt("Enter a food");
    const adj2 = prompt("Enter an adjective");
    const adj3 = prompt("Enter an adjective");
    const bodyPartPluralOne = prompt("Enter a body part(plural)");
    const nounOne = prompt("Enter a noun");

    document.querySelector("main").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("replay-button").style.display = "block";

    document.getElementById("result").textContent = `It was a ${adj1} summer ${timeOfTheDay} when we realized that the vaccine to stop spread of the disease did not work. Instead, it produced ZOMBIES!!! They were thirsty for ${bodyPartPlural} 
  and the streets were lined with these monsters holding ${noun} in their hands. 
  Their eyes were ${color} with hunger as they ${verbPastTense} around the city looking for ${food}. 
  They were ${adj2} and ${adj3}, unknowing how to act in this human world... except eat ${bodyPartPluralOne}!!!
  That was their sole mission and they were dedicated towards achieving it for the sake of ${nounOne}`;
});

// {personName} looks like the type of person you would consider a cheerleader. Everyone expects her to be on the {adj1} squad, or the dance team.

// So imagine the type of shit she went through when she made the {sport} team three years ago.

// It's {personName} fourth year at {nameOfPlace} and almost four years later she is still the star quarterback. But what happens when three new guys join the team?

// Whilst juggling friendships, family, football, and trying to keep sane, you'll learn that she is not your average {sport} girl.

function timer() {
    const date = new Date();
    const hour = date.getHours();

    const minute = date.getMinutes();

    const second = date.getSeconds();

    function twoDigits(x) {
        const y = x.toString();
        if (y.length == 1) {
            return 0 + y;
        } else {
            return x;
        }
    }

    document.querySelector("h5").setAttribute("id", "greeting");
    if (hour >= "00" && hour <= "11") {
        document.getElementById("greeting").textContent = "Good Morning, " + userName;
    } else if ((hour >= "12") & (hour <= "16")) {
        document.getElementById("greeting").textContent = "Good Afternoon, " + userName;
    } else {
        document.getElementById("greeting").textContent = "Good Evening, " + userName;
    }

    document.getElementById("currentTime").textContent = `${twoDigits(
        hour
    )} : ${twoDigits(minute)} : ${twoDigits(second)}`;
    setTimeout(timer, 1000);
}
timer();
