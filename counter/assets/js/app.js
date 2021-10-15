const counter = document.getElementById("counter");

const button = document.querySelectorAll(".btn");

count = 0;

button.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        buttonAttr = e.currentTarget.classList

        if (buttonAttr.contains("increase")) {
            count++
        }
        if (buttonAttr.contains("decrease")) {
            count--;
        }
        if (buttonAttr.contains("reset")) {
            count = 0;
        }
        counter.textContent = count
        if (count < 0) {
            counter.style.color = "white";
            document.body.style.background = "red"
            document.querySelector("h4").textContent = "Danger Zone"
        }
        if (count == 0) {
            counter.style.color = "black"
            document.body.style.background = "white"
            document.querySelector("h4").textContent = "Counter"
        }
        if (count > 0) {
            counter.style.color = "white";
            document.body.style.background = "green"
            document.querySelector("h4").textContent = "Healthy"
        }
    })
})
