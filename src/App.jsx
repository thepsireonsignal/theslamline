import { useState } from "react";

const SPORTS = ["All", "WWE", "AEW", "UFC", "Boxing", "MMA", "ONE Championship", "Bellator"];

const initialArticles = [
  {
    id: 1, sport: "WWE", category: "News",
    title: "Cody Rhodes Retains WWE Championship in Brutal Steel Cage Match",
    excerpt: "In a match that will be talked about for years, Cody Rhodes survived everything Randy Orton threw at him to retain the WWE Championship at Saturday Night's Main Event.",
    content: "In what many are calling the match of the year, Cody Rhodes and Randy Orton put on a clinic inside the unforgiving steel structure. Rhodes, who has been on a historic run as champion, found himself in trouble multiple times but refused to quit. The finish came when Rhodes countered an RKO attempt into a CrossRhodes from the top rope, sending the crowd into a frenzy.",
    author: "Mike Johnson", date: "Apr 7, 2026", breaking: true, featured: true,
    image: "🏆", readTime: "4 min",
  },
  {
    id: 2, sport: "UFC", category: "Results",
    title: "Jon Jones Announces Retirement After UFC 313 Victory",
    excerpt: "In a shocking post-fight announcement, Jon Jones told the crowd at T-Mobile Arena he is hanging up his gloves for good after defending his heavyweight title.",
    content: "The MMA world stood still Saturday night as Jon Jones, after successfully defending his heavyweight championship, grabbed the microphone and announced his retirement. Jones, widely considered the greatest MMA fighter of all time, leaves with a record of 27-1-0 and two championship reigns across two weight classes.",
    author: "Sarah Chen", date: "Apr 6, 2026", breaking: true, featured: true,
    image: "🥊", readTime: "6 min",
  },
  {
    id: 3, sport: "AEW", category: "News",
    title: "MJF Signs Massive Contract Extension with AEW Through 2029",
    excerpt: "Maxwell Jacob Friedman has committed his future to All Elite Wrestling, inking a reported multi-million dollar deal that keeps him in the company through the end of the decade.",
    content: "The Salt of the Earth has chosen to remain in All Elite Wrestling. MJF, who has been one of the most talked about performers in professional wrestling for the past five years, signed a landmark deal that will see him remain with AEW through at least 2029.",
    author: "Dave Martinez", date: "Apr 5, 2026", breaking: false, featured: true,
    image: "💎", readTime: "3 min",
  },
  {
    id: 4, sport: "Boxing", category: "Event",
    title: "Canelo vs Benavidez: The Fight We've Been Waiting For Finally Official",
    excerpt: "After years of back and forth, Canelo Alvarez and David Benavidez will finally settle their differences on June 14th in Las Vegas.",
    content: "The boxing world gets what it has been demanding. Canelo Alvarez and David Benavidez will finally meet in the ring on June 14th at T-Mobile Arena in Las Vegas.",
    author: "Sarah Chen", date: "Apr 4, 2026", breaking: false, featured: false,
    image: "🥋", readTime: "5 min",
  },
  {
    id: 5, sport: "WWE", category: "Rumor",
    title: "CM Punk vs Seth Rollins WrestleMania Match Already in the Works",
    excerpt: "Multiple sources indicate that creative has already begun planning a CM Punk vs Seth Rollins match for next year's WrestleMania.",
    content: "According to multiple sources within WWE, the company has already begun preliminary planning for a CM Punk vs Seth Rollins match at WrestleMania next year.",
    author: "Mike Johnson", date: "Apr 3, 2026", breaking: false, featured: false,
    image: "🔥", readTime: "3 min",
  },
  {
    id: 6, sport: "MMA", category: "News",
    title: "Khabib Nurmagomedov Returns as Head Coach of New MMA Superteam",
    excerpt: "The undefeated former lightweight champion has launched a new fight team based in Abu Dhabi.",
    content: "Khabib Nurmagomedov is back in combat sports, this time as a coach and team builder in Abu Dhabi.",
    author: "Dave Martinez", date: "Apr 2, 2026", breaking: false, featured: false,
    image: "🦅", readTime: "4 min",
  },
  {
    id: 7, sport: "ONE Championship", category: "Results",
    title: "Stamp Fairtex Becomes First Woman to Hold Three ONE Championships Simultaneously",
    excerpt: "In a historic night in Bangkok, Stamp Fairtex captured the atomweight kickboxing title to go along with her MMA and Muay Thai belts.",
    content: "History was made in Bangkok as Stamp Fairtex became the first person to simultaneously hold three ONE Championship titles.",
    author: "Priya Nair", date: "Apr 1, 2026", breaking: false, featured: false,
    image: "👑", readTime: "5 min",
  },
  {
    id: 8, sport: "WWE", category: "Profile",
    title: "The Rise of Gunther: How a Quiet Austrian Became WWE's Most Dominant Champion",
    excerpt: "A deep dive into the journey of GUNTHER from the European independent scene to WWE superstardom.",
    content: "Before he was GUNTHER, he was Georg Höllbacher, a quiet kid from Vienna who fell in love with professional wrestling.",
    author: "Sarah Chen", date: "Mar 31, 2026", breaking: false, featured: false,
    image: "⚔️", readTime: "8 min",
  },
];

