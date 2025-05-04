import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Software Development',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we build software and what this means for developers.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'May 22, 2025',
    readTime: '8 min read',
    category: 'Artificial Intelligence',
    slug: 'future-of-ai-in-software-development'
  },
  {
    id: 2,
    title: 'Microservices vs. Monolithic Architecture: Making the Right Choice',
    excerpt: 'A deep dive into the pros and cons of microservices and monolithic architectures to help you choose the best approach for your project.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'May 15, 2025',
    readTime: '10 min read',
    category: 'Architecture',
    slug: 'microservices-vs-monolithic-architecture'
  },
  {
    id: 3,
    title: 'Securing Your Cloud Infrastructure: Best Practices',
    excerpt: 'Learn essential security measures and best practices to protect your cloud infrastructure from common threats and vulnerabilities.',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'May 8, 2025',
    readTime: '7 min read',
    category: 'Cloud Security',
    slug: 'securing-your-cloud-infrastructure-best-practices'
  }
]

export default function LatestBlogPosts() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <Badge className="mb-3">Our Blog</Badge>
            <h2 className="mb-2">Latest Insights & Articles</h2>
            <p className="text-muted-foreground max-w-lg">
              Stay updated with the latest trends and insights in technology and software development.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="card-hover">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                </div>
                <CardTitle className="line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="flex items-center mr-4">
                    <Calendar className="mr-1 h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="px-0 hover:bg-transparent hover:text-primary">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}