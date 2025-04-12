import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, FileText, Play, Star, Users } from "lucide-react";

// This would normally come from a database
const getCourse = (id: string) => {
  const courses = [
    {
      id: "1",
      title: "TikTok Monetization Masterclass",
      description:
        "Learn how to grow and monetize your TikTok account from zero to hero. This comprehensive course covers everything from account setup to advanced monetization strategies that can help you earn a sustainable income through TikTok.",
      image: "/placeholder.svg?height=400&width=800",
      category: "Social Media",
      price: 49.99,
      rating: 4.8,
      reviews: 124,
      students: 1543,
      instructor: {
        name: "Alex Johnson",
        bio: "TikTok influencer with over 2 million followers. Has helped hundreds of creators monetize their accounts.",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      level: "Beginner",
      duration: "6 hours",
      modules: [
        {
          title: "Getting Started with TikTok",
          lessons: [
            {
              title: "Setting Up Your TikTok Account",
              duration: "10 min",
              isFree: true,
            },
            {
              title: "Understanding the TikTok Algorithm",
              duration: "15 min",
              isFree: true,
            },
            { title: "Finding Your Niche", duration: "12 min", isFree: false },
          ],
        },
        {
          title: "Content Creation Strategies",
          lessons: [
            {
              title: "Types of Content that Go Viral",
              duration: "20 min",
              isFree: false,
            },
            {
              title: "Creating High-Quality Videos",
              duration: "25 min",
              isFree: false,
            },
            {
              title: "Using Trending Sounds and Hashtags",
              duration: "18 min",
              isFree: false,
            },
          ],
        },
        {
          title: "Growing Your Following",
          lessons: [
            {
              title: "Consistency and Posting Schedule",
              duration: "15 min",
              isFree: false,
            },
            {
              title: "Engaging with Your Audience",
              duration: "12 min",
              isFree: false,
            },
            {
              title: "Collaborations and Duets",
              duration: "20 min",
              isFree: false,
            },
          ],
        },
        {
          title: "Monetization Strategies",
          lessons: [
            { title: "TikTok Creator Fund", duration: "15 min", isFree: false },
            {
              title: "Brand Partnerships and Sponsorships",
              duration: "25 min",
              isFree: false,
            },
            {
              title: "Selling Products and Services",
              duration: "20 min",
              isFree: false,
            },
            {
              title: "Using TikTok to Drive Traffic to Other Platforms",
              duration: "18 min",
              isFree: false,
            },
          ],
        },
      ],
      whatYouWillLearn: [
        "How to create viral TikTok content that attracts followers",
        "Strategies to grow your account from 0 to 10,000+ followers",
        "Multiple ways to monetize your TikTok presence",
        "How to approach brands for sponsorship deals",
        "Tips for creating a consistent content schedule",
        "Techniques to analyze your performance and improve",
      ],
    },
  ];

  return courses.find((course) => course.id === id);
};

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = getCourse(params.id);

  if (!course) {
    return <div className="container py-12 text-center">Course not found</div>;
  }

  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-purple-600">{course.category}</Badge>
              <Badge
                variant="outline"
                className="text-gray-600 border-gray-300"
              >
                {course.level}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              {course.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {course.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium">{course.rating}</span>
                <span className="text-gray-500 ml-1">
                  ({course.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-gray-500" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-gray-500" />
                <span>{course.duration} total</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-1 text-gray-500" />
                <span>
                  {course.modules.reduce(
                    (acc, module) => acc + module.lessons.length,
                    0
                  )}{" "}
                  lessons
                </span>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <Avatar className="h-10 w-10 mr-2">
                <AvatarImage
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                />
                <AvatarFallback>
                  {course.instructor.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">
                  Created by {course.instructor.name}
                </p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="curriculum">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="curriculum" className="transition-colors">
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="overview" className="transition-colors">
                Overview
              </TabsTrigger>
              <TabsTrigger value="instructor" className="transition-colors">
                Instructor
              </TabsTrigger>
            </TabsList>
            <TabsContent value="curriculum" className="mt-6">
              <div className="space-y-4">
                {course.modules.map((module, moduleIndex) => (
                  <div
                    key={moduleIndex}
                    className="border dark:border-gray-800 rounded-lg overflow-hidden"
                  >
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 font-medium">
                      {module.title}
                    </div>
                    <div className="divide-y dark:divide-gray-800">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className="p-4 flex justify-between items-center"
                        >
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mr-3">
                              <Play className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                              <p className="font-medium">{lesson.title}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {lesson.duration}
                              </p>
                            </div>
                          </div>
                          {lesson.isFree && (
                            <Badge
                              variant="outline"
                              className="text-green-600 dark:text-green-400 border-green-600 dark:border-green-400"
                            >
                              Free Preview
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="overview" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    What You Will Learn
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Student Reviews</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < 5
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm font-medium">5.0</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          "This course completely changed my TikTok game! I went
                          from 200 followers to over 10k in just 2 months, and
                          I've already made my first brand deal."
                        </p>
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">John D.</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < 4
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm font-medium">4.0</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          "Great content and strategies. I especially loved the
                          section on brand partnerships. Would have liked more
                          examples though."
                        </p>
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarFallback>SM</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">Sarah M.</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="instructor" className="mt-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                  />
                  <AvatarFallback>
                    {course.instructor.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {course.instructor.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {course.instructor.bio}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-1 text-gray-500" />
                      <span>3 Courses</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-gray-500" />
                      <span>4,500+ Students</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-gray-500" />
                      <span>4.8 Average Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:sticky md:top-20">
          <Card className="overflow-hidden border dark:border-gray-800">
            <div className="aspect-video w-full">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">${course.price}</span>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white">
                Enroll Now
              </Button>
              <div className="space-y-4 pt-4 border-t dark:border-gray-800">
                <h4 className="font-medium">This course includes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Play className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    {course.duration} of on-demand video
                  </li>
                  <li className="flex items-center text-sm">
                    <FileText className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    Downloadable resources
                  </li>
                  <li className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    Access to community
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    Certificate of completion
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t dark:border-gray-800 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Not sure yet?
                </p>
                <Button variant="outline" className="w-full">
                  Try Free Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
