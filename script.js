// Scroll Reveal
const sections=document.querySelectorAll('.section');
function reveal(){const trigger=window.innerHeight*0.85;sections.forEach(sec=>{if(sec.getBoundingClientRect().top<trigger){sec.classList.add('visible');}});}
window.addEventListener('scroll',reveal);reveal();

// Particle Background
const canvas=document.getElementById("particleCanvas");const ctx=canvas.getContext("2d");canvas.width=window.innerWidth;canvas.height=window.innerHeight;
let particles=[];class Particle{constructor(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.size=Math.random()*2;this.speedX=(Math.random()-0.5)*0.5;this.speedY=(Math.random()-0.5)*0.5;}update(){this.x+=this.speedX;this.y+=this.speedY;if(this.x<0||this.x>canvas.width)this.speedX*=-1;if(this.y<0||this.y>canvas.height)this.speedY*=-1;}draw(){ctx.fillStyle="rgba(88,166,255,0.4)";ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fill();}}
function init(){particles=[];for(let i=0;i<120;i++){particles.push(new Particle());}}
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{p.update();p.draw();});requestAnimationFrame(animate);}
init();animate();
window.addEventListener("resize",()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;init();});

// Leaflet Map
const map=L.map('mapContainer').setView([-13.1339,27.8493],6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(map);
