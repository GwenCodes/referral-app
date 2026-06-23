import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Star,
  ChevronDown,
  ChevronUp,
  Share2,
  MessageSquare,
  ThumbsUp,
  BarChart3,
  Zap,
  QrCode,
  Mail,
  Smartphone,
  Bell,
  TrendingUp,
  Users,
  Clock,
  Award,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Hammer,
  Wrench,
  Droplets,
  Zap as ElecZap,
  Leaf,
  Wind,
} from "lucide-react";

// ── DATA ────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const INDUSTRIES = [
  { label: "Remodelers", Icon: Hammer },
  { label: "Roofers", Icon: Award },
  { label: "HVAC", Icon: Wind },
  { label: "Plumbing", Icon: Droplets },
  { label: "Electrical", Icon: ElecZap },
  { label: "Landscaping", Icon: Leaf },
];

const PROBLEMS = [
  {
    emoji: "😔",
    title: "Customers Forget",
    desc: "Most happy customers never think to recommend you unless you ask — and by the time you think to ask, the moment has passed.",
  },
  {
    emoji: "📋",
    title: "No Follow-Up System",
    desc: "Contractors finish jobs and move on without requesting referrals or reviews. Revenue is left on the table every single week.",
  },
  {
    emoji: "📵",
    title: "No Marketing Content",
    desc: "Great projects are completed every week but never shared online. Your best work is invisible to potential customers.",
  },
];

const SOLUTIONS = [
  {
    color: "#F97316",
    bg: "#FFF7ED",
    icon: Users,
    title: "Referrals",
    subtitle: "Automatic referral requests",
    desc: "Automatically send referral requests by text or email the moment a job is marked complete. Strike while the satisfaction is highest.",
    bullets: [
      "Personalized referral links",
      "Automated timing",
      "Referral tracking dashboard",
    ],
  },
  {
    color: "#10B981",
    bg: "#ECFDF5",
    icon: Star,
    title: "Reviews",
    subtitle: "Collect Google reviews",
    desc: "Capture Google reviews while customer satisfaction is at its peak. More reviews means better local search rankings and more trust.",
    bullets: [
      "Google & Yelp integration",
      "One-tap review flow",
      "Auto-follow-up reminders",
    ],
  },
  {
    color: "#3B82F6",
    bg: "#EFF6FF",
    icon: Share2,
    title: "Content",
    subtitle: "AI-generated social posts",
    desc: "Generate ready-to-post Facebook, Instagram, and Google Business Profile content from every completed project — instantly.",
    bullets: [
      "Before & after showcases",
      "AI caption writing",
      "One-click publishing",
    ],
  },
];

const STEPS = [
  {
    n: "1",
    title: "Mark Project Complete",
    desc: "When you finish a job, simply mark it complete in ReferralFlow — takes 10 seconds.",
  },
  {
    n: "2",
    title: "Customer Gets a Request",
    desc: "Your customer automatically receives a friendly referral and review request by text or email.",
  },
  {
    n: "3",
    title: "AI Generates Content",
    desc: "ReferralFlow creates social media posts and Google Business updates from your project details.",
  },
  {
    n: "4",
    title: "You Get More Leads",
    desc: "New referrals arrive, your review count grows, and your online presence builds — on autopilot.",
  },
];

const FEATURES = [
  { Icon: Bell, label: "Automated referral requests" },
  { Icon: Star, label: "Review collection" },
  { Icon: Zap, label: "AI social media content" },
  { Icon: MessageSquare, label: "Customer follow-up reminders" },
  { Icon: BarChart3, label: "Referral tracking dashboard" },
  { Icon: TrendingUp, label: "Lead source tracking" },
  { Icon: Award, label: "Before & after showcases" },
  { Icon: QrCode, label: "QR code referral sharing" },
  { Icon: Mail, label: "Email campaigns" },
  { Icon: Smartphone, label: "SMS campaigns" },
];

const STATS = [
  {
    value: "3×",
    label: "More Referrals",
    sub: "vs. asking manually",
    color: "#F97316",
  },
  {
    value: "47",
    label: "More Reviews",
    sub: "avg. in first 90 days",
    color: "#10B981",
  },
  {
    value: "6 hrs",
    label: "Saved Weekly",
    sub: "on marketing tasks",
    color: "#3B82F6",
  },
];

