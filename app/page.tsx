import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import HeroSection from '@/components/sections/hero-section'
import ServicesSection from '@/components/sections/services-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import LatestBlogPosts from '@/components/sections/latest-blog-posts'
import CTASection from '@/components/sections/cta-section'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-3">Featured Projects</Badge>
            <h2 className="mb-4">Our Latest Innovations</h2>
            <p className="text-muted-foreground">
              Explore our most recent projects that showcase our expertise and commitment to 
              creating cutting-edge solutions.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web Applications</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
                <TabsTrigger value="ai">AI Solutions</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.category === 'web')
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mobile" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.category === 'mobile')
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ai" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.category === 'ai')
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">200+</p>
              <p className="mt-2 text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="mt-2 text-muted-foreground">Team Members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="mt-2 text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">99%</p>
              <p className="mt-2 text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Latest Blog Posts */}
      <LatestBlogPosts />
      
      {/* CTA Section */}
      <CTASection />
    </>
  )
}

type Project = {
  id: number
  title: string
  description: string
  image: string
  category: 'web' | 'mobile' | 'ai'
  tags: string[]
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{project.title}</CardTitle>
          <Badge variant="outline">{project.category}</Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const projects: Project[] = [
  {
    id: 1,
    title: 'HealthSync Platform',
    description: 'A comprehensive healthcare management system that connects patients with providers.',
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB', 'Healthcare']
  },
  {
    id: 2,
    title: 'EcoTrack Mobile',
    description: 'Mobile application for tracking personal carbon footprint and sustainable choices.',
    image: 'https://images.pexels.com/photos/17066766/pexels-photo-17066766/free-photo-of-leaf-on-a-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
    tags: ['React Native', 'Firebase', 'Sustainability']
  },
  {
    id: 3,
    title: 'SmartRetail AI',
    description: 'AI-powered inventory management and customer behavior analysis for retail.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'ai',
    tags: ['TensorFlow', 'Python', 'Computer Vision', 'Retail']
  },
  {
    id: 4,
    title: 'FinPlan Dashboard',
    description: 'Financial planning and analytics dashboard for small businesses.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'Finance']
  },
  {
    id: 5,
    title: 'SecureConnect',
    description: 'Encrypted messaging and file sharing application for businesses.',
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'Encryption', 'Security']
  },
  {
    id: 6,
    title: 'AgriSense',
    description: 'AI-based agricultural monitoring and prediction system.',
    image: 'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'ai',
    tags: ['Machine Learning', 'IoT', 'Agriculture', 'Python']
  }
]