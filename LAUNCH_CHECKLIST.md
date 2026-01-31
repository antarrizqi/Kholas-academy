# Kholas Academy - Launch Checklist

Panduan lengkap sebelum meluncurkan website.

## Pre-Launch Checklist

### 1. Customization (15 menit)

- [ ] **Update Contact Information**
  - Cari dan ganti `628123456789` dengan nomor WhatsApp Anda (format: tanpa + atau spasi)
  - Cari dan ganti `info@kholas.academy` dengan email Anda
  - Update di file: `index.html`, `about.html`, `contact.html`, `js/app.js`

- [ ] **Update Program Information**
  - Periksa harga program di `index.html` (bagian Programs Section)
  - Update durasi program jika berbeda
  - Sesuaikan level program (Beginner/Intermediate/Advanced)

- [ ] **Replace Images**
  - Update `/public/learning-community.jpg`
  - Update `/public/quran-study.jpg`
  - Update `/public/social-impact.jpg`
  - Atau ganti dengan URL gambar dari Unsplash

- [ ] **Update Text Content**
  - Periksa spelling dan grammar
  - Sesuaikan nama founder/team
  - Update statistik jika ada (500+ peserta, dll)

### 2. Testing (15 menit)

- [ ] **Desktop Testing**
  - Buka `index.html` di browser
  - Klik semua navigasi links
  - Test semua buttons bekerja
  - Test program modal terbuka
  - Test FAQ accordion
  - Scroll halaman untuk smooth scroll

- [ ] **Mobile Testing**
  - Buka di smartphone/tablet
  - Cek hamburger menu bekerja
  - Cek responsive design
  - Test semua buttons mobile-friendly
  - Test form input di mobile

- [ ] **Form Testing**
  - Isi contact form
  - Cek WhatsApp link bekerja
  - Verify nomor WhatsApp terbuka chat app
  - Test email link bekerja

- [ ] **Link Testing**
  - Homepage → Program → Detail
  - Homepage → About
  - Homepage → Contact
  - About → Programs
  - Contact → Programs
  - Footer links semua bekerja

- [ ] **Browser Testing**
  - Chrome (latest)
  - Firefox (latest)
  - Safari (latest)
  - Edge (latest)
  - Mobile browsers

### 3. SEO & Meta Tags

- [ ] **Check Meta Tags**
  - Setiap halaman punya `<title>`
  - Setiap halaman punya `<meta description>`
  - Social media preview terlihat bagus

- [ ] **Update Metadata**
  - Sesuaikan title jika perlu
  - Sesuaikan description
  - Add/update OG tags

### 4. Performance

- [ ] **Check Loading Speed**
  - PageSpeed Insights (desktop) > 90
  - PageSpeed Insights (mobile) > 80
  - GTmetrix grade A/B

- [ ] **Optimize Images**
  - Compress gambar ke < 500KB each
  - Use WebP format (optional)
  - Responsive image sizes

### 5. Accessibility

- [ ] **WCAG Compliance**
  - Color contrast ratio 4.5:1 minimum
  - All buttons are keyboard accessible
  - Form labels properly associated
  - Alt text on all images

### 6. Deployment Setup

#### Option A: Netlify (Recommended)

- [ ] Create GitHub account (jika belum)
- [ ] Push project ke GitHub
- [ ] Sign up Netlify (dengan GitHub)
- [ ] Connect GitHub repo
- [ ] Verify domain (jika ada custom domain)
- [ ] Enable auto-deploy
- [ ] Test deployed site

#### Option B: Vercel

- [ ] Create GitHub account
- [ ] Push project ke GitHub
- [ ] Sign up Vercel (dengan GitHub)
- [ ] Import project
- [ ] Deploy
- [ ] Configure custom domain (jika ada)

#### Option C: GitHub Pages

- [ ] Push ke GitHub
- [ ] Settings → Pages
- [ ] Choose main branch
- [ ] Wait for deploy
- [ ] Verify site live

#### Option D: Traditional Hosting

- [ ] Download semua files
- [ ] Upload via FTP/SFTP
- [ ] Verify di browser
- [ ] Test form submission

### 7. Post-Deployment

- [ ] **Verify Live Site**
  - Check homepage loads
  - Check all pages accessible
  - Check forms work
  - Check mobile responsive

- [ ] **Setup Email Notifications**
  - Configure email untuk form submissions
  - atau gunakan Formspree/Getform

- [ ] **Analytics Setup**
  - Add Google Analytics (optional)
  - Monitor traffic

- [ ] **DNS Setup (jika custom domain)**
  - Add DNS records
  - Enable SSL (auto di Netlify/Vercel)
  - Verify HTTPS working

- [ ] **Google Search Console**
  - Submit sitemap
  - Verify site ownership
  - Monitor search performance

- [ ] **Social Media**
  - Share website ke social media
  - Add meta tags untuk social preview
  - Monitor social referrals

## Quick Customization Guide

### Change Contact Info

**Find & Replace dalam semua file HTML:**

```
OLD: 628123456789
NEW: [Nomor WhatsApp Anda - format: 628xxxxxxxxx]

OLD: info@kholas.academy
NEW: [Email Anda]

OLD: +62 812-3456-789
NEW: [Nomor yang ditampilkan - format: dengan spasi]
```

### Change Colors

Edit di setiap HTML file, dalam tag `<style>`:

```css
:root {
    --primary: #3d2817;      /* Main color - ganti dengan hex code Anda */
    --secondary: #d4a574;    /* Accent color */
    --accent: #5a7a6e;       /* Highlight color */
    --cream: #f5f1ed;        /* Background */
    --dark: #2a2a2a;         /* Text color */
}
```

### Change Program Details

Edit di `index.html`, bagian **Programs Section**:

```html
<!-- Ubah program 1 -->
<h3 class="text-xl font-bold mb-2">Bahasa Arab Fundamental</h3>
<p class="text-gray-600 mb-4">Reading, grammar, dan conversation dalam konteks Islam.</p>

<!-- Ubah durasi, harga, level -->
<div class="mb-4">
    <div class="text-sm text-gray-500 mb-2">Durasi: 12 minggu</div>
    <div class="text-sm text-gray-500 mb-2">Biaya: Rp 1.500.000</div>
    <div class="text-sm text-gray-500">Level: Beginner</div>
</div>
```

## File Locations

- **HTML Files**: Root directory (`index.html`, `about.html`, `contact.html`)
- **JavaScript**: `js/app.js`
- **Images**: `public/` directory
- **Documentation**: Root directory

## Support & Help

Jika ada pertanyaan:

- **WhatsApp**: +62 812-3456-789
- **Email**: info@kholas.academy
- **Hours**: Senin - Jumat, 09:00 - 17:00 WIB

## Deployment Time Estimates

| Platform | Setup Time | Deploy Time |
|----------|-----------|-----------|
| Netlify | 5 menit | Auto (< 1 menit) |
| Vercel | 5 menit | Auto (< 1 menit) |
| GitHub Pages | 5 menit | 5-10 menit |
| Traditional | 15 menit | Instant |

## Success Criteria

Website siap launch jika:

✅ Semua 3 halaman accessible  
✅ Mobile responsive tested  
✅ Contact form working  
✅ WhatsApp links active  
✅ Gambar terupload  
✅ Loading speed < 3 detik  
✅ No console errors  
✅ SEO tags complete  
✅ HTTPS working (untuk deploy)  
✅ Analytics setup (optional)  

---

**Selamat meluncurkan Kholas Academy! 🚀**

Semoga website ini membawa manfaat dan berkah untuk pendidikan Islam generasi muda.
