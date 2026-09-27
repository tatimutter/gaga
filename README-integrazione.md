# Come integrare questi file nel tuo progetto Vite

## 1. Copia i file

Copia il contenuto di questa cartella dentro `sito-associazione/src/`:

```
sito-associazione/
├── src/
│   ├── components/       ← tutti i file .jsx qui dentro
│   ├── App.jsx            ← sovrascrive quello generato da Vite
│   └── main.jsx           ← sovrascrive quello generato da Vite
```

## 2. Installa Bootstrap

```bash
npm install bootstrap
```

(Le icone sono tutte SVG inline nel codice, quindi non serve il pacchetto bootstrap-icons.)

## 3. Recupera gli asset originali del template

**Questo è il passaggio più importante.** Il file HTML che mi hai passato fa riferimento a:

- `./assets/css/wave-bsb.css` → il CSS custom del template (classi come `bsb-tpl-bg-blue`, `bsb-tpl-highlight`, `bsb-btn-3xl`, ecc. NON sono di Bootstrap, sono definite qui)
- `./assets/img/...` → tutte le immagini (hero, team, portfolio, blog, ecc.)
- `./assets/favicon/...`
- Google Fonts: Oswald + Satisfy

Devi scaricare il pacchetto completo di Wave (non solo l'HTML) e copiare la cartella `assets/` così:

```
sito-associazione/
└── public/
    └── assets/
        ├── css/wave-bsb.css
        ├── img/...
        └── favicon/...
```

Mettendola in `public/`, Vite la serve così com'è, e i percorsi `/assets/...` usati nei componenti (es. `/assets/img/hero/hero-home.jpg`) funzioneranno senza modifiche.

## 4. Google Fonts

Apri `index.html` (nella root del progetto Vite, non `src/`) e aggiungi nell'head:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Satisfy&display=swap" rel="stylesheet">
```

## 5. Cose da sapere / limitazioni di questa conversione

- **Portfolio**: nell'originale il grid usa Isotope/Packery (jQuery) per il filtro animato per categoria. Qui è stato reso come griglia statica. Se ti serve il filtro, va reimplementato con `useState` in React invece della libreria jQuery.
- **Accordion (sezione About)**: funziona ancora tramite gli attributi `data-bs-toggle` di Bootstrap JS, non con state React — è la soluzione più rapida e fedele all'originale, ma non è "il modo React" puro. Va bene per ora.
- **Scrollspy** (evidenziazione del link attivo nel menu mentre scorri): richiede `data-bs-spy="scroll"` sul `<body>`, che in un'app React single-page va aggiunto manualmente nel tuo `index.html` o gestito diversamente, dato che React di solito non renderizza il `<body>`. Se ti serve, fammi sapere e te lo sistemo.
- **Testi placeholder**: nome team, testimonial, articoli blog, indirizzo/telefono sono ancora quelli del template demo — andranno sostituiti con i contenuti reali dell'associazione.
- **Form newsletter e "Get in touch"**: non hanno ancora una funzione che invia i dati da qualche parte — andrà collegato a un servizio (es. EmailJS, come hai già fatto per un altro progetto) o a un backend.

## 6. Testa

```bash
npm run dev
```

Se lo stile non appare corretto, il problema più probabile è che manca ancora `wave-bsb.css` o la cartella `assets/img` — verifica il punto 3.