const upcomingEvents = [
  { id: 1, sport: "WWE", name: "WWE Raw", date: "Apr 7, 2026", location: "Madison Square Garden, NYC", type: "Weekly Show" },
  { id: 2, sport: "UFC", name: "UFC 314", date: "Apr 12, 2026", location: "Kaseya Center, Miami", type: "PPV" },
  { id: 3, sport: "AEW", name: "AEW Dynasty", date: "Apr 20, 2026", location: "Enterprise Center, St. Louis", type: "PPV" },
  { id: 4, sport: "Boxing", name: "Canelo vs Benavidez", date: "Jun 14, 2026", location: "T-Mobile Arena, Las Vegas", type: "PPV" },
  { id: 5, sport: "WWE", name: "WWE WrestleMania 43", date: "Apr 5, 2027", location: "MetLife Stadium, New Jersey", type: "PPV" },
  { id: 6, sport: "ONE Championship", name: "ONE Fight Night 28", date: "Apr 25, 2026", location: "Lumpinee Stadium, Bangkok", type: "PPV" },
];

const fighters = [
  { id: 1, name: "Cody Rhodes", sport: "WWE", nickname: "The American Nightmare", record: "WWE Champion", emoji: "🏆", bio: "Cody Rhodes fulfilled his destiny by becoming WWE Champion, following in his father's footsteps to the top of sports entertainment." },
  { id: 2, name: "Jon Jones", sport: "UFC", nickname: "Bones", record: "27-1-0 (1 NC)", emoji: "🦁", bio: "Widely considered the greatest MMA fighter of all time, Jon Jones retired as undefeated heavyweight champion." },
  { id: 3, name: "MJF", sport: "AEW", nickname: "The Salt of the Earth", record: "AEW Star", emoji: "💎", bio: "Maxwell Jacob Friedman is the most must-see performer in professional wrestling today." },
  { id: 4, name: "Canelo Alvarez", sport: "Boxing", nickname: "Canelo", record: "61-2-2", emoji: "🥊", bio: "The undisputed super middleweight champion and pound-for-pound king of boxing." },
  { id: 5, name: "Islam Makhachev", sport: "UFC", nickname: "The Eagle's Successor", record: "26-1-0", emoji: "🦅", bio: "UFC Lightweight Champion and the current top pound-for-pound fighter in the world." },
  { id: 6, name: "Stamp Fairtex", sport: "ONE Championship", nickname: "The Icon", record: "3x Champion", emoji: "👑", bio: "The greatest female combat sports athlete in history, holding three ONE Championship titles simultaneously." },
];

