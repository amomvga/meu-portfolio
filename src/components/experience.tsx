import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Desenvolvedor Full Stack",
    company: "Noah Systems",
    period: "Jun 2024 - Dias Atuais",
    description:
      "Atuo sendo responsável por criar novas funcionalidades, corrigir bugs e otimizar a performance de aplicações web. Trabalho diariamente com tecnologias como Vue.js e Quasar Framework no frontend, e Node.js, Express, Sequelize e Socket.IO no backend. Minha atuação inclui desde o desenvolvimento de interfaces responsivas e intuitivas até a implementação de APIs performáticas e comunicação em tempo real com WebSockets, garantindo robustez, escalabilidade e boa experiência para o usuário final.",
    technologies: ["VueJs", "JavaScript", "TypeScript", "Sequelize", "NodeJS", "Express"],
  },
  {
    title: "Desenvolvedor Full Stack",
    company: "Leek Soluções",
    period: "Jun 2022 - Jun 2024",
    description:
      "Atuei no desenvolvimento de novas funcionalidades, correção de bugs e otimizações em aplicações web, contribuindo tanto no frontend quanto no backend. Participei ativamente das decisões técnicas e arquiteturais dos projetos, sempre visando a escalabilidade e performance do sistema. Trabalhei com tecnologias modernas como Node.js, React, Next.js, Prisma, Sequelize, PostgreSQL, além de bibliotecas de UI como Chakra UI e Material UI. Também tive experiência com comunicação em tempo real utilizando Socket.IO.",
    technologies: ["React", "UI", "JavaScript", "TypeScript", "Prisma", "NodeJS", "Express"],
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
