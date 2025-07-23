import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Globe, MapPin, Camera } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing my latest work in web development and UI/UX design, focusing on creating exceptional user experiences.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-coral mx-auto rounded-full mt-6"></div>
          </div>

          {/* Featured Project */}
          <Card className="skill-card border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/10 mb-8">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary to-coral p-8 lg:m-6">
                <div className="relative z-10 text-center text-white">
                  <Globe className="h-24 w-24 mx-auto mb-4 opacity-90" />
                  <h3 className="text-2xl font-bold mb-2">Travel.co</h3>
                  <p className="text-lg opacity-90">Frontend Travel Website</p>
                </div>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full"></div>
                  <div className="absolute top-8 right-8 w-6 h-6 bg-white rounded-full"></div>
                  <div className="absolute bottom-6 left-8 w-4 h-4 bg-white rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 lg:p-8">
                <CardHeader className="px-0 pt-0">
                  <div className="flex items-start justify-between mb-4">
                    <CardTitle className="text-2xl font-bold">Travel.co</CardTitle>
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="px-0 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    A comprehensive frontend travel website designed with a mobile-first approach. 
                    The project showcases modern web development practices with responsive design, 
                    high-quality imagery, and interactive features for enhanced user engagement.
                  </p>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Smartphone className="h-4 w-4 text-primary" />
                        <span className="text-sm">Mobile-First Design</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Camera className="h-4 w-4 text-coral" />
                        <span className="text-sm">High-Quality Imagery</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Globe className="h-4 w-4 text-secondary" />
                        <span className="text-sm">Video Content Integration</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-ocean" />
                        <span className="text-sm">Geolocation Features</span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">HTML5</Badge>
                      <Badge variant="secondary" className="bg-coral/10 text-coral">CSS</Badge>
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">UX/UI Design</Badge>
                      <Badge variant="secondary" className="bg-ocean/10 text-ocean">Responsive Design</Badge>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* More Projects Coming Soon */}
          <div className="text-center">
            <Card className="skill-card border-dashed border-2 border-muted-foreground/30 bg-muted/20">
              <CardContent className="py-12">
                <div className="text-muted-foreground">
                  <Globe className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">More Projects Coming Soon</h3>
                  <p>I'm constantly working on new projects. Check back soon for updates!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;