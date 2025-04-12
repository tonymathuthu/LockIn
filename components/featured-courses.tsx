import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

const featuredCourses = [
  {
    id: 1,
    title: "TikTok Monetization Masterclass",
    description: "Learn how to grow and monetize your TikTok account from zero to hero.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Social Media",
    price: 49.99,
    rating: 4.8,
    reviews: 124,
    isFree: false,
    instructor: "Alex Johnson",
  },
  {
    id: 2,
    title: "Crypto Trading for Beginners",
    description: "Start your journey in cryptocurrency trading with this comprehensive guide.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Trading",
    price: 79.99,
    rating: 4.7,
    reviews: 89,
    isFree: false,
    instructor: "Michael Chen",
  },
  {
    id: 3,
    title: "Freelancing 101: Getting Your First Client",
    description: "Everything you need to know to land your first freelancing gig and start earning.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Freelancing",
    price: 0,
    rating: 4.9,
    reviews: 215,
    isFree: true,
    instructor: "Sarah Williams",
  },
]

export default function FeaturedCourses() {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter">Featured Courses</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Start learning and earning with our most popular courses
          </p>
        </div>
        <Button asChild variant="link" className="text-purple-600 dark:text-purple-400 p-0">
          <Link href="/courses">
            View all courses <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredCourses.map((course) => (
          <Card
            key={course.id}
            className="overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-md"
          >
            <div className="aspect-video w-full relative">
              <img src={course.image || "/placeholder.svg"} alt={course.title} className="object-cover w-full h-full" />
              <Badge className="absolute top-2 right-2 bg-purple-600 dark:bg-purple-500">{course.category}</Badge>
            </div>
            <CardHeader className="p-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{course.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">({course.reviews} reviews)</span>
                </div>
                <h3 className="font-bold text-xl">{course.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">By {course.instructor}</p>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-gray-500 dark:text-gray-400">{course.description}</p>
            </CardContent>
            <CardFooter className="p-4 flex justify-between items-center border-t dark:border-gray-800">
              <div>
                {course.isFree ? (
                  <Badge
                    variant="outline"
                    className="text-green-600 dark:text-green-400 border-green-600 dark:border-green-400"
                  >
                    Free
                  </Badge>
                ) : (
                  <span className="font-bold">${course.price}</span>
                )}
              </div>
              <Button
                asChild
                className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white"
              >
                <Link href={`/courses/${course.id}`}>View Course</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