const categoryColors = {
  "News": "#3b82f6", "Results": "#10b981", "Rumor": "#f59e0b",
  "Event": "#8b5cf6", "Profile": "#ec4899", "Opinion": "#f97316",
};

const sportColors = {
  "WWE": "#FFD700", "UFC": "#ef4444", "AEW": "#10b981",
  "Boxing": "#f59e0b", "MMA": "#8b5cf6", "ONE Championship": "#3b82f6",
  "Bellator": "#ec4899",
  export default function App() {
  const [activeSport, setActiveSport] = useState("All");
  const [activeTab, setActiveTab] = useState("news");
  const [search, setSearch] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showPublish, setShowPublish] = useState(false);
  const [articles, setArticles] = useState(initialArticles);
  const [newArticle, setNewArticle] = useState({
    title: "", excerpt: "", content: "", sport: "WWE",
    category: "News", author: "", image: "🔥",
  });
  const [published, setPublished] = useState(false);

  const filtered = articles.filter(a =>
    (activeSport === "All" || a.sport === activeSport) &&
    (search === "" || a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  const featured = filtered.filter(a => a.featured);
  const breaking = articles.filter(a => a.breaking).slice(0, 3);
  const latest = filtered.slice(0, 12);

  const publishArticle = () => {
    if (!newArticle.title || !newArticle.excerpt || !newArticle.author) return;
    const article = {
      ...newArticle, id: Date.now(),
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      breaking: false, featured: false, readTime: "3 min",
    };
    setArticles(prev => [article, ...prev]);
    setPublished(true);
    setTimeout(() => {
      setPublished(false); setShowPublish(false);
      setNewArticle({ title: "", excerpt: "", content: "", sport: "WWE", category: "News", author: "", image: "🔥" });
    }, 2500);
  };

  const sportTag = (sport) => ({
    fontSize: 10, fontWeight: "bold",
    color: sportColors[sport] || "#FFD700",
    textTransform: "uppercase", letterSpacing: 1,
  });

  const catTag = (cat) => ({
    fontSize: 10, padding: "2px 8px",
    background: `${categoryColors[cat] || "#555"}22`,
    color: categoryColors[cat] || "#888",
    borderRadius: 3, fontWeight: "bold",
  });

  return (
    <div style={{ minHeight: "100vh", background: "#090909", fontFamily: "'Georgia', serif", color: "#e0d8cc" }}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)} }
        .fcard:hover{transform:translateY(-4px)!important;border-color:#FFD70050!important}
        .lcard:hover{border-color:#252525!important;background:#131313!important}
        .navbtn:hover{color:#FFD700!important}
      `}</style>

      <div style={{ background: "#FFD700", padding: "5px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 11, fontWeight: "bold", color: "#090909", letterSpacing: 1, textTransform: "uppercase" }}>The #1 Source for Combat Sports News</span>
        <span style={{ fontSize: 11, fontWeight: "bold", color: "#090909" }}>Tuesday, April 7, 2026</span>
      </div>

      <div style={{ background: "#0f0f0f", borderBottom: "1px solid #1a1a1a", padding: "20px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontSize: 36, fontWeight: "900", color: "#fff", letterSpacing: -2, textTransform: "uppercase", fontStyle: "italic", lineHeight: 1 }}>
              THE<span style={{ color: "#FFD700" }}>SLAM</span>LINE
            </div>
            <div style={{ fontSize: 10, color: "#444", letterSpacing: 4, textTransform: "uppercase", marginTop: 4 }}>Combat Sports News Network · TSL</div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <input
              style={{ background: "#1a1a1a", border: "1px solid #222", borderRadius: 6, color: "#e0d8cc", fontSize: 13, padding: "9px 14px", fontFamily: "inherit", outline: "none", width: 210 }}
              placeholder="Search the SlamLine..."
              value={search} onChange={e => setSearch(e.target.value)}
            />
            <button onClick={() => setShowPublish(true)} style={{ background: "#FFD700", color: "#090909", border: "none", borderRadius: 6, padding: "10px 18px", fontSize: 13, fontWeight: "bold", fontFamily: "inherit", cursor: "pointer" }}>
              + Publish Story
            </button>
          </div>
        </div>
      </div>

      <div style={{ background: "#0d0d0d", borderBottom: "1px solid #151515" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex" }}>
          {["news", "events", "fighters", "results"].map(tab => (
            <button key={tab} className="navbtn" onClick={() => setActiveTab(tab)} style={{
              padding: "13px 22px", background: "transparent", border: "none",
              borderBottom: activeTab === tab ? "3px solid #FFD700" : "3px solid transparent",
              color: activeTab === tab ? "#FFD700" : "#444",
              fontSize: 13, fontWeight: activeTab === tab ? "bold" : "normal",
              cursor: "pointer", fontFamily: "inherit", textTransform: "uppercase",
              letterSpacing: 1, transition: "all 0.2s",
            }}>{tab}</button>
          ))}
        </div>
      </div>

      <div style={{ background: "#1a0000", borderBottom: "1px solid #2a0000", padding: "9px 24px", display: "flex", alignItems: "center", gap: 14, overflow: "hidden" }}>
        <span style={{ background: "#ef4444", color: "#fff", fontSize: 10, fontWeight: "bold", padding: "3px 10px", borderRadius: 2, letterSpacing: 1.5, flexShrink: 0 }}>BREAKING</span>
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div style={{ display: "flex", gap: 48, whiteSpace: "nowrap" }}>
            {breaking.map(a => (
              <span key={a.id} style={{ fontSize: 13, color: "#ccc", cursor: "pointer" }} onClick={() => setSelectedArticle(a)}>
                {a.image} {a.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: "#0a0a0a", borderBottom: "1px solid #111", padding: "12px 24px", display: "flex", gap: 6, overflowX: "auto" }}>
        {SPORTS.map(sport => (
          <button key={sport} onClick={() => setActiveSport(sport)} style={{
            padding: "5px 14px", borderRadius: 20, fontFamily: "inherit",
            border: activeSport === sport ? `1px solid ${sportColors[sport] || "#FFD700"}` : "1px solid #1e1e1e",
            background: activeSport === sport ? `${sportColors[sport] || "#FFD700"}15` : "transparent",
            color: activeSport === sport ? (sportColors[sport] || "#FFD700") : "#3a3a3a",
            fontSize: 12, fontWeight: "bold", cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.15s",
          }}>{sport}</button>
        ))}
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 24px" }}>
        {activeTab === "news" && (
          <div style={{ animation: "fadeUp 0.4s ease" }}>
            {featured.length > 0 && (
              <>
                <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 3, color: "#444", marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid #151515" }}>Featured Stories</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20, marginBottom: 36 }}>
                  {featured.slice(0, 3).map(a => (
                    <div key={a.id} className="fcard" onClick={() => setSelectedArticle(a)} style={{
                      background: "#0f0f0f", border: `1px solid ${sportColors[a.sport] || "#222"}20`,
                      borderRadius: 10, overflow: "hidden", cursor: "pointer", transition: "transform 0.2s, border-color 0.2s",
                    }}>
                      <div style={{ height: 130, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 60, background: "#0c0c0c", borderBottom: "1px solid #151515", position: "relative" }}>
                        {a.image}
                        {a.breaking && <span style={{ position: "absolute", top: 10, left: 10, background: "#ef4444", color: "#fff", fontSize: 9, fontWeight: "bold", padding: "2px 8px", borderRadius: 2, letterSpacing: 1 }}>BREAKING</span>}
                      </div>
                      <div style={{ padding: "16px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                          <span style={sportTag(a.sport)}>{a.sport}</span>
                          <span style={catTag(a.category)}>{a.category}</span>
                        </div>
                        <div style={{ fontSize: 17, fontWeight: "bold", color: "#f0e8d8", lineHeight: 1.4, marginBottom: 8 }}>{a.title}</div>
                        <div style={{ fontSize: 13, color: "#444", lineHeight: 1.65, marginBottom: 12 }}>{a.excerpt}</div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#333" }}>
                          <span>By {a.author}</span><span>{a.readTime} read · {a.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 3, color: "#444", marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid #151515" }}>Latest Stories</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
              {latest.map(a => (
                <div key={a.id} className="lcard" onClick={() => setSelectedArticle(a)} style={{
                  background: "#0f0f0f", border: "1px solid #151515", borderRadius: 8,
                  padding: "14px", cursor: "pointer", display: "flex", gap: 12, transition: "border-color 0.2s, background 0.2s",
                }}>
                  <div style={{ fontSize: 28, flexShrink: 0 }}>{a.image}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 6, marginBottom: 5 }}>
                      <span style={sportTag(a.sport)}>{a.sport}</span>
                      <span style={catTag(a.category)}>{a.category}</span>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: "bold", color: "#e0d8cc", lineHeight: 1.4, marginBottom: 4 }}>{a.title}</div>
                    <div style={{ fontSize: 11, color: "#333" }}>By {a.author} · {a.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "events" && (
          <div style={{ animation: "fadeUp 0.4s ease" }}>
            <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 3, color: "#444", marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid #151515" }}>Upcoming Events</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 14 }}>
              {upcomingEvents.filter(e => activeSport === "All" || e.sport === activeSport).map(e => (
                <div key={e.id} style={{ background: "#0f0f0f", border: `1px solid ${sportColors[e.sport] || "#222"}25`, borderRadius: 8, padding: "18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span style={sportTag(e.sport)}>{e.sport}</span>
                    <span style={{ fontSize: 10, background: "#1a1a1a", padding: "2px 8px", borderRadius: 3, color: "#444" }}>{e.type}</span>
                  </div>
                  <div style={{ fontSize: 18, fontWeight: "bold", color: "#f0e8d8", marginBottom: 8, lineHeight: 1.3 }}>{e.name}</div>
                  <div style={{ fontSize: 13, color: "#FFD700", marginBottom: 5 }}>📅 {e.date}</div>
                  <div style={{ fontSize: 12, color: "#444" }}>📍 {e.location}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "fighters" && (
          <div style={{ animation: "fadeUp 0.4s ease" }}>
            <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 3, color: "#444", marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid #151515" }}>Fighter & Superstar Profiles</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 14 }}>
              {fighters.filter(f => activeSport === "All" || f.sport === activeSport).map(f => (
                <div key={f.id} style={{ background: "#0f0f0f", border: "1px solid #151515", borderRadius: 8, padding: "20px", textAlign: "center" }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>{f.emoji}</div>
                  <span style={sportTag(f.sport)}>{f.sport}</span>
                  <div style={{ fontSize: 17, fontWeight: "bold", color: "#f0e8d8", margin: "8px 0 4px", lineHeight: 1.3 }}>{f.name}</div>
                  <div style={{ fontSize: 12, color: "#FFD700", marginBottom: 8, fontStyle: "italic" }}>"{f.nickname}"</div>
                  <div style={{ fontSize: 12, color: "#444", marginBottom: 8 }}>{f.record}</div>
                  <div style={{ fontSize: 12, color: "#333", lineHeight: 1.6 }}>{f.bio}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "results" && (
          <div style={{ animation: "fadeUp 0.4s ease" }}>
            <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 3, color: "#444", marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid #151515" }}>Recent Results</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
              {articles.filter(a => a.category === "Results" && (activeSport === "All" || a.sport === activeSport)).map(a => (
                <div key={a.id} className="lcard" onClick={() => setSelectedArticle(a)} style={{
                  background: "#0f0f0f", border: "1px solid #151515", borderRadius: 8,
                  padding: "14px", cursor: "pointer", display: "flex", gap: 12, transition: "border-color 0.2s, background 0.2s",
                }}>
                  <div style={{ fontSize: 28, flexShrink: 0 }}>{a.image}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 6, marginBottom: 5 }}>
                      <span style={sportTag(a.sport)}>{a.sport}</span>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: "bold", color: "#e0d8cc", lineHeight: 1.4, marginBottom: 4 }}>{a.title}</div>
                    <div style={{ fontSize: 11, color: "#333" }}>By {a.author} · {a.date}</div>
                  </div>
                </div>
              ))}
              {articles.filter(a => a.category === "Results" && (activeSport === "All" || a.sport === activeSport)).length === 0 && (
                <div style={{ color: "#2a2a2a", fontSize: 14, padding: "40px 0" }}>No results posted yet.</div>
              )}
            </div>
          </div>
        )}
      </div>
      
};{selectedArticle && (
        <div style={{ position: "fixed", inset: 0, background: "#000000ee", zIndex: 200, display: "flex", alignItems: "flex-start", justifyContent: "center", overflowY: "auto", padding: "40px 20px" }} onClick={() => setSelectedArticle(null)}>
          <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, width: "100%", maxWidth: 680, position: "relative" }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: "32px 32px 24px", borderBottom: "1px solid #151515", position: "relative" }}>
              <button onClick={() => setSelectedArticle(null)} style={{ position: "absolute", top: 14, right: 14, background: "#1a1a1a", border: "none", borderRadius: "50%", width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#555", fontSize: 14 }}>✕</button>
              <div style={{ fontSize: 52, marginBottom: 16 }}>{selectedArticle.image}</div>
              <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                <span style={sportTag(selectedArticle.sport)}>{selectedArticle.sport}</span>
                <span style={catTag(selectedArticle.category)}>{selectedArticle.category}</span>
                {selectedArticle.breaking && <span style={{ fontSize: 10, padding: "2px 8px", background: "#ef444422", color: "#ef4444", borderRadius: 3, fontWeight: "bold" }}>BREAKING</span>}
              </div>
              <h2 style={{ fontSize: 24, fontWeight: "bold", color: "#fff", lineHeight: 1.3, marginBottom: 10 }}>{selectedArticle.title}</h2>
              <div style={{ fontSize: 12, color: "#333" }}>By {selectedArticle.author} · {selectedArticle.date} · {selectedArticle.readTime} read</div>
            </div>
            <div style={{ padding: "24px 32px 32px" }}>
              <p style={{ fontSize: 15, color: "#777", lineHeight: 1.85, marginBottom: 16, fontStyle: "italic" }}>{selectedArticle.excerpt}</p>
              <p style={{ fontSize: 14, color: "#4a4a4a", lineHeight: 1.85 }}>{selectedArticle.content}</p>
            </div>
          </div>
        </div>
      )}

      {showPublish && (
        <div style={{ position: "fixed", inset: 0, background: "#000000ee", zIndex: 200, display: "flex", alignItems: "flex-start", justifyContent: "center", overflowY: "auto", padding: "40px 20px" }} onClick={() => setShowPublish(false)}>
          <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 14, width: "100%", maxWidth: 600, position: "relative" }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: "28px 32px 20px", borderBottom: "1px solid #151515", position: "relative" }}>
              <button onClick={() => setShowPublish(false)} style={{ position: "absolute", top: 14, right: 14, background: "#1a1a1a", border: "none", borderRadius: "50%", width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#555", fontSize: 14 }}>✕</button>
              <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 3, color: "#FFD700", marginBottom: 6 }}>TheSlamLine · Team Publishing</div>
              <h2 style={{ fontSize: 22, color: "#fff" }}>Publish a Story</h2>
            </div>
            <div style={{ padding: "24px 32px 32px" }}>
              {published && <div style={{ background: "#0d1a0d", border: "1px solid #1e3a1e", borderRadius: 6, padding: "10px 14px", color: "#4a8a4a", fontSize: 13, marginBottom: 16 }}>✓ Story published to TheSlamLine!</div>}
              <div style={{ fontSize: 11, color: "#333", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Sport</div>
              <select style={{ width: "100%", background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 6, color: "#e0d8cc", fontSize: 14, fontFamily: "inherit", outline: "none", padding: "10px 14px", marginBottom: 14, boxSizing: "border-box" }}
                value={newArticle.sport} onChange={e => setNewArticle(p => ({ ...p, sport: e.target.value }))}>
                {SPORTS.filter(s => s !== "All").map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <div style={{ fontSize: 11, color: "#333", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Category</div>
              <select style={{ width: "100%", background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 6, color: "#e0d8cc", fontSize: 14, fontFamily: "inherit", outline: "none", padding: "10px 14px", marginBottom: 14, boxSizing: "border-box" }}
                value={newArticle.category} onChange={e => setNewArticle(p => ({ ...p, category: e.target.value }))}>
                {["News","Results","Rumor","Event","Profile","Opinion"].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <div style={{ fontSize: 11, color: "#333", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Emoji Icon</div>
              <input style={{ width: "100%", background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 6, color: "#e0d8cc", fontSize: 14, fontFamily: "inherit", outline: "none", padding: "10px 14px", marginBottom: 14, boxSizing: "border-box" }}
                placeholder="Pick an emoji e.g. 🏆 🥊 🔥" value={newArticle.image} onChange={e => setNewArticle(p => ({ ...p, image: e.target.value }))} />
              <div style={{ fontSize: 11, color: "#333", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Headline</div>
              <input style={{ width: "100%", background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 6, color: "#e0d8cc", fontSize: 14, fontFamily: "inherit", outline: "none", padding: "10px 14px", marginBottom: 14, boxSizing: "border-box" }}
                placeholder="Write a compelling headline..." value={newArticle.title} onChange={e => setNewArticle(p => ({ ...p, title: e.target.value }))} />
              <div style={{ fontSize: 11, color: "#333", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Summary</div>
              <textarea style={{ width: "100%", background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 6, color: "#e0d8cc", fontSize: 13, fontFamily: "inherit", outline: "none", padding: "10px 14px", marginBottom: 14, resize: "vertical", minHeight: 80, boxSizing: "border-box" }}
                placeholder="Write a brief summary..." value={newArticle.excerpt} onChange={e => setNewArticle(p => ({ ...p, excerpt: e.target.value }))} />
              <div style={{ fontSize: 11, color: "#333", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Full Article</div>
              <textarea style={{ width: "100%", background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 6, color: "#e0d8cc", fontSize: 13, fontFamily: "inherit", outline: "none", padding: "10px 14px", marginBottom: 14, resize: "vertical", minHeight: 140, boxSizing: "border-box" }}
                placeholder="Write the full article here..." value={newArticle.content} onChange={e => setNewArticle(p => ({ ...p, content: e.target.value }))} />
              <div style={{ fontSize: 11, color: "#333", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Author Name</div>
              <input style={{ width: "100%", background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: 6, color: "#e0d8cc", fontSize: 14, fontFamily: "inherit", outline: "none", padding: "10px 14px", marginBottom: 14, boxSizing: "border-box" }}
                placeholder="Your name" value={newArticle.author} onChange={e => setNewArticle(p => ({ ...p, author: e.target.value }))} />
              <button onClick={publishArticle} style={{ background: "#FFD700", color: "#090909", border: "none", borderRadius: 6, padding: "13px 28px", fontSize: 14, fontWeight: "bold", fontFamily: "inherit", cursor: "pointer" }}>
                Publish to TheSlamLine ⚡
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
          }
