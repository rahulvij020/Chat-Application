import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, authCheck } from "../services/auth.js";
import LoadingScreen from "../components/LoadingScreen.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await authCheck();
        if (response.success) {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await login(form);
      if (response.success) {
        navigate("/chat");
      } else {
        setError(response.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--background)", padding: "1rem" }}
    >
      <div
        className="w-full max-w-md rounded-2xl shadow-md border animate-fade-in"
        style={{
          background: "var(--surface, #fff)",
          borderColor: "var(--border-light, #e5e7eb)",
          borderWidth: "1px",
          borderStyle: "solid",
          padding: "2.5rem 2rem",
        }}
      >
        {/* Title */}
        <h1
          className="text-3xl font-bold text-center"
          style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}
        >
          Welcome Back
        </h1>
        <p
          className="text-center"
          style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}
        >
          Log in to continue your chat 💬
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="input-field"
          />

          {error && (
            <p className="text-red-500 text-sm text-center font-medium" style={{ margin: "0" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full hover-lift"
            style={{ width: "100%" }}
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>

        {/* Footer */}
        <p
          className="text-center"
          style={{ color: "var(--text-secondary)", marginTop: "1.5rem" }}
        >
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="font-medium hover:underline"
            style={{ color: "var(--primary-color, #00A884)" }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
