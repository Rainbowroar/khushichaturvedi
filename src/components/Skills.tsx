import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Database, Users, Brain, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "primary",
      skills: ["Python", "Java", "SQL"]
    },
    {
      title: "Web Technologies",
      icon: Palette,
      color: "coral",
      skills: ["HTML5", "CSS", "UX/UI Design"]
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      color: "secondary",
      skills: ["Excel", "PowerPoint", "MySQL", "Figma"]
    },
    {
      title: "Development Environment",
      icon: Database,
      color: "ocean",
      skills: ["PyCharm", "VS Code", "Jupyter"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "tertiary",
      skills: ["Communication", "People Management", "Problem Solving"]
    },
    {
      title: "Core Competencies",
      icon: Brain,
      color: "accent",
      skills: ["UI/UX Design", "Frontend Development", "Data Analysis"]
    }
  ];

  const getIconBgColor = (color: string) => {
    switch(color) {
      case 'primary': return 'bg-primary text-primary-foreground';
      case 'coral': return 'bg-coral text-coral-foreground';
      case 'secondary': return 'bg-secondary text-secondary-foreground';
      case 'ocean': return 'bg-ocean text-ocean-foreground';
      case 'tertiary': return 'bg-tertiary text-tertiary-foreground';
      case 'accent': return 'bg-accent text-accent-foreground';
      default: return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and soft skills that enable me to create exceptional digital experiences.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-coral mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="skill-card group cursor-default">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${getIconBgColor(category.color)} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="text-sm py-1 px-3 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;