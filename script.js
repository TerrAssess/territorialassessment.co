document.getElementById('year').textContent = new Date().getFullYear();

// Carga dinámica de logos desde logos.json
fetch('logos.json', {cache: 'no-cache'})
  .then(r => r.json())
  .then(list => {
    const grid = document.getElementById('logosGrid');
    if(!Array.isArray(list)) return;
    list.forEach(item => {
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.alt = item.alt || 'Logo de cliente';
      img.src = 'clientes/' + (item.file || 'placeholder.svg');
      grid.appendChild(img);
    });
  })
  .catch(() => { /* silencio en sitios estáticos */ });
