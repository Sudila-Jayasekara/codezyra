"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, GitBranch, Zap, Server } from 'lucide-react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden hero-gradient py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] rounded-full bg-accent/20 blur-[120px]" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} transition-all duration-500`}>
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <span className="animate-pulse-slow mr-2">●</span> Innovative Software Solutions
            </div>
            <h1 className="mb-6">
              <span className="gradient-text">Transforming Ideas</span> into Powerful Software Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              We specialize in creating cutting-edge software solutions that solve real-world problems. 
              Our team of experts combines research and innovation to deliver exceptional results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex items-start">
                <Code className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Clean Code</p>
                  <p className="text-sm text-muted-foreground">Maintainable & efficient</p>
                </div>
              </div>
              <div className="flex items-start">
                <GitBranch className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Scalable</p>
                  <p className="text-sm text-muted-foreground">Grows with your needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Fast Delivery</p>
                  <p className="text-sm text-muted-foreground">Agile methodology</p>
                </div>
              </div>
              <div className="flex items-start">
                <Server className="mr-2 h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Reliable</p>
                  <p className="text-sm text-muted-foreground">99.9% uptime</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'} transition-all duration-700 delay-300`}>
            {/* Main image */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Image 
                src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaborating on software development"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              
              {/* Floating elements */}
              <div className="absolute -bottom-4 -right-4 bg-background rounded-lg p-4 shadow-lg transform rotate-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                  <pre className="text-xs font-mono">{'const success = true;'}</pre>
                </div>
              </div>
              
              <div className="absolute top-4 -left-4 bg-background rounded-lg p-4 shadow-lg transform -rotate-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  <pre className="text-xs font-mono">{'<Codezyra />'}</pre>
                </div>
              </div>
            </div>
            
            {/* Stats floating card */}
            <div className="absolute -bottom-8 left-10 bg-background rounded-lg p-4 shadow-lg">
              <p className="text-sm font-medium mb-1">Project Success Rate</p>
              <div className="flex items-center">
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '94%' }}></div>
                </div>
                <span className="ml-2 text-sm font-bold">94%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}