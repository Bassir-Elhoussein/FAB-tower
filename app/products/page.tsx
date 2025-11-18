'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WhatsAppButton from '@/components/ui/whatsapp-button';
import PhoneButton from '@/components/ui/phone-button';
import EmailButton from '@/components/ui/email-button';
import { categories, products } from '@/lib/products'
import { CategoryDescription } from '@/components/category-description'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : selectedSubcategory
      ? products.filter(p => p.category === selectedCategory && p.subcategory === selectedSubcategory)
      : products.filter(p => p.category === selectedCategory)

  const selectedCategoryInfo = categories.find(cat => cat.id === selectedCategory)

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedSubcategory(null)
  }

  return (
    <>
      <Header />

      <main>
        <PhoneButton />
        <EmailButton />
        <WhatsAppButton />
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
                  onClick={() => handleCategoryChange(cat.id)}
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

        {selectedCategoryInfo && selectedCategory !== 'all' && (
          <section className="bg-secondary py-12 border-b border-border">
            <div className="container-wide">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">
                {selectedCategoryInfo.title}
              </h2>
           
                <CategoryDescription description={selectedCategoryInfo.description} />
        
              
              
              {selectedCategoryInfo.subcategories && selectedCategoryInfo.subcategories.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold text-foreground mb-4">Filtrer par Subcatégorie:</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedSubcategory(null)}
                      className={`px-4 py-2 rounded-md font-semibold transition-all ${
                        selectedSubcategory === null
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-background text-foreground hover:bg-secondary border border-border'
                      }`}
                    >
                      Tous les {selectedCategoryInfo.label}
                    </button>
                    
                    {selectedCategoryInfo.subcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setSelectedSubcategory(sub.id)}
                        className={`px-4 py-2 rounded-md font-semibold transition-all ${
                          selectedSubcategory === sub.id
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-background text-foreground hover:bg-secondary border border-border'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

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
                          {/* Branding Logo bottom-right */}
                          <div className="absolute bottom-3 right-3">
                            <Image
                              src="/logo.jpg"
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
