import { useState } from "react";

// Color constants
export const BRAND = "#3B5EEB";
export const BRAND_LIGHT = "#E8EDFD";
export const BRAND_DARK = "#2A44B0";
export const LAVENDER = "#E8DFF0";
export const WHITE = "#FFFFFF";
export const GRAY_50 = "#F8F7F5";
export const GRAY_100 = "#F0EEEA";
export const GRAY_200 = "#D8D7D2";
export const GRAY_400 = "#9E9D98";
export const GRAY_600 = "#6B6A66";
export const GRAY_900 = "#1A1A18";
export const RED = "#E24B4A";
export const GREEN = "#34A853";
export const AMBER = "#E8A830";

// ============================================================
// FEATURE 1: BUSY METER (Status badge)
// ============================================================
export function BusyMeter({ queueLength = 5 }) {
    const getStatus = (len) => {
        if (len <= 3) return { color: GREEN, time: "3 мин", label: "Быстро" };
        if (len <= 8) return { color: AMBER, time: "8 мин", label: "Обычно" };
        return { color: RED, time: "15 мин", label: "Занято" };
    };

    const status = getStatus(queueLength);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 8px", background: `${status.color}15`, borderRadius: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: status.color }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: status.color }}>{status.label} • {status.time}</span>
        </div>
    );
}

// ============================================================
// FEATURE 2: SMART SWAP (Out-of-stock handler)
// ============================================================
export function SmartSwapButton({ product, isOutOfStock, onSuggest }) {
    if (!isOutOfStock) return null;

    return (
        <button onClick={onSuggest} style={{
            width: "100%", padding: "10px 0", background: AMBER, color: WHITE,
            border: "none", borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: "pointer"
        }}>
            💡 Δэлінді ұсыныс
        </button>
    );
}

// ============================================================
// FEATURE 3: LIVE ACTIVITY MOCKUP (Lock screen tracker)
// ============================================================
export function LiveActivityMockup({ orderStatus = "Brewing" }) {
    const statuses = {
        "Brewing": { emoji: "☕", text: "Дайындалып жатыр...", progress: 40 },
        "Ready": { emoji: "✓", text: "Түсіңген дайын!", progress: 100 },
        "Pickup": { emoji: "🚚", text: "Құруға дайын", progress: 75 }
    };

    const s = statuses[orderStatus] || statuses["Brewing"];

    return (
        <div style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            color: WHITE, borderRadius: 20, padding: "16px", marginBottom: 12,
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ fontSize: 28 }}>{s.emoji}</div>
                <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>Тапсырыс №12345</div>
                    <div style={{ fontSize: 11, opacity: 0.8 }}>{s.text}</div>
                </div>
            </div>
            <div style={{ height: 4, background: "rgba(255,255,255,0.2)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ width: `${s.progress}%`, height: "100%", background: BRAND, transition: "width 0.5s" }} />
            </div>
            <div style={{ fontSize: 11, opacity: 0.7, marginTop: 6 }}>~7 мин / Expo, Астана</div>
        </div>
    );
}

// ============================================================
// FEATURE 4: COFFEE CUP GAMIFICATION (Loyalty visual)
// ============================================================
export function CoffeeCupGamification({ ordersCount = 7, ordersNextLevel = 10 }) {
    const fillPercent = (ordersCount % ordersNextLevel / ordersNextLevel) * 100;
    const level = Math.floor(ordersCount / ordersNextLevel) + 1;

    return (
        <div style={{ textAlign: "center", padding: "16px", background: BRAND_LIGHT, borderRadius: 16 }}>
            <div style={{ position: "relative", width: 80, height: 100, margin: "0 auto 12px" }}>
                {/* Cup outline */}
                <svg width={80} height={100} viewBox="0 0 80 100" style={{ position: "relative", zIndex: 2 }}>
                    <rect x="15" y="20" width="50" height="50" rx="6" fill="none" stroke={BRAND} strokeWidth="2" />
                    <path d="M 65 30 Q 70 35 65 40" fill="none" stroke={BRAND} strokeWidth="2" />
                    <line x1="20" y1="70" x2="70" y2="70" stroke={BRAND} strokeWidth="2" />
                    <rect x="20" y="70" width="40" height="12" rx="4" stroke={BRAND} strokeWidth="2" fill="none" />
                </svg>
                {/* Fill */}
                <div style={{
                    position: "absolute", bottom: "16px", left: "20px", width: "40px", height: `${fillPercent * 0.4}px`,
                    background: `linear-gradient(180deg, ${BRAND} 0%, ${BRAND_DARK} 100%)`,
                    borderRadius: "2px 2px 0 0", zIndex: 1, transition: "height 0.6s"
                }} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: GRAY_900 }}>Уровень {level}</div>
            <div style={{ fontSize: 12, color: GRAY_600, marginTop: 4 }}>
                {ordersCount % ordersNextLevel} / {ordersNextLevel} заказов до уровня {level + 1}
            </div>
        </div>
    );
}

