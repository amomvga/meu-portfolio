import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin } from "lucide-react"

interface Props {
  userName: string
  avatar: string
}

export default function Hero({ userName, avatar }: Props) {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Olá, eu sou <span className="text-emerald-600 dark:text-emerald-400">{userName}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">Desenvolvedor Web Full Stack</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Especializado em criar experiências digitais excepcionais com foco em design moderno e código limpo.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/amomvga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition-colors dark:text-gray-400 dark:hover:text-emerald-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/amom-augusto-873116202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition-colors dark:text-gray-400 dark:hover:text-emerald-400"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-600 dark:border-emerald-400">
            <Image
              src={avatar}
              alt="Foto de perfil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
