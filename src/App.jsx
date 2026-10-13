import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Approach from './components/Approach.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Team from './components/Team.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="demo-banner" role="note">
        Design demo: SereneMind is a fictional clinic. Nothing here is real medical care.
      </div>
      <Header />
      <main id="main">
        <Hero />
        <Approach />
        <Services />
        <About />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
