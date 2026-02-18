// data/hints.js — Dicas por carta (fácil de expandir)
// Como adicionar depois:
// addHints(HINTS_BY_SUSPECT, "01", ["NOVA DICA 1", "NOVA DICA 2"])
// addHints(HINTS_BY_WEAPON,  "11", ["..."])
// addHints(HINTS_BY_LOCATION,"27", ["..."])

// Helpers
function ensureArr(map, id){
  if (!map[id]) map[id] = [];
  if (!Array.isArray(map[id])) map[id] = [String(map[id])];
}
function addHints(map, id, hints){
  ensureArr(map, id);
  map[id].push(...hints);
}
function normalize(map){
  Object.keys(map).forEach(id => ensureArr(map, id));
  return map;
}

// =====================
// SUSPEITOS (01–08)
// =====================
window.HINTS_BY_SUSPECT = normalize({
  "01": [ // Advogado Sr Marinho (suas 10)
    "TESTEMUNHA: Ele falou bonito demais pra uma situação feia — como se já tivesse ensaiado a defesa.",
    "RELATO: Quando perguntaram ‘onde você estava?’, veio uma resposta longa… e nenhuma parte soou espontânea.",
    "BOATO: Quem domina palavras costuma tentar dominar versões. E hoje tinha versão demais circulando.",
    "PAPEL: Tinha marcas de dedo em papel que ninguém deveria ter tocado — e alguém fingiu que era normal.",
    "SUSSURRO: ‘Isso não prova nada’ saiu rápido. Rápido demais pra quem é inocente.",
    "OBS.: Ele não ficou nervoso com o crime… ficou nervoso com o relógio.",
    "DETALHE: Sempre que um nome era citado, ele reorganizava a história como quem reorganiza frases.",
    "RELATO: Ele tentou transformar dúvida em certeza com um tom de autoridade mansa.",
    "BOATO: Dizem que ele ofereceu ajuda antes mesmo de pedirem — ajuda pode ser controle.",
    "ANOTAÇÃO: Um argumento perfeito pode ser só uma máscara muito bem passada."
  ],

  "02": [ // Chef de Cozinha (suas 10)
    "TESTEMUNHA: As mãos dele estavam limpas demais pro lugar onde estava — como se tivesse lavado na pressa certa.",
    "RELATO: Ele conhece rotas e horários como quem conhece fogão e faca: no automático.",
    "BOATO: Dizem que ele sumiu por minutos e voltou com ‘desculpa’ pronta.",
    "DETALHE: Cheiro de tempero forte pode esconder outra coisa. E alguém parecia contar com isso.",
    "OBS.: Quando falaram de barulho, ele sorriu — como quem já sabia que ninguém escutaria nada.",
    "RELATO: Ele evitou um canto específico, como se aquele canto guardasse um segredo quente.",
    "ANOTAÇÃO: Quem domina rotina domina oportunidades.",
    "TESTEMUNHA: Ele ficou irritado quando mexeram em objetos — como se não quisesse bagunça na cena.",
    "BOATO: O crime parece ter sido feito com precisão, não com raiva.",
    "DETALHE: Às vezes o culpado é só alguém que sabe ‘como fazer rápido’."
  ],

  "03": [ // Coveiro Sérgio Soturno (suas 10)
    "TESTEMUNHA: Ele não se assustou com a notícia… só ficou mais quieto.",
    "RELATO: Tem gente que conhece o silêncio por dentro. E hoje alguém parecia confortável nele.",
    "BOATO: Dizem que ele sabe onde ninguém procura — e isso é perigoso quando algo precisa sumir.",
    "DETALHE: Quando falaram em ‘fim’, ele não fez pergunta nenhuma. Como se já soubesse o caminho.",
    "OBS.: A calma dele era pesada, não era paz.",
    "RELATO: Ele evitou explicar — e quem evita explicar às vezes evita se entregar.",
    "ANOTAÇÃO: O medo apareceu nos outros. Nele, apareceu só uma certeza fria.",
    "TESTEMUNHA: Uma frase curta: ‘isso acontece’. Curta demais.",
    "BOATO: Alguns chamam de experiência. Outros chamam de intimidade com o pior.",
    "DETALHE: O culpado pode ser quem não teme a escuridão."
  ],

  "04": [ // Dançarina Srta Rosa (suas 10)
    "TESTEMUNHA: Ela sorriu na hora errada — aquele sorriso que tenta distrair a culpa.",
    "RELATO: Ela se moveu como se o lugar fosse palco, e palco é ótimo pra esconder intenções.",
    "BOATO: Dizem que ela some e volta no tempo perfeito, sempre com um ‘ah, eu estava ali’.",
    "DETALHE: A distração foi parte do método. Alguém queria olhos em qualquer coisa… menos no essencial.",
    "OBS.: Quem é carismático pode guiar a sala sem ninguém perceber.",
    "RELATO: Quando a conversa apertou, ela mudou o ritmo — e todo mundo seguiu.",
    "ANOTAÇÃO: A melhor cortina de fumaça é um brilho bonito.",
    "TESTEMUNHA: Ela desviou perguntas com delicadeza, como dança: sem choque, sem rastro.",
    "BOATO: A história dela veio fluida demais. Fluidez às vezes é ensaio.",
    "DETALHE: Hoje, alguém usou charme como álibi."
  ],

  "05": [ // Florista Dona Branca (suas 10)
    "TESTEMUNHA: Um perfume doce ficou no ar… e alguém parecia contar com isso pra confundir memórias.",
    "RELATO: Ela fala com gentileza, mas protege detalhes como quem protege espinhos.",
    "BOATO: Dizem que ela estava calma demais para o tipo de notícia que quebra a noite.",
    "DETALHE: Pétalas no chão não provam nada… mas indicam passagem recente de alguém ‘cuidadoso’.",
    "OBS.: A delicadeza pode ser máscara tão boa quanto uma ameaça.",
    "RELATO: Quando pressionaram, ela respondeu com frases curtas e bonitas — sem conteúdo.",
    "ANOTAÇÃO: Quem mexe com arranjos sabe esconder coisas no meio do que é ‘decorativo’.",
    "TESTEMUNHA: Ela evitou olhar para um objeto específico, como se fosse algo pessoal.",
    "BOATO: A versão dela parecia preparada pra ser aceita sem discussão.",
    "DETALHE: Às vezes, a culpa vem embrulhada em seda."
  ],

  "06": [ // Médica Dona Violeta (suas 10)
    "TESTEMUNHA: Ela observou reações como quem observa sintomas — silenciosa, anotando tudo com os olhos.",
    "RELATO: Quando falaram de causa, ela já tinha hipótese pronta. Pronta demais.",
    "BOATO: Dizem que ela explicou possibilidades antes mesmo de alguém perguntar.",
    "DETALHE: Quem entende o corpo entende também como ele falha sem barulho.",
    "OBS.: A calma dela parecia treino, não tranquilidade.",
    "RELATO: Ela se incomodou quando tocaram no assunto ‘tempo’. Tempo denuncia procedimento.",
    "ANOTAÇÃO: Um crime pode parecer acidente quando alguém sabe fazer parecer.",
    "TESTEMUNHA: Ela foi a primeira a dizer ‘pode ter sido natural’. Natural demais.",
    "BOATO: O culpado pode ter usado conhecimento como luva.",
    "DETALHE: Hoje, a verdade pode estar escondida numa explicação técnica."
  ],

  "07": [ // Mordomo James (suas 10)
    "TESTEMUNHA: Ele conhece portas e horários como quem conhece a própria respiração.",
    "RELATO: Ele apareceu no momento certo pra ‘ajudar’, e ajuda às vezes é controle da cena.",
    "BOATO: Dizem que ele some pelos corredores sem ninguém notar — e isso é uma vantagem enorme.",
    "DETALHE: Quem tem chave não precisa arrombar. Quem não arromba, não deixa marca.",
    "OBS.: A presença dele é invisível até você precisar lembrar que ele estava lá.",
    "RELATO: Ele respondeu sem emoção — e emoção às vezes é o que falta quando a culpa já foi resolvida.",
    "ANOTAÇÃO: O culpado mais perigoso é o que parece parte do mobiliário.",
    "TESTEMUNHA: Ele desviou um olhar rápido para a saída quando perguntaram ‘e depois?’",
    "BOATO: A rotina dele pode ser o melhor disfarce.",
    "DETALHE: Hoje, alguém usou acesso como arma."
  ],

  "08": [ // Sargento Bigode (suas 10)
    "TESTEMUNHA: Ele tentou comandar a conversa como se fosse investigação oficial — e isso pode ser máscara.",
    "RELATO: Quem quer organizar o caos pode estar tentando decidir o que entra e o que sai da história.",
    "BOATO: Dizem que ele ficou mais irritado com dúvidas do que com o crime.",
    "DETALHE: Autoridade é ótima pra encerrar perguntas cedo demais.",
    "OBS.: Ele olha o grupo como patrulha, não como gente. Frio demais.",
    "RELATO: Ele perguntou ‘quem estava onde’ como interrogatório — e conduziu respostas.",
    "ANOTAÇÃO: Quem controla o ritmo controla o foco.",
    "TESTEMUNHA: Ele ficou calmo quando citaram barulho… como se já soubesse que isso não importava.",
    "BOATO: A pressa dele era seletiva: pressa pra concluir, não pra entender.",
    "DETALHE: Hoje, alguém usou disciplina como disfarce."
  ]
});

