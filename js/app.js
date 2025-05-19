const listaProdutos = document.getElementById("lista-produtos");
const total = document.getElementById("valor-total");
let totalCarrinho = 1400;
limpar();

function adicionar() {
    // Recuperando Informações do Produto
    const produto = document.getElementById("produto").value;
    const nomeProduto = produto.split("-")[0];
    const valorProduto = produto.split("$")[1];
    const quantidade = document.getElementById("quantidade").value;

    if (quantidade <= 0 || quantidade == "") return 0;

    // Adicionando Produto ao Carrinho
    const preco = valorProduto * quantidade;

    listaProdutos.innerHTML += `
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${preco}</span>
        </section>`;

    // Ajustando Preço e Subtotal do Carrinho
    total.innerHTML = `R$${totalCarrinho + preco}`;
    totalCarrinho += preco;

    document.getElementById("quantidade").value = "";
}

function limpar() {
    listaProdutos.innerHTML = "";
    total.innerHTML = "R$0"
    totalCarrinho = 0;
}