import { animate, inView, stagger } from 'motion';

/**
 * InfoHQ Motion Engine
 * Ultra-smooth, natural spatial animations built with Motion.
 * Features:
 * 1. Global Hero Entrance on every page (H1, eyebrow, description, CTAs, visual)
 * 2. Stagger Card Reveal across all card grids (including Blog cards & category tiles)
 * 3. Pricing Page Animations (One-Time Projects, Comparison Matrix, Systems We Manage, Requests Card)
 * 4. Company Page Animations (Who We Are, Why InfoHQ Exists, Where We Work, India Map)
 * 5. Unified Site-Wide FAQ Accordion Card Motion
 * 6. Footer Staggered Reveal
 * 7. Soft Directional Scroll Reveal
 * 
 * Respects prefers-reduced-motion, provides clean fallbacks, and runs smoothly on View Transitions.
 */

// Luxury ease-out curve (smooth deceleration, zero mechanical snap or bounce)
const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function initMotion(): void {
  // 1. Accessibility: Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduced-motion');
    return;
  }

  document.documentElement.classList.add('has-motion');

  // 2. Hero Entrance Animation (All Pages)
  initHeroEntrance();

  // 3. Stagger Card Reveal (Grids & Blogs)
  initStaggerCards();

  // 4. Large Cards Internal Text Hierarchy Reveal
  initLargeCardInnerMotion();

  // 5. Pricing Page Dedicated Motion (One-Time Projects, Matrix, Systems We Manage, Typical Requests)
  initPricingMotion();

  // 6. Company Page Dedicated Motion (Narrative Boxes, Presence, India Map)
  initCompanyMotion();

  // 7. Site-Wide FAQ Cards Motion
  initFaqMotion();

  // 8. Footer Reveal Motion
  initFooterMotion();

  // 9. Soft Scroll Reveal (Left / Right / Up / Split)
  initScrollReveal();
}

/**
 * 1. Hero Entrance Animation (Works across every page)
 * - Heading text softly floats in (y: 10-14px -> 0, opacity: 0 -> 1)
 * - Description fades up with natural ease
 * - CTAs and highlights appear with slight delayed cadence
 * - No overflow-hidden clipping — feels 100% organic and seamless
 */
