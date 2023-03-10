let dark_mode = document.querySelector("#dark_mode_btn");

const dark_mode_button = document.querySelector("#dark_mode_btn");
dark_mode_button.addEventListener("click", toggle_dark_mode);

function toggle_dark_mode() {
  document.body.classList.toggle("white-mode");

  if (document.body.classList.contains("white-mode")) {
    dark_mode.innerHTML =
      '<i class="fa-solid fa-moon shadow"></i> Dark Mode on';
  } else {
    dark_mode.innerHTML =
      '<i class="fa-regular fa-moon shadow"></i> Dark Mode off';
  }
}
