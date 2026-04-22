// Função que será chamada ao clicar no botão
function mostrarTabela() {
    // 1. Verifica se a imagem já foi adicionada para evitar duplicações caso o usuário clique várias vezes
    if (document.getElementById("imagem-tabela")) {
        alert("A tabela já está sendo exibida!");
        return;
    }

    // 2. Cria dinamicamente o elemento <img>
    const imgTabela = document.createElement("img");

    // 3. Define os atributos da imagem
    // Como o enunciado diz que o arquivo está na pasta "Prova", estou assumindo que o seu arquivo HTML também está nela.
    imgTabela.src = "Tabela_Jogos.jpg"; 
    imgTabela.id = "imagem-tabela";
    imgTabela.alt = "Tabela Oficial de Jogos - Copa do Mundo da FIFA 2026";

    // 4. Aplica um estilo básico via JS para a imagem se adaptar bem à tela e combinar com o CSS da Questão 02
    imgTabela.style.maxWidth = "100%";
    imgTabela.style.height = "auto";
    imgTabela.style.display = "block";
    imgTabela.style.margin = "30px auto";
    imgTabela.style.borderRadius = "15px";
    imgTabela.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";

    // 5. Insere a imagem dinamicamente ao final do <body>
    document.body.appendChild(imgTabela);
}