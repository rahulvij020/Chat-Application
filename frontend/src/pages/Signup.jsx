import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authCheck, signup } from "../services/auth.js";
import LoadingScreen from "../components/LoadingScreen.jsx";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await authCheck();
        if (response.success) navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userData = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      const response = await signup(userData);
      if (response.success) {
        navigate("/login");
      } else {
        setError(response.message || "Signup failed. Try again.");
      }
    } catch (error) {
      console.error(error);
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
          Create Account
        </h1>
        <p
          className="text-center"
          style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}
        >
          Join the conversation today 👋
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="input-field"
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
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
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p
          className="text-center"
          style={{ color: "var(--text-secondary)", marginTop: "1.5rem" }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium hover:underline"
            style={{ color: "var(--primary-color, #00A884)" }}
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
