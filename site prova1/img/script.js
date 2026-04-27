function revelar() {
    const foto = document.getElementById('fotoJogador');
    if (foto) foto.src = 'img/_vinicius_junior.png';

    const spanNome = document.querySelector('#Nome span:first-child');
    const spanRank = document.getElementById('Rank');
    const spanData = document.getElementById('Data_Nas');
    const spanAltura = document.getElementById('Alutra');
    const spanPosicao = document.getElementById('Posição ');

    if (spanNome) spanNome.textContent = 'Vinícius José Paixão de Oliveira Júnior';
    if (spanRank) spanRank.textContent = '9,5';
    if (spanData) spanData.textContent = '12/07/2000 (25 anos)';
    if (spanAltura) spanAltura.textContent = '1,76 m';
    if (spanPosicao) spanPosicao.textContent = 'Ponta-esquerda / Atacante';

    const placeholders = document.querySelectorAll('.placeholder-sim');
    placeholders.forEach(p => {
        p.classList.remove('placeholder-sim');
        p.style.width = 'auto';
    });

    console.log("Jogador revelado com sucesso!");
}