// ============================================================
// FEATURE 5: PERFECT PAIR (Cross-sell)
// ============================================================
export function PerfectPair({ cartItems, allDrinks, onAddToCart }) {
    const getSuggestion = (items) => {
        const names = items.map(i => i.name).join(" ");
        if (names.includes("Черный кофе") || names.includes("coffee")) return allDrinks.find(d => d.cat === "food");
        if (names.includes("Сладкий латте") || names.includes("Раф")) return allDrinks.find(d => d.id === 11);
        return allDrinks.find(d => d.cat === "food");
    };

    const suggestion = getSuggestion(cartItems);
    if (!suggestion) return null;

    return (
        <div style={{ marginTop: 12, padding: "12px 14px", background: BRAND_LIGHT, borderRadius: 14, border: `1.5px solid ${BRAND}30` }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: BRAND_DARK, marginBottom: 8 }}>💝 Perfect Pair</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: WHITE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                    {suggestion.img}
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: GRAY_900 }}>{suggestion.name}</div>
                    <div style={{ fontSize: 12, color: GRAY_600, marginTop: 2 }}>{suggestion.price} ₸</div>
                </div>
                <button onClick={() => onAddToCart(suggestion)} style={{
                    padding: "6px 12px", background: BRAND, color: WHITE, border: "none",
                    borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer"
                }}>+</button>
            </div>
        </div>
    );
}

