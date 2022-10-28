let quiz = [
  {
    NumQuiz: 1,
    Enunciado: "Em que cidade brasileira fica localizado o Elevador Lacerda?",
    Resposta_Certa: "Salvador",
    Imagem: "./img/Q1.jpg",
    Alternativas: [
      "São Paulo",
      "Salvador",
      "Rio de Janeiro",
      "Sidral",
      "Curitiba",
    ],
  },
  {
    NumQuiz: 2,
    Enunciado: "O Museu do Louvre fica em qual cidade?",
    Resposta_Certa: "Paris",
    Imagem: "./img/Q2.jpg",
    Alternativas: [
      "Paris",
      "Uberlandia",
      "Uberaba",
      "Pinhais",
      "Boston",
    ],
  },
  {
    NumQuiz: 3,
    Enunciado: "A estátua da Liberdade fica em qual cidade?",
    Resposta_Certa: "Nova Iorque",
    Imagem: "./img/Q3.jpg",
    Alternativas: [
      "Nova Iorque",
      "Paris",
      "Londres",
      "Castro",
      "Toledo",
    ],
  },
  {
    NumQuiz: 4,
    Enunciado: "O Taj Mahal fica em qual cidade?",
    Resposta_Certa: "Acra",
    Imagem: "./img/Q4.jpg",
    Alternativas: [
      "Acra",
      "Calcutá",
      "Islamabad",
      "Foz do Iguaçu",
      "Namíbia",
    ],
  },
  {
    NumQuiz: 5,
    Enunciado: "Em que país estão localizadas as pirâmides de Gizé (Quéops, Quéfren e Miquerinos)?",
    Resposta_Certa: "Egito",
    Imagem: "./img/Q5.jpg",
    Alternativas: [
      "Grécia",
      "Turquia",
      "Calcutá",
      "Egito",
      "Minas Gerais"
    ],
  },
  {
    NumQuiz: 6,
    Enunciado: "Em que cidade fica localizado o Opera House, que é um simbolo do país?",
    Resposta_Certa: "Sidney, na Austrália",
    Imagem: "./img/Q6.jpg",
    Alternativas: [
      "Sidney, na Austrália",
      "Berlim, na Alemanha",
      "Em Liverpool, na Inglaterra",
      "Oslo, na Noruega",
      "Las Vegas, nos Estados Unidos"
    ],
  }
];



const MudaFuncao = document.getElementById("mudarPergunta")
MudaFuncao.onclick = () => {
  const rndInt = Math.floor(Math.random() * 6);
  mudarPergunta(rndInt);
};


const resposta = []
const respostaCerta = []
let Itens = ["Q_A", "Q_B", "Q_C", "Q_D", "Q_E"]
const CorDestaqueResposta = "#025492"

const Q_A = document.querySelector("#Q_A");
const Q_B = document.querySelector("#Q_B");
const Q_C = document.querySelector("#Q_C");
const Q_D = document.querySelector("#Q_D");
const Q_E = document.querySelector("#Q_E");

Q_A.onclick = () => {
  SelecionaItem(Q_A)
};
Q_B.onclick = () => {
  SelecionaItem(Q_B)
};

Q_C.onclick = () => {
  SelecionaItem(Q_C)
};

Q_D.onclick = () => {
  SelecionaItem(Q_D)
};

Q_E.onclick = () => {
  SelecionaItem(Q_E)
};

function SelecionaItem(item) {
  limpaItem()
  item.style.backgroundColor = CorDestaqueResposta;
  resposta.pop()
  resposta.push(item.innerHTML)
};

function limpaItem() {
  Q_A.style.backgroundColor = "#ffffff";
  Q_B.style.backgroundColor = "#ffffff";
  Q_C.style.backgroundColor = "#ffffff";
  Q_D.style.backgroundColor = "#ffffff";
  Q_E.style.backgroundColor = "#ffffff";
};


function limpaproxima() {
  limpaItem()
  resposta.length = 0
  respostaCerta.length = 0
};

function mudarPergunta(rand) {
  ItemEscolhido();
  limpaproxima();
  /*numera();*/
  for (let i = 0; i <= quiz.length; i++) {
    respostaCerta.push(quiz[rand].Resposta_Certa);
    document.getElementById("Questao_Enunciado").innerHTML = quiz[rand].Enunciado;
    document.getElementById("ImagemFundo").src = quiz[rand].Imagem;
    var Itens1 = Itens.sort(function() { return 0.5 - Math.random() });
    for (let u = 0; u <= Itens1.length; u++) {
      document.getElementById(Itens1[u]).innerHTML = quiz[rand].Alternativas[u];
    }
  }
};


function ItemEscolhido() {
  if (respostaCerta.length == 0) {
    return
  }
  if (resposta[0] == respostaCerta[0]) {
    let a = document.getElementById("Pontos").innerHTML;
    document.getElementById("Pontos").innerHTML = `${parseInt(a) + 1}`;
  }
  if (resposta != respostaCerta) {

  }

};
function ItemEscolhidoTeste() {
  alert("Resposta escolhida" + resposta + "  Resposta certa: " + respostaCerta)
}

const perguntaNumero = [];
function numera() {
  perguntaNumero.push(1);
  document.getElementById("Questao_Topo_Esquerda").innerHTML = `#${perguntaNumero.length}`
};


function Respostas() {
  alert(resposta)
};



document.onload = (mudarPergunta(rndInt));



function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function() {
    minutes = '00';
    seconds = parseInt(timer % 60, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
      timer = 0;
      location.reload();
      alert("Tempo acabou :(   Clique OK para começar de novo...");
      

    }
  }, 1000);
}
function Comecar() {
  document.getElementById("Comecar").hidden = true;
  document.getElementById("mudarPergunta").hidden = false;
  document.getElementById("resposta").hidden = false;

  var duration = 59
    ; // Converter para segundos
  display = document.querySelector('#Timer'); // selecionando o timer
  startTimer(duration, display); // iniciando o timer
};

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },200);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}