const submitButton = document.getElementById('submit-button')

const gotLocation = (position) => {
    console.log(position)
}

const failedToGet = () => {
    console.log('Oops some error occured')
}

const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
}

submitButton.addEventListener('click', getCurrentLocation)

