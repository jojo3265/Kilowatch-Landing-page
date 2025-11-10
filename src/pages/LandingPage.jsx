import React from "react";
import { motion } from "framer-motion";
import { Cpu, Camera, Zap, FileText, Download } from "lucide-react";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen text-black antialiased"
      style={{
        backgroundColor: "#FFFFFF", // keep page background white
      }}
    >
      {/* CSS variables for the theme */}
      <style>{`
        :root {
          --kw-primary: #44B258;
          --kw-light: #D9F0DB;
          --kw-dark: #1B503A;
        }
        /* optional small utility to keep consistent rounded shadows on colored cards */
        .kw-card-border {
          border-color: rgba(27,80,58,0.06);
        }
      `}</style>

      {/* NAVBAR */}
      <header
        className="bg-white/60 backdrop-blur sticky top-0 z-40 shadow-sm"
        style={{ borderBottomColor: "rgba(0,0,0,0.04)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO + NAME */}
          <div className="flex items-center gap-3">
            <img
              src="/kilowatch_icon.png"
              alt="KiloWatch logo"
              className="w-10 h-10 rounded-xl shadow-sm"
            />
            <div
              className="font-bold text-lg"
              style={{ color: "var(--kw-dark)" }}
            >
              KiloWatch
            </div>
            <div
              className="hidden sm:block text-sm"
              style={{ color: "#374151" }}
            >
              Estimate your household energy & costs — fast
            </div>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:underline">
              Features
            </a>
            <a href="#how" className="hover:underline">
              How it Works
            </a>
            <a href="#faq" className="hover:underline">
              FAQ
            </a>
            <a
              className="inline-flex items-center gap-2 text-white px-5 py-3 rounded-2xl font-semibold shadow"
              href="/downloads/KiloWatch.apk"
              style={{ backgroundColor: "var(--kw-primary)" }}
            >
              Download APK
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              className="p-2 rounded-lg"
              style={{ backgroundColor: "var(--kw-light)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ color: "var(--kw-dark)" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* HERO - improved alignment + responsive type sizes */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          <section className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h1
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-extrabold leading-tight text-5xl"
              // responsive sizes: smaller on tiny screens, large on desktop
              /* alternative using Tailwind classes:
         className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
      */
            >
              KiloWatch — estimate electricity use, cut costs ⚡
            </motion.h1>

            <motion.p
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-6 max-w-xl"
              style={{
                color: "#4B5563",
                fontSize: "clamp(0.95rem, 1.6vw, 1.125rem)", // responsive paragraph size
                lineHeight: 1.5,
              }}
            >
              Not a real-time monitor — KiloWatch helps households estimate
              energy consumption and monthly cost using appliance profiles and a
              built-in OCR tool to read appliance labels. Get fast projections,
              compare scenarios, and discover quick savings.
            </motion.p>

            <div className="mt-8 w-full flex flex-col sm:flex-row sm:items-center sm:gap-3 justify-center md:justify-start">
              {/* primary CTA */}
              <a
                className="inline-flex items-center gap-2 text-white px-5 py-3 rounded-2xl font-semibold shadow"
                href="/downloads/KiloWatch.apk"
                style={{ backgroundColor: "var(--kw-primary)" }}
              >
                Download APK
              </a>

              {/* secondary */}
              <a
                href="#features"
                className="mt-3 sm:mt-0 inline-flex items-center gap-2 border px-4 py-3 rounded-2xl text-sm"
                style={{
                  color: "var(--kw-dark)",
                  borderColor: "rgba(27,80,58,0.12)",
                  backgroundColor: "transparent",
                }}
              >
                Explore Features
              </a>
            </div>

            <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs md:text-sm">
              <div className="flex items-start gap-3">
                <div
                  className="rounded-lg p-2"
                  style={{ backgroundColor: "var(--kw-light)" }}
                >
                  <Zap size={18} style={{ color: "var(--kw-dark)" }} />
                </div>
                <div>
                  <div className="font-medium">Estimate Savings</div>
                  <div className="mt-1" style={{ color: "#4B5563" }}>
                    See potential monthly savings from simple changes.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="rounded-lg p-2"
                  style={{ backgroundColor: "rgba(68,178,88,0.08)" }}
                >
                  <Cpu size={18} style={{ color: "var(--kw-dark)" }} />
                </div>
                <div>
                  <div className="font-medium">Appliance Profiles</div>
                  <div className="mt-1" style={{ color: "#4B5563" }}>
                    Predefined wattage & usage patterns for common appliances.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="rounded-lg p-2"
                  style={{ backgroundColor: "var(--kw-light)" }}
                >
                  <Camera size={18} style={{ color: "var(--kw-dark)" }} />
                </div>
                <div>
                  <div className="font-medium">OCR Label Read</div>
                  <div className="mt-1" style={{ color: "#4B5563" }}>
                    Snap a label or input specs — automatic parsing of power
                    info.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* FEATURES */}
        <section id="features" className="mt-20">
          <h2 className="text-2xl font-bold">Key Features</h2>
          <p className="mt-2 max-w-2xl" style={{ color: "#4B5563" }}>
            Everything you need to quickly estimate household electricity
            consumption and costs.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature
              icon={<Camera size={20} style={{ color: "var(--kw-dark)" }} />}
              title="OCR Power Label"
              desc="Take a photo of an appliance label; KiloWatch extracts wattage and unit details automatically."
            />
            <Feature
              icon={<Cpu size={20} style={{ color: "var(--kw-dark)" }} />}
              title="Smart Appliance Profiles"
              desc="Use or tweak preset appliance profiles (TV, fridge, pump, fan) with consistent kW storage."
            />
            <Feature
              icon={<FileText size={20} style={{ color: "var(--kw-dark)" }} />}
              title="Detailed Reports"
              desc="Breakdown by appliance, usage schedule, and monthly cost with simple suggestions to save."
            />
            <Feature
              icon={<Zap size={20} style={{ color: "var(--kw-dark)" }} />}
              title="Scenario Comparison"
              desc="Compare usage scenarios (more efficient bulbs, shorter run-times) to project savings."
            />
            <Feature
              icon={<Download size={20} style={{ color: "var(--kw-dark)" }} />}
              title="Offline APK"
              desc="Downloadable APK for local use — no continuous backend required."
            />
            <Feature
              icon={<Camera size={20} style={{ color: "var(--kw-dark)" }} />}
              title="CSV Export"
              desc="Export appliance lists and estimates for sharing or academic use."
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mt-20">
          <h3 className="text-xl font-semibold">
            How KiloWatch calculates estimations
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="p-4 rounded-xl shadow-sm"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <div className="font-medium">1. Gather Appliance Data</div>
              <div className="mt-2" style={{ color: "#4B5563" }}>
                Use the OCR or manually add name, rated power (W/kW), and
                typical hours/day.
              </div>
            </div>
            <div
              className="p-4 rounded-xl shadow-sm"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <div className="font-medium">2. Normalize Units</div>
              <div className="mt-2" style={{ color: "#4B5563" }}>
                All power is normalized to kW internally so calculations remain
                consistent across the app.
              </div>
            </div>
            <div
              className="p-4 rounded-xl shadow-sm"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <div className="font-medium">3. Estimate Monthly Cost</div>
              <div className="mt-2" style={{ color: "#4B5563" }}>
                kW × hours/day × days/month × tariff = estimated monthly cost.
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-20">
          <h3 className="text-xl font-semibold">Frequently asked questions</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FAQ
              q="Is KiloWatch real-time monitoring?"
              a="No — KiloWatch is an estimation tool. It uses appliance profiles and user inputs to provide plausible monthly cost estimates."
            />
            <FAQ
              q="Does OCR work offline?"
              a="OCR is bundled in the APK for on-device parsing, but some advanced parsing/updates may require occasional connectivity."
            />
            <FAQ
              q="Can I edit appliance profiles?"
              a="Yes — profiles are editable. You can correct wattage, add hours, and store custom appliances."
            />
            <FAQ
              q="Is my data stored locally?"
              a="By default, data is local in the APK. Cloud sync is optional and introduced only if the user enables it."
            />
          </div>
        </section>

        {/* FOOTER / CTA */}
        <section id="download" className="mt-16 mb-24">
          <div
            className="rounded-2xl p-8 text-white"
            style={{
              background:
                "linear-gradient(90deg, var(--kw-primary) 0%, var(--kw-dark) 100%)",
            }}
          >
            <div className="max-w-3xl">
              <h4 className="text-2xl font-bold">Ready to estimate & save?</h4>
              <p className="mt-2 text-sm opacity-90">
                Download the APK, test with your appliance labels, and start
                finding quick savings today.
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">
                <a
                  className="inline-flex items-center gap-2 text-black px-5 py-3 rounded-2xl font-semibold shadow"
                  href="/downloads/KiloWatch.apk"
                  style={{ backgroundColor: "white" }}
                >
                  Download APK
                </a>
                <a
                  className="inline-flex items-center gap-2 border px-4 py-3 rounded-2xl"
                  href="#faq"
                  style={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "white",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* Small supporting components - in the real project split these into their own files (components/FeatureCard.jsx, Footer.jsx, etc) */

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-6 bg-white rounded-2xl shadow-sm border kw-card-border"
      style={{ border: "1px solid rgba(27,80,58,0.06)" }}
    >
      <div className="flex items-center gap-4">
        <div
          className="p-3 rounded-lg"
          style={{ backgroundColor: "var(--kw-light)" }}
        >
          {icon}
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="mt-2 text-sm" style={{ color: "#4B5563" }}>
            {desc}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FAQ({ q, a }) {
  return (
    <div
      className="p-4 bg-white rounded-xl shadow-sm"
      style={{ border: "1px solid rgba(0,0,0,0.04)" }}
    >
      <div className="font-medium">{q}</div>
      <div className="mt-2 text-sm" style={{ color: "#4B5563" }}>
        {a}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-semibold">KiloWatch</div>
          <div className="text-sm mt-1" style={{ color: "#6B7280" }}>
            Estimate electricity. Save money. Learn faster.
          </div>
        </div>

        <div className="text-sm" style={{ color: "#6B7280" }}>
          © {new Date().getFullYear()} KiloWatch — Built for estimation and
          energy awareness.
        </div>
      </div>
    </footer>
  );
}
