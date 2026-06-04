"use client";

import { useEffect, useRef, useState } from "react";
import "@/styles/landing-page.css";

function GooglePlayButton() {
  return (
    <a
      href="#"
      className="google-play-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
    >
      <svg
        className="google-play-icon"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.6 3.8c-.2.2-.3.5-.3.8v22.8c0 .3.1.6.3.8l.3.3L18 16 4.9 3.5l-.3.3z" fill="#EA4335" />
        <path d="M22.5 12.5L6.5 2.2c-.4-.2-.8-.2-1.1.1l13 13 4.1-2.8z" fill="#FBBC04" />
        <path d="M22.5 19.5l-4.1-2.8-12.9 13c.3.3.7.3 1.1.1l16-10.3z" fill="#34A853" />
        <path d="M26.3 14.3l-3.8-2.5-4.3 3 4.3 3 3.8-2.5c.8-.5.8-1.5 0-2z" fill="#4285F4" />
      </svg>
      <div className="google-play-text">
        <span className="google-play-label">GET IT ON</span>
        <span className="google-play-store">Google Play</span>
      </div>
    </a>
  );
}

const ITEM_LIST_DATA = [
  {
    id: 1,
    icon: "🛒",
    title: "Kos Bareng",
    date: "4 Juni 2025 - 16:50",
    amount: "Rp 1,000,000",
    items: "6 Item",
  },
  {
    id: 2,
    icon: "☕",
    title: "Kaffe Latte Shop",
    date: "4 Juni 2025 - 16:50",
    amount: "Rp 159,000",
    items: "6 Item",
  },
  {
    id: 3,
    icon: "🏠",
    title: "Kos Bareng",
    date: "4 Juni 2025 - 16:50",
    amount: "Rp 450,000",
    items: "6 Item",
  },
];

