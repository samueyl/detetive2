// app.js — scan -> auto "Tenho na mão", botão Acusar, caderno X/?/✓, modal imagem grande
// + MODO CRIME (3 scans) + DICAS OFFLINE (HINTS_PACK) com timer aleatório

const CARDS = window.CARDS;

// ===============================
// LocalStorage Keys
// ===============================
const LS = {
  have: "det2_have",
  notes: "det2_notes",
  notebook: "det2_notebook_marks", // { "01":"v" | "q" | "x" }
  accuse: "det2_accuse",           // { sus:"01", arm:"16", loc:"24" }

  // crime + dicas
  secret: "det2_secret",           // { sus:"01", arm:"16", loc:"24" }
  hintHistory: "det2_hint_history" // array de strings
};

const $ = (id) => document.getElementById(id);

// ===============================
// Helpers
// ===============================
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
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}
function saveJSON(key, val){
  localStorage.setItem(key, JSON.stringify(val));
}

let have = loadSet(LS.have);
let marks = loadObj(LS.notebook); // id -> "x" | "q" | "v"

const ALL = Object.keys(CARDS || {});

function normalizeCode(raw){
  const digits = String(raw).trim().replace(/\D/g, "");
  return digits ? digits.padStart(2,"0") : String(raw).trim();
}

// ===============================
// Render "Tenho na mão"
// ===============================
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
}

// ===============================
// Card exibida após scan
// ===============================
let lastId = null;

function showCard(id){
  lastId = id;
  const c = CARDS[id];

  if (!c){
    if ($("cardBox")) $("cardBox").innerHTML = `Carta desconhecida: <strong>${id}</strong>`;
    if ($("cardImg")) $("cardImg").style.display = "none";
    if ($("btnAccuse")) $("btnAccuse").disabled = true;
    return;
  }

  // Aqui pode mostrar o ID do scan normal (se você quiser esconder também, me avisa)
  if ($("cardBox")) $("cardBox").innerHTML = `<strong>${c.nome}</strong> <span class="pill">${c.tipo}</span>`;
  if ($("cardImg")){
    $("cardImg").src = c.img;
    $("cardImg").style.display = "block";
  }

  if ($("btnAccuse")){
    $("btnAccuse").disabled = false;
    $("btnAccuse").onclick = (e) => { e.preventDefault(); openAccuse(); };
  }
}

// ===============================
// Modal imagem grande
// ===============================
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

