function silence() {
    const audio = document.getElementsByTagName('audio');
    for (let i = 0; i < audio.length; audio[i].muted = !audio[i].muted, i++) {
        if (audio[i].muted) {
            document.getElementById("muteIcon").innerHTML = `
            <img src="media/unmuted.png" width="100% height="auto" onclick="silence()">`
        } else {
            document.getElementById("muteIcon").innerHTML = `
            <img src="media/muted.png" width="100% height="auto" onclick="silence()">`
        }
    };
}
