import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app_url } from "../../../url.js";
import { useAuth } from "../../../store/selector";
import DropDown from "../../components/DropDown/DropDown.jsx";

function GoogleIcon() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function CarIllustration() {
  return (
    <svg
      viewBox="0 0 400 560"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        <radialGradient id="glow1" cx="70%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#1a3a5c" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#05080f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="headlightL" cx="30%" cy="60%" r="30%">
          <stop offset="0%" stopColor="#39acf9" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#39acf9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="headlightR" cx="72%" cy="60%" r="30%">
          <stop offset="0%" stopColor="#39acf9" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#39acf9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="560" fill="#080c14" />
      <rect width="400" height="560" fill="url(#glow1)" />
      {[
        [40, 30, 1, 0.6],
        [90, 55, 0.8, 0.5],
        [150, 20, 1.2, 0.7],
        [220, 45, 0.8, 0.4],
        [300, 25, 1, 0.6],
        [360, 60, 1.2, 0.5],
        [70, 110, 0.6, 0.4],
        [330, 80, 0.8, 0.5],
        [180, 90, 0.6, 0.3],
      ].map(([cx, cy, r, op], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="white" opacity={op} />
      ))}
      <path d="M0 420 L400 420 L400 560 L0 560 Z" fill="#0e1520" />
      <path d="M0 418 L400 418 L400 424 L0 424 Z" fill="#1a2535" />
      {[440, 470, 500, 530].map((y, i) => (
        <rect
          key={i}
          x="180"
          y={y}
          width="40"
          height="6"
          rx="3"
          fill="#2a3a50"
          opacity={0.8 - i * 0.2}
        />
      ))}
      <ellipse cx="120" cy="390" rx="120" ry="80" fill="url(#headlightL)" />
      <ellipse cx="290" cy="390" rx="120" ry="70" fill="url(#headlightR)" />
      <g transform="translate(60, 290)">
        <ellipse cx="140" cy="130" rx="130" ry="12" fill="#000" opacity="0.4" />
        <rect x="10" y="80" width="260" height="55" rx="10" fill="#1a2642" />
        <path
          d="M50 80 Q60 35 100 28 L180 28 Q220 35 230 80 Z"
          fill="#1e2d4a"
        />
        <path
          d="M62 76 Q70 42 103 36 L178 36 Q210 42 218 76 Z"
          fill="#0d1828"
          opacity="0.9"
        />
        <path
          d="M70 72 Q77 50 105 44 L145 44 Q148 54 148 72 Z"
          fill="#39acf9"
          opacity="0.07"
        />
        <line
          x1="148"
          y1="36"
          x2="148"
          y2="80"
          stroke="#0d1828"
          strokeWidth="4"
        />
        <rect x="68" y="27" width="145" height="3" rx="1.5" fill="#2a3d5c" />
        <path d="M10 82 Q15 68 45 62 L90 60 L90 82 Z" fill="#182138" />
        <path d="M270 82 Q265 68 235 62 L190 60 L190 82 Z" fill="#182138" />
        <rect x="8" y="118" width="55" height="18" rx="5" fill="#10182a" />
        <rect x="217" y="118" width="55" height="18" rx="5" fill="#10182a" />
        <rect x="18" y="120" width="38" height="10" rx="3" fill="#0a1020" />
        {[28, 37, 46].map((x, i) => (
          <line
            key={i}
            x1={x}
            y1="120"
            x2={x}
            y2="130"
            stroke="#1a2642"
            strokeWidth="1"
          />
        ))}
        <rect x="12" y="88" width="32" height="14" rx="4" fill="#0a1422" />
        <rect
          x="14"
          y="90"
          width="28"
          height="10"
          rx="3"
          fill="#39acf9"
          opacity="0.9"
        />
        <rect
          x="14"
          y="90"
          width="10"
          height="10"
          rx="2"
          fill="#60c8ff"
          opacity="0.6"
        />
        <rect x="236" y="88" width="32" height="14" rx="4" fill="#0a1422" />
        <rect
          x="238"
          y="90"
          width="28"
          height="10"
          rx="3"
          fill="#39acf9"
          opacity="0.9"
        />
        <rect
          x="256"
          y="90"
          width="10"
          height="10"
          rx="2"
          fill="#60c8ff"
          opacity="0.6"
        />
        <path
          d="M95 60 Q97 90 95 135"
          stroke="#253550"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M185 60 Q183 90 185 135"
          stroke="#253550"
          strokeWidth="1"
          fill="none"
        />
        <rect x="105" y="95" width="22" height="5" rx="2.5" fill="#2a3d5c" />
        <rect x="153" y="95" width="22" height="5" rx="2.5" fill="#2a3d5c" />
        <path d="M22 128 Q22 108 55 108 Q88 108 88 128" fill="#0a0f1a" />
        <path d="M192 128 Q192 108 225 108 Q258 108 258 128" fill="#0a0f1a" />
        {[55, 225].map((cx, i) => (
          <g key={i}>
            <circle cx={cx} cy="128" r="22" fill="#0d1018" />
            <circle cx={cx} cy="128" r="15" fill="#141c28" />
            <circle cx={cx} cy="128" r="8" fill="#1e2a3a" />
            <circle cx={cx} cy="128" r="4" fill="#39acf9" opacity="0.6" />
            <line
              x1={cx}
              y1="113"
              x2={cx}
              y2="143"
              stroke="#253550"
              strokeWidth="2"
            />
            <line
              x1={cx - 15}
              y1="128"
              x2={cx + 15}
              y2="128"
              stroke="#253550"
              strokeWidth="2"
            />
            <line
              x1={cx - 11}
              y1="117"
              x2={cx + 11}
              y2="139"
              stroke="#253550"
              strokeWidth="1.5"
            />
            <line
              x1={cx + 11}
              y1="117"
              x2={cx - 11}
              y2="139"
              stroke="#253550"
              strokeWidth="1.5"
            />
          </g>
        ))}
        <line
          x1="-5"
          y1="93"
          x2="-20"
          y2="91"
          stroke="#39acf9"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="-5"
          y1="100"
          x2="-28"
          y2="98"
          stroke="#39acf9"
          strokeWidth="1.5"
          opacity="0.2"
        />
        <line
          x1="-5"
          y1="107"
          x2="-18"
          y2="106"
          stroke="#39acf9"
          strokeWidth="1"
          opacity="0.15"
        />
      </g>
      <rect x="0" y="280" width="400" height="140" fill="#080c14" />
      {[
        [20, 230, 18, 50],
        [50, 240, 25, 40],
        [80, 215, 30, 65],
        [120, 235, 20, 45],
        [300, 225, 30, 55],
        [340, 240, 20, 40],
        [365, 220, 25, 60],
      ].map(([x, y, w, h], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={w}
          height={h}
          fill={i % 2 === 0 ? "#0d1422" : "#0e1524"}
        />
      ))}
      <rect x="90" y="205" width="12" height="12" fill="#0e1524" />
      <rect x="25" y="220" width="8" height="12" fill="#0d1422" />
      {[
        [84, 220, "#39acf9", 0.5],
        [95, 235, "#39acf9", 0.3],
        [305, 232, "#39acf9", 0.4],
        [345, 248, "#ffd966", 0.4],
        [370, 228, "#39acf9", 0.35],
      ].map(([x, y, c, op], i) => (
        <rect key={i} x={x} y={y} width="3" height="3" fill={c} opacity={op} />
      ))}
    </svg>
  );
}

