// premiumReveal.js
// Lightweight reveal helper using IntersectionObserver + MutationObserver
// Adds `premium-animate` class to matched nodes and toggles `is-visible` when they enter viewport.
export default function initPremiumReveal({ selector = '.premium-animate, .result-card', rootMargin = '0px 0px -10% 0px', threshold = 0.08 } = {}){
  if (typeof window === 'undefined') return () => {};
  try {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return () => {};

    const observed = new WeakSet();

    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          // stagger children transitions for nicer effect
          const children = el.querySelectorAll('.premium-pop, .result-image, .result-content');
          children.forEach((c, i) => {
            c.style.transitionDelay = c.style.transitionDelay || `${i * 60}ms`;
          });
          observer.unobserve(el);
        }
      });
    }, { root: null, rootMargin, threshold });

    const observeEl = (el) => {
      if (!el || observed.has(el)) return;
      observed.add(el);
      if (!el.classList.contains('premium-animate')) el.classList.add('premium-animate');
      io.observe(el);
    };

    // Initial nodes
    document.querySelectorAll(selector).forEach(observeEl);

    // Watch for future DOM additions
    const mo = new MutationObserver(mutations => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.matches && node.matches(selector)) observeEl(node);
          const nested = node.querySelectorAll ? node.querySelectorAll(selector) : [];
          nested.forEach(observeEl);
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { io.disconnect(); mo.disconnect(); };
  } catch (err) {
    console.warn('initPremiumReveal error', err);
    return () => {};
  }
}
