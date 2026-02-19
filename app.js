// app.js — Crime setup (3 telas: 1 scan e fecha), dicas automáticas offline, caderno, acusação
console.log("APP.JS CARREGOU - build:", new Date().toISOString());

const $ = (id) => document.getElementById(id);

const LS = {
  have: "det2_have",
  notes: "det2_notes",
  notebook: "det2_notebook_marks", // id -> "x" | "q" | "v"
  accuse: "det2_accuse",           // { sus, arm, loc }
  secret: "det2_secret",           // { a, b, c } ids embaralhados
  hintHistory: "det2_hint_history" // array de strings
};

const CARDS = window.CARDS;

// ======================
// MODO ONLINE (UI / estado)
// ======================
let ONLINE_MODE = false;

function setUIMode(isOnline, roomCode=""){
  ONLINE_MODE = !!isOnline;

  // badge no topo
  const pill = $("modePill");
  if (pill){
    pill.textContent = isOnline ? `modo: online (${roomCode || "—"})` : "modo: offline";
  }

  // esconder coisas que não quer no online
  // (você pediu: sumir botões de scanear, etc.)
  const hideWhenOnline = [
    "btnCrimeSetup", // configurar crime com scan (fica só offline)
    "btnStart",      // iniciar camera cartas
    "btnStop",       // parar camera
    "reader"         // o leitor de QR
  ];

  hideWhenOnline.forEach(id=>{
    const el = $(id);
    if (!el) return;
    el.style.display = isOnline ? "none" : "";
  });

  // opcional: se quiser esconder a seção inteira "Scanner" no online:
  // se seu HTML tiver um container com id, dá pra fazer também.
  const r = $("btnRevealCrime");
  if (r) r.style.display = isOnline ? "" : "none";

}


const HINTS_PACK = window.HINTS_PACK || {};
const HINTS_BY_SUSPECT = window.HINTS_BY_SUSPECT || {};
const HINTS_BY_WEAPON  = window.HINTS_BY_WEAPON  || {};
const HINTS_BY_LOCATION= window.HINTS_BY_LOCATION|| {};


// ======================
// ONLINE MODE (Firebase Firestore)
// ======================

// Guarda jogador e sala no localStorage pra reconectar
const ONLINE_LS = {
  playerId: "det2_online_player_id",
  roomId: "det2_online_room_id",
  seat: "det2_online_seat"
};

function getOnlineRoomId(){
  return localStorage.getItem(ONLINE_LS.roomId) || "";
}
function getOnlineSeat(){
  return localStorage.getItem(ONLINE_LS.seat) || "";
}


function getPlayerId(){
  let id = localStorage.getItem(ONLINE_LS.playerId);
  if (!id){
    // id simples com crypto
    const bytes = crypto.getRandomValues(new Uint8Array(8));
    id = Array.from(bytes).map(b=>b.toString(16).padStart(2,"0")).join("");
    localStorage.setItem(ONLINE_LS.playerId, id);
  }
  return id;
}

function roomCode(){
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i=0;i<4;i++) out += chars[Math.floor(Math.random()*chars.length)];
  return out;
}

