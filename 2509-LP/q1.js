let vendas = []
let despesas = []

function mostrarStatusDespesas() {

    let despesasDia = Number(despesas.length)

    if (despesasDia == 0) {

        alert(`Não há despesas registradas`)
    } else {

        alert(`A quantidade de despesas no dia é ${despesasDia}`)
    }
}

function Despesas() {

    let novaDespesa = Number(prompt(`DIgite o valor da nova despesa: `))
    despesas.push(novaDespesa)

}

function mostrarStatusVendas(soma) {

    let vendasDia = Number(vendas.length)

    if (vendasDia == 0) {

        alert(`Não há vendas registradas`)
        alert(`Se não tem vendas não tem valor total: ${soma}`)
    } else {

        alert(`A quantidade de vendas no dia é ${vendasDia}`)
        alert(`O total é: ${soma}`)
    }

}

function inserirVendas() {

    let novoValor = Number(prompt(`Digite o valor da nova venda: `))
    vendas.push(novoValor)
    let somaVendas = 0
    somaVendas += novoValor

    mostrarStatusVendas(somaVendas)

}

function menu() {

    do {

        var opcao = Number(prompt(`Escolha qual opção você quer:
                                   1. Inserir valor de uma venda
                                   2. Ver status das vendas do dia
                                   3. Inserir valor de uma despesa
                                   4. Ver total de despesas do dia
                                   0. Encerrar`))

        if (opcao == 1) {

            inserirVendas()
        } else if (opcao == 2) {

            mostrarStatusVendas()
        } else if (opcao == 3) {

            Despesas()
        } else if (opcao == 4) {
            mostrarStatusDespesas()
        }

    } while (opcao !== 0)

}

menu()