// +10 novas por suspeito
addHints(window.HINTS_BY_SUSPECT, "01", [
  "RELATO: Ele corrigiu um detalhe que ninguém tinha dito — como se tivesse visto de perto.",
  "OBS.: Quando alguém chorou, ele olhou pros lados antes de olhar pra pessoa.",
  "ANOTAÇÃO: Ele se apegou a tecnicalidades, não à tragédia.",
  "BOATO: Dizem que ele sugeriu um culpado cedo demais, pra ‘ajudar’.",
  "DETALHE: A forma como ele escolheu palavras parecia mais importante que a verdade.",
  "TESTEMUNHA: Ele repetiu a mesma frase duas vezes, igualzinho. Ensaiado.",
  "RELATO: Ele evitou responder “sim” ou “não”. Só explicações.",
  "OBS.: Ele se incomodou quando alguém falou em “prova”.",
  "ANOTAÇÃO: Quem tenta controlar o enredo geralmente teme o final.",
  "BOATO: Hoje parecia que alguém estava defendendo uma versão — não uma pessoa."
]);

addHints(window.HINTS_BY_SUSPECT, "02", [
  "OBS.: Ele conferiu as mãos mais de uma vez, como se procurasse algo que já saiu.",
  "RELATO: A primeira reação dele foi calcular, não se assustar.",
  "DETALHE: Ele notou um utensílio fora do lugar rápido demais.",
  "BOATO: Dizem que ele conhece atalhos onde ninguém passa.",
  "TESTEMUNHA: Ele ficou atento ao que era servido, como se o conteúdo importasse demais.",
  "ANOTAÇÃO: Quem lida com cortes e tempos sabe fazer tudo “no ponto”.",
  "RELATO: Ele tentou levar a conversa pra rotina, como se nada tivesse acontecido.",
  "OBS.: Quando falaram em “mistura”, ele piscou e mudou de assunto.",
  "DETALHE: O culpado pode ser quem sabe esconder no comum.",
  "BOATO: Hoje alguém usou habilidade como desculpa."
]);

addHints(window.HINTS_BY_SUSPECT, "03", [
  "OBS.: Ele evitou luz direta, preferiu ficar nos cantos.",
  "RELATO: Ele conhecia detalhes do lugar que ninguém comentou.",
  "TESTEMUNHA: Ele não perguntou “quem foi?”, perguntou “onde foi?”.",
  "BOATO: Dizem que ele sabe guardar segredos como quem guarda terra.",
  "DETALHE: O jeito que ele caminha não faz som — isso ajuda mais do que parece.",
  "ANOTAÇÃO: Quem convive com despedidas perde o susto.",
  "RELATO: Ele se calou quando mencionaram “sumir com algo”.",
  "OBS.: Ele observou o chão como quem lê pistas nele.",
  "BOATO: Hoje alguém estava confortável com o fim.",
  "DETALHE: A frieza dele não era defesa — era hábito."
]);

addHints(window.HINTS_BY_SUSPECT, "04", [
  "OBS.: Ela escolheu onde ficar como se escolhesse marcação no palco.",
  "RELATO: Quando a atenção foi pra outro lado, ela respirou aliviada.",
  "TESTEMUNHA: Ela tocou no próprio cabelo sempre que mentia — parecia tic.",
  "BOATO: Dizem que ela sabe prender olhares e soltar suspeitas.",
  "DETALHE: A história dela tinha ritmo, mas faltava peso.",
  "ANOTAÇÃO: Quem domina cena domina também distração.",
  "RELATO: Ela fez piada num momento ruim, só pra quebrar tensão.",
  "OBS.: Ela evitou ficar sozinha com alguém específico.",
  "BOATO: Hoje alguém dançou em volta da verdade.",
  "DETALHE: Um sorriso pode ser cortina — e cortina esconde."
]);

addHints(window.HINTS_BY_SUSPECT, "05", [
  "OBS.: Ela segurou a bolsa/objeto perto demais, como se escondesse algo pequeno.",
  "RELATO: Ela tentou “adoçar” a conversa quando o assunto ficou sério.",
  "TESTEMUNHA: Ela cheirou as mãos discretamente, como se conferisse perfume.",
  "BOATO: Dizem que ela trocou de lugar rápido quando alguém chegou perto.",
  "DETALHE: A delicadeza dela aparece mais quando quer evitar perguntas.",
  "ANOTAÇÃO: Quem sabe arrumar também sabe disfarçar.",
  "RELATO: Ela elogiou alguém do nada — elogio pode ser distração.",
  "OBS.: Ela ficou tensa quando citaram “rastros”.",
  "BOATO: Hoje alguém quis parecer inofensivo demais.",
  "DETALHE: O que é bonito também pode cortar."
]);

addHints(window.HINTS_BY_SUSPECT, "06", [
  "OBS.: Ela mediu as pessoas com o olhar, como quem escolhe hipótese.",
  "RELATO: Ela descreveu sintomas com detalhe… antes de alguém explicar.",
  "TESTEMUNHA: Ela pediu “calma” num tom que parecia comando.",
  "BOATO: Dizem que ela carregava algo pequeno no bolso/bolsa com cuidado.",
  "DETALHE: Quem conhece doses conhece limites.",
  "ANOTAÇÃO: O culpado pode estar por trás de uma explicação “perfeita”.",
  "RELATO: Ela ficou desconfortável quando citaram “tempo de efeito”.",
  "OBS.: Ela tentou encerrar conversa com termos técnicos.",
  "BOATO: Hoje alguém usou conhecimento pra parecer autoridade.",
  "DETALHE: Se parece acidente, pergunte quem entende de acidentes."
]);

addHints(window.HINTS_BY_SUSPECT, "07", [
  "OBS.: Ele apareceu rápido demais quando chamaram por ajuda.",
  "RELATO: Ele sabia exatamente onde cada pessoa esteve, sem perguntar.",
  "TESTEMUNHA: Ele evitou câmera/espelho como se não quisesse ser registrado.",
  "BOATO: Dizem que ele conhece rotinas alheias melhor que as próprias.",
  "DETALHE: Chaves fazem barulho. Ele andava como se não tivesse nenhuma.",
  "ANOTAÇÃO: Acesso é poder. E poder é tentação.",
  "RELATO: Ele sugeriu ‘fechar a porta’ mais de uma vez.",
  "OBS.: Ele ficou tenso quando falaram em “registro”.",
  "BOATO: Hoje alguém agiu como parte da casa.",
  "DETALHE: Quem controla passagem controla história."
]);

addHints(window.HINTS_BY_SUSPECT, "08", [
  "OBS.: Ele testou limites: quem obedece, quem discute, quem cala.",
  "RELATO: Ele puxou uma pessoa pra conversa e isolou outra.",
  "TESTEMUNHA: Ele ficou irritado quando alguém discordou dele.",
  "BOATO: Dizem que ele tentou ‘reconstituir’ tudo do jeito dele.",
  "DETALHE: Ele olhava as saídas como quem planeja rota.",
  "ANOTAÇÃO: Autoridade falsa quer plateia, não verdade.",
  "RELATO: Ele perguntou mais do que respondeu.",
  "OBS.: Ele queria decidir quando o assunto acabava.",
  "BOATO: Hoje alguém usou comando como cortina.",
  "DETALHE: Quem controla perguntas controla culpados."
]);

