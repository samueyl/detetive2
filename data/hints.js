// data/hints.js — 270 dicas (10 por carta) alinhadas às 27 cartas do baralho
// O app vai sortear UMA dica por vez, escolhendo entre: arma / suspeito / local.

window.HINTS_BY_SUSPECT = {
  // 01 Advogado Sr Marinho
  "01": [
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

  // 02 Chef de Cozinha
  "02": [
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

  // 03 Coveiro Sérgio Soturno
  "03": [
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

  // 04 Dançarina Srta Rosa
  "04": [
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

  // 05 Florista Dona Branca
  "05": [
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

  // 06 Médica Dona Violeta
  "06": [
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

  // 07 Mordomo James
  "07": [
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

  // 08 Sargento Bigode
  "08": [
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
};

window.HINTS_BY_WEAPON = {
  // 09 Arma Química
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

  // 10 Espingarda
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

  // 11 Faca
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

  // 12 Pá
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

  // 13 Pé de Cabra
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

  // 14 Soco Inglês
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

  // 15 Tesoura
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

  // 16 Veneno
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
};

window.HINTS_BY_LOCATION = {
  // 17 Banco
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

  // 18 Boate
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

  // 19 Cemitério
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

  // 20 Estação de Trem
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

  // 21 Floricultura
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

  // 22 Hospital
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

  // 23 Hotel
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

  // 24 Mansão
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

  // 25 Praça Central
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

  // 26 Prefeitura
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

  // 27 Restaurante
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
};

// Conveniência: lista de tipos disponíveis (usado pelo app)
window.HINT_TYPES = ["weapon","suspect","location"];