function initHeroEntrance(): void {
  const heroContainer = document.querySelector<HTMLElement>(
    '.hero-section, .services-hero, .service-hero, .pricing-hero, .portfolio-hero, .company-hero, .contact-hero, .blogs-hero, .cat-hero, .post-hero, .legal-hero, main > section:first-of-type'
  );
  if (!heroContainer) return;

  // Eyebrow badge
  const eyebrow = heroContainer.querySelector<HTMLElement>(
    '.hero-eyebrow, .services-eyebrow, .company-eyebrow, .contact-badge, .post-category-pill, .cat-hero-pill, .eyebrow'
  );
  if (eyebrow) {
    animate(
      eyebrow,
      { opacity: [0, 1], y: [8, 0] },
      { duration: 0.55, delay: 0.04, easing: LUXURY_EASE }
    );
  }

  // Primary Headline (H1)
  const h1 = heroContainer.querySelector<HTMLElement>('h1');
  if (h1) {
    const words = h1.querySelectorAll<HTMLElement>('.motion-word');
    if (words.length > 0) {
      // Natural spatial reveal for pre-split words (e.g. Home Hero)
      const anim = animate(
        words,
        {
          opacity: [0, 1],
          y: [12, 0]
        },
        {
          duration: 0.65,
          delay: stagger(0.038, { start: 0.08 }),
          easing: LUXURY_EASE
        }
      );
      anim.then(() => {
        words.forEach((w) => {
          w.style.transform = '';
          w.style.opacity = '';
        });
      });
    } else {
      // Direct smooth entrance for all other page H1 headlines
      const anim = animate(
        h1,
        { opacity: [0, 1], y: [16, 0] },
        { duration: 0.7, delay: 0.08, easing: LUXURY_EASE }
      );
      anim.then(() => {
        h1.style.transform = '';
        h1.style.opacity = '';
      });
    }
  }

  // Description / Subheadline (P)
  const subheadline = heroContainer.querySelector<HTMLElement>(
    '.hero-subheadline, .services-subheadline, .service-lead, .pricing-subheadline, .portfolio-subheadline, .company-subheadline, .contact-hero-desc, .blogs-subheadline, .cat-hero-desc, .post-excerpt, h1 + p'
  );
  if (subheadline) {
    const anim = animate(
      subheadline,
      { opacity: [0, 1], y: [14, 0] },
      { duration: 0.68, delay: 0.26, easing: LUXURY_EASE }
    );
    anim.then(() => {
      subheadline.style.transform = '';
      subheadline.style.opacity = '';
    });
  }

  // Hero CTAs / Jump links / Quick action buttons
  const ctas = heroContainer.querySelectorAll<HTMLElement>(
    '.hero-ctas > *, .jump-links > *, .hero-actions > *, .contact-info-list > *'
  );
  if (ctas.length > 0) {
    const anim = animate(
      ctas,
      { opacity: [0, 1], y: [10, 0] },
      { duration: 0.55, delay: stagger(0.07, { start: 0.4 }), easing: LUXURY_EASE }
    );
    anim.then(() => {
      ctas.forEach((c) => {
        c.style.transform = '';
        c.style.opacity = '';
      });
    });
  }

  // Hero Highlights / Trust checks
  const highlights = heroContainer.querySelectorAll<HTMLElement>('.hero-highlights .h-item');
  if (highlights.length > 0) {
    animate(
      highlights,
      { opacity: [0, 1], y: [8, 0] },
      { duration: 0.5, delay: stagger(0.06, { start: 0.52 }), easing: LUXURY_EASE }
    );
  }

  // Hero Visual Column (e.g. Code composition or graphic)
  const visualCol = heroContainer.querySelector<HTMLElement>(
    '.hero-visual-col, .service-hero-visual, .contact-card-wrap'
  );
  if (visualCol) {
    const anim = animate(
      visualCol,
      { opacity: [0, 1], y: [18, 0], scale: [0.985, 1] },
      { duration: 0.8, delay: 0.18, easing: LUXURY_EASE }
    );
    anim.then(() => {
      visualCol.style.transform = '';
      visualCol.style.opacity = '';
    });
  }
}

/**
 * 2. Stagger Card Reveal
 * - Cards appear sequentially when scrolled into view
 * - Soft fade + 16px gentle upward glide (grounded & natural, not abrupt)
 * - Explicitly covers blog articles grids, category tiles, portfolio, and service cards
 */
