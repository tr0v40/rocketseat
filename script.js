function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const image = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute(
      "alt",
      "Foto de Mayk brito sorrindo, usando oculos escuros e camisa preta, barba e fundo azul e rosa"
    )
  } else {
    image.setAttribute("src", "./assets/avatar-dark.png")
    image.setAttribute(
      "alt",
      "Foto de Mayk brito sorrindo, usando oculos e camisa preta, barba e fundo azul e rosa"
    )
  }

  // pegar a tag img
  // subustituir imagem
}
