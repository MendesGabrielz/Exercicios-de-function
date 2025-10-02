function taxasCaptura(tipo2, pokemon2) {

    let item = prompt(`Qual item você esta utilizando ? 
                       1 - Normal
                       2 - Raro`)

    let captura = 0

    if (tipo2 && pokemon2) {

        if (tipo2 == "normal" || tipo2 == "raro") {

            switch (item) {

                case "1":

                    captura = 1.0
                    break

                case "2":

                    captura = 2.0
                    break


            }

        } else if (tipo2 == "legendario") {


            switch (item) {

                case "1":

                    captura = 0.8
                    break

                case "2":

                    captura = 1.2
                    break
            }
        }
    }

    alert(`A taxa de captura do pokemon ${pokemon2} é de: ${captura}`)
}

function gerarPokemon(historicopokemon) {

    const normal = ["Pidgey", "Rattata", "Caterpie"]
    const raro = ["Dragonite", "Gyarados", "Lapras"]
    const legendario = ["Mewtwo", "Mew", "Zapdos"]

    let tipo = 0
    let pokemon = 0

    let chance = Math.random()

    if (chance < 0.8) {

        tipo = "normal"
        pokemon = normal[Math.floor(Math.random() * normal.length)]

    } else if (chance < 0.95) {

        tipo = "raro"
        pokemon = raro[Math.floor(Math.random() * raro.length)]
    } else {

        tipo = "legendario"
        pokemon = legendario[Math.floor(Math.random() * legendario.length)]
    }

    alert(`O tipo de pokemon foi ${tipo}: ${pokemon}`)

    ultimoPokemon = { tipo, pokemon }
    historicopokemon.push(pokemon)

}

function historico(historicopokemon) {

    alert(`O historico é ${historicopokemon}`)

}


function menu() {


    let = historicopokemon = []
    let = ultimopokemon = []

    do {

        var opcao = Number(prompt(`Escolha a opção abaixo:
                                   1. Gerar Pokemon
                                   2. Taxas de captura
                                   3. Histórico de pokemons gerados
                                   0. Encerrar`))

        if (opcao == `1`) {

            gerarPokemon(historicopokemon)

        } else if (opcao == `2`) {

            if (ultimoPokemon) {

                taxasCaptura(ultimoPokemon.tipo, ultimoPokemon.pokemon)
            } else {

                alert(`Não há pokemon gerado!`)
            }

        } else if (opcao == `3`) {

            historico(historicopokemon)
        }


    } while (opcao != 0)



}

menu()