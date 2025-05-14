"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para enviar o formulário
    console.log("Form data:", formData)
    alert("Mensagem enviada com sucesso!")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Entre em <span className="text-emerald-600 dark:text-emerald-400">Contato</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6 dark:text-white">Vamos conversar!</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Estou interessado em oportunidades freelance ou em tempo integral. Se você tem uma pergunta ou proposta,
              não hesite em entrar em contato.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full text-emerald-600 dark:text-emerald-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Localização</h4>
                  <p className="text-gray-600 dark:text-gray-400">São Paulo, SP - Brasil</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full text-emerald-600 dark:text-emerald-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">seuemail@exemplo.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full text-emerald-600 dark:text-emerald-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Telefone</h4>
                  <p className="text-gray-600 dark:text-gray-400">(11) 98765-4321</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Assunto"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
