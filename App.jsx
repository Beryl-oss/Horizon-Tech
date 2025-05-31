
import React, { useState } from 'react';
import './index.css';
import logo from './logo.png';
import moon from './moon-img.png';
import sun from './sun-img.png';
import githubIcon from './github-img.png';
import portfolioIcon from './portfolio-img.png';
import { Menu, X, MessageSquare, Send, Palette, Camera, Video, Globe } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = () => {
    const message = encodeURIComponent("Bonjour, je suis intéressé(e) par vos services de design.");
    window.open(`https://wa.me/50935832268?text=${message}`, '_blank');
  };

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="min-h-screen transition-all duration-500 bg-gradient-to-b from-slate-900 via-slate-800 to-black">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-md p-4">
          <div className="container mx-auto flex justify-between items-center flex-wrap text-white">
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="w-10" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Horizon Tech
              </h1>
            </div>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="#services" className="hover:text-cyan-300">Services</a>
              <a href="#portfolio" className="hover:text-cyan-300">Portfolio</a>
              <a href="#testimonials" className="hover:text-cyan-300">Témoignages</a>
              <a href="#faq" className="hover:text-cyan-300">FAQ</a>
              <a href="https://github.com" className="flex items-center gap-1 hover:underline">
                <img src={githubIcon} alt="GitHub" className="w-4" /> GitHub
              </a>
              <a href="https://votreportfolio.com" className="flex items-center gap-1 hover:underline">
                <img src={portfolioIcon} alt="Portfolio" className="w-4" /> Portfolio
              </a>
              <button
                onClick={handleContactClick}
                className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-full flex items-center gap-2"
              >
                Contact
                <MessageSquare className="w-4 h-4" />
              </button>
              <div
                onClick={toggleTheme}
                className="w-[60px] h-[30px] bg-gray-600/50 rounded-full flex items-center justify-around cursor-pointer relative"
              >
                <span
                  className={`absolute w-7 h-7 rounded-full top-1/2 -translate-y-1/2 transition-all duration-300 ${darkMode ? 'left-[5px] bg-blue-200 shadow' : 'left-[calc(100%-34.5px)] bg-yellow-300 shadow-yellow-400 shadow'}`}
                ></span>
                <img src={moon} alt="Dark Mode" className="w-5 z-10" />
                <img src={sun} alt="Light Mode" className="w-5 z-10" />
              </div>
            </nav>
            <div className="md:hidden flex items-center gap-4 mt-2">
              <button onClick={toggleTheme}>
                <img src={darkMode ? moon : sun} alt="Mode" className="w-6" />
              </button>
              <button onClick={toggleMenu}>
                {menuOpen ? <X className="w-6" /> : <Menu className="w-6" />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden text-white flex flex-col gap-4 mt-4 px-4">
              <a href="#services" onClick={toggleMenu}>Services</a>
              <a href="#portfolio" onClick={toggleMenu}>Portfolio</a>
              <a href="#testimonials" onClick={toggleMenu}>Témoignages</a>
              <a href="#faq" onClick={toggleMenu}>FAQ</a>
              <a href="https://github.com" className="flex items-center gap-1">
                <img src={githubIcon} alt="GitHub" className="w-4" /> GitHub
              </a>
              <a href="https://votreportfolio.com" className="flex items-center gap-1">
                <img src={portfolioIcon} alt="Portfolio" className="w-4" /> Portfolio
              </a>
              <button
                onClick={() => {
                  toggleMenu();
                  handleContactClick();
                }}
                className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-full flex items-center justify-center gap-2"
              >
                Contact
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          )}
        </header>
        <section className="text-white text-center py-20 px-6">
          <h2 className="text-5xl font-bold mb-6">Des Designs Qui Donnent Vie à Vos Idées</h2>
          <p className="text-xl mb-8">Solutions créatives complètes pour votre entreprise.</p>
          <button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition-transform px-6 py-3 rounded-full font-bold flex items-center gap-2 mx-auto"
          >
            Obtenir le Mien <Send className="w-5 h-5" />
          </button>
        </section>
        <section id="services" className="text-white py-20 px-6 bg-black/20">
          <h2 className="text-4xl font-bold mb-12 text-center">Nos Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: <Palette />, title: 'Création Logo', text: 'Logos professionnels et uniques.', price: '500 G' },
              { icon: <Camera />, title: 'Retouche Photo', text: 'Sublimez vos images.', price: '300 G' },
              { icon: <Video />, title: 'Vidéos Promo', text: 'Montages vidéos percutants.', price: '1000 G' },
              { icon: <Globe />, title: 'Sites Web', text: 'Présence en ligne moderne.', price: '5000 G' },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-xl text-center backdrop-blur-md hover:scale-105 transition-transform">
                <div className="mb-4 text-purple-400">{s.icon}</div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p>{s.text}</p>
                <p className="mt-2 text-purple-300 font-semibold">{s.price}</p>
              </div>
            ))}
          </div>
        </section>
        <footer className="bg-black/40 text-center py-6 text-white">
          © 2025 Horizon Tech. Tous droits réservés.
        </footer>
      </main>
    </div>
  );
}

export default App;
