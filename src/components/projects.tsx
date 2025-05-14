import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Website",
    description: "Um site de e-commerce completo com carrinho de compras, pagamentos e painel de administração.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "App de Gerenciamento de Tarefas",
    description: "Aplicativo para gerenciar tarefas diárias com recursos de categorização e lembretes.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Blog Pessoal",
    description: "Um blog pessoal com sistema de gerenciamento de conteúdo personalizado.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "Tailwind CSS", "Markdown"],
    demoUrl: "#",
    repoUrl: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Meus <span className="text-emerald-600 dark:text-emerald-400">Projetos</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full dark:bg-gray-900">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-700 dark:text-gray-300">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="dark:border-gray-700 dark:text-gray-300">
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Código
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
