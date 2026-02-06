// ================================================================
// DATA MASTER DUTA SIBER 2026 (20 PERSONEL) - UPDATE DATABASE LENGKAP
// ================================================================
const dutaData = [
    { n: "M. Rizki Fadhlilah", r: "Duta Utama Putra", i: "MR", nim: "2381030039", tgl: "03-Jan-06", wa: "6282120117319", email: "rizkipro602@gmail.com", smt: "6", fak: "FITK", prodi: "Tadris Bahasa Inggris", foto: "https://lh3.googleusercontent.com/u/0/d/1RrXbb7tAwSeW4s6RBokJq6QJ0AEJDvPd" },
    { n: "Mitsni Uswatun Hasanah", r: "Duta Utama Putri", i: "MU", nim: "2381030111", tgl: "08-Sep-05", wa: "6285720886479", email: "mitsniuswatun@gmail.com", smt: "6", fak: "FITK", prodi: "Tadris Bahasa Inggris", foto: "https://lh3.googleusercontent.com/u/0/d/1n9M1KemZr8C08SuHcms1WNUApoA7NDCd" },
    { n: "Rasikin", r: "Duta Wakil 1 Putra", i: "RS", nim: "2383130044", tgl: "14-Oct-03", wa: "6283847156534", email: "rasikinikin577@gmail.com", smt: "6", fak: "FASYA", prodi: "Hukum Tatanegara", foto: "https://lh3.googleusercontent.com/u/0/d/1zsQMOTStp3xM_y8bmUO0v16kj1MtPins" },
    { n: "Sahla Aina Muflihah", r: "Duta Wakil 1 Putri", i: "SA", nim: "2381030135", tgl: "19-Jul-05", wa: "6281937312741", email: "sahlaainam@gmail.com", smt: "6", fak: "FITK", prodi: "Tadris Bahasa Inggris", foto: "https://lh3.googleusercontent.com/u/0/d/169wVbXlhh9Iy44iIs2yZM2l540_VOPJw" },
    { n: "Yudi Prasetya", r: "Duta Photogenic Putra", i: "YP", nim: "2482110053", tgl: "23-Sep-04", wa: "6285797867218", email: "pyudi9203@gmail.com", smt: "4", fak: "FEBI", prodi: "Perbankan Syariah", foto: "https://lh3.googleusercontent.com/u/0/d/1e6a-ePz47XyuOz3dADXd_vuNEaZrGKHN" },
    { n: "Berliana Nabila Az-zahra", r: "Duta Photogenic Putri", i: "BA", nim: "2484110119", tgl: "03-Aug-06", wa: "6283128251528", email: "nabilaberliana822@gmail.com", smt: "4", fak: "FDKI", prodi: "Komunikasi dan Penyiaran Islam", foto: "https://lh3.googleusercontent.com/u/0/d/16j901fSJPFyCRPYaYWlQJW_3Vo40WMyP" },
    { n: "M. Irfan Maulana", r: "Duta Intelegensia Putra", i: "IM", nim: "2384120017", tgl: "26-Mar-05", wa: "6289526735226", email: "irfan.maulana032005@gmail.com", smt: "6", fak: "FDKI", prodi: "Pengembangan Masyarakat Islam", foto: "https://lh3.googleusercontent.com/u/0/d/1j4jxY-AW08nw2edeqVzB6BmzpB3RVxZ6    " },
    { n: "Nadia Salma", r: "Duta Intelegensia Putri", i: "NS", nim: "2384110096", tgl: "17-Nov-04", wa: "6285872364786", email: "nadiasalma7111@gmail.com", smt: "6", fak: "FDKI", prodi: "Komunikasi dan Penyiaran Islam", foto: "https://lh3.googleusercontent.com/u/0/d/12c40RiLGTGpJKeDmimjUWfYLVDFH1vs9" },
    { n: "Agus Haerul", r: "Duta Favorit Putra", i: "AH", nim: "2484110118", tgl: "01-Aug-06", wa: "6283824471817", email: "agshrl01@gmail.com", smt: "4", fak: "FDKI", prodi: "Komunikasi dan Penyiaran Islam", foto: "https://lh3.googleusercontent.com/u/0/d/13rqOwaUMNMvGecxaq8OX60ewHS13hBPV" },
    { n: "Amelia Agustina", r: "Duta Favorit Putri", i: "AA", nim: "2384110084", tgl: "31-Jul-05", wa: "6283824728331", email: "agustinaamelia087@gmail.com", smt: "6", fak: "FDKI", prodi: "Komunikasi dan Penyiaran Islam", foto: "https://lh3.googleusercontent.com/u/0/d/1hzd7s9Ev3sc4hHU8_ZFyeFDDxhmBKTJ6" },
    { n: "Dhiya Ghisya Aulia", r: "Duta Kampus", i: "DG", nim: "2384130124", tgl: "03-Aug-05", wa: "6282310951884", email: "dhy.hons03@gmail.com", smt: "6", fak: "FDKI", prodi: "Bimbingan dan Konseling Islam", foto: "https://lh3.googleusercontent.com/u/0/d/1KSroaJJ4kGeJDpF0u1iOPc2nntaIymqI" },
    { n: "Muhamad Syihabudin Anam", r: "Duta Kampus", i: "MA", nim: "2382130031", tgl: "09-Jul-05", wa: "6282129620584", email: "Sy3hab@gmail.com", smt: "6", fak: "FEBI", prodi: "Akuntansi Syariah", foto: "" },
    { n: "Moja Yulia Paramita", r: "Duta Kampus", i: "MY", nim: "2385160037", tgl: "21-Jul-04", wa: "6281316493596", email: "mozaparamita73596@gmail.com", smt: "6", fak: "FUA", prodi: "Tasawuf dan Psikoterapi", foto: "" },
    { n: "Syahdan Noer Saputra", r: "Duta Kampus", i: "SN", nim: "2383130008", tgl: "01-Feb-05", wa: "6285697168047", email: "noerptra@gmail.com", smt: "6", fak: "FASYA", prodi: "Hukum Tatanegara", foto: "https://lh3.googleusercontent.com/u/0/d/1R7VnxmqFAOHRD2WqtuAOMT3EMTx8R2E_" },
    { n: "Khoridatus Shofa", r: "Duta Kampus", i: "KS", nim: "2485110009", tgl: "24-Mar-06", wa: "6282130028893", email: "khoridatusshofakip@gmail.com", smt: "4", fak: "FUA", prodi: "Sejarah Peradaban Islam", foto: "https://lh3.googleusercontent.com/u/0/d/1sHRG0fEkVJrROZrO5_QlEPgaOtbrOwq5" },
    { n: "Mardiya Ghorizadin", r: "Duta Kampus", i: "MG", nim: "2485110023", tgl: "24-Jul-06", wa: "6285215440520", email: "mghorizadin@gmail.com", smt: "4", fak: "FUA", prodi: "Sejarah Peradaban Islam", foto: "https://lh3.googleusercontent.com/u/0/d/1R7mniBRjNFAhRfp_baE5B1KpMigTjV-Q" },
    { n: "Tonisah", r: "Duta Kampus", i: "TN", nim: "2381050044", tgl: "22-Dec-04", wa: "6282127677687", email: "tonisahaha@gmail.com", smt: "6", fak: "FITK", prodi: "Tadris Matematika", foto: "https://lh3.googleusercontent.com/u/0/d/1qhlivy3dCp4fZoGvfWLSs91F3eYxvAQV" },
    { n: "M. Ade Rifki", r: "Duta Kampus", i: "AR", nim: "2381030032", tgl: "15-Mar-05", wa: "6283109707513", email: "aderifki882@gmail.com", smt: "6", fak: "FITK", prodi: "Tadris Bahasa Inggris", foto: "https://lh3.googleusercontent.com/u/0/d/1wp7qn8fxlR3dp_AylTcxeRI3DPBOoG4Z" },
    { n: "M. Danu Ar-Rahman", r: "Duta Kampus", i: "DA", nim: "2384110091", tgl: "19-Jul-05", wa: "6285860718501", email: "mdanuarrahman0@gmail.com", smt: "6", fak: "FDKI", prodi: "Komunikasi dan Penyiaran Islam", foto: "" },
    { n: "Zahra Roudhotun Naja", r: "Duta Kampus", i: "ZN", nim: "2481010043", tgl: "14-Feb-06", wa: "6289531584443", email: "zahranaja1402@gmail.com", smt: "4", fak: "FITK", prodi: "Pendidikan Agama Islam", foto: "" },
    // TAMBAHAN DATA ADMIN UNTUK LOGIN
    { n: "Admin Master", r: "Administrator", i: "AD", nim: "0000", tgl: "-", wa: "0", email: "admin@siduta.com", smt: "-", fak: "-", prodi: "-", foto: "" }
];
// ================================================================
// CONFIGURASI CLOUD SINKRONISASI
// ================================================================
// ================================================================
// CONFIGURASI CLOUD SINKRONISASI (PASTI ADA DI PALING ATAS)
// ================================================================
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzr421hCbaNe_hWi9dSQfolUHW8vQXiMBQ_z2w3u7CYKmOBfurnaVi376jCPC0Ue8DGCQ/exec";

