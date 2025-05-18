import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#hero" className="text-xl font-bold">
              Meu<span className="text-emerald-400">Hub</span>
            </Link>
            <p className="mt-2 text-gray-400 max-w-md">
              Desenvolvedor web especializado em criar experiências digitais excepcionais.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/amomvga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/amom-augusto-873116202/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a href="mailto:amom_augusto@hotmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Amom Augusto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
