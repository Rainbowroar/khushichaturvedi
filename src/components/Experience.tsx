import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Gaining hands-on experience in real-world projects and professional environments.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-coral mx-auto rounded-full mt-6"></div>
          </div>

          {/* Experience Card */}
          <Card className="skill-card border-primary/20 bg-gradient-to-br from-primary/5 to-coral/5">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary text-primary-foreground rounded-lg">
                    <Building className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">UX/UI Design Intern</CardTitle>
                    <p className="text-lg text-primary font-semibold">Vedsi</p>
                  </div>
                </div>
                <Badge className="bg-primary text-primary-foreground">Current</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>3 months</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Remote</span>
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed">
                Contributing to real-time projects and gaining hands-on experience in designing interactive user interfaces. 
                Working collaboratively with development teams to create user-centered design solutions that enhance user experience and engagement.
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Designing interactive user interfaces for web applications</li>
                  <li>Creating wireframes and prototypes using Figma</li>
                  <li>Collaborating with development teams on UI implementation</li>
                  <li>Conducting user research and usability testing</li>
                  <li>Maintaining design consistency across different platforms</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">UI Design</Badge>
                <Badge variant="secondary" className="bg-coral/20 text-coral-foreground">UX Research</Badge>
                <Badge variant="secondary" className="bg-ocean/20 text-ocean-foreground">Prototyping</Badge>
                <Badge variant="secondary" className="bg-tertiary/20 text-tertiary-foreground">Figma</Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">Team Collaboration</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Additional Experience Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground italic">
              Currently seeking new opportunities to expand my experience in web development and UI/UX design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;