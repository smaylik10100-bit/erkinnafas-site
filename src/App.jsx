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
    document.title = `ERKIN NAFAS — ${t.tagline || ''}`;
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
        input,textarea{width:100%;background:rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.2);border-radius:12px;color:#fff;padding:12px}
        input::placeholder,textarea::placeholder{color:#cbd5e1}
        header{position:sticky;top:0;z-index:10;background:rgba(10,30,70,0.85);backdrop-filter:blur(6px);border-bottom:1px solid rgba(255,255,255,0.12)}
        a{color:#fff;text-decoration:none}
        .badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);padding:8px 12px;border-radius:999px;font-size:14px}
        .muted{color:#dbeafe}
        .logo{width:44px;height:44px;border-radius:999px;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#0ea5a5;font-weight:800}
        .logo img{width:100%;height:100%;object-fit:cover;display:block}
        .videoCard video{width:100%;height:100%;display:block;object-fit:cover;border-radius:12px}
      `}</style>

      {/* NAV */}
      <header>
        <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px"}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div className="logo">
              {hasLogo ? (
                <img
                  src="/logo.png"
                  alt="ERKIN NAFAS"
                  onError={() => setHasLogo(false)}
                />
              ) : (
                <span>EN</span>
              )}
            </div>
            <div>
              <div style={{fontWeight:700,letterSpacing:0.2}}>ERKIN NAFAS</div>
              <div style={{fontSize:12,opacity:0.8}}>{t.tagline || "NaFasingizga erkinlik bag'ishlaymiz!"}</div>
            </div>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <button className={"langbtn " + (lang==='uz'?'active':'')} onClick={()=>setLang('uz')}>UZ</button>
            <button className={"langbtn " + (lang==='ru'?'active':'')} onClick={()=>setLang('ru')}>RU</button>
            <a href="tel:+998934740308" className="btn btn-outline">{t.cta_call || "Qo'ng'iroq qilish"}</a>
            <a href="https://t.me/erkinnafas" target="_blank" rel="noreferrer" className="btn btn-primary">Telegram</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{padding:"40px 0"}}>
        <div className="container grid grid-2" style={{alignItems:"center"}}>
          <div>
            <h1 style={{fontSize:36,lineHeight:1.2,fontWeight:800}}>{t.hero_slogan || "ЭРКИН НАФАС – Нафасингизга эркинлик бағишлаймиз!"}</h1>
            <p className="muted" style={{marginTop:12}}>{t.hero_desc || "Пульмонолог ва терапевт шифокорларимиз 24 соат хизматингизда!"}</p>
            <ul className="muted" style={{marginTop:12,lineHeight:1.6}}>
              <li>✔️ {(t.s1||"Yurak-qon aylanish tizimi")} — {(t.s1d||"Gipertoniya, EKG, nazorat")}</li>
              <li>✔️ {(t.s2||"Immunitet pasayishi va infeksiyalar")} — {(t.s2d||"Kamqonlik, O'RVI va b.")}</li>
              <li>✔️ {(t.s3||"Yo'tal, bronxit, astma, allergiya")} — {(t.s3d||"Kompleks davolash")}</li>
              <li>✔️ {(t.s4||"O'pka va nafas yo'llari tekshiruvi")} — {(t.s4d||"Spirometriya, pulsoksimetriya")}</li>
              <li>✔️ {(t.s5||"Ingalatsiya")} — {(t.s5d||"Nebulizer terapiyasi")}</li>
              <li>✔️ {(t.s6||"Yuqori tajriba, tezkor xizmat")} — {(t.s6d||"Individual yondashuv")}</li>
            </ul>
            <div style={{display:"flex",gap:12,marginTop:16,flexWrap:"wrap"}}>
              <a href="#video" className="btn btn-primary">{t.cta_book || "Video"}</a>
              <a href="tel:+998934740308" className="btn btn-outline">{t.cta_call || "Qo'ng'iroq qilish"}</a>
            </div>
            <div style={{display:"flex",gap:8,marginTop:16,flexWrap:"wrap"}}>
              <span className="badge">{t.badge_247 || "24/7 xizmat"}</span>
              <span className="badge" style={{background:"rgba(34,197,94,0.18)",borderColor:"rgba(34,197,94,0.35)"}}>{t.badge_individual || "Individual yondashuv"}</span>
              <span className="badge" style={{background:"rgba(248,113,113,0.18)",borderColor:"rgba(248,113,113,0.35)"}}>{t.badge_fast || "Tezkor xizmat"}</span>
            </div>
          </div>

          {/* RIGHT COLUMN: looping video instead of booking form */}
          <div id="video" className="card videoCard" style={{height:320, padding:0, overflow:"hidden"}}>
            <video
              src="/clinic-video.mp4"
              poster="/poster.jpg"
              preload="metadata"
              autoPlay
              muted
              loop
              playsInline
              controls
              style={{width:"100%",height:"100%"}}
            />
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section style={{padding:"8px 0",background:"rgba(0,0,0,0.25)",borderTop:"1px solid rgba(255,255,255,0.16)",borderBottom:"1px solid rgba(255,255,255,0.16)"}}>
        <div className="container grid grid-3">
          <div className="card" style={{padding:14}}>{t.strip_hours || "🕒 Ish vaqti: 24/7"}</div>
          <div className="card" style={{padding:14}}>{t.strip_address || "📍 Manzil: Buxoro shahar, 7-mikrorayon, 71-uy"}</div>
          <div className="card" style={{padding:14}}>{t.strip_landmark || "🧭 Mo'ljal: Buxoro Viloyat Test Markazi yonida"}</div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{padding:"36px 0"}}>
        <div className="container">
          <h2 style={{fontSize:28,fontWeight:800}}>{t.services_title || "Xizmatlar / Услуги"}</h2>
          <div className="grid grid-3" style={{marginTop:16}}>
            {[
              { t: t.s1 || "Yurak-qon aylanish tizimi", d: t.s1d || "Gipertoniya, EKG, nazorat" },
              { t: t.s2 || "Immunitet pasayishi va infeksiyalar", d: t.s2d || "Kamqonlik, O'RVI va b." },
              { t: t.s3 || "Yo'tal, bronxit, astma, allergiya", d: t.s3d || "Kompleks davolash" },
              { t: t.s4 || "O'pka va nafas yo'llari tekshiruvi", d: t.s4d || "Spirometriya, pulsoksimetriya" },
              { t: t.s5 || "Ingalatsiya", d: t.s5d || "Nebulizer terapiyasi" },
              { t: t.s6 || "Yuqori tajriba, tezkor xizmat", d: t.s6d || "Individual yondashuv" },
            ].map((s) => (
              <div key={s.t} className="card">
                <div style={{fontWeight:700,marginBottom:6}}>{s.t}</div>
                <div className="muted">{s.d}</div>
              </div>
            ))}
          </div>
          <div style={{height:1,background:"rgba(255,255,255,0.16)",margin:"8px 0"}}/>
          <div className="grid grid-2" style={{marginTop:16}}>
            <div className="card"><b>{lang==='ru' ? 'Амбулаторно (дневной стационар)' : 'Ambulator (kunduzgi)'}</b> — {(t.modes_day || "Ambulator (kunduzgi) — tekshiruv va davolash.").split('—')[1].trim()}</div>
            <div className="card"><b>{lang==='ru' ? 'Стационар' : 'Statsionar (yotib davolanish)'}</b> — {(t.modes_night || "Statsionar (yotib davolanish) — 24/7 kuzatuv.").split('—')[1].trim()}</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{padding:"36px 0"}}>
        <div className="container grid grid-2">
          <div className="card">
            <div style={{fontWeight:800,marginBottom:8}}>{t.find_title || "Qanday topish / Как нас найти"}</div>
            <div className="muted">{t.strip_address || "📍 Manzil: Buxoro shahar, 7-mikrorayon, 71-uy"}</div>
            <div className="muted">{t.strip_landmark || "🧭 Mo'ljal: Buxoro Viloyat Test Markazi yonida"}</div>
            <div className="muted">{(t.phone_label || (lang==='ru'?'Телефон':'Telefon'))}: <a href="tel:+998934740308">+998 93 474 03 08</a></div>
            <div className="muted">{(t.tg_label || 'Telegram')}: <a href="https://t.me/erkinnafas" target="_blank" rel="noreferrer">t.me/erkinnafas</a></div>
            <div style={{marginTop:12,height:300,borderRadius:12,overflow:"hidden",border:"1px solid rgba(255,255,255,0.18)"}}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451.81170878226374!2d64.40052871597577!3d39.73987921904587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5007004ced98b9%3A0x814575eccf113a3c!2sErkin%20nafas!5e1!3m2!1sru!2s!4v1755749126106!5m2!1sru!2s" 
                width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="ERKIN NAFAS map"
              ></iframe>
            </div>
          </div>
          <div className="card">
            <div style={{fontWeight:800,marginBottom:8}}>{t.quick_title || (lang==='ru' ? 'Быстрая связь' : 'Tez aloqa')}</div>
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
