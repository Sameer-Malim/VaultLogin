//* DARK MODE
document.addEventListener("DOMContentLoaded", function () {
  let page = document.getElementById("page");
  let button = document.getElementById("toggleMode");

  let savedMode = localStorage.getItem("mode");

  if (savedMode === "dark"){
    page.classList.add("dark-mode");
  }

  button.addEventListener("click", function(){
    page.classList.toggle("dark-mode");

    if (page.classList.contains("dark-mode")){
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }

  });
});
//* END OF DARK MODE
