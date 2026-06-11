"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers3,
  Mail,
  Menu,
  MessageCircleMore,
  Palette,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Target,
  Timer,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";

const navigation = [
  "Home",
  "About",
  "Services",
  "Pricing",
  "Portfolio",
  "Contact",
];


const businessEmail = "birattech.team@gmail.com";

const phoneDisplay = "+977 9812343362";
const phoneHref = "tel:+9779812343362";

const whatsappHref =
  "https://wa.me/9779812343362?text=Hello%20BiratTech%2C%20I%20would%20like%20to%20discuss%20a%20project.";

const privacyPolicyHref = "/privacy-policy.pdf";
const termsHref = "/terms-and-conditions.pdf";

const strengths = [
  {
    title: "Fast Delivery",
    copy: "Disciplined execution with clear milestones.",
    icon: Timer,
  },
  {
    title: "Transparent Pricing",
    copy: "Straightforward proposals and clear scope.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Secure Architecture",
    copy: "Reliable systems built with security in mind.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Support",
    copy: "Ongoing guidance beyond project launch.",
    icon: Users,
  },
];

const values = [
  { title: "Quality First", icon: ShieldCheck },
  { title: "Transparent Communication", icon: MessageCircleMore },
  { title: "Innovation", icon: Rocket },
  { title: "Long-Term Partnership", icon: Users },
];

const services = [
  {
    title: "Website Development",
    copy: "High-performing corporate websites and digital experiences built to convert.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    copy: "Reliable mobile products shaped for usability, growth and performance.",
    icon: Smartphone,
  },
  {
    title: "Custom Software",
    copy: "Purpose-built platforms that solve business operations at scale.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    copy: "Clear interfaces and design systems that earn user trust.",
    icon: Palette,
  },
  {
    title: "Cloud Hosting",
    copy: "Secure cloud deployment, monitoring and scalable infrastructure.",
    icon: Cloud,
  },
  {
    title: "AI Automation",
    copy: "Practical automation that reduces repetitive work and improves speed.",
    icon: Bot,
  },
];

const projects = [
  { title: "Business Website", type: "Corporate Platform", icon: Globe },
  { title: "ERP Dashboard", type: "Operations", icon: BarChart3 },
  { title: "Inventory System", type: "Management", icon: Database },
  { title: "SaaS Platform", type: "Web Application", icon: Layers3 },
  { title: "Mobile App", type: "Product", icon: Smartphone },
  { title: "AI Chatbot", type: "Automation", icon: Bot },
];

const clientWorks = [
  {
    title: "Shubhh Labhh Construction",
    category: "Construction Company Website",
    image: "/shubhlabh-preview.jpg",
    url: "https://shubhlabhconstruction.com.np/",
    summary:
      "A professional business website built to present construction services, improve trust and make enquiries easier for prospective clients.",
    feedback:
      "The website presents our company clearly and gives customers a simple way to understand our work and contact us.",
  },
  {
    title: "Capital Marketing Nepal",
    category: "Corporate Gifts & Promotional Products Website",
    image: "/capitalmarketing-preview.jpg",
    url: "https://capitalmarketingnp.com/",
    summary:
      "A modern corporate website designed to showcase promotional products, corporate gifts, branding solutions and generate enquiries from businesses across Nepal.",
    feedback:
      "The website helps customers explore our products easily and contact us quickly for corporate gift requirements.",
  },
];

const pricing = [
  {
    title: "Starter Website",
    originalPrice: "NPR 14,999",
    price: "NPR 9,995",
    discount: "33% OFF",
    description: "Perfect for startups and small businesses.",
    features: [
      "Responsive website",
      "Up to 5 pages",
      "Contact integration",
      "Basic SEO setup",
      "Free 1 Month Support",
    ],
  },
  {
    title: "Business Website",
    originalPrice: "NPR 29,999",
    price: "NPR 20,499",
    discount: "Best Value",
    featured: true,
    description: "Our most popular package for growing companies.",
    features: [
      "Custom professional design",
      "Up to 10 pages",
      "CMS-ready structure",
      "Analytics & SEO setup",
      "Launch support",
      "Free Domain Setup",
      "Free 3 Months Support",
    ],
  },
  {
    title: "Custom Software",
    price: "Custom Pricing",
    description: "Tailored systems designed for your workflows.",
    features: [
      "Requirement discovery",
      "Scalable architecture",
      "Web or mobile product",
      "Dedicated support",
      "Free Consultation",
    ],
  },
];

