// Router + panel toggle/drag + live tokens + SVG morph
(function(){
  const routes = Array.from(document.querySelectorAll('.route'));
  const navLinks = Array.from(document.querySelectorAll('[data-route]'));
  const panel = document.getElementById('control-panel');
  const panelToggle = document.getElementById('panel-toggle');
  const controls = {
    radius: document.getElementById('radius'),
    hue: document.getElementById('hue'),
    sat: document.getElementById('sat'),
    shadow: document.getElementById('shadow')
  };

  // Router
  function activate(routeName){
    routes.forEach(s => s.hidden = s.dataset.route !== routeName);
    navLinks.forEach(a => {
      const active = a.getAttribute('href') === '#' + routeName;
      a.setAttribute('aria-current', active ? 'page' : 'false');
    });
  }
  function handleHash(){
    const name = (location.hash || '#home').substring(1);
    activate(name);
  }
  window.addEventListener('hashchange', handleHash);
  // Ensure all #hash links activate routes on click
  document.querySelectorAll('[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const to = a.getAttribute('href').slice(1);
      if(!to) return;
      e.preventDefault();
      activate(to);
      history.pushState(null, '', '#' + to);
    });
  });
  handleHash();

  // Panel toggle
  function togglePanel(){ panel.toggleAttribute('hidden'); }
  panelToggle.addEventListener('click', togglePanel);
  window.addEventListener('keydown', (e)=>{ if(e.key.toLowerCase()==='p') togglePanel(); });

  // Drag panel by header
  (function makeDraggable(){
    let sx=0, sy=0, ox=0, oy=0, dragging=false;
    const handle = panel.querySelector('h3');
    handle.style.cursor = 'move';
    handle.addEventListener('pointerdown', (e)=>{
      dragging=true; sx=e.clientX; sy=e.clientY;
      const rect = panel.getBoundingClientRect();
      ox=rect.left; oy=rect.top;
      panel.setPointerCapture(e.pointerId);
    });
    window.addEventListener('pointermove', (e)=>{
      if(!dragging) return;
      const dx = e.clientX - sx;
      const dy = e.clientY - sy;
      let nx = ox + dx;
      let ny = oy + dy;
      const maxX = window.innerWidth - panel.offsetWidth - 8;
      const maxY = window.innerHeight - panel.offsetHeight - 8;
      nx = Math.min(Math.max(8, nx), maxX);
      ny = Math.min(Math.max(60, ny), maxY);
      panel.style.left = nx + 'px';
      panel.style.top  = ny + 'px';
      panel.style.right = 'auto';
      panel.style.bottom = 'auto';
    });
    window.addEventListener('pointerup', ()=> dragging=false);
  })();

  // Live tokens
  function setVar(k,v){ document.documentElement.style.setProperty(`--${k}`, v); }
  controls.radius.addEventListener('input', e => setVar('radius', e.target.value + 'px'));
  controls.hue.addEventListener('input', e => setVar('hue', e.target.value));
  controls.sat.addEventListener('input', e => setVar('sat', e.target.value + '%'));
  controls.shadow.addEventListener('input', e => setVar('shadow-strength', e.target.value));

  // SVG blob morph
  const blob = document.getElementById('blob');
  function pathAt(t){
    const points = 10;
    const r1 = 70, r2 = 55;
    const cx = 100, cy = 100;
    const a = [];
    for(let i=0;i<points;i++){
      const ang = (i/points) * Math.PI*2;
      const wobble = Math.sin(ang*3 + t)*8;
      const r = (i%2===0? r1 : r2) + wobble;
      const x = cx + Math.cos(ang)*r;
      const y = cy + Math.sin(ang)*r;
      a.push([x,y]);
    }
    let d = `M ${a[0][0].toFixed(1)} ${a[0][1].toFixed(1)}`;
    for(let i=1;i<a.length;i++){
      const p = a[i], q = a[(i+1)%a.length];
      const c1x = (a[i-1][0] + p[0]) / 2, c1y = (a[i-1][1] + p[1]) / 2;
      const c2x = (p[0] + q[0]) / 2, c2y = (p[1] + q[1]) / 2;
      d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${p[0].toFixed(1)} ${p[1].toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}`;
    }
    d += ' Z';
    return d;
  }
  let t = 0;
  function tick(){ t += 0.02; if(blob) blob.setAttribute('d', pathAt(t)); requestAnimationFrame(tick); }
  tick();
})();