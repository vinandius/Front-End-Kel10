/* Skrip untuk Cart Page
   Berupa Logika untuk isi keranjang */


function cartKey() {
  const user = getCurrentUser();
  return user ? "cart_" + user.email : null;
}

function getCart() {
  const key = cartKey();
  return key ? (JSON.parse(localStorage.getItem(key)) || []) : [];
}

function saveCart(cart) {
  const key = cartKey();
  if (key) localStorage.setItem(key, JSON.stringify(cart));
}

function addToCart(id) {
  if (!getCurrentUser()) {
    tampilkanPeringatanLogin();
    return false;
  }
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  saveCart(cart);
  return true;
}