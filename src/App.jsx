import './index.css'

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to My Website</h1>
          <p>This is a great place to introduce yourself.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>Tell your story here.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>My Services</h2>
          <p>Describe what you offer.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Contact me at email@example.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App