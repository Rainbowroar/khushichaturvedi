import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Smartphone, Monitor, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI Design for Web & Mobile",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences across all devices and platforms.",
      features: [
        "Responsive Web Design",
        "Mobile App Interfaces",
        "User-Centered Design",
        "Design System Creation"
      ],
      color: "primary"
    },
    {
      icon: Monitor,
      title: "High-Quality Interactive Prototypes",
      description: "Bringing ideas to life with detailed, interactive prototypes that help visualize and test user flows before development.",
      features: [
        "Figma Prototyping",
        "User Flow Mapping",
        "Wireframe Creation",
        "Design Handoffs"
      ],
      color: "coral"
    },
    {
      icon: Zap,
      title: "Animation-Enhanced UX",
      description: "Adding delightful micro-interactions and animations that enhance user engagement and create memorable experiences.",
      features: [
        "Micro-Interactions",
        "Smooth Transitions",
        "Loading Animations",
        "Hover Effects"
      ],
      color: "secondary"
    }
  ];

  const getIconBgColor = (color: string) => {
    switch(color) {
      case 'primary': return 'bg-primary text-primary-foreground';
      case 'coral': return 'bg-coral text-coral-foreground';
      case 'secondary': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-primary text-primary-foreground';
    }
  };

  const getBorderColor = (color: string) => {
    switch(color) {
      case 'primary': return 'border-primary/20 hover:border-primary/40';
      case 'coral': return 'border-coral/20 hover:border-coral/40';
      case 'secondary': return 'border-secondary/20 hover:border-secondary/40';
      default: return 'border-primary/20 hover:border-primary/40';
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer a range of design and development services to help bring your digital vision to life with creativity and precision.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-coral mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className={`skill-card ${getBorderColor(service.color)} transition-all duration-300 h-full`}>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-lg ${getIconBgColor(service.color)} flex items-center justify-center mb-4`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm">What I Offer:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="skill-card border-primary/20 bg-gradient-to-br from-primary/5 to-coral/5 max-w-2xl mx-auto">
              <CardContent className="py-12 px-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Let's collaborate to create something amazing together. I'm always excited to work on new challenges and bring innovative ideas to life.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  onClick={() => {
                    const contactSection = document.querySelector('#contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;