(function(){
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
/* aurora backdrop */
var a=document.createElement("div");a.className="aurora";a.setAttribute("aria-hidden","true");a.innerHTML="<i></i><i></i><i></i>";document.body.insertBefore(a,document.body.firstChild);
/* floating hearts in hero */
var hero=document.querySelector(".hero");
if(hero&&!rm){var h=document.createElement("div");h.className="hearts";h.setAttribute("aria-hidden","true");
var cols=["#ff5f8f","#9b7bff","#ffb86b","#ff8294"],s="";
for(var i=0;i<14;i++){s+='<b style="left:'+(Math.random()*100).toFixed(1)+'%;font-size:'+(14+Math.random()*22|0)+'px;color:'+cols[i%4]+';animation-duration:'+(9+Math.random()*9).toFixed(1)+'s;animation-delay:-'+(Math.random()*14).toFixed(1)+'s">♥</b>'}
h.innerHTML=s;hero.insertBefore(h,hero.firstChild)}
/* legal pages orb */
var doc=document.querySelector("article.doc:not([data-p])");
if(doc&&document.querySelector(".legal-head")){var o=document.createElement("div");o.className="legal-orb";o.setAttribute("aria-hidden","true");document.body.appendChild(o)}
/* scroll reveal */
var els=document.querySelectorAll(".rv");
if("IntersectionObserver" in window&&!rm){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)})}else{els.forEach(function(e){e.classList.add("in")})}
/* auto-reveal on legal pages */
if(doc){doc.querySelectorAll("h2,.note,.data-list section,.trust-card,.legal-actions").forEach(function(e){e.classList.add("rv");if(io)io.observe(e);else e.classList.add("in")})}
/* card spotlight */
document.querySelectorAll(".f").forEach(function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px")})});
})();
