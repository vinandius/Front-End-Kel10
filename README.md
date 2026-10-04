# Front-End-Kel10

Website link : 
https://vinandius.github.io/Front-End-Kel10/

Projek yang selesai dan sedang dibuat (Work In Progress) ada di dalam link tersebut dalam bentuk hyperlink


# Website Rendang: Dokumentasi Proyek UTS
Website bertema **rendang khas Minangkabau**. Isinya dua bagian: halaman infografis tentang sejarah, proses, bahan, dan makna rendang, dan page toko sederhana lengkap dengan login, keranjang, dan panel admin. Dibuat dengan HTML, CSS, dan JavaScript pure, tanpa framework dan server.

## Struktur Folder

```
UTS/
├── index.html        Halaman utama (edukasi rendang)
├── toko.html         Katalog toko
├── cart.html         Keranjang belanja
├── login.html        Halaman masuk
├── register.html     Halaman daftar
├── acc.html          Halaman akun pengguna
├── admin.html        Panel kelola produk (khusus admin)
├── store.html        Halaman toko versi awal (tidak ditautkan dari menu)
├── CSS/
│   ├── style.css         Gaya utama dan seluruh tampilan halaman edukasi
│   ├── pages.css         Gaya halaman login, register, keranjang, admin
│   └── annoyingStyle.css Gaya tombol, peringatan login, dan tabel admin
├── JS/
│   ├── db.js             Data produk dan pengguna awal (pengganti database)
│   ├── auth.js           Daftar, login, logout, dan status pengguna
│   ├── cart.js           Logika data keranjang
│   ├── cart-page.js      Tampilan dan aksi di halaman keranjang
│   ├── menu.js           Daftar produk, pencarian, dan tombol keranjang
│   ├── navigation.js     Navigasi menempel dan animasi scroll
│   └── admin.js          Tambah, edit, dan hapus produk
└── Photos/               Foto rendang, rempah, dan bahan
```

## Cara Menjalankan

1. click link https://vinandius.github.io/Front-End-Kel10/
2. tekan pilihan `UTS`.
3. Untuk mencoba toko, klik menu **Toko**.

Akun admin untuk pengujian: 
email : `admin@rendang.com`
password : `admin123`. 
Akun pembeli dibuat lewat halaman **Daftar**.

## Cara Kerja
**Penyimpanan data.** Karena tidak ada backend, semua data disimpan di `localStorage` browser:

| Kunci | Isi |
|---|---|
| `products` | Daftar produk (id, nama, harga, gambar). Diisi dari `db.js` saat pertama dibuka |
| `users` | Daftar akun, berisi akun admin bawaan dan akun yang didaftarkan |
| `currentUser` | Akun yang sedang login |
| `cart_<email>` | Isi keranjang milik tiap pengguna |

**Alur pengguna.**

```
Index (index.html) ──► Toko (toko.html) ──► Login / Daftar
                                │                    │
                                ▼                    ▼
                       + Keranjang ───────► Keranjang (cart.html) ──► Checkout
                                                     
Admin ──► Akun (acc.html) ──► Kelola produk (admin.html)
```

## Fitur yang Diimplementasikan

### Infografis (`index.html`)
- Konten dibagi delapan bab : Asal-usul, Mengenal Rendang, Proses Masak, Bahan, Makna, Karakter, Jenis, dan Penutup.
- Navigasi yang `sticky` saat halaman di-scroll, penanda menu bab yang sedang dibaca (`IntersectionObserver`).
- Animasi muncul perlahan (fade-in) untuk setiap elemen saat di layar.
- Ilustrasi bahan (cabai, jahe, lengkuas, santan, daun) dalam lingkaran yang bergerak seperti gelembung.
- Daftar jenis rendang dengan kolom **pencarian** yang menyaring hasil saat mengetik.

### Toko (`toko.html`)
- Katalog produk dengan foto dan harga dalam format rupiah.
- search bar produk.
- Tombol **+ Keranjang** dengan notifikasi yang close dalam 5 detik dan bisa close manual.

### Akun (`login.html`, `register.html`, `acc.html`)
- Daftar dengan validasi password minimal 6 karakter dan pengecekan email yang sudah terdaftar.
- Login dengan warning jika email atau password salah.
- Menu **Login** berubah menjadi **Akun** setelah masuk.
- Page akun menampilkan nama, email, dan peran, logout.

### Keranjang (`cart.html`)
- Keranjang terpisah untuk setiap akun.
- Tombol `+` dan `-` untuk jumlah (minimal 1) dan tombol hapus.
- Total harga dihitung otomatis.
- Checkout menampilkan ringkasan total, lalu mengosongkan keranjang.

### Panel Admin (`admin.html`)
- Hanya bisa diakses akun admin. Akun lain dialihkan ke halaman login.
- Tabel produk berisi foto, nama, harga, dan tombol aksi.
- Form tambah dan edit produk, dengan validasi harga lebih dari 0.
- Unggah foto produk, yang otomatis dikecilkan (maksimal 600 px) agar muat di `localStorage`.
- Konfirmasi sebelum menyimpan atau menghapus, dengan peringatan jika harga berubah drastis (kurang dari setengah atau lebih dari dua kali lipat).

## Desain

| Aspek | Keterangan |
|---|---|
| Tema | Hangat dan tradisional, bergaya editorial dengan bab bernomor |
| Warna | Cokelat tua `#35170D`, cokelat `#642B16`, merah bata `#A63D27`, emas `#B08A4A`, hijau `#52724D`, krem `#F5EFE4` |
| Font | Playfair Display (judul) dan Poppins (isi) dari Google Fonts |
| Responsif | Tata letak menyesuaikan lebar layar, termasuk posisi notifikasi di desktop dan perangkat kecil |