function LiveItemList() {
  const [revealedCount, setRevealedCount] = useState(ITEM_LIST_DATA.length);
  const [zoomed, setZoomed] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timersRef = useRef<number[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  const handleMouseEnter = () => {
    clearTimers();
    setAnimating(true);
    setZoomed(false);
    setRevealedCount(0);

    ITEM_LIST_DATA.forEach((_, index) => {
      const t = window.setTimeout(() => {
        setRevealedCount(index + 1);
      }, 180 * (index + 1));
      timersRef.current.push(t);
    });

    const zoomTimer = window.setTimeout(() => {
      setZoomed(true);
    }, 180 * ITEM_LIST_DATA.length + 250);
    timersRef.current.push(zoomTimer);
  };

  const handleMouseLeave = () => {
    clearTimers();
    setAnimating(false);
    setZoomed(false);
    setRevealedCount(ITEM_LIST_DATA.length);
  };

  useEffect(() => () => clearTimers(), []);

  return (
    <div
      className={`live-item-list${zoomed ? " zoomed" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="live-item-list-inner">
        {ITEM_LIST_DATA.map((row, index) => (
          <div
            key={row.id}
            className={`live-list-row${index < revealedCount ? " revealed" : ""}${animating ? " animating" : ""}`}
          >
            <div className="live-list-icon">{row.icon}</div>
            <div className="live-list-info">
              <span className="live-list-title">{row.title}</span>
              <span className="live-list-date">{row.date}</span>
            </div>
            <div className="live-list-amount">
              <span className="live-list-price">{row.amount}</span>
              <span className="live-list-items">{row.items}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CloudBackground() {
  return (
    <div className="live-clouds" aria-hidden="true">
      <img src="/landing/cloud1.png" className="cloud cloud-bottom" alt="" />
      <img src="/landing/cloud1.png" className="cloud cloud-top" alt="" />
      <img src="/landing/cloud1.png" className="cloud cloud-mid" alt="" />
      <img src="/landing/cloud2.png" className="cloud cloud-tr" alt="" />
      <img src="/landing/cloud3.png" className="cloud cloud-tl" alt="" />
    </div>
  );
}

const PAYMENT_ROWS = [
  { id: 1, label: "Subtotal", target: 150000 },
  { id: 2, label: "PPN(11%)", target: 15000 },
];
const PAYMENT_TOTAL = 155000;
const PAYMENT_HEADER_AMOUNT = 150000;

const formatRp = (n: number) =>
  `Rp ${Math.round(n).toLocaleString("id-ID")}`;

function LivePaymentCard() {
  const [headerVal, setHeaderVal] = useState(PAYMENT_HEADER_AMOUNT);
  const [rowVals, setRowVals] = useState(PAYMENT_ROWS.map((r) => r.target));
  const [totalVal, setTotalVal] = useState(PAYMENT_TOTAL);
  const [zoomed, setZoomed] = useState(false);
  const rafRef = useRef<number | null>(null);
  const timersRef = useRef<number[]>([]);

  const clearAll = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  const countUp = (
    target: number,
    duration: number,
    onUpdate: (v: number) => void,
    onDone?: () => void
  ) => {
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      onUpdate(target * eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        onUpdate(target);
        onDone?.();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const handleMouseEnter = () => {
    clearAll();
    setZoomed(false);
    setHeaderVal(0);
    setRowVals(PAYMENT_ROWS.map(() => 0));
    setTotalVal(0);

    countUp(PAYMENT_HEADER_AMOUNT, 600, (v) => setHeaderVal(v), () => {
      PAYMENT_ROWS.forEach((row, i) => {
        const t = window.setTimeout(() => {
          countUp(row.target, 450, (v) =>
            setRowVals((prev) => {
              const next = [...prev];
              next[i] = v;
              return next;
            })
          );
        }, 200 * i);
        timersRef.current.push(t);
      });

      const totalDelay = 200 * PAYMENT_ROWS.length + 150;
      const totalTimer = window.setTimeout(() => {
        countUp(PAYMENT_TOTAL, 550, (v) => setTotalVal(v), () =>
          setZoomed(true)
        );
      }, totalDelay);
      timersRef.current.push(totalTimer);
    });
  };

  const handleMouseLeave = () => {
    clearAll();
    setZoomed(false);
    setHeaderVal(PAYMENT_HEADER_AMOUNT);
    setRowVals(PAYMENT_ROWS.map((r) => r.target));
    setTotalVal(PAYMENT_TOTAL);
  };

  useEffect(() => () => clearAll(), []);

  return (
    <div
      className={`live-payment-card${zoomed ? " zoomed" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="payment-header">
        <div className="payment-store-icon">
          <img src="/landing/icon-bag.svg" alt="" />
        </div>
        <div className="payment-store-info">
          <span className="payment-store-name">Superindo</span>
          <span className="payment-store-amount">
            {formatRp(headerVal)}
          </span>
        </div>
      </div>

      <div className="payment-body">
        <h4 className="payment-body-title">Rincian Pembayaran</h4>

        {PAYMENT_ROWS.map((row, i) => (
          <div key={row.id} className="payment-row">
            <span className="payment-row-label">{row.label}</span>
            <span className="payment-row-value">
              {formatRp(rowVals[i])}
            </span>
          </div>
        ))}

        <div className="payment-row payment-row-total">
          <span className="payment-row-label">Total</span>
          <span className="payment-row-value">{formatRp(totalVal)}</span>
        </div>
      </div>
    </div>
  );
}

const SUMMARY_AVATARS = [
  "/landing/avatar1.png",
  "/landing/avatar2.png",
  "/landing/avatar3.png",
  "/landing/avatar4.png",
  "/landing/avatar5.png",
  "/landing/avatar6.png",
  "/landing/avatar7.png",
];
const SUMMARY_RECEIVABLE = 100000;

function LiveSummaryCard() {
  const [zoomed, setZoomed] = useState(false);
  const [headerIn, setHeaderIn] = useState(true);
  const [avatarCount, setAvatarCount] = useState(SUMMARY_AVATARS.length);
  const [moreIn, setMoreIn] = useState(true);
  const [receivableVal, setReceivableVal] = useState(SUMMARY_RECEIVABLE);
  const rafRef = useRef<number | null>(null);
  const timersRef = useRef<number[]>([]);

  const clearAll = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  const countUp = (
    target: number,
    duration: number,
    onUpdate: (v: number) => void,
    onDone?: () => void
  ) => {
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      onUpdate(target * eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        onUpdate(target);
        onDone?.();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const handleMouseEnter = () => {
    clearAll();
    setZoomed(false);
    setHeaderIn(false);
    setAvatarCount(0);
    setMoreIn(false);
    setReceivableVal(0);

    const headerTimer = window.setTimeout(() => setHeaderIn(true), 120);
    timersRef.current.push(headerTimer);

    SUMMARY_AVATARS.forEach((_, i) => {
      const t = window.setTimeout(() => {
        setAvatarCount(i + 1);
      }, 300 + 110 * i);
      timersRef.current.push(t);
    });

    const moreTimer = window.setTimeout(() => {
      setMoreIn(true);
    }, 300 + 110 * SUMMARY_AVATARS.length);
    timersRef.current.push(moreTimer);

    const countTimer = window.setTimeout(() => {
      countUp(SUMMARY_RECEIVABLE, 600, (v) => setReceivableVal(v), () =>
        setZoomed(true)
      );
    }, 300 + 110 * SUMMARY_AVATARS.length + 200);
    timersRef.current.push(countTimer);
  };

  const handleMouseLeave = () => {
    clearAll();
    setZoomed(false);
    setHeaderIn(true);
    setAvatarCount(SUMMARY_AVATARS.length);
    setMoreIn(true);
    setReceivableVal(SUMMARY_RECEIVABLE);
  };

  useEffect(() => () => clearAll(), []);

  const formatGreen = (n: number) =>
    `+Rp ${Math.round(n).toLocaleString("id-ID")}`;

  return (
    <div
      className={`live-summary-card${zoomed ? " zoomed" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`summary-top${headerIn ? " in" : ""}`}>
        <div className="summary-top-icon">🏃</div>
        <div className="summary-top-info">
          <span className="summary-top-title">Kos Bareng</span>
          <span className="summary-top-meta">
            4 Juni 2025 16:50 · 6 Anggota
          </span>
        </div>
        <div className="summary-top-amount">
          <span className="summary-top-price">Rp 1,000,000</span>
          <span className="summary-top-items">6 Item</span>
        </div>
      </div>

      <div className="summary-bottom">
        <div className="summary-receivable">
          <span className="summary-receivable-label">Piutang</span>
          <span className="summary-receivable-amount">
            {formatGreen(receivableVal)}
          </span>
        </div>
        <div className="summary-avatars">
          {SUMMARY_AVATARS.map((src, i) => (
            <img
              key={i}
              src={src}
              className={`summary-avatar${i < avatarCount ? " in" : ""}`}
              alt=""
            />
          ))}
          <span className={`summary-avatar-more${moreIn ? " in" : ""}`}>
            +3
          </span>
        </div>
      </div>
    </div>
  );
}

export function LandingPage() {
  const stepCardsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setHeroLoaded(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".step-card");
            cards.forEach((card) => {
              card.classList.add("animate-in");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (stepCardsRef.current) {
      observer.observe(stepCardsRef.current);
    }

    return () => {
      if (stepCardsRef.current) {
        observer.unobserve(stepCardsRef.current);
      }
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section
        className={`hero-section${heroLoaded ? " hero-loaded" : ""}`}
      >
        <div className="hero-video-bg">
          <img src="/landing/video-bg.png" alt="" />
        </div>

        <div className="hero-top-gradient" />
        <div className="hero-gradient-overlay" />

        {/* Navigation */}
        <nav className="nav-bar">
          <div className="flex items-center gap-[11px]">
            <img
              src="/landing/logo-full.png"
              alt="Kevly"
              className="logo-full"
            />
          </div>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#use-cases">Use Cases</a>
          </div>

          <button className="nav-cta">Learn More</button>
        </nav>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="tag">
            <img
              src="/landing/icon-sparkle.svg"
              alt=""
              className="tag-icon"
            />
            <span className="tag-text">
              Built for daily spending and clean splitting
            </span>
          </div>

          <h1 className="hero-title">
            Track your spending. Split it cleanly.
          </h1>

          <p className="hero-subtitle">
            Kevly helps you record personal and shared expenses, calculate
            fair splits, and see who paid what with more clarity.
          </p>

          <div className="hero-buttons">
            <GooglePlayButton />
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>

        {/* Phone Mockups */}
        <div className="phone-mockups">
          <div className="phone-side-left" aria-hidden="true" />
          <div className="phone-side-right" aria-hidden="true" />
          <div className="phone-bottom-fill" aria-hidden="true" />
          <div className="phone-mockups-inner">
            <div className="phone-device left">
              <div className="phone-inner">
                <div className="phone-shadow" />
                <div className="phone-screen">
                  <img src="/landing/screenshot1.png" alt="App screenshot" />
                </div>
                <img
                  src="/landing/iphone-frame.png"
                  alt=""
                  className="phone-frame"
                />
              </div>
            </div>

            <div className="phone-device center">
              <div className="phone-inner">
                <div className="phone-shadow" />
                <div className="phone-screen">
                  <img src="/landing/screenshot3.png" alt="App screenshot" />
                </div>
                <img
                  src="/landing/iphone-frame.png"
                  alt=""
                  className="phone-frame"
                />
              </div>
            </div>

            <div className="phone-device right">
              <div className="phone-inner">
                <div className="phone-shadow" />
                <div className="phone-screen">
                  <img src="/landing/screenshot2.png" alt="App screenshot" />
                </div>
                <img
                  src="/landing/iphone-frame.png"
                  alt=""
                  className="phone-frame"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="features-section"
        id="features"
        ref={featuresRef}
      >
        <div className="section-header">
          <div className="section-title-group">
            <div className="tag">
              <img
                src="/landing/icon-sparkle.svg"
                alt=""
                className="tag-icon"
              />
              <span className="tag-text">Feature</span>
            </div>

            <h2 className="section-title">
              Everything you need to manage shared expenses
            </h2>

            <p className="section-subtitle">
              From personal records to split bills, Kevly keeps expense
              tracking simple, visual, and easy to follow.
            </p>
          </div>

          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon warning">
                <img src="/landing/icon-car.svg" alt="" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Personal Ledger</h3>
                <p className="feature-description">
                  Track your daily income and expenses in a clean view that
                  is easy to understand.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon danger">
                <img src="/landing/icon-gavel.svg" alt="" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Easy Split</h3>
                <p className="feature-description">
                  Split with multiple people without calculating everything
                  manually.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon success">
                <img src="/landing/icon-kanban.svg" alt="" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Shared Expense</h3>
                <p className="feature-description">
                  See who paid, who joined, and how much each person needs
                  to cover.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon pink">
                <img src="/landing/icon-wallet.svg" alt="" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Clean History</h3>
                <p className="feature-description">
                  Keep every transaction history in one place, ready to
                  check whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="how-it-works" id="how-it-works">
          <div className="section-title-group">
            <div className="tag">
              <img
                src="/landing/icon-sparkle.svg"
                alt=""
                className="tag-icon"
              />
              <span className="tag-text">How it works</span>
            </div>

            <h2 className="section-title">
              From transaction to split in just a few steps
            </h2>

            <p className="section-subtitle">
              Kevly makes recording and splitting expenses feel natural,
              without the heavy format of spreadsheets.
            </p>
          </div>

          <div className="step-cards" ref={stepCardsRef}>
            <div className="step-card">
              <div className="step-screen step-screen-live">
                <CloudBackground />
                <LiveItemList />
              </div>

              <div className="step-info">
                <div className="step-header">
                  <div className="step-number">1</div>
                  <h3 className="step-title">Add a transaction</h3>
                </div>
                <p className="step-description">
                  Enter the amount, category, date, and transaction note.
                </p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-screen step-screen-live">
                <CloudBackground />
                <LivePaymentCard />
              </div>

              <div className="step-info">
                <div className="step-header">
                  <div className="step-number">2</div>
                  <h3 className="step-title">Choose who is involved</h3>
                </div>
                <p className="step-description">
                  Add the people who are part of the transaction.
                </p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-screen step-screen-live">
                <CloudBackground />
                <LiveSummaryCard />
              </div>

              <div className="step-info">
                <div className="step-header">
                  <div className="step-number">3</div>
                  <h3 className="step-title">
                    Review the payment summary
                  </h3>
                </div>
                <p className="step-description">
                  See who needs to pay what through a clear summary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="flex items-center gap-[11px]">
              <img
                src="/landing/logo-footer.png"
                alt="Kevly"
                className="logo-full"
              />
            </div>
            <p className="footer-tagline">
              A simple personal ledger for cleaner spending and smarter
              splitting.
            </p>
          </div>

          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#use-cases">Use Cases</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
