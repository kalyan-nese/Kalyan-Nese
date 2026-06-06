import './App.css';

export default function App() {
  return (
    <div className="profile">
      <header className="hero">
        <div className="hero-content">
          <h1>Kalyan Nese</h1>
          <p className="subtitle">Welcome to my corner of the internet</p>
        </div>
      </header>

      <main className="content">
        <section className="about">
          <h2>About</h2>
          <p>
            Hi, I'm Kalyan. I'm always learning and exploring new things.
            I'm open to collaboration and always happy to connect with like-minded people.
          </p>
        </section>

        <section className="interests">
          <h2>Interests</h2>
          <div className="tags">
            {['Technology', 'Open Source', 'Web Development', 'Learning'].map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </section>

        <section className="connect">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out — I'd love to hear from you.</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Kalyan Nese</p>
      </footer>
    </div>
  );
}
