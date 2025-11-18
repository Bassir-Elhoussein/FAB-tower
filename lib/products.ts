export interface Product {
  id: string
  name: string
  category: string
  subcategory?: string
  image: string       // <- required
  shortDescription: string
}

export interface SubCategory {
  id: string
  label: string
}

export interface Category {
  id: string
  title: string
  description: string
  label: string
  subcategories?: SubCategory[] // Added optional subcategories
}


export interface ProductDetail extends Product {
  description: string
  fullDescription: string
  specifications: string[]
  applications: string[]
  usesFor: string[]
  images: string[]
}

export const categories: Category[] = [
  { id: 'all', title: 'Tous les Produits', description: 'Tous les produits', label: 'Tous' },
 {
  id: 'bearings',
  title: 'Roulements',
description:  `
  <p>Découvrez une large sélection de roulements industriels de haute qualité, soigneusement choisis parmi les meilleures marques internationales de bearings. Nous proposons des produits fiables, performants et durables, adaptés aux applications mécaniques, industrielles et agricoles.</p>

  <p>Nous distribuons exclusivement des marques mondiales reconnues pour leur excellence :</p>

  <ul>
    <li><strong>SKF (Suède)</strong> : leader mondial des roulements, réputé pour sa précision, sa durabilité et ses solutions techniques avancées.</li>
    <li><strong>FAG – Schaeffler (Allemagne)</strong> : référence incontournable pour les roulements haute performance utilisés dans les environnements industriels exigeants.</li>
    <li><strong>Timken (États-Unis)</strong> : spécialiste des roulements coniques, idéal pour les charges lourdes et les conditions de fonctionnement difficiles.</li>
    <li><strong>NSK (Japon)</strong> : expert dans les roulements haute précision, offrant une fiabilité exceptionnelle et une excellente résistance aux vitesses élevées.</li>
    <li><strong>NTN (Japon)</strong> : marque reconnue pour la qualité constante de ses roulements, son large choix de modèles et son rapport qualité/prix avantageux.</li>
  </ul>

  <p>Grâce à cette sélection rigoureuse, nous garantissons à nos clients des roulements fiables, performants et parfaitement adaptés aux besoins des professionnels.</p>
`, label: 'Roulements',
  subcategories: [
{ id: 'roller-bearings', label: 'Roulements à rouleaux' },
{ id: 'bearing-units', label: 'Unité de roulements' },
{ id: 'ball-bearings', label: 'Roulements à billes' },

  ]
},
 {
  id: 'springs',
  title: 'Ressorts',
  label: 'Ressorts',
  description: `
    <p>Notre entreprise est spécialisée dans la fabrication de ressorts industriels de haute qualité, conçus selon les normes internationales et livrés avec une certification de conformité garantissant performance, fiabilité et durabilité. Grâce à une expertise technique avancée et à un processus de production parfaitement maîtrisé, nous offrons des ressorts robustes, précis et adaptés aux applications professionnelles les plus exigeantes.</p>

    <p>Nous proposons une large gamme de ressorts industriels :</p>

    <ul>
      <li><strong>Ressorts de compression</strong> : conçus pour supporter des charges axiales avec une excellente résistance et une longue durée de vie.</li>
      <li><strong>Ressorts de traction</strong> : idéaux pour les applications nécessitant une force de rappel constante et contrôlée.</li>
      <li><strong>Ressorts de torsion</strong> : parfaits pour les mécanismes rotatifs ou nécessitant une force angulaire.</li>
      <li><strong>Ressorts sur mesure</strong> : développés selon les spécifications exactes du client pour répondre à des besoins techniques spécifiques.</li>
    </ul>

    <p>Chaque ressort est fabriqué à partir de matériaux hautement résistants, sélectionnés pour garantir une excellente stabilité mécanique et des performances optimales, même dans les environnements industriels les plus difficiles. Des contrôles stricts et des tests réguliers assurent une qualité constante et une précision maximale.</p>

    <p>Tous nos ressorts sont fournis avec une <strong>certification de conformité</strong>, attestant de leur robustesse, du respect des tolérances, du traitement thermique réalisé, ainsi que de leurs propriétés techniques. Cette transparence renforce la confiance de nos clients et garantit une qualité irréprochable.</p>

    <p>Grâce à notre savoir-faire, nous répondons aux exigences des secteurs industriels, mécaniques et agricoles en proposant des ressorts fiables, durables et parfaitement adaptés aux projets professionnels les plus exigeants.</p>
  `,
}
,{
  id: 'mechanical',
  title: 'Fabrication Mécanique',
  label: 'Fabrication mécanique',
  description: `
    <p>Spécialisés dans la fabrication mécanique de haute précision, nous proposons des solutions techniques robustes et adaptées aux exigences de l’industrie moderne. Grâce à un savoir-faire solide, un parc machines performant et un contrôle rigoureux de toutes les étapes de production, chaque composant est réalisé avec exactitude et fiabilité.</p>

    <p>Nos prestations couvrent un large éventail de services, incluant :</p>

    <ul>
      <li><strong>Tournage, fraisage, perçage et usinage de précision</strong> : pour des pièces parfaitement conformes aux spécifications techniques.</li>
      <li><strong>Fabrication et assemblage de pièces mécaniques</strong> : solutions complètes du prototype à la production en série.</li>
      <li><strong>Conception sur mesure</strong> : réalisation selon cahier des charges pour répondre à des besoins spécifiques.</li>
      <li><strong>Traitements thermiques et traitements de surface</strong> : amélioration de la résistance, de la durabilité et des performances des composants.</li>
      <li><strong>Prototypage et séries petites à moyennes</strong> : flexibilité pour répondre aux projets variés de nos clients.</li>
    </ul>

    <p>Chaque pièce bénéficie d’un suivi qualité strict, d’une vérification dimensionnelle détaillée et d’une sélection minutieuse des matériaux pour garantir résistance, durabilité et performance, même dans les environnements industriels les plus exigeants.</p>

    <p>Notre approche repose sur la fiabilité, la précision et la maîtrise technique. Nous accompagnons divers secteurs tels que la mécanique industrielle, l’agro-équipement, la transformation et les équipements techniques, tout en assurant un niveau élevé de finition et de professionnalisme.</p>

    <p>Voici quelques-uns de nos produits et solutions issus de notre expertise en fabrication mécanique de précision.</p>
  `,
}
,{
  id: 'seals',
  title: 'Arrêt d’Huile',
  label: 'Arrêt d’Huile',
  description: `
    <p>Nous proposons des Arrêt d’Huile originaux des plus grandes marques mondiales pour garantir la meilleure performance et protection de vos machines. Nos produits sont conçus pour prévenir les fuites et maintenir l’efficacité des équipements dans toutes les applications industrielles et mécaniques.</p>

    <p>Avantages de nos Arrêt d’Huile de marques mondiales :</p>
    <ul>
      <li><strong>Qualité fiable</strong> : issus des meilleures marques de l’industrie.</li>
      <li><strong>Haute résistance</strong> : adaptés à la chaleur, à la pression et à l’usure.</li>
      <li><strong>Installation facile et sécurisée</strong> : compatibles avec diverses machines et moteurs.</li>
    </ul>

    <p>Applications des Arrêt d’Huile de marques mondiales :</p>
    <ul>
      <li><strong>Moteurs et équipements industriels</strong> : protection optimale et prévention des fuites.</li>
      <li><strong>Machines agricoles et mécaniques</strong> : maintien de l’efficacité des équipements.</li>
      <li><strong>Équipements pour l’énergie et le transport</strong> : performances fiables même dans les conditions exigeantes.</li>
    </ul>

    <p>Obtenez des Arrêt d’Huile originaux de marques mondiales pour protéger vos équipements et assurer un fonctionnement optimal.</p>
  `,
},

{
  id: 'chains',
  title: 'Chaînes de Convoyeur',
  label: 'Chaînes de convoyeur à rouleaux ',
  description: `
    <p>Nous proposons une large gamme de chaînes de convoyeurs industriels conçues pour assurer un transport efficace, sûr et durable de vos matériaux et produits. Nos chaînes sont fabriquées selon les normes industrielles les plus strictes, garantissant fiabilité, longévité et performance optimale pour tous vos systèmes de convoyage.</p>

    <p>Caractéristiques de nos chaînes de convoyeurs :</p>
    <ul>
      <li><strong>Résistance maximale</strong> : adaptées aux charges lourdes et à l’usure continue.</li>
      <li><strong>Matériaux de qualité supérieure</strong> : acier renforcé et composants durables.</li>
      <li><strong>Compatibilité universelle</strong> : pour convoyeurs standards et sur mesure.</li>
    </ul>

    <p>Applications principales :</p>
    <ul>
      <li><strong>Industrie alimentaire et agroalimentaire</strong> : transport sûr et hygiénique des produits.</li>
      <li><strong>Industrie automobile et logistique</strong> : fiabilité et performance pour la manutention et le convoyage.</li>
    </ul>

    <p>Choisissez nos chaînes de convoyeurs industriels pour optimiser votre production et garantir un transport fluide et fiable de vos marchandises.</p>
  `,
}
]