function initStaggerCards(): void {
  const gridSelectors = [
    '[data-motion="stagger-cards"]',
    '.services-cards-grid',
    '.portfolio-grid',
    '.portfolio-cards-grid',
    '.why-grid',
    '.engagement-grid',
    '.home-blog-grid',
    '.articles-grid',
    '.category-tiles-grid',
    '.related-grid',
    '.service-items-grid',
    '.retainer-cards-grid',
    '.systems-grid',
    '.values-grid',
    '.diff-grid',
    '.deliverables-grid',
    '.insights-grid',
    '.standards-grid'
  ].join(', ');

  const grids = document.querySelectorAll<HTMLElement>(gridSelectors);

  grids.forEach((grid) => {
    if (grid.hasAttribute('data-motion-bound')) return;
    grid.setAttribute('data-motion-bound', 'true');

    const cards = grid.querySelectorAll<HTMLElement>(
      ':scope > article, :scope > .card, :scope > .blog-card, :scope > .category-tile, :scope > [class*="-card"], :scope > .diff-card, :scope > .model-card, :scope > .why-card, :scope > .engagement-card, :scope > .value-card, :scope > .deliverable-card'
    );
    if (!cards.length) return;

    inView(
      grid,
      () => {
        const anim = animate(
          cards,
          {
            opacity: [0, 1],
            y: [16, 0],
            scale: [0.985, 1]
          },
          {
            duration: 0.65,
            delay: stagger(0.065, { start: 0.04 }),
            easing: LUXURY_EASE
          }
        );

        anim.then(() => {
          cards.forEach((card) => {
            card.style.transform = '';
            card.style.opacity = '';
            card.classList.add('is-revealed');
          });
        });
      },
      { amount: 0.12 }
    );
  });

  // Isolated Featured Blog Card
  const featuredBlog = document.querySelector<HTMLElement>('.featured-post-section .blog-card');
  if (featuredBlog && !featuredBlog.hasAttribute('data-motion-bound')) {
    featuredBlog.setAttribute('data-motion-bound', 'true');
    inView(
      featuredBlog,
      () => {
        const anim = animate(
          featuredBlog,
          { opacity: [0, 1], y: [16, 0], scale: [0.985, 1] },
          { duration: 0.75, easing: LUXURY_EASE }
        );
        anim.then(() => {
          featuredBlog.style.transform = '';
          featuredBlog.style.opacity = '';
          featuredBlog.classList.add('is-revealed');
        });
      },
      { amount: 0.15 }
    );
  }
}

/**
 * 3. Large Card Internal Text Reveal
 * - For prominent/large cards (Problem/Solution cards, Retainer cards, Service detail cards, Final CTA)
 * - Cascades smoothly: Badge -> Title -> Body -> Bullet list items
 */
function initLargeCardInnerMotion(): void {
  const largeCards = document.querySelectorAll<HTMLElement>(
    '.ps-card, .problem-card, .solution-card, .retainer-card, .service-detail-card, .mv-card, .final-cta-card, .contact-split-grid > *'
  );

  largeCards.forEach((card) => {
    if (card.hasAttribute('data-inner-motion-bound')) return;
    card.setAttribute('data-inner-motion-bound', 'true');

    inView(
      card,
      () => {
        // A. Badge / Top bar
        const badge = card.querySelector<HTMLElement>('.ps-badge, .service-pill, .badge, .retainer-badge, .final-cta-badge');
        if (badge) {
          animate(
            badge,
            { opacity: [0, 1], y: [8, 0] },
            { duration: 0.5, delay: 0.08, easing: LUXURY_EASE }
          );
        }

        // B. Title / Heading
        const title = card.querySelector<HTMLElement>('.ps-title, .service-title, .retainer-name, h3, h2');
        if (title) {
          animate(
            title,
            { opacity: [0, 1], y: [10, 0] },
            { duration: 0.55, delay: 0.14, easing: LUXURY_EASE }
          );
        }

        // C. Body / Description
        const body = card.querySelector<HTMLElement>('.ps-body, .service-desc, .retainer-desc, .final-cta-desc, p');
        if (body && body !== title) {
          animate(
            body,
            { opacity: [0, 1], y: [10, 0] },
            { duration: 0.55, delay: 0.20, easing: LUXURY_EASE }
          );
        }

        // D. Bullet items / Feature checklist / Deliverable pills
        const listItems = card.querySelectorAll<HTMLElement>('.ps-list li, .retainer-features li, .service-tags > *, ul > li');
        if (listItems.length > 0) {
          const a = animate(
            listItems,
            { opacity: [0, 1], y: [8, 0] },
            { duration: 0.45, delay: stagger(0.05, { start: 0.25 }), easing: LUXURY_EASE }
          );
          a.then(() => {
            listItems.forEach((li) => {
              li.style.transform = '';
              li.style.opacity = '';
            });
          });
        }
      },
      { amount: 0.15 }
    );
  });
}

/**
 * 4. Pricing Page Dedicated Motion
 * - "One-Time Projects": Desktop table rows stagger + Mobile project cards stagger
 * - "Plan Comparison Matrix": Matrix container smooth reveal
 * - "Typical Requests You Can Assign": Intro + quotes stagger + action
 * - "Systems We Manage": Small cards load one-by-one from below with smooth upward motion
 */
