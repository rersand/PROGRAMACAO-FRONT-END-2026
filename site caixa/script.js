const produto = {
    "132" : {"nome": "bielzinho", "preco":10.00}, 
    "465" : {"nome": "pão", "preco":5.00},
    "789" : {"nome": "coca", "preco":12.00},
}

let carrinho = [];

const audio = new Audio ("bip.mp3")

window.onload = () => {
    document.getElementById("cod").focus();
}

function addProduto(){
    const codValue = document.getElementById("cod");
    const qtdValue = document.getElementById("qtd");
   
    const codigo = codValue.value;
    const quantidade = qtdValue.value;

    if(!produto[codigo]){
        alertItem();
        return;
    }

    const produtoBase = produto[codigo];
    const item = {
        nome: produtoBase.nome,
        preco: produtoBase.preco,
        quantidade: quantidade,
        subtotal: produtoBase.preco * quantidade,
    };

    carrinho.push(item);
    audio.currentTime = 0;
    audio.play();

    function atualizarTela(){
        const lista = getElementById("lista");
        lista.innerHTML = "";
    }

    carrinho.forEach((item, index) =>{
        total+= item.subtotal;

        const li = document.createElement(li);
        li.className = "list-group-item";

        li.innerHTML = `<div class= "d-flex justify-content-between">
            <strong>${item.nome}</strong>
            <small> ${item.quantiade} x  R${item.preco} =<strong> ${item.subtotal}
            </strong></small>`;

        lista.appendChild(li);
    })
}