// ============================================================
// FEATURE 6: FLOATING ACTION BUTTON with category menu
// ============================================================
export function FloatingMenu({ categories, onJump, isOpen, setIsOpen }) {
    return (
        <div>
            {/* Floating Button */}
            <button onClick={() => setIsOpen(!isOpen)} style={{
                position: "fixed", bottom: "80px", right: "16px", width: 56, height: 56,
                borderRadius: "50%", background: BRAND, color: WHITE, border: "none",
                fontSize: 24, cursor: "pointer", boxShadow: "0 4px 12px rgba(59, 94, 235, 0.4)",
                zIndex: 999, transition: "transform 0.2s, box-shadow 0.2s",
                transform: isOpen ? "scale(0.9)" : "scale(1)"
            }}>
                📍
            </button>

            {/* Category Menu */}
            {isOpen && (
                <div style={{
                    position: "fixed", bottom: 140, right: "16px", background: WHITE,
                    borderRadius: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.12)", zIndex: 998,
                    overflow: "hidden", minWidth: 140
                }}>
                    {categories.map((cat, i) => (
                        <div key={cat.key} onClick={() => {
                            onJump(cat.key);
                            setIsOpen(false);
                        }} style={{
                            padding: "12px 16px", fontSize: 13, fontWeight: 500, color: GRAY_900,
                            cursor: "pointer", borderBottom: i < categories.length - 1 ? `0.5px solid ${GRAY_100}` : "none",
                            transition: "background 0.2s", display: "flex", alignItems: "center", gap: 8
                        }}
                            onMouseEnter={(e) => e.target.style.background = GRAY_50}
                            onMouseLeave={(e) => e.target.style.background = "transparent"}>
                            <span>{cat.icon}</span> {cat.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// ============================================================
// FEATURE 7: COFFEE TINDER COMPONENT
// ============================================================
export function CoffeeTinder({ drinks, onMatch, onClose }) {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({ temp: null, taste: null, caffeine: null });
    const [swipeDir, setSwipeDir] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const steps = [
        { q: "Горячо или холодно?", opts: [{ l: "☕ Горячо", v: "hot" }, { l: "🧊 Холодно", v: "cold" }], key: "temp" },
        { q: "Классическое або сладко?", opts: [{ l: "😎 Классический", v: "classic" }, { l: "🍯 Сладкое", v: "sweet" }], key: "taste" },
        { q: "С кофеином или без?", opts: [{ l: "⚡ С кофеином", v: "caff" }, { l: "😴 Без", v: "decaf" }], key: "caffeine" }
    ];

    const findMatch = () => {
        let filtered = drinks.filter(d => {
            if (answers.temp === "hot" && !["coffee_milk", "coffee_author"].includes(d.cat)) return false;
            if (answers.temp === "cold" && !["ice_milk"].includes(d.cat)) return false;
            if (answers.taste === "sweet" && !["Раф", "Латте"].some(w => d.name.includes(w))) return false;
            return true;
        });
        return filtered[Math.floor(Math.random() * filtered.length)] || drinks[0];
    };

    const handleChoice = (val) => {
        const newAnswers = { ...answers, [steps[step].key]: val };
        setAnswers(newAnswers);
        if (step < 2) {
            setSwipeDir(1);
            setTimeout(() => { setStep(step + 1); setSwipeDir(0); }, 300);
        } else {
            setShowResult(true);
            setTimeout(() => {
                const match = findMatch();
                onMatch(match);
            }, 800);
        }
    };

    if (showResult) {
        return (
            <div style={{
                position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000,
                display: "flex", alignItems: "center", justifyContent: "center", animation: "fadeIn 0.3s"
            }}>
                <div style={{
                    background: WHITE, borderRadius: 24, padding: "24px", textAlign: "center",
                    maxWidth: 320, animation: "slideUp 0.4s"
                }}>
                    <div style={{ fontSize: 56, marginBottom: 12 }}>✨</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: GRAY_900, marginBottom: 6 }}>Идеальное совпадение!</div>
                    <div style={{ fontSize: 14, color: GRAY_600, marginBottom: 16 }}>Поиск идеального напитка...</div>
                    <div style={{ height: 3, background: GRAY_100, borderRadius: 1.5, overflow: "hidden" }}>
                        <div style={{ width: "100%", height: "100%", background: BRAND, animation: "loading 1.5s infinite" }} />
                    </div>
                </div>
            </div>
        );
    }

    const curr = steps[step];

    return (
        <div style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1000,
            display: "flex", alignItems: "center", justifyContent: "center"
        }} onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} style={{
                background: WHITE, borderRadius: 24, padding: "32px 24px", maxWidth: 320,
                boxShadow: "0 12px 40px rgba(0,0,0,0.15)", textAlign: "center",
                transform: `translateX(${swipeDir * 20}px)`, opacity: 1 - Math.abs(swipeDir) * 0.1,
                transition: "all 0.3s"
            }}>
                <div style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: GRAY_600, marginBottom: 12 }}>
                        Шаг {step + 1} из 3
                    </div>
                    <div style={{ height: 3, background: GRAY_100, borderRadius: 1.5, overflow: "hidden" }}>
                        <div style={{ width: `${((step + 1) / 3) * 100}%`, height: "100%", background: BRAND, transition: "width 0.3s" }} />
                    </div>
                </div>

                <div style={{ fontSize: 24, fontWeight: 700, color: GRAY_900, marginBottom: 24, lineHeight: 1.4 }}>
                    {curr.q}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {curr.opts.map(opt => (
                        <button key={opt.v} onClick={() => handleChoice(opt.v)} style={{
                            padding: "14px 16px", background: BRAND_LIGHT, color: GRAY_900,
                            border: `1.5px solid ${BRAND}40`, borderRadius: 14, fontSize: 15,
                            fontWeight: 600, cursor: "pointer", transition: "all 0.2s"
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.background = BRAND;
                                e.target.style.color = WHITE;
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = BRAND_LIGHT;
                                e.target.style.color = GRAY_900;
                            }}>
                            {opt.l}
                        </button>
                    ))}
                </div>

                <button onClick={onClose} style={{
                    marginTop: 16, padding: "10px 0", background: "none", color: GRAY_600,
                    border: "none", fontSize: 14, cursor: "pointer"
                }}>
                    Закрыть
                </button>
            </div>
        </div>
    );
}

