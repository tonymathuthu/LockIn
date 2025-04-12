import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

// Sample course data
const inProgressCourses = [
  {
    id: 1,
    title: "TikTok Monetization Masterclass",
    description: "Learn how to grow and monetize your TikTok account from zero to hero.",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "Alex Johnson",
    progress: 65,
    lastAccessed: "2 days ago",
    totalLessons: 12,
    completedLessons: 8,
    duration: "6 hours total",
  },
  {
    id: 2,
    title: "Crypto Trading for Beginners",
    description: "Start your journey in cryptocurrency trading with this comprehensive guide.",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "Michael Chen",
    progress: 25,
    lastAccessed: "5 days ago",
    totalLessons: 15,
    completedLessons: 4,
    duration: "8 hours total",
  },
]

const completedCourses = [
  {
    id: 3,
    title: "Freelancing 101: Getting Your First Client",
    description: "Everything you need to know to land your first freelancing gig and start earning.",
    image: "/placeholder.svg?height=200&width=300",
    instructor: "Sarah Williams",
    completedDate: "1 week ago",
    totalLessons: 10,
    duration: "4 hours total",
  },
]

export default function MyCoursesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">My Courses</h2>
        <p className="text-muted-foreground">Track your progress and continue learning</p>
      </div>

      <Tabs defaultValue="in-progress" className="space-y-6">
        <TabsList className="bg-gray-100 dark:bg-gray-800">
          <TabsTrigger value="in-progress" className="transition-colors">
            In Progress
          </TabsTrigger>
          <TabsTrigger value="completed" className="transition-colors">
            Completed
          </TabsTrigger>
        </TabsList>
        <TabsContent value="in-progress" className="space-y-6">
          {inProgressCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden border dark:border-gray-800">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader className="p-4">
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>
                      By {course.instructor} • {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{course.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>
                          Progress ({course.completedLessons}/{course.totalLessons} lessons)
                        </span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2 bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Last accessed: {course.lastAccessed}</p>
                  </CardContent>
                  <CardFooter className="p-4 border-t dark:border-gray-800 flex justify-end gap-2">
                    <Button asChild variant="outline">
                      <Link href={`/courses/${course.id}`}>Course Details</Link>
                    </Button>
                    <Button
                      asChild
                      className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white"
                    >
                      <Link href={`/dashboard/my-courses/${course.id}`}>
                        Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="completed" className="space-y-6">
          {completedCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Completed
                  </div>
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>
                      By {course.instructor} • {course.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>
                          Progress ({course.totalLessons}/{course.totalLessons} lessons)
                        </span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <p className="text-sm text-muted-foreground">Completed: {course.completedDate}</p>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button asChild variant="outline">
                      <Link href={`/courses/${course.id}`}>Course Details</Link>
                    </Button>
                    <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                      <Link href={`/dashboard/certificates`}>View Certificate</Link>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      <div className="rounded-lg border dark:border-gray-800 bg-card text-card-foreground shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Ready to learn more?</h3>
            <p className="text-sm text-muted-foreground">
              Explore our catalog of courses to continue your learning journey.
            </p>
          </div>
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white"
          >
            <Link href="/courses">Browse Courses</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
