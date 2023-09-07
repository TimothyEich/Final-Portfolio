import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-base text-zinc-600 dark:text-zinc-200">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20 pd-[5%] ">{children}</div>
    </Container>
  )
}
