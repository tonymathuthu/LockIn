import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Play, BookOpen } from "lucide-react"
import Link from "next/link"

// Sample resources data
const resources = {
  guides: [
    {
      id: 1,
      title: "Getting Started with Social Media Monetization",
      description: "A comprehensive guide to monetizing your social media presence across different platforms.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Social Media",
      type: "PDF",
      size: "2.4 MB",
      pages: 24,
      downloadCount: 1250,
    },
    {
      id: 2,
      title: "Crypto Trading Basics: A Beginner's Guide",
      description: "Learn the fundamentals of cryptocurrency trading with this easy-to-follow guide.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Trading",
      type: "PDF",
      size: "3.1 MB",
      pages: 32,
      downloadCount: 980,
    },
    {
      id: 3,
      title: "Freelancing Success Roadmap",
      description: "Step-by-step guide to building a successful freelancing career from scratch.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Freelancing",
      type: "PDF",
      size: "1.8 MB",
      pages: 18,
      downloadCount: 1560,
    },
  ],
  templates: [
    {
      id: 4,
      title: "Social Media Content Calendar",
      description: "Plan your content strategy with this ready-to-use content calendar template.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Social Media",
      type: "XLSX",
      size: "0.8 MB",
      downloadCount: 2340,
    },
    {
      id: 5,
      title: "Freelance Client Proposal Template",
      description: "Professional proposal template to help you land more freelance clients.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Freelancing",
      type: "DOCX",
      size: "0.6 MB",
      downloadCount: 1870,
    },
    {
      id: 6,
      title: "Investment Tracking Spreadsheet",
      description: "Track your crypto and stock investments with this comprehensive spreadsheet.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Trading",
      type: "XLSX",
      size: "1.2 MB",
      downloadCount: 1120,
    },
  ],
  videos: [
    {
      id: 7,
      title: "How to Make Your First $1,000 Online",
      description: "A step-by-step tutorial on how to earn your first $1,000 through online opportunities.",
      image: "/placeholder.svg?height=200&width=300",
      category: "General",
      duration: "18:24",
      views: 45600,
    },
    {
      id: 8,
      title: "5 TikTok Trends That Can Make You Money",
      description: "Learn which TikTok trends you can leverage to start earning money on the platform.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Social Media",
      duration: "12:45",
      views: 32800,
    },
    {
      id: 9,
      title: "Setting Up Your First E-commerce Store",
      description: "A beginner-friendly guide to launching your first online store with minimal investment.",
      image: "/placeholder.svg?height=200&width=300",
      category: "E-commerce",
      duration: "24:10",
      views: 28500,
    },
  ],
}

export default function FreeResourcesPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Free Resources</h1>
        <p className="text-gray-500 dark:text-gray-400 md:text-xl max-w-[700px] mx-auto">
          Download free guides, templates, and watch tutorials to kickstart your money-making journey
        </p>
      </div>

      <Tabs defaultValue="guides" className="space-y-8">
        <TabsList className="flex justify-center bg-gray-100 dark:bg-gray-800">
          <TabsTrigger value="guides" className="flex items-center gap-1 transition-colors">
            <FileText className="h-4 w-4" />
            Guides
          </TabsTrigger>
          <TabsTrigger value="templates" className="flex items-center gap-1 transition-colors">
            <FileText className="h-4 w-4" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-1 transition-colors">
            <Play className="h-4 w-4" />
            Videos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="guides" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.guides.map((guide) => (
              <Card
                key={guide.id}
                className="overflow-hidden border dark:border-gray-800 hover:shadow-md transition-shadow"
              >
                <div className="aspect-video w-full relative">
                  <img
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-2 right-2 bg-purple-600 dark:bg-purple-500">{guide.category}</Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-2">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{guide.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      <span>
                        {guide.type} • {guide.size}
                      </span>
                    </div>
                    <div>{guide.pages} pages</div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t dark:border-gray-800">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {guide.downloadCount.toLocaleString()} downloads
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white">
                      <Download className="h-4 w-4 mr-2" /> Download
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.templates.map((template) => (
              <Card
                key={template.id}
                className="overflow-hidden border dark:border-gray-800 hover:shadow-md transition-shadow"
              >
                <div className="aspect-video w-full relative">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-2 right-2 bg-purple-600 dark:bg-purple-500">{template.category}</Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-2">{template.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{template.description}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>
                      {template.type} • {template.size}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t dark:border-gray-800">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {template.downloadCount.toLocaleString()} downloads
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white">
                      <Download className="h-4 w-4 mr-2" /> Download
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.videos.map((video) => (
              <Card
                key={video.id}
                className="overflow-hidden border dark:border-gray-800 hover:shadow-md transition-shadow"
              >
                <div className="aspect-video w-full relative">
                  <img
                    src={video.image || "/placeholder.svg"}
                    alt={video.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-2 right-2 bg-purple-600 dark:bg-purple-500">{video.category}</Badge>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-black/60 p-3">
                      <Play className="h-8 w-8 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-2">{video.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{video.description}</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{video.views.toLocaleString()} views</div>
                </CardContent>
                <CardFooter className="p-4 border-t dark:border-gray-800">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white">
                    <Play className="h-4 w-4 mr-2" /> Watch Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-8 text-center">
        <BookOpen className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Want More Resources?</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-[600px] mx-auto mb-6">
          Check out our full courses for in-depth learning and step-by-step guidance on making money online.
        </p>
        <Button
          asChild
          className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white"
        >
          <Link href="/courses">Browse Courses</Link>
        </Button>
      </div>
    </div>
  )
}
