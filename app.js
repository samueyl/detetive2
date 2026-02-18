// app.js — Crime setup (3 telas: 1 scan e fecha), dicas automáticas offline, caderno, acusação

const CARDS = window.CARDS;
const HINTS_PACK = window.HINTS_PACK || {};

const LS = {
  have: "det2_have",
  notes: "det2_notes",
  notebook: "det2_notebook_marks", // id -> "x" | "q" | "v"
  accuse: "det2_accuse",           // { sus, arm, loc }
  secret: "det2_secret",           // { a, b, c } ids embaralhados
  hintHistory: "det2_hint_history" // array de strings
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
        <div class="muted tag">${c.tipo}</div>
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
if ($("notebookClose")) $("notebookClose").onclick = (e)=>{ e.preventDefault(); e.stopPropagation(); closeNotebook(); };
if ($("notebook")) $("notebook").addEventListener("click", (e)=>{ if (e.target.id === "notebook") closeNotebook(); });
if ($("searchCard")) $("searchCard").addEventListener("input", buildNotebook);
if ($("filterType")) $("filterType").addEventListener("change", buildNotebook);

// ======================
// Acusação
// ======================
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
if ($("btnAccuse")) $("btnAccuse").addEventListener("click", (e)=>{ e.preventDefault(); openAccuse(); });
if ($("accuseClose")) $("accuseClose").addEventListener("click", closeAccuse);
if ($("accuse")) $("accuse").addEventListener("click", (e)=>{ if (e.target.id === "accuse") closeAccuse(); });
if ($("accSave")) $("accSave").addEventListener("click", ()=>{
  const obj = { sus: $("accSus").value, arm: $("accArm").value, loc: $("accLoc").value };
  saveObj(LS.accuse, obj);
  renderAccuseResult();
});

// ======================
// Crime + Dicas (OFFLINE)
// ======================
function getSecret(){ return loadJSON(LS.secret, null); }
function hasSecret(){
  const s = getSecret();
  return !!(s && s.a && s.b && s.c);
}
function setCrimePill(){
  const pill = $("crimePill");
  if (!pill) return;
  pill.textContent = hasSecret() ? "crime: configurado" : "crime: não configurado";
}

function setHintBox(text, tag="pista"){
  if ($("hintBox")) $("hintBox").textContent = text;
  if ($("hintMeta")) $("hintMeta").textContent = `(${tag}) ${new Date().toLocaleTimeString()}`;
}
function getHistory(){ return loadJSON(LS.hintHistory, []); }
function pushHistory(text){
  const h = getHistory();
  h.push(text);
  saveJSON(LS.hintHistory, h.slice(-200));
}
function pickNonRepeating(list){
  const history = new Set(getHistory());
  const candidates = list.filter(x => !history.has(x));
  if (candidates.length) return candidates[Math.floor(Math.random()*candidates.length)];
  return list[Math.floor(Math.random()*list.length)];
}

// coerência leve sem spoiler
function secretSignals(){
  const s = getSecret();
  if (!s) return null;

  const ids = [s.a, s.b, s.c].filter(Boolean);
  const types = ids.map(id => CARDS[id]?.tipo).filter(Boolean);

  const hasSus = types.includes("Suspeito");
  const hasArm = types.includes("Arma");
  const hasLoc = types.includes("Local");
  if (!hasSus || !hasArm || !hasLoc) return { clue: "Há um método aqui. Nada foi por acaso." };

  const locId = ids.find(id => CARDS[id]?.tipo === "Local");
  const armId = ids.find(id => CARDS[id]?.tipo === "Arma");

  const locName = (CARDS[locId]?.nome || "").toLowerCase();
  const armName = (CARDS[armId]?.nome || "").toLowerCase();

  const isSilentWeapon = /(veneno|corda|faca|punhal|tesoura|travesseiro)/i.test(armName);
  const isLoudWeapon   = /(rev[oó]lver|tiro|machado|marreta)/i.test(armName);
  const isPublicPlace  = /(pra(ç|c)a|rua|hall|recep|mercado|bar|clube|sala)/i.test(locName);
  const isClosedPlace  = /(quarto|escrit[oó]rio|banheiro|cozinha|dep[oó]sito|por[aã]o)/i.test(locName);

  const bank = [];
  if (isSilentWeapon) bank.push("Não foi o barulho que denunciou… foi a ausência dele. Tudo pareceu quieto demais.");
  else if (isLoudWeapon) bank.push("O impacto parece ter sido pensado para terminar rápido. E rápido é sempre suspeito.");
  else bank.push("A ferramenta do crime combina com controle, não com caos.");

  if (isPublicPlace) bank.push("Um lugar cheio de gente é perfeito para álibis. E para mentiras bonitas.");
  else if (isClosedPlace) bank.push("Um lugar fechado favorece emboscada: confiança, poucos olhos e pouco tempo.");
  else bank.push("O ambiente ajudou alguém a desaparecer sem correr, como parte da rotina.");

  bank.push("O culpado prefere parecer normal — quase indispensável — enquanto empurra a narrativa.");

  return { clue: bank[Math.floor(Math.random()*bank.length)] };
}

function buildHint(){
  const baseList = (HINTS_PACK.mix && HINTS_PACK.mix.length)
    ? HINTS_PACK.mix
    : ["A noite engoliu um detalhe pequeno… e é nele que a verdade costuma morar."];

  let text = pickNonRepeating(baseList);

  const sig = secretSignals();
  if (sig && Math.random() < 0.75) {
    text = `${text}\n\n${sig.clue}`;
  }

  const endings = [
    "Não confie no óbvio. O óbvio é o abrigo do culpado.",
    "Quando alguém quer encerrar o assunto, é porque o assunto morde.",
    "Volte aos minutos antes. Sempre existe um buraco ali.",
    "A verdade não grita — ela sussurra onde ninguém quer ouvir."
  ];
  if (Math.random() < 0.35) {
    text = `${text}\n\n${endings[Math.floor(Math.random()*endings.length)]}`;
  }

  return { text, tag: "pista" };
}

let hintTimer = null;

// >>>>> ALTERE O TEMPO AQUI <<<<<
// exemplo: 30–90s => (30 + Math.random()*60)*1000
function scheduleNextHint(){
  const ms = (45 + Math.random() * 75) * 1000;

  hintTimer = setTimeout(() => {
    const { text, tag } = buildHint();
    setHintBox(text, tag);
    pushHistory(text);
    scheduleNextHint();
  }, ms);
}

function startHintsAuto(){
  if (!hasSecret()) return;
  if (hintTimer) return;
  scheduleNextHint();
}
function stopHintsAuto(){
  if (!hintTimer) return;
  clearTimeout(hintTimer);
  hintTimer = null;
}

// ======================
// CRIME SETUP — 3 TELAS (1 scan e fecha)
// ======================
let crimeWizard = {
  step: 0,     // 0..3
  picked: []   // ids
};

let crimeQr = null;

function openCrimeModal(){
  if (!$("crime")) return;
  $("crime").classList.remove("hidden");
  if ($("crimeReader")) $("crimeReader").style.display = "none";
  updateCrimeStepText();
}

function closeCrimeModal(){
  if (!$("crime")) return;
  $("crime").classList.add("hidden");
  if ($("crimeReader")) $("crimeReader").style.display = "none";
}

function updateCrimeStepText(){
  const stepEl = $("crimeStep");
  if (!stepEl) return;
  const n = Math.max(1, Math.min(3, crimeWizard.step + 1));
  stepEl.textContent = `Carta ${n}/3 (secreta)`;
}

function resetCrimeWizard(){
  crimeWizard.step = 0;
  crimeWizard.picked = [];
  saveJSON(LS.secret, null);
  saveJSON(LS.hintHistory, []);
  stopHintsAuto();
  setCrimePill();
  setHintBox("🔒 Recomeçado. Clique em Configurar crime para escanear 3 cartas secretas.", "sistema");
}

async function stopCrimeCamera(){
  if (!crimeQr) return;
  try { await crimeQr.stop(); } catch {}
  try { await crimeQr.clear(); } catch {}
  crimeQr = null;
  if ($("crimeReader")) $("crimeReader").style.display = "none";
}

async function startCrimeOneShot(){
  // abre a área do leitor no modal
  if ($("crimeReader")) $("crimeReader").style.display = "block";

  // cria leitor do modal
  if (crimeQr) return;
  crimeQr = new Html5Qrcode("crimeReader");

  try{
    await crimeQr.start(
      { facingMode:"environment" },
      { fps:10, qrbox:250 },
      async (decodedText)=>{
        const id = normalizeCode(decodedText);
        if (!CARDS[id]) return;

        // evita repetida
        if (crimeWizard.picked.includes(id)) {
          setHintBox("⚠️ Carta repetida. Pegue outra carta secreta e escaneie.", "sistema");
          return;
        }

        // registrou 1 carta -> para e fecha IMEDIATAMENTE
        crimeWizard.picked.push(id);
        crimeWizard.step += 1;

        await stopCrimeCamera();
        closeCrimeModal();

        setHintBox(`🔒 Carta secreta registrada (${crimeWizard.step}/3).`, "sistema");

        if (crimeWizard.step >= 3) {
          // salva embaralhado (a/b/c)
          const shuffled = [...crimeWizard.picked].sort(()=>Math.random()-0.5);
          saveJSON(LS.secret, { a: shuffled[0], b: shuffled[1], c: shuffled[2] });

          setCrimePill();
          setHintBox("✅ Crime configurado. As pistas vão começar a aparecer em tempos aleatórios…", "sistema");
          startHintsAuto();

          // limpa wizard
          crimeWizard.step = 0;
          crimeWizard.picked = [];
        } else {
          // abre a próxima tela automaticamente
          setTimeout(()=>{
            openCrimeModal();
          }, 250);
        }
      }
    );
  } catch(e){
    console.error(e);
    await stopCrimeCamera();
    setHintBox("❌ Não consegui abrir a câmera. Abra pelo link HTTPS do GitHub Pages.", "sistema");
    closeCrimeModal();
    alert("Câmera bloqueada. Abra pelo link HTTPS do GitHub Pages (não use content://).");
  }
}

// Botão principal: Configurar crime
if ($("btnCrimeSetup")) {
  $("btnCrimeSetup").addEventListener("click", (e)=>{
    e.preventDefault();
    // inicia wizard do zero sempre que clicar
    crimeWizard.step = 0;
    crimeWizard.picked = [];
    openCrimeModal();
  });
}

// Botões do modal crime
if ($("crimeClose")) $("crimeClose").addEventListener("click", async ()=>{ await stopCrimeCamera(); closeCrimeModal(); });
if ($("crime")) $("crime").addEventListener("click", async (e)=>{ if (e.target.id === "crime") { await stopCrimeCamera(); closeCrimeModal(); }});
if ($("crimeReset")) $("crimeReset").addEventListener("click", async ()=>{ await stopCrimeCamera(); closeCrimeModal(); resetCrimeWizard(); });

// botão escanear (um scan e fecha)
if ($("crimeScanBtn")) $("crimeScanBtn").addEventListener("click", async (e)=>{
  e.preventDefault();
  updateCrimeStepText();
  await startCrimeOneShot();
});

// ======================
// Scanner NORMAL (cartas do jogador)
// ======================
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
        const id = normalizeCode(decodedText);
        if (!id) return;
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
    if ($("cardBox")) $("cardBox").textContent = "Carta desconhecida.";
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

// ======================
// Limpar tudo
// ======================
if ($("btnClearMarks")) $("btnClearMarks").addEventListener("click", async ()=>{
  if (!confirm("Limpar seus dados deste celular?")) return;

  have = new Set();
  marks = {};
  saveObj(LS.notebook, marks);
  saveObj(LS.accuse, {});
  saveJSON(LS.secret, null);
  saveJSON(LS.hintHistory, []);
  stopHintsAuto();

  await stopCrimeCamera();
  refresh();
  renderAccuseResult();
  setHintBox("Tudo limpo. Configure o crime novamente para receber pistas.", "sistema");
});

// ESC (PC)
document.addEventListener("keydown", async (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeNotebook();
    closeAccuse();
    await stopCrimeCamera();
    closeCrimeModal();
  }
});

// boot
refresh();
renderAccuseResult();
setCrimePill();

if (hasSecret()) {
  setHintBox("🔒 Crime já configurado neste celular. Pistas podem aparecer a qualquer momento…", "sistema");
  startHintsAuto();
}
