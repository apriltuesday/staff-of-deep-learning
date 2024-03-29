const SERVER = 'https://dndndl.gq'

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
        textarea.focus()
    })
    .catch(error => {
        textarea.value = "Sadness."
        textarea.disabled = false
        textarea.focus()
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