function shuffle(arr){
  const a = [...arr];
  for (let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function setOnlineStatus(msg){
  const el = $("onlineStatus");
  if (el) el.textContent = msg;
}

function openOnline(){
  $("online")?.classList.remove("hidden");
}
function closeOnline(){
  $("online")?.classList.add("hidden");
}

if ($("btnOnline")) $("btnOnline").addEventListener("click", openOnline);
if ($("onlineClose")) $("onlineClose").addEventListener("click", closeOnline);
if ($("online")) $("online").addEventListener("click", (e)=>{ if (e.target.id==="online") closeOnline(); });

async function fb(){
  if (!window._db) throw new Error("Firebase não carregou (window._db vazio).");
  const mod = await import("https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js");
  return mod;
}

// cria crime secreto (1 sus + 1 arma + 1 local)
function pickSecretFromDeck(){
  const ids = Object.keys(CARDS);
  const suspects = ids.filter(id => CARDS[id].tipo === "Suspeito");
  const weapons  = ids.filter(id => CARDS[id].tipo === "Arma");
  const locations= ids.filter(id => CARDS[id].tipo === "Local");

  const sus = suspects[Math.floor(Math.random()*suspects.length)];
  const arm = weapons[Math.floor(Math.random()*weapons.length)];
  const loc = locations[Math.floor(Math.random()*locations.length)];
  return { sus, arm, loc };
}

// distribui cartas (sem as 3 do crime) pros N players
function dealHands(playerCount, secret){
  const all = Object.keys(CARDS);
  const remaining = all.filter(id => ![secret.sus, secret.arm, secret.loc].includes(id));
  const deck = shuffle(remaining);

  const hands = Array.from({length: playerCount}, ()=>[]);
  deck.forEach((cardId, idx)=>{
    hands[idx % playerCount].push(cardId);
  });

  return hands;
}

// Renderiza "minhas cartas" a partir do array (online)
function setHandFromOnline(handIds){
  have = new Set(handIds);
  // opcional: marca ? automaticamente no caderno
  handIds.forEach(id => { if (!marks[id]) marks[id] = "q"; });
  refresh();
}

async function createRoomOnline(){
  try {
    console.log("[ONLINE] createRoomOnline() iniciou");
    setOnlineStatus("Criando sala...");

    const playerCount = Number($("onlinePlayers")?.value || 3);
    const pid = getPlayerId();

    const secret = pickSecretFromDeck();
    const hands = dealHands(playerCount, secret);

    const code = roomCode();

    const { doc, setDoc, collection, serverTimestamp } = await fb();
    const db = window._db;

    const roomRef = doc(collection(db, "rooms"), code);

    const players = {};
    for (let i=0;i<playerCount;i++){
      players[String(i)] = { pid: null, connected: false, hand: hands[i] };
    }
    players["0"].pid = pid;
    players["0"].connected = true;

    console.log("[ONLINE] setDoc vai rodar", { code, playerCount });

    await setDoc(roomRef, {
      code,
      status: "open",
      maxPlayers: playerCount,
      createdAt: serverTimestamp(),
      secret,
      players
    });

    console.log("[ONLINE] setDoc OK");

    localStorage.setItem(ONLINE_LS.roomId, code);
    localStorage.setItem(ONLINE_LS.seat, "0");

    setOnlineStatus(`Sala criada: ${code}. Você é o jogador 1.`);
    setUIMode(true, code);


    saveJSON(LS.secret, { a: secret.sus, b: secret.arm, c: secret.loc });
    saveJSON(LS.hintHistory, []);
    setCrimePill();
    setHandFromOnline(hands[0]);
    startHintsAuto();
    listenRoom(code);

  } catch (e) {
    console.error("[ONLINE] ERRO createRoomOnline:", e);
    setOnlineStatus("Erro: " + (e?.message || e));
    alert("Erro ao criar sala: " + (e?.message || e));
  }
}


async function joinRoomOnline(){
  const code = String($("roomCode")?.value || "").trim().toUpperCase();
  if (!code) return setOnlineStatus("Digite o código da sala.");

  const pid = getPlayerId();
  const { doc, getDoc, updateDoc } = await fb();
  const db = window._db;

  const roomRef = doc(db, "rooms", code);
  const snap = await getDoc(roomRef);
  if (!snap.exists()) return setOnlineStatus("Sala não encontrada.");

  const room = snap.data();
  const players = room.players || {};

  // se já estava na sala, reconecta no mesmo seat
  const existingSeat = Object.keys(players).find(seat => players[seat]?.pid === pid);
  if (existingSeat != null){
    localStorage.setItem(ONLINE_LS.roomId, code);
    localStorage.setItem(ONLINE_LS.seat, existingSeat);
    setOnlineStatus(`Reconectado na sala ${code} (jogador ${Number(existingSeat)+1}).`);
    setUIMode(true, code);
    saveJSON(LS.secret, { a: room.secret.sus, b: room.secret.arm, c: room.secret.loc });
    setCrimePill();
    setHandFromOnline(players[existingSeat].hand || []);
    startHintsAuto();
    listenRoom(code);
    return;
  }

  // acha vaga livre
  const freeSeat = Object.keys(players).find(seat => !players[seat]?.pid);
  if (freeSeat == null) return setOnlineStatus("Sala cheia.");

  players[freeSeat].pid = pid;
  players[freeSeat].connected = true;

  await updateDoc(roomRef, { players });

  localStorage.setItem(ONLINE_LS.roomId, code);
  localStorage.setItem(ONLINE_LS.seat, freeSeat);

  setOnlineStatus(`Entrou na sala ${code} (jogador ${Number(freeSeat)+1}).`);
  setUIMode(true, code);
  saveJSON(LS.secret, { a: room.secret.sus, b: room.secret.arm, c: room.secret.loc });
  setCrimePill();
  setHandFromOnline(players[freeSeat].hand || []);
  startHintsAuto();
  listenRoom(code);
}

// ======================
// REVELAR CRIME (ONLINE) - dispara evento para todos
// ======================
async function revealCrimeOnline(){
  const code = localStorage.getItem(ONLINE_LS.roomId) || "";
  const seat = localStorage.getItem(ONLINE_LS.seat) || "";

  if (!code) {
    setOnlineStatus("Você não está em uma sala online.");
    return;
  }

  const { doc, updateDoc, serverTimestamp } = await fb();
  const db = window._db;
  const roomRef = doc(db, "rooms", code);

  await updateDoc(roomRef, {
    revealEvent: {
      bySeat: seat,
      at: serverTimestamp()
    }
  });
}

function showCrimeToMe(){
  const s = getSecret(); // usa seu LS.secret (já existe no seu app)
  if (!s?.a || !s?.b || !s?.c) {
    setOnlineStatus("Crime não encontrado neste aparelho.");
    return;
  }

  const ids = [s.a, s.b, s.c];

  // pega pelo tipo (não depende da ordem a/b/c)
  const susId = ids.find(id => CARDS[id]?.tipo === "Suspeito");
  const armId = ids.find(id => CARDS[id]?.tipo === "Arma");
  const locId = ids.find(id => CARDS[id]?.tipo === "Local");

  const sus = CARDS[susId];
  const arm = CARDS[armId];
  const loc = CARDS[locId];

  if (!sus || !arm || !loc) {
    setOnlineStatus("Crime incompleto neste aparelho.");
    return;
  }

  const text =
    `Suspeito: ${sus.nome}\n` +
    `Arma: ${arm.nome}\n` +
    `Local: ${loc.nome}`;

  // mostra um popup só pra você (quem clicou)
  openHintModal({
    title: "🔎 Crime revelado",
    text,
    imgSrc: sus.img,     // imagem do suspeito (poderia ser qualquer uma)
    imgAlt: "Crime"
  });
}



// escuta mudanças na sala (se alguém cair/voltar etc.)
let unSubRoom = null;
let lastRevealKey = null;


async function listenRoom(code){
  const { doc, onSnapshot } = await fb();
  const db = window._db;

  if (unSubRoom) { try{ unSubRoom(); }catch{} unSubRoom=null; }

  const roomRef = doc(db, "rooms", code);
  unSubRoom = onSnapshot(roomRef, (snap)=>{
    if (!snap.exists()) return;

    const room = snap.data();
    // --- Evento: alguém revelou o crime (notificar todos) ---
    if (room.revealEvent?.at) {
      const t = room.revealEvent.at;

      // cria uma "chave" para não repetir a notificação em todo snapshot
      const key = (t && typeof t === "object" && "seconds" in t)
        ? `${t.seconds}-${t.nanoseconds}`
        : String(t);

      if (key !== lastRevealKey) {
        lastRevealKey = key;

        const whoSeat = Number(room.revealEvent.bySeat || 0) + 1;
        const msg = `Jogador ${whoSeat} revelou o crime.`;

        setHintBox(msg, "sistema");
        setOnlineStatus(msg);

        // opcional: popup também
        openHintModal({ title: "🔎 Crime revelado", text: msg, imgSrc: "", imgAlt: "" });
      }
    }

    const pid = getPlayerId();
    const players = room.players || {};
    const seat = Object.keys(players).find(s => players[s]?.pid === pid);

    // se por algum motivo perder seat, não faz nada
    if (seat == null) return;

    // atualiza mão se mudou
    const hand = players[seat].hand || [];
    setHandFromOnline(hand);

    // mantém secret sincronizado
    if (room.secret?.sus){
      saveJSON(LS.secret, { a: room.secret.sus, b: room.secret.arm, c: room.secret.loc });
      setCrimePill();
      startHintsAuto(); // <<< garante que TODOS iniciem
    }

  });
}

const btnCreate = $("btnCreateRoom");
console.log("[ONLINE] btnCreateRoom existe?", !!btnCreate, btnCreate);
window.addEventListener("load", () => {
  console.log("[ONLINE] load ok - btnCreateRoom:", !!$("btnCreateRoom"));
});

if (btnCreate) {
  btnCreate.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("[ONLINE] click criar sala");
    setOnlineStatus("Criando sala...");
    btnCreate.disabled = true;

    try {
      await createRoomOnline();
      console.log("[ONLINE] sala criada OK");
    } catch (err) {
      console.error("[ONLINE] erro ao criar sala:", err);
      setOnlineStatus("Erro ao criar sala: " + (err?.message || String(err)));
    } finally {
      btnCreate.disabled = false;
    }
  });
}

