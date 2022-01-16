const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const result_span = document.getElementById('result')

const btns = document.getElementsByClassName('role-dice')


function randomNumber() {
    return Math.floor(Math.random() * 6) + 1
}



btns[0].addEventListener('click', function (event) {

    const num1 = randomNumber();
    const num2 = randomNumber();

    img1.src = `../img/dice-${num1}.png`
    // img1.src = '../img/dice-' + num1 + '.png'
    img2.src = '../img/dice-' + num2 + '.png'


    if (num1 === num2) {
        result_span.innerText = "It looks like a draw!"

        result_span.className = ""
        result_span.classList.add("draw")
    } else if (num1 > num2) {
        result_span.innerText = "Dice 1 is larger than dice 2!"

        result_span.className = ""
        result_span.classList.add("won")
    } else if (num1 < num2) {
        result_span.innerText = "Dice 2 is larger than dice 1!"

        result_span.className = ""
        result_span.classList.add("lose")
    }

})