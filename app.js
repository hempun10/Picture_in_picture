const videoElement = document.querySelector('#video')
const button = document.querySelector('#button')

// Promt to user select media stream pass to video element then play
// const apiUrl = ``
const selectMediaStream = async()=>{
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => videoElement.play()
    } catch (error) {
        console.log(`Whoops Some her: ${error}`);
    }
}

button.addEventListener('click', async() =>{
    //Diabled Button
    button.disabled = true;
    // Start Picture in Picture 
    await videoElement.requestPictureInPicture();
    //Reset the button
    button.disabled = false;
})


// onLoad 
selectMediaStream()

