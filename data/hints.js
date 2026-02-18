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
    "TESTEMUNHA: A pessoa falou bonito demais pra uma situação feia — como se já tivesse ensaiado a defesa.",
    "RELATO: Quando perguntaram ‘onde você estava?’, veio uma resposta longa… e nenhuma parte soou espontânea.",
    "BOATO: Quem domina palavras costuma tentar dominar versões. E hoje tinha versão demais circulando.",
    "PAPEL: Tinha marcas de dedo em papel que ninguém deveria ter tocado — e alguém fingiu que era normal.",
    "SUSSURRO: ‘Isso não prova nada’ saiu rápido. Rápido demais pra quem é inocente.",
    "OBS.: A pessoa não ficou nervoso com o crime… ficou nervoso com o relógio.",
    "DETALHE: Sempre que um nome era citado, A pessoa reorganizava a história como quem reorganiza frases.",
    "RELATO: A pessoa tentou transformar dúvida em certeza com um tom de autoridade mansa.",
    "BOATO: Dizem que A pessoa ofereceu ajuda antes mesmo de pedirem — ajuda pode ser controle.",
    "ANOTAÇÃO: Um argumento perfeito pode ser só uma máscara muito bem passada."
  ],

  "02": [ // Chef de Cozinha (suas 10)
    "TESTEMUNHA: As mãos dele estavam limpas demais pro lugar onde estava — como se tivesse lavado na pressa certa.",
    "RELATO: A pessoa conhece rotas e horários como quem conhece fogão e faca: no automático.",
    "BOATO: Dizem que A pessoa sumiu por minutos e voltou com ‘desculpa’ pronta.",
    "DETALHE: Cheiro de tempero forte pode esconder outra coisa. E alguém parecia contar com isso.",
    "OBS.: Quando falaram de barulho, A pessoa sorriu — como quem já sabia que ninguém escutaria nada.",
    "RELATO: A pessoa evitou um canto específico, como se aquele canto guardasse um segredo quente.",
    "ANOTAÇÃO: Quem domina rotina domina oportunidades.",
    "TESTEMUNHA: A pessoa ficou irritado quando mexeram em objetos — como se não quisesse bagunça na cena.",
    "BOATO: O crime parece ter sido feito com precisão, não com raiva.",
    "DETALHE: Às vezes o culpado é só alguém que sabe ‘como fazer rápido’."
  ],

  "03": [ // Coveiro Sérgio Soturno (suas 10)
    "TESTEMUNHA: A pessoa não se assustou com a notícia… só ficou mais quieto.",
    "RELATO: Tem gente que conhece o silêncio por dentro. E hoje alguém parecia confortável nele.",
    "BOATO: Dizem que A pessoa sabe onde ninguém procura — e isso é perigoso quando algo precisa sumir.",
    "DETALHE: Quando falaram em ‘fim’, A pessoa não fez pergunta nenhuma. Como se já soubesse o caminho.",
    "OBS.: A calma dele era pesada, não era paz.",
    "RELATO: A pessoa evitou explicar — e quem evita explicar às vezes evita se entregar.",
    "ANOTAÇÃO: O medo apareceu nos outros. Nele, apareceu só uma certeza fria.",
    "TESTEMUNHA: Uma frase curta: ‘isso acontece’. Curta demais.",
    "BOATO: Alguns chamam de experiência. Outros chamam de intimidade com o pior.",
    "DETALHE: O culpado pode ser quem não teme a escuridão."
  ],

  "04": [ // Dançarina Srta Rosa (suas 10)
    "TESTEMUNHA: A pessoa sorriu na hora errada — aquele sorriso que tenta distrair a culpa.",
    "RELATO: A pessoa se moveu como se o lugar fosse palco, e palco é ótimo pra esconder intenções.",
    "BOATO: Dizem que A pessoa some e volta no tempo perfeito, sempre com um ‘ah, eu estava ali’.",
    "DETALHE: A distração foi parte do método. Alguém queria olhos em qualquer coisa… menos no essencial.",
    "OBS.: Quem é carismático pode guiar a sala sem ninguém perceber.",
    "RELATO: Quando a conversa apertou, A pessoa mudou o ritmo — e todo mundo seguiu.",
    "ANOTAÇÃO: A melhor cortina de fumaça é um brilho bonito.",
    "TESTEMUNHA: A pessoa desviou perguntas com delicadeza, como dança: sem choque, sem rastro.",
    "BOATO: A história dela veio fluida demais. Fluidez às vezes é ensaio.",
    "DETALHE: Hoje, alguém usou charme como álibi."
  ],

  "05": [ // Florista Dona Branca (suas 10)
    "TESTEMUNHA: Um perfume doce ficou no ar… e alguém parecia contar com isso pra confundir memórias.",
    "RELATO: A pessoa fala com gentileza, mas protege detalhes como quem protege espinhos.",
    "BOATO: Dizem que A pessoa estava calma demais para o tipo de notícia que quebra a noite.",
    "DETALHE: Pétalas no chão não provam nada… mas indicam passagem recente de alguém ‘cuidadoso’.",
    "OBS.: A delicadeza pode ser máscara tão boa quanto uma ameaça.",
    "RELATO: Quando pressionaram, A pessoa respondeu com frases curtas e bonitas — sem conteúdo.",
    "ANOTAÇÃO: Quem mexe com arranjos sabe esconder coisas no meio do que é ‘decorativo’.",
    "TESTEMUNHA: A pessoa evitou olhar para um objeto específico, como se fosse algo pessoal.",
    "BOATO: A versão dela parecia preparada pra ser aceita sem discussão.",
    "DETALHE: Às vezes, a culpa vem embrulhada em seda."
  ],

  "06": [ // Médica Dona Violeta (suas 10)
    "TESTEMUNHA: A pessoa observou reações como quem observa sintomas — silenciosa, anotando tudo com os olhos.",
    "RELATO: Quando falaram de causa, A pessoa já tinha hipótese pronta. Pronta demais.",
    "BOATO: Dizem que A pessoa explicou possibilidades antes mesmo de alguém perguntar.",
    "DETALHE: Quem entende o corpo entende também como A pessoa falha sem barulho.",
    "OBS.: A calma dela parecia treino, não tranquilidade.",
    "RELATO: A pessoa se incomodou quando tocaram no assunto ‘tempo’. Tempo denuncia procedimento.",
    "ANOTAÇÃO: Um crime pode parecer acidente quando alguém sabe fazer parecer.",
    "TESTEMUNHA: A pessoa foi a primeira a dizer ‘pode ter sido natural’. Natural demais.",
    "BOATO: O culpado pode ter usado conhecimento como luva.",
    "DETALHE: Hoje, a verdade pode estar escondida numa explicação técnica."
  ],

  "07": [ // Mordomo James (suas 10)
    "TESTEMUNHA: A pessoa conhece portas e horários como quem conhece a própria respiração.",
    "RELATO: A pessoa apareceu no momento certo pra ‘ajudar’, e ajuda às vezes é controle da cena.",
    "BOATO: Dizem que A pessoa some pelos corredores sem ninguém notar — e isso é uma vantagem enorme.",
    "DETALHE: Quem tem chave não precisa arrombar. Quem não arromba, não deixa marca.",
    "OBS.: A presença dele é invisível até você precisar lembrar que A pessoa estava lá.",
    "RELATO: A pessoa respondeu sem emoção — e emoção às vezes é o que falta quando a culpa já foi resolvida.",
    "ANOTAÇÃO: O culpado mais perigoso é o que parece parte do mobiliário.",
    "TESTEMUNHA: A pessoa desviou um olhar rápido para a saída quando perguntaram ‘e depois?’",
    "BOATO: A rotina dele pode ser o melhor disfarce.",
    "DETALHE: Hoje, alguém usou acesso como arma."
  ],

  "08": [ // Sargento Bigode (suas 10)
    "TESTEMUNHA: A pessoa tentou comandar a conversa como se fosse investigação oficial — e isso pode ser máscara.",
    "RELATO: Quem quer organizar o caos pode estar tentando decidir o que entra e o que sai da história.",
    "BOATO: Dizem que A pessoa ficou mais irritado com dúvidas do que com o crime.",
    "DETALHE: Autoridade é ótima pra encerrar perguntas cedo demais.",
    "OBS.: A pessoa olha o grupo como patrulha, não como gente. Frio demais.",
    "RELATO: A pessoa perguntou ‘quem estava onde’ como interrogatório — e conduziu respostas.",
    "ANOTAÇÃO: Quem controla o ritmo controla o foco.",
    "TESTEMUNHA: A pessoa ficou calmo quando citaram barulho… como se já soubesse que isso não importava.",
    "BOATO: A pressa dele era seletiva: pressa pra concluir, não pra entender.",
    "DETALHE: Hoje, alguém usou disciplina como disfarce."
  ]
});

// +10 novas por suspeito
addHints(window.HINTS_BY_SUSPECT, "01", [
  "RELATO: A pessoa corrigiu um detalhe que ninguém tinha dito — como se tivesse visto de perto.",
  "OBS.: Quando alguém chorou, A pessoa olhou pros lados antes de olhar pra pessoa.",
  "ANOTAÇÃO: A pessoa se apegou a tecnicalidades, não à tragédia.",
  "BOATO: Dizem que A pessoa sugeriu um culpado cedo demais, pra ‘ajudar’.",
  "DETALHE: A forma como A pessoa escolheu palavras parecia mais importante que a verdade.",
  "TESTEMUNHA: A pessoa repetiu a mesma frase duas vezes, igualzinho. Ensaiado.",
  "RELATO: A pessoa evitou responder “sim” ou “não”. Só explicações.",
  "OBS.: A pessoa se incomodou quando alguém falou em “prova”.",
  "ANOTAÇÃO: Quem tenta controlar o enredo geralmente teme o final.",
  "BOATO: Hoje parecia que alguém estava defendendo uma versão — não uma pessoa."
]);

