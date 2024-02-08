const perguntas = [
    {
        perguntas: "Qual livro da Bíblia vem primeiro no Antigo Testamento?",
        respostas: [
            "Gênesis",
            "Êxodo",
            "Levítico",
        ],
        correta: 0
    },
    {
        perguntas: "Quem é considerado o primeiro homem na Bíblia?",
        respostas: [
            "Abraão",
            "Moisés",
            "Adão",
        ],
        correta: 2
    },
    {
        perguntas: "Quem escreveu a maior parte do Novo Testamento?",
        respostas: [
            "Pedro",
            "Paulo",
            "João",
        ],
        correta: 1
    },
    {
        perguntas: "Quantos livros existem no Novo Testamento?",
        respostas: [
            "24",
            "27",
            "30",
        ],
        correta: 1
    },
    {
        perguntas: "Quem é o profeta que construiu a arca conforme Deus instruiu?",
        respostas: [
            "Noé",
            "Josué",
            "Elias",
        ],
        correta: 0
    },
    {
        perguntas: "Qual dos seguintes livros não faz parte do Pentateuco?",
        respostas: [
            "Êxodo",
            "Levítico",
            "Samuel",
        ],
        correta: 2
    },
    {
        perguntas: "Qual dos seguintes é considerado o maior rei de Israel?",
        respostas: [
            "Davi",
            "Salomão",
            "Saul",
        ],
        correta: 0
    },
    {
        perguntas: "Qual é o último livro da Bíblia?",
        respostas: [
            "Apocalipse",
            "Gênesis",
            "Revelação",
        ],
        correta: 2
    },
    {
        perguntas: "Quem foi o líder escolhido por Deus para libertar os israelitas da escravidão no Egito?",
        respostas: [
            "Moisés",
            "Josué",
            "Jesus",
        ],
        correta: 0
    },
    {
        perguntas: "Qual destes personagens da Bíblia não é um dos doze apóstolos de Jesus?",
        respostas: [
            "Pedro",
            "Mateus",
            "Paulo",
        ],
        correta: 2
    },
  ];
  
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
    
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
    // loop ou laço de repetição
    for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
      
      for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'perguntas' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
  
          corretas.delete(item)
          if(estaCorreta) {
            corretas.add(item)
          }
  
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
  
  
        quizItem.querySelector('dl').appendChild(dt)
      }
    
      
      quizItem.querySelector('dl dt').remove()
      
      
      // coloca a pergunta na tela
      quiz.appendChild(quizItem)
    }
    