const TESTIMONIALS = [
  {
    name: "Marcus Hendley",
    business: "Hendley Roofing & Gutters",
    industry: "Roofing",
    quote:
      "We went from 12 Google reviews to 89 in four months. Homeowners searching for roofers in our area now see us first. ReferralFlow basically replaced what our marketing agency was charging us $1,500/month to do.",
    rating: 5,
    avatar: "MH",
    avatarBg: "#F97316",
  },
  {
    name: "Sandra Okafor",
    business: "Okafor Home Renovations",
    industry: "Remodeling",
    quote:
      "I was terrible at asking for referrals — it felt awkward. Now the system does it for me and I don't have to think about it. Last month three new jobs came directly from referral links my past clients shared.",
    rating: 5,
    avatar: "SO",
    avatarBg: "#10B981",
  },
  {
    name: "Derek Paulson",
    business: "Paulson HVAC Services",
    industry: "HVAC",
    quote:
      "The social media content feature alone is worth it. We're posting before-and-after photos every week without anyone on my team spending time on it. Our Facebook page finally looks like a real business.",
    rating: 5,
    avatar: "DP",
    avatarBg: "#3B82F6",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    desc: "Perfect for solo contractors getting started with referral marketing.",
    features: [
      "Referral request automation",
      "Review request automation",
      "AI content generation",
      "Up to 50 jobs/month",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    desc: "For growing crews who want the full referral growth system.",
    features: [
      "Everything in Starter",
      "SMS automation",
      "Referral tracking dashboard",
      "Advanced analytics",
      "Lead source tracking",
      "Before & after showcases",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For larger contractors with multiple crews and complex needs.",
    features: [
      "Everything in Professional",
      "Unlimited jobs",
      "Multi-location support",
      "Custom branding",
      "API access",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const FAQS = [
  {
    q: "How does ReferralFlow work?",
    a: "When you mark a job complete in ReferralFlow, the system automatically sends a referral and review request to your customer via text or email. It also uses AI to generate social media content from your project details — all without any extra work from you.",
  },
  {
    q: "Can I customize referral messages?",
    a: "Yes. You can customize the message tone, add your business name and branding, and personalize the ask. Most contractors use our templates as a starting point and adjust from there.",
  },
  {
    q: "Do customers need an app?",
    a: "No — customers receive a simple text or email with a link. They can leave a review or refer a friend in one tap without downloading anything.",
  },
  {
    q: "Can I post the social content myself?",
    a: "Absolutely. ReferralFlow generates the content and gives you full control. You can review, edit, and post it yourself, or enable auto-publishing for supported platforms.",
  },
  {
    q: "Can ReferralFlow automatically post content?",
    a: "Yes — on Professional and Enterprise plans, you can connect your Facebook, Instagram, and Google Business Profile accounts and enable auto-publishing so content goes live without manual approval.",
  },
  {
    q: "How quickly can I get started?",
    a: "Most contractors are fully set up in under 30 minutes. We guide you through connecting your customer list, customizing your messages, and sending your first referral request.",
  },
  {
    q: "What industries do you support?",
    a: "ReferralFlow is built for home service contractors: remodelers, roofers, HVAC, plumbing, electrical, landscaping, painters, and more. If you complete jobs for homeowners, it works for you.",
  },
];

// ── HELPERS ─────────────────────────────────────────────

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function StarRow({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={14} fill="#F97316" stroke="none" />
      ))}
    </div>
  );
}

// ── HERO FLOW DIAGRAM ────────────────────────────────────

function FlowDiagram() {
  const nodes = [
    { label: "Completed Job", icon: "✅", color: "#0F172A" },
    { label: "Referral Request", icon: "📨", color: "#F97316" },
    { label: "Customer Shares", icon: "🤝", color: "#F97316" },
    { label: "New Lead", icon: "💰", color: "#10B981" },
    { label: "Review Collected", icon: "⭐", color: "#10B981" },
    { label: "Social Post Live", icon: "📱", color: "#3B82F6" },
  ];

  return (
    <div
      className="w-full rounded-2xl overflow-hidden shadow-2xl"
      style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
    >
      {/* Mock app header */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "#0F172A" }}
      >
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-slate-400 font-medium">
          ReferralFlow — Live Dashboard
        </span>
      </div>

      {/* Flow nodes */}
      <div className="p-6">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-5"
          style={{ color: "#64748B" }}
        >
          Automated Growth Flow
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {nodes.map((node, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center gap-2 p-4 rounded-xl text-center"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <span className="text-2xl">{node.icon}</span>
              <span
                className="text-xs font-semibold"
                style={{ color: node.color }}
              >
                {node.label}
              </span>
              {i < nodes.length - 1 && (
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-slate-300 text-xs z-10 hidden md:block">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mini stat bar */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Referrals sent", value: "48", color: "#F97316" },
            { label: "Reviews collected", value: "31", color: "#10B981" },
            { label: "Posts generated", value: "12", color: "#3B82F6" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg p-3 text-center"
              style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}
            >
              <p className="text-xl font-bold" style={{ color: s.color }}>
                {s.value}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── MAIN ─────────────────────────────────────────────────

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* ── NAV ── */}
      <nav
        className="sticky top-0 z-50 bg-white border-b border-slate-100"
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "#F97316" }}
            >
              <Share2 size={16} color="white" />
            </div>
            <span className="text-lg font-bold" style={{ color: "#0F172A" }}>
              ReferralFlow
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm font-medium transition-colors hover:text-orange-500"
                style={{
                  color: "#475569",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="text-sm font-semibold px-4 py-2 rounded-lg transition-colors hover:bg-slate-100"
              style={{ color: "#0F172A" }}
            >
              Sign In
            </button>
            <button
              onClick={() => scrollTo("#pricing")}
              className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-opacity hover:opacity-90"
              style={{ background: "#F97316", color: "#FFFFFF" }}
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#0F172A" }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => {
                  scrollTo(l.href);
                  setMobileOpen(false);
                }}
                className="text-sm font-medium text-left py-1"
                style={{
                  color: "#0F172A",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollTo("#pricing");
                setMobileOpen(false);
              }}
              className="mt-2 w-full py-3 rounded-lg text-sm font-semibold"
              style={{ background: "#F97316", color: "#FFFFFF" }}
            >
              Start Free Trial
            </button>
          </div>
        )}
      </nav>
      {/* ── HERO ── */}
      <section
        className="py-16 lg:py-24"
        style={{
          background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: "#FFF7ED", color: "#EA580C" }}
            >
              <Zap size={12} />
              Referral automation for contractors
            </div>
            <h1
              className="text-4xl lg:text-5xl font-bold leading-tight mb-5"
              style={{ color: "#0F172A", letterSpacing: "-0.02em" }}
            >
              Turn Every Completed Job Into More{" "}
              <span className="highlight">Referrals, Reviews & Content</span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "#475569" }}
            >
              ReferralFlow automatically asks for referrals, collects reviews,
              and creates social media content from every project you complete —
              without lifting a finger.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => scrollTo("#pricing")}
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: "#F97316", color: "#FFFFFF" }}
              >
                Start Free Trial <ArrowRight size={16} />
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold border transition-colors hover:bg-slate-50"
                style={{ color: "#0F172A", borderColor: "#E2E8F0" }}
              >
                Book a Demo
              </button>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-1.5">
                <CheckCircle size={16} style={{ color: "#10B981" }} />
                <span className="text-sm" style={{ color: "#64748B" }}>
                  Free 14-day trial
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={16} style={{ color: "#10B981" }} />
                <span className="text-sm" style={{ color: "#64748B" }}>
                  No credit card required
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={16} style={{ color: "#10B981" }} />
                <span className="text-sm" style={{ color: "#64748B" }}>
                  Setup in 30 minutes
                </span>
              </div>
            </div>
          </div>

          <div>
            <FlowDiagram />
          </div>
        </div>
      </section>
      {/* ── TRUST ── */}
      {/*
      <section
        className="py-14 border-y border-slate-100"
        style={{ background: "#F8FAFC" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-center text-sm font-semibold uppercase tracking-widest mb-8"
            style={{ color: "#94A3B8" }}
          >
            Built for Contractors Who Grow Through Word of Mouth
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {INDUSTRIES.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2.5 p-4 rounded-xl transition-shadow hover:shadow-md"
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "#FFF7ED" }}
                >
                  <Icon size={20} style={{ color: "#F97316" }} />
                </div>
                <span
                  className="text-xs font-semibold text-center"
                  style={{ color: "#475569" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* ── PROBLEM ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0F172A", letterSpacing: "-0.02em" }}
            >
              Most Referrals Are <span style={{ color: "#EF4444" }}>Lost</span>
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "#64748B" }}
            >
              Even your happiest customers won't refer you without a system that
              makes it easy and timely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="p-8 rounded-2xl"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
              >
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#0F172A" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#64748B" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── SOLUTION ── */}
      <section className="py-20 lg:py-28" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0F172A", letterSpacing: "-0.02em" }}
            >
              One Completed Job.{" "}
              <span style={{ color: "#F97316" }}>
                Three Growth Opportunities.
              </span>
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "#64748B" }}
            >
              ReferralFlow turns the end of every project into the beginning of
              your next three.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOLUTIONS.map((s) => (
              <div
                key={s.title}
                className="p-8 rounded-2xl bg-white"
                style={{
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: s.bg }}
                >
                  <s.icon size={24} style={{ color: s.color }} />
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: s.color }}
                >
                  {s.subtitle}
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#0F172A" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#64748B" }}
                >
                  {s.desc}
                </p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "#475569" }}
                    >
                      <CheckCircle
                        size={14}
                        style={{ color: s.color, flexShrink: 0 }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0F172A", letterSpacing: "-0.02em" }}
            >
              How ReferralFlow Works
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "#64748B" }}
            >
              Four steps. Zero ongoing effort. Results that compound over time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {STEPS.map((step, i) => (
              <div key={step.n} className="relative flex flex-col">
                <div
                  className="p-7 rounded-2xl bg-white flex flex-col flex-1"
                  style={{
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mb-5 flex-shrink-0"
                    style={{ background: "#F97316" }}
                  >
                    {step.n}
                  </div>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: "#0F172A" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#64748B" }}
                  >
                    {step.desc}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden lg:flex absolute -right-3 top-10 z-10 w-6 h-6 items-center justify-center rounded-full"
                    style={{
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                    }}
                  >
                    <ArrowRight size={12} style={{ color: "#94A3B8" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── FEATURES ── */}
      <section
        id="features"
        className="py-20 lg:py-28"
        style={{ background: "#0F172A" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4 text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              Everything You Need to Grow by Referral
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "#94A3B8" }}
            >
              One platform. All the tools. No agency required.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {FEATURES.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: "#1E293B", border: "1px solid #334155" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(249,115,22,0.15)" }}
                >
                  <Icon size={16} style={{ color: "#F97316" }} />
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#CBD5E1" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── BENEFITS / STATS ── */}
      <section className="py-20 lg:py-28" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0F172A", letterSpacing: "-0.02em" }}
            >
              Grow Without Buying More Ads
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "#64748B" }}
            >
              Your best source of new business is already out there — in the
              customers who love your work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="p-8 rounded-2xl bg-white text-center"
                style={{
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                <p
                  className="text-5xl font-extrabold mb-2"
                  style={{ color: s.color, letterSpacing: "-0.03em" }}
                >
                  {s.value}
                </p>
                <p
                  className="text-lg font-bold mb-1"
                  style={{ color: "#0F172A" }}
                >
                  {s.label}
                </p>
                <p className="text-sm" style={{ color: "#94A3B8" }}>
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { Icon: Users, label: "Generate more referrals" },
              { Icon: Star, label: "Collect more reviews" },
              { Icon: Share2, label: "Stay active on social media" },
              { Icon: TrendingUp, label: "Build trust faster" },
              { Icon: Clock, label: "Save hours every week" },
              { Icon: ThumbsUp, label: "Turn customers into advocates" },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-4 rounded-xl bg-white"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <CheckCircle
                  size={18}
                  style={{ color: "#10B981", flexShrink: 0 }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "#475569" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── TESTIMONIALS ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0F172A", letterSpacing: "-0.02em" }}
            >
              Contractors Love ReferralFlow
            </h2>
            <p className="text-lg" style={{ color: "#64748B" }}>
              Real results from real tradespeople.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="p-7 rounded-2xl flex flex-col"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
              >
                <StarRow />
                <p
                  className="my-5 text-sm leading-relaxed flex-1"
                  style={{ color: "#334155" }}
                >
                  "{t.quote}"
                </p>
                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid #E2E8F0" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: t.avatarBg }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "#0F172A" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "#94A3B8" }}>
                      {t.business} · {t.industry}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── PRICING ── */}
      <section
        id="pricing"
        className="py-20 lg:py-28"
        style={{ background: "#F8FAFC" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0F172A", letterSpacing: "-0.02em" }}
            >
              Simple Pricing
            </h2>
            <p className="text-lg" style={{ color: "#64748B" }}>
              No hidden fees. Cancel any time. Start free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="relative flex flex-col rounded-2xl p-8"
                style={{
                  background: plan.highlight ? "#0F172A" : "#FFFFFF",
                  border: plan.highlight
                    ? "2px solid #F97316"
                    : "1px solid #E2E8F0",
                  boxShadow: plan.highlight
                    ? "0 20px 40px rgba(249,115,22,0.2)"
                    : "0 4px 16px rgba(0,0,0,0.06)",
                }}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: "#F97316", color: "#FFFFFF" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ color: plan.highlight ? "#FFFFFF" : "#0F172A" }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: plan.highlight ? "#94A3B8" : "#64748B" }}
                  >
                    {plan.desc}
                  </p>
                  <div className="flex items-end gap-1">
                    <span
                      className="text-4xl font-extrabold"
                      style={{
                        color: plan.highlight ? "#FFFFFF" : "#0F172A",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className="text-sm mb-1.5"
                        style={{
                          color: plan.highlight ? "#64748B" : "#94A3B8",
                        }}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: plan.highlight ? "#CBD5E1" : "#475569" }}
                    >
                      <CheckCircle
                        size={15}
                        style={{
                          color: "#10B981",
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{
                    background: plan.highlight ? "#F97316" : "#F8FAFC",
                    color: plan.highlight ? "#FFFFFF" : "#0F172A",
                    border: plan.highlight ? "none" : "1px solid #E2E8F0",
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── FAQ ── */}
      <section id="faq" className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0F172A", letterSpacing: "-0.02em" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg" style={{ color: "#64748B" }}>
              Everything you need to know before getting started.
            </p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-slate-50"
                  style={{ background: openFaq === i ? "#F8FAFC" : "#FFFFFF" }}
                >
                  <span
                    className="text-sm font-semibold pr-4"
                    style={{ color: "#0F172A" }}
                  >
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp
                      size={18}
                      style={{ color: "#F97316", flexShrink: 0 }}
                    />
                  ) : (
                    <ChevronDown
                      size={18}
                      style={{ color: "#94A3B8", flexShrink: 0 }}
                    />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5" style={{ background: "#F8FAFC" }}>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#64748B" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── FINAL CTA ── */}
      <section className="py-20 lg:py-28" style={{ background: "#F97316" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-5xl font-extrabold mb-5 text-white"
            style={{ letterSpacing: "-0.03em" }}
          >
            Stop Leaving Referrals to Chance
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Turn every completed project into more referrals, reviews, and
            revenue — automatically.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollTo("#pricing")}
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: "#FFFFFF", color: "#F97316" }}
            >
              Start Free Trial <ArrowRight size={16} />
            </button>
            <button
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold border-2 transition-colors hover:bg-white/10"
              style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.5)" }}
            >
              Schedule a Demo
            </button>
          </div>
          <p
            className="mt-6 text-sm"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Free 14-day trial · No credit card required · Setup in 30 minutes
          </p>
        </div>
      </section>
      {/* ── FOOTER ── */}
      <footer style={{ background: "#0F172A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "#F97316" }}
                >
                  <Share2 size={16} color="white" />
                </div>
                <span className="text-lg font-bold text-white">
                  ReferralFlow
                </span>
              </div>
              <p
                className="text-sm leading-relaxed max-w-xs"
                style={{ color: "#64748B" }}
              >
                Helping contractors grow through systematic referral marketing.
                Turn every completed job into your next opportunity.
              </p>
              <div className="flex gap-3 mt-5">
                {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-slate-700"
                    style={{ background: "#1E293B", color: "#64748B" }}
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#475569" }}
              >
                Product
              </p>
              <ul className="space-y-3">
                {["Features", "Pricing", "How It Works", "Integrations"].map(
                  (l) => (
                    <li key={l}>
                      <button
                        onClick={() =>
                          scrollTo(`#${l.toLowerCase().replace(/ /g, "-")}`)
                        }
                        className="text-sm transition-colors hover:text-white"
                        style={{
                          color: "#64748B",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        {l}
                      </button>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#475569" }}
              >
                Company
              </p>
              <ul className="space-y-3">
                {["FAQ", "Contact", "Privacy Policy", "Terms of Service"].map(
                  (l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm transition-colors hover:text-white"
                        style={{ color: "#64748B" }}
                        onClick={(e) => e.preventDefault()}
                      >
                        {l}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          <div
            className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid #1E293B" }}
          >
            <p className="text-xs" style={{ color: "#475569" }}>
              © 2025 ReferralFlow. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: "#475569" }}>
              Made for the trades that build our homes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
