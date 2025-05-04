import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'We design and develop custom software solutions tailored to your business needs, from web applications to enterprise systems.',
    icon: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/services/software-development'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Create engaging and functional mobile experiences for iOS and Android platforms with our expert app development services.',
    icon: 'https://images.pexels.com/photos/4526408/pexels-photo-4526408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/services/mobile-applications'
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Leverage the power of cloud technology with our comprehensive solutions for migration, optimization, and cloud-native development.',
    icon: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/services/cloud-solutions'
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    description: 'Harness the potential of artificial intelligence and machine learning to automate processes and gain valuable insights from your data.',
    icon: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/services/ai-machine-learning'
  }
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-3">Our Services</Badge>
          <h2 className="mb-4">Comprehensive Software Solutions</h2>
          <p className="text-muted-foreground">
            We offer a wide range of services to help businesses leverage technology 
            for growth, efficiency, and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="group relative overflow-hidden rounded-lg card-hover"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/80 mb-4">{service.description}</p>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-foreground">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}