addHints(window.HINTS_BY_SUSPECT, "02", [
  "OBS.: A pessoa conferiu as mãos mais de uma vez, como se procurasse algo que já saiu.",
  "RELATO: A primeira reação dele foi calcular, não se assustar.",
  "DETALHE: A pessoa notou um utensílio fora do lugar rápido demais.",
  "BOATO: Dizem que A pessoa conhece atalhos onde ninguém passa.",
  "TESTEMUNHA: A pessoa ficou atento ao que era servido, como se o conteúdo importasse demais.",
  "ANOTAÇÃO: Quem lida com cortes e tempos sabe fazer tudo “no ponto”.",
  "RELATO: A pessoa tentou levar a conversa pra rotina, como se nada tivesse acontecido.",
  "OBS.: Quando falaram em “mistura”, A pessoa piscou e mudou de assunto.",
  "DETALHE: O culpado pode ser quem sabe esconder no comum.",
  "BOATO: Hoje alguém usou habilidade como desculpa."
]);

addHints(window.HINTS_BY_SUSPECT, "03", [
  "OBS.: A pessoa evitou luz direta, preferiu ficar nos cantos.",
  "RELATO: A pessoa conhecia detalhes do lugar que ninguém comentou.",
  "TESTEMUNHA: A pessoa não perguntou “quem foi?”, perguntou “onde foi?”.",
  "BOATO: Dizem que A pessoa sabe guardar segredos como quem guarda terra.",
  "DETALHE: O jeito que A pessoa caminha não faz som — isso ajuda mais do que parece.",
  "ANOTAÇÃO: Quem convive com despedidas perde o susto.",
  "RELATO: A pessoa se calou quando mencionaram “sumir com algo”.",
  "OBS.: A pessoa observou o chão como quem lê pistas nele.",
  "BOATO: Hoje alguém estava confortável com o fim.",
  "DETALHE: A frieza dele não era defesa — era hábito."
]);

addHints(window.HINTS_BY_SUSPECT, "04", [
  "OBS.: A pessoa escolheu onde ficar como se escolhesse marcação no palco.",
  "RELATO: Quando a atenção foi pra outro lado, A pessoa respirou aliviada.",
  "TESTEMUNHA: A pessoa tocou no próprio cabelo sempre que mentia — parecia tic.",
  "BOATO: Dizem que A pessoa sabe prender olhares e soltar suspeitas.",
  "DETALHE: A história dela tinha ritmo, mas faltava peso.",
  "ANOTAÇÃO: Quem domina cena domina também distração.",
  "RELATO: A pessoa fez piada num momento ruim, só pra quebrar tensão.",
  "OBS.: A pessoa evitou ficar sozinha com alguém específico.",
  "BOATO: Hoje alguém dançou em volta da verdade.",
  "DETALHE: Um sorriso pode ser cortina — e cortina esconde."
]);

addHints(window.HINTS_BY_SUSPECT, "05", [
  "OBS.: A pessoa segurou a bolsa/objeto perto demais, como se escondesse algo pequeno.",
  "RELATO: A pessoa tentou “adoçar” a conversa quando o assunto ficou sério.",
  "TESTEMUNHA: A pessoa cheirou as mãos discretamente, como se conferisse perfume.",
  "BOATO: Dizem que A pessoa trocou de lugar rápido quando alguém chegou perto.",
  "DETALHE: A delicadeza dela aparece mais quando quer evitar perguntas.",
  "ANOTAÇÃO: Quem sabe arrumar também sabe disfarçar.",
  "RELATO: A pessoa elogiou alguém do nada — elogio pode ser distração.",
  "OBS.: A pessoa ficou tensa quando citaram “rastros”.",
  "BOATO: Hoje alguém quis parecer inofensivo demais.",
  "DETALHE: O que é bonito também pode cortar."
]);

addHints(window.HINTS_BY_SUSPECT, "06", [
  "OBS.: A pessoa mediu as pessoas com o olhar, como quem escolhe hipótese.",
  "RELATO: A pessoa descreveu sintomas com detalhe… antes de alguém explicar.",
  "TESTEMUNHA: A pessoa pediu “calma” num tom que parecia comando.",
  "BOATO: Dizem que A pessoa carregava algo pequeno no bolso/bolsa com cuidado.",
  "DETALHE: Quem conhece doses conhece limites.",
  "ANOTAÇÃO: O culpado pode estar por trás de uma explicação “perfeita”.",
  "RELATO: A pessoa ficou desconfortável quando citaram “tempo de efeito”.",
  "OBS.: A pessoa tentou encerrar conversa com termos técnicos.",
  "BOATO: Hoje alguém usou conhecimento pra parecer autoridade.",
  "DETALHE: Se parece acidente, pergunte quem entende de acidentes."
]);

addHints(window.HINTS_BY_SUSPECT, "07", [
  "OBS.: A pessoa apareceu rápido demais quando chamaram por ajuda.",
  "RELATO: A pessoa sabia exatamente onde cada pessoa esteve, sem perguntar.",
  "TESTEMUNHA: A pessoa evitou câmera/espelho como se não quisesse ser registrado.",
  "BOATO: Dizem que A pessoa conhece rotinas alheias melhor que as próprias.",
  "DETALHE: Chaves fazem barulho. A pessoa andava como se não tivesse nenhuma.",
  "ANOTAÇÃO: Acesso é poder. E poder é tentação.",
  "RELATO: A pessoa sugeriu ‘fechar a porta’ mais de uma vez.",
  "OBS.: A pessoa ficou tenso quando falaram em “registro”.",
  "BOATO: Hoje alguém agiu como parte da casa.",
  "DETALHE: Quem controla passagem controla história."
]);

addHints(window.HINTS_BY_SUSPECT, "08", [
  "OBS.: A pessoa testou limites: quem obedece, quem discute, quem cala.",
  "RELATO: A pessoa puxou uma pessoa pra conversa e isolou outra.",
  "TESTEMUNHA: A pessoa ficou irritado quando alguém discordou dele.",
  "BOATO: Dizem que A pessoa tentou ‘reconstituir’ tudo do jeito dele.",
  "DETALHE: A pessoa olhava as saídas como quem planeja rota.",
  "ANOTAÇÃO: Autoridade falsa quer plateia, não verdade.",
  "RELATO: A pessoa perguntou mais do que respondeu.",
  "OBS.: A pessoa queria decidir quando o assunto acabava.",
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
    "DETALHE: Quando alguém abre caminho, A pessoa abre também a chance de desaparecer.",
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
    "ANOTAÇÃO: Nem toda arma aparece. Às vezes A pessoa já foi embora quando a culpa chega.",
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
  "RELATO: Quem usou isso não se importou com sujeira — ou já esperava A pessoa.",
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
    "ANOTAÇÃO: Poder não grita — A pessoa manda calar.",
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
  "TESTEMUNHA: A pessoa ficou mais preocupado em ‘explicar’ do que em entender.",
  "RELATO: Quando pediram detalhes simples, A pessoa deu um discurso completo.",
  "BOATO: Dizem que A pessoa tentou combinar o que cada um ia dizer.",
  "DETALHE: A pessoa repetia palavras específicas como se fosse roteiro.",
  "OBS.: O olhar dele buscava aprovação quando a história fechava.",
  "ANOTAÇÃO: Quem controla a conversa costuma temer o silêncio.",
  "TESTEMUNHA: A pessoa corrigiu a ordem dos fatos antes de alguém errar.",
  "RELATO: A pessoa falou “isso é irrelevante” justamente no ponto mais relevante.",
  "BOATO: Dizem que A pessoa quis ‘encerrar logo’ a conversa sobre o crime.",
  "DETALHE: A pessoa defendia uma versão, não uma verdade."
]);

addHints(window.HINTS_BY_SUSPECT, "02", [
  "TESTEMUNHA: A pessoa se incomodou quando citaram ‘ingredientes’ e ‘mistura’.",
  "RELATO: A pessoa sabia exatamente o que estava faltando sem procurar direito.",
  "BOATO: Dizem que A pessoa foi ao fundo do lugar sozinho por alguns minutos.",
  "DETALHE: A pessoa cheirou algo rápido, como quem confirma uma suspeita.",
  "OBS.: A calma dele parecia cálculo, não serenidade.",
  "ANOTAÇÃO: Rotina é álibi perfeito pra quem domina rotina.",
  "TESTEMUNHA: A pessoa tentou limpar uma superfície sem ninguém pedir.",
  "RELATO: A pessoa ficou atento às mãos dos outros, como quem teme marca.",
  "BOATO: Dizem que A pessoa usou barulho do ambiente como cobertura.",
  "DETALHE: O culpado pode ser quem age como se estivesse “trabalhando”."
]);

addHints(window.HINTS_BY_SUSPECT, "03", [
  "TESTEMUNHA: A pessoa não perguntou se alguém estava bem — só observou.",
  "RELATO: Quando falaram em ‘esconder’, A pessoa ficou mais atento.",
  "BOATO: Dizem que A pessoa conhece os cantos onde a luz não chega.",
  "DETALHE: A pessoa evitou pisar em certas áreas, como se respeitasse marcas.",
  "OBS.: A postura dele parecia de quem já viu isso antes.",
  "ANOTAÇÃO: Quem não teme o fim às vezes planeja o fim.",
  "TESTEMUNHA: A pessoa olhou pro chão como quem lê mapa de passos.",
  "RELATO: A pessoa se afastou quando todo mundo se juntou — e isso diz muito.",
  "BOATO: Dizem que A pessoa ficou perto de saídas discretas.",
  "DETALHE: O silêncio dele não era choque; era escolha."
]);

addHints(window.HINTS_BY_SUSPECT, "04", [
  "TESTEMUNHA: A pessoa riu baixo quando ninguém achou graça.",
  "RELATO: A pessoa mudou o assunto como quem muda a música.",
  "BOATO: Dizem que A pessoa apareceu ‘do nada’ no momento mais conveniente.",
  "DETALHE: A pessoa usou charme pra desarmar pergunta direta.",
  "OBS.: A pessoa mediu quem estava olhando e ajustou o comportamento.",
  "ANOTAÇÃO: Carisma é ótimo pra conduzir sem mandar.",
  "TESTEMUNHA: A pessoa foi a primeira a dizer “calma”, mas parecia alívio.",
  "RELATO: Quando pediram precisão, A pessoa respondeu com poesia.",
  "BOATO: Dizem que A pessoa sumiu no intervalo em que ninguém reparou.",
  "DETALHE: O álibi dela pareceu bonito demais pra ser real."
]);

