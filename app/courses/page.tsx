import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Search } from "lucide-react"
import Link from "next/link"

// Sample course data
const courses = [
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
    level: "Beginner",
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
    level: "Beginner",
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
    level: "Beginner",
  },
  {
    id: 4,
    title: "Instagram Growth Strategies",
    description: "Build a profitable Instagram presence and attract brand deals.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Social Media",
    price: 59.99,
    rating: 4.6,
    reviews: 78,
    isFree: false,
    instructor: "Jessica Lee",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "E-commerce Store Setup",
    description: "Launch your own online store and start selling products globally.",
    image: "/placeholder.svg?height=200&width=300",
    category: "E-commerce",
    price: 89.99,
    rating: 4.8,
    reviews: 156,
    isFree: false,
    instructor: "Robert Smith",
    level: "Intermediate",
  },
  {
    id: 6,
    title: "YouTube Channel Monetization",
    description: "Create, grow, and monetize a successful YouTube channel from scratch.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Content Creation",
    price: 69.99,
    rating: 4.9,
    reviews: 203,
    isFree: false,
    instructor: "David Wilson",
    level: "Beginner",
  },
  {
    id: 7,
    title: "Forex Trading Fundamentals",
    description: "Master the basics of forex trading and develop a winning strategy.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Trading",
    price: 99.99,
    rating: 4.7,
    reviews: 112,
    isFree: false,
    instructor: "James Thompson",
    level: "Advanced",
  },
  {
    id: 8,
    title: "Digital Marketing Essentials",
    description: "Learn the core principles of digital marketing to promote any business.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Marketing",
    price: 0,
    rating: 4.8,
    reviews: 189,
    isFree: true,
    instructor: "Emma Davis",
    level: "Beginner",
  },
  {
    id: 9,
    title: "Advanced Crypto Trading Strategies",
    description: "Take your crypto trading to the next level with advanced techniques.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Trading",
    price: 129.99,
    rating: 4.9,
    reviews: 67,
    isFree: false,
    instructor: "Michael Chen",
    level: "Advanced",
  },
]

const categories = ["All", "Social Media", "Trading", "Freelancing", "E-commerce", "Content Creation", "Marketing"]

export default function CoursesPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-2">Explore Courses</h1>
          <p className="text-gray-500 dark:text-gray-400">Find the perfect course to start your money-making journey</p>
        </div>
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          <Input placeholder="Search courses..." className="pl-9 w-full md:w-[300px]" />
        </div>
      </div>

      <Tabs defaultValue="All" className="mb-8">
        <TabsList className="flex flex-wrap h-auto mb-4 bg-transparent">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 dark:data-[state=active]:bg-purple-900/20 dark:data-[state=active]:text-purple-400 rounded-full transition-colors"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter((course) => category === "All" || course.category === category)
                .map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-md"
                  >
                    <div className="aspect-video w-full relative">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="object-cover w-full h-full"
                      />
                      <Badge className="absolute top-2 right-2 bg-purple-600 dark:bg-purple-500">
                        {course.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="absolute top-2 left-2 bg-white/80 dark:bg-black/50 text-gray-800 dark:text-gray-200 border-none"
                      >
                        {course.level}
                      </Badge>
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
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
