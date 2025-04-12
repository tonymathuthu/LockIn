import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Clock, Download, FileText, Play } from "lucide-react"
import Link from "next/link"

// This would normally come from a database
const getCourse = (id: string) => {
  const courses = [
    {
      id: "1",
      title: "TikTok Monetization Masterclass",
      description: "Learn how to grow and monetize your TikTok account from zero to hero.",
      image: "/placeholder.svg?height=400&width=800",
      instructor: "Alex Johnson",
      progress: 65,
      currentModule: 2,
      currentLesson: 1,
      modules: [
        {
          title: "Getting Started with TikTok",
          lessons: [
            { title: "Setting Up Your TikTok Account", duration: "10 min", completed: true },
            { title: "Understanding the TikTok Algorithm", duration: "15 min", completed: true },
            { title: "Finding Your Niche", duration: "12 min", completed: true },
          ],
        },
        {
          title: "Content Creation Strategies",
          lessons: [
            { title: "Types of Content that Go Viral", duration: "20 min", completed: false, current: true },
            { title: "Creating High-Quality Videos", duration: "25 min", completed: false },
            { title: "Using Trending Sounds and Hashtags", duration: "18 min", completed: false },
          ],
        },
        {
          title: "Growing Your Following",
          lessons: [
            { title: "Consistency and Posting Schedule", duration: "15 min", completed: false },
            { title: "Engaging with Your Audience", duration: "12 min", completed: false },
            { title: "Collaborations and Duets", duration: "20 min", completed: false },
          ],
        },
        {
          title: "Monetization Strategies",
          lessons: [
            { title: "TikTok Creator Fund", duration: "15 min", completed: false },
            { title: "Brand Partnerships and Sponsorships", duration: "25 min", completed: false },
            { title: "Selling Products and Services", duration: "20 min", completed: false },
            { title: "Using TikTok to Drive Traffic to Other Platforms", duration: "18 min", completed: false },
          ],
        },
      ],
      resources: [
        { title: "TikTok Content Calendar Template", type: "PDF", size: "1.2 MB" },
        { title: "Viral Video Checklist", type: "PDF", size: "0.8 MB" },
        { title: "Brand Partnership Email Templates", type: "DOCX", size: "0.5 MB" },
      ],
      notes: [
        {
          id: 1,
          title: "Algorithm insights",
          content: "Videos under 15 seconds have higher completion rates",
          timestamp: "10:23",
          date: "2 days ago",
        },
        {
          id: 2,
          title: "Content ideas",
          content: "Try before/after transformation videos for higher engagement",
          timestamp: "15:45",
          date: "2 days ago",
        },
      ],
    },
  ]

  return courses.find((course) => course.id === id)
}

export default function CoursePlayerPage({ params }: { params: { id: string } }) {
  const course = getCourse(params.id)

  if (!course) {
    return <div className="container py-12 text-center">Course not found</div>
  }

  // Find the current lesson
  let currentLesson
  let currentModuleIndex = 0
  let currentLessonIndex = 0

  for (let i = 0; i < course.modules.length; i++) {
    const module = course.modules[i]
    for (let j = 0; j < module.lessons.length; j++) {
      const lesson = module.lessons[j]
      if (lesson.current) {
        currentLesson = lesson
        currentModuleIndex = i
        currentLessonIndex = j
        break
      }
    }
    if (currentLesson) break
  }

  // Calculate total lessons
  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0)

  // Calculate completed lessons
  const completedLessons = course.modules.reduce((acc, module) => {
    return acc + module.lessons.filter((lesson) => lesson.completed).length
  }, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button asChild variant="outline" size="sm">
          <Link href="/dashboard/my-courses">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to My Courses
          </Link>
        </Button>
        <Badge className="bg-purple-600">{course.progress}% Complete</Badge>
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">{course.title}</h1>
        <p className="text-muted-foreground">By {course.instructor}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="aspect-video bg-black rounded-lg relative overflow-hidden">
            <img
              src={course.image || "/placeholder.svg"}
              alt={currentLesson?.title || course.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                className="rounded-full w-16 h-16 bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500"
              >
                <Play className="h-6 w-6 text-white" fill="white" />
                <span className="sr-only">Play</span>
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h2 className="text-white font-medium">{currentLesson?.title || "Introduction to the Course"}</h2>
              <p className="text-white/80 text-sm">
                Module {currentModuleIndex + 1}, Lesson {currentLessonIndex + 1} • {currentLesson?.duration || "10 min"}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-sm">
                {completedLessons} of {totalLessons} lessons completed
              </div>
              <Progress value={course.progress} className="h-2 w-[250px] bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled={currentModuleIndex === 0 && currentLessonIndex === 0}>
                Previous
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="sm">
                Mark as Complete
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={
                  currentModuleIndex === course.modules.length - 1 &&
                  currentLessonIndex === course.modules[course.modules.length - 1].lessons.length - 1
                }
              >
                Next
              </Button>
            </div>
          </div>

          <Tabs defaultValue="curriculum">
            <TabsList className="bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="curriculum" className="transition-colors">
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="resources" className="transition-colors">
                Resources
              </TabsTrigger>
              <TabsTrigger value="notes" className="transition-colors">
                My Notes
              </TabsTrigger>
            </TabsList>
            <TabsContent value="curriculum" className="space-y-4 mt-4">
              {course.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="border dark:border-gray-800 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 font-medium flex justify-between items-center">
                    <span>{module.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {module.lessons.filter((l) => l.completed).length}/{module.lessons.length} completed
                    </span>
                  </div>
                  <div className="divide-y dark:divide-gray-800">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className={`p-4 flex justify-between items-center ${lesson.current ? "bg-purple-50 dark:bg-purple-900/10" : ""}`}
                      >
                        <div className="flex items-center">
                          <div
                            className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                              lesson.completed
                                ? "bg-green-100 dark:bg-green-900/20"
                                : lesson.current
                                  ? "bg-purple-100 dark:bg-purple-900/20"
                                  : "bg-gray-100 dark:bg-gray-800"
                            }`}
                          >
                            {lesson.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                            ) : lesson.current ? (
                              <Play className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            ) : (
                              <Play className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                            )}
                          </div>
                          <div>
                            <p
                              className={`font-medium ${lesson.current ? "text-purple-600 dark:text-purple-400" : ""}`}
                            >
                              {lesson.title}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{lesson.duration}</p>
                          </div>
                        </div>
                        {lesson.current && (
                          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400">
                            Current
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="resources" className="mt-4">
              <div className="space-y-4">
                {course.resources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mr-3">
                        <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="font-medium">{resource.title}</p>
                        <p className="text-sm text-gray-500">
                          {resource.type} • {resource.size}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="notes" className="mt-4">
              <div className="space-y-4">
                {course.notes.map((note) => (
                  <Card key={note.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{note.title}</h3>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {note.timestamp}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{note.content}</p>
                      <p className="text-xs text-gray-500">{note.date}</p>
                    </CardContent>
                  </Card>
                ))}
                <div className="flex justify-center">
                  <Button variant="outline">Add New Note</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-semibold text-lg">About This Course</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{course.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
              <div className="pt-2 space-y-2">
                <h4 className="font-medium text-sm">Your Stats</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-500">Started</span>
                    <span className="font-medium">5 days ago</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Last activity</span>
                    <span className="font-medium">2 days ago</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Time spent</span>
                    <span className="font-medium">2h 15m</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Lessons completed</span>
                    <span className="font-medium">
                      {completedLessons}/{totalLessons}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-4">Need Help?</h3>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Course FAQ
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Contact Instructor
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Technical Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