// =====================
// ARMAS (09–16)
// =====================
window.HINTS_BY_WEAPON = normalize({
  "09": [
    "TESTEMUNHA: Teve um cheiro estranho por um instante… e depois todo mundo duvidou do próprio nariz.",
    "RELATO: A confusão foi no corpo antes de ser na cabeça. Como se alguém quisesse ‘desorientar’ a cena.",
    "BOATO: Dizem que o culpado contou com efeito invisível — sem barulho, sem gesto dramático.",
    "DETALHE: Quando a pista mexe com sentidos, a verdade vira discussão, não prova.",
    "OBS.: Ninguém viu o golpe. Só viram a consequência.",
    "RELATO: Alguém abriu algo rápido e fechou — como quem não quer deixar o ar falar.",
    "ANOTAÇÃO: O método ideal é o que faz parecer ‘mal-estar’.",
    "TESTEMUNHA: Um segundo de ardor no ar e pronto: a sala inteira ficou vulnerável.",
    "BOATO: O culpado preferiu que parecesse acidente.",
    "DETALHE: Hoje, o crime pode ter sido um sussurro químico."
  ],
  "10": [
    "TESTEMUNHA: Um estrondo não é só barulho — é pânico organizado. Alguém quis fim rápido.",
    "RELATO: Depois do impacto, veio o silêncio. Silêncio de quem sabia que ia acontecer.",
    "BOATO: Dizem que o culpado contou com o choque pra ninguém pensar direito.",
    "DETALHE: Barulho grande cria álibi: ‘eu não ouvi direito’, ‘foi longe’, ‘não sei’.",
    "OBS.: O método intimida. E intimidação também é controle.",
    "RELATO: Quem age assim não quer discussão; quer encerramento.",
    "ANOTAÇÃO: Um segundo resolve tudo… e apaga perguntas.",
    "TESTEMUNHA: Todo mundo olhou pro lado errado por reflexo.",
    "BOATO: O culpado apostou que o barulho viraria a história inteira.",
    "DETALHE: Hoje, o crime parece ter sido um ponto final."
  ],
  "11": [
    "TESTEMUNHA: Não houve grito longo… só um corte no ar e depois normalidade falsa.",
    "RELATO: Isso exige proximidade. E proximidade exige confiança ou surpresa.",
    "BOATO: Dizem que foi rápido, como gesto treinado.",
    "DETALHE: Pouco barulho, pouco tempo, muita intenção.",
    "OBS.: Quem escolhe isso não quer chamar atenção — quer certeza.",
    "RELATO: Um movimento curto pode ser o começo e o fim.",
    "ANOTAÇÃO: A arma mais antiga ainda funciona porque depende de coragem.",
    "TESTEMUNHA: Vi alguém limpar a mão como se tivesse tocado em metal frio.",
    "BOATO: O culpado precisou chegar perto… e sair sem ser notado.",
    "DETALHE: Hoje, a verdade pode estar na distância que alguém conseguiu atravessar."
  ],
  "12": [
    "TESTEMUNHA: Teve terra onde não devia. E ninguém soube explicar.",
    "RELATO: Isso tem peso de ‘trabalho’, não de impulso. Como se fosse tarefa.",
    "BOATO: Dizem que o culpado usou algo comum pra parecer acaso.",
    "DETALHE: Um instrumento assim deixa marcas no chão — e o chão não mente.",
    "OBS.: Precisa de espaço. Precisa de oportunidade.",
    "RELATO: O barulho pode ser disfarçado como rotina do lugar.",
    "ANOTAÇÃO: Quando a ferramenta parece normal, o crime se esconde na normalidade.",
    "TESTEMUNHA: Um som seco, de metal batendo em algo denso… e depois pressa contida.",
    "BOATO: Quem escolheu isso queria improviso com cara de rotina.",
    "DETALHE: Hoje, a pista pode estar no pó que alguém tentou tirar do sapato."
  ],
  "13": [
    "TESTEMUNHA: Um barulho curto de metal… como se algo tivesse sido forçado só uma vez.",
    "RELATO: Não é só arma — é acesso. E acesso muda tudo.",
    "BOATO: Dizem que a cena foi ‘aberta’ à força e depois fingiram que sempre esteve assim.",
    "DETALHE: Quando alguém abre caminho, ele abre também a chance de desaparecer.",
    "OBS.: O método deixa marca, mas a marca pode ser confundida com bagunça antiga.",
    "RELATO: Um estalo seco pode ter sido o momento exato.",
    "ANOTAÇÃO: Ferramenta de arrombamento também serve para controlar portas e histórias.",
    "TESTEMUNHA: Vi alguém com as mãos tensas, como quem usou força recente.",
    "BOATO: O culpado não precisou de chave — só de decisão.",
    "DETALHE: Hoje, a pista pode estar na fechadura que ninguém quer olhar."
  ],
  "14": [
    "TESTEMUNHA: Não foi um ataque distante. Foi perto demais, rápido demais.",
    "RELATO: Isso pede coragem e frieza — e pede que o culpado se misture logo depois.",
    "BOATO: Dizem que a multidão ajudou: um empurra, outro esbarra, e pronto.",
    "DETALHE: A arma desaparece fácil. O efeito, nem tanto.",
    "OBS.: É o tipo de coisa que acontece num piscar de olhos.",
    "RELATO: Alguém podia estar ao lado e ainda assim negar.",
    "ANOTAÇÃO: Proximidade é pista. Quem conseguiu ficar perto?",
    "TESTEMUNHA: Vi alguém esconder a mão como se protegesse algo pequeno.",
    "BOATO: O culpado contou com confusão e contato.",
    "DETALHE: Hoje, a verdade pode estar em quem estava ‘perto demais’."
  ],
  "15": [
    "TESTEMUNHA: Um corte pequeno pode ser mais silencioso que qualquer segredo.",
    "RELATO: Isso parece cotidiano — e justamente por isso passa despercebido.",
    "BOATO: Dizem que foi preciso. Não exigiu força. Exigiu intenção.",
    "DETALHE: Quem usa isso costuma ter mão firme e gesto rápido.",
    "OBS.: A arma se confunde com objeto comum.",
    "RELATO: O culpado pode ter carregado sem parecer ameaça.",
    "ANOTAÇÃO: O perigo às vezes é o que parece ferramenta.",
    "TESTEMUNHA: Vi alguém com um gesto de cortar no ar enquanto falava… nervoso.",
    "BOATO: O crime pode ter sido um detalhe afiado.",
    "DETALHE: Hoje, procure quem tinha acesso a objetos ‘inofensivos’."
  ],
  "16": [
    "TESTEMUNHA: Não houve barulho. Só um tempo estranho entre ‘antes’ e ‘depois’.",
    "RELATO: O efeito atrasado é a melhor cortina: todo mundo procura o momento errado.",
    "BOATO: Dizem que parecia acidente — e essa é a beleza cruel do método.",
    "DETALHE: Quando a causa chega depois, a mentira ganha minutos preciosos.",
    "OBS.: Isso exige preparo. E preparo exige calma.",
    "RELATO: O culpado não precisou ficar perto no final — só no começo.",
    "ANOTAÇÃO: Nem toda arma aparece. Às vezes ela já foi embora quando a culpa chega.",
    "TESTEMUNHA: Vi alguém oferecendo algo com gentileza demais.",
    "BOATO: Hoje, alguém apostou que ninguém conectaria os pontos.",
    "DETALHE: A pista pode estar no que foi dado, não no que foi tirado."
  ]
});

// +10 novas por arma
addHints(window.HINTS_BY_WEAPON, "09", [
  "OBS.: O ar mudou por poucos segundos, como se alguém tivesse aberto um frasco.",
  "RELATO: Alguns reclamaram de ardor nos olhos; outros acharam “coisa da cabeça”.",
  "DETALHE: Quando o método é invisível, a discussão vira a melhor arma do culpado.",
  "BOATO: Dizem que alguém carregava pano/lenço como se já esperasse cheiro forte.",
  "TESTEMUNHA: Um gole de água depois e a pessoa ainda parecia estranha.",
  "ANOTAÇÃO: O que não deixa marca deixa dúvida — e dúvida protege.",
  "RELATO: O culpado não precisa tocar; só precisa expor.",
  "OBS.: Um efeito rápido pode ser só distração pro efeito real depois.",
  "DETALHE: Procure quem não tossiu quando todo mundo tossiu.",
  "BOATO: Hoje o crime pode ter sido “no ar”, não na mão."
]);

addHints(window.HINTS_BY_WEAPON, "10", [
  "OBS.: Depois do estrondo, todo mundo falou ao mesmo tempo — perfeito pra confundir.",
  "RELATO: Alguém ficou parado durante o pânico, como se já tivesse ‘acabado’.",
  "DETALHE: O som grande cria segundos cegos: ninguém vê nada nesses segundos.",
  "BOATO: Dizem que o culpado usou o barulho pra trocar de posição.",
  "TESTEMUNHA: O eco parecia ter vindo de um ponto específico, mas ninguém concorda de onde.",
  "ANOTAÇÃO: Quando o método é definitivo, o culpado aposta na rapidez.",
  "RELATO: Quem escolhe impacto não quer segunda chance.",
  "OBS.: Alguns ficaram surdos por instantes — e isso também é pista.",
  "DETALHE: O álibi favorito aqui é: “eu só corri”.",
  "BOATO: Hoje alguém apostou que o choque faria o resto."
]);

addHints(window.HINTS_BY_WEAPON, "11", [
  "OBS.: A proximidade é parte do plano — alguém precisou se aproximar sem levantar alerta.",
  "RELATO: Um gesto curto, quase íntimo, e tudo mudou.",
  "DETALHE: Quem fez isso sabia onde não faria barulho.",
  "BOATO: Dizem que houve um toque no ombro antes — convite para chegar perto.",
  "TESTEMUNHA: Vi alguém esconder algo comprido e fino rapidamente.",
  "ANOTAÇÃO: Arma silenciosa exige certeza de saída.",
  "RELATO: O culpado precisou de poucos segundos — e de coragem.",
  "OBS.: Procure quem tinha motivo pra estar “bem perto”.",
  "DETALHE: A história costuma esconder o momento do contato.",
  "BOATO: Hoje, a arma pode ter sido a confiança."
]);

addHints(window.HINTS_BY_WEAPON, "12", [
  "OBS.: Um objeto pesado parece normal… até não ser.",
  "RELATO: A força usada foi prática, não emocional.",
  "DETALHE: Terra em lugar limpo é sinal de deslocamento recente.",
  "BOATO: Dizem que alguém arrastou algo por poucos metros.",
  "TESTEMUNHA: Um som de metal raspando no chão e depois silêncio.",
  "ANOTAÇÃO: Ferramenta de trabalho vira arma quando há oportunidade.",
  "RELATO: Quem usou isso não se importou com sujeira — ou já esperava ela.",
  "OBS.: O culpado pode ter saído com pó nas roupas.",
  "DETALHE: Procure marcas no chão que parecem “acidente”.",
  "BOATO: Hoje alguém fez parecer rotina de lugar."
]);