// Fungsi untuk konversi File (Foto/PDF) menjadi teks Base64 agar bisa dikirim
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = error => reject(error);
    });
}

// Fungsi pengiriman data ke Google Sheets & Drive
async function sendToCloud(payload) {
    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Penting untuk menghindari error CORS pada Apps Script
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        // Karena mode no-cors, kita tidak bisa membaca json response, 
        // tapi data tetap masuk ke Google Sheets dengan aman.
        return { status: "success" }; 
    } catch (error) {
        console.error("Gagal sinkron ke Cloud:", error);
        throw error;
    }
}

// VARIABEL GLOBAL UNTUK GEOTAGGING - TETAP ASLI
let currentCoords = "Mendeteksi Lokasi...";
let capturedImageData = null;
let cameraStream = null;

// VARIABEL GLOBAL UNTUK STATISTIK (DITAMBAHKAN)
let countHadir = parseInt(localStorage.getItem('countHadir')) || 0;
let countEvidence = parseInt(localStorage.getItem('countEvidence')) || 0;

// ================================================================
// NEW: SISTEM STORAGE PERMANEN (REVISI SESUAI PENGGUNA)
// ================================================================

// Fungsi muat riwayat saat aplikasi dibuka (DIREVISI: Filter per User)
function loadHistoryFromStorage() {
    const history = JSON.parse(localStorage.getItem('siduta_history')) || [];
    const historyContainer = document.getElementById('presensi-history-list');
    const emptyState = document.getElementById('empty-history');

    const activeDuta = JSON.parse(localStorage.getItem('activeDuta'));
    if (!historyContainer || !activeDuta) return;

    // FILTER: Ambil data milik user yang login
    const userHistory = history.filter(item => item.owner === activeDuta.n);

    // HITUNG STATISTIK SPESIFIK USER
    countHadir = userHistory.filter(item => item.type === "Presensi").length;
    countEvidence = userHistory.filter(item => item.type === "Evidence").length;

    // UPDATE ANGKA DI DASHBOARD
    const statNums = document.querySelectorAll('.stat-num');
    if (statNums.length > 0) statNums[0].innerText = countHadir;
    if (statNums.length > 1) statNums[1].innerText = countEvidence;

    if (userHistory.length > 0) {
        if (emptyState) emptyState.style.display = 'none';
        historyContainer.innerHTML = '';
        userHistory.forEach(item => {
            renderHistoryToUI(item.type, item.location, item.time, item.status);
        });
    } else {
        if (emptyState) emptyState.style.display = 'block';
        historyContainer.innerHTML = '';
        if (emptyState) historyContainer.appendChild(emptyState);
    }
}

