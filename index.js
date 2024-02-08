const perguntas = [
  {
    pergunta: "Qual é o principal objetivo da musculação?",
    respostas: [
      "Perder peso",
      "Ganhar flexibilidade",
      "Ganhar massa muscular"
    ],
    correta: 2 // Resposta correta é "Ganhar massa muscular"
  },
  {
    pergunta: "Qual é o grupo muscular principal trabalhado no agachamento?",
    respostas: [
      "Bíceps",
      "Quadríceps",
      "Tríceps"
    ],
    correta: 1 // Resposta correta é "Quadríceps"
  },
  {
    pergunta: "Qual é o nome do exercício que trabalha os músculos peitorais?",
    respostas: [
      "Puxada",
      "Agachamento",
      "Supino"
    ],
    correta: 2 // Resposta correta é "Supino"
  },
  {
    pergunta: "Qual é o exercício que mais trabalha os músculos das costas?",
    respostas: [
      "Desenvolvimento militar",
      "Remada",
      "Leg press"
    ],
    correta: 1 // Resposta correta é "Remada"
  },
  {
    pergunta: "Qual é o principal nutriente para o crescimento muscular?",
    respostas: [
      "Carboidratos",
      "Gorduras",
      "Proteínas"
    ],
    correta: 2 // Resposta correta é "Proteínas"
  },
  {
    pergunta: "Qual é o nome do exercício que trabalha os músculos abdominais?",
    respostas: [
      "Agachamento",
      "Abdominal",
      "Levantamento terra"
    ],
    correta: 1 // Resposta correta é "Abdominal"
  },
  {
    pergunta: "Qual é o exercício que mais trabalha os músculos das pernas?",
    respostas: [
      "Agachamento",
      "Rosca direta",
      "Crucifixo"
    ],
    correta: 0 // Resposta correta é "Agachamento"
  },
  {
    pergunta: "Qual é a principal função dos suplementos alimentares na musculação?",
    respostas: [
      "Substituir refeições",
      "Aumentar a hidratação",
      "Complementar a dieta"
    ],
    correta: 2 // Resposta correta é "Complementar a dieta"
  },
  {
    pergunta: "Qual é o músculo principal trabalhado no exercício rosca direta?",
    respostas: [
      "Bíceps",
      "Tríceps",
      "Deltoides"
    ],
    correta: 0 // Resposta correta é "Bíceps"
  },
  {
    pergunta: "Qual é o exercício que mais trabalha os músculos do peitoral?",
    respostas: [
      "Crucifixo",
      "Flexão de braço",
      "Supino inclinado"
    ],
    correta: 2 // Resposta correta é "Supino inclinado"
  }
];


//selecionar os documentos
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')


const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for(const item of perguntas) {
  //clonar os itens
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('Span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      //colocar na tela
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    //colocar na tela
    quizItem.querySelector('dl').appendChild(dt)
  }

  //remove as respostas não utilizadas
  quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
 }

 