addHints(window.HINTS_BY_WEAPON, "13", [
  "OBS.: Forçar algo deixa tensão no corpo — ombro, pulso, respiração.",
  "RELATO: O acesso foi conquistado, não concedido.",
  "DETALHE: Um trinco torto conta história melhor que boca.",
  "BOATO: Dizem que alguém testou uma porta antes de todos chegarem.",
  "TESTEMUNHA: Vi mãos marcadas, como de quem apertou metal com força.",
  "ANOTAÇÃO: Arrombamento pode ser só encenação pra cobrir outra coisa.",
  "RELATO: Se a porta foi aberta, a pergunta é: por quem e quando?",
  "OBS.: O culpado pode ter criado “bagunça” pra apagar lógica.",
  "DETALHE: Procure arranhões novos em metal velho.",
  "BOATO: Hoje alguém abriu caminho — e abriu tempo."
]);

addHints(window.HINTS_BY_WEAPON, "14", [
  "OBS.: Golpe rápido pede contato — e contato pede coragem de ficar perto.",
  "RELATO: A confusão do ambiente foi parte do plano.",
  "DETALHE: Quem atacou precisou esconder algo pequeno imediatamente depois.",
  "BOATO: Dizem que alguém manteve uma mão fechada o tempo todo.",
  "TESTEMUNHA: Um empurrão parecia brincadeira… mas não era.",
  "ANOTAÇÃO: Arma pequena, efeito grande: perfeito pra negar.",
  "RELATO: O culpado saiu andando normal, como se nada tivesse acontecido.",
  "OBS.: Procure quem ficou “perto demais” sem motivo.",
  "DETALHE: Marcas podem aparecer depois, quando a adrenalina baixa.",
  "BOATO: Hoje, a multidão pode ter sido cúmplice sem saber."
]);

addHints(window.HINTS_BY_WEAPON, "15", [
  "OBS.: Ferramenta comum vira ameaça quando ninguém suspeita dela.",
  "RELATO: Quem carrega isso passa como trabalhador, não como perigo.",
  "DETALHE: O gesto do corte pode ser confundido com “arrumar algo”.",
  "BOATO: Dizem que alguém pediu pra “cortar/ajustar” alguma coisa antes.",
  "TESTEMUNHA: Vi brilho rápido de metal e depois sumiu.",
  "ANOTAÇÃO: A arma certa é a que ninguém chama de arma.",
  "RELATO: Pequeno, preciso, silencioso — padrão de intenção.",
  "OBS.: Procure quem mexeu com objetos de “manutenção”.",
  "DETALHE: Um bolso ou bolsa pode esconder isso sem volume.",
  "BOATO: Hoje a ameaça foi disfarçada de utilidade."
]);

addHints(window.HINTS_BY_WEAPON, "16", [
  "OBS.: O intervalo entre o ato e o efeito é o melhor esconderijo.",
  "RELATO: Alguém pareceu tranquilo demais enquanto o tempo corria.",
  "DETALHE: A pista pode estar no que foi consumido, não no que foi visto.",
  "BOATO: Dizem que o culpado insistiu para alguém “provar” algo.",
  "TESTEMUNHA: Uma gentileza insistente pode ter sido o gesto fatal.",
  "ANOTAÇÃO: O culpado pôde estar longe quando tudo aconteceu.",
  "RELATO: O drama veio depois — e o culpado contou com isso.",
  "OBS.: Quem sabia do atraso não teve pressa, teve paciência.",
  "DETALHE: O álibi perfeito aqui é: “eu nem estava lá na hora”.",
  "BOATO: Hoje o crime pode ter sido um convite disfarçado."
]);

// =====================
// LOCAIS (17–27)
// =====================
window.HINTS_BY_LOCATION = normalize({
  "17": [
    "TESTEMUNHA: Todo mundo finge calma, mas o ar pesa. Segurança demais também é teatro.",
    "RELATO: Câmeras existem, mas pontos cegos também. Alguém sabia disso.",
    "BOATO: Dizem que a fila e o ‘vai e vem’ ajudaram a esconder um gesto curto.",
    "DETALHE: Porta giratória atrasa alguns… e libera outros no tempo certo.",
    "OBS.: Onde há controle, há também brecha calculada.",
    "RELATO: O barulho é baixo, mas a tensão é alta. Perfeito pra distrações silenciosas.",
    "ANOTAÇÃO: A pressa educada é a máscara desse lugar.",
    "TESTEMUNHA: Sussurros sobre dinheiro encobrem qualquer outra conversa.",
    "BOATO: O culpado se misturou como cliente.",
    "DETALHE: Aqui, a prova pode ser quem entrou e saiu “normal”."
  ],
  "18": [
    "TESTEMUNHA: Música alta. Luz cortando. Um empurrão vira desculpa perfeita.",
    "RELATO: A confusão é conveniente. Quem quer sumir escolhe confusão.",
    "BOATO: Dizem que o crime aconteceu no meio do brilho — e ninguém percebeu por achar que era dança.",
    "DETALHE: Corpo esbarra em corpo, e a verdade cai no chão sem barulho.",
    "OBS.: O lugar cria álibis em segundos.",
    "RELATO: O som engole palavras. E engole também pedidos de socorro.",
    "ANOTAÇÃO: Aqui, o culpado não precisa correr; só precisa dançar com a multidão.",
    "TESTEMUNHA: Vi alguém sorrir com a música… mas o sorriso não era de festa.",
    "BOATO: O culpado esperou a batida certa.",
    "DETALHE: O momento perfeito é quando ninguém consegue prestar atenção."
  ],
  "19": [
    "TESTEMUNHA: Frio. Pedra. Um silêncio que parece acusar qualquer passo.",
    "RELATO: Lugar de poucas testemunhas. E poucas testemunhas viram muito pouco.",
    "BOATO: Dizem que alguém já conhecia os caminhos entre sombras.",
    "DETALHE: Folhas secas denunciam o que o escuro tenta esconder.",
    "OBS.: Aqui, o tempo parece mais lento — e isso dá coragem a quem não devia ter.",
    "RELATO: Um nome gravado pode ser motivo. Motivo antigo.",
    "ANOTAÇÃO: Onde tudo é fim, alguém pode achar que consequência não existe.",
    "TESTEMUNHA: Passos lentos… e depois um silêncio maior ainda.",
    "BOATO: O culpado queria que o lugar fizesse o trabalho de esconder.",
    "DETALHE: Procure o caminho que evita luz."
  ],
  "20": [
    "TESTEMUNHA: Apitos e ecos. Passos apressados viram rotina — perfeito pra sumir.",
    "RELATO: Chegada e saída: o melhor álibi é o movimento constante.",
    "BOATO: Dizem que alguém contou com anúncios distantes pra mascarar um som curto.",
    "DETALHE: Uma porta batendo sem vento pode ser mais que distração.",
    "OBS.: Todo mundo tem pressa aqui. Pressa é capa.",
    "RELATO: Quem conhece horários conhece também os minutos cegos.",
    "ANOTAÇÃO: A verdade se perde quando todo mundo ‘tá indo pra algum lugar’.",
    "TESTEMUNHA: Vi alguém mudar de plataforma como quem muda de história.",
    "BOATO: O culpado escolheu o momento do anúncio.",
    "DETALHE: Aqui, a pista pode ser a direção que ninguém conferiu."
  ],
  "21": [
    "TESTEMUNHA: Cheiro doce. Vidro. Umidade. Parece paz… mas paz também é disfarce.",
    "RELATO: Tesouras e embalagens fazem ruídos pequenos que escondem ruídos piores.",
    "BOATO: Dizem que pétalas no chão viraram caminho sem querer.",
    "DETALHE: Vitrine mostra tudo… menos o canto onde ninguém olha.",
    "OBS.: Beleza demais pode ser cenário montado.",
    "RELATO: Quem entra aqui costuma ficar ‘encantado’. Encanto distrai.",
    "ANOTAÇÃO: Perfumes confundem memória. Memória confusa ajuda culpado.",
    "TESTEMUNHA: Vi alguém limpando as mãos como se tivesse mexido em algo que não era planta.",
    "BOATO: O culpado queria parecer delicado.",
    "DETALHE: Aqui, o silêncio não é vazio — é escolhido."
  ],
  "22": [
    "TESTEMUNHA: Cheiro de álcool. Portas leves. Gente com pressa contida.",
    "RELATO: Corredores criam sumiços rápidos. Um virar de esquina e pronto.",
    "BOATO: Dizem que luvas e máscaras viraram desculpa para não reconhecer ninguém.",
    "DETALHE: Aqui, qualquer mal-estar parece “normal”. E isso é perigoso.",
    "OBS.: A rotina protege o culpado: tudo parece procedimento.",
    "RELATO: Um carrinho passando pode cobrir um som curto.",
    "ANOTAÇÃO: Onde há urgência, há distração.",
    "TESTEMUNHA: Uma respiração presa… como se o ar também fosse prova.",
    "BOATO: O culpado contou com o caos silencioso.",
    "DETALHE: Aqui, a pista pode ser quem estava calmo demais."
  ],
  "23": [
    "TESTEMUNHA: Corredores longos. Portas iguais. Tapetes que engolem som.",
    "RELATO: Cartões de acesso deixam rastros invisíveis — alguém sabia usar isso.",
    "BOATO: Dizem que o culpado trocou de andar como quem troca de versão.",
    "DETALHE: Câmeras existem, mas o ângulo nunca é perfeito.",
    "OBS.: Aqui, “hóspede” é identidade fácil de vestir.",
    "RELATO: Elevador cria encontros curtos e separações rápidas.",
    "ANOTAÇÃO: Um lugar de passagem é ótimo para desaparecer sem explicar.",
    "TESTEMUNHA: Vi alguém parar numa porta e voltar como se tivesse errado — mas não errou.",
    "BOATO: O culpado esperou o corredor ficar vazio.",
    "DETALHE: Aqui, o detalhe é quem tinha acesso sem chamar atenção."
  ],
  "24": [
    "TESTEMUNHA: Luxo e silêncio. Portas pesadas. Tapetes que abafam confissão.",
    "RELATO: Cantos cegos demais para um lugar grande. Alguém escolheu um deles.",
    "BOATO: Dizem que quadros pareciam observar — e ninguém queria ser observado.",
    "DETALHE: Escadas longas separam testemunhas. O culpado gosta disso.",
    "OBS.: Aqui, a casa ‘engole’ som e engole também suspeita.",
    "RELATO: Quem se sente dono do lugar anda sem pressa — e isso não chama atenção.",
    "ANOTAÇÃO: Grandeza cria distância. Distância cria oportunidade.",
    "TESTEMUNHA: Vi uma porta fechar devagar demais, como se alguém quisesse zero ruído.",
    "BOATO: O culpado conhecia a casa por dentro.",
    "DETALHE: Aqui, o segredo mora em portas que parecem decorativas."
  ],
  "25": [
    "TESTEMUNHA: Luz de poste, bancos e passos ecoando. Público demais pra confiar.",
    "RELATO: Todo mundo vê… mas ninguém vê o suficiente.",
    "BOATO: Dizem que o culpado se misturou como se fosse só mais um.",
    "DETALHE: Um movimento simples vira invisível quando tem gente demais.",
    "OBS.: Onde ninguém é de ninguém, culpa também se dilui.",
    "RELATO: O barulho aberto encobre conversas baixas e gestos curtos.",
    "ANOTAÇÃO: Lugar público cria o melhor tipo de dúvida: ‘foi quem?’",
    "TESTEMUNHA: Vi alguém olhar as saídas antes de agir, como quem já tinha rota.",
    "BOATO: O culpado contou com a rotina da praça.",
    "DETALHE: Aqui, a pista pode ser quem tentou parecer turista."
  ],
  "26": [
    "TESTEMUNHA: Corredores frios, papéis e poder. Gente que finge não ver.",
    "RELATO: Salas fechadas guardam segredos melhor que pessoas.",
    "BOATO: Dizem que alguém usou autoridade como escudo.",
    "DETALHE: Carimbos e assinaturas podem criar álibis falsos.",
    "OBS.: Onde há hierarquia, perguntas morrem cedo.",
    "RELATO: Um “eu estava resolvendo isso” vira desculpa perfeita.",
    "ANOTAÇÃO: Poder não grita — ele manda calar.",
    "TESTEMUNHA: Vi alguém sair de uma sala com pressa contida, segurando algo junto ao peito.",
    "BOATO: O culpado quis que tudo parecesse ‘burocracia’.",
    "DETALHE: Aqui, a pista pode ser quem sabia quais portas abrem."
  ],
  "27": [
    "TESTEMUNHA: Talheres e vozes. Pratos batendo. Sussurros entre mesas.",
    "RELATO: Movimento encenado: todo mundo ocupado, ninguém atento.",
    "BOATO: Dizem que alguém usou a cozinha como corredor secreto.",
    "DETALHE: Luz quente e barulho de salão abafam coisas pequenas.",
    "OBS.: Onde há serviço, há desculpa: ‘eu só estava trabalhando’.",
    "RELATO: Um copo na mão é álibi, e também é oportunidade.",
    "ANOTAÇÃO: Aqui, o culpado pode se esconder atrás da rotina do atendimento.",
    "TESTEMUNHA: Vi alguém entrar e sair rápido, como se só tivesse ido ‘pegar algo’.",
    "BOATO: O culpado esperou o pico de barulho.",
    "DETALHE: Neste lugar, o crime pode parecer só mais um acidente de noite cheia."
  ]
});

