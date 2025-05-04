import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight, Award, Users, Clock, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Badge className="mb-3">About Us</Badge>
              <h1 className="mb-6">
                Innovative Solutions for a <span className="gradient-text">Digital Future</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                We're a team of passionate technologists dedicated to creating software 
                that solves real-world problems and drives business growth.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">2010</p>
                  <p className="text-sm text-muted-foreground">Founded</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">200+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <Image
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Codezyra team collaborating"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-3">Our Story</Badge>
            <h2 className="mb-4">From Startup to Industry Leader</h2>
            <p className="text-muted-foreground">
              Learn about our journey from a small startup to becoming a leading software company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Tabs defaultValue="mission">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="mission">Mission</TabsTrigger>
                  <TabsTrigger value="vision">Vision</TabsTrigger>
                  <TabsTrigger value="values">Values</TabsTrigger>
                </TabsList>
                <TabsContent value="mission" className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="mb-4 text-muted-foreground">
                    To empower businesses through innovative software solutions that solve complex problems, 
                    enhance productivity, and drive sustainable growth.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <Award className="h-3 w-3 text-primary" />
                      </div>
                      <p>Deliver excellence in every project</p>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <Users className="h-3 w-3 text-primary" />
                      </div>
                      <p>Build lasting partnerships with clients</p>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <TrendingUp className="h-3 w-3 text-primary" />
                      </div>
                      <p>Drive innovation in technology</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="vision" className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="mb-4 text-muted-foreground">
                    To be the global leader in creating transformative software solutions that shape 
                    the future of industries and improve lives across the world.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <Award className="h-3 w-3 text-primary" />
                      </div>
                      <p>Become the first choice for software solutions</p>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <Users className="h-3 w-3 text-primary" />
                      </div>
                      <p>Foster a global community of innovation</p>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <TrendingUp className="h-3 w-3 text-primary" />
                      </div>
                      <p>Set new standards for software excellence</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="values" className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                  <p className="mb-4 text-muted-foreground">
                    Our core values guide everything we do, from how we develop software to how we 
                    interact with our clients and each other.
                  </p>
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <Award className="h-3 w-3 text-primary" />
                      </div>
                      <p>Integrity in all our actions</p>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <Users className="h-3 w-3 text-primary" />
                      </div>
                      <p>Continuous innovation and creativity</p>
                    </div>
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <TrendingUp className="h-3 w-3 text-primary" />
                      </div>
                      <p>Client-focused approach</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="order-1 lg:order-2 relative">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Codezyra team in a meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              
              {/* Overlay timeline */}
              <div className="absolute -bottom-10 left-0 right-0 mx-auto bg-background p-4 rounded-lg shadow-lg max-w-sm">
                <div className="flex">
                  <div className="mr-4">
                    <div className="relative">
                      <div className="absolute w-0.5 h-full bg-border top-0 left-2.5 z-0"></div>
                      <div className="flex flex-col space-y-4 relative z-10">
                        <div className="flex items-center">
                          <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                            <Clock className="h-3 w-3 text-white" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium">2010</p>
                            <p className="text-xs text-muted-foreground">Founded</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                            <Clock className="h-3 w-3 text-white" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium">2015</p>
                            <p className="text-xs text-muted-foreground">Global Expansion</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="h-5 w-5 rounded-full bg-success flex items-center justify-center">
                            <Clock className="h-3 w-3 text-white" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium">2025</p>
                            <p className="text-xs text-muted-foreground">Industry Leader</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24 bg-secondary/30" id="team">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-3">Our Team</Badge>
            <h2 className="mb-4">Meet the Experts Behind Codezyra</h2>
            <p className="text-muted-foreground">
              Our talented team of professionals is dedicated to delivering exceptional 
              software solutions for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center card-hover">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    {member.social.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/careers">
                Join Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

const teamMembers = [
  {
    id: 1,
    name: 'Alexandra Chen',
    position: 'CEO & Founder',
    bio: 'With over 15 years of experience in technology leadership, Alexandra founded Codezyra with a vision to transform businesses through innovative software.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: [
      {
        name: 'Twitter',
        url: '#',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>,
      },
      {
        name: 'LinkedIn',
        url: '#',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
      },
    ],
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    position: 'CTO',
    bio: 'Marcus leads our technical strategy and innovation. His expertise in cloud computing and AI has been instrumental in our growth.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: [
      {
        name: 'Twitter',
        url: '#',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>,
      },
      {
        name: 'LinkedIn',
        url: '#',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
      },
      {
        name: 'GitHub',
        url: '#',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
      },
    ],
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    position: 'Design Director',
    bio: 'Sophia ensures our software solutions are not only functional but also intuitive and aesthetically pleasing for the end user.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: [
      {
        name: 'Twitter',
        url: '#',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>,
      },
      {
        name: 'LinkedIn',
        url: '#',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
      },
      {
        name: 'Dribbble',
        url: '#',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>,
      },
    ],
  },
  {
    id: 4,
    name: 'David Park',
    position: 'Senior Developer',
    bio: 'David brings deep technical expertise to our team, specializing in scalable architecture and performance optimization.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: [
      {
        name: 'Twitter',
        url: '#',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>,
      },
      {
        name: 'LinkedIn',
        url: '#',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
      },
      {
        name: 'GitHub',
        url: '#',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
      },
    ],
  },
]