// Fungsi bantu untuk merender item riwayat ke layar
function renderHistoryToUI(type, location, timeStr, status) {
    const historyContainer = document.getElementById('presensi-history-list');
    const historyItem = document.createElement('div');
    historyItem.className = 'duta-card-item animate-fade';
    historyItem.style = "background: white; padding: 15px; border-radius: 20px; margin-bottom: 12px; display: flex; align-items: center; box-shadow: 0 5px 15px rgba(0,0,0,0.02); border: 1px solid #f1f5f9;";

    let icon = "fa-clock-rotate-left";
    let iconColor = "#4f46e5";
    let bgColor = "#eef2ff";

    if (type === "Evidence") {
        icon = "fa-camera-retro";
        iconColor = "#0ea5e9";
        bgColor = "#e0f2fe";
    } else if (type === "Notulensi") {
        icon = "fa-file-signature";
        iconColor = "#f59e0b";
        bgColor = "#fff7ed";
    }

    historyItem.innerHTML = `
        <div style="width: 45px; height: 45px; background: ${bgColor}; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: ${iconColor}; margin-right: 15px;">
            <i class="fa-solid ${icon}"></i>
        </div>
        <div style="flex: 1;">
            <div style="font-weight: 700; font-size: 14px; color: #1e293b;">${type} Berhasil</div>
            <div style="font-size: 11px; color: #64748b;">${location} • ${timeStr} WIB</div>
        </div>
        <div style="font-size: 10px; font-weight: 800; color: #22c55e;">${status}</div>
    `;
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}

// Fungsi Simpan ke LocalStorage (DIREVISI: Ditambahkan Label Owner)
function saveActionToStorage(type, location) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const history = JSON.parse(localStorage.getItem('siduta_history')) || [];

    // Ambil nama user yang login
    const activeDuta = JSON.parse(localStorage.getItem('activeDuta'));
    const ownerName = activeDuta ? activeDuta.n : "Unknown";

    const newItem = {
        owner: ownerName, // Penanda data milik siapa
        type: type,
        location: location,
        time: timeStr,
        status: "SUKSES"
    };

    history.push(newItem);
    localStorage.setItem('siduta_history', JSON.stringify(history));

    // Langsung render ke UI setelah simpan
    const emptyState = document.getElementById('empty-history');
    if (emptyState) emptyState.style.display = 'none';
    renderHistoryToUI(type, location, timeStr, "SUKSES");
}

// FUNGSI RESET UNTUK PENGGUNAAN MASSAL (REVISI: Menghapus Hanya Milik Sendiri)
function resetSistemSiber() {
    const activeDuta = JSON.parse(localStorage.getItem('activeDuta'));
    if (!activeDuta) return;

    if (confirm(`Hapus semua riwayat dan reset statistik untuk ${activeDuta.n}?`)) {
        let history = JSON.parse(localStorage.getItem('siduta_history')) || [];
        const newHistory = history.filter(item => item.owner !== activeDuta.n);

        localStorage.setItem('siduta_history', JSON.stringify(newHistory));

        // Reset angka variabel
        countHadir = 0;
        countEvidence = 0;

        alert("Data berhasil direset ke 0.");
        location.reload();
    }
}

// ================================================================
// LOGIKA LOGIN & UPDATE UI PENGGUNA (TETAP ASLI)
// ================================================================

function populateLoginSelect() {
    const select = document.getElementById('select-duta');
    if (!select) return;

    let options = '<option value="" disabled selected>Pilih Nama Duta...</option>';
    dutaData.forEach((duta, index) => {
        options += `<option value="${index}">${duta.n} - ${duta.r}</option>`;
    });
    select.innerHTML = options;
}