function initPricingMotion(): void {
  // A. One-Time Projects Table (Desktop)
  const oneTimeTable = document.querySelector<HTMLElement>('.pricing-table tbody');
  if (oneTimeTable && !oneTimeTable.hasAttribute('data-motion-bound')) {
    oneTimeTable.setAttribute('data-motion-bound', 'true');
    const rows = oneTimeTable.querySelectorAll<HTMLElement>('tr');
    if (rows.length > 0) {
      inView(
        oneTimeTable,
        () => {
          const anim = animate(
            rows,
            { opacity: [0, 1], y: [12, 0] },
            { duration: 0.5, delay: stagger(0.045, { start: 0.05 }), easing: LUXURY_EASE }
          );
          anim.then(() => {
            rows.forEach((r) => {
              r.style.transform = '';
              r.style.opacity = '';
            });
          });
        },
        { amount: 0.15 }
      );
    }
  }

  // B. One-Time Projects Cards (Mobile)
  const mobileProjCards = document.querySelector<HTMLElement>('.mobile-project-cards');
  if (mobileProjCards && !mobileProjCards.hasAttribute('data-motion-bound')) {
    mobileProjCards.setAttribute('data-motion-bound', 'true');
    const cards = mobileProjCards.querySelectorAll<HTMLElement>('.mobile-proj-card');
    if (cards.length > 0) {
      inView(
        mobileProjCards,
        () => {
          const anim = animate(
            cards,
            { opacity: [0, 1], y: [16, 0], scale: [0.985, 1] },
            { duration: 0.6, delay: stagger(0.06), easing: LUXURY_EASE }
          );
          anim.then(() => {
            cards.forEach((c) => {
              c.style.transform = '';
              c.style.opacity = '';
            });
          });
        },
        { amount: 0.12 }
      );
    }
  }

  // C. Plan Comparison Matrix
  const matrixWrapper = document.querySelector<HTMLElement>('.comparison-scroll-wrapper');
  if (matrixWrapper && !matrixWrapper.hasAttribute('data-motion-bound')) {
    matrixWrapper.setAttribute('data-motion-bound', 'true');
    inView(
      matrixWrapper,
      () => {
        const anim = animate(
          matrixWrapper,
          { opacity: [0, 1], y: [16, 0] },
          { duration: 0.7, easing: LUXURY_EASE }
        );
        anim.then(() => {
          matrixWrapper.style.transform = '';
          matrixWrapper.style.opacity = '';
        });
      },
      { amount: 0.15 }
    );
  }

  // D. Systems We Manage (Small cards load one-by-one from below)
  const systemsList = document.querySelector<HTMLElement>('.systems-list');
  if (systemsList && !systemsList.hasAttribute('data-motion-bound')) {
    systemsList.setAttribute('data-motion-bound', 'true');
    const systemCards = systemsList.querySelectorAll<HTMLElement>('.system-item-card');
    if (systemCards.length > 0) {
      inView(
        systemsList,
        () => {
          const anim = animate(
            systemCards,
            { opacity: [0, 1], y: [18, 0] },
            { duration: 0.55, delay: stagger(0.06, { start: 0.05 }), easing: LUXURY_EASE }
          );
          anim.then(() => {
            systemCards.forEach((sc) => {
              sc.style.transform = '';
              sc.style.opacity = '';
            });
          });
        },
        { amount: 0.15 }
      );
    }
  }

  // E. Typical Requests You Can Assign Card
  const requestsCard = document.querySelector<HTMLElement>('.card.requests-card');
  if (requestsCard && !requestsCard.hasAttribute('data-motion-bound')) {
    requestsCard.setAttribute('data-motion-bound', 'true');
    inView(
      requestsCard,
      () => {
        const intro = requestsCard.querySelector<HTMLElement>('.requests-intro');
        if (intro) {
          animate(
            intro,
            { opacity: [0, 1], y: [8, 0] },
            { duration: 0.5, delay: 0.05, easing: LUXURY_EASE }
          );
        }

        const quotes = requestsCard.querySelectorAll<HTMLElement>('.requests-list li');
        if (quotes.length > 0) {
          const anim = animate(
            quotes,
            { opacity: [0, 1], y: [10, 0] },
            { duration: 0.48, delay: stagger(0.045, { start: 0.12 }), easing: LUXURY_EASE }
          );
          anim.then(() => {
            quotes.forEach((q) => {
              q.style.transform = '';
              q.style.opacity = '';
            });
          });
        }

        const action = requestsCard.querySelector<HTMLElement>('.requests-action');
        if (action) {
          animate(
            action,
            { opacity: [0, 1], y: [8, 0] },
            { duration: 0.5, delay: 0.32, easing: LUXURY_EASE }
          );
        }
      },
      { amount: 0.15 }
    );
  }
}

