"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content: "Codezyra transformed our business with their innovative software solutions. Their team's expertise and dedication resulted in a product that exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CTO, TechForward",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    company: "TechForward"
  },
  {
    id: 2,
    content: "Working with Codezyra has been a game-changer for our startup. Their agile approach and technical excellence helped us bring our product to market faster than we thought possible.",
    author: "Michael Chen",
    position: "Founder, InnovateLabs",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    company: "InnovateLabs"
  },
  {
    id: 3,
    content: "The AI solution Codezyra developed for us has dramatically improved our data analysis capabilities. Their team took the time to understand our specific needs and delivered a custom solution that works perfectly.",
    author: "Emily Rodriguez",
    position: "Data Science Director, DataPulse",
    image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    company: "DataPulse"
  },
  {
    id: 4,
    content: "Codezyra's cloud migration expertise saved us countless hours and significantly reduced our infrastructure costs. Their ongoing support has been invaluable to our operations.",
    author: "David Park",
    position: "IT Manager, GlobalHealth",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    company: "GlobalHealth"
  },
  {
    id: 5,
    content: "The mobile app Codezyra developed for us has received outstanding feedback from our users. Their attention to detail and focus on user experience really sets them apart.",
    author: "Jessica Williams",
    position: "Product Manager, ConnectApp",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    company: "ConnectApp"
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.ceil(testimonials.length / 2) - 1
  const containerRef = useRef<HTMLDivElement>(null)
  
  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }
  
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(maxIndex)
    }
  }
  
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])
  
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-3">Testimonials</Badge>
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what some of our clients have to say 
            about their experience working with Codezyra.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${(testimonials.length / 2) * 100}%` }}
          >
            {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, i) => {
              const firstIndex = i * 2
              const secondIndex = i * 2 + 1
              
              return (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials[firstIndex] && (
                      <TestimonialCard testimonial={testimonials[firstIndex]} />
                    )}
                    {testimonials[secondIndex] && (
                      <TestimonialCard testimonial={testimonials[secondIndex]} />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

type Testimonial = {
  id: number
  content: string
  author: string
  position: string
  image: string
  company: string
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full card-hover">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-6">
          <Quote className="h-8 w-8 text-primary opacity-50" />
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-4 h-4 text-yellow-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
        </div>
        
        <p className="mb-6 italic">{testimonial.content}</p>
        
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}