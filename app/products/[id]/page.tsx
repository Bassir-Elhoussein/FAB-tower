import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ShoppingCart, Download } from 'lucide-react'
import WhatsAppButton from '@/components/ui/whatsapp-button'
import PhoneButton from '@/components/ui/phone-button'
import EmailButton from '@/components/ui/email-button'
import ProductGallery from '@/components/product-gallery'
import { productDetails } from '@/lib/products'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params
  const product = productDetails[id]

  return {
    title: `${product?.name || 'Produit'} - FAB TOWER`,
    description: product?.description || 'Détails du produit',
  }
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = productDetails[id]

  if (!product) {
    return (
      <>
        <Header />
        <main className="container-wide py-50">
          <Link href="/products" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft size={20} />
            Retour aux Produits
          </Link>
          <p className="text-muted-foreground">Produit non trouvé.</p>
        </main>
        <Footer />
      </>
    )
  }

  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image]

  return (
    <>
      <Header />

      <main>
        <PhoneButton />
        <EmailButton />
        <WhatsAppButton />
        
        {/* Breadcrumb */}
        <div className="border-b border-border bg-secondary">
          <div className="container-wide py-4">
            <Link href="/products" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft size={20} />
              Retour aux Produits
            </Link>
          </div>
        </div>

        {/* Product Details */}
        <section className="bg-white py-16">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <ProductGallery images={productImages} productName={product.name} />
              </div>

              {/* Product Info */}
              <div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-balance text-foreground mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

                <div className="mb-8 flex gap-4">
                  <a
                    href="mailto:fabtower.contact@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
                  >
                    <ShoppingCart size={20} />
                    Demander un Devis
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground rounded-md hover:border-primary transition-colors font-semibold"
                  >
                    <Download size={20} />
                    Télécharger la Fiche
                  </a>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Description Complète</h3>
                    <p className="text-muted-foreground">{product.fullDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications & Features */}
        <section className="bg-secondary py-16">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Specifications */}
              <div>
                <h2 className="text-balance mb-6 text-foreground">Caractéristiques Techniques</h2>
                <ul className="space-y-3">
                  {product.specifications.map((spec: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-balance mb-6 text-foreground">Applications Typiques</h2>
                <ul className="space-y-3">
                  {product.applications.map((app: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Uses For */}
        <section className="bg-white py-16">
          <div className="container-wide">
            <h2 className="text-balance mb-8 text-foreground">À Quoi Sert ce Produit?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.usesFor.map((use: string, idx: number) => (
                <div key={idx} className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="text-foreground font-semibold">{use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container-wide text-center">
            <h2 className="text-balance mb-6">Intéressé par ce Produit?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contactez notre équipe pour plus d'informations, des devis personnalisés, ou des solutions adaptées à vos besoins spécifiques.
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
