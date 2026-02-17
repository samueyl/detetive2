// app.js — sem host, sem som, sem IA, multiplayer offline (cada celular privado)

const CARDS = window.CARDS;

const LS = {
  have: "det2_have",   // tenho na mão
  seen: "det2_seen",   // vi/confirmado
  elim: "det2_elim",   // eliminado
  notes: "det2_notes"
};

const $ = (id) => document.getElementById(id);

function loadSet(key){
  try { return new Set(JSON.parse(localStorage.getItem(key) || "[]")); }
  catch { return new Set(); }
}
function saveSet(key, set){
  localStorage.setItem(key, JSON.stringify(Array.from(set)));
}

let have = loadSet(LS.have);
let seen = loadSet(LS.seen);
let elim = loadSet(LS.elim);

const ALL = Object.keys(CARDS);
const SUS = ALL.filter(id => CARDS[id].tipo === "Suspeito");
const ARM = ALL.filter(id => CARDS[id].tipo === "Arma");
const LOC = ALL.filter(id => CARDS[id].tipo === "Local");

function normalizeCode(raw){
  const digits = String(raw).trim().replace(/\D/g, "");
  return digits ? digits.padStart(2,"0") : String(raw).trim();
}

function renderList(container, ids){
  container.innerHTML = "";
  ids.forEach(id=>{
    const c = CARDS[id];
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img class="thumb" src="${c.img}" alt="${c.nome}">
      <div>
        <div class="k">${c.nome}</div>
        <div class="muted tag">${c.tipo} • ${id}</div>
      </div>
    `;
    container.appendChild(div);
  });
}

function refresh(){
  // listas
  renderList($("haveList"), Array.from(have).sort());
  renderList($("seenList"), Array.from(seen).sort());
  renderList($("elimList"), Array.from(elim).sort());

  saveSet(LS.have, have);
  saveSet(LS.seen, seen);
  saveSet(LS.elim, elim);
}

let lastId = null;

function showCard(id){
  lastId = id;
  const c = CARDS[id];

  if (!c){
    $("cardBox").innerHTML = `Carta desconhecida: <strong>${id}</strong>`;
    $("cardImg").style.display = "none";
    $("btnHave").disabled = true;
    $("btnSeen").disabled = true;
    $("btnElim").disabled = true;
    return;
  }

  $("cardBox").innerHTML = `<strong>${c.nome}</strong> <span class="pill">${c.tipo}</span> <span class="pill">ID ${id}</span>`;
  $("cardImg").src = c.img;
  $("cardImg").style.display = "block";

  $("btnHave").disabled = false;
  $("btnSeen").disabled = false;
  $("btnElim").disabled = false;

  $("btnHave").onclick = () => { have.add(id); seen.delete(id); elim.delete(id); refresh(); };
  $("btnSeen").onclick = () => { seen.add(id); have.delete(id); elim.delete(id); refresh(); };
  $("btnElim").onclick = () => { elim.add(id); have.delete(id); refresh(); };
}

function remaining(categoryIds){
  // o que ainda não foi eliminado e não está “na mão”
  return categoryIds.filter(id => !elim.has(id) && !have.has(id));
}

function smartTip(){
  const rs = remaining(SUS);
  const ra = remaining(ARM);
  const rl = remaining(LOC);

  // heurísticas úteis:
  const tips = [];

  tips.push(`Você ainda tem: <b>${rs.length}</b> suspeitos possíveis, <b>${ra.length}</b> armas, <b>${rl.length}</b> locais (ignorando o que você eliminou e o que está na sua mão).`);

  // Se uma categoria está “grande”, prioriza ela
  const max = Math.max(rs.length, ra.length, rl.length);
  if (max === rs.length) tips.push("Priorize sugestões mudando mais os <b>suspeitos</b> para forçar refutações nessa categoria.");
  else if (max === ra.length) tips.push("Priorize sugestões mudando mais as <b>armas</b> para forçar refutações nessa categoria.");
  else tips.push("Priorize sugestões mudando mais os <b>locais</b> para forçar refutações nessa categoria.");

  // Se já está perto de fechar:
  if (rs.length <= 2) tips.push("Você está perto no <b>suspeito</b>: repita arma/local e alterne só os 2 suspeitos.");
  if (ra.length <= 2) tips.push("Você está perto na <b>arma</b>: repita suspeito/local e alterne só as 2 armas.");
  if (rl.length <= 2) tips.push("Você está perto no <b>local</b>: repita suspeito/arma e alterne só os 2 locais.");

  // sugestão de palpite “bom” (sem IA)
  if (rs.length && ra.length && rl.length){
    const pick = (arr) => arr[Math.floor(Math.random()*arr.length)];
    const s = pick(rs), a = pick(ra), l = pick(rl);
    tips.push(`Sugestão de teste: <b>${CARDS[s].nome}</b> + <b>${CARDS[a].nome}</b> + <b>${CARDS[l].nome}</b>.`);
  }

  $("smartBox").innerHTML = `<div class="pill block">${tips.join("<br>")}</div>`;
}

// ===== Scanner =====
let qr = null;

async function start(){
  if (qr) return;
  qr = new Html5Qrcode("reader");
  $("btnStart").disabled = true;
  $("btnStop").disabled = false;
  $("status").textContent = "iniciando...";

  try{
    await qr.start(
      { facingMode:"environment" },
      { fps:10, qrbox:250 },
      (decodedText)=>{
        const id = normalizeCode(decodedText);
        if (!id) return;
        $("last").textContent = id;
        showCard(id);
      }
    );
    $("status").textContent = "rodando";
  }catch(e){
    console.error(e);
    $("status").textContent = "câmera bloqueada";
    $("btnStart").disabled = false;
    $("btnStop").disabled = true;
    qr = null;
    alert("Câmera bloqueada. Abra pelo link HTTPS do GitHub Pages (não use content://).");
  }
}

async function stop(){
  if (!qr) return;
  try{ await qr.stop(); }catch{}
  try{ await qr.clear(); }catch{}
  qr = null;
  $("btnStart").disabled = false;
  $("btnStop").disabled = true;
  $("status").textContent = "parado";
}

$("btnStart").addEventListener("click", start);
$("btnStop").addEventListener("click", stop);

// ===== Notas =====
$("notes").value = localStorage.getItem(LS.notes) || "";
$("btnSaveNotes").addEventListener("click", ()=>{
  localStorage.setItem(LS.notes, $("notes").value);
  $("noteStatus").textContent = "Salvo ✅";
  setTimeout(()=> $("noteStatus").textContent="", 1200);
});
$("btnLoadNotes").addEventListener("click", ()=>{
  $("notes").value = localStorage.getItem(LS.notes) || "";
  $("noteStatus").textContent = "Carregado ✅";
  setTimeout(()=> $("noteStatus").textContent="", 1200);
});

// limpar tudo
$("btnClearMarks").addEventListener("click", ()=>{
  if (!confirm("Limpar suas marcações neste celular?")) return;
  have = new Set();
  seen = new Set();
  elim = new Set();
  refresh();
  $("smartBox").textContent = "—";
});

// smart tips
$("btnSmart").addEventListener("click", smartTip);

refresh();
