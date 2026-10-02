/* Skrip untuk Menu Page
   Berupa Logika untuk menampilkan daftar produk, pencarian produk,
   dan menangani klik */

const container = document.getElementById("renlistcont");

function renderProducts(keyword = "") {
  const list = getProducts().filter(p =>
    p.name.toLowerCase().includes(keyword.toLowerCase())
  );

  if (list.length === 0) {
    container.innerHTML = "<p>Rendang tidak ditemukan.</p>";
    return;
  }

  container.innerHTML = list.map(p => `
    <div class="renlist">
      <img src="${p.img}" alt="${p.name}" ${IMG_FALLBACK_ATTR}>
      <div>
        <p>${p.name}</p>
        <p>${formatRupiah(p.price)}</p>
        <button class="btn-add" data-id="${p.id}">+ Keranjang</button>
      </div>
    </div>
  `).join("");
}

// Mekanisme Pencarian Produk
document.getElementById("searchProduct").addEventListener("input", e => {
  renderProducts(e.target.value);
});

// Mekanisme Penambahan Produk ke Keranjang
container.addEventListener("click", e => {
  if (e.target.classList.contains("btn-add")) {
    addToCart(Number(e.target.dataset.id));
    alert("Ditambahkan ke keranjang!");
  }
});

renderProducts();