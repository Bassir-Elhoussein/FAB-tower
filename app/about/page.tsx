import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Award, Zap, Users, Globe, Shield, TrendingUp } from 'lucide-react'
import WhatsAppButton from '@/components/ui/whatsapp-button';
import PhoneButton from '@/components/ui/phone-button';
import EmailButton from '@/components/ui/email-button';

export const metadata = {
  title: 'À Propos de FAB TOWER - Fournisseur de Composants Industriels',
  description: 'Découvrez la mission, les valeurs et l\'engagement de FAB TOWER envers la fourniture de composants industriels de haute qualité et de solutions mécaniques.',
}

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Nous garantissons les normes de qualité les plus élevées et la cohérence dans chaque produit que nous fournissons.',
    },
    {
      icon: Zap,
      title: 'Rapidité',
      description: 'Délais de livraison rapides et service client réactif pour soutenir vos besoins de fabrication.',
    },
    {
      icon: Users,
      title: 'Expertise Technique',
      description: 'Notre équipe expérimentée fournit des conseils d\'expert et un soutien technique pour vos projets.',
    },
    {
      icon: Globe,
      title: 'Normes Mondiales',
      description: 'Certifications internationales et conformité aux normes de fabrication de classe mondiale.',
    },
  ]

  const certifications = [
    'Certifié ISO 9001:2015',
    'ISO 14001:2015 Gestion Environnementale',
    'ISO 45001:2018 Santé et Sécurité au Travail',
    'Normes de Qualité Internationales',
  ]

  return (
    <>
      <Header />

      <main>
         <PhoneButton />
              <EmailButton />
              <WhatsAppButton />
        {/* Page Header */}
          <section className="relative industrial-bg border-b border-border py-16">
            {/* Background Image with lighter Blur */}
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-sm/50" 
              style={{ backgroundImage: "url('/back2.png')" }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content with white text */}
            <div className="relative container-wide">
              <h1 className="text-balance text-white">À Propos de FAB TOWER</h1>
              <p className="text-xl text-white mt-4 max-w-2xl">
                Fournisseur premium de solutions mécaniques industrielles de confiance des fabricants du monde entier.
              </p>
            </div>
          </section>




        {/* Company Introduction */}
        <section className="bg-white py-20">
          <div className="container-wide">
            <div className="max-w-4xl">
              <h2 className="text-balance mb-6 text-foreground">Qui Sommes-nous?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                FAB TOWER est un fournisseur leader de composants mécaniques industriels et de solutions au Maroc . Avec des années d'expérience dans l'industrie, nous nous sommes établis comme partenaire de confiance pour les fabricants cherchant des roulements, ressorts, pièces mécaniques, arrêt  d'huile et chaînes de convoyeur de haute qualité.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Notre entreprise est construite sur le fondement de la fourniture de produits exceptionnels, d'expertise technique et de service client. Nous travaillons étroitement avec des marques mondialement renommées incluant SKF, FAG, Timken, NSK et NTN pour assurer que nos clients reçoivent uniquement les meilleurs composants pour leurs opérations de fabrication.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Basée à Casablanca, au Maroc, nous servons les clients de plusieurs industries, fournissant des solutions fiables qui soutiennent leur excellence opérationnelle et leur croissance.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-secondary border-y border-border py-20">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1 h-8 bg-primary rounded-full"></span>
                  Notre Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Être le partenaire de confiance des fabricants industriels en fournissant des composants mécaniques de qualité premium, une expertise technique exceptionnelle et un service client remarquable. Nous nous engageons à soutenir le succès de nos clients grâce à des solutions fiables et innovantes.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1 h-8 bg-primary rounded-full"></span>
                  Nos Valeurs
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  La fiabilité, l'intégrité et l'approche centrée sur le client guident tout ce que nous faisons. Nous accordons la priorité à la qualité plutôt qu'à la quantité, investissons dans les connaissances techniques et établissons des partenariats durables basés sur la confiance. Notre engagement envers l'amélioration continue garantit que nous livrons toujours l'excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white py-20">
          <div className="container-wide">
            <h2 className="text-balance mb-12 text-foreground">Pourquoi Choisir FAB TOWER?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="p-6 bg-secondary border border-border rounded-lg hover:border-primary transition-colors">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-secondary border-t border-b border-border py-20">
          <div className="container-wide">
            <h2 className="text-balance mb-12 text-foreground">Qualité & Certifications</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Les produits que nous livrons sont certifiés selon les normes les plus strictes, garantissant qualité, sécurité et respect de l’environnement. Ils reflètent notre engagement à fournir des solutions fiables et durables à nos clients. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-white border border-border rounded-lg">
                  <Award className="w-8 h-8 text-primary flex-shrink-0" />
                  <span className="font-semibold text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-white py-20">
          <div className="container-wide text-center">
            <h2 className="text-balance mb-6 text-foreground">Travaillons Ensemble</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Vous avez des questions sur nos produits ou services? Contactez notre équipe dès aujourd'hui.
            </p>
            <a
              href="mailto:fabtower.contact@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
            >
              Nous Contacter
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
