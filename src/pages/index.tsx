import Head from "next/head"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useEffect, useState } from "react"
import { api } from "@/lib/axios"

export default function Home() {
  const [name, setName] = useState('')
  const [avatarURL, setAvatarURL] = useState('')

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await api.get('users/amomvga')

      setName(data.name)
      setAvatarURL(data.avatar_url)

    }

    fetchUser()
  }, [])

  return (
    <>
      <Head>
        <title>Meu Portfólio Profissional</title>
        <meta name="description" content="Portfólio e currículo profissional criado com Next.js e Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen">
        <Hero userName={name} avatar={avatarURL} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
