import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';
const About = () => {
  const education = [{
    degree: "B.Tech in CSE with specialization in Data Science",
    institution: "SRGI, Jhansi",
    period: "2022 – 2026",
    grade: "CGPA: 7.5",
    current: true
  }, {
    degree: "12th Grade - CBSE",
    institution: "Gwalior",
    period: "2022",
    grade: "74%",
    current: false
  }, {
    degree: "10th Grade - CBSE",
    institution: "Gwalior",
    period: "2020",
    grade: "78%",
    current: false
  }];
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-coral mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">Hi! I'm Khushi, a passionate Frontend web developer with a strong foundation in front-end development. I recently completed a comprehensive web development course, where I honed my skills in HTML, CSS and UI/UX.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive on building responsive, user-friendly websites and applications that solve real-world problems 
                and deliver great user experiences. My passion lies in creating intuitive interfaces that bridge the gap 
                between complex functionality and seamless user interaction.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my B.Tech in Computer Science with a specialization in Data Science, I'm excited about 
                the intersection of design and technology, always looking for ways to create more engaging and accessible 
                digital experiences.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((item, index) => <Card key={index} className={`skill-card ${item.current ? 'border-primary/50 bg-primary/5' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${item.current ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{item.degree}</h4>
                          <p className="text-muted-foreground mb-2">{item.institution}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {item.period}
                            </div>
                            <span className={`text-sm font-medium ${item.current ? 'text-primary' : 'text-muted-foreground'}`}>
                              {item.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;