// +10 novas por local
addHints(window.HINTS_BY_LOCATION, "17", [
  "OBS.: Onde tem câmera, alguém procura ângulo — e acha.",
  "RELATO: O barulho baixo faz qualquer cochicho parecer importante.",
  "DETALHE: O fluxo controlado cria um “minuto morto” perfeito.",
  "BOATO: Dizem que alguém ficou perto das entradas como quem espera oportunidade.",
  "TESTEMUNHA: Uma porta travou por segundos… e depois voltou ao normal.",
  "ANOTAÇÃO: Segurança aparente pode ser só aparência.",
  "RELATO: Quem conhece o lugar sabe onde ninguém olha.",
  "OBS.: O culpado pode ter usado fila como parede.",
  "DETALHE: Um crachá falso passa fácil quando todos estão tensos.",
  "BOATO: Aqui, o silêncio é tão suspeito quanto o barulho."
]);

addHints(window.HINTS_BY_LOCATION, "18", [
  "OBS.: Luz piscando cria “quadros” de visão — e entre quadros ninguém prova nada.",
  "RELATO: A batida cobre passos e palavras.",
  "DETALHE: Um empurrão pode ser ataque, pode ser fuga.",
  "BOATO: Dizem que alguém saiu no meio da música alta sem ser notado.",
  "TESTEMUNHA: Um cheiro de bebida/perfume confundiu lembranças.",
  "ANOTAÇÃO: O caos é álibi pronto.",
  "RELATO: Quem quer sumir só precisa se misturar.",
  "OBS.: O culpado pode ter escolhido o refrão mais alto.",
  "DETALHE: O verdadeiro momento pode ter sido “entre uma luz e outra”.",
  "BOATO: Hoje, ninguém sabe se viu de verdade ou se imaginou."
]);

addHints(window.HINTS_BY_LOCATION, "19", [
  "OBS.: O silêncio amplifica qualquer passo… mas também apaga quem pisa leve.",
  "RELATO: A escuridão faz o lugar trabalhar pro culpado.",
  "DETALHE: Folhas quebradas contam direção.",
  "BOATO: Dizem que alguém sabia atalhos entre túmulos.",
  "TESTEMUNHA: Uma sombra ficou parada tempo demais.",
  "ANOTAÇÃO: Aqui, o medo cala mais que testemunha.",
  "RELATO: Uma lanterna pode ser a diferença entre prova e boato.",
  "OBS.: O culpado pode ter esperado a hora mais vazia.",
  "DETALHE: O chão entrega quem tentou correr.",
  "BOATO: Hoje, o lugar parece cúmplice."
]);

addHints(window.HINTS_BY_LOCATION, "20", [
  "OBS.: O anúncio certo vira cortina perfeita.",
  "RELATO: Movimento constante cria desculpa constante.",
  "DETALHE: Troca de plataforma é troca de rastro.",
  "BOATO: Dizem que alguém entrou e saiu sem validar nada.",
  "TESTEMUNHA: Uma mala/bolsa grande pode esconder mais do que roupa.",
  "ANOTAÇÃO: Aqui, todo mundo tem destino — ótimo pra desaparecer.",
  "RELATO: Quem conhece horários conhece vazios.",
  "OBS.: O culpado pode ter usado a multidão como parede.",
  "DETALHE: Um bilhete pode ser prova… ou encenação.",
  "BOATO: Hoje, o crime pode ter viajado junto."
]);

addHints(window.HINTS_BY_LOCATION, "21", [
  "OBS.: Perfume forte bagunça lembrança.",
  "RELATO: O brilho das vitrines distrai do canto escuro.",
  "DETALHE: Tesouras e caixas fazem barulho “normal”.",
  "BOATO: Dizem que alguém ficou tempo demais perto do estoque.",
  "TESTEMUNHA: Um rastro de pétalas parece acidente… mas pode ser caminho.",
  "ANOTAÇÃO: O bonito disfarça o perigoso.",
  "RELATO: Quem trabalha com cuidado também sabe esconder com cuidado.",
  "OBS.: O culpado pode ter usado “arrumar” como desculpa.",
  "DETALHE: Água e vidro limpam rastros rápido.",
  "BOATO: Hoje, delicadeza virou máscara."
]);

addHints(window.HINTS_BY_LOCATION, "22", [
  "OBS.: Máscaras escondem rostos e intenções.",
  "RELATO: Corredor longo vira labirinto quando há pressa.",
  "DETALHE: Procedimento é desculpa; rotina é escudo.",
  "BOATO: Dizem que alguém usou jaleco/luvas como disfarce.",
  "TESTEMUNHA: Uma porta abriu e fechou com leveza demais.",
  "ANOTAÇÃO: Aqui, “normal” pode ser o mais perigoso.",
  "RELATO: Um carrinho passando cria segundos cegos.",
  "OBS.: O culpado pode ter se escondido atrás da urgência.",
  "DETALHE: Quem estava calmo demais se destaca.",
  "BOATO: Hoje, o caos foi silencioso."
]);

