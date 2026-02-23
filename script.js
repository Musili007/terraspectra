*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Inter',sans-serif;background:#0b0f17;color:#e6edf3;overflow-x:hidden;}
html{scroll-behavior:smooth;}

nav{position:fixed;width:100%;top:0;padding:18px 8%;background:rgba(10,15,25,0.85);backdrop-filter:blur(10px);display:flex;justify-content:space-between;z-index:1000;}
.logo{font-weight:600;}
.nav-links a{color:#c9d1d9;margin-left:25px;text-decoration:none;}
.nav-links a:hover{color:#58a6ff;}

.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 10%;position:relative;}
.hero-glow{position:absolute;width:600px;height:600px;background:radial-gradient(circle,rgba(31,111,235,0.3)0%,transparent 70%);animation:pulse 6s infinite ease-in-out;}
@keyframes pulse{0%,100%{opacity:0.4;}50%{opacity:0.9;}}
.gradient-text{background:linear-gradient(90deg,#58a6ff,#1f6feb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.hero p{color:#9ba3af;margin:25px auto;max-width:700px;}
.btn-primary,.btn-secondary{padding:12px 24px;border-radius:6px;text-decoration:none;margin:10px;display:inline-block;transition:0.3s;}
.btn-primary{background:#1f6feb;color:#fff;}
.btn-primary:hover{background:#388bfd;transform:translateY(-2px);}
.btn-secondary{border:1px solid #30363d;color:#c9d1d9;}
.btn-secondary:hover{border-color:#58a6ff;color:#58a6ff;}

.section{padding:100px 10%;text-align:center;opacity:0;transform:translateY(40px);transition:0.8s;}
.section.visible{opacity:1;transform:translateY(0);}
.dark{background:rgba(20,28,40,0.4);}
.card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:30px;margin-top:50px;}
.card{background:rgba(22,27,34,0.8);padding:30px;border-radius:12px;transition:0.3s;}
.card:hover{transform:translateY(-5px);}
.featured{border:1px solid #58a6ff;box-shadow:0 0 25px rgba(88,166,255,0.2);}
.price{color:#58a6ff;margin-top:15px;font-weight:600;}
#mapContainer{height:500px;margin-top:40px;border-radius:12px;overflow:hidden;}
#particleCanvas{position:fixed;top:0;left:0;z-index:-1;}
.contact-form input,.contact-form textarea{width:100%;padding:12px;margin:10px 0;border-radius:6px;border:none;background:#1b202b;color:#e6edf3;}
.contact-form button{width:100%;padding:12px;border:none;border-radius:6px;background:#1f6feb;color:#fff;font-weight:600;cursor:pointer;transition:0.3s;}
.contact-form button:hover{background:#388bfd;}
footer{text-align:center;padding:30px;color:#6e7681;}
