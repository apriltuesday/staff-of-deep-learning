const SERVER = 'http://178.62.30.63:7799'

textarea = document.getElementById("prompt")

const request = async () => {
    textarea.disabled = true
    const prompt = textarea.value
    fetch(SERVER + '/generate', {
        method: 'POST',
        body: prompt,
        headers: {
            'Content-Type': 'text/plain'
        }
    })
    .then(response => {
        if (response.status == 200) {
            return response.text()
        } else {
            throw new Error(response.statusText)
        }
    })
    .then(text => {
        textarea.value = text
        textarea.disabled = false
    })
    .catch(error => {
        textarea.value = "Sadness."
        textarea.disabled = false
    })
}

textarea.onkeydown = (e) => {
    if (e.keyCode == 9 || e.keyCode == 13) {  // tab or enter key
        if (e.preventDefault) {
            e.preventDefault();
        }
        request()
    }
}
