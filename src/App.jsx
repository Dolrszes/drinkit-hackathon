import { useState } from "react";
import {
  BRAND, BRAND_LIGHT, BRAND_DARK, LAVENDER, WHITE, GRAY_50, GRAY_100, GRAY_200,
  GRAY_400, GRAY_600, GRAY_900, RED, GREEN, AMBER,
  BusyMeter, SmartSwapButton, LiveActivityMockup, CoffeeCupGamification,
  PerfectPair, FloatingMenu, CoffeeTinder, MenuScreen
} from "./components";

const drinks = [
  { id: 1, name: "Капучино Ягодное печенье", price: 1800, cat: "coffee_author", img: "☕", hero: true, heroColor: "#E8D4C8", cal: 320, protein: 6.2, fat: 12.1, carb: 38.5 },
  { id: 2, name: "Раф Сливочное печенье", price: 2100, cat: "coffee_author", img: "☕", heroColor: "#F0D8E0", cal: 380, protein: 7.1, fat: 15.3, carb: 42.0 },
  { id: 3, name: "Баббл-ти Жасминовое печенье", price: 2500, cat: "tea_author", img: "🧋", hero: true, heroColor: "#E0D0E8", cal: 290, protein: 4.5, fat: 8.2, carb: 45.0 },
  { id: 4, name: "Айс Матча Рассвет", price: 2500, cat: "matcha", img: "🍵", hero: true, heroColor: "#D0E0D8", cal: 250, protein: 5.0, fat: 9.0, carb: 35.0 },
  { id: 5, name: "Айс латте", price: 1600, cat: "ice_milk", img: "🧊", hero: true, heroColor: "#E8D0B8", cal: 180, protein: 5.5, fat: 6.8, carb: 22.0 },
  { id: 6, name: "Айс латте с солёной карамелью", price: 2400, cat: "ice_milk", img: "🧊", heroColor: "#D8C0A0", cal: 420, protein: 8.8, fat: 18.4, carb: 52.4, outOfStock: true },
  { id: 7, name: "Айс мокко", price: 1700, cat: "ice_milk", img: "🧊", heroColor: "#C8B0A0", cal: 350, protein: 7.2, fat: 14.0, carb: 40.0 },
  { id: 8, name: "Айс мокко малиновый", price: 2050, cat: "ice_milk", img: "🧊", heroColor: "#E0C0D0", cal: 390, protein: 7.0, fat: 13.5, carb: 48.0 },
  { id: 9, name: "Чизкейк Ежевичный", price: 1700, cat: "food", img: "🍰", heroColor: "#E0C8D8", cal: 420, protein: 8.0, fat: 22.0, carb: 45.0 },
  { id: 10, name: "Багет с моцареллой", price: 1400, cat: "food", img: "🥖", cal: 350, protein: 15.0, fat: 12.0, carb: 38.0 },
  { id: 11, name: "Фокачча с индейкой", price: 1800, cat: "food", img: "🥪", cal: 380, protein: 22.0, fat: 14.0, carb: 35.0 },
  { id: 12, name: "Трубочка со сгущёнкой", price: 700, cat: "food", img: "🥐", cal: 280, protein: 4.0, fat: 14.0, carb: 32.0 },
  { id: 13, name: "Латте", price: 1500, cat: "coffee_milk", img: "☕", heroColor: "#E8D8C0", cal: 180, protein: 6.0, fat: 7.0, carb: 20.0 },
  { id: 14, name: "Капучино", price: 1400, cat: "coffee_milk", img: "☕", heroColor: "#D8C8B8", cal: 150, protein: 5.5, fat: 6.0, carb: 18.0 },
  { id: 15, name: "Раф классический", price: 1900, cat: "coffee_milk", img: "☕", heroColor: "#E0D0C0", cal: 320, protein: 7.0, fat: 16.0, carb: 35.0 },
];

const mainTabs = [
  { key: "for_you", label: "для тебя", icon: "✨" },
  { key: "seasonal", label: "весна 🌸", icon: "🌸" },
  { key: "coffee", label: "кофе", icon: "☕" },
  { key: "not_coffee", label: "не кофе", icon: "🍵" },
  { key: "food", label: "еда", icon: "🍰" },
];

const coffeeShops = [
  { id: 1, name: "Expo, Астана", dist: "0.3 км", time: "3 мин", fav: true },
  { id: 2, name: "Хан Шатыр", dist: "1.2 км", time: "8 мин", fav: true },
  { id: 3, name: "Байтерек, Астана", dist: "2.1 км", time: "12 мин", fav: false },
  { id: 4, name: "Мега Силкуэй", dist: "4.5 км", time: "18 мин", fav: false },
];

