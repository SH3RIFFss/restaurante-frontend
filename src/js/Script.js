// saudação do h1 da pagina 
const salut = document.getElementById("salut");
salut.innerText = "opa bem vindo, safado";
// intanciação da lista de pratos
var pratos = [];
// instanciação da lista de lanches 
var lanches = [];
// declaração de um produto(prato)
var bebidas = [];
// declaração de um produto(prato)
const bebida1 = {
    "nome": "coca-cola",
    "valor": "6.49",
    "tipo": "bebida",
    "desc": "600 ml"
}
bebidas.push(bebida1) //adição do objeto à lista
const bebida2 = {
    "nome": "coca-cola",
    "valor": "11.49",
    "tipo": "bebida",
    "desc": "1.5 l"
}
bebidas.push(bebida2) //adição do objeto à lista
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
    // html com os layoult do objeto e os seus dados
    pratosOp.innerHTML = `
    <img id="img" src="../img/prato_img.webp" alt="prato">
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
    <img id="img" src="../img/lanche_img.webp" alt="lanche">
    <div>
    <p>${i.nome} | ${i.valor}</p>
    <p>itens: </p>
    <p>${i.desc}</p>
    </div>
`;
    lanchesOp.style.display = "flex";
    lanchesDiv.appendChild(lanchesOp);
})
// iteração da lista de objeto(bebidas) para o documento html
bebidas.forEach(i => {
    const bebidaDiv = document.getElementById("bebidas");
    const bebidasOp = document.createElement("div");
    bebidasOp.innerHTML = `
    <img id="img" src="../img/bebida_img.webp" alt="bebida">
    <div>
    <p>${i.nome} | ${i.valor}</p>
    <br>
    <p>${i.desc}</p>
    </div>
`;
    bebidasOp.style.display = "flex";
    bebidaDiv.appendChild(bebidasOp);
})