const btnJoin = $("btnJoinRoom");
if (btnJoin) {
  btnJoin.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("[ONLINE] click entrar sala");
    setOnlineStatus("Entrando na sala...");
    btnJoin.disabled = true;

    try {
      await joinRoomOnline();
      console.log("[ONLINE] entrou OK");
    } catch (err) {
      console.error("[ONLINE] erro ao entrar:", err);
      setOnlineStatus("Erro ao entrar: " + (err?.message || String(err)));
    } finally {
      btnJoin.disabled = false;
    }
  });
}

const btnReveal = $("btnRevealCrime");
if (btnReveal){
  btnReveal.addEventListener("click", async (e)=>{
    e.preventDefault();
    try{
      await revealCrimeOnline();
    }catch(err){
      console.error("[ONLINE] erro revealCrime:", err);
      setOnlineStatus("Erro ao revelar crime: " + (err?.message || String(err)));
      alert("Erro ao revelar crime: " + (err?.message || err));
    }
  });
}



// ======================
// MODAL DE DICA (POPUP)
// ======================
function openHintModal({ title="🕵️ Dica", text="", imgSrc="", imgAlt="Dica" }){
  const modal = $("hintModal");
  if (!modal) return;

  if ($("hintTitle")) $("hintTitle").textContent = title;
  if ($("hintImg")) {
    $("hintImg").src = imgSrc;
    $("hintImg").alt = imgAlt;
  }
  if ($("hintText")) $("hintText").textContent = text;

  modal.classList.remove("hidden");
}