addHints(window.HINTS_BY_LOCATION, "23", [
  "OBS.: Tapete engole som; corredor engole história.",
  "RELATO: Um cartão abre portas e também fecha perguntas.",
  "DETALHE: Elevador cria encontros rápidos e álibis rápidos.",
  "BOATO: Dizem que alguém trocou de andar pra confundir.",
  "TESTEMUNHA: Uma porta fechou sem bater — treino ou cuidado?",
  "ANOTAÇÃO: Lugar de passagem, culpa de passagem.",
  "RELATO: Quem parece hóspede não precisa explicar presença.",
  "OBS.: O culpado pode ter esperado o corredor vazio.",
  "DETALHE: Câmera existe, mas sempre falta um ângulo.",
  "BOATO: Hoje, uma chave invisível abriu o problema."
]);

addHints(window.HINTS_BY_LOCATION, "24", [
  "OBS.: Grande e silenciosa: a casa esconde por você.",
  "RELATO: Muitas portas = muitas histórias possíveis.",
  "DETALHE: Tapete não guarda só poeira; guarda passos.",
  "BOATO: Dizem que alguém conhecia cantos cegos.",
  "TESTEMUNHA: Uma escada longa separa testemunhas sem esforço.",
  "ANOTAÇÃO: Quem manda no lugar manda no ritmo.",
  "RELATO: O luxo dá coragem — e dá arrogância.",
  "OBS.: O culpado pode ter usado um corredor pouco usado.",
  "DETALHE: Porta pesada não fecha sozinha… alguém fechou.",
  "BOATO: Hoje, a casa pareceu cenário montado."
]);

addHints(window.HINTS_BY_LOCATION, "25", [
  "OBS.: Público demais para confiar, perfeito para negar.",
  "RELATO: O movimento comum disfarça o incomum.",
  "DETALHE: Luz de poste cria sombras e álibis.",
  "BOATO: Dizem que alguém já tinha rota antes de agir.",
  "TESTEMUNHA: Um banco vazio vira palco sem plateia.",
  "ANOTAÇÃO: Aqui, o culpado é “mais um”.",
  "RELATO: Conversas se cruzam e confundem.",
  "OBS.: Quem parece turista parece inocente.",
  "DETALHE: Um gesto pequeno some no barulho aberto.",
  "BOATO: Hoje, a praça diluiu a culpa."
]);

addHints(window.HINTS_BY_LOCATION, "26", [
  "OBS.: Poder cria silêncio — e silêncio cria espaço pro crime.",
  "RELATO: Papel assinado vira álibi de tinta.",
  "DETALHE: Corredores frios escondem passos com dignidade falsa.",
  "BOATO: Dizem que alguém entrou numa sala que ‘ninguém entra’.",
  "TESTEMUNHA: Um carimbo fora de hora denuncia rotina inventada.",
  "ANOTAÇÃO: Hierarquia encerra perguntas cedo demais.",
  "RELATO: “Eu estava resolvendo” é desculpa pronta.",
  "OBS.: O culpado pode ter usado autoridade como escudo.",
  "DETALHE: Uma porta trancada diz mais que um discurso.",
  "BOATO: Hoje, burocracia virou fumaça."
]);

addHints(window.HINTS_BY_LOCATION, "27", [
  "OBS.: Barulho de prato cobre qualquer som curto.",
  "RELATO: Pico de movimento = pico de oportunidade.",
  "DETALHE: Cozinha é corredor secreto para quem conhece.",
  "BOATO: Dizem que alguém “foi pegar algo” várias vezes.",
  "TESTEMUNHA: Um copo na mão é desculpa pra circular.",
  "ANOTAÇÃO: Serviço é máscara: ‘tô trabalhando’.",
  "RELATO: O calor e a pressa confundem memórias.",
  "OBS.: O culpado pode ter usado o caos do atendimento.",
  "DETALHE: Luz quente engana percepção de tempo.",
  "BOATO: Hoje, um acidente pode ter sido planejado."
]);

// =====================
// +10 DICAS (Lote extra) — 10 por carta
// Cole abaixo do seu hints.js
// =====================

// ---- SUSPEITOS ----
addHints(window.HINTS_BY_SUSPECT, "01", [
  "TESTEMUNHA: Ele ficou mais preocupado em ‘explicar’ do que em entender.",
  "RELATO: Quando pediram detalhes simples, ele deu um discurso completo.",
  "BOATO: Dizem que ele tentou combinar o que cada um ia dizer.",
  "DETALHE: Ele repetia palavras específicas como se fosse roteiro.",
  "OBS.: O olhar dele buscava aprovação quando a história fechava.",
  "ANOTAÇÃO: Quem controla a conversa costuma temer o silêncio.",
  "TESTEMUNHA: Ele corrigiu a ordem dos fatos antes de alguém errar.",
  "RELATO: Ele falou “isso é irrelevante” justamente no ponto mais relevante.",
  "BOATO: Dizem que ele quis ‘encerrar logo’ a conversa sobre o crime.",
  "DETALHE: Ele defendia uma versão, não uma verdade."
]);

addHints(window.HINTS_BY_SUSPECT, "02", [
  "TESTEMUNHA: Ele se incomodou quando citaram ‘ingredientes’ e ‘mistura’.",
  "RELATO: Ele sabia exatamente o que estava faltando sem procurar direito.",
  "BOATO: Dizem que ele foi ao fundo do lugar sozinho por alguns minutos.",
  "DETALHE: Ele cheirou algo rápido, como quem confirma uma suspeita.",
  "OBS.: A calma dele parecia cálculo, não serenidade.",
  "ANOTAÇÃO: Rotina é álibi perfeito pra quem domina rotina.",
  "TESTEMUNHA: Ele tentou limpar uma superfície sem ninguém pedir.",
  "RELATO: Ele ficou atento às mãos dos outros, como quem teme marca.",
  "BOATO: Dizem que ele usou barulho do ambiente como cobertura.",
  "DETALHE: O culpado pode ser quem age como se estivesse “trabalhando”."
]);

addHints(window.HINTS_BY_SUSPECT, "03", [
  "TESTEMUNHA: Ele não perguntou se alguém estava bem — só observou.",
  "RELATO: Quando falaram em ‘esconder’, ele ficou mais atento.",
  "BOATO: Dizem que ele conhece os cantos onde a luz não chega.",
  "DETALHE: Ele evitou pisar em certas áreas, como se respeitasse marcas.",
  "OBS.: A postura dele parecia de quem já viu isso antes.",
  "ANOTAÇÃO: Quem não teme o fim às vezes planeja o fim.",
  "TESTEMUNHA: Ele olhou pro chão como quem lê mapa de passos.",
  "RELATO: Ele se afastou quando todo mundo se juntou — e isso diz muito.",
  "BOATO: Dizem que ele ficou perto de saídas discretas.",
  "DETALHE: O silêncio dele não era choque; era escolha."
]);

addHints(window.HINTS_BY_SUSPECT, "04", [
  "TESTEMUNHA: Ela riu baixo quando ninguém achou graça.",
  "RELATO: Ela mudou o assunto como quem muda a música.",
  "BOATO: Dizem que ela apareceu ‘do nada’ no momento mais conveniente.",
  "DETALHE: Ela usou charme pra desarmar pergunta direta.",
  "OBS.: Ela mediu quem estava olhando e ajustou o comportamento.",
  "ANOTAÇÃO: Carisma é ótimo pra conduzir sem mandar.",
  "TESTEMUNHA: Ela foi a primeira a dizer “calma”, mas parecia alívio.",
  "RELATO: Quando pediram precisão, ela respondeu com poesia.",
  "BOATO: Dizem que ela sumiu no intervalo em que ninguém reparou.",
  "DETALHE: O álibi dela pareceu bonito demais pra ser real."
]);

addHints(window.HINTS_BY_SUSPECT, "05", [
  "TESTEMUNHA: Ela ficou tensa quando alguém mencionou cheiro no ambiente.",
  "RELATO: Ela manteve as mãos ocupadas o tempo todo, como defesa.",
  "BOATO: Dizem que ela queria sair antes de começarem as perguntas.",
  "DETALHE: Ela protegeu um objeto como se fosse segredo de bolso.",
  "OBS.: A voz dela ficou doce quando ficou acuada.",
  "ANOTAÇÃO: Delicadeza pode ser arma silenciosa.",
  "TESTEMUNHA: Ela desviou o olhar quando citaram ‘rastro’ e ‘marca’.",
  "RELATO: Ela falou muito de sentimentos e pouco de fatos.",
  "BOATO: Dizem que ela “arrumou” algo que ninguém tinha bagunçado.",
  "DETALHE: O culpado pode ser quem parece inofensivo demais."
]);

