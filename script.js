const canvas = document.querySelector('#nebula');
const ctx = canvas.getContext('2d');
const pointer = { x: innerWidth / 2, y: innerHeight / 2 };
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let stars = [];
let galaxyStars = [];
let dpr = Math.min(devicePixelRatio, 2);

function resize() {
  dpr = Math.min(devicePixelRatio, 2);
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const count = Math.min(430, Math.floor(innerWidth * innerHeight / 3300));
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: Math.random() * 1.25 + .15,
    a: Math.random() * .72 + .14,
    v: Math.random() * .12 + .025,
    phase: Math.random() * Math.PI * 2
  }));

  const galaxyCount = innerWidth < 700 ? 420 : 760;
  galaxyStars = Array.from({ length: galaxyCount }, (_, index) => {
    const arm = index % 2;
    const radius = Math.pow(Math.random(), .72);
    const angle = arm * Math.PI + radius * Math.PI * 4.1 + (Math.random() - .5) * (.28 + radius * .66);
    const warmth = radius < .18 ? '255,205,129' : Math.random() > .44 ? '229,103,247' : '116,171,255';
    return {
      radius,
      angle,
      spread: (Math.random() - .5) * (10 + radius * 30),
      size: Math.random() * 1.15 + .25,
      alpha: Math.random() * .42 + .12,
      color: warmth,
      phase: Math.random() * Math.PI * 2
    };
  });
}

function drawGalaxy(time) {
  const cx = innerWidth / 2;
  const cy = innerHeight / 2;
  const radius = Math.min(innerWidth, innerHeight) * (innerWidth < 700 ? .34 : .43);
  const rotation = reduceMotion ? 0 : -time * .000042;

  const outerGlow = ctx.createRadialGradient(cx, cy, radius * .04, cx, cy, radius * 1.32);
  outerGlow.addColorStop(0, 'rgba(255, 203, 132, .13)');
  outerGlow.addColorStop(.10, 'rgba(239, 91, 222, .12)');
  outerGlow.addColorStop(.25, 'rgba(191, 67, 218, .085)');
  outerGlow.addColorStop(.44, 'rgba(124, 72, 190, .052)');
  outerGlow.addColorStop(.68, 'rgba(77, 92, 166, .024)');
  outerGlow.addColorStop(.86, 'rgba(39, 47, 81, .008)');
  outerGlow.addColorStop(1, 'rgba(8, 10, 13, 0)');
  ctx.fillStyle = outerGlow;
  ctx.fillRect(cx - radius * 1.38, cy - radius * 1.38, radius * 2.76, radius * 2.76);

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  ctx.translate(cx, cy);
  ctx.rotate(rotation);
  ctx.scale(1, .58);
  for (const star of galaxyStars) {
    const distance = 12 + star.radius * radius;
    const x = Math.cos(star.angle) * distance + star.spread;
    const y = Math.sin(star.angle) * distance + star.spread * .35;
    const pulse = .76 + Math.sin(time * .0011 + star.phase) * .24;
    ctx.beginPath();
    ctx.arc(x, y, star.size * (star.alpha > .42 ? 1.65 : 1), 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${star.color},${Math.min(star.alpha * pulse * 1.55, .86)})`;
    ctx.fill();
  }
  ctx.restore();

  const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * .32);
  core.addColorStop(0, 'rgba(255, 248, 211, .68)');
  core.addColorStop(.08, 'rgba(255, 219, 151, .53)');
  core.addColorStop(.18, 'rgba(255, 166, 91, .34)');
  core.addColorStop(.34, 'rgba(246, 104, 164, .20)');
  core.addColorStop(.52, 'rgba(226, 74, 239, .115)');
  core.addColorStop(.72, 'rgba(165, 67, 207, .05)');
  core.addColorStop(.88, 'rgba(110, 63, 159, .014)');
  core.addColorStop(1, 'rgba(72, 49, 105, 0)');
  ctx.fillStyle = core;
  ctx.fillRect(cx - radius * .34, cy - radius * .34, radius * .68, radius * .68);
}

function draw(time = 0) {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  const haze = ctx.createRadialGradient(
    innerWidth * .74 + (pointer.x - innerWidth / 2) * .025,
    innerHeight * .34 + (pointer.y - innerHeight / 2) * .025,
    0,
    innerWidth * .74,
    innerHeight * .34,
    Math.max(innerWidth, innerHeight) * .55
  );
  haze.addColorStop(0, 'rgba(178, 64, 190, .10)');
  haze.addColorStop(.28, 'rgba(92, 36, 99, .06)');
  haze.addColorStop(1, 'rgba(8, 10, 13, 0)');
  ctx.fillStyle = haze;
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  drawGalaxy(time);

  for (const star of stars) {
    star.y -= star.v;
    if (star.y < -4) { star.y = innerHeight + 4; star.x = Math.random() * innerWidth; }
    const alpha = star.a * (.72 + Math.sin(time * .0012 + star.phase) * .28);
    ctx.beginPath();
    ctx.arc(star.x + (pointer.x - innerWidth / 2) * star.r * .005, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${star.r > .9 ? '231,139,241' : '220,226,220'},${alpha})`;
    ctx.fill();
  }
  requestAnimationFrame(draw);
}

const glow = document.querySelector('.cursor-glow');
addEventListener('pointermove', event => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});
addEventListener('resize', resize);
resize();
requestAnimationFrame(draw);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    if (entry.target.classList.contains('stats')) animateStats(entry.target);
    observer.unobserve(entry.target);
  });
}, { threshold: .14 });
document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  observer.observe(element);
});

function animateStats(container) {
  container.querySelectorAll('[data-count]').forEach(number => {
    const target = Number(number.dataset.count);
    const suffix = number.dataset.suffix || '';
    const started = performance.now();
    function tick(now) {
      const progress = Math.min((now - started) / 1200, 1);
      number.textContent = `${Math.floor(target * (1 - Math.pow(1 - progress, 3)))}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

const roles = ['独立开发者', '产品设计师', '创意探索者'];
const typing = document.querySelector('#typing-text');
let roleIndex = 0;
let charIndex = roles[0].length;
let deleting = true;
function typeRole() {
  const word = roles[roleIndex];
  charIndex += deleting ? -1 : 1;
  typing.textContent = word.slice(0, charIndex);
  let delay = deleting ? 75 : 130;
  if (charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 350; }
  if (charIndex === roles[roleIndex].length && !deleting) { deleting = true; delay = 1700; }
  setTimeout(typeRole, delay);
}
setTimeout(typeRole, 1800);

document.querySelectorAll('a[href="#"]').forEach(link => link.addEventListener('click', event => event.preventDefault()));
