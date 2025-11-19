'use client'

import { useState } from 'react'

export function PartnersSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const partnerLogos = [
    { name: 'Classic', logo: '/part1.JPG' },
    { name: 'Sunshine', logo: '/part2.JPG' },
   
  ]

  const FullText = () => (
    <div className="space-y-4">
      <p>
        FAB TOWER est reconnu comme l'un des fournisseurs industriels les plus fiables au Maroc, offrant des composants mécaniques et des solutions industrielles de haute qualité.
        Grâce à notre expertise et à une compréhension profonde des besoins des entreprises marocaines, nous assurons un service professionnel, des produits performants et une disponibilité continue.
      </p>

      <p>
        Notre sérieux nous a permis de gagner la confiance de grandes entreprises telles que COPAG et Distra, grâce à un sourcing direct, sécurisé et conforme aux standards techniques les plus exigeants.
      </p>

      <div>
        <p className="font-semibold mb-2">Nos principales solutions :</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Roulements industriels (à billes, rouleaux, spéciaux…)</li>
          <li>Ressorts et composants mécaniques sur mesure</li>
          <li>Arrêts d'huile (Oil Seals) haute performance</li>
          <li>Chaînes de convoyeur pour environnements exigeants</li>
        </ul>
      </div>

      <p>
        Avec un réseau de partenaires fiables, des produits certifiés et une réactivité exemplaire, FAB TOWER contribue à optimiser les performances des usines marocaines.
        Choisir FAB TOWER, c'est choisir un partenaire industriel fiable, engagé et capable d'accompagner la croissance de votre entreprise.
      </p>
    </div>
  )

  const ShortText = () => (
    <p>
      FAB TOWER est reconnu comme l'un des fournisseurs industriels les plus fiables au Maroc, offrant des composants mécaniques et des solutions industrielles de haute qualité.
      Grâce à notre expertise et à une compréhension profonde des besoins des entreprises marocaines, nous assurons un service professionnel, des produits performants et une disponibilité continue.
    </p>
  )

  return (
    <section className="bg-slate-100 border-t border-b border-border py-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            
            <h2 className="text-balance mb-6 text-foreground">
              Nous collaborons avec des partenaires de confiance au Maroc
            </h2>
            <div className="text-muted-foreground leading-relaxed mb-8">
              {isExpanded ? <FullText /> : <ShortText />}
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-block px-6 py-3 bg-primary text-white font-bold hover:bg-emerald-500 transition-colors rounded"
            >
              {isExpanded ? 'LIRE MOINS' : 'LIRE LA SUITE'}
            </button>
          </div>

          {/* Right - Partner Logos Grid */}
          <div className="grid grid-cols-2 gap-6 justify-items-center items-center">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="w-full h-24 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
