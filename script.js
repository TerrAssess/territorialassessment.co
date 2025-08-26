// Año en footer
(function() {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Carga dinámica de logos desde logos.json
fetch('logos.json', { cache: 'no-cache' })
  .then(r => r.json())
  .then(list => {
    const grid = document.getElementById('logosGrid');
    if (!grid || !Array.isArray(list)) return;
    list.forEach(item => {
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.alt = item.alt || 'Logo de cliente';
      img.src = 'clientes/' + (item.file || 'placeholder.svg');
      grid.appendChild(img);
    });
  })
  .catch(() => {});

// Envío del formulario via Formspree con confirmación y limpieza
const form = document.getElementById('contactForm');
if (form) {
  const msg = document.getElementById('formMsg');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (msg) msg.textContent = 'Enviando…';
    try {
      const resp = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      const data = await resp.json().catch(() => ({}));
      if (resp.ok) {
        if (msg) msg.textContent = '¡Gracias! Tu mensaje fue enviado.';
        form.reset();
      } else {
        const detail = Array.isArray(data.errors) ? data.errors.map(e => e.message).join(' | ') : (data.message || '');
        if (msg) msg.textContent = 'No se pudo enviar. ' + (detail || 'Inténtalo de nuevo.');
      }
    } catch (err) {
      if (msg) msg.textContent = 'Error de red. Inténtalo nuevamente.';
    }
  });
}
