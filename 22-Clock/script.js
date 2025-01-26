const stopButton = document.getElementById('stop-button')
const time = document.getElementById('time')

function startClock() {
    const currentTime = new Date();
    const val = ` ${currentTime.getHours()} : ${currentTime.getMinutes()}: ${currentTime.getSeconds()}`
    time.innerText = val;
    console.log(val)
}

let interval = setInterval(startClock, 1000);

const stopTimer = () => {
    clearInterval(interval)
}

stopButton.addEventListener('click', stopTimer)