addHints(window.HINTS_BY_SUSPECT, "06", [
  "TESTEMUNHA: Ela tentou dar diagnóstico antes de qualquer análise.",
  "RELATO: Ela falou de ‘tempo de ação’ como quem já sabia.",
  "BOATO: Dizem que ela sugeriu “causa natural” rápido demais.",
  "DETALHE: Ela se incomodou com a palavra “procedimento”.",
  "OBS.: Ela ficou serena no momento em que todos ficaram pálidos.",
  "ANOTAÇÃO: Técnica demais pode ser escudo pra culpa.",
  "TESTEMUNHA: Ela observou reações como se estivesse avaliando resultado.",
  "RELATO: Ela perguntou o que a pessoa tinha consumido antes de tudo.",
  "BOATO: Dizem que ela sabia onde estavam itens “sensíveis”.",
  "DETALHE: Às vezes o culpado é quem sabe como apagar sinais."
]);

addHints(window.HINTS_BY_SUSPECT, "07", [
  "TESTEMUNHA: Ele sabia quem entrou e saiu sem ninguém contar.",
  "RELATO: Ele apareceu oferecendo solução antes de perguntarem.",
  "BOATO: Dizem que ele fechou uma porta “por hábito” no momento certo.",
  "DETALHE: Ele conhecia o lugar como se fosse extensão dele.",
  "OBS.: Ele se posicionou onde podia ver tudo sem ser visto.",
  "ANOTAÇÃO: O melhor disfarce é parecer parte do cenário.",
  "TESTEMUNHA: Ele evitou explicar onde estava entre dois momentos-chave.",
  "RELATO: Ele respondeu curto quando perguntaram de horários.",
  "BOATO: Dizem que ele tinha acesso onde outros não tinham.",
  "DETALHE: Quem tem chave controla caminho e versão."
]);

addHints(window.HINTS_BY_SUSPECT, "08", [
  "TESTEMUNHA: Ele tentou “organizar” quem falava e quem calava.",
  "RELATO: Ele fez perguntas rápidas pra não dar tempo de pensar.",
  "BOATO: Dizem que ele pressionou alguém a confirmar uma versão.",
  "DETALHE: Ele queria decidir o que era importante e o que não era.",
  "OBS.: A postura dele era de comando, mas os olhos eram de medo.",
  "ANOTAÇÃO: Autoridade imposta pode esconder insegurança culpada.",
  "TESTEMUNHA: Ele se irritou quando alguém pediu calma e paciência.",
  "RELATO: Ele tentou encerrar o assunto do ‘como’ e focar no ‘quem’.",
  "BOATO: Dizem que ele já tinha um suspeito favorito.",
  "DETALHE: Quem quer concluir rápido nem sempre quer justiça."
]);

// ---- ARMAS ----
addHints(window.HINTS_BY_WEAPON, "09", [
  "TESTEMUNHA: Teve um instante em que o ar parecia ‘diferente’.",
  "RELATO: O desconforto veio antes da compreensão — como efeito sorrateiro.",
  "BOATO: Dizem que alguém abriu e fechou algo sem deixar ver.",
  "DETALHE: Quando ninguém concorda no cheiro, o culpado ganha tempo.",
  "OBS.: A confusão nos sentidos vira álibi coletivo.",
  "ANOTAÇÃO: Se parece mal-estar, pergunte quem estava perto do ar.",
  "TESTEMUNHA: Um lenço no rosto pode ser proteção… ou encenação.",
  "RELATO: O efeito foi rápido demais pra ser “só cansaço”.",
  "BOATO: Dizem que o culpado queria que discutissem e não provassem.",
  "DETALHE: Pista invisível exige olhar para o comportamento."
]);

addHints(window.HINTS_BY_WEAPON, "10", [
  "TESTEMUNHA: O barulho fez todo mundo olhar onde não devia.",
  "RELATO: Depois do choque, ninguém lembrava de detalhes pequenos.",
  "BOATO: Dizem que o culpado contou com o pânico como fumaça.",
  "DETALHE: O eco atrapalha direção — perfeito pra confundir.",
  "OBS.: Impacto grande cria testemunha fraca.",
  "ANOTAÇÃO: Quando tudo acaba rápido, sobra pouco pra contar.",
  "TESTEMUNHA: Um susto geral dá espaço pra uma saída discreta.",
  "RELATO: O culpado pode ter se movido no exato segundo do som.",
  "BOATO: Dizem que alguém ficou calmo demais durante o estrondo.",
  "DETALHE: A verdade pode estar no antes do barulho, não no depois."
]);

addHints(window.HINTS_BY_WEAPON, "11", [
  "TESTEMUNHA: Foi próximo, foi rápido, foi definitivo.",
  "RELATO: A arma exige que alguém tenha chegado perto sem alerta.",
  "BOATO: Dizem que houve um ‘toque’ antes do momento final.",
  "DETALHE: Um gesto curto pode parecer abraço… por um segundo.",
  "OBS.: Quem faz isso precisa de saída limpa.",
  "ANOTAÇÃO: Proximidade é pista — confiança também é pista.",
  "TESTEMUNHA: Vi alguém limpar a mão como se tivesse tocado metal.",
  "RELATO: O culpado pode ter usado distração pra chegar junto.",
  "BOATO: Dizem que o golpe foi tão rápido que virou dúvida.",
  "DETALHE: O silêncio é parte da arma."
]);

addHints(window.HINTS_BY_WEAPON, "12", [
  "TESTEMUNHA: Marcas no chão parecem recentes, não antigas.",
  "RELATO: O peso exige oportunidade, não improviso puro.",
  "BOATO: Dizem que alguém saiu com poeira onde não devia.",
  "DETALHE: Terra denuncia quem tentou parecer limpo.",
  "OBS.: Ferramenta comum vira arma sem levantar suspeita.",
  "ANOTAÇÃO: O culpado pode ter contado com “ninguém vai estranhar”.",
  "TESTEMUNHA: Um som seco, de impacto pesado, e depois silêncio.",
  "RELATO: Quem usou isso precisou de espaço e tempo curto.",
  "BOATO: Dizem que alguém se afastou rápido logo após o som.",
  "DETALHE: Procure o lugar onde o chão ‘conta’ o que boca nega."
]);

addHints(window.HINTS_BY_WEAPON, "13", [
  "TESTEMUNHA: Um estalo de metal pode ter sido o instante decisivo.",
  "RELATO: A arma fala sobre acesso — e acesso fala sobre intenção.",
  "BOATO: Dizem que uma porta/fechadura ficou ‘estranha’ depois.",
  "DETALHE: Arranhões novos em metal velho são grito sem som.",
  "OBS.: Quem força caminho escolhe o risco com frieza.",
  "ANOTAÇÃO: Arrombamento pode ser só cortina pra outra ação.",
  "TESTEMUNHA: Vi alguém com respiração forte, como após esforço.",
  "RELATO: O culpado pode ter criado bagunça pra apagar lógica.",
  "BOATO: Dizem que alguém sumiu perto de portas e voltas rápidas.",
  "DETALHE: Procure o “como entrou” antes de procurar o “quem”."
]);

addHints(window.HINTS_BY_WEAPON, "14", [
  "TESTEMUNHA: Um esbarrão pode ter sido ataque disfarçado.",
  "RELATO: O método depende de contato rápido e mistura imediata.",
  "BOATO: Dizem que alguém escondeu a mão como se protegesse algo.",
  "DETALHE: Arma pequena, negação fácil.",
  "OBS.: O culpado precisa estar perto demais sem chamar atenção.",
  "ANOTAÇÃO: Confusão é aliada de ataque corpo a corpo.",
  "TESTEMUNHA: Uma mão fechada o tempo todo chama atenção depois.",
  "RELATO: O culpado pode ter usado multidão como escudo.",
  "BOATO: Dizem que o ataque foi num segundo de distração.",
  "DETALHE: A pista pode estar em quem “encostou sem querer”."
]);

addHints(window.HINTS_BY_WEAPON, "15", [
  "TESTEMUNHA: Um objeto comum pode virar ameaça sem mudar de forma.",
  "RELATO: O gesto é rápido, quase cotidiano.",
  "BOATO: Dizem que alguém tinha “motivo” pra carregar algo assim.",
  "DETALHE: Pequeno metal some fácil em bolso ou bolsa.",
  "OBS.: A arma se mistura com ferramentas inocentes.",
  "ANOTAÇÃO: O perigo é o que ninguém chama de perigoso.",
  "TESTEMUNHA: Vi um brilho curto e depois nada.",
  "RELATO: O culpado pode ter usado isso como se fosse rotina.",
  "BOATO: Dizem que alguém pediu pra “cortar/ajustar” algo.",
  "DETALHE: Procure quem tinha acesso a objetos de cuidado e corte."
]);

addHints(window.HINTS_BY_WEAPON, "16", [
  "TESTEMUNHA: O problema apareceu depois — e isso confunde tudo.",
  "RELATO: O culpado pode ter saído antes da consequência.",
  "BOATO: Dizem que alguém insistiu pra pessoa consumir algo.",
  "DETALHE: A pista pode estar no que foi oferecido com gentileza.",
  "OBS.: O tempo vira inimigo de quem busca o ‘momento exato’.",
  "ANOTAÇÃO: Quem planeja atraso planeja também álibi.",
  "TESTEMUNHA: Um sorriso insistente pode ter escondido intenção.",
  "RELATO: O culpado não precisou tocar no final — só no começo.",
  "BOATO: Dizem que alguém ficou tranquilo enquanto o tempo corria.",
  "DETALHE: Quando parece acidente, pergunte: quem se beneficia do acaso?"
]);

