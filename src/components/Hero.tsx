import { Button } from '@/components/ui/button';
import { Download, Linkedin, Github, ChevronDown } from 'lucide-react';
import profileImage from '@/assets/khushi-profile-new.jpg';
const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full float-animation" style={{
        animationDelay: '0s'
      }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-coral/10 rounded-full float-animation" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-secondary/10 rounded-full float-animation" style={{
        animationDelay: '4s'
      }} />
        <div className="absolute bottom-60 right-10 w-24 h-24 bg-ocean/10 rounded-full float-animation" style={{
        animationDelay: '1s'
      }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="relative mb-8 mt-16 inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img src={profileImage} alt="Khushi Chaturvedi" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-coral rounded-full flex items-center justify-center">
              <span className="text-coral-foreground text-sm font-bold">👋</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-coral to-secondary bg-clip-text text-transparent">
              Crafting Delightful
            </span>
            <br />
            <span className="text-foreground">Digital Experiences</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">Hi! I'm Khushi, a passionate UI designer</p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            with a strong foundation in front-end development and UI/UX design. 
            I thrive on building responsive, user-friendly applications that deliver great experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('/khushi-resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://linkedin.com/in/khushi-chaturvedi-9182562a9/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://github.com/Rainbowroar', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button onClick={scrollToNext} className="animate-bounce text-primary hover:text-coral transition-colors duration-300" aria-label="Scroll to about section">
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;