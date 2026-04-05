/* ============================================================
   PRODUCT SCREEN
   ============================================================ */
function ProductScreen({ product, onBack, onAddToCart, userPrefs }) {
  const savedPref = userPrefs[product.id];
  const [activeCustom, setActiveCustom] = useState(null);
  const [selectedMilk, setSelectedMilk] = useState(savedPref?.milkIdx ?? 0);
  const [volume, setVolume] = useState(savedPref?.volume ?? 400);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [usedPreset, setUsedPreset] = useState(false);

  const milkExtra = milkOptions[selectedMilk]?.price || 0;
  const extrasTotal = selectedExtras.reduce((s, e) => s + e.price, 0);
  const totalPrice = product.price + milkExtra + extrasTotal;

  const getItems = () => {
    if (activeCustom === "milk") return milkOptions;
    if (activeCustom === "toppings") return toppingOptions;
    if (activeCustom === "syrup") return syrupOptions;
    if (activeCustom === "foams") return foamOptions;
    return [];
  };

  const applyPreset = () => {
    if (savedPref) {
      setSelectedMilk(savedPref.milkIdx);
      setVolume(savedPref.volume);
      setUsedPreset(true);
    }
  };

  return (
    <div style={{ background: product.heroColor || "#D8C8B0", minHeight: "100%" }}>
      <div style={{ padding: "6px 16px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ flex: 1, fontSize: 15, fontWeight: 500, color: GRAY_900, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", paddingRight: 8 }}>{product.name}</div>
        <button onClick={onBack} style={{ width: 32, height: 32, borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.6)", fontSize: 15, color: GRAY_900, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 16px 4px" }}>
        {[{ v: product.cal, l: "энергия", u: "ккал" }, { v: product.protein, l: "белки", u: "г" }, { v: product.fat, l: "жиры", u: "г" }, { v: product.carb, l: "углеводы", u: "г" }].map(n => (
          <div key={n.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: GRAY_900 }}>{n.v} {n.u}</div>
            <div style={{ fontSize: 10, color: GRAY_600, marginTop: 1 }}>{n.l}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", padding: "12px 0 16px" }}>
        <div style={{ fontSize: 90 }}>{product.img}</div>
      </div>

      {savedPref && !usedPreset && (
        <div onClick={applyPreset} style={{ margin: "0 12px 10px", padding: "12px 16px", borderRadius: 16, background: "rgba(255,255,255,0.85)", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, border: `1.5px solid ${GREEN}40`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <span style={{ fontSize: 20 }}>⚡</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: GRAY_900 }}>Как обычно</div>
            <div style={{ fontSize: 12, color: GRAY_600 }}>{milkOptions[savedPref.milkIdx].name}, {savedPref.volume} мл</div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: GREEN }}>1 тап ✓</div>
        </div>
      )}
      {usedPreset && (
        <div style={{ margin: "0 12px 10px", padding: "10px 16px", borderRadius: 14, background: `${GREEN}18`, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: GREEN, fontSize: 16 }}>✓</span>
          <span style={{ fontSize: 13, color: GREEN, fontWeight: 600 }}>Ваши настройки применены!</span>
        </div>
      )}

      {activeCustom === null ? (
        <div style={{ padding: "0 12px 8px" }}>
          <div style={{ display: "flex", gap: 6, overflowX: "auto" }}>
            {customCategories.map(c => (
              <div key={c.key} onClick={() => setActiveCustom(c.key)} style={{ minWidth: 72, padding: "10px 6px 8px", borderRadius: 14, textAlign: "center", cursor: "pointer", flexShrink: 0, background: "rgba(140,110,80,0.4)" }}>
                <div style={{ fontSize: 18, marginBottom: 3 }}>{c.icon}</div>
                <div style={{ fontSize: 10, color: WHITE, fontWeight: 500 }}>+ {c.label}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 8, fontSize: 11, color: "rgba(255,255,255,0.7)" }}>👥 80% гостей берут с молоком</div>
        </div>
      ) : (
        <div style={{ padding: "0 12px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 10 }}>
            {getItems().map((item, i) => {
              const isMilk = activeCustom === "milk";
              const isSelected = isMilk ? i === selectedMilk : selectedExtras.some(e => e.name === item.name);
              return (
                <div key={item.name} onClick={() => {
                  if (isMilk) setSelectedMilk(i);
                  else {
                    if (isSelected) setSelectedExtras(selectedExtras.filter(e => e.name !== item.name));
                    else setSelectedExtras([...selectedExtras, item]);
                  }
                }} style={{ background: isSelected ? "rgba(255,255,255,0.92)" : "rgba(140,110,80,0.5)", borderRadius: 14, padding: "12px 6px 8px", textAlign: "center", cursor: "pointer" }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{activeCustom === "milk" ? "🥛" : activeCustom === "syrup" ? "🍯" : "✨"}</div>
                  <div style={{ fontSize: 11, fontWeight: 500, color: isSelected ? GRAY_900 : WHITE, lineHeight: 1.2 }}>{item.name}</div>
                  <div style={{ fontSize: 10, color: isSelected ? GRAY_600 : "rgba(255,255,255,0.7)", marginTop: 2 }}>{item.price === 0 ? "0 ₸" : `+${item.price} ₸`}</div>
                  <div style={{ marginTop: 4, fontSize: 13, color: isSelected ? GREEN : "rgba(255,255,255,0.6)" }}>{isSelected ? "✓" : "+"}</div>
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 6 }}>
            {customCategories.map(c => (
              <div key={c.key} onClick={() => setActiveCustom(c.key)} style={{ minWidth: 68, padding: "8px 6px 6px", borderRadius: 12, textAlign: "center", cursor: "pointer", flexShrink: 0, background: activeCustom === c.key ? "rgba(140,110,80,0.7)" : "rgba(140,110,80,0.35)", border: activeCustom === c.key ? "1.5px solid rgba(255,255,255,0.3)" : "none" }}>
                <div style={{ fontSize: 16, marginBottom: 2 }}>{c.icon}</div>
                <div style={{ fontSize: 9, color: WHITE, fontWeight: 500 }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: 10, padding: "8px 12px 12px" }}>
        <button onClick={() => setVolume(volume === 400 ? 300 : 400)} style={{ padding: "14px 18px", borderRadius: 30, border: "none", fontSize: 14, fontWeight: 600, background: "rgba(140,110,80,0.5)", color: WHITE }}>{volume} мл</button>
        <button onClick={() => onAddToCart({ ...product, volume, milkIdx: selectedMilk, milk: milkOptions[selectedMilk], extras: selectedExtras, totalPrice })} style={{ flex: 1, padding: "14px 0", borderRadius: 30, border: "none", fontSize: 16, fontWeight: 600, background: BRAND, color: WHITE }}>
          + {totalPrice.toLocaleString()} ₸
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   CART SCREEN
   ============================================================ */
function CartScreen({ cart, onRemove, onUpdateQty, onNavigate, selectedShop, onChangeShop }) {
  const total = cart.reduce((s, it) => (it.totalPrice || it.price) * (it.qty || 1) + s, 0);

  if (!cart.length) return (
    <div style={{ padding: "80px 16px", textAlign: "center" }}>
      <div style={{ fontSize: 56, marginBottom: 12 }}>🛒</div>
      <div style={{ fontSize: 18, fontWeight: 600, color: GRAY_900 }}>Корзина пуста</div>
      <div style={{ fontSize: 14, color: GRAY_600, margin: "6px 0 24px" }}>Добавьте напиток из меню</div>
      <button onClick={() => onNavigate("home")} style={{ padding: "14px 36px", background: BRAND, color: WHITE, border: "none", borderRadius: 30, fontSize: 15, fontWeight: 600 }}>Перейти в меню</button>
    </div>
  );

  return (
    <div style={{ padding: "16px" }}>
      <div style={{ fontSize: 20, fontWeight: 700, color: GRAY_900, marginBottom: 14 }}>Корзина</div>

      <div style={{ padding: "12px 14px", background: BRAND_LIGHT, borderRadius: 16, marginBottom: 14, border: `1.5px solid ${BRAND}25` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <WhaleLogo size={28} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: GRAY_900 }}>{selectedShop.name}</div>
            <div style={{ fontSize: 12, color: GRAY_600 }}>~{selectedShop.time} приготовление</div>
          </div>
          <button onClick={onChangeShop} style={{ padding: "6px 12px", borderRadius: 10, border: `1px solid ${BRAND}`, background: "none", color: BRAND, fontSize: 12, fontWeight: 600 }}>Изменить</button>
        </div>
        <div style={{ marginTop: 8, padding: "8px 10px", background: "rgba(255,255,255,0.7)", borderRadius: 10, display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: GREEN }}>✓</span>
          <span style={{ fontSize: 12, color: GRAY_600 }}>Заказ будет приготовлен в этой кофейне</span>
        </div>
      </div>

      {cart.map((item, idx) => (
        <div key={idx} style={{ display: "flex", gap: 12, padding: "12px 0", borderBottom: idx < cart.length - 1 ? `0.5px solid ${GRAY_100}` : "none" }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: item.heroColor || GRAY_50, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>{item.img}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: GRAY_900, lineHeight: 1.3 }}>{item.name}</div>
            <div style={{ fontSize: 11, color: GRAY_600, marginTop: 2 }}>{item.volume} мл · {item.milk?.name || "Коровье"}</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: GRAY_900 }}>{((item.totalPrice || item.price) * (item.qty || 1)).toLocaleString()} ₸</span>
              <div style={{ display: "flex", alignItems: "center", border: `1px solid ${GRAY_200}`, borderRadius: 10, overflow: "hidden" }}>
                <button onClick={() => (item.qty || 1) <= 1 ? onRemove(idx) : onUpdateQty(idx, (item.qty || 1) - 1)} style={{ width: 30, height: 30, border: "none", background: WHITE, fontSize: 15, color: (item.qty || 1) <= 1 ? RED : GRAY_900 }}>{(item.qty || 1) <= 1 ? "✕" : "−"}</button>
                <span style={{ width: 26, textAlign: "center", fontSize: 14, fontWeight: 600 }}>{item.qty || 1}</span>
                <button onClick={() => onUpdateQty(idx, (item.qty || 1) + 1)} style={{ width: 30, height: 30, border: "none", background: WHITE, fontSize: 15 }}>+</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div style={{ marginTop: 18, padding: "16px", background: GRAY_50, borderRadius: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: GRAY_900 }}>Итого</span>
          <span style={{ fontSize: 16, fontWeight: 700, color: GRAY_900 }}>{total.toLocaleString()} ₸</span>
        </div>
        <button style={{ width: "100%", padding: "16px 0", background: BRAND, color: WHITE, border: "none", borderRadius: 30, fontSize: 17, fontWeight: 600 }}>
          Оплатить {total.toLocaleString()} ₸
        </button>
      </div>
    </div>
  );
}