/**
 * 5. Company Page Dedicated Motion
 * - "Who we are" & "Why InfoHQ exists" narrative cards with inner text hierarchy
 * - "Where we work" presence section
 * - India Vector Map premium animation
 */
function initCompanyMotion(): void {
  // A. Narrative Boxes ("Who we are" & "Why InfoHQ exists")
  const narrativeGrid = document.querySelector<HTMLElement>('.narrative-grid');
  if (narrativeGrid && !narrativeGrid.hasAttribute('data-motion-bound')) {
    narrativeGrid.setAttribute('data-motion-bound', 'true');
    const cols = narrativeGrid.querySelectorAll<HTMLElement>('.narrative-col');
    if (cols.length > 0) {
      inView(
        narrativeGrid,
        () => {
          // Card containers
          const anim = animate(
            cols,
            { opacity: [0, 1], y: [16, 0] },
            { duration: 0.65, delay: stagger(0.1, { start: 0.05 }), easing: LUXURY_EASE }
          );
          anim.then(() => {
            cols.forEach((col) => {
              col.style.transform = '';
              col.style.opacity = '';
            });
          });

          // Inner Headings & Paragraphs
          cols.forEach((col) => {
            const heading = col.querySelector<HTMLElement>('.col-header h2');
            if (heading) {
              animate(
                heading,
                { opacity: [0, 1], y: [10, 0] },
                { duration: 0.55, delay: 0.12, easing: LUXURY_EASE }
              );
            }

            const paras = col.querySelectorAll<HTMLElement>('.body-copy p');
            if (paras.length > 0) {
              const aParas = animate(
                paras,
                { opacity: [0, 1], y: [10, 0] },
                { duration: 0.55, delay: stagger(0.06, { start: 0.18 }), easing: LUXURY_EASE }
              );
              aParas.then(() => {
                paras.forEach((p) => {
                  p.style.transform = '';
                  p.style.opacity = '';
                });
              });
            }

            const quote = col.querySelector<HTMLElement>('.story-stand-statement');
            if (quote) {
              animate(
                quote,
                { opacity: [0, 1], y: [10, 0] },
                { duration: 0.55, delay: 0.32, easing: LUXURY_EASE }
              );
            }
          });
        },
        { amount: 0.15 }
      );
    }
  }

  // B. "Where we work" Presence & India Vector Map
  const presenceGrid = document.querySelector<HTMLElement>('.presence-grid');
  if (presenceGrid && !presenceGrid.hasAttribute('data-motion-bound')) {
    presenceGrid.setAttribute('data-motion-bound', 'true');
    inView(
      presenceGrid,
      () => {
        // Presence header
        const pHeader = presenceGrid.querySelector<HTMLElement>('.presence-header');
        if (pHeader) {
          animate(
            pHeader,
            { opacity: [0, 1], y: [12, 0] },
            { duration: 0.6, easing: LUXURY_EASE }
          );
        }

        // Headquarters card
        const hqCard = presenceGrid.querySelector<HTMLElement>('.hq-card');
        if (hqCard) {
          animate(
            hqCard,
            { opacity: [0, 1], y: [16, 0], scale: [0.985, 1] },
            { duration: 0.65, delay: 0.1, easing: LUXURY_EASE }
          );
        }

        // Service Area delivery card
        const deliveryCard = presenceGrid.querySelector<HTMLElement>('.delivery-card');
        if (deliveryCard) {
          animate(
            deliveryCard,
            { opacity: [0, 1], y: [16, 0], scale: [0.985, 1] },
            { duration: 0.65, delay: 0.18, easing: LUXURY_EASE }
          );

          // Stats boxes stagger
          const statBoxes = deliveryCard.querySelectorAll<HTMLElement>('.stats-row .stat-box');
          if (statBoxes.length > 0) {
            const aStats = animate(
              statBoxes,
              { opacity: [0, 1], y: [10, 0] },
              { duration: 0.5, delay: stagger(0.07, { start: 0.28 }), easing: LUXURY_EASE }
            );
            aStats.then(() => {
              statBoxes.forEach((sb) => {
                sb.style.transform = '';
                sb.style.opacity = '';
              });
            });
          }
        }

        // India Map Graphic (Premium reveal: gentle scale + soft lift + continuous signal beams)
        const mapWrapper = presenceGrid.querySelector<HTMLElement>('.india-map-wrapper');
        if (mapWrapper) {
          const aMap = animate(
            mapWrapper,
            { opacity: [0, 1], scale: [0.965, 1], y: [16, 0] },
            { duration: 0.85, delay: 0.15, easing: LUXURY_EASE }
          );
          aMap.then(() => {
            mapWrapper.style.transform = '';
            mapWrapper.style.opacity = '';
          });
        }
      },
      { amount: 0.15 }
    );
  }
}

