'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'
import WhatsAppButton from '@/components/ui/whatsapp-button';
import PhoneButton from '@/components/ui/phone-button';
import EmailButton from '@/components/ui/email-button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })

      setTimeout(() => setSubmitStatus(''), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 3000)
    }

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: '+212 661 573626',
      link: 'tel:+212661573626',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'fabtower.contact@gmail.com',
      link: 'mailto:fabtower.contact@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: '77 Rue Mohamed Smiha, 10ème étage, Apt N°57, Casablanca',
      link: null,
    },
  ]

  return (
    <>
      <Header />

      <main> <PhoneButton />
            <EmailButton />
            <WhatsAppButton />
        <section
          className="relative border-b border-border py-16 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/contact.png')" }}
        >
          {/* Blur overlay */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

          <div className="relative container-wide">
            <h1 className="text-balance text-white">Nous Contacter</h1>
            <p className="text-xl text-white mt-4 max-w-2xl">
              Vous avez des questions sur nos produits ou services? Nous sommes là pour vous aider. Contactez notre équipe dès aujourd'hui.
            </p>
          </div>
        </section>


        <section className="bg-white border-b border-border py-16">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div key={index} className="p-8 bg-secondary border border-border rounded-lg hover:border-primary transition-colors">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground text-lg mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-primary hover:text-primary/80 transition-colors font-medium text-lg break-all"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-lg">{info.details}</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <h2 className="text-balance mb-8 text-foreground">Envoyez-nous un Message</h2>

                <form onSubmit={handleSubmit} className="bg-white border border-border rounded-lg p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Nom Complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Adresse Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Numéro de Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        placeholder="+212 XXX XXX XXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        placeholder="Votre entreprise"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="De quoi s'agit-il?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="Dites-nous en plus sur votre demande..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                      Message envoyé avec succès! Nous vous répondrons bientôt.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                      Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ou nous appeler directement.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
                    {isSubmitting ? 'Envoi...' : 'Envoyer le Message'}
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="bg-white border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Clock size={20} />
                    Heures d'Ouverture
                  </h3>
                  <p className="text-muted-foreground mb-2">Lundi - Vendredi</p>
                  <p className="text-foreground font-medium mb-4">9:00 - 17:00 (GMT+1)</p>
                  <p className="text-muted-foreground mb-2">Samedi</p>
                  <p className="text-foreground font-medium">10:00 - 14:00</p>
                </div>

                <div className="bg-primary text-primary-foreground border border-primary rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Réponse Rapide</h3>
                  <p className="text-sm text-primary-foreground/90 mb-4">
                    Nous répondons généralement aux demandes dans les 24 heures ouvrables.
                  </p>
                  <p className="text-sm font-medium">Pour les questions urgentes, veuillez nous appeler directement.</p>
                </div>

                <a
                  href="https://wa.me/212661573626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-6 bg-white border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="w-6 h-6">
                    <svg
                      fill="#22c55e"
                      width="24px"
                      height="24px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>whatsapp</title>
                        <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
                      </g>
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">Message sur WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">Obtenez un support instantané</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-secondary border-t border-border py-12">
  <div className="container-wide">
    <h2 className="text-balance mb-8 text-foreground">Localisation</h2>
    <div className="bg-border rounded-lg overflow-hidden h-96 flex items-center justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3323.5624795528092!2d-7.610969624303223!3d33.59070737333426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM1JzI2LjYiTiA3wrAzNiczMC4yIlc!5e0!3m2!1sfr!2sma!4v1763315728681!5m2!1sfr!2sma"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  </div>
</section> */}

      </main>

      <Footer />
    </>
  )
}