addHints(window.HINTS_BY_SUSPECT, "05", [
  "TESTEMUNHA: A pessoa ficou tensa quando alguém mencionou cheiro no ambiente.",
  "RELATO: A pessoa manteve as mãos ocupadas o tempo todo, como defesa.",
  "BOATO: Dizem que A pessoa queria sair antes de começarem as perguntas.",
  "DETALHE: A pessoa protegeu um objeto como se fosse segredo de bolso.",
  "OBS.: A voz dela ficou doce quando ficou acuada.",
  "ANOTAÇÃO: Delicadeza pode ser arma silenciosa.",
  "TESTEMUNHA: A pessoa desviou o olhar quando citaram ‘rastro’ e ‘marca’.",
  "RELATO: A pessoa falou muito de sentimentos e pouco de fatos.",
  "BOATO: Dizem que A pessoa “arrumou” algo que ninguém tinha bagunçado.",
  "DETALHE: O culpado pode ser quem parece inofensivo demais."
]);

addHints(window.HINTS_BY_SUSPECT, "06", [
  "TESTEMUNHA: A pessoa tentou dar diagnóstico antes de qualquer análise.",
  "RELATO: A pessoa falou de ‘tempo de ação’ como quem já sabia.",
  "BOATO: Dizem que A pessoa sugeriu “causa natural” rápido demais.",
  "DETALHE: A pessoa se incomodou com a palavra “procedimento”.",
  "OBS.: A pessoa ficou serena no momento em que todos ficaram pálidos.",
  "ANOTAÇÃO: Técnica demais pode ser escudo pra culpa.",
  "TESTEMUNHA: A pessoa observou reações como se estivesse avaliando resultado.",
  "RELATO: A pessoa perguntou o que a pessoa tinha consumido antes de tudo.",
  "BOATO: Dizem que A pessoa sabia onde estavam itens “sensíveis”.",
  "DETALHE: Às vezes o culpado é quem sabe como apagar sinais."
]);

addHints(window.HINTS_BY_SUSPECT, "07", [
  "TESTEMUNHA: A pessoa sabia quem entrou e saiu sem ninguém contar.",
  "RELATO: A pessoa apareceu oferecendo solução antes de perguntarem.",
  "BOATO: Dizem que A pessoa fechou uma porta “por hábito” no momento certo.",
  "DETALHE: A pessoa conhecia o lugar como se fosse extensão dele.",
  "OBS.: A pessoa se posicionou onde podia ver tudo sem ser visto.",
  "ANOTAÇÃO: O melhor disfarce é parecer parte do cenário.",
  "TESTEMUNHA: A pessoa evitou explicar onde estava entre dois momentos-chave.",
  "RELATO: A pessoa respondeu curto quando perguntaram de horários.",
  "BOATO: Dizem que A pessoa tinha acesso onde outros não tinham.",
  "DETALHE: Quem tem chave controla caminho e versão."
]);