export const products: Product[] = [
  // Bearings with subcategory mapping
   // Bearings with correct subcategories
  { id: 'spherical-roller-bearing', name: 'Roulements à Rouleaux Sphériques', category: 'bearings', subcategory: 'roller-bearings', image: '/products/1-1.jpg', shortDescription: 'Roulements sphériques pour applications pivotantes' },
  { id: 'thrust-spherical-roller-bearing', name: 'Roulements à Rouleaux Sphériques de Butée', category: 'bearings', subcategory: 'roller-bearings', image: '/products/1-2.jpg', shortDescription: 'Roulements sphériques de butée haute charge' },
  { id: 'cylindrical-roller-bearing', name: 'Roulements à Rouleaux Cylindriques', category: 'bearings', subcategory: 'roller-bearings', image: '/products/1-3.jpg', shortDescription: 'Roulements cylindriques précis' },
  { id: 'tapered-roller-bearing', name: 'Roulements à Rouleaux Coniques', category: 'bearings', subcategory: 'roller-bearings', image: '/products/1-4.jpg', shortDescription: 'Roulements coniques pour charges radiales' },
  { id: 'gauge-roller-bearing', name: 'Roulements à Galets', category: 'bearings', subcategory: 'roller-bearings', image: '/products/1-5.jpg', shortDescription: 'Roulements à galets spécialisés' },

  // Bearing Unit
  { id: 'bearing-unit', name: 'Unité de Roulements', category: 'bearings', subcategory: 'bearing-units', image: '/products/2-1.jpg', shortDescription: 'Unités de roulements complètes et pré-assemblées' },

  // Ball Bearings
  { id: 'angular-contact-ball-bearing', name: 'Roulements à Billes à Contact Oblique', category: 'bearings', subcategory: 'ball-bearings', image: '/products/3-1.jpg', shortDescription: 'Roulements à billes contact oblique' },
  { id: 'deep-groove-ball-bearing', name: 'Roulements à Billes à Gorge Profonde', category: 'bearings', subcategory: 'ball-bearings', image: '/products/3-2.jpg', shortDescription: 'Roulements à gorge profonde standard' },
  { id: 'self-aligning-ball-bearing', name: 'Roulements à Billes Auto-Aligneurs', category: 'bearings', subcategory: 'ball-bearings', image: '/products/3-3.jpg', shortDescription: 'Roulements auto-aligneurs' },
  { id: 'spherical-plain-bearing', name: 'Paliers Lisses Sphériques', category: 'bearings', subcategory: 'ball-bearings', image: '/products/3-4.jpg', shortDescription: 'Paliers lisses sans friction' },
  { id: 'thrust-ball-bearing', name: 'Roulement à Billes de Poussée', category: 'bearings', subcategory: 'ball-bearings', image: '/products/3-5.jpg', shortDescription: 'Roulements de poussée' },

  // Springs
  { id: 'compression-spring', name: 'Ressorts de Compression', category: 'springs', subcategory: 'compression', image: '/products/4-1.jpg', shortDescription: 'Ressorts de compression haute performance' },
  { id: 'tension-spring', name: 'Ressorts de Traction', category: 'springs', subcategory: 'traction', image: '/products/5-1.jpg', shortDescription: 'Ressorts de traction pour tirage' },
  { id: 'torsion-spring', name: 'Ressorts de Torsion', category: 'springs', subcategory: 'torsion', image: '/products/6-1.jpg', shortDescription: 'Ressorts de torsion rotationnels' },
  { id: 'wire-formed-spring', name: 'Ressorts en Fil Formé', category: 'springs', subcategory: 'fil-forme', image: '/products/7-1.jpg', shortDescription: 'Ressorts en fil formé personnalisés' },

  // Mechanical Manufacturing
  { id: 'spur-gear', name: 'Pignon Denté', category: 'mechanical', subcategory: 'pignon-dente', image: '/products/8-1.jpg', shortDescription: 'Engrenages droits précis' },
  { id: 'helical-gear', name: 'Pignon Hélicoïdal', category: 'mechanical', subcategory: 'pignon-helicoidal', image: '/products/8-2.jpg', shortDescription: 'Engrenages hélicoïdaux silencieux' },
  { id: 'bevel-gear', name: 'Pignon Conique', category: 'mechanical', subcategory: 'pignon-conique', image: '/products/8-3.jpg', shortDescription: 'Engrenages coniques' },
  { id: 'worm-gear', name: 'Pignon à Vis Sans Fin', category: 'mechanical', subcategory: 'pignon-vis-sans-fin', image: '/products/8-4.jpg', shortDescription: 'Vis sans fin précises' },
  { id: 'planetary-gear', name: 'Pignon Planétaire', category: 'mechanical', subcategory: 'pignon-planetaire', image: '/products/8-5.jpg', shortDescription: 'Engrenages planétaires compacts' },
  { id: 'rack-and-pinion', name: 'Engrenage à Crémaillère et Pignon', category: 'mechanical', subcategory: 'cremaillere-pignon', image: '/products/8-6.jpg', shortDescription: 'Systèmes crémaillère-pignon' },

  // Oil Seals
  { id: 'spi-seal', name: 'Joint SPI (Radial Shaft Seal)', category: 'seals', subcategory: 'radial-seals', image: '/products/9-1.jpg', shortDescription: 'Joints radiaux simple lèvre standard' },
  { id: 'double-lip-seal', name: 'Joint à Double Lèvre', category: 'seals', subcategory: 'radial-seals', image: '/products/9-2.jpg', shortDescription: 'Joints double lèvre haute protection' },
  { id: 'springless-seal', name: 'Joint sans Ressort', category: 'seals', subcategory: 'radial-seals', image: '/products/9-3.jpg', shortDescription: 'Joints sans ressort haute température' },
  { id: 'ptfe-seal', name: 'Joint en PTFE (Téflon)', category: 'seals', subcategory: 'specialty-seals', image: '/products/9-4.jpg', shortDescription: 'Joints PTFE résistants chimiques' },
  { id: 'axial-seal', name: 'Joint Axial (Face Seal / Mechanical Seal)', category: 'seals', subcategory: 'mechanical-seals', image: '/products/9-5.jpg', shortDescription: 'Joints d\'étanchéité mécanique' },
  { id: 'vring-seal', name: 'Joint V-Ring', category: 'seals', subcategory: 'specialty-seals', image: '/products/9-6.jpg', shortDescription: 'Joints V-ring auto-nettoyants' },
  { id: 'cassette-seal', name: 'Joint à Cassette (Cassette Seal)', category: 'seals', subcategory: 'specialty-seals', image: '/products/9-7.jpg', shortDescription: 'Joints cassette modulables' },
  { id: 'metal-lip-seal', name: 'Joint à Lèvre Métallique', category: 'seals', subcategory: 'specialty-seals', image: '/products/9-8.jpg', shortDescription: 'Joints à lèvre métallique renforcée' },
  { id: 'food-grade-seal', name: 'Joint pour Applications Alimentaires', category: 'seals', subcategory: 'specialty-seals', image: '/products/9-9.jpg', shortDescription: 'Joints conformes aux normes alimentaires' },

  // Conveyor Chains
  { id: 'roller-conveyor-chain', name: 'Chaînes de Convoyeur à Rouleaux (Roller Conveyor Chains)', category: 'chains', subcategory: 'roller-chains', image: '/products/10-1.jpg', shortDescription: 'Chaînes à rouleaux standard' },
  { id: 'silent-chain', name: 'Chaînes Silencieuses (Silent Chains / Inverted Tooth Chains)', category: 'chains', subcategory: 'silent-chains', image: '/products/10-2.jpg', shortDescription: 'Chaînes silencieuses bruit réduit' },
  { id: 'plate-conveyor-chain', name: 'Chaînes de Convoyeur à Plaques (Plate Conveyor Chains)', category: 'chains', subcategory: 'plate-chains', image: '/products/10-3.jpg', shortDescription: 'Chaînes à plaques modulables' },
  { id: 'drag-conveyor-chain', name: 'Chaînes de Convoyeur à Raclage (Drag Conveyor Chains)', category: 'chains', subcategory: 'drag-chains', image: '/products/10-4.jpg', shortDescription: 'Chaînes à raclage pour matériaux' },
  { id: 'attachment-conveyor-chain', name: 'Chaînes de Convoyeur avec Attaches (Attachment Conveyor Chains)', category: 'chains', subcategory: 'attachment-chains', image: '/products/10-5.jpg', shortDescription: 'Chaînes avec attaches intégrées' },
  { id: 'pintle-chain', name: 'Chaînes à Maillons Articulés (Pintle Chains)', category: 'chains', subcategory: 'pintle-chains', image: '/products/10-6.jpg', shortDescription: 'Chaînes à maillons pivotants' },
  { id: 'stainless-steel-conveyor-chain', name: 'Chaînes de Convoyeur en Acier Inoxydable (Stainless Steel Conveyor Chains)', category: 'chains', subcategory: 'stainless-chains', image: '/products/10-7.jpg', shortDescription: 'Chaînes inoxydables résistantes' },
  { id: 'heavy-duty-conveyor-chain', name: 'Chaînes de Convoyeur pour Charges Lourdes (Heavy Duty Conveyor Chains)', category: 'chains', subcategory: 'heavy-duty-chains', image: '/products/10-8.jpg', shortDescription: 'Chaînes haute résistance' },
];



