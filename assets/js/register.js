let radios = document.querySelectorAll('.register-radio')

radios.forEach(radio => {
    radio.addEventListener("change", (radio) => {
        radios.forEach(radio => {
            radio.previousElementSibling.querySelectorAll('img')[0].classList.remove('d-none')
            radio.previousElementSibling.querySelectorAll('img')[1].classList.add('d-none')
            if (radio.checked) {
                radio.previousElementSibling.classList.add('active')
                radio.previousElementSibling.querySelectorAll('img')[0].classList.add('d-none')
                radio.previousElementSibling.querySelectorAll('img')[1].classList.remove('d-none')
            } else {
                radio.previousElementSibling.classList.remove('active')
            }
        });
    })
})