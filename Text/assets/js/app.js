document.getElementById('userName').addEventListener("keyup", function () {
    document.getElementById('name').textContent = this.value;
    document.querySelector('.bottom').style.borderTop = '1em solid aqua';
})

document.getElementById('userOccupation').addEventListener("keyup", function () {
    document.getElementById('occupation').textContent = this.value;
    document.querySelector('.bottom').style.borderTop = '1em solid coral';
})

document.getElementById('userStory').addEventListener("keyup", function () {
    document.getElementById('story').textContent = this.value;
    document.querySelector('.bottom').style.borderTop = '1em solid purple';
})
