function alterarStatus(indiceBotao) {
    let btnAlugarGame = document.getElementById(`botao${indiceBotao}`);
    let imgGame = document.getElementById(`imagem${indiceBotao}`);
    let nomeJogo = document.getElementById(`nomeJogo${indiceBotao}`);

    if (imgGame.classList.contains('dashboard__item__img--rented')) {
        imgGame.classList.remove('dashboard__item__img--rented');
        btnAlugarGame.classList.remove('dashboard__item__button--return');
        btnAlugarGame.innerHTML = 'Alugar';
        setTimeout(function() {
            alert(`${nomeJogo.textContent} devolvido com sucesso!`);
        }, 100);
    } else {
        imgGame.classList.add('dashboard__item__img--rented');
        btnAlugarGame.classList.add('dashboard__item__button--return');
        btnAlugarGame.innerHTML = 'Devolver';
        setTimeout(function() {
            alert(`${nomeJogo.textContent} alugado com sucesso!`);
        }, 100);
    }
}