// ===============================
// Caderno (marcações ✓ ? X)
// ===============================
function markCycle(current){
  // ciclo: vazio -> v -> q -> x -> vazio
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
  const searchEl = $("searchCard");
  const filterEl = $("filterType");
  const grid = $("notebookGrid");
  if (!grid) return;

  const q = (searchEl?.value || "").trim().toLowerCase();
  const filter = filterEl?.value || "all";

  const ids = ALL
    .filter(id => CARDS[id])
    .filter(id => {
      const c = CARDS[id];
      if (filter !== "all" && c.tipo !== filter) return false;
      if (!q) return true;
      return (
        c.nome.toLowerCase().includes(q) ||
        c.tipo.toLowerCase().includes(q) ||
        id.includes(q)
      );
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
      <div class="muted tag">${c.tipo}</div>
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
if ($("notebookClose")) $("notebookClose").onclick = (e) => { e.preventDefault(); e.stopPropagation(); closeNotebook(); };
if ($("notebook")) $("notebook").addEventListener("click", (e)=>{ if (e.target.id === "notebook") closeNotebook(); });

if ($("searchCard")) $("searchCard").addEventListener("input", buildNotebook);
if ($("filterType")) $("filterType").addEventListener("change", buildNotebook);

// ===============================
// Modal Acusar
// ===============================
function fillSelect(selectEl, tipo){
  const ids = Object.keys(CARDS).filter(id => CARDS[id].tipo === tipo).sort();
  selectEl.innerHTML = ids.map(id => `<option value="${id}">${CARDS[id].nome}</option>`).join("");
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

if ($("accuseClose")) $("accuseClose").addEventListener("click", closeAccuse);
if ($("accuse")) $("accuse").addEventListener("click", (e)=>{ if (e.target.id === "accuse") closeAccuse(); });
if ($("accSave")) $("accSave").addEventListener("click", ()=>{
  const obj = { sus: $("accSus").value, arm: $("accArm").value, loc: $("accLoc").value };
  saveObj(LS.accuse, obj);
  renderAccuseResult();
});

// ===============================
// MODO CRIME (3 scans) — SECRETO
// ===============================
let crimeMode = {
  open: false,
  step: 1,
  temp: { sus: null, arm: null, loc: null }
};

function getSecret(){
  const s = loadJSON(LS.secret, null);
  if (!s || !s.sus || !s.arm || !s.loc) return null;
  return s;
}
function hasSecret(){
  return !!getSecret();
}

function setCrimeButtons(){
  const ok = hasSecret();

  if ($("btnHintsStart")) $("btnHintsStart").disabled = !ok;
  if ($("btnHintNow")) $("btnHintNow").disabled = !ok;

  // btnHintsStop fica disabled até iniciar
  if ($("btnHintsStop") && !hintTimer) $("btnHintsStop").disabled = true;
}

function openCrimeModal(){
  if (!$("crime")) return;
  crimeMode.open = true;
  crimeMode.step = 1;
  crimeMode.temp = { sus: null, arm: null, loc: null };

  $("crime").classList.remove("hidden");
  if ($("crimeSave")) $("crimeSave").disabled = true;
  if ($("crimeStep")) $("crimeStep").textContent = "Passo 1/3: escaneie o SUSPEITO";
}

function closeCrimeModal(){
  crimeMode.open = false;
  if ($("crime")) $("crime").classList.add("hidden");
}

function resetCrime(){
  crimeMode.step = 1;
  crimeMode.temp = { sus: null, arm: null, loc: null };
  if ($("crimeSave")) $("crimeSave").disabled = true;
  if ($("crimeStep")) $("crimeStep").textContent = "Passo 1/3: escaneie o SUSPEITO";
}

function acceptCrimeScan(id){
  const c = CARDS[id];
  if (!c) return;

  // NADA de nome/ID do crime na tela.
  // Só valida tipo e avança.
  if (crimeMode.step === 1) {
    if (c.tipo !== "Suspeito") {
      if ($("crimeStep")) $("crimeStep").textContent = "❌ Essa não é de SUSPEITO. Escaneie um SUSPEITO.";
      return;
    }
    crimeMode.temp.sus = id;
    crimeMode.step = 2;
    if ($("crimeStep")) $("crimeStep").textContent = "Passo 2/3: escaneie a ARMA";
    return;
  }

  if (crimeMode.step === 2) {
    if (c.tipo !== "Arma") {
      if ($("crimeStep")) $("crimeStep").textContent = "❌ Essa não é de ARMA. Escaneie uma ARMA.";
      return;
    }
    crimeMode.temp.arm = id;
    crimeMode.step = 3;
    if ($("crimeStep")) $("crimeStep").textContent = "Passo 3/3: escaneie o LOCAL";
    return;
  }

  if (crimeMode.step === 3) {
    if (c.tipo !== "Local") {
      if ($("crimeStep")) $("crimeStep").textContent = "❌ Esse não é de LOCAL. Escaneie um LOCAL.";
      return;
    }
    crimeMode.temp.loc = id;
    if ($("crimeStep")) $("crimeStep").textContent = "✅ Pronto! Agora clique em “Salvar crime”.";
    if ($("crimeSave")) $("crimeSave").disabled = false;
  }
}

function saveCrime(){
  // Salva o trio no localStorage (sem mostrar)
  saveJSON(LS.secret, crimeMode.temp);

  // Reinicia histórico de dica opcional (pra “nova história”)
  // Se você quiser MANTER histórico mesmo trocando o crime, comente as 2 linhas abaixo:
  // saveJSON(LS.hintHistory, []);

  closeCrimeModal();
  setCrimeButtons();
  setHintBox("✅ Crime configurado. Agora você pode iniciar as dicas.", "sistema");
}

function onScanForCrime(id){
  if (!crimeMode.open) return false;
  acceptCrimeScan(id);
  return true;
}

// Eventos do modal crime + botão
if ($("btnCrimeSetup")) $("btnCrimeSetup").addEventListener("click", openCrimeModal);
if ($("crimeClose")) $("crimeClose").addEventListener("click", closeCrimeModal);
if ($("crime")) $("crime").addEventListener("click", (e)=>{ if (e.target.id === "crime") closeCrimeModal(); });
if ($("crimeReset")) $("crimeReset").addEventListener("click", resetCrime);
if ($("crimeSave")) $("crimeSave").addEventListener("click", saveCrime);

// ===============================
// DICAS OFFLINE (HINTS_PACK)
// ===============================
function getHintsPack(){
  return window.HINTS_PACK || window.HINTS_PACKED || window.HINTS_PACKS || null;
}

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
  saveJSON(LS.hintHistory, h.slice(-80)); // guarda últimas 80
}

function pickNonRepeating(list){
  const history = new Set(getHistory());
  const candidates = list.filter(x => !history.has(x));
  if (candidates.length) return candidates[Math.floor(Math.random()*candidates.length)];
  return list[Math.floor(Math.random()*list.length)];
}

function buildHint(){
  const pack = getHintsPack();
  if (!pack) return { text: "⚠️ hints.js não carregou. Confira se você incluiu <script src='./data/hints.js'></script> antes do app.js.", tag: "erro" };

  // se tiver seletor de estilo no futuro, aqui dá pra usar. Por enquanto “mix”
  const base = Array.isArray(pack.mix) && pack.mix.length
    ? pack.mix
    : [
        ...(pack.testemunha || []),
        ...(pack.relatorio || []),
        ...(pack.boato || []),
        ...(pack.bilhete || []),
        ...(pack.radio || []),
        ...(pack.extras || [])
      ];

  let text = pickNonRepeating(base);

  // Temperinho extra (SEM SPOILER) — usa apenas a existência do segredo, não cita nada
  if (hasSecret() && Math.random() < 0.35) {
    const extras = [
      "A sensação é de que alguém queria que tudo parecesse… normal.",
      "O ar ficou pesado por um segundo — e ninguém comentou.",
      "Quando a verdade se aproxima, o culpado tenta acelerar o fim.",
      "Tem pista demais… como se alguém estivesse plantando ruído.",
      "O detalhe mais perigoso é aquele que todo mundo ignora."
    ];
    text = `${text}\n\n${extras[Math.floor(Math.random()*extras.length)]}`;
  }

  return { text, tag: "suspense" };
}

// Timer aleatório
let hintTimer = null;

function scheduleNextHint(){
  // 45–120s (ajuste aqui se quiser)
  const ms = (45 + Math.random() * 75) * 1000;

  hintTimer = setTimeout(() => {
    const { text, tag } = buildHint();
    setHintBox(text, tag);
    pushHistory(text);
    scheduleNextHint();
  }, ms);

  if ($("hintMeta")) $("hintMeta").textContent = `Próxima dica em ~${Math.round(ms/1000)}s`;
}

function startHints(){
  if (!hasSecret()) {
    setHintBox("🔒 Configure o crime (3 scans) antes de iniciar as dicas.", "sistema");
    return;
  }
  if (hintTimer) return;

  scheduleNextHint();

  if ($("btnHintsStart")) $("btnHintsStart").disabled = true;
  if ($("btnHintsStop")) $("btnHintsStop").disabled = false;
  if ($("btnHintNow")) $("btnHintNow").disabled = false;

  setHintBox("🕯️ Dicas iniciadas… fique atento. Elas surgirão em momentos imprevisíveis.", "sistema");
}

function stopHints(){
  if (!hintTimer) return;
  clearTimeout(hintTimer);
  hintTimer = null;

  if ($("btnHintsStart")) $("btnHintsStart").disabled = !hasSecret();
  if ($("btnHintsStop")) $("btnHintsStop").disabled = true;

  if ($("hintMeta")) $("hintMeta").textContent = "Dicas pausadas.";
}

function hintNow(){
  if (!hasSecret()) {
    setHintBox("🔒 Configure o crime (3 scans) antes de pedir uma dica.", "sistema");
    return;
  }
  const { text, tag } = buildHint();
  setHintBox(text, tag);
  pushHistory(text);
}

function clearHintHistory(){
  saveJSON(LS.hintHistory, []);
  setHintBox("Histórico limpo. As próximas dicas vão variar mais.", "sistema");
}

// Botões das dicas
if ($("btnHintsStart")) $("btnHintsStart").addEventListener("click", startHints);
if ($("btnHintsStop")) $("btnHintsStop").addEventListener("click", stopHints);
if ($("btnHintNow")) $("btnHintNow").addEventListener("click", hintNow);
if ($("btnHintsClear")) $("btnHintsClear").addEventListener("click", clearHintHistory);

// ===============================
// Scanner (html5-qrcode)
// ===============================
let qr = null;

async function start(){
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
        const id = normalizeCode(decodedText);
        if (!id) return;

        // mostra o último lido (normal) — se quiser esconder sempre, me avisa
        if ($("last")) $("last").textContent = "✓";

        // Se estiver configurando crime, consome o scan e NÃO exibe carta
        if (onScanForCrime(id)) return;

        // ✅ escaneou -> entra automaticamente na mão
        if (CARDS[id]) {
          have.add(id);
          if (!marks[id]) marks[id] = "q"; // opcional: marca como dúvida no caderno
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

async function stop(){
  if (!qr) return;
  try{ await qr.stop(); }catch{}
  try{ await qr.clear(); }catch{}
  qr = null;
  if ($("btnStart")) $("btnStart").disabled = false;
  if ($("btnStop")) $("btnStop").disabled = true;
  if ($("status")) $("status").textContent = "parado";
}

if ($("btnStart")) $("btnStart").addEventListener("click", start);
if ($("btnStop")) $("btnStop").addEventListener("click", stop);

// ===============================
// Notas
// ===============================
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

// ===============================
// Limpar tudo
// ===============================
if ($("btnClearMarks")) $("btnClearMarks").addEventListener("click", ()=>{
  if (!confirm("Limpar suas marcações, cartas e crime neste celular?")) return;
  have = new Set();
  marks = {};
  saveObj(LS.notebook, marks);
  saveObj(LS.accuse, {});
  saveJSON(LS.secret, null);
  saveJSON(LS.hintHistory, []);
  stopHints();
  refresh();
  renderAccuseResult();
  setCrimeButtons();
  setHintBox("Tudo limpo. Configure o crime (3 scans) novamente.", "sistema");
});

// ===============================
// Fechar com ESC (PC)
// ===============================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeNotebook();
    closeAccuse();
    closeCrimeModal();
  }
});

// Boot
refresh();
renderAccuseResult();
setCrimeButtons();

if (hasSecret()) {
  setHintBox("🔒 Crime já configurado neste celular. Você pode iniciar as dicas.", "sistema");
} else {
  setHintBox("🔒 Configure o crime (3 scans) para começar.", "sistema");
}
