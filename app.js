'use strict';

// Aromina Farma – magazin demonstrativ, fără backend, plăți sau comenzi reale.
const products = [
  {
    "id": 1,
    "name": "Aptamil Nutri-Biotik 1+, 800 g",
    "category": "lapte",
    "categoryLabel": "Lapte praf & hrană",
    "price": 74.9,
    "size": "1–2 ani · 800 g",
    "emoji": "🍼",
    "packLabel": "BABY MILK 1",
    "type": "tin",
    "bg": "#edf5e6",
    "tag": "Lapte praf & hrană",
    "description": "Aptamil Nutri-Biotik 1+, 800 g. 1–2 ani · 800 g. Produs real inclus în catalogul educațional Aromina Farma. Prețul afișat este un exemplu pentru proiectul școlar.",
    "image": "assets/product-1.png",
    "source": "https://comenzi.bebetei.ro/mama-bebe-si-copil/hrana-bebe-si-copii/formule-lapte-praf-de-crestere/lapte-praf-nutri-biotik-1-1-2-ani-800-g-aptamil-p217094"
  },
  {
    "id": 2,
    "name": "Pampers Premium Care 3, 40 buc.",
    "category": "scutece",
    "categoryLabel": "Scutece & șervețele",
    "price": 62.5,
    "size": "6–10 kg · 40 buc.",
    "emoji": "☁",
    "packLabel": "BABY SOFT",
    "type": "bag",
    "bg": "#f7eceb",
    "tag": "Scutece & șervețele",
    "description": "Pampers Premium Care 3, 40 buc.. 6–10 kg · 40 buc.. Produs real inclus în catalogul educațional Aromina Farma. Prețul afișat este un exemplu pentru proiectul școlar.",
    "image": "assets/product-2.png",
    "source": "https://comenzi.bebetei.ro/mama-bebe-si-copil/scutece-si-servetele/scutece-de-schimb/pampers-premium-care-nr-3-6-10-kg-40-buc-pampers-p414054"
  },
  {
    "id": 3,
    "name": "Mustela gel de curățare, 500 ml",
    "category": "ingrijire",
    "categoryLabel": "Îngrijire & igienă",
    "price": 58.8,
    "size": "500 ml",
    "emoji": "🫧",
    "packLabel": "GENTLE CARE",
    "type": "bottle",
    "bg": "#e7f2ef",
    "tag": "Crăciun · −20%",
    "description": "Mustela gel de curățare, 500 ml. 500 ml. Produs real inclus în catalogul educațional Aromina Farma. Prețul afișat este un exemplu pentru proiectul școlar.",
    "image": "assets/product-3.jpg",
    "source": "https://comenzi.bebetei.ro/dermato-cosmetice/ingrijire-bebe-si-copil/geluri-si-produse-de-igiena-bebe/gel-de-curatare-delicat-pentru-par-si-corp-500ml-mustela-p157270",
    "oldPrice": 73.5
  },
  {
    "id": 4,
    "name": "Philips Avent biberon anti-colici, 260 ml",
    "category": "accesorii",
    "categoryLabel": "Accesorii bebeluși",
    "price": 39.92,
    "size": "1+ luni · 260 ml",
    "emoji": "🍼",
    "packLabel": "LITTLE SIP",
    "type": "accessory",
    "bg": "#f7f1e4",
    "tag": "Crăciun · −20%",
    "description": "Philips Avent biberon anti-colici, 260 ml. 1+ luni · 260 ml. Produs real inclus în catalogul educațional Aromina Farma. Prețul afișat este un exemplu pentru proiectul școlar.",
    "image": "assets/product-4.png",
    "source": "https://comenzi.bebetei.ro/puericultura-mica/hranire-si-alaptare/biberoane/biberon-anti-colici-philips-avent-1-luna-260-ml-scy10301-philips-p395564",
    "oldPrice": 49.9
  },
  {
    "id": 5,
    "name": "Aptamil Nutri-Biotik 2, 800 g",
    "category": "lapte",
    "categoryLabel": "Lapte praf & hrană",
    "price": 69.9,
    "size": "6–12 luni · 800 g",
    "emoji": "🍼",
    "packLabel": "BABY MILK 2",
    "type": "tin",
    "bg": "#eef0e5",
    "tag": "Lapte praf & hrană",
    "description": "Aptamil Nutri-Biotik 2, 800 g. 6–12 luni · 800 g. Produs real inclus în catalogul educațional Aromina Farma. Prețul afișat este un exemplu pentru proiectul școlar.",
    "image": "assets/product-5.jpg",
    "source": "https://comenzi.bebetei.ro/mama-bebe-si-copil/hrana-bebe-si-copii/formule-lapte-praf-de-crestere/lapte-praf-de-continuare-nutri-biotik-2-6-12-luni-800-g-aptamil-p217092"
  },
  {
    "id": 6,
    "name": "Huggies Pure, 56 șervețele",
    "category": "scutece",
    "categoryLabel": "Scutece & șervețele",
    "price": 13.5,
    "size": "56 buc.",
    "emoji": "♡",
    "packLabel": "SOFT WIPES",
    "type": "bag",
    "bg": "#eaf4ed",
    "tag": "Scutece & șervețele",
    "description": "Huggies Pure, 56 șervețele. 56 buc.. Produs real inclus în catalogul educațional Aromina Farma. Prețul afișat este un exemplu pentru proiectul școlar.",
    "image": "assets/product-6.png",
    "source": "https://comenzi.bebetei.ro/mama-bebe-si-copil/scutece-si-servetele/servetele-umede/servetele-umede-pure-56-bucati-huggies-p132697"
  },
  {
    "id": 7,
    "name": "Mustela cremă pentru scutec, 50 ml",
    "category": "ingrijire",
    "categoryLabel": "Îngrijire & igienă",
    "price": 24.9,
    "size": "50 ml",
    "emoji": "🌼",
    "packLabel": "BABY CREAM",
    "type": "bottle",
    "bg": "#f8efe4",
    "tag": "Îngrijire & igienă",
    "description": "Mustela cremă pentru scutec, 50 ml. 50 ml. Produs real inclus în catalogul educațional Aromina Farma. Prețul afișat este un exemplu pentru proiectul școlar.",
    "image": "assets/product-7.jpg",
    "source": "https://comenzi.bebetei.ro/dermato-cosmetice/ingrijire-bebe-si-copil/prevenire-ingrijire-eritem-fesier/crema-impotriva-iritatiei-de-scutec-vitamin-barrier-50-ml-mustela-p109834"
  },
  {
    "id": 8,
    "name": "Munchkin Raise, furculiță și linguriță",
    "category": "alimentatie",
    "categoryLabel": "Diversificare & masă",
    "price": 36,
    "size": "12+ luni · 2 piese",
    "emoji": "🥣",
    "packLabel": "FIRST BITES",
    "type": "box",
    "bg": "#f6ede4",
    "tag": "Crăciun · −20%",
    "description": "Munchkin Raise, furculiță și linguriță. 12+ luni · 2 piese. Produs real inclus în catalogul educațional Aromina Farma. Prețul afișat este un exemplu pentru proiectul școlar.",
    "image": "assets/product-8.webp",
    "source": "https://comenzi.bebetei.ro/puericultura-mica/diversificare/lingurite-si-tacamuri/set-furculita-si-lingurita-pentru-copii-raise-12-luni-purple-munchkin-p396877",
    "oldPrice": 45
  },
  {
    "id": 9,
    "name": "Pampers Premium Care 4, 52 buc.",
    "category": "scutece",
    "categoryLabel": "Scutece & șervețele",
    "price": 65.9,
    "size": "9–14 kg · 52 buc.",
    "emoji": "☁",
    "packLabel": "BABY SOFT",
    "type": "bag",
    "bg": "#f6e8ed",
    "tag": "Scutece & șervețele",
    "description": "Pampers Premium Care 4, 52 buc.. 9–14 kg · 52 buc.. Produs real inclus în catalogul educațional Aromina Farma. Prețul afișat este un exemplu pentru proiectul școlar.",
    "image": "assets/product-9.png",
    "source": "https://comenzi.bebetei.ro/mama-bebe-si-copil/scutece-si-servetele/scutece-de-schimb/pampers-premium-care-nr-4-9-14-kg-52-buc-pampers-p416075"
  },
  {
    "id": 10,
    "name": "Philips Avent Ultra Air, 2 suzete",
    "category": "accesorii",
    "categoryLabel": "Accesorii bebeluși",
    "price": 31.92,
    "size": "0–6 luni · 2 buc.",
    "emoji": "🧸",
    "packLabel": "LITTLE CALM",
    "type": "accessory",
    "bg": "#e9f0f3",
    "tag": "Crăciun · −20%",
    "description": "Philips Avent Ultra Air, 2 suzete. 0–6 luni · 2 buc.. Produs real inclus în catalogul educațional Aromina Farma. Prețul afișat este un exemplu pentru proiectul școlar.",
    "image": "assets/product-10.jpg",
    "source": "https://comenzi.bebetei.ro/puericultura-mica/hranire-si-alaptare/suzete/suzete-ultra-air-ursuletportocala-0-6-luni-scf08023-2-buc-philips-avent-p471414",
    "oldPrice": 39.9
  },
  {
    "id": 11,
    "name": "Lansinoh tampoane pentru sân, 60+24 buc.",
    "category": "mamici",
    "categoryLabel": "Pentru mămici",
    "price": 32.9,
    "size": "60+24 buc.",
    "emoji": "♡",
    "packLabel": "MAMA CARE",
    "type": "box",
    "bg": "#f8ebed",
    "tag": "Pentru mămici",
    "description": "Lansinoh tampoane pentru sân, 60+24 buc.. 60+24 buc.. Produs real inclus în catalogul educațional Aromina Farma. Prețul afișat este un exemplu pentru proiectul școlar.",
    "image": "assets/product-11.jpg",
    "source": "https://comenzi.bebetei.ro/puericultura-mica/hranire-si-alaptare/protectie-sani/pachet-tampoane-pentru-san-6024-bucati-lansinoh-p365923"
  },
  {
    "id": 12,
    "name": "Philips Avent cană cu pai, 200 ml",
    "category": "alimentatie",
    "categoryLabel": "Diversificare & masă",
    "price": 35.5,
    "size": "9+ luni · 200 ml",
    "emoji": "🥤",
    "packLabel": "HAPPY SIP",
    "type": "accessory",
    "bg": "#e6f2f1",
    "tag": "Diversificare & masă",
    "description": "Philips Avent cană cu pai, 200 ml. 9+ luni · 200 ml. Produs real inclus în catalogul educațional Aromina Farma. Prețul afișat este un exemplu pentru proiectul școlar.",
    "image": "assets/product-12.png",
    "source": "https://comenzi.bebetei.ro/puericultura-mica/diversificare/cani-si-pahare/cana-cu-pai-flexibil-philips-avent-9-luni-mov-200-ml-scf79602-philips-p339980"
  }
];
const currency = value => new Intl.NumberFormat('ro-RO',{minimumFractionDigits:2,maximumFractionDigits:2}).format(value) + ' lei';
const safeLoad = (key, fallback) => {try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}};
const safeSave = (key,value)=>{try{localStorage.setItem(key,JSON.stringify(value))}catch{}};
const $ = sel => document.querySelector(sel);
let cart=safeLoad('aromina-demo-cart',{}),favorites=new Set(safeLoad('aromina-demo-favs',[])),filter='all',search='',sort='featured',showFavorites=false,activeModal=null,priorFocus=null;
const grid=$('#productGrid'),overlay=$('#overlay'),drawer=$('#cartDrawer'),modal=$('#productModal');

