const screens = document.querySelectorAll('.screen');
const choose_candy_btns = document.querySelectorAll('.choose-candy-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_candy = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_candy_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_candy = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createcandy, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
  let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++;
    if(m==1)
    {
        alert("game over")
    }
}
var clear; 
function stopWatch( ) { 
     setTimeout( "stopWatch( )", 1000 ); } 
 


   

function createcandy() {
    const candy = document.createElement('div')
    candy.classList.add('candy')
    const { x, y } = getRandomLocation()
    candy.style.top = `${y}px`
    candy.style.left = `${x}px`
    candy.innerHTML = `<img src="${selected_candy.src}" alt="${selected_candy.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    candy.addEventListener('click', catchcandy)

    game_container.appendChild(candy)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchcandy() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addcandy()
}

function addcandy() {
    setTimeout(createcandy, 1000)
    setTimeout(createcandy, 1500)
}

function increaseScore() {
    score++
    if(score > 100) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}