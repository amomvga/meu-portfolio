import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Desenvolvedor Full Stack",
    company: "Empresa XYZ",
    period: "Jan 2022 - Presente",
    description:
      "Desenvolvimento e manutenção de aplicações web utilizando React, Next.js, Node.js e MongoDB. Implementação de novas funcionalidades e otimização de performance.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    title: "Desenvolvedor Front-end",
    company: "Empresa ABC",
    period: "Jun 2020 - Dez 2021",
    description:
      "Criação de interfaces responsivas e acessíveis utilizando HTML, CSS e JavaScript. Colaboração com designers e desenvolvedores back-end para implementar novas funcionalidades.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Estagiário de Desenvolvimento",
    company: "Startup DEF",
    period: "Jan 2020 - Jun 2020",
    description:
      "Suporte no desenvolvimento de aplicações web, correção de bugs e implementação de pequenas funcionalidades sob supervisão.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Minha <span className="text-emerald-600 dark:text-emerald-400">Experiência</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-emerald-600 dark:border-l-emerald-400 dark:bg-gray-900">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium">{exp.company}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