function closeHintModal(){
  const modal = $("hintModal");
  if (!modal) return;

  modal.classList.add("hidden");
  if ($("hintImg")) $("hintImg").src = "";
  if ($("hintText")) $("hintText").textContent = "";
}

if ($("hintClose")) $("hintClose").addEventListener("click", closeHintModal);
if ($("hintModal")) $("hintModal").addEventListener("click", (e)=>{ if (e.target.id === "hintModal") closeHintModal(); });


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
  if ($("hintMeta")) $("hintMeta").textContent = "";
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

function computeTraits() {
  const s = getSecret();
  if (!s) return null;

  const ids = [s.a, s.b, s.c].filter(Boolean);
  const locId = ids.find(id => CARDS[id]?.tipo === "Local");
  const armId = ids.find(id => CARDS[id]?.tipo === "Arma");
  const susId = ids.find(id => CARDS[id]?.tipo === "Suspeito");

  const loc = (CARDS[locId]?.nome || "").toLowerCase();
  const arm = (CARDS[armId]?.nome || "").toLowerCase();
  const sus = (CARDS[susId]?.nome || "").toLowerCase();

  // LOCAL (genérico, sem citar nome)
  const locTrait =
    /(bar|clube|festa|pra(ç|c)a|rua|hall|recep|mercado)/i.test(loc) ? "um lugar público e barulhento" :
    /(quarto|banheiro|escrit[oó]rio|dep[oó]sito|por[aã]o|cozinha)/i.test(loc) ? "um lugar fechado, íntimo e fácil de controlar" :
    "um lugar de rotina, onde o movimento vira disfarce";

  // ARMA
  const armTrait =
    /(veneno|corda|travesseiro|faca|punhal|tesoura)/i.test(arm) ? "um método silencioso, que deixa dúvida" :
    /(rev[oó]lver|pistola|tiro|marreta|machado)/i.test(arm) ? "um método de impacto, rápido e intimidante" :
    "um método prático, escolhido para reduzir risco";

  // SUSPEITO (perfil psicológico genérico)
  const susTrait =
    /(doutor|delegado|advogado|ju[ií]z|cientista)/i.test(sus) ? "alguém frio, lógico e convincente" :
    /(artista|cantor|ator|influencer)/i.test(sus) ? "alguém carismático, que distrai com facilidade" :
    /(seguran(ç|c)a|policial|militar)/i.test(sus) ? "alguém disciplinado, que pensa em rotas e controle" :
    "alguém discreto, que prefere passar como ‘normal’";

  // TEMPO (só “sabor”, não depende do nome)
  const timeTrait = Math.random() < 0.5 ? "um intervalo curto, escolhido a dedo" : "um momento de distração coletiva";

  return { locTrait, armTrait, susTrait, timeTrait };
}