function packageHTML(p) { return `<img class="product-photo" src="${p.image}" alt="${p.name}" width="400" height="400" loading="lazy">`; }
function visualHTML(p,interactive=false){return `<div class="product-visual" style="--product-bg:${p.bg}" ${interactive?`data-detail="${p.id}" role="button" tabindex="0" aria-label="Vezi ${p.name}"`:''}><span class="product-tag">${p.tag}</span>${packageHTML(p)}${interactive?`<button class="favorite-toggle ${favorites.has(p.id)?'is-favorite':''}" data-favorite="${p.id}" aria-label="${favorites.has(p.id)?'Elimină de la favorite':'Adaugă la favorite'}" aria-pressed="${favorites.has(p.id)}">${favorites.has(p.id)?'♥':'♡'}</button>`:''}</div>`}
function renderProducts(){if (!grid) return; let results=products.filter(p=>(filter==='all'||p.category===filter)&&(!showFavorites||favorites.has(p.id))&&`${p.name} ${p.categoryLabel} ${p.size}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').includes(search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')));
 if(sort==='asc')results.sort((a,b)=>a.price-b.price);else if(sort==='desc')results.sort((a,b)=>b.price-a.price);else if(sort==='alpha')results.sort((a,b)=>a.name.localeCompare(b.name,'ro'));
 grid.innerHTML=results.length?results.map(p=>`<article class="product-card">${visualHTML(p,true)}<div class="product-info"><span class="product-category">${p.categoryLabel}</span><button class="product-name" data-detail="${p.id}">${p.name}</button><div class="product-price-row"><div class="price-stack">${p.oldPrice ? `<del>${currency(p.oldPrice)}</del>` : ''}<strong class="product-price">${currency(p.price)}</strong></div><button class="add-cart" data-add="${p.id}" aria-label="Adaugă în coș: ${p.name}" title="Adaugă în coș"><svg viewBox="0 0 24 24"><path d="M3 4h2.5l2 11h11.4L21 8H6.3"/><path d="M10 5v6m-3-3h6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg></button></div></div></article>`).join(''):`<div class="empty-results"><div>⌕</div><h3>Niciun produs găsit</h3><p>Încearcă alt termen sau revino la toate produsele.</p><button class="btn btn-primary" id="resetProducts">Afișează toate produsele</button></div>`;
 $('#resultCount').textContent=`${results.length} ${results.length===1?'produs':'produse'} ${showFavorites?'favorite':''}`;$('#clearFilters').hidden=filter==='all'&&!search&&!showFavorites;document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===filter;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});updateCounters();}