const faqs = [
  {
    question: "Can pricing be customized?",
    answer:
      "Yes. Each proposal can be adjusted around project scope, required features and long-term support needs.",
  },
  {
    question: "How long does development take?",
    answer:
      "A standard website may take a few weeks, while custom software timelines depend on scope and integrations. We provide clear milestones before work begins.",
  },
  {
    question: "Do you offer maintenance?",
    answer:
      "Yes. BiratTech provides ongoing maintenance, enhancements, hosting guidance and technical support after launch.",
  },
  {
    question: "Can you work internationally?",
    answer:
      "Absolutely. We serve businesses locally and internationally with remote collaboration, clear reporting and dependable communication.",
  },
];

const team = [
  {
    name: "Sugam Rauniyar",
    title: "CEO & Co-Founder",
    copy: "Leads business strategy, partnerships and client relationships.",
    initials: "SR",
    emailSubject: "Attention Sugam Rauniyar - BiratTech enquiry",
    portfolioHref: "https://sugamrauniyar.com.np/",
    linkedinHref: "https://www.linkedin.com/in/sugam-rauniyar",
  },
  {
    name: "Saugat Rauniyar",
    title: "CEO & Co-Founder",
    copy: "Leads technology, software architecture and product development.",
    initials: "SR",
    emailSubject: "Attention Saugat Rauniyar - BiratTech enquiry",
    portfolioHref: "https://saugatrauniyar.com.np/",
    linkedinHref: "https://www.linkedin.com/in/saugat-rauniyar/",
  },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className={`brand ${light ? "brand-footer" : ""}`} aria-label="BiratTech home">
      <Image
        src="/birattech-logo.svg"
        alt="BiratTech"
        width={760}
        height={650}
        className="brand-logo"
        priority={!light}
      />
    </a>
  );
}

function ButtonLink({
  children,
  href,
  secondary = false,
}: {
  children: React.ReactNode;
  href: string;
  secondary?: boolean;
}) {
  return (
    <a className={secondary ? "button button-secondary" : "button button-primary"} href={href}>
      {children}
    </a>
  );
}

