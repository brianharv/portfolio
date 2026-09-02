type PlaceholderPageProps = {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <main className="mx-auto min-h-[calc(100svh-4rem)] max-w-[96rem] px-5 py-16 sm:px-8 lg:px-12">
      <p className="font-mono text-xs font-bold tracking-[0.12em] uppercase text-primary">
        Prototype route
      </p>
      <h1 className="mt-5 text-[clamp(4rem,12vw,10rem)] font-bold leading-none tracking-[-0.06em] uppercase">
        {title}
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed">
        This route exists only so the masthead can be exercised during the Home visual-system prototype.
      </p>
    </main>
  )
}