// ============================================================
// FEATURE 8: MENU SCREEN WITH GRID + ALL FEATURES
// ============================================================
export function MenuScreen({ drinks, onNavigate, onAddToCart, userPrefs, selectedShop, onChangeShop, onShowTinder, lastMilkPrefs = [] }) {
    const [activeCategory, setActiveCategory] = useState("all");
    const [scrollPosition, setScrollPosition] = useState(0);
    const [fabOpen, setFabOpen] = useState(false);
    const [smartMilk, setSmartMilk] = useState(lastMilkPrefs[0] || null);

    const categories = [
        { key: "all", label: "Все", icon: "▦" },
        { key: "coffee_milk", label: "Кофе", icon: "☕" },
        { key: "matcha", label: "Матча", icon: "🍵" },
        { key: "food", label: "Еда", icon: "🍰" }
    ];

    const filtered = activeCategory === "all"
        ? drinks
        : drinks.filter(d => d.cat === activeCategory);

    const defaultToppingConfig = {
        volume: 400,
        milk: smartMilk ? { name: smartMilk, price: 350 } : { name: "Коровье", price: 0 },
        extras: []
    };

    const addWithSmartMilk = (drink) => {
        onAddToCart({
            ...drink,
            volume: defaultToppingConfig.volume,
            milk: defaultToppingConfig.milk,
            milkIdx: smartMilk ? 1 : 0,
            totalPrice: drink.price + defaultToppingConfig.milk.price
        });
    };

    return (
        <div style={{ paddingBottom: 20 }}>
            {/* Header with Busy Meter */}
            <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `0.5px solid ${GRAY_100}` }}>
                <div onClick={onChangeShop} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", flex: 1 }}>
                    <div style={{ fontSize: 24 }}>🐳</div>
                    <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: GRAY_900 }}>{selectedShop.name}</div>
                        <div style={{ fontSize: 11, color: GRAY_600 }}>до 23:00</div>
                    </div>
                </div>
                <BusyMeter queueLength={5} />
            </div>

            {/* Quick Actions: Tinder + "Don't know" */}
            <div style={{ padding: "12px 16px", display: "flex", gap: 8 }}>
                <button onClick={onShowTinder} style={{
                    flex: 1, padding: "12px", background: BRAND_LIGHT, color: GRAY_900,
                    border: `1.5px solid ${BRAND}40`, borderRadius: 12, fontSize: 13,
                    fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center",
                    justifyContent: "center", gap: 6
                }}>
                    ❓ Не знаю, что выбрать?
                </button>
            </div>

            {/* Smart Milk Indicator */}
            {smartMilk && (
                <div style={{ margin: "0 16px 12px", padding: "10px 12px", background: GREEN + "15", borderRadius: 10, border: `0.5px solid ${GREEN}40`, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14 }}>🥛</span>
                    <span style={{ fontSize: 12, color: GREEN, fontWeight: 600 }}>Ваше любимое: {smartMilk} включено по умолчанию</span>
                </div>
            )}

            {/* Live Activity (Mock) */}
            <div style={{ padding: "0 16px", marginBottom: 12 }}>
                <LiveActivityMockup orderStatus="Ready" />
            </div>

            {/* Category Tabs */}
            <div style={{ display: "flex", gap: 8, overflowX: "auto", padding: "0 16px", marginBottom: 12 }}>
                {categories.map(cat => (
                    <button key={cat.key} onClick={() => setActiveCategory(cat.key)} style={{
                        padding: "8px 14px", borderRadius: 10, border: activeCategory === cat.key ? `2px solid ${BRAND}` : `1px solid ${GRAY_200}`,
                        background: activeCategory === cat.key ? BRAND_LIGHT : WHITE, color: activeCategory === cat.key ? BRAND : GRAY_600,
                        fontSize: 13, fontWeight: activeCategory === cat.key ? 600 : 500, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0
                    }}>
                        {cat.icon} {cat.label}
                    </button>
                ))}
            </div>

            {/* 2x2 Grid Layout */}
            <div style={{ padding: "0 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
                {filtered.map(drink => (
                    <div key={drink.id} style={{
                        borderRadius: 16, overflow: "hidden", background: drink.heroColor || LAVENDER,
                        padding: "14px", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s",
                        position: "relative"
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(0.98)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "none";
                        }}>
                        {/* Product emoji */}
                        <div style={{ fontSize: 40, textAlign: "center", marginBottom: 8 }}>{drink.img}</div>

                        {/* Product name */}
                        <div style={{ fontSize: 13, fontWeight: 600, color: GRAY_900, marginBottom: 4, lineHeight: 1.2, height: 32, overflow: "hidden" }}>
                            {drink.name}
                        </div>

                        {/* Price */}
                        <div style={{ fontSize: 14, fontWeight: 700, color: GRAY_900, marginBottom: 10 }}>
                            {drink.price.toLocaleString()} ₸
                        </div>

                        {/* Add to Cart Button - Consistent across all cards */}
                        <button onClick={() => addWithSmartMilk(drink)} style={{
                            width: "100%", padding: "10px 0", background: BRAND, color: WHITE,
                            border: "none", borderRadius: 12, fontSize: 13, fontWeight: 600,
                            cursor: "pointer", display: "flex", alignItems: "center",
                            justifyContent: "center", gap: 6, transition: "background 0.2s"
                        }}
                            onMouseEnter={(e) => e.target.style.background = BRAND_DARK}
                            onMouseLeave={(e) => e.target.style.background = BRAND}>
                            + Добавить
                        </button>
                    </div>
                ))}
            </div>

            {/* Floating Menu Button */}
            <FloatingMenu
                categories={categories}
                onJump={(key) => setActiveCategory(key)}
                isOpen={fabOpen}
                setIsOpen={setFabOpen}
            />
        </div>
    );
}
