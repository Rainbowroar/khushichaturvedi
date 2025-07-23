import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <Skills />
        </div>
        <div className="reveal">
          <Experience />
        </div>
        <div className="reveal">
          <Projects />
        </div>
        <div className="reveal">
          <Services />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
