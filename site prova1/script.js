function mostrarTabela() {
 
    const imgTabela = document.createElement("img");

    imgTabela.src = "Tabela_Jogos.jpeg"; 
    imgTabela.id = "imagem-tabela";
    imgTabela.alt = "Tabela Oficial de Jogos - Copa do Mundo da FIFA 2026";

    imgTabela.style.maxWidth = "100%";
    imgTabela.style.height = "auto";
    imgTabela.style.display = "block";
    imgTabela.style.margin = "30px auto";
    imgTabela.style.borderRadius = "15px";
    imgTabela.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";

    document.body.appendChild(imgTabela);
}