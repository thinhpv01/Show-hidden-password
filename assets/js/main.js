const inputShow = document.getElementById("input-icon"),
  inputPass = document.getElementById("input-password"),
  inputOver = document.getElementById("input-overlay");

inputShow.addEventListener("click", () => {
  if (inputPass.type === "password") {
    inputPass.type = "text";
    inputShow.classList.add("bx-show");
  } else {
    inputPass.type = "password";
    inputShow.classList.remove("bx-show");
  }
  inputOver.classList.toggle("overlay-content");
});
