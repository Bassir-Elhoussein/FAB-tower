'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Product {
  id: string
  name: string
  category: string
  image: string
  shortDescription: string
}

interface Category {
  id: string
  title: string
  description: string
  label: string
}

export default function Products() {
  const categories: Category[] = [
    { id: 'all', title: 'Tous les Produits', description: 'Tous les produits', label: 'Tous' },
    { id: 'bearings', title: 'Roulements', description: 'Roulements premium', label: 'Roulements' },
    { id: 'springs', title: 'Ressorts', description: 'Ressorts industriels', label: 'Ressorts' },
    { id: 'mechanical', title: 'Fabrication Mécanique', description: 'Services d\'usinage', label: 'Mécanique' },
    { id: 'seals', title: 'Joints d\'Huile', description: 'Joints d\'huile premium', label: 'Joints' },
    { id: 'chains', title: 'Chaînes de Convoyeur', description: 'Chaînes industrielles', label: 'Chaînes' },
  ]

  const products: Product[] = [
    // Bearings
    { id: 'bearing-roller', name: 'Roulements à Rouleaux', category: 'bearings', image: '/roller-bearings-industrial.jpg', shortDescription: 'Roulements à rouleaux pour applications à charge élevée' },
    { id: 'bearing-spherical', name: 'Roulements Sphériques', category: 'bearings', image: '/spherical-bearings.jpg', shortDescription: 'Roulements sphériques pour installations alignées' },
    { id: 'bearing-ball', name: 'Roulements à Billes', category: 'bearings', image: '/ball-bearings.jpg', shortDescription: 'Roulements à billes pour diverses applications' },
    { id: 'bearing-tapered', name: 'Roulements Coniques', category: 'bearings', image: '/tapered-roller-bearings.jpg', shortDescription: 'Roulements à rouleaux coniques' },
    { id: 'bearing-cylindrical', name: 'Roulements Cylindriques', category: 'bearings', image: '/cylindrical-roller-bearings.jpg', shortDescription: 'Roulements à rouleaux cylindriques' },
    { id: 'bearing-thrust', name: 'Roulements de Poussée', category: 'bearings', image: '/thrust-ball-bearings.jpg', shortDescription: 'Roulements à billes de poussée' },
    
    // Springs
    { id: 'spring-compression', name: 'Ressorts de Compression', category: 'springs', image: '/compression-springs-industrial.jpg', shortDescription: 'Ressorts de compression pour support de charge' },
    { id: 'spring-tension', name: 'Ressorts de Traction', category: 'springs', image: '/tension-springs.jpg', shortDescription: 'Ressorts de traction pour applications de tirage' },
    { id: 'spring-torsion', name: 'Ressorts de Torsion', category: 'springs', image: '/torsion-springs.jpg', shortDescription: 'Ressorts de torsion pour force rotationnelle' },
    { id: 'spring-wire', name: 'Ressorts en Fil Formé', category: 'springs', image: '/wire-formed-springs.jpg', shortDescription: 'Ressorts en fil formé' },
    { id: 'spring-custom', name: 'Ressorts Sur Mesure', category: 'springs', image: '/custom-springs-manufacturing.jpg', shortDescription: 'Ressorts sur mesure conçus selon les spécifications' },

    // Mechanical Manufacturing
    { id: 'mech-spur', name: 'Pignon Denté', category: 'mechanical', image: '/spur-gears-industrial.jpg', shortDescription: 'Engrenages droits précis' },
    { id: 'mech-helical', name: 'Pignon Hélicoïdal', category: 'mechanical', image: '/helical-gears.jpg', shortDescription: 'Engrenages hélicoïdaux' },
    { id: 'mech-bevel', name: 'Pignon Conique', category: 'mechanical', image: '/bevel-gears.jpg', shortDescription: 'Engrenages coniques' },
    { id: 'mech-worm', name: 'Vis Sans Fin', category: 'mechanical', image: '/worm-gears.jpg', shortDescription: 'Vis sans fin précises' },
    { id: 'mech-planetary', name: 'Pignon Planétaire', category: 'mechanical', image: '/placeholder.svg?height=300&width=300', shortDescription: 'Engrenages planétaires' },

    // Oil Seals
    { id: 'seal-spi', name: 'Joint SPI', category: 'seals', image: '/placeholder.svg?height=300&width=300', shortDescription: 'Joints SPI simple lèvre' },
    { id: 'seal-double', name: 'Joint Double Lèvre', category: 'seals', image: '/placeholder.svg?height=300&width=300', shortDescription: 'Joints double lèvre' },
    { id: 'seal-ptfe', name: 'Joint PTFE', category: 'seals', image: '/placeholder.svg?height=300&width=300', shortDescription: 'Joints PTFE pour applications spécialisées' },
    { id: 'seal-vring', name: 'Joint V-Ring', category: 'seals', image: '/placeholder.svg?height=300&width=300', shortDescription: 'Joints V-ring' },
    { id: 'seal-cassette', name: 'Joint Cassette', category: 'seals', image: '/placeholder.svg?height=300&width=300', shortDescription: 'Joints type cassette' },

    // Conveyor Chains
    { id: 'chain-roller', name: 'Chaînes à Rouleaux', category: 'chains', image: '/placeholder.svg?height=300&width=300', shortDescription: 'Chaînes à rouleaux pour applications standard' },
    { id: 'chain-silent', name: 'Chaînes Silencieuses', category: 'chains', image: '/placeholder.svg?height=300&width=300', shortDescription: 'Chaînes silencieuses pour réduction du bruit' },
    { id: 'chain-plate', name: 'Chaînes à Plaques', category: 'chains', image: '/placeholder.svg?height=300&width=300', shortDescription: 'Chaînes à plaques pour conceptions spécifiques' },
    { id: 'chain-scraper', name: 'Chaînes à Raclage', category: 'chains', image: '/placeholder.svg?height=300&width=300', shortDescription: 'Chaînes à raclage' },
    { id: 'chain-attachment', name: 'Chaînes avec Attaches', category: 'chains', image: '/placeholder.svg?height=300&width=300', shortDescription: 'Chaînes avec attaches' },
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <>
      <Header />

      <main>
        {/* Page Header */}
      <section
          className="relative border-b border-border py-16 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/magasin.png')" }}
        >
          {/* Blurred overlay */}
          <div className="absolute inset-0 backdrop-blur-[6px] bg-black/20"></div>

          {/* Content */}
          <div className="relative container-wide text-white">
            <h1 className="text-balance">Magasin de Produits</h1>
            <p className="text-xl mt-4 max-w-2xl">
              Parcourez notre gamme complète de composants industriels. Cliquez sur une catégorie pour filtrer, puis cliquez sur un produit pour plus de détails.
            </p>
          </div>
        </section>


        {/* Category Filter Bar */}
        <section className="bg-white border-b border-border sticky top-16 z-40 py-4">
          <div className="container-wide">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-md font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="bg-white py-20">
          <div className="container-wide">
            {filteredProducts.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-8">
                  Affichage de {filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                      <div className="group cursor-pointer h-full">
                        <div className="relative overflow-hidden rounded-lg bg-secondary mb-4 aspect-square">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {/* ✅ Branding Logo bottom-right */}
                                          <div className="absolute bottom-3 right-3">
                                            <Image
                                              src="/logo.jpg" // replace with your actual logo path (e.g. /logo.png)
                                              alt="Brand Logo"
                                              width={50}
                                              height={50}
                                              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                                            />
                                          </div>
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {product.shortDescription}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">Aucun produit trouvé dans cette catégorie.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container-wide text-center">
            <h2 className="text-balance mb-6">Vous Besoin d\'Aide pour Trouver un Produit?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Notre équipe d'experts peut vous aider à trouver le composant parfait pour votre application spécifique.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="tel:+212661573626"
                className="px-8 py-3 bg-primary-foreground text-primary rounded-md hover:bg-primary-foreground/90 transition-colors font-semibold"
              >
                Nous Appeler
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-md hover:bg-primary-foreground/10 transition-colors font-semibold"
              >
                Formulaire de Contact
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