const recentOrders = [
  { id: 201, items: [{ ...drinks[4], milk: "Овсяное", volume: 400 }], date: "Кеше, 9:15", total: 1950 },
  { id: 202, items: [{ ...drinks[13], milk: "Коровье", volume: 300 }, drinks[11]], date: "2 күн бұрын", total: 2100 },
  { id: 203, items: [{ ...drinks[0], milk: "Коровье", volume: 400 }], date: "4 күн бұрын", total: 1800 },
];

const milkOptions = [
  { name: "Коровье", price: 0 },
  { name: "Овсяное", price: 350 },
  { name: "Миндальное", price: 550 },
  { name: "Банановое", price: 550 },
  { name: "Безлактозное", price: 500 },
  { name: "Сливки", price: 550 },
];
const toppingOptions = [
  { name: "Черника-убе", price: 50 },
  { name: "Малиновая", price: 50 },
  { name: "Карамель", price: 50 },
  { name: "Маршмеллоу", price: 100 },
  { name: "Какао", price: 0 },
];
const syrupOptions = [
  { name: "Ванильный", price: 250 },
  { name: "Кокосовый", price: 250 },
  { name: "Каштановый", price: 250 },
  { name: "Малиновый", price: 250 },
];
const foamOptions = [
  { name: "Ежевика-таро", price: 500 },
  { name: "Сырная пенка", price: 500 },
];

const customCategories = [
  { key: "milk", label: "Молоко", icon: "🥛" },
  { key: "toppings", label: "Посыпки", icon: "✨" },
  { key: "foams", label: "Пенки", icon: "☁️" },
  { key: "syrup", label: "Сиропы", icon: "🍯" },
  { key: "espresso", label: "Эспрессо", icon: "☕" },
  { key: "ice", label: "Лёд", icon: "🧊" },
  { key: "cup", label: "Стакан", icon: "🥤" },
];

