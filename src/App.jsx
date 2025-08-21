
import React, { useEffect, useState } from "react";
import "./App.css";
import { translations } from "./i18n";

export default function App() {
  const [hasLogo, setHasLogo] = useState(true);
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "uz");
  const t = translations[lang];
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "ru" ? "ru" : "uz";
    document.title = `ERKIN NAFAS — ${t.tagline}`;
  }, [lang]);

  return (
    <div style={{minHeight:"100vh", display:"flex", flexDirection:"column", color:"#fff", background:"linear-gradient(180deg, #0a1e46 0%, #0c3b2e 50%, #7a1111 100%)"}}>
      <style>{`
        .container{max-width:1100px;margin:0 auto;padding:0 16px}
        .card{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:16px;padding:20px;backdrop-filter:blur(6px)}
        .btn{appearance:none;border:none;border-radius:12px;padding:12px 18px;cursor:pointer;font-weight:600}
        .btn-primary{background:#1e6eff;color:#fff}
        .btn-outline{background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.6)}
        .grid{display:grid;gap:16px}
        @media(min-width:768px){.grid-2{grid-template-columns:1fr 1fr}.grid-3{grid-template-columns:repeat(3,1fr)}}
        header{position:sticky;top:0;z-index:10;background:rgba(10,30,70,0.85);backdrop-filter:blur(6px);border-bottom:1px solid rgba(255,255,255,0.12)}
        a{color:#fff;text-decoration:none}
        .badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);padding:8px 12px;border-radius:999px;font-size:14px}
        .muted{color:#dbeafe}
        .logo{width:44px;height:44px;border-radius:999px;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#0ea5a5;font-weight:800}
        .logo img{width:100%;height:100%;object-fit:cover;display:block}
        .iconwrap{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18)}
        .iconwrap svg{width:24px;height:24px}
      `}</style>

      {/* NAV */}
      <header>
        <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px"}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div className="logo">
              {hasLogo ? (
                <img src="/logo.png" alt="ERKIN NAFAS" onError={() => setHasLogo(false)} />
              ) : (<span>EN</span>)}
            </div>
            <div>
              <div style={{fontWeight:700,letterSpacing:0.2}}>ERKIN NAFAS</div>
              <div style={{fontSize:12,opacity:0.8}}>{t.tagline}</div>
            </div>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <button className={`langbtn ${lang==='uz'?'active':''}`} onClick={()=>setLang('uz')}>UZ</button>
            <button className={`langbtn ${lang==='ru'?'active':''}`} onClick={()=>setLang('ru')}>RU</button>
            <a href="tel:+998934740308" className="btn btn-outline">{t.cta_call}</a>
            <a href="https://t.me/erkinnafas" target="_blank" rel="noreferrer" className="btn btn-primary">Telegram</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{padding:"40px 0"}}>
        <div className="container grid grid-2" style={{alignItems:"center"}}>
          <div>
            <h1 style={{fontSize:36,lineHeight:1.2,fontWeight:800}}>{t.hero_slogan}</h1>
            <p className="muted" style={{marginTop:12}}>{t.hero_desc}</p>
            <ul className="muted" style={{marginTop:12,lineHeight:1.6}}>
              <li>✔️ {t.s1} — {t.s1d}</li>
              <li>✔️ {t.s2} — {t.s2d}</li>
              <li>✔️ {t.s3} — {t.s3d}</li>
              <li>✔️ {t.s4} — {t.s4d}</li>
              <li>✔️ {t.s5} — {t.s5d}</li>
              <li>✔️ {t.s6} — {t.s6d}</li>
            </ul>
            <div style={{display:"flex",gap:12,marginTop:16,flexWrap:"wrap"}}>
              <a href="#video" className="btn btn-primary">{t.cta_book}</a>
              <a href="tel:+998934740308" className="btn btn-outline">{t.cta_call}</a>
            </div>
            <div style={{display:"flex",gap:8,marginTop:16,flexWrap:"wrap"}}>
              <span className="badge">{t.badge_247}</span>
              <span className="badge" style={{background:"rgba(34,197,94,0.18)",borderColor:"rgba(34,197,94,0.35)"}}>{t.badge_individual}</span>
              <span className="badge" style={{background:"rgba(248,113,113,0.18)",borderColor:"rgba(248,113,113,0.35)"}}>{t.badge_fast}</span>
            </div>
          </div>

          {/* RIGHT: Video slot (user will add file) */}
          <div id="video" className="card videoCard" style={{height:320, padding:0, overflow:"hidden"}}>
            <video src="/clinic-video.mp4" poster="/poster.jpg" preload="metadata" autoPlay muted loop playsInline controls style={{width:"100%",height:"100%"}} />
          </div>
        </div>
      </section>

      {/* SERVICES WITH ICONS */}
      <section style={{padding:"32px 0"}}>
        <div className="container">
          <h2 style={{fontSize:28,fontWeight:800, marginBottom: 8}}>{t.services_ex_title}</h2>
          <div className="grid grid-3" style={{marginTop:16}}>
            <div className="card" style={{display:"grid",gridTemplateColumns:"56px 1fr",gap:12,alignItems:"start"}}>
              <div className="iconwrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2v4a2 2 0 0 1-2 2H9" />
                  <path d="M7 22h6a2 2 0 0 0 2-2v-7H5v7a2 2 0 0 0 2 2Z" />
                  <path d="M5 11V7a2 2 0 0 1 2-2h2" />
                </svg>
              </div>
              <div>
                <div style={{fontWeight:700}}>{t.med_title}</div>
                <div className="muted" style={{marginTop:6}}>{t.med_desc}</div>
              </div>
            </div>

            <div className="card" style={{display:"grid",gridTemplateColumns:"56px 1fr",gap:12,alignItems:"start"}}>
              <div className="iconwrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M8 12h8M12 8v8"></path>
                </svg>
              </div>
              <div>
                <div style={{fontWeight:700}}>{t.physio_title}</div>
                <div className="muted" style={{marginTop:6}}>{t.physio_desc}</div>
              </div>
            </div>

            <div className="card" style={{display:"grid",gridTemplateColumns:"56px 1fr",gap:12,alignItems:"start"}}>
              <div className="iconwrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 2v3l-5 9a5 5 0 0 0 4 7h8a5 5 0 0 0 4-7l-5-9V2"></path>
                  <path d="M7 16h10"></path>
                </svg>
              </div>
              <div>
                <div style={{fontWeight:700}}>{t.lab_title}</div>
                <div className="muted" style={{marginTop:6}}>{t.lab_desc}</div>
              </div>
            </div>

            <div className="card" style={{display:"grid",gridTemplateColumns:"56px 1fr",gap:12,alignItems:"start"}}>
              <div className="iconwrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 14s1.5-2 4-2 4 2 4 2"></path>
                  <circle cx="12" cy="8" r="3"></circle>
                  <path d="M4 20s2-3 8-3 8 3 8 3"></path>
                </svg>
              </div>
              <div>
                <div style={{fontWeight:700}}>{t.massage_title}</div>
                <div className="muted" style={{marginTop:6}}>{t.massage_desc}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section style={{padding:"8px 0",background:"rgba(0,0,0,0.25)",borderTop:"1px solid rgba(255,255,255,0.16)",borderBottom:"1px solid rgba(255,255,255,0.16)"}}>
        <div className="container grid grid-3">
          <div className="card" style={{padding:14}}>{t.strip_hours}</div>
          <div className="card" style={{padding:14}}>{t.strip_address}</div>
          <div className="card" style={{padding:14}}>{t.strip_landmark}</div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{padding:"36px 0"}}>
        <div className="container grid grid-2">
          <div className="card">
            <div style={{fontWeight:800,marginBottom:8}}>{t.find_title}</div>
            <div className="muted">{t.strip_address}</div>
            <div className="muted">{t.strip_landmark}</div>
            <div className="muted">{(t.phone_label||'Telefon')}: <a href="tel:+998934740308">+998 93 474 03 08</a></div>
            <div className="muted">{(t.tg_label||'Telegram')}: <a href="https://t.me/erkinnafas" target="_blank" rel="noreferrer">t.me/erkinnafas</a></div>
            <div style={{marginTop:12,height:300,borderRadius:12,overflow:"hidden",border:"1px solid rgba(255,255,255,0.18)"}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451.81170878226374!2d64.40052871597577!3d39.73987921904587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5007004ced98b9%3A0x814575eccf113a3c!2sErkin%20nafas!5e1!3m2!1sru!2s!4v1755749126106!5m2!1sru!2s" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
            </div>
          </div>
          <div className="card">
            <div style={{fontWeight:800,marginBottom:8}}>{t.quick_title}</div>
            <div className="muted">{lang==='ru' ? 'Напишите нам в Telegram: ' : 'Telegram orqali yozing: '}<a href="https://t.me/erkinnafas" target="_blank" rel="noreferrer">t.me/erkinnafas</a></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{marginTop:"auto",padding:"18px 0",borderTop:"1px solid rgba(255,255,255,0.16)",background:"rgba(0,0,0,0.25)"}}>
        <div className="container" style={{display:"flex",justifyContent:"space-between",fontSize:14,opacity:0.9,flexWrap:"wrap",gap:8}}>
          <div>© {new Date().getFullYear()} ERKIN NAFAS. {lang==='ru' ? 'Все права защищены.' : 'Barcha huquqlar himoyalangan.'}</div>
          <div>{lang==='ru' ? 'Политика конфиденциальности • Публичная оферта' : 'Maxfiylik siyosati • Ommaviy oferta'}</div>
        </div>
      </footer>
    </div>
  );
}
