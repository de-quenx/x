const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const body = document.body;
const downloadBtn = document.getElementById('downloadBtn');
const previewBtn = document.getElementById('previewBtn');
const devicesBtn = document.getElementById('devicesBtn');
const featuresBtn = document.getElementById('featuresBtn');
const aboutBtn = document.getElementById('aboutBtn');
const previewContent = document.getElementById('previewContent');
const devicesContent = document.getElementById('devicesContent');
const featuresContent = document.getElementById('featuresContent');
const aboutContent = document.getElementById('aboutContent');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');

function lockScroll() {
    body.style.paddingRight = (window.innerWidth - document.documentElement.clientWidth) + 'px';
    body.classList.add('menu-open');
}

function unlockScroll() {
    body.style.paddingRight = '';
    body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', function() {
    const isActive = menuToggle.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    isActive ? lockScroll() : unlockScroll();
});

overlay.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    unlockScroll();
});

document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
        unlockScroll();
    });
});

const contentData = {
    preview: {
        items: [
            { title: 'Tema AlphaOs', image: '../asset/alpha.png' },
            { title: 'Tema Argon', image: '../asset/argon.png' },
            { title: 'Tema Rtawrt', image: '../asset/rta.png' },
            { title: 'Menu Login', image: '../asset/login.png' }
        ]
    },
    devices: {
        items: [
            { title: 'Nanopi Series', list: ['Nanopi-r2s', 'Nanopi-r3s', 'Nanopi-r4s'] },
            { title: 'Orange Pi Series', list: ['Orangepi Pc 2', 'Orangepi R1 Plus', 'Orangepi R1 Plus LTS', 'Orange Pi 3B'] },
            { title: 'Raspberry Pi Series', list: ['Raspberry Pi 2B', 'Raspberry Pi 3B', 'Raspberry Pi 4B'] },
            { title: 'Allwinner Series', list: ['Allwinner H5 Orange Pi Zero Plus', 'Allwinner H5 Orange Pi Zero Plus 2', 'Allwinner H6 Orange Pi 3', 'Allwinner H6 Orange Pi 3 LTS', 'Allwinner H616 Orange Pi Zero2', 'Allwinner H618 Orange Pi Zero3'] },
            { title: 'Amlogic s905 Series', list: ['Amlogic s905 MXQ-Pro+', 'Amlogic s905 Beelink-Mini', 'Amlogic s905lb Q96-Mini', 'Amlogic s905w TX3-Mini', 'Amlogic s905w X96-Mini', 'Amlogic s905l Mibox-4', 'Amlogic s905l2 M301A', 'Amlogic s905x B860H', 'Amlogic s905x HG680P'] },
            { title: 'Amlogic s905x2 Series', list: ['Amlogic s905x2 B860Hv5', 'Amlogic s905x2 HG680-FJ', 'Amlogic s905x2 X96Max-v2Gb', 'Amlogic s905x2 X96Max-v4Gb'] },
            { title: 'Amlogic s905x3 Series', list: ['Amlogic s905x3 HK1-Vontar-X3', 'Amlogic s905x3 X96Air_100mb', 'Amlogic s905x3 X96Air_1Gb', 'Amlogic s905x3 X96Max+_100Mb', 'Amlogic s905x3 X96Max+_1Gb'] },
            { title: 'Amlogic Other Series', list: ['Amlogic s905x4 Ax810', 'Amlogic s905x4 Advan-At01', 'Amlogic s912 Nexbox-A1-A95X', 'Amlogic s912 Nexbox-A95X-A2', 'Amlogic s922x GT-King-Pro'] },
            { title: 'Rockchip Series', list: ['RK3318-BOX', 'Firefly-Rk3328', 'Rk3399 King3399'] },
            { title: 'Other Devices', list: ['X86-64'] }
        ]
    },
    features: {
        items: [
            { title: 'Fitur Utama', list: ['Tema Argon ⨯ Tema RTA-wrt ⨯ Tema Alpha', 'Amlogic Service ( Amlogic Devices )', '3ginfo-Lite ⨯ Modeminfo ⨯ IP Information', 'Fix TTL ⨯ Tailscale', 'Eqosplus ⨯ Droidnet', 'GPIO LED Support HG680P - B860H', 'MODSDCARD Support HG680P - B860H', 'Tersedia WIFI ON | OFF HG680P - B860H', 'Internet Detector ⨯ Connection Monitor', 'Auto Time Sync ⨯ File Manager', 'Configurasi Openclash ⨯ Nikki ⨯ Passwall'] },
            { title: 'Khusus Amlogic Devices Tertentu', list: ['Kernel Versi 5.15.x', 'Kernel Versi 6.1.x', 'Kernel Versi 6.6.x', 'Kernel Versi 6.12.x'] },
            { title: 'Tunnel Options', list: ['OpenClash', 'Nikki', 'OpenClash + Nikki', 'OpenClash + Nikki + Passwall', 'No Tunnel'] }
        ]
    },
    about: {
        items: [
            { 
                title: 'Tentang XIDZs-WRT', 
                description: 'XIDZs-WRT Adalah Sebuah Firmware Custom Yang Dikembangkan Untuk Komunitas Openwrt Indonesia. Project Ini Bertujuan Untuk Memberikan Pengalaman Networking Yang Lebih Baik Dengan Fitur-Fitur Yang Disesuaikan Dengan Kebutuhan Pengguna Dan Ini Gratis Yah, Terimakasih.' 
            }
        ]
    }
};