function applyTraits(text) {
  const t = computeTraits();
  if (!t) return text;

  return String(text)
    .replaceAll("{LOC_TRAIT}", t.locTrait)
    .replaceAll("{ARM_TRAIT}", t.armTrait)
    .replaceAll("{SUS_TRAIT}", t.susTrait)
    .replaceAll("{TIME_TRAIT}", t.timeTrait);
}


// coerência leve sem spoiler
// ======================
// COERÊNCIA 100% ALINHADA AO SEU BARALHO (SEM SPOILER)
// - usa as 3 cartas secretas reais escaneadas
// - fala de características do suspeito/local/arma sem citar nomes/IDs
// ======================
const TRAITS = {
  suspects: {
    "01": { vibe:["fala ensaiada","argumento afiado","sangue-frio"], tell:["arruma papéis sem necessidade","mede palavras antes de soltar","vira a história a favor dele"] }, // Advogado Sr Marinho
    "04": { vibe:["presença cênica","charme calculado","olhar que distrai"], tell:["some e volta no tempo certo","sorri no momento errado","usa o palco como álibi"] }, // Dançarina Srta Rosa
    "08": { vibe:["postura rígida","controle","autoridade"], tell:["observa o grupo como patrulha","quer organizar o caos","faz perguntas como interrogatório"] }, // Sargento Bigode
    "02": { vibe:["rotina impecável","mãos habilidosas","precisão"], tell:["repara em detalhes pequenos","lava as mãos cedo demais","conhece atalhos do lugar"] }, // Chef de cozinha
    "05": { vibe:["perfume marcante","gentileza suspeita","calma ornamental"], tell:["protege um detalhe como se fosse flor rara","desvia assunto com delicadeza","deixa rastros aromáticos"] }, // Florista Dona Branca
    "03": { vibe:["silêncio pesado","intimidade com a terra","paciência sombria"], tell:["não se assusta com o final","fala baixo sobre coisas graves","sabe onde ninguém procura"] }, // Coveiro Sergio Soturno
    "06": { vibe:["frieza clínica","conhecimento técnico","mão firme"], tell:["explica demais o que ‘poderia’ acontecer","nota sintomas alheios","parece calma por treino"] }, // Médica Dona Violeta
    "07": { vibe:["rotina e chaves","presença invisível","observador"], tell:["conhece horários e portas","some em corredores","age como se ‘pertencesse’ a tudo"] }  // Mordomo James
  },

  locations: {
    "20": { vibe:["ecos e apitos","gente passando","horários certos"], details:["passos apressados","anúncios distantes","porta batendo sem vento"] }, // Estação de trem
    "21": { vibe:["cheiro doce","folhas e vidro","umidade"], details:["tesoura de poda","pétalas no chão","vitrines silenciosas"] }, // Floricultura
    "24": { vibe:["luxo e silêncio","cantos cegos","tapetes que engolem som"], details:["escadas longas","portas pesadas","quadros observando"] }, // Mansão
    "27": { vibe:["talheres e vozes","cozinha nervosa","luz quente"], details:["pratos batendo","sussurros entre mesas","movimento encenado"] }, // Restaurante
    "18": { vibe:["grave do som","luzes cortando","confusão conveniente"], details:["música alta","corpos se esbarrando","olhares que somem"] }, // Boate
    "26": { vibe:["papéis e poder","corredores frios","autoridade"], details:["carimbos","salas fechadas","gente que finge não ver"] }, // Prefeitura
    "25": { vibe:["olhos por toda parte","barulho aberto","ninguém é de ninguém"], details:["bancos de praça","luzes de poste","passos ecoando"] }, // Praça Central
    "22": { vibe:["cheiro de álcool","pressa contida","silêncio de corredor"], details:["luvas e máscaras","portas batendo leve","respiração presa"] }, // Hospital
    "23": { vibe:["tapetes e chaves","corredores longos","portas iguais"], details:["cartões de acesso","câmeras","passos no carpete"] }, // Hotel
    "17": { vibe:["câmeras e cofres","tensão educada","segurança aparente"], details:["fila falsa calma","porta giratória","sussurros sobre dinheiro"] }, // Banco
    "19": { vibe:["frio e pedra","silêncio que acusa","som de terra"], details:["folhas secas","passos lentos","nomes gravados"] }  // Cemitério
  },

  weapons: {
    "16": { vibe:["silêncio químico","efeito atrasado","nenhum barulho"], tell:["não deixa cena óbvia","parece acidente","chega depois"] }, // Veneno
    "13": { vibe:["metal bruto","força rápida","arrombamento"], tell:["marca impacto","abre caminho","faz barulho curto"] }, // Pé de cabra
    "10": { vibe:["estrondo e pânico","um segundo de decisão","eco"], tell:["chama atenção","termina rápido","deixa a sala muda"] }, // Espingarda
    "14": { vibe:["mão fechada","proximidade","covardia corajosa"], tell:["precisa chegar perto","é rápido","some no meio da multidão"] }, // Soco Inglês
    "15": { vibe:["corte pequeno","gesto preciso","frieza"], tell:["não exige força","exige coragem","pede silêncio"] }, // Tesoura
    "12": { vibe:["peso e terra","improviso pesado","marca no chão"], tell:["deixa sinais de solo","pede espaço","parece ‘trabalho’"] }, // Pá
    "11": { vibe:["corte limpo","ritual","controle"], tell:["aparece e some","não precisa de barulho","pede intenção"] }, // Faca
    "09": { vibe:["cheiro estranho","irritação no ar","invisível"], tell:["confunde sentidos","faz o corpo trair","parece ‘acidente’"] }  // Arma química
  }
};

