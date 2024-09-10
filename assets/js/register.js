let radios = document.querySelectorAll('.register-radio')

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        console.log('world');
    })
})