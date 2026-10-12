
const search=document.querySelector('#citySearch');
const region=document.querySelector('#regionFilter');
const cards=[...document.querySelectorAll('[data-city-card]')];
function filterCities(){const q=(search?.value||'').toLowerCase().trim();const r=region?.value||'all';cards.forEach(card=>{const name=(card.dataset.name||'').toLowerCase();const tags=(card.dataset.region||'').toLowerCase();card.hidden=!(name.includes(q)||tags.includes(q))||!(r==='all'||card.dataset.group===r);});}
search?.addEventListener('input',filterCities);region?.addEventListener('change',filterCities);