function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

function buildCoherentOverlay(){
  const s = getSecret();
  if (!s) return null;

  const ids = [s.a, s.b, s.c].filter(Boolean);
  const susId = ids.find(id => CARDS[id]?.tipo === "Suspeito");
  const armId = ids.find(id => CARDS[id]?.tipo === "Arma");
  const locId = ids.find(id => CARDS[id]?.tipo === "Local");

  if (!susId || !armId || !locId) {
    return "Há um método aqui. Nada foi por acaso — só parece.";
  }

  // ✅ 1) Se o hints.js novo estiver carregado, usa o overlay 100% alinhado ao baralho
  if (window.HINTS_PACK && typeof window.HINTS_PACK.coherentOverlay === "function") {
    return window.HINTS_PACK.coherentOverlay({ susId, armId, locId });
  }

  // ✅ 2) Fallback: usa seu TRAITS local (o que você já tinha)
  const S = TRAITS.suspects[susId] || { vibe:["normal demais"], tell:["fala pouco"] };
  const A = TRAITS.weapons[armId]   || { vibe:["um instrumento frio"], tell:["deixa pouco rastro"] };
  const L = TRAITS.locations[locId] || { vibe:["um lugar com sombras"], details:["ponto cego"] };

  const p1 = `O cenário tinha ${pick(L.vibe)} — ${pick(L.details)} parecia parte de uma rotina falsa.`;
  const p2 = `O método sugere ${pick(A.vibe)}: ${pick(A.tell)}… e por isso ninguém percebeu na hora.`;
  const p3 = `E o culpado? Perfil de ${pick(S.vibe)} — ${pick(S.tell)}.`;

  return (Math.random() < 0.55) ? `${p1}\n${p2}` : `${p1}\n${p2}\n${p3}`;
}



