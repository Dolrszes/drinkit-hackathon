/* ============================================================
   HOME SCREEN — All UX improvements integrated
   ============================================================ */
function HomeScreen({ onNavigate, onAddToCart, onRepeatOrder, selectedShop, onChangeShop }) {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(
    () => filterDrinks(activeTab, searchQuery),
    [activeTab, searchQuery]
  );

  const pillStyle = (isActive) => ({
    padding: "8px 18px",
    border: "none",
    borderRadius: 50,
    fontSize: 14,
    fontWeight: isActive ? 600 : 400,
    color: isActive ? WHITE : GRAY_600,
    background: isActive ? BRAND : GRAY_100,
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    transition: "all 0.25s ease",
  });

  return (
    <div>
      {/* Header */}
      <div style={{ padding: "8px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div onClick={onChangeShop} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
          <WhaleLogo size={36} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: GRAY_900 }}>{selectedShop.name}</div>
            <div style={{ fontSize: 12, color: GRAY_600 }}>до 23:00</div>
          </div>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${GRAY_200}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 16 }}>👤</span>
        </div>
      </div>

      {/* PERSISTENT SEARCH — always visible */}
      <div style={{ padding: "4px 16px 10px" }}>
        <div style={{ position: "relative" }}>
          <input type="text" placeholder="Найти напиток или блюдо..."
            value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
            style={{ width: "100%", boxSizing: "border-box", padding: "12px 40px 12px 42px", border: `1.5px solid ${searchQuery ? BRAND : GRAY_200}`, borderRadius: 16, fontSize: 15, background: GRAY_50, color: GRAY_900, transition: "border-color 0.2s" }}
          />
          <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 17, opacity: 0.5 }}>🔍</span>
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: GRAY_200, border: "none", width: 22, height: 22, borderRadius: "50%", fontSize: 11, color: GRAY_600, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
          )}
        </div>
        {searchQuery && <div style={{ fontSize: 12, color: GRAY_600, marginTop: 6, paddingLeft: 4 }}>{filtered.length} результатов</div>}
      </div>

      {!searchQuery && (
        <>
          {/* ONE-TAP REORDER — at the very top */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ padding: "0 16px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: GRAY_900 }}>Повторить заказ ⚡</span>
            </div>
            <div style={{ display: "flex", gap: 10, overflowX: "auto", padding: "0 16px 6px" }}>
              {recentOrders.map((order, i) => (
                <div key={order.id} style={{ minWidth: 200, background: WHITE, border: `1px solid ${GRAY_100}`, borderRadius: 18, padding: "14px 14px 12px", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", animation: `slideInRight 0.3s ease-out ${i * 0.08}s both` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: order.items[0].heroColor || GRAY_50, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{order.items[0].img}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: GRAY_900, lineHeight: 1.3 }}>{shortName(order.items)}</div>
                      <div style={{ fontSize: 11, color: GRAY_400 }}>{order.date}</div>
                    </div>
                  </div>
                  {order.items[0].milk && <div style={{ fontSize: 11, color: GRAY_600, marginBottom: 8 }}>{order.items[0].milk}{order.items[0].volume ? `, ${order.items[0].volume} мл` : ""}</div>}
                  <button onClick={(e) => { e.stopPropagation(); onRepeatOrder(order); }} style={{ width: "100%", padding: "9px 0", background: `linear-gradient(135deg, ${BRAND} 0%, #5B7BFF 100%)`, color: WHITE, border: "none", borderRadius: 12, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                    🛒 В корзину — {order.total.toLocaleString()} ₸
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* LOYALTY WIDGET */}
          <div style={{ margin: "0 16px 14px", background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #EDE5FF 50%, #F0E8FF 100%)`, borderRadius: 18, padding: "16px 18px", boxShadow: "0 2px 12px rgba(59,94,235,0.08)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: -10, top: -10, fontSize: 56, opacity: 0.08, transform: "rotate(15deg)" }}>☕</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: BRAND_DARK }}>🎁 До бесплатного кофе</span>
              <span style={{ fontSize: 15, color: BRAND, fontWeight: 800, background: WHITE, padding: "2px 10px", borderRadius: 20 }}>7/10</span>
            </div>
            <div style={{ height: 8, background: "rgba(255,255,255,0.85)", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ width: "70%", height: "100%", background: `linear-gradient(90deg, ${BRAND} 0%, #6B8BFF 60%, #A78BFA 100%)`, borderRadius: 4, backgroundSize: "200% 100%", animation: "shimmer 3s ease-in-out infinite" }} />
            </div>
            <div style={{ fontSize: 12, color: BRAND_DARK, marginTop: 7, opacity: 0.8, fontWeight: 500 }}>Осталось 3 чашки — подарок ждёт! 🎉</div>
          </div>

          {/* PILL TABS — horizontal scroll */}
          <div style={{ display: "flex", gap: 8, overflowX: "auto", padding: "0 16px 12px" }}>
            {mainTabs.map(t => (
              <button key={t.key} onClick={() => setActiveTab(t.key)} style={pillStyle(activeTab === t.key)}>{t.label}</button>
            ))}
          </div>
        </>
      )}

      {/* Products grid */}
      {filtered.length > 0 && (
        <div style={{ padding: "0 16px 20px" }}>
          {searchQuery && <div style={{ fontSize: 16, fontWeight: 700, color: GRAY_900, marginBottom: 10 }}>Результаты поиска</div>}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {filtered.map((d, i) => (
              <div key={d.id} onClick={() => onNavigate("product", d)} style={{ borderRadius: 18, overflow: "hidden", background: d.heroColor || GRAY_50, padding: "14px", cursor: "pointer", animation: `fadeInUp 0.3s ease-out ${i * 0.04}s both` }}>
                <div style={{ fontSize: 36, textAlign: "center", marginBottom: 6 }}>{d.img}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: GRAY_900, lineHeight: 1.3 }}>{d.name}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: GRAY_900 }}>{d.price.toLocaleString()} ₸</span>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>+</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filtered.length === 0 && searchQuery && (
        <div style={{ padding: "60px 16px", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: GRAY_900 }}>Ничего не найдено</div>
          <div style={{ fontSize: 14, color: GRAY_600, marginTop: 4 }}>Попробуйте другой запрос</div>
        </div>
      )}
    </div>
  );
}
