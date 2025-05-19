const listaProdutos = document.getElementById("lista-produtos");
const total = document.getElementById("valor-total");

function adicionar() {
    // Recuperando Informações do Produto
    const produto = document.getElementById("produto").value;
    const nomeProduto = produto.split("-")[0];
    const valorProduto = produto.split("$")[1];
    const quantidade = document.getElementById("quantidade").value;

    // Ajustando Preço e Subtotal
    const preco = valorProduto * quantidade;
    let totalCarrinho = parseInt(total.innerHTML.split("$")[1]);

    listaProdutos.innerHTML += `
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${preco}</span>
        </section>`;

    total.innerHTML = `R$${totalCarrinho + preco}`;
}

function limpar() {
    listaProdutos.innerHTML = "";
    total.innerHTML = "R$0"
}

limpar();