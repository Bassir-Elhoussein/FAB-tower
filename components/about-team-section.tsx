export function AboutTeamSection() {
  return (
    <section className="bg-white border-b border-border py-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content with Yellow Circle */}
          <div className="relative">
            {/* Yellow Decorative Circle */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-emerald-300 rounded-full" />

            <div className="relative z-10">
              <h2 className="text-balance mb-6 text-foreground">
                À propos de l'équipe
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
              <br/> <br/>Derrière FAB TOWER se trouve une équipe passionnée et engagée, menée par son fondateur et dirigeant Mohcine El Boukhari, qui cumule plus de 25 ans d’expérience dans le domaine de la fourniture de composants industriels, de la mécanique de précision et des solutions techniques pour les entreprises marocaines.

Grâce à cette expertise solide, notre équipe accompagne les professionnels avec une vision claire, une maîtrise technique éprouvée et un engagement constant envers la qualité et la fiabilité.
Nous travaillons chaque jour pour offrir des solutions adaptées aux besoins de nos clients, en mettant en avant innovation, réactivité et excellence opérationnelle.
              </p>
              
            </div>
          </div>

          {/* Right - Circular Team Photo */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
              <img
                src="/op.JPG"
                alt="Team members"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