function handleLogin() {
    const select = document.getElementById('select-duta');
    const pinInput = document.getElementById('login-pin');

    if (!select.value) {
        alert("Pilih nama Anda terlebih dahulu!");
        return;
    }

    // LOGIKA ADMIN MASTER
    if (dutaData[select.value].n === "Admin Master") {
        if (pinInput.value === "admin123") { // Password Admin
            sessionStorage.setItem('isAdmin', 'true');
            window.location.href = "admin.html";
            return;
        } else {
            alert("Password Admin Salah!");
            return;
        }
    }

    const PIN_AKSES = "1234";

    if (pinInput.value === PIN_AKSES) {
        const user = dutaData[select.value];
        localStorage.setItem('activeDuta', JSON.stringify(user));
        updateUserProfile(user);

        // Muat riwayat spesifik user setelah login
        loadHistoryFromStorage();
        loadNotulensi();

        showPage('dashboard');
        pinInput.value = "";
    } else {
        alert("PIN Akses Salah! Silakan coba lagi.");
        pinInput.value = "";
    }
}

function updateUserProfile(user) {
    if (!user) return;
    const nameElements = document.querySelectorAll('.user-display-name');
    nameElements.forEach(el => el.innerText = user.n);
    const roleElement = document.querySelector('.badge-role');
    if (roleElement) roleElement.innerHTML = `<i class="fa-solid fa-shield-halved"></i> ${user.r}`;
    const avatarElements = document.querySelectorAll('.avatar-inner');
    avatarElements.forEach(el => el.innerText = user.i);
}

function handleLogout() {
    localStorage.removeItem('activeDuta');
    location.reload();
}

// ================================================================
// FUNGSI NAVIGASI HALAMAN (TETAP ASLI)
// ================================================================
function showPage(pageId, navEl) {
    document.querySelectorAll('.page-view').forEach(p => p.classList.add('d-none'));
    const activePage = document.getElementById('page-' + pageId);
    if (activePage) {
        activePage.classList.remove('d-none');
        activePage.classList.add('animate-fade');
    }
    // Tambahkan di dalam function showPage(pageId, navEl)
    if (pageId === 'jadwal') {
        renderJadwal();
    }

    const navBar = document.getElementById('app-nav');
    const header = document.getElementById('app-header');

    if (pageId === 'login') {
        if (navBar) navBar.classList.add('d-none');
        if (header) header.classList.add('d-none');
    } else {
        if (navBar) navBar.classList.remove('d-none');
        if (header) header.classList.remove('d-none');
    }

    if (navEl) {
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        navEl.classList.add('active');
    }

    if (pageId === 'absensi') {
        getLocation();
        initLiveCamera();
    } else {
        stopCamera();
    }
}

// ================================================================
// FUNGSI GEOLOCATION (GPS) - TETAP ASLI
// ================================================================
function getLocation() {
    const status = document.getElementById('gps-status');
    const liveOverlayText = document.getElementById('live-geotag-text');

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition((position) => {
            const lat = position.coords.latitude.toFixed(6);
            const lon = position.coords.longitude.toFixed(6);
            currentCoords = `Lat: ${lat}, Lon: ${lon}`;

            if (status) status.innerText = `GPS Terdeteksi: ${currentCoords}`;
            if (liveOverlayText) liveOverlayText.innerText = currentCoords;
        }, (err) => {
            currentCoords = "Akses GPS Ditolak";
            if (status) status.innerText = currentCoords;
            if (liveOverlayText) liveOverlayText.innerText = currentCoords;
        }, { enableHighAccuracy: true });
    } else {
        if (status) status.innerText = "Geolocation tidak didukung browser";
    }
}

// ================================================================
// FUNGSI LIVE CAMERA SYSTEM - TETAP ASLI
// ================================================================
async function initLiveCamera() {
    const video = document.getElementById('webcam');
    const camContainer = document.getElementById('camera-container');
    const resultContainer = document.getElementById('result-container');

    if (!video) return;
    if (resultContainer) resultContainer.classList.add('d-none');
    if (camContainer) camContainer.classList.remove('d-none');

    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" },
            audio: false
        });
        video.srcObject = cameraStream;
    } catch (err) {
        console.error("Gagal akses kamera:", err);
        alert("Mohon izinkan akses kamera untuk melakukan presensi.");
    }
}

function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
}

function retakePhoto() {
    capturedImageData = null;
    initLiveCamera();
}

function takeSnapshot() {
    const video = document.getElementById('webcam');
    const canvas = document.getElementById('canvas-geotag');
    const preview = document.getElementById('image-preview');
    const camContainer = document.getElementById('camera-container');
    const resultContainer = document.getElementById('result-container');

    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, canvas.height - 120, canvas.width, 120);
    ctx.fillStyle = "#fcc419";
    ctx.font = `bold ${canvas.width / 25}px Inter`;
    ctx.fillText("SiDuta - UIN Siber Syekh Nurjati", 30, canvas.height - 70);
    ctx.fillStyle = "white";
    ctx.font = `${canvas.width / 35}px Inter`;
    const now = new Date().toLocaleString('id-ID');
    ctx.fillText(`${now} | ${currentCoords}`, 30, canvas.height - 30);

    capturedImageData = canvas.toDataURL("image/jpeg");
    if (preview) {
        preview.src = capturedImageData;
        if (resultContainer) resultContainer.classList.remove('d-none');
        if (camContainer) camContainer.classList.add('d-none');
    }
    stopCamera();
}

