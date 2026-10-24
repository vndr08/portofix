---
target: "https://activetheory.net/"
total_score: 14
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 4
target_identity: "url:https://activetheory.net/"
timestamp: 2026-10-24T08-06-52Z
slug: activetheory-net
---
Method: dual-agent (A: active_theory_design · B: active_theory_evidence)

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 2 | Respons animasi kuat, tetapi lokasi, pilihan aktif, dan progres tidak jelas. |
| 2 | Match System / Real World | 2 | Label dasar jelas; navigasi spasial dan kontrol “Ask me anything” tidak memakai model interaksi yang familiar. |
| 3 | User Control and Freedom | 1 | Kontrol kembali/keluar sulit ditemukan; wheel dapat mengubah tampilan tanpa menyelaraskan URL. |
| 4 | Consistency and Standards | 3 | Bahasa visual sangat konsisten, tetapi pola browser umum sengaja digeser. |
| 5 | Error Prevention | 1 | Dampak scroll, wheel, kartu, dan query kurang dipratinjau. |
| 6 | Recognition Rather Than Recall | 1 | Metadata proyek dan jalur navigasi tersembunyi sampai gestur yang tepat ditemukan. |
| 7 | Flexibility and Efficiency | n/a | Tidak wajib untuk portfolio Experience-mode. |
| 8 | Aesthetic and Minimalist Design | 3 | Homepage/detail fokus; katalog Work menjadi padat dan saling bersaing. |
| 9 | Error Recovery | 1 | Pemulihan dari perubahan state dan unsupported rendering kurang terlihat. |
| 10 | Help and Documentation | n/a | Tidak wajib untuk portfolio Experience-mode. |
| **Total** | | **14/32** | **Poor usability; exceptional art direction** |

## Design Specificity Verdict

Sangat spesifik dan terasa benar-benar diarahkan. Partikel iridescent, dunia gelap volumetrik, media slab yang melayang, tipografi techno, dan transisi spasial membentuk identitas yang tidak bisa dipindahkan begitu saja ke studio lain. Medium-nya sendiri menjadi bukti kemampuan Active Theory.

Spesifisitas ini terutama berada pada atmosfer dan motion. Identitas studio, konteks proyek, dan model navigasi terlalu jauh mundur sehingga pengunjung harus menebak cara memakai pengalaman tersebut.

Browser evidence menemukan: tidak ada heading atau landmark semantik pada homepage maupun project route; canvas utama tidak memiliki accessible name; zoom dinonaktifkan; focus berpindah ke link yang berada pada accessibility mirror yang terpotong; reduced-motion masih menjalankan animasi panjang dan autoplay video; lima target berukuran di bawah 44×44; textarea pada project route tidak memiliki programmatic label. Source scan tidak berlaku untuk URL eksternal. Overlay gagal karena kebijakan Private Network Access/CORS memblokir halaman HTTPS mengambil detector dari localhost, jadi tidak ada overlay yang dapat dipercaya.

## Overall Impression

Active Theory berhasil menjadikan portfolio sebagai karya interaktif, bukan katalog. Dampak pertama sangat kuat. Peluang terbesarnya adalah menambahkan orientasi minimum—siapa, apa yang sedang dilihat, bagaimana bergerak, dan mengapa proyek itu penting—tanpa merusak misterinya.

## What's Working

1. Dunia visualnya benar-benar ownable dan konsisten.
2. Website membuktikan kemampuan real-time interactive craft sebelum membuat klaim verbal.
3. Chrome tetap kecil; pill Work–Contact menjadi jangkar yang stabil di tengah perubahan visual.

## Priority Issues

### P1 — First viewport tidak mengidentifikasi studio atau memberi entry point

Pengunjung mendapat spectacle tanpa cepat memahami siapa Active Theory, apa yang mereka kerjakan, dan gestur pertama yang diharapkan. Tambahkan identitas/proposisi satu baris dan satu interaction cue yang menghilang setelah dipakai.

Suggested command: `$impeccable clarify`

### P1 — Detail proyek menyembunyikan bukti yang dibutuhkan calon klien

Pada initial viewport Prometheus, title, client, year, role, description, dan project/case-study link tidak terlihat walau tersedia di DOM. Pertahankan media sebagai hero, tetapi tampilkan metadata rail atau caption ringkas sejak viewport pertama.

Suggested command: `$impeccable layout`

### P1 — State visual, URL, dan kontrol kembali tidak sinkron

Wheel pada `/work/prometheus` mengembalikan visual ke katalog sementara URL tetap pada project detail. Sinkronkan state dengan browser history dan sediakan back-to-work yang eksplisit.

Suggested command: `$impeccable harden`

### P1 — Lapisan aksesibilitas belum setara dengan pengalaman visual

Tidak ada heading/landmark, canvas tidak bernama, zoom dinonaktifkan, focus visual tidak mengikuti accessibility mirror, reduced motion tidak benar-benar mengurangi gerak, dan textarea tidak berlabel. Bangun struktur HTML paralel yang utuh, sinkronkan fokus dengan canvas, izinkan zoom, dan sediakan motion-reduced path.

Suggested command: `$impeccable audit`

### P2 — Katalog Work terlalu banyak meminta perhatian sekaligus

Lima filter, empat belas proyek, kartu besar bertumpuk, partikel, nav, dan Ask Me Anything berbagi satu viewport. Perjelas proyek aktif, tambahkan current title/count, kurangi atmosfer di area keputusan, dan jelaskan fungsi query control.

Suggested command: `$impeccable distill`

## Persona Red Flags

**Jordan (first-timer):** Tidak ada action yang jelas dalam lima detik pertama. “XR / VR / AI” menggabungkan tiga kapabilitas. Prometheus tidak memperlihatkan back control. “Ask me anything” tidak menjelaskan input atau hasil yang diharapkan.

**Riley (stress tester):** Wheel mengubah tampilan tanpa mengubah URL. Accessibility mirror dan visual canvas tidak sepenuhnya sinkron. Unsupported-browser state terlihat on-brand tetapi tidak memberi recovery atau HTML work index.

**Casey (mobile):** Navigasi utama berada di kanan atas, real-time scene dan media berat meningkatkan risiko koneksi lambat, serta beberapa kontrol terukur di bawah 44×44. Tidak ada overflow pada viewport 390 px dan tampilan mobile tetap koheren, tetapi gesture dan real-device performance masih perlu diuji.

## Minor Observations

- Mono display face mendukung mood, tetapi sulit dibaca pada ukuran kecil.
- Kontras filter ungu berubah karena background juga bergerak dan berwarna serupa.
- Toggle Audio memiliki accessible name tetapi tidak terlihat jelas pada frame yang diperiksa.
- Initial load memuat sekitar 744 KB transfer yang terukur dan 3.39 MB decoded (angka bawah karena resource cross-origin/video tidak seluruhnya terhitung); load event sekitar 3.56 detik pada satu desktop run.
- Google Analytics/video abort saat teardown adalah false positive, bukan broken resource.

## Questions to Consider

- Apakah homepage terutama harus mengesankan calon klien, komunitas kreatif, atau menjadi artwork mandiri?
- Berapa sedikit bahasa yang dibutuhkan agar spectacle semakin kuat, bukan semakin biasa?
- Jika setiap proyek memiliki cerita berbeda, apakah seluruhnya perlu dipaksa masuk ke satu dunia spasial yang sama?
- Di akhir kunjungan, apa yang harus lebih diingat: dunia partikelnya atau alasan memilih Active Theory untuk masalah tertentu?
