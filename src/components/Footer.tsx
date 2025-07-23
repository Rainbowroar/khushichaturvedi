import { Button } from '@/components/ui/button';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent mb-2">
              Khushi Chaturvedi
            </h3>
            <p className="text-background/70">
              Web Developer & UI/UX Designer
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-background/70 hover:text-background transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/70 flex items-center justify-center gap-2">
              © {currentYear} Made with <Heart className="h-4 w-4 text-coral" fill="currentColor" /> by Khushi Chaturvedi
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;