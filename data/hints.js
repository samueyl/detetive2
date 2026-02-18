// data/hints.js — 200 dicas MISTURADAS alinhadas às cartas do Detetive 2
// - As 200 são GERADAS ao carregar (sem precisar escrever 200 na mão)
// - Todas mencionam (direta ou indiretamente) cartas reais do baralho
// - Sem spoiler: não monta "suspeito + arma + local" na mesma frase como acusação
// - Inclui também um gerador de "coerência" para o app.js usar com o trio secreto

(function () {
  // ======= BARALHO (conforme sua lista) =======
  const SUS = [
    { id: "01", nome: "Advogado Sr. Marinho", arqu: "elegante", traços: ["fala mansa", "argumento", "controle", "álibi bonito"] },
    { id: "02", nome: "Chef de Cozinha", arqu: "preciso", traços: ["rotina", "lâmina", "mão firme", "hora certa"] },
    { id: "03", nome: "Coveiro Sergio Soturno", arqu: "sombrio", traços: ["silêncio", "terra", "paciência", "olhar frio"] },
    { id: "04", nome: "Dançarina Srta. Rosa", arqu: "carismática", traços: ["encena", "distração", "ritmo", "sorriso fácil"] },
    { id: "05", nome: "Florista Dona Branca", arqu: "delicada", traços: ["perfume", "luvas", "espinhos", "gentileza afiada"] },
    { id: "06", nome: "Medica Dona Violeta", arqu: "autoridade", traços: ["calma", "diagnóstico", "protocolo", "frieza clínica"] },
    { id: "07", nome: "Mordomo James", arqu: "discreto", traços: ["chaves", "corredores", "rotina alheia", "presença invisível"] },
    { id: "08", nome: "Sargento Bigode", arqu: "força", traços: ["postura", "ordem", "voz alta", "intimidação"] },
  ];

  const LOC = [
    { id: "17", nome: "Banco", tipo: "público", traços: ["câmeras", "fila", "tensão", "sussurros"] },
    { id: "18", nome: "Boate", tipo: "barulhento", traços: ["música", "luz baixa", "gente", "desvio de atenção"] },
    { id: "19", nome: "Cemitério", tipo: "silencioso", traços: ["neblina", "terra", "passos", "eco"] },
    { id: "20", nome: "Estação de trem", tipo: "público", traços: ["apito", "pressa", "multidão", "partidas"] },
    { id: "21", nome: "Floricultura", tipo: "fechado", traços: ["perfume", "vasos", "tesoura", "espinhos"] },
    { id: "22", nome: "Hospital", tipo: "público", traços: ["corredor", "plantão", "silêncio branco", "luvas"] },
    { id: "23", nome: "Hotel", tipo: "público", traços: ["chaves", "quartos", "sussurros", "corredor longo"] },
    { id: "24", nome: "Mansão", tipo: "fechado", traços: ["luxo", "escadas", "portas", "segredos"] },
    { id: "25", nome: "Praça Central", tipo: "público", traços: ["bancos", "luzes", "testemunhas", "ruído"] },
    { id: "26", nome: "Prefeitura", tipo: "público", traços: ["papéis", "carimbos", "salas", "poder"] },
    { id: "27", nome: "Restaurante", tipo: "barulhento", traços: ["cozinha", "pratos", "cheiro", "movimento"] },
  ];

  const ARM = [
    { id: "09", nome: "Arma química", classe: "silenciosa", traços: ["odor sutil", "dose", "tempo", "sintomas"] },
    { id: "10", nome: "Espingarda", classe: "barulhenta", traços: ["estrondo", "pânico", "impacto", "fim rápido"] },
    { id: "11", nome: "Faca", classe: "silenciosa", traços: ["precisão", "curto alcance", "mão firme", "sombra"] },
    { id: "12", nome: "Pá", classe: "pesada", traços: ["terra", "força", "marca", "pressa"] },
    { id: "13", nome: "Pé de cabra", classe: "pesada", traços: ["metal", "alavanca", "porta", "impacto seco"] },
    { id: "14", nome: "Soco Inglês", classe: "discreta", traços: ["curto", "próximo", "raiva contida", "surpresa"] },
    { id: "15", nome: "Tesoura", classe: "silenciosa", traços: ["corte", "oficina", "perto", "brilho rápido"] },
    { id: "16", nome: "Veneno", classe: "silenciosa", traços: ["calma", "espera", "copos", "tempo"] },
  ];

  const byId = (arr, id) => arr.find(x => x.id === id);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  // ======= TEMPLATES MISTURADOS (sem spoiler) =======
  // Regra: frase menciona 1 carta OU 1 local + 1 “clima”, OU 1 arma + 1 “efeito”, etc.
  const T = {
    testemunha: [
      (x) => `Eu passei por ${x} e senti que alguém estava normal demais ali.`,
      (x) => `Em ${x}, o barulho escondia coisas que não deviam ser escondidas.`,
      (x) => `No caminho até ${x}, vi um olhar procurando testemunhas antes de agir.`,
      (x) => `Perto de ${x}, ouvi um som curto… e depois silêncio calculado.`,
      (x) => `Em ${x}, a pressa parecia rotina — e isso me deu arrepio.`,
      (x) => `Eu vi alguém sair de ${x} como quem já tinha ensaiado a calma.`,
      (x) => `Em ${x}, alguém tentou mudar de assunto na hora exata.`,
      (x) => `O ar de ${x} tinha um detalhe estranho: parecia “arrumado” demais.`,
    ],
    relatorio: [
      (x) => `RELATÓRIO: ${x} favorece álibis fáceis. Onde há público, há versões demais.`,
      (x) => `RELATÓRIO: Em ${x}, a cronologia é tudo. A mentira tropeça no relógio.`,
      (x) => `RELATÓRIO: ${x} tem pontos cegos. Alguém sabia onde ficar.`,
      (x) => `RELATÓRIO: Normalidade em ${x} foi excessiva. Indício de controle.`,
      (x) => `RELATÓRIO: Movimentação suspeita em ${x}. Recomenda-se revisar acessos.`,
      (x) => `RELATÓRIO: O ambiente de ${x} ajuda quem quer desaparecer sem correr.`,
    ],
    boato: [
      (x) => `Boato: em ${x}, todo mundo viu… mas ninguém quer dizer que viu.`,
      (x) => `Boato: ${x} é o tipo de lugar perfeito pra uma história “pronta”.`,
      (x) => `Boato: depois de ${x}, alguém ficou calmo demais pra ser inocente.`,
      (x) => `Boato: em ${x}, o culpado só precisou de um minuto certo.`,
      (x) => `Boato: ${x} guarda segredo no que parece banal.`,
    ],
    bilhete: [
      (x) => `BILHETE: “Em ${x}, a verdade sussurra. Não confie no óbvio.”`,
      (x) => `BILHETE amassado: “${x} tem um ponto cego. Procure onde ninguém procura.”`,
      (x) => `BILHETE: “Se a cena em ${x} estiver limpa demais… alguém limpou.”`,
      (x) => `BILHETE: “Em ${x}, quem parece útil demais pode estar guiando você.”`,
    ],
    radio: [
      (x) => `RÁDIO: “Boletim: atenção em ${x}. Há relatos de contradições pequenas.”`,
      (x) => `RÁDIO (chiado): “Evitem pressa em ${x}. Pressa é aliada do culpado.”`,
      (x) => `RÁDIO: “Em ${x}, compare versões por horário. A emoção engana.”`,
      (x) => `RÁDIO: “Alerta: ${x} favorece encenação. Cuidado com a pista perfeita.”`,
    ],

    // armas (1 carta)
    arma: [
      (w) => `Eu ouvi gente comentando sobre ${w}… e ninguém parecia confortável com o assunto.`,
      (w) => `RELATÓRIO: ${w} indica método. Método indica intenção.`,
      (w) => `Boato: ${w} não é escolha de impulso. É escolha de controle.`,
      (w) => `BILHETE: “${w} não precisa de barulho para deixar marca.”`,
      (w) => `RÁDIO: “${w} costuma aparecer quando alguém quer terminar rápido.”`,
      (w) => `O pior de ${w} é o depois — quando tudo parece normal… e não está.`,
    ],

    // suspeitos (1 carta)
    suspeito: [
      (s) => `Eu vi ${s} sorrir no momento errado. Pequeno… mas real.`,
      (s) => `RELATÓRIO: ${s} tem um tipo de calma que pode ser treino.`,
      (s) => `Boato: ${s} sabe conduzir conversa sem levantar a voz.`,
      (s) => `BILHETE: “Observe ${s}. Quem controla a narrativa controla o medo.”`,
      (s) => `RÁDIO: “${s} foi citado em sussurros. Sussurros não surgem do nada.”`,
      (s) => `${s} parecia estar no lugar certo na hora certa… certo demais.`,
    ],
  };

  // ======= GERADOR DAS 200 MISTURADAS =======
  function makeOne() {
    const mode = pick(["testemunha","relatorio","boato","bilhete","radio","arma","suspeito"]);
    if (mode === "arma") return pick(T.arma)(pick(ARM).nome);
    if (mode === "suspeito") return pick(T.suspeito)(pick(SUS).nome);

    // os 5 primeiros usam locais
    const loc = pick(LOC).nome;
    return pick(T[mode])(loc);
  }

  // garantir diversidade: às vezes mistura 2 frases (sem virar spoiler)
  function maybeDouble(line) {
    if (Math.random() > 0.35) return line;
    const extra = makeOne();

    // evita juntar 2 nomes de suspeitos/armas no mesmo bloco muitas vezes
    const bad = /(Advogado|Chef|Coveiro|Dançarina|Florista|Medica|Mordomo|Sargento)/i.test(line)
             && /(Advogado|Chef|Coveiro|Dançarina|Florista|Medica|Mordomo|Sargento)/i.test(extra);
    if (bad) return line;

    return `${line}\n\n${extra}`;
  }

  function generate200() {
    const set = new Set();
    let guard = 0;
    while (set.size < 200 && guard < 5000) {
      let line = maybeDouble(makeOne());

      // finais de suspense
      if (Math.random() < 0.25) {
        const end = pick([
          "Não confie no óbvio. O óbvio é abrigo.",
          "Volte aos minutos antes. Sempre tem um buraco.",
          "A verdade não grita — ela sussurra.",
          "Quem pede pressa quer menos perguntas.",
          "Se a cena está limpa, pergunte: quem limpou?"
        ]);
        line = `${line}\n\n${end}`;
      }

      set.add(line);
      guard++;
    }
    return Array.from(set).slice(0, 200);
  }

  // ======= COERÊNCIA DO TRIO SECRETO (sem spoiler) =======
  // O app.js vai chamar isso e ele NÃO mostra nomes/ids do trio, só características.
  function overlayFromSecret({ susId, armId, locId }) {
    const sus = byId(SUS, susId);
    const arm = byId(ARM, armId);
    const loc = byId(LOC, locId);

    if (!sus || !arm || !loc) {
      return "Há um método aqui. Nada foi por acaso — alguém contou com o ambiente.";
    }

    // 1) local
    const locLine = (() => {
      if (loc.tipo === "barulhento") {
        return `O lugar era barulhento — perfeito para esconder um instante decisivo. Entre luzes e ruídos, uma escolha passa despercebida.`;
      }
      if (loc.tipo === "silencioso") {
        return `O lugar era silencioso — e silêncio é pista quando todo mundo tenta falar por cima. Um passo parece mais pesado quando não há música pra engolir.`;
      }
      if (loc.tipo === "fechado") {
        return `O lugar era fechado — bom para emboscada e ruim para improviso. Quem entrou ali sabia onde o olhar não alcança.`;
      }
      return `O lugar era público — bom para álibis e ruim para verdades. Onde há gente, há versões demais.`;
    })();

    // 2) arma
    const armLine = (() => {
      if (arm.classe === "barulhenta") {
        return `O método parecia feito para terminar rápido: impacto, choque, e depois… uma tentativa de normalizar o caos.`;
      }
      if (arm.classe === "pesada") {
        return `O método deixou um tipo de marca que não precisa gritar — basta um som seco e a coragem de estar perto.`;
      }
      if (arm.classe === "silenciosa") {
        return `O método foi discreto, quase educado. O perigo não foi o som — foi a ausência dele.`;
      }
      return `O método exigiu proximidade. Não é coisa de quem quer distância — é coisa de quem quer controle.`;
    })();

    // 3) suspeito (arquétipo)
    const susLine = (() => {
      const t = pick(sus.traços);
      if (sus.arqu === "autoridade") {
        return `E havia alguém com postura de autoridade. Autoridade acalma… e às vezes cala. Um detalhe de ${t} entrega mais do que discurso.`;
      }
      if (sus.arqu === "discreto") {
        return `E havia alguém discreto, que conhece rotinas alheias. Discrição não chama atenção — ela atravessa. Um detalhe de ${t} ficou no ar.`;
      }
      if (sus.arqu === "carismática") {
        return `E havia alguém carismático o bastante para distrair. Carisma é luz — e a luz também cega. Um detalhe de ${t} apareceu na hora errada.`;
      }
      if (sus.arqu === "sombrio") {
        return `E havia alguém acostumado ao peso do silêncio. Silêncio não é ausência — é escolha. Um detalhe de ${t} pareceu ensaiado.`;
      }
      if (sus.arqu === "elegante") {
        return `E havia alguém com fala bonita. Fala bonita constrói álibi. Um detalhe de ${t} soou como argumento antes da pergunta.`;
      }
      if (sus.arqu === "força") {
        return `E havia alguém com presença forte. Presença forte muda a sala. Um detalhe de ${t} apareceu quando o assunto encostou no perigo.`;
      }
      return `E havia alguém metódico. Método se esconde em rotina. Um detalhe de ${t} não combinou com o resto.`;
    })();

    // entrega 3 linhas coerentes (sem nomes)
    return `${locLine}\n\n${armLine}\n\n${susLine}`;
  }

  // ======= EXPORT =======
  window.HINTS_PACK = window.HINTS_PACK || {};
  window.HINTS_PACK.mix = generate200();

  // função para o app.js chamar
  window.HINTS_PACK.coherentOverlay = overlayFromSecret;

})();
