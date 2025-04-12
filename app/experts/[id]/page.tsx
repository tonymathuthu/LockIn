import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Instagram, Star, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

// This would normally come from a database
const getExpert = (id: string) => {
  const experts = [
    {
      id: "1",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=200&width=200",
      coverImage: "/placeholder.svg?height=400&width=1200",
      role: "TikTok Monetization Expert",
      bio: "TikTok influencer with over 2 million followers. Has helped hundreds of creators monetize their accounts through strategic content creation and brand partnerships.",
      longBio:
        "Alex Johnson is a renowned TikTok expert who has built a following of over 2 million across social platforms. After growing his own account from zero to 1 million followers in just 8 months, Alex began teaching others his strategies for growth and monetization.\n\nWith a background in digital marketing and a passion for short-form video content, Alex has consulted for major brands looking to establish their TikTok presence. His approach combines data-driven content strategies with creative storytelling techniques that resonate with Gen Z and Millennial audiences.\n\nAlex has been featured in Forbes, Business Insider, and Social Media Examiner for his innovative approaches to social media growth. When not creating content or teaching, Alex speaks at digital marketing conferences around the world.",
      expertise: ["Social Media", "Content Creation", "Influencer Marketing", "Brand Partnerships", "TikTok Algorithm"],
      courses: [
        {
          id: 1,
          title: "TikTok Monetization Masterclass",
          image: "/placeholder.svg?height=200&width=300",
          price: 49.99,
          rating: 4.8,
          reviews: 124,
          students: 1543,
        },
        {
          id: 4,
          title: "Instagram Growth Strategies",
          image: "/placeholder.svg?height=200&width=300",
          price: 59.99,
          rating: 4.6,
          reviews: 78,
          students: 892,
        },
        {
          id: 6,
          title: "YouTube Channel Monetization",
          image: "/placeholder.svg?height=200&width=300",
          price: 69.99,
          rating: 4.9,
          reviews: 203,
          students: 1245,
        },
      ],
      testimonials: [
        {
          name: "Sarah M.",
          avatar: "/placeholder.svg?height=60&width=60",
          text: "Alex's TikTok course completely changed my social media game. I went from 200 followers to over 10k in just 2 months, and I've already made my first brand deal!",
          rating: 5,
        },
        {
          name: "David K.",
          avatar: "/placeholder.svg?height=60&width=60",
          text: "The strategies in this course are gold. I've tried other social media courses before, but Alex breaks everything down in a way that's easy to understand and implement.",
          rating: 5,
        },
        {
          name: "Jennifer L.",
          avatar: "/placeholder.svg?height=60&width=60",
          text: "Worth every penny! I'm now making more from TikTok brand deals than from my day job. Thinking of going full-time with content creation now.",
          rating: 5,
        },
      ],
      stats: {
        totalStudents: 3680,
        averageRating: 4.8,
        totalReviews: 405,
        totalCourses: 3,
      },
      social: {
        twitter: "#",
        instagram: "#",
        youtube: "#",
      },
    },
  ]

  return experts.find((expert) => expert.id === id)
}

export default function ExpertProfilePage({ params }: { params: { id: string } }) {
  const expert = getExpert(params.id)

  if (!expert) {
    return <div className="container py-12 text-center">Expert not found</div>
  }

  return (
    <div>
      {/* Cover Image */}
      <div className="h-64 md:h-80 w-full relative">
        <img
          src={expert.coverImage || "/placeholder.svg"}
          alt={`${expert.name} cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6 -mt-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 md:items-end">
          <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background">
            <AvatarImage src={expert.avatar} alt={expert.name} />
            <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-2 md:flex-1">
            <h1 className="text-3xl font-bold text-white md:text-4xl">{expert.name}</h1>
            <p className="text-xl text-white/90">{expert.role}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {expert.expertise.map((skill, index) => (
                <Badge key={index} variant="outline" className="bg-white/10 text-white border-white/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            {expert.social.twitter && (
              <Link href={expert.social.twitter} className="text-white hover:text-white/80">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            )}
            {expert.social.instagram && (
              <Link href={expert.social.instagram} className="text-white hover:text-white/80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            )}
            {expert.social.youtube && (
              <Link href={expert.social.youtube} className="text-white hover:text-white/80">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-8">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About {expert.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line text-gray-600 dark:text-gray-400">{expert.longBio}</p>
              </CardContent>
            </Card>

            <Tabs defaultValue="courses" className="space-y-4">
              <TabsList>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              </TabsList>
              <TabsContent value="courses" className="space-y-4">
                {expert.courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium ml-1">{course.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500">({course.reviews} reviews)</span>
                          <span className="text-xs text-gray-500">• {course.students.toLocaleString()} students</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-lg">${course.price}</span>
                          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                            <Link href={`/courses/${course.id}`}>View Course</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="testimonials" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {expert.testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">"{testimonial.text}"</p>
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{testimonial.name}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Expert Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Total Students</p>
                    <p className="text-2xl font-bold">{expert.stats.totalStudents.toLocaleString()}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Average Rating</p>
                    <div className="flex items-center">
                      <p className="text-2xl font-bold mr-1">{expert.stats.averageRating}</p>
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Total Reviews</p>
                    <p className="text-2xl font-bold">{expert.stats.totalReviews}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Courses</p>
                    <p className="text-2xl font-bold">{expert.stats.totalCourses}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact {expert.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Have questions about courses or want to discuss a potential collaboration?
                </p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Areas of Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {expert.expertise.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