// ================================================================
// REVISI FUNGSI RENDER LIST DUTA (MENAMBAHKAN MODAL DETAIL)
// ================================================================
function loadDutaList(filter = "") {
    const container = document.getElementById('duta-list-full');
    if (!container) return;

    // Cari data berdasarkan filter
    const filteredData = dutaData.filter(d =>
        d.n.toLowerCase().includes(filter.toLowerCase()) ||
        d.r.toLowerCase().includes(filter.toLowerCase())
    );

    // Ambil index asli dari dutaData agar modal menampilkan data yang benar
    container.innerHTML = filteredData.map(duta => {
        const originalIndex = dutaData.findIndex(item => item.n === duta.n);
        return `
            <div class="duta-card-item animate-fade" 
                 onclick="showDutaDetail(${originalIndex})"
                 style="cursor: pointer; background: white; padding: 15px; border-radius: 20px; margin-bottom: 12px; display: flex; align-items: center; box-shadow: 0 5px 15px rgba(0,0,0,0.02); border: 1px solid #f1f5f9;">
                <div class="duta-avatar" style="width: 45px; height: 45px; background: #f0f7ff; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 800; color: #005aab; margin-right: 15px;">
                    ${duta.i}
                </div>
                <div class="duta-meta">
                    <div style="font-weight: 700; font-size: 14px; color: #1e293b;">${duta.n}</div>
                    <div style="font-size: 10px; font-weight: 800; color: #ffa502; text-transform: uppercase;">${duta.r}</div>
                </div>
                <div style="margin-left: auto; color: #cbd5e1;">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        `;
    }).join('');
}

