// Lista das 7 cobranças de pênalti (dificuldade aumentando aos poucos)
const desafiosDeChute = [
  {
    nivel: "Cobrança 1 • Nível Fácil",
    pergunta: "Adolfo quer bater um chute colocado e com muita precisão no canto, sem arriscar mandar para fora. Qual parte do pé ele deve usar?",
    opcoes: [
      "A parte interna (de dentro) do pé, abrindo bem o tornozelo",
      "A ponta do dedão (bico), para a bola ir girando",
      "O calcanhar, virando de costas para o gol"
    ],
    correta: 0,
    direcaoGol: "esquerda",
    explicacaoAcerto: "Na gaveta! A parte interna do pé tem uma área maior de contato com a bola, garantindo controle e precisão no canto.",
    explicacaoErro: "Quase! Chutar de bico ou calcanhar tira o controle da direção. Para ter precisão no pênalti, use a parte interna (de dentro) do pé."
  },
  {
    nivel: "Cobrança 2 • Nível Fácil",
    pergunta: "Antes de tocar na bola, onde Adolfo deve pisar com o pé de apoio (o pé que não vai chutar)?",
    opcoes: [
      "Bem atrás da bola, apontando para a arquibancada",
      "Ao lado da bola, com a ponta do pé apontada na direção do gol",
      "Em cima da bola para ganhar impulso"
    ],
    correta: 1,
    direcaoGol: "direita",
    explicacaoAcerto: "Golaço! O pé de apoio funciona como uma mira: colocá-lo firme ao lado da bola e apontado para o alvo dá equilíbrio e direção.",
    explicacaoErro: "A bola subiu demais! Se o pé de apoio ficar muito atrás da bola, o corpo inclina para trás e o chute vai por cima do travessão."
  },
  {
    nivel: "Cobrança 3 • Nível Médio",
    pergunta: "O goleiro é muito alto e chega rápido nos cantos. Adolfo decide bater um chute forte e firme. Qual parte do pé dá mais potência?",
    opcoes: [
      "A sola da chuteira, empurrando a bola",
      "O peito do pé (região do cadarço), mantendo o tornozelo firme",
      "A parte de fora do mindinho, bem devagar"
    ],
    correta: 1,
    direcaoGol: "esquerda",
    explicacaoAcerto: "Bomba no ângulo! O peito do pé (onde fica o cadarço) transfere toda a força da perna para o centro da bola com velocidade.",
    explicacaoErro: "Faltou força e o goleiro chegou! Para bater firme e potente, usamos o peito do pé (região do cadarço) com o tornozelo travado."
  },
  {
    nivel: "Cobrança 4 • Nível Médio",
    pergunta: "Para a bola não subir e ir por cima do travessão na hora de um chute forte, como deve ficar o tronco (o corpo) de Adolfo?",
    opcoes: [
      "Inclinado para trás, olhando para o céu",
      "Totalmente reto e duro, sem mexer os braços",
      "Levemente inclinado para frente, sobre a bola no momento do impacto"
    ],
    correta: 2,
    direcaoGol: "direita",
    explicacaoAcerto: "Perfeito! Inclinar o tronco