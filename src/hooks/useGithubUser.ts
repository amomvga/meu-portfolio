import { useEffect, useState } from "react"
import { api } from "@/lib/axios"

export function useGithubUser(username: string) {
  const [user, setUser] = useState<{ name: string; avatarURL: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!username) return

    (async () => {
      try {
        const { data } = await api.get(`users/${username}`)
        setUser({ name: data.name, avatarURL: data.avatar_url })
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    })()
  }, [username])

  return { user, loading, error }
}
