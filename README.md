# Kholas Academy - Website Pembelajaran Islam

Website pure vanilla HTML, CSS, dan JavaScript untuk Kholas Academy - platform pembelajaran Islam berkualitas untuk generasi muda (15-30 tahun) dengan fokus pada dampak sosial.

## Teknologi

- **HTML5** - Semantic markup
- **Tailwind CSS v4** - Via CDN (tidak perlu build/npm)
- **Vanilla JavaScript** - Pure JS tanpa framework
- **Responsive Design** - Mobile-first approach
- **Zero Dependencies** - Bisa dibuka langsung di browser

## Struktur File

```
/
├── index.html           # Halaman utama (homepage)
├── about.html           # Halaman tentang Kholas Academy
├── contact.html         # Halaman kontak & form
├── js/
│   └── app.js          # JavaScript functions (opsional, untuk fitur advanced)
├── public/
│   ├── learning-community.jpg      # Gambar komunitas belajar
│   ├── quran-study.jpg             # Gambar studi Quran
│   └── social-impact.jpg           # Gambar dampak sosial
└── README.md           # File ini
```

## Fitur Utama

✅ **3 Halaman Lengkap**
- Homepage dengan hero section, 5 program showcase, testimonial, dan FAQ
- About page dengan founder story, misi/visi, values, timeline, dan team
- Contact page dengan form, contact info, dan FAQ

✅ **Interaktif dengan Vanilla JS**
- Mobile hamburger menu yang responsive
- Program detail modal
- Accordion FAQ
- Contact form dengan WhatsApp integration
- Smooth scroll navigation

✅ **Design Modern**
- Color scheme: Deep Brown (#3d2817), Warm Gold (#d4a574), Muted Green (#5a7a6e)
- Typography: Clean sans-serif fonts
- Responsive di semua device
- Hover effects dan smooth transitions

✅ **Siap Deploy**
- Tidak perlu build process
- Tidak perlu npm/Node.js
- Buka langsung di browser atau deploy ke Netlify/Vercel/GitHub Pages

## Cara Menggunakan

### 1. Lokal Testing
```bash
# Buka file langsung di browser
file:///path/to/index.html

# Atau gunakan Python simple server
python -m http.server 8000

# Atau gunakan Node.js http-server
npx http-server
```

### 2. Deploy ke Netlify (Rekomendasi)
1. Push ke GitHub
2. Buka Netlify.com
3. Connect GitHub repo
4. Auto deploy ke https://yoursite.netlify.app

### 3. Deploy ke Vercel
1. Push ke GitHub
2. Buka Vercel.com
3. Import GitHub repo
4. Auto deploy ke https://yoursite.vercel.app

### 4. Deploy ke GitHub Pages
1. Push ke GitHub
2. Settings → Pages
3. Source: main branch
4. Live di https://username.github.io/repo

## Customization

### Ubah Kontak
Cari dan ganti nomor WhatsApp dan email di semua file:
- WhatsApp: `628123456789` → nomor Anda
- Email: `info@kholas.academy` → email Anda

### Ubah Warna
Edit CSS variables di setiap file (di dalam `<style>` tag):
```css
:root {
    --primary: #3d2817;      /* Deep Brown */
    --secondary: #d4a574;    /* Warm Gold */
    --accent: #5a7a6e;       /* Muted Green */
    --cream: #f5f1ed;        /* Background */
    --dark: #2a2a2a;         /* Text */
}
```

### Ubah Gambar
Ganti file di `/public/`:
- `learning-community.jpg` - Komunitas belajar
- `quran-study.jpg` - Studi Quran
- `social-impact.jpg` - Dampak sosial

Atau gunakan URL gambar dari Unsplash (sudah ada placeholder):
```html
<img src="https://images.unsplash.com/photo-[ID]" alt="Description">
```

### Ubah Program
Edit data program di `js/app.js` di array `programs`:
```javascript
const programs = [
    {
        id: 1,
        title: 'Program Name',
        description: 'Description',
        duration: '12 minggu',
        price: 'Rp X',
        level: 'Level'
    }
]
```

## File Details

### index.html
- Hero section dengan CTA
- 5 program showcase dengan modal
- Why Kholas section
- Social impact showcase
- Testimonials
- Footer dengan links

### about.html
- Founder story dengan image
- Mission & Vision cards
- Core values (4 values)
- Statistics/Achievements
- Team section
- CTA to programs

### contact.html
- Contact info cards (WhatsApp, Email, Hours)
- Contact form dengan program selector
- FAQ accordion
- Footer

### js/app.js
Fungsi-fungsi:
- `toggleAccordion()` - Toggle FAQ
- `handleContactForm()` - Process contact form
- `showProgramDetail()` - Show program modal
- `openModal()` / `closeModal()` - Modal handlers
- Mobile menu toggle

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **No build required** - Instant loading
- **Small file size** - HTML files 20-30KB each
- **CSS via CDN** - Fast delivery
- **Lazy loading** - Images load on demand
- **SEO optimized** - Meta tags included

## SEO & Meta Tags

Setiap halaman sudah memiliki:
- Meta description
- Open Graph tags
- Twitter card tags
- Canonical URLs
- Structured data ready

## Troubleshooting

**Form tidak bisa kirim?**
- Pastikan nomor WhatsApp sudah benar dan lengkap dengan kode negara
- Format: 628123456789 (tanpa + atau - atau spasi)

**Gambar tidak muncul?**
- Pastikan file ada di `/public/`
- Atau gunakan URL gambar dari Unsplash

**Mobile menu tidak berfungsi?**
- Clear browser cache
- Cek di developer tools apakah hamburger element ada

**Warna tidak berubah?**
- Pastikan mengubah CSS variables di `<style>` tag
- Refresh browser dengan Ctrl+F5 (hard refresh)

## Next Steps / Feature Roadmap

Untuk masa depan bisa tambahkan:
- [ ] Database untuk peserta (Supabase/Firebase)
- [ ] User authentication/login
- [ ] Payment gateway (Stripe/Midtrans)
- [ ] Learning management system (LMS)
- [ ] Video streaming
- [ ] Chat/community forum
- [ ] Blog untuk artikel
- [ ] Newsletter subscription

## Support

Untuk bantuan lebih lanjut:
- WhatsApp: +62 812-3456-789
- Email: info@kholas.academy

---

**Made with ❤️ for Islamic Education**

Copyright © 2024 Kholas Academy. All rights reserved.