addHints(window.HINTS_BY_SUSPECT, "08", [
  "TESTEMUNHA: A pessoa tentou “organizar” quem falava e quem calava.",
  "RELATO: A pessoa fez perguntas rápidas pra não dar tempo de pensar.",
  "BOATO: Dizem que A pessoa pressionou alguém a confirmar uma versão.",
  "DETALHE: A pessoa queria decidir o que era importante e o que não era.",
  "OBS.: A postura dele era de comando, mas os olhos eram de medo.",
  "ANOTAÇÃO: Autoridade imposta pode esconder insegurança culpada.",
  "TESTEMUNHA: A pessoa se irritou quando alguém pediu calma e paciência.",
  "RELATO: A pessoa tentou encerrar o assunto do ‘como’ e focar no ‘quem’.",
  "BOATO: Dizem que A pessoa já tinha um suspeito favorito.",
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
  "OBS.: Aqui, o culpado não corre; A pessoa dança.",
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
  "ANOTAÇÃO: Quem escolhe esse lugar quer que o lugar esconda por A pessoa.",
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

/* =========================================================
   +270 DICAS (MAIS CLARAS) — 10 extras por carta (27 cartas)
   Cole no FINAL do data/hints.js
   ========================================================= */

// ======================
// SUSPEITOS (01–08)
// ======================

// 01 Advogado Sr Marinho
window.HINTS_BY_SUSPECT["01"].push(...[
  "TESTEMUNHA: A pessoa respondeu com termos difíceis, como se estivesse tentando confundir em vez de explicar.",
  "RELATO: Quando alguém perguntou algo simples, A pessoa transformou em um discurso grande.",
  "BOATO: Dizem que A pessoa tentou corrigir a fala dos outros o tempo todo, como se editasse a história.",
  "DETALHE: A pessoa repetiu a mesma frase duas vezes, igual quem decorou uma resposta.",
  "OBS.: A pessoa ficou mais preocupado com ‘o que vai dar’ do que com o que aconteceu.",
  "ANOTAÇÃO: Quem controla a conversa controla o que as pessoas lembram.",
  "RELATO: A pessoa evitou dizer ‘não sei’ — sempre tinha uma resposta pronta.",
  "TESTEMUNHA: Quando alguém citou um horário, A pessoa mudou o assunto rápido.",
  "BOATO: Dizem que A pessoa tentou convencer as pessoas antes mesmo de ouvirem tudo.",
  "DETALHE: O jeito dele parecia mais de defesa do que de surpresa."
]);

// 02 Chef de Cozinha
window.HINTS_BY_SUSPECT["02"].push(...[
  "TESTEMUNHA: A pessoa sabia exatamente onde cada coisa ficava, como se o lugar fosse dele.",
  "RELATO: A pessoa sumiu por pouco tempo e voltou como se nada tivesse acontecido.",
  "BOATO: Dizem que A pessoa ficou irritado quando alguém mexeu em objetos do ambiente.",
  "DETALHE: A pessoa olhava muito para as mãos, como se lembrasse de ter usado algo.",
  "OBS.: A pessoa falava em ‘rotina’ e ‘normal’ o tempo todo, como se quisesse que todos acreditassem nisso.",
  "ANOTAÇÃO: Quem domina o movimento do lugar consegue criar ‘minutos cegos’.",
  "RELATO: A pessoa reagiu rápido demais quando falaram sobre barulho ou bagunça.",
  "TESTEMUNHA: A pessoa evitou um canto específico, como se não quisesse ser visto ali.",
  "BOATO: Dizem que a história dele sempre tem uma desculpa pronta.",
  "DETALHE: Parece alguém que faz tudo com precisão, sem deixar sobrar tempo."
]);

// 03 Coveiro Sérgio Soturno
window.HINTS_BY_SUSPECT["03"].push(...[
  "TESTEMUNHA: A pessoa não demonstrou susto — só ficou mais fechado.",
  "RELATO: Enquanto todo mundo falava, A pessoa observava em silêncio, como se já esperasse algo.",
  "BOATO: Dizem que A pessoa conhece lugares onde ninguém costuma ir.",
  "DETALHE: Quando falaram em ‘sumir com algo’, A pessoa não reagiu — como se fosse normal.",
  "OBS.: A pessoa parecia confortável com o clima pesado, diferente dos outros.",
  "ANOTAÇÃO: Quem não teme a cena, às vezes já imaginou essa cena antes.",
  "RELATO: A pessoa respondeu com frases curtas, sem explicar nada.",
  "TESTEMUNHA: A pessoa olhou pro chão como quem procura marca ou sinal.",
  "BOATO: Dizem que A pessoa sabe lidar com ‘fim’ como parte do dia.",
  "DETALHE: O jeito dele parecia de quem já viu coisas demais e não se impressiona."
]);

// 04 Dançarina Srta Rosa
window.HINTS_BY_SUSPECT["04"].push(...[
  "TESTEMUNHA: A pessoa usava sorriso e charme para fugir de perguntas diretas.",
  "RELATO: Quando a conversa ficava séria, A pessoa fazia uma brincadeira e mudava o clima.",
  "BOATO: Dizem que A pessoa sabe distrair as pessoas sem esforço.",
  "DETALHE: A pessoa se movimentava muito, como se nunca quisesse ficar parada no mesmo lugar.",
  "OBS.: A pessoa tinha resposta bonita, mas pouca explicação real.",
  "ANOTAÇÃO: Quem chama atenção para si mesmo afasta atenção do que importa.",
  "RELATO: A pessoa ‘lembrava’ de detalhes só quando alguém insistia.",
  "TESTEMUNHA: Quando perguntaram de horários, A pessoa ficou vaga e deu volta.",
  "BOATO: Dizem que A pessoa some e reaparece sempre no momento certo.",
  "DETALHE: A pessoa parecia mais preocupada em parecer inocente do que em entender o crime."
]);

// 05 Florista Dona Branca
window.HINTS_BY_SUSPECT["05"].push(...[
  "TESTEMUNHA: Um cheiro doce ficou forte perto dela e depois foi difícil lembrar detalhes.",
  "RELATO: A pessoa falava com calma, mas segurava informações como quem segura segredo.",
  "BOATO: Dizem que A pessoa sabe disfarçar tensão com gentileza.",
  "DETALHE: A pessoa evitou olhar para um ponto específico, como se tivesse ligação com aquilo.",
  "OBS.: A pessoa parecia ‘boa demais’ em manter a compostura.",
  "ANOTAÇÃO: Coisas bonitas também podem esconder coisas ruins.",
  "RELATO: Quando alguém apertou a pergunta, A pessoa respondeu curto e mudou de assunto.",
  "TESTEMUNHA: A pessoa ficou defensiva quando citaram objetos pequenos e fáceis de esconder.",
  "BOATO: Dizem que A pessoa estava preparada para ser acreditada.",
  "DETALHE: A delicadeza dela parecia uma proteção, não só um jeito."
]);

// 06 Médica Dona Violeta
window.HINTS_BY_SUSPECT["06"].push(...[
  "TESTEMUNHA: A pessoa analisava tudo com olhar clínico, como se estivesse avaliando sinais.",
  "RELATO: A pessoa falou de ‘causas possíveis’ sem ninguém pedir, como se já tivesse pensado nisso.",
  "BOATO: Dizem que A pessoa tentou fazer parecer algo natural rápido demais.",
  "DETALHE: A pessoa se incomodou quando falaram sobre tempo e sequência dos fatos.",
  "OBS.: A pessoa parecia calma por treino, não por tranquilidade.",
  "ANOTAÇÃO: Quem entende o corpo sabe como algo pode parecer acidente.",
  "RELATO: A pessoa evitou perguntas emocionais e ficou só no técnico.",
  "TESTEMUNHA: Quando alguém passou mal, A pessoa reagiu como se já esperasse.",
  "BOATO: Dizem que A pessoa sabe ‘explicar’ qualquer coisa com termos difíceis.",
  "DETALHE: A postura dela parecia de quem já tinha um diagnóstico pronto."
]);

// 07 Mordomo James
window.HINTS_BY_SUSPECT["07"].push(...[
  "TESTEMUNHA: A pessoa sabia quem entrou e quem saiu, como se controlasse o movimento.",
  "RELATO: A pessoa apareceu ‘para ajudar’ bem no momento em que a cena precisava de alguém.",
  "BOATO: Dizem que A pessoa conhece atalhos e portas que os outros nem percebem.",
  "DETALHE: A pessoa estava perto demais das áreas de passagem, sempre.",
  "OBS.: A pessoa parecia invisível — e isso é perigoso numa situação dessas.",
  "ANOTAÇÃO: Quem circula sem chamar atenção pode fazer muita coisa sem ser notado.",
  "RELATO: Quando perguntaram ‘você viu?’, A pessoa respondeu com precisão demais.",
  "TESTEMUNHA: A pessoa olhou para uma saída como quem calcula rota.",
  "BOATO: Dizem que A pessoa tem acesso a lugares fechados sem levantar suspeita.",
  "DETALHE: A calma dele parecia de quem já resolveu o que precisava."
]);

// 08 Sargento Bigode
window.HINTS_BY_SUSPECT["08"].push(...[
  "TESTEMUNHA: A pessoa tentou mandar na conversa como se fosse o responsável pelo caso.",
  "RELATO: A pessoa fez perguntas como interrogatório e muita gente ficou desconfortável.",
  "BOATO: Dizem que A pessoa queria concluir rápido, sem deixar dúvidas.",
  "DETALHE: Quando alguém levantou hipótese diferente, A pessoa cortou na hora.",
  "OBS.: A pessoa se irritou mais com confusão do que com o crime.",
  "ANOTAÇÃO: Quem controla o grupo controla o foco — e isso pode esconder coisas.",
  "RELATO: A pessoa insistiu em ‘ordem’ e ‘regra’ como se isso resolvesse tudo.",
  "TESTEMUNHA: A pessoa parecia saber quais perguntas não podiam ser feitas.",
  "BOATO: Dizem que A pessoa escolheu um ‘culpado’ cedo demais.",
  "DETALHE: A pressa dele era para encerrar o assunto, não para entender."
]);


// ======================
// ARMAS (09–16)
// ======================

// 09 Arma Química
window.HINTS_BY_WEAPON["09"].push(...[
  "TESTEMUNHA: Teve um incômodo no ar por um instante, como se alguém tivesse aberto algo rápido.",
  "RELATO: Algumas pessoas ficaram com ardor ou tontura do nada, sem explicação clara.",
  "BOATO: Dizem que o efeito veio antes de alguém entender o que estava acontecendo.",
  "DETALHE: O que ataca os sentidos deixa todo mundo em dúvida sobre o que viu.",
  "OBS.: Ninguém percebe um ‘golpe’ — só percebe a consequência.",
  "ANOTAÇÃO: Se ninguém viu ação direta, pode ter sido algo invisível.",
  "RELATO: O ambiente pareceu ficar “pesado” por um momento e depois normalizou.",
  "TESTEMUNHA: Alguém tossiu/espirrou e isso virou distração perfeita.",
  "BOATO: Dizem que o culpado contou com confusão e mal-estar para ninguém reagir.",
  "DETALHE: Quando a pista está no ar, a prova pode ser quem estava perto no início."
]);

// 10 Espingarda
window.HINTS_BY_WEAPON["10"].push(...[
  "TESTEMUNHA: Teve um som muito alto e todo mundo travou por reflexo.",
  "RELATO: Depois do impacto, o silêncio ficou estranho, como se a cena tivesse ‘acabado’ ali.",
  "BOATO: Dizem que o culpado contou com o susto para ninguém pensar direito.",
  "DETALHE: Um barulho grande cria muita dúvida: ‘foi aqui ou foi longe?’",
  "OBS.: O método é rápido e deixa pouco espaço para reação.",
  "ANOTAÇÃO: O pânico dura segundos — e nesses segundos alguém pode sumir.",
  "RELATO: Quem fez isso queria finalizar rápido, sem discussão.",
  "TESTEMUNHA: Todo mundo olhou para o lado errado por um instante.",
  "BOATO: Dizem que o culpado escolheu um momento de barulho geral para confundir mais.",
  "DETALHE: Se o som foi o principal, alguém usou isso para controlar a cena."
]);

// 11 Faca
window.HINTS_BY_WEAPON["11"].push(...[
  "TESTEMUNHA: Isso exige chegar bem perto — perto o suficiente para surpreender.",
  "RELATO: Foi rápido e direto, sem muito barulho prolongado.",
  "BOATO: Dizem que um gesto curto resolveu tudo em segundos.",
  "DETALHE: Quem usa isso precisa de oportunidade e proximidade.",
  "OBS.: O culpado teve que atravessar uma distância curta sem ser impedido.",
  "ANOTAÇÃO: A pista pode estar em quem conseguiu ficar perto demais sem chamar atenção.",
  "RELATO: Um objeto comum pode ter sido tirado e guardado rápido.",
  "TESTEMUNHA: Vi alguém limpar a mão como se tivesse tocado em algo frio.",
  "BOATO: Dizem que foi intenção, não acidente.",
  "DETALHE: A verdade pode estar no “quem estava do lado”."
]);

// 12 Pá
window.HINTS_BY_WEAPON["12"].push(...[
  "TESTEMUNHA: Tinha sujeira/terra em lugar que não combinava com o ambiente.",
  "RELATO: O peso disso sugere algo ‘de trabalho’, não algo de impulso.",
  "BOATO: Dizem que alguém tentou disfarçar marcas no chão depois.",
  "DETALHE: Um golpe assim precisa de espaço e oportunidade.",
  "OBS.: Dá para confundir o barulho com movimentação normal dependendo do local.",
  "ANOTAÇÃO: Se a ferramenta parece comum, o crime passa por ‘rotina’.",
  "RELATO: O culpado pode ter precisado de força e tempo curto.",
  "TESTEMUNHA: Vi marcas de solo em sapato/roupa de alguém.",
  "BOATO: Dizem que tentaram limpar um rastro áspero no piso.",
  "DETALHE: Procure onde o chão denuncia mais do que as pessoas."
]);

// 13 Pé de Cabra
window.HINTS_BY_WEAPON["13"].push(...[
  "TESTEMUNHA: Teve um estalo de metal curto, como algo sendo forçado uma vez.",
  "RELATO: Isso não é só ataque — é abrir caminho: porta, trava ou acesso.",
  "BOATO: Dizem que algo que estava fechado apareceu ‘aberto’ de repente.",
  "DETALHE: Marcas em madeira/metal podem parecer antigas, mas nem sempre são.",
  "OBS.: Quem não tem chave usa força — e força deixa sinal.",
  "ANOTAÇÃO: Se alguém precisou entrar/pegar algo, esse tipo de ferramenta faz sentido.",
  "RELATO: Um barulho seco é o tipo de som que muita gente ignora.",
  "TESTEMUNHA: Vi alguém com a mão dolorida/tensa como quem fez esforço.",
  "BOATO: Dizem que o culpado controlou a cena mudando o acesso de algum lugar.",
  "DETALHE: Olhe para fechaduras, trincos e cantos “arrombáveis”."
]);

// 14 Soco Inglês
window.HINTS_BY_WEAPON["14"].push(...[
  "TESTEMUNHA: Foi contato rápido e muito perto, quase impossível de perceber na hora.",
  "RELATO: A confusão do ambiente pode ter escondido um ataque curto.",
  "BOATO: Dizem que o culpado se misturou logo depois, sem precisar correr.",
  "DETALHE: Algo pequeno na mão pode causar grande efeito sem aparecer.",
  "OBS.: Quem fez isso estava ao alcance de um braço.",
  "ANOTAÇÃO: A pista é: quem esteve perto o tempo todo sem levantar suspeita?",
  "RELATO: Um empurrão pode ter sido mais do que empurrão.",
  "TESTEMUNHA: Vi alguém esconder a mão como se estivesse protegendo algo.",
  "BOATO: Dizem que o culpado contou com esbarrões para virar ‘acidente’.",
  "DETALHE: O suspeito pode ser quem sempre esteve “colado” na vítima."
]);

// 15 Tesoura
window.HINTS_BY_WEAPON["15"].push(...[
  "TESTEMUNHA: Um objeto pequeno e comum pode virar ameaça sem ninguém notar.",
  "RELATO: Parece coisa do dia a dia — por isso passa fácil.",
  "BOATO: Dizem que alguém carregava algo ‘inofensivo’ e ninguém desconfiou.",
  "DETALHE: Isso pede gesto rápido e mão firme.",
  "OBS.: O culpado não precisa parecer perigoso para ter isso por perto.",
  "ANOTAÇÃO: A pista está em quem tinha acesso a ferramentas simples.",
  "RELATO: Um corte pequeno pode acontecer antes de alguém reagir.",
  "TESTEMUNHA: Vi alguém fazer movimento de ‘cortar’ sem perceber enquanto falava.",
  "BOATO: Dizem que o culpado escolheu algo que não chama atenção.",
  "DETALHE: Procure quem tinha motivo para carregar um objeto comum na mão."
]);

// 16 Veneno
window.HINTS_BY_WEAPON["16"].push(...[
  "TESTEMUNHA: Nada aconteceu na hora — a mudança veio depois, devagar.",
  "RELATO: O intervalo entre ‘tava bem’ e ‘ficou mal’ confundiu todo mundo.",
  "BOATO: Dizem que parecia algo natural, e isso atrasou a suspeita.",
  "DETALHE: Quem usa isso não precisa ficar perto no final.",
  "OBS.: Isso exige planejamento: escolher o momento certo antes.",
  "ANOTAÇÃO: A pista pode estar em algo oferecido: bebida, comida, remédio…",
  "RELATO: Alguém insistiu para outra pessoa aceitar algo “por educação”.",
  "TESTEMUNHA: Vi alguém observando se a pessoa ia consumir ou não.",
  "BOATO: Dizem que o culpado contou com o tempo para sair tranquilo.",
  "DETALHE: Procure o começo da sequência, não o final."
]);


// ======================
// LOCAIS (17–27)
// ======================

// 17 Banco
window.HINTS_BY_LOCATION["17"].push(...[
  "TESTEMUNHA: Todo mundo fica sério e quieto, então qualquer tensão parece ‘normal’.",
  "RELATO: Tem câmeras, mas sempre existe um ângulo que não pega direito.",
  "BOATO: Dizem que a movimentação de fila ajudou a esconder um gesto pequeno.",
  "DETALHE: Um ponto de entrada controlado cria atraso para uns e liberdade para outros.",
  "OBS.: Segurança forte dá sensação de controle, mas isso pode enganar.",
  "ANOTAÇÃO: Lugar formal faz as pessoas evitarem confusão — perfeito para algo discreto.",
  "RELATO: O culpado poderia parecer só mais um cliente.",
  "TESTEMUNHA: Vi alguém olhando para cima, como quem confere câmera.",
  "BOATO: Dizem que a distração foi alguém pedindo informação no momento certo.",
  "DETALHE: A pista pode estar em quem entrou e saiu “sem pressa”, como se soubesse o caminho."
]);

// 18 Boate
window.HINTS_BY_LOCATION["18"].push(...[
  "TESTEMUNHA: O som alto fazia impossível ouvir qualquer coisa direito.",
  "RELATO: Luzes e movimento deixavam difícil identificar rostos por muito tempo.",
  "BOATO: Dizem que um esbarrão foi a desculpa perfeita.",
  "DETALHE: Quando todo mundo está distraído, um gesto curto some no meio.",
  "OBS.: Muita gente junto cria álibi instantâneo.",
  "ANOTAÇÃO: Aqui, ninguém sabe exatamente quem estava onde a cada segundo.",
  "RELATO: O culpado pode ter esperado a música ficar mais alta.",
  "TESTEMUNHA: Vi alguém sumir no meio da multidão e reaparecer do outro lado.",
  "BOATO: Dizem que o crime aconteceu quando todo mundo olhou para o mesmo ponto.",
  "DETALHE: A pista pode ser quem estava confortável demais no caos."
]);

// 19 Cemitério
window.HINTS_BY_LOCATION["19"].push(...[
  "TESTEMUNHA: O silêncio era tão forte que qualquer passo parecia alto.",
  "RELATO: Pouca gente por perto significa poucas versões para confirmar.",
  "BOATO: Dizem que alguém sabia por onde andar sem ser visto.",
  "DETALHE: Folhas e chão seco denunciam caminho de quem passa.",
  "OBS.: É um lugar que já carrega peso — isso assusta uns e dá coragem a outros.",
  "ANOTAÇÃO: Aqui, esconder algo é mais fácil do que em lugar movimentado.",
  "RELATO: Um ponto escuro pode ser mais importante do que qualquer fala.",
  "TESTEMUNHA: Vi alguém ficar parado como se estivesse esperando alguém chegar.",
  "BOATO: Dizem que alguém escolheu um trecho onde não tem luz.",
  "DETALHE: A pista pode estar em marcas no chão, não em testemunhas."
]);

// 20 Estação de Trem
window.HINTS_BY_LOCATION["20"].push(...[
  "TESTEMUNHA: Muita gente andando rápido torna qualquer pessoa “só mais uma”.",
  "RELATO: Anúncios e apitos cobrem sons pequenos no momento certo.",
  "BOATO: Dizem que alguém mudou de lado rapidamente para evitar ser seguido.",
  "DETALHE: Escadas e plataformas criam sumiços rápidos.",
  "OBS.: Aqui, todo mundo tem pressa — e pressa reduz atenção.",
  "ANOTAÇÃO: O culpado pode ter usado fluxo de pessoas como escudo.",
  "RELATO: Um empurrão pode ter sido confundido com correria.",
  "TESTEMUNHA: Vi alguém olhar o painel/horário como se estivesse esperando um minuto específico.",
  "BOATO: Dizem que o crime foi perto de uma passagem onde ninguém para.",
  "DETALHE: A pista pode ser a direção que alguém escolheu depois."
]);

// 21 Floricultura
window.HINTS_BY_LOCATION["21"].push(...[
  "TESTEMUNHA: O cheiro forte do ambiente mascara outros cheiros facilmente.",
  "RELATO: Objetos de cortar e arrumar são comuns, então ninguém estranha.",
  "BOATO: Dizem que alguém deixou “rastro” leve no chão sem perceber.",
  "DETALHE: Vitrines chamam atenção — e desviam do que está no canto.",
  "OBS.: A beleza do lugar faz as pessoas baixarem a guarda.",
  "ANOTAÇÃO: Perfume e cor confundem memória: ‘eu acho que vi…’",
  "RELATO: Um fundo mais fechado pode esconder movimentação.",
  "TESTEMUNHA: Vi alguém mexer em embalagem/caixa como se escondesse algo dentro.",
  "BOATO: Dizem que alguém saiu apressado e tentou parecer normal.",
  "DETALHE: A pista pode estar em pequenos pedaços no chão ou numa embalagem fora do lugar."
]);

// 22 Hospital
window.HINTS_BY_LOCATION["22"].push(...[
  "TESTEMUNHA: Máscaras e luvas dificultam reconhecer as pessoas direito.",
  "RELATO: Corredores longos permitem virar a esquina e sumir em segundos.",
  "BOATO: Dizem que um ‘procedimento’ virou desculpa perfeita para não levantar suspeita.",
  "DETALHE: Aqui, um mal-estar parece comum — e isso atrasa a desconfiança.",
  "OBS.: Muita gente em rotina rápida faz ninguém reparar em detalhe.",
  "ANOTAÇÃO: O culpado poderia se misturar como alguém trabalhando ou aguardando.",
  "RELATO: Um carrinho passando pode esconder um gesto curto.",
  "TESTEMUNHA: Vi alguém calmo demais no meio da pressa geral.",
  "BOATO: Dizem que alguém usou a confusão de portas e salas para trocar de direção.",
  "DETALHE: A pista pode ser quem tinha ‘motivo’ para circular sem ser questionado."
]);

// 23 Hotel
window.HINTS_BY_LOCATION["23"].push(...[
  "TESTEMUNHA: Portas iguais deixam difícil lembrar qual foi qual.",
  "RELATO: Tapete abafava passos — dava para andar sem fazer barulho.",
  "BOATO: Dizem que alguém trocou de andar para quebrar rastro.",
  "DETALHE: Cartões de acesso fazem abrir porta sem chamar atenção.",
  "OBS.: ‘Hospede’ é identidade fácil de fingir aqui.",
  "ANOTAÇÃO: Corredor vazio é oportunidade perfeita para agir sem testemunha.",
  "RELATO: Elevador cria encontros rápidos e separações rápidas.",
  "TESTEMUNHA: Vi alguém parar numa porta, hesitar, e depois seguir como se tivesse “errado”.",
  "BOATO: Dizem que alguém esperou um corredor ficar totalmente vazio.",
  "DETALHE: A pista pode ser quem tinha acesso sem precisar pedir."
]);

// 24 Mansão
window.HINTS_BY_LOCATION["24"].push(...[
  "TESTEMUNHA: O lugar é grande e silencioso — dá para acontecer algo longe e ninguém ouvir.",
  "RELATO: Existem muitos cantos e corredores onde ninguém costuma ficar.",
  "BOATO: Dizem que portas pesadas fecham sem fazer barulho se você souber puxar certo.",
  "DETALHE: A distância entre salas cria ‘tempo’ para alguém fazer algo e voltar.",
  "OBS.: Quem parece ‘pertencer’ ao lugar anda sem ser questionado.",
  "ANOTAÇÃO: Quanto maior o lugar, mais fácil se perder uma pessoa.",
  "RELATO: Um corredor vazio por poucos segundos já resolve tudo.",
  "TESTEMUNHA: Vi alguém usar uma passagem lateral como se já conhecesse.",
  "BOATO: Dizem que a melhor parte do plano foi escolher um canto escondido.",
  "DETALHE: A pista pode estar em portas que ninguém usa normalmente."
]);

// 25 Praça Central
window.HINTS_BY_LOCATION["25"].push(...[
  "TESTEMUNHA: Tinha gente demais, então ninguém consegue dizer com certeza quem fez o quê.",
  "RELATO: Barulho aberto e passos confundem qualquer movimento pequeno.",
  "BOATO: Dizem que o culpado se misturou como se fosse só mais um.",
  "DETALHE: Em lugar público, um gesto rápido vira “nada demais”.",
  "OBS.: Saídas por todos os lados facilitam fugir sem parecer fuga.",
  "ANOTAÇÃO: Aqui, o melhor disfarce é agir como turista/normal.",
  "RELATO: Um empurrão pode virar desculpa imediata.",
  "TESTEMUNHA: Vi alguém olhando as rotas antes, como quem planeja.",
  "BOATO: Dizem que o culpado contou com a rotina do lugar para ninguém estranhar.",
  "DETALHE: A pista pode ser quem ficou perto das saídas o tempo todo."
]);

// 26 Prefeitura
window.HINTS_BY_LOCATION["26"].push(...[
  "TESTEMUNHA: Gente passando com papel na mão faz ninguém reparar em nada.",
  "RELATO: Salas fechadas deixam coisas acontecerem sem testemunha.",
  "BOATO: Dizem que alguém usou ‘autoridade’ para cortar perguntas.",
  "DETALHE: Portas e corredores criam caminhos rápidos para sumir.",
  "OBS.: Aqui, muita coisa é ‘burocracia’ — ótimo disfarce.",
  "ANOTAÇÃO: Um ‘estava resolvendo assunto’ vira álibi fácil.",
  "RELATO: Alguém pode entrar numa sala e ninguém pergunta o porquê.",
  "TESTEMUNHA: Vi alguém segurando algo junto ao corpo, como escondendo.",
  "BOATO: Dizem que o culpado sabia exatamente qual porta abrir.",
  "DETALHE: A pista pode ser quem circulava como se mandasse ali."
]);

// 27 Restaurante
window.HINTS_BY_LOCATION["27"].push(...[
  "TESTEMUNHA: Barulho de pratos e conversa alta escondem sons curtos.",
  "RELATO: Muita gente ocupada faz ninguém prestar atenção no detalhe.",
  "BOATO: Dizem que alguém entrou e saiu rápido ‘só pra pegar algo’.",
  "DETALHE: Copos e comida criam oportunidade sem levantar suspeita.",
  "OBS.: Quem está ‘trabalhando’ tem desculpa para circular por todo lado.",
  "ANOTAÇÃO: O momento perfeito é quando o salão está mais cheio.",
  "RELATO: A área de serviço pode ser rota escondida.",
  "TESTEMUNHA: Vi alguém olhar para a cozinha como se esperasse sinal.",
  "BOATO: Dizem que o culpado aproveitou o pico de barulho.",
  "DETALHE: A pista pode ser quem tinha acesso fácil às áreas de passagem."
]);

/* (opcional) Atualiza a doc do topo do arquivo se você quiser:
   Agora são 540 dicas (20 por carta).
*/
/* =========================================================
   +270 DICAS (MUITO FÁCEIS / QUEBRA-CABEÇA)
   10 extras por carta (27 cartas)
   Cole no FINAL do data/hints.js
   ========================================================= */

// ======================
// SUSPEITOS (01–08)
// ======================

// 01 Advogado Sr Marinho
window.HINTS_BY_SUSPECT["01"].push(...[
  "TESTEMUNHA: A pessoa disse a palavra “procedimento” e logo em seguida olhou para o celular como se conferisse tempo.",
  "RELATO: Quando perguntaram “quem viu primeiro?”, A pessoa respondeu com outra pergunta e fez um gesto de ‘calma’ com a mão.",
  "BOATO: A pessoa repetiu o mesmo trecho da história com as mesmas palavras, duas vezes, sem mudar nada.",
  "DETALHE: No momento em que citaram um horário, A pessoa corrigiu o minuto exato — mas disse que “nem estava olhando relógio”.",
  "OBS.: A pessoa ajeitou papéis/objetos na mesa enquanto respondia, como se precisasse ‘organizar’ a cena.",
  "ANOTAÇÃO: A pessoa disse “isso não é prova” antes mesmo de alguém falar em prova.",
  "RELATO: Quando alguém falou “foi rápido”, A pessoa completou “rápido mesmo” — como se já soubesse a duração.",
  "TESTEMUNHA: A pessoa pediu para alguém “anotar direito” uma frase específica.",
  "BOATO: Quando a conversa apertou, A pessoa soltou um elogio (“você tá indo bem”) pra quebrar o clima.",
  "DETALHE: A pessoa ficou mais irritado com uma contradição pequena do que com a notícia do crime."
]);

// 02 Chef de Cozinha
window.HINTS_BY_SUSPECT["02"].push(...[
  "TESTEMUNHA: A pessoa tinha um pano/guardanapo dobrado no bolso e mexia nele quando falavam do momento do crime.",
  "RELATO: Quando citaram um canto do lugar, A pessoa disse “ali é apertado” sem ninguém ter descrito o espaço.",
  "BOATO: A pessoa voltou com cheiro forte (tempero/sabonete) e disse que “foi só lavar a mão rapidinho”.",
  "DETALHE: A pessoa apontou a posição de um objeto com precisão demais: “tava bem aqui, dois dedos pra esquerda”.",
  "OBS.: Quando alguém levantou voz, A pessoa falou “não grita, dá pra ouvir” como se soubesse que tinha gente perto.",
  "ANOTAÇÃO: A pessoa ficou incomodado quando alguém mudou um item de lugar — tipo ‘não mexe nisso’.",
  "RELATO: A pessoa respondeu “eu tava na correria” e logo citou uma sequência exata de tarefas.",
  "TESTEMUNHA: A pessoa olhou para a saída de serviço/porta lateral antes de responder.",
  "BOATO: Disseram que A pessoa sabia qual hora o barulho do ambiente fica maior.",
  "DETALHE: No fim, A pessoa perguntou “já limparam aquilo?” — e ninguém tinha falado em limpar nada."
]);

// 03 Coveiro Sérgio Soturno
window.HINTS_BY_SUSPECT["03"].push(...[
  "TESTEMUNHA: A pessoa ficou olhando pro chão como se procurasse marca de passos, e não pro que as pessoas falavam.",
  "RELATO: Quando falaram “alguém sumiu”, A pessoa disse “sumir é fácil” e ficou quieto depois.",
  "BOATO: A pessoa reconheceu um caminho de sombras sem ninguém apontar direção.",
  "DETALHE: Tinha pó/terra na barra da calça dele, mesmo sem A pessoa ter tocado no chão.",
  "OBS.: A pessoa evitou ficar perto da luz; sempre escolhia o canto mais escuro da conversa.",
  "ANOTAÇÃO: Quando perguntaram “por quê?”, A pessoa respondeu “tem coisa que é só…” e não terminou a frase.",
  "RELATO: A pessoa sabia onde o som não chega (um ponto mais isolado) e comentou isso como se fosse óbvio.",
  "TESTEMUNHA: A pessoa tocou no bolso como se conferisse se algo ainda estava ali.",
  "BOATO: Disseram que A pessoa ficou calmo demais quando alguém mencionou “esconder”.",
  "DETALHE: A pessoa não reagiu à notícia — reagiu quando citaram ‘tempo’ e ‘rastro’."
]);

// 04 Dançarina Srta Rosa
window.HINTS_BY_SUSPECT["04"].push(...[
  "TESTEMUNHA: A pessoa mudou o assunto com uma piada exatamente quando fizeram uma pergunta direta.",
  "RELATO: A pessoa disse “ninguém lembra direito porque tava tudo rápido” e sorriu como se isso resolvesse tudo.",
  "BOATO: A pessoa apareceu do outro lado do lugar sem ninguém ver A pessoa atravessando.",
  "DETALHE: Quando citaram o ponto do crime, A pessoa já estava com o corpo virado pra direção oposta.",
  "OBS.: A pessoa tocava no cabelo/roupa repetidamente quando falavam de ‘perto’ e ‘contato’.",
  "ANOTAÇÃO: A pessoa respondeu com “eu acho” e depois falou com certeza total no minuto seguinte.",
  "RELATO: A pessoa descreveu uma distração (“todo mundo olhou pra…”) com detalhes bem vivos.",
  "TESTEMUNHA: A pessoa sugeriu que outra pessoa “tava estranha” antes mesmo de alguém suspeitar.",
  "BOATO: Disseram que A pessoa sabe exatamente quando todo mundo olha pro mesmo lugar.",
  "DETALHE: A pessoa ficou nervosa quando pediram pra repetir a história no mesmo ordem."
]);

// 05 Florista Dona Branca
window.HINTS_BY_SUSPECT["05"].push(...[
  "TESTEMUNHA: O cheiro dela ficou mais forte exatamente quando o assunto chegou perto do crime.",
  "RELATO: A pessoa segurava um saquinho/caixinha como se fosse algo importante demais.",
  "BOATO: A pessoa disse “que horror” sem mudar a expressão; a voz parecia ensaiada.",
  "DETALHE: Tinha um pedacinho pequeno (pétala/folha) grudado nela como rastro recente.",
  "OBS.: Quando perguntaram “você viu?”, A pessoa respondeu “eu sinto” e desviou do fato.",
  "ANOTAÇÃO: A pessoa ficou defensiva quando alguém falou “objeto pequeno”.",
  "RELATO: A pessoa insistiu em arrumar uma coisa (mexer numa mesa/objeto) em vez de responder.",
  "TESTEMUNHA: A pessoa evitou olhar pra um canto específico, mas olhou rápido duas vezes.",
  "BOATO: Disseram que A pessoa queria que todo mundo aceitasse a versão dela “por educação”.",
  "DETALHE: A pessoa tentou encerrar o assunto com “vamos ter calma” logo após uma pergunta chave."
]);

// 06 Médica Dona Violeta
window.HINTS_BY_SUSPECT["06"].push(...[
  "TESTEMUNHA: A pessoa disse “pressão” e “pulso” sem ninguém pedir avaliação de saúde.",
  "RELATO: A pessoa fez perguntas técnicas (“quanto tempo?”, “qual sintoma primeiro?”) antes de ouvir o relato completo.",
  "BOATO: A pessoa falou “pode ser natural” e logo olhou ao redor pra ver quem concordava.",
  "DETALHE: A pessoa ficou tensa quando citaram algo consumido (bebida/comida/remédio).",
  "OBS.: A pessoa corrigiu alguém: “isso não é assim” — como se precisasse controlar a explicação.",
  "ANOTAÇÃO: A pessoa se animou demais ao falar de hipóteses, como se fosse um caso interessante.",
  "RELATO: A pessoa disse “isso acontece” como se estivesse acostumada com o resultado.",
  "TESTEMUNHA: A pessoa lavou as mãos ou pediu álcool logo após um comentário sobre contato.",
  "BOATO: Disseram que A pessoa sabia o ‘tempo certo’ pra um efeito aparecer.",
  "DETALHE: A pessoa evitou falar do que fez nos últimos minutos antes do ocorrido."
]);

// 07 Mordomo James
window.HINTS_BY_SUSPECT["07"].push(...[
  "TESTEMUNHA: A pessoa citou uma porta/corredor específico como se fosse óbvio, mas ninguém tinha mencionado.",
  "RELATO: A pessoa falou “aquela porta não costuma ficar aberta” — e ficou nervoso quando perguntaram ‘por quê’.",
  "BOATO: A pessoa apareceu com um molho/chave/cartão na mão e guardou rápido quando notaram.",
  "DETALHE: A pessoa sabia exatamente a hora que a área ficou vazia.",
  "OBS.: Quando todos discutiam, A pessoa se posicionou perto da saída sem perceber.",
  "ANOTAÇÃO: A pessoa ofereceu “ajuda” para recolher coisas (e assim mexer na cena).",
  "RELATO: A pessoa descreveu quem estava onde como se tivesse vigiado o tempo todo.",
  "TESTEMUNHA: A pessoa olhou para as câmeras/alto das paredes como quem confere se gravou.",
  "BOATO: Disseram que A pessoa conhece passagem lateral que poucos usam.",
  "DETALHE: A pessoa ficou calmo demais quando falaram em ‘acesso’ e ‘porta’."
]);

// 08 Sargento Bigode
window.HINTS_BY_SUSPECT["08"].push(...[
  "TESTEMUNHA: A pessoa disse “todo mundo em fila” antes de qualquer pessoa pedir organização.",
  "RELATO: A pessoa anotou mentalmente nomes e depois repetiu como se fosse lista pronta.",
  "BOATO: A pessoa escolheu quem fala primeiro e quem fala por último, sem perceber.",
  "DETALHE: A pessoa cortou uma pergunta com “isso é irrelevante” — e era exatamente a pergunta certa.",
  "OBS.: A pessoa ficou irritado quando alguém duvidou da versão oficial dele.",
  "ANOTAÇÃO: A pessoa falou “vamos fechar isso” cedo demais.",
  "RELATO: A pessoa perguntou “quem estava perto” e olhou direto para uma pessoa específica.",
  "TESTEMUNHA: A pessoa se acalmou quando percebeu que todos estavam confusos.",
  "BOATO: Disseram que A pessoa tentou decidir o culpado por ‘perfil’ e não por fato.",
  "DETALHE: A pessoa evitou falar onde A pessoa mesmo estava no minuto exato."
]);


// ======================
// ARMAS (09–16)
// ======================

// 09 Arma Química
window.HINTS_BY_WEAPON["09"].push(...[
  "TESTEMUNHA: Por 2 segundos o ar ‘arranhou’ a garganta e depois sumiu.",
  "RELATO: Alguém abriu algo pequeno perto do rosto e fechou rápido.",
  "BOATO: Teve gente esfregando os olhos como se algo irritasse.",
  "DETALHE: O cheiro apareceu e desapareceu rápido, como ‘puff’.",
  "OBS.: Ninguém viu golpe; só viram gente ficando estranha de repente.",
  "ANOTAÇÃO: A pista é quem estava com algo pequeno na mão antes do mal-estar.",
  "RELATO: Ventilador/janela mudou o ar e ‘levou’ o sinal embora.",
  "TESTEMUNHA: Um lenço foi usado no nariz/boca de alguém como reação.",
  "BOATO: Disseram que o culpado ficou longe logo após o ar mudar.",
  "DETALHE: Procure quem ficou melhor rápido demais… como quem já sabia."
]);

// 10 Espingarda
window.HINTS_BY_WEAPON["10"].push(...[
  "TESTEMUNHA: O som foi tão alto que muita gente tapou o ouvido sem pensar.",
  "RELATO: Depois do barulho, teve uma pausa total: ninguém falava por 1–2 segundos.",
  "BOATO: Alguns disseram “foi aqui”, outros “foi lá” — confusão perfeita.",
  "DETALHE: Um eco curto bateu e voltou, como em espaço aberto/alto.",
  "OBS.: O culpado só precisava de 1 instante de pânico para sumir.",
  "ANOTAÇÃO: A pista é quem já estava com rota de saída antes do susto.",
  "RELATO: Alguém olhou pro teto/lado como se previsse o som.",
  "TESTEMUNHA: Um reflexo: todo mundo virou o corpo na mesma direção.",
  "BOATO: Disseram que a história virou “o barulho” e ninguém lembra do resto.",
  "DETALHE: O momento-chave foi o susto — não o depois."
]);

// 11 Faca
window.HINTS_BY_WEAPON["11"].push(...[
  "TESTEMUNHA: Foi um movimento curto de braço, tipo ‘puxa e some’.",
  "RELATO: Um objeto pequeno brilhou por um instante e já não estava mais.",
  "BOATO: Alguém esbarrou e isso virou distração de 1 segundo.",
  "DETALHE: A pista é: quem conseguiu chegar perto sem ninguém impedir?",
  "OBS.: O culpado podia esconder o objeto na roupa em segundos.",
  "ANOTAÇÃO: Procure quem estava com a mão dentro do bolso antes.",
  "RELATO: O ataque parecia ‘silencioso’, sem grande barulho.",
  "TESTEMUNHA: Depois, alguém limpou algo com pressa (pano/roupa).",
  "BOATO: Disseram que o culpado saiu andando, não correndo.",
  "DETALHE: O sinal mais forte é proximidade + rapidez."
]);

// 12 Pá
window.HINTS_BY_WEAPON["12"].push(...[
  "TESTEMUNHA: Teve marca de pó/terra em um canto que não deveria ter.",
  "RELATO: Um som ‘seco e pesado’ aconteceu e foi confundido com algo caindo.",
  "BOATO: Disseram que alguém limpou o chão mais do que o normal.",
  "DETALHE: A pista é quem tinha força e espaço para levantar algo pesado.",
  "OBS.: Um objeto grande precisa de esconderijo momentâneo (canto/parede/atrás).",
  "ANOTAÇÃO: Procure o rastro no piso: arrasto curto, risco, poeira.",
  "RELATO: O culpado pode ter usado a desculpa de ‘mexer com coisa no chão’.",
  "TESTEMUNHA: Vi sujeira na sola do sapato de alguém e A pessoa tentou raspar.",
  "BOATO: Disseram que um canto ficou ‘mais limpo’ do que antes.",
  "DETALHE: Chão e sapato contam mais que palavras."
]);

// 13 Pé de Cabra
window.HINTS_BY_WEAPON["13"].push(...[
  "TESTEMUNHA: Um ‘clac’ metálico único aconteceu, como alavanca fazendo força.",
  "RELATO: Uma porta/trava que era dura ficou fácil de repente.",
  "BOATO: Disseram que algo que estava fechado ‘misteriosamente’ apareceu aberto.",
  "DETALHE: A pista é marca nova em canto de metal/madeira.",
  "OBS.: Quem usou isso pode ter escondido rápido por ser comprido (atrás/embaixo).",
  "ANOTAÇÃO: Procure lasca, arranhão, marca de pressão perto de fechadura.",
  "RELATO: O culpado não precisava de chave — só de 2 segundos e força.",
  "TESTEMUNHA: Alguém ficou massageando a mão/punho depois.",
  "BOATO: Disseram que o culpado criou o próprio caminho.",
  "DETALHE: Se tem acesso forçado, tem ferramenta de alavanca."
]);

// 14 Soco Inglês
window.HINTS_BY_WEAPON["14"].push(...[
  "TESTEMUNHA: Um ‘toque’ rápido perto demais, e depois alguém caiu sem entender.",
  "RELATO: A mão do agressor ficou fechada o tempo todo, como escondendo algo.",
  "BOATO: Disseram que foi no meio de empurrão/esbarrão.",
  "DETALHE: A pista é quem estava colado na vítima sem motivo.",
  "OBS.: O objeto some fácil: bolso rápido e pronto.",
  "ANOTAÇÃO: Procure quem protegeu a mão, como se não quisesse mostrar.",
  "RELATO: Foi tão rápido que pareceu acidente.",
  "TESTEMUNHA: Vi alguém ajeitar a manga como se escondesse pulso/mão.",
  "BOATO: Disseram que o culpado ficou perto o suficiente para ‘um golpe’ e saiu normal.",
  "DETALHE: Proximidade + mão escondida = sinal forte."
]);

// 15 Tesoura
window.HINTS_BY_WEAPON["15"].push(...[
  "TESTEMUNHA: Um objeto comum apareceu na mão e desapareceu em segundos.",
  "RELATO: Teve um som pequeno de ‘clique’ ou metal encostando.",
  "BOATO: Disseram que alguém carregava ferramenta ‘de trabalho’ sem suspeita.",
  "DETALHE: A pista é quem tinha motivo normal pra carregar isso (ou fingir que tinha).",
  "OBS.: É fácil esconder dentro de bolsa/bolso grande.",
  "ANOTAÇÃO: Procure quem mexeu em embalagem, fita, papel… como desculpa.",
  "RELATO: Um corte pode acontecer sem ninguém ver se todos olham pra cima/fora.",
  "TESTEMUNHA: Vi alguém abrir/fechar algo com a mão como se testasse.",
  "BOATO: Disseram que o culpado usou algo “inofensivo” para ninguém desconfiar.",
  "DETALHE: Ferramenta comum + gesto rápido = pista forte."
]);

// 16 Veneno
window.HINTS_BY_WEAPON["16"].push(...[
  "TESTEMUNHA: Alguém ofereceu algo e ficou olhando até a pessoa aceitar.",
  "RELATO: A pessoa ficou mal depois de um intervalo — não imediatamente.",
  "BOATO: Disseram que o culpado insistiu: “só um pouco, vai”.",
  "DETALHE: A pista é o copo/recipiente que ficou ‘só’ com uma pessoa por instantes.",
  "OBS.: Quem fez isso não precisava estar perto no final.",
  "ANOTAÇÃO: Procure quem tocou em bebida/comida e depois se afastou.",
  "RELATO: Teve troca rápida de copos/objetos e ninguém percebeu.",
  "TESTEMUNHA: Vi alguém mexendo no bolso e depois tocando no copo discretamente.",
  "BOATO: Disseram que o culpado ficou calmo porque sabia que demoraria.",
  "DETALHE: O sinal é: oferta + insistência + tempo de efeito."
]);


// ======================
// LOCAIS (17–27)
// ======================

// 17 Banco
window.HINTS_BY_LOCATION["17"].push(...[
  "TESTEMUNHA: A porta giratória prendeu alguém por segundos — e alguém passou livre no mesmo instante.",
  "RELATO: Um canto perto do caixa/guichê ficou sem câmera (ou com ângulo ruim).",
  "BOATO: A fila avançou e isso cobriu um gesto pequeno de mão.",
  "DETALHE: A pista é quem ficou perto de um ponto “de espera” tempo demais.",
  "OBS.: Todo mundo evita escândalo ali — perfeito para algo discreto.",
  "ANOTAÇÃO: Procure quem olhou para o alto (câmera) antes de agir.",
  "RELATO: Um ‘pedido de informação’ distraiu por 2 segundos.",
  "TESTEMUNHA: Vi alguém escolher a posição exata na fila (não foi aleatório).",
  "BOATO: Disseram que o culpado tinha certeza do caminho de entrada e saída.",
  "DETALHE: Lugar controlado + brecha curta = plano."
]);

// 18 Boate
window.HINTS_BY_LOCATION["18"].push(...[
  "TESTEMUNHA: A batida aumentou e ninguém ouvia nada por alguns segundos — momento perfeito.",
  "RELATO: Uma luz piscou e por 1 segundo ficou impossível reconhecer rosto.",
  "BOATO: Um empurrão virou desculpa, e ninguém sabe de onde veio.",
  "DETALHE: A pista é quem ficou perto demais quando a música ‘dropou’.",
  "OBS.: Multidão cria ‘sumiço’ sem corrida.",
  "ANOTAÇÃO: Procure quem escolheu ficar perto da saída, mas fingindo dançar.",
  "RELATO: Todo mundo olhou pro DJ/palco e o resto sumiu da memória.",
  "TESTEMUNHA: Vi alguém mudar de lugar no exato momento da luz forte.",
  "BOATO: Disseram que o culpado esperou a parte mais barulhenta da música.",
  "DETALHE: Som alto + luz piscando = álibi perfeito."
]);

// 19 Cemitério
window.HINTS_BY_LOCATION["19"].push(...[
  "TESTEMUNHA: Folhas secas estalaram e depois parou — como alguém ficando imóvel.",
  "RELATO: Um caminho mais escondido tinha marcas recentes de sapato.",
  "BOATO: Disseram que alguém escolheu o ponto sem poste/luz por perto.",
  "DETALHE: A pista é poeira/terra em roupa de quem diz que não saiu do caminho.",
  "OBS.: Silêncio deixa qualquer passo evidente — então alguém deve ter ido bem devagar.",
  "ANOTAÇÃO: Procure o trecho onde a grama/solo parece pisado recente.",
  "RELATO: Um objeto ficou meio enterrado ou coberto por folhas.",
  "TESTEMUNHA: Vi alguém olhando nomes/pedras como se procurasse um ponto exato.",
  "BOATO: Disseram que o culpado já sabia a rota de saída entre túmulos/cantos.",
  "DETALHE: Aqui, o chão é a testemunha principal."
]);

// 20 Estação de Trem
window.HINTS_BY_LOCATION["20"].push(...[
  "TESTEMUNHA: Um anúncio tocou e todo mundo virou o rosto ao mesmo tempo.",
  "RELATO: A pessoa subiu/desceu escada e sumiu do campo de visão em segundos.",
  "BOATO: Disseram que alguém trocou de plataforma sem motivo aparente.",
  "DETALHE: A pista é quem estava ‘esperando’ e de repente começou a andar rápido.",
  "OBS.: Multidão cria cobertura perfeita para gesto pequeno.",
  "ANOTAÇÃO: Procure quem consultou o relógio logo antes do anúncio.",
  "RELATO: Um esbarrão parece normal ali — e pode ter sido de propósito.",
  "TESTEMUNHA: Vi alguém parar atrás de uma coluna/placa por um instante.",
  "BOATO: Disseram que o culpado escolheu um minuto de troca de fluxo de pessoas.",
  "DETALHE: Anúncio + correria = janela de ação."
]);

// 21 Floricultura
window.HINTS_BY_LOCATION["21"].push(...[
  "TESTEMUNHA: Um cheiro específico ficou mais forte num canto e depois desapareceu.",
  "RELATO: Tesoura/fitas/embalagem fizeram barulhinhos que mascaram outro gesto.",
  "BOATO: Disseram que alguém mexeu em uma caixa/embalagem e fechou rápido.",
  "DETALHE: A pista é pétala/folha fora do lugar formando trilha.",
  "OBS.: A vitrine distrai; o canto de trás esconde.",
  "ANOTAÇÃO: Procure o canto com menos luz e mais objetos empilhados.",
  "RELATO: Um pano foi usado para limpar algo que não era sujeira de planta.",
  "TESTEMUNHA: Vi alguém pegar algo ‘pequeno’ e guardar sem mostrar.",
  "BOATO: Disseram que o culpado se aproveitou do perfume para confundir lembranças.",
  "DETALHE: Beleza + cheiro = distração forte."
]);

// 22 Hospital
window.HINTS_BY_LOCATION["22"].push(...[
  "TESTEMUNHA: Máscara/luva fez impossível ver expressão e mão de alguém.",
  "RELATO: Um carrinho passou e bloqueou a visão por 2 segundos.",
  "BOATO: Disseram que alguém entrou numa sala e saiu por outra porta.",
  "DETALHE: A pista é quem circulava sem ser perguntado (como se fosse rotina).",
  "OBS.: Qualquer mal-estar parece comum ali — perfeito para disfarçar causa.",
  "ANOTAÇÃO: Procure quem sabia o caminho sem olhar placas.",
  "RELATO: Um aviso de “silêncio” fez todo mundo abaixar a voz (ótima distração).",
  "TESTEMUNHA: Vi alguém calmo demais em momento de correria.",
  "BOATO: Disseram que o culpado usou o corredor para sumir na curva.",
  "DETALHE: Curva + porta + carrinho = janela de ação."
]);

// 23 Hotel
window.HINTS_BY_LOCATION["23"].push(...[
  "TESTEMUNHA: Tapete abafou passos — dava pra andar sem ninguém ouvir.",
  "RELATO: Uma porta abriu sem barulho com cartão, e fechou logo em seguida.",
  "BOATO: Disseram que alguém apertou botão do elevador e saiu no andar errado ‘de propósito’.",
  "DETALHE: A pista é quem ficou parado perto de uma porta fingindo esperar.",
  "OBS.: Corredor vazio por 5 segundos já resolve tudo.",
  "ANOTAÇÃO: Procure quem sabia exatamente qual quarto/porta era, sem hesitar.",
  "RELATO: Uma câmera no corredor não pegava o canto perto da curva.",
  "TESTEMUNHA: Vi alguém com cartão na mão e guardando rápido.",
  "BOATO: Disseram que o culpado esperou a faxina/passagem para agir.",
  "DETALHE: Cartão + corredor + silêncio = cenário perfeito."
]);

// 24 Mansão
window.HINTS_BY_LOCATION["24"].push(...[
  "TESTEMUNHA: Uma porta pesada fechou devagar demais, quase sem som.",
  "RELATO: Um corredor lateral ficou vazio e ninguém percebeu por causa do tamanho da casa.",
  "BOATO: Disseram que alguém conhecia uma passagem interna (tipo ‘atalho’).",
  "DETALHE: A pista é quem se moveu sem perguntar ‘onde fica’.",
  "OBS.: Tapetes abafam; distância confunde horário.",
  "ANOTAÇÃO: Procure o canto onde a luz não alcança bem (atrás de escada/coluna).",
  "RELATO: Alguém ficou tempo demais fora da sala principal sem motivo.",
  "TESTEMUNHA: Vi alguém abrir uma porta “decorativa” como se fosse normal.",
  "BOATO: Disseram que o culpado sabia quais salas ficam sempre vazias.",
  "DETALHE: Grandeza + canto cego = oportunidade."
]);

// 25 Praça Central
window.HINTS_BY_LOCATION["25"].push(...[
  "TESTEMUNHA: Um poste piscou/apagou por instante e isso atrapalhou ver direito.",
  "RELATO: Um grupo passou falando alto e cobriu qualquer som pequeno.",
  "BOATO: Disseram que alguém ficou perto da saída/rua lateral desde o início.",
  "DETALHE: A pista é quem olhou 2 vezes para a mesma rota de fuga.",
  "OBS.: Um empurrão vira ‘acidente’ fácil em lugar cheio.",
  "ANOTAÇÃO: Procure quem ficou sempre na beirada, nunca no meio.",
  "RELATO: Alguém mudou de direção do nada quando percebeu atenção nele.",
  "TESTEMUNHA: Vi alguém ajustando capuz/boné/roupa como disfarce.",
  "BOATO: Disseram que o culpado esperou o barulho do trânsito aumentar.",
  "DETALHE: Poste + multidão + saída = janela perfeita."
]);

// 26 Prefeitura
window.HINTS_BY_LOCATION["26"].push(...[
  "TESTEMUNHA: Uma porta de sala fechada abriu e fechou rápido, e ninguém comentou.",
  "RELATO: Alguém segurava papel/pasta junto ao corpo como se escondesse algo.",
  "BOATO: Disseram que alguém usou “tô resolvendo um assunto” pra circular livre.",
  "DETALHE: A pista é quem sabia exatamente qual sala era, sem olhar placa.",
  "OBS.: Corredor frio e pouca conversa = dá pra ouvir passo… então alguém andou bem leve.",
  "ANOTAÇÃO: Procure a sala com menos gente e mais ‘entra e sai’.",
  "RELATO: Um carimbo/assinatura virou desculpa perfeita pra tempo fora.",
  "TESTEMUNHA: Vi alguém sair de sala e olhar pros lados antes de andar.",
  "BOATO: Disseram que o culpado aproveitou troca de turno/horário de movimento.",
  "DETALHE: Sala fechada + papel/pasta = pista forte."
]);

// 27 Restaurante
window.HINTS_BY_LOCATION["27"].push(...[
  "TESTEMUNHA: Um prato caiu/bateu e todo mundo olhou — distração instantânea.",
  "RELATO: O pico de barulho do salão cobriu qualquer som pequeno.",
  "BOATO: Disseram que alguém entrou na cozinha e saiu por outra porta.",
  "DETALHE: A pista é quem ficou com um copo/objeto de outra pessoa por segundos.",
  "OBS.: “Tava trabalhando” é desculpa pra circular onde quiser.",
  "ANOTAÇÃO: Procure quem esperou exatamente a hora do movimento maior.",
  "RELATO: Um guardanapo/pano foi usado para limpar algo rápido.",
  "TESTEMUNHA: Vi alguém olhando pro relógio antes do salão lotar.",
  "BOATO: Disseram que o culpado aproveitou o vai-e-vem dos garçons.",
  "DETALHE: Barulho + cozinha + passagem = janela perfeita."
]);


// Conveniência: lista de tipos disponíveis (usado pelo app)
window.HINT_TYPES = ["weapon","suspect","location"];