/**
 * 6. Site-Wide FAQ Cards Motion
 * - Unifies all FAQ accordions across the entire website
 * - Cards cascade gracefully with soft spatial lift
 */
function initFaqMotion(): void {
  const faqContainers = document.querySelectorAll<HTMLElement>(
    '.faq-accordion, .faq-accordion-list, .faq-container'
  );

  faqContainers.forEach((container) => {
    if (container.hasAttribute('data-motion-bound')) return;
    container.setAttribute('data-motion-bound', 'true');

    const items = container.querySelectorAll<HTMLElement>('.faq-item, .faq-accordion-item');
    if (!items.length) return;

    inView(
      container,
      () => {
        const anim = animate(
          items,
          { opacity: [0, 1], y: [12, 0] },
          { duration: 0.5, delay: stagger(0.045, { start: 0.04 }), easing: LUXURY_EASE }
        );
        anim.then(() => {
          items.forEach((item) => {
            item.style.transform = '';
            item.style.opacity = '';
          });
        });
      },
      { amount: 0.12 }
    );
  });
}

/**
 * 7. Footer Reveal Motion
 * - Staggers footer brand block, services, company links, and contacts
 * - Bottom credits bar softly lifts into place
 */
function initFooterMotion(): void {
  const footer = document.querySelector<HTMLElement>('#site-footer, .infohq-footer');
  if (!footer || footer.hasAttribute('data-motion-bound')) return;
  footer.setAttribute('data-motion-bound', 'true');

  inView(
    footer,
    () => {
      // Main columns
      const cols = footer.querySelectorAll<HTMLElement>(
        '.footer-brand-col, .footer-nav-col, .footer-contact-box-col'
      );
      if (cols.length > 0) {
        const aCols = animate(
          cols,
          { opacity: [0, 1], y: [16, 0] },
          { duration: 0.65, delay: stagger(0.08, { start: 0.05 }), easing: LUXURY_EASE }
        );
        aCols.then(() => {
          cols.forEach((col) => {
            col.style.transform = '';
            col.style.opacity = '';
          });
        });
      }

      // Bottom bar
      const bottom = footer.querySelector<HTMLElement>('.footer-bottom, .footer-bottom-inner');
      if (bottom) {
        animate(
          bottom,
          { opacity: [0, 1], y: [10, 0] },
          { duration: 0.6, delay: 0.32, easing: LUXURY_EASE }
        );
      }
    },
    { amount: 0.12 }
  );
}

