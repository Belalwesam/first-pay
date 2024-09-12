let showPasswordBtn = document.querySelectorAll(".show-hide-password-btn");

showPasswordBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let passwordInput = btn.previousElementSibling;
    let inputType = btn.previousElementSibling.getAttribute("type");

    if (inputType == "password") {
      passwordInput.setAttribute("type", "text");
    } else {
      passwordInput.setAttribute("type", "password");
    }
  });
});
