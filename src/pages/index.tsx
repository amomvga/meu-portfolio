import Head from "next/head"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useGithubUser } from "@/hooks/useGithubUser"

export default function Home() {
  const { user, loading } = useGithubUser("amomvga")

  if (loading || !user) return null

  return (
    <>
      <Head>
        <title>Meu Hub</title>
        <meta name="description" content="Currículo profissional criado com Next.js e Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen">
        <Hero userName={user.name} avatar={user.avatarURL} />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