/**
 * 8. Soft Directional Scroll Reveal
 * - Soft directional reveal (Left: -16px, Right: 16px, Up: 16px)
 * - Section headers and category headers
 */
function initScrollReveal(): void {
  // A. Reveal Left
  const leftElements = document.querySelectorAll<HTMLElement>('[data-motion="reveal-left"], .reveal-left');
  leftElements.forEach((el) => {
    if (el.hasAttribute('data-motion-bound')) return;
    el.setAttribute('data-motion-bound', 'true');

    inView(
      el,
      () => {
        const anim = animate(
          el,
          { opacity: [0, 1], x: [-16, 0] },
          { duration: 0.65, easing: LUXURY_EASE }
        );
        anim.then(() => {
          el.style.transform = '';
          el.style.opacity = '';
          el.classList.add('is-revealed');
        });
      },
      { amount: 0.15 }
    );
  });

  // B. Reveal Right
  const rightElements = document.querySelectorAll<HTMLElement>('[data-motion="reveal-right"], .reveal-right');
  rightElements.forEach((el) => {
    if (el.hasAttribute('data-motion-bound')) return;
    el.setAttribute('data-motion-bound', 'true');

    inView(
      el,
      () => {
        const anim = animate(
          el,
          { opacity: [0, 1], x: [16, 0] },
          { duration: 0.65, easing: LUXURY_EASE }
        );
        anim.then(() => {
          el.style.transform = '';
          el.style.opacity = '';
          el.classList.add('is-revealed');
        });
      },
      { amount: 0.15 }
    );
  });

  // C. Split Section Reveal
  const splitSections = document.querySelectorAll<HTMLElement>('[data-motion="scroll-split"], .ps-grid');
  splitSections.forEach((section) => {
    if (section.hasAttribute('data-motion-bound')) return;
    section.setAttribute('data-motion-bound', 'true');

    const leftCol = section.querySelector<HTMLElement>('[data-motion="split-left"]') || (section.children[0] as HTMLElement);
    const rightCol = section.querySelector<HTMLElement>('[data-motion="split-right"]') || (section.children[1] as HTMLElement);

    inView(
      section,
      () => {
        if (leftCol) {
          const a1 = animate(
            leftCol,
            { opacity: [0, 1], x: [-16, 0] },
            { duration: 0.65, easing: LUXURY_EASE }
          );
          a1.then(() => {
            leftCol.style.transform = '';
            leftCol.style.opacity = '';
          });
        }
        if (rightCol) {
          const a2 = animate(
            rightCol,
            { opacity: [0, 1], x: [16, 0] },
            { duration: 0.65, delay: 0.08, easing: LUXURY_EASE }
          );
          a2.then(() => {
            rightCol.style.transform = '';
            rightCol.style.opacity = '';
          });
        }
      },
      { amount: 0.15 }
    );
  });

  // D. Section Headers Reveal Up
  const upElements = document.querySelectorAll<HTMLElement>(
    '[data-motion="reveal-up"], .section-header, .final-cta-card, .category-header'
  );
  upElements.forEach((el) => {
    if (el.hasAttribute('data-motion-bound')) return;
    el.setAttribute('data-motion-bound', 'true');

    inView(
      el,
      () => {
        const anim = animate(
          el,
          { opacity: [0, 1], y: [16, 0] },
          { duration: 0.65, easing: LUXURY_EASE }
        );
        anim.then(() => {
          el.style.transform = '';
          el.style.opacity = '';
          el.classList.add('is-revealed');
        });
      },
      { amount: 0.15 }
    );
  });
}
