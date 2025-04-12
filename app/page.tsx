import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

// Sample experts data
const experts = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=200&width=200",
    role: "TikTok Monetization Expert",
    bio: "TikTok influencer with over 2 million followers. Has helped hundreds of creators monetize their accounts.",
    expertise: ["Social Media", "Content Creation", "Influencer Marketing"],
    courses: 3,
    students: 1500,
    rating: 4.8,
    social: {
      twitter: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=200&width=200",
    role: "Cryptocurrency Trader",
    bio: "Professional crypto trader with 7+ years of experience. Specializes in teaching beginners how to navigate the crypto market safely.",
    expertise: ["Cryptocurrency", "Trading", "Investment"],
    courses: 2,
    students: 1200,
    rating: 4.7,
    social: {
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Sarah Williams",
    avatar: "/placeholder.svg?height=200&width=200",
    role: "Freelance Consultant",
    bio: "Full-time freelancer who has worked with clients like Adobe and Microsoft. Teaches practical strategies for landing high-paying clients.",
    expertise: ["Freelancing", "Client Acquisition", "Pricing Strategy"],
    courses: 4,
    students: 2300,
    rating: 4.9,
    social: {
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  },
  {
    id: 4,
    name: "Jessica Lee",
    avatar: "/placeholder.svg?height=200&width=200",
    role: "Instagram Growth Strategist",
    bio: "Instagram marketing specialist who has helped brands increase their following by 200% on average. Former social media manager at major fashion brands.",
    expertise: ["Instagram", "Social Media Strategy", "Brand Partnerships"],
    courses: 2,
    students: 1800,
    rating: 4.6,
    social: {
      instagram: "#",
      youtube: "#",
    },
  },
  {
    id: 5,
    name: "Robert Smith",
    avatar: "/placeholder.svg?height=200&width=200",
    role: "E-commerce Entrepreneur",
    bio: "Founded 3 successful e-commerce stores with combined revenue of $2M+ annually. Specializes in dropshipping and Amazon FBA.",
    expertise: ["E-commerce", "Dropshipping", "Amazon FBA"],
    courses: 3,
    students: 2100,
    rating: 4.8,
    social: {
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  },
  {
    id: 6,
    name: "David Wilson",
    avatar: "/placeholder.svg?height=200&width=200",
    role: "YouTube Content Creator",
    bio: "YouTube creator with 500K+ subscribers. Teaches video production, channel growth, and monetization strategies.",
    expertise: ["YouTube", "Video Production", "Content Strategy"],
    courses: 2,
    students: 1600,
    rating: 4.9,
    social: {
      youtube: "#",
      twitter: "#",
      instagram: "#",
    },
  },
]

export default function ExpertsPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Money-Making Experts</h1>
        <p className="text-gray-500 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
          Learn from successful entrepreneurs who have already made it in their fields
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experts.map((expert) => (
          <Card
            key={expert.id}
            className="overflow-hidden border dark:border-gray-800 hover:shadow-md transition-shadow"
          >
            <div className="p-6 text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={expert.avatar} alt={expert.name} />
                <AvatarFallback className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400">
                  {expert.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-1">{expert.name}</h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">{expert.role}</p>
              <div className="flex justify-center gap-2 mb-4">
                {expert.social.twitter && (
                  <Link
                    href={expert.social.twitter}
                    className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                )}
                {expert.social.instagram && (
                  <Link
                    href={expert.social.instagram}
                    className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                )}
                {expert.social.facebook && (
                  <Link
                    href={expert.social.facebook}
                    className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                )}
                {expert.social.youtube && (
                  <Link
                    href={expert.social.youtube}
                    className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                )}
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
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
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">{expert.bio}</p>
            </div>
            <CardContent className="bg-gray-50 dark:bg-gray-900 p-4 border-t dark:border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm">
                  <span className="font-medium">{expert.courses}</span> Courses
                </div>
                <div className="text-sm">
                  <span className="font-medium">{expert.students.toLocaleString()}</span> Students
                </div>
                <div className="text-sm">
                  <span className="font-medium">{expert.rating}</span> Rating
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white"
              >
                <Link href={`/experts/${expert.id}`}>View Profile</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Want to Become an Expert?</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto mb-6">
          Share your knowledge and earn money by creating courses on our platform.
        </p>
        <Button
          asChild
          className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white"
        >
          <Link href="/become-expert">Apply to Teach</Link>
        </Button>
      </div>
    </div>
  )
}
