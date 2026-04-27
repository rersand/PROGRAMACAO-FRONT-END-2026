function revelar(){
function revelar() {
    const imagemCopa = document.querySelector('.card-img-top');
    imagemCopa.src = 'img/_vinicius_junior.png';

    const tituloNome = document.getElementById('Nome');
    const spanNome = tituloNome.querySelector('.placeholder'); 
    const spanRank = document.getElementById('Rank');
    const spanData = document.getElementById('Data_Nas');
    const spanAltura = document.getElementById('Alutra'); 
    const spanPosicao = document.getElementById('Posição '); 

    spanNome.textContent = 'Vinícius José Paixão de Oliveira Júnior';
    spanRank.textContent = '9,5';
    spanData.textContent = '12/07/2000 (25 anos)';
    spanAltura.textContent = '1,76 m';
    spanPosicao.textContent = 'Ponta-esquerda / Atacante';

    tituloNome.classList.remove('placeholder-glow');
    
    const paragrafoText = document.querySelector('.card-text.placeholder-glow');
    if (paragrafoText) {
        paragrafoText.classList.remove('placeholder-glow');
    }

    const elementosParaAtualizar = [spanNome, spanData, spanAltura, spanPosicao];

    elementosParaAtualizar.forEach(elemento => {
        elemento.classList.remove('placeholder', 'col-4', 'col-6');
        elemento.classList.add('card-text');
    });
}
}