function SocialMark({ children }: { children: React.ReactNode }) {
  return <span className="social-mark" aria-hidden="true">{children}</span>;
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ButtonLink href="#contact">Get Quote</ButtonLink>
          <button
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="container mobile-links">
              {navigation.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function DashboardPreview() {
  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, delay: 0.15 }}
      aria-label="Project analytics dashboard preview"
    >
      <div className="dash-top">
        <div>
          <p className="dash-label">Project Dashboard</p>
          <h3>Business Overview</h3>
        </div>
        <div className="dash-status">
          <span />
          Live
        </div>
      </div>
      <div className="stat-grid">
        <div className="stat">
          <p>Active Projects</p>
          <strong>3</strong>
          <span className="positive">+12.4%</span>
        </div>
        <div className="stat">
          <p>Delivery Rate</p>
          <strong>98%</strong>
          <span className="positive">On track</span>
        </div>
      </div>
      <div className="chart-card">
        <div className="chart-header">
          <span>Project Performance</span>
          <span className="period">Last 2 months</span>
        </div>
        <div className="chart">
          <svg viewBox="0 0 360 124" role="img" aria-label="Increasing project performance chart">
            <path className="grid-path" d="M0 22 H360 M0 63 H360 M0 104 H360" />
            <path
              className="fill-path"
              d="M0 101 L42 86 L86 89 L128 66 L172 69 L217 45 L259 52 L305 30 L360 16 L360 124 L0 124 Z"
            />
            <path
              className="line-path"
              d="M0 101 L42 86 L86 89 L128 66 L172 69 L217 45 L259 52 L305 30 L360 16"
            />
          </svg>
        </div>
      </div>
      <div className="progress-list">
        <div className="progress-row">
          <Blocks size={17} />
          <span>ERP Platform</span>
          <div className="progress-track"><span style={{ width: "78%" }} /></div>
          <b>78%</b>
        </div>
        <div className="progress-row">
          <Smartphone size={17} />
          <span>Mobile Product</span>
          <div className="progress-track"><span style={{ width: "61%" }} /></div>
          <b>61%</b>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="badge">Software Solutions Nepal</span>
          <h1>Software Development & Digital Solutions in Nepal</h1>
          <p>
            BiratTech helps startups and businesses build powerful websites, custom software,
            mobile applications and scalable digital products from Nepal to the world.
          </p>
          <div className="hero-buttons">
            <ButtonLink href="#contact">Get Free Quote</ButtonLink>
            <ButtonLink href="mailto:birattech.team@gmail.com" secondary>Contact Us</ButtonLink>
          </div>
          <div className="hero-proof">
            <ShieldCheck size={20} />
            <span>Trusted software delivery with clear communication</span>
          </div>
        </motion.div>
        <DashboardPreview />
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="trust">
      <div className="container trust-grid">
        {strengths.map(({ title, copy, icon: Icon }) => (
          <Reveal key={title}>
            <motion.article className="trust-card" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <div className="icon-box"><Icon size={22} /></div>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container about-layout">
        <Reveal>
          <SectionTitle eyebrow="About BiratTech" title="Our Story" />
        </Reveal>
        <Reveal className="story-copy">
          <p>
            BiratTech was founded in Biratnagar, Nepal with a vision to deliver professional
            digital solutions for businesses locally and globally.
          </p>
          <p>
            We focus on building software that is practical, scalable and built for long-term
            growth. From websites and custom software to digital transformation solutions, our
            goal is to help businesses use technology with confidence.
          </p>
          <p>
            Every project is built with attention to quality, communication and long-term value.
          </p>
        </Reveal>
      </div>
      <div className="container purpose-grid">
        <Reveal>
          <article className="purpose-card">
            <Target />
            <h3>Mission</h3>
            <p>To build dependable software solutions that help businesses grow with confidence.</p>
          </article>
        </Reveal>
        <Reveal>
          <article className="purpose-card">
            <TrendingUp />
            <h3>Vision</h3>
            <p>
              To become one of Nepal&apos;s most trusted software companies serving businesses
              worldwide.
            </p>
          </article>
        </Reveal>
      </div>
      <div className="container values-block">
        <Reveal>
          <SectionTitle eyebrow="Core Values" title="The Standards Behind Our Work" />
        </Reveal>
        <div className="values-grid">
          {values.map(({ title, icon: Icon }) => (
            <Reveal key={title}>
              <article className="value-card">
                <Icon size={22} />
                <h3>{title}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section section-soft">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="Leadership" title="Meet Our Leadership" />
        </Reveal>

        <div className="team-grid">
          {team.map((person) => (
            <Reveal key={person.name}>
              <article className="team-card">

                <Image
                  src={
                    person.name === "Sugam Rauniyar"
                      ? "/sugam.png"
                      : "/saugat.jpeg"
                  }
                  alt={person.name}
                  width={78}
                  height={78}
                  className="team-image"
                />

                <div>
                  <h3>{person.name}</h3>
                  <span>{person.title}</span>
                  <p>{person.copy}</p>

                  <div className="team-actions">
                    <a
                      href={`mailto:${businessEmail}?subject=${encodeURIComponent(
                        person.emailSubject
                      )}`}
                    >
                      <Mail size={15} />
                      Email
                    </a>

                    <a href={person.portfolioHref}>
                      <BriefcaseBusiness size={15} />
                      Portfolio
                    </a>

                    {person.linkedinHref ? (
                      <a
                        href={person.linkedinHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <SocialMark>In</SocialMark>
                        LinkedIn
                      </a>
                    ) : (
                      <span className="team-action-muted">
                        <SocialMark>In</SocialMark>
                        LinkedIn
                      </span>
                    )}
                  </div>
                </div>

              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="Services"
            title="Solutions Built for Business Growth"
            copy="From digital presence to core software systems, BiratTech delivers technology that is clear, dependable and ready to scale."
          />
        </Reveal>
        <div className="card-grid services-grid">
          {services.map(({ title, copy, icon: Icon }) => (
            <Reveal key={title}>
              <motion.article className="service-card" whileHover={{ y: -5 }}>
                <div className="icon-box icon-large"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <a href="#contact">
                  Learn More <ArrowRight size={16} />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section section-soft">
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="Portfolio"
            title="Client Work and Digital Products"
            copy="A curated place to showcase live projects, client feedback and the kind of software experiences BiratTech delivers."
          />
        </Reveal>
        <div className="client-work-grid">
          {clientWorks.map((work) => (
            <Reveal key={work.title}>
              <article className="client-work-card">
                <div className="client-work-preview">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="client-work-image"
                  />

                  <div className="client-browser-card">
                    <BriefcaseBusiness size={24} />
                    <span>Live Client Website</span>
                  </div>
                </div>
                <div className="client-work-copy">
                  <span>{work.category}</span>
                  <h3>{work.title}</h3>
                  <p>{work.summary}</p>
                  <blockquote>{work.feedback}</blockquote>
                  <a href={work.url} target="_blank" rel="noreferrer">
                    Visit Website <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {/* <div className="card-grid portfolio-grid">
          {projects.map(({ title, type, icon: Icon }) => (
            <Reveal key={title}>
              <motion.article className="project-card" whileHover={{ y: -5 }}>
                <div className="project-preview">
                  <div className="preview-window">
                    <span /><span /><span />
                  </div>
                  <div className="preview-layout">
                    <aside />
                    <div>
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <Icon className="project-icon" size={22} />
                </div>
                <div className="project-copy">
                  <span>{type}</span>
                  <h3>{title}</h3>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div> */}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="Pricing"
            title="Special Launch Offers"
            copy="Professional software solutions at introductory pricing. Save big while the offer lasts."
          />
        </Reveal>

        <div className="pricing-grid">
          {pricing.map((plan) => (
            <Reveal key={plan.title}>
              <article
                className={`pricing-card ${plan.featured ? "featured" : ""
                  }`}
              >
                {plan.featured && (
                  <span className="popular">
                    🔥 Most Popular
                  </span>
                )}

                {plan.discount && (
                  <span className="discount-badge">
                    🎉 {plan.discount}
                  </span>
                )}

                <h3>{plan.title}</h3>

                {plan.originalPrice && (
                  <p className="old-price">
                    {plan.originalPrice}
                  </p>
                )}

                <p className="price">{plan.price}</p>

                <p className="pricing-copy">
                  {plan.description}
                </p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={17} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href="#contact"
                  secondary={!plan.featured}
                >
                  Get Started
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function Testimonials() {
  const testimonials = [
    {
      quote:
        "BiratTech transformed our online presence. Their team was professional, responsive and delivered exactly what we needed. The website clearly represents our company and has helped us generate more business enquiries.",
      name: "Santosh Bhagat",
      role: "CEO, Shubhh Labhh Construction",
    },
    {
      quote:
        "The website design exceeded our expectations. The team understood our requirements, showcased our products professionally and ensured a smooth experience from start to finish.",
      name: "Chandra Thakur",
      role: "CEO,Capital Marketing Nepal",
    },
    // {
    //   quote:
    //     "Fast delivery, clean design and excellent support. BiratTech provides high-quality digital solutions that help businesses establish a strong online presence.",
    //   name: "Client Review",
    //   role: "Business Owner",
    // },
  ];

  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Testimonials</span>
          <h2>What Our Clients Say</h2>
          <p>
            Real feedback from businesses we've helped grow online.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="stars">★★★★★</div>

              <p className="testimonial-quote">
                "{item.quote}"
              </p>

              <div className="testimonial-author">
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="section section-soft">
      <div className="container faq-layout">
        <Reveal>
          <SectionTitle
            eyebrow="FAQ"
            title="Common Questions"
            copy="Direct answers for businesses planning a digital project."
          />
        </Reveal>
        <Reveal className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = active === index;
            return (
              <div className="faq-item" key={item.question}>
                <button
                  aria-expanded={isOpen}
                  onClick={() => setActive(isOpen ? null : index)}
                >
                  {item.question}
                  <ChevronDown className={isOpen ? "rotate" : ""} size={20} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-section">
      <Reveal className="container">
        <div className="cta">
          <div>
            <span>Start a Conversation</span>
            <h2>Ready to Build Your Next Project?</h2>
          </div>
          <div className="cta-actions">
            <a className="button button-white" href="#contact">Get Consultation</a>
            <a
              className="button button-outline-light"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch(
      "https://formspree.io/f/meeddgog",
      {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setSent(true);
      form.reset();
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">

        <Reveal>
          <SectionTitle
            eyebrow="Contact"
            title="Let&apos;s Discuss Your Project"
            copy="Tell us what you are building and our team will respond with the right next steps."
          />
        </Reveal>

        <div className="contact-cards">
          <a href={phoneHref} className="contact-card">
            <Phone size={21} />
            <div>
              <span>Phone</span>
              <strong>{phoneDisplay}</strong>
            </div>
          </a>

          <a href={`mailto:${businessEmail}`} className="contact-card">
            <Mail size={21} />
            <div>
              <span>Email</span>
              <strong>{businessEmail}</strong>
            </div>
          </a>

          <a
            href={whatsappHref}
            className="contact-card"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircleMore size={21} />
            <div>
              <span>WhatsApp</span>
              <strong>Message {phoneDisplay}</strong>
            </div>
          </a>
        </div>

        <div className="contact-layout">

          <Reveal className="location-card">
            <h3>BiratTech</h3>
            <p>Software Solutions Nepal</p>

            <div className="location-detail">
              <Globe size={19} />
              <span>Biratnagar, Nepal 56613</span>
            </div>

            <div className="location-detail">
              <Mail size={19} />
              <a href={`mailto:${businessEmail}`}>
                {businessEmail}
              </a>
            </div>

            <div className="location-detail">
              <Phone size={19} />
              <a href={phoneHref}>
                {phoneDisplay}
              </a>
            </div>

            <p className="location-note">
              Delivering dependable digital solutions for businesses locally and globally.
            </p>
          </Reveal>

          <Reveal>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="field-row">
                <label>
                  Name
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </label>

                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>

              <div className="field-row">
                <label>
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+977"
                  />
                </label>

                <label>
                  Subject
                  <input
                    name="subject"
                    type="text"
                    placeholder="Project enquiry"
                    required
                  />
                </label>
              </div>

              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Tell us about your project requirements."
                  rows={5}
                  required
                />
              </label>

              <button
                className="button button-primary"
                type="submit"
              >
                Send Message
              </button>

              {sent && (
                <p className="form-note">
                  Message sent successfully ✅
                </p>
              )}

            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (<footer className="footer"> <div className="container footer-grid">
    <div className="footer-brand">
      <Logo light />

      <p className="footer-tagline">
        Building Digital Excellence
      </p>

      <p className="footer-description">
        Websites, custom software, mobile apps and AI solutions
        built for businesses in Nepal and worldwide.
      </p>
    </div>

    <div className="footer-links">
      <h3>Company</h3>

      {navigation.slice(1).map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
        >
          {item}
        </a>
      ))}
    </div>

    <div className="footer-links">
      <h3>Legal</h3>

      <a
        href={privacyPolicyHref}
        target="_blank"
        rel="noreferrer"
      >
        Privacy Policy
      </a>

      <a
        href={termsHref}
        target="_blank"
        rel="noreferrer"
      >
        Terms & Conditions
      </a>
    </div>

    <div className="footer-contact">
      <h3>Contact</h3>

      <a href={`mailto:${businessEmail}`}>
        📧 {businessEmail}
      </a>

      <a href={phoneHref}>
        📞 {phoneDisplay}
      </a>

      <p>📍 Biratnagar, Nepal</p>

      <div className="footer-map">
        <iframe
          title="BiratTech office location"
          src="https://www.google.com/maps?q=Biratnagar%2C%20Nepal&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div
        className="social-links"
        aria-label="Social media"
      >
        <a
          href="https://www.instagram.com/birat.tech?igsh=OXVkeDBxdzV5MHN0"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <SocialMark>IG</SocialMark>
        </a>

        <a
          href="https://www.linkedin.com/in/saugat-rauniyar/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <SocialMark>in</SocialMark>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <MessageCircleMore size={18} />
        </a>
      </div>
    </div>

  </div>

    <div className="container footer-bottom">
      <p>
        © {new Date().getFullYear()} BiratTech. All rights reserved.
      </p>

      <p>Made in Nepal 🇳🇵</p>
    </div>
  </footer>


  );
}
export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <About />
        <Team />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
