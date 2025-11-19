import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Check } from 'lucide-react'
import WhatsAppButton from '@/components/ui/whatsapp-button';
import PhoneButton from '@/components/ui/phone-button';
import EmailButton from '@/components/ui/email-button';
import { PartnersSection } from '@/components/partners-section'
import { AboutTeamSection } from '@/components/about-team-section'

export const metadata = {
  title: 'FAB TOWER - Composants Industriels & Solutions Mécaniques au Maroc',
  description: 'FAB TOWER est votre fournisseur de confiance au marché marocain pour les solutions mécaniques industrielles. Nous accompagnons les entreprises marocaines en leur fournissant des roulements, ressorts, composants mécaniques, arrêts d\'huile et chaînes de convoyeur de haute qualité, adaptés aux besoins de l\'industrie nationale.',
}

export default function Home() {
  const categories = [
    {
      id: 'mechanical',
      title: 'Fabrication Mécanique',
      description: 'Production mécanique personnalisée avec usinage de précision et services d\'assemblage.',
      icon: '⚙️',
    },
     {
      id: 'springs',
      title: 'Fabrication Ressorts (Springs)',
      description: 'Ressorts industriels certifiés fabriqués aux plus hauts standards de précision.',
      icon: '/ressort.png',
    },
    {
      id: 'bearings',
      title: 'Roulements (Bearings)',
      description: 'Roulements premium de marques mondialement renommées incluant SKF, FAG, Timken, NSK et NTN.',
      icon: '/IMG_8509.PNG',
    },
   
    
    {
      id: 'seals',
      title: 'Arrêt d’huile (Oil Seals)',
      description: 'Joints d\'huile de classe mondiale conçus pour les applications industrielles exigeantes.',
      icon: '/aret-removebg-preview.png',
    },
    {
      id: 'chains',
      title: 'Chaînes de Convoyeur',
      description: 'Chaînes de convoyeur industrielles pour les applications lourdes.',
      icon: '🔗',
    },
  ]

  const brands = [
  { name: "SKF", logo: "/skf.jpeg" },
  { name: "FAG", logo: "/fag.jpg" },
  { name: "Timken", logo: "/Timken.jpg" },
  { name: "NSK", logo: "/NSK.png" },
  { name: "NTN", logo: "/NTN.png" },
  { name: "ROZA", logo: "/roza.PNG" },
];


  const highlights = [
    'Fiabilité & Qualité',
    'Expertise Technique',
    'Livraison Rapide',
    'Prix Compétitifs',
  ]

  return (
    <>
      <Header />

      <main>
          
      <PhoneButton />
      <EmailButton />
      <WhatsAppButton />
        {/* Hero Section */}
           <section
                className="relative border-b border-border"
              >
                {/* Background with blur */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
                  style={{ backgroundImage: "url('/back.png')" }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative container-wide py-20 md:py-32">
                  <div className="max-w-3xl fade-in">
                    <h1 className="text-balance mb-6 text-white">
                      Composants Industriels Premium & Solutions Mécaniques au Maroc
                    </h1>

                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
               FAB TOWER est votre fournisseur de confiance au marché marocain pour les solutions mécaniques industrielles. Nous accompagnons les entreprises marocaines en leur fournissant des roulements, ressorts, composants mécaniques, arrêts d'huile et chaînes de convoyeur de haute qualité, adaptés aux besoins de l'industrie nationale.
                    </p>

                    <div className="flex gap-4 flex-wrap">
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
                      >
                        Explorer les Produits
                        <ArrowRight size={20} />
                      </Link>

                      <a
                        href="tel:+212661573626"
                    className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-md hover:bg-primary hover:border-primary hover:text-white transition-colors font-semibold"

                      >
                        Appelez-nous Maintenant
                      </a>
                    </div>
                  </div>
                </div>
              </section>



              {/* Trusted Brands */}
              <section className="bg-white border-b border-border">
                  <div className="container-wide py-12">
                    <p className="text-center text-muted-foreground font-semibold mb-8">
                      Distributeur  des Marques Premium
                    </p>

                    <div className="flex flex-wrap gap-10 justify-center items-center md:gap-14">
                      {brands.map((brand) => (
                        <div
                          key={brand.name}
                          className="group relative w-32 h-20 flex items-center justify-center 
                                    transition-transform duration-300 hover:scale-110"
                        >
                          <img
                            src={brand.logo || "/placeholder.svg"}
                            alt={brand.name}
                            className="max-h-16 opacity-80 group-hover:opacity-100 transition duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>


              {/* Categories Overview */}
              <section className="bg-secondary py-20">
                <div className="container-wide">
                  <h2 className="text-balance mb-4 text-foreground">Nos Catégories de Produits</h2>
                  <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
                    Gamme complète de composants industriels conçus pour répondre aux normes de fabrication les plus élevées.
                  </p>

                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/products#${category.id}`}
                        className="group p-6 bg-secondary border border-border rounded-lg hover:border-primary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      >
                        <div className="mb-4">
                                  {category.icon.startsWith('/') ? (
                                    <img
                                      src={category.icon || "/placeholder.svg"}
                                      alt={category.title}
                                      className="w-12 h-12 object-contain "
                                    />
                                  ) : (
                                    <span className="text-4xl">{category.icon}</span>
                                  )}
                                </div>

                        <h3 className="font-semibold text-foreground group-hover:text-accent-foreground mb-2">
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground group-hover:text-accent-foreground/80 leading-relaxed">
                          {category.description}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-primary group-hover:text-accent-foreground font-semibold">
                          En savoir plus
                          <ArrowRight size={16} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
 {/* Why Choose FAB TOWER */}
        <section className=" bg-white py-20 border-t border-b border-border py-20">
          <div className="container-wide">
            <h2 className="text-balance mb-12 text-foreground">Pourquoi Choisir FAB TOWER?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{highlight}</h3>
                    <p className="text-muted-foreground">
                      {highlight === 'Fiabilité & Qualité' &&
                        'Produits certifiés ISO respectant les normes internationales avec contrôle qualité rigoureux.'}
                      {highlight === 'Expertise Technique' &&
                        'Notre équipe d\'experts fournit un soutien technique et des conseils pour vos besoins spécifiques.'}
                      {highlight === 'Livraison Rapide' &&
                        'Logistique efficace et gestion de la chaîne d\'approvisionnement pour une livraison opportune dans le maroc.'}
                      {highlight === 'Prix Compétitifs' &&
                        'Meilleur rapport qualité-prix pour les composants industriels de haute qualité sans compromettre la qualité.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

              <PartnersSection />

              <AboutTeamSection />

       
        {/* CTA Section */}
        <section className="bg-white py-20">
          <div className="container-wide text-center">
            <h2 className="text-balance mb-6 text-foreground">Prêt à Commencer?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pour plus d'informations ou demande de devis, n'hésitez pas à nous contacter, nous nous ferons un plaisir de vous renseigner.   </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
              >
                Nous Contacter
              </Link>
              <a
                href="https://wa.me/212661573626"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
              >
                Message sur WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
