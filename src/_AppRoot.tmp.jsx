/* ============================================================
   APP ROOT
   ============================================================ */
export default function DrinkitApp() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [screen, setScreen] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedShop, setSelectedShop] = useState(coffeeShops[0]);
  const [showShopPicker, setShowShopPicker] = useState(false);

  const [userPrefs, setUserPrefs] = useState({
    5: { milkIdx: 1, volume: 400 },
    14: { milkIdx: 0, volume: 300 },
  });

  const navigate = (t, d) => {
    if (t === "product" && d) { setSelectedProduct(d); setScreen("product"); }
    else setScreen(t);
  };

  const addToCart = (item) => {
    setCart(p => [...p, { ...item, qty: 1 }]);
    setUserPrefs(p => ({ ...p, [item.id]: { milkIdx: item.milkIdx || 0, volume: item.volume || 400 } }));
    setScreen("cart");
  };

  const repeatOrder = (order) => {
    setCart(p => [...p, ...order.items.map(i => ({ ...i, qty: 1, totalPrice: order.total / order.items.length }))]);
    setScreen("cart");
  };

  /* Shell style — shared across all full-screen layouts */
  const shellStyle = {
    width: "100%", maxWidth: 390, margin: "0 auto",
    background: WHITE, borderRadius: 28,
    border: `0.5px solid ${GRAY_200}`,
    overflow: "hidden",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
  };

  const statusBar = (bg = WHITE) => (
    <div style={{ height: 50, background: bg, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
      <span style={{ fontSize: 15, fontWeight: 600, color: GRAY_900 }}>12:36</span>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <span style={{ fontSize: 12, color: GRAY_900 }}>4G</span>
        <div style={{ width: 25, height: 12, borderRadius: 3, border: `1px solid ${GRAY_900}`, padding: 1 }}>
          <div style={{ width: "65%", height: "100%", background: GRAY_900, borderRadius: 1 }} />
        </div>
      </div>
    </div>
  );

  if (showOnboarding) return (
    <div style={{ ...shellStyle, height: 760 }}>
      <OnboardingScreen onComplete={() => setShowOnboarding(false)} />
    </div>
  );

  if (showShopPicker) return (
    <div style={shellStyle}>
      {statusBar()}
      <div style={{ height: 660, overflowY: "auto" }}>
        <CoffeeShopPicker onSelect={c => { setSelectedShop(c); setShowShopPicker(false); }} onClose={() => setShowShopPicker(false)} />
      </div>
    </div>
  );

  const activeTab = screen === "product" ? "home" : screen;

  return (
    <div style={{ ...shellStyle, position: "relative" }}>
      {statusBar(screen === "product" ? (selectedProduct?.heroColor || "#D8C8B0") : WHITE)}

      <div style={{ height: 660, overflowY: "auto", overflowX: "hidden" }}>
        {screen === "home" && <HomeScreen onNavigate={navigate} onAddToCart={addToCart} onRepeatOrder={repeatOrder} selectedShop={selectedShop} onChangeShop={() => setShowShopPicker(true)} />}
        {screen === "product" && selectedProduct && <ProductScreen product={selectedProduct} onBack={() => setScreen("home")} onAddToCart={addToCart} userPrefs={userPrefs} />}
        {screen === "cart" && <CartScreen cart={cart} onRemove={i => setCart(p => p.filter((_, j) => j !== i))} onUpdateQty={(i, q) => setCart(p => p.map((it, j) => j === i ? { ...it, qty: q } : it))} onNavigate={navigate} selectedShop={selectedShop} onChangeShop={() => setShowShopPicker(true)} />}
        {screen === "coffeepass" && (
          <div style={{ padding: "60px 16px", textAlign: "center" }}>
            <div style={{ fontSize: 56, marginBottom: 12 }}>☕</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: GRAY_900 }}>Кофепасс</div>
            <div style={{ fontSize: 14, color: GRAY_600, marginTop: 6, lineHeight: 1.5 }}>Подписка на любимые напитки по выгодной цене</div>
            <button style={{ marginTop: 20, padding: "14px 32px", background: BRAND, color: WHITE, border: "none", borderRadius: 30, fontSize: 15, fontWeight: 600 }}>Подписка — 4 990 ₸/мес</button>
          </div>
        )}
        {screen === "profile" && (
          <div style={{ padding: "40px 16px", textAlign: "center" }}>
            <WhaleLogo size={56} />
            <div style={{ fontSize: 20, fontWeight: 700, color: GRAY_900, marginTop: 12 }}>Айдар</div>
            <div style={{ fontSize: 14, color: GRAY_600, marginTop: 4 }}>+7 (707) 456-78-90</div>
            <div style={{ background: BRAND_LIGHT, borderRadius: 16, padding: "14px 16px", marginTop: 20, textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: BRAND_DARK }}>🎁 До бесплатного кофе</span>
                <span style={{ fontSize: 13, color: BRAND, fontWeight: 700 }}>7/10</span>
              </div>
              <div style={{ height: 6, background: WHITE, borderRadius: 3, overflow: "hidden" }}>
                <div style={{ width: "70%", height: "100%", background: BRAND, borderRadius: 3 }} />
              </div>
            </div>
            <div style={{ marginTop: 24, textAlign: "left" }}>
              {["Мои заказы", "Избранные кофейни", "Кофепасс", "Настройки", "Поддержка"].map(it => (
                <div key={it} style={{ padding: "14px 0", borderBottom: `0.5px solid ${GRAY_100}`, fontSize: 15, color: GRAY_900, cursor: "pointer", display: "flex", justifyContent: "space-between" }}>{it}<span style={{ color: GRAY_400 }}>›</span></div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Tab Bar */}
      <div style={{ display: "flex", borderTop: `0.5px solid ${GRAY_200}`, background: WHITE, paddingBottom: 4 }}>
        {[{ k: "home", l: "меню", i: "▦" }, { k: "cart", l: "корзина", i: "🛒" }, { k: "coffeepass", l: "кофепасс", i: "💳" }, { k: "profile", l: "профиль", i: "👤" }].map(t => (
          <button key={t.k} onClick={() => setScreen(t.k)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, border: "none", background: "none", padding: "8px 0 4px", color: activeTab === t.k ? BRAND : GRAY_400, position: "relative" }}>
            <span style={{ fontSize: 20 }}>{t.i}</span>
            <span style={{ fontSize: 10, fontWeight: 500 }}>{t.l}</span>
            {t.k === "cart" && cart.length > 0 && <div style={{ position: "absolute", top: 2, right: "calc(50% - 16px)", width: 16, height: 16, borderRadius: "50%", background: RED, color: WHITE, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{cart.length}</div>}
          </button>
        ))}
      </div>
    </div>
  );
}
