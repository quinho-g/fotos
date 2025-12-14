    let record = document.getElementById('record-dados')
    let capa = document.getElementById('capa-record')
    let nome = document.getElementById('nome-record')
    let desc = document.getElementById('desc-record')
    let albuns = [document.getElementById('albun1'), document.getElementById('albun2'), document.getElementById('albun3')]

function galeria(lugar) {
    albuns[0].style.display = 'none'
    albuns[1].style.display = 'none'
    albuns[2].style.display = 'none'
    record.style.display = 'flex'
    record.scrollTop = 0
    switch (lugar) {
         case 'praia': 
            capa.src = "cpraia.jpg"
            albuns[0].style.display = 'grid'
            desc.innerText = "A praia é meu lugar de paz. O som do mar me acalma, o sol me renova e aquele vento gostoso sempre me lembra o quanto a vida pode ser leve."
            nome.innerText = "Praia Ubatuba"
          break
         case 'museu':
            capa.src = "cmuseu.jpg"
            albuns[1].style.display = 'grid'
            desc.innerText = "Eu adoro museus. Entrar neles é como mergulhar em outros tempos, outros mundos e outras mentes. É onde eu deixo minha curiosidade correr solta."
            nome.innerText = "Museu da Fenix"
          break
         case 'pa':
            capa.src = "cpa.jpg"
            albuns[2].style.display = 'grid'
            desc.innerText = "Aqui eu simplesmente esqueço de tudo. Me divirto, rio, me jogo sem pensar demais. É onde meu lado criança aparece e brilha."
            nome.innerText = "Parque Aquático"
          break
     }
}function fechar() {
    record.style.display = 'none'
}


let conta = 0
let pergunta = document.getElementById('per-pessoa')
let resposta = document.getElementById('res-pessoa')
function pes() {
    conta++
    if(conta == 0) {
        pergunta.innerText = "O que você precisa pra me conquistar?"
        resposta.innerText = "Ser verdadeiro comigo, respeitar meu jeito e saber valorizar momentos simples. Isso já diz muita coisa."
    }
    if(conta == 1) {
        pergunta.innerText = "Qual é o seu maior objetivo hoje?"
        resposta.innerText = "Viver leve, em paz, e construir um futuro cheio de histórias boas pra contar."
    }
    if(conta == 2) {
        pergunta.innerText = "Qual é o seu lugar favorito pra relaxar?"
        resposta.innerText = "Qualquer cantinho onde eu consiga ouvir uma boa música, respirar fundo e me reconectar comigo mesma."
    }
    if(conta == 3) {
        pergunta.innerText = "O que mais te chama atenção em alguém?"
        resposta.innerText = "Cuidado nos detalhes. Pequenos gestos mostram muito mais do que palavras bonitas."
        conta = -1
    }
}

