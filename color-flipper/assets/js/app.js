const colors = ["Red", "Purple", "Green", "Blue", "Aqua", "Coral", "Brown"]

document.getElementById("button").addEventListener("click", function() {
    let randomColor = Math.floor(Math.random() * colors.length)
    document.body.style.background = colors[randomColor]
    document.body.style.transition = "background .3s ease-in"
    document.querySelector('span').textContent = colors[randomColor]
    document.querySelector('h1').style.color = 'white'
})