const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function validateLogin({ email, password }) {
  const e = {};
  if (!email.trim()) e.email = "Email is required.";
  else if (!isValidEmail(email)) e.email = "Enter a valid email address.";
  if (!password) e.password = "Password is required.";
  else if (password.length < 6)
    e.password = "Password must be at least 6 characters.";
  return e;
}

function validateRegister({ name, email, password, role }) {
  const e = {};
  if (!name.trim()) e.name = "Full name is required.";
  if (!email.trim()) e.email = "Email is required.";
  else if (!isValidEmail(email)) e.email = "Enter a valid email address.";
  if (!password) e.password = "Password is required.";
  else if (password.length < 6)
    e.password = "Password must be at least 6 characters.";
  if (!role) e.role = "role number is required.";
  return e;
}

function Alert({ type, message }) {
  if (!message) return null;
  const base = "rounded-xl px-4 py-2.5 text-xs mb-4 flex items-start gap-2";
  const styles = {
    error: `${base} bg-red-50 border border-red-200 text-red-700`,
    success: `${base} bg-green-50 border border-green-200 text-green-700`,
  };
  return (
    <div className={styles[type]}>
      <span className="mt-px">{type === "error" ? "⚠️" : "✅"}</span>
      <span>{message}</span>
    </div>
  );
}

