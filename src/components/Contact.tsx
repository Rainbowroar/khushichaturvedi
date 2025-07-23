import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manishakhushi4@gmail.com",
      href: "mailto:manishakhushi4@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7566816862",
      href: "tel:+917566816862",
      color: "coral"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/khushi-chaturvedi-9182562a9",
      href: "https://linkedin.com/in/khushi-chaturvedi-9182562a9",
      color: "ocean"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Rainbowroar",
      href: "https://github.com/Rainbowroar",
      color: "secondary"
    }
  ];

  const getIconBgColor = (color: string) => {
    switch(color) {
      case 'primary': return 'bg-primary text-primary-foreground';
      case 'coral': return 'bg-coral text-coral-foreground';
      case 'ocean': return 'bg-ocean text-ocean-foreground';
      case 'secondary': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? I'd love to hear from you. Let's create something amazing together!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-coral mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="skill-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full min-h-[120px]"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="skill-card border-coral/20 bg-gradient-to-br from-coral/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-coral" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                      >
                        <div className={`p-3 rounded-lg ${getIconBgColor(info.color)} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{info.label}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="skill-card border-primary/20 bg-gradient-to-br from-primary/5 to-ocean/5">
                <CardContent className="py-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Let's Create Together</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm always excited to work on new projects and collaborate with passionate individuals. 
                      Whether you have a specific project in mind or just want to connect, I'd love to hear from you!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;