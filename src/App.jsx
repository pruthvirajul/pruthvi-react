import { useState } from "react";
import "./App.css";
import logoImg from "./assets/logo.svg";
import MobileDrawer from "./components/MobileDrawer";

function Header({ onSignIn, onMenu }) {
  return (
    <header className="header">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button className="hamburger" onClick={onMenu} aria-label="menu">
          ☰
        </button>
        <img src={logoImg} alt="TrainHub" className="logo-img" />
      </div>
      <nav>
        <button className="btn ghost" onClick={onSignIn}>
          Sign In
        </button>
      </nav>
    </header>
  );
}

function Features() {
  const items = [
    { title: "Easy Booking", text: "Book sessions with top trainers in just a few clicks" },
    { title: "Expert Trainers", text: "Connect with verified professionals in your field" },
    { title: "Flexible Schedule", text: "Choose time slots that work best for you" }
  ];

  return (
    <section className="features">
      {items.map((it) => (
        <div key={it.title} className="card">
          <div className="icon" />
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </div>
      ))}
    </section>
  );
}

function CTA({ onUser, onTrainer }) {
  return (
    <section className="cta">
      <h2>Ready to Get Started?</h2>
      <p>Join thousands of learners and trainers already on the platform</p>
      <div className="cta-buttons">
        <button className="btn primary" onClick={onUser}>Get Started as User</button>
        <button className="btn outline" onClick={onTrainer}>Get Started as Trainer</button>
      </div>
    </section>
  );
}

function LoginView({ onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async () => {
    // frontend stub: real login will call backend API
    setMsg("Logged in");
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
      <div className="auth-actions">
        <button className="btn primary" onClick={submit}>Login</button>
        <button className="btn ghost" onClick={onBack}>Back</button>
      </div>
      <p className="muted">{msg}</p>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="page">
      <Header onSignIn={() => setView("login")} onMenu={() => setDrawerOpen(true)} />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} onNavigate={(v) => setView(v)} />
      <div style={{position:'absolute', right:18, top:22}}>
        <button className="btn ghost" onClick={() => setView('notes')}>Project Notes</button>
      </div>
      {view === "home" ? (
        <main>
          <div className="hero">
            <h1>Everything you need for successful learning</h1>
            <p className="hero-sub">Find trainers, book sessions and learn faster</p>
          </div>
          <Features />
          <CTA onUser={() => setView("signup")} onTrainer={() => setView("signup")} />
        </main>
      ) : view === "login" ? (
        <LoginView onBack={() => setView("home")} />
      ) : view === "notes" ? (
        <main>
          <section className="notes">
            <h1>Training App – Project Notes &amp; Topics</h1>

            <h2>Problem Statement</h2>
            <p>Users want to find trainers (fitness, coding, yoga, etc.), check their availability, and book training slots easily. Trainers want to register, manage their profile, availability, and bookings.</p>

            <h2>User Roles</h2>
            <ul>
              <li>Trainer</li>
              <li>User (Trainee)</li>
              <li>Admin (optional – future scope)</li>
            </ul>

            <h2>Core Features</h2>
            <h3>Trainer Module</h3>
            <ul>
              <li>Trainer Registration &amp; Login</li>
              <li>Trainer Profile: Name, Skill/Category, Experience, Location/Online, Fee per session</li>
              <li>Set Availability (Date, Time slots)</li>
              <li>View Bookings — Accept / Reject bookings</li>
            </ul>

            <h3>User Module</h3>
            <ul>
              <li>User Registration &amp; Login</li>
              <li>Search Trainer (skill, location, availability)</li>
              <li>View Trainer Profile, Book Slot, Booking History, Cancel Booking</li>
            </ul>

            <h3>Admin Module (Optional)</h3>
            <ul>
              <li>Manage Trainers &amp; Users</li>
              <li>Block / Approve Trainers, View all bookings</li>
            </ul>

            <h2>Application Flow</h2>
            <h4>User Flow</h4>
            <ol>
              <li>User registers/logs in</li>
              <li>User searches for trainer</li>
              <li>User checks availability</li>
              <li>User books slot</li>
              <li>Trainer confirms booking</li>
              <li>User attends training</li>
            </ol>

            <h4>Trainer Flow</h4>
            <ol>
              <li>Trainer registers/logs in</li>
              <li>Trainer creates profile</li>
              <li>Trainer adds availability</li>
              <li>Trainer receives booking request</li>
              <li>Trainer accepts/rejects booking</li>
            </ol>

            <h2>Database Design (Simple Explanation)</h2>
            <h4>User Table</h4>
            <ul>
              <li>user ID, name, email, password</li>
            </ul>
            <h4>Trainer Table</h4>
            <ul>
              <li>trainer ID, name, skill, availability, fee</li>
            </ul>
            <h4>Booking Table</h4>
            <ul>
              <li>booking ID, user ID, trainer ID, date, time, status</li>
            </ul>

            <h2>Screens / Pages</h2>
            <p>Common: Login, Register, Dashboard.</p>
            <p>Trainer Pages: Dashboard, Profile, Availability, Booking Requests.</p>
            <p>User Pages: Search Trainer, Trainer Detail, Booking, Booking History.</p>

            <h2>Extra Features (Bonus)</h2>
            <ul>
              <li>Filters (price, rating)</li>
              <li>Calendar view for availability</li>
              <li>Notifications, Payment integration, Ratings &amp; Reviews</li>
            </ul>

            <h2>Technologies</h2>
            <p>Frontend: React / React Native / Expo / Vite; Backend: Node.js, Express, MongoDB; Optional: Docker, Redis, Payment Gateway.</p>

            <div style={{marginTop:20}}>
              <button className="btn ghost" onClick={() => setView('home')}>Back</button>
            </div>
          </section>
        </main>
      ) : (
        <div className="centered">
          <h2>Signup</h2>
          <p>Signup flow placeholder.</p>
          <button className="btn ghost" onClick={() => setView("home")}>Back</button>
        </div>
      )}
    </div>
  );
}