function buildHint(){
  const s = getSecret();
  if (!s) return { text: "Configure o crime para começar a receber pistas.", tag: "sistema" };

  const ids = [s.a, s.b, s.c].filter(Boolean);
  const susId = ids.find(id => CARDS[id]?.tipo === "Suspeito");
  const armId = ids.find(id => CARDS[id]?.tipo === "Arma");
  const locId = ids.find(id => CARDS[id]?.tipo === "Local");

  // escolhe aleatoriamente qual tipo de pista sai agora
  const types = [];
  if (armId) types.push("weapon");
  if (susId) types.push("suspect");
  if (locId) types.push("location");

  const pickType = types[Math.floor(Math.random() * types.length)];

  let list = [];
  let tag = "pista";

  if (pickType === "weapon") {
    list = HINTS_BY_WEAPON[armId] || [];
    tag = "arma";
  } else if (pickType === "suspect") {
    list = HINTS_BY_SUSPECT[susId] || [];
    tag = "suspeito";
  } else {
    list = HINTS_BY_LOCATION[locId] || [];
    tag = "local";
  }

  // fallback se algo estiver faltando
  if (!list.length) {
    const fallback = (HINTS_PACK.mix && HINTS_PACK.mix.length) ? HINTS_PACK.mix : [
      "A verdade costuma se esconder onde ninguém olha duas vezes."
    ];
    return { text: pickNonRepeating(fallback), tag: "pista" };
  }

  // 1 dica por vez (sem overlay, sem endings)
  const text = pickNonRepeating(list);
  return { text, tag };
}


let hintTimer = null;

// >>>>> ALTERE O TEMPO AQUI <<<<<
// exemplo: 30–90s => (30 + Math.random()*60)*1000

// ======================
// IMAGENS POR TIPO DE DICA
// ======================
const HINT_SOURCE_TYPES = ["Testemunha","Boato","Detalhe","Relato","Observacao","Anotacao"];

// ajuste nomes exatamente como estão na pasta Testemunha (print que você mandou)
const WITNESSES = ["Christian.png","Deborah.png","Lubia.png","Samuel.png","Thayanny.png"];


function getHintImageBySource(source){
  // source vem tipo "Testemunha", "Boato", etc.
  if (source === "Testemunha") {
    const who = pick(WITNESSES);
    return {
      src: `./Testemunha/${who}`,
      title: "👁️ Testemunha"
    };
  }

  // outras pastas: tem só 1 imagem com mesmo nome da pasta
  // Ex: ./Boato/Boato.png, ./Detalhe/Detalhe.png, etc.
  return {
    src: `./${source}/${source}.png`,
    title: `📌 ${source}`
  };
}


function scheduleNextHint(){
  const ms = (120 + Math.random() * 260) * 1000;

    hintTimer = setTimeout(() => {
    const { text } = buildHint();

    setHintBox(text);
    pushHistory(text);

    // só abre popup se já tiver crime
    if (hasSecret()) {
      const source = pick(HINT_SOURCE_TYPES);
      const imgInfo = getHintImageBySource(source);

      openHintModal({
        title: imgInfo.title,
        text,
        imgSrc: imgInfo.src,
        imgAlt: source
      });
    }

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

    if (ONLINE_MODE) {
      setHintBox("No modo online o crime é sorteado automaticamente (sem escanear).", "sistema");
      return;
    }

    // offline: continua com scan
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
    closeHintModal();
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
