/* Rateeb's Weed Shop — small bits of interactivity, no dependencies. */
(function () {
  'use strict';

  /* ---- 1. Age gate (21+). Remembered for the browser session. ---- */
  var gate = document.getElementById('agegate');
  var PASSED = 'rws-age-ok';

  if (gate) {
    var verified = false;
    try { verified = sessionStorage.getItem(PASSED) === '1'; } catch (e) {}

    if (!verified) {
      gate.hidden = false;
      document.body.classList.add('is-locked');
    }

    document.getElementById('ageYes').addEventListener('click', function () {
      try { sessionStorage.setItem(PASSED, '1'); } catch (e) {}
      gate.hidden = true;
      document.body.classList.remove('is-locked');
    });

    document.getElementById('ageNo').addEventListener('click', function () {
      window.location.href = 'https://www.google.com';
    });
  }

  /* ---- 2. Mobile menu ---- */
  var burger = document.getElementById('burger');
  var links = document.getElementById('navLinks');

  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- 3. Nav gets a border once you scroll ---- */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('is-stuck', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- 4. Fade sections in as they enter the viewport ---- */
  var targets = document.querySelectorAll('.section > .wrap, .strip__grid');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  /* ---- 5. Footer year ---- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
