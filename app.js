const CARDS = window.CARDS;

const LS = {
  have: "det2_have",
  seen: "det2_seen",
  elim: "det2_elim",
  notes: "det2_notes",
  notebook: "det2_notebook_marks" // { "01":"v", "20":"x", ... }
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

let have = loadSet(LS.have);
let seen = loadSet(LS.seen);
let elim = loadSet(LS.elim);
let marks = loadObj(LS.notebook); // id -> "x" | "q" | "v"

const ALL = Object.keys(CARDS);

function normalizeCode(raw){
  const digits = String(raw).trim().replace(/\D/g, "");
  return digits ? digits.padStart(2,"0") : String(raw).trim();
}

function renderList(container, ids, {clickToOpen=false} = {}){
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
  renderList($("seenList"), Array.from(seen).sort());
  renderList($("elimList"), Array.from(elim).sort());

  saveSet(LS.have, have);
  saveSet(LS.seen, seen);
  saveSet(LS.elim, elim);
  saveObj(LS.notebook, marks);
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

  $("btnHave").onclick = () => {
    have.add(id); seen.delete(id); elim.delete(id);
    // no caderno, "tenho" vira dúvida (opcional)
    if (!marks[id]) marks[id] = "q";
    refresh();
  };
  $("btnSeen").onclick = () => {
    seen.add(id); have.delete(id); elim.delete(id);
    if (!marks[id]) marks[id] = "v";
    refresh();
  };
  $("btnElim").onclick = () => {
    elim.add(id); have.delete(id);
    marks[id] = "x";
    refresh();
  };
}

// ===== Modal imagem grande =====
function openModal(title, img){
  $("modalTitle").textContent = title;
  $("modalImg").src = img;
  $("modal").classList.remove("hidden");
}
function closeModal(){
  $("modal").classList.add("hidden");
  $("modalImg").src = "";
}
$("modalClose").addEventListener("click", closeModal);
$("modal").addEventListener("click", (e)=>{ if (e.target.id === "modal") closeModal(); });

// ===== Caderno =====
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
  const q = ($("searchCard").value || "").trim().toLowerCase();
  const filter = $("filterType").value;

  const ids = ALL
    .filter(id => CARDS[id])
    .filter(id => {
      const c = CARDS[id];
      if (filter !== "all" && c.tipo !== filter) return false;
      if (!q) return true;
      return (c.nome.toLowerCase().includes(q) || c.tipo.toLowerCase().includes(q) || id.includes(q));
    })
    .sort();

  const grid = $("notebookGrid");
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

    // clique: alterna marcação
    div.addEventListener("click", ()=>{
      const next = markCycle(marks[id]);
      if (next) marks[id] = next;
      else delete marks[id];

      // coerência opcional:
      if (marks[id] === "x") { elim.add(id); have.delete(id); seen.delete(id); }
      if (marks[id] === "v") { seen.add(id); elim.delete(id); }
      // "q" não altera listas

      refresh();
      buildNotebook();
    });

    // duplo clique: abre imagem grande
    div.addEventListener("dblclick", (e)=>{
      e.preventDefault();
      openModal(c.nome, c.img);
    });

    grid.appendChild(div);
  });
}

function openNotebook(){
  $("notebook").classList.remove("hidden");
  buildNotebook();
}
function closeNotebook(){
  $("notebook").classList.add("hidden");
}
$("btnNotebook").addEventListener("click", openNotebook);
$("notebookClose").onclick = (e) => { e.preventDefault(); e.stopPropagation(); closeNotebook(); };
$("notebook").addEventListener("click", (e)=>{ if (e.target.id === "notebook") closeNotebook(); });

$("searchCard").addEventListener("input", buildNotebook);
$("filterType").addEventListener("change", buildNotebook);

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

// ===== Limpar tudo =====
$("btnClearMarks").addEventListener("click", ()=>{
  if (!confirm("Limpar suas marcações e caderno neste celular?")) return;
  have = new Set();
  seen = new Set();
  elim = new Set();
  marks = {};
  saveObj(LS.notebook, marks);
  refresh();
});

refresh();
