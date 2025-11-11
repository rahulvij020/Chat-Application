import { MessageCircle, ShieldCheck, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import chatPreview from "../assets/chat_preview.png";

const LandingPage = () => {
  // inline style to safely use CSS variables with fallback
  const rootStyle = {
    background: "var(--background, #f9fafb)",
    color: "var(--text-main, #111b21)",
  };

  const surfaceStyle = {
    background: "var(--surface, #ffffff)",
    borderColor: "var(--border-light, #e9edef)",
  };

  const primary = { color: "var(--primary-color, #00a884)" };

  return (
    <div className="min-h-screen flex flex-col" style={rootStyle}>
      {/* ===== Navbar ===== */}
      <header
        className="flex items-center justify-between shadow-md sticky top-0 z-50"
        style={{
          ...surfaceStyle,
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          padding: "1rem 2.5rem",
        }}
      >
        <h1 className="text-3xl font-bold" style={primary}>
          Chatly
        </h1>

        <nav className="flex items-center font-medium" style={{ color: "var(--text-secondary, #54656f)", gap: "2rem" }}>
          <a 
            href="#features" 
            className="transition-colors hover:opacity-80"
            style={{ color: "var(--text-secondary, #54656f)" }}
            onMouseEnter={(e) => e.target.style.color = "var(--primary-color, #00a884)"}
            onMouseLeave={(e) => e.target.style.color = "var(--text-secondary, #54656f)"}
          >
            Features
          </a>
          <a 
            href="#about" 
            className="transition-colors hover:opacity-80"
            style={{ color: "var(--text-secondary, #54656f)" }}
            onMouseEnter={(e) => e.target.style.color = "var(--primary-color, #00a884)"}
            onMouseLeave={(e) => e.target.style.color = "var(--text-secondary, #54656f)"}
          >
            About
          </a>
          <Link
            to="/login"
            className="inline-block rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--primary-color, #00a884)",
              color: "#fff",
              padding: "0.625rem 1.5rem",
              marginLeft: "1rem",
            }}
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between" style={{ ...surfaceStyle, padding: "5rem 2.5rem", gap: "4rem" }}>
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight" style={{ color: "var(--text-main, #111b21)" }}>
            Connect Instantly. <br />
            <span style={{ color: "var(--primary-color, #00a884)" }}>Chat Effortlessly.</span>
          </h2>

          <p className="text-lg md:text-xl max-w-md mx-auto md:mx-0 leading-relaxed" style={{ color: "var(--text-secondary, #54656f)" }}>
            Stay connected with your friends, team, or clients — all in one secure,
            modern, and easy-to-use chat platform.
          </p>

          <div style={{ paddingTop: "1rem" }}>
            <Link
              to="/signup"
              className="inline-block rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              style={{ 
                background: "linear-gradient(135deg, #00a884, #20c997)",
                boxShadow: "0 4px 15px rgba(0, 168, 132, 0.3)",
                color: "#fff",
                padding: "1rem 2.5rem",
              }}
            >
              Start Messaging
            </Link>
          </div>
        </div>

        {/* Image / Preview */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-[90%] max-w-lg rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300" style={{ border: "2px solid var(--border-light,#ddd)" }}>
            <img
              src={chatPreview}
              alt="Chat App Preview"
              className="w-full h-[480px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section id="features" style={{ background: "var(--background,#f9fafb)", padding: "6rem 2.5rem" }}>
        <h3 className="text-4xl md:text-5xl font-bold text-center" style={{ color: "var(--text-main,#111b21)", marginBottom: "4rem" }}>
          Why You'll Love Chatly 💬
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "2.5rem" }}>
          {[
            {
              icon: <MessageCircle size={36} />,
              title: "Real-Time Messaging",
              desc: "Experience lightning-fast conversations powered by WebSocket technology.",
            },
            {
              icon: <Users size={36} />,
              title: "Connect With Anyone",
              desc: "Start new chats, manage contacts, and stay connected effortlessly.",
            },
            {
              icon: <ShieldCheck size={36} />,
              title: "Secure & Private",
              desc: "Built with end-to-end encryption principles to protect your data.",
            },
            {
              icon: <Zap size={36} />,
              title: "Fast & Responsive",
              desc: "Optimized for speed and performance across all devices.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border"
              style={{ borderColor: "var(--border-light, #e9edef)", padding: "2rem" }}
            >
              <div className="flex justify-center" style={{ ...primary, marginBottom: "1.25rem" }}>
                {feature.icon}
              </div>
              <h4 className="font-bold text-xl" style={{ color: "var(--text-main, #111b21)", marginBottom: "0.75rem" }}>{feature.title}</h4>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary, #54656f)" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer CTA ===== */}
      <footer className="border-t" style={{ background: "var(--surface, #ffffff)", borderTop: "1px solid var(--border-light,#e9edef)" }}>
        <div className="text-center" style={{ padding: "5rem 2.5rem" }}>
          <h3 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-main, #111b21)", marginBottom: "2rem" }}>
            Ready to start your first conversation?
          </h3>
          <Link 
            to="/signup" 
            className="inline-block text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105" 
            style={{ 
              background: "linear-gradient(135deg, #00a884, #20c997)",
              color: "#fff",
              boxShadow: "0 4px 15px rgba(0, 168, 132, 0.3)",
              padding: "1rem 2.5rem",
            }}
          >
            Get Started
          </Link>
          <p className="text-sm" style={{ color: "var(--text-secondary, #54656f)", marginTop: "2.5rem" }}>
            © {new Date().getFullYear()} Chatly. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
