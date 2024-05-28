// variaveis
let darMode = true
const buttonToggle = document.querySelector("#toggle-mode")

// eventos
buttonToggle.addEventListener("click", (event) => {

    document.documentElement.classList.toggle('light')

    const mode = darMode ? "light" : "dark"

    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

    darMode = !darMode
})