// ---- LOCAIS ----
addHints(window.HINTS_BY_LOCATION, "17", [
  "TESTEMUNHA: Um lugar de controle sempre tem um ponto onde o controle falha.",
  "RELATO: A tensão faz as pessoas lembrarem errado.",
  "BOATO: Dizem que alguém usou a fila como cobertura.",
  "DETALHE: Portas e sensores criam pausas perfeitas.",
  "OBS.: Onde todo mundo parece correto, culpa se esconde fácil.",
  "ANOTAÇÃO: Ponto cego é convite pra quem sabe onde fica.",
  "TESTEMUNHA: Um olhar para as câmeras pode dizer mais que palavra.",
  "RELATO: A saída mais óbvia é a menos vigiada quando todos correm.",
  "BOATO: Dizem que alguém entrou “normal” e saiu “normal”.",
  "DETALHE: Às vezes o crime passa pelo protocolo e ninguém vê."
]);

addHints(window.HINTS_BY_LOCATION, "18", [
  "TESTEMUNHA: O som alto apaga o tempo — e apaga também a lembrança.",
  "RELATO: Luz piscando cria segundos cegos.",
  "BOATO: Dizem que o culpado esperou a batida mais forte.",
  "DETALHE: Um empurrão pode virar desculpa perfeita.",
  "OBS.: Aqui, o culpado não corre; ele dança.",
  "ANOTAÇÃO: Multidão é escudo e é máscara.",
  "TESTEMUNHA: Um sorriso no escuro nem sempre é alegria.",
  "RELATO: Quem se perde no ritmo perde também a atenção.",
  "BOATO: Dizem que alguém saiu no meio da música e ninguém notou.",
  "DETALHE: O momento perfeito é quando todo mundo olha pra luz."
]);

addHints(window.HINTS_BY_LOCATION, "19", [
  "TESTEMUNHA: O silêncio aqui tem peso de confissão.",
  "RELATO: Pouca gente passa, e isso é exatamente o que alguém queria.",
  "BOATO: Dizem que alguém conhecia atalhos sem placa.",
  "DETALHE: Folhas quebradas contam direção.",
  "OBS.: A escuridão não cria crime, mas protege crime.",
  "ANOTAÇÃO: Quem escolhe esse lugar quer que o lugar esconda por ele.",
  "TESTEMUNHA: Um passo leve pode ser mais suspeito que um passo forte.",
  "RELATO: A luz fraca é aliada de quem não quer ser visto.",
  "BOATO: Dizem que alguém ficou parado, observando em silêncio.",
  "DETALHE: A pista pode ser o caminho que evita o poste."
]);

addHints(window.HINTS_BY_LOCATION, "20", [
  "TESTEMUNHA: O anúncio alto cria uma cortina perfeita.",
  "RELATO: Troca de plataforma é troca de rastro.",
  "BOATO: Dizem que o culpado se misturou como passageiro apressado.",
  "DETALHE: Portas abrindo e fechando viram desculpa pra qualquer som.",
  "OBS.: Pressa coletiva vira invisibilidade individual.",
  "ANOTAÇÃO: O movimento constante cria álibis infinitos.",
  "TESTEMUNHA: Uma mala pode esconder muito — e ninguém questiona.",
  "RELATO: Quem conhece horários conhece os “minutos mortos”.",
  "BOATO: Dizem que alguém ficou olhando o painel mais do que o normal.",
  "DETALHE: A pista pode ser o trem que alguém fingiu pegar."
]);

addHints(window.HINTS_BY_LOCATION, "21", [
  "TESTEMUNHA: O perfume daqui gruda na memória… e confunde a memória.",
  "RELATO: Vidro mostra tudo, menos o canto que não reflete.",
  "BOATO: Dizem que alguém foi ao estoque sem motivo.",
  "DETALHE: Tesoura e embalagem fazem barulho normal, e isso protege o culpado.",
  "OBS.: Beleza distrai — e alguém contou com isso.",
  "ANOTAÇÃO: Cenário bonito pode esconder gesto feio.",
  "TESTEMUNHA: Pétalas no chão podem ser caminho, não decoração.",
  "RELATO: Água e pano apagam sinais rápido.",
  "BOATO: Dizem que alguém limpou as mãos com pressa.",
  "DETALHE: Aqui, a prova pode estar no que foi arrumado demais."
]);

addHints(window.HINTS_BY_LOCATION, "22", [
  "TESTEMUNHA: Aqui, todo mundo tem desculpa: “procedimento”.",
  "RELATO: Máscara e luva apagam identidade.",
  "BOATO: Dizem que alguém usou jaleco como disfarce.",
  "DETALHE: Carrinho no corredor cria segundos cegos.",
  "OBS.: Urgência é distração automática.",
  "ANOTAÇÃO: O normal daqui é o melhor esconderijo.",
  "TESTEMUNHA: Portas leves fecham sem chamar atenção.",
  "RELATO: Um virar de esquina separa testemunha de suspeito.",
  "BOATO: Dizem que alguém estava calmo demais no caos.",
  "DETALHE: O detalhe é quem não pareceu preocupado."
]);

addHints(window.HINTS_BY_LOCATION, "23", [
  "TESTEMUNHA: Tapete engole som, corredor engole história.",
  "RELATO: Um cartão abre portas e fecha perguntas.",
  "BOATO: Dizem que alguém trocou de andar pra confundir rastros.",
  "DETALHE: Câmeras existem, mas não pegam tudo.",
  "OBS.: Identidade de hóspede é fácil de vestir.",
  "ANOTAÇÃO: Lugar de passagem é lugar de sumiço.",
  "TESTEMUNHA: Uma porta fechou devagar demais, sem ruído.",
  "RELATO: Elevador cria encontros curtos e álibis rápidos.",
  "BOATO: Dizem que o culpado esperou o corredor vazio.",
  "DETALHE: A pista pode estar no acesso, não no rosto."
]);

addHints(window.HINTS_BY_LOCATION, "24", [
  "TESTEMUNHA: Casas grandes têm cantos que ninguém visita.",
  "RELATO: Tapetes e portas pesadas ajudam quem quer silêncio.",
  "BOATO: Dizem que alguém conhecia atalhos internos.",
  "DETALHE: Uma porta que fecha sem bater é plano, não acaso.",
  "OBS.: Grandeza cria distância, e distância cria oportunidade.",
  "ANOTAÇÃO: O luxo vira máscara: ninguém suspeita do cenário.",
  "TESTEMUNHA: Quadros e espelhos podem virar “olhos” pra quem sabe usar.",
  "RELATO: Uma escada separa pessoas sem esforço.",
  "BOATO: Dizem que o culpado escolheu um canto cego.",
  "DETALHE: Aqui, o segredo mora em portas ‘decorativas’."
]);

addHints(window.HINTS_BY_LOCATION, "25", [
  "TESTEMUNHA: Lugar público cria dúvida automática.",
  "RELATO: Muita gente = pouca certeza.",
  "BOATO: Dizem que o culpado se misturou como se fosse só mais um.",
  "DETALHE: Luz de poste cria sombra suficiente pra um gesto curto.",
  "OBS.: O barulho aberto engole acusações.",
  "ANOTAÇÃO: Aqui, culpa se dilui no movimento.",
  "TESTEMUNHA: Alguém olhou saídas antes de agir.",
  "RELATO: Quem anda sem pressa chama menos atenção.",
  "BOATO: Dizem que alguém fingiu ser turista pra passar despercebido.",
  "DETALHE: A pista pode estar na rota mais óbvia."
]);

addHints(window.HINTS_BY_LOCATION, "26", [
  "TESTEMUNHA: Aqui, perguntas morrem por respeito ou medo.",
  "RELATO: Salas fechadas guardam segredos melhor que gente.",
  "BOATO: Dizem que alguém usou burocracia como cortina.",
  "DETALHE: Papel assinado pode virar álibi falso.",
  "OBS.: Hierarquia é ótima pra encerrar assunto cedo.",
  "ANOTAÇÃO: Quem tem poder decide o que “importa”.",
  "TESTEMUNHA: Uma porta trancada diz mais que mil discursos.",
  "RELATO: Quem conhece as chaves conhece as saídas.",
  "BOATO: Dizem que alguém entrou onde “ninguém entra”.",
  "DETALHE: Aqui, o crime pode parecer só procedimento."
]);

addHints(window.HINTS_BY_LOCATION, "27", [
  "TESTEMUNHA: Barulho de prato cobre qualquer som curto.",
  "RELATO: Picos de movimento viram picos de oportunidade.",
  "BOATO: Dizem que alguém circulou muito com desculpa de serviço.",
  "DETALHE: Cozinha é corredor perfeito pra quem conhece.",
  "OBS.: Um copo na mão vira passe livre.",
  "ANOTAÇÃO: Rotina de atendimento é máscara excelente.",
  "TESTEMUNHA: Vi alguém entrar e sair rápido como se fosse “pegar algo”.",
  "RELATO: Luz quente e pressa confundem o tempo.",
  "BOATO: Dizem que o culpado esperou o salão ficar no auge.",
  "DETALHE: Aqui, o crime pode parecer só mais um acidente."
]);


// Conveniência: lista de tipos disponíveis (usado pelo app)
window.HINT_TYPES = ["weapon","suspect","location"];
