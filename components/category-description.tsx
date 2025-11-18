'use client'

interface CategoryDescriptionProps {
  description: string
}

export function CategoryDescription({ description }: CategoryDescriptionProps) {
  return (
    <div
      className="prose prose-sm max-w-full text-lg text-muted-foreground mb-6 
        [&_p]:mb-4 [&_ul]:mb-4 [&_li]:mb-2 [&_li]:ml-4 [&_strong]:font-semibold"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  )
}
