//Primeira Questão 
var BlocoAtual = 0;
function GerarBloco()
{
    let ElementoCaixa = document.createElement("div");
    ElementoCaixa.style.width = '100px';
    ElementoCaixa.style.height = '100px';
    ElementoCaixa.style.margin = '10px';
    ElementoCaixa.style.backgroundColor = 'red';

    //adiciona a classe .box na div criada
    ElementoCaixa.classList.add('box');
    document.body.appendChild(ElementoCaixa);
    //Caminho Alternativo:
    /*
    ElementoCaixa.outerHTML = 
    '<div style="width: 100px; height: 100px; margin: 10px; background-color: red;" class="box" onmouseover="MudaCor();"></div>'
    */
    ElementoCaixa.addEventListener("mouseenter", () => ElementoCaixa.style.backgroundColor = CorAleatoria());

    BlocoAtual++;
}

//Segunda Questao 
function CorAleatoria()
{
    let letras = "0123456789abcdef";
    let cor = "#";
    for(var i = 0; i < 6; i++)
    {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

var novaCor = CorAleatoria();






//Terceira Questao 
var nomes = ["Diego", "Gabriel", "Lucas"];
const listadiv = document.getElementById("divNomes");
for (nome in nomes)
{
    var item = document.createElement('li');
    item.innerHTML = nomes[nome];
    listadiv.appendChild(item);  
}


//Quarta Questão
function adicionar()
{
    let NovoNome = document.getElementById("NewName").value;
    //console.log(NovoNome);
    var item = document.createElement('li');
    item.innerHTML = NovoNome;
    listadiv.appendChild(item);
    document.getElementById('NewName').value=''
}

