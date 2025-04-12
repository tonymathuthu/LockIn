import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "I was struggling to find a job after high school. After taking the TikTok Monetization course, I'm now making more than my parents! This platform changed my life.",
    author: "David K.",
    role: "Content Creator, 19",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    content:
      "The crypto trading course gave me the confidence to start investing. I've already made back 3x what I paid for the course in just two months!",
    author: "Lerato M.",
    role: "Student, 22",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    content:
      "As a college student, I needed a flexible way to make money. The freelancing course helped me land my first clients, and now I'm earning while studying!",
    author: "Priya S.",
    role: "Freelance Designer, 20",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Success Stories</h2>
          <p className="text-gray-500 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
            Hear from young people who have transformed their financial future with our platform
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white dark:bg-gray-950 border-none shadow-md hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-purple-200 dark:text-purple-900 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400">
                      {testimonial.author.split(" ")[0][0]}
                      {testimonial.author.split(" ")[1][0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
