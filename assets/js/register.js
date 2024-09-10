let radios = document.querySelectorAll('.register-radio')

radios.forEach(radio => {
    radio.addEventListener("change", (radio) => {
        radios.forEach(radio => {
            if (radio.checked) {
                console.log(radio);
                radio.previousElementSibling.classList.add('active')
            } else {
                radio.previousElementSibling.classList.remove('active')
            }
        });
    })
})