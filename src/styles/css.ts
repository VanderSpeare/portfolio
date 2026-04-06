import type { ThemeTokens } from "../types";

/** Rebuilds the <style id="dcss"> block whenever the theme changes. */
export function applyThemeCSS(tk: ThemeTokens): void {
  let el = document.getElementById("dcss") as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement("style");
    el.id = "dcss";
    document.head.appendChild(el);
  }
  el.textContent = buildCSS(tk);
  document.body.style.background = tk.bg;
}

function buildCSS(tk: ThemeTokens): string {
  return `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:${tk.bg};color:${tk.text};font-family:'Be Vietnam Pro',sans-serif;overflow-x:hidden;cursor:none;transition:background .4s,color .4s}
#cur{position:fixed;width:6px;height:6px;border-radius:50%;background:#6688ee;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);mix-blend-mode:screen}
#curR{position:fixed;width:24px;height:24px;border-radius:50%;border:1px solid rgba(100,136,238,.5);opacity:.5;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:all .17s ease}

/* ── SIDEBARS ── */
#lsb{position:fixed;left:0;top:0;width:160px;height:100vh;background:${tk.sideBg};display:flex;flex-direction:column;align-items:center;padding:36px 0 28px;z-index:200;transition:background .4s;backdrop-filter:blur(8px)}
#lsb-brand{font-family:'Space Mono',monospace;font-size:11px;font-weight:700;letter-spacing:.28em;text-transform:uppercase;color:${tk.text2};writing-mode:vertical-rl;text-orientation:mixed;transform:rotate(180deg);white-space:nowrap;margin-bottom:auto}
#lsb-nav{list-style:none;display:flex;flex-direction:column;align-items:center;gap:10px;margin-bottom:40px}
#lsb-nav a{display:flex;flex-direction:column;align-items:center;gap:7px;text-decoration:none;cursor:none;padding:8px 0;color:${tk.text3};transition:color .25s}
#lsb-nav a:hover,#lsb-nav a.act{color:${tk.accent}}
.lnav-num{font-family:'Space Mono',monospace;font-size:9px;font-weight:700;letter-spacing:.18em;color:${tk.accent}}
.lnav-lbl{font-family:'Space Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.24em;text-transform:uppercase;writing-mode:vertical-rl;text-orientation:mixed;transform:rotate(180deg);white-space:nowrap}

#rsb{position:fixed;right:0;top:0;width:160px;height:100vh;background:${tk.sideBg};display:flex;flex-direction:column;align-items:center;padding:36px 0 28px;z-index:200;transition:background .4s;backdrop-filter:blur(8px)}
#rsb-logo img{width:48px;height:48px;border-radius:50%;filter:${tk.logoF};transition:filter .4s;display:block}
#rsb-links{display:flex;flex-direction:column;align-items:center;gap:22px;flex:1;margin-top:28px}
.rsb-lnk{display:flex;flex-direction:column;align-items:center;gap:7px;text-decoration:none;color:${tk.text3};cursor:none;transition:color .25s,transform .22s}
.rsb-lnk:hover{color:${tk.text};transform:scale(1.1)}
.rsb-icon{width:34px;height:34px;background:rgba(100,100,200,.08);display:flex;align-items:center;justify-content:center;transition:background .25s}
.rsb-lnk:hover .rsb-icon{background:rgba(79,142,247,.18)}
.rsb-lbl{font-family:'Space Mono',monospace;font-size:9px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;white-space:nowrap}
#rsb-ctrl{display:flex;flex-direction:column;align-items:center;gap:16px;margin-top:auto}
.ctrl-grp{display:flex;flex-direction:column;align-items:center;gap:5px}
.ctrl-lbl{font-family:'Space Mono',monospace;font-size:8px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:${tk.text3};white-space:nowrap}
.ctrl-btn{width:36px;height:36px;background:rgba(100,100,200,.07);border:none;color:${tk.text2};cursor:none;display:flex;align-items:center;justify-content:center;font-family:'Space Mono',monospace;font-size:10px;font-weight:700;transition:all .25s}
.ctrl-btn:hover{color:${tk.text};background:rgba(79,142,247,.18)}
#btt{display:flex;flex-direction:column;align-items:center;gap:5px;opacity:0;pointer-events:none;transition:opacity .35s}
#btt.vis{opacity:1;pointer-events:all}
#btt button{width:36px;height:36px;background:rgba(100,100,200,.07);border:none;color:${tk.text2};cursor:none;display:flex;align-items:center;justify-content:center;font-size:16px;transition:all .25s}
#btt button:hover{color:${tk.text};background:rgba(79,142,247,.18)}
.abounce{display:inline-block;animation:ab 1.9s ease-in-out infinite}
@keyframes ab{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}

/* ── LAYOUT ── */
#main{margin-left:160px;margin-right:160px;flex:1;display:flex;flex-direction:column;align-items:center;min-height:100vh}
#box{width:100%;max-width:800px;background:${tk.page};box-shadow:0 0 100px ${tk.shadow};backdrop-filter:blur(16px);transition:background .4s,box-shadow .4s}

/* ── ORBIT ── */
.orbit-scene{position:relative;width:260px;height:260px;display:flex;align-items:center;justify-content:center;margin-bottom:56px;flex-shrink:0}
.o-ring{position:absolute;border-radius:50%;border-style:solid;pointer-events:none;top:50%;left:50%;transform:translate(-50%,-50%)}
.o-ring-1{width:130px;height:130px;border-width:1px;border-color:rgba(79,142,247,.25)}
.o-ring-2{width:192px;height:192px;border-width:1px;border-color:rgba(168,85,247,.18)}
.o-ring-3{width:254px;height:254px;border-width:1px;border-color:rgba(110,130,240,.10)}
.o-logo{position:relative;z-index:10;width:90px;height:90px;border-radius:50%;filter:${tk.logoF};transition:filter .4s;box-shadow:0 0 30px rgba(79,142,247,.14)}
.o-sat{position:absolute;top:50%;left:50%;width:0;height:0;pointer-events:none}
.o-sat::after{content:'';position:absolute;border-radius:50%;transform:translate(-50%,-50%)}
@keyframes oCW  {from{transform:rotate(0deg)   translateY(var(--r))}to{transform:rotate(360deg)  translateY(var(--r))}}
@keyframes oCCW {from{transform:rotate(0deg)   translateY(var(--r))}to{transform:rotate(-360deg) translateY(var(--r))}}
.o-s1{--r:-65px;animation:oCW  9s linear infinite}
.o-s1::after{width:14px;height:14px;background:radial-gradient(circle at 38% 32%,#b8e0ff,#5522ee);box-shadow:0 0 10px 4px rgba(90,140,255,.7),0 0 20px 6px rgba(70,100,255,.3)}
.o-s2{--r:-96px;animation:oCCW 14s linear infinite}
.o-s2::after{width:13px;height:13px;background:radial-gradient(circle at 38% 32%,#e0b0ff,#8811cc);box-shadow:0 0 10px 4px rgba(180,90,255,.7),0 0 20px 6px rgba(140,50,220,.3)}
.o-s3{--r:-127px;animation:oCW  21s linear infinite}
.o-s3::after{width:12px;height:12px;background:radial-gradient(circle at 38% 32%,#99c8ff,#2211bb);box-shadow:0 0 9px 3px rgba(80,130,255,.65),0 0 18px 5px rgba(60,90,200,.28)}

/* ── HERO ── */
.c-hero{padding:120px 68px 100px;display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;overflow:hidden}
.c-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 40%,rgba(79,142,247,.05) 0%,transparent 70%);pointer-events:none}
.c-hero::after{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(90,90,180,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(90,90,180,.025) 1px,transparent 1px);background-size:54px 54px;mask-image:radial-gradient(ellipse 90% 90% at center,black 10%,transparent 72%);pointer-events:none}
.c-role{font-family:'Space Mono',monospace;font-size:8.5px;letter-spacing:.4em;text-transform:uppercase;color:${tk.text3};margin-bottom:24px;display:block}
.c-title{font-family:'Cormorant Garamond',serif;font-size:clamp(46px,7vw,86px);font-weight:300;line-height:1.0;letter-spacing:.04em;color:${tk.text};margin-bottom:10px}
.c-title em{font-style:italic;color:${tk.text2}}
.c-alias{font-family:'Noto Serif JP','Space Mono',monospace;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:${tk.text3};margin-bottom:44px}
.c-tagline{font-size:14.5px;font-weight:300;line-height:1.9;color:${tk.text2};max-width:360px}
.c-cta{display:flex;gap:14px;margin-top:38px;justify-content:center;flex-wrap:wrap}
.cbtn{font-family:'Space Mono',monospace;font-size:8.5px;letter-spacing:.22em;text-transform:uppercase;text-decoration:none;padding:10px 24px;color:${tk.text2};background:transparent;border:1px solid rgba(255,255,255,.1);cursor:none;transition:all .28s;position:relative;overflow:hidden}
.cbtn::before{content:'';position:absolute;inset:0;background:rgba(79,142,247,.1);transform:translateX(-101%);transition:transform .28s ease}
.cbtn:hover{color:${tk.text};border-color:rgba(79,142,247,.4)}
.cbtn:hover::before{transform:translateX(0)}
.cbtn-p{background:rgba(79,142,247,.11);border-color:rgba(79,142,247,.35);color:${tk.text}}

/* ── SECTIONS ── */
.cblock{padding:80px 68px;text-align:center;position:relative}
.cblock+.cblock::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:2px;height:60px;background:linear-gradient(to bottom,transparent,rgba(79,142,247,.2),rgba(168,85,247,.15),transparent)}
.block-label{font-family:'Space Mono',monospace;font-size:8px;letter-spacing:.36em;text-transform:uppercase;color:${tk.text3};margin-bottom:14px;display:block}
.block-title{font-family:'Cormorant Garamond',serif;font-size:clamp(28px,4vw,44px);font-weight:300;line-height:1.1;color:${tk.text};letter-spacing:.02em;margin-bottom:32px}
.block-title em{font-style:italic;color:${tk.text2}}
.bio{font-size:15.5px;font-weight:300;line-height:2.05;color:${tk.text2};max-width:560px;margin:0 auto}

/* ── QUOTE ── */
.quote-block{margin:40px auto 0;max-width:460px;padding:26px 30px;background:linear-gradient(135deg,rgba(79,142,247,.05),rgba(168,85,247,.05));position:relative}
.quote-block::before{content:'"';position:absolute;top:-16px;left:24px;font-family:'Cormorant Garamond',serif;font-size:68px;font-style:italic;background:linear-gradient(90deg,#4f8ef7,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;opacity:.6}
.quote-block p{font-family:'Cormorant Garamond',serif;font-size:17px;font-style:italic;font-weight:300;line-height:1.75;color:${tk.text}}

/* ── STATS ── */
.stats-row{display:flex;justify-content:center;gap:56px;margin-top:52px}
.stat-n{font-family:'Cormorant Garamond',serif;font-size:44px;font-weight:300;line-height:1;margin-bottom:7px;background:linear-gradient(90deg,#4f8ef7,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.stat-l{font-family:'Space Mono',monospace;font-size:8px;letter-spacing:.24em;text-transform:uppercase;color:${tk.text3}}

/* ── WORK ── */
.work-list{display:flex;flex-direction:column}
.w-entry{padding:40px 0;text-align:center;cursor:none;transition:all .28s}
.w-entry:hover .w-title{background:linear-gradient(90deg,#4f8ef7,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.w-num{font-family:'Space Mono',monospace;font-size:8px;letter-spacing:.28em;color:${tk.text3};margin-bottom:10px;display:block}
.w-title{font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:300;color:${tk.text};letter-spacing:.03em;margin-bottom:10px;transition:all .28s}
.w-desc{font-size:13.5px;font-weight:300;line-height:1.8;color:${tk.text2};max-width:440px;margin:0 auto 14px}
.w-tags{display:flex;justify-content:center;flex-wrap:wrap;gap:7px}
.w-tag{font-family:'Space Mono',monospace;font-size:7.5px;letter-spacing:.16em;text-transform:uppercase;color:${tk.text3};padding:3px 10px;background:rgba(90,90,180,.07);transition:all .28s}
.w-entry:hover .w-tag{color:${tk.text2};background:rgba(79,142,247,.12)}
.w-div{width:2px;height:36px;background:linear-gradient(to bottom,transparent,rgba(79,142,247,.18),rgba(168,85,247,.12),transparent);margin:0 auto}

/* ── SKILLS ── */
.skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:36px;text-align:center}
.sk-title{font-family:'Space Mono',monospace;font-size:8.5px;letter-spacing:.28em;text-transform:uppercase;background:linear-gradient(90deg,#4f8ef7,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:18px;display:block}
.sk-list{list-style:none;display:flex;flex-direction:column;gap:10px}
.sk-list li{font-size:14px;font-weight:300;color:${tk.text2};transition:color .25s}
.sk-list li:hover{color:${tk.text}}

/* ── CONTACT ── */
.c-links{display:flex;flex-direction:column;align-items:center;gap:16px;margin-top:28px}
.c-lnk{display:flex;align-items:center;gap:14px;text-decoration:none;color:${tk.text2};font-size:14px;font-weight:300;cursor:none;transition:color .25s}
.c-lnk:hover{color:${tk.text}}
.c-icon{width:32px;height:32px;background:rgba(90,90,180,.09);display:flex;align-items:center;justify-content:center;transition:background .25s,transform .22s}
.c-lnk:hover .c-icon{background:rgba(79,142,247,.18);transform:scale(1.1)}
.geo{position:relative;width:130px;height:130px;display:flex;align-items:center;justify-content:center;margin:40px auto 0}
.geo::before{content:'';position:absolute;inset:0;border:1px solid rgba(79,142,247,.15);transform:rotate(45deg);animation:gCW 26s linear infinite}
.geo::after{content:'';position:absolute;inset:16px;border:1px solid rgba(168,85,247,.08);transform:rotate(22.5deg);animation:gCCW 18s linear infinite}
@keyframes gCW {from{transform:rotate(0)}to{transform:rotate(360deg)}}
@keyframes gCCW{from{transform:rotate(0)}to{transform:rotate(-360deg)}}
.geo img{width:76px;height:76px;border-radius:50%;filter:${tk.logoF};transition:filter .4s;position:relative;z-index:1}

/* ── FINAL ROLL ── */
.final-roll{padding:60px 68px 90px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px}
.fr-produced{font-family:'Cormorant Garamond',serif;font-size:11px;font-style:italic;letter-spacing:.24em;text-transform:uppercase;color:${tk.text3};margin-bottom:18px}
.fr-name{font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:300;letter-spacing:.08em;background:linear-gradient(90deg,#4f8ef7,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:4px}
.fr-sub{font-family:'Space Mono',monospace;font-size:8.5px;letter-spacing:.28em;text-transform:uppercase;color:${tk.text3};margin-bottom:20px}
.fr-year{font-family:'Cormorant Garamond',serif;font-size:12px;letter-spacing:.2em;color:${tk.text3}}

/* ── SHARED ── */
.rv{opacity:0;transform:translateY(24px);transition:opacity .75s ease,transform .75s ease}
.rv.in{opacity:1;transform:translateY(0)}
#noise{position:fixed;inset:0;pointer-events:none;z-index:9990;opacity:.016;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
@media(max-width:700px){#lsb,#rsb{display:none}#main{margin:0!important}.c-hero,.cblock{padding:52px 20px}.skills-grid{grid-template-columns:1fr}}
`;
}
