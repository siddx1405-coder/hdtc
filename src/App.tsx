import { createElement, useState, type ReactNode } from "react";
import storefront from "./assets/shop/storefront.png";
import heatGun from "./assets/shop/heat-gun.png";
import powerExtension from "./assets/shop/power-extension.png";
import laserMeter from "./assets/shop/laser-meter-main.png";
import angleGrinder from "./assets/shop/angle-grinder.png";
import pvcWelder from "./assets/shop/pvc-welder.png";

type Language = "en" | "ar";
type IconName =
  | "arrow"
  | "check"
  | "delivery"
  | "location"
  | "mail"
  | "phone"
  | "tools"
  | "whatsapp";

const copy = {
  en: {
    nav: ["Home", "Products", "Services", "Contact"],
    shopNow: "Explore products",
    getQuote: "Get a quote",
    eyebrow: "Building better, from the ground up",
    title: "Materials you trust. Work that lasts.",
    intro:
      "Reliable building materials, professional tools, and experienced contracting services—all under one roof in Muaither.",
    delivery: "Free home delivery",
    deliveryDetail: "On orders of QAR 99 and above",
    categoriesTitle: "Everything your project needs",
    categoriesIntro:
      "From everyday site essentials to specialist power tools, we help professionals and homeowners get the job done right.",
    categories: [
      ["Building Materials", "Cement, boards, pipes, fittings and project essentials."],
      ["Tools & Hardware", "Reliable hand tools and power tools for every trade."],
      ["Electrical & Plumbing", "Quality fixtures, accessories and installation supplies."],
      ["Contracting Works", "Practical, dependable support for construction and maintenance."],
    ],
    productsEyebrow: "Featured in store",
    productsTitle: "Professional tools, ready for work",
    productsIntro: "Visit our Muaither shop for availability, advice, and competitive pricing.",
    enquire: "Enquire on WhatsApp",
    serviceEyebrow: "Why Holy Dream",
    serviceTitle: "Built around your project",
    serviceIntro:
      "Whether you need one fitting or materials for a complete job, our team keeps things simple, quick, and dependable.",
    benefits: [
      ["Guaranteed quality", "Products selected for strength, performance, and long-term value."],
      ["Competitive pricing", "Practical options for homeowners, tradespeople, and contractors."],
      ["Helpful service", "Straightforward product support from a team that understands the work."],
      ["Fast delivery", "Free home delivery on qualifying orders of QAR 99 and above."],
    ],
    visitEyebrow: "Visit our shop",
    visitTitle: "Your local building materials partner",
    visitIntro:
      "Find us in Muaither for building supplies, tools, plumbing, electrical products, and contracting enquiries.",
    directions: "Open in Google Maps",
    call: "Call the shop",
    contact: "Contact",
    address: "Muaither, Umm Al Dome, Doha, Qatar",
    hours: "Speak with our team for product availability and delivery.",
    footerLine: "Trading, building materials & contracting",
    rights: "Holy Dream Trading and Contracting. All rights reserved.",
    arabic: "العربية",
  },
  ar: {
    nav: ["الرئيسية", "المنتجات", "الخدمات", "تواصل معنا"],
    shopNow: "استكشف المنتجات",
    getQuote: "اطلب عرض سعر",
    eyebrow: "نبني الأفضل من الأساس",
    title: "مواد تثق بها، وعمل يدوم.",
    intro:
      "مواد بناء موثوقة، أدوات احترافية، وخدمات مقاولات بخبرة—كل ما تحتاجه تحت سقف واحد في معيذر.",
    delivery: "توصيل منزلي مجاني",
    deliveryDetail: "للطلبات بقيمة 99 ر.ق فأكثر",
    categoriesTitle: "كل ما يحتاجه مشروعك",
    categoriesIntro:
      "من مستلزمات الموقع اليومية إلى الأدوات الكهربائية المتخصصة، نساعد المحترفين وأصحاب المنازل على إنجاز العمل بإتقان.",
    categories: [
      ["مواد البناء", "أسمنت، ألواح، أنابيب، وصلات ومستلزمات المشاريع."],
      ["الأدوات والعدد", "أدوات يدوية وكهربائية موثوقة لكل حرفة."],
      ["الكهرباء والسباكة", "تركيبات وإكسسوارات ومستلزمات عالية الجودة."],
      ["أعمال المقاولات", "دعم عملي وموثوق لأعمال البناء والصيانة."],
    ],
    productsEyebrow: "متوفر في المتجر",
    productsTitle: "أدوات احترافية جاهزة للعمل",
    productsIntro: "زوروا متجرنا في معيذر لمعرفة التوفر والحصول على النصيحة والأسعار التنافسية.",
    enquire: "استفسر عبر واتساب",
    serviceEyebrow: "لماذا هولي دريم",
    serviceTitle: "كل ما نقدمه يدعم مشروعك",
    serviceIntro:
      "سواء كنت تحتاج قطعة واحدة أو مواد لمشروع كامل، فريقنا يجعل تجربتك سهلة وسريعة وموثوقة.",
    benefits: [
      ["جودة مضمونة", "منتجات مختارة للقوة والأداء والقيمة طويلة الأمد."],
      ["أسعار تنافسية", "خيارات عملية لأصحاب المنازل والفنيين والمقاولين."],
      ["خدمة متعاونة", "دعم واضح من فريق يفهم احتياجات العمل."],
      ["توصيل سريع", "توصيل منزلي مجاني للطلبات المؤهلة بقيمة 99 ر.ق فأكثر."],
    ],
    visitEyebrow: "زوروا متجرنا",
    visitTitle: "شريكك المحلي لمواد البناء",
    visitIntro:
      "تجدوننا في معيذر لمواد البناء والأدوات ومنتجات السباكة والكهرباء واستفسارات المقاولات.",
    directions: "افتح في خرائط جوجل",
    call: "اتصل بالمتجر",
    contact: "التواصل",
    address: "معيذر، أم الدوم، الدوحة، قطر",
    hours: "تواصل مع فريقنا لمعرفة توفر المنتجات وخدمة التوصيل.",
    footerLine: "تجارة، مواد بناء ومقاولات",
    rights: "هولي دريم للتجارة والمقاولات. جميع الحقوق محفوظة.",
    arabic: "English",
  },
};

