function avisaCadastro(){
    alert("Cadastro realizado com sucesso!");
}
function avisaLogin(){
    alert("Login realizado com sucesso!");
}
function avisaCompra(){
    alert("Compra realizada com sucesso!");
}  
function adicionarCarrinho(){
    alert("Produto adicionado ao carrinho com sucesso")
}
async function trazDados(){
    const local = document.getElementById('vemDado');

    try {
        const response = await fetch('dados.json');

        if (!response.ok) throw new Error('Falha ao carregar dados');

        const dadinho = await response.json();

        local.innerHTML = "";

        dadinho.forEach(dado => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <img src="imagens/${dado.img}" alt="${dado.nome}" class="img-prod">
                <h3></h3>
                <p></p>
                <a href="${dado.endereco}">
                    <button type="button" class="botao">Saiba Mais</button>
                </a>
            `;

            card.querySelector('h3').textContent = dado.nome;
            card.querySelector('p').textContent = `R$ ` + dado.preco;

            local.appendChild(card);
        }); 
    } catch (error) {
        console.error('Erro na requisição:', error);
        local.innerHTML = `<p>Desculpe, não foi possivel carregar as informações</p>`;
    }       
}