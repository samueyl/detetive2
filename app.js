// app.js — scan -> auto "Tenho na mão", botão Acusar, caderno X/?/✓, modal imagem grande

const CARDS = window.CARDS;

const LS = {
  have: "det2_have",
  notes: "det2_notes",
  notebook: "det2_notebook_marks", // { "01":"v", "20":"x", ... }
  accuse: "det2_accuse"            // { sus:"01", arm:"16", loc:"24" }
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
let marks = loadObj(LS.notebook); // id -> "x" | "q" | "v"

const ALL = Object.keys(CARDS);

function normalizeCode(raw){
  const digits = String(raw).trim().replace(/\D/g, "");
  return digits ? digits.padStart(2,"0") : String(raw).trim();
}

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

let lastId = null;

function showCard(id){
  lastId = id;
  const c = CARDS[id];

  if (!c){
    $("cardBox").innerHTML = `Carta desconhecida: <strong>${id}</strong>`;
    $("cardImg").style.display = "none";
    if ($("btnAccuse")) $("btnAccuse").disabled = true;
    return;
  }

  $("cardBox").innerHTML = `<strong>${c.nome}</strong> <span class="pill">${c.tipo}</span> <span class="pill">ID ${id}</span>`;
  $("cardImg").src = c.img;
  $("cardImg").style.display = "block";

  // Botão Acusar (abre modal)
  if ($("btnAccuse")){
    $("btnAccuse").disabled = false;
    $("btnAccuse").onclick = (e) => { e.preventDefault(); openAccuse(); };
  }
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
if ($("modalClose")) $("modalClose").addEventListener("click", closeModal);
if ($("modal")) $("modal").addEventListener("click", (e)=>{ if (e.target.id === "modal") closeModal(); });

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

    // clique: alterna marcação (não mexe mais em listas)
    div.addEventListener("click", ()=>{
      const next = markCycle(marks[id]);
      if (next) marks[id] = next;
      else delete marks[id];

      saveObj(LS.notebook, marks);
      buildNotebook();
    });

    // duplo clique: abre imagem grande (PC)
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

if ($("btnNotebook")) $("btnNotebook").addEventListener("click", (e)=>{ e.preventDefault(); openNotebook(); });
if ($("notebookClose")) $("notebookClose").onclick = (e) => { e.preventDefault(); e.stopPropagation(); closeNotebook(); };
if ($("notebook")) $("notebook").addEventListener("click", (e)=>{ if (e.target.id === "notebook") closeNotebook(); });

if ($("searchCard")) $("searchCard").addEventListener("input", buildNotebook);
if ($("filterType")) $("filterType").addEventListener("change", buildNotebook);

// ===== Modal Acusar =====
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

  // preenche selects
  fillSelect($("accSus"), "Suspeito");
  fillSelect($("accArm"), "Arma");
  fillSelect($("accLoc"), "Local");

  // carrega salvo
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

        // ✅ escaneou -> entra automaticamente na mão
        if (CARDS[id]) {
          have.add(id);
          if (!marks[id]) marks[id] = "q"; // opcional: marca como dúvida no caderno
          refresh();
        }

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

if ($("btnStart")) $("btnStart").addEventListener("click", start);
if ($("btnStop")) $("btnStop").addEventListener("click", stop);

// ===== Notas =====
if ($("notes")) $("notes").value = localStorage.getItem(LS.notes) || "";
if ($("btnSaveNotes")) $("btnSaveNotes").addEventListener("click", ()=>{
  localStorage.setItem(LS.notes, $("notes").value);
  $("noteStatus").textContent = "Salvo ✅";
  setTimeout(()=> $("noteStatus").textContent="", 1200);
});
if ($("btnLoadNotes")) $("btnLoadNotes").addEventListener("click", ()=>{
  $("notes").value = localStorage.getItem(LS.notes) || "";
  $("noteStatus").textContent = "Carregado ✅";
  setTimeout(()=> $("noteStatus").textContent="", 1200);
});

// ===== Limpar tudo =====
if ($("btnClearMarks")) $("btnClearMarks").addEventListener("click", ()=>{
  if (!confirm("Limpar suas marcações e caderno neste celular?")) return;
  have = new Set();
  marks = {};
  saveObj(LS.notebook, marks);
  saveObj(LS.accuse, {});
  refresh();
  renderAccuseResult();
});

// ===== Fechar com ESC (PC) =====
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeNotebook();
    closeAccuse();
  }
});

refresh();
renderAccuseResult();
