import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container-custom flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <Badge variant="destructive" className="mb-4">
        <AlertTriangle className="h-3 w-3 mr-1" />
        404 Error
      </Badge>
      <h1 className="mb-4 text-6xl font-extrabold md:text-8xl">Oops!</h1>
      <h2 className="mb-8 text-3xl font-semibold">Page Not Found</h2>
      <p className="mb-8 max-w-xl text-muted-foreground text-lg">
        We couldn't find the page you're looking for. It might have been moved, 
        deleted, or never existed in the first place.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Button size="lg" asChild>
          <Link href="/">Return Home</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
      
      {/* Code snippet decoration */}
      <div className="mt-12 p-4 rounded-md bg-muted/50 border inline-flex">
        <pre className="text-left text-sm text-muted-foreground">
          <code>{`
// 404 - Page Not Found
try {
  navigateTo('/requested-page');
} catch (error) {
  console.error('Page not found');
  redirectTo('/');
}
          `}</code>
        </pre>
      </div>
    </div>
  )
}