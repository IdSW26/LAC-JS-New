async function vemTabela(){
    const local = document.getElementById('dadoAqui');

    try {
        const response = await fetch('json.json');

        if (!response.ok) throw new Error('Falha ao carregar dados');

        const dadinho = await response.json();

        local.innerHTML = "";

        dadinho.forEach(dado => {
            const tab = document.createElement('tr');
            tab.className = 'tabela';

            tab.innerHTML = `
                    <td>${dado.nome}</td>
                    <td>${dado.arma}</td>
                    <td>${dado.idade}</td>
                    <td>${dado.poder}</td>
                    <td><button type="button" onclick="deletarLinha(this)">Prender Candidato</button></td>
                    <td><button type="button" onclick="editaTabela(this)">Editar</button></td>
            `;
            local.appendChild(tab);
        }); 
    } catch (error) {
        console.error('Erro na requisição:', error);
        local.innerHTML = `<p>Desculpe, não foi possivel carregar as informações</p>`;
    }
}
function deletarLinha(botao) {
    let linha = botao.close
    st('tr');
    linha.remove();
}
function editaTabela(botao){
    let linha = botao.closest('tr')
   
    const celulas = linha.cells;

    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let input3 = document.getElementById("input3");
    let input4 = document.getElementById("input4");

    input1.value = celulas[0].innerHTML;
    input2.value = celulas[1].innerHTML;
    input3.value = celulas[2].innerHTML;
    input4.value = celulas[3].innerHTML;
}