function updateCounters(){const count=Object.values(cart).reduce((a,b)=>a+b,0);$('#cartCount').textContent=count;$('#drawerCount').textContent=`(${count})`;$('#favoriteCount').textContent=favorites.size;$('#favoriteCount').hidden=!favorites.size;$('#favoritesButton').setAttribute('aria-pressed',String(showFavorites));$('#favoritesButton').style.color=showFavorites?'#e68e73':''}
function save(){safeSave('aromina-demo-cart',cart);safeSave('aromina-demo-favs',[...favorites]);updateCounters()}
let toastTimer;function toast(message){const node=$('#toast');node.textContent=message;node.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('show'),3100)}
function setFilter(category){if (!grid) { location.href="index.html?category="+encodeURIComponent(category)+"#produse"; return; } filter=category;showFavorites=false;renderProducts();document.getElementById('produse').scrollIntoView({behavior:'smooth',block:'start'})}
function resetFilters(){filter='all';search='';sort='featured';showFavorites=false;$('#searchInput').value='';$('#sortSelect').value='featured';renderProducts()}
function addToCart(id){cart[id]=(cart[id]||0)+1;save();renderCart();toast('Produs adăugat în coșul demonstrativ.');}
function updateQty(id,delta){cart[id]=Math.max(0,(cart[id]||0)+delta);if(!cart[id])delete cart[id];save();renderCart()}
function renderCart(){const entries=Object.entries(cart).filter(([id,qty])=>qty>0&&products.some(p=>p.id===Number(id)));const area=$('#cartItems');area.innerHTML=entries.length?entries.map(([id,qty])=>{const p=products.find(p=>p.id===Number(id));return `<div class="cart-item"><div class="cart-thumbnail" style="--product-bg:${p.bg}">${packageHTML(p)}</div><div><div class="cart-item-title">${p.name}</div><div class="cart-item-price">${currency(p.price*qty)}</div><div class="cart-qty"><button data-qty="${id}" data-delta="-1" aria-label="Scade cantitatea">−</button><span>${qty}</span><button data-qty="${id}" data-delta="1" aria-label="Crește cantitatea">+</button></div></div><button class="remove-item" data-remove="${id}" aria-label="Elimină produsul">Elimină</button></div>`}).join(''):`<div class="cart-empty"><div>🛍️</div><strong>Coșul este gol</strong><p>Descoperă produse și adaugă-le pentru a testa experiența de cumpărare.</p><button class="btn btn-primary" id="continueShopping">Vezi produsele</button></div>`;const total=entries.reduce((sum,[id,qty])=>sum+products.find(p=>p.id===Number(id)).price*qty,0);$('#cartTotal').textContent=currency(total);$('#cartFooter').hidden=!entries.length;}
function closeAll(){drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');modal.classList.remove('open');modal.setAttribute('aria-hidden','true');overlay.hidden=true;document.body.classList.remove('modal-open');if(priorFocus?.focus)priorFocus.focus();priorFocus=null;activeModal=null}
function openCart(){priorFocus=document.activeElement;renderCart();modal.classList.remove('open');modal.setAttribute('aria-hidden','true');drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');overlay.hidden=false;document.body.classList.add('modal-open');drawer.focus()}
function openProduct(id){const p=products.find(item=>item.id===id);if(!p)return;priorFocus=document.activeElement;activeModal=id;modal.style.setProperty('--product-bg',p.bg);$('#modalContents').innerHTML=`<div class="modal-inner"><div class="modal-art" style="--product-bg:${p.bg}">${packageHTML(p)}</div><div class="modal-info"><span class="modal-category">${p.categoryLabel}</span><h3 id="modalName">${p.name}</h3><p class="modal-description">${p.description}</p><div class="product-price">${currency(p.price)}</div><div class="modal-meta"><strong>Detalii:</strong> ${p.size}<br>Preț demonstrativ pentru proiectul școlar.<br><a class="source-link" href="${p.source}" target="_blank" rel="noopener noreferrer">Sursa fotografiei și detaliile produsului</a></div><button class="btn btn-primary" data-add="${p.id}">Adaugă în coșul demo <span>↗</span></button></div></div>`;drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');modal.classList.add('open');modal.setAttribute('aria-hidden','false');overlay.hidden=false;document.body.classList.add('modal-open');modal.focus()}

document.addEventListener('click',ev=>{const add=ev.target.closest('[data-add]');if(add){addToCart(Number(add.dataset.add));return}const fav=ev.target.closest('[data-favorite]');if(fav){const id=Number(fav.dataset.favorite);favorites.has(id)?favorites.delete(id):favorites.add(id);save();renderProducts();toast(favorites.has(id)?'Produs adăugat la favorite.':'Produs eliminat din favorite.');return}const cat=ev.target.closest('[data-category],[data-cat-nav],[data-filter]');if(cat){setFilter(cat.dataset.category||cat.dataset.catNav||cat.dataset.filter);return}const detail=ev.target.closest('[data-detail]');if(detail)openProduct(Number(detail.dataset.detail));const qty=ev.target.closest('[data-qty]');if(qty)updateQty(Number(qty.dataset.qty),Number(qty.dataset.delta));const remove=ev.target.closest('[data-remove]');if(remove){delete cart[remove.dataset.remove];save();renderCart()}if(ev.target.closest('#resetProducts,#clearFilters'))resetFilters();if(ev.target.closest('#continueShopping')){closeAll();document.getElementById('produse').scrollIntoView({behavior:'smooth'})}});
document.addEventListener('keydown',ev=>{if(ev.key==='Escape')closeAll();if((ev.key==='Enter'||ev.key===' ')&&ev.target.matches('.product-visual[data-detail]')){ev.preventDefault();openProduct(Number(ev.target.dataset.detail))}});
$('#searchInput').addEventListener('input',ev=>{if (!grid) return; search=ev.target.value;showFavorites=false;renderProducts();if(search)document.getElementById('produse').scrollIntoView({behavior:'smooth',block:'start'})});
$('#sortSelect')?.addEventListener('change',ev=>{sort=ev.target.value;renderProducts()});
$('#cartButton').addEventListener('click',openCart);
$('#closeCart').addEventListener('click',closeAll);$('#closeModal').addEventListener('click',closeAll);overlay.addEventListener('click',closeAll);
$('#favoritesButton').addEventListener('click',()=>{if (!grid) { location.href='index.html?favorites=1#produse'; return; } showFavorites=!showFavorites;filter='all';renderProducts();document.getElementById('produse').scrollIntoView({behavior:'smooth'})});
$('#checkoutButton').addEventListener('click',()=>toast('Demonstrație: nu se plasează comenzi și nu se efectuează plăți.'));
$('#mobileSearchButton').addEventListener('click',()=>{const box=$('.header-search');box.classList.toggle('mobile-visible');if(box.classList.contains('mobile-visible'))$('#searchInput').focus()});

const params = new URLSearchParams(location.search);
filter = params.get('category') || 'all';
search = params.get('search') || '';
showFavorites = params.get('favorites') === '1';
$('#searchInput').value = search;
$('#searchInput').addEventListener('keydown', event => {
  if (!grid && event.key === 'Enter') location.href = 'index.html?search=' + encodeURIComponent(event.target.value) + '#produse';
});
$('#year').textContent=new Date().getFullYear();
renderProducts();
renderCart();
const offers = $('#offerGrid');
if (offers) offers.innerHTML = products.filter(p => p.oldPrice).map(p => `
  <article class="product-card offer-card">
    ${visualHTML(p,true)}
    <div class="product-info">
      <span class="product-category">${p.categoryLabel}</span>
      <button class="product-name" data-detail="${p.id}">${p.name}</button>
      <div class="product-price-row"><div class="price-stack"><del>${currency(p.oldPrice)}</del><strong class="product-price">${currency(p.price)}</strong></div>
      <button class="add-cart" data-add="${p.id}" aria-label="Adaugă în coș: ${p.name}">+</button></div>
    </div>
  </article>`).join('');

