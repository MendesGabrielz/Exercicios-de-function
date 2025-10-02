function menu() {

    let dados = []

    do {

        var opcao = Number(prompt(`Escolha qual opção que você quer:
                                   1. Inserir dados do livro
                                   2. Imprimir os nomes dos livros
                                   3. Imprimir os dados de um livro específico
                                   4. Imprimir dados dos livros de um autor
                                   0. Encerrar`))

        if (opcao == 1) {

            inserir(dados)
        } else if (opcao == 2) {

            imprimir(dados)
        } else if (opcao == 3) {

            imprimirLivro(dados)
        } else if (opcao == 4) {

            imprimirAutor(dados)
        }

    } while (opcao != 0)

}

function inserir(dados) {

    let nome = prompt(`Digite o nome do livro:`)
    let autor = prompt(`Digite o autor do livro`)
    let ano = prompt(`Digite o ano de publicação`)
    let avaliacao = Number(prompt(`Digite a avaliação desse livro:`))

    dados.push({ nome: nome, autor: autor, ano: ano, avaliação: avaliacao })

}

function imprimir(dados) {

    let numeros = Number(dados.length)
    for (let i = 0; i < numeros; i++) {

        console.log(dados[i].nome)

    }

}

function imprimirLivro(dados) {

    let nomeLivro = prompt(`Digite o nome do livro que você quer ver: `)
    for (i = 0; i < dados.length; i++) {

        if (dados[i].nome === nomeLivro) {

            console.log(dados[i])
        }
    }

}

function imprimirAutor(dados) {

    let autorLivro = prompt(`Digite o nome do autor:`)
    for (i = 0; i < dados.length; i++) {

        if (dados[i].autor === autorLivro) {

            console.log(dados[i])
        }
    }

}

menu()