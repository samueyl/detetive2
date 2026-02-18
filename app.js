// app.js — Crime setup (3 scans) via botão único, dicas automáticas, coerência sem spoiler
const CARDS = window.CARDS;
const HINTS_PACK = window.HINTS_PACK || {};

const LS = {
  have: "det2_have",
  notes: "det2_notes",
  notebook: "det2_notebook_marks", // id -> "x" | "q" | "v"
  accuse: "det2_accuse",           // { sus, arm, loc }
  secret: "det2_secret",           // { a, b, c } (ids embaralhados, sem tipo explícito)
  hintHistory: "det2_hint_history",// array de strings
  hintStartedAt: "det2_hint_started_at"
};

const $ = (id) => document.getElementById(id);

function loadSet(key){
  try { return new Set(JSON.parse(localStorage.getItem(key) || "[]")); }
  catch { return new Set(); }
}
function saveSet(key, set){
  localStorage.setItem(key, JSON.stringify(Array.from(set)));
}
function loadObj(key){
  try { return JSON.parse(localStorage.getItem(key) || "{}"); }
  catch { return {}; }
}
function saveObj(key, obj){
  localStorage.setItem(key, JSON.stringify(obj));
}
function loadJSON(key, fallback){
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
  catch { return fallback; }
}
function saveJSON(key, val){
  localStorage.setItem(key, JSON.stringify(val));
}

let have = loadSet(LS.have);
let marks = loadObj(LS.notebook);
const ALL = Object.keys(CARDS);

function normalizeCode(raw){
  const digits = String(raw).trim().replace(/\D/g, "");
  return digits ? digits.padStart(2,"0") : String(raw).trim();
}

// ======================
// UI básicas
// ======================
function renderList(container, ids, {clickToOpen=false} = {}){
  if (!container) return;
  container.innerHTML = "";
  ids.forEach(id=>{
    const c = CARDS[id];
    if (!c) return;

    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img class="thumb" src="${c.img}" alt="${c.nome}">
      <div>
        <div class="k">${c.nome}</div>
        <div class="muted tag">${c.tipo} • ${id}</div>
      </div>
    `;

    if (clickToOpen){
      div.style.cursor = "pointer";
      div.addEventListener("click", ()=> openModal(c.nome, c.img));
    }
    container.appendChild(div);
  });
}

function refresh(){
  renderList($("haveList"), Array.from(have).sort(), {clickToOpen:true});
  saveSet(LS.have, have);
  saveObj(LS.notebook, marks);
  setCrimePill();
}

// ======================
// Modal imagem grande
// ======================
function openModal(title, img){
  if (!$("modal")) return;
  $("modalTitle").textContent = title;
  $("modalImg").src = img;
  $("modal").classList.remove("hidden");
}
function closeModal(){
  if (!$("modal")) return;
  $("modal").classList.add("hidden");
  $("modalImg").src = "";
}
if ($("modalClose")) $("modalClose").addEventListener("click", closeModal);
if ($("modal")) $("modal").addEventListener("click", (e)=>{ if (e.target.id === "modal") closeModal(); });

// ======================
// Caderno X/?/✓
/* (mantive igual ao seu) */
// ======================
function markCycle(current){
  if (!current) return "v";
  if (current === "v") return "q";
  if (current === "q") return "x";
  return null;
}
function markLabel(m){
  if (m === "x") return {text:"X", cls:"x"};
  if (m === "q") return {text:"?", cls:"q"};
  if (m === "v") return {text:"✓", cls:"v"};
  return {text:"—", cls:""};
}
function buildNotebook(){
  const grid = $("notebookGrid");
  if (!grid) return;

  const q = (($("searchCard")?.value) || "").trim().toLowerCase();
  const filter = ($("filterType")?.value) || "all";

  const ids = ALL
    .filter(id => CARDS[id])
    .filter(id => {
      const c = CARDS[id];
      if (filter !== "all" && c.tipo !== filter) return false;
      if (!q) return true;
      return (c.nome.toLowerCase().includes(q) || c.tipo.toLowerCase().includes(q) || id.includes(q));
    })
    .sort();

  grid.innerHTML = "";

  ids.forEach(id=>{
    const c = CARDS[id];
    const m = marks[id];
    const b = markLabel(m);

    const div = document.createElement("div");
    div.className = "cardMini";
    div.innerHTML = `
      <img src="${c.img}" alt="${c.nome}">
      <div class="badge">
        <div class="name">${c.nome}</div>
        <div class="mark ${b.cls}">${b.text}</div>
      </div>
      <div class="muted tag">${c.tipo} • ${id}</div>
    `;

    div.addEventListener("click", ()=>{
      const next = markCycle(marks[id]);
      if (next) marks[id] = next;
      else delete marks[id];
      saveObj(LS.notebook, marks);
      buildNotebook();
    });

    div.addEventListener("dblclick", (e)=>{
      e.preventDefault();
      openModal(c.nome, c.img);
    });

    grid.appendChild(div);
  });
}
function openNotebook(){
  if (!$("notebook")) return;
  $("notebook").classList.remove("hidden");
  buildNotebook();
}
function closeNotebook(){
  if (!$("notebook")) return;
  $("notebook").classList.add("hidden");
}
if ($("btnNotebook")) $("btnNotebook").addEventListener("click", (e)=>{ e.preventDefault(); openNotebook(); });
if ($("notebookClose")) $("notebookClose").onclick = (e)=>{ e.preventDefault(); e.stopPropagation(); closeNotebook(); };
if ($("notebook")) $("notebook").addEventListener("click", (e)=>{ if (e.target.id === "notebook") closeNotebook(); });
if ($("searchCard")) $("searchCard").addEventListener("input", buildNotebook);
if ($("filterType")) $("filterType").addEventListener("change", buildNotebook);

// ======================
// Acusação (mantive)
// ======================
function fillSelect(selectEl, tipo){
  const ids = Object.keys(CARDS).filter(id => CARDS[id].tipo === tipo).sort();
  selectEl.innerHTML = ids.map(id => `<option value="${id}">${CARDS[id].nome} (${id})</option>`).join("");
}
function renderAccuseResult(){
  const saved = loadObj(LS.accuse);
  const box = $("accResult");
  if (!box) return;

  if (!saved.sus || !saved.arm || !saved.loc){
    box.textContent = "Nenhuma acusação salva ainda.";
    return;
  }
  box.innerHTML = `Sua acusação salva: <b>${CARDS[saved.sus].nome}</b> + <b>${CARDS[saved.arm].nome}</b> + <b>${CARDS[saved.loc].nome}</b>`;
}
function openAccuse(){
  const modal = $("accuse");
  if (!modal) return;

  fillSelect($("accSus"), "Suspeito");
  fillSelect($("accArm"), "Arma");
  fillSelect($("accLoc"), "Local");

  const saved = loadObj(LS.accuse);
  if (saved.sus) $("accSus").value = saved.sus;
  if (saved.arm) $("accArm").value = saved.arm;
  if (saved.loc) $("accLoc").value = saved.loc;

  renderAccuseResult();
  modal.classList.remove("hidden");
}
function closeAccuse(){
  const modal = $("accuse");
  if (!modal) return;
  modal.classList.add("hidden");
}
if ($("btnAccuse")) $("btnAccuse").addEventListener("click", (e)=>{ e.preventDefault(); openAccuse(); });
if ($("accuseClose")) $("accuseClose").addEventListener("click", closeAccuse);
if ($("accuse")) $("accuse").addEventListener("click", (e)=>{ if (e.target.id === "accuse") closeAccuse(); });
if ($("accSave")) $("accSave").addEventListener("click", ()=>{
  const obj = { sus: $("accSus").value, arm: $("accArm").value, loc: $("accLoc").value };
  saveObj(LS.accuse, obj);
  renderAccuseResult();
});

// ======================
// MODO CRIME (3 scans) — SEM dizer “suspeito/arma/local”
// ======================
let crimeSetup = {
  active: false,
  count: 0,
  picked: [] // ids escaneados
};

function getSecret(){
  return loadJSON(LS.secret, null);
}
function hasSecret(){
  const s = getSecret();
  return !!(s && s.a && s.b && s.c);
}
function setCrimePill(){
  const pill = $("crimePill");
  if (!pill) return;
  pill.textContent = hasSecret() ? "crime: configurado" : "crime: não configurado";
}

function startCrimeSetup(){
  crimeSetup.active = true;
  crimeSetup.count = 0;
  crimeSetup.picked = [];
  setHintBox("🔒 Configuração do crime: escaneie 3 cartas (sem revelar).", "sistema");
}

function finishCrimeSetup(){
  // embaralha e salva como a/b/c sem indicar tipo
  const [x,y,z] = crimeSetup.picked;
  const shuffled = [x,y,z].sort(()=>Math.random()-0.5);

  saveJSON(LS.secret, { a: shuffled[0], b: shuffled[1], c: shuffled[2] });
  crimeSetup.active = false;

  setCrimePill();
  setHintBox("✅ Crime configurado. As pistas vão começar a aparecer em tempos aleatórios…", "sistema");

  // inicia dicas automaticamente
  startHintsAuto();
}

function handleCrimeScan(id){
  if (!crimeSetup.active) return false;

  if (!CARDS[id]) return true; // consumiu mas é inválido
  if (crimeSetup.picked.includes(id)) {
    setHintBox(`⚠️ Carta repetida. Escaneie outra (${crimeSetup.count}/3).`, "sistema");
    return true;
  }

  crimeSetup.picked.push(id);
  crimeSetup.count++;

  if (crimeSetup.count < 3) {
    setHintBox(`🔒 Carta registrada (${crimeSetup.count}/3). Continue escaneando…`, "sistema");
  } else {
    setHintBox("🔒 3/3 registradas. Pronto.", "sistema");
    finishCrimeSetup();
  }
  return true;
}

// ======================
// DICAS OFFLINE — automáticas
// ======================
function setHintBox(text, tag="dica"){
  if ($("hintBox")) $("hintBox").textContent = text;
  if ($("hintMeta")) $("hintMeta").textContent = `(${tag}) ${new Date().toLocaleTimeString()}`;
}

function getHistory(){
  return loadJSON(LS.hintHistory, []);
}
function pushHistory(text){
  const h = getHistory();
  h.push(text);
  saveJSON(LS.hintHistory, h.slice(-120)); // guarda mais
}
function pickNonRepeating(list){
  const history = new Set(getHistory());
  const candidates = list.filter(x => !history.has(x));
  if (candidates.length) return candidates[Math.floor(Math.random()*candidates.length)];
  return list[Math.floor(Math.random()*list.length)];
}

// “Coerência” sem spoiler: deriva atributos genéricos do trio secreto
function secretSignals(){
  const s = getSecret();
  if (!s) return null;

  // tenta mapear tipos SEM mostrar
  const ids = [s.a, s.b, s.c].filter(Boolean);
  const types = ids.map(id => CARDS[id]?.tipo).filter(Boolean);

  const hasSus = types.includes("Suspeito");
  const hasArm = types.includes("Arma");
  const hasLoc = types.includes("Local");

  // fallback se algum tipo não existir
  if (!hasSus || !hasArm || !hasLoc) return {
    tone: "médio",
    clue: "Há algo calculado nisso. O culpado não improvisou — ele contou com o ambiente."
  };

  const locId = ids.find(id => CARDS[id]?.tipo === "Local");
  const armId = ids.find(id => CARDS[id]?.tipo === "Arma");
  const susId = ids.find(id => CARDS[id]?.tipo === "Suspeito");

  const locName = (CARDS[locId]?.nome || "").toLowerCase();
  const armName = (CARDS[armId]?.nome || "").toLowerCase();
  const susName = (CARDS[susId]?.nome || "").toLowerCase();

  // heurísticas simples (sem citar nomes)
  const isSilentWeapon = /(veneno|corda|faca|punhal|tesoura|travesseiro)/i.test(armName);
  const isLoudWeapon   = /(rev[oó]lver|arma|tiro|machado|marreta)/i.test(armName);
  const isPublicPlace  = /(pra(ç|c)a|rua|sala|hall|recep|mercado|bar|clube)/i.test(locName);
  const isClosedPlace  = /(quarto|escrit[oó]rio|banheiro|cozinha|dep[oó]sito|por[aã]o)/i.test(locName);

  const profile = [];
  if (isSilentWeapon) profile.push("silencioso");
  if (isLoudWeapon) profile.push("barulhento");
  if (isPublicPlace) profile.push("público");
  if (isClosedPlace) profile.push("fechado");

  const clueBank = [];

  // arma
  if (isSilentWeapon) clueBank.push("A pista parece não ter sido barulho — foi ausência dele. O golpe foi discreto, quase invisível.");
  else if (isLoudWeapon) clueBank.push("Há um eco emocional no ambiente, como se alguém esperasse que o impacto resolvesse tudo rápido.");
  else clueBank.push("A arma não foi escolhida por acaso. Ela combina com alguém que queria controle, não caos.");

  // local
  if (isPublicPlace) clueBank.push("O lugar favorece álibis: muita gente, muita história, pouca certeza.");
  else if (isClosedPlace) clueBank.push("O lugar favorece emboscada: pouca fuga, muita confiança, pouco tempo para reagir.");
  else clueBank.push("O lugar ajuda o culpado a desaparecer sem correr — como se fosse parte da rotina.");

  // suspeito (sem nome)
  clueBank.push("O culpado não quer ser notado: ele prefere parecer útil, normal, inevitável.");

  return {
    tone: "alto",
    clue: clueBank[Math.floor(Math.random()*clueBank.length)]
  };
}

function buildHint(){
  const baseList = (HINTS_PACK.mix && HINTS_PACK.mix.length) ? HINTS_PACK.mix : [
    "A noite engoliu um detalhe pequeno… e é exatamente nele que a verdade costuma morar."
  ];

  let text = pickNonRepeating(baseList);

  const sig = secretSignals();
  if (sig && Math.random() < 0.70) {
    // junta 2 frases para dar coerência sem entregar
    text = `${text}\n\n${sig.clue}`;
  }

  // deixa mais suspense
  const endings = [
    "Não confie no óbvio. O óbvio é o abrigo do culpado.",
    "Quando alguém tenta encerrar o assunto, é porque o assunto morde.",
    "Se você travar, volte aos minutos antes. Sempre tem um buraco ali.",
    "A verdade não grita — ela sussurra onde ninguém quer ouvir."
  ];
  if (Math.random() < 0.35) {
    text = `${text}\n\n${endings[Math.floor(Math.random()*endings.length)]}`;
  }

  return { text, tag: "pista" };
}

let hintTimer = null;

function scheduleNextHint(){
  // >>> AJUSTE AQUI O TEMPO <<<
  // Ex: 45–120s
  const ms = (45 + Math.random() * 75) * 1000;

  hintTimer = setTimeout(() => {
    const { text, tag } = buildHint();
    setHintBox(text, tag);
    pushHistory(text);
    scheduleNextHint();
  }, ms);

  if ($("hintMeta")) $("hintMeta").textContent = `Próxima pista em ~${Math.round(ms/1000)}s`;
}

function startHintsAuto(){
  if (!hasSecret()) return;
  if (hintTimer) return;

  saveJSON(LS.hintStartedAt, Date.now());
  scheduleNextHint();
}

function stopHintsAuto(){
  if (!hintTimer) return;
  clearTimeout(hintTimer);
  hintTimer = null;
}

// ======================
// Scanner — agora com CRIME SETUP no botão, sem precisar apertar “iniciar”
// ======================
// anti-repetição / lock
let scanLockUntil = 0;
let lastScanId = null;
let lastScanAt = 0;


let qr = null;

async function startCamera(){
  if (qr) return;
  qr = new Html5Qrcode("reader");

  if ($("btnStart")) $("btnStart").disabled = true;
  if ($("btnStop")) $("btnStop").disabled = false;
  if ($("status")) $("status").textContent = "iniciando...";

  try{
    await qr.start(
      { facingMode:"environment" },
      { fps:10, qrbox:250 },
      (decodedText)=>{
        const now = Date.now();

        // ===== Anti-repetição do mesmo QR (html5-qrcode lê várias vezes) =====
        if (now < scanLockUntil) return;

        const id = normalizeCode(decodedText);
        if (!id) return;

        // trava leituras repetidas do MESMO id por 1.2s
        if (id === lastScanId && (now - lastScanAt) < 1200) return;
        lastScanId = id;
        lastScanAt = now;

        // ===== Se estiver configurando o crime: NÃO REVELA NADA =====
        if (crimeSetup.active) {
          // NÃO mostra o ID na UI enquanto configura
          if ($("last")) $("last").textContent = "—";

          // opcional: limpa a carta exibida (evita “piscar” imagem/nome)
          if ($("cardBox")) $("cardBox").textContent = "Escaneie uma carta…";
          if ($("cardImg")) $("cardImg").style.display = "none";

          const consumed = handleCrimeScan(id);

          // trava um pouco toda vez que registra, pra não pegar repetido
          scanLockUntil = now + 1400;

          // se acabou de finalizar (3/3), trava mais ainda
          if (!crimeSetup.active && consumed) {
            scanLockUntil = now + 3000;
          }
          return; // 🔥 garante que nunca vai cair no showCard
        }

        // ===== Fluxo normal do jogador =====
        if ($("last")) $("last").textContent = id;

        if (CARDS[id]) {
          have.add(id);
          if (!marks[id]) marks[id] = "q";
          refresh();
        }

        showCard(id);
      }

    );

    if ($("status")) $("status").textContent = "rodando";
  }catch(e){
    console.error(e);
    if ($("status")) $("status").textContent = "câmera bloqueada";
    if ($("btnStart")) $("btnStart").disabled = false;
    if ($("btnStop")) $("btnStop").disabled = true;
    qr = null;
    alert("Câmera bloqueada. Abra pelo link HTTPS do GitHub Pages (não use content://).");
  }
}

async function stopCamera(){
  if (!qr) return;
  try{ await qr.stop(); }catch{}
  try{ await qr.clear(); }catch{}
  qr = null;
  if ($("btnStart")) $("btnStart").disabled = false;
  if ($("btnStop")) $("btnStop").disabled = true;
  if ($("status")) $("status").textContent = "parado";
}

function showCard(id){
  const c = CARDS[id];
  if (!c){
    if ($("cardBox")) $("cardBox").innerHTML = `Carta desconhecida.`;
    if ($("cardImg")) $("cardImg").style.display = "none";
    if ($("btnAccuse")) $("btnAccuse").disabled = true;
    return;
  }

  if ($("cardBox")) $("cardBox").innerHTML = `<strong>${c.nome}</strong> <span class="pill">${c.tipo}</span>`;
  if ($("cardImg")) {
    $("cardImg").src = c.img;
    $("cardImg").style.display = "block";
  }
  if ($("btnAccuse")) $("btnAccuse").disabled = false;
}

// Botão “Configurar Crime (ligar câmera)”
// -> liga câmera (se ainda não estiver) e ativa modo 3 scans
if ($("btnCrimeSetup")) {
  $("btnCrimeSetup").addEventListener("click", async (e)=>{
    e.preventDefault();
    // liga câmera se necessário
    await startCamera();
    startCrimeSetup();
  });
}

// Se você ainda quiser manter Start/Stop manual, pode deixar:
if ($("btnStart")) $("btnStart").addEventListener("click", (e)=>{ e.preventDefault(); startCamera(); });
if ($("btnStop")) $("btnStop").addEventListener("click", (e)=>{ e.preventDefault(); stopCamera(); });

// ======================
// Notas
// ======================
if ($("notes")) $("notes").value = localStorage.getItem(LS.notes) || "";
if ($("btnSaveNotes")) $("btnSaveNotes").addEventListener("click", ()=>{
  localStorage.setItem(LS.notes, $("notes").value);
  if ($("noteStatus")) $("noteStatus").textContent = "Salvo ✅";
  setTimeout(()=> { if ($("noteStatus")) $("noteStatus").textContent=""; }, 1200);
});
if ($("btnLoadNotes")) $("btnLoadNotes").addEventListener("click", ()=>{
  if ($("notes")) $("notes").value = localStorage.getItem(LS.notes) || "";
  if ($("noteStatus")) $("noteStatus").textContent = "Carregado ✅";
  setTimeout(()=> { if ($("noteStatus")) $("noteStatus").textContent=""; }, 1200);
});

// Limpar
if ($("btnClearMarks")) $("btnClearMarks").addEventListener("click", ()=>{
  if (!confirm("Limpar suas marcações e dados deste celular?")) return;
  have = new Set();
  marks = {};
  saveObj(LS.notebook, marks);
  saveObj(LS.accuse, {});
  saveJSON(LS.secret, null);
  saveJSON(LS.hintHistory, []);
  stopHintsAuto();
  refresh();
  renderAccuseResult();
  setHintBox("Tudo limpo. Configure o crime novamente para receber pistas.", "sistema");
});

// ESC (PC)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeNotebook();
    closeAccuse();
  }
});

// boot
refresh();
renderAccuseResult();
setCrimePill();

// se já tiver crime configurado, retoma dicas automaticamente ao abrir a página
if (hasSecret()) {
  setHintBox("🔒 Crime já configurado neste celular. Pistas podem aparecer a qualquer momento…", "sistema");
  startHintsAuto();
}