function InputField({
  label,
  type = "text",
  placeholder,
  icon,
  value,
  onChange,
  error,
}) {
  return (
    <div className="mb-3">
      <label className="block text-xs font-medium text-gray-500 mb-1">
        {label}
      </label>
      <div
        className={`flex items-center gap-2 bg-[#edf0f7] border rounded-xl px-3 focus-within:border-[#39acf9] transition-colors duration-200 ${error ? "border-red-400" : "border-white"}`}
      >
        <span className="text-gray-400 text-base">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-transparent py-2.5 text-sm text-gray-800 outline-none placeholder-gray-400"
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}
    </div>
  );
}

function SubmitButton({ label, loading, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full bg-[#39acf9] text-white mt-1 py-2.5 rounded-2xl text-sm font-medium cursor-pointer hover:bg-[#50b7fc] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      )}
      {label}
    </button>
  );
}

function GoogleButton({ label }) {
  return (
    <button className="w-full flex items-center justify-center gap-3 py-2.5 px-4 bg-white border border-gray-200 rounded-2xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 cursor-pointer">
      <GoogleIcon />
      {label}
    </button>
  );
}

function Divider({ text }) {
  return (
    <div className="flex items-center gap-3 my-3">
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-xs text-gray-400 whitespace-nowrap">{text}</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

function LoginForm({ onSwitch, onSubmit, loading, serverError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const errs = validateLogin({ email, password });
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    onSubmit({ email, password });
  };

  return (
    <div className="animate-fadeIn">
      <Alert type="error" message={serverError} />

      <InputField
        label="Email"
        type="email"
        placeholder="you@example.com"
        icon="✉"
        value={email}
        onChange={setEmail}
        error={errors.email}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="••••••••"
        icon="🔒"
        value={password}
        onChange={setPassword}
        error={errors.password}
      />

      <div className="text-right mb-4 -mt-1">
        <a href="#" className="text-xs text-[#39acf9] hover:underline">
          Forgot password?
        </a>
      </div>

      <div className="mb-3">
        <SubmitButton
          label="Sign in"
          loading={loading}
          onClick={handleSubmit}
        />
      </div>

      <Divider text="or continue with" />
      <GoogleButton label="Continue with Google" />

      <p className="text-center text-xs text-gray-500 mt-4">
        No account?{" "}
        <button
          onClick={onSwitch}
          className="text-[#39acf9] font-medium hover:underline cursor-pointer bg-transparent border-none"
        >
          Create one
        </button>
      </p>
    </div>
  );
}

function RegisterForm({
  onSwitch,
  onSubmit,
  loading,
  serverError,
  serverSuccess,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [role, setRole] = useState("");

  const handleSubmit = () => {
    const errs = validateRegister({ name, email, password, role, role });
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    onSubmit({ name, email, password, role, role });
  };

  return (
    <div className="animate-fadeIn">
      <Alert type="error" message={serverError} />
      <Alert type="success" message={serverSuccess} />

      <InputField
        label="Full name"
        placeholder="Jane Smith"
        icon="👤"
        value={name}
        onChange={setName}
        error={errors.name}
      />
      <InputField
        label="Email"
        type="email"
        placeholder="you@example.com"
        icon="✉"
        value={email}
        onChange={setEmail}
        error={errors.email}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Create a strong password"
        icon="🔒"
        value={password}
        onChange={setPassword}
        error={errors.password}
      />

      <div className="mt-3 mb-5">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Role
        </label>

        <div
          className={`flex items-center border rounded-lg px-3 py-2 ${
            errors.role ? "border-red-500" : "border-gray-300"
          } focus-within:ring-2 focus-within:ring-[#39acf9]`}
        >
          <span className="mr-2 text-gray-400">👥</span>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-transparent outline-none text-sm text-gray-700"
          >
            <option value="" disabled>
              Select role
            </option>
            <option value="customer">Customer</option>
            <option value="owner">Owner</option>
          </select>
        </div>

        {errors.role && (
          <p className="text-red-500 text-xs mt-1">{errors.role}</p>
        )}
      </div>

      <div className="mt-1 mb-3">
        <SubmitButton
          label="Create account"
          loading={loading}
          onClick={handleSubmit}
        />
      </div>

      <Divider text="or sign up with" />
      <GoogleButton label="Sign up with Google" />

      <p className="text-center text-xs text-gray-500 mt-4">
        Already have an account?{" "}
        <button
          onClick={onSwitch}
          className="text-[#39acf9] font-medium hover:underline cursor-pointer bg-transparent border-none"
        >
          Sign in
        </button>
      </p>
    </div>
  );
}

export default function LoginPage() {
  const navigate = useNavigate();

  const [tab, setTab] = useState("login");
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [serverSuccess, setServerSuccess] = useState("");
  const { setUser } = useAuth();

  const clearMessages = () => {
    setServerError("");
    setServerSuccess("");
  };
  const handleTabSwitch = (t) => {
    setTab(t);
    clearMessages();
  };

  const handleLogin = async ({ email, password }) => {
    clearMessages();
    setLoading(true);
    console.log("Reached here");

    try {
      const res = await fetch(`http://localhost:4000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed.");
      // localStorage.setItem("token", data.token);
      setUser(data.user);
      console.log(data.user);

      navigate("/");
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async ({ name, email, password, role }) => {
    clearMessages();
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:4000/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed.");

      setUser(data);

      setServerSuccess("Account created successfully! Redirecting to sign in…");
      setTimeout(() => handleTabSwitch("login"), 1800);
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&family=DM+Sans:wght@300;400;500&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-dm   { font-family: 'DM Sans', sans-serif; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.25s ease forwards; }
      `}</style>

      <div className="min-h-screen bg-[#edf0f7] flex items-center justify-center p-4 font-dm">
        <div
          className="w-full max-w-4xl flex rounded-3xl overflow-hidden shadow-2xl border border-white/60"
          style={{ minHeight: "580px" }}
        >
          <div className="hidden md:flex flex-1 relative flex-col justify-end p-8 bg-[#080c14] overflow-hidden">
            <CarIllustration />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#39acf9]/20 border border-[#39acf9]/40 rounded-full px-4 py-1.5 mb-4">
                <svg
                  className="w-3.5 h-3.5 text-[#39acf9]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-5a1 1 0 00-.293-.707l-4-4A1 1 0 0015 3H3z" />
                </svg>
                <span className="text-[#39acf9] text-xs font-medium">
                  Premium Fleet
                </span>
              </div>
              <h2 className="font-syne text-white text-2xl font-bold leading-tight mb-2">
                Drive your
                <br />
                next adventure
              </h2>
              <p className="text-white/50 text-xs leading-relaxed max-w-[220px]">
                Luxury and economy cars available for daily, weekly, or monthly
                rentals.
              </p>
              <div className="flex gap-1.5 mt-5">
                <div className="w-5 h-1.5 rounded-full bg-[#39acf9]" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
              </div>
            </div>
          </div>

          <div className="flex-1 bg-[#edf0f7] flex flex-col justify-center px-8 py-10">
            <div className="flex items-center gap-2 mb-7">
              <div className="w-8 h-8 bg-[#39acf9] rounded-xl flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-5a1 1 0 00-.293-.707l-4-4A1 1 0 0015 3H3z" />
                </svg>
              </div>
              <span className="font-syne font-bold text-gray-900 text-base">
                WayDex
              </span>
            </div>

            <div className="flex bg-white/60 border border-white rounded-xl p-1 mb-6 shadow-sm">
              {["login", "register"].map((t) => (
                <button
                  key={t}
                  onClick={() => handleTabSwitch(t)}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer border-none
                    ${tab === t ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 bg-transparent hover:text-gray-700"}`}
                >
                  {t === "login" ? "Sign in" : "Register"}
                </button>
              ))}
            </div>

            {tab === "login" ? (
              <LoginForm
                onSwitch={() => handleTabSwitch("register")}
                onSubmit={handleLogin}
                loading={loading}
                serverError={serverError}
              />
            ) : (
              <RegisterForm
                onSwitch={() => handleTabSwitch("login")}
                onSubmit={handleRegister}
                loading={loading}
                serverError={serverError}
                serverSuccess={serverSuccess}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
