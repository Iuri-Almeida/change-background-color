function generateColor() {
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)

    return {r, g, b}
}

function changeBodyBackground(r, g, b) {
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

window.onload = () => {

    const { r, g, b } = generateColor()

    changeBodyBackground(r, g, b)
    
    const button = document.querySelector('body button')
    
    button.onclick = () => {
        const { r, g, b } = generateColor()
        changeBodyBackground(r, g, b)
    }
}
