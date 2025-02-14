function calcularMedia(grades) {
    
    if (grades.length == 0) {
        alert("Por favor, insira pelo menos uma nota.")
    } else {
        let media = 0.0
        for (let i = 0; i < grades.length; i++) 
            media += grades[i]
        media = (media / grades.length)
    
        document.querySelector("#final_average").innerText = "A média é: " + media
    }
}

function adicionarNota(grades) {

    let nota = document.querySelector("#nota").value.replace(',', '.')
    let isOk = true

    if (nota == "") {
        alert("Por favor, insira uma nota.")
        isOk = false
    }
    if (isNaN(nota)) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.")
        isOk = false
    }
    if (nota > 10 || nota < 0) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.")
        isOk = false
    }

    if (isOk) {
        grades.push(parseFloat(nota))
        let i = grades.length
        let text = document.createElement("p")
        text.innerText = "A nota " + i + " foi " + nota
        document.querySelector("#historico").append(text)
    }
}

let grades = []
let add_button = document.querySelector("#input_button")
add_button.addEventListener("click", ()=>{
    adicionarNota(grades)
})

let average_button = document.querySelector("#average_button")
average_button.addEventListener("click", ()=>{
    calcularMedia(grades)
})