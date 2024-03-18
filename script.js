function toggleMode() {
  const html = document.documentElement
  //pegar a tag img
  const img = document.querySelector("#profile img")
  const alt = document.querySelector

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