const products = [
  { image: laserMeter, name: "Dingqi 60M Laser Meter", category: "Measuring Tools" },
  { image: angleGrinder, name: "Dingqi Cordless Angle Grinder", category: "Power Tools" },
  { image: pvcWelder, name: "Dingqi PVC Welding Machine", category: "Plumbing Tools" },
  { image: heatGun, name: "Dingqi 2000W Heat Gun", category: "Power Tools" },
  { image: powerExtension, name: "Veban Multi-Socket Extension", category: "Electrical" },
];

function ActionLink({
  children,
  className = "",
  href,
  icon,
}: {
  children: ReactNode;
  className?: string;
  href: string;
  icon?: IconName;
}) {
  const isExternal = href.startsWith("http");
  return createElement(
    "a",
    {
      className: `action-link ${className}`,
      href,
      target: isExternal ? "_blank" : undefined,
      rel: isExternal ? "noreferrer" : undefined,
    },
    children,
    icon ? <Icon name={icon} /> : null,
  );
}

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    delivery: <><path d="M10 17h4V5H2v12h3" /><path d="M14 9h4l4 4v4h-3" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="16.5" cy="17.5" r="2.5" /></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L9.1 10.8a16 16 0 0 0 4.1 4.1l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
    tools: <><path d="m14.7 6.3 3-3a5 5 0 0 1-6.4 6.4l-7.6 7.6a2.1 2.1 0 0 0 3 3l7.6-7.6a5 5 0 0 1 6.4-6.4l-3 3Z" /></>,
    whatsapp: <><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.6 9.6 0 0 1-4.1-1.1L3 20l1.2-4.7A8.6 8.6 0 1 1 21 11.5Z" /><path d="M8.2 7.9c.4 3 2.3 5 5.3 5.9" /></>,
  };
  return <svg aria-hidden="true" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Heading({ children, className = "", level = 2 }: { children: ReactNode; className?: string; level?: number }) {
  return <div className={className} role="heading" aria-level={level}>{children}</div>;
}

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];
  const isArabic = language === "ar";
  const whatsappUrl = "https://wa.me/97455870450";

  return (
    <div className="site-shell" dir={isArabic ? "rtl" : "ltr"}>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>CR NO. 208450</span>
          <span className="topbar-note">{t.delivery} · QAR 99+</span>
          <span>MUAITHER · QATAR</span>
        </div>
      </div>

      <header className="nav-wrap">
        <div className="container nav">
          <div className="brand" role="heading" aria-level={1}>
            <span className="brand-mark"><Icon name="tools" /></span>
            <span className="brand-copy">
              <strong>HOLY <b>DREAM</b></strong>
              <small>TRADING & CONTRACTING</small>
            </span>
          </div>
          <nav className="nav-links" aria-label="Main navigation">
            {t.nav.map((item, index) => (
              <ActionLink href={["#home", "#products", "#services", "#contact"][index]} className="nav-link" key={item}>{item}</ActionLink>
            ))}
          </nav>
          <div className="nav-actions">
            <div className="language-toggle" role="button" tabIndex={0} onClick={() => setLanguage(isArabic ? "en" : "ar")} onKeyDown={(event) => event.key === "Enter" && setLanguage(isArabic ? "en" : "ar")}>
              <span>{isArabic ? "EN" : "ع"}</span> {t.arabic}
            </div>
            <ActionLink href={whatsappUrl} className="button button-dark"><Icon name="whatsapp" /> WhatsApp</ActionLink>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-image" src={storefront} alt="Holy Dream Trading and Contracting storefront in Muaither" />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><span />{t.eyebrow}</div>
              <Heading className="hero-title" level={2}>{t.title}</Heading>
              <p className="hero-intro">{t.intro}</p>
              <div className="hero-actions">
                <ActionLink href="#products" className="button button-orange">{t.shopNow}<Icon name="arrow" /></ActionLink>
                <ActionLink href={whatsappUrl} className="button button-ghost">{t.getQuote}</ActionLink>
              </div>
            </div>
          </div>
          <div className="container delivery-card">
            <span className="delivery-icon"><Icon name="delivery" /></span>
            <span><strong>{t.delivery}</strong><small>{t.deliveryDetail}</small></span>
            <span className="delivery-arrow"><Icon name="arrow" /></span>
          </div>
        </section>

        <section className="section categories" id="services">
          <div className="container">
            <div className="section-heading split-heading">
              <Heading className="section-title">{t.categoriesTitle}</Heading>
              <p>{t.categoriesIntro}</p>
            </div>
            <div className="category-grid">
              {t.categories.map(([name, description], index) => (
                <article className="category-card" key={name}>
                  <span className="category-number">0{index + 1}</span>
                  <span className="category-icon"><Icon name={index === 3 ? "tools" : index === 2 ? "delivery" : "check"} /></span>
                  <Heading className="card-title" level={3}>{name}</Heading>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading centered">
              <div className="eyebrow dark"><span />{t.productsEyebrow}</div>
              <Heading className="section-title">{t.productsTitle}</Heading>
              <p>{t.productsIntro}</p>
            </div>
            <div className="product-grid">
              {products.map((product, index) => (
                <article className={`product-card ${index === 0 ? "product-featured" : ""}`} key={product.name}>
                  <div className="product-image-wrap">
                    <img src={product.image} alt={product.name} />
                    {index === 0 && <span className="product-badge">Popular</span>}
                  </div>
                  <div className="product-copy">
                    <small>{product.category}</small>
                    <Heading className="product-name" level={3}>{product.name}</Heading>
                    <ActionLink href={`${whatsappUrl}?text=${encodeURIComponent(`Hello, I would like to enquire about the ${product.name}.`)}`} className="text-link">
                      {t.enquire}<Icon name="arrow" />
                    </ActionLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why-section">
          <div className="container why-grid">
            <div className="why-visual">
              <img src={heatGun} alt="Professional Dingqi heat gun available at Holy Dream" />
              <div className="quality-stamp"><strong>100%</strong><span>QUALITY<br />FOCUSED</span></div>
            </div>
            <div className="why-copy">
              <div className="eyebrow light"><span />{t.serviceEyebrow}</div>
              <Heading className="section-title light-title">{t.serviceTitle}</Heading>
              <p className="why-intro">{t.serviceIntro}</p>
              <div className="benefit-list">
                {t.benefits.map(([name, description]) => (
                  <div className="benefit" key={name}>
                    <span className="benefit-check"><Icon name="check" /></span>
                    <span><strong>{name}</strong><small>{description}</small></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="eyebrow dark"><span />{t.visitEyebrow}</div>
              <Heading className="section-title">{t.visitTitle}</Heading>
              <p>{t.visitIntro}</p>
              <div className="contact-details">
                <div><span><Icon name="location" /></span><p><strong>{t.address}</strong><small>{t.hours}</small></p></div>
                <div><span><Icon name="phone" /></span><p><strong>+974 5008 9701</strong><small>WhatsApp: +974 5587 0450</small></p></div>
                <div><span><Icon name="mail" /></span><p><strong>holydream24@gmail.com</strong><small>CR No. 208450</small></p></div>
              </div>
              <div className="contact-actions">
                <ActionLink href="https://maps.google.com/?q=25.272409,51.407940" className="button button-orange"><Icon name="location" />{t.directions}</ActionLink>
                <ActionLink href="tel:+97450089701" className="button button-outline"><Icon name="phone" />{t.call}</ActionLink>
              </div>
            </div>
            <div className="location-card">
              <img src={storefront} alt="Holy Dream shop front" />
              <div className="location-pin"><Icon name="location" /></div>
              <div className="location-label"><small>HOLY DREAM</small><strong>Muaither, Doha</strong></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-top">
          <div className="brand footer-brand">
            <span className="brand-mark"><Icon name="tools" /></span>
            <span className="brand-copy"><strong>HOLY <b>DREAM</b></strong><small>{t.footerLine}</small></span>
          </div>
          <div className="footer-contact">
            <ActionLink href={whatsappUrl}><Icon name="whatsapp" /> +974 5587 0450</ActionLink>
            <ActionLink href="mailto:holydream24@gmail.com"><Icon name="mail" /> holydream24@gmail.com</ActionLink>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {t.rights}</span>
          <ActionLink href="https://www.xenosysweb.com/" className="made-by">Made by <strong>@Xenosys Qatar</strong> · WhatsApp +974 7064 3918</ActionLink>
        </div>
      </footer>

      <ActionLink href={whatsappUrl} className="floating-whatsapp"><Icon name="whatsapp" /><span>WhatsApp</span></ActionLink>
    </div>
  );
}
