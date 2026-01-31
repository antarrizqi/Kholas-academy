// Kholas Academy - Pure Vanilla JavaScript

// ============ Mobile Menu Toggle ============
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (hamburger && mobileMenu && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});

// ============ Program Data ============
const programs = [
    {
        id: 1,
        title: 'Bahasa Arab Fundamental',
        icon: '📚',
        description: 'Reading, grammar, dan conversation dalam konteks Islam.',
        duration: '12 minggu',
        price: 'Rp 1.500.000',
        level: 'Beginner',
        details: 'Program gateway untuk memulai pembelajaran Islam. Fokus pada membaca, grammar dasar, dan percakapan dalam konteks keislaman.'
    },
    {
        id: 2,
        title: 'Quranic Studies Essentials',
        icon: '🕌',
        description: 'Tajweed, metodologi tafsir, dan Islamic exegesis.',
        duration: '16 minggu',
        price: 'Rp 2.000.000',
        level: 'Intermediate',
        details: 'Belajar cara membaca Quran dengan tajweed yang benar, memahami metodologi tafsir, dan Islamic exegesis.'
    },
    {
        id: 3,
        title: 'Islamic Jurisprudence (Fiqh)',
        icon: '⚖️',
        description: 'Practical Islamic law, usul al-fiqh, dan Islamic perspective.',
        duration: '14 minggu',
        price: 'Rp 1.800.000',
        level: 'Intermediate',
        details: 'Memahami hukum Islam praktis dalam kehidupan sehari-hari, metodologi Fiqh, dan perspektif Islamic terhadap isu kontemporer.'
    },
    {
        id: 4,
        title: 'Hadith Sciences',
        icon: '📖',
        description: 'Understanding hadith authenticity, sanad, dan Islamic jurisprudence sources.',
        duration: '14 minggu',
        price: 'Rp 2.000.000',
        level: 'Advanced',
        details: 'Belajar cara menilai keaslian hadis, memahami sanad, dan menggunakan hadis sebagai sumber hukum Islam.'
    },
    {
        id: 5,
        title: 'Islamic Theology & Creed (Aqidah)',
        icon: '✨',
        description: 'Foundation of Islamic beliefs, philosophy, dan Islamic worldview.',
        duration: '12 minggu',
        price: 'Rp 1.500.000',
        level: 'Beginner',
        details: 'Memahami fondasi kepercayaan Islam, filosofi Islamic, dan worldview yang Quranic.'
    }
];

// ============ Program Modal ============
function showProgramDetail(programId) {
    const program = programs.find(p => p.id === programId);
    if (!program) return;

    const modal = document.getElementById('programModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    if (!modal || !modalTitle || !modalContent) return;

    modalTitle.textContent = program.title;
    modalContent.innerHTML = `
        <div style="font-size: 48px; margin-bottom: 16px;">${program.icon}</div>
        <p style="color: var(--dark); margin-bottom: 16px;">${program.details}</p>
        <div style="background-color: var(--cream); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <p style="margin-bottom: 8px;"><strong>Durasi:</strong> ${program.duration}</p>
            <p style="margin-bottom: 8px;"><strong>Harga:</strong> ${program.price}</p>
            <p><strong>Level:</strong> ${program.level}</p>
        </div>
        <div style="display: flex; gap: 8px;">
            <button class="btn-primary" onclick="registerProgram('${program.title}')">Daftar Sekarang</button>
            <button onclick="closeModal('programModal')" style="background-color: #e0e0e0; color: var(--dark); padding: 12px 28px; border-radius: 8px; border: none; font-weight: 600; cursor: pointer;">Tutup</button>
        </div>
    `;

    modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

function registerProgram(programName) {
    window.location.href = `contact.html?program=${encodeURIComponent(programName)}`;
}

// ============ Donation Modal ============
function openDonationModal() {
    const modal = document.getElementById('donationModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function selectDonation(amount) {
    const customAmount = document.getElementById('customAmount');
    if (customAmount) {
        customAmount.value = amount;
    }
}

function processDonation() {
    const customAmount = document.getElementById('customAmount');
    const amount = customAmount ? customAmount.value : 0;
    
    if (amount && amount > 0) {
        // Format nomor WhatsApp (ganti dengan nomor Anda)
        const whatsappNumber = '62812345678';
        const message = `Saya ingin melakukan donasi sebesar Rp ${parseInt(amount).toLocaleString('id-ID')} untuk Kholas Academy.`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
        closeModal('donationModal');
    } else {
        alert('Silakan masukkan nominal donasi terlebih dahulu');
    }
}

// ============ Contact Form ============
function handleContactForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName')?.value;
    const email = document.getElementById('contactEmail')?.value;
    const message = document.getElementById('contactMessage')?.value;
    const program = document.getElementById('contactProgram')?.value;

    if (!name || !email || !message) {
        alert('Silakan lengkapi semua field');
        return;
    }

    // Format WhatsApp message
    const whatsappNumber = '62812345678';
    const whatsappMessage = `Halo Kholas Academy,\n\nNama: ${name}\nEmail: ${email}\nProgram: ${program || 'Belum ditentukan'}\nPesan: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    alert('Terima kasih! Kami akan menghubungi Anda secepatnya.');
    e.target.reset();
}

// ============ Smooth Scroll ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ Close Modal on Outside Click ============
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// ============ Render Programs ============
function renderPrograms() {
    const grid = document.getElementById('programsGrid');
    if (!grid) return;

    grid.innerHTML = programs.map(program => `
        <div class="card-program">
            <div style="font-size: 48px; margin-bottom: 16px;">${program.icon}</div>
            <h3 style="font-size: 20px; font-weight: bold; color: var(--primary); margin-bottom: 12px;">${program.title}</h3>
            <p style="color: #666; margin-bottom: 16px;">${program.description}</p>
            <div style="font-size: 14px; color: #999; margin-bottom: 16px;">
                <p style="margin-bottom: 4px;"><strong>Durasi:</strong> ${program.duration}</p>
                <p style="margin-bottom: 4px;"><strong>Harga:</strong> ${program.price}</p>
                <p><strong>Level:</strong> ${program.level}</p>
            </div>
            <button class="btn-primary" onclick="showProgramDetail(${program.id})" style="width: 100%; text-align: center;">Lihat Detail</button>
        </div>
    `).join('');
}

// ============ Initialize on Page Load ============
document.addEventListener('DOMContentLoaded', function() {
    renderPrograms();

    // Get program from URL if exists
    const urlParams = new URLSearchParams(window.location.search);
    const programName = urlParams.get('program');
    if (programName) {
        const contactProgram = document.getElementById('contactProgram');
        if (contactProgram) {
            contactProgram.value = decodeURIComponent(programName);
        }
    }
});
