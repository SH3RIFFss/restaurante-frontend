// saudação do h1 da pagina 
const salut = document.getElementById("salut");
salut.innerText = "opa bem vindo, safado";
// intanciação da lista de pratos
var pratos = [];
// instanciação da lista de lanches 
var lanches = [];
// declaração de um produto(prato)
const prato1 = {
    "nome": "prato do dia",
    "valor": "20.49",
    "tipo": "prato",
    "desc": "arroz, feijao, farofa, macarrao, carne, frango, salada"
}
pratos.push(prato1) //adição do objeto à lista
// declaração de outro produto(prato)
const prato2 = {
    "nome": "marmita media",
    "valor": "26.49",
    "tipo": "marmita",
    "desc": "arroz, feijao, farofa, macarrao, bife acebolado, tomate"
}
pratos.push(prato2) //adição do objeto à lista
// declaração de um produto(lanche)
const lanche1 = {
    "nome": "x burguer",
    "valor": "27.99",
    "tipo": "lanche",
    "desc": "pao, maionese, tomate, presunto, mussarela, hamburguer"
}
lanches.push(lanche1); //adição do objeto à lista

// iteração da lista de objeto(prato) para o documento html
pratos.forEach(i => {
    const pratosDiv = document.getElementById("pratos"); //container de criação do objeto
    const pratosOp = document.createElement("div"); //tipo de objeto e como sera criado
    // html com os layoul do objeto e os seus dados
    pratosOp.innerHTML = `
    <p id="img"></p>
    <div>
    <p>${i.nome} | ${i.valor}</p>
    <p>itens: </p>
    <p>${i.desc}</p>
    <br>
    </div>
`;
    pratosOp.style.display = "flex"; //atribui o valor do display(flex) ao elemento(div)
    pratosDiv.appendChild(pratosOp); //cria de fato o objeto(div) no documento html
})

// iteração da lista de objeto(lanche) para o documento html
lanches.forEach(i => {
    const lanchesDiv = document.getElementById("lanches");
    const lanchesOp = document.createElement("div");
    lanchesOp.innerHTML = `
    <p id="img"  style="display: flex";></p>
    <div>
    <p>${i.nome} | ${i.valor}</p>
    <p>itens: </p>
    <p>${i.desc}</p>
    </div>
`;
    lanchesOp.style.display = "flex";
    lanchesDiv.appendChild(lanchesOp);
})