export const productDetails: Record<string, ProductDetail> = {
  // Roller Bearings
  'spherical-roller-bearing': {
    id: 'spherical-roller-bearing',
    name: 'Roulements à Rouleaux Sphériques',
    category: 'bearings',
    subcategory: 'roller-bearings',
    image: '/products/1-1.jpg',
    images: ['/products/1-1.jpg'], // Using array format
    shortDescription: 'Roulements sphériques pour applications pivotantes',
    description: 'Roulements sphériques premium pour installations avec désalignement',
    fullDescription: 'Nos roulements à rouleaux sphériques sont conçus pour les applications exigeant une grande flexibilité d\'orientation. Ils offrent une tolérance angulaire supérieure et une excellente durée de vie.',
    specifications: [
      'Charge dynamique: jusqu\'à 200 kN',
      'Désalignement maximal: ±3°',
      'Double rangée de rouleaux',
      'Cage laiton ou acier',
      'Certifié ISO 281'
    ],
    applications: [
      'Installations de pompage',
      'Chaînes de transmission',
      'Équipements miniers',
      'Machines agricoles',
      'Systèmes de convoyage'
    ],
    usesFor: [
      'Compensation de désalignement',
      'Applications pivotantes',
      'Charges radiales lourdes',
      'Environnements exigeants'
    ],
  },
  'thrust-spherical-roller-bearing': {
    id: 'thrust-spherical-roller-bearing',
    name: 'Roulements à Rouleaux Sphériques de Butée',
    category: 'bearings',
    subcategory: 'roller-bearings',
    image: '/products/1-2.jpg',
    images: ['/products/1-2.jpg'],
    shortDescription: 'Roulements sphériques de butée haute charge',
    description: 'Roulements sphériques de butée pour charges élevées',
    fullDescription: 'Nos roulements à rouleaux sphériques de butée sont conçus pour supporter des charges axiales importantes tout en offrant une grande flexibilité d\'orientation.',
    specifications: [
      'Charge axiale maximale: jusqu\'à 200 kN',
      'Désalignement maximal: ±3°',
      'Double rangée de rouleaux',
      'Cage en acier',
      'Certifications ISO 9606 et ISO 281'
    ],
    applications: [
      'Axes de rotation',
      'Moteurs électriques',
      'Équipements de précision',
      'Systèmes de mouvement'
    ],
    usesFor: [
      'Transmission de puissance',
      'Support de charges',
      'Réduction de friction',
      'Applications hautes vitesses'
    ],
  },
  'cylindrical-roller-bearing': {
    id: 'cylindrical-roller-bearing',
    name: 'Roulements à Rouleaux Cylindriques',
    category: 'bearings',
    subcategory: 'roller-bearings',
    image: '/products/1-3.jpg',
    images: ['/products/1-3.jpg'],
    shortDescription: 'Roulements cylindriques précis',
    description: 'Roulements cylindriques pour applications à charge élevée',
    fullDescription: 'Nos roulements à rouleaux cylindriques sont fabriqués avec une précision extrême et sont idéaux pour les applications nécessitant une charge radiale élevée.',
    specifications: [
      'Charge radiale maximale: jusqu\'à 100 kN',
      'Vitesse maximale: 5000 tr/min',
      'Bagues en acier au chrome',
      'Rouleaux en acier dur',
      'Certifications ISO 3051'
    ],
    applications: [
      'Axes de rotation',
      'Moteurs électriques',
      'Équipements de précision',
      'Systèmes de mouvement'
    ],
    usesFor: [
      'Transmission de puissance',
      'Support de charges',
      'Réduction de friction',
      'Applications hautes vitesses'
    ],
  },
  'tapered-roller-bearing': {
    id: 'tapered-roller-bearing',
    name: 'Roulements à Rouleaux Coniques',
    category: 'bearings',
    subcategory: 'roller-bearings',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/1-4.jpg'],
    shortDescription: 'Roulements coniques pour charges radiales',
    description: 'Roulements à rouleaux coniques pour charges radiales',
    fullDescription: 'Nos roulements à rouleaux coniques sont conçus pour supporter des charges radiales importantes tout en assurant une transmission de puissance précise.',
    specifications: [
      'Charge radiale maximale: jusqu\'à 100 kN',
      'Charge axiale maximale: jusqu\'à 50 kN',
      'Bagues en acier au chrome',
      'Rouleaux en acier dur',
      'Certifications ISO 3051'
    ],
    applications: [
      'Axes de rotation',
      'Moteurs électriques',
      'Équipements de précision',
      'Systèmes de mouvement'
    ],
    usesFor: [
      'Transmission de puissance',
      'Support de charges',
      'Réduction de friction',
      'Applications hautes vitesses'
    ],
  },
  'gauge-roller-bearing': {
    id: 'gauge-roller-bearing',
    name: 'Roulements à Galets',
    category: 'bearings',
    subcategory: 'roller-bearings',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/1-5.jpg'],
    shortDescription: 'Roulements à galets spécialisés',
    description: 'Roulements à galets pour applications spécifiques',
    fullDescription: 'Nos roulements à galets sont conçus pour des applications spécifiques nécessitant une charge radiale élevée et une précision exceptionnelle.',
    specifications: [
      'Charge radiale maximale: jusqu\'à 150 kN',
      'Vitesse maximale: 4000 tr/min',
      'Bagues en acier au chrome',
      'Galets en acier dur',
      'Certifications ISO 3051'
    ],
    applications: [
      'Axes de rotation',
      'Moteurs électriques',
      'Équipements de précision',
      'Systèmes de mouvement'
    ],
    usesFor: [
      'Transmission de puissance',
      'Support de charges',
      'Réduction de friction',
      'Applications hautes vitesses'
    ],
  },

  // Bearing Units
  'bearing-unit': {
    id: 'bearing-unit',
    name: 'Unité de Roulements',
    category: 'bearings',
    subcategory: 'bearing-units',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/2-1.jpg','/products/2-2.jpg','/products/2-3.jpg'],
    shortDescription: 'Unités de roulements complètes et pré-assemblées',
    description: 'Unités de roulements pré-assemblées',
    fullDescription: 'Nos unités de roulements sont complètes et pré-assemblées, facilitant l\'installation et la maintenance.',
    specifications: [
      'Charge radiale: jusqu\'à 100 kN',
      'Charge axiale: jusqu\'à 50 kN',
      'Bagues en acier au chrome',
      'Rouleaux en acier dur',
      'Certifications ISO 9606 et ISO 3051'
    ],
    applications: [
      'Axes de rotation',
      'Moteurs électriques',
      'Équipements de précision',
      'Systèmes de mouvement'
    ],
    usesFor: [
      'Transmission de puissance',
      'Support de charges',
      'Réduction de friction',
      'Applications hautes vitesses'
    ],
  },

  // Ball Bearings
  'angular-contact-ball-bearing': {
    id: 'angular-contact-ball-bearing',
    name: 'Roulements à Billes à Contact Oblique',
    category: 'bearings',
    subcategory: 'ball-bearings',
    image: '/products/3-1.jpg',
    images: ['/products/3-1.jpg'],
    shortDescription: 'Roulements à billes contact oblique',
    description: 'Roulements à billes contact oblique pour applications spécifiques',
    fullDescription: 'Nos roulements à billes contact oblique sont conçus pour des applications nécessitant une transmission de puissance précise dans des configurations spécifiques.',
    specifications: [
      'Charge radiale: jusqu\'à 50 kN',
      'Charge axiale: jusqu\'à 25 kN',
      'Bagues en acier au chrome',
      'Billes en acier dur',
      'Certifications ISO 9606'
    ],
    applications: [
      'Axes de rotation',
      'Moteurs électriques',
      'Équipements de précision',
      'Systèmes de mouvement'
    ],
    usesFor: [
      'Transmission de puissance',
      'Support de charges',
      'Réduction de friction',
      'Applications hautes vitesses'
    ],
  },
  'deep-groove-ball-bearing': {
    id: 'deep-groove-ball-bearing',
    name: 'Roulements à Billes à Gorge Profonde',
    category: 'bearings',
    subcategory: 'ball-bearings',
    image: '/products/3-1.jpg',
    images: ['/products/3-2.jpg'],
    shortDescription: 'Roulements à gorge profonde standard',
    description: 'Roulements à gorge profonde pour applications à charge élevée',
    fullDescription: 'Nos roulements à gorge profonde sont fabriqués pour supporter des charges radiales importantes tout en assurant une précision et une fiabilité exceptionnelles.',
    specifications: [
      'Charge radiale maximale: jusqu\'à 100 kN',
      'Vitesse maximale: 3000 tr/min',
      'Bagues en acier au chrome',
      'Billes en acier dur',
      'Certifications ISO 9606'
    ],
    applications: [
      'Axes de rotation',
      'Moteurs électriques',
      'Équipements de précision',
      'Systèmes de mouvement'
    ],
    usesFor: [
      'Transmission de puissance',
      'Support de charges',
      'Réduction de friction',
      'Applications hautes vitesses'
    ],
  },
  'self-aligning-ball-bearing': {
    id: 'self-aligning-ball-bearing',
    name: 'Roulements à Billes Auto-Aligneurs',
    category: 'bearings',
    subcategory: 'ball-bearings',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/3-3.jpg'],
    shortDescription: 'Roulements auto-aligneurs',
    description: 'Roulements à billes auto-aligneurs pour applications spécifiques',
    fullDescription: 'Nos roulements à billes auto-aligneurs sont conçus pour compenser les désalignements mineurs et assurer une transmission de puissance précise.',
    specifications: [
      'Charge radiale: jusqu\'à 50 kN',
      'Charge axiale: jusqu\'à 25 kN',
      'Bagues en acier au chrome',
      'Billes en acier dur',
      'Certifications ISO 9606'
    ],
    applications: [
      'Axes de rotation',
      'Moteurs électriques',
      'Équipements de précision',
      'Systèmes de mouvement'
    ],
    usesFor: [
      'Compensation de désalignement',
      'Transmission de puissance',
      'Support de charges',
      'Applications hautes vitesses'
    ],
  },
  'spherical-plain-bearing': {
    id: 'spherical-plain-bearing',
    name: 'Paliers Lisses Sphériques',
    category: 'bearings',
    subcategory: 'ball-bearings',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/3-4.jpg'],
    shortDescription: 'Paliers lisses sans friction',
    description: 'Paliers lisses sphériques pour applications spécifiques',
    fullDescription: 'Nos paliers lisses sphériques sont conçus pour des applications nécessitant une transmission de puissance précise sans friction.',
    specifications: [
      'Charge radiale: jusqu\'à 50 kN',
      'Charge axiale: jusqu\'à 25 kN',
      'Paliers en acier dur',
      'Matériau de support en acier',
      'Certifications ISO 9606'
    ],
    applications: [
      'Axes de rotation',
      'Moteurs électriques',
      'Équipements de précision',
      'Systèmes de mouvement'
    ],
    usesFor: [
      'Transmission de puissance',
      'Support de charges',
      'Réduction de friction',
      'Applications hautes vitesses'
    ],
  },
  'thrust-ball-bearing': {
    id: 'thrust-ball-bearing',
    name: 'Roulement à Billes de Poussée',
    category: 'bearings',
    subcategory: 'ball-bearings',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/3-5.jpg'],
    shortDescription: 'Roulements de poussée',
    description: 'Roulements à billes de poussée pour applications spécifiques',
    fullDescription: 'Nos roulements à billes de poussée sont conçus pour supporter des charges axiales importantes tout en assurant une transmission de puissance précise.',
    specifications: [
      'Charge axiale maximale: jusqu\'à 100 kN',
      'Bagues en acier au chrome',
      'Billes en acier dur',
      'Certifications ISO 9606'
    ],
    applications: [
      'Axes de rotation',
      'Moteurs électriques',
      'Équipements de précision',
      'Systèmes de mouvement'
    ],
    usesFor: [
      'Transmission de puissance',
      'Support de charges',
      'Réduction de friction',
      'Applications hautes vitesses'
    ],
  },

  // Springs
  'compression-spring': {
    id: 'compression-spring',
    name: 'Ressorts de Compression',
    category: 'springs',
    subcategory: 'compression',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/4-1.jpg','/products/4-2.jpg','/products/4-3.jpg','/products/4-4.jpg','/products/4-5.jpg','/products/4-6.jpg','/products/4-7.jpg','/products/4-8.jpg','/products/4-9.jpg','/products/4-10.jpg','/products/4-11.jpg',],
    shortDescription: 'Ressorts de compression haute performance',
    description: 'Ressorts de compression robustes et fiables pour applications industrielles',
    fullDescription: 'Notre entreprise est spécialisée dans la fabrication de ressorts industriels de haute qualité, conçus selon les normes internationales et livrés avec une certification de conformité garantissant performance, fiabilité et durabilité. Grâce à une expertise technique avancée et à un processus de production parfaitement maîtrisé, nous offrons des ressorts robustes, précis et adaptés aux applications professionnelles les plus exigeantes.',
    specifications: [
      'Acier à ressort haute résistance',
      'Traitements thermiques avancés',
      'Diamètre du fil: 0.8-15mm',
      'Longueur libre variable selon besoin',
      'Tolérance H8 selon norme DIN 2194'
    ],
    applications: [
      'Suspension automobile',
      'Équipements industriels',
      'Systèmes d\'absorption d\'énergie',
      'Machines de précision',
      'Applications hautes températures'
    ],
    usesFor: [
      'Stockage d\'énergie',
      'Amortissement de chocs',
      'Support de charge',
      'Récupération élastique'
    ],
  },
  'tension-spring': {
    id: 'tension-spring',
    name: 'Ressorts de Traction',
    category: 'springs',
    subcategory: 'traction',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/5-1.jpg','/products/5-2.jpg','/products/5-3.jpg','/products/5-4.jpg','/products/5-5.jpg','/products/5-6.jpg','/products/5-7.jpg','/products/5-8.jpg','/products/5-9.jpg','/products/5-10.jpg',],
    shortDescription: 'Ressorts de traction pour tirage',
    description: 'Ressorts de traction haute performance',
    fullDescription: 'Les ressorts de traction conçus pour supporter les forces de tirage et d\'extension. Fabriqués en acier haute résistance avec différentes configurations de crochets.',
    specifications: [
      'Diamètre du fil: 1-12mm',
      'Force de traction variable',
      'Crochets multiples disponibles',
      'Traitement thermique certifié'
    ],
    applications: [
      'Systèmes de suspension',
      'Mécanismes d\'entraînement',
      'Équipements agricoles',
      'Portes et portails'
    ],
    usesFor: [
      'Tirage et extension',
      'Récupération de position',
      'Absorption d\'énergie'
    ],
  },
  'torsion-spring': {
    id: 'torsion-spring',
    name: 'Ressorts de Torsion',
    category: 'springs',
    subcategory: 'torsion',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/6-1.jpg','/products/6-2.jpg','/products/6-3.jpg','/products/6-4.jpg','/products/6-5.jpg','/products/6-7.jpg','/products/6-8.jpg','/products/6-9.jpg','/products/6-10.jpg','/products/6-11.jpg',],
    shortDescription: 'Ressorts de torsion pour forces rotationnelles',
    description: 'Ressorts de torsion robustes',
    fullDescription: 'Les ressorts de torsion offrent une force rotationnelle constante et fiable pour vos applications.',
    specifications: [
      'Moment de torsion: variable',
      'Angle de rotation: jusqu\'à 360°',
      'Acier haute résistance',
      'Brins formés selon spécifications'
    ],
    applications: [
      'Mécanismes d\'embrayage',
      'Systèmes de rembobinage',
      'Équipements d\'affichage',
      'Vannes de contrôle'
    ],
    usesFor: [
      'Transmission de couple',
      'Récupération rotationnelle',
      'Compensation angulaire'
    ],
  },
  'wire-formed-spring': {
    id: 'wire-formed-spring',
    name: 'Ressorts en Fil Formé',
    category: 'springs',
    subcategory: 'fil-forme',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/7-1.jpg','/products/7-2.jpg','/products/7-3.jpg','/products/7-4.jpg','/products/7-5.jpg','/products/7-7.jpg','/products/7-6.jpg',],
    shortDescription: 'Ressorts en fil formé personnalisés',
    description: 'Ressorts sur mesure en fil formé',
    fullDescription: 'Ces ressorts sont formés selon vos spécifications exactes pour répondre aux besoins uniques de votre application.',
    specifications: [
      'Géométrie personnalisée',
      'Tous les diamètres de fil disponibles',
      'Finitions multiples',
      'Prototypes et production'
    ],
    applications: [
      'Applications spécialisées',
      'Prototypage rapide',
      'Production de faible volume',
      'Solutions sur mesure'
    ],
    usesFor: [
      'Configurations uniques',
      'Intégration directe',
      'Optimisation d\'espace'
    ],
  },

  // Mechanical Gears
  'spur-gear': {
    id: 'spur-gear',
    name: 'Pignon Denté',
    category: 'mechanical',
    subcategory: 'pignon-dente',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/8-1.jpg'],
    shortDescription: 'Engrenages droits précis',
    description: 'Engrenages droits de haute précision',
    fullDescription: 'Nos engrenages droits sont fabriqués avec une précision extrême selon les normes DIN et ISO. Idéaux pour les applications nécessitant une transmission silencieuse et efficace.',
    specifications: [
      'Module: 0.5-20',
      'Nombre de dents: 10-200',
      'Matériaux: Acier, Bronze, Aluminium',
      'Tolérance DIN 6-8',
      'Usinage CNC haute précision'
    ],
    applications: [
      'Réducteurs',
      'Systèmes d\'entraînement',
      'Machines-outils',
      'Équipements industriels'
    ],
    usesFor: [
      'Transmission de mouvement',
      'Changement de vitesse',
      'Modifications de couple'
    ],
  },
  'helical-gear': {
    id: 'helical-gear',
    name: 'Pignon Hélicoïdal',
    category: 'mechanical',
    subcategory: 'pignon-helicoidal',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/8-2.jpg'],
    shortDescription: 'Engrenages hélicoïdaux silencieux',
    description: 'Engrenages hélicoïdaux haute performance',
    fullDescription: 'Les engrenages hélicoïdaux offrent un fonctionnement plus silencieux et une transmission plus douce que les engrenages droits.',
    specifications: [
      'Angle d\'hélice: 15-45°',
      'Module: 1-20',
      'Capacité de charge: supérieure aux engrenages droits',
      'Usinage de précision'
    ],
    applications: [
      'Transmissions automobiles',
      'Réducteurs silencieux',
      'Équipements haute vitesse',
      'Boîtes de vitesses'
    ],
    usesFor: [
      'Réduction du bruit',
      'Charges élevées',
      'Haute vitesse'
    ],
  },
  'bevel-gear': {
    id: 'bevel-gear',
    name: 'Pignon Conique',
    category: 'mechanical',
    subcategory: 'pignon-conique',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/8-3.jpg'],
    shortDescription: 'Engrenages coniques',
    description: 'Engrenages coniques pour applications spécifiques',
    fullDescription: 'Nos engrenages coniques sont conçus pour les applications nécessitant une transmission de puissance précise dans des configurations angulaires spécifiques.',
    specifications: [
      'Module: 0.5-20',
      'Nombre de dents: 10-200',
      'Matériaux: Acier, Bronze, Aluminium',
      'Tolérance DIN 6-8',
      'Usinage CNC haute précision'
    ],
    applications: [
      'Réducteurs',
      'Systèmes d\'entraînement',
      'Machines-outils',
      'Équipements industriels'
    ],
    usesFor: [
      'Transmission de mouvement',
      'Changement de vitesse',
      'Modifications de couple'
    ],
  },
  'worm-gear': {
    id: 'worm-gear',
    name: 'Pignon à Vis Sans Fin',
    category: 'mechanical',
    subcategory: 'pignon-vis-sans-fin',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/8-4.jpg'],
    shortDescription: 'Vis sans fin précises',
    description: 'Vis sans fin pour applications spécifiques',
    fullDescription: 'Nos vis sans fin sont fabriquées avec une précision extrême et sont idéales pour les applications nécessitant une transmission de puissance précise dans des configurations angulaires spécifiques.',
    specifications: [
      'Module: 0.5-20',
      'Nombre de dents: 10-200',
      'Matériaux: Acier, Bronze, Aluminium',
      'Tolérance DIN 6-8',
      'Usinage CNC haute précision'
    ],
    applications: [
      'Réducteurs',
      'Systèmes d\'entraînement',
      'Machines-outils',
      'Équipements industriels'
    ],
    usesFor: [
      'Transmission de mouvement',
      'Changement de vitesse',
      'Modifications de couple'
    ],
  },
  'planetary-gear': {
    id: 'planetary-gear',
    name: 'Pignon Planétaire',
    category: 'mechanical',
    subcategory: 'pignon-planetaire',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/8-5.jpg'],
    shortDescription: 'Engrenages planétaires compacts',
    description: 'Engrenages planétaires pour applications spécifiques',
    fullDescription: 'Nos engrenages planétaires sont conçus pour les applications nécessitant une transmission de puissance précise dans des configurations spécifiques.',
    specifications: [
      'Module: 0.5-20',
      'Nombre de dents: 10-200',
      'Matériaux: Acier, Bronze, Aluminium',
      'Tolérance DIN 6-8',
      'Usinage CNC haute précision'
    ],
    applications: [
      'Réducteurs',
      'Systèmes d\'entraînement',
      'Machines-outils',
      'Équipements industriels'
    ],
    usesFor: [
      'Transmission de mouvement',
      'Changement de vitesse',
      'Modifications de couple'
    ],
  },
  'rack-and-pinion': {
    id: 'rack-and-pinion',
    name: 'Engrenage à Crémaillère et Pignon',
    category: 'mechanical',
    subcategory: 'cremaillere-pignon',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/8-6.jpg'],
    shortDescription: 'Systèmes crémaillère-pignon',
    description: 'Systèmes crémaillère-pignon pour applications spécifiques',
    fullDescription: 'Nos systèmes crémaillère-pignon sont conçus pour les applications nécessitant une transmission de puissance précise dans des configurations spécifiques.',
    specifications: [
      'Module: 0.5-20',
      'Nombre de dents: 10-200',
      'Matériaux: Acier, Bronze, Aluminium',
      'Tolérance DIN 6-8',
      'Usinage CNC haute précision'
    ],
    applications: [
      'Réducteurs',
      'Systèmes d\'entraînement',
      'Machines-outils',
      'Équipements industriels'
    ],
    usesFor: [
      'Transmission de mouvement',
      'Changement de vitesse',
      'Modifications de couple'
    ],
  },

  // Oil Seals
  'spi-seal': {
    id: 'spi-seal',
    name: 'Joint SPI (Radial Shaft Seal)',
    category: 'seals',
    subcategory: 'radial-seals',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/9-1.jpg'],
    shortDescription: 'Joints radiaux simple lèvre standard',
    description: 'Joints d\'étanchéité radiaux SPI haute performance',
    fullDescription: 'Nous proposons des joints d\'huile originaux des plus grandes marques mondiales pour garantir la meilleure performance et protection de vos machines. Nos produits sont conçus pour prévenir les fuites et maintenir l\'efficacité des équipements dans toutes les applications industrielles et mécaniques.',
    specifications: [
      'Lèvre simple contact direct',
      'Matériau: NBR, FKM, PTFE',
      'Températures: -40°C à +120°C',
      'Pression: jusqu\'à 10 bar',
      'Certifications: ISO, DIN'
    ],
    applications: [
      'Moteurs électriques',
      'Réducteurs',
      'Pompes centrifuges',
      'Compresseurs',
      'Équipements industriels'
    ],
    usesFor: [
      'Prévention des fuites d\'huile',
      'Protection du roulement',
      'Maintien de l\'efficacité',
      'Durée de vie prolongée'
    ],
  },
  'double-lip-seal': {
    id: 'double-lip-seal',
    name: 'Joint à Double Lèvre',
    category: 'seals',
    subcategory: 'radial-seals',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/9-2.jpg'],
    shortDescription: 'Joints double lèvre haute protection',
    description: 'Joints double lèvre protection maximale',
    fullDescription: 'Les joints double lèvre offrent une protection supérieure avec lèvre interne et externe.',
    specifications: [
      'Double lèvre radiale',
      'Chambre de fluide central',
      'Protection accrue contre la poussière',
      'Performance améliorée'
    ],
    applications: [
      'Environnements poussiéreux',
      'Applications difficiles',
      'Machines agraires',
      'Équipements miniers'
    ],
    usesFor: [
      'Double étanchéité',
      'Protection des contaminants',
      'Fiabilité accrue'
    ],
  },
  'springless-seal': {
    id: 'springless-seal',
    name: 'Joint sans Ressort',
    category: 'seals',
    subcategory: 'radial-seals',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/9-3.jpg'],
    shortDescription: 'Joints sans ressort haute température',
    description: 'Joints sans ressort pour applications à haute température',
    fullDescription: 'Nos joints sans ressort sont conçus pour résister à des températures élevées tout en offrant une protection maximale contre les fuites d\'huile.',
    specifications: [
      'Matériau: NBR, FKM',
      'Températures: -40°C à +150°C',
      'Pression: jusqu\'à 8 bar',
      'Certifications: ISO, DIN'
    ],
    applications: [
      'Moteurs électriques',
      'Réducteurs',
      'Pompes centrifuges',
      'Compresseurs',
      'Équipements industriels'
    ],
    usesFor: [
      'Prévention des fuites d\'huile',
      'Protection du roulement',
      'Maintien de l\'efficacité',
      'Applications à haute température'
    ],
  },
  'ptfe-seal': {
    id: 'ptfe-seal',
    name: 'Joint en PTFE (Téflon)',
    category: 'seals',
    subcategory: 'specialty-seals',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/9-4.jpg'],
    shortDescription: 'Joints PTFE résistants chimiques',
    description: 'Joints PTFE pour applications chimiques',
    fullDescription: 'Les joints en PTFE offrent une résistance chimique et thermique exceptionnelle.',
    specifications: [
      'Matériau: PTFE pur',
      'Résistance chimique totale',
      'Température: -200°C à +260°C',
      'Coefficient de friction minimal'
    ],
    applications: [
      'Industries chimiques',
      'Raffineries pétrolières',
      'Applications cryogéniques',
      'Équipements spécialisés'
    ],
    usesFor: [
      'Résistance chimique',
      'Haute température',
      'Applications extrêmes'
    ],
  },
  'axial-seal': {
    id: 'axial-seal',
    name: 'Joint Axial (Face Seal / Mechanical Seal)',
    category: 'seals',
    subcategory: 'mechanical-seals',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/9-5.jpg'],
    shortDescription: 'Joints d\'étanchéité mécanique',
    description: 'Joints mécaniques pour applications spécifiques',
    fullDescription: 'Nos joints mécaniques sont conçus pour offrir une étanchéité maximale dans des configurations spécifiques.',
    specifications: [
      'Matériau: Acier, alliage',
      'Pression: jusqu\'à 10 bar',
      'Températures: -40°C à +120°C',
      'Certifications: ISO, DIN'
    ],
    applications: [
      'Moteurs électriques',
      'Réducteurs',
      'Pompes centrifuges',
      'Compresseurs',
      'Équipements industriels'
    ],
    usesFor: [
      'Prévention des fuites d\'huile',
      'Protection du roulement',
      'Maintien de l\'efficacité',
      'Durée de vie prolongée'
    ],
  },
  'vring-seal': {
    id: 'vring-seal',
    name: 'Joint V-Ring',
    category: 'seals',
    subcategory: 'specialty-seals',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/9-6.jpg'],
    shortDescription: 'Joints V-ring auto-nettoyants',
    description: 'Joints V-ring pour applications spécifiques',
    fullDescription: 'Nos joints V-ring sont conçus pour offrir une protection maximale contre les contaminants tout en étant auto-nettoyants.',
    specifications: [
      'Matériau: Acier, alliage',
      'Pression: jusqu\'à 10 bar',
      'Températures: -40°C à +120°C',
      'Certifications: ISO, DIN'
    ],
    applications: [
      'Moteurs électriques',
      'Réducteurs',
      'Pompes centrifuges',
      'Compresseurs',
      'Équipements industriels'
    ],
    usesFor: [
      'Protection des contaminants',
      'Auto-nettoyage',
      'Durée de vie prolongée'
    ],
  },
  'cassette-seal': {
    id: 'cassette-seal',
    name: 'Joint à Cassette (Cassette Seal)',
    category: 'seals',
    subcategory: 'specialty-seals',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/9-7.jpg'],
    shortDescription: 'Joints cassette modulables',
    description: 'Joints cassette pour applications spécifiques',
    fullDescription: 'Nos joints cassette sont modulables et conçus pour offrir une protection maximale contre les contaminants.',
    specifications: [
      'Matériau: Acier, alliage',
      'Pression: jusqu\'à 10 bar',
      'Températures: -40°C à +120°C',
      'Certifications: ISO, DIN'
    ],
    applications: [
      'Moteurs électriques',
      'Réducteurs',
      'Pompes centrifuges',
      'Compresseurs',
      'Équipements industriels'
    ],
    usesFor: [
      'Protection des contaminants',
      'Modulabilité',
      'Durée de vie prolongée'
    ],
  },
  'metal-lip-seal': {
    id: 'metal-lip-seal',
    name: 'Joint à Lèvre Métallique',
    category: 'seals',
    subcategory: 'specialty-seals',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/9-8.jpg'],
    shortDescription: 'Joints à lèvre métallique renforcée',
    description: 'Joints à lèvre métallique pour applications spécifiques',
    fullDescription: 'Nos joints à lèvre métallique sont renforcés et conçus pour offrir une protection maximale contre les contaminants.',
    specifications: [
      'Matériau: Acier, alliage',
      'Pression: jusqu\'à 10 bar',
      'Températures: -40°C à +120°C',
      'Certifications: ISO, DIN'
    ],
    applications: [
      'Moteurs électriques',
      'Réducteurs',
      'Pompes centrifuges',
      'Compresseurs',
      'Équipements industriels'
    ],
    usesFor: [
      'Protection des contaminants',
      'Renforcement de l\'étanchéité',
      'Durée de vie prolongée'
    ],
  },
  'food-grade-seal': {
    id: 'food-grade-seal',
    name: 'Joint pour Applications Alimentaires',
    category: 'seals',
    subcategory: 'specialty-seals',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/9-9.jpg'],
    shortDescription: 'Joints conformes aux normes alimentaires',
    description: 'Joints alimentaires pour applications spécifiques',
    fullDescription: 'Nos joints alimentaires sont conçus pour respecter les normes alimentaires les plus strictes et offrir une protection maximale contre les contaminants.',
    specifications: [
      'Matériau: Acier inoxydable, alliage',
      'Pression: jusqu\'à 5 bar',
      'Températures: -20°C à +60°C',
      'Certifications: ISO, DIN, NSF'
    ],
    applications: [
      'Industrie alimentaire',
      'Machines de production alimentaire',
      'Systèmes de packaging',
      'Équipements de traitement des aliments'
    ],
    usesFor: [
      'Protection des contaminants',
      'Conformité alimentaire',
      'Durée de vie prolongée'
    ],
  },

  // Conveyor Chains
  'roller-conveyor-chain': {
    id: 'roller-conveyor-chain',
    name: 'Chaînes de Convoyeur à Rouleaux (Roller Conveyor Chains)',
    category: 'chains',
    subcategory: 'roller-chains',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/10-1.jpg'],
    shortDescription: 'Chaînes à rouleaux standard',
    description: 'Chaînes à rouleaux pour convoyage industriel',
    fullDescription: 'Nous proposons une large gamme de chaînes de convoyeurs industriels conçues pour assurer un transport efficace, sûr et durable de vos matériaux et produits. Nos chaînes sont fabriquées selon les normes industrielles les plus strictes, garantissant fiabilité, longévité et performance optimale pour tous vos systèmes de convoyage.',
    specifications: [
      'Pas: 9.525-63.5mm',
      'Charge de rupture: 500-50000 N',
      'Acier allié traité thermiquement',
      'Rouleaux précis en acier',
      'Normes ISO 606'
    ],
    applications: [
      'Systèmes de convoyage',
      'Chaînes de transmission',
      'Équipements agro-industriels',
      'Machines d\'emballage',
      'Industrie alimentaire'
    ],
    usesFor: [
      'Transport de charges',
      'Transmission de puissance',
      'Convoyage continu',
      'Systèmes de manipulation'
    ],
  },
  'silent-chain': {
    id: 'silent-chain',
    name: 'Chaînes Silencieuses (Silent Chains / Inverted Tooth Chains)',
    category: 'chains',
    subcategory: 'silent-chains',
    images: ['/products/10-2.jpg'],
    image: '/spherical-roller-bearings.jpg',
    shortDescription: 'Chaînes silencieuses bruit réduit',
    description: 'Chaînes avec dents inversées bruit minimal',
    fullDescription: 'Les chaînes silencieuses avec maillons à dents inversées réduisent considérablement le bruit de fonctionnement.',
    specifications: [
      'Conception dents inversées',
      'Réduction bruit: -15-20dB',
      'Capacité de charge élevée',
      'Longévité supérieure'
    ],
    applications: [
      'Applications sensibles au bruit',
      'Environnements de travail',
      'Équipements hospitaliers',
      'Installations urbaines'
    ],
    usesFor: [
      'Réduction du bruit',
      'Confort acoustique',
      'Conformité réglementaire'
    ],
  },
  'plate-conveyor-chain': {
    id: 'plate-conveyor-chain',
    name: 'Chaînes de Convoyeur à Plaques (Plate Conveyor Chains)',
    category: 'chains',
    subcategory: 'plate-chains',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/10-3.jpg'],
    shortDescription: 'Chaînes à plaques modulables',
    description: 'Chaînes à plaques pour applications spécifiques',
    fullDescription: 'Nos chaînes à plaques sont modulables et conçues pour les applications nécessitant une transmission de puissance précise.',
    specifications: [
      'Pas: 9.525-63.5mm',
      'Charge de rupture: 500-50000 N',
      'Acier allié traité thermiquement',
      'Plaques en acier',
      'Normes ISO 606'
    ],
    applications: [
      'Systèmes de convoyage',
      'Chaînes de transmission',
      'Équipements agro-industriels',
      'Machines d\'emballage',
      'Industrie alimentaire'
    ],
    usesFor: [
      'Transport de charges',
      'Transmission de puissance',
      'Convoyage continu',
      'Systèmes de manipulation'
    ],
  },
  'drag-conveyor-chain': {
    id: 'drag-conveyor-chain',
    name: 'Chaînes de Convoyeur à Raclage (Drag Conveyor Chains)',
    category: 'chains',
    subcategory: 'drag-chains',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/10-4.jpg'],
    shortDescription: 'Chaînes à raclage pour matériaux',
    description: 'Chaînes à raclage pour applications spécifiques',
    fullDescription: 'Nos chaînes à raclage sont conçues pour les applications nécessitant une nettoyage efficace des matériaux transportés.',
    specifications: [
      'Pas: 9.525-63.5mm',
      'Charge de rupture: 500-50000 N',
      'Acier allié traité thermiquement',
      'Rouleaux en acier',
      'Normes ISO 606'
    ],
    applications: [
      'Systèmes de convoyage',
      'Chaînes de transmission',
      'Équipements agro-industriels',
      'Machines d\'emballage',
      'Industrie alimentaire'
    ],
    usesFor: [
      'Nettoyage des matériaux',
      'Transport de charges',
      'Transmission de puissance',
      'Convoyage continu',
      'Systèmes de manipulation'
    ],
  },
  'attachment-conveyor-chain': {
    id: 'attachment-conveyor-chain',
    name: 'Chaînes de Convoyeur avec Attaches (Attachment Conveyor Chains)',
    category: 'chains',
    subcategory: 'attachment-chains',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/10-5.jpg'],
    shortDescription: 'Chaînes avec attaches intégrées',
    description: 'Chaînes avec attaches pour applications spécifiques',
    fullDescription: 'Nos chaînes avec attaches sont intégrées et conçues pour les applications nécessitant une transmission de puissance précise.',
    specifications: [
      'Pas: 9.525-63.5mm',
      'Charge de rupture: 500-50000 N',
      'Acier allié traité thermiquement',
      'Attaches en acier',
      'Normes ISO 606'
    ],
    applications: [
      'Systèmes de convoyage',
      'Chaînes de transmission',
      'Équipements agro-industriels',
      'Machines d\'emballage',
      'Industrie alimentaire'
    ],
    usesFor: [
      'Transmission de puissance',
      'Support de charges',
      'Convoyage continu',
      'Systèmes de manipulation'
    ],
  },
  'pintle-chain': {
    id: 'pintle-chain',
    name: 'Chaînes à Maillons Articulés (Pintle Chains)',
    category: 'chains',
    subcategory: 'pintle-chains',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/10-6.jpg'],
    shortDescription: 'Chaînes à maillons pivotants',
    description: 'Chaînes à maillons articulés pour applications spécifiques',
    fullDescription: 'Nos chaînes à maillons articulés sont conçues pour les applications nécessitant une transmission de puissance précise dans des configurations spécifiques.',
    specifications: [
      'Pas: 9.525-63.5mm',
      'Charge de rupture: 500-50000 N',
      'Acier allié traité thermiquement',
      'Maillons articulés en acier',
      'Normes ISO 606'
    ],
    applications: [
      'Systèmes de convoyage',
      'Chaînes de transmission',
      'Équipements agro-industriels',
      'Machines d\'emballage',
      'Industrie alimentaire'
    ],
    usesFor: [
      'Transmission de puissance',
      'Support de charges',
      'Convoyage continu',
      'Systèmes de manipulation'
    ],
  },
  'stainless-steel-conveyor-chain': {
    id: 'stainless-steel-conveyor-chain',
    name: 'Chaînes de Convoyeur en Acier Inoxydable (Stainless Steel Conveyor Chains)',
    category: 'chains',
    subcategory: 'stainless-chains',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/10-7.jpg'],
    shortDescription: 'Chaînes inoxydables résistantes',
    description: 'Chaînes inoxydables pour applications spécifiques',
    fullDescription: 'Nos chaînes en acier inoxydable sont résistantes et conçues pour les applications nécessitant une longévité exceptionnelle.',
    specifications: [
      'Pas: 9.525-63.5mm',
      'Charge de rupture: 500-50000 N',
      'Acier inoxydable traité thermiquement',
      'Rouleaux en acier',
      'Normes ISO 606'
    ],
    applications: [
      'Systèmes de convoyage',
      'Chaînes de transmission',
      'Équipements agro-industriels',
      'Machines d\'emballage',
      'Industrie alimentaire'
    ],
    usesFor: [
      'Résistance au corrosion',
      'Longévité exceptionnelle',
      'Transport de charges',
      'Transmission de puissance',
      'Convoyage continu'
    ],
  },
  'heavy-duty-conveyor-chain': {
    id: 'heavy-duty-conveyor-chain',
    name: 'Chaînes de Convoyeur pour Charges Lourdes (Heavy Duty Conveyor Chains)',
    category: 'chains',
    subcategory: 'heavy-duty-chains',
    image: '/spherical-roller-bearings.jpg',
    images: ['/products/10-8.jpg'],
    shortDescription: 'Chaînes haute résistance',
    description: 'Chaînes pour charges lourdes pour applications spécifiques',
    fullDescription: 'Nos chaînes pour charges lourdes sont conçues pour résister à des charges importantes tout en assurant une transmission de puissance précise.',
    specifications: [
      'Pas: 9.525-63.5mm',
      'Charge de rupture: 500-50000 N',
      'Acier allié traité thermiquement',
      'Rouleaux en acier dur',
      'Normes ISO 606'
    ],
    applications: [
      'Systèmes de convoyage',
      'Chaînes de transmission',
      'Équipements agro-industriels',
      'Machines d\'emballage',
      'Industrie alimentaire'
    ],
    usesFor: [
      'Support de charges lourdes',
      'Transmission de puissance',
      'Convoyage continu',
      'Systèmes de manipulation'
    ],
  },
}

