// Digital Clock

function timer() {
    const date = new Date();
    const day = date.getDay()
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

    document.getElementById("currentTimer").textContent = `${twoDigits(
        hour
    )} : ${twoDigits(minute)} : ${twoDigits(second)}`;
    setTimeout(timer, 1000);
}
timer()

// Calculator

function display(x) {
    document.getElementById('result').value += x;
}

function equation() {
    let x = document.getElementById('result').value;
    let y = eval(x)
    document.getElementById('result').value = y
}

function clr() {
    document.getElementById('result').value = ''
}