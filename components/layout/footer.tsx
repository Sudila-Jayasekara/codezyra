import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Code2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Meet the Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Software Development', href: '/services/software-development' },
      { name: 'Mobile Applications', href: '/services/mobile-applications' },
      { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
      { name: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Research Papers', href: '/research' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: '/docs' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <div className="flex items-center space-x-2">
              <Code2 className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold">Codezyra</span>
            </div>
            <p className="mt-4 max-w-md text-muted-foreground">
              Codezyra specializes in research and creating innovative software solutions 
              to real-world problems. With expertise in cutting-edge technologies, we turn 
              complex challenges into elegant solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-12 xl:col-span-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                123 Innovation Drive, Tech Park, CA 94103
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <a 
                href="mailto:info@codezyra.com" 
                className="text-sm text-muted-foreground hover:text-primary hover:underline"
              >
                info@codezyra.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <a 
                href="tel:+1-555-123-4567" 
                className="text-sm text-muted-foreground hover:text-primary hover:underline"
              >
                +1-555-123-4567
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <div className="relative">
              <Input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="pr-20 w-72"
              />
              <Button 
                size="sm" 
                className="absolute right-0 top-0 rounded-l-none"
              >
                Subscribe
              </Button>
            </div>
          </div>
          <p className="mt-8 text-sm text-muted-foreground md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Codezyra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}