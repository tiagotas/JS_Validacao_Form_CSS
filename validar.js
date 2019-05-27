
window.onload = function() {
    
    validar();
    mostrar_avisos();
}

function validar() {

    document.getElementById("meu_form").onsubmit = function() {

        var nome = document.getElementById("nome");
        var email = document.getElementById("email");
        var mensagem = document.getElementById("mensagem");

        if(nome.value == "") {
            alert("Discurpe-me, digite seu nome");
            nome.style.border = "1px solid red";
            nome.focus();
            return false;
        }

    }

}


function mostrar_avisos() {

    document.getElementById("nome").onfocus = function()
    {
        // a palavra chave this faz referencia ao elemento cujo id é
        // "nome". parentElement faz a seleção do elemento pai de this
        // que é o label. O método getElementsByTagName retorna o conjunto
        // de tags especificadas, no caso "span" e como é um conjunto
        // retorna sempre uma lista de elementos. Como temos apenas
        // um elemento "span" colocamos [0] para pegar o span desejado.
        // style acessa as propriedades CSS do elemento e "display" faz
        // mostrar ou esconder o elemento.
        this.parentElement.getElementsByTagName("span")[0].style.display = "inline";
    }

    document.getElementById("nome").onblur = function()
    {
        this.parentElement.getElementsByTagName("span")[0].style.display = "none";
    }

}