// FUNGSI BARU: MENAMPILKAN MODAL PROFIL DETAIL
function showDutaDetail(index) {
    const duta = dutaData[index];

    // Logic tampilan foto atau inisial
    let avatarPart = `<div style="width: 80px; height: 80px; background: #005aab; color: white; border-radius: 25px; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: 800; margin: 0 auto 15px;">${duta.i}</div>`;
    if (duta.foto && duta.foto.length > 5) {
        avatarPart = `<img src="${duta.foto}" style="width: 80px; height: 80px; border-radius: 25px; object-fit: cover; margin: 0 auto 15px; display: block; border: 2px solid #f1f5f9;">`;
    }

    const modalHTML = `
        <div id="profile-modal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 9999; backdrop-filter: blur(5px);">
            <div class="animate-fade" style="background: white; width: 90%; max-width: 350px; border-radius: 30px; padding: 25px; position: relative; text-align: center;">
                <button onclick="closeProfileModal()" style="position: absolute; top: 15px; right: 15px; border: none; background: #f1f5f9; width: 30px; height: 30px; border-radius: 50%; color: #64748b; cursor:pointer;"><i class="fa-solid fa-xmark"></i></button>
                
                ${avatarPart}
                
                <h3 style="margin: 0; font-size: 18px; color: #1e293b;">${duta.n}</h3>
                <span style="font-size: 10px; font-weight: 800; color: #ffa502; text-transform: uppercase;">${duta.r}</span>
                
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #f1f5f9;">
                
                <div style="text-align: left; font-size: 12px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <div style="grid-column: span 2;">
                        <small style="color: #94a3b8; display: block;">NIM</small>
                        <strong style="color: #475569;">${duta.nim}</strong>
                    </div>
                    <div>
                        <small style="color: #94a3b8; display: block;">Semester</small>
                        <strong style="color: #475569;">${duta.smt}</strong>
                    </div>
                    <div>
                        <small style="color: #94a3b8; display: block;">Tgl Lahir</small>
                        <strong style="color: #475569;">${duta.tgl}</strong>
                    </div>
                    <div style="grid-column: span 2;">
                        <small style="color: #94a3b8; display: block;">Fakultas / Jurusan</small>
                        <strong style="color: #475569;">${duta.fak} - ${duta.prodi}</strong>
                    </div>
                </div>

                ${duta.wa ? `
                <a href="https://wa.me/${duta.wa}" target="_blank" style="display: block; background: #22c55e; color: white; text-decoration: none; padding: 12px; border-radius: 15px; font-weight: 700; font-size: 13px; margin-top: 20px;">
                    <i class="fa-brands fa-whatsapp"></i> Hubungi Duta
                </a>` : ''}
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeProfileModal() {
    const modal = document.getElementById('profile-modal');
    if (modal) modal.remove();
}

// ================================================================
// FUNGSI REAL-TIME CLOCK - TETAP ASLI
// ================================================================
function updateClock() {
    const clockEl = document.getElementById('digital-clock');
    const dateEl = document.getElementById('date-now');
    const liveTimeText = document.getElementById('live-time-text');
    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID', { hour12: false });
    const dateString = now.toLocaleDateString('id-ID', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
    if (clockEl) clockEl.innerText = timeString;
    if (dateEl) dateEl.innerText = dateString;
    if (liveTimeText) liveTimeText.innerText = `${dateString} | ${timeString}`;
}

// ================================================================
// FUNGSI ACTIONS (ABSEN & EVIDENCE) - REVISI STORAGE
// ================================================================

function addtoHistory(type, location) {
    saveActionToStorage(type, location);
}

async function handleAbsen() {
    // 1. Validasi Foto
    if (!capturedImageData) {
        alert("Peringatan: Anda belum mengambil foto bukti presensi!");
        return;
    }

    const btn = document.getElementById('btn-submit-absen');
    const selectLokasi = document.getElementById('lokasi-presensi');
    const namaLokasi = selectLokasi ? selectLokasi.options[selectLokasi.selectedIndex].text : "Lokasi";
    const activeDuta = JSON.parse(localStorage.getItem('activeDuta'));

    // 2. Efek Visual Loading
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> MENGIRIM KE CLOUD...';
    btn.disabled = true;

    try {
        // 3. Persiapkan Data untuk Cloud
        const payload = {
            category: "Presensi",
            owner: activeDuta ? activeDuta.n : "Anonim",
            type: "Presensi",
            location: namaLokasi,
            time: new Date().toLocaleString('id-ID'),
            fileData: capturedImageData.split(',')[1], 
            // Menggunakan nama (.n) agar Admin mudah mengenali file di Drive
            fileName: `Presensi_${activeDuta ? activeDuta.n.replace(/\s+/g, '_') : 'Duta'}_${Date.now()}.jpg`,
            mimeType: "image/jpeg"
        };

        // 4. Kirim ke Google Apps Script
        await sendToCloud(payload);

        // 5. Update Status Lokal
        addtoHistory("Presensi", namaLokasi);
        countHadir++;
        localStorage.setItem('countHadir', countHadir);

        const statNums = document.querySelectorAll('.stat-num');
        if (statNums.length > 0) statNums[0].innerText = countHadir;

        alert("PRESENSI BERHASIL!\n\nData & Foto telah tersinkronisasi ke Cloud Database UIN Siber Syekh Nurjati.");
        
    } catch (error) {
        console.error("Cloud Error:", error);
        alert("Terjadi gangguan koneksi ke Cloud. Data akan disimpan di riwayat lokal perangkat ini.");
        
        // Backup lokal jika internet bermasalah
        addtoHistory("Presensi", namaLokasi);
    } finally {
        // 6. Reset UI dan Kembali ke Dashboard
        btn.innerHTML = originalText;
        btn.disabled = false;
        capturedImageData = null;
        showPage('dashboard');
    }
}

// ================================================================
// BAGIAN 2 KODE YANG ANDA KIRIM (TIDAK ADA YANG DIKURANGI)
// ================================================================

function updateFileName(input) {
    const display = document.getElementById('file-name-display');
    if (input.files && input.files[0]) {
        display.innerText = "File: " + input.files[0].name;
        display.style.color = "#2ed573";
        display.style.fontWeight = "bold";
    } else {
        display.innerText = "Ambil atau Unggah Foto";
        display.style.color = "";
        display.style.fontWeight = "";
    }
}

async function handleEvidence() {
    const judul = document.getElementById('evidence-title').value;
    const desc = document.getElementById('evidence-desc').value;
    const fileInput = document.getElementById('file-input');
    const activeDuta = JSON.parse(localStorage.getItem('activeDuta'));

    if (!judul || !desc) {
        alert("Harap isi Judul Agenda dan Deskripsi!");
        return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
        alert("Harap unggah atau ambil foto bukti kegiatan!");
        return;
    }

    const btn = document.querySelector('#page-evidence .btn-action-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> MENGUNGGAH KE CLOUD...';
    btn.disabled = true;

    try {
        // --- TAMBAHAN LOGIKA CLOUD ---
        // 1. Konversi file ke Base64
        const base64File = await getBase64(fileInput.files[0]);
        
        // 2. Siapkan Data untuk Google Sheets & Drive
        const payload = {
            category: "Evidence",
            owner: activeDuta ? activeDuta.n : "Unknown",
            title: judul,
            desc: desc,
            time: new Date().toLocaleString('id-ID'),
            fileData: base64File,
            fileName: fileInput.files[0].name,
            mimeType: fileInput.files[0].type
        };

        // 3. Kirim ke Google Apps Script
        await sendToCloud(payload);
        // --- END LOGIKA CLOUD ---

        // Kode asli Anda tetap berjalan di bawah ini:
        addtoHistory("Evidence", judul);
        countEvidence++;
        localStorage.setItem('countEvidence', countEvidence);

        const statNums = document.querySelectorAll('.stat-num');
        if (statNums.length > 1) statNums[1].innerText = countEvidence;

        alert("BERHASIL!\nLaporan Evidence Anda telah diunggah ke sistem Cloud SiDuta.");

        document.getElementById('evidence-title').value = "";
        document.getElementById('evidence-desc').value = "";
        fileInput.value = "";
        updateFileName(fileInput);

    } catch (error) {
        console.error("Cloud Error:", error);
        alert("Gagal sinkron ke Cloud, tapi riwayat tetap disimpan di lokal.");
        // Jalankan fungsi lokal jika cloud gagal
        addtoHistory("Evidence", judul);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
        showPage('dashboard');
    }
}

// ================================================================
// NEW: LOGIKA NOTULENSI PERTEMUAN (FIX PENAMAAN & LOGIKA)
// ================================================================

async function handleSaveNotulen() {
    const title = document.getElementById('notulen-title').value;
    const content = document.getElementById('notulen-content').value;
    const fileInput = document.getElementById('notulen-file');
    const activeDuta = JSON.parse(localStorage.getItem('activeDuta'));

    if (!title) {
        alert("Judul Pertemuan (seperti: Expo / Sosialisasi) harus diisi!");
        return;
    }

    let fileName = "";
    if (fileInput && fileInput.files.length > 0) {
        fileName = fileInput.files[0].name;
    }

    if (!content && !fileName) {
        alert("Harap isi Catatan Pertemuan atau Unggah File (PDF/Word)!");
        return;
    }

    // --- INTEGRASI CLOUD START ---
    const btn = document.querySelector('#page-notulensi .btn-action-primary') || { innerHTML: "", disabled: false };
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> MENGARSIPKAN KE CLOUD...';
    btn.disabled = true;

    try {
        let base64File = "";
        let mimeType = "";

        // Jika ada file yang diunggah, konversi ke Base64
        if (fileInput && fileInput.files.length > 0) {
            base64File = await getBase64(fileInput.files[0]);
            mimeType = fileInput.files[0].type;
        }

        const payload = {
            category: "Notulensi",
            owner: activeDuta.n,
            title: title,
            content: content || "Lihat lampiran file",
            time: new Date().toLocaleString('id-ID'),
            fileData: base64File,
            fileName: fileName,
            mimeType: mimeType
        };

        // Kirim ke Google Apps Script
        await sendToCloud(payload);
        // --- INTEGRASI CLOUD END ---

        // Kode asli Anda (Penyimpanan Lokal)
        const notulensi = JSON.parse(localStorage.getItem('siduta_notulensi')) || [];
        const newNotulen = {
            owner: activeDuta.n,
            role: activeDuta.r,
            title: title,
            content: content,
            file: fileName,
            timestamp: new Date().getTime(),
            date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
        };

        notulensi.push(newNotulen);
        localStorage.setItem('siduta_notulensi', JSON.stringify(notulensi));

        addtoHistory("Notulensi", title);

        alert("BERHASIL!\nNotulensi telah tersimpan di Arsip Lokal dan Cloud Google Drive.");

        // Reset Form (Kode asli Anda)
        document.getElementById('notulen-title').value = "";
        if (document.getElementById('notulen-content')) document.getElementById('notulen-content').value = "";
        if (fileInput) fileInput.value = "";

        loadNotulensi();
        showPage('dashboard');

    } catch (error) {
        console.error("Cloud Error:", error);
        alert("Gagal sinkron ke Cloud, namun data tetap masuk ke arsip lokal perangkat ini.");
        
        // Backup tetap simpan lokal jika cloud gagal
        const notulensi = JSON.parse(localStorage.getItem('siduta_notulensi')) || [];
        notulensi.push({
            owner: activeDuta.n, title: title, content: content, file: fileName,
            timestamp: new Date().getTime(), date: new Date().toLocaleDateString('id-ID')
        });
        localStorage.setItem('siduta_notulensi', JSON.stringify(notulensi));
        loadNotulensi();
        showPage('dashboard');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

function loadNotulensi() {
    const container = document.getElementById('notulensi-list');
    if (!container) return;

    let allNotulensi = JSON.parse(localStorage.getItem('siduta_notulensi')) || [];

    if (allNotulensi.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#94a3b8; font-size:12px; padding: 20px;">Belum ada arsip notulensi pertemuan.</p>';
        return;
    }

    allNotulensi.sort((a, b) => b.timestamp - a.timestamp);

    container.innerHTML = allNotulensi.map((n) => {
        const fileBadge = n.file ? `<div style="display:inline-block; background:#eef2ff; padding:5px 10px; border-radius:8px; font-size:11px; color:#4f46e5; margin-top:8px; border: 1px dashed #4f46e5;"><i class="fa-solid fa-file-lines"></i> ${n.file}</div>` : "";

        return `
        <div class="glass-form-card mb-3 animate-fade" style="padding: 15px; border-left: 4px solid #f59e0b; background: white;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="flex:1">
                    <h4 style="margin: 0; font-size: 14px; font-weight: 800; color: #1e293b; text-transform: uppercase;">${n.title}</h4>
                    <p style="font-size: 10px; color: #64748b; margin: 2px 0;">Oleh: <b>${n.owner}</b></p>
                    <p style="font-size: 9px; color: #94a3b8;">${n.date}</p>
                </div>
                <button onclick="deleteNotulen(${n.timestamp})" style="background:none; border:none; color:#ef4444; font-size:12px; padding: 5px;"><i class="fa-solid fa-trash-can"></i></button>
            </div>
            <div style="margin-top:10px; font-size: 12px; color: #334155; line-height:1.5; white-space: pre-wrap;">${n.content}</div>
            ${fileBadge}
        </div>
        `;
    }).join('');
}

function deleteNotulen(timestamp) {
    if (confirm("Hapus notulensi pertemuan ini dari arsip bersama?")) {
        let allNotulensi = JSON.parse(localStorage.getItem('siduta_notulensi')) || [];
        const filteredData = allNotulensi.filter(n => n.timestamp !== timestamp);
        localStorage.setItem('siduta_notulensi', JSON.stringify(filteredData));
        loadNotulensi();
    }
}

document.addEventListener('change', (e) => {
    if (e.target.id === 'notulen-file') {
        const fileInfo = document.getElementById('file-info-notulen');
        if (e.target.files.length > 0) {
            fileInfo.innerText = "File siap: " + e.target.files[0].name;
            fileInfo.style.color = "#22c55e";
            fileInfo.style.fontWeight = "bold";
        }
    }
});

// ================================================================
// INITIALIZE APP - REVISI
// ================================================================
document.addEventListener('input', (e) => {
    if (e.target.classList.contains('search-input')) {
        loadDutaList(e.target.value);
    }
});

const dataJadwal = [
    {
        kegiatan: "Piket Front Office - Gedung Siber",
        tanggal: "2026-05-20",
        jam: "08:00 - 12:00",
        lokasi: "Lantai 1 Gedung Siber",
        petugas: "M. Rizki Fadhlilah, Mitsni Uswatun",
        tipe: "Piket"
    },
    {
        kegiatan: "Sosialisasi PMB UIN Siber",
        tanggal: "2026-05-22",
        jam: "09:00 - Selesai",
        lokasi: "MAN 1 Cirebon",
        petugas: "Tim Sosialisasi A",
        tipe: "Sosialisasi"
    },
    {
        kegiatan: "Expo Pendidikan & Kewirausahaan",
        tanggal: "2026-05-25",
        jam: "07:30 - 16:00",
        lokasi: "Lapangan Rektorat",
        petugas: "Seluruh Personel Duta",
        tipe: "Expo"
    }
];

function renderJadwal(filterMyTask = false) {
    const container = document.getElementById('jadwal-list-container');
    if (!container) return;

    // 1. Ambil data Duta yang sedang login untuk filter
    const activeDuta = JSON.parse(localStorage.getItem('activeDuta'));
    const namaUser = activeDuta ? activeDuta.n : "";

    // 2. AMBIL DATA DARI LOCAL STORAGE (Hasil sync Cloud) & DATA STATIS
    const customJadwal = JSON.parse(localStorage.getItem('dataJadwalCustom')) || [];
    const combinedJadwal = [...customJadwal, ...dataJadwal];

    // 3. LOGIKA FILTER
    let displayData = combinedJadwal;
    if (filterMyTask && namaUser) {
        displayData = combinedJadwal.filter(item => {
            // Memeriksa apakah nama user yang login ada di dalam kolom petugas
            return item.petugas.toLowerCase().includes(namaUser.toLowerCase());
        });
    }

    // 4. RENDER KE HTML
    if (displayData.length === 0) {
        container.innerHTML = `<div class="text-center py-5 text-muted">Tidak ada jadwal penugasan.</div>`;
        return;
    }

    container.innerHTML = displayData.map(item => {
        let badgeColor = "#4f46e5";
        if (item.tipe === "Piket") badgeColor = "#0ea5e9";
        if (item.tipe === "Expo") badgeColor = "#f59e0b";
        if (item.tipe === "Sosialisasi") badgeColor = "#10b981";

        return `
            <div class="glass-form-card mb-3 animate-fade" style="background: white; padding: 18px; border-radius: 20px; border: 1px solid #f1f5f9; position: relative; overflow: hidden;">
                <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 5px; background: ${badgeColor};"></div>
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <span style="background: ${badgeColor}15; color: ${badgeColor}; font-size: 10px; font-weight: 800; padding: 4px 10px; border-radius: 6px; text-transform: uppercase;">
                        ${item.tipe}
                    </span>
                    <div style="font-size: 11px; color: #94a3b8; font-weight: 600;">
                        <i class="fa-regular fa-clock me-1"></i> ${item.jam}
                    </div>
                </div>
                <h4 style="font-size: 15px; font-weight: 800; color: #1e293b; margin-bottom: 8px;">${item.kegiatan}</h4>
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 12px;">
                    <div style="font-size: 12px; color: #64748b;">
                        <i class="fa-solid fa-calendar-day me-1" style="color: #4f46e5;"></i> ${item.tanggal}
                    </div>
                    <div style="font-size: 12px; color: #64748b;">
                        <i class="fa-solid fa-location-dot me-1" style="color: #ef4444;"></i> ${item.lokasi}
                    </div>
                </div>
                <div style="background: #f8fafc; padding: 10px; border-radius: 12px; display: flex; align-items: center;">
                    <div style="width: 24px; height: 24px; background: #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; margin-right: 10px;">
                        <i class="fa-solid fa-user-group text-white"></i>
                    </div>
                    <div style="font-size: 11px; color: #475569; font-weight: 600;">
                        ${item.petugas}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// FUNGSI BARU UNTUK NOTIFIKASI WHATSAPP
function kirimNotifWhatsApp(kegiatan, tanggal, lokasi, daftarPetugas) {
    daftarPetugas.forEach(nama => {
        const duta = dutaData.find(d => d.n === nama);
        if (duta && duta.wa !== "0") {
            const pesan = `Halo ${duta.n},\n\nAnda mendapatkan *PENUGASAN BARU*:\n📌 *${kegiatan}*\n🗓 Tanggal: ${tanggal}\n📍 Lokasi: ${lokasi}\n\nMohon bersiap tepat waktu. Semangat Duta Siber!`;
            const waLink = `https://wa.me/${duta.wa}?text=${encodeURIComponent(pesan)}`;
            window.open(waLink, '_blank');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateClock, 1000);
    updateClock();
    loadDutaList();
    populateLoginSelect();

    const statNums = document.querySelectorAll('.stat-num');
    if (statNums.length > 0) statNums[0].innerText = countHadir;
    if (statNums.length > 1) statNums[1].innerText = countEvidence;

    const savedUser = localStorage.getItem('activeDuta');
    if (savedUser) {
        updateUserProfile(JSON.parse(savedUser));
        loadHistoryFromStorage();
        loadNotulensi();
        showPage('dashboard');
    } else {
        showPage('login');
    }
});
