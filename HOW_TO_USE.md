# Kholas Academy - Pure Vanilla JS Website

## 📋 File Structure

```
kholas-academy/
├── index.html (Homepage - Halaman Utama)
├── about.html (Halaman Tentang Kami)
├── contact.html (Halaman Kontak & Form Pendaftaran)
├── js/
│   └── app.js (JavaScript Vanilla - semua interaktivitas)
├── public/ (Folder untuk gambar)
│   ├── learning-community.jpg
│   ├── quran-study.jpg
│   └── social-impact.jpg
└── README.md, SUMMARY.txt, HOW_TO_USE.md (Dokumentasi)
```

## ✨ Technology Stack

- **HTML5** - Semantic markup
- **Tailwind CSS v4** - Via CDN (tidak perlu npm)
- **Vanilla JavaScript** - Pure JS, tanpa React/Next.js/Framework apapun
- **Zero Dependencies** - Buka langsung di browser

## 🚀 Cara Menggunakan

### 1. Download File
- Click "Download" button di v0 → Download ZIP
- Extract ke folder di komputer Anda

### 2. Buka Website Lokal
- Buka folder yang sudah di-extract
- Double-click `index.html`
- Website akan terbuka di browser Anda

### 3. Test Semua Halaman
- Homepage (index.html) - Lihat 5 program, dampak sosial, testimonial
- About (about.html) - Cerita founder, misi, visi
- Contact (contact.html) - Form kontak dan pendaftaran

## 🔧 Customize Sebelum Deploy

### Update Nomor WhatsApp & Email

Find & Replace di ketiga file HTML:

| Cari | Ganti Dengan |
|------|------------|
| `62812345678` | Nomor WA Anda (tanpa +) |
| `info@kholas.academy` | Email Anda |
| `+62 812-3456-789` | WhatsApp Anda (dengan format) |

### Update Gambar

Ganti 3 gambar di folder `public/`:
- `learning-community.jpg` - Foto komunitas belajar
- `quran-study.jpg` - Foto Qur'an/study
- `social-impact.jpg` - Foto dampak sosial

## 📱 Responsive Design

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

Semua halaman sudah responsif dan siap untuk semua device.

## 🌐 Deploy (Pilih Satu)

### Option 1: GitHub Pages (Paling Gratis)
```
1. Buat GitHub account (gratis)
2. Create new repository → nama: "kholas-academy"
3. Upload files ke repository
4. Settings → Pages → Enable
5. Website live di: https://username.github.io/kholas-academy
```

### Option 2: Netlify (Recommended)
```
1. Buat account di Netlify.com (gratis)
2. Drag & drop folder ke Netlify
3. Website auto-live dengan HTTPS
```

### Option 3: Vercel
```
1. Buat account di Vercel.com (gratis)
2. Import GitHub repository
3. Auto-deploy dengan HTTPS
```

### Option 4: Hosting Tradisional
```
1. Upload ke hosting dengan FTP/Panel
2. Set index.html sebagai home page
3. Website live
```

## 📝 File Descriptions

| File | Purpose |
|------|---------|
| index.html | Homepage dengan 5 program, hero section, dampak sosial, testimonial |
| about.html | Cerita Ana (founder), mission, vision, values, team |
| contact.html | Form kontak, form pendaftaran program, FAQ |
| js/app.js | Semua JavaScript: mobile menu, modal, form handling, smooth scroll |
| public/*.jpg | Gambar untuk website |

## ⚙️ JavaScript Functions

- `showProgramDetail(id)` - Buka modal detail program
- `closeModal(id)` - Tutup modal
- `registerProgram(name)` - Redirect ke contact form dengan program terpilih
- `handleContactForm(e)` - Handle submit form kontak
- `openDonationModal()` - Buka modal donasi
- `scrollToSection(id)` - Smooth scroll ke section

## 🔗 Links Integration

### Internal Links
- Homepage links ke semua halaman (.html)
- Contact form auto-redirect ke WhatsApp dengan pesan

### External Links
- Donation via WhatsApp
- Registration via WhatsApp

## 🎨 Color System

```css
--primary: #3d2817 (Deep Brown)
--secondary: #d4a574 (Warm Gold)
--accent: #5a7a6e (Muted Green)
--cream: #f5f1ed (Background)
--dark: #2a2a2a (Text)
```

## ✅ Pre-Launch Checklist

- [ ] Download ZIP dari v0
- [ ] Extract ke folder
- [ ] Test di browser (double-click index.html)
- [ ] Update WhatsApp number & email
- [ ] Replace gambar
- [ ] Test semua links
- [ ] Test mobile responsiveness
- [ ] Deploy ke Netlify/Vercel/GitHub Pages
- [ ] Cek di browser yang berbeda
- [ ] Share URL dengan teman

## 🆘 Troubleshooting

**Q: Images tidak muncul?**
A: Pastikan file JPG ada di folder `public/` dengan nama yang sama di HTML

**Q: Link tidak berfungsi?**
A: Check URL di attribute href atau onclick

**Q: WhatsApp tidak terbuka?**
A: Pastikan nomor WhatsApp benar (format: 62XXXXXXXXXX tanpa +)

**Q: Website terlihat aneh di mobile?**
A: Refresh browser atau clear cache

## 📞 Support

Jika ada pertanyaan tentang struktur HTML/JS/CSS, silakan edit file sesuai kebutuhan.

---

**Selamat menggunakan Kholas Academy!** 🎓