window.openLightbox = function(src, title) {
    lightboxImage.src = src;
    lightboxTitle.textContent = title;
    lightbox.classList.add('active');
    lockScroll();
};

function closeLightbox() {
    lightbox.classList.remove('active');
    unlockScroll();
    setTimeout(() => {
        lightboxImage.src = '';
        lightboxTitle.textContent = '';
    }, 200);
}

lightbox.addEventListener('click', closeLightbox);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (lightbox.classList.contains('active')) closeLightbox();
        if (sideMenu.classList.contains('active')) menuToggle.click();
    }
});

function toggleContent(contentElement, dataType) {
    if (contentElement.classList.toggle('active')) {
        let html = '';
        if (dataType === 'preview') {
            contentData[dataType].items.forEach(item => {
                html += `<div class="detail-item"><h3>${item.title}</h3><img src="${item.image}" alt="${item.title}" class="preview-image" loading="lazy" onclick="openLightbox('${item.image}', '${item.title}')"></div>`;
            });
        } else if (dataType === 'about') {
            contentData[dataType].items.forEach(item => {
                html += `<div class="detail-item"><h3>${item.title}</h3><p>${item.description}</p></div>`;
            });
        } else {
            contentData[dataType].items.forEach(item => {
                html += `<div class="detail-item"><h3>${item.title}</h3><ul>${item.list.map(li => `<li>${li}</li>`).join('')}</ul></div>`;
            });
        }
        contentElement.innerHTML = html;
    }
}

downloadBtn.addEventListener('click', () => {
    sessionStorage.setItem('loginAccess', 'true');
    window.location.href = '../login/';
});

previewBtn.addEventListener('click', () => toggleContent(previewContent, 'preview'));
devicesBtn.addEventListener('click', () => toggleContent(devicesContent, 'devices'));
featuresBtn.addEventListener('click', () => toggleContent(featuresContent, 'features'));
aboutBtn.addEventListener('click', () => toggleContent(aboutContent, 'about'));

async function fetchIPInfo() {
    const els = { 
        ip: document.getElementById('ipValue'), 
        country: document.getElementById('countryValue'), 
        city: document.getElementById('cityValue'), 
        provider: document.getElementById('providerValue') 
    };
    [
        document.getElementById('ipDisplay'), 
        document.getElementById('countryDisplay'), 
        document.getElementById('cityDisplay'), 
        document.getElementById('providerDisplay')
    ].forEach(el => el.classList.add('loading'));
    
    try {
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        await new Promise(r => setTimeout(r, 500));
        els.ip.textContent = data.ip || 'N/A';
        els.country.textContent = data.country_name || 'N/A';
        els.city.textContent = data.city || 'N/A';
        els.provider.textContent = data.org || 'N/A';
    } catch (error) {
        Object.values(els).forEach(el => el.textContent = 'Error');
        setTimeout(() => Object.values(els).forEach(el => el.textContent = 'Unavailable'), 2000);
    }
    
    [
        document.getElementById('ipDisplay'), 
        document.getElementById('countryDisplay'), 
        document.getElementById('cityDisplay'), 
        document.getElementById('providerDisplay')
    ].forEach(el => el.classList.remove('loading'));
}

window.addEventListener('load', fetchIPInfo);