function WhaleLogo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill={BRAND} />
      <path d="M12 22c0-5 4-9 8-9s8 4 8 9c0 3-2 5-4 6l-1-2c1-1 2-2 2-4 0-3-2-6-5-6s-5 3-5 6c0 2 1 3 2 4l-1 2c-2-1-4-3-4-6z" fill="white" />
      <circle cx="16" cy="20" r="1.5" fill="white" />
      <path d="M28 15c1-2 3-3 3-3s-1 3-2 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ============================================================
   SOLUTION 1: ONBOARDING SCREEN (Problem #6)
   New users see value proposition before diving into menu
   ============================================================ */
function OnboardingScreen({ onComplete }) {
  const [step, setStep] = useState(0);
  const steps = [
    { icon: "☕", title: "Тапсырыс бер жолда", sub: "Жолда кофеңді тапсырыс бер — бірнеше минутта дайын болады", color: "#E8D4C8" },
    { icon: "⚙️", title: "Өзіңе сай баптау", sub: "Сүт, сироп, посыпка — сусынды өзің қалағандай жаса", color: "#D0E0D8" },
    { icon: "🎁", title: "Бонустар жина", sub: "Әр 10-шы кофе — сыйлық! Прогресс қолданбада көрінеді", color: "#E0D0E8" },
  ];
  const s = steps[step];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center", background: `linear-gradient(180deg, ${s.color} 0%, ${WHITE} 100%)` }}>
      <div style={{ fontSize: 80, marginBottom: 20 }}>{s.icon}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: GRAY_900, marginBottom: 10, lineHeight: 1.3 }}>{s.title}</div>
      <div style={{ fontSize: 15, color: GRAY_600, lineHeight: 1.5, maxWidth: 280 }}>{s.sub}</div>
      <div style={{ display: "flex", gap: 6, margin: "30px 0" }}>
        {steps.map((_, i) => (
          <div key={i} style={{ width: i === step ? 24 : 8, height: 8, borderRadius: 4, background: i === step ? BRAND : GRAY_200, transition: "all 0.3s" }} />
        ))}
      </div>
      {step < 2 ? (
        <button onClick={() => setStep(step + 1)} style={{ padding: "14px 48px", background: BRAND, color: WHITE, border: "none", borderRadius: 30, fontSize: 16, fontWeight: 600, cursor: "pointer" }}>Келесі</button>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
          <button onClick={onComplete} style={{ padding: "14px 0", background: BRAND, color: WHITE, border: "none", borderRadius: 30, fontSize: 16, fontWeight: 600, cursor: "pointer", width: "100%" }}>Бастау — бірінші кофе -50% 🎉</button>
          <button onClick={onComplete} style={{ padding: "12px 0", background: "none", color: GRAY_600, border: "none", fontSize: 14, cursor: "pointer" }}>Кейінірек</button>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   SOLUTION 3: COFFEESHOP PICKER (Problem #3)
   Favorites, search, confirmation before ordering
   ============================================================ */
function CoffeeShopPicker({ onSelect, onClose }) {
  const [search, setSearch] = useState("");
  const filtered = coffeeShops.filter(c => !search || c.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div style={{ padding: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <span style={{ fontSize: 18, fontWeight: 600, color: GRAY_900 }}>Кофейня таңдау</span>
        <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 20, color: GRAY_600, cursor: "pointer" }}>✕</button>
      </div>
      {/* SOLUTION: Search by name/metro */}
      <div style={{ position: "relative", marginBottom: 14 }}>
        <input type="text" placeholder="Іздеу: атауы, мекенжай..."
          value={search} onChange={e => setSearch(e.target.value)}
          style={{ width: "100%", boxSizing: "border-box", padding: "11px 12px 11px 38px", border: `1px solid ${GRAY_200}`, borderRadius: 14, fontSize: 14, background: GRAY_50, outline: "none", color: GRAY_900 }}
        />
        <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 16 }}>🔍</span>
      </div>
      {/* SOLUTION: Favorites section */}
      {filtered.some(c => c.fav) && <div style={{ fontSize: 13, fontWeight: 600, color: BRAND, marginBottom: 8 }}>⭐ Таңдаулы</div>}
      {filtered.filter(c => c.fav).map(c => (
        <div key={c.id} onClick={() => onSelect(c)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: BRAND_LIGHT, borderRadius: 14, marginBottom: 8, cursor: "pointer", border: `1.5px solid ${BRAND}30` }}>
          <WhaleLogo size={32} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: GRAY_900 }}>{c.name}</div>
            <div style={{ fontSize: 12, color: GRAY_600 }}>{c.dist} · ~{c.time}</div>
          </div>
          <span style={{ color: AMBER }}>⭐</span>
        </div>
      ))}
      {filtered.some(c => !c.fav) && <div style={{ fontSize: 13, fontWeight: 500, color: GRAY_600, margin: "8px 0" }}>Жақын маңда</div>}
      {filtered.filter(c => !c.fav).map(c => (
        <div key={c.id} onClick={() => onSelect(c)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: WHITE, border: `0.5px solid ${GRAY_200}`, borderRadius: 14, marginBottom: 8, cursor: "pointer" }}>
          <WhaleLogo size={32} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: GRAY_900 }}>{c.name}</div>
            <div style={{ fontSize: 12, color: GRAY_600 }}>{c.dist} · ~{c.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   MAIN HOME SCREEN (Refactored with MenuScreen)
   Solutions integrated: #1-10 All features
   ============================================================ */
function HomeScreen({ onNavigate, onAddToCart, onRepeatOrder, selectedShop, onChangeShop, userPrefs, ordersCount, milkPrefsTracker, onShowTinder, drinks }) {
  const [activeTab, setActiveTab] = useState("for_you");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [fabOpen, setFabOpen] = useState(false);

  const getFiltered = () => {
    if (searchQuery) return drinks.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (activeTab === "for_you") return [];
    if (activeTab === "seasonal") return drinks.filter(d => ["coffee_author", "tea_author", "matcha"].includes(d.cat));
    if (activeTab === "coffee") return drinks.filter(d => ["ice_milk", "coffee_milk"].includes(d.cat));
    if (activeTab === "food") return drinks.filter(d => d.cat === "food");
    return drinks.slice(0, 6);
  };
  const filtered = getFiltered();

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
        <div style={{ display: "flex", gap: 8 }}>
          {/* SOLUTION #1: Search button */}
          <button onClick={() => setShowSearch(!showSearch)} style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${GRAY_200}`, background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 16 }}>🔍</span>
          </button>
          <div style={{ width: 36, height: 36, borderRadius: "50%", border: `1.5px solid ${GRAY_200}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 16 }}>👤</span>
          </div>
        </div>
      </div>

      {/* SOLUTION #1: Search bar (appears on tap) */}
      {showSearch && (
        <div style={{ padding: "0 16px 10px" }}>
          <div style={{ position: "relative" }}>
            <input type="text" placeholder="Сусын немесе тағам іздеу..." autoFocus
              value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              style={{ width: "100%", boxSizing: "border-box", padding: "11px 12px 11px 38px", border: `1.5px solid ${BRAND}`, borderRadius: 14, fontSize: 14, background: WHITE, outline: "none", color: GRAY_900 }}
            />
            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 16 }}>🔍</span>
            {searchQuery && (
              <button onClick={() => { setSearchQuery(""); setShowSearch(false) }} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: 16, cursor: "pointer", color: GRAY_400 }}>✕</button>
            )}
          </div>
          {searchQuery && (
            <div style={{ fontSize: 12, color: GRAY_600, marginTop: 6 }}>{filtered.length} нәтиже табылды</div>
          )}
        </div>
      )}

      {!searchQuery && (
        <>
          {/* SOLUTION #4: Loyalty progress bar on home */}
          <div style={{ margin: "0 16px 10px", background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #F0E8FF 100%)`, borderRadius: 16, padding: "14px 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: BRAND_DARK }}>🎁 Тегін сусынға дейін</span>
              <span style={{ fontSize: 13, color: BRAND, fontWeight: 700 }}>7/10</span>
            </div>
            <div style={{ height: 6, background: "rgba(255,255,255,0.8)", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ width: "70%", height: "100%", background: `linear-gradient(90deg, ${BRAND} 0%, #6B8BFF 100%)`, borderRadius: 3, transition: "width 0.5s" }} />
            </div>
            <div style={{ fontSize: 11, color: BRAND_DARK, marginTop: 5, opacity: 0.75 }}>Тағы 3 кофе — сыйлық сізге!</div>
          </div>

          {/* SOLUTION #2: Quick reorder carousel */}
          {activeTab === "for_you" && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ padding: "0 16px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: GRAY_900 }}>Қайталау 🔄</span>
                <span style={{ fontSize: 13, color: BRAND, cursor: "pointer", fontWeight: 500 }}>Барлық тапсырыстар</span>
              </div>
              <div style={{ display: "flex", gap: 10, overflowX: "auto", padding: "0 16px 4px" }}>
                {recentOrders.map(order => (
                  <div key={order.id} style={{ minWidth: 190, background: WHITE, border: `0.5px solid ${GRAY_200}`, borderRadius: 18, padding: "12px 14px", flexShrink: 0 }}>
                    <div style={{ fontSize: 11, color: GRAY_400, marginBottom: 5 }}>{order.date}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: GRAY_900, marginBottom: 3, lineHeight: 1.3 }}>
                      {order.items.map(i => i.name.split(" ").slice(0, 2).join(" ")).join(" + ")}
                    </div>
                    <div style={{ fontSize: 11, color: GRAY_600, marginBottom: 10 }}>
                      {order.items[0].milk}, {order.items[0].volume} мл
                    </div>
                    <button onClick={() => onRepeatOrder(order)} style={{
                      width: "100%", padding: "9px 0", background: BRAND, color: WHITE, border: "none",
                      borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex",
                      alignItems: "center", justifyContent: "center", gap: 5
                    }}>
                      🔄 Қайталау — {order.total.toLocaleString()} ₸
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hero Banner */}
          <div style={{ margin: "0 16px 12px", borderRadius: 20, overflow: "hidden", height: 180, background: "linear-gradient(135deg, #E8C8D8 0%, #D0B8E0 50%, #E8DFF0 100%)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 56 }}>☕</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: GRAY_900 }}>Проснись со мной</div>
              <div style={{ fontSize: 13, color: GRAY_600, marginTop: 3 }}>подробнее</div>
            </div>
          </div>

          {/* Main Tabs */}
          <div style={{ display: "flex", gap: 0, overflowX: "auto", padding: "0 16px", marginBottom: 6 }}>
            {mainTabs.map(t => (
              <button key={t.key} onClick={() => setActiveTab(t.key)} style={{
                padding: "8px 14px", border: "none", background: "none", fontSize: 15,
                fontWeight: activeTab === t.key ? 700 : 400,
                color: activeTab === t.key ? GRAY_900 : GRAY_400,
                cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
                borderBottom: activeTab === t.key ? `2px solid ${GRAY_900}` : "2px solid transparent",
              }}>{t.label}</button>
            ))}
          </div>

          {/* SOLUTION #8: Simple quiz button */}
          <div style={{ padding: "0 16px 12px" }}>
            <button onClick={() => onShowTinder()} style={{ width: "100%", padding: "12px", background: BRAND_LIGHT, color: BRAND_DARK, border: `1.5px solid ${BRAND}30`, borderRadius: 16, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              ❓ Не таңдауды білмейсіз бе?
            </button>
          </div>

          {/* "For you" recommendations */}
          {activeTab === "for_you" && (
            <div style={{ padding: "8px 16px" }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: GRAY_900, marginBottom: 10 }}>Сізге ұнауы мүмкін ✨</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {drinks.slice(0, 4).map(d => (
                  <div key={d.id} style={{ display: "flex", flexDirection: "column", borderRadius: 18, overflow: "hidden", background: d.heroColor || LAVENDER, padding: "14px", cursor: "pointer", border: `1px solid ${GRAY_100}` }}>
                    <div onClick={() => onNavigate("product", d)} style={{ flex: 1 }}>
                      <div style={{ fontSize: 40, textAlign: "center", marginBottom: 8 }}>{d.img}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: GRAY_900, lineHeight: 1.3, marginBottom: 4 }}>{d.name}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: GRAY_900, marginBottom: 12 }}>{d.price.toLocaleString()} ₸</div>
                    </div>
                    {d.outOfStock ? (
                      <SmartSwapButton product={d} isOutOfStock={true} onSuggest={() => onNavigate("product", drinks[1])} />
                    ) : (
                      <button onClick={(e) => { e.stopPropagation(); onAddToCart(d); }} style={{ width: "100%", padding: "10px 0", background: BRAND, color: WHITE, border: "none", borderRadius: 12, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 4, cursor: "pointer" }}>
                        <span>+</span> Қосу
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* SOLUTION #2 & #3: Grid layout instead of list, Consistent product cards */}
      {filtered.length > 0 && (
        <div style={{ padding: "0 16px", paddingBottom: 16 }}>
          {searchQuery && <div style={{ fontSize: 16, fontWeight: 700, color: GRAY_900, marginBottom: 10 }}>Іздеу нәтижелері</div>}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {filtered.map((d, i) => (
              <div key={d.id} style={{ display: "flex", flexDirection: "column", borderRadius: 18, overflow: "hidden", background: d.heroColor || GRAY_50, padding: "14px", cursor: "pointer", border: `1px solid ${GRAY_100}` }}>
                <div onClick={() => onNavigate("product", d)} style={{ flex: 1 }}>
                  <div style={{ fontSize: 48, textAlign: "center", marginBottom: 8 }}>{d.img}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: GRAY_900, lineHeight: 1.3, marginBottom: 4 }}>{d.name}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: GRAY_900, marginBottom: 12 }}>{d.price.toLocaleString()} ₸</div>
                </div>
                {/* SOLUTION #7: Smart swap handling */}
                {d.outOfStock ? (
                  <SmartSwapButton product={d} isOutOfStock={true} onSuggest={() => onNavigate("product", drinks[0])} />
                ) : (
                  <button onClick={(e) => { e.stopPropagation(); onAddToCart(d); }} style={{ width: "100%", padding: "10px 0", background: BRAND, color: WHITE, border: "none", borderRadius: 12, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 4, cursor: "pointer" }}>
                    <span>+</span> Қосу
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SOLUTION #1: Floating Menu */}
      <FloatingMenu
        categories={mainTabs}
        isOpen={fabOpen}
        setIsOpen={setFabOpen}
        onJump={(key) => { setActiveTab(key); }}
      />
    </div>
  );
}

/* ============================================================
   PRODUCT SCREEN
   Solutions: #4 "As usual" button, progressive disclosure
   ============================================================ */
function ProductScreen({ product, onBack, onAddToCart, userPrefs }) {
  const savedPref = userPrefs[product.id];
  const [activeCustom, setActiveCustom] = useState(null); // SOLUTION: collapsed by default
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
      {/* Header */}
      <div style={{ padding: "6px 16px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ flex: 1, fontSize: 15, fontWeight: 500, color: GRAY_900, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", paddingRight: 8 }}>{product.name}</div>
        <button onClick={onBack} style={{ width: 32, height: 32, borderRadius: "50%", border: "none", background: "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: 15, color: GRAY_900, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
      </div>

      {/* KBJU */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 16px 4px" }}>
        {[{ v: product.cal, l: "энергия", u: "ккал" }, { v: product.protein, l: "белки", u: "г" }, { v: product.fat, l: "жиры", u: "г" }, { v: product.carb, l: "углеводы", u: "г" }].map(n => (
          <div key={n.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: GRAY_900 }}>{n.v} {n.u}</div>
            <div style={{ fontSize: 10, color: GRAY_600, marginTop: 1 }}>{n.l}</div>
          </div>
        ))}
      </div>

      {/* Image */}
      <div style={{ textAlign: "center", padding: "12px 0 16px" }}>
        <div style={{ fontSize: 90 }}>{product.img}</div>
      </div>

      {/* SOLUTION #4: "As usual" preset button */}
      {savedPref && !usedPreset && (
        <div onClick={applyPreset} style={{
          margin: "0 12px 10px", padding: "12px 16px", borderRadius: 16,
          background: "rgba(255,255,255,0.85)", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 10,
          border: `1.5px solid ${GREEN}40`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
        }}>
          <span style={{ fontSize: 20 }}>⚡</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: GRAY_900 }}>Әдеттегідей</div>
            <div style={{ fontSize: 12, color: GRAY_600 }}>{milkOptions[savedPref.milkIdx].name}, {savedPref.volume} мл</div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: GREEN }}>1 тап ✓</div>
        </div>
      )}
      {usedPreset && (
        <div style={{ margin: "0 12px 10px", padding: "10px 16px", borderRadius: 14, background: `${GREEN}18`, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: GREEN, fontSize: 16 }}>✓</span>
          <span style={{ fontSize: 13, color: GREEN, fontWeight: 600 }}>Сіздің баптауларыңыз қолданылды!</span>
        </div>
      )}

      {/* SOLUTION: Progressive disclosure — collapsed categories */}
      {activeCustom === null ? (
        <div style={{ padding: "0 12px 8px" }}>
          <div style={{ display: "flex", gap: 6, overflowX: "auto" }}>
            {customCategories.map(c => (
              <div key={c.key} onClick={() => setActiveCustom(c.key)} style={{
                minWidth: 72, padding: "10px 6px 8px", borderRadius: 14, textAlign: "center", cursor: "pointer", flexShrink: 0,
                background: "rgba(140,110,80,0.4)",
              }}>
                <div style={{ fontSize: 18, marginBottom: 3 }}>{c.icon}</div>
                <div style={{ fontSize: 10, color: WHITE, fontWeight: 500 }}>+ {c.label}</div>
              </div>
            ))}
          </div>
          {/* Social proof */}
          <div style={{ textAlign: "center", marginTop: 8, fontSize: 11, color: "rgba(255,255,255,0.7)" }}>
            👥 80% қонақтар сүтпен алады
          </div>
        </div>
      ) : (
        /* Expanded customization */
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
                }} style={{
                  background: isSelected ? "rgba(255,255,255,0.92)" : "rgba(140,110,80,0.5)",
                  borderRadius: 14, padding: "12px 6px 8px", textAlign: "center", cursor: "pointer",
                }}>
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
              <div key={c.key} onClick={() => setActiveCustom(c.key)} style={{
                minWidth: 68, padding: "8px 6px 6px", borderRadius: 12, textAlign: "center", cursor: "pointer", flexShrink: 0,
                background: activeCustom === c.key ? "rgba(140,110,80,0.7)" : "rgba(140,110,80,0.35)",
                border: activeCustom === c.key ? "1.5px solid rgba(255,255,255,0.3)" : "none",
              }}>
                <div style={{ fontSize: 16, marginBottom: 2 }}>{c.icon}</div>
                <div style={{ fontSize: 9, color: WHITE, fontWeight: 500 }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom bar */}
      <div style={{ display: "flex", gap: 10, padding: "8px 12px 12px" }}>
        <button onClick={() => setVolume(volume === 400 ? 300 : 400)} style={{ padding: "14px 18px", borderRadius: 30, border: "none", fontSize: 14, fontWeight: 600, background: "rgba(140,110,80,0.5)", color: WHITE, cursor: "pointer" }}>
          {volume} мл
        </button>
        <button onClick={() => onAddToCart({ ...product, volume, milkIdx: selectedMilk, milk: milkOptions[selectedMilk], extras: selectedExtras, totalPrice })} style={{
          flex: 1, padding: "14px 0", borderRadius: 30, border: "none", fontSize: 16, fontWeight: 600, background: BRAND, color: WHITE, cursor: "pointer"
        }}>
          + {totalPrice.toLocaleString()} ₸
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   CART SCREEN
   Solution #3: Coffeeshop confirmation before payment
   ============================================================ */
function CartScreen({ cart, onRemove, onUpdateQty, onNavigate, selectedShop, onChangeShop, onAddToCart }) {
  const total = cart.reduce((s, it) => (it.totalPrice || it.price) * (it.qty || 1) + s, 0);

  if (!cart.length) return (
    <div style={{ padding: "80px 16px", textAlign: "center" }}>
      <div style={{ fontSize: 56, marginBottom: 12 }}>🛒</div>
      <div style={{ fontSize: 18, fontWeight: 600, color: GRAY_900 }}>Себет бос</div>
      <div style={{ fontSize: 14, color: GRAY_600, margin: "6px 0 24px" }}>Мәзірден сусын қосыңыз</div>
      <button onClick={() => onNavigate("home")} style={{ padding: "14px 36px", background: BRAND, color: WHITE, border: "none", borderRadius: 30, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Мәзірге өту</button>
    </div>
  );

  return (
    <div style={{ padding: "16px", display: "flex", flexDirection: "column", minHeight: "calc(100% - 32px)" }}>
      <div style={{ fontSize: 20, fontWeight: 700, color: GRAY_900, marginBottom: 14 }}>Себет</div>

      <div style={{ flex: 1 }}>
        {/* SOLUTION #3: Shop confirmation with change option */}
        <div style={{ padding: "12px 14px", background: BRAND_LIGHT, borderRadius: 16, marginBottom: 14, border: `1.5px solid ${BRAND}25` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <WhaleLogo size={28} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: GRAY_900 }}>{selectedShop.name}</div>
              <div style={{ fontSize: 12, color: GRAY_600 }}>~{selectedShop.time} дайындау</div>
            </div>
            <button onClick={onChangeShop} style={{ padding: "6px 12px", borderRadius: 10, border: `1px solid ${BRAND}`, background: "none", color: BRAND, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Өзгерту</button>
          </div>
          {/* SOLUTION: Confirmation prompt */}
          <div style={{ marginTop: 8, padding: "8px 10px", background: "rgba(255,255,255,0.7)", borderRadius: 10, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ color: GREEN }}>✓</span>
            <span style={{ fontSize: 12, color: GRAY_600 }}>Тапсырыс осы кофеханада дайындалады</span>
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
                  <button onClick={() => (item.qty || 1) <= 1 ? onRemove(idx) : onUpdateQty(idx, (item.qty || 1) - 1)} style={{ width: 30, height: 30, border: "none", background: WHITE, cursor: "pointer", fontSize: 15, color: (item.qty || 1) <= 1 ? RED : GRAY_900 }}>{(item.qty || 1) <= 1 ? "✕" : "−"}</button>
                  <span style={{ width: 26, textAlign: "center", fontSize: 14, fontWeight: 600 }}>{item.qty || 1}</span>
                  <button onClick={() => onUpdateQty(idx, (item.qty || 1) + 1)} style={{ width: 30, height: 30, border: "none", background: WHITE, cursor: "pointer", fontSize: 15 }}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* SOLUTION #5: Perfect Pair cross-sell */}
        {cart.length > 0 && (
          <PerfectPair cartItems={cart} allDrinks={drinks} onAddToCart={onAddToCart} />
        )}
      </div>

      {/* SOLUTION #5: Sticky bottom cart footer */}
      <div style={{ marginTop: 18, padding: "16px", background: GRAY_50, borderRadius: 18, position: "sticky", bottom: 0, zIndex: 10, boxShadow: "0 -4px 12px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: GRAY_900 }}>Барлығы</span>
          <span style={{ fontSize: 16, fontWeight: 700, color: GRAY_900 }}>{total.toLocaleString()} ₸</span>
        </div>
        <button style={{ width: "100%", padding: "16px 0", background: BRAND, color: WHITE, border: "none", borderRadius: 30, fontSize: 17, fontWeight: 600, cursor: "pointer" }}>
          Төлеу {total.toLocaleString()} ₸
        </button>
      </div>
    </div>
  );
}

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
  const [showTinder, setShowTinder] = useState(false);

  // SOLUTION: Remember user preferences per drink
  const [userPrefs, setUserPrefs] = useState({
    5: { milkIdx: 1, volume: 400 },  // Айс латте — usually oat, 400ml
    14: { milkIdx: 0, volume: 300 }, // Капучино — cow, 300ml
  });

  function navigate(t, d) {
    if (t === "product" && d) { setSelectedProduct(d); setScreen("product"); }
    else setScreen(t);
  }
  function addToCart(item) {
    setCart(p => [...p, { ...item, qty: 1 }]);
    // Save preference
    setUserPrefs(p => ({ ...p, [item.id]: { milkIdx: item.milkIdx || 0, volume: item.volume || 400 } }));
    setScreen("cart");
  }
  function repeatOrder(order) {
    setCart(p => [...p, ...order.items.map(i => ({ ...i, qty: 1, totalPrice: order.total / order.items.length }))]);
    setScreen("cart");
  }

  if (showOnboarding) return (
    <div style={{ width: "100%", maxWidth: 390, margin: "0 auto", background: WHITE, borderRadius: 28, border: `0.5px solid ${GRAY_200}`, overflow: "hidden", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif", height: 760 }}>
      <OnboardingScreen onComplete={() => setShowOnboarding(false)} />
    </div>
  );

  if (showShopPicker) return (
    <div style={{ width: "100%", maxWidth: 390, margin: "0 auto", background: WHITE, borderRadius: 28, border: `0.5px solid ${GRAY_200}`, overflow: "hidden", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" }}>
      <div style={{ height: 50, display: "flex", alignItems: "center", padding: "0 20px" }}><span style={{ fontSize: 15, fontWeight: 600 }}>12:36</span></div>
      <div style={{ height: 660, overflowY: "auto" }}>
        <CoffeeShopPicker onSelect={c => { setSelectedShop(c); setShowShopPicker(false) }} onClose={() => setShowShopPicker(false)} />
      </div>
    </div>
  );

  if (showTinder) return (
    <div style={{ width: "100%", maxWidth: 390, margin: "0 auto", background: WHITE, borderRadius: 28, border: `0.5px solid ${GRAY_200}`, overflow: "hidden", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif", height: 760 }}>
      <div style={{ height: 50, display: "flex", alignItems: "center", padding: "0 20px" }}><span style={{ fontSize: 15, fontWeight: 600 }}>12:36</span></div>
      <div style={{ height: 710, overflowY: "auto", position: "relative" }}>
        <CoffeeTinder drinks={drinks} onClose={() => setShowTinder(false)} onMatch={(d) => { setShowTinder(false); navigate("product", d); }} />
      </div>
    </div>
  );

  const activeTab = screen === "product" ? "home" : screen;
  return (
    <div style={{ width: "100%", maxWidth: 390, margin: "0 auto", background: WHITE, borderRadius: 28, border: `0.5px solid ${GRAY_200}`, overflow: "hidden", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif", position: "relative" }}>
      <div style={{ height: 50, background: screen === "product" ? (selectedProduct?.heroColor || "#D8C8B0") : WHITE, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: GRAY_900 }}>12:36</span>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: 12, color: GRAY_900 }}>4G</span>
          <div style={{ width: 25, height: 12, borderRadius: 3, border: `1px solid ${GRAY_900}`, padding: 1 }}>
            <div style={{ width: "65%", height: "100%", background: GRAY_900, borderRadius: 1 }} />
          </div>
        </div>
      </div>
      <div style={{ height: 660, overflowY: "auto", overflowX: "hidden" }}>
        {screen === "home" && <HomeScreen onNavigate={navigate} onAddToCart={addToCart} onRepeatOrder={repeatOrder} selectedShop={selectedShop} onChangeShop={() => setShowShopPicker(true)} onShowTinder={() => setShowTinder(true)} drinks={drinks} />}
        {screen === "product" && selectedProduct && <ProductScreen product={selectedProduct} onBack={() => setScreen("home")} onAddToCart={addToCart} userPrefs={userPrefs} />}
        {screen === "cart" && <CartScreen cart={cart} onRemove={i => setCart(p => p.filter((_, j) => j !== i))} onUpdateQty={(i, q) => setCart(p => p.map((it, j) => j === i ? { ...it, qty: q } : it))} onNavigate={navigate} selectedShop={selectedShop} onChangeShop={() => setShowShopPicker(true)} onAddToCart={addToCart} />}
        {screen === "coffeepass" && (
          <div style={{ padding: "60px 16px", textAlign: "center" }}>
            <div style={{ fontSize: 56, marginBottom: 12 }}>☕</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: GRAY_900 }}>Кофепасс</div>
            <div style={{ fontSize: 14, color: GRAY_600, marginTop: 6, lineHeight: 1.5 }}>Жазылым арқылы сүйікті сусынды арзанырақ ал</div>
            <button style={{ marginTop: 20, padding: "14px 32px", background: BRAND, color: WHITE, border: "none", borderRadius: 30, fontSize: 15, fontWeight: 600 }}>Жазылу — 4 990 ₸/ай</button>
          </div>
        )}
        {screen === "profile" && (
          <div style={{ padding: "40px 16px", textAlign: "center" }}>
            <WhaleLogo size={56} />
            <div style={{ fontSize: 20, fontWeight: 700, color: GRAY_900, marginTop: 12 }}>Айдар</div>
            <div style={{ fontSize: 14, color: GRAY_600, marginTop: 4 }}>+7 (707) 456-78-90</div>
            <div style={{ background: BRAND_LIGHT, borderRadius: 16, padding: "14px 16px", marginTop: 20, textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: BRAND_DARK }}>🎁 Тегін сусынға дейін</span>
                <span style={{ fontSize: 13, color: BRAND, fontWeight: 700 }}>7/10</span>
              </div>
              <div style={{ height: 6, background: WHITE, borderRadius: 3, overflow: "hidden" }}>
                <div style={{ width: "70%", height: "100%", background: BRAND, borderRadius: 3 }} />
              </div>
            </div>
            <div style={{ marginTop: 24, textAlign: "left" }}>
              {["Менің тапсырыстарым", "Таңдаулы кофеханалар", "Кофепасс", "Баптаулар", "Қолдау"].map(it => (
                <div key={it} style={{ padding: "14px 0", borderBottom: `0.5px solid ${GRAY_100}`, fontSize: 15, color: GRAY_900, cursor: "pointer", display: "flex", justifyContent: "space-between" }}>{it}<span style={{ color: GRAY_400 }}>›</span></div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div style={{ display: "flex", borderTop: `0.5px solid ${GRAY_200}`, background: WHITE, paddingBottom: 4 }}>
        {[{ k: "home", l: "меню", i: "▦" }, { k: "cart", l: "себет", i: "🛒" }, { k: "coffeepass", l: "кофепасс", i: "💳" }, { k: "profile", l: "профиль", i: "👤" }].map(t => (
          <button key={t.k} onClick={() => setScreen(t.k)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, border: "none", background: "none", padding: "8px 0 4px", cursor: "pointer", color: activeTab === t.k ? BRAND : GRAY_400, position: "relative" }}>
            <span style={{ fontSize: 20 }}>{t.i}</span>
            <span style={{ fontSize: 10, fontWeight: 500 }}>{t.l}</span>
            {t.k === "cart" && cart.length > 0 && <div style={{ position: "absolute", top: 2, right: "calc(50% - 16px)", width: 16, height: 16, borderRadius: "50%", background: RED, color: WHITE, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{cart.length}</div>}
          </button>
        ))}
      </div>
    </div>
  );
}
