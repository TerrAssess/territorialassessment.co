# Territorial Assessment Website

Repositorio listo para publicar en **GitHub Pages** con dominio personalizado.

- **Usuario GitHub**: `TerrAssess`
- **Repositorio**: `territorialassessment.co`
- **Dominio**: `territorialassessment.co`

## Estructura
- `index.html` — página principal
- `styles.css` — estilos con paleta #12465C, #257497, #FFB800
- `script.js` — carga dinámica de logos desde `logos.json`
- `clientes/` — aquí van los archivos PNG/SVG de logos
- `logos.json` — lista de logos a mostrar
- `CNAME` — dominio personalizado
- `README.md` — esta guía

## Publicación en GitHub Pages
1. Crea el repo **TerrAssess/territorialassessment.co**.
2. Sube todo el contenido de esta carpeta (incluido `CNAME`).
3. En **Settings → Pages**:  
   - Build and deployment → Source: **Deploy from a branch**  
   - Branch: **main** · Folder: **/** (root)  
4. Espera a que GitHub muestre el enlace de Pages.

## DNS en GoDaddy (dominio raíz y www)
En la zona DNS de GoDaddy configura:

**A (dominio raíz):**
- `@` → `185.199.108.153`
- `@` → `185.199.109.153`
- `@` → `185.199.110.153`
- `@` → `185.199.111.153`

**CNAME (www):**
- `www` → `TerraSsess.github.io` (reemplaza con tu **usuario** `.github.io`)

> Nota: si tu usuario es `TerrAssess`, el valor debe ser `terrassess.github.io` (en minúsculas funciona igual).

## Actualizar logos de clientes
1. Sube tus logos a `clientes/` (formato SVG recomendado, PNG también sirve).
2. Edita `logos.json` agregando objetos, por ejemplo:
```json
[
  { "file": "edf-renewables.svg", "alt": "EDF Renewables" },
  { "file": "igac.png", "alt": "IGAC" }
]
```
3. Commit y push. El grid se actualiza automáticamente.

## Contacto rápido
- WhatsApp: `https://wa.link/9u3lz6`
- Correo: `